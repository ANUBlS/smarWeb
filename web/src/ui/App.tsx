/* SmartBank web shell: logon → company → main frame (menu tree, MDI workspace, task bar, output log). */
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import {
  ChevronDown, ChevronRight, Folder, FolderOpen, FileText, LayoutGrid, Search, X, Loader2,
} from 'lucide-react';
import menuData from '../generated/menu.json';
import { api } from '../api';
import { oraSession } from '../runtime/data/oracle';
import { openModule, warmLib } from '../runtime/loader';
import { windows, Application } from '../runtime/vcl/forms';
import { TAction, TActionList, TMenuItem } from '../runtime/vcl/actions';
import { runGuarded } from '../runtime/vcl/component';
import { logger, type LogEntry } from '../runtime/log';
import { useScreenCursor, useTick, beginHold, endHold } from '../runtime/ui';
import { messageDlg, showMessage, inputQuery } from '../runtime/dialogs';
import { formatDateTime, todayDelphi } from '../runtime/datetime';
import { MenuBar, type MenuSpec } from './MenuView';
import { Workspace, ModalLayer, DialogLayer, PopupLayer, ToastLayer, useWindows } from './Windows';

interface MenuNode { caption: string; action: number | null; params: Record<string, string>; children: MenuNode[] }
const TREE = (menuData as { tree: MenuNode[] }).tree;
const ACTIONS = (menuData as { actions: Record<string, string> }).actions;
const REPORTS = new Set((menuData as { reportActions: number[] }).reportActions);
const PRODUCT = 'SmartBank';

/* ------------------------------------------------------------------ logon */

