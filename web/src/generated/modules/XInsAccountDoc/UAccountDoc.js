// Generated from UAccountDoc.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UAccountDoc", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "PAccountDoc_TLB", "StdVcl", "Grids", "DBGrids", "Mask", "DBCtrls", "StdCtrls", "CurrencyEdit", "ExtCtrls", "ComCtrls", "Buttons", "SBPlgAx50_TLB", "ExcelExporter", "Db", "OracleData", "ComObj", "ComServ", "sboapidatamoduleimpl", "UAccDModule"]);
  const C = [U];
  U.defClass("TAccountDoc", "TActiveForm", {"panel3": {"name": "Panel3", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "okbutton": {"name": "OkButton", "type": "TButton"}, "pagecontroltrans": {"name": "PageControlTrans", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "debitamountedit": {"name": "DebitAmountEdit", "type": "TCurrencyEdit"}, "debitlamountedit": {"name": "DebitLAmountEdit", "type": "TCurrencyEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "debittransactionsgrid": {"name": "DebitTransactionsGrid", "type": "TDBGrid"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "bevel2": {"name": "Bevel2", "type": "TBevel"}, "creditamountedit": {"name": "CreditAmountEdit", "type": "TCurrencyEdit"}, "creditlamountedit": {"name": "CreditLAmountEdit", "type": "TCurrencyEdit"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "debettransactions": {"name": "DebetTransactions", "type": "TDataSource"}, "debettransactionsdata": {"name": "DebetTransactionsData", "type": "TOracleDataSet"}, "debettransactionsdataid": {"name": "DebetTransactionsDataID", "type": "TFloatField"}, "debettransactionsdatadebitaccid": {"name": "DebetTransactionsDataDEBITACCID", "type": "TFloatField"}, "debettransactionsdataoperationdate": {"name": "DebetTransactionsDataOPERATIONDATE", "type": "TDateTimeField"}, "debettransactionsdatadebitamount": {"name": "DebetTransactionsDataDEBITAMOUNT", "type": "TFloatField"}, "debettransactionsdatacreditamount": {"name": "DebetTransactionsDataCREDITAMOUNT", "type": "TFloatField"}, "debettransactionsdatalamount": {"name": "DebetTransactionsDataLAMOUNT", "type": "TFloatField"}, "debettransactionsdatacreditaccno": {"name": "DebetTransactionsDataCREDITACCNO", "type": "TStringField"}, "debettransactionsdatadestination": {"name": "DebetTransactionsDataDESTINATION", "type": "TStringField"}, "debettransactionsdatarownumber": {"name": "DebetTransactionsDataRowNumber", "type": "TIntegerField"}, "debettransactionsdatadebitaccno": {"name": "DebetTransactionsDataDebitAccNo", "type": "TStringField"}, "credittransactions": {"name": "CreditTransactions", "type": "TDataSource"}, "credittransactionsdata": {"name": "CreditTransactionsData", "type": "TOracleDataSet"}, "credittransactionsdataid": {"name": "CreditTransactionsDataID", "type": "TFloatField"}, "integerfield1": {"name": "IntegerField1", "type": "TIntegerField"}, "credittransactionsdatacreditaccid": {"name": "CreditTransactionsDataCREDITACCID", "type": "TFloatField"}, "credittransactionsdataoperationdate": {"name": "CreditTransactionsDataOPERATIONDATE", "type": "TDateTimeField"}, "credittransactionsdatadebitamount": {"name": "CreditTransactionsDataDEBITAMOUNT", "type": "TFloatField"}, "credittransactionsdatacreditamount": {"name": "CreditTransactionsDataCREDITAMOUNT", "type": "TFloatField"}, "credittransactionsdatalamount": {"name": "CreditTransactionsDataLAMOUNT", "type": "TFloatField"}, "credittransactionsdatadebitaccno": {"name": "CreditTransactionsDataDEBITACCNO", "type": "TStringField"}, "credittransactionsdatadestination": {"name": "CreditTransactionsDataDESTINATION", "type": "TStringField"}, "credittransactionsdatacreditaccno": {"name": "CreditTransactionsDataCreditAccNo", "type": "TStringField"}, "acctrexport": {"name": "AccTrExport", "type": "TExcelExporter"}, "id": {"name": "id", "type": "Integer"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}, "fevents": {"name": "FEvents", "type": "IAccountDocEvents"}, "accountid": {"name": "AccountId", "type": "longint"}, "accountnumber": {"name": "AccountNumber", "type": "String"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    U.const("WM_ModalResult", $.add((await $.v(C, "WM_USER")), 139));
    U.var_("AccountDoc", null, "TAccountDoc");
  });
  U.method("TAccountDoc", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TAccountDoc", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TAccountDoc", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TAccountDoc", "Initialize", null, arguments);
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
  U.method("TAccountDoc", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TAccountDoc", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountDoc", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountDoc", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountDoc", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountDoc", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountDoc", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountDoc", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TAccountDoc", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountDoc", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAccountDoc", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAccountDoc", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TAccountDoc", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TAccountDoc", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TAccountDoc", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TAccountDoc", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAccountDoc", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAccountDoc", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAccountDoc", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TAccountDoc", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TAccountDoc", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAccountDoc", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TAccountDoc", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TAccountDoc", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAccountDoc", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAccountDoc", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TAccountDoc", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TAccountDoc", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t1 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t1); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TAccountDoc", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null, "astartdate": 0, "aenddate": 0};
  L0["cs_message"] = "Transactions for account \"%s\"";
  await $.set(C, "id", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["id"]))])));
  await $.set(C, "AccountNumber", (await $.call(C, "Get_Params", ["acc_no"])));
  L0["astartdate"] = (await $.call(C, "StrToDate", [(await $.call(C, "Get_Params", ["AStartDate"]))]));
  L0["aenddate"] = (await $.call(C, "StrToDate", [(await $.call(C, "Get_Params", ["AEndDate"]))]));
  await $.stmt((await $.call(C, "OpenDataControls", [L0["astartdate"], L0["aenddate"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "AccountDModule")), "Account")), "Locate", ["id", (await $.v(C, "id")), []])));
  await $.set(C, "Caption", (await $.call(C, "Format", [L0["cs_message"], [(await $.v(C, "AccountNumber"))]])));
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountDoc", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "AccountDoc", Self);
  await $.set(C, "FParams", (await $.mv((await $.v(C, "TStringList")), "Create")));
  await $.set(C, "AccountDModule", (await $.mcall((await $.v(C, "TAccountDModule")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountDoc", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "AccTrExport"));
    if ($.truthy($.eq((await $.mv((await $.wv([$t2], "PageControlTrans", C, false)), "ActivePageIndex")), 0))) {
      await $.wset([$t2], "ExportSource", (await $.wv([$t2], "DebetTransactions", C, false)), C);
    } else {
      await $.wset([$t2], "ExportSource", (await $.wv([$t2], "CreditTransactions", C, false)), C);
    }
    await $.stmt($.wcall([$t2], "Report", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountDoc", "FillAmounts", async function FillAmounts(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "amountfield": $.copyArg(p1), "lamountfield": $.copyArg(p2), "amountedit": $.copyArg(p3), "lamountedit": $.copyArg(p4), result: undefined, "amount": 0, "lamount": 0};
  await $.fixArgs(L0, ["dataset", "amountfield", "lamountfield", "amountedit", "lamountedit"]);
  L0["amount"] = 0.0;
  L0["lamount"] = 0.0;
  {
    const $t3 = L0["dataset"];
    await $.stmt($.wcall([$t3], "DisableControls", [], C));
    try {
      while ($.truthy($.not((await $.wv([$t3], "Eof", C, false))))) {
        await $.wset([$t3], "Amount", $.add((await $.wv([$t3], "Amount", { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t3], "AmountField", { get: async () => L0["amountfield"], set: async (v) => { L0["amountfield"] = v; }, local: true }, false)), "Value"))), { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true });
        await $.wset([$t3], "LAmount", $.add((await $.wv([$t3], "LAmount", { get: async () => L0["lamount"], set: async (v) => { L0["lamount"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t3], "LAmountField", { get: async () => L0["lamountfield"], set: async (v) => { L0["lamountfield"] = v; }, local: true }, false)), "Value"))), { get: async () => L0["lamount"], set: async (v) => { L0["lamount"] = v; }, local: true });
        await $.stmt($.wcall([$t3], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t3], "EnableControls", [], C));
    }
  }
  await $.mset(L0["amountedit"], "Value", L0["amount"]);
  await $.mset(L0["lamountedit"], "Value", L0["lamount"]);
  return L0.result;
}, {"params": ["DataSet", "AmountField", "LAmountField", "AmountEdit", "LAmountEdit"], "kind": "procedure", "ptypes": ["TDataSet", "TField", "TField", "TCurrencyEdit", "TCurrencyEdit"]});
  U.method("TAccountDoc", "OpenDataControls", async function OpenDataControls(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"begindate": $.copyArg(p0), "enddate": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["begindate", "enddate"]);
  L0["open_"] = $.fn(async function Open_(p0) {
  const L1 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["dataset"]);
  {
    const $t4 = L1["dataset"];
    await $.stmt($.wcall([$t4], "CloseAll", [], C));
    await $.stmt((await $.wcall([$t4], "SetVariable", ["AccountID", (await $.wv([$t4], "AccountID", C, false))], C)));
    await $.stmt((await $.wcall([$t4], "SetVariable", ["StartDate", (await $.wv([$t4], "BeginDate", { get: async () => L0["begindate"], set: async (v) => { L0["begindate"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t4], "SetVariable", ["EndDate", (await $.wv([$t4], "EndDate", { get: async () => L0["enddate"], set: async (v) => { L0["enddate"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t4], "Open", [], C));
  }
  return L1.result;
});
  {
    const $t5 = (await $.mv((await $.v(C, "AccountDModule")), "Account"));
    await $.wset([$t5], "AccountID", (await $.mv((await $.wcall([$t5], "FieldByName", ["ID"], C)), "AsInteger")), C);
  }
  await $.stmt((await $.callv(L0["open_"], [(await $.v(C, "DebetTransactionsData"))])));
  await $.stmt((await $.callv(L0["open_"], [(await $.v(C, "CreditTransactionsData"))])));
  return L0.result;
}, {"params": ["BeginDate", "EndDate"], "kind": "procedure", "ptypes": ["TDateTime", "TDateTime"]});
  U.method("TAccountDoc", "DebetTransactionsDataCalcFields", async function DebetTransactionsDataCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t6 = L0["dataset"];
    await $.mset((await $.wcall([$t6], "FieldByName", ["DebitAccNo"], C)), "AsString", (await $.mv((await $.mcall((await $.mv((await $.wv([$t6], "AccountDModule", C, false)), "Account")), "FieldByName", ["acc_no"])), "AsString")));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TAccountDoc", "CreditTransactionsDataCalcFields", async function CreditTransactionsDataCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t7 = L0["dataset"];
    await $.mset((await $.wcall([$t7], "FieldByName", ["CreditAccNo"], C)), "AsString", (await $.mv((await $.mcall((await $.mv((await $.wv([$t7], "AccountDModule", C, false)), "Account")), "FieldByName", ["acc_no"])), "AsString")));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TAccountDoc", "DebetTransactionsDataAfterOpen", async function DebetTransactionsDataAfterOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.stmt((await $.call(C, "FillAmounts", [L0["dataset"], (await $.v(C, "DebetTransactionsDataDEBITAMOUNT")), (await $.v(C, "DebetTransactionsDataLAMOUNT")), (await $.v(C, "DebitAmountEdit")), (await $.v(C, "DebitLAmountEdit"))])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TAccountDoc", "CreditTransactionsDataAfterOpen", async function CreditTransactionsDataAfterOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.stmt((await $.call(C, "FillAmounts", [L0["dataset"], (await $.v(C, "CreditTransactionsDataCreditAMOUNT")), (await $.v(C, "CreditTransactionsDataLAMOUNT")), (await $.v(C, "CreditAmountEdit")), (await $.v(C, "CreditLAmountEdit"))])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TAccountDoc", "OkButtonClick", async function OkButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrOk")), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
