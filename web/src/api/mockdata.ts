/* Deterministic mock entities for the SmartBank demo backend. */

export function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
export const pick = <T>(arr: T[], seed: string): T => arr[hash(seed) % arr.length];
export const rnd = (seed: string) => hash(seed) / 4294967296;

export const CURRENCIES = [
  { code: 944, sname: 'AZN', name: 'Azərbaycan manatı', rate: 1 },
  { code: 840, sname: 'USD', name: 'ABŞ dolları', rate: 1.7 },
  { code: 978, sname: 'EUR', name: 'Avro', rate: 1.8484 },
  { code: 643, sname: 'RUB', name: 'Rusiya rublu', rate: 0.0189 },
  { code: 826, sname: 'GBP', name: 'Britaniya funt sterlinqi', rate: 2.1602 },
  { code: 949, sname: 'TRY', name: 'Türkiyə lirəsi', rate: 0.0519 },
];

export const FILIALS = [
  { id: 1, name: 'Mərkəz filialı', code: '001' },
  { id: 2, name: 'Nərimanov filialı', code: '002' },
  { id: 3, name: 'Yasamal filialı', code: '003' },
  { id: 4, name: 'Gəncə filialı', code: '004' },
  { id: 5, name: 'Sumqayıt filialı', code: '005' },
];

const COMPANY_ROOTS = ['Azər Tikinti', 'Kaspi Logistika', 'Şirvan Aqro', 'Qafqaz Ticarət', 'Nur Pharma', 'Ulduz Tekstil',
  'Xəzər Balıq', 'Avrora Servis', 'Gilan İnşaat', 'Bakı Enerji', 'Qarabağ Taxıl', 'Sahil Turizm', 'Dəniz Neft Servis',
  'Abşeron Su', 'Göygöl Meyvə', 'Lənkəran Çay', 'İpək Yolu Trans', 'Mingəçevir Kabel', 'Zəfər Mebel', 'Ay-Ulduz Media'];
const COMPANY_FORMS = ['MMC', 'ASC', 'QSC', 'MMC', 'MMC'];
const FIRST_M = ['Elvin', 'Orxan', 'Fərid', 'Tural', 'Rövşən', 'Kamal', 'Rəşad', 'Nicat', 'Elnur', 'Vüqar', 'Samir', 'Murad', 'Cavid', 'Teymur', 'Həsən'];
const FIRST_F = ['Günel', 'Aysel', 'Leyla', 'Nərmin', 'Səbinə', 'Aynur', 'Lalə', 'Nigar', 'Könül', 'Fidan', 'Şəbnəm'];
const LAST = ['Məmmədov', 'Əliyev', 'Hüseynov', 'Quliyev', 'Kərimov', 'Abbasov', 'Rzayev', 'Nəsirov', 'Səfərov', 'Babayev', 'İsmayılov', 'Həsənov', 'Cəfərov', 'Vəliyev', 'Orucov'];
const PATRON = ['Rəşid', 'Tofiq', 'Vaqif', 'Elçin', 'Rauf', 'Nazim', 'Kamran', 'Malik', 'İlqar', 'Arif', 'Zakir', 'Fikrət'];
const STREETS = ['Nizami küç.', 'Füzuli küç.', 'Azadlıq pr.', 'Neftçilər pr.', 'Həsən bəy Zərdabi küç.', 'Ə.Rəcəbli küç.', 'Bülbül pr.', 'Səməd Vurğun küç.', 'Atatürk pr.', 'Təbriz küç.'];
const CITIES = ['Bakı', 'Bakı', 'Bakı', 'Gəncə', 'Sumqayıt', 'Lənkəran', 'Şəki', 'Mingəçevir'];

