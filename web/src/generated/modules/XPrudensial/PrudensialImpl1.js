// Generated from PrudensialImpl1.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PrudensialImpl1", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "Prudensialhes_TLB", "StdVcl", "StdCtrls", "OleServer", "ExcelXP", "filectrl", "ComCtrls", "Db", "OracleData", "CMExcelExport", "ExcelExporter", "Oracle", "Buttons", "ExtCtrls", "ComObj", "ComServ", "sboapiDataModuleImpl", "SBTranslateProc", "UnitBalansAdd", "UnitBktBalans"]);
  const C = [U];
  U.defClass("TPrudensial", "TActiveForm", {"button1": {"name": "Button1", "type": "TButton"}, "rer": {"name": "rer", "type": "TExcelWorksheet"}, "excelworkbook1": {"name": "ExcelWorkbook1", "type": "TExcelWorkbook"}, "prd": {"name": "prd", "type": "TExcelApplication"}, "excelapplication2": {"name": "ExcelApplication2", "type": "TExcelApplication"}, "excelapplication3": {"name": "ExcelApplication3", "type": "TExcelApplication"}, "excelapplication4": {"name": "ExcelApplication4", "type": "TExcelApplication"}, "tem": {"name": "tem", "type": "TRichEdit"}, "prud": {"name": "prud", "type": "TRichEdit"}, "dl": {"name": "dl", "type": "TRichEdit"}, "buttonbkt1": {"name": "ButtonBkt1", "type": "TButton"}, "bkt1": {"name": "BKT1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "bkt2": {"name": "BKT2", "type": "TOracleDataSet"}, "cme1": {"name": "CME1", "type": "TCMExcelExport"}, "buttonbkt2": {"name": "ButtonBkt2", "type": "TButton"}, "buttonbkt5": {"name": "ButtonBkt5", "type": "TButton"}, "cme2": {"name": "CME2", "type": "TCMExcelExport"}, "buttonbkt6": {"name": "ButtonBkt6", "type": "TButton"}, "dep1": {"name": "dep1", "type": "TOracleDataSet"}, "cme3_1": {"name": "CME3_1", "type": "TCMExcelExport"}, "dep2": {"name": "dep2", "type": "TOracleDataSet"}, "cme4": {"name": "CME4", "type": "TCMExcelExport"}, "dep3": {"name": "dep3", "type": "TOracleDataSet"}, "cme5": {"name": "CME5", "type": "TCMExcelExport"}, "buttonbkt7": {"name": "ButtonBkt7", "type": "TButton"}, "buttonbkt9_1": {"name": "ButtonBkt9_1", "type": "TButton"}, "oraclepackage1": {"name": "OraclePackage1", "type": "TOraclePackage"}, "saldo": {"name": "saldo", "type": "TOracleDataSet"}, "cme6": {"name": "CMe6", "type": "TCMExcelExport"}, "cemset": {"name": "CemSet", "type": "TOracleDataSet"}, "oraclepackage10": {"name": "OraclePackage10", "type": "TOraclePackage"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "cme10": {"name": "CME10", "type": "TCMExcelExport"}, "active": {"name": "Active", "type": "TOracleDataSet"}, "girov": {"name": "Girov", "type": "TOracleDataSet"}, "girovsay": {"name": "GirovSAY", "type": "TFloatField"}, "girovpurcode": {"name": "GirovPURCODE", "type": "TWideStringField"}, "girovteminat": {"name": "GirovTEMINAT", "type": "TWideStringField"}, "girovtemcode": {"name": "GirovTEMCODE", "type": "TWideStringField"}, "girovdescription": {"name": "GirovDESCRIPTION", "type": "TWideStringField"}, "girovqaliq": {"name": "GirovQALIQ", "type": "TFloatField"}, "girovgirov": {"name": "GirovGIROV", "type": "TFloatField"}, "girovqenaitbexsh": {"name": "GirovQENAITBEXSH", "type": "TFloatField"}, "girovnezaretalt": {"name": "GirovNEZARETALT", "type": "TFloatField"}, "girovmeqsedli": {"name": "GirovMEQSEDLI", "type": "TFloatField"}, "girovtehlukeli": {"name": "GirovTEHLUKELI", "type": "TFloatField"}, "girovumudsuz": {"name": "GirovUMUDSUZ", "type": "TFloatField"}, "girovtesnifata_daxil_edilmemish": {"name": "GirovTESNIFATA_DAXIL_EDILMEMISH", "type": "TFloatField"}, "odenish": {"name": "odenish", "type": "TOracleDataSet"}, "pr": {"name": "pr", "type": "TButton"}, "cme7": {"name": "CME7", "type": "TCMExcelExport"}, "sbop": {"name": "sbop", "type": "TOraclePackage"}, "sexi": {"name": "sexi", "type": "TOracleDataSet"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "rt": {"name": "rt", "type": "TCMExcelExport"}, "gx2": {"name": "gx2", "type": "TButton"}, "gx": {"name": "gx", "type": "TExcelApplication"}, "oraclepackage2": {"name": "OraclePackage2", "type": "TOraclePackage"}, "radiobutton1": {"name": "RadioButton1", "type": "TRadioButton"}, "radiobutton2": {"name": "RadioButton2", "type": "TRadioButton"}, "girovg_qenaitbexsh": {"name": "GirovG_QENAITBEXSH", "type": "TFloatField"}, "girovg_nezaretalt": {"name": "GirovG_NEZARETALT", "type": "TFloatField"}, "girovg_meqsedli": {"name": "GirovG_MEQSEDLI", "type": "TFloatField"}, "girovg_tehlukeli": {"name": "GirovG_TEHLUKELI", "type": "TFloatField"}, "girovg_umudsuz": {"name": "GirovG_UMUDSUZ", "type": "TFloatField"}, "girovg_tesnifata_daxil_edilmemish": {"name": "GirovG_TESNIFATA_DAXIL_EDILMEMISH", "type": "TFloatField"}, "cemsetcode": {"name": "CemSetCODE", "type": "TWideStringField"}, "cemsetname": {"name": "CemSetNAME", "type": "TWideStringField"}, "cemsetm_kodu": {"name": "CemSetM_KODU", "type": "TWideStringField"}, "cemsetmulkiyyetnovu": {"name": "CemSetMulkiyyetnovu", "type": "TWideStringField"}, "cemsets_kodu": {"name": "CemSetS_KODU", "type": "TWideStringField"}, "cemsetborcalanunsektoru": {"name": "CemSetBorcalanunsektoru", "type": "TWideStringField"}, "cemsetf_kodu": {"name": "CemSetF_KODU", "type": "TWideStringField"}, "cemsetborcalaninfaliyyeti": {"name": "CemSetBorcalaninfaliyyeti", "type": "TWideStringField"}, "cemsetfn_kodu": {"name": "CemSetFN_KODU", "type": "TWideStringField"}, "cemsetborcalaninfaliyyetnovu": {"name": "CemSetBorcalaninfaliyyetnovu", "type": "TWideStringField"}, "cemsetval_name": {"name": "CemSetVAL_NAME", "type": "TWideStringField"}, "cemsetsumcreditlineamount": {"name": "CemSetSUMCREDITLINEAMOUNT", "type": "TFloatField"}, "cemsetsumekvalent": {"name": "CemSetSUMEKVALENT", "type": "TFloatField"}, "cemsetsumuzadilmishdar": {"name": "CemSetSUMUZADILMISHDAR", "type": "TFloatField"}, "cemsetsumhesablanmayan": {"name": "CemSetSUMHESABLANMAYAN", "type": "TFloatField"}, "cemsetsumadi": {"name": "CemSetSUMADI", "type": "TFloatField"}, "cemsetsummeqsedli": {"name": "CemSetSUMMEQSEDLI", "type": "TFloatField"}, "cemsetsumds_rest": {"name": "CemSetSUMDS_REST", "type": "TFloatField"}, "cemsetsumdsrest_ek": {"name": "CemSetSUMDSREST_EK", "type": "TFloatField"}, "cemsetsumdsinterestrest": {"name": "CemSetSUMDSINTERESTREST", "type": "TFloatField"}, "cemsetsumdsint_ek": {"name": "CemSetSUMDSINT_EK", "type": "TFloatField"}, "cemsetsumdsduerest": {"name": "CemSetSUMDSDUEREST", "type": "TFloatField"}, "cemsetsumdsduerest_ek": {"name": "CemSetSUMDSDUEREST_EK", "type": "TFloatField"}, "cemsetsumdsdueinterestrest": {"name": "CemSetSUMDSDUEINTERESTREST", "type": "TFloatField"}, "cemsetsumdsdoeint_ek": {"name": "CemSetSUMDSDOEINT_EK", "type": "TFloatField"}, "cemsetsumfaizleruzreborclar": {"name": "CemSetSUMFAIZLERUZREBORCLAR", "type": "TFloatField"}, "cemsetsumfaizleruzreborclarek": {"name": "CemSetSUMFAIZLERUZREBORCLAREK", "type": "TFloatField"}, "cemsetsumcariborclar": {"name": "CemSetSUMCARIBORCLAR", "type": "TFloatField"}, "cemsetsumcariborclarek": {"name": "CemSetSUMCARIBORCLAREK", "type": "TFloatField"}, "cemsetsum130": {"name": "CemSetSUM130", "type": "TFloatField"}, "cemsetsum3160": {"name": "CemSetSUM3160", "type": "TFloatField"}, "cemsetsum6190": {"name": "CemSetSUM6190", "type": "TFloatField"}, "cemsetsum91120": {"name": "CemSetSUM91120", "type": "TFloatField"}, "cemsetsum121150": {"name": "CemSetSUM121150", "type": "TFloatField"}, "cemsetsum151180": {"name": "CemSetSUM151180", "type": "TFloatField"}, "cemsetsum181210": {"name": "CemSetSUM181210", "type": "TFloatField"}, "cemsetsum211240": {"name": "CemSetSUM211240", "type": "TFloatField"}, "cemsetsum241270": {"name": "CemSetSUM241270", "type": "TFloatField"}, "cemsetsum271300": {"name": "CemSetSUM271300", "type": "TFloatField"}, "cemsetsum301330": {"name": "CemSetSUM301330", "type": "TFloatField"}, "cemsetsum331365": {"name": "CemSetSUM331365", "type": "TFloatField"}, "cemsetsumbirildenartiq": {"name": "CemSetSUMBIRILDENARTIQ", "type": "TFloatField"}, "cemsetsum0": {"name": "CemSetSUM0", "type": "TFloatField"}, "cemsetsum2": {"name": "CemSetSUM2", "type": "TFloatField"}, "cemsetsum10": {"name": "CemSetSUM10", "type": "TFloatField"}, "cemsetsum30": {"name": "CemSetSUM30", "type": "TFloatField"}, "cemsetsum60": {"name": "CemSetSUM60", "type": "TFloatField"}, "cemsetsum100": {"name": "CemSetSUM100", "type": "TFloatField"}, "cemsetsumgirov": {"name": "CemSetSUMGIROV", "type": "TFloatField"}, "bkt5": {"name": "BKT5", "type": "TOracleDataSet"}, "bkt6": {"name": "BKT6", "type": "TOracleDataSet"}, "bkt7": {"name": "BKT7", "type": "TOracleDataSet"}, "buttonbkt3": {"name": "ButtonBkt3", "type": "TButton"}, "buttonbkt4": {"name": "ButtonBkt4", "type": "TButton"}, "bkt3": {"name": "BKT3", "type": "TOracleDataSet"}, "cmexcelexport3": {"name": "CMExcelExport3", "type": "TCMExcelExport"}, "bkt4": {"name": "BKT4", "type": "TOracleDataSet"}, "excelapplication1": {"name": "ExcelApplication1", "type": "TExcelApplication"}, "buttonbkt8": {"name": "ButtonBkt8", "type": "TButton"}, "buttonbkt9_2": {"name": "ButtonBkt9_2", "type": "TButton"}, "buttonbkt10": {"name": "ButtonBkt10", "type": "TButton"}, "buttonbkt11": {"name": "ButtonBkt11", "type": "TButton"}, "buttonbkt12": {"name": "ButtonBkt12", "type": "TButton"}, "buttonbkt13": {"name": "ButtonBkt13", "type": "TButton"}, "bkt8": {"name": "BKT8", "type": "TOracleDataSet"}, "bkt9_1": {"name": "BKT9_1", "type": "TOracleDataSet"}, "bkt9_2": {"name": "BKT9_2", "type": "TOracleDataSet"}, "bkt10": {"name": "BKT10", "type": "TOracleDataSet"}, "bkt11": {"name": "BKT11", "type": "TOracleDataSet"}, "bkt12": {"name": "BKT12", "type": "TOracleDataSet"}, "bkt13": {"name": "BKT13", "type": "TOracleDataSet"}, "cme8": {"name": "CME8", "type": "TCMExcelExport"}, "cme9_2": {"name": "CME9_2", "type": "TCMExcelExport"}, "cme9_1": {"name": "CME9_1", "type": "TCMExcelExport"}, "cmexcelexport11": {"name": "CMExcelExport11", "type": "TCMExcelExport"}, "cmexcelexport13": {"name": "CMExcelExport13", "type": "TCMExcelExport"}, "cmexcelexport10_1": {"name": "CMExcelExport10_1", "type": "TCMExcelExport"}, "cmexcelexport12": {"name": "CMExcelExport12", "type": "TCMExcelExport"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "fevents": {"name": "FEvents", "type": "IPrudensialEvents"}}, {});
  U.init(async () => {
    U.var_("path", '', "String");
    U.var_("Par", 0, "integer");
  });
  U.method("TPrudensial", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TPrudensial", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TPrudensial", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TPrudensial", "Initialize", null, arguments);
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
  U.method("TPrudensial", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrudensial", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrudensial", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrudensial", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrudensial", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrudensial", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrudensial", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrudensial", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrudensial", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrudensial", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrudensial", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrudensial", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrudensial", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrudensial", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrudensial", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrudensial", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrudensial", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrudensial", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrudensial", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TPrudensial", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TPrudensial", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "Panel4Click", async function Panel4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "BKTBalans"));
    await $.mcall((await $.wv([$t1], "BKTBalans", C, false)), "Close", []);
    await $.mcall((await $.wv([$t1], "BKTBalans", C, false)), "Open", []);
    await $.mcall((await $.wv([$t1], "BKTName", C, false)), "Close", []);
    await $.mcall((await $.wv([$t1], "BKTName", C, false)), "Open", []);
    await $.stmt($.wcall([$t1], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPrudensial", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPrudensial", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TPrudensial", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TPrudensial", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TPrudensial", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TPrudensial", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPrudensial", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPrudensial", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPrudensial", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TPrudensial", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TPrudensial", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPrudensial", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TPrudensial", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TPrudensial", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPrudensial", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPrudensial", "ExpXLS", async function ExpXLS(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "arq": $.copyArg(p1), "status": $.copyArg(p2), "sh": $.copyArg(p3), result: undefined, "excapp": null, "i": 0, "l": 0};
  await $.fixArgs(L0, ["dataset", "arq", "status", "sh"]);
  L0["excapp"] = (await $.call(C, "CreateOleObject", ["Excel.Application"]));
  await $.mset(L0["excapp"], "Visible", false);
  await $.mcall((await $.mv(L0["excapp"], "WorkBooks")), "Add", []);
  await $.mcall(L0["dataset"], "First", []);
  L0["l"] = 2;
  await $.mcall(L0["dataset"], "First", []);
  while ($.truthy($.not((await $.mv(L0["dataset"], "EOF"))))) {
    { const $t2 = $.sub((await $.mv((await $.mv(L0["dataset"], "Fields")), "Count")), 1);
      L0["i"] = 0;
      let $t3 = true;
      for (;;) {
        if (!$t3) { L0["i"] = $.succ(L0["i"], 1); }
        $t3 = false;
        if (!($.ord(L0["i"]) <= $.ord($t2))) break;
        { const $t4 = await $.iset((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["excapp"], "WorkBooks")), [1])), "Sheets")), [1])), "Cells")), [L0["l"], $.add(L0["i"], 1)], (await $.mv((await $.idx((await $.mv(L0["dataset"], "Fields")), [L0["i"]])), "DisplayText"))); if ($t4 !== undefined) { await $.mset((await $.idx((await $.mv((await $.idx((await $.mv(L0["excapp"], "WorkBooks")), [1])), "Sheets")), [1])), "Cells", $t4); } }
        await $.tick();
      }
    }
    await $.mcall(L0["dataset"], "Next", []);
    L0["l"] = $.add(L0["l"], 1);
    await $.tick();
  }
  await $.mset(L0["excapp"], "DisplayAlerts", false);
  await $.mset((await $.idx((await $.mv((await $.idx((await $.mv(L0["excapp"], "WorkBooks")), [1])), "Sheets")), [1])), "name", L0["sh"]);
  await $.stmt((await $.mcall((await $.idx((await $.mv(L0["excapp"], "WorkBooks")), [1])), "SaveAs", [L0["arq"]])));
  if ($.truthy($.eq((await $.v(C, "par")), 1))) {
    await $.mcall(L0["excapp"], "Quit", []);
  } else {
    await $.mset(L0["excapp"], "Visible", true);
  }
  return L0.result;
}, {"params": ["DataSet", "Arq", "status", "Sh"], "kind": "procedure", "ptypes": ["TDataSet", "String", "integer", "String"]});
  U.method("TPrudensial", "ButtonBkt8Click", async function ButtonBkt8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "st": null, "dat1": 0, "dat2": 0, "ft": false};
  await $.fixArgs(L0, ["sender"]);
  L0["dat1"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "datetimepicker1")), "datetime"))]))]));
  L0["dat2"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "datetimepicker2")), "datetime"))]))]));
  {
    const $t5 = (await $.v(C, "BKT8"));
    await $.stmt($.wcall([$t5], "ClearVariables", [], C));
    await $.stmt($.wcall([$t5], "CloseAll", [], C));
    await $.mcall((await $.wv([$t5], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t5], "SQL", C, false)), "Add", ["begin PRUDENSIAL.BKT8SQL(dat1=>:dat1,dat2=>:dat2,result=>:result); end;"])));
    await $.stmt((await $.wcall([$t5], "SetVariable", ["dat1", (await $.wv([$t5], "dat1", { get: async () => L0["dat1"], set: async (v) => { L0["dat1"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t5], "SetVariable", ["dat2", (await $.wv([$t5], "dat2", { get: async () => L0["dat2"], set: async (v) => { L0["dat2"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t5], "Open", [], C));
  }
  await $.stmt((await $.call(C, "ExpXLS", [(await $.v(C, "BKT8")), $.add((await $.v(C, "path")), "Env\\Prudensial\\Bkt8.xlsx"), (await $.v(C, "par")), "Bkt8"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "ButtonBkt9_2Click", async function ButtonBkt9_2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "st": null, "dat1": 0, "dat2": 0, "ft": false};
  await $.fixArgs(L0, ["sender"]);
  L0["dat1"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "datetimepicker1")), "datetime"))]))]));
  L0["dat2"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "datetimepicker2")), "datetime"))]))]));
  {
    const $t6 = (await $.v(C, "BKT9_2"));
    await $.stmt($.wcall([$t6], "ClearVariables", [], C));
    await $.stmt($.wcall([$t6], "CloseAll", [], C));
    await $.mcall((await $.wv([$t6], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t6], "SQL", C, false)), "Add", ["begin PRUDENSIAL.BKT9_2SQL(dat1=>:dat1,dat2=>:dat2,result=>:result); end;"])));
    await $.stmt((await $.wcall([$t6], "SetVariable", ["dat1", (await $.wv([$t6], "dat1", { get: async () => L0["dat1"], set: async (v) => { L0["dat1"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t6], "SetVariable", ["dat2", (await $.wv([$t6], "dat2", { get: async () => L0["dat2"], set: async (v) => { L0["dat2"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t6], "Open", [], C));
  }
  await $.stmt((await $.call(C, "ExpXLS", [(await $.v(C, "BKT9_2")), $.add((await $.v(C, "path")), "Env\\Prudensial\\BKT9_2.xlsx"), (await $.v(C, "par")), "Bkt9_2"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "ButtonBkt10Click", async function ButtonBkt10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "st": null, "dat1": 0, "dat2": 0, "ft": false};
  await $.fixArgs(L0, ["sender"]);
  L0["dat1"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "datetimepicker1")), "datetime"))]))]));
  L0["dat2"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "datetime"))]))]));
  {
    const $t7 = (await $.v(C, "BKT10"));
    await $.stmt($.wcall([$t7], "ClearVariables", [], C));
    await $.stmt($.wcall([$t7], "CloseAll", [], C));
    await $.mcall((await $.wv([$t7], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t7], "SQL", C, false)), "Add", ["begin PRUDENSIAL.BKT10SQL(dat1=>:dat1,dat2=>:dat2,result=>:result); end;"])));
    await $.stmt((await $.wcall([$t7], "SetVariable", ["dat1", (await $.wv([$t7], "dat1", { get: async () => L0["dat1"], set: async (v) => { L0["dat1"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t7], "SetVariable", ["dat2", (await $.wv([$t7], "dat2", { get: async () => L0["dat2"], set: async (v) => { L0["dat2"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t7], "Open", [], C));
  }
  await $.stmt((await $.call(C, "ExpXLS", [(await $.v(C, "BKT10")), $.add((await $.v(C, "path")), "Env\\Prudensial\\BKT10.xlsx"), (await $.v(C, "par")), "Bkt10"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "ButtonBkt11Click", async function ButtonBkt11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "st": null, "dat2": 0, "ft": false};
  await $.fixArgs(L0, ["sender"]);
  L0["dat2"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "datetimepicker2")), "datetime"))]))]));
  {
    const $t8 = (await $.v(C, "BKT11"));
    await $.stmt($.wcall([$t8], "ClearVariables", [], C));
    await $.stmt($.wcall([$t8], "CloseAll", [], C));
    await $.mcall((await $.wv([$t8], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t8], "SQL", C, false)), "Add", ["begin PRUDENSIAL.BKT11SQL(dat2=>:dat2,result=>:result); end;"])));
    await $.stmt((await $.wcall([$t8], "SetVariable", ["dat2", (await $.wv([$t8], "dat2", { get: async () => L0["dat2"], set: async (v) => { L0["dat2"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t8], "Open", [], C));
  }
  await $.stmt((await $.call(C, "ExpXLS", [(await $.v(C, "BKT11")), $.add((await $.v(C, "path")), "Env\\Prudensial\\BKT11.xlsx"), (await $.v(C, "par")), "Bkt11"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "ButtonBkt12Click", async function ButtonBkt12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "st": null, "dat2": 0, "ft": false};
  await $.fixArgs(L0, ["sender"]);
  L0["dat2"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "datetimepicker2")), "datetime"))]))]));
  {
    const $t9 = (await $.v(C, "BKT12"));
    await $.stmt($.wcall([$t9], "ClearVariables", [], C));
    await $.stmt($.wcall([$t9], "CloseAll", [], C));
    await $.mcall((await $.wv([$t9], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t9], "SQL", C, false)), "Add", ["begin PRUDENSIAL.BKT12SQL(dat2=>:dat2,result=>:result); end;"])));
    await $.stmt((await $.wcall([$t9], "SetVariable", ["dat2", (await $.wv([$t9], "dat2", { get: async () => L0["dat2"], set: async (v) => { L0["dat2"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t9], "Open", [], C));
  }
  await $.stmt((await $.call(C, "ExpXLS", [(await $.v(C, "BKT12")), $.add((await $.v(C, "path")), "Env\\Prudensial\\BKT12.xlsx"), (await $.v(C, "par")), "Bkt12"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "ButtonBkt13Click", async function ButtonBkt13Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "st": null, "dat2": 0, "ft": false};
  await $.fixArgs(L0, ["sender"]);
  L0["dat2"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "datetimepicker2")), "datetime"))]))]));
  {
    const $t10 = (await $.v(C, "BKT13"));
    await $.stmt($.wcall([$t10], "ClearVariables", [], C));
    await $.stmt($.wcall([$t10], "CloseAll", [], C));
    await $.mcall((await $.wv([$t10], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t10], "SQL", C, false)), "Add", ["begin PRUDENSIAL.BKT13SQL(dat2=>:dat2,result=>:result); end;"])));
    await $.stmt((await $.wcall([$t10], "SetVariable", ["dat2", (await $.wv([$t10], "dat2", { get: async () => L0["dat2"], set: async (v) => { L0["dat2"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t10], "Open", [], C));
  }
  await $.stmt((await $.call(C, "ExpXLS", [(await $.v(C, "BKT13")), $.add((await $.v(C, "path")), "Env\\Prudensial\\BKT13.xlsx"), (await $.v(C, "par")), "Bkt13"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sheet": null, "sheets": null, "v": null, "c": 0, "r": 0, "kr": 0, "i": 0, "j": 0, "z": 0, "st": '', "s": '', "name1": '', "departmentname": '', "filename": '', "departmentcount": 0, "deprow": 0, "v_obn": 0, "v_bdntm": 0, "pruden": null, "temizlemek": null, "del2": null, "excel": null};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Par", 1);
  await $.stmt((await $.call(C, "ButtonBkt1Click", [L0["sender"]])));
  await $.stmt((await $.call(C, "ButtonBkt2Click", [L0["sender"]])));
  await $.stmt((await $.call(C, "ButtonBkt3Click", [L0["sender"]])));
  await $.stmt((await $.call(C, "ButtonBkt4Click", [L0["sender"]])));
  await $.stmt((await $.call(C, "ButtonBkt5Click", [L0["sender"]])));
  await $.stmt((await $.call(C, "ButtonBkt6Click", [L0["sender"]])));
  await $.stmt((await $.call(C, "ButtonBkt7Click", [L0["sender"]])));
  await $.stmt((await $.call(C, "ButtonBkt8Click", [L0["sender"]])));
  await $.stmt((await $.call(C, "ButtonBkt9_1Click", [L0["sender"]])));
  await $.stmt((await $.call(C, "ButtonBkt9_2Click", [L0["sender"]])));
  await $.stmt((await $.call(C, "ButtonBkt10Click", [L0["sender"]])));
  await $.stmt((await $.call(C, "ButtonBkt11Click", [L0["sender"]])));
  await $.stmt((await $.call(C, "ButtonBkt12Click", [L0["sender"]])));
  await $.stmt((await $.call(C, "ButtonBkt13Click", [L0["sender"]])));
  await $.stmt((await $.call(C, "prClick", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "ButtonBkt1Click", async function ButtonBkt1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "st": null, "dat1": 0, "dat2": 0, "ft": false};
  await $.fixArgs(L0, ["sender"]);
  L0["dat1"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "datetime"))]))]));
  L0["dat2"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "datetime"))]))]));
  {
    const $t11 = (await $.v(C, "BKT1"));
    await $.stmt($.wcall([$t11], "ClearVariables", [], C));
    await $.stmt($.wcall([$t11], "CloseAll", [], C));
    await $.mcall((await $.wv([$t11], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t11], "SQL", C, false)), "Add", ["begin PRUDENSIAL.BKT1SQL(dtr=>:dtr,dtrn=>:dtrn,result=>:result); end;"])));
    await $.stmt((await $.wcall([$t11], "SetVariable", ["dtr", (await $.wv([$t11], "dat1", { get: async () => L0["dat1"], set: async (v) => { L0["dat1"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t11], "SetVariable", ["dtrn", (await $.wv([$t11], "dat2", { get: async () => L0["dat2"], set: async (v) => { L0["dat2"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t11], "Open", [], C));
  }
  await $.stmt((await $.call(C, "ExpXLS", [(await $.v(C, "BKT1")), $.add((await $.v(C, "path")), "Env\\Prudensial\\Bkt1.xlsx"), (await $.v(C, "par")), "Bkt1"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "ButtonBkt2Click", async function ButtonBkt2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "st": null, "dat11": 0, "dat22": 0, "dat33": 0, "ft": false};
  await $.fixArgs(L0, ["sender"]);
  L0["dat22"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "datetime"))]))]));
  {
    const $t12 = (await $.v(C, "BKT2"));
    await $.stmt($.wcall([$t12], "ClearVariables", [], C));
    await $.stmt($.wcall([$t12], "CloseAll", [], C));
    await $.mcall((await $.wv([$t12], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t12], "SQL", C, false)), "Add", ["begin PRUDENSIAL.BKT2SQL(dat2=>:dat2,result=>:result); end;"])));
    await $.stmt((await $.wcall([$t12], "SetVariable", ["dat2", (await $.wv([$t12], "dat22", { get: async () => L0["dat22"], set: async (v) => { L0["dat22"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t12], "Open", [], C));
  }
  await $.stmt((await $.call(C, "ExpXLS", [(await $.v(C, "BKT2")), $.add((await $.v(C, "path")), "Env\\Prudensial\\Bkt2.xlsx"), (await $.v(C, "par")), "Bkt2"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "ButtonBkt6Click", async function ButtonBkt6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "st": null, "dat1": 0, "dat2": 0, "ft": false};
  await $.fixArgs(L0, ["sender"]);
  L0["dat1"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "datetimepicker1")), "datetime"))]))]));
  L0["dat2"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "datetimepicker2")), "datetime"))]))]));
  {
    const $t13 = (await $.v(C, "BKT6"));
    await $.stmt($.wcall([$t13], "ClearVariables", [], C));
    await $.stmt($.wcall([$t13], "CloseAll", [], C));
    await $.mcall((await $.wv([$t13], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t13], "SQL", C, false)), "Add", ["begin PRUDENSIAL.BKT6SQL(dat1=>:dat1,dat2=>:dat2,result=>:result); end;"])));
    await $.stmt((await $.wcall([$t13], "SetVariable", ["dat1", (await $.wv([$t13], "dat1", { get: async () => L0["dat1"], set: async (v) => { L0["dat1"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t13], "SetVariable", ["dat2", (await $.wv([$t13], "dat2", { get: async () => L0["dat2"], set: async (v) => { L0["dat2"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t13], "Open", [], C));
  }
  await $.stmt((await $.call(C, "ExpXLS", [(await $.v(C, "BKT6")), $.add((await $.v(C, "path")), "Env\\Prudensial\\Bkt6.xlsx"), (await $.v(C, "par")), "Bkt6"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "ButtonBkt3Click", async function ButtonBkt3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat1": 0, "st": null, "ft": false};
  await $.fixArgs(L0, ["sender"]);
  L0["dat1"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "datetimepicker2")), "datetime"))]))]));
  {
    const $t14 = (await $.v(C, "BKT3"));
    await $.stmt($.wcall([$t14], "ClearVariables", [], C));
    await $.stmt($.wcall([$t14], "CloseAll", [], C));
    await $.mcall((await $.wv([$t14], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t14], "SQL", C, false)), "Add", ["begin PRUDENSIAL.BKT3SQL(dat1=>:dat1,result=>:result); end;"])));
    await $.stmt((await $.wcall([$t14], "SetVariable", ["dat1", (await $.wv([$t14], "dat1", { get: async () => L0["dat1"], set: async (v) => { L0["dat1"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t14], "Open", [], C));
  }
  await $.stmt((await $.call(C, "ExpXLS", [(await $.v(C, "BKT3")), $.add((await $.v(C, "path")), "Env\\Prudensial\\Bkt3.xlsx"), (await $.v(C, "par")), "Bkt3"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "ButtonBkt4Click", async function ButtonBkt4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat1": 0, "st": null, "ft": false};
  await $.fixArgs(L0, ["sender"]);
  L0["dat1"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "datetimepicker2")), "datetime"))]))]));
  {
    const $t15 = (await $.v(C, "BKT4"));
    await $.stmt($.wcall([$t15], "ClearVariables", [], C));
    await $.stmt($.wcall([$t15], "CloseAll", [], C));
    await $.mcall((await $.wv([$t15], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t15], "SQL", C, false)), "Add", ["begin PRUDENSIAL.BKT4SQL(dat1=>:dat1,result=>:result); end;"])));
    await $.stmt((await $.wcall([$t15], "SetVariable", ["dat1", (await $.wv([$t15], "dat1", { get: async () => L0["dat1"], set: async (v) => { L0["dat1"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t15], "Open", [], C));
  }
  await $.stmt((await $.call(C, "ExpXLS", [(await $.v(C, "BKT4")), $.add((await $.v(C, "path")), "Env\\Prudensial\\Bkt4.xlsx"), (await $.v(C, "par")), "Bkt4"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "ButtonBkt5Click", async function ButtonBkt5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat1": 0, "st": null, "ft": false};
  await $.fixArgs(L0, ["sender"]);
  L0["dat1"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "datetimepicker2")), "datetime"))]))]));
  {
    const $t16 = (await $.v(C, "BKT5"));
    await $.stmt($.wcall([$t16], "ClearVariables", [], C));
    await $.stmt($.wcall([$t16], "CloseAll", [], C));
    await $.mcall((await $.wv([$t16], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t16], "SQL", C, false)), "Add", ["begin PRUDENSIAL.BKT5SQL(dat1=>:dat1,result=>:result); end;"])));
    await $.stmt((await $.wcall([$t16], "SetVariable", ["dat1", (await $.wv([$t16], "dat1", { get: async () => L0["dat1"], set: async (v) => { L0["dat1"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t16], "Open", [], C));
  }
  await $.stmt((await $.call(C, "ExpXLS", [(await $.v(C, "BKT5")), $.add((await $.v(C, "path")), "Env\\Prudensial\\Bkt5.xlsx"), (await $.v(C, "par")), "Bkt5"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "ButtonBkt7Click", async function ButtonBkt7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "st": null, "dat2": 0, "ft": false};
  await $.fixArgs(L0, ["sender"]);
  L0["dat2"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "datetimepicker2")), "datetime"))]))]));
  {
    const $t17 = (await $.v(C, "BKT7"));
    await $.stmt($.wcall([$t17], "ClearVariables", [], C));
    await $.stmt($.wcall([$t17], "CloseAll", [], C));
    await $.mcall((await $.wv([$t17], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t17], "SQL", C, false)), "Add", ["begin PRUDENSIAL.BKT7SQL(dat2=>:dat2,result=>:result); end;"])));
    await $.stmt((await $.wcall([$t17], "SetVariable", ["dat2", (await $.wv([$t17], "dat2", { get: async () => L0["dat2"], set: async (v) => { L0["dat2"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t17], "Open", [], C));
  }
  await $.stmt((await $.call(C, "ExpXLS", [(await $.v(C, "BKT7")), $.add((await $.v(C, "path")), "Env\\Prudensial\\Bkt7.xlsx"), (await $.v(C, "par")), "Bkt7"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "ButtonBkt9_1Click", async function ButtonBkt9_1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "st": null, "dat2": 0, "ft": false};
  await $.fixArgs(L0, ["sender"]);
  L0["dat2"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "datetimepicker2")), "datetime"))]))]));
  {
    const $t18 = (await $.v(C, "BKT9_1"));
    await $.stmt($.wcall([$t18], "ClearVariables", [], C));
    await $.stmt($.wcall([$t18], "CloseAll", [], C));
    await $.mcall((await $.wv([$t18], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t18], "SQL", C, false)), "Add", ["begin PRUDENSIAL.BKT9_1SQL(dat2=>:dat2,result=>:result); end;"])));
    await $.stmt((await $.wcall([$t18], "SetVariable", ["dat2", (await $.wv([$t18], "dat2", { get: async () => L0["dat2"], set: async (v) => { L0["dat2"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t18], "Open", [], C));
  }
  await $.stmt((await $.call(C, "ExpXLS", [(await $.v(C, "BKT9_1")), $.add((await $.v(C, "path")), "Env\\Prudensial\\Bkt9_1.xlsx"), (await $.v(C, "par")), "Bkt9_1"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "prClick", async function prClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "vexcel": null};
  await $.fixArgs(L0, ["sender"]);
  L0["vexcel"] = (await $.call(C, "CreateOleObject", ["Excel.Application"]));
  await $.mset(L0["vexcel"], "Visible", true);
  await $.stmt((await $.mcall((await $.mv(L0["vexcel"], "Workbooks")), "Open", [$.add((await $.v(C, "path")), "Env\\Prudensial\\prudencial.xlsm")])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sheet": null, "sheets": null, "v": null, "c": 0, "r": 0, "kr": 0, "i": 0, "j": 0, "z": 0, "st": '', "s": '', "name1": '', "departmentname": '', "filename": '', "departmentcount": 0, "deprow": 0, "v_obn": 0, "v_bdntm": 0, "pruden": null, "temizlemek": null, "del2": null, "del": null};
  await $.fixArgs(L0, ["sender"]);
  { const $t19 = await $.iset((await $.mv((await $.v(C, "prd")), "Visible")), [0], true); if ($t19 !== undefined) { await $.mset((await $.v(C, "prd")), "Visible", $t19); } }
  try {
    await $.stmt((await $.mcall((await $.v(C, "prd")), "Run", ["temizlemek"])));
  } catch ($t20) {
    $.rethrowControl($t20);
    $.handled($t20);
    await $.stmt((await $.mcall((await $.v(C, "prd")), "Run", ["pruden"])));
    await $.stmt((await $.mcall((await $.v(C, "prd")), "Run", ["del"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "BKTBalans", (await $.mcall((await $.v(C, "TBKTBalans")), "Create", [Self])));
  await $.set(C, "FormAdd", (await $.mcall((await $.v(C, "TFormAdd")), "Create", [Self])));
  await $.mcall((await $.v(C, "RadioButton1")), "Checked", []);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mcall((await $.v(C, "sbop")), "CallDateFunction", ["get_date", []])));
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mcall((await $.v(C, "sbop")), "CallDateFunction", ["get_date", []])));
  await $.mset((await $.v(C, "ButtonBkt1")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt2")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt3")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt4")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt5")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt6")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt7")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt8")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt9_1")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt9_2")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt10")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt11")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt12")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt13")), "Visible", false);
  await $.mset((await $.v(C, "PR")), "Visible", false);
  await $.set(C, "path", (await $.call(C, "Copy", [(await $.v(C, "GetCurrentDir")), 0, 14])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "ActiveFormDestroy", async function ActiveFormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CME1")), "Disconnect", []);
  await $.mcall((await $.v(C, "CME2")), "Disconnect", []);
  await $.mcall((await $.v(C, "CME6")), "Disconnect", []);
  await $.mcall((await $.v(C, "CMExcelExport3")), "Disconnect", []);
  await $.mcall((await $.v(C, "ExcelExport")), "Disconnect", []);
  await $.mcall((await $.v(C, "CME10")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "gx2Click", async function gx2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "excel": null, "sheet": null, "sheets": null, "v": null, "c": 0, "r": 0, "kr": 0, "i": 0, "j": 0, "z": 0, "st": '', "s": '', "name1": '', "departmentname": '', "filename": '', "departmentcount": 0, "deprow": 0, "v_obn": 0, "v_bdntm": 0, "pruden": null, "temizlemek": null, "del2": null};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["excel"], "Visible", false);
  if ($.truthy($.not((await $.call(C, "DirectoryExists", ["C:\\Smart-Bank\\Env\\prudesial\\mac"]))))) {
    await $.stmt((await $.call(C, "MkDir", ["C:\\Smart-Bank\\Env\\prudesial\\mac"])));
  }
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["pruden"], async ($t21) => { L0["pruden"] = $t21; }), "C:\\Smart-Bank\\Env\\prudesial\\mac\\pruden.bas"])));
  await $.stmt((await $.call(C, "Rewrite", [$.ref(async () => L0["pruden"], async ($t22) => { L0["pruden"] = $t22; })])));
  { const $t23 = (await $.mv((await $.mv((await $.v(C, "prud")), "Lines")), "Count"));
    L0["i"] = 0;
    let $t24 = true;
    for (;;) {
      if (!$t24) { L0["i"] = $.succ(L0["i"], 1); }
      $t24 = false;
      if (!($.ord(L0["i"]) <= $.ord($t23))) break;
      await $.stmt((await $.call(C, "writeln", [L0["pruden"], (await $.idx((await $.mv((await $.v(C, "prud")), "lines")), [L0["i"]]))])));
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["pruden"], async ($t25) => { L0["pruden"] = $t25; })])));
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["temizlemek"], async ($t26) => { L0["temizlemek"] = $t26; }), "C:\\Smart-Bank\\Env\\prudesial\\mac\\temizlemek.bas"])));
  await $.stmt((await $.call(C, "Rewrite", [$.ref(async () => L0["temizlemek"], async ($t27) => { L0["temizlemek"] = $t27; })])));
  { const $t28 = (await $.mv((await $.mv((await $.v(C, "tem")), "Lines")), "Count"));
    L0["c"] = 0;
    let $t29 = true;
    for (;;) {
      if (!$t29) { L0["c"] = $.succ(L0["c"], 1); }
      $t29 = false;
      if (!($.ord(L0["c"]) <= $.ord($t28))) break;
      await $.stmt((await $.call(C, "writeln", [L0["temizlemek"], (await $.idx((await $.mv((await $.v(C, "tem")), "lines")), [L0["c"]]))])));
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["temizlemek"], async ($t30) => { L0["temizlemek"] = $t30; })])));
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["del2"], async ($t31) => { L0["del2"] = $t31; }), "C:\\Smart-Bank\\Env\\prudesial\\mac\\del.bas"])));
  await $.stmt((await $.call(C, "Rewrite", [$.ref(async () => L0["del2"], async ($t32) => { L0["del2"] = $t32; })])));
  { const $t33 = (await $.mv((await $.mv((await $.v(C, "dl")), "Lines")), "Count"));
    L0["r"] = 0;
    let $t34 = true;
    for (;;) {
      if (!$t34) { L0["r"] = $.succ(L0["r"], 1); }
      $t34 = false;
      if (!($.ord(L0["r"]) <= $.ord($t33))) break;
      await $.stmt((await $.call(C, "writeln", [L0["del2"], (await $.idx((await $.mv((await $.v(C, "dl")), "lines")), [L0["r"]]))])));
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["del2"], async ($t35) => { L0["del2"] = $t35; })])));
  L0["v"] = (await $.mv((await $.v(C, "prd")), "Application"));
  await $.stmt((await $.mcall((await $.mv(L0["v"], "workbooks")), "add", ["C:\\Smart-Bank\\Env\\prudesial\\pruden.xlsm"])));
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.mv(L0["v"], "VBE")), "ActiveVBProject")), "VBComponents")), "Import", ["C:\\Smart-Bank\\Env\\prudesial\\mac\\temizlemek.bas"])));
  await $.stmt((await $.mcall(L0["v"], "Run", ["temizlemek"])));
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.mv(L0["v"], "VBE")), "ActiveVBProject")), "VBComponents")), "Import", ["C:\\Smart-Bank\\Env\\prudesial\\mac\\pruden.bas"])));
  await $.stmt((await $.mcall(L0["v"], "Run", ["pruden"])));
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.mv(L0["v"], "VBE")), "ActiveVBProject")), "VBComponents")), "Import", ["C:\\Smart-Bank\\Env\\prudesial\\mac\\del.bas"])));
  await $.stmt((await $.mcall(L0["v"], "Run", ["del"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "RadioButton1Click", async function RadioButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Button1")), "Visible", true);
  await $.mset((await $.v(C, "ButtonBkt1")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt2")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt3")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt4")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt5")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt6")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt7")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt8")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt9_1")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt9_2")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt10")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt11")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt12")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt13")), "Visible", false);
  await $.mset((await $.v(C, "PR")), "Visible", false);
  await $.set(C, "Par", 1);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrudensial", "RadioButton2Click", async function RadioButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Button1")), "Visible", false);
  await $.mset((await $.v(C, "ButtonBkt1")), "Visible", true);
  await $.mset((await $.v(C, "ButtonBkt2")), "Visible", true);
  await $.mset((await $.v(C, "ButtonBkt3")), "Visible", true);
  await $.mset((await $.v(C, "ButtonBkt4")), "Visible", true);
  await $.mset((await $.v(C, "ButtonBkt5")), "Visible", true);
  await $.mset((await $.v(C, "ButtonBkt6")), "Visible", true);
  await $.mset((await $.v(C, "ButtonBkt7")), "Visible", true);
  await $.mset((await $.v(C, "ButtonBkt8")), "Visible", true);
  await $.mset((await $.v(C, "ButtonBkt9_1")), "Visible", true);
  await $.mset((await $.v(C, "ButtonBkt9_2")), "Visible", true);
  await $.mset((await $.v(C, "ButtonBkt10")), "Visible", true);
  await $.mset((await $.v(C, "ButtonBkt11")), "Visible", true);
  await $.mset((await $.v(C, "ButtonBkt12")), "Visible", true);
  await $.mset((await $.v(C, "ButtonBkt13")), "Visible", true);
  await $.mset((await $.v(C, "PR")), "Visible", true);
  await $.set(C, "Par", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
