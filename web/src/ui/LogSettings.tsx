/* İdarəetmə / Jurnal ayarları: which events go to the daily log files, per module; log file viewer. */
import { useEffect, useMemo, useState } from 'react';
import { X, Save, RefreshCw, FileText } from 'lucide-react';
import { loadLogSettings, saveLogSettings, flush, type LogSettings } from '../runtime/audit';

export interface ModuleChoice { name: string; caption: string }

const KINDS: [string, string][] = [
  ['logon', 'Sistemə giriş / çıxış, şirkət seçimi'],
  ['module', 'Modulun açılması / bağlanması'],
  ['form', 'Pəncərələrin (dialoqların) açılması / bağlanması'],
  ['action', 'Düymələr, menyu və qısa yollar'],
  ['change', 'Məlumat dəyişiklikləri (yeni qeyd, dəyişiklik, silinmə, SQL, commit)'],
  ['call', 'Server prosedurlarının çağırılması'],
];

export function LogSettingsPanel({ modules, onClose }: { modules: ModuleChoice[]; onClose: () => void }) {
  const [tab, setTab] = useState<'settings' | 'files'>('settings');
  const [s, setS] = useState<LogSettings | null>(null);
  const [filter, setFilter] = useState('');
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);
  useEffect(() => { void loadLogSettings().then(setS); }, []);

  const shown = useMemo(() => {
    const f = filter.trim().toLowerCase();
    return modules.filter((m) => !f || m.caption.toLowerCase().includes(f) || m.name.toLowerCase().includes(f));
  }, [modules, filter]);

  if (!s) return null;
  const set = (patch: Partial<LogSettings>) => setS({ ...s, ...patch });
  const toggleModule = (name: string, on: boolean) => set({ modules: on ? [...new Set([...s.modules, name])] : s.modules.filter((m) => m !== name) });
  const save = async () => {
    setBusy(true); setMsg('');
    try { setS(await saveLogSettings(s)); setMsg('Yadda saxlanıldı'); } catch (e) { setMsg((e as Error).message); } finally { setBusy(false); }
  };

  return (
    <div className="modal-backdrop" style={{ zIndex: 950 }}>
      <div className="modal logset" role="dialog" aria-modal="true" aria-label="Jurnal ayarları">
        <div className="win-title"><h2>Jurnal ayarları</h2>
          <button className="wbtn close" title="Bağlamaq" onClick={onClose}><X size={15} /></button></div>
        <div className="logset-tabs">
          <button className={tab === 'settings' ? 'on' : ''} onClick={() => setTab('settings')}>Ayarlar</button>
          <button className={tab === 'files' ? 'on' : ''} onClick={() => { void flush(); setTab('files'); }}>Jurnal faylları</button>
        </div>
        {tab === 'settings' ? (
          <div className="logset-body">
            <p className="logset-note">Jurnal serverdə hər gün üçün ayrıca fayla yazılır: <code>logs/smartweb-İİİİ-AA-GG.log</code>.
              {s.updatedAt ? ` Son dəyişiklik: ${new Date(s.updatedAt).toLocaleString('az-AZ')}${s.updatedBy ? ', ' + s.updatedBy : ''}.` : ''}</p>
            <label className="logset-row"><input type="checkbox" checked={s.errors} onChange={(e) => set({ errors: e.target.checked })} />
              <span><b>Daxili xətalar</b> (Access violation və s.) — istifadəçiyə göstərilmir, jurnala yazılır</span></label>
            <label className="logset-row"><input type="checkbox" checked={s.actions} onChange={(e) => set({ actions: e.target.checked })} />
              <span><b>İstifadəçi əməliyyatları</b> — kim, nə vaxt, hansı modulda nə etdi</span></label>
            <fieldset disabled={!s.actions} className="logset-group">
              <legend>Yazılan hadisələr</legend>
              {KINDS.map(([k, label]) => (
                <label key={k} className="logset-row"><input type="checkbox" checked={s.kinds[k] !== false}
                  onChange={(e) => set({ kinds: { ...s.kinds, [k]: e.target.checked } })} /><span>{label}</span></label>
              ))}
            </fieldset>
            <fieldset disabled={!s.actions} className="logset-group">
              <legend>Modullar</legend>
              <label className="logset-row"><input type="radio" checked={s.allModules} onChange={() => set({ allModules: true })} /><span>Bütün modullar</span></label>
              <label className="logset-row"><input type="radio" checked={!s.allModules} onChange={() => set({ allModules: false })} />
                <span>Yalnız seçilmiş modullar ({s.modules.length})</span></label>
              {!s.allModules ? (
                <>
                  <input className="v-input logset-search" placeholder="Modulu axtar" value={filter} onChange={(e) => setFilter(e.target.value)} />
                  <div className="logset-mods">
                    {shown.map((m) => (
                      <label key={m.name} className="logset-row"><input type="checkbox" checked={s.modules.includes(m.name)}
                        onChange={(e) => toggleModule(m.name, e.target.checked)} /><span>{m.caption}</span><small>{m.name}</small></label>
                    ))}
                  </div>
                </>
              ) : null}
            </fieldset>
          </div>
        ) : <LogFiles />}
        <div className="dlg-buttons">
          {tab === 'settings' ? <span className="logset-msg">{msg}</span> : <span />}
          {tab === 'settings' ? <button className="v-btn default" style={{ height: 28, minWidth: 110 }} disabled={busy} onClick={() => void save()}><Save size={14} /> Yadda saxla</button> : null}
          <button className="v-btn" style={{ height: 28, minWidth: 80 }} onClick={onClose}>Bağla</button>
        </div>
      </div>
    </div>
  );
}