export interface Customer { id: number; name: string; legal: boolean; inn: string; address: string; phone: string; filial: number; regDate: number }
export const CUSTOMERS: Customer[] = Array.from({ length: 80 }, (_, i) => {
  const legal = i % 3 !== 2;
  const seed = 'cust' + i;
  let name: string;
  if (legal) {
    name = `${COMPANY_ROOTS[i % COMPANY_ROOTS.length]}${i >= COMPANY_ROOTS.length ? ' ' + (Math.floor(i / COMPANY_ROOTS.length) + 1) : ''} ${pick(COMPANY_FORMS, seed + 'f')}`;
  } else {
    const female = hash(seed + 'g') % 2 === 0;
    const last = pick(LAST, seed + 'l') + (female ? 'a' : '');
    name = `${last} ${pick(female ? FIRST_F : FIRST_M, seed + 'n')} ${pick(PATRON, seed + 'p')} ${female ? 'qızı' : 'oğlu'}`;
  }
  return {
    id: 1000 + i + 1,
    name,
    legal,
    inn: String(1000000000 + (hash(seed + 'inn') % 899999999)),
    address: `${pick(CITIES, seed + 'c')} ş., ${pick(STREETS, seed + 's')} ${1 + (hash(seed + 'h') % 180)}`,
    phone: `+994 ${pick(['12', '50', '51', '55', '70', '77', '99'], seed + 'op')} ${100 + (hash(seed + 'ph') % 900)} ${10 + (hash(seed + 'p2') % 90)} ${10 + (hash(seed + 'p3') % 90)}`,
    filial: 1 + (hash(seed + 'fil') % FILIALS.length),
    regDate: 0,
  };
});

export const BAL_ACCOUNTS = [
  { code: 1001, name: 'Kassa' },
  { code: 1101, name: 'Mərkəzi Bankda müxbir hesab' },
  { code: 1201, name: 'Digər banklarda nostro hesablar' },
  { code: 1401, name: 'Hüquqi şəxslərə qısamüddətli kreditlər' },
  { code: 1411, name: 'Fiziki şəxslərə istehlak kreditləri' },
  { code: 1431, name: 'Vaxtı keçmiş kreditlər' },
  { code: 1501, name: 'Hesablanmış faiz gəlirləri' },
  { code: 1701, name: 'Əsas vəsaitlər' },
  { code: 2001, name: 'Hüquqi şəxslərin cari hesabları' },
  { code: 2101, name: 'Fiziki şəxslərin cari hesabları' },
  { code: 2201, name: 'Hüquqi şəxslərin müddətli depozitləri' },
  { code: 2211, name: 'Fiziki şəxslərin müddətli depozitləri' },
  { code: 2501, name: 'Hesablanmış faiz xərcləri' },
  { code: 3001, name: 'Nizamnamə kapitalı' },
  { code: 3301, name: 'Bölüşdürülməmiş mənfəət' },
  { code: 4001, name: 'Kreditlər üzrə faiz gəlirləri' },
  { code: 4501, name: 'Komissiya gəlirləri' },
  { code: 5001, name: 'Depozitlər üzrə faiz xərcləri' },
  { code: 5501, name: 'Əməliyyat xərcləri' },
];

export const BANKS = [
  ['Kapital Bank ASC', 'AIIBAZ2X', '200112'], ['PAŞA Bank ASC', 'PAHAAZ22', '505141'], ['Azərbaycan Beynəlxalq Bankı', 'IBAZAZ2X', '805250'],
  ['Bank Respublika ASC', 'BRESAZ22', '505668'], ['Rabitəbank ASC', 'RBTAAZ22', '506399'], ['Xalq Bank ASC', 'HAJCAZ22', '506680'],
  ['AccessBank QSC', 'ACABAZ22', '505000'], ['Unibank KB ASC', 'UBAZAZ22', '505754'], ['Yelo Bank ASC', 'NIKOAZ22', '507699'],
  ['Expressbank ASC', 'EXBKAZ22', '505129'], ['Bank of Baku ASC', 'JBBKAZ22', '506924'], ['Turanbank ASC', 'TURAAZ22', '507064'],
  ['Muğanbank ASC', 'MUGAAZ22', '506882'], ['AFB Bank ASC', 'AFBAAZ22', '506522'], ['Ziraat Bank Azərbaycan ASC', 'TCZBAZ22', '508000'],
  ['Yapı Kredi Bank Azərbaycan QSC', 'YKBAAZ22', '509987'], ['Premium Bank ASC', 'PRMBAZ22', '506955'], ['Naxçıvanbank ASC', 'NAXBAZ22', '507300'],
  ['Azər-Türk Bank ASC', 'AZRTAZ22', '507812'], ['Mərkəzi Bank (AMB)', 'NABZAZ2C', '501004'],
].map(([name, swift, code], i) => ({ id: i + 1, name, swift, code, corr: 'AZ' + String(10 + i).padStart(2, '0') + 'NABZ0135010' + String(100000000 + i * 7919).slice(0, 9) + '944' }));

