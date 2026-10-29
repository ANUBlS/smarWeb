// Generated from ZamirImpl1.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ZamirImpl1", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "ActiveX", "AxCtrls", "Project2_TLB", "StdVcl", "Db", "Grids", "DBGrids", "ComCtrls", "StdCtrls", "Buttons", "ExtCtrls", "Gauges", "Menus", "ActnList", "Oracle", "OracleData", "comobj", "ComServ", "OleServer", "DBCtrls", "ImgList", "OleCtnrs", "unthsd", "inifiles", "Dialogs", "ExcelXP", "Variants", "sboapiDataModuleImpl", "uninfo", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TSDHesabat", "TActiveForm", {"orapak": {"name": "ORAPAK", "type": "TOraclePackage"}, "odialog": {"name": "ODialog", "type": "TOpenDialog"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oradatbook": {"name": "OraDatBook", "type": "TOracleDataSet"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "dtp": {"name": "DTP", "type": "TDateTimePicker"}, "dtp1": {"name": "DTP1", "type": "TDateTimePicker"}, "oradatsheet": {"name": "OraDatSheet", "type": "TOracleDataSet"}, "datasource3": {"name": "DataSource3", "type": "TDataSource"}, "oradatcell": {"name": "OraDatCell", "type": "TOracleDataSet"}, "datasource4": {"name": "DataSource4", "type": "TDataSource"}, "oraloadfilial": {"name": "OraLoadFilial", "type": "TOracleDataSet"}, "oraloadsimvol": {"name": "OraLoadSimvol", "type": "TOracleDataSet"}, "oraprimer": {"name": "OraPrimer", "type": "TOracleDataSet"}, "odsloadpok": {"name": "ODSLoadPok", "type": "TOracleDataSet"}, "oradatviewresult": {"name": "oradatviewresult", "type": "TOracleDataSet"}, "orasumma": {"name": "OraSumma", "type": "TOracleDataSet"}, "datasource5": {"name": "DataSource5", "type": "TDataSource"}, "orasmartdate": {"name": "OrasmartDate", "type": "TOracleDataSet"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "xlapp1": {"name": "Xlapp1", "type": "TExcelApplication"}, "oradatgetsum": {"name": "oradatgetsum", "type": "TOracleDataSet"}, "oradatprovcell": {"name": "OraDatProvCell", "type": "TOracleDataSet"}, "datasource6": {"name": "DataSource6", "type": "TDataSource"}, "oradatprov": {"name": "oradatprov", "type": "TOracleDataSet"}, "datasource7": {"name": "DataSource7", "type": "TDataSource"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "datasource8": {"name": "DataSource8", "type": "TDataSource"}, "cbp": {"name": "cbP", "type": "TCheckBox"}, "cbpr": {"name": "cbpr", "type": "TCheckBox"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "oradatsdbal_cn": {"name": "oradatsdbal_cn", "type": "TOracleDataSet"}, "datasource9": {"name": "DataSource9", "type": "TDataSource"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "oradatdepsd": {"name": "oradatdepsd", "type": "TOracleDataSet"}, "datasource10": {"name": "DataSource10", "type": "TDataSource"}, "datasource11": {"name": "DataSource11", "type": "TDataSource"}, "oradatdepcell_": {"name": "oradatdepcell_", "type": "TOracleDataSet"}, "oradatkrecell": {"name": "oradatkrecell", "type": "TOracleDataSet"}, "datasource12": {"name": "DataSource12", "type": "TDataSource"}, "gbcalc": {"name": "gbcalc", "type": "TGroupBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "cmbbookname": {"name": "cmbbookname", "type": "TComboBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "pb": {"name": "pb", "type": "TGauge"}, "pb1": {"name": "pb1", "type": "TGauge"}, "btnbookcalc": {"name": "btnbookcalc", "type": "TButton"}, "btnbookview": {"name": "btnbookview", "type": "TButton"}, "lblinfo": {"name": "lblinfo", "type": "TLabel"}, "oradatkredit": {"name": "oradatkredit", "type": "TOracleDataSet"}, "label2": {"name": "Label2", "type": "TLabel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "bevel3": {"name": "Bevel3", "type": "TBevel"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "dbgrid4": {"name": "DBGrid4", "type": "TDBGrid"}, "edacc_no": {"name": "edacc_no", "type": "TEdit"}, "edbalcn1": {"name": "edbalcn1", "type": "TEdit"}, "edval_acc": {"name": "edval_acc", "type": "TEdit"}, "edtipacc": {"name": "edtipacc", "type": "TEdit"}, "eddatdate": {"name": "eddatdate", "type": "TEdit"}, "edsumost": {"name": "edsumost", "type": "TEdit"}, "edsump_ost": {"name": "edsump_ost", "type": "TEdit"}, "edobr_d": {"name": "edobr_d", "type": "TEdit"}, "edobr_k": {"name": "edobr_k", "type": "TEdit"}, "edpok_obr_d": {"name": "edpok_obr_d", "type": "TEdit"}, "edpok_obr_k": {"name": "edpok_obr_k", "type": "TEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "btncellcalc": {"name": "btncellcalc", "type": "TButton"}, "btncelldel": {"name": "btncelldel", "type": "TButton"}, "btncelledit": {"name": "btncelledit", "type": "TButton"}, "btncelladd": {"name": "btnCellAdd", "type": "TButton"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "dbgrid5": {"name": "DBGrid5", "type": "TDBGrid"}, "dbgrid6": {"name": "DBGrid6", "type": "TDBGrid"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "btnprovcellcalc": {"name": "btnprovcellcalc", "type": "TButton"}, "btnprovcelldel": {"name": "btnprovcelldel", "type": "TButton"}, "btnprovcelledit": {"name": "btnprovcelledit", "type": "TButton"}, "btnprovcelladd": {"name": "btnprovcelladd", "type": "TButton"}, "tabsheet5": {"name": "TabSheet5", "type": "TTabSheet"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "btnbookdel": {"name": "btnbookdel", "type": "TButton"}, "btnbookedit": {"name": "btnbookedit", "type": "TButton"}, "btnbookadd": {"name": "btnbookadd", "type": "TButton"}, "tabsheet6": {"name": "TabSheet6", "type": "TTabSheet"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "btnsheetcalc": {"name": "btnsheetcalc", "type": "TButton"}, "cm_sd": {"name": "cm_sd", "type": "TOraclePackage"}, "sbcm_report": {"name": "SBCM_REPORT", "type": "TOraclePackage"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "memo3": {"name": "Memo3", "type": "TMemo"}, "oradatdepcell": {"name": "Oradatdepcell", "type": "TOracleDataSet"}, "oradatbookcaption": {"name": "OraDatBookCAPTION", "type": "TWideStringField"}, "oradatbookadress": {"name": "OraDatBookADRESS", "type": "TWideStringField"}, "oradatsheetsheet_id": {"name": "OraDatSheetSHEET_ID", "type": "TWideStringField"}, "oradatsheetcaption": {"name": "OraDatSheetCAPTION", "type": "TWideStringField"}, "oradatsheetbook_caption": {"name": "OraDatSheetBOOK_CAPTION", "type": "TWideStringField"}, "oradatsheetnisbat": {"name": "OraDatSheetNISBAT", "type": "TFloatField"}, "re": {"name": "re", "type": "TButton"}, "oradardepozit": {"name": "OradarDepozit", "type": "TOracleDataSet"}, "fevents": {"name": "FEvents", "type": "IZamirEvents"}, "kill": {"name": "Kill", "type": "Boolean"}, "confirm": {"name": "Confirm", "type": "integer"}, "proexcel": {"name": "ProExcel", "type": "integer"}, "cellexit": {"name": "CellExit", "type": "integer"}, "chkreport": {"name": "chkreport", "type": "integer"}, "mypotstart": {"name": "mypotstart", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("SDHesabat", null, "TSDHesabat");
    U.var_("oradat", null, "toracledataset");
    U.var_("stopFlag", false, "Boolean");
    U.var_("OleWorkBook", null, "Variant");
    U.var_("Hdate", 0, "TDateTime");
    U.var_("Sdate", 0, "TDateTime");
    U.var_("MinDate", 0, "TDateTime");
    U.var_("MaxDate", 0, "TDateTime");
    U.var_("XlApp", null, "OLEVariant");
    U.var_("ppbook", 0, "integer");
    U.var_("Sheet", 0, "integer");
    U.var_("Row", 0, "integer");
    U.var_("ind", 0, "integer");
    U.var_("SheetCount", 0, "integer");
    U.var_("count1", 0, "integer");
    U.var_("count2", 0, "integer");
    U.var_("count3", 0, "integer");
    U.var_("cellcount", 0, "integer");
    U.var_("i", 0, "integer");
    U.var_("L", 0, "integer");
    U.var_("k", 0, "integer");
    U.var_("G", 0, "integer");
    U.var_("N", 0, "integer");
    U.var_("NisNumber", 0, "integer");
    U.var_("pokOST", 0, "integer");
    U.var_("LoadTime", 0, "integer");
    U.var_("timetake", 0, "integer");
    U.var_("FileName", '', "String");
    U.var_("U", '', "String");
    U.var_("C", '', "String");
    U.var_("R", '', "String");
    U.var_("T", '', "String");
    U.var_("H", '', "String");
    U.var_("Z", '', "String");
    U.var_("z1", '', "String");
    U.var_("V", '', "String");
    U.var_("J", '', "String");
    U.var_("D", '', "String");
    U.var_("E", '', "String");
    U.var_("P", '', "String");
    U.var_("X", '', "String");
    U.var_("Y", '', "String");
    U.var_("w", '', "String");
    U.var_("Seperator", '', "String");
    U.var_("deb", '', "String");
    U.var_("dbc", '', "String");
    U.var_("SimV", '', "String");
    U.var_("accsql", '', "String");
    U.var_("SinSql", '', "String");
    U.var_("QrupSql", '', "String");
    U.var_("SimSql", '', "String");
    U.var_("valsql", '', "String");
    U.var_("RezSql", '', "String");
    U.var_("FilSql", '', "String");
    U.var_("Eb", '', "String");
    U.var_("Eh", '', "String");
    U.var_("Es", '', "String");
    U.var_("Eq", '', "String");
    U.var_("BalSql", '', "String");
    U.var_("HesSql", '', "String");
    U.var_("ac", '', "String");
    U.var_("ba", '', "String");
    U.var_("va", '', "String");
    U.var_("ti", '', "String");
    U.var_("da", '', "String");
    U.var_("comment", '', "String");
    U.var_("Kredit", 0, "Real");
    U.var_("Debet", 0, "Real");
    U.var_("Sell", 0, "Real");
    U.var_("LCell", 0, "Real");
    U.var_("Un_check", 0, "Integer");
    U.var_("posti", 0, "Integer");
    U.var_("clip_shid", '', "String");
    U.var_("clip_cap", '', "String");
    U.var_("StartDate", 0, "TDateTime");
    U.var_("FinDate", 0, "TDateTime");
    U.var_("v_StartDate", 0, "TDateTime");
    U.var_("v_FinDate", 0, "TDateTime");
    U.var_("r_StartDate", 0, "TDateTime");
    U.var_("r_FinDate", 0, "TDateTime");
  });
  U.method("TSDHesabat", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TSDHesabat", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TSDHesabat", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSDHesabat", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSDHesabat", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSDHesabat", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSDHesabat", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSDHesabat", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSDHesabat", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSDHesabat", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSDHesabat", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSDHesabat", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSDHesabat", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSDHesabat", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSDHesabat", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSDHesabat", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSDHesabat", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSDHesabat", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSDHesabat", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSDHesabat", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSDHesabat", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TSDHesabat", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "tempkey": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["tempkey"] = (await $.call(C, "Smallint", [(await L0["key"].get())]));
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.stmt((await $.mcall((await $.v(C, "FEvents")), "OnKeyPress", [L0["tempkey"]])));
  }
  await L0["key"].set((await $.call(C, "Char", [L0["tempkey"]])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TSDHesabat", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSDHesabat", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSDHesabat", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TSDHesabat", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TSDHesabat", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TSDHesabat", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TSDHesabat", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSDHesabat", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSDHesabat", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSDHesabat", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TSDHesabat", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TSDHesabat", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSDHesabat", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TSDHesabat", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TSDHesabat", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSDHesabat", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSDHesabat", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TSDHesabat", "Initialize", null, arguments);
  await $.set(C, "OnActivate", (await $.ref_(C, "ActivateEvent")));
  await $.set(C, "OnClick", (await $.ref_(C, "ClickEvent")));
  await $.set(C, "OnCreate", (await $.ref_(C, "CreateEvent")));
  await $.set(C, "OnDblClick", (await $.ref_(C, "DblClickEvent")));
  await $.set(C, "OnDeactivate", (await $.ref_(C, "DeactivateEvent")));
  await $.set(C, "OnDestroy", (await $.ref_(C, "DestroyEvent")));
  await $.set(C, "OnKeyPress", (await $.ref_(C, "KeyPressEvent")));
  await $.set(C, "OnPaint", (await $.ref_(C, "PaintEvent")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TSDHesabat", "UpdateStr", async function UpdateStr(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"inpstr": $.copyArg(p0), result: '', "tempstring": '', "endstring": '', "flag": 0, "tempcount": 0, "i": 0, "count": 0, "beg_index": 0, "k": 0};
  await $.fixArgs(L0, ["inpstr"]);
  L0["commas"] = "'";
  L0["comma"] = ",";
  L0["result"] = L0["inpstr"];
  if ($.truthy($.ne(L0["result"], ""))) {
    L0["tempstring"] = "";
    L0["endstring"] = "";
    L0["beg_index"] = 1;
    L0["k"] = (await $.call(C, "Length", [L0["result"]]));
    L0["tempcount"] = 0;
    L0["flag"] = 1;
    { const $t1 = L0["k"];
      L0["i"] = 1;
      let $t2 = true;
      for (;;) {
        if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
        $t2 = false;
        if (!($.ord(L0["i"]) <= $.ord($t1))) break;
        if ($.truthy($.ne((await $.idx(L0["result"], [L0["i"]])), " "))) {
          L0["tempstring"] = $.add(L0["tempstring"], (await $.idx(L0["result"], [L0["i"]])));
        }
        await $.tick();
      }
    }
    L0["inpstr"] = L0["tempstring"];
    L0["result"] = L0["inpstr"];
    L0["tempstring"] = "";
    L0["k"] = (await $.call(C, "Length", [L0["result"]]));
    { const $t3 = L0["k"];
      L0["i"] = 1;
      let $t4 = true;
      for (;;) {
        if (!$t4) { L0["i"] = $.succ(L0["i"], 1); }
        $t4 = false;
        if (!($.ord(L0["i"]) <= $.ord($t3))) break;
        if ($.truthy($.eq((await $.idx(L0["result"], [L0["i"]])), ","))) {
          L0["count"] = $.sub(($.sub(L0["i"], 1)), L0["tempcount"]);
          L0["result"] = (await $.call(C, "Copy", [L0["result"], L0["beg_index"], L0["count"]]));
          L0["tempstring"] = $.add($.add($.add($.add(L0["tempstring"], L0["result"]), L0["commas"]), L0["comma"]), L0["commas"]);
          L0["result"] = L0["inpstr"];
          L0["beg_index"] = $.add(L0["i"], 1);
          L0["tempcount"] = L0["i"];
          L0["flag"] = 0;
        }
        if ($.truthy($.eq(L0["flag"], 1))) {
          L0["endstring"] = $.add(L0["endstring"], (await $.idx(L0["result"], [L0["i"]])));
        } else {
          L0["endstring"] = "";
          L0["flag"] = 1;
        }
        await $.tick();
      }
    }
    L0["result"] = $.add($.add($.add(L0["commas"], L0["tempstring"]), L0["endstring"]), L0["commas"]);
  } else {
    L0["result"] = "' '";
  }
  return L0.result;
}, {"params": ["InpStr"], "kind": "function", "ptypes": ["String"]});
  U.method("tsdhesabat", "Connect_Excel", async function Connect_Excel(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.mcall((await $.v(C, "xlapp1")), "Connect", []);
    await $.set(C, "Xlapp", (await $.call(C, "GetActiveOleObject", ["Excel.Application"])));
  } catch ($t5) {
    $.rethrowControl($t5);
    $.handled($t5);
    await $.stmt((await $.call(C, "showmessage", ["Komputerdə EXCEL qoşulmayıb."])));
  }
  await $.mset((await $.v(C, "XLApp")), "DisplayAlerts", true);
  try {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "XLApp")), "WorkBooks")), "Open", [(await $.mv((await $.mcall((await $.v(C, "oradatbook")), "FieldByName", ["Adress"])), "AsString"))])));
  } catch ($t6) {
    $.rethrowControl($t6);
    $.handled($t6);
    await $.stmt($.call(C, "beep", []));
    await $.stmt((await $.call(C, "showmessage", [$.add((await $.mv((await $.mcall((await $.v(C, "oradatbook")), "FieldByName", ["Adress"])), "AsString")), " Ünvandakı fayl tapılmadı. ")])));
    await $.set(C, "xlapp", (await $.v(C, "Unassigned")));
    await $.mcall((await $.v(C, "xlapp1")), "Disconnect", []);
    await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crdefault")));
    $.abort();
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("tsdhesabat", "readbookname", async function readbookname(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "cmbbookname")), "clear", []);
  {
    const $t7 = (await $.v(C, "oradatbook"));
    await $.stmt($.wcall([$t7], "close", [], C));
    await $.stmt($.wcall([$t7], "open", [], C));
    while ($.truthy($.not((await $.wv([$t7], "eof", C, false))))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t7], "cmbbookname", C, false)), "items")), "add", [(await $.mv((await $.wcall([$t7], "fieldbyname", ["caption"], C)), "asstring"))])));
      await $.stmt($.wcall([$t7], "Next", [], C));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("tsdhesabat", "oradatcell_edit", async function oradatcell_edit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t8 = (await $.v(C, "oradatcell"));
    await $.stmt($.wcall([$t8], "Close", [], C));
    await $.mcall((await $.wv([$t8], "sql", C, false)), "Clear", []);
    await $.mset((await $.wv([$t8], "Sql", C, false)), "Text", $.add($.add($.add($.add("select s.rowid,s.* from CELL s where sheet_id=", (await $.mv((await $.mcall((await $.wv([$t8], "oradatsheet", C, false)), "fieldbyname", ["sheet_id"])), "Asstring"))), "and Book_Caption='"), (await $.mv((await $.mcall((await $.wv([$t8], "oradatbook", C, false)), "fieldbyname", ["Caption"])), "AsString"))), "'"));
    await $.stmt($.wcall([$t8], "open", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("tsdhesabat", "oradatprovcell_edit", async function oradatprovcell_edit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t9 = (await $.v(C, "oradatprovcell"));
    await $.stmt($.wcall([$t9], "Close", [], C));
    await $.mcall((await $.wv([$t9], "sql", C, false)), "clear", []);
    await $.mset((await $.wv([$t9], "sql", C, false)), "text", $.add($.add($.add($.add("select s.rowid,s.* from ProvCELL s where sheet_id=", (await $.mv((await $.mcall((await $.wv([$t9], "oradatsheet", C, false)), "fieldbyname", ["sheet_id"])), "AsString"))), "and Book_Caption='"), (await $.mv((await $.mcall((await $.wv([$t9], "oradatbook", C, false)), "fieldbyname", ["Caption"])), "AsString"))), "'"));
    await $.stmt($.wcall([$t9], "Open", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("tsdhesabat", "oradatdepcell_edit", async function oradatdepcell_edit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t10 = (await $.v(C, "oradatdepcell"));
    await $.stmt($.wcall([$t10], "Close", [], C));
    await $.mcall((await $.wv([$t10], "sql", C, false)), "clear", []);
    await $.mset((await $.wv([$t10], "sql", C, false)), "text", $.add($.add($.add($.add("select s.rowid,s.* from DepCELL s where sheet_id=", (await $.mv((await $.mcall((await $.wv([$t10], "oradatsheet", C, false)), "fieldbyname", ["sheet_id"])), "AsString"))), "and Book_Caption='"), (await $.mv((await $.mcall((await $.wv([$t10], "oradatbook", C, false)), "fieldbyname", ["Caption"])), "AsString"))), "'"));
    await $.stmt($.wcall([$t10], "open", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("tsdhesabat", "oradatkrecell_edit", async function oradatkrecell_edit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t11 = (await $.v(C, "oradatkrecell"));
    await $.stmt($.wcall([$t11], "Close", [], C));
    await $.mcall((await $.wv([$t11], "Sql", C, false)), "clear", []);
    await $.mset((await $.wv([$t11], "sql", C, false)), "text", $.add($.add($.add($.add("select s.rowid,s.* from krecell s where sheet_id=", (await $.mv((await $.mcall((await $.wv([$t11], "oradatsheet", C, false)), "fieldbyname", ["sheet_id"])), "AsString"))), "and Book_Caption='"), (await $.mv((await $.mcall((await $.wv([$t11], "oradatbook", C, false)), "fieldbyname", ["Caption"])), "AsString"))), "'"));
    await $.stmt($.wcall([$t11], "open", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("oradatsheet_edit", async function oradatsheet_edit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t12 = (await $.mv((await $.v(C, "sdhesabat")), "oradatsheet"));
    await $.stmt($.wcall([$t12], "Close", [], C));
    await $.mcall((await $.wv([$t12], "Sql", C, false)), "clear", []);
    await $.mset((await $.wv([$t12], "sql", C, false)), "text", "select s.rowid, s.* from sheet s");
    await $.stmt($.wcall([$t12], "open", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("tsdhesabat", "addpicklist_cell", async function addpicklist_cell(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t13 = (await $.v(C, "oraloadfilial"));
    await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "dbgrid3", C, false)), "Columns")), [10])), "PickList")), "Clear", []);
    await $.stmt($.wcall([$t13], "open", [], C));
    await $.stmt((await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "dbgrid3", C, false)), "Columns")), [10])), "PickList")), "Add", ["Bütün filiallar"])));
    while ($.truthy($.not((await $.wv([$t13], "eof", C, false))))) {
      {
        const $t14 = (await $.mv((await $.idx((await $.mv((await $.wv([$t13], "dbgrid3", C, false)), "Columns")), [10])), "PickList"));
        await $.stmt((await $.wcall([$t13, $t14], "add", [(await $.mv((await $.wcall([$t13, $t14], "Fieldbyname", ["NAME"], C)), "asstring"))], C)));
      }
      await $.stmt($.wcall([$t13], "Next", [], C));
      await $.tick();
    }
    await $.stmt($.wcall([$t13], "close", [], C));
  }
  await $.mcall((await $.v(C, "application")), "ProcessMessages", []);
  {
    const $t15 = (await $.v(C, "oraloadsimvol"));
    await $.stmt($.wcall([$t15], "open", [], C));
    await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t15], "dbgrid3", C, false)), "Columns")), [6])), "PickList")), "Clear", []);
    while ($.truthy($.not((await $.wv([$t15], "eof", C, false))))) {
      {
        const $t16 = (await $.mv((await $.idx((await $.mv((await $.wv([$t15], "dbgrid3", C, false)), "Columns")), [6])), "PickList"));
        await $.stmt((await $.wcall([$t15, $t16], "add", [(await $.mv((await $.wcall([$t15, $t16], "FieldByName", ["Symbol"], C)), "asstring"))], C)));
      }
      await $.stmt($.wcall([$t15], "Next", [], C));
      await $.tick();
    }
    await $.stmt($.wcall([$t15], "Close", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("tsdhesabat", "addpicklist_provcell", async function addpicklist_provcell(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "oradatcntr": null, "oradatrpt": null, "oradatcnvrt": null};
  L0["oradatcntr"] = (await $.mcall((await $.v(C, "ToracleDataset")), "Create", [Self]));
  await $.mset(L0["oradatcntr"], "Session", (await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")));
  L0["oradatrpt"] = (await $.mcall((await $.v(C, "ToracleDataset")), "Create", [Self]));
  await $.mset(L0["oradatrpt"], "Session", (await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")));
  L0["oradatcnvrt"] = (await $.mcall((await $.v(C, "ToracleDataset")), "Create", [Self]));
  await $.mset(L0["oradatcnvrt"], "Session", (await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")));
  {
    const $t17 = (await $.v(C, "oraloadfilial"));
    await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t17], "dbgrid5", C, false)), "Columns")), [7])), "PickList")), "Clear", []);
    await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t17], "dbgrid5", C, false)), "Columns")), [13])), "PickList")), "Clear", []);
    await $.stmt($.wcall([$t17], "open", [], C));
    await $.stmt((await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t17], "dbgrid5", C, false)), "Columns")), [7])), "PickList")), "Add", ["Bütün filiallar"])));
    while ($.truthy($.not((await $.wv([$t17], "eof", C, false))))) {
      {
        const $t18 = (await $.mv((await $.idx((await $.mv((await $.wv([$t17], "dbgrid5", C, false)), "Columns")), [7])), "PickList"));
        await $.stmt((await $.wcall([$t17, $t18], "add", [(await $.mv((await $.wcall([$t17, $t18], "Fieldbyname", ["NAME"], C)), "asstring"))], C)));
      }
      await $.stmt($.wcall([$t17], "Next", [], C));
      await $.tick();
    }
    await $.stmt($.wcall([$t17], "First", [], C));
    await $.stmt((await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t17], "dbgrid5", C, false)), "Columns")), [13])), "PickList")), "Add", ["Bütün filiallar"])));
    while ($.truthy($.not((await $.wv([$t17], "eof", C, false))))) {
      {
        const $t19 = (await $.mv((await $.idx((await $.mv((await $.wv([$t17], "dbgrid5", C, false)), "Columns")), [13])), "PickList"));
        await $.stmt((await $.wcall([$t17, $t19], "add", [(await $.mv((await $.wcall([$t17, $t19], "Fieldbyname", ["NAME"], C)), "asstring"))], C)));
      }
      await $.stmt($.wcall([$t17], "Next", [], C));
      await $.tick();
    }
    await $.stmt($.wcall([$t17], "close", [], C));
  }
  await $.mcall((await $.v(C, "application")), "ProcessMessages", []);
  {
    const $t20 = (await $.v(C, "oraloadsimvol"));
    await $.stmt($.wcall([$t20], "open", [], C));
    await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t20], "dbgrid5", C, false)), "Columns")), [5])), "PickList")), "Clear", []);
    await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t20], "dbgrid5", C, false)), "Columns")), [11])), "PickList")), "Clear", []);
    while ($.truthy($.not((await $.wv([$t20], "eof", C, false))))) {
      {
        const $t21 = (await $.mv((await $.idx((await $.mv((await $.wv([$t20], "dbgrid5", C, false)), "Columns")), [5])), "PickList"));
        await $.stmt((await $.wcall([$t20, $t21], "add", [(await $.mv((await $.wcall([$t20, $t21], "FieldByName", ["Symbol"], C)), "asstring"))], C)));
      }
      await $.stmt($.wcall([$t20], "Next", [], C));
      await $.tick();
    }
    await $.stmt($.wcall([$t20], "First", [], C));
    while ($.truthy($.not((await $.wv([$t20], "eof", C, false))))) {
      {
        const $t22 = (await $.mv((await $.idx((await $.mv((await $.wv([$t20], "dbgrid5", C, false)), "Columns")), [11])), "PickList"));
        await $.stmt((await $.wcall([$t20, $t22], "add", [(await $.mv((await $.wcall([$t20, $t22], "FieldByName", ["Symbol"], C)), "asstring"))], C)));
      }
      await $.stmt($.wcall([$t20], "Next", [], C));
      await $.tick();
    }
    await $.stmt($.wcall([$t20], "Close", [], C));
  }
  await $.mcall((await $.v(C, "application")), "ProcessMessages", []);
  {
    const $t23 = L0["oradatcntr"];
    await $.stmt($.wcall([$t23], "close", [], C));
    await $.mset((await $.wv([$t23], "sql", C, false)), "Text", "Select CNTR_Name from Countries");
    await $.stmt($.wcall([$t23], "Open", [], C));
    await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t23], "dbgrid5", C, false)), "Columns")), [17])), "PickList")), "clear", []);
    while ($.truthy($.not((await $.wv([$t23], "eof", C, false))))) {
      {
        const $t24 = (await $.mv((await $.idx((await $.mv((await $.wv([$t23], "dbgrid5", C, false)), "Columns")), [17])), "PickList"));
        await $.stmt((await $.wcall([$t23, $t24], "add", [(await $.mv((await $.wcall([$t23, $t24], "fieldbyname", ["CNTR_Name"], C)), "AsString"))], C)));
      }
      await $.stmt($.wcall([$t23], "Next", [], C));
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "application")), "ProcessMessages", []);
  {
    const $t25 = L0["oradatcnvrt"];
    await $.stmt($.wcall([$t25], "close", [], C));
    await $.mset((await $.wv([$t25], "sql", C, false)), "Text", "Select FullPath from Convert_Assignments");
    await $.stmt($.wcall([$t25], "Open", [], C));
    await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t25], "dbgrid5", C, false)), "Columns")), [18])), "PickList")), "clear", []);
    while ($.truthy($.not((await $.wv([$t25], "eof", C, false))))) {
      {
        const $t26 = (await $.mv((await $.idx((await $.mv((await $.wv([$t25], "dbgrid5", C, false)), "Columns")), [18])), "PickList"));
        await $.stmt((await $.wcall([$t25, $t26], "add", [(await $.mv((await $.wcall([$t25, $t26], "fieldbyname", ["FullPath"], C)), "AsString"))], C)));
      }
      await $.stmt($.wcall([$t25], "Next", [], C));
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "application")), "ProcessMessages", []);
  {
    const $t27 = L0["oradatrpt"];
    await $.stmt($.wcall([$t27], "close", [], C));
    await $.mset((await $.wv([$t27], "sql", C, false)), "Text", "Select Name from ReportDescs");
    await $.stmt($.wcall([$t27], "Open", [], C));
    await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t27], "dbgrid5", C, false)), "Columns")), [19])), "PickList")), "clear", []);
    while ($.truthy($.not((await $.wv([$t27], "eof", C, false))))) {
      {
        const $t28 = (await $.mv((await $.idx((await $.mv((await $.wv([$t27], "dbgrid5", C, false)), "Columns")), [19])), "PickList"));
        await $.stmt((await $.wcall([$t27, $t28], "add", [(await $.mv((await $.wcall([$t27, $t28], "fieldbyname", ["Name"], C)), "AsString"))], C)));
      }
      await $.stmt($.wcall([$t27], "Next", [], C));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("tsdhesabat", "addpicklist_depcell", async function addpicklist_depcell(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crdefault")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("tsdhesabat", "addpicklist_krecell", async function addpicklist_krecell(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crdefault")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("tsdhesabat", "yenile", async function yenile(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), "shift": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["key", "shift"]);
  if ($.truthy((await $.and_(($.eq(L0["key"], (await $.v(C, "vk_f5")))), async () => ($.eq(L0["shift"], [])))))) {
    {
      const $t29 = (await $.v(C, "oradatcell"));
      await $.stmt($.wcall([$t29], "close", [], C));
      await $.mcall((await $.wv([$t29], "sql", C, false)), "Clear", []);
      await $.mset((await $.wv([$t29], "Sql", C, false)), "Text", $.add($.add($.add($.add("select s.rowid,s.* from v_CELL s where sheet_id=", (await $.mv((await $.mcall((await $.wv([$t29], "oradatsheet", C, false)), "fieldbyname", ["sheet_id"])), "AsString"))), "and Book_Caption='"), (await $.mv((await $.mcall((await $.wv([$t29], "oradatbook", C, false)), "fieldbyname", ["Caption"])), "AsString"))), "'"));
      await $.stmt($.wcall([$t29], "open", [], C));
    }
    {
      const $t30 = (await $.v(C, "oradatprovcell"));
      await $.stmt($.wcall([$t30], "close", [], C));
      await $.mcall((await $.wv([$t30], "sql", C, false)), "Clear", []);
      await $.mset((await $.wv([$t30], "Sql", C, false)), "Text", $.add($.add($.add($.add("select s.rowid,s.* from v_ProvCELL s where sheet_id=", (await $.mv((await $.mcall((await $.wv([$t30], "oradatsheet", C, false)), "fieldbyname", ["sheet_id"])), "AsString"))), "and Book_Caption='"), (await $.mv((await $.mcall((await $.wv([$t30], "oradatbook", C, false)), "fieldbyname", ["Caption"])), "AsString"))), "'"));
      await $.stmt($.wcall([$t30], "open", [], C));
    }
  }
  return L0.result;
}, {"params": ["key", "Shift"], "kind": "procedure", "ptypes": ["Word", "TShiftState"]});
  U.method("TSDHesabat", "GetSum", async function GetSum(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "j": 0, "h": 0, "y": 0, "n": 0, "m": 0};
  L0["i"] = 0;
  L0["j"] = 0;
  L0["h"] = 0;
  L0["y"] = 0;
  L0["n"] = 0;
  L0["m"] = 0;
  await $.mset((await $.v(C, "edsumost")), "Text", "");
  await $.mset((await $.v(C, "edsump_ost")), "Text", "");
  await $.mset((await $.v(C, "edobr_d")), "Text", "");
  await $.mset((await $.v(C, "edobr_k")), "Text", "");
  await $.mset((await $.v(C, "edpok_obr_d")), "Text", "");
  await $.mset((await $.v(C, "edpok_obr_k")), "Text", "");
  await $.set(C, "ba", $.add($.add("'and ac.bal_cn1 like'", (await $.mv((await $.v(C, "edbalcn1")), "Text"))), "%"));
  await $.set(C, "ti", $.add($.add($.add("'and ac.tipacc like'", "%"), (await $.call(C, "uppercase", [(await $.mv((await $.v(C, "edtipacc")), "Text"))]))), "%"));
  await $.set(C, "da", $.add("'and ar.datdate='", (await $.mv((await $.v(C, "eddatdate")), "Text"))));
  await $.set(C, "va", $.add("'and ac.val_acc='", (await $.mv((await $.v(C, "edval_acc")), "text"))));
  if ($.truthy($.eq((await $.mv((await $.v(C, "edbalcn1")), "Text")), ""))) {
    await $.set(C, "ba", "");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "edtipacc")), "text")), ""))) {
    await $.set(C, "ti", "");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "eddatdate")), "Text")), ""))) {
    await $.set(C, "da", "");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "edval_acc")), "text")), ""))) {
    await $.set(C, "va", "");
  }
  {
    const $t31 = (await $.v(C, "oradatgetsum"));
    await $.stmt($.wcall([$t31], "Close", [], C));
    await $.mcall((await $.wv([$t31], "Sql", C, false)), "Clear", []);
    await $.mset((await $.wv([$t31], "sql", C, false)), "Text", $.add($.add($.add($.add($.add($.add($.add($.add("Select sum(ostat) as ost,sum(pok_ostat) as post ,sum(obr_d) as od,sum(obr_k) as ok ,sum(pok_obr_d) as pobrd ,sum(pok_obr_k) as pobrk from archost ar,account ac where acc_no like'", (await $.mv((await $.wv([$t31], "edacc_no", C, false)), "text"))), "%"), (await $.wv([$t31], "ba", C, false))), (await $.wv([$t31], "ti", C, false))), (await $.wv([$t31], "da", C, false))), (await $.wv([$t31], "va", C, false))), "'"), "and ac.id=ar.acc_id"));
    await $.stmt($.wcall([$t31], "Open", [], C));
    await $.wset([$t31], "i", (await $.mv((await $.wcall([$t31], "fieldbyname", ["ost"], C)), "asfloat")), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
    await $.wset([$t31], "j", (await $.mv((await $.wcall([$t31], "fieldbyname", ["post"], C)), "asfloat")), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
    await $.wset([$t31], "h", (await $.mv((await $.wcall([$t31], "fieldbyname", ["od"], C)), "asfloat")), { get: async () => L0["h"], set: async (v) => { L0["h"] = v; }, local: true });
    await $.wset([$t31], "y", (await $.mv((await $.wcall([$t31], "fieldbyname", ["ok"], C)), "asfloat")), { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true });
    await $.wset([$t31], "n", (await $.mv((await $.wcall([$t31], "fieldbyname", ["pobrd"], C)), "asfloat")), { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true });
    await $.wset([$t31], "m", (await $.mv((await $.wcall([$t31], "fieldbyname", ["pobrk"], C)), "asfloat")), { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true });
    await $.mset((await $.wv([$t31], "edsumost", C, false)), "Text", (await $.wcall([$t31], "floattostr", [(await $.wv([$t31], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], C)));
    await $.mset((await $.wv([$t31], "edsump_ost", C, false)), "Text", (await $.wcall([$t31], "floattostr", [(await $.wv([$t31], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))], C)));
    await $.mset((await $.wv([$t31], "edobr_d", C, false)), "Text", (await $.wcall([$t31], "floattostr", [(await $.wv([$t31], "h", { get: async () => L0["h"], set: async (v) => { L0["h"] = v; }, local: true }, false))], C)));
    await $.mset((await $.wv([$t31], "edobr_k", C, false)), "Text", (await $.wcall([$t31], "floattostr", [(await $.wv([$t31], "y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false))], C)));
    await $.mset((await $.wv([$t31], "edpok_obr_d", C, false)), "Text", (await $.wcall([$t31], "floattostr", [(await $.wv([$t31], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))], C)));
    await $.mset((await $.wv([$t31], "edpok_obr_k", C, false)), "Text", (await $.wcall([$t31], "floattostr", [(await $.wv([$t31], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TSDHesabat", "Cell", async function Cell() { return $.notPorted("TSDHesabat.Cell", "cannot assign to call"); }, {"params": [], "kind": "procedure", "ptypes": [], "error": "cannot assign to call", "src": "procedure TSDHesabat.Cell;\n var prover,t:integer;\n     k,pc:string; vdtp,vdtp1: TdateTime;\n     sum,sum1 :integer;\nbegin\nseperator:=',';\nSimSql:='';\nBalSql:='';\nHesSql:='';\nfilsql:='';\nvalsql:='';\nRezSql:='';\nJ:='';\nZ:='';\nR:='';\nX:='';\nP:='';\nY:='';\nW:='';\nU:='';\neb:='';\neh:='';\nes:='';\neq:='';\ndebet:=0;\nkredit:=0;\nSell:=0;\nLCell:=0;\npokost:=0;\nC:='';\nZ:='';\nZ1:='';\nk:='';\nwith oradatcell do\nbegin\nif     (fieldbyname('Cell_balance').AsString='')\n   and (fieldbyname('Cell_Account').AsString='')\n   and (fieldbyname('Cell_Valyuta').AsString='')\n   and (fieldbyname('Filial').AsString='')\n   and (fieldbyname('Cell_symbol').AsString='')\n   and (fieldbyname('Reznorez').AsString='')\nthen\nbegin\n  showmessage('Parametrlərdən heç biri daxil edilməyib!!!');\n  Abort;\nend; \nend; \nhdate:= integer(trunc(dtp.datetime));\nSdate:= integer(trunc(dtp1.datetime));\noradatcell.RecNo:=posti;\nSheet:=oradatsheet.fieldbyname('Sheet_id').AsInteger;\nNisNumber:=oradatsheet.fieldbyname('Nisbat').AsInteger;\n\nR:=OraDatCell.fieldbyname('Cell_Balance').asstring+',';\nC:=OraDatCell.fieldbyname('Cell_Balance').asstring;\nH:=OraDatCell.fieldbyname('Cell_Account').asstring;\nU:=OraDatCell.fieldbyname('Cell_Account').asstring+',';\n\nif oradatcell.FieldByName('cell_balance').AsString<>'' then\nbegin\n  while pos(seperator,R)>0 do begin\n     \n    \n        z:=copy(R,1,pos(seperator,R)-1);\n     \n        delete(R,1,pos(seperator,R));\n     \n      if pos(seperator,r)>0 then\n\n                  balsql:=balsql+'  (ac.bal_cn1 like to_char('+Z+')||''%'') or '\n                   else\n                    balsql:=balsql+'  (ac.bal_cn1 like to_char('+z+')||''%'')'; \n       end;   \n           balsql:=' and ('+balsql+')' ;\n\n\n        \n         end;\n         z :='';\n\n  \n\nif oradatcell.FieldByName('cell_account').AsString<>'' then\nbegin\n    while pos(seperator,U)>0 do begin\n        z:=copy(U,1,pos(seperator,U)-1);\n        delete(U,1,pos(seperator,U));\n      if pos(seperator,U)>0 then\n       HesSql:=HesSql+' ac.acc_no like '''+Z+'%'' or '\n                   else\n                    HesSql:=HesSql+'  ac.acc_no like '''+z+'%''';\n       end;   \n           HesSql:=' and '+HesSql+'' ; \n \n\nend;\n\n\n\n        if oradatcell.FieldByName('Cell_Symbol').asstring<>''  then\n        begin\n                SimSql:=' and ac.tipacc like  '+   ''''+'%'+oradatcell.FieldByName('Cell_Symbol').asstring+'%'+'''';\n        end;\n\n        if oradatcell.FieldByName('Cell_valyuta').AsString<>'' then\n        begin\n                valsql:=' and  val_acc in (select valute from avalute where val_name in( '+\n                updatestr(oradatcell.fieldbyname('Cell_Valyuta').AsString)+'))';\n        end;\n\n        if oradatcell.FieldByName('Reznorez').AsString<>'' then\n        begin\n                rezsql:=' and  ac.KLI_ID in (select id from customers where nerezident='+oradatcell.fieldbyname('reznorez').asstring+')';\n        end;\n\n        if (oradatcell.FieldByName('Filial').asstring<>'')  or (oradatcell.FieldByName('Filial').AsString <> 'Bütün filiallar') then\n        Begin\n                with odsloadpok do\n                begin\n                        Close;\n                        Sql.Clear;\n                        Sql.Text:='Select id from filial_t where name='''+oradatcell.fieldbyname('Filial').AsString+'''' ;\n                        Open;\n                        filSql:=' and ac.Filial='''+fieldbyname('id').AsString+'''';\n                end;\n        end;\n\n        if (oradatcell.FieldByName('Filial').AsString = 'Bütün filiallar') then filSql:='';\n\n        With odsloadpok do\n        begin\n                Close;\n                Sql.clear;\n                Sql.Text:='Select max(datdate) as  mindate from archost where datdate<'+''''+formatdatetime('dd-mmm-yyyy',dtp.DateTime)+'''';\n                Open;\n                Mindate:=odsloadpok.fieldbyname('Mindate').asdatetime;\n        end;\n\n        with odsloadpok do\n        begin\n                Close;\n                Sql.clear;\n                Sql.Text:='Select Max(datdate) as MaxDate from archost where datdate<='+''''+formatdatetime('dd-mmm-yyyy',dtp1.DateTime)+'''';\n                Open;\n                Maxdate:=odsloadpok.fieldbyname('maxdate').AsDateTime;\n        end;\n\n        if  oradatcell.FieldByName('Cell_Ekvivalent').AsString='pok_ostat' then  pokost:=1;\n        if  oradatcell.FieldByName('Cell_Ekvivalent').AsString='ostat' then  pokost:=2;\n\n\n\ncase POKOST of\n  1: begin                                \n     if  (oradatcell.FieldByName('Debet').asstring<>'') OR (oradatcell.FieldByName('Kredit').asstring<>'') then\n     begin\n     with  odsloadpok do\n     begin\n       Close;\n       Sql.Clear;\n       Sql.Text:='select  SUM (pok_obr_k) as kredit, SUM (pok_obr_d) as debet from archost ar,account ac where  datdate between'+\n                 ''''+formatdatetime('dd-mmm-yyyy',dtp.datetime)+''''+\n                 'and '+''''+formatdatetime('dd-mmm-yyyy',dtp1.datetime)+''''+\n                 'and ac.id=ar.acc_id '+BalSql+hessql+SimSql+valsql+Rezsql+Filsql;\n\n       Open;\n       debet:=0;\n       kredit:=0;\n       debet:=odsloadpok.fieldbyname('debet').Asfloat;\n       kredit:=odsloadpok.fieldbyname('kredit').Asfloat;\n     end; \n     end; \n     if oradatcell.FieldByName('Sell').asstring<>'' then\n     Begin\n     with    odsloadpok do\n     begin\n       Close;\n       Sql.Clear;\n       Sql.Text:='select sum(pok_ostat) as Sell from archost ar,account ac where  datdate='''+\n                 formatdatetime('dd-mmm-yyyy',(MinDate))+''''+\n                 'and ac.id=ar.acc_id '+BalSql+hessql+SimSql+valsql+rezsql+FilSql;\n\n       memo3.Text:=sql.Text;\n       Open;\n   \n   \n  \n   \n   \n   Sell :=0;\n      Sell:=odsloadpok.fieldbyname('Sell').Asfloat;\n      \n    \n     \n     end;  \n     end;  \n     if oradatcell.FieldByName('LCell').asstring<>'' then\n     Begin\n     with    odsloadpok do\n     begin\n       Close;\n       Sql.Clear;\n       Sql.Text:='select sum(pok_ostat) LCell from archost ar,account ac where  datdate='''+\n                 formatdatetime('dd-mmm-yyyy',(MaxD"});
  U.method("Tsdhesabat", "provcell", async function provcell() { return $.notPorted("Tsdhesabat.provcell", "cannot assign to call"); }, {"params": [], "kind": "procedure", "ptypes": [], "error": "cannot assign to call", "src": "Procedure Tsdhesabat.provcell;\n   var Seperator,pr_d_bal,pr_d_acc,pr_D_simvol,pr_d_rez,pr_d_filial,pr_d_valyuta,pr_k_bal,pr_k_acc,pr_k_simvol,pr_k_rez,pr_k_filial,pr_k_valyuta,pc,pr_d_balSql,pr_d_accSql,pr_k_balSql,pr_k_accSql:string;\n       pr_d_simsql,pr_d_rezsql,pr_d_filsql,pr_d_valsql,pr_k_simsql,pr_k_rezsql,pr_k_filsql,pr_k_valsql,pr_cntr_name,pr_rpt_name,pr_cnvrt_name:string;\n       deb_sum,kre_sum,ekv_sum:extended;\n       comment,com_d_bal,com_d_acc,com_k_bal,com_k_acc,dbc,deb:string;\n       i:integer;\nBegin\n\n   seperator:=',';\n   pc:='';\n\n   pr_d_balsql:='';\n   pr_d_accsql:='';\n   pr_d_simsql:='';\n   pr_d_rezsql:='';\n   pr_d_filsql:='';\n   pr_d_valsql:='';\n\n   pr_k_balsql:='';\n   pr_k_accsql:='';\n   pr_k_simsql:='';\n   pr_k_rezsql:='';\n   pr_k_filsql:='';\n   pr_k_valsql:='';\n   pr_cntr_name:='';\n   pr_rpt_name:='';\n   pr_cnvrt_name:='';\n\n\n\n      with oradatprovcell do\n      begin\n             if     (fieldbyname('deb_balcn1').AsString='')\n                and (fieldbyname('deb_accno').AsString='')\n                and (fieldbyname('deb_simvol').AsString='')\n                and (fieldbyname('deb_valyuta').AsString='')\n                and (fieldbyname('deb_rez').AsString='')\n                and (fieldbyname('deb_filial').AsString='')\n                and (fieldbyname('kre_balcn1').AsString='')\n                and (fieldbyname('kre_accno').AsString='')\n                and (fieldbyname('kre_simvol').AsString='')\n                and (fieldbyname('kre_valyuta').AsString='')\n                and (fieldbyname('kre_rez').AsString='')\n                and (fieldbyname('kre_filial').AsString='')\n                and (fieldbyname('report_id').AsString='')\n                and (fieldbyname('cntr_name').AsString='')\n                and (fieldbyname('kassa_z').AsString='')\n\n\n             then\n                    begin\n                          showmessage('Parametrl?rd?n he? biri daxil edilm?yib!!!');\n                          Abort;\n                    end;\n    end;    \n\n\n   Sheet:=oradatsheet.fieldbyname('sheet_id').AsInteger;\n   NisNumber:=oradatsheet.fieldbyname('nisbat').AsInteger;\n\n   pr_d_bal:=oradatprovcell.fieldbyname('deb_balcn1').AsString+',' ;\n   pr_d_acc:=oradatprovcell.fieldbyname('deb_accno').AsString+',' ;\n   pr_d_simvol:=oradatprovcell.fieldbyname('Deb_Simvol').asstring;\n   pr_d_rez:=oradatprovcell.fieldbyname('deb_rez').asstring;\n   pr_d_filial:=oradatprovcell.fieldbyname('Deb_Filial').asstring;\n   pr_d_valyuta:=oradatprovcell.fieldbyname('Deb_Valyuta').asstring;\n\n   pr_k_bal:=oradatprovcell.fieldbyname('kre_balcn1').AsString+',' ;\n   pr_k_acc:=oradatprovcell.fieldbyname('kre_accno').AsString+',' ;\n   pr_k_simvol:=oradatprovcell.fieldbyname('Kre_Simvol').asstring;\n   pr_k_rez:=oradatprovcell.fieldbyname('kre_rez').asstring;\n   pr_k_filial:=oradatprovcell.fieldbyname('kre_Filial').asstring;\n   pr_k_valyuta:=oradatprovcell.fieldbyname('Kre_Valyuta').asstring;\n   pr_cntr_name:=oradatprovcell.fieldbyname('cntr_name').asstring;\n\n\n\n\n  if oradatprovcell.FieldByName('deb_balcn1').AsString<>'' then\n  begin\n     while pos(seperator,pr_d_bal)>0 do\n       Begin\n         pc:=copy(pr_d_bal,1,pos(seperator,pr_d_bal)-1);\n         Delete(pr_d_bal,1,Pos(Seperator,pr_d_bal));\n\n         if pos(seperator,pr_d_bal)>0 then\n            pr_d_balSql:=pr_d_balSql+'  (a1.bal_cn1 like to_char('+pc+')||''%'') or '\n         else\n            pr_d_balSql:=pr_d_balSql+'  (a1.bal_cn1 like to_char('+pc+')||''%'')';\n       end;   \n           pr_d_balsql:=' and ('+pr_d_balsql+')' ;\n  end;\n  \n\n\n  if oradatprovcell.FieldByName('kre_balcn1').AsString<>'' then\n  begin\n     while pos(seperator,pr_k_bal)>0 do\n       Begin\n         pc:=copy(pr_k_bal,1,pos(seperator,pr_k_bal)-1);\n         Delete(pr_k_bal,1,Pos(Seperator,pr_k_bal));\n\n         if pos(seperator,pr_k_bal)>0 then\n            pr_k_balSql:=pr_k_balSql+'  (a2.bal_cn1 like to_char('+pc+')||''%'') or '\n         else\n            pr_k_balSql:=pr_k_balSql+'  (a2.bal_cn1 like to_char('+pc+')||''%'')';\n       end;   \n           pr_k_balsql:=' and ('+pr_k_balsql+')' ;\n  end;\n\n\n     pc:='';\n\n\n\n      if oradatprovcell.FieldByName('deb_accno').AsString<>'' then\n   begin\n      while pos(seperator,pr_d_acc)>0 do\n        Begin\n          pc:=copy(pr_d_acc,1,pos(seperator,pr_d_acc)-1);\n          Delete(pr_d_acc,1,Pos(Seperator,pr_d_acc));\n\n         if pos(seperator,pr_d_acc)>0 then\n            pr_d_accSql:=pr_d_accSql+' a1.acc_no like '''+pc+'%'' or '\n         else\n            pr_d_accSql:=pr_d_accSql+' a1.acc_no like '''+pc+'%''';\n        end;    \n             pr_d_accsql:=' and ('+ pr_d_accsql+')'   ;\n            \n   end;\n\n\n\n      if oradatprovcell.FieldByName('kre_accno').AsString<>'' then\n   begin\n      while pos(seperator,pr_k_acc)>0 do\n        Begin\n          pc:=copy(pr_k_acc,1,pos(seperator,pr_k_acc)-1);\n          Delete(pr_k_acc,1,Pos(Seperator,pr_k_acc));\n\n         if pos(seperator,pr_k_acc)>0 then\n            pr_k_accSql:=pr_k_accSql+' a2.acc_no like '''+pc+'%'' or '\n         else\n            pr_k_accSql:=pr_k_accSql+' a2.acc_no like '''+pc+'%''';\n        end;    \n             pr_k_accsql:=' and ('+ pr_k_accsql+')'   ;\n            \n   end;\n\n\n\n  if oradatprovcell.FieldByName('deb_simvol').AsString<>'' then\n    begin\n        pr_d_simsql:=' and  a1.tipacc='''+oradatprovcell.fieldbyname('deb_simvol').AsString+'''';\n    end;\n\n  if oradatprovcell.FieldByName('deb_rez').AsString<>'' then\n    begin\n         pr_d_rezsql:=' and cu.nerezident='''+oradatprovcell.fieldbyname('deb_rez').AsString+'''';\n    end;\n\n\n  if (oradatprovcell.FieldByName('deb_filial').AsString<>'') or\n      (oradatprovcell.FieldByName('deb_filial').AsString<>'Bütün filiallar') then\n   begin\n       with odsloadpok do\n         begin\n           Close;\n           Sql.Clear;\n           Sql.Text:='Select id from filial_t where name='''+oradatprovcell.fieldbyname('deb_filial').AsString+'''' ;\n           Open;\n           pr_d_filSql:=' and a1.Filial='''+fieldbyname('id').AsString+'''';\n        end;     \n   end;\n\n  if (orad"});
  U.method("tsdhesabat", "depcell", async function depcell() { return $.notPorted("tsdhesabat.depcell", "cannot assign to call"); }, {"params": [], "kind": "procedure", "ptypes": [], "error": "cannot assign to call", "src": "Procedure tsdhesabat.depcell;\nvar oradatcalc:toracledataset;\n     persql,pertpsql,val_id,a1,a2,a3,a4,a5,deptypesql:string;\n     brest,brestin,brest_ekv,brestin_ekv,tramt,deq,deq_ekv,deqin,deqin_ekv,\n     deok,deok_ekv,deokin,deokin_ekv,devk,devk_ekv,dsk,dsk_ekv,dskin,\n     dskin_ekv,vkk,vkk_ekv,PAYAMT,EINTREST,EREST,BDifDate,TrDifDate,PayDifDate,EDifDate:real;\nbegin\n\n with oradatcalc do\n   begin\n    oradatcalc:=toracledataset.Create(self);            \n    session:= oradatbook.Session;\n   end;\n\n\n  Sheet:=oradatsheet.fieldbyname('sheet_id').AsInteger;\n  NisNumber:=oradatsheet.fieldbyname('nisbat').AsInteger;\n\n  R:='';\n  C:='';\n  H:='';\n  U:='';\n  z1:='';\n  z:='';\n  balsql:='';\n  hessql:='';\n  valsql:='';\n  filsql:='';\n  persql:='';\n  pertpsql:='';\n  seperator:=',';\n  val_id:='';\n\n oradatdepcell.RecNo:=posti;\n\n  with oradatdepcell do\n    begin\n             if     (fieldbyname('Balno').AsString='')\n                and (fieldbyname('Accno').AsString='')\n                and (fieldbyname('Valyuta').AsString='')\n                and (fieldbyname('fil').AsString='')\n                and (fieldbyname('Rez').AsString='')\n             then\n                    begin\n                          showmessage('Parametrlərdən heç biri daxil edilməyib!!!');\n                          Abort;\n                    end;\n   end;      \n R:=oradatdepcell.fieldbyname('balno').asstring+',';\n C:=oradatdepcell.fieldbyname('balno').asstring;\n H:=oradatdepcell.fieldbyname('accno').asstring;\n U:=oradatdepcell.fieldbyname('accno').asstring+',';\n\n  if oradatdepcell.FieldByName('balno').AsString<>'' then\nbegin\n  while pos(seperator,R)>0 do begin\n     \n    \n        z:=copy(R,1,pos(seperator,R)-1);\n     \n        delete(R,1,pos(seperator,R));\n     \n      if pos(seperator,r)>0 then\n\n                  balsql:=balsql+'  (BAL_CN like to_char('+Z+')||''%'') or '\n                   else\n                    balsql:=balsql+'  (BAL_CN like to_char('+z+')||''%'')';\n                    \n       end;   \n           balsql:=' ('+balsql+')' ;\n\n  end;\n\n\n    if oradatdepcell.FieldByName('accno').AsString<>'' then\nbegin\n  while pos(seperator,U)>0 do begin\n     \n    \n        z:=copy(U,1,pos(seperator,U)-1);\n     \n        delete(U,1,pos(seperator,U));\n     \n      if pos(seperator,U)>0 then\n\n               \n              \n              \n             \n            \n            \n            \n\n                  hessql:=hessql+'  (SBCM_REPORT.get_depositbalance(p.id) like to_char('+Z+')||''%'') or '\n                   else\n                    hessql:=hessql+'  (SBCM_REPORT.get_depositbalance(p.id) like to_char('+z+')||''%'')';\n       end;   \n          hessql:='or'+hessql;\n\n  end;\n\n if oradatdepcell.FieldByName('valyuta').AsString<>'' then\n     begin\n           valsql:='  and  CURRENCY_NAME in  ('+\n                  updatestr(oradatdepcell.fieldbyname('Valyuta').AsString)+')';\n\n     end;\n\n  if oradatdepcell.FieldByName('Rez').AsString<>'' then\n      begin\n          rezsql:='  and sbcm_stored_programs.Get_ContractCustomerID(p.id) in (select id from customers where nerezident in ('+\n                    oradatdepcell.fieldbyname('Rez').asstring+'))'\n\n      end;\n\n  if (oradatdepcell.FieldByName('Fil').AsString<>'') or (oradatdepcell.FieldByName('Fil').AsString <> 'Bütün filiallar') then\n\n      begin\n           filsql:=' and branchid in ( select id from filial_t where name='''+\n                  oradatdepcell.fieldbyname('fil').AsString+''')'\n\n      end;\n  if (oradatdepcell.FieldByName('Fil').AsString = 'Bütün filiallar') or (oradatdepcell.FieldByName('Fil').AsString='')\n  then filsql:='';\n\n  if oradatdepcell.FieldByName('Period').AsString<>'' then\n\n       begin\n            persql:=' and PERIOD_NAME = '''+oradatdepcell.fieldbyname('period').asstring+''''\n\n       end;\n\n  if oradatdepcell.FieldByName('Pertype').AsString<>'' then\n\n       begin\n\n                pertpsql:= ' and SBCM_REPORT.get_period(p.id,:bdat ) in '''+oradatdepcell.fieldbyname('pertype').asstring+''''\n\n        end;\n\n    if oradatdepcell.FieldByName('deptype').AsString<>'' then\n\n       begin\n            deptypesql:=' and DEPTYPE = '''+oradatdepcell.fieldbyname('deptype').asstring+''''\n\n       end;\n\n    if balsql='' then balsql:=' BAL_CN is not null' ;\n\n  if (oradatdepcell.FieldByName('brest').AsString<>'') or\n   (oradatdepcell.FieldByName('brestin').AsString<>'')\n\n\n then\n\n      with oradardepozit do\n      begin\n         close;\n         sql.Clear;\n         \n         SQL.Text:='select '+\n       ' SUM (brest) AS brest,'+\n       ' SUM (tranches) AS Tramt,'+\n       ' SUM (payments) AS PayAmt,'+\n       ' SUM (erest) AS erest, '+\n       ' trunc(sum(brest*intrate)/SBCM_REPORT.get_divzero(SUM (brest)),2)  as BintRate, '+\n       ' trunc(sum(tranches*intrate)/SBCM_REPORT.get_divzero(SUM (tranches)),2)  as TrintRate, '+\n       ' trunc(sum(payments*intrate)/SBCM_REPORT.get_divzero(SUM (payments)),2)  as PayintRate, '+\n       ' trunc(sum(erest*intrate)/SBCM_REPORT.get_divzero(SUM (erest)),2)  as EintRate, '+\n\n       ' trunc(sum(brest*difdate)/SBCM_REPORT.get_divzero(SUM (brest)),2)  as BDifDate, '+\n       ' trunc(sum(tranches*difdate)/SBCM_REPORT.get_divzero(SUM (tranches)),2)  as TrDifDate, '+\n       ' trunc(sum(payments*difdate)/SBCM_REPORT.get_divzero(SUM (payments)),2)  as PayDifDate, '+\n       ' trunc(sum(erest*difdate)/SBCM_REPORT.get_divzero(SUM (erest)),2)  as EDifDate '+\n       ' FROM sbcm_reportsd where '+\n       balsql+hessql+valsql+rezsql+filsql+persql+deptypesql ;\n\n     Open;\n\n      brest :=oradardepozit.fieldbyname('Erest').asfloat;\n      brest_ekv :=oradardepozit.fieldbyname('Brest').asinteger;\n      brestin_ekv :=oradardepozit.fieldbyname('Tramt').asinteger;\n      brestin :=oradardepozit.fieldbyname('PayAmt').asinteger;\n      tramt :=oradardepozit.fieldbyname('BintRate').asinteger;\n      EINTREST :=oradardepozit.fieldbyname('PayintRate').asinteger;\n      EREST :=oradardepozit.fieldbyname('PayintRate').asinteger;\n      PAYAMT :=oradardepozit.fieldbyname('PayintRate').asinteger;\n\n      BDifDate:=orad"});
  U.method("tsdhesabat", "krecell", async function krecell() { return $.notPorted("tsdhesabat.krecell", "cannot assign to call"); }, {"params": [], "kind": "procedure", "ptypes": [], "error": "cannot assign to call", "src": "procedure tsdhesabat.krecell;\n var oradatcalc:toracledataset;\n     persql,pertpsql,val_id,a1,a2,a3,a4,a5,reservesql:string;\n     deq,deq_ekv,deqin,deqin_ekv,deok,deok_ekv,deokin,deokin_ekv,devk,devk_ekv,dsk,dsk_ekv,dskin,dskin_ekv,vkk,vkk_ekv:real;\nbegin\n\n with oradatcalc do\n   begin\n    oradatcalc:=toracledataset.Create(self);            \n    session:= oradatbook.Session;\n   end;\n\n\n  Sheet:=oradatsheet.fieldbyname('sheet_id').AsInteger;\n  NisNumber:=oradatsheet.fieldbyname('nisbat').AsInteger;\n\n\n  R:='';\n  C:='';\n  H:='';\n  U:='';\n  z1:='';\n  z:='';\n  balsql:='';\n  hessql:='';\n  valsql:='';\n  filsql:='';\n  persql:='';\n  pertpsql:='';\n  seperator:=',';\n  val_id:='';\n\n\n Oradatkrecell.RecNo:=posti;\n\n  with oradatkrecell do\n    begin\n             if     (fieldbyname('Balno').AsString='')\n                and (fieldbyname('Accno').AsString='')\n                and (fieldbyname('Valyuta').AsString='')\n                and (fieldbyname('Filial').AsString='')\n                and (fieldbyname('Rez').AsString='')\n             then\n                    begin\n                          showmessage('Parametrlərdən heç biri daxil edilməyib!!!');\n                          Abort;\n                    end;\n   end;      \n R:=OraDatkreCell.fieldbyname('balno').asstring+',';\n C:=OraDatkreCell.fieldbyname('balno').asstring;\n H:=OraDatkreCell.fieldbyname('accno').asstring;\n U:=OraDatkreCell.fieldbyname('accno').asstring+',';\n\n\n    if OraDatkreCell.FieldByName('balno').AsString<>'' then\nbegin\n  while pos(seperator,R)>0 do begin\n\n    \n        z:=copy(R,1,pos(seperator,R)-1);\n\n        delete(R,1,pos(seperator,R));\n\n      if pos(seperator,r)>0 then\n\n                  balsql:=balsql+'  (BAL_CN like to_char('+Z+')||''%'') or '\n                   else\n                    balsql:=balsql+'  (BAL_CN like to_char('+z+')||''%'')';\n       end;   \n           balsql:=' ('+balsql+')' ;\n\n  end;\n\n\n    if OraDatkreCell.FieldByName('accno').AsString<>'' then\nbegin\n  while pos(seperator,U)>0 do begin\n\n    \n        z:=copy(U,1,pos(seperator,U)-1);\n\n        delete(U,1,pos(seperator,U));\n\n      if pos(seperator,U)>0 then\n\n               \n              \n              \n             \n            \n            \n            \n\n                  hessql:=hessql+'  ((CM_SD.get_creditbalance(p.id) like to_char('+Z+')||''%'') or '\n                   else\n                    hessql:=hessql+'  ((CM_SD.get_creditbalance(p.id) like to_char('+z+')||''%'')';\n       end;   \n          hessql:='or'+hessql;\n\n  end;\n\n   if oradatkrecell.FieldByName('valyuta').AsString<>'' then\n     begin\n           valsql:='  and  CURRENCY_NAME in  ('+\n                  updatestr(oradatkrecell.fieldbyname('Valyuta').AsString)+')';\n\n     end;\n\n   if oradatkrecell.FieldByName('Rez').AsString<>'' then\n      begin\n          rezsql:='  and p.boorowerid in (select id from customers where nerezident in ('+\n                    oradatkrecell.fieldbyname('Rez').asstring+'))'\n\n      end;\n   if (oradatkrecell.FieldByName('Filial').AsString<>'') or (oradatkrecell.FieldByName('Filial').AsString<>'Bütün filiallar') then\n\n      begin\n           filsql:=' and branchid in ( select id from filial_t where name='''+\n                  oradatkrecell.fieldbyname('filial').AsString+''')'\n\n      end;\n      \n   if (oradatkrecell.FieldByName('Filial').AsString='Bütün filiallar') then filsql:='';\n\n   if oradatkrecell.FieldByName('Period').AsString<>'' then\n\n       begin\n            persql:=' and PERIOD_NAME = '''+oradatkrecell.fieldbyname('period').asstring+''''\n\n       end;\n   if oradatkrecell.FieldByName('Pertype').AsString<>'' then\n\n       begin\n\n                pertpsql:= ' and zsd_1.get_pertp(p.id) in '''+oradatkrecell.fieldbyname('pertype').asstring+''''\n\n        end;\n   if oradatkrecell.FieldByName('reserve').AsString<>'' then\n\n       begin\n\n                reservesql:= ' and RESERVE = '''+oradatkrecell.fieldbyname('reserve').asstring+''''\n\n       end;\n   if oradatkrecell.FieldByName('REGION').AsString<>'' then\n\n       begin\n\n                reservesql:= ' and REGION = '''+oradatkrecell.fieldbyname('REGION').asstring+''''\n\n       end;\n\n   if balsql='' then balsql:=' BAL_CN is not null';\n\n   if (oradatkrecell.FieldByName('deq').AsString<>'') or\n   (oradatkrecell.FieldByName('deq_ekv').AsString<>'')\n    then\n      with oradatkredit do\n      begin\n         close;\n         sql.Clear;\n\n         SQL.Text:='select '+\n       ' SUM (brest) AS brest,'+\n       ' SUM (tranches) AS Tramt,'+\n       ' SUM (payments) AS PayAmt,'+\n       ' SUM (erest) AS erest, '+\n       ' trunc(sum(brest*intrate)/cm_sd.get_divzero(SUM (brest)),2)  as BintRate, '+\n       ' trunc(sum(tranches*intrate)/cm_sd.get_divzero(SUM (tranches)),2)  as TrintRate, '+\n       ' trunc(sum(payments*intrate)/cm_sd.get_divzero(SUM (payments)),2)  as PayintRate, '+\n       ' trunc(sum(erest*intrate)/cm_sd.get_divzero(SUM (erest)),2)  as EintRate '+\n       ' FROM sbcm_report_sd where '+\n       balsql+hessql+valsql +persql+reservesql+filsql ;\n\n    \n    Open;\n     deq :=oradatkredit.fieldbyname('Erest').asinteger;\n     deq_ekv :=oradatkredit.fieldbyname('Brest').asinteger;\n     dsk :=oradatkredit.fieldbyname('Tramt').asinteger;\n     dsk_ekv :=oradatkredit.fieldbyname('PayAmt').asinteger;\n     DEQIN :=oradatkredit.fieldbyname('BintRate').asinteger;\n     dskin :=oradatkredit.fieldbyname('EintRate').asinteger;\n     DEVK :=oradatkredit.fieldbyname('TrintRate').asinteger;\n     DEOKIN :=oradatkredit.fieldbyname('PayintRate').asinteger;\n\n\n      end;\n\n\n       if oradatkrecell.FieldByName('DEOKIN').AsString<>''then\n         begin\n           XLApp.ActiveWorkBook.WorkSheets[Sheet].Range(oradatkrecell.FieldByName('DEOKIN').AsString):=abs(DEOKIN);\n           XLApp.ActiveWorkBook.WorkSheets[Sheet].Range[oradatkrecell.FieldByName('DEOKIN').AsString].clearcomments;\n           deb:='';\n           dbc:='';\n           deb:=oradatkrecell.FieldByName('DEOKIN').AsString;\n           for i :=0 to length(deb) do\n           begin\n           if  deb[i] in ['A'..'Z'] then\n          "});
  U.method("tsdhesabat", "depozitrecell", async function depozitrecell() { return $.notPorted("tsdhesabat.depozitrecell", "cannot assign to call"); }, {"params": [], "kind": "procedure", "ptypes": [], "error": "cannot assign to call", "src": "procedure tsdhesabat.depozitrecell;\n var oradatcalc:toracledataset;\n     persql,pertpsql,val_id,a1,a2,a3,a4,a5:string;\n     deq,deq_ekv,deqin,deqin_ekv,deok,deok_ekv,deokin,deokin_ekv,devk,devk_ekv,dsk,dsk_ekv,dskin,dskin_ekv,vkk,vkk_ekv:real;\nbegin\n\n with oradatcalc do\n   begin\n    oradatcalc:=toracledataset.Create(self);            \n    session:= oradatbook.Session;\n   end;\n\n\n  Sheet:=oradatsheet.fieldbyname('sheet_id').AsInteger;\n  NisNumber:=oradatsheet.fieldbyname('nisbat').AsInteger;\n\n  R:='';\n  C:='';\n  H:='';\n  U:='';\n  z1:='';\n  z:='';\n  balsql:='';\n  hessql:='';\n  valsql:='';\n  filsql:='';\n  persql:='';\n  pertpsql:='';\n  seperator:=',';\n  val_id:='';\n\n\n oradatdepcell.RecNo:=posti;\n\n  with oradatdepcell do\n    begin\n             if     (fieldbyname('Balno').AsString='')\n                and (fieldbyname('Accno').AsString='')\n                and (fieldbyname('Valyuta').AsString='')\n                and (fieldbyname('Filial').AsString='')\n                and (fieldbyname('Rez').AsString='')\n             then\n                    begin\n                          showmessage('Parametrlərdən heç biri daxil edilməyib!!!');\n                          Abort;\n                    end;\n   end;      \n R:=oradatdepcell.fieldbyname('balno').asstring+',';\n C:=oradatdepcell.fieldbyname('balno').asstring;\n H:=oradatdepcell.fieldbyname('accno').asstring;\n U:=oradatdepcell.fieldbyname('accno').asstring+',';\n\n\n   \n\n   \n\n    \n\n    \n\n\n    if OraDatkreCell.fieldbyname('balno').asstring<>'' then\n             begin\n           balsql:='  CM_SD.get_creditbalance(p.id) in ('+ OraDatkreCell.fieldbyname('balno').asstring+')';\n        end;\n    if OraDatkreCell.fieldbyname('accno').asstring<>'' then\n begin\n\n                hessql:=hessql+' and id in (select creditid from cm_accounts '+\n                        ' where contractaccid in (select id from account '+\n                        ' where acc_no in ('+updatestr(oradatkrecell.FieldByName('accno').AsString)+')))'  ;\n\n      end;\n\n\n  if oradatkrecell.FieldByName('valyuta').AsString<>'' then\n     begin\n           valsql:='  and  CM_SD.get_CreditCurrency(p.currency) in  ('+\n                  updatestr(oradatkrecell.fieldbyname('Valyuta').AsString)+')';\n\n     end;\n\n  if oradatkrecell.FieldByName('Rez').AsString<>'' then\n      begin\n          rezsql:='  and p.boorowerid in (select id from customers where nerezident in ('+\n                    oradatkrecell.fieldbyname('Rez').asstring+'))'\n\n      end;\n   if oradatkrecell.FieldByName('Filial').AsString<>'' then\n\n      begin\n           filsql:=' and p.branchid in ( select id from filial_t where name='''+\n                  oradatkrecell.fieldbyname('filial').AsString+''')'\n\n      end;\n\n    if oradatkrecell.FieldByName('Period').AsString<>'' then\n\n       begin\n            persql:=' and CM_SD.get_period(p.id,:bdat ) = '''+oradatkrecell.fieldbyname('period').asstring+''''\n\n       end;\n    if oradatkrecell.FieldByName('Pertype').AsString<>'' then\n\n       begin\n\n                pertpsql:= ' and zsd_1.get_pertp(p.id) in '''+oradatkrecell.fieldbyname('pertype').asstring+''''\n\n        end;\n if (oradatkrecell.FieldByName('deq').AsString<>'') or\n   (oradatkrecell.FieldByName('deq_ekv').AsString<>'')\n then\n      with oradatkredit do\n      begin\n         close;\n         sql.Clear;\n         sql.text:='select '+\n   ' CM_SD.get_creditbalance(p.id) as balance,'+\n   ' P.ANNUALYINTERESTRATE as intrate,'+\n   ' CM_SD.get_period(p.id,:bdat ) as period,'+\n   ' CM_SD.get_CreditCurrency(p.currency) as valute,'+\n   ' CM_SD.get_creditrest(p.id,:bdat) as BRest,'+\n   ' CM_SD.get_credittranche(p.id,:bdat,:edat) as TrAmt,'+\n   ' CM_SD.get_creditpayment(p.id,:bdat,:edat) as PayAmt,'+\n   ' CM_SD.get_creditrest(p.id,:edat) as ERest'+\n   ' from cm_portfolio p where '+ balsql+hessql+valsql+rezsql+filsql+persql+pertpsql;\n\n     open;\n     deq :=oradatkredit.fieldbyname('INTRATE').asinteger;\n     deq_ekv :=oradatkredit.fieldbyname('balance').asinteger;\n\n      end;\n\n\n if oradatkrecell.FieldByName('deq').AsString<>''then\n         begin\n           XLApp.ActiveWorkBook.WorkSheets[Sheet].Range(oradatkrecell.FieldByName('deq').AsString):=abs(deq/nisnumber);\n           XLApp.ActiveWorkBook.WorkSheets[Sheet].Range[oradatkrecell.FieldByName('deq').AsString].clearcomments;\n           deb:='';\n           dbc:='';\n           deb:=oradatkrecell.FieldByName('deq').AsString;\n           for i :=0 to length(deb) do\n           begin\n           if  deb[i] in ['A'..'Z'] then\n           begin\n             dbc:=dbc+deb[i];\n             XLApp.ActiveWorkBook.WorkSheets[sheet].Columns[dbc].NumberFormat := '0.00' ;\n             XLApp.ActiveWorkBook.WorkSheets[sheet].Columns[dbc].ColumnWidth := length(floattostr(deq))+3;\n           end;   \n           end;   \n           end;\n if oradatkrecell.FieldByName('deq_ekv').AsString<>''then\n         begin\n           XLApp.ActiveWorkBook.WorkSheets[Sheet].Range(oradatkrecell.FieldByName('deq_ekv').AsString):=abs(deq_ekv/nisnumber);\n           XLApp.ActiveWorkBook.WorkSheets[Sheet].Range[oradatkrecell.FieldByName('deq_ekv').AsString].clearcomments;\n           deb:='';\n           dbc:='';\n           deb:=oradatkrecell.FieldByName('deq_ekv').AsString;\n           for i :=0 to length(deb) do\n           begin\n           if deb[i] in ['A'..'Z'] then\n           begin\n             dbc:=dbc+deb[i];\n             XLApp.ActiveWorkBook.WorkSheets[sheet].Columns[dbc].NumberFormat := '0.00' ;\n             XLApp.ActiveWorkBook.WorkSheets[sheet].Columns[dbc].ColumnWidth := length(floattostr(deq_ekv))+3;\n           end;   \n           end;   \n           end;\n\n                                       \n\n            yenile(vk_f5,[]);\n\n            oradatkrecell.RecNo:=posti;\n            Eb:='balans- '+oradatkrecell.fieldbyname('BALNO').asstring+',';\n            Eh:='Hesab- '+oradatkrecell.fieldbyname('ACCNO').asstring+',';\n\n            if oradatkrecell.fieldbyname('BALNO').asstring='' then Eb:='';\n            if oradatkrecell.fieldbyname('ACCNO').asstring='' then Eh:='';\n\n  "});
  U.method("TSDHesabat", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "st": null};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  await $.set(C, "mypotstart", false);
  await $.set(C, "stopFlag", false);
  {
    const $t68 = (await $.v(C, "orapak"));
    await $.mset((await $.wv([$t68], "pagecontrol1", C, false)), "Visible", (await $.wv([$t68], "true", C, false)));
  }
  await $.stmt($.call(C, "readbookname", []));
  await $.mset((await $.v(C, "cmbbookname")), "ItemIndex", 0);
  await $.set(C, "oradat", (await $.mcall((await $.v(C, "toracledataset")), "Create", [Self])));
  await $.mset((await $.v(C, "oradat")), "Session", (await $.mv((await $.v(C, "oradatcell")), "Session")));
  await $.mset((await $.v(C, "OrasmartDate")), "Session", (await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")));
  await $.mset((await $.v(C, "OracleDataSet1")), "Session", (await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")));
  await $.mset((await $.v(C, "OraDatBook")), "Session", (await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")));
  await $.mset((await $.v(C, "OraDatBook")), "Active", false);
  await $.mset((await $.v(C, "OraDatBook")), "Active", true);
  await $.mset((await $.v(C, "OraDatCell")), "Session", (await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")));
  await $.mset((await $.v(C, "oradatcell")), "Active", false);
  await $.mset((await $.v(C, "OraDatCell")), "Active", true);
  await $.mset((await $.v(C, "OraDatProvCell")), "Session", (await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")));
  await $.mset((await $.v(C, "oradatprovcell")), "Active", false);
  await $.mset((await $.v(C, "OraDatProvCell")), "Active", true);
  await $.mset((await $.v(C, "oradatsdbal_cn")), "Session", (await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")));
  await $.mset((await $.v(C, "OraDatSheet")), "Session", (await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")));
  await $.mset((await $.v(C, "oradatsheet")), "active", false);
  await $.mset((await $.v(C, "OraDatSheet")), "Active", true);
  await $.mset((await $.v(C, "oradatgetsum")), "Session", (await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")));
  await $.mset((await $.v(C, "OraPrimer")), "Session", (await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")));
  await $.mset((await $.v(C, "OraLoadFilial")), "Session", (await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")));
  await $.mset((await $.v(C, "ODSLoadPok")), "Session", (await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")));
  await $.mset((await $.v(C, "OraLoadSimvol")), "Session", (await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")));
  await $.mset((await $.v(C, "oradatviewresult")), "Session", (await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")));
  await $.mset((await $.v(C, "OraSumma")), "Session", (await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")));
  await $.mset((await $.v(C, "oradatprov")), "Session", (await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")));
  await $.mset((await $.v(C, "OracleDataSet2")), "Session", (await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")));
  await $.mset((await $.v(C, "ORAPAK")), "Session", (await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")));
  await $.set(C, "kill", true);
  if ($.truthy($.ne((await $.mv((await $.idx((await $.mv((await $.v(C, "dbgrid1")), "Fields")), [0])), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.v(C, "dbgrid1")), "OnCellClick", [(await $.idx((await $.mv((await $.v(C, "dbgrid1")), "Columns")), [1]))])));
  }
  {
    const $t69 = (await $.v(C, "orasmartdate"));
    await $.stmt($.wcall([$t69], "Close", [], C));
    await $.mcall((await $.wv([$t69], "Sql", C, false)), "Clear", []);
    await $.mset((await $.wv([$t69], "sql", C, false)), "Text", "select tek_dat from sysdat");
    await $.stmt($.wcall([$t69], "Open", [], C));
    await $.mset((await $.wv([$t69], "dtp", C, false)), "DateTime", (await $.mv((await $.wcall([$t69], "fieldbyname", ["tek_dat"], C)), "AsDateTime")));
    await $.mset((await $.wv([$t69], "dtp1", C, false)), "dateTime", (await $.mv((await $.wv([$t69], "dtp", C, false)), "DateTime")));
  }
  try {
    L0["st"] = (await $.mv((await $.v(C, "tstringlist")), "create"));
    await $.stmt((await $.mcall(L0["st"], "loadfromfile", [$.add((await $.call(C, "extractfilepath", [(await $.mv((await $.v(C, "application")), "exename"))])), "menu.ini")])));
    if ($.truthy($.eq((await $.idx((await $.mv(L0["st"], "strings")), [1])), "0"))) {
    }
  } catch ($t70) {
    $.rethrowControl($t70);
    $.handled($t70);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "edacc_noKeyPress", async function edacc_noKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "i": 0, "j": 0, "h": 0, "y": 0, "n": 0, "m": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["i"] = 0;
  L0["j"] = 0;
  L0["h"] = 0;
  L0["y"] = 0;
  L0["n"] = 0;
  L0["m"] = 0;
  await $.mset((await $.v(C, "edsumost")), "Text", "");
  await $.mset((await $.v(C, "edsump_ost")), "Text", "");
  await $.mset((await $.v(C, "edobr_d")), "Text", "");
  await $.mset((await $.v(C, "edobr_k")), "Text", "");
  await $.mset((await $.v(C, "edpok_obr_d")), "Text", "");
  await $.mset((await $.v(C, "edpok_obr_k")), "Text", "");
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.set(C, "ba", $.add($.add("'and balcn1 like'", (await $.mv((await $.v(C, "edbalcn1")), "Text"))), "%"));
    await $.set(C, "ti", $.add($.add($.add("'and tipacc like'", "%"), (await $.call(C, "uppercase", [(await $.mv((await $.v(C, "edtipacc")), "Text"))]))), "%"));
    await $.set(C, "da", $.add("'and datdate='", (await $.mv((await $.v(C, "eddatdate")), "Text"))));
    await $.set(C, "va", $.add("'and val_acc='", (await $.mv((await $.v(C, "edval_acc")), "text"))));
    if ($.truthy($.eq((await $.mv((await $.v(C, "edbalcn1")), "Text")), ""))) {
      await $.set(C, "ba", "");
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "edtipacc")), "text")), ""))) {
      await $.set(C, "ti", "");
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "eddatdate")), "Text")), ""))) {
      await $.set(C, "da", "");
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "edval_acc")), "text")), ""))) {
      await $.set(C, "va", "");
    }
    {
      const $t71 = (await $.v(C, "oradatviewresult"));
      await $.stmt($.wcall([$t71], "Close", [], C));
      await $.mcall((await $.wv([$t71], "Sql", C, false)), "Clear", []);
      await $.mset((await $.wv([$t71], "sql", C, false)), "Text", $.add($.add($.add($.add($.add($.add($.add("Select s.rowid,s.* from temparchost s where acc_no like'", (await $.mv((await $.wv([$t71], "edacc_no", C, false)), "text"))), "%"), (await $.wv([$t71], "ba", C, false))), (await $.wv([$t71], "ti", C, false))), (await $.wv([$t71], "da", C, false))), (await $.wv([$t71], "va", C, false))), "'"));
      await $.stmt($.wcall([$t71], "Open", [], C));
    }
    await $.stmt($.call(C, "GETSUM", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TSDHesabat", "edbalcn1KeyPress", async function edbalcn1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "i": 0, "j": 0, "h": 0, "y": 0, "n": 0, "m": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["i"] = 0;
  L0["j"] = 0;
  L0["h"] = 0;
  L0["y"] = 0;
  L0["n"] = 0;
  L0["m"] = 0;
  await $.mset((await $.v(C, "edsumost")), "Text", "");
  await $.mset((await $.v(C, "edsump_ost")), "Text", "");
  await $.mset((await $.v(C, "edobr_d")), "Text", "");
  await $.mset((await $.v(C, "edobr_k")), "Text", "");
  await $.mset((await $.v(C, "edpok_obr_d")), "Text", "");
  await $.mset((await $.v(C, "edpok_obr_k")), "Text", "");
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.set(C, "ac", $.add($.add("'and acc_no like'", (await $.mv((await $.v(C, "edacc_no")), "text"))), "%"));
    await $.set(C, "ti", $.add($.add($.add("'and tipacc like'", "%"), (await $.call(C, "uppercase", [(await $.mv((await $.v(C, "edtipacc")), "Text"))]))), "%"));
    await $.set(C, "da", $.add("'and datdate='", (await $.mv((await $.v(C, "eddatdate")), "Text"))));
    await $.set(C, "va", $.add("'and val_acc='", (await $.mv((await $.v(C, "edval_acc")), "Text"))));
    if ($.truthy($.eq((await $.mv((await $.v(C, "edacc_no")), "Text")), ""))) {
      await $.set(C, "ac", "");
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "edtipacc")), "text")), ""))) {
      await $.set(C, "ti", "");
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "eddatdate")), "Text")), ""))) {
      await $.set(C, "da", "");
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "edval_acc")), "Text")), ""))) {
      await $.set(C, "va", "");
    }
    await $.mcall((await $.v(C, "application")), "ProcessMessages", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TSDHesabat", "edval_accKeyPress", async function edval_accKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "i": 0, "j": 0, "h": 0, "y": 0, "n": 0, "m": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["i"] = 0;
  L0["j"] = 0;
  L0["h"] = 0;
  L0["y"] = 0;
  L0["n"] = 0;
  L0["m"] = 0;
  await $.mset((await $.v(C, "edsumost")), "Text", "");
  await $.mset((await $.v(C, "edsump_ost")), "Text", "");
  await $.mset((await $.v(C, "edobr_d")), "Text", "");
  await $.mset((await $.v(C, "edobr_k")), "Text", "");
  await $.mset((await $.v(C, "edpok_obr_d")), "Text", "");
  await $.mset((await $.v(C, "edpok_obr_k")), "Text", "");
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.set(C, "ba", $.add($.add("'and balcn1 like'", (await $.mv((await $.v(C, "edbalcn1")), "Text"))), "%"));
    await $.set(C, "ac", $.add($.add("'and acc_no like'", (await $.mv((await $.v(C, "edacc_no")), "text"))), "%"));
    await $.set(C, "ti", $.add($.add($.add("'and tipacc like'", "%"), (await $.call(C, "uppercase", [(await $.mv((await $.v(C, "edtipacc")), "Text"))]))), "%"));
    await $.set(C, "da", $.add("'and datdate='", (await $.mv((await $.v(C, "eddatdate")), "Text"))));
    if ($.truthy($.eq((await $.mv((await $.v(C, "edbalcn1")), "Text")), ""))) {
      await $.set(C, "ba", "");
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "edacc_no")), "Text")), ""))) {
      await $.set(C, "ac", "");
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "edtipacc")), "text")), ""))) {
      await $.set(C, "ti", "");
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "eddatdate")), "Text")), ""))) {
      await $.set(C, "da", "");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TSDHesabat", "edtipaccKeyPress", async function edtipaccKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "i": 0, "j": 0, "h": 0, "y": 0, "n": 0, "m": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["i"] = 0;
  L0["j"] = 0;
  L0["h"] = 0;
  L0["y"] = 0;
  L0["n"] = 0;
  L0["m"] = 0;
  await $.mset((await $.v(C, "edsumost")), "Text", "");
  await $.mset((await $.v(C, "edsump_ost")), "Text", "");
  await $.mset((await $.v(C, "edobr_d")), "Text", "");
  await $.mset((await $.v(C, "edobr_k")), "Text", "");
  await $.mset((await $.v(C, "edpok_obr_d")), "Text", "");
  await $.mset((await $.v(C, "edpok_obr_k")), "Text", "");
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.set(C, "ac", $.add($.add("'and acc_no like'", (await $.mv((await $.v(C, "edacc_no")), "text"))), "%"));
    await $.set(C, "ba", $.add($.add("'and balcn1 like'", (await $.mv((await $.v(C, "edbalcn1")), "Text"))), "%"));
    await $.set(C, "da", $.add("'and datdate='", (await $.mv((await $.v(C, "eddatdate")), "Text"))));
    await $.set(C, "va", $.add("'and val_acc='", (await $.mv((await $.v(C, "edval_acc")), "Text"))));
    if ($.truthy($.eq((await $.mv((await $.v(C, "edacc_no")), "Text")), ""))) {
      await $.set(C, "ac", "");
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "edbalcn1")), "Text")), ""))) {
      await $.set(C, "ba", "");
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "eddatdate")), "Text")), ""))) {
      await $.set(C, "da", "");
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "edval_acc")), "Text")), ""))) {
      await $.set(C, "va", "");
    }
    await $.mcall((await $.v(C, "application")), "ProcessMessages", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TSDHesabat", "eddatdateKeyPress", async function eddatdateKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "i": 0, "j": 0, "h": 0, "y": 0, "n": 0, "m": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["i"] = 0;
  L0["j"] = 0;
  L0["h"] = 0;
  L0["y"] = 0;
  L0["n"] = 0;
  L0["m"] = 0;
  await $.mset((await $.v(C, "edsumost")), "Text", "");
  await $.mset((await $.v(C, "edsump_ost")), "Text", "");
  await $.mset((await $.v(C, "edobr_d")), "Text", "");
  await $.mset((await $.v(C, "edobr_k")), "Text", "");
  await $.mset((await $.v(C, "edpok_obr_d")), "Text", "");
  await $.mset((await $.v(C, "edpok_obr_k")), "Text", "");
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.set(C, "ac", $.add($.add("'and acc_no like'", (await $.mv((await $.v(C, "edacc_no")), "text"))), "%"));
    await $.set(C, "ba", $.add($.add("'and balcn1 like'", (await $.mv((await $.v(C, "edbalcn1")), "Text"))), "%"));
    await $.set(C, "ti", $.add($.add($.add("'and tipacc like'", "%"), (await $.call(C, "uppercase", [(await $.mv((await $.v(C, "edtipacc")), "Text"))]))), "%"));
    await $.set(C, "va", $.add("'and val_acc='", (await $.mv((await $.v(C, "edval_acc")), "Text"))));
    if ($.truthy($.eq((await $.mv((await $.v(C, "edacc_no")), "Text")), ""))) {
      await $.set(C, "ac", "");
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "edbalcn1")), "Text")), ""))) {
      await $.set(C, "ba", "");
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "edtipacc")), "Text")), ""))) {
      await $.set(C, "ti", "");
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "edval_acc")), "Text")), ""))) {
      await $.set(C, "va", "");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TSDHesabat", "DBGrid1CellClick", async function DBGrid1CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "lcap": 0};
  await $.fixArgs(L0, ["column"]);
  await $.mcall((await $.v(C, "application")), "ProcessMessages", []);
  if ($.truthy($.gt((await $.mv((await $.v(C, "oradatbook")), "RecordCount")), 0))) {
    { const $t72 = L0["lcap"];
      if ($.inRange($t72, 0, 7)) {
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "dbgrid2")), "Columns")), [2])), "Title")), "caption", $.add($.add($.add((await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "dbgrid2")), "Columns")), [2])), "Title")), "caption")), "    ("), (await $.call(C, "uppercase", [(await $.mv((await $.mcall((await $.v(C, "oradatbook")), "fieldbyname", ["caption"])), "AsString"))]))), ")"));
      }
      else if ($.inRange($t72, 8, 100)) {
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "dbgrid2")), "Columns")), [2])), "Title")), "caption", $.add($.add($.add((await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "dbgrid2")), "Columns")), [2])), "Title")), "caption")), "    ("), (await $.call(C, "copy", [(await $.call(C, "uppercase", [(await $.mv((await $.mcall((await $.v(C, "oradatbook")), "fieldbyname", ["caption"])), "AsString"))])), 1, 5]))), "...)"));
      }
    }
    {
      const $t73 = (await $.v(C, "oradatsheet"));
      await $.stmt($.wcall([$t73], "Close", [], C));
      await $.mcall((await $.wv([$t73], "Sql", C, false)), "Clear", []);
      await $.mset((await $.wv([$t73], "sql", C, false)), "Text", $.add($.add("select s.rowid, s.* from sheet s where Book_caption='", (await $.wcall([$t73], "trim", [(await $.mv((await $.mcall((await $.wv([$t73], "oradatbook", C, false)), "FieldByName", ["Caption"])), "asstring"))], C))), "'"));
      await $.stmt($.wcall([$t73], "Open", [], C));
      await $.stmt($.wcall([$t73], "First", [], C));
      await $.wset([$t73], "sheetcount", (await $.wv([$t73], "recordcount", C, false)), C);
    }
    await $.stmt((await $.mcall((await $.v(C, "dbgrid2")), "OnCellClick", [(await $.idx((await $.mv((await $.v(C, "dbgrid2")), "columns")), [1]))])));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("tsdhesabat", "unique", async function unique(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "book_cap": '', "sheet_i": '', "param": '', "i": 0};
  await $.staticConst(L0, "fields1", "zamirimpl1.tsdhesabat.unique.fields1", async () => ["sell", "debet", "kredit", "lcell"]);
  await $.staticConst(L0, "fields2", "zamirimpl1.tsdhesabat.unique.fields2", async () => ["deb_val", "kre_val", "ekv"]);
  await $.staticConst(L0, "fields3", "zamirimpl1.tsdhesabat.unique.fields3", async () => ["brest", "brest_ekv", "brestin", "brestin_ekv", "tramt", "tramt_ekv", "payamt", "payamt_ekv", "payintamt", "payintamt_ekv", "erest", "erest_ekv", "eintrest", "eintrest_ekv"]);
  await $.staticConst(L0, "fields4", "zamirimpl1.tsdhesabat.unique.fields4", async () => ["deq", "deq_ekv", "deqin", "deqin_ekv", "deok", "deok_ekv", "deokin", "deokin_ekv", "devk", "devk_ekv", "dsk", "dsk_ekv", "dskin", "dskin_ekv", "vkk", "vkk_ekv"]);
  L0["cell_format"] = $.fn(async function cell_format(p0) {
  const L1 = {"s": $.asRef(p0), result: false, "i": 0};
  L1["result"] = false;
  { const $t74 = (await $.call(C, "length", [(await L1["s"].get())]));
    L1["i"] = 1;
    let $t75 = true;
    for (;;) {
      if (!$t75) { L1["i"] = $.succ(L1["i"], 1); }
      $t75 = false;
      if (!($.ord(L1["i"]) <= $.ord($t74))) break;
      if ($.truthy((await $.and_(($.in_((await $.idx((await L1["s"].get()), [L1["i"]])), [...$.range("0","9")])), async () => ($.in_((await $.idx((await L1["s"].get()), [$.add(L1["i"], 1)])), [...$.range("A","Z")])))))) {
        L1["result"] = true;
      }
      await $.tick();
    }
  }
  return L1.result;
});
  L0["book_cap"] = (await $.mv((await $.mcall((await $.v(C, "oradatbook")), "fieldbyname", ["Caption"])), "AsString"));
  L0["sheet_i"] = (await $.mv((await $.mcall((await $.v(C, "oradatsheet")), "fieldbyname", ["Sheet_id"])), "asstring"));
  { const $t76 = (await $.v(C, "un_check"));
    if ($.eq($t76, 0)) {
      L0["i"] = 0;
      while ($.truthy($.lt(L0["i"], 4))) {
        L0["param"] = "";
        L0["param"] = (await $.mv((await $.mcall((await $.v(C, "oradatcell")), "Fieldbyname", [(await $.idx(L0["fields1"], [L0["i"]]))])), "AsString"));
        if ($.truthy((await $.callv(L0["cell_format"], [L0["param"]])))) {
          await $.mset((await $.v(C, "lblinfo")), "Caption", "Excel formati deyil !");
          $.abort();
        }
        {
          const $t77 = (await $.v(C, "orapak"));
          if ($.truthy($.eq((await $.wcall([$t77], "CallBooleanFunction", ["check_unique", [(await $.wv([$t77], "book_cap", { get: async () => L0["book_cap"], set: async (v) => { L0["book_cap"] = v; }, local: true }, false)), (await $.wv([$t77], "sheet_i", { get: async () => L0["sheet_i"], set: async (v) => { L0["sheet_i"] = v; }, local: true }, false)), (await $.wv([$t77], "param", { get: async () => L0["param"], set: async (v) => { L0["param"] = v; }, local: true }, false))]], C)), (await $.wv([$t77], "false", C, false))))) {
            await $.stmt((await $.wcall([$t77], "Yenile", [(await $.wv([$t77], "vk_f5", C, false)), []], C)));
            if ($.truthy($.eq((await $.mv((await $.wv([$t77], "btncelladd", C, false)), "Caption")), "Təsdiqlə"))) {
              await $.mset((await $.wv([$t77], "btnprovcelladd", C, false)), "Caption", "Əlavə Et");
            }
            if ($.truthy($.eq((await $.mv((await $.wv([$t77], "btnprovcelladd", C, false)), "Caption")), "Təsdiqlə"))) {
              await $.mset((await $.wv([$t77], "btnprovcelladd", C, false)), "Caption", "Əlavə Et");
            }
            await $.stmt((await $.wcall([$t77], "Showmessage", ["Daxil etdiyiniz xanadan var!"], C)));
            $.abort();
          }
        }
        await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["i"], async ($t78) => { L0["i"] = $t78; })])));
        await $.tick();
      }
    }
    else if ($.eq($t76, 1)) {
      L0["i"] = 0;
      while ($.truthy($.lt(L0["i"], 3))) {
        L0["param"] = "";
        L0["param"] = (await $.mv((await $.mcall((await $.v(C, "oradatprovcell")), "Fieldbyname", [(await $.idx(L0["fields2"], [L0["i"]]))])), "AsString"));
        if ($.truthy($.eq((await $.callv(L0["cell_format"], [L0["param"]])), false))) {
          await $.stmt((await $.call(C, "showmessage", ["Excel xanasını düzgün yazın. Excel formatına uyğun deyil."])));
          $.abort();
        }
        {
          const $t79 = (await $.v(C, "orapak"));
          if ($.truthy($.eq((await $.wcall([$t79], "CallBooleanFunction", ["check_unique", [(await $.wv([$t79], "book_cap", { get: async () => L0["book_cap"], set: async (v) => { L0["book_cap"] = v; }, local: true }, false)), (await $.wv([$t79], "sheet_i", { get: async () => L0["sheet_i"], set: async (v) => { L0["sheet_i"] = v; }, local: true }, false)), (await $.wv([$t79], "param", { get: async () => L0["param"], set: async (v) => { L0["param"] = v; }, local: true }, false))]], C)), (await $.wv([$t79], "false", C, false))))) {
            await $.stmt((await $.wcall([$t79], "Yenile", [(await $.wv([$t79], "vk_f5", C, false)), []], C)));
            if ($.truthy($.eq((await $.mv((await $.wv([$t79], "btncelladd", C, false)), "Caption")), "Təsdiqlə"))) {
              await $.mset((await $.wv([$t79], "btnprovcelladd", C, false)), "Caption", "Əlavə Et");
            }
            if ($.truthy($.eq((await $.mv((await $.wv([$t79], "btnprovcelladd", C, false)), "Caption")), "Təsdiqlə"))) {
              await $.mset((await $.wv([$t79], "btnprovcelladd", C, false)), "Caption", "Əlavə Et");
            }
            await $.stmt((await $.wcall([$t79], "showmessage", ["Daxil etdiyiniz xanadan var!"], C)));
            $.abort();
          }
        }
        await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["i"], async ($t80) => { L0["i"] = $t80; })])));
        await $.tick();
      }
    }
    else if ($.eq($t76, 2)) {
      L0["i"] = 0;
      while ($.truthy($.lt(L0["i"], 4))) {
        L0["param"] = "";
        L0["param"] = (await $.mv((await $.mcall((await $.v(C, "oradatcell")), "Fieldbyname", [(await $.idx(L0["fields1"], [L0["i"]]))])), "AsString"));
        if ($.truthy($.eq((await $.callv(L0["cell_format"], [L0["param"]])), false))) {
          await $.stmt((await $.call(C, "showmessage", ["Excel xanasını düzgün yazın. Excel formatına uyğun deyil."])));
          return L0.result;
        }
        await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["i"], async ($t81) => { L0["i"] = $t81; })])));
        await $.tick();
      }
    }
    else if ($.eq($t76, 3)) {
      L0["i"] = 0;
      while ($.truthy($.lt(L0["i"], 3))) {
        L0["param"] = "";
        L0["param"] = (await $.mv((await $.mcall((await $.v(C, "oradatprovcell")), "Fieldbyname", [(await $.idx(L0["fields2"], [L0["i"]]))])), "AsString"));
        await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["i"], async ($t82) => { L0["i"] = $t82; })])));
        await $.tick();
      }
    }
    else if ($.eq($t76, 4)) {
      L0["i"] = 0;
      while ($.truthy($.lt(L0["i"], 14))) {
        L0["param"] = "";
        L0["param"] = (await $.mv((await $.mcall((await $.v(C, "oradatdepcell")), "fieldbyname", [(await $.idx(L0["fields3"], [L0["i"]]))])), "asstring"));
        await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["i"], async ($t83) => { L0["i"] = $t83; })])));
        await $.tick();
      }
    }
    else if ($.eq($t76, 5)) {
      L0["i"] = 0;
      while ($.truthy($.lt(L0["i"], 16))) {
        L0["param"] = "";
        L0["param"] = (await $.mv((await $.mcall((await $.v(C, "oradatkrecell")), "fieldbyname", [(await $.idx(L0["fields4"], [L0["i"]]))])), "asstring"));
        await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["i"], async ($t84) => { L0["i"] = $t84; })])));
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TSDHesabat", "DBGrid1KeyPress", async function DBGrid1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.mcall((await $.v(C, "dbgrid1")), "OnCellClick", [(await $.idx((await $.mv((await $.v(C, "dbgrid1")), "Columns")), [1]))])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TSDHesabat", "DBGrid2CellClick", async function DBGrid2CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.stmt((await $.call(C, "yenile", [(await $.v(C, "vk_f5")), []])));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TSDHesabat", "DBGrid2KeyPress", async function DBGrid2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\r", "\u001b", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    {
      const $t85 = (await $.v(C, "oradatsheet"));
      await $.stmt($.wcall([$t85], "Edit", [], C));
      await $.mset((await $.wcall([$t85], "FieldByName", ["Nisbat"], C)), "AsString", (await $.mv((await $.wcall([$t85], "FieldByName", ["Nisbat"], C)), "AsString")));
      await $.mset((await $.mcall((await $.wv([$t85], "oradatsheet", C, false)), "FieldByName", ["sheet_id"])), "AsString", (await $.wv([$t85], "clip_shid", C, false)));
      await $.mset((await $.mcall((await $.wv([$t85], "oradatsheet", C, false)), "fieldbyname", ["caption"])), "AsString", (await $.wv([$t85], "clip_cap", C, false)));
      await $.stmt($.wcall([$t85], "Post", [], C));
      await $.mset((await $.wv([$t85], "dbgrid2", C, false)), "Options", [(await $.wv([$t85], "dgTitles", C, false)), (await $.wv([$t85], "dgIndicator", C, false)), (await $.wv([$t85], "dgColumnResize", C, false)), (await $.wv([$t85], "dgColLines", C, false)), (await $.wv([$t85], "dgRowLines", C, false)), (await $.wv([$t85], "dgTabs", C, false)), (await $.wv([$t85], "dgRowSelect", C, false)), (await $.wv([$t85], "dgAlwaysShowSelection", C, false)), (await $.wv([$t85], "dgConfirmDelete", C, false)), (await $.wv([$t85], "dgCancelOnExit", C, false))]);
    }
  }
  await $.stmt((await $.mcall((await $.v(C, "dbgrid2")), "OnCellClick", [(await $.idx((await $.mv((await $.v(C, "dbgrid2")), "columns")), [1]))])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TSDHesabat", "DBGrid3KeyPress", async function DBGrid3KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.lt((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGrid3")), "Columns")), "Grid")), "SelectedIndex")), $.sub((await $.mv((await $.mv((await $.v(C, "DBGrid3")), "Columns")), "Count")), 1)))) {
      await $.mcall((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid3")), "Columns")), [$.add((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGrid3")), "Columns")), "grid")), "SelectedIndex")), 1)])), "Field")), "FocusControl", []);
    } else {
      await $.mcall((await $.v(C, "Oradatcell")), "Next", []);
      await $.mcall((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid3")), "Columns")), [0])), "field")), "FocusControl", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TSDHesabat", "btncellAddClick", async function btncellAddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "j": 0, "k": 0, "l": 0, "stop": 0, "ora": null, "f": '', "s": '', "t": '', "ft": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.idx((await $.mv((await $.v(C, "dbgrid3")), "Fields")), [0])), "FocusControl", []);
  await $.set(C, "un_check", 0);
  if ($.truthy($.eq((await $.mv((await $.v(C, "btncelladd")), "Caption")), "Əlavə Et"))) {
    L0["k"] = 0;
  } else {
    L0["k"] = 1;
  }
  { const $t86 = L0["k"];
    if ($.eq($t86, 0)) {
      await $.mset((await $.v(C, "btncelladd")), "Caption", "");
      await $.mset((await $.v(C, "btncelladd")), "Caption", "Təsdiqlə");
      await $.mset((await $.v(C, "dbgrid3")), "Options", [(await $.v(C, "dgEditing")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit"))]);
      await $.stmt($.call(C, "ORADATCELL_EDIT", []));
      await $.mcall((await $.v(C, "oradatcell")), "First", []);
      await $.mcall((await $.v(C, "oradatcell")), "Insert", []);
      await $.mset((await $.mcall((await $.v(C, "oradatcell")), "FieldByName", ["Sheet_id"])), "asinteger", (await $.call(C, "strtoint", [(await $.mv((await $.mcall((await $.v(C, "oradatsheet")), "fieldbyname", ["sheet_id"])), "AsString"))])));
      await $.mset((await $.mcall((await $.v(C, "oradatcell")), "FieldByName", ["Book_caption"])), "asstring", (await $.mv((await $.mcall((await $.v(C, "oradatbook")), "FieldByName", ["Caption"])), "asstring")));
      await $.stmt($.call(C, "ADDPICKLIST_CELL", []));
      await $.mset((await $.v(C, "btncelledit")), "Enabled", false);
      await $.mset((await $.v(C, "btncelldel")), "Enabled", false);
      await $.mset((await $.v(C, "btncellcalc")), "Enabled", false);
    }
    else if ($.eq($t86, 1)) {
      await $.stmt($.call(C, "unique", []));
      await $.mset((await $.v(C, "btncelledit")), "Enabled", true);
      await $.mset((await $.v(C, "btncelldel")), "Enabled", true);
      await $.mset((await $.v(C, "btncellcalc")), "Enabled", true);
      await $.mset((await $.v(C, "dbgrid3")), "Options", [(await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit"))]);
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.v(C, "oradatcell")), "fieldbyname", ["CEll_Ekvivalent"])), "AsString")), "")), async () => ($.eq((await $.mv((await $.mcall((await $.v(C, "oradatcell")), "fieldbyname", ["CELL_VALYUTA"])), "AsString")), "")))))) {
        L0["l"] = 0;
      }
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.v(C, "oradatcell")), "fieldbyname", ["cell_valyuta"])), "AsString")), (await $.call(C, "Trim", ["AZN"])))), async () => ($.eq((await $.mv((await $.mcall((await $.v(C, "oradatcell")), "fieldbyname", ["Filial"])), "AsString")), "")))))) {
        L0["l"] = 1;
      }
      if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv((await $.mcall((await $.v(C, "oradatcell")), "fieldbyname", ["cell_valyuta"])), "AsString")), (await $.call(C, "Trim", ["AZN"])))), async () => ($.ne((await $.mv((await $.mcall((await $.v(C, "oradatcell")), "fieldbyname", ["Filial"])), "asstring")), "")))), async () => ($.eq((await $.mv((await $.mcall((await $.v(C, "oradatcell")), "fieldbyname", ["CEll_Ekvivalent"])), "AsString")), "")))))) {
        L0["l"] = 2;
      }
      if ($.truthy((await $.and_(($.ne((await $.mv((await $.mcall((await $.v(C, "oradatcell")), "fieldbyname", ["cell_valyuta"])), "AsString")), (await $.call(C, "Trim", ["AZN"])))), async () => ($.eq((await $.mv((await $.mcall((await $.v(C, "oradatcell")), "fieldbyname", ["CEll_Ekvivalent"])), "AsString")), "pok_ostat")))))) {
        L0["l"] = 3;
      }
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.v(C, "oradatcell")), "fieldbyname", ["cell_valyuta"])), "AsString")), (await $.call(C, "Trim", ["AZN"])))), async () => ($.eq((await $.mv((await $.mcall((await $.v(C, "oradatcell")), "fieldbyname", ["CEll_Ekvivalent"])), "AsString")), "ostat")))))) {
        L0["l"] = 4;
      }
      { const $t87 = L0["l"];
        if ($.eq($t87, 0)) {
          await $.mset((await $.mcall((await $.v(C, "oradatcell")), "fieldbyname", ["CEll_Ekvivalent"])), "AsString", "pok_ostat");
          await $.mset((await $.mcall((await $.v(C, "oradatcell")), "fieldbyname", ["cell_valyuta"])), "AsString", (await $.call(C, "Trim", ["AZN"])));
        }
        else if ($.eq($t87, 1)) {
          await $.mset((await $.mcall((await $.v(C, "oradatcell")), "fieldbyname", ["CEll_Ekvivalent"])), "AsString", "pok_ostat");
        }
        else if ($.eq($t87, 2)) {
          await $.mset((await $.mcall((await $.v(C, "oradatcell")), "fieldbyname", ["CEll_Ekvivalent"])), "AsString", "ostat");
        }
        else if ($.eq($t87, 3)) {
          await $.mset((await $.mcall((await $.v(C, "oradatcell")), "fieldbyname", ["CEll_Ekvivalent"])), "AsString", "pok_ostat");
        }
        else if ($.eq($t87, 4)) {
          await $.mset((await $.mcall((await $.v(C, "oradatcell")), "fieldbyname", ["CEll_Ekvivalent"])), "AsString", "ostat");
        }
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "oradatcell")), "FieldByName", ["filial"])), "Asstring")), ""))) {
        await $.mset((await $.mcall((await $.v(C, "oradatcell")), "FieldByName", ["filial"])), "Asstring", "Bütün Filiallar");
      }
      {
        const $t88 = (await $.v(C, "oradatcell"));
        if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(((await $.mv((await $.wcall([$t88], "fieldbyname", ["sell"], C)), "IsNull"))), async () => ((await $.mv((await $.wcall([$t88], "fieldbyname", ["Debet"], C)), "IsNull"))))), async () => ((await $.mv((await $.wcall([$t88], "fieldbyname", ["Kredit"], C)), "IsNull"))))), async () => ((await $.mv((await $.wcall([$t88], "fieldbyname", ["Lcell"], C)), "IsNull"))))), async () => ((await $.mv((await $.wcall([$t88], "fieldbyname", ["Cell_Balance"], C)), "IsNull"))))), async () => ((await $.mv((await $.wcall([$t88], "fieldbyname", ["Cell_Account"], C)), "IsNull"))))), async () => ((await $.mv((await $.wcall([$t88], "fieldbyname", ["Cell_Symbol"], C)), "IsNull"))))), async () => ((await $.mv((await $.wcall([$t88], "fieldbyname", ["Reznorez"], C)), "IsNull"))))))) {
          await $.mset((await $.wv([$t88], "btncelladd", C, false)), "Caption", "");
          await $.mset((await $.wv([$t88], "btncelladd", C, false)), "Caption", "Əlavə Et");
          await $.mset((await $.wv([$t88], "btncelledit", C, false)), "Enabled", (await $.wv([$t88], "true", C, false)));
          await $.mset((await $.wv([$t88], "btncelldel", C, false)), "Enabled", (await $.wv([$t88], "true", C, false)));
          await $.mset((await $.wv([$t88], "btncellcalc", C, false)), "Enabled", (await $.wv([$t88], "true", C, false)));
          await $.mset((await $.wv([$t88], "screen", C, false)), "Cursor", (await $.wv([$t88], "crdefault", C, false)));
          await $.stmt((await $.wcall([$t88], "YENILE", [(await $.wv([$t88], "vk_f5", C, false)), []], C)));
          $.abort();
        }
        if ($.truthy((await $.and_((await $.and_((await $.and_(($.eq((await $.mv((await $.wcall([$t88], "FieldByName", ["sell"], C)), "AsString")), "")), async () => ($.eq((await $.mv((await $.wcall([$t88], "FieldByName", ["Debet"], C)), "AsString")), "")))), async () => ($.eq((await $.mv((await $.wcall([$t88], "FieldByName", ["Kredit"], C)), "AsString")), "")))), async () => ($.eq((await $.mv((await $.wcall([$t88], "FieldByName", ["LCell"], C)), "AsString")), "")))))) {
          await $.stmt((await $.wcall([$t88], "Showmessage", ["Şablona düşəcək heç bir xana daxil edilməyib."], C)));
          await $.stmt((await $.wcall([$t88], "Yenile", [(await $.wv([$t88], "vk_f5", C, false)), []], C)));
          await $.mset((await $.wv([$t88], "screen", C, false)), "Cursor", (await $.wv([$t88], "crdefault", C, false)));
          $.abort();
        }
        await $.mset((await $.wcall([$t88], "FieldByName", ["sell"], C)), "AsString", (await $.wcall([$t88], "uppercase", [(await $.mv((await $.mcall((await $.wv([$t88], "oradatCell", C, false)), "FieldByName", ["sell"])), "AsString"))], C)));
        await $.mset((await $.wcall([$t88], "FieldByName", ["debet"], C)), "AsString", (await $.wcall([$t88], "uppercase", [(await $.mv((await $.mcall((await $.wv([$t88], "oradatCell", C, false)), "FieldByName", ["debet"])), "AsString"))], C)));
        await $.mset((await $.wcall([$t88], "FieldByName", ["kredit"], C)), "AsString", (await $.wcall([$t88], "uppercase", [(await $.mv((await $.mcall((await $.wv([$t88], "oradatCell", C, false)), "FieldByName", ["kredit"])), "AsString"))], C)));
        await $.mset((await $.wcall([$t88], "FieldByName", ["lcell"], C)), "AsString", (await $.wcall([$t88], "uppercase", [(await $.mv((await $.mcall((await $.wv([$t88], "oradatCell", C, false)), "FieldByName", ["lcell"])), "AsString"))], C)));
        await $.mset((await $.wcall([$t88], "FieldByName", ["cell_valyuta"], C)), "AsString", (await $.wcall([$t88], "uppercase", [(await $.mv((await $.mcall((await $.wv([$t88], "oradatCell", C, false)), "FieldByName", ["cell_valyuta"])), "AsString"))], C)));
        await $.stmt($.wcall([$t88], "Post", [], C));
        await $.stmt($.wcall([$t88], "Refresh", [], C));
        await $.mset((await $.wv([$t88], "btncelladd", C, false)), "Caption", "");
        await $.mset((await $.wv([$t88], "btncelladd", C, false)), "Caption", "Əlavə Et");
      }
      await $.stmt((await $.call(C, "yenile", [(await $.v(C, "vk_f5")), []])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "btncellEditClick", async function btncellEditClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "k": 0, "ora": null};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "un_check", 2);
  if ($.truthy($.eq((await $.mv((await $.v(C, "btncelledit")), "Caption")), "Redaktə Et"))) {
    L0["k"] = 0;
  } else {
    L0["k"] = 1;
  }
  { const $t89 = L0["k"];
    if ($.eq($t89, 0)) {
      await $.mset((await $.v(C, "btncelledit")), "Caption", "");
      await $.mset((await $.v(C, "btncelledit")), "Caption", "Təsdiqlə");
      await $.mset((await $.v(C, "dbgrid3")), "Options", [(await $.v(C, "dgEditing")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit"))]);
      await $.set(C, "posti", (await $.mv((await $.v(C, "oradatcell")), "RecNo")));
      await $.stmt($.call(C, "ORADATCELL_EDIT", []));
      await $.mset((await $.v(C, "oradatcell")), "RecNo", (await $.v(C, "posti")));
      await $.mcall((await $.v(C, "oradatcell")), "Edit", []);
      await $.stmt($.call(C, "ADDPICKLIST_CELL", []));
      await $.mset((await $.v(C, "btncelladd")), "Enabled", false);
      await $.mset((await $.v(C, "btncelldel")), "Enabled", false);
    }
    else if ($.eq($t89, 1)) {
      {
        const $t90 = (await $.v(C, "OradatCell"));
        await $.mset((await $.wcall([$t90], "FieldByName", ["sell"], C)), "AsString", (await $.wcall([$t90], "uppercase", [(await $.mv((await $.wcall([$t90], "FieldByName", ["sell"], C)), "AsString"))], C)));
        await $.mset((await $.wcall([$t90], "FieldByName", ["debet"], C)), "AsString", (await $.wcall([$t90], "uppercase", [(await $.mv((await $.wcall([$t90], "FieldByName", ["debet"], C)), "AsString"))], C)));
        await $.mset((await $.wcall([$t90], "FieldByName", ["kredit"], C)), "AsString", (await $.wcall([$t90], "uppercase", [(await $.mv((await $.wcall([$t90], "FieldByName", ["kredit"], C)), "AsString"))], C)));
        await $.mset((await $.wcall([$t90], "FieldByName", ["lcell"], C)), "AsString", (await $.wcall([$t90], "uppercase", [(await $.mv((await $.wcall([$t90], "FieldByName", ["lcell"], C)), "AsString"))], C)));
        await $.mset((await $.wcall([$t90], "Fieldbyname", ["cell_valyuta"], C)), "asstring", (await $.wcall([$t90], "uppercase", [(await $.mv((await $.wcall([$t90], "FieldByName", ["cell_valyuta"], C)), "AsString"))], C)));
        await $.stmt($.wcall([$t90], "Post", [], C));
        await $.stmt((await $.wcall([$t90], "YENILE", [(await $.wv([$t90], "vk_f5", C, false)), []], C)));
      }
      await $.mset((await $.v(C, "btncelladd")), "Enabled", true);
      await $.mset((await $.v(C, "btncelldel")), "Enabled", true);
      await $.mset((await $.v(C, "btncelledit")), "Caption", "");
      await $.mset((await $.v(C, "btncelledit")), "Caption", "Redaktə Et");
      await $.mset((await $.v(C, "dbgrid3")), "Options", [(await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit"))]);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "btncelldelClick", async function btncelldelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "posti", (await $.mv((await $.v(C, "oradatcell")), "RecNo")));
  await $.stmt($.call(C, "ORADATCELL_EDIT", []));
  await $.mset((await $.v(C, "oradatcell")), "RecNo", (await $.v(C, "posti")));
  if ($.truthy($.gt((await $.mv((await $.v(C, "oradatcell")), "RecordCount")), 0))) {
    if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçdiyiniz sətri silək?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
      await $.mcall((await $.v(C, "oradatcell")), "delete", []);
    }
  }
  await $.stmt((await $.call(C, "Yenile", [(await $.v(C, "vk_f5")), []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "btncellCalcClick", async function btncellCalcClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "oradat": null, "mypotok": null};
  await $.fixArgs(L0, ["sender"]);
  await $.staticConst(L0, "a", "zamirimpl1.tsdhesabat.btncellcalcclick.a", async () => ["cell", "provcell"]);
  try {
    await $.mset((await $.v(C, "btnbookcalc")), "Enabled", false);
    await $.set(C, "DoubleBuffered", true);
    L0["oradat"] = (await $.mcall((await $.v(C, "toracledataset")), "Create", [Self]));
    await $.mset(L0["oradat"], "Session", (await $.mv((await $.v(C, "oradatbook")), "Session")));
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "cbp")), "Checked")), false)), async () => ($.eq((await $.mv((await $.v(C, "cbpr")), "checked")), false)))))) {
      await $.stmt((await $.call(C, "showmessage", ["Heç bir əməliyyat seçilməyib"])));
      return L0.result;
    }
    await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crappstart")));
    await $.stmt($.call(C, "CONNECT_EXCEL", []));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "XLApp")), "WorkBooks")), "Open", [(await $.mv((await $.mcall((await $.v(C, "oradatbook")), "FieldByName", ["adress"])), "asstring"))])));
    await $.set(C, "sheet", 0);
    await $.mcall((await $.v(C, "oradatsheet")), "Refresh", []);
    await $.mcall((await $.v(C, "oradatcell")), "Refresh", []);
    await $.mcall((await $.v(C, "oradatprovcell")), "Refresh", []);
    await $.mset((await $.v(C, "pb")), "maxvalue", (await $.v(C, "sheetcount")));
    await $.mset((await $.v(C, "pb")), "Visible", true);
    await $.set(C, "cellcount", $.add((await $.mv((await $.v(C, "oradatcell")), "RecordCount")), (await $.mv((await $.v(C, "oradatprovcell")), "RecordCount"))));
    await $.mset((await $.v(C, "pb1")), "Maxvalue", (await $.v(C, "cellcount")));
    await $.mcall((await $.v(C, "oradatsheet")), "First", []);
    while ($.truthy($.not((await $.mv((await $.v(C, "oradatsheet")), "Eof"))))) {
      await $.set(C, "cellcount", 0);
      { const $t92 = 1;
        await $.set(C, "i", 0);
        let $t93 = true;
        for (;;) {
          if (!$t93) { await $.set(C, "i", $.succ((await $.v(C, "i")), 1)); }
          $t93 = false;
          if (!($.ord((await $.v(C, "i"))) <= $.ord($t92))) break;
          {
            const $t94 = L0["oradat"];
            await $.stmt($.wcall([$t94], "close", [], C));
            await $.mcall((await $.wv([$t94], "sql", C, false)), "Clear", []);
            await $.mset((await $.wv([$t94], "sql", C, false)), "Text", $.add($.add($.add($.add($.add($.add("Select count(*) as count_cell from ", (await $.idx((await $.wv([$t94], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), [(await $.wv([$t94], "i", C, false))]))), " where sheet_id="), (await $.mv((await $.mcall((await $.wv([$t94], "oradatsheet", C, false)), "fieldbyname", ["sheet_id"])), "Asstring"))), "and Book_Caption='"), (await $.mv((await $.mcall((await $.wv([$t94], "oradatbook", C, false)), "fieldbyname", ["Caption"])), "AsString"))), "'"));
            await $.stmt($.wcall([$t94], "open", [], C));
            await $.wset([$t94], "cellcount", $.add((await $.wv([$t94], "cellcount", C, false)), (await $.mv((await $.wcall([$t94], "fieldbyname", ["count_cell"], C)), "asinteger"))), C);
          }
          await $.tick();
        }
      }
      await $.mcall((await $.v(C, "application")), "ProcessMessages", []);
      await $.set(C, "Sheet", (await $.mv((await $.mcall((await $.v(C, "oradatsheet")), "fieldbyname", ["Sheet_Id"])), "AsInteger")));
      await $.set(C, "NisNumber", (await $.mv((await $.mcall((await $.v(C, "oradatsheet")), "fieldbyname", ["Nisbat"])), "AsInteger")));
      await $.mcall((await $.v(C, "application")), "ProcessMessages", []);
      await $.mset((await $.v(C, "pb")), "Progress", $.add((await $.mv((await $.v(C, "pb")), "Progress")), 1));
      if ($.truthy((await $.mv((await $.v(C, "cbp")), "Checked")))) {
        await $.mset((await $.v(C, "pagecontrol1")), "ActivePageIndex", 0);
        await $.stmt($.call(C, "ORADATCELL_EDIT", []));
        await $.set(C, "posti", (await $.mv((await $.v(C, "oradatcell")), "RecNo")));
        while ($.truthy($.not((await $.mv((await $.v(C, "oradatcell")), "Eof"))))) {
          await $.mset((await $.v(C, "pb1")), "Visible", true);
          try {
            await $.stmt($.call(C, "CELL", []));
          } catch ($t95) {
            $.rethrowControl($t95);
            $.handled($t95);
          }
          await $.stmt($.call(C, "ORADATCELL_EDIT", []));
          await $.mset((await $.v(C, "oradatcell")), "recno", (await $.v(C, "posti")));
          await $.mcall((await $.v(C, "oradatcell")), "Next", []);
          await $.set(C, "posti", (await $.mv((await $.v(C, "oradatcell")), "RecNo")));
          await $.mset((await $.v(C, "pb1")), "progress", $.add((await $.mv((await $.v(C, "pb1")), "Progress")), 1));
          await $.tick();
        }
      }
      await $.mcall((await $.v(C, "application")), "ProcessMessages", []);
      await $.mset((await $.v(C, "pb1")), "Progress", 0);
      if ($.truthy($.gt((await $.v(C, "cellcount")), 0))) {
        await $.mcall((await $.idx((await $.mv((await $.mv((await $.v(C, "xlapp")), "activeworkbook")), "worksheets")), [(await $.v(C, "sheet"))])), "select", []);
      }
      await $.mcall((await $.v(C, "oradatsheet")), "Next", []);
      await $.stmt((await $.mcall((await $.v(C, "dbgrid2")), "OnCellClick", [(await $.idx((await $.mv((await $.v(C, "dbgrid2")), "Columns")), [1]))])));
      await $.tick();
    }
    await $.mset((await $.v(C, "pb")), "Progress", 0);
    await $.mset((await $.v(C, "XLApp")), "Visible", true);
    await $.set(C, "Xlapp", (await $.v(C, "Unassigned")));
    await $.mcall((await $.v(C, "Xlapp1")), "Disconnect", []);
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.mset((await $.v(C, "btnbookcalc")), "Enabled", true);
  } catch ($t91) {
    $.rethrowControl($t91);
    $.handled($t91);
    await $.set(C, "xlapp", (await $.v(C, "unassigned")));
    await $.mcall((await $.v(C, "xlapp1")), "Disconnect", []);
    await $.mcall((await $.v(C, "xlapp1")), "Quit", []);
  }
  await $.stmt((await $.call(C, "cmbbooknameclick", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "btnSheetCalcClick", async function btnSheetCalcClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_($.not(((await $.mv((await $.v(C, "cbp")), "Checked")))), async () => $.not(((await $.mv((await $.v(C, "cbpr")), "checked")))))))) {
    await $.stmt((await $.call(C, "showmessage", ["Heç bir əməliyyat seçilməyib"])));
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crappstart")));
  await $.stmt($.call(C, "CONNECT_EXCEL", []));
  await $.mcall((await $.v(C, "oradatcell")), "Refresh", []);
  await $.mcall((await $.v(C, "oradatprovcell")), "Refresh", []);
  await $.mcall((await $.v(C, "oradatdepcell")), "Refresh", []);
  await $.mcall((await $.v(C, "oradatkrecell")), "Refresh", []);
  await $.set(C, "sheet", (await $.mv((await $.mcall((await $.v(C, "oradatsheet")), "fieldbyname", ["Sheet_id"])), "asinteger")));
  await $.set(C, "nisnumber", (await $.mv((await $.mcall((await $.v(C, "oradatsheet")), "fieldbyname", ["Nisbat"])), "asinteger")));
  await $.mset((await $.v(C, "Pb")), "maxvalue", (await $.v(C, "sheetcount")));
  await $.set(C, "cellcount", $.add($.add((await $.mv((await $.v(C, "oradatcell")), "RecordCount")), (await $.mv((await $.v(C, "oradatprovcell")), "RecordCount"))), (await $.mv((await $.v(C, "oradatdepcell")), "RecordCount"))));
  await $.mset((await $.v(C, "pb1")), "Maxvalue", (await $.v(C, "cellcount")));
  if ($.truthy((await $.mv((await $.v(C, "cbp")), "Checked")))) {
    await $.mset((await $.v(C, "pagecontrol1")), "ActivePageIndex", 0);
    await $.stmt($.call(C, "ORADATCELL_EDIT", []));
    await $.set(C, "posti", (await $.mv((await $.v(C, "oradatcell")), "RecNo")));
    while ($.truthy($.not((await $.mv((await $.v(C, "oradatcell")), "Eof"))))) {
      await $.mset((await $.v(C, "pb1")), "Visible", true);
      await $.stmt($.call(C, "CELL", []));
      await $.stmt($.call(C, "ORADATCELL_EDIT", []));
      await $.mset((await $.v(C, "oradatcell")), "recno", (await $.v(C, "posti")));
      await $.mcall((await $.v(C, "oradatcell")), "Next", []);
      await $.set(C, "posti", (await $.mv((await $.v(C, "oradatcell")), "RecNo")));
      await $.mset((await $.v(C, "pb1")), "progress", $.add((await $.mv((await $.v(C, "pb1")), "Progress")), 1));
      await $.tick();
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "cbpr")), "Checked")))) {
    await $.mset((await $.v(C, "pagecontrol1")), "ActivePageIndex", 1);
    await $.stmt($.call(C, "ORADATPROVCELL_EDIT", []));
    await $.set(C, "posti", (await $.mv((await $.v(C, "oradatprovcell")), "RecNo")));
    while ($.truthy($.not((await $.mv((await $.v(C, "oradatprovcell")), "Eof"))))) {
      await $.mset((await $.v(C, "pb1")), "Visible", true);
      await $.stmt($.call(C, "PROVCELL", []));
      await $.stmt($.call(C, "ORADATPROVCELL_EDIT", []));
      await $.mset((await $.v(C, "oradatprovcell")), "recno", (await $.v(C, "posti")));
      await $.mcall((await $.v(C, "oradatprovcell")), "Next", []);
      await $.set(C, "posti", (await $.mv((await $.v(C, "oradatprovcell")), "RecNo")));
      await $.mset((await $.v(C, "pb1")), "progress", $.add((await $.mv((await $.v(C, "pb1")), "Progress")), 1));
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "pb1")), "Progress", 0);
  await $.mset((await $.v(C, "pb1")), "Visible", false);
  await $.mcall((await $.idx((await $.mv((await $.mv((await $.v(C, "xlapp")), "activeworkbook")), "worksheets")), [(await $.v(C, "sheet"))])), "select", []);
  await $.mset((await $.v(C, "XLApp")), "Visible", true);
  await $.set(C, "xlapp", (await $.v(C, "Unassigned")));
  await $.mcall((await $.v(C, "xlapp1")), "Disconnect", []);
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crdefault")));
  await $.stmt((await $.mcall((await $.v(C, "Dbgrid2")), "OnCellClick", [(await $.idx((await $.mv((await $.v(C, "dbgrid2")), "columns")), [1]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "btnBookCalcClick", async function btnBookCalcClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "oradat": null, "mypotok": null};
  await $.fixArgs(L0, ["sender"]);
  await $.staticConst(L0, "a", "zamirimpl1.tsdhesabat.btnbookcalcclick.a", async () => ["cell", "provcell"]);
  await $.set(C, "StartDate", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP")), "DateTime"))]))])));
  await $.set(C, "FinDate", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP1")), "DateTime"))]))])));
  try {
    await $.mset((await $.v(C, "btnbookcalc")), "Enabled", false);
    await $.set(C, "DoubleBuffered", true);
    L0["oradat"] = (await $.mcall((await $.v(C, "toracledataset")), "Create", [Self]));
    await $.mset(L0["oradat"], "Session", (await $.mv((await $.v(C, "oradatbook")), "Session")));
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "cbp")), "Checked")), false)), async () => ($.eq((await $.mv((await $.v(C, "cbpr")), "checked")), false)))))) {
      await $.stmt((await $.call(C, "showmessage", ["Heç bir əməliyyat seçilməyib"])));
      return L0.result;
    }
    await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crappstart")));
    await $.stmt($.call(C, "CONNECT_EXCEL", []));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "XLApp")), "WorkBooks")), "Open", [(await $.mv((await $.mcall((await $.v(C, "oradatbook")), "FieldByName", ["adress"])), "asstring"))])));
    await $.set(C, "sheet", 0);
    await $.mset((await $.v(C, "pb")), "maxvalue", (await $.v(C, "sheetcount")));
    await $.mset((await $.v(C, "pb")), "Visible", true);
    await $.set(C, "cellcount", $.add((await $.mv((await $.v(C, "oradatcell")), "RecordCount")), (await $.mv((await $.v(C, "oradatprovcell")), "RecordCount"))));
    await $.mset((await $.v(C, "pb1")), "Maxvalue", (await $.v(C, "cellcount")));
    await $.mcall((await $.v(C, "oradatsheet")), "First", []);
    while ($.truthy($.not((await $.mv((await $.v(C, "oradatsheet")), "Eof"))))) {
      await $.set(C, "cellcount", 0);
      { const $t97 = 3;
        await $.set(C, "i", 0);
        let $t98 = true;
        for (;;) {
          if (!$t98) { await $.set(C, "i", $.succ((await $.v(C, "i")), 1)); }
          $t98 = false;
          if (!($.ord((await $.v(C, "i"))) <= $.ord($t97))) break;
          {
            const $t99 = L0["oradat"];
            await $.stmt($.wcall([$t99], "close", [], C));
            await $.mcall((await $.wv([$t99], "sql", C, false)), "Clear", []);
            await $.mset((await $.wv([$t99], "sql", C, false)), "Text", $.add($.add($.add($.add($.add($.add("Select count(*) as count_cell from ", (await $.idx((await $.wv([$t99], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), [(await $.wv([$t99], "i", C, false))]))), " where sheet_id="), (await $.mv((await $.mcall((await $.wv([$t99], "oradatsheet", C, false)), "fieldbyname", ["sheet_id"])), "Asstring"))), "and Book_Caption='"), (await $.mv((await $.mcall((await $.wv([$t99], "oradatbook", C, false)), "fieldbyname", ["Caption"])), "AsString"))), "'"));
            await $.stmt($.wcall([$t99], "open", [], C));
            await $.wset([$t99], "cellcount", $.add((await $.wv([$t99], "cellcount", C, false)), (await $.mv((await $.wcall([$t99], "fieldbyname", ["count_cell"], C)), "asinteger"))), C);
          }
          await $.tick();
        }
      }
      await $.mcall((await $.v(C, "application")), "ProcessMessages", []);
      await $.stmt((await $.mcall((await $.v(C, "dbgrid2")), "OnCellClick", [(await $.idx((await $.mv((await $.v(C, "dbgrid2")), "Columns")), [1]))])));
      await $.set(C, "Sheet", (await $.mv((await $.mcall((await $.v(C, "oradatsheet")), "fieldbyname", ["Sheet_Id"])), "AsInteger")));
      await $.set(C, "NisNumber", (await $.mv((await $.mcall((await $.v(C, "oradatsheet")), "fieldbyname", ["Nisbat"])), "AsInteger")));
      await $.mcall((await $.v(C, "application")), "ProcessMessages", []);
      await $.mset((await $.v(C, "pb")), "Progress", $.add((await $.mv((await $.v(C, "pb")), "Progress")), 1));
      if ($.truthy((await $.mv((await $.v(C, "cbp")), "Checked")))) {
        await $.mset((await $.v(C, "pagecontrol1")), "ActivePageIndex", 0);
        await $.stmt($.call(C, "ORADATCELL_EDIT", []));
        await $.set(C, "posti", (await $.mv((await $.v(C, "oradatcell")), "RecNo")));
        while ($.truthy($.not((await $.mv((await $.v(C, "oradatcell")), "Eof"))))) {
          await $.mset((await $.v(C, "pb1")), "Visible", true);
          try {
            await $.stmt($.call(C, "CELL", []));
          } catch ($t100) {
            $.rethrowControl($t100);
            $.handled($t100);
          }
          await $.stmt($.call(C, "ORADATCELL_EDIT", []));
          await $.mset((await $.v(C, "oradatcell")), "recno", (await $.v(C, "posti")));
          await $.mcall((await $.v(C, "oradatcell")), "Next", []);
          await $.set(C, "posti", (await $.mv((await $.v(C, "oradatcell")), "RecNo")));
          await $.mset((await $.v(C, "pb1")), "progress", $.add((await $.mv((await $.v(C, "pb1")), "Progress")), 1));
          await $.tick();
        }
      }
      if ($.truthy((await $.mv((await $.v(C, "cbpr")), "Checked")))) {
        await $.mset((await $.v(C, "pagecontrol1")), "ActivePageIndex", 1);
        await $.stmt($.call(C, "ORADATPROVCELL_EDIT", []));
        await $.set(C, "posti", (await $.mv((await $.v(C, "oradatprovcell")), "RecNo")));
        while ($.truthy($.not((await $.mv((await $.v(C, "oradatprovcell")), "Eof"))))) {
          await $.mset((await $.v(C, "pb1")), "Visible", true);
          try {
            await $.stmt($.call(C, "PROVCELL", []));
          } catch ($t101) {
            $.rethrowControl($t101);
            $.handled($t101);
          }
          await $.stmt($.call(C, "ORADATPROVCELL_EDIT", []));
          await $.mset((await $.v(C, "oradatprovcell")), "recno", (await $.v(C, "posti")));
          await $.mcall((await $.v(C, "oradatprovcell")), "Next", []);
          await $.set(C, "posti", (await $.mv((await $.v(C, "oradatprovcell")), "RecNo")));
          await $.mset((await $.v(C, "pb1")), "progress", $.add((await $.mv((await $.v(C, "pb1")), "Progress")), 1));
          await $.tick();
        }
      }
      await $.mcall((await $.v(C, "application")), "ProcessMessages", []);
      await $.mset((await $.v(C, "pb1")), "Progress", 0);
      if ($.truthy($.gt((await $.v(C, "cellcount")), 0))) {
        await $.mcall((await $.idx((await $.mv((await $.mv((await $.v(C, "xlapp")), "activeworkbook")), "worksheets")), [(await $.v(C, "sheet"))])), "select", []);
      }
      await $.mcall((await $.v(C, "oradatsheet")), "Next", []);
      await $.stmt((await $.mcall((await $.v(C, "dbgrid2")), "OnCellClick", [(await $.idx((await $.mv((await $.v(C, "dbgrid2")), "Columns")), [1]))])));
      await $.tick();
    }
    await $.mset((await $.v(C, "pb")), "Progress", 0);
    await $.mset((await $.v(C, "XLApp")), "Visible", true);
    await $.set(C, "Xlapp", (await $.v(C, "Unassigned")));
    await $.mcall((await $.v(C, "Xlapp1")), "Disconnect", []);
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.mset((await $.v(C, "btnbookcalc")), "Enabled", true);
  } catch ($t96) {
    $.rethrowControl($t96);
    $.handled($t96);
    await $.set(C, "xlapp", (await $.v(C, "unassigned")));
    await $.mcall((await $.v(C, "xlapp1")), "Disconnect", []);
    await $.mcall((await $.v(C, "xlapp1")), "Quit", []);
  }
  await $.stmt((await $.call(C, "cmbbooknameclick", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "btnBookAddClick", async function btnBookAddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "odialog")), "Execute")))) {
    {
      const $t102 = (await $.v(C, "oradatbook"));
      await $.stmt($.wcall([$t102], "close", [], C));
      await $.stmt($.wcall([$t102], "open", [], C));
      { const $t103 = (await $.wv([$t102], "recordcount", C, false));
        await $.wset([$t102], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t104 = true;
        for (;;) {
          if (!$t104) { await $.wset([$t102], "i", $.succ((await $.wv([$t102], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t104 = false;
          if (!($.ord((await $.wv([$t102], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t103))) break;
          if ($.truthy($.eq((await $.wcall([$t102], "trim", [(await $.mv((await $.wcall([$t102], "FieldByName", ["adress"], C)), "asstring"))], C)), (await $.wcall([$t102], "trim", [(await $.mv((await $.wv([$t102], "ODialog", C, false)), "FileName"))], C))))) {
            await $.mset((await $.wv([$t102], "screen", C, false)), "Cursor", (await $.wv([$t102], "crdefault", C, false)));
            return L0.result;
          }
          await $.stmt($.wcall([$t102], "Next", [], C));
          await $.tick();
        }
      }
      if ($.truthy($.ne((await $.mv((await $.wv([$t102], "ODialog", C, false)), "FileName")), ""))) {
        await $.mcall((await $.wv([$t102], "application", C, false)), "ProcessMessages", []);
        await $.stmt($.wcall([$t102], "close", [], C));
        await $.stmt($.wcall([$t102], "Open", [], C));
        await $.stmt($.wcall([$t102], "Insert", [], C));
        await $.mset((await $.wcall([$t102], "FieldByName", ["Adress"], C)), "asstring", (await $.mv((await $.wv([$t102], "ODialog", C, false)), "FileName")));
        await $.mset((await $.wcall([$t102], "FieldByName", ["Caption"], C)), "asstring", (await $.wcall([$t102], "trim", [(await $.wcall([$t102], "ExtractFileName", [(await $.wcall([$t102], "copy", [(await $.mv((await $.wv([$t102], "ODialog", C, false)), "FileName")), 1, $.sub((await $.wcall([$t102], "pos", [".", (await $.mv((await $.wv([$t102], "ODialog", C, false)), "FileName"))], C)), 1)], C))], C))], C)));
        await $.mset((await $.mcall((await $.wv([$t102], "OraDatSheet", C, false)), "FieldByName", ["Book_Caption"])), "asstring", (await $.mv((await $.wcall([$t102], "FieldByName", ["Caption"], C)), "asstring")));
        await $.stmt($.wcall([$t102], "Post", [], C));
      } else {
        await $.mset((await $.wv([$t102], "screen", C, false)), "Cursor", (await $.wv([$t102], "crdefault", C, false)));
        return L0.result;
      }
    }
    await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crappstart")));
    await $.mcall((await $.v(C, "application")), "ProcessMessages", []);
    try {
      await $.mcall((await $.v(C, "xlapp1")), "Connect", []);
      await $.set(C, "Xlapp", (await $.call(C, "GetActiveOleObject", ["Excel.Application"])));
    } catch ($t105) {
      $.rethrowControl($t105);
      $.handled($t105);
      await $.stmt((await $.call(C, "showmessage", ["Excel export etmək mümkün deyil!"])));
    }
    await $.mset((await $.v(C, "XLApp")), "DisplayAlerts", false);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "XLApp")), "WorkBooks")), "Open", [(await $.mv((await $.mcall((await $.v(C, "oradatbook")), "FieldByName", ["Adress"])), "asstring"))])));
    await $.set(C, "sheetcount", (await $.mv((await $.mv((await $.v(C, "XLApp")), "Worksheets")), "count")));
    { const $t106 = (await $.v(C, "sheetcount"));
      L0["j"] = 1;
      let $t107 = true;
      for (;;) {
        if (!$t107) { L0["j"] = $.succ(L0["j"], 1); }
        $t107 = false;
        if (!($.ord(L0["j"]) <= $.ord($t106))) break;
        {
          const $t108 = (await $.v(C, "oradatsheet"));
          await $.stmt($.wcall([$t108], "close", [], C));
          await $.stmt($.wcall([$t108], "open", [], C));
          await $.stmt($.wcall([$t108], "insert", [], C));
          await $.mset((await $.wcall([$t108], "Fieldbyname", ["Sheet_Id"], C)), "asstring", (await $.wcall([$t108], "inttostr", [(await $.wv([$t108], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))], C)));
          await $.mset((await $.wcall([$t108], "FieldByName", ["Caption"], C)), "asstring", (await $.mv((await $.idx((await $.mv((await $.mv((await $.wv([$t108], "XLApp", C, false)), "ActiveWorkBook")), "Sheets")), [(await $.wv([$t108], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "Name")));
          await $.mset((await $.wcall([$t108], "FieldByName", ["Book_caption"], C)), "asstring", (await $.wcall([$t108], "trim", [(await $.mv((await $.mcall((await $.wv([$t108], "oradatbook", C, false)), "FieldByName", ["Caption"])), "asstring"))], C)));
          await $.mset((await $.wcall([$t108], "FieldByName", ["Nisbat"], C)), "asinteger", (await $.wcall([$t108], "strtoint", ["1"], C)));
          await $.stmt($.wcall([$t108], "Post", [], C));
          await $.mcall((await $.wv([$t108], "oradatsheet", C, false)), "Next", []);
        }
        await $.tick();
      }
    }
    await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crdefault")));
    try {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "XLApp")), "ActiveWorkBook")), "SaveAs", [(await $.mv((await $.mcall((await $.v(C, "oradatbook")), "FieldByName", ["adress"])), "asstring"))])));
    } catch ($t109) {
      $.rethrowControl($t109);
      $.handled($t109);
      await $.stmt((await $.call(C, "Showmessage", ["Can`t saved in Excel file. It may be Protected"])));
    }
    await $.stmt((await $.mcall((await $.v(C, "dbgrid1")), "OnCellClick", [(await $.idx((await $.mv((await $.mv((await $.v(C, "dbgrid1")), "Columns")), "Items")), [1]))])));
    await $.stmt((await $.mcall((await $.v(C, "dbgrid2")), "OnCellClick", [(await $.idx((await $.mv((await $.mv((await $.v(C, "dbgrid2")), "Columns")), "Items")), [1]))])));
    await $.stmt($.call(C, "readbookname", []));
    try {
      await $.set(C, "xlapp", (await $.v(C, "Unassigned")));
      await $.mcall((await $.v(C, "xlapp1")), "Disconnect", []);
      await $.mcall((await $.v(C, "xlapp1")), "Quit", []);
    } catch ($t110) {
      $.rethrowControl($t110);
      $.handled($t110);
      await $.stmt((await $.call(C, "showmessage", ["error"])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "btnBookDelClick", async function btnBookDelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t111 = (await $.v(C, "oradatbook"));
    await $.stmt($.wcall([$t111], "delete", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "DBGrid3CellClick", async function DBGrid3CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TSDHesabat", "btnprovcelladdClick", async function btnprovcelladdClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "k": 0, "l": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.idx((await $.mv((await $.v(C, "dbgrid5")), "Fields")), [0])), "FocusControl", []);
  await $.set(C, "un_check", 1);
  if ($.truthy($.eq((await $.mv((await $.v(C, "btnprovcelladd")), "Caption")), "Əlavə Et"))) {
    L0["k"] = 0;
  } else {
    L0["k"] = 1;
  }
  { const $t112 = L0["k"];
    if ($.eq($t112, 0)) {
      await $.mset((await $.v(C, "btnprovcelladd")), "Caption", "");
      await $.mset((await $.v(C, "btnprovcelladd")), "Caption", "Təsdiqlə");
      await $.mset((await $.v(C, "btnprovcelledit")), "Enabled", false);
      await $.mset((await $.v(C, "btnprovcelldel")), "Enabled", false);
      await $.mset((await $.v(C, "btnprovcellcalc")), "Enabled", false);
      await $.mset((await $.v(C, "dbgrid5")), "Options", [(await $.v(C, "dgEditing")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit"))]);
      await $.stmt($.call(C, "ORADATPROVCELL_EDIT", []));
      await $.mcall((await $.v(C, "oradatprovcell")), "First", []);
      await $.mcall((await $.v(C, "oradatprovcell")), "Insert", []);
      await $.mset((await $.mcall((await $.v(C, "oradatprovCell")), "FieldByName", ["Sheet_id"])), "asinteger", (await $.call(C, "strtoint", [(await $.mv((await $.idx((await $.mv((await $.v(C, "dbgrid2")), "Fields")), [1])), "Text"))])));
      await $.mset((await $.mcall((await $.v(C, "oradatprovCell")), "FieldByName", ["Book_caption"])), "asstring", (await $.mv((await $.mcall((await $.v(C, "oradatbook")), "FieldByName", ["Caption"])), "asstring")));
      await $.stmt($.call(C, "ADDPICKLIST_PROVCELL", []));
    }
    else if ($.eq($t112, 1)) {
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "oradatprovcell")), "FieldByName", ["deb_filial"])), "Asstring")), ""))) {
        await $.mset((await $.mcall((await $.v(C, "oradatprovcell")), "FieldByName", ["deb_filial"])), "Asstring", "Bütün filiallar");
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "oradatprovcell")), "FieldByName", ["kre_filial"])), "Asstring")), ""))) {
        await $.mset((await $.mcall((await $.v(C, "oradatprovcell")), "FieldByName", ["kre_filial"])), "Asstring", "Bütün filiallar");
      }
      {
        const $t113 = (await $.v(C, "oradatprovcell"));
        if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(((await $.mv((await $.wcall([$t113], "FieldByName", ["deb_val"], C)), "IsNull"))), async () => ((await $.mv((await $.wcall([$t113], "Fieldbyname", ["kre_val"], C)), "IsNull"))))), async () => ((await $.mv((await $.wcall([$t113], "Fieldbyname", ["ekv"], C)), "IsNull"))))), async () => ((await $.mv((await $.wcall([$t113], "Fieldbyname", ["deb_balcn1"], C)), "IsNull"))))), async () => ((await $.mv((await $.wcall([$t113], "FieldByName", ["deb_accno"], C)), "Isnull"))))), async () => ((await $.mv((await $.wcall([$t113], "Fieldbyname", ["deb_simvol"], C)), "IsNull"))))), async () => ((await $.mv((await $.wcall([$t113], "Fieldbyname", ["deb_rez"], C)), "IsNull"))))), async () => ((await $.mv((await $.wcall([$t113], "Fieldbyname", ["deb_filial"], C)), "IsNull"))))), async () => ((await $.mv((await $.wcall([$t113], "Fieldbyname", ["deb_valyuta"], C)), "IsNull"))))), async () => ((await $.mv((await $.wcall([$t113], "Fieldbyname", ["kre_balcn1"], C)), "IsNull"))))), async () => ((await $.mv((await $.wcall([$t113], "FieldByName", ["kre_accno"], C)), "Isnull"))))), async () => ((await $.mv((await $.wcall([$t113], "Fieldbyname", ["kre_simvol"], C)), "IsNull"))))), async () => ((await $.mv((await $.wcall([$t113], "Fieldbyname", ["kre_rez"], C)), "IsNull"))))), async () => ((await $.mv((await $.wcall([$t113], "Fieldbyname", ["kre_filial"], C)), "IsNull"))))), async () => ((await $.mv((await $.wcall([$t113], "Fieldbyname", ["kre_valyuta"], C)), "IsNull"))))))) {
          await $.mset((await $.wv([$t113], "btnprovcelladd", C, false)), "Caption", "");
          await $.mset((await $.wv([$t113], "btnprovcelladd", C, false)), "Caption", "?lav? Et");
          await $.mset((await $.wv([$t113], "btnprovcelledit", C, false)), "Enabled", (await $.wv([$t113], "true", C, false)));
          await $.mset((await $.wv([$t113], "btnprovcelldel", C, false)), "Enabled", (await $.wv([$t113], "true", C, false)));
          await $.mset((await $.wv([$t113], "btnprovcellcalc", C, false)), "Enabled", (await $.wv([$t113], "true", C, false)));
          await $.stmt((await $.wcall([$t113], "Yenile", [(await $.wv([$t113], "vk_f5", C, false)), []], C)));
          await $.mset((await $.wv([$t113], "screen", C, false)), "Cursor", (await $.wv([$t113], "crdefault", C, false)));
          $.abort();
        }
        if ($.truthy((await $.and_((await $.and_(($.eq((await $.mv((await $.wcall([$t113], "FieldByName", ["deb_val"], C)), "AsString")), "")), async () => ($.eq((await $.mv((await $.wcall([$t113], "FieldByName", ["kre_val"], C)), "AsString")), "")))), async () => ($.eq((await $.mv((await $.wcall([$t113], "FieldByName", ["ekv"], C)), "AsString")), "")))))) {
          await $.stmt((await $.wcall([$t113], "showmessage", ["Şablona düşəcək xana daxil edilməyib."], C)));
          $.abort();
        }
        await $.mset((await $.wcall([$t113], "FieldByName", ["deb_val"], C)), "AsString", (await $.wcall([$t113], "uppercase", [(await $.mv((await $.mcall((await $.wv([$t113], "oradatprovCell", C, false)), "FieldByName", ["deb_val"])), "AsString"))], C)));
        await $.mset((await $.wcall([$t113], "FieldByName", ["kre_val"], C)), "AsString", (await $.wcall([$t113], "uppercase", [(await $.mv((await $.mcall((await $.wv([$t113], "oradatprovCell", C, false)), "FieldByName", ["kre_val"])), "AsString"))], C)));
        await $.mset((await $.wcall([$t113], "FieldByName", ["ekv"], C)), "AsString", (await $.wcall([$t113], "uppercase", [(await $.mv((await $.mcall((await $.wv([$t113], "oradatprovCell", C, false)), "FieldByName", ["ekv"])), "AsString"))], C)));
        await $.stmt($.wcall([$t113], "Post", [], C));
        await $.stmt($.wcall([$t113], "Refresh", [], C));
        await $.stmt((await $.wcall([$t113], "YENILE", [(await $.wv([$t113], "VK_F5", C, false)), []], C)));
        await $.mset((await $.wv([$t113], "btnprovcelladd", C, false)), "Caption", "");
        await $.mset((await $.wv([$t113], "btnprovcelladd", C, false)), "Caption", "Əlavə Et");
        await $.mset((await $.wv([$t113], "btnprovcelledit", C, false)), "Enabled", (await $.wv([$t113], "true", C, false)));
        await $.mset((await $.wv([$t113], "btnprovcelldel", C, false)), "Enabled", (await $.wv([$t113], "true", C, false)));
        await $.mset((await $.wv([$t113], "btnprovcellcalc", C, false)), "Enabled", (await $.wv([$t113], "true", C, false)));
        await $.mset((await $.wv([$t113], "dbgrid5", C, false)), "Options", [(await $.wv([$t113], "dgTitles", C, false)), (await $.wv([$t113], "dgIndicator", C, false)), (await $.wv([$t113], "dgColumnResize", C, false)), (await $.wv([$t113], "dgColLines", C, false)), (await $.wv([$t113], "dgRowLines", C, false)), (await $.wv([$t113], "dgTabs", C, false)), (await $.wv([$t113], "dgConfirmDelete", C, false)), (await $.wv([$t113], "dgCancelOnExit", C, false))]);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "DBGrid5CellClick", async function DBGrid5CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mset((await $.v(C, "application")), "HintColor", (await $.v(C, "clinfobk")));
  await $.mset((await $.v(C, "application")), "HintPause", 1);
  await $.mset((await $.v(C, "application")), "HintHidePause", 3000);
  await $.mset((await $.v(C, "dbgrid5")), "ShowHint", true);
  await $.mset((await $.v(C, "dbgrid5")), "Hint", (await $.mv((await $.mcall((await $.v(C, "oradatprovcell")), "FieldByName", [(await $.mv((await $.mv((await $.v(C, "dbgrid5")), "SelectedField")), "DisplayName"))])), "AsString")));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TSDHesabat", "DBGrid5KeyPress", async function DBGrid5KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.lt((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "Columns")), "Grid")), "SelectedIndex")), $.sub((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "Columns")), "Count")), 1)))) {
      await $.mcall((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid5")), "Columns")), [$.add((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "Columns")), "grid")), "SelectedIndex")), 1)])), "Field")), "FocusControl", []);
    } else {
      await $.mcall((await $.v(C, "Oradatcell")), "Next", []);
      await $.mcall((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid5")), "Columns")), [0])), "field")), "FocusControl", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TSDHesabat", "btnprovcelleditClick", async function btnprovcelleditClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "k": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "un_check", 3);
  if ($.truthy($.eq((await $.mv((await $.v(C, "btnprovcelledit")), "Caption")), "Redaktə Et"))) {
    L0["k"] = 0;
  } else {
    L0["k"] = 1;
  }
  { const $t114 = L0["k"];
    if ($.eq($t114, 0)) {
      await $.mset((await $.v(C, "btnprovcelledit")), "Caption", "");
      await $.mset((await $.v(C, "btnprovcelledit")), "Caption", "Təsdiqlə");
      await $.mset((await $.v(C, "dbgrid5")), "Options", [(await $.v(C, "dgEditing")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit"))]);
      await $.set(C, "Posti", (await $.mv((await $.v(C, "oradatprovcell")), "RecNo")));
      await $.stmt($.call(C, "oradatprovcell_edit", []));
      await $.mcall((await $.v(C, "oradatprovcell")), "Edit", []);
      await $.mset((await $.v(C, "oradatprovcell")), "RecNo", (await $.v(C, "Posti")));
      await $.stmt($.call(C, "ADDPICKLIST_PROVCELL", []));
      await $.mset((await $.v(C, "btnprovcelladd")), "Enabled", false);
      await $.mset((await $.v(C, "btnprovcelldel")), "Enabled", false);
    }
    else if ($.eq($t114, 1)) {
      {
        const $t115 = (await $.v(C, "OradatProvCell"));
        await $.mcall((await $.wv([$t115], "oradatprovcell", C, false)), "edit", []);
        await $.mset((await $.wcall([$t115], "FieldByName", ["deb_val"], C)), "AsString", (await $.wcall([$t115], "uppercase", [(await $.mv((await $.mcall((await $.wv([$t115], "oradatprovCell", C, false)), "FieldByName", ["deb_val"])), "AsString"))], C)));
        await $.mset((await $.wcall([$t115], "FieldByName", ["kre_val"], C)), "AsString", (await $.wcall([$t115], "uppercase", [(await $.mv((await $.mcall((await $.wv([$t115], "oradatprovCell", C, false)), "FieldByName", ["kre_val"])), "AsString"))], C)));
        await $.mset((await $.wcall([$t115], "FieldByName", ["ekv"], C)), "AsString", (await $.wcall([$t115], "uppercase", [(await $.mv((await $.mcall((await $.wv([$t115], "oradatprovCell", C, false)), "FieldByName", ["ekv"])), "AsString"))], C)));
        await $.mcall((await $.wv([$t115], "oradatprovcell", C, false)), "Post", []);
        await $.stmt((await $.wcall([$t115], "yenile", [(await $.wv([$t115], "vk_f5", C, false)), []], C)));
      }
      await $.mset((await $.v(C, "btnprovcelladd")), "Enabled", true);
      await $.mset((await $.v(C, "btnprovcelldel")), "Enabled", true);
      await $.mset((await $.v(C, "btnprovcelledit")), "Caption", "");
      await $.mset((await $.v(C, "btnprovcelledit")), "Caption", "Redaktə Et");
      await $.mset((await $.v(C, "dbgrid5")), "Options", [(await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit"))]);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "btnprovcelldelClick", async function btnprovcelldelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "posti", (await $.mv((await $.v(C, "oradatprovcell")), "RecNo")));
  await $.stmt($.call(C, "ORADATPROVCELL_EDIT", []));
  await $.mset((await $.v(C, "oradatprovcell")), "RecNo", (await $.v(C, "Posti")));
  if ($.truthy($.gt((await $.mv((await $.v(C, "oradatprovcell")), "RecordCount")), 0))) {
    if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçdiyiniz sətri silək?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
      await $.mcall((await $.v(C, "oradatProvcell")), "Delete", []);
    }
    await $.stmt((await $.call(C, "yenile", [(await $.v(C, "vk_f5")), []])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "btnprovcellcalcClick", async function btnprovcellcalcClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "oradat": null, "mypotok": null};
  await $.fixArgs(L0, ["sender"]);
  await $.staticConst(L0, "a", "zamirimpl1.tsdhesabat.btnprovcellcalcclick.a", async () => ["cell", "provcell"]);
  try {
    await $.mset((await $.v(C, "btnbookcalc")), "Enabled", false);
    await $.set(C, "DoubleBuffered", true);
    L0["oradat"] = (await $.mcall((await $.v(C, "toracledataset")), "Create", [Self]));
    await $.mset(L0["oradat"], "Session", (await $.mv((await $.v(C, "oradatbook")), "Session")));
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "cbp")), "Checked")), false)), async () => ($.eq((await $.mv((await $.v(C, "cbpr")), "checked")), false)))))) {
      await $.stmt((await $.call(C, "showmessage", ["Heç bir əməliyyat seçilməyib"])));
      return L0.result;
    }
    await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crappstart")));
    await $.stmt($.call(C, "CONNECT_EXCEL", []));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "XLApp")), "WorkBooks")), "Open", [(await $.mv((await $.mcall((await $.v(C, "oradatbook")), "FieldByName", ["adress"])), "asstring"))])));
    await $.set(C, "sheet", 0);
    await $.mcall((await $.v(C, "oradatsheet")), "Refresh", []);
    await $.mcall((await $.v(C, "oradatcell")), "Refresh", []);
    await $.mcall((await $.v(C, "oradatprovcell")), "Refresh", []);
    await $.mset((await $.v(C, "pb")), "maxvalue", (await $.v(C, "sheetcount")));
    await $.mset((await $.v(C, "pb")), "Visible", true);
    await $.set(C, "cellcount", $.add((await $.mv((await $.v(C, "oradatcell")), "RecordCount")), (await $.mv((await $.v(C, "oradatprovcell")), "RecordCount"))));
    await $.mset((await $.v(C, "pb1")), "Maxvalue", (await $.v(C, "cellcount")));
    await $.mcall((await $.v(C, "oradatsheet")), "First", []);
    while ($.truthy($.not((await $.mv((await $.v(C, "oradatsheet")), "Eof"))))) {
      await $.set(C, "cellcount", 0);
      { const $t117 = 1;
        await $.set(C, "i", 0);
        let $t118 = true;
        for (;;) {
          if (!$t118) { await $.set(C, "i", $.succ((await $.v(C, "i")), 1)); }
          $t118 = false;
          if (!($.ord((await $.v(C, "i"))) <= $.ord($t117))) break;
          {
            const $t119 = L0["oradat"];
            await $.stmt($.wcall([$t119], "close", [], C));
            await $.mcall((await $.wv([$t119], "sql", C, false)), "Clear", []);
            await $.mset((await $.wv([$t119], "sql", C, false)), "Text", $.add($.add($.add($.add($.add($.add("Select count(*) as count_cell from ", (await $.idx((await $.wv([$t119], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), [(await $.wv([$t119], "i", C, false))]))), " where sheet_id="), (await $.mv((await $.mcall((await $.wv([$t119], "oradatsheet", C, false)), "fieldbyname", ["sheet_id"])), "Asstring"))), "and Book_Caption='"), (await $.mv((await $.mcall((await $.wv([$t119], "oradatbook", C, false)), "fieldbyname", ["Caption"])), "AsString"))), "'"));
            await $.stmt($.wcall([$t119], "open", [], C));
            await $.wset([$t119], "cellcount", $.add((await $.wv([$t119], "cellcount", C, false)), (await $.mv((await $.wcall([$t119], "fieldbyname", ["count_cell"], C)), "asinteger"))), C);
          }
          await $.tick();
        }
      }
      await $.mcall((await $.v(C, "application")), "ProcessMessages", []);
      await $.stmt((await $.mcall((await $.v(C, "dbgrid2")), "OnCellClick", [(await $.idx((await $.mv((await $.v(C, "dbgrid2")), "Columns")), [1]))])));
      await $.set(C, "Sheet", (await $.mv((await $.mcall((await $.v(C, "oradatsheet")), "fieldbyname", ["Sheet_Id"])), "AsInteger")));
      await $.set(C, "NisNumber", (await $.mv((await $.mcall((await $.v(C, "oradatsheet")), "fieldbyname", ["Nisbat"])), "AsInteger")));
      await $.mcall((await $.v(C, "application")), "ProcessMessages", []);
      await $.mset((await $.v(C, "pb")), "Progress", $.add((await $.mv((await $.v(C, "pb")), "Progress")), 1));
      if ($.truthy((await $.mv((await $.v(C, "cbpr")), "Checked")))) {
        await $.mset((await $.v(C, "pagecontrol1")), "ActivePageIndex", 1);
        await $.stmt($.call(C, "ORADATPROVCELL_EDIT", []));
        await $.set(C, "posti", (await $.mv((await $.v(C, "oradatprovcell")), "RecNo")));
        while ($.truthy($.not((await $.mv((await $.v(C, "oradatprovcell")), "Eof"))))) {
          await $.mset((await $.v(C, "pb1")), "Visible", true);
          try {
            await $.stmt($.call(C, "PROVCELL", []));
          } catch ($t120) {
            $.rethrowControl($t120);
            $.handled($t120);
          }
          await $.stmt($.call(C, "ORADATPROVCELL_EDIT", []));
          await $.mset((await $.v(C, "oradatprovcell")), "recno", (await $.v(C, "posti")));
          await $.mcall((await $.v(C, "oradatprovcell")), "Next", []);
          await $.set(C, "posti", (await $.mv((await $.v(C, "oradatprovcell")), "RecNo")));
          await $.mset((await $.v(C, "pb1")), "progress", $.add((await $.mv((await $.v(C, "pb1")), "Progress")), 1));
          await $.tick();
        }
      }
      await $.mcall((await $.v(C, "application")), "ProcessMessages", []);
      await $.mset((await $.v(C, "pb1")), "Progress", 0);
      if ($.truthy($.gt((await $.v(C, "cellcount")), 0))) {
        await $.mcall((await $.idx((await $.mv((await $.mv((await $.v(C, "xlapp")), "activeworkbook")), "worksheets")), [(await $.v(C, "sheet"))])), "select", []);
      }
      await $.mcall((await $.v(C, "oradatsheet")), "Next", []);
      await $.stmt((await $.mcall((await $.v(C, "dbgrid2")), "OnCellClick", [(await $.idx((await $.mv((await $.v(C, "dbgrid2")), "Columns")), [1]))])));
      await $.tick();
    }
    await $.mset((await $.v(C, "pb")), "Progress", 0);
    await $.mset((await $.v(C, "XLApp")), "Visible", true);
    await $.set(C, "Xlapp", (await $.v(C, "Unassigned")));
    await $.mcall((await $.v(C, "Xlapp1")), "Disconnect", []);
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.mset((await $.v(C, "btnbookcalc")), "Enabled", true);
  } catch ($t116) {
    $.rethrowControl($t116);
    $.handled($t116);
    await $.set(C, "xlapp", (await $.v(C, "unassigned")));
    await $.mcall((await $.v(C, "xlapp1")), "Disconnect", []);
    await $.mcall((await $.v(C, "xlapp1")), "Quit", []);
  }
  await $.stmt((await $.call(C, "cmbbooknameclick", [L0["sender"]])));
  await $.mcall((await $.v(C, "oradatprovcell")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "DBGrid2DblClick", async function DBGrid2DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "dbgrid2")), "Options", [(await $.v(C, "dgEditing")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit"))]);
  await $.set(C, "clip_shid", (await $.mv((await $.mcall((await $.v(C, "oradatsheet")), "FieldByName", ["sheet_id"])), "AsString")));
  await $.set(C, "clip_cap", (await $.mv((await $.mcall((await $.v(C, "oradatsheet")), "fieldbyname", ["caption"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "xlapp1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "ActiveFormDestroy", async function ActiveFormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "application")), "Destroy", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "ActiveFormKeyDown", async function ActiveFormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.and_(($.eq((await L0["key"].get()), (await $.v(C, "vk_f5")))), async () => ($.eq(L0["shift"], [])))))) {
    await $.stmt((await $.call(C, "YENILE", [(await $.v(C, "VK_F5")), []])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TSDHesabat", "btndepaddClick", async function btndepaddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.staticConst(L0, "a", "zamirimpl1.tsdhesabat.btndepaddclick.a", async () => ["brest", "brest_ekv", "brestin", "brestin_ekv", "tramt", "tramt_ekv", "payamt", "payamt_ekv", "payintamt", "payintamt_ekv", "erest", "erest_ekv", "eintrest", "eintrest_ekv"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "btndepcalcClick", async function btndepcalcClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "oradat": null, "mypotok": null};
  await $.fixArgs(L0, ["sender"]);
  await $.staticConst(L0, "a", "zamirimpl1.tsdhesabat.btndepcalcclick.a", async () => ["cell", "provcell", "depcell", "krecell"]);
  await $.set(C, "StartDate", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP")), "DateTime"))]))])));
  await $.set(C, "FinDate", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP1")), "DateTime"))]))])));
  {
    const $t121 = (await $.v(C, "SBCM_REPORT"));
    await $.stmt((await $.wcall([$t121], "CallProcedure", ["prepare_sddata", [(await $.wv([$t121], "StartDate", C, false)), (await $.wv([$t121], "FinDate", C, false)), (await $.wv([$t121], "v_StartDate", C, false)), (await $.wv([$t121], "v_FinDate", C, false))]], C)));
    await $.wset([$t121], "r_StartDate", (await $.wcall([$t121], "GetParameter", [2], C)), C);
    await $.wset([$t121], "r_FinDate", (await $.wcall([$t121], "GetParameter", [3], C)), C);
    await $.stmt((await $.wcall([$t121], "CallProcedure", ["ins_report_sd", [(await $.wv([$t121], "StartDate", C, false)), (await $.wv([$t121], "FinDate", C, false))]], C)));
  }
  await $.mset((await $.v(C, "btnbookcalc")), "Enabled", false);
  await $.set(C, "DoubleBuffered", true);
  L0["oradat"] = (await $.mcall((await $.v(C, "toracledataset")), "Create", [Self]));
  await $.mset(L0["oradat"], "Session", (await $.mv((await $.v(C, "oradatbook")), "Session")));
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "cbp")), "Checked")), false)), async () => ($.eq((await $.mv((await $.v(C, "cbpr")), "checked")), false)))))) {
    await $.stmt((await $.call(C, "showmessage", ["Heç bir əməliyyat seçilməyib"])));
    return L0.result;
  }
  await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crappstart")));
  await $.stmt($.call(C, "CONNECT_EXCEL", []));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "XLApp")), "WorkBooks")), "Open", [(await $.mv((await $.mcall((await $.v(C, "oradatbook")), "FieldByName", ["adress"])), "asstring"))])));
  await $.set(C, "sheet", 0);
  await $.mcall((await $.v(C, "oradatsheet")), "Refresh", []);
  await $.mcall((await $.v(C, "oradatcell")), "Refresh", []);
  await $.mcall((await $.v(C, "oradatprovcell")), "Refresh", []);
  await $.mcall((await $.v(C, "oradatdepcell")), "Refresh", []);
  await $.mcall((await $.v(C, "oradatkrecell")), "Refresh", []);
  await $.mset((await $.v(C, "pb")), "maxvalue", (await $.v(C, "sheetcount")));
  await $.mset((await $.v(C, "pb")), "Visible", true);
  await $.set(C, "cellcount", $.add($.add($.add((await $.mv((await $.v(C, "oradatcell")), "RecordCount")), (await $.mv((await $.v(C, "oradatprovcell")), "RecordCount"))), (await $.mv((await $.v(C, "oradatdepcell")), "RecordCount"))), (await $.mv((await $.v(C, "oradatkrecell")), "RecordCount"))));
  await $.mset((await $.v(C, "pb1")), "Maxvalue", (await $.v(C, "cellcount")));
  await $.mcall((await $.v(C, "oradatsheet")), "First", []);
  while ($.truthy($.not((await $.mv((await $.v(C, "oradatsheet")), "Eof"))))) {
    await $.set(C, "cellcount", 0);
    { const $t122 = 3;
      await $.set(C, "i", 0);
      let $t123 = true;
      for (;;) {
        if (!$t123) { await $.set(C, "i", $.succ((await $.v(C, "i")), 1)); }
        $t123 = false;
        if (!($.ord((await $.v(C, "i"))) <= $.ord($t122))) break;
        {
          const $t124 = L0["oradat"];
          await $.stmt($.wcall([$t124], "close", [], C));
          await $.mcall((await $.wv([$t124], "sql", C, false)), "Clear", []);
          await $.mset((await $.wv([$t124], "sql", C, false)), "Text", $.add($.add($.add($.add($.add($.add("Select count(*) as count_cell from ", (await $.idx((await $.wv([$t124], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), [(await $.wv([$t124], "i", C, false))]))), " where sheet_id="), (await $.mv((await $.mcall((await $.wv([$t124], "oradatsheet", C, false)), "fieldbyname", ["sheet_id"])), "Asstring"))), "and Book_Caption='"), (await $.mv((await $.mcall((await $.wv([$t124], "oradatbook", C, false)), "fieldbyname", ["Caption"])), "AsString"))), "'"));
          await $.stmt($.wcall([$t124], "open", [], C));
          await $.wset([$t124], "cellcount", $.add((await $.wv([$t124], "cellcount", C, false)), (await $.mv((await $.wcall([$t124], "fieldbyname", ["count_cell"], C)), "asinteger"))), C);
        }
        await $.tick();
      }
    }
    await $.mcall((await $.v(C, "application")), "ProcessMessages", []);
    await $.stmt((await $.mcall((await $.v(C, "dbgrid2")), "OnCellClick", [(await $.idx((await $.mv((await $.v(C, "dbgrid2")), "Columns")), [1]))])));
    await $.set(C, "Sheet", (await $.mv((await $.mcall((await $.v(C, "oradatsheet")), "fieldbyname", ["Sheet_Id"])), "AsInteger")));
    await $.set(C, "NisNumber", (await $.mv((await $.mcall((await $.v(C, "oradatsheet")), "fieldbyname", ["Nisbat"])), "AsInteger")));
    await $.mcall((await $.v(C, "application")), "ProcessMessages", []);
    await $.mset((await $.v(C, "pb")), "Progress", $.add((await $.mv((await $.v(C, "pb")), "Progress")), 1));
    await $.mset((await $.v(C, "pagecontrol1")), "ActivePageIndex", 2);
    await $.stmt($.call(C, "ORADATDEPCELL_EDIT", []));
    await $.set(C, "posti", (await $.mv((await $.v(C, "oradatdepcell")), "RecNo")));
    while ($.truthy($.not((await $.mv((await $.v(C, "oradatdepcell")), "Eof"))))) {
      await $.mset((await $.v(C, "pb1")), "Visible", true);
      await $.stmt($.call(C, "DEPCELL", []));
      await $.stmt($.call(C, "ORADATDEPCELL_EDIT", []));
      await $.mset((await $.v(C, "oradatdepcell")), "recno", (await $.v(C, "posti")));
      await $.mcall((await $.v(C, "oradatdepcell")), "Next", []);
      await $.set(C, "posti", (await $.mv((await $.v(C, "oradatdepcell")), "RecNo")));
      await $.mset((await $.v(C, "pb1")), "progress", $.add((await $.mv((await $.v(C, "pb1")), "Progress")), 1));
      await $.tick();
    }
    await $.mcall((await $.v(C, "application")), "ProcessMessages", []);
    await $.mset((await $.v(C, "pb1")), "Progress", 0);
    if ($.truthy($.gt((await $.v(C, "cellcount")), 0))) {
      await $.mcall((await $.idx((await $.mv((await $.mv((await $.v(C, "xlapp")), "activeworkbook")), "worksheets")), [(await $.v(C, "sheet"))])), "select", []);
    }
    await $.mcall((await $.v(C, "oradatsheet")), "Next", []);
    await $.stmt((await $.mcall((await $.v(C, "dbgrid2")), "OnCellClick", [(await $.idx((await $.mv((await $.v(C, "dbgrid2")), "Columns")), [1]))])));
    await $.tick();
  }
  await $.mset((await $.v(C, "pb")), "Progress", 0);
  await $.mset((await $.v(C, "XLApp")), "Visible", true);
  await $.set(C, "Xlapp", (await $.v(C, "Unassigned")));
  await $.mcall((await $.v(C, "Xlapp1")), "Disconnect", []);
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  await $.mset((await $.v(C, "btnbookcalc")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "ed_balcnKeyPress", async function ed_balcnKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TSDHesabat", "btndepeditClick", async function btndepeditClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.staticConst(L0, "a", "zamirimpl1.tsdhesabat.btndepeditclick.a", async () => ["brest", "brest_ekv", "brestin", "brestin_ekv", "tramt", "tramt_ekv", "payamt", "payamt_ekv", "payintamt", "payintamt_ekv", "erest", "erest_ekv", "eintrest", "eintrest_ekv"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "DBGrid8CellClick", async function DBGrid8CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mset((await $.v(C, "application")), "HintColor", (await $.v(C, "clinfobk")));
  await $.mset((await $.v(C, "application")), "HintPause", 1);
  await $.mset((await $.v(C, "application")), "HintHidePause", 3000);
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TSDHesabat", "DBGrid8KeyPress", async function DBGrid8KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TSDHesabat", "btndepdelClick", async function btndepdelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "posti", (await $.mv((await $.v(C, "oradatdepcell")), "RecNo")));
  await $.stmt($.call(C, "ORADATDEPCELL_EDIT", []));
  await $.mset((await $.v(C, "oradatdepcell")), "RecNo", (await $.v(C, "posti")));
  if ($.truthy($.gt((await $.mv((await $.v(C, "oradatdepcell")), "RecordCount")), 0))) {
    if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçdiyiniz sətri silək?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
      await $.mcall((await $.v(C, "oradatdepcell")), "delete", []);
    }
    await $.stmt((await $.call(C, "Yenile", [(await $.v(C, "vk_f5")), []])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "btnkrecalcClick", async function btnkrecalcClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "oradat": null, "mypotok": null};
  await $.fixArgs(L0, ["sender"]);
  await $.staticConst(L0, "a", "zamirimpl1.tsdhesabat.btnkrecalcclick.a", async () => ["cell", "provcell", "depcell", "krecell"]);
  await $.set(C, "StartDate", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP")), "DateTime"))]))])));
  await $.set(C, "FinDate", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP1")), "DateTime"))]))])));
  {
    const $t125 = (await $.v(C, "cm_sd"));
    await $.stmt((await $.wcall([$t125], "CallProcedure", ["prepare_sddata", [(await $.wv([$t125], "StartDate", C, false)), (await $.wv([$t125], "FinDate", C, false)), (await $.wv([$t125], "v_StartDate", C, false)), (await $.wv([$t125], "v_FinDate", C, false))]], C)));
    await $.wset([$t125], "r_StartDate", (await $.wcall([$t125], "GetParameter", [2], C)), C);
    await $.wset([$t125], "r_FinDate", (await $.wcall([$t125], "GetParameter", [3], C)), C);
    await $.stmt((await $.wcall([$t125], "CallProcedure", ["ins_report_sd", [(await $.wv([$t125], "r_StartDate", C, false)), (await $.wv([$t125], "r_FinDate", C, false))]], C)));
  }
  await $.mset((await $.v(C, "btnbookcalc")), "Enabled", false);
  await $.set(C, "DoubleBuffered", true);
  L0["oradat"] = (await $.mcall((await $.v(C, "toracledataset")), "Create", [Self]));
  await $.mset(L0["oradat"], "Session", (await $.mv((await $.v(C, "oradatbook")), "Session")));
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "cbp")), "Checked")), false)), async () => ($.eq((await $.mv((await $.v(C, "cbpr")), "checked")), false)))))) {
    await $.stmt((await $.call(C, "showmessage", ["Heç bir əməliyyat seçilməyib"])));
    return L0.result;
  }
  await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crappstart")));
  await $.stmt($.call(C, "CONNECT_EXCEL", []));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "XLApp")), "WorkBooks")), "Open", [(await $.mv((await $.mcall((await $.v(C, "oradatbook")), "FieldByName", ["adress"])), "asstring"))])));
  await $.set(C, "sheet", 0);
  await $.mcall((await $.v(C, "oradatsheet")), "Refresh", []);
  await $.mcall((await $.v(C, "oradatcell")), "Refresh", []);
  await $.mcall((await $.v(C, "oradatprovcell")), "Refresh", []);
  await $.mcall((await $.v(C, "oradatdepcell")), "Refresh", []);
  await $.mcall((await $.v(C, "oradatkrecell")), "Refresh", []);
  await $.mset((await $.v(C, "pb")), "maxvalue", (await $.v(C, "sheetcount")));
  await $.mset((await $.v(C, "pb")), "Visible", true);
  await $.set(C, "cellcount", $.add($.add($.add((await $.mv((await $.v(C, "oradatcell")), "RecordCount")), (await $.mv((await $.v(C, "oradatprovcell")), "RecordCount"))), (await $.mv((await $.v(C, "oradatdepcell")), "RecordCount"))), (await $.mv((await $.v(C, "oradatkrecell")), "RecordCount"))));
  await $.mset((await $.v(C, "pb1")), "Maxvalue", (await $.v(C, "cellcount")));
  await $.mcall((await $.v(C, "oradatsheet")), "First", []);
  while ($.truthy($.not((await $.mv((await $.v(C, "oradatsheet")), "Eof"))))) {
    await $.set(C, "cellcount", 0);
    { const $t126 = 3;
      await $.set(C, "i", 0);
      let $t127 = true;
      for (;;) {
        if (!$t127) { await $.set(C, "i", $.succ((await $.v(C, "i")), 1)); }
        $t127 = false;
        if (!($.ord((await $.v(C, "i"))) <= $.ord($t126))) break;
        {
          const $t128 = L0["oradat"];
          await $.stmt($.wcall([$t128], "close", [], C));
          await $.mcall((await $.wv([$t128], "sql", C, false)), "Clear", []);
          await $.mset((await $.wv([$t128], "sql", C, false)), "Text", $.add($.add($.add($.add($.add($.add("Select count(*) as count_cell from ", (await $.idx((await $.wv([$t128], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), [(await $.wv([$t128], "i", C, false))]))), " where sheet_id="), (await $.mv((await $.mcall((await $.wv([$t128], "oradatsheet", C, false)), "fieldbyname", ["sheet_id"])), "Asstring"))), "and Book_Caption='"), (await $.mv((await $.mcall((await $.wv([$t128], "oradatbook", C, false)), "fieldbyname", ["Caption"])), "AsString"))), "'"));
          await $.stmt($.wcall([$t128], "open", [], C));
          await $.wset([$t128], "cellcount", $.add((await $.wv([$t128], "cellcount", C, false)), (await $.mv((await $.wcall([$t128], "fieldbyname", ["count_cell"], C)), "asinteger"))), C);
        }
        await $.tick();
      }
    }
    await $.mcall((await $.v(C, "application")), "ProcessMessages", []);
    await $.stmt((await $.mcall((await $.v(C, "dbgrid2")), "OnCellClick", [(await $.idx((await $.mv((await $.v(C, "dbgrid2")), "Columns")), [1]))])));
    await $.set(C, "Sheet", (await $.mv((await $.mcall((await $.v(C, "oradatsheet")), "fieldbyname", ["Sheet_Id"])), "AsInteger")));
    await $.set(C, "NisNumber", (await $.mv((await $.mcall((await $.v(C, "oradatsheet")), "fieldbyname", ["Nisbat"])), "AsInteger")));
    await $.mcall((await $.v(C, "application")), "ProcessMessages", []);
    await $.mset((await $.v(C, "pb")), "Progress", $.add((await $.mv((await $.v(C, "pb")), "Progress")), 1));
    await $.mset((await $.v(C, "pagecontrol1")), "ActivePageIndex", 3);
    await $.stmt($.call(C, "ORADATkreCELL_EDIT", []));
    await $.set(C, "posti", (await $.mv((await $.v(C, "oradatkrecell")), "RecNo")));
    while ($.truthy($.not((await $.mv((await $.v(C, "oradatkrecell")), "Eof"))))) {
      await $.mset((await $.v(C, "pb1")), "Visible", true);
      await $.stmt($.call(C, "KRECELL", []));
      await $.stmt($.call(C, "ORADATkreCELL_EDIT", []));
      await $.mset((await $.v(C, "oradatkrecell")), "recno", (await $.v(C, "posti")));
      await $.mcall((await $.v(C, "oradatkrecell")), "Next", []);
      await $.set(C, "posti", (await $.mv((await $.v(C, "oradatkrecell")), "RecNo")));
      await $.mset((await $.v(C, "pb1")), "progress", $.add((await $.mv((await $.v(C, "pb1")), "Progress")), 1));
      await $.tick();
    }
    await $.mcall((await $.v(C, "application")), "ProcessMessages", []);
    await $.mset((await $.v(C, "pb1")), "Progress", 0);
    if ($.truthy($.gt((await $.v(C, "cellcount")), 0))) {
      await $.mcall((await $.idx((await $.mv((await $.mv((await $.v(C, "xlapp")), "activeworkbook")), "worksheets")), [(await $.v(C, "sheet"))])), "select", []);
    }
    await $.mcall((await $.v(C, "oradatsheet")), "Next", []);
    await $.stmt((await $.mcall((await $.v(C, "dbgrid2")), "OnCellClick", [(await $.idx((await $.mv((await $.v(C, "dbgrid2")), "Columns")), [1]))])));
    await $.tick();
  }
  await $.mset((await $.v(C, "pb")), "Progress", 0);
  await $.mset((await $.v(C, "XLApp")), "Visible", true);
  await $.set(C, "Xlapp", (await $.v(C, "Unassigned")));
  await $.mcall((await $.v(C, "Xlapp1")), "Disconnect", []);
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  await $.mset((await $.v(C, "btnbookcalc")), "Enabled", true);
  await $.stmt((await $.call(C, "cmbbooknameclick", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "btnkreaddClick", async function btnkreaddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.staticConst(L0, "a", "zamirimpl1.tsdhesabat.btnkreaddclick.a", async () => ["DEQ", "DEQ_EKV", "DEQIN", "DEQIN_EKV", "DEOK", "DEOK_EKV", "DEOKIN", "DEOKIN_EKV", "DEVK", "DEVK_EKV", "DSK", "DSK_EKV", "DSKIN", "DSKIN_EKV", "VKK", "VKK_EKV"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "DBGrid9CellClick", async function DBGrid9CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mset((await $.v(C, "application")), "HintColor", (await $.v(C, "clinfobk")));
  await $.mset((await $.v(C, "application")), "HintPause", 1);
  await $.mset((await $.v(C, "application")), "HintHidePause", 3000);
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TSDHesabat", "DBGrid9KeyPress", async function DBGrid9KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TSDHesabat", "btnkreeditClick", async function btnkreeditClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.staticConst(L0, "a", "zamirimpl1.tsdhesabat.btnkreeditclick.a", async () => ["DEQ", "DEQ_EKV", "DEQIN", "DEQIN_EKV", "DEOK", "DEOK_EKV", "DEOKIN", "DEOKIN_EKV", "DEVK", "DEVK_EKV", "DSK", "DSK_EKV", "DSKIN", "DSKIN_EKV", "VKK", "VKK_EKV"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "btnkredelClick", async function btnkredelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "posti", (await $.mv((await $.v(C, "oradatkrecell")), "RecNo")));
  await $.stmt($.call(C, "ORADATKRECELL_EDIT", []));
  await $.mset((await $.v(C, "oradatkrecell")), "RecNo", (await $.v(C, "posti")));
  if ($.truthy($.gt((await $.mv((await $.v(C, "oradatkrecell")), "RecordCount")), 0))) {
    if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Se?diyiniz sətri silək?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
      await $.mcall((await $.v(C, "oradatkrecell")), "delete", []);
    }
    await $.stmt((await $.call(C, "Yenile", [(await $.v(C, "vk_f5")), []])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "DBGrid8KeyDown", async function DBGrid8KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.and_(($.in_((await $.v(C, "ssctrl")), L0["shift"])), async () => ($.eq((await L0["key"].get()), (await $.v(C, "vk_delete")))))))) {
    await L0["key"].set(0);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TSDHesabat", "DBGrid9KeyDown", async function DBGrid9KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.and_(($.in_((await $.v(C, "ssctrl")), L0["shift"])), async () => ($.eq((await L0["key"].get()), (await $.v(C, "vk_delete")))))))) {
    await L0["key"].set(0);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TSDHesabat", "DBGrid5KeyDown", async function DBGrid5KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.and_(($.in_((await $.v(C, "ssctrl")), L0["shift"])), async () => ($.eq((await L0["key"].get()), (await $.v(C, "vk_delete")))))))) {
    await L0["key"].set(0);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TSDHesabat", "DBGrid3KeyDown", async function DBGrid3KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.and_(($.in_((await $.v(C, "ssctrl")), L0["shift"])), async () => ($.eq((await L0["key"].get()), (await $.v(C, "vk_delete")))))))) {
    await L0["key"].set(0);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TSDHesabat", "OleContainer1MouseDown", async function OleContainer1MouseDown(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TSDHesabat", "cmbbooknameClick", async function cmbbooknameClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t129 = (await $.v(C, "oradatbook"));
    await $.stmt($.wcall([$t129], "close", [], C));
    await $.mcall((await $.wv([$t129], "sql", C, false)), "Clear", []);
    await $.mset((await $.wv([$t129], "sql", C, false)), "Text", $.add($.add("select * from book where caption='", (await $.mv((await $.wv([$t129], "cmbbookname", C, false)), "text"))), "'"));
    await $.stmt($.wcall([$t129], "open", [], C));
    await $.stmt((await $.mcall((await $.wv([$t129], "dbgrid1", C, false)), "OnCellClick", [(await $.idx((await $.mv((await $.wv([$t129], "dbgrid1", C, false)), "columns")), [1]))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("GridSelectAll", async function GridSelectAll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"grid": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["grid"]);
  L0["result"] = 0;
  await $.mcall((await $.mv(L0["grid"], "SelectedRows")), "Clear", []);
  {
    const $t130 = (await $.mv((await $.mv(L0["grid"], "Datasource")), "DataSet"));
    await $.stmt($.wcall([$t130], "First", [], C));
    await $.stmt($.wcall([$t130], "DisableControls", [], C));
    try {
      while ($.truthy($.not((await $.wv([$t130], "EOF", C, false))))) {
        await $.mset((await $.mv((await $.wv([$t130], "Grid", { get: async () => L0["grid"], set: async (v) => { L0["grid"] = v; }, local: true }, false)), "SelectedRows")), "CurrentRowSelected", (await $.wv([$t130], "True", C, false)));
        await $.stmt((await $.wcall([$t130], "inc", [$.ref(async () => (await $.wv([$t130], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), async ($t131) => { await $.wset([$t130], "Result", $t131, { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }); })], C)));
        await $.stmt($.wcall([$t130], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t130], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Grid"], "kind": "function", "ptypes": ["TDBGrid"]});
  U.method("TSDHesabat", "btnbookeditClick", async function btnbookeditClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "k": 0, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["s"] = "";
  await $.stmt((await $.call(C, "showmessage", [(await $.mv((await $.mcall((await $.v(C, "oradatbook")), "fieldbyname", ["Caption"])), "AsString"))])));
  if ($.truthy($.eq((await $.mv((await $.v(C, "btnbookedit")), "Caption")), "Redaktə"))) {
    L0["k"] = 1;
  } else {
    L0["k"] = 0;
  }
  { const $t132 = L0["k"];
    if ($.eq($t132, 1)) {
      await $.mcall((await $.idx((await $.mv((await $.v(C, "dbgrid1")), "Fields")), [0])), "FocusControl", []);
      L0["s"] = (await $.mv((await $.mcall((await $.v(C, "oradatbook")), "fieldbyname", ["Caption"])), "AsString"));
      await $.mset((await $.v(C, "btnbookedit")), "Caption", "Təsdiqlə");
      await $.mset((await $.v(C, "btnbookadd")), "Enabled", false);
      await $.mset((await $.v(C, "btnbookdel")), "Enabled", false);
      await $.mcall((await $.v(C, "oradatbook")), "open", []);
      await $.mcall((await $.v(C, "oradatbook")), "Edit", []);
      await $.mset((await $.v(C, "dbgrid1")), "Options", [(await $.v(C, "dgEditing")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit"))]);
    }
    else if ($.eq($t132, 0)) {
      {
        const $t133 = (await $.v(C, "oradatsheet"));
        await $.stmt($.wcall([$t133], "Close", [], C));
        await $.mcall((await $.wv([$t133], "Sql", C, false)), "Clear", []);
        await $.mset((await $.wv([$t133], "Sql", C, false)), "Text", $.add($.add("Select s.rowid,s.* from sheet s where book_caption ='", (await $.wv([$t133], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))), "'"));
        await $.stmt($.wcall([$t133], "Open", [], C));
        await $.stmt((await $.wcall([$t133], "showmessage", [(await $.mv((await $.wv([$t133], "sql", C, false)), "text"))], C)));
        if ($.truthy($.gt((await $.wv([$t133], "recordcount", C, false)), 0))) {
          { const $t134 = (await $.wv([$t133], "recordcount", C, false));
            await $.wset([$t133], "i", 1, C);
            let $t135 = true;
            for (;;) {
              if (!$t135) { await $.wset([$t133], "i", $.succ((await $.wv([$t133], "i", C, false)), 1), C); }
              $t135 = false;
              if (!($.ord((await $.wv([$t133], "i", C, false))) <= $.ord($t134))) break;
              await $.stmt($.wcall([$t133], "Edit", [], C));
              await $.tick();
            }
          }
          await $.mset((await $.wcall([$t133], "Fieldbyname", ["Book_Caption"], C)), "Asstring", (await $.mv((await $.mcall((await $.wv([$t133], "oradatbook", C, false)), "fieldbyname", ["Caption"])), "AsString")));
          await $.stmt($.wcall([$t133], "Post", [], C));
          await $.stmt($.wcall([$t133], "Next", [], C));
        }
      }
      await $.mset((await $.v(C, "btnbookedit")), "Caption", "Redaktə");
      await $.mset((await $.v(C, "dbgrid1")), "Options", [(await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit"))]);
      await $.mcall((await $.v(C, "oradatbook")), "Post", []);
      await $.mset((await $.v(C, "btnbookadd")), "Enabled", true);
      await $.mset((await $.v(C, "btnbookdel")), "Enabled", true);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "btnbookviewClick", async function btnbookviewClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "k": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "btnbookview")), "Caption")), "Şablonu göstər"))) {
    L0["k"] = 1;
  } else {
    L0["k"] = 0;
  }
  { const $t136 = L0["k"];
    if ($.eq($t136, 1)) {
      await $.mset((await $.v(C, "btnbookview")), "Caption", "Şablonu gizlət");
      await $.stmt($.call(C, "connect_excel", []));
      await $.mset((await $.v(C, "xlapp")), "visible", true);
      await $.set(C, "xlapp", (await $.v(C, "unassigned")));
    }
    else if ($.eq($t136, 0)) {
      await $.mset((await $.v(C, "btnbookview")), "Caption", "Şablonu göstər");
      try {
        await $.mcall((await $.v(C, "xlapp1")), "Disconnect", []);
        await $.mcall((await $.v(C, "xlapp1")), "Quit", []);
      } catch ($t137) {
        $.rethrowControl($t137);
        $.handled($t137);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "ActiveFormActivate", async function ActiveFormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "application")), "ProcessMessages", []);
  await $.set(C, "DoubleBuffered", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "redakteClick", async function redakteClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "x": 0, "tempbookmark": null};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Datasource")), "Dataset")), "DisableControls", []);
  {
    const $t138 = (await $.mv((await $.v(C, "DBgrid1")), "SelectedRows"));
    if ($.truthy($.gt((await $.wv([$t138], "Count", C, false)), 0))) {
      await $.wset([$t138], "TempBookmark", (await $.mv((await $.mv((await $.mv((await $.wv([$t138], "DBGrid1", C, false)), "Datasource")), "Dataset")), "GetBookmark")), { get: async () => L0["tempbookmark"], set: async (v) => { L0["tempbookmark"] = v; }, local: true });
      { const $t139 = $.sub((await $.wv([$t138], "Count", C, false)), 1);
        await $.wset([$t138], "x", 0, { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
        let $t140 = true;
        for (;;) {
          if (!$t140) { await $.wset([$t138], "x", $.succ((await $.wv([$t138], "x", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 1), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }); }
          $t140 = false;
          if (!($.ord((await $.wv([$t138], "x", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))) <= $.ord($t139))) break;
          if ($.truthy($.gt((await $.wcall([$t138], "IndexOf", [(await $.idx((await $.wv([$t138], "Items", C, false)), [(await $.wv([$t138], "x", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))]))], C)), (-(1))))) {
            await $.mset((await $.mv((await $.mv((await $.wv([$t138], "DBGrid1", C, false)), "Datasource")), "Dataset")), "Bookmark", (await $.idx((await $.wv([$t138], "Items", C, false)), [(await $.wv([$t138], "x", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t138], "showmessage", [(await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((await $.wv([$t138], "DBGrid1", C, false)), "Datasource")), "Dataset")), "Fields")), [1])), "AsString"))], C)));
          }
          await $.tick();
        }
      }
    }
  }
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Datasource")), "Dataset")), "GotoBookmark", [L0["tempbookmark"]])));
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Datasource")), "Dataset")), "FreeBookmark", [L0["tempbookmark"]])));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Datasource")), "Dataset")), "EnableControls", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSDHesabat", "reClick", async function reClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "re")), "Caption")), "Redaktə Et"))) {
    await $.set(C, "k", 0);
  } else {
    await $.set(C, "k", 1);
  }
  { const $t141 = (await $.v(C, "k"));
    if ($.eq($t141, 0)) {
      await $.mset((await $.v(C, "re")), "Caption", "Təsdiqlə");
      await $.mset((await $.v(C, "dbgrid2")), "Options", [(await $.v(C, "dgEditing")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit"))]);
    }
    else if ($.eq($t141, 1)) {
      {
        const $t142 = (await $.v(C, "OraDatSheet"));
        await $.mset((await $.wcall([$t142], "FieldByName", ["NISBAT"], C)), "AsString", (await $.wcall([$t142], "uppercase", [(await $.mv((await $.wcall([$t142], "FieldByName", ["NISBAT"], C)), "AsString"))], C)));
        await $.stmt($.wcall([$t142], "Post", [], C));
        await $.stmt((await $.wcall([$t142], "Yenile", [(await $.wv([$t142], "vk_f5", C, false)), []], C)));
        await $.mset((await $.wv([$t142], "dbgrid2", C, false)), "Options", [(await $.wv([$t142], "dgTitles", C, false)), (await $.wv([$t142], "dgIndicator", C, false)), (await $.wv([$t142], "dgColumnResize", C, false)), (await $.wv([$t142], "dgColLines", C, false)), (await $.wv([$t142], "dgRowLines", C, false)), (await $.wv([$t142], "dgTabs", C, false)), (await $.wv([$t142], "dgConfirmDelete", C, false)), (await $.wv([$t142], "dgCancelOnExit", C, false))]);
        await $.mset((await $.wv([$t142], "re", C, false)), "Caption", "Redaktə Et");
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