function LogFiles() {
  const [files, setFiles] = useState<{ name: string; size: number }[]>([]);
  const [cur, setCur] = useState('');
  const [text, setText] = useState('');
  const [find, setFind] = useState('');
  const [err, setErr] = useState('');
  const load = async () => {
    try {
      const r = await fetch('/applog/files', { cache: 'no-store' });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const list = await r.json();
      setFiles(list);
      if (!cur && list.length) void open(list[0].name);
    } catch (e) { setErr(`Jurnal faylları oxunmadı: ${(e as Error).message}`); }
  };
  const open = async (name: string) => {
    setCur(name);
    const r = await fetch(`/applog/files/${encodeURIComponent(name)}`, { cache: 'no-store' });
    setText(r.ok ? await r.text() : `HTTP ${r.status}`);
  };
  useEffect(() => { void load(); }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const lines = useMemo(() => {
    const all = text.split('\n').filter(Boolean).reverse();
    const f = find.trim().toLowerCase();
    return (f ? all.filter((l) => l.toLowerCase().includes(f)) : all).slice(0, 3000);
  }, [text, find]);
  return (
    <div className="logset-files">
      <div className="logset-filelist">
        {files.map((f) => (
          <button key={f.name} className={f.name === cur ? 'on' : ''} onClick={() => void open(f.name)}>
            <FileText size={13} /> {f.name.replace(/^smartweb-|\.log$/g, '')} <small>{(f.size / 1024).toFixed(1)} KB</small></button>
        ))}
        {!files.length ? <p className="logset-note">{err || 'Hələ jurnal faylı yoxdur.'}</p> : null}
      </div>
      <div className="logset-view">
        <div className="logset-viewbar">
          <input className="v-input" placeholder="Axtar (istifadəçi, modul, mətn)" value={find} onChange={(e) => setFind(e.target.value)} />
          <button className="v-btn" style={{ height: 26 }} onClick={() => { void flush().then(() => { if (cur) void open(cur); }); }} title="Yenilə"><RefreshCw size={13} /></button>
        </div>
        <pre>{lines.join('\n')}</pre>
      </div>
    </div>
  );
}
