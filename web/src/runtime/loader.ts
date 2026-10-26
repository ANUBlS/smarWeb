/*
 * Loads transpiled units (src/generated) into environments and opens module
 * forms the way the SmartBank shell's plugin host did:
 *   create ActiveForm (OnCreate) → Set_Params(name, value)… → InstanceInitialize → UIObjectActivate
 */
import { Env, ClassDef } from './env';
import { makeDollar } from './pascal';
import { rootLookup, defineGlobal, registerEnumNames, getSettingGlobal, setGlobal } from './stdlib';
import { NOTFOUND } from './core';
import { logger } from './log';
import type { DfmNode } from './dfm';
import { Application, Screen, Mouse, Clipboard, TCustomForm, windows } from './vcl/forms';
import { runGuarded } from './vcl/component';
import enumNames from '../generated/enums.json';

// side-effect registrations of builtin classes
import './vcl/classes';
import './vcl/controls';
import './vcl/actions';
import './vcl/dbcontrols';
import './data/fields';
import './data/dataset';
import './data/datasource';
import './data/oracle';

type UnitModule = { default: (dollar: ReturnType<typeof makeDollar>) => unknown };
interface UnitInfo { unit: string; file: string; form: string | null; activeForm: string | null; classes: string[]; source: string }
interface ModuleManifest { name: string; dir: string; mainForm: string | null; units: UnitInfo[]; lib?: string[] }

const unitLoaders = import.meta.glob<UnitModule>('../generated/**/*.js');
const dfmLoaders = import.meta.glob<{ default: DfmNode }>('../generated/**/*.dfm.json');

defineGlobal('Application', Application);
defineGlobal('Screen', Screen);
defineGlobal('Mouse', Mouse);
defineGlobal('Clipboard', Clipboard);
// ActiveX registration objects used in unit initialization sections (no-ops in the browser)
defineGlobal('ComServer', { pget: () => null, pset: () => true });
defineGlobal('Printer', { Printers: [], PrinterIndex: 0, BeginDoc() { /* */ }, EndDoc() { /* */ }, Canvas: {} });
registerEnumNames(enumNames as string[]);

Env.rootGlobals = (l: string) => {
  const s = getSettingGlobal(l);
  if (s !== NOTFOUND) return s;
  return rootLookup(l);
};
// regional settings assignments (DecimalSeparator := ',') land in stdlib settings
const origAssign = Env.prototype.assign;
Env.prototype.assign = function (l: string, v: unknown) {
  if (origAssign.call(this, l, v)) return true;
  return setGlobal(l, v);
};

/* ------------------------------------------------------------------ library env */

let libEnv: Env | null = null;
let libLoading: Promise<Env> | null = null;

async function loadUnits(env: Env, dir: string, units: UnitInfo[]) {
  const $ = makeDollar(env);
  for (const u of units) {
    const key = `../generated/${dir}/${u.file}.js`;
    const loader = unitLoaders[key];
    if (!loader) { logger.warn(`Missing generated unit ${key}`); continue; }
    try {
      const mod = await loader();
      mod.default($);
    } catch (e) {
      logger.error(`Unit ${u.unit} failed to load: ${(e as Error).message}`);
    }
  }
  for (const u of units) {
    if (!u.form) continue;
    const loader = dfmLoaders[`../generated/${dir}/${u.file}.dfm.json`];
    if (!loader) continue;
    const dfm = (await loader()).default;
    const def = env.classes.get(dfm.class.toLowerCase());
    if (def) def.dfm = dfm;
  }
}

let libManifest: UnitInfo[] | null = null;
const libLoaded = new Set<string>();
let libQueue: Promise<unknown> = Promise.resolve();

/** Shared library environment; `files` are the library units a module needs (all when omitted).
 *  Units are loaded once, on first use, and initialized in manifest order like the Delphi RTL. */
export async function getLibEnv(files?: string[]): Promise<Env> {
  if (!libLoading) {
    libLoading = (async () => {
      libManifest = (await import('../generated/lib/index.js')).default as UnitInfo[];
      libEnv = new Env('lib', null);
      return libEnv;
    })();
  }
  const env = await libLoading;
  const want = new Set((files ?? libManifest!.map((u) => u.file)).map((f) => f.toLowerCase()));
  const step = libQueue.then(async () => {
    const todo = libManifest!.filter((u) => want.has(u.file.toLowerCase()) && !libLoaded.has(u.file.toLowerCase()));
    if (!todo.length) return;
    for (const u of todo) libLoaded.add(u.file.toLowerCase());
    await loadUnits(env, 'lib', todo);
    await env.initialize((m) => logger.warn(m));
  });
  libQueue = step.catch(() => undefined);
  await step;
  return env;
}

/** Preload the SmartBank core API units (sboapi50) right after logon. */
export async function warmLib() {
  await getLibEnv([]);
  const core = libManifest!.filter((u) => /\/sboapi50\//i.test((u as any).source ?? '')).map((u) => u.file);
  await getLibEnv(core);
}

/* ------------------------------------------------------------------ module envs */

const moduleManifests = import.meta.glob<{ default: ModuleManifest }>('../generated/modules/*/index.js');
const moduleEnvs = new Map<string, Promise<{ env: Env; manifest: ModuleManifest }>>();

export async function getModule(name: string) {
  let p = moduleEnvs.get(name);
  if (!p) {
    p = (async () => {
      const m = moduleManifests[`../generated/modules/${name}/index.js`];
      if (!m) throw new Error(`Module ${name} is not generated`);
      const manifest = (await m()).default;
      const lib = await getLibEnv(manifest.lib);
      const env = new Env(name, lib);
      await loadUnits(env, `modules/${name}`, manifest.units);
      await env.initialize((msg) => logger.warn(msg));
      return { env, manifest };
    })();
    moduleEnvs.set(name, p);
  }
  return p;
}

/** Open (or re-activate) a module window for a tree node. */
export async function openModule(name: string, params: Record<string, string>, caption: string): Promise<TCustomForm | null> {
  const key = `${name}|${JSON.stringify(params)}`;
  const existing = windows.byKey(key);
  if (existing) { windows.activate(existing.id); return existing.form; }
  const { env, manifest } = await getModule(name);
  if (!manifest.mainForm) { logger.error(`${name}: no ActiveForm found`); return null; }
  const def = env.findClass(manifest.mainForm) as ClassDef;
  let form: TCustomForm | null = null;
  await runGuarded(async () => {
    form = (await env.createInstance(def, [null])) as TCustomForm;
  }, `${name}.Create`);
  if (!form) return null;
  const f = form as TCustomForm;
  f.isModuleForm = true;
  f.FormStyle = 'fsmdichild';
  if (!f.Caption || f.Caption === f.Name) f.Caption = params.Caption ?? caption;
  // IParamInput / IUIObject protocol
  const setParams = def.findMethod('set_params');
  if (setParams) for (const [k, v] of Object.entries(params)) await runGuarded(() => setParams(f, k, v), `${name}.Set_Params`);
  const init = def.findMethod('instanceinitialize');
  if (init) await runGuarded(() => init(f), `${name}.Initialize`);
  if (params.Caption) f.Caption = params.Caption;
  windows.add(f, 'module', key);
  (f as any).shown = true;
  const act = def.findMethod('uiobjectactivate');
  if (act) await runGuarded(() => act(f), `${name}.Activate`);
  await f.fire('OnShow', f);
  await f.fire('OnActivate', f);
  return f;
}

export async function closeModuleWindow(form: TCustomForm) {
  await runGuarded(() => form.Close(), `${form.Name}.Close`);
}

export { windows };
