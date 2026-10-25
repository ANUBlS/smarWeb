// Generated from SBProfitClosingMainFormImplImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SBProfitClosingMainFormImplImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "ProfitClosing_TLB", "StdVcl", "StdCtrls", "Db", "OracleData", "Grids", "DBGrids", "ExtCtrls", "ActnList", "SBPlgAx50_TLB", "ImgList", "Oracle", "ComObj", "ComServ", "sboapiDataModuleImpl", "SBSystem", "TemporaryTransactionCommitFormImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TSBProfitClosingMainForm", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "dayprofitsdata": {"name": "DayProfitsData", "type": "TOracleDataSet"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dayprofitsdataid": {"name": "DayProfitsDataID", "type": "TFloatField"}, "dayprofitsdataostat": {"name": "DayProfitsDataOSTAT", "type": "TFloatField"}, "dayprofitsdatapok_ostat": {"name": "DayProfitsDataPOK_OSTAT", "type": "TFloatField"}, "dayprofitsdatabal_cn1": {"name": "DayProfitsDataBAL_CN1", "type": "TFloatField"}, "button1": {"name": "Button1", "type": "TButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "refreshbutton": {"name": "RefreshButton", "type": "TButton"}, "dayprofitsdataactivepassivechar": {"name": "DayProfitsDataActivePassiveChar", "type": "TStringField"}, "dayprofitsdataamount": {"name": "DayProfitsDataAMOUNT", "type": "TFloatField"}, "dayprofitsdatalamount": {"name": "DayProfitsDataLAMOUNT", "type": "TFloatField"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "profitsclose": {"name": "ProfitsClose", "type": "TAction"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "btncoinsrefresh": {"name": "BtnCoinsRefresh", "type": "TButton"}, "ords_coins": {"name": "OrDS_Coins", "type": "TOracleDataSet"}, "ords_coinsid": {"name": "OrDS_CoinsID", "type": "TFloatField"}, "ords_coinsdebet": {"name": "OrDS_CoinsDEBET", "type": "TFloatField"}, "ords_coinskredit": {"name": "OrDS_CoinsKREDIT", "type": "TFloatField"}, "ords_coinsostat": {"name": "OrDS_CoinsOSTAT", "type": "TFloatField"}, "ords_coinspok_ostat": {"name": "OrDS_CoinsPOK_OSTAT", "type": "TFloatField"}, "ords_coinsfilial": {"name": "OrDS_CoinsFILIAL", "type": "TIntegerField"}, "ds_coins": {"name": "DS_Coins", "type": "TDataSource"}, "btncoinoperations": {"name": "BtnCoinOperations", "type": "TButton"}, "gridcoins": {"name": "GridCoins", "type": "TDBGrid"}, "coinclose": {"name": "CoinClose", "type": "TAction"}, "orpackclosecoin": {"name": "OrPackCloseCoin", "type": "TOraclePackage"}, "dayprofitsdataacc_no": {"name": "DayProfitsDataACC_NO", "type": "TWideStringField"}, "dayprofitsdataval_acc": {"name": "DayProfitsDataVAL_ACC", "type": "TIntegerField"}, "dayprofitsdataval_name": {"name": "DayProfitsDataVAL_NAME", "type": "TWideStringField"}, "ords_coinsacc_no": {"name": "OrDS_CoinsACC_NO", "type": "TWideStringField"}, "ords_coinsval_acc": {"name": "OrDS_CoinsVAL_ACC", "type": "TIntegerField"}, "ords_coinsval_name": {"name": "OrDS_CoinsVAL_NAME", "type": "TWideStringField"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "ds_asan": {"name": "DS_asan", "type": "TDataSource"}, "ords_asan": {"name": "ords_asan", "type": "TOracleDataSet"}, "ords_asanid": {"name": "ords_asanID", "type": "TFloatField"}, "ords_asanacc_no": {"name": "ords_asanACC_NO", "type": "TWideStringField"}, "ords_asancurrencyname": {"name": "ords_asanCURRENCYNAME", "type": "TWideStringField"}, "ords_asanamount": {"name": "ords_asanAMOUNT", "type": "TFloatField"}, "ords_asanfilialname": {"name": "ords_asanFILIALNAME", "type": "TWideStringField"}, "ords_asanfilial": {"name": "ords_asanFILIAL", "type": "TIntegerField"}, "fevents": {"name": "FEvents", "type": "ISBProfiClosingMainFormEvents"}}, {});
  U.init(async () => {
  });
  U.method("TSBProfitClosingMainForm", "Get_Icon", async function Get_Icon(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["imageindex"] = 0;
  await $.stmt((await $.mcall((await $.v(C, "ImageList1")), "GetIcon", [L0["imageindex"], (await $.v(C, "Icon"))])));
  L0["result"] = (await $.mv((await $.v(C, "Icon")), "Handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBProfitClosingMainForm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TSBProfitClosingMainForm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TSBProfitClosingMainForm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TSBProfitClosingMainForm", "Initialize", null, arguments);
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
  U.method("TSBProfitClosingMainForm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBProfitClosingMainForm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBProfitClosingMainForm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBProfitClosingMainForm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBProfitClosingMainForm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBProfitClosingMainForm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBProfitClosingMainForm", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBProfitClosingMainForm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBProfitClosingMainForm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBProfitClosingMainForm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBProfitClosingMainForm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBProfitClosingMainForm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBProfitClosingMainForm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBProfitClosingMainForm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBProfitClosingMainForm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBProfitClosingMainForm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBProfitClosingMainForm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBProfitClosingMainForm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBProfitClosingMainForm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TSBProfitClosingMainForm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBProfitClosingMainForm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBProfitClosingMainForm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBProfitClosingMainForm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBProfitClosingMainForm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBProfitClosingMainForm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBProfitClosingMainForm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TSBProfitClosingMainForm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBProfitClosingMainForm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSBProfitClosingMainForm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSBProfitClosingMainForm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TSBProfitClosingMainForm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TSBProfitClosingMainForm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TSBProfitClosingMainForm", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TSBProfitClosingMainForm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSBProfitClosingMainForm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSBProfitClosingMainForm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSBProfitClosingMainForm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TSBProfitClosingMainForm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TSBProfitClosingMainForm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSBProfitClosingMainForm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TSBProfitClosingMainForm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TSBProfitClosingMainForm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSBProfitClosingMainForm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSBProfitClosingMainForm", "ProfitsCloseExecute", async function ProfitsCloseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tempid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["tempid"] = (await $.v(C, "Sb_CloseDayProfits"));
  {
    const $t1 = (await $.mcall((await $.v(C, "TTemporaryTransactionCommitForm")), "Create", [Self]));
    try {
      if ($.truthy((await $.wcall([$t1], "Execute", [(await $.wv([$t1], "TempID", { get: async () => L0["tempid"], set: async (v) => { L0["tempid"] = v; }, local: true }, false)), "Galir-zararin baglanmasi", (await $.wv([$t1], "False", C, false)), (await $.wv([$t1], "True", C, false)), $.sub((await $.wv([$t1], "FilterNone", C, false)), [(await $.wv([$t1], "tfLAmount", C, false)), (await $.wv([$t1], "tfCreditAmount", C, false))])], C)))) {
        await $.stmt((await $.wcall([$t1], "ShowMessage", [(await $.wcall([$t1], "Format", ["Gəlir-xərc hesabları bağlandı. %d əməliyyat günün sənədlərinə daxil oldu", [(await $.wv([$t1], "TransactionsCount", C, false))]], C))], C)));
      }
      await $.mcall((await $.mv((await $.wv([$t1], "sboapiDataModule", C, false)), "SBSession")), "Commit", []);
    } finally {
      await $.stmt($.wcall([$t1], "Release", [], C));
    }
  }
  await $.mcall((await $.v(C, "DayProfitsData")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBProfitClosingMainForm", "RefreshButtonClick", async function RefreshButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DayProfitsData")), "close", []);
  await $.mcall((await $.v(C, "DayProfitsData")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBProfitClosingMainForm", "DayProfitsDataCalcFields", async function DayProfitsDataCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "lamount": 0, "apchar": ''};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t2 = L0["dataset"];
    await $.wset([$t2], "LAmount", (await $.mv((await $.wcall([$t2], "FieldByName", ["POK_OSTAT"], C)), "AsCurrency")), { get: async () => L0["lamount"], set: async (v) => { L0["lamount"] = v; }, local: true });
    if ($.truthy($.lt((await $.wv([$t2], "LAmount", { get: async () => L0["lamount"], set: async (v) => { L0["lamount"] = v; }, local: true }, false)), 0))) {
      await $.wset([$t2], "APChar", "A", { get: async () => L0["apchar"], set: async (v) => { L0["apchar"] = v; }, local: true });
    } else {
      if ($.truthy($.gt((await $.wv([$t2], "LAmount", { get: async () => L0["lamount"], set: async (v) => { L0["lamount"] = v; }, local: true }, false)), 0))) {
        await $.wset([$t2], "APChar", "P", { get: async () => L0["apchar"], set: async (v) => { L0["apchar"] = v; }, local: true });
      } else {
        await $.wset([$t2], "APChar", "Zero", { get: async () => L0["apchar"], set: async (v) => { L0["apchar"] = v; }, local: true });
      }
    }
    await $.mset((await $.wcall([$t2], "FieldByName", ["ActivePassiveChar"], C)), "AsString", (await $.wv([$t2], "APChar", { get: async () => L0["apchar"], set: async (v) => { L0["apchar"] = v; }, local: true }, false)));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TSBProfitClosingMainForm", "ProfitsCloseUpdate", async function ProfitsCloseUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = L0["sender"];
    await $.wset([$t3], "Enabled", (await $.mv((await $.wv([$t3], "DayProfitsData", C, false)), "Active")), C);
    if ($.truthy((await $.wv([$t3], "Enabled", C, false)))) {
      await $.wset([$t3], "Enabled", $.gt((await $.mv((await $.wv([$t3], "DayProfitsData", C, false)), "RecordCount")), 0), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBProfitClosingMainForm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OrDS_Coins")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBProfitClosingMainForm", "BtnCoinsRefreshClick", async function BtnCoinsRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OrDS_Coins")), "Close", []);
  await $.mcall((await $.v(C, "OrDS_Coins")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBProfitClosingMainForm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    if ($.truthy($.eq((await $.call(C, "MessageDlg", ["AsanÖdəniş Əməliyyatları verilsin?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrYes"))))) {
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
      await $.stmt((await $.mcall((await $.v(C, "OrPackCloseCoin")), "CallProcedure", ["AsanPay_sendtransactions", []])));
      await $.mcall((await $.v(C, "OrDS_Coins")), "Refresh", []);
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBProfitClosingMainForm", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ords_asan")), "close", []);
  await $.mcall((await $.v(C, "ords_asan")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBProfitClosingMainForm", "CoinCloseExecute", async function CoinCloseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Qəpiklər məzənnə fərqi hesabları ilə bağlansın?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrYes"))))) {
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
      await $.stmt((await $.mcall((await $.v(C, "OrPackCloseCoin")), "CallProcedure", ["CloseCoins", []])));
      await $.mcall((await $.v(C, "OrDS_Coins")), "Refresh", []);
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
