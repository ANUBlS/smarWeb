/* Picks an icon for a button/action from its name or caption (ImageList bitmaps are not carried over). */
import {
  Plus, Pencil, Trash2, RefreshCw, XCircle, Filter, Printer, FileSpreadsheet, Save, Search, Check, X, LogOut,
  ArrowUpDown, Eye, FileText, Calculator, Archive, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Lock, Unlock,
  User, Users, Calendar, Copy, Upload, Download, Send, Settings, List, FolderOpen, Banknote, Landmark, Coins,
  Wallet, PiggyBank, Building2, ArrowLeftRight, Undo2, History, ShieldCheck, Play, Square, FileCheck, Info, Ban,
  type LucideIcon,
} from 'lucide-react';

const RULES: [RegExp, LucideIcon][] = [
  [/(^|[^a-z])(add|new|insert|yeni|əlavə|elave|daxil et|yarat)/i, Plus],
  [/(edit|redakt|düzəliş|duzelish|dəyiş|deyish|change|modify)/i, Pencil],
  [/(delete|remove|^sil|silmək|sil$|ləğv et)/i, Trash2],
  [/(refresh|yenilə|yenile|reload|requery)/i, RefreshCw],
  [/(filter|filtr|süzgəc)/i, Filter],
  [/(print|çap|cap |preview)/i, Printer],
  [/(excel|export|ixrac|xls)/i, FileSpreadsheet],
  [/(save|yadda|saxla|post$|qeyd et)/i, Save],
  [/(search|find|axtar|tap)/i, Search],
  [/(^ok$|təsdiq|tesdiq|confirm|apply|qəbul|tətbiq|^bəli)/i, Check],
  [/(cancel|imtina|ləğv|legv|^xeyr)/i, X],
  [/(exit|çıxış|cixis|quit)/i, LogOut],
  [/(order|sort|sıral|sirala)/i, ArrowUpDown],
  [/(view|bax|göstər|goster|show)/i, Eye],
  [/(report|hesabat|statement|çıxarış|cixarish)/i, FileText],
  [/(calc|hesabla|faiz)/i, Calculator],
  [/(archiv|arxiv)/i, Archive],
  [/(first|əvvəl)/i, ChevronsLeft],
  [/(last|son$)/i, ChevronsRight],
  [/(prior|prev|geri)/i, ChevronLeft],
  [/(next|irəli|ireli)/i, ChevronRight],
  [/(unlock|açmaq|aç$|open)/i, Unlock],
  [/(lock|arest|bloka)/i, Lock],
  [/(close|bağla|bagla)/i, XCircle],
  [/(users|istifadəçilər|group)/i, Users],
  [/(user|istifadəçi|operator)/i, User],
  [/(date|tarix|day|gün)/i, Calendar],
  [/(copy|kopya)/i, Copy],
  [/(import|yüklə|load)/i, Upload],
  [/(download|endir)/i, Download],
  [/(send|göndər|gonder)/i, Send],
  [/(setting|parametr|ayar|tuning)/i, Settings],
  [/(list|siyahı)/i, List],
  [/(file|fayl|browse)/i, FolderOpen],
  [/(cash|kassa|nağd)/i, Banknote],
  [/(bank)/i, Landmark],
  [/(currency|valyuta|rate|məzənn)/i, Coins],
  [/(account|hesab)/i, Wallet],
  [/(deposit|depozit)/i, PiggyBank],
  [/(credit|kredit)/i, Building2],
  [/(transfer|köçürmə|transaction|əməliyyat)/i, ArrowLeftRight],
  [/(undo|rollback|qaytar)/i, Undo2],
  [/(history|tarixçə|log)/i, History],
  [/(security|access|icazə|grant)/i, ShieldCheck],
  [/(run|start|execute|icra)/i, Play],
  [/(stop|dayandır)/i, Square],
  [/(check|yoxla)/i, FileCheck],
  [/(about|haqqında|info|məlumat)/i, Info],
  [/(deny|reject|rədd)/i, Ban],
];

export function iconFor(...hints: (string | undefined | null)[]): LucideIcon | null {
  for (const h of hints) {
    if (!h) continue;
    const s = h.replace(/&/g, '').trim();
    if (!s || s === '-') continue;
    for (const [re, ic] of RULES) if (re.test(s)) return ic;
  }
  return null;
}