function Logon({ onDone }: { onDone: (company: string) => void }) {
  const [user, setUser] = useState(() => localStorage.getItem('sb:user') ?? '');
  const [pass, setPass] = useState('');
  const [db, setDb] = useState('SB-CURRENT');
  const [step, setStep] = useState<'logon' | 'company'>('logon');
  const [companies, setCompanies] = useState<{ id: number; name: string }[]>([]);
  const [company, setCompany] = useState(0);
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);

  const logon = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr('');
    setBusy(true);
    try {
      const r = await api.logon({ username: user, password: pass, database: db });
      Object.assign(oraSession, { connected: true, username: r.username, password: pass, database: r.database, sid: r.sid, serverDate: r.serverDate });
      localStorage.setItem('sb:user', user);
      // same statement as sbMainForm.company_list
      const q = await api.query({ source: 'TsbMainForm.company_list', sql: 'select * from companies order by company_name', variables: [],
        fieldHints: [{ name: 'ID', type: 'integer' }, { name: 'COMPANY_NAME', type: 'string', size: 100 }] });
      const list = q.rows.map((row) => ({ id: Number(row[0]), name: String(row[1]) }));
      void warmLib();
      if (list.length > 1) { setCompanies(list); setCompany(list[0].id); setStep('company'); }
      else onDone(list[0]?.name ?? '');
    } catch (ex) {
      setErr((ex as Error).message);
    } finally { setBusy(false); }
  };
  const chooseCompany = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const c = companies.find((x) => x.id === company)!;
    try {
      await api.execute({ source: 'TsbMainForm.SetCompany', sql: 'begin sb_adm.set_company(:COMP_ID); end;', variables: [{ name: 'COMP_ID', type: 'integer', value: c.id }] });
      onDone(c.name);
    } catch (ex) { setErr((ex as Error).message); } finally { setBusy(false); }
  };
  const today = formatDateTime('dd.mm.yyyy', todayDelphi());
  return (
    <div className="login">
      <div className="left">
        <div>
          <h1>Əməliyyat günü {today}</h1>
          <p>SmartBank-ın veb versiyası. Bütün əməliyyatlar əvvəlki kimi Oracle bazasında, eyni paketlər və prosedurlarla icra olunur.</p>
        </div>
        <div className="ledger" aria-hidden="true">
          <div><span>Balans</span><span>Əməliyyat günü · Müştərilər · Hesabatlar</span></div>
          <div><span>Kreditlər</span><span>İdarəetmə · Düzəlişlər · Arxiv</span></div>
          <div><span>Depozitlər</span><span>İdarəetmə · Düzəlişlər · Arxiv</span></div>
          <div><span>Məlumatlar</span><span>Valyutalar · Balans hesabları · Banklar</span></div>
        </div>
      </div>
      <div className="right">
        {step === 'logon' ? (
          <form onSubmit={logon}>
            <h2>Sistemə giriş</h2>
            <label>İstifadəçi<input autoFocus value={user} onChange={(e) => setUser(e.target.value)} autoComplete="username" /></label>
            <label>Şifrə<input type="password" value={pass} onChange={(e) => setPass(e.target.value)} autoComplete="current-password" /></label>
            <label>Baza
              <select value={db} onChange={(e) => setDb(e.target.value)}>
                <option>SB-CURRENT</option><option>SB-TEST</option><option>SB-ARCHIVE</option>
              </select>
            </label>
            {err ? <div className="err" role="alert">{err}</div> : null}
            <button className="primary" disabled={busy || !user}>{busy ? 'Qoşulur…' : 'Daxil ol'}</button>
            {api.name === 'mock' ? <div className="note">Demo rejimi: məlumatlar test generatorundan gəlir. İstənilən istifadəçi adı ilə daxil olmaq olar.</div> : null}
          </form>
        ) : (
          <form onSubmit={chooseCompany}>
            <h2>Şirkəti seçin</h2>
            <label>Şirkət
              <select value={company} onChange={(e) => setCompany(Number(e.target.value))}>
                {companies.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </label>
            {err ? <div className="err" role="alert">{err}</div> : null}
            <button className="primary" disabled={busy}>Davam et</button>
          </form>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ tree */

function nodeKey(path: number[]) { return path.join('.'); }

function TreeNodeView({ n, path, depth, sel, open, onToggle, onSelect, filter }: {
  n: MenuNode; path: number[]; depth: number; sel: string; open: Set<string>; onToggle: (k: string) => void;
  onSelect: (n: MenuNode, k: string, path: number[]) => void; filter: string;
}) {
  const k = nodeKey(path);
  const hasKids = n.children.length > 0;
  const matches = (x: MenuNode): boolean => x.caption.toLowerCase().includes(filter) || x.children.some(matches);
  if (filter && !matches(n)) return null;
  const isOpen = filter ? true : open.has(k);
  const isReport = n.action !== null && REPORTS.has(n.action);
  const Ic = hasKids ? (isOpen ? FolderOpen : Folder) : isReport ? FileText : LayoutGrid;
  return (
    <>
      <div className={`tnode${sel === k ? ' sel' : ''}${isReport ? ' report' : ''}${depth === 0 ? ' section' : ''}`} style={{ ['--d' as any]: depth }}
        role="treeitem" data-path={k} aria-expanded={hasKids ? isOpen : undefined} aria-selected={sel === k} tabIndex={sel === k ? 0 : -1}
        onClick={() => { onSelect(n, k, path); if (hasKids && !isOpen) onToggle(k); }}
        onKeyDown={(e) => { if (e.key === 'Enter') onSelect(n, k, path); if (e.key === 'ArrowRight' && hasKids && !isOpen) onToggle(k); if (e.key === 'ArrowLeft' && isOpen) onToggle(k); }}>
        <span className="tw" onClick={(e) => { e.stopPropagation(); if (hasKids) onToggle(k); }}>{hasKids ? (isOpen ? <ChevronDown size={13} /> : <ChevronRight size={13} />) : null}</span>
        <span className="ic"><Ic size={14} /></span>
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{n.caption}</span>
      </div>
      {hasKids && isOpen ? n.children.map((c, i) => (
        <TreeNodeView key={i} n={c} path={[...path, i]} depth={depth + 1} sel={sel} open={open} onToggle={onToggle} onSelect={onSelect} filter={filter} />
      )) : null}
    </>
  );
}

/* ------------------------------------------------------------------ splash (section landing) */

function Splash({ node, trail, onOpen }: { node: MenuNode | null; trail: string[]; onOpen: (n: MenuNode, path: number[]) => void }) {
  const n = node ?? { caption: 'SmartBank', action: null, params: {}, children: TREE };
  const isReport = n.action !== null && REPORTS.has(n.action);
  const leafUnmapped = n.action !== null && n.action !== 0 && !isReport && !ACTIONS[String(n.action)];
  return (
    <div className="splash">
      <h1>{n.caption}</h1>
      <div className="crumb">{trail.length ? trail.join(' / ') : `Əməliyyat günü ${formatDateTime('dd.mm.yyyy', todayDelphi())}`}</div>
      {isReport ? <div className="notice">Bu bölmə hesabatdır. Hesabatlar növbəti mərhələdə köçürüləcək; məlumatların özü digər bölmələrdə əlçatandır.</div> : null}
      {leafUnmapped ? <div className="notice">Bu menyu bəndinin modulu proqram konfiqurasiyasında tapılmadı.</div> : null}
      {n.children.length ? (
        <ul>
          {n.children.map((c, i) => {
            const rep = c.action !== null && REPORTS.has(c.action);
            return (
              <li key={i}>
                <button onClick={() => onOpen(c, [i])} className={rep ? 'pending' : undefined}>
                  {c.children.length ? <Folder size={15} /> : rep ? <FileText size={15} /> : <LayoutGrid size={15} />}
                  {c.caption}
                  <span className="k">{c.children.length ? `${c.children.length} bənd` : rep ? 'hesabat' : ''}</span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ log panel */

function LogPanel({ onClose }: { onClose: () => void }) {
  const entries = useSyncExternalStore(logger.subscribe, () => logger.entries().length);
  const [level, setLevel] = useState<'all' | 'noDebug' | 'api' | 'problems'>('noDebug');
  const list = logger.entries().filter((e: LogEntry) => level === 'all' ? true : level === 'api' ? e.level === 'api'
    : level === 'problems' ? e.level === 'warn' || e.level === 'error' : e.level !== 'debug');
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { ref.current?.scrollTo(0, ref.current.scrollHeight); }, [entries, level]);
  return (
    <section className="logpanel" aria-label="Çıxışlar">
      <header>
        <span>Çıxışlar</span>
        <select value={level} onChange={(e) => setLevel(e.target.value as typeof level)} aria-label="Süzgəc">
          <option value="noDebug">Ümumi</option><option value="api">Oracle sorğuları</option><option value="problems">Xəbərdarlıqlar</option><option value="all">Hamısı (debug)</option>
        </select>
        <span style={{ flex: 1 }} />
        <button onClick={() => logger.clear()}>Təmizlə</button>
        <button onClick={onClose} aria-label="Bağla"><X size={14} /></button>
      </header>
      <div className="loglist" ref={ref}>
        {list.slice(-500).map((e) => (
          <div key={e.id} className={`logrow ${e.level}`}>
            <span className="t">{e.time.toLocaleTimeString('az-AZ')}</span><span className="l">{e.level}</span><span>{e.msg}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ main frame */

function MainFrame({ company, onLogoff }: { company: string; onLogoff: () => void }) {
  useTick();
  const list = useWindows();
  const [showTree, setShowTree] = useState(true);
  const [showTaskbar, setShowTaskbar] = useState(true);
  const [showLog, setShowLog] = useState(false);
  const [sel, setSel] = useState('');
  const [selNode, setSelNode] = useState<{ node: MenuNode; trail: string[] } | null>(null);
  const [open, setOpen] = useState<Set<string>>(new Set(['0', '0.0']));
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState('');
  const [treeW, setTreeW] = useState(236);
  const cursor = useScreenCursor();

  useEffect(() => { document.body.classList.toggle('busy', cursor === -11 || cursor === -17 || cursor === -19); }, [cursor]);
  useEffect(() => {
    document.title = `${PRODUCT} [${formatDateTime('dd-mmm-yyyy', todayDelphi())}]`;
    Application.Title = PRODUCT;
  }, []);

  // Action OnUpdate on idle for the active form (Delphi calls it from Application.Idle)
  useEffect(() => {
    let alive = true;
    const loop = async () => {
      while (alive) {
        await new Promise((r) => setTimeout(r, 450));
        const w = windows.list.find((x) => x.id === windows.activeId) ?? windows.modalTop();
        const top = windows.modalTop() ?? w;
        if (!top) continue;
        beginHold();
        try { for (const c of top.form.owned) if (c instanceof TActionList) await c.updateAll(); } finally { endHold(); }
      }
    };
    void loop();
    return () => { alive = false; };
  }, []);

  // Action / menu shortcuts for the active form
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      const key = e.keyCode;
      if ([16, 17, 18].includes(key)) return;
      const code = key | (e.shiftKey ? 0x2000 : 0) | (e.ctrlKey ? 0x4000 : 0) | (e.altKey ? 0x8000 : 0);
      if (e.ctrlKey && e.shiftKey && !e.altKey) {
        if (e.key.toUpperCase() === 'W') { e.preventDefault(); setShowTree((s) => !s); return; }
        if (e.key.toUpperCase() === 'T') { e.preventDefault(); setShowTaskbar((s) => !s); return; }
        if (e.key.toUpperCase() === 'L') { e.preventDefault(); setShowLog((s) => !s); return; }
      }
      const top = windows.modalTop() ?? windows.list.find((x) => x.id === windows.activeId);
      if (!top) return;
      const act = top.form.owned.find((c) => (c instanceof TAction || c instanceof TMenuItem) && (c as any).ShortCut === code && (c as any).Enabled);
      if (act) {
        e.preventDefault();
        void runGuarded(async () => { if (act instanceof TAction) await act.execFrom(null); else await (act as TMenuItem).Click(); }, act.Name);
      }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);

  const select = async (n: MenuNode, k: string, trail: string[]) => {
    setSel(k);
    if (n.action === null || n.action === 0 || REPORTS.has(n.action) || !ACTIONS[String(n.action)]) {
      setSelNode({ node: n, trail });
      windows.activeId = 0;
      windows.emit();
      return;
    }
    const mod = ACTIONS[String(n.action)];
    setLoading(n.caption);
    try {
      await openModule(mod, n.params, n.caption);
    } catch (e) {
      logger.error(`${mod}: ${(e as Error).message}`);
      void showMessage(`Modul açıla bilmədi: ${(e as Error).message}`);
    } finally { setLoading(''); }
  };

  const trailOf = (path: number[]) => {
    const out: string[] = [];
    let nodes = TREE;
    for (const i of path) { out.push(nodes[i].caption); nodes = nodes[i].children; }
    return out;
  };
  const onSelectTree = (n: MenuNode, k: string, path: number[]) => void select(n, k, trailOf(path).slice(0, -1));
  const onSplashOpen = (n: MenuNode, rel: number[]) => {
    const base = sel ? sel.split('.').map(Number) : [];
    const path = selNode ? [...base, ...rel] : rel;
    const k = nodeKey(path);
    setOpen((o) => new Set([...o, ...path.map((_, i) => nodeKey(path.slice(0, i + 1)))]));
    void select(n, k, trailOf(path).slice(0, -1));
  };

  const mdi = list.filter((w) => w.kind !== 'modal');
  const closeAll = async () => { for (const w of [...mdi]) await runGuarded(() => w.form.Close(), w.form.Name); };
  const arrange = (mode: 'v' | 'h' | 'c') => {
    const ws = mdi.filter((w) => !w.minimized);
    const box = document.querySelector('.workspace')?.getBoundingClientRect();
    if (!box || !ws.length) return;
    ws.forEach((w, i) => {
      w.maximized = false;
      if (mode === 'c') { w.x = 20 + i * 26; w.y = 20 + i * 26; w.w = box.width * 0.7; w.h = box.height * 0.7 - 31; }
      else if (mode === 'v') { const cw = box.width / ws.length; w.x = i * cw; w.y = 0; w.w = cw; w.h = box.height - 31; }
      else { const ch = box.height / ws.length; w.x = 0; w.y = i * ch; w.w = box.width; w.h = ch - 31; }
    });
    windows.emit();
  };
  const changePassword = async () => {
    const a = await inputQuery('Şifrənin dəyişdirilməsi', 'Yeni şifrə', '');
    if (!a.ok || !a.value) return;
    const b = await inputQuery('Şifrənin dəyişdirilməsi', 'Yeni şifrəni təkrar daxil edin', '');
    if (!b.ok) return;
    if (a.value !== b.value) { await messageDlg('Şifrələr eyni deyil', 1, ['mbOK']); return; }
    await api.execute({ source: 'TPasswordChange', sql: `alter user ${oraSession.username} identified by "${a.value.replace(/"/g, '')}"`, variables: [] });
    await showMessage('Şifrə dəyişdirildi');
  };

  const menu: MenuSpec[] = [
    { caption: 'Proqram', children: [{ caption: 'Çıxış', onClick: async () => { if (await messageDlg('Proqramdan çıxmaq?', 3, ['mbYes', 'mbNo']) === 6) { await closeAll(); onLogoff(); } } }] },
    { caption: 'Sessiya', children: [
      { caption: 'Yenidən qoşulmaq', onClick: async () => { await api.logon({ username: oraSession.username, password: oraSession.password, database: oraSession.database }); logger.info('Yenidən qoşuldu'); } },
      { caption: '-', separator: true },
      { caption: 'Şifrənin dəyişdirilməsi', onClick: () => void changePassword() },
    ] },
    { caption: 'Görünüş', children: [
      { caption: 'İş yeri', checked: showTree, shortcut: 'Ctrl+Shift+W', onClick: () => setShowTree((s) => !s) },
      { caption: 'Əməliyyatlar menyusu', checked: showTaskbar, shortcut: 'Ctrl+Shift+T', onClick: () => setShowTaskbar((s) => !s) },
      { caption: 'Çıxışlar', checked: showLog, shortcut: 'Ctrl+Shift+L', onClick: () => setShowLog((s) => !s) },
    ] },
    { caption: 'Pəncərələr', children: [
      { caption: 'Düzülüş (vertikal)', onClick: () => arrange('v') },
      { caption: 'Düzülüş (horizontal)', onClick: () => arrange('h') },
      { caption: 'Kaskad', onClick: () => arrange('c') },
      { caption: 'Aşağı endirmək', onClick: () => { mdi.forEach((w) => { w.minimized = true; }); windows.activeId = 0; windows.emit(); } },
      { caption: 'Bağlamaq', enabled: !!windows.activeId, onClick: () => { const w = mdi.find((x) => x.id === windows.activeId); if (w) void runGuarded(() => w.form.Close(), w.form.Name); } },
      { caption: 'Hamısını bağlamaq', enabled: mdi.length > 0, onClick: () => void closeAll() },
      ...(mdi.length ? [{ caption: '-', separator: true } as MenuSpec] : []),
      ...mdi.map((w) => ({ caption: w.form.Caption, checked: w.id === windows.activeId, onClick: () => windows.activate(w.id) })),
    ] },
    { caption: 'Kömək', children: [{ caption: 'Proqram haqqında...', onClick: () => void showMessage(`${PRODUCT} 4.0 (veb)\nCopyright 1996-2026, Smart Systems Technology, Ltd.\n\nOracle: ${oraSession.database} · ${oraSession.username} · SID ${oraSession.sid}\nAPI: ${api.name}`) }] },
    { caption: 'Şirkətlər', children: [{ caption: company, checked: true }] },
  ];

  return (
    <div className="shell">
      <div className="menubar">
        <span className="brand">{PRODUCT}<small>{formatDateTime('dd-mmm-yyyy', todayDelphi())}</small></span>
        <MenuBar items={menu} className="mbar-inner" />
        <span className="spacer" />
        <span className="meta"><span>{company}</span><span>{oraSession.username}@{oraSession.database}</span></span>
      </div>
      <div className={`body${showTree ? '' : ' no-tree'}`} style={{ ['--tree-w' as any]: `${treeW}px` }}>
        <nav className="tree-panel" aria-label="Menyu" hidden={!showTree}>
          <div className="tree-head">
            <Search size={14} color="var(--muted)" />
            <input placeholder="Menyuda axtar" value={filter} onChange={(e) => setFilter(e.target.value.toLowerCase())} aria-label="Menyuda axtar" />
          </div>
          <div className="tree" role="tree">
            {TREE.map((n, i) => (
              <TreeNodeView key={i} n={n} path={[i]} depth={0} sel={sel} open={open} filter={filter}
                onToggle={(k) => setOpen((o) => { const s = new Set(o); if (s.has(k)) s.delete(k); else s.add(k); return s; })}
                onSelect={onSelectTree} />
            ))}
          </div>
        </nav>
        <div className="splitter-v" onPointerDown={(e) => {
          const sx = e.clientX, sw = treeW;
          const mv = (ev: PointerEvent) => setTreeW(Math.max(160, Math.min(520, sw + ev.clientX - sx)));
          const up = () => { window.removeEventListener('pointermove', mv); window.removeEventListener('pointerup', up); };
          window.addEventListener('pointermove', mv); window.addEventListener('pointerup', up);
        }} />
        <div style={{ position: 'relative', minWidth: 0, display: 'flex', flexDirection: 'column' }}>
          <Workspace splash={<Splash node={selNode?.node ?? null} trail={selNode?.trail ?? []} onOpen={onSplashOpen} />} />
          {loading ? <div className="loading" style={{ pointerEvents: 'none' }}><Loader2 size={16} className="spin" />&nbsp;{loading} açılır…</div> : null}
        </div>
      </div>
      <div>
        {showLog ? <LogPanel onClose={() => setShowLog(false)} /> : null}
        {showTaskbar ? (
          <div className="taskbar" role="toolbar" aria-label="Açıq pəncərələr">
            {mdi.length === 0 ? <span style={{ color: 'var(--muted)', padding: '4px 4px' }}>Açıq pəncərə yoxdur — sol menyudan bölmə seçin</span> : null}
            {mdi.map((w) => (
              <button key={w.id} className={`task${w.id === windows.activeId && !w.minimized ? ' active' : ''}${w.minimized ? ' min' : ''}`}
                onClick={() => { if (w.id === windows.activeId && !w.minimized) { w.minimized = true; windows.activeId = 0; windows.emit(); } else windows.activate(w.id); }}>
                <span>{w.form.Caption || w.form.Name}</span>
                <span className="x" role="button" aria-label="Bağla" onClick={(e) => { e.stopPropagation(); void runGuarded(() => w.form.Close(), w.form.Name); }}><X size={12} /></span>
              </button>
            ))}
          </div>
        ) : null}
      </div>
      <div className="statusline">
        <span>{oraSession.username} · {oraSession.database} · SID {oraSession.sid}</span>
        <span>{mdi.length} pəncərə</span>
        {cursor !== 0 ? <span className="busy">Sorğu icra olunur…</span> : null}
        <span style={{ flex: 1 }} />
        {api.name === 'mock' ? <span className="mock">Test məlumatları (mock API)</span> : <span>API: {api.name}</span>}
        <button style={{ border: 0, background: 'none', color: 'inherit', padding: 0 }} onClick={() => setShowLog((s) => !s)}>Çıxışlar</button>
      </div>
      <ModalLayer />
      <PopupLayer />
      <DialogLayer />
      <ToastLayer />
    </div>
  );
}

export default function App() {
  const [company, setCompany] = useState<string | null>(null);
  const content = useMemo(() => company === null
    ? <><Logon onDone={(c) => setCompany(c)} /><DialogLayer /></>
    : <MainFrame company={company} onLogoff={() => { oraSession.connected = false; setCompany(null); }} />, [company]);
  return content;
}
