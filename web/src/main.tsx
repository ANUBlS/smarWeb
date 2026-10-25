import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/ibm-plex-sans/latin-400.css';
import '@fontsource/ibm-plex-sans/latin-ext-400.css';
import '@fontsource/ibm-plex-sans/latin-500.css';
import '@fontsource/ibm-plex-sans/latin-ext-500.css';
import '@fontsource/ibm-plex-sans/latin-600.css';
import '@fontsource/ibm-plex-sans/latin-ext-600.css';
import './ui/theme.css';
import './runtime/loader';
import App from './ui/App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);

// test hooks (used by tools/smoke.py)
import { logger } from './runtime/log';
(window as any).__sbLog = () => logger.entries().map((e) => ({ level: e.level, msg: e.msg }));
(window as any).__sbLogClear = () => logger.clear();
import { windows } from './runtime/vcl/forms';
(window as any).__sbWindows = windows;
