// Generated from MasterBookImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("MasterBookImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "MasterBookProj_TLB", "StdVcl", "StdCtrls", "Buttons", "ImgList", "SBPlgAx50_TLB", "Db", "OracleData", "Grids", "DBGrids", "sboapiDataModuleImpl", "Gauges", "ComCtrls", "ComObj", "ComServ", "ApllPackUnit", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TMasterBook", "TActiveForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "bitexport": {"name": "BitExport", "type": "TBitBtn"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "progressbar": {"name": "ProgressBar", "type": "TGauge"}, "kreditaccdataset": {"name": "KreditAccDataSet", "type": "TOracleDataSet"}, "obrdebtdataset": {"name": "ObrDebtDataSet", "type": "TOracleDataSet"}, "datasetsumdebt": {"name": "DataSetSumDebt", "type": "TOracleDataSet"}, "datasetsumkredit": {"name": "DataSetSumKredit", "type": "TOracleDataSet"}, "datasetsumsaldo": {"name": "DataSetSumSaldo", "type": "TOracleDataSet"}, "datasetgetbalname": {"name": "DataSetGetBalName", "type": "TOracleDataSet"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dtpmin": {"name": "DTPMin", "type": "TDateTimePicker"}, "dtpmax": {"name": "DTPMax", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "obrdebtdatasetobr": {"name": "ObrDebtDataSetOBR", "type": "TFloatField"}, "datasetsumdebtobrdebt": {"name": "DataSetSumDebtOBRDEBT", "type": "TFloatField"}, "datasetsumkreditobrkredit": {"name": "DataSetSumKreditOBRKREDIT", "type": "TFloatField"}, "datasetsumsaldoactive": {"name": "DataSetSumSaldoACTIVE", "type": "TFloatField"}, "datasetsumsaldopassive": {"name": "DataSetSumSaldoPASSIVE", "type": "TFloatField"}, "edbalance": {"name": "EdBalance", "type": "TEdit"}, "ceckboxbal": {"name": "CeckBoxBal", "type": "TCheckBox"}, "datasetgetbalnameactive": {"name": "DataSetGetBalNameACTIVE", "type": "TFloatField"}, "datasetgetbalnamepassiv": {"name": "DataSetGetBalNamePASSIV", "type": "TFloatField"}, "label3": {"name": "Label3", "type": "TLabel"}, "datasetbranch": {"name": "DataSetBranch", "type": "TOracleDataSet"}, "cbbranch": {"name": "CBBranch", "type": "TComboBox"}, "kreditaccdatasetbal_cn_debt": {"name": "KreditAccDataSetBAL_CN_DEBT", "type": "TWideStringField"}, "kreditaccdatasetbal_cn_kredit": {"name": "KreditAccDataSetBAL_CN_KREDIT", "type": "TWideStringField"}, "datasetgetbalnamebal_cn": {"name": "DataSetGetBalNameBAL_CN", "type": "TWideStringField"}, "datasetgetbalnamebalname": {"name": "DataSetGetBalNameBALNAME", "type": "TWideStringField"}, "datasetsumsaldobal_cn": {"name": "DataSetSumSaldoBAL_CN", "type": "TWideStringField"}, "datasetsumsaldomonth": {"name": "DataSetSumSaldoMONTH", "type": "TWideStringField"}, "datasetsumdebtbal_debt": {"name": "DataSetSumDebtBAL_DEBT", "type": "TWideStringField"}, "datasetsumdebtmonth": {"name": "DataSetSumDebtMONTH", "type": "TWideStringField"}, "obrdebtdatasetbal_cn_debt": {"name": "ObrDebtDataSetBAL_CN_DEBT", "type": "TWideStringField"}, "obrdebtdatasetbal_cn_kredit": {"name": "ObrDebtDataSetBAL_CN_KREDIT", "type": "TWideStringField"}, "obrdebtdatasetmonth": {"name": "ObrDebtDataSetMONTH", "type": "TWideStringField"}, "datasetsumkreditbal_kredit": {"name": "DataSetSumKreditBAL_KREDIT", "type": "TWideStringField"}, "datasetsumkreditmonth": {"name": "DataSetSumKreditMONTH", "type": "TWideStringField"}, "fevents": {"name": "FEvents", "type": "IMasterBookEvents"}, "branch": {"name": "Branch", "type": "array"}}, {});
  U.fieldInit("TMasterBook", "branch", () => []);
  U.init(async () => {
    U.var_("MasterBook", null, "TMasterBook");
  });
  U.method("TMasterBook", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TMasterBook", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TMasterBook", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TMasterBook", "Initialize", null, arguments);
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
  U.method("TMasterBook", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMasterBook", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMasterBook", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMasterBook", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMasterBook", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMasterBook", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMasterBook", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMasterBook", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMasterBook", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMasterBook", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMasterBook", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMasterBook", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMasterBook", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMasterBook", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMasterBook", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMasterBook", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMasterBook", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMasterBook", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMasterBook", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TMasterBook", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMasterBook", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMasterBook", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMasterBook", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMasterBook", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMasterBook", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMasterBook", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TMasterBook", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMasterBook", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMasterBook", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMasterBook", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TMasterBook", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TMasterBook", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TMasterBook", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TMasterBook", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMasterBook", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMasterBook", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMasterBook", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TMasterBook", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TMasterBook", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMasterBook", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TMasterBook", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TMasterBook", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMasterBook", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMasterBook", "Get_Icon", async function Get_Icon(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.mcall((await $.v(C, "ImageList1")), "GetIcon", [0, (await $.v(C, "Icon"))])));
  L0["result"] = (await $.mv((await $.v(C, "Icon")), "Handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMasterBook", "BitExportClick", async function BitExportClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "selection": null, "exc": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CeckBoxBal")), "Checked")))) {
    L0["selection"] = (await $.v(C, "rtOne"));
    if ($.truthy($.eq((await $.call(C, "Trim", [(await $.mv((await $.v(C, "EdBalance")), "Text"))])), ""))) {
      await $.stmt((await $.call(C, "MessageDlg", ["Hesabi daxil edin!", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbOk"))], 0])));
      return L0.result;
    }
  } else {
    L0["selection"] = (await $.v(C, "rtAll"));
  }
  try {
    await $.stmt((await $.call(C, "SetLastError", [0])));
    await $.mset((await $.v(C, "BitExport")), "Enabled", false);
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
    await $.stmt((await $.mcall((await $.v(C, "ApllPackUnit")), "ExoprtExcel", [(await $.mv((await $.v(C, "DTPMin")), "date")), (await $.mv((await $.v(C, "DTPMax")), "date")), L0["selection"], (await $.mv((await $.v(C, "EdBalance")), "Text"))])));
  } finally {
    await $.mset((await $.v(C, "BitExport")), "Enabled", true);
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    if ($.truthy($.ne((await $.call(C, "GetLastError", [])), 0))) {
      await $.stmt((await $.call(C, "RaiseLastWin32Error", [])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMasterBook", "FillBranch", async function FillBranch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "branchindex": 0};
  {
    const $t1 = (await $.v(C, "DataSetBranch"));
    try {
      await $.stmt($.wcall([$t1], "Open", [], C));
      await $.stmt((await $.wcall([$t1], "SetLength", [$.ref(async () => (await $.wv([$t1], "Branch", C, false)), async ($t2) => { await $.wset([$t1], "Branch", $t2, C); }), $.add((await $.wv([$t1], "RecordCount", C, false)), 1)], C)));
      await $.stmt($.wcall([$t1], "First", [], C));
      await $.wset([$t1], "BranchIndex", 0, { get: async () => L0["branchindex"], set: async (v) => { L0["branchindex"] = v; }, local: true });
      await $.mcall((await $.mv((await $.wv([$t1], "CBBranch", C, false)), "Items")), "Clear", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "CBBranch", C, false)), "Items")), "Add", ["Ümumi"])));
      { const $t3 = await $.iset((await $.wv([$t1], "Branch", C, false)), [(await $.wv([$t1], "BranchIndex", { get: async () => L0["branchindex"], set: async (v) => { L0["branchindex"] = v; }, local: true }, false))], (-(1))); if ($t3 !== undefined) { await $.wset([$t1], "Branch", $t3, C); } }
      while ($.truthy($.not((await $.wv([$t1], "EOF", C, false))))) {
        await $.wset([$t1], "BranchIndex", $.add((await $.wv([$t1], "BranchIndex", { get: async () => L0["branchindex"], set: async (v) => { L0["branchindex"] = v; }, local: true }, false)), 1), { get: async () => L0["branchindex"], set: async (v) => { L0["branchindex"] = v; }, local: true });
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "CBBranch", C, false)), "Items")), "Add", [(await $.mv((await $.wcall([$t1], "FieldByName", ["Name"], C)), "AsString"))])));
        { const $t4 = await $.iset((await $.wv([$t1], "Branch", C, false)), [(await $.wv([$t1], "BranchIndex", { get: async () => L0["branchindex"], set: async (v) => { L0["branchindex"] = v; }, local: true }, false))], (await $.mv((await $.wcall([$t1], "FieldByName", ["ID"], C)), "AsInteger"))); if ($t4 !== undefined) { await $.wset([$t1], "Branch", $t4, C); } }
        await $.stmt($.wcall([$t1], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t1], "Close", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TMasterBook", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "currentdate": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "MasterBook", Self);
  await $.stmt($.call(C, "FillBranch", []));
  await $.mset((await $.v(C, "CBBranch")), "ItemIndex", 0);
  {
    const $t5 = (await $.v(C, "sboapiDataModule"));
    await $.wset([$t5], "CurrentDate", (await $.mcall((await $.wv([$t5], "SBOperationDay", C, false)), "CallDateFunction", ["get_date", []])), { get: async () => L0["currentdate"], set: async (v) => { L0["currentdate"] = v; }, local: true });
  }
  await $.mset((await $.v(C, "DTPMin")), "DateTime", L0["currentdate"]);
  await $.mset((await $.v(C, "DTPMax")), "DateTime", L0["currentdate"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