export const USERS = ['SABUHI', 'ADMIN', 'OPERATOR1', 'OPERATOR2', 'KASSIR1', 'MUHASIB', 'KREDIT_EXP', 'DEPOZIT_EXP', 'NAZARET', 'AUDIT'].map(
  (u, i) => ({ id: i + 1, login: u, name: [`Mikayılov Səbuhi`, 'Administrator', 'Operator 1', 'Operator 2', 'Kassir', 'Baş mühasib', 'Kredit eksperti', 'Depozit eksperti', 'Nəzarətçi', 'Daxili audit'][i] }));

export const PURPOSES = ['Əmək haqqı ödənişi', 'Kommunal xidmətlər üçün ödəniş', 'Kredit üzrə əsas borcun ödənilməsi',
  'Kredit üzrə faiz ödənişi', 'Hesab xidmətinə görə komissiya', 'Mal üçün ödəniş (müqavilə №145/2026)', 'Valyuta mübadiləsi',
  'Depozit hesabına köçürmə', 'Nağd pulun mədaxili', 'Vergi ödənişi (ƏDV)', 'İcarə haqqı', 'Xidmət haqqı (hesab-faktura 2210)',
  'Sosial sığorta haqqı', 'Depozit üzrə faizlərin ödənilməsi', 'Daxili köçürmə'];

export const COMPANIES = [{ id: 1, name: 'Expressbank ASC' }, { id: 2, name: 'Expressbank ASC (TEST)' }];

/** Account numbers in the legacy SmartBank format: <bal(4)><cur(3)><filial(3)><serial(6)> */
export function accountNo(bal: number, cur: number, filial: number, serial: number) {
  return `${bal}${cur}${String(filial).padStart(3, '0')}${String(serial).padStart(6, '0')}`;
}
export function iban(accNo: string) {
  return 'AZ' + String(10 + (hash(accNo) % 89)) + 'EXBK' + accNo.padStart(20, '0').slice(-20);
}

export interface Account {
  id: number; accNo: string; name: string; bal: number; cur: (typeof CURRENCIES)[number]; cust: Customer;
  filial: number; amount: number; open: number; close: number | null;
}
export const ACCOUNTS: Account[] = Array.from({ length: 160 }, (_, i) => {
  const seed = 'acc' + i;
  const cust = CUSTOMERS[i % CUSTOMERS.length];
  const bal = cust.legal ? pick([2001, 2001, 2201, 1401, 2501], seed) : pick([2101, 2101, 2211, 1411], seed);
  const cur = i % 4 === 0 ? CURRENCIES[1] : i % 7 === 0 ? CURRENCIES[2] : CURRENCIES[0];
  const sign = bal < 2000 ? 1 : -1;
  return {
    id: 50000 + i + 1,
    accNo: accountNo(bal, cur.code, cust.filial, 1000 + i),
    name: cust.name,
    bal, cur, cust, filial: cust.filial,
    amount: Math.round(rnd(seed + 'a') * 250000 * 100) / 100 * sign,
    open: 0, close: i % 23 === 0 ? 1 : null,
  };
});
