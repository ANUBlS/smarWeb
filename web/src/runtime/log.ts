/** Output log ("Çıxışlar" panel in the original shell). */
export type LogLevel = 'info' | 'warn' | 'error' | 'debug' | 'api';
export interface LogEntry { id: number; time: Date; level: LogLevel; msg: string }

type Listener = () => void;
let seq = 0;
const entries: LogEntry[] = [];
const listeners = new Set<Listener>();
const MAX = 2000;

function push(level: LogLevel, msg: string) {
  entries.push({ id: ++seq, time: new Date(), level, msg });
  if (entries.length > MAX) entries.splice(0, entries.length - MAX);
  if (level === 'error' || level === 'warn') (level === 'error' ? console.error : console.warn)(msg);
  listeners.forEach((l) => l());
}

export const logger = {
  info: (m: string) => push('info', m),
  warn: (m: string) => push('warn', m),
  error: (m: string) => push('error', m),
  debug: (m: string) => push('debug', m),
  api: (m: string) => push('api', m),
  entries: () => entries,
  clear: () => { entries.length = 0; listeners.forEach((l) => l()); },
  subscribe(l: Listener) { listeners.add(l); return () => { listeners.delete(l); }; },
};
