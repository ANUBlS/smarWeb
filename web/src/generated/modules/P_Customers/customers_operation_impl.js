// Generated from customers_operation_impl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("customers_operation_impl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "ActiveX", "AxCtrls", "customer_operations_TLB", "StdVcl", "StdCtrls", "SearchCombo", "ExtCtrls", "ComCtrls", "Grids", "DBGrids", "ToolWin", "Buttons", "Db", "OracleData", "ImgList", "Menus", "ActnList", "Mask", "DBCtrls", "NLSLocalizer", "ComObj", "ComServ", "SBCore", "SBCustomer", "sboapiDataModuleImpl", "UnitFrmZoom", "co_properties_unit", "CO_datamod_impl", "co_commission_unit", "CO_TransactionPropertiesImpl", "co_statement_impl", "co_st_check", "co_memorial", "CO_Interval_unit", "InFormUnit", "CO_transact_unit", "OutForm_Unit", "CO_In_Unit", "CO_Out_Unit", "TransactionDataModuleUnit", "FormAcc_Unit", "CurrencyToHR_Azeri_Impl", "CO_reportUnit", "CO_Customers", "CO_Settings_Unit", "CO_Upd_Cust_Unit"]);
  const C = [U];
  U.enumType("toperationmode", 3);
  U.const("omInsert", 0);
  U.const("omEdit", 1);
  U.const("omCommission", 2);
  U.enumType("ttransactionstate", 3);
  U.const("tsCommit", 0);
  U.const("tsDelete", 1);
  U.const("tsReject", 2);
  U.enumType("taccorder", 5);
  U.const("aotAccNo", 0);
  U.const("aotAccName", 1);
  U.const("aotAccCurrency", 2);
  U.const("aotAccOpenDate", 3);
  U.const("aotNoOrder", 4);
  U.defClass("TCO_Main", "TActiveForm", {"groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "n7": {"name": "N7", "type": "TMenuItem"}, "n10": {"name": "N10", "type": "TMenuItem"}, "n11": {"name": "N11", "type": "TMenuItem"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "gridtransactions": {"name": "GridTransactions", "type": "TDBGrid"}, "n4": {"name": "N4", "type": "TMenuItem"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n5": {"name": "N5", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "d1": {"name": "D1", "type": "TMenuItem"}, "actionlist": {"name": "ActionList", "type": "TActionList"}, "actionrefresh": {"name": "ActionRefresh", "type": "TAction"}, "actioninsert": {"name": "ActionInsert", "type": "TAction"}, "actionedit": {"name": "ActionEdit", "type": "TAction"}, "actiondelete": {"name": "ActionDelete", "type": "TAction"}, "actionshowfilter": {"name": "ActionShowFilter", "type": "TAction"}, "actionspeedsearch": {"name": "ActionSpeedSearch", "type": "TAction"}, "actionselectall": {"name": "ActionSelectAll", "type": "TAction"}, "actioncommit": {"name": "ActionCommit", "type": "TAction"}, "actionloadfilters": {"name": "ActionLoadFilters", "type": "TAction"}, "actionfilter": {"name": "ActionFilter", "type": "TAction"}, "actionstepcommit": {"name": "ActionStepCommit", "type": "TAction"}, "actionreject": {"name": "ActionReject", "type": "TAction"}, "actioncommission": {"name": "ActionCommission", "type": "TAction"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "customergb": {"name": "CustomerGB", "type": "TGroupBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "customersearchbar": {"name": "CustomerSearchBar", "type": "TToolBar"}, "idedit": {"name": "idedit", "type": "TEdit"}, "innedit": {"name": "innedit", "type": "TEdit"}, "namedit": {"name": "namedit", "type": "TEdit"}, "dateedit": {"name": "dateedit", "type": "TEdit"}, "customergrid": {"name": "CustomerGrid", "type": "TDBGrid"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "popupmenu3": {"name": "PopupMenu3", "type": "TPopupMenu"}, "n9": {"name": "N9", "type": "TMenuItem"}, "n12": {"name": "N12", "type": "TMenuItem"}, "n13": {"name": "N13", "type": "TMenuItem"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "noedit": {"name": "noedit", "type": "TEdit"}, "passpedit": {"name": "passpedit", "type": "TEdit"}, "nameedit": {"name": "nameedit", "type": "TEdit"}, "datedit": {"name": "datedit", "type": "TEdit"}, "controlbar2": {"name": "ControlBar2", "type": "TControlBar"}, "accountviewsettingspanel": {"name": "AccountViewSettingsPanel", "type": "TPanel"}, "accountsorderpanel": {"name": "AccountsOrderPanel", "type": "TPanel"}, "label2": {"name": "Label2", "type": "TLabel"}, "searchacc": {"name": "searchacc", "type": "TEdit"}, "accountcurrencypanel": {"name": "AccountCurrencyPanel", "type": "TPanel"}, "label5": {"name": "Label5", "type": "TLabel"}, "searchname": {"name": "searchname", "type": "TEdit"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "n14": {"name": "N14", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n15": {"name": "N15", "type": "TMenuItem"}, "fevents": {"name": "FEvents", "type": "IActiveFormXEvents"}, "fuseaccorder": {"name": "FUseAccOrder", "type": "Boolean"}, "faccorder": {"name": "FAccOrder", "type": "TAccOrder"}, "fcurrentdate": {"name": "FCurrentDate", "type": "TDateTime"}, "requiredorderbyfield": {"name": "RequiredOrderByField", "type": "variant"}, "operationmode": {"name": "OperationMode", "type": "TOperationMode"}, "lasttransactionid": {"name": "LastTransactionID", "type": "Longint"}, "transactionstate": {"name": "TransactionState", "type": "TTransactionState"}}, {"currentdate": {"name": "CurrentDate", "read": "FCurrentDate", "write": "SetCurrentDate"}, "useaccorder": {"name": "UseAccOrder", "read": "FUseAccOrder"}, "accorder": {"name": "AccOrder", "read": "FAccOrder"}});
  U.init(async () => {
    U.const("tsDelayed", 1);
    U.const("tsCommited", 2);
    U.const("tsRejected", 3);
    U.const("BooleanPrefix", " AND ");
    U.const("cs_CommitInformation", $.add($.add($.add($.add("Ümumi əməliyyatlar: %d", "\r"), "Təsdiqlənmiş əməliyyatlar: %d"), "\r"), "Təsdiqlənməmiş əməliyyatlar: %d"));
    U.const("cs_RejectInformation", $.add($.add($.add($.add("Ümumi əməliyyatlar: %d", "\r"), "İnkaredilmiş əməliyyatlar: %d"), "\r"), "İnkaredilməmiş əməliyyatlar: %d"));
    U.var_("OperationIDs", null, "TStringList");
    U.var_("CurrencyIDs", null, "TStringList");
  });
  U.method("TCO_Main", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TCO_Main", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TCO_Main", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TCO_Main", "Initialize", null, arguments);
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
  U.method("TCO_Main", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCO_Main", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TCO_Main", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCO_Main", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCO_Main", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TCO_Main", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCO_Main", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TCO_Main", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TCO_Main", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCO_Main", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCO_Main", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCO_Main", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCO_Main", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCO_Main", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCO_Main", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCO_Main", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TCO_Main", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCO_Main", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCO_Main", "AddExecute", async function AddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "CO_PropertiesForm", (await $.mcall((await $.v(C, "TCO_PropertiesForm")), "Create", [Self])));
    await $.mcall((await $.v(C, "CO_PropertiesForm")), "Showmodal", []);
  } finally {
    await $.mcall((await $.v(C, "CO_PropertiesForm")), "Release", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "FlagEnabled", async function FlagEnabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"flag": $.copyArg(p0), result: false, "savedpos": null, "index": 0};
  await $.fixArgs(L0, ["flag"]);
  L0["checkrow"] = $.fn(async function CheckRow() {
  const L1 = {result: undefined};
  L0["result"] = $.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridTransactions")), "DataSource")), "DataSet")), "FieldByName", ["Status"])), "AsInteger")), L0["flag"]);
  return L1.result;
});
  L0["result"] = false;
  {
    const $t1 = (await $.wobj(C, "GridTransactions"));
    const $t2 = (await $.wv([$t1], "SelectedRows", C, false));
    const $t3 = (await $.mv((await $.wv([$t1, $t2], "DataSource", C, false)), "DataSet"));
    if ($.truthy((await $.or_(($.eq((await $.wv([$t1, $t2, $t3], "Count", C, false)), 1)), async () => ($.eq((await $.wv([$t1, $t2, $t3], "Count", C, false)), 0)))))) {
      await $.stmt($.wcall([$t1, $t2, $t3], "CheckRow", [], { get: async () => L0["checkrow"], set: async (v) => { L0["checkrow"] = v; }, local: true }));
    } else {
      await $.stmt($.wcall([$t1, $t2, $t3], "DisableControls", [], C));
      await $.wset([$t1, $t2, $t3], "SavedPos", (await $.wv([$t1, $t2, $t3], "GetBookmark", C, false)), { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true });
      try {
        { const $t4 = $.sub((await $.wv([$t1, $t2, $t3], "Count", C, false)), 1);
          await $.wset([$t1, $t2, $t3], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
          let $t5 = true;
          for (;;) {
            if (!$t5) { await $.wset([$t1, $t2, $t3], "Index", $.succ((await $.wv([$t1, $t2, $t3], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
            $t5 = false;
            if (!($.ord((await $.wv([$t1, $t2, $t3], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t4))) break;
            await $.stmt((await $.wcall([$t1, $t2, $t3], "GotoBookmark", [(await $.wcall([$t1, $t2, $t3], "TBookmark", [(await $.idx((await $.wv([$t1, $t2, $t3], "Items", C, false)), [(await $.wv([$t1, $t2, $t3], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
            await $.stmt($.wcall([$t1, $t2, $t3], "CheckRow", [], { get: async () => L0["checkrow"], set: async (v) => { L0["checkrow"] = v; }, local: true }));
            if ($.truthy((await $.wv([$t1, $t2, $t3], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)))) {
              break;
            }
            await $.tick();
          }
        }
      } finally {
        await $.stmt((await $.wcall([$t1, $t2, $t3], "GotoBookmark", [(await $.wv([$t1, $t2, $t3], "SavedPos", { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true }, false))], C)));
        await $.stmt($.wcall([$t1, $t2, $t3], "EnableControls", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Flag"], "kind": "function", "ptypes": ["Word"]});
  U.method("TCO_Main", "InitData", async function InitData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  L0["c_err_message"] = " Table or View in Dataset \"%s\" does not exist! ";
  {
    const $t6 = (await $.wobj(C, "CO_Datamod"));
    { const $t7 = $.sub((await $.wv([$t6], "ComponentCount", C, false)), 1);
      await $.wset([$t6], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t8 = true;
      for (;;) {
        if (!$t8) { await $.wset([$t6], "i", $.succ((await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t8 = false;
        if (!($.ord((await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t7))) break;
        if ($.truthy(($.is_((await $.idx((await $.wv([$t6], "Components", C, false)), [(await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDataSet")))) {
          if ($.truthy($.eq((await $.mv(((await $.idx((await $.wv([$t6], "Components", C, false)), [(await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Tag")), 1))) {
            try {
              await $.mcall((await $.idx((await $.wv([$t6], "Components", C, false)), [(await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Open", []);
            } catch ($t9) {
              $.rethrowControl($t9);
              $.handled($t9);
              throw $.raise((await $.mcall((await $.wv([$t6], "Exception", C, false)), "Create", [(await $.wcall([$t6], "Format", [(await $.wv([$t6], "c_err_message", { get: async () => L0["c_err_message"], set: async (v) => { L0["c_err_message"] = v; }, local: true }, false)), [(await $.mv(((await $.idx((await $.wv([$t6], "Components", C, false)), [(await $.wv([$t6], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name"))]], C))])));
            }
          }
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCO_Main", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CO_datamod", (await $.mcall((await $.v(C, "TCO_DataMod")), "Create", [Self])));
  await $.set(C, "Co_PropertiesForm", (await $.mcall((await $.v(C, "TCo_PropertiesForm")), "Create", [Self])));
  await $.set(C, "CO_Report", (await $.mcall((await $.v(C, "TCO_Report")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers")), "oPEN", []);
  {
    const $t10 = (await $.wobj(C, "CO_DataMod"));
    await $.wset([$t10], "CurrentDate", (await $.mv((await $.mcall((await $.wv([$t10], "Sysdat", C, false)), "FieldByName", ["tek_dat"])), "AsDateTime")), C);
    await $.wset([$t10], "TransactionState", (await $.wv([$t10], "tsDelete", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("MenuShrift", async function MenuShrift(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t11 = L0["acanvas"];
    const $t12 = (await $.wv([$t11], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t13 = (await $.wv([$t11, $t12], "Font", C, false));
      await $.wset([$t11, $t12, $t13], "Name", "Azl Sans Serif", C);
      await $.wset([$t11, $t12, $t13], "Charset", (await $.wv([$t11, $t12, $t13], "RUSSIAN_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t11, $t12, $t13], "Default", C, false)))) {
        await $.wset([$t11, $t12, $t13], "Style", [(await $.wv([$t11, $t12, $t13], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t11, $t12], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t11, $t12], "Pen", C, false)), "Color", (await $.wv([$t11, $t12], "clBlack", C, false)));
      await $.wset([$t11, $t12], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t11, $t12], "MoveTo", [(await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t11, $t12], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t11, $t12], "LineTo", [(await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t11, $t12], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t11, $t12], "inc", [$.ref(async () => (await $.wv([$t11, $t12], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t14) => { await $.wset([$t11, $t12], "LineBottom", $t14, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t11, $t12], "Pen", C, false)), "Color", (await $.wv([$t11, $t12], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t11, $t12], "MoveTo", [(await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t11, $t12], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t11, $t12], "LineTo", [(await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t11, $t12], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t11, $t12], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t11, $t12], "Brush", C, false)), "Color", (await $.wv([$t11, $t12], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t11, $t12], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t11, $t12], "Font", C, false)), "Color", (await $.wv([$t11, $t12], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t11, $t12], "Font", C, false)), "Color", (await $.wv([$t11, $t12], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t11, $t12], "Brush", C, false)), "Color", (await $.wv([$t11, $t12], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t11, $t12], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t11, $t12], "Font", C, false)), "Color", (await $.wv([$t11, $t12], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t11, $t12], "Font", C, false)), "Color", (await $.wv([$t11, $t12], "clGrayText", C, false)));
        }
      }
      await $.wset([$t11, $t12], "Bar", (await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t11, $t12], "FillRect", [(await $.wv([$t11, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t11, $t12], "TextOut", [$.add((await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 2), $.add((await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t11, $t12], "Caption", C, false))], C)));
    }
    await $.wset([$t11, $t12], "SText", (await $.wcall([$t11, $t12], "ShortCutToText", [(await $.wv([$t11, $t12], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t11, $t12], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t11, $t12], "TextWidth", [(await $.wv([$t11, $t12], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t11, $t12], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t11, $t12], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t15 = (await $.wv([$t11, $t12], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t11, $t12, $t15], "Assigned", [(await $.wv([$t11, $t12, $t15], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t11, $t12, $t15], "Checked", C, false)))) {
            await $.mset((await $.wv([$t11, $t12, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t11, $t12, $t15], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t11, $t12, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t11, $t12, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t11, $t12, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t11, $t12, $t15], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t11, $t12, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t11, $t12, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t11, $t12, $t15], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t11, $t12, $t15], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t11, $t12, $t15], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t11, $t12, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t11, $t12, $t15], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t16) => { await $.mset((await $.wv([$t11, $t12, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t16); }), 2], C)));
            await $.stmt((await $.wcall([$t11, $t12, $t15], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t17) => { await $.mset((await $.wv([$t11, $t12, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t17); }), 2], C)));
            await $.stmt((await $.wcall([$t11, $t12, $t15], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t18) => { await $.mset((await $.wv([$t11, $t12, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t18); }), 2], C)));
            await $.stmt((await $.wcall([$t11, $t12, $t15], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t19) => { await $.mset((await $.wv([$t11, $t12, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t19); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t11, $t12, $t15], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t11, $t12, $t15], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t11, $t12, $t15], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t11, $t12, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t11, $t12, $t15], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t20) => { await $.mset((await $.wv([$t11, $t12, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t20); }), 1], C)));
            await $.stmt((await $.wcall([$t11, $t12, $t15], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t21) => { await $.mset((await $.wv([$t11, $t12, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t21); }), 1], C)));
            await $.stmt((await $.wcall([$t11, $t12, $t15], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t22) => { await $.mset((await $.wv([$t11, $t12, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t22); }), 1], C)));
            await $.stmt((await $.wcall([$t11, $t12, $t15], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t23) => { await $.mset((await $.wv([$t11, $t12, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t23); }), 1], C)));
            if ($.truthy((await $.wv([$t11, $t12, $t15], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t11, $t12, $t15], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t11, $t12, $t15], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t11, $t12, $t15], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t11, $t12, $t15], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t11, $t12, $t15], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t11, $t12, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t11, $t12, $t15], "Images", C, false)), "Draw", [(await $.wv([$t11, $t12, $t15], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t11, $t12, $t15], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t11, $t12, $t15], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t11, $t12, $t15], "ImageIndex", C, false)), (await $.wv([$t11, $t12, $t15], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TCO_Main", "SetCurrentDate", async function SetCurrentDate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FCurrentDate", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TDateTime"]});
  U.method("TCO_Main", "ExtractMonth", async function ExtractMonth(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"datetime": $.copyArg(p0), "decimalsymbol": $.copyArg(p1), result: '', "year": 0, "month": 0, "day": 0};
  await $.fixArgs(L0, ["datetime", "decimalsymbol"]);
  await $.staticConst(L0, "months", "customers_operation_impl.tco_main.extractmonth.months", async () => $.lowArr(1, ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"]));
  await $.stmt((await $.call(C, "DecodeDate", [L0["datetime"], $.ref(async () => L0["year"], async ($t24) => { L0["year"] = $t24; }), $.ref(async () => L0["month"], async ($t25) => { L0["month"] = $t25; }), $.ref(async () => L0["day"], async ($t26) => { L0["day"] = $t26; })])));
  L0["result"] = $.add($.add($.add($.add((await $.call(C, "IntToStr", [L0["day"]])), L0["decimalsymbol"]), (await $.idx(L0["months"], [L0["month"]]))), L0["decimalsymbol"]), (await $.call(C, "IntToStr", [L0["year"]])));
  return L0.result;
}, {"params": ["DateTime", "DecimalSymbol"], "kind": "function", "ptypes": ["TDateTime", "String"]});
  U.method("TCO_Main", "CustomerIDSearchEditExit", async function CustomerIDSearchEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "GotoTransaction", async function GotoTransaction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"id": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["id"]);
  {
    const $t27 = (await $.mv((await $.v(C, "TransactionDataModule")), "Transactions"));
    await $.stmt((await $.wcall([$t27], "Locate", ["ID", (await $.wv([$t27], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), []], C)));
  }
  return L0.result;
}, {"params": ["ID"], "kind": "procedure", "ptypes": ["Longint"]});
  U.method("TCO_Main", "Focus", async function Focus(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.mv((await $.v(C, "GridTransactions")), "CanFocus")))) {
    await $.mcall((await $.v(C, "GridTransactions")), "SetFocus", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCO_Main", "inneditChange", async function inneditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Transactions")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Transactions")), "Open", []);
  if ($.truthy($.ne((await $.mv((await $.v(C, "idedit")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "customers")), "Locate", ["id", (await $.mv((await $.v(C, "idedit")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGrid1")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  {
    const $t28 = (await $.mv((await $.v(C, "CO_DataMod")), "Account"));
    await $.stmt($.wcall([$t28], "Close", [], C));
    await $.mcall((await $.wv([$t28], "SQL", C, false)), "clear", []);
    await $.stmt((await $.mcall((await $.wv([$t28], "SQL", C, false)), "add", [$.add($.add("select * from ACCNO where ACCKLID='", (await $.mv((await $.mcall((await $.mv((await $.wv([$t28], "CO_DataMod", C, false)), "customers")), "fieldbyname", ["ID"])), "asstring"))), "' ")])));
    await $.stmt($.wcall([$t28], "Open", [], C));
    await $.stmt($.wcall([$t28], "Refresh", [], C));
    {
      const $t29 = (await $.mv((await $.wv([$t28], "CO_DataMod", C, false)), "Transactions"));
      await $.stmt($.wcall([$t28, $t29], "Close", [], C));
      await $.mcall((await $.wv([$t28, $t29], "SQL", C, false)), "clear", []);
      await $.stmt((await $.mcall((await $.wv([$t28, $t29], "SQL", C, false)), "add", [$.add($.add($.add($.add("select * from trans_knn where debitid = '", (await $.mv((await $.wv([$t28, $t29], "dbedit1", C, false)), "text"))), "' or creditid = '"), (await $.mv((await $.wv([$t28, $t29], "dbedit1", C, false)), "text"))), "' ")])));
      await $.stmt($.wcall([$t28, $t29], "Open", [], C));
      await $.stmt($.wcall([$t28, $t29], "Refresh", [], C));
      if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_(($.ne((await $.mv((await $.wv([$t28, $t29], "searchacc", C, false)), "text")), "")), async () => ($.ne((await $.mv((await $.wv([$t28, $t29], "idedit", C, false)), "text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t28, $t29], "namedit", C, false)), "text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t28, $t29], "dateedit", C, false)), "text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t28, $t29], "searchname", C, false)), "text")), "")))))) {
        await $.mset((await $.wv([$t28, $t29], "idedit", C, false)), "text", "");
      }
      await $.mset((await $.wv([$t28, $t29], "searchacc", C, false)), "text", "");
      await $.mset((await $.wv([$t28, $t29], "dateedit", C, false)), "Text", "");
      await $.mset((await $.wv([$t28, $t29], "searchname", C, false)), "text", "");
      await $.mset((await $.wv([$t28, $t29], "namedit", C, false)), "text", "");
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "nameditChange", async function nameditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Transactions")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Transactions")), "Open", []);
  if ($.truthy($.ne((await $.mv((await $.v(C, "idedit")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "customers")), "Locate", ["id", (await $.mv((await $.v(C, "idedit")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGrid1")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  {
    const $t30 = (await $.mv((await $.v(C, "CO_DataMod")), "Account"));
    await $.stmt($.wcall([$t30], "Close", [], C));
    await $.mcall((await $.wv([$t30], "SQL", C, false)), "clear", []);
    await $.stmt((await $.mcall((await $.wv([$t30], "SQL", C, false)), "add", [$.add($.add("select * from ACCNO where ACCKLID='", (await $.mv((await $.mcall((await $.mv((await $.wv([$t30], "CO_DataMod", C, false)), "customers")), "fieldbyname", ["ID"])), "asstring"))), "' ")])));
    await $.stmt($.wcall([$t30], "Open", [], C));
    await $.stmt($.wcall([$t30], "Refresh", [], C));
    {
      const $t31 = (await $.mv((await $.wv([$t30], "CO_DataMod", C, false)), "Transactions"));
      await $.stmt($.wcall([$t30, $t31], "Close", [], C));
      await $.mcall((await $.wv([$t30, $t31], "SQL", C, false)), "clear", []);
      await $.stmt((await $.mcall((await $.wv([$t30, $t31], "SQL", C, false)), "add", [$.add($.add($.add($.add("select * from trans_knn where debitid = '", (await $.mv((await $.wv([$t30, $t31], "dbedit1", C, false)), "text"))), "' or creditid = '"), (await $.mv((await $.wv([$t30, $t31], "dbedit1", C, false)), "text"))), "'  ")])));
      await $.stmt($.wcall([$t30, $t31], "Open", [], C));
      await $.stmt($.wcall([$t30, $t31], "Refresh", [], C));
      if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_(($.ne((await $.mv((await $.wv([$t30, $t31], "searchacc", C, false)), "text")), "")), async () => ($.ne((await $.mv((await $.wv([$t30, $t31], "idedit", C, false)), "text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t30, $t31], "innedit", C, false)), "text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t30, $t31], "dateedit", C, false)), "text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t30, $t31], "searchname", C, false)), "text")), "")))))) {
        await $.mset((await $.wv([$t30, $t31], "idedit", C, false)), "text", "");
      }
      await $.mset((await $.wv([$t30, $t31], "searchacc", C, false)), "text", "");
      await $.mset((await $.wv([$t30, $t31], "dateedit", C, false)), "Text", "");
      await $.mset((await $.wv([$t30, $t31], "searchname", C, false)), "text", "");
      await $.mset((await $.wv([$t30, $t31], "innedit", C, false)), "text", "");
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "N12DrawItem", async function N12DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TCO_Main", "N15DrawItem", async function N15DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TCO_Main", "N16DrawItem", async function N16DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TCO_Main", "N13DrawItem", async function N13DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TCO_Main", "N14DrawItem", async function N14DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TCO_Main", "N7DrawItem", async function N7DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TCO_Main", "N10DrawItem", async function N10DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TCO_Main", "N11DrawItem", async function N11DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TCO_Main", "N8DrawItem", async function N8DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TCO_Main", "N9DrawItem", async function N9DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TCO_Main", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t32 = (await $.mv((await $.v(C, "CO_DataMod")), "Account"));
    await $.stmt((await $.wcall([$t32], "SetVariable", ["Title", (await $.wv([$t32], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t32], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCO_Main", "DBGrid1CellClick", async function DBGrid1CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  {
    const $t33 = (await $.mv((await $.v(C, "CO_DataMod")), "Transactions"));
    await $.stmt($.wcall([$t33], "Close", [], C));
    await $.mcall((await $.wv([$t33], "SQL", C, false)), "clear", []);
    await $.stmt((await $.mcall((await $.wv([$t33], "SQL", C, false)), "add", [$.add($.add($.add($.add("select * from trans_knn  where debitid = '", (await $.mv((await $.wv([$t33], "dbedit1", C, false)), "text"))), "' or creditid = '"), (await $.mv((await $.wv([$t33], "dbedit1", C, false)), "text"))), "' ")])));
    await $.stmt($.wcall([$t33], "Open", [], C));
    await $.stmt($.wcall([$t33], "Refresh", [], C));
    await $.mset((await $.wv([$t33], "Searchacc", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t33], "CO_Datamod", C, false)), "Account")), "fieldbyname", ["accno"])), "asstring")));
    await $.mset((await $.wv([$t33], "Searchname", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t33], "CO_Datamod", C, false)), "Account")), "fieldbyname", ["accname"])), "asstring")));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCO_Main", "N10Click", async function N10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "CO_St_Form", (await $.mcall((await $.v(C, "TCO_St_Form")), "Create", [Self])));
    await $.mcall((await $.v(C, "CO_St_Form")), "Showmodal", []);
  } finally {
    await $.mcall((await $.v(C, "CO_St_Form")), "Release", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "N11Click", async function N11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "astartdate": 0, "aenddate": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CO_MemorialForm", (await $.mcall((await $.v(C, "TCO_MemorialForm")), "Create", [Self])));
  await $.set(C, "FormInterval", (await $.mcall((await $.v(C, "TFormInterval")), "Create", [Self])));
  {
    const $t34 = (await $.wobj(C, "FormInterval"));
    await $.mset((await $.wv([$t34], "StartDateEdit", C, false)), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.wv([$t34], "CO_Datamod", C, false)), "Sysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    await $.mset((await $.wv([$t34], "EndDateEdit", C, false)), "DateTime", (await $.mv((await $.wv([$t34], "StartDateEdit", C, false)), "DateTime")));
    if ($.truthy($.eq((await $.wv([$t34], "ShowModal", C, false)), (await $.wv([$t34], "mrOK", C, false))))) {
      await $.wset([$t34], "AStartDate", (await $.mv((await $.wv([$t34], "StartDateEdit", C, false)), "DateTime")), { get: async () => L0["astartdate"], set: async (v) => { L0["astartdate"] = v; }, local: true });
      await $.wset([$t34], "AEndDate", (await $.mv((await $.wv([$t34], "EndDateEdit", C, false)), "DateTime")), { get: async () => L0["aenddate"], set: async (v) => { L0["aenddate"] = v; }, local: true });
      {
        const $t35 = (await $.wv([$t34], "CO_MemorialForm", C, false));
        await $.stmt((await $.wcall([$t34, $t35], "OpenDataControls", [(await $.wv([$t34, $t35], "AStartDate", { get: async () => L0["astartdate"], set: async (v) => { L0["astartdate"] = v; }, local: true }, false)), (await $.wv([$t34, $t35], "AEndDate", { get: async () => L0["aenddate"], set: async (v) => { L0["aenddate"] = v; }, local: true }, false))], C)));
        await $.stmt($.wcall([$t34, $t35], "ShowModal", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "noeditChange", async function noeditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "noedit")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "physical_customers")), "Locate", ["id", (await $.mv((await $.v(C, "noedit")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGrid1")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  {
    const $t36 = (await $.mv((await $.v(C, "CO_DataMod")), "Account"));
    await $.stmt($.wcall([$t36], "Close", [], C));
    await $.mcall((await $.wv([$t36], "SQL", C, false)), "clear", []);
    await $.stmt((await $.mcall((await $.wv([$t36], "SQL", C, false)), "add", [$.add($.add("select * from ACCNO where ACCKLID in (select id from customers_physical where id='", (await $.mv((await $.wv([$t36], "noedit", C, false)), "text"))), "') ")])));
    await $.stmt($.wcall([$t36], "Open", [], C));
    await $.stmt($.wcall([$t36], "Refresh", [], C));
    if ($.truthy(($.ne((await $.mv((await $.wv([$t36], "noedit", C, false)), "text")), "")))) {
      await $.mset((await $.wv([$t36], "passpedit", C, false)), "text", "");
    }
    await $.mset((await $.wv([$t36], "nameedit", C, false)), "text", "");
    await $.mset((await $.wv([$t36], "datedit", C, false)), "Text", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "ideditChange", async function ideditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Transactions")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Transactions")), "Open", []);
  if ($.truthy($.ne((await $.mv((await $.v(C, "idedit")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "customers")), "Locate", ["id", (await $.mv((await $.v(C, "idedit")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGrid1")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  {
    const $t37 = (await $.mv((await $.v(C, "CO_DataMod")), "Account"));
    await $.stmt($.wcall([$t37], "Close", [], C));
    await $.mcall((await $.wv([$t37], "SQL", C, false)), "clear", []);
    await $.stmt((await $.mcall((await $.wv([$t37], "SQL", C, false)), "add", [$.add($.add("select * from ACCNO where ACCKLID='", (await $.mv((await $.mcall((await $.mv((await $.wv([$t37], "CO_DataMod", C, false)), "customers")), "fieldbyname", ["ID"])), "asstring"))), "' ")])));
    await $.stmt($.wcall([$t37], "Open", [], C));
    await $.stmt($.wcall([$t37], "Refresh", [], C));
    {
      const $t38 = (await $.mv((await $.wv([$t37], "CO_DataMod", C, false)), "Transactions"));
      await $.stmt($.wcall([$t37, $t38], "Close", [], C));
      await $.mcall((await $.wv([$t37, $t38], "SQL", C, false)), "clear", []);
      await $.stmt((await $.mcall((await $.wv([$t37, $t38], "SQL", C, false)), "add", [$.add($.add($.add($.add("select * from trans_knn where debitid = '", (await $.mv((await $.wv([$t37, $t38], "dbedit1", C, false)), "text"))), "' or creditid = '"), (await $.mv((await $.wv([$t37, $t38], "dbedit1", C, false)), "text"))), "'  ")])));
      await $.stmt($.wcall([$t37, $t38], "Open", [], C));
      await $.stmt($.wcall([$t37, $t38], "Refresh", [], C));
      if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_(($.ne((await $.mv((await $.wv([$t37, $t38], "innedit", C, false)), "text")), "")), async () => ($.ne((await $.mv((await $.wv([$t37, $t38], "searchacc", C, false)), "text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t37, $t38], "namedit", C, false)), "text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t37, $t38], "dateedit", C, false)), "text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t37, $t38], "searchname", C, false)), "text")), "")))))) {
        await $.mset((await $.wv([$t37, $t38], "searchacc", C, false)), "text", "");
      }
      await $.mset((await $.wv([$t37, $t38], "innedit", C, false)), "text", "");
      await $.mset((await $.wv([$t37, $t38], "dateedit", C, false)), "Text", "");
      await $.mset((await $.wv([$t37, $t38], "searchname", C, false)), "text", "");
      await $.mset((await $.wv([$t37, $t38], "namedit", C, false)), "text", "");
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "N1DrawItem", async function N1DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TCO_Main", "N2DrawItem", async function N2DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TCO_Main", "N2Click", async function N2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "CO_In_Form", (await $.mcall((await $.v(C, "TCO_In_Form")), "Create", [Self])));
    await $.mcall((await $.v(C, "CO_In_Form")), "Showmodal", []);
  } finally {
    await $.mcall((await $.v(C, "CO_In_Form")), "Release", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "N1Click", async function N1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "CO_Out_Form", (await $.mcall((await $.v(C, "TCO_Out_Form")), "Create", [Self])));
    await $.mcall((await $.v(C, "CO_Out_Form")), "Showmodal", []);
  } finally {
    await $.mcall((await $.v(C, "CO_Out_Form")), "Release", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "searchClick", async function searchClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "showmessage", ["knn"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "searchaccKeyPress", async function searchaccKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    {
      const $t39 = (await $.mv((await $.v(C, "CO_DataMod")), "account"));
      await $.stmt($.wcall([$t39], "Close", [], C));
      await $.mcall((await $.wv([$t39], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t39], "SQL", C, false)), "Add", [$.add($.add("Select * From accno Where accno='", (await $.mv((await $.wv([$t39], "searchacc", C, false)), "text"))), "'")])));
      await $.stmt($.wcall([$t39], "Open", [], C));
      await $.mset((await $.wv([$t39], "DBGrid1", C, false)), "Options", [(await $.wv([$t39], "dgRowSelect", C, false)), (await $.wv([$t39], "dgAlwaysShowEditor", C, false)), (await $.wv([$t39], "dgTitles", C, false)), (await $.wv([$t39], "dgIndicator", C, false)), (await $.wv([$t39], "dgColumnResize", C, false)), (await $.wv([$t39], "dgColLines", C, false)), (await $.wv([$t39], "dgRowLines", C, false)), (await $.wv([$t39], "dgTabs", C, false)), (await $.wv([$t39], "dgAlwaysShowSelection", C, false)), (await $.wv([$t39], "dgConfirmDelete", C, false)), (await $.wv([$t39], "dgCancelOnExit", C, false)), (await $.wv([$t39], "dgMultiSelect", C, false))]);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t39], "CO_DataMod", C, false)), "customers")), "Locate", ["id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t39], "CO_DataMod", C, false)), "Account")), "Fieldbyname", ["ACCKLID"])), "asinteger")), [(await $.wv([$t39], "loCaseInsensitive", C, false)), (await $.wv([$t39], "loPartialKey", C, false))]])));
      await $.mset((await $.wv([$t39], "DBGrid1", C, false)), "Options", [(await $.wv([$t39], "dgRowSelect", C, false)), (await $.wv([$t39], "dgAlwaysShowEditor", C, false)), (await $.wv([$t39], "dgTitles", C, false)), (await $.wv([$t39], "dgIndicator", C, false)), (await $.wv([$t39], "dgColumnResize", C, false)), (await $.wv([$t39], "dgColLines", C, false)), (await $.wv([$t39], "dgRowLines", C, false)), (await $.wv([$t39], "dgTabs", C, false)), (await $.wv([$t39], "dgAlwaysShowSelection", C, false)), (await $.wv([$t39], "dgConfirmDelete", C, false)), (await $.wv([$t39], "dgCancelOnExit", C, false)), (await $.wv([$t39], "dgMultiSelect", C, false))]);
      await $.mset((await $.wv([$t39], "DBGrid1", C, false)), "Options", [(await $.wv([$t39], "dgRowSelect", C, false)), (await $.wv([$t39], "dgAlwaysShowEditor", C, false)), (await $.wv([$t39], "dgTitles", C, false)), (await $.wv([$t39], "dgIndicator", C, false)), (await $.wv([$t39], "dgColumnResize", C, false)), (await $.wv([$t39], "dgColLines", C, false)), (await $.wv([$t39], "dgRowLines", C, false)), (await $.wv([$t39], "dgTabs", C, false)), (await $.wv([$t39], "dgAlwaysShowSelection", C, false)), (await $.wv([$t39], "dgConfirmDelete", C, false)), (await $.wv([$t39], "dgCancelOnExit", C, false)), (await $.wv([$t39], "dgMultiSelect", C, false))]);
      {
        const $t40 = (await $.mv((await $.wv([$t39], "CO_DataMod", C, false)), "Transactions"));
        await $.stmt($.wcall([$t39, $t40], "Close", [], C));
        await $.mcall((await $.wv([$t39, $t40], "SQL", C, false)), "clear", []);
        await $.stmt((await $.mcall((await $.wv([$t39, $t40], "SQL", C, false)), "add", [$.add($.add($.add($.add("select * from trans_knn where debitid = '", (await $.mv((await $.wv([$t39, $t40], "dbedit1", C, false)), "text"))), "' or creditid = '"), (await $.mv((await $.wv([$t39, $t40], "dbedit1", C, false)), "text"))), "' ")])));
        await $.stmt($.wcall([$t39, $t40], "Open", [], C));
        await $.stmt($.wcall([$t39, $t40], "Refresh", [], C));
        await $.mset((await $.wv([$t39, $t40], "DBGrid1", C, false)), "Options", [(await $.wv([$t39, $t40], "dgRowSelect", C, false)), (await $.wv([$t39, $t40], "dgAlwaysShowEditor", C, false)), (await $.wv([$t39, $t40], "dgTitles", C, false)), (await $.wv([$t39, $t40], "dgIndicator", C, false)), (await $.wv([$t39, $t40], "dgColumnResize", C, false)), (await $.wv([$t39, $t40], "dgColLines", C, false)), (await $.wv([$t39, $t40], "dgRowLines", C, false)), (await $.wv([$t39, $t40], "dgTabs", C, false)), (await $.wv([$t39, $t40], "dgAlwaysShowSelection", C, false)), (await $.wv([$t39, $t40], "dgConfirmDelete", C, false)), (await $.wv([$t39, $t40], "dgCancelOnExit", C, false)), (await $.wv([$t39, $t40], "dgMultiSelect", C, false))]);
        if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_(($.ne((await $.mv((await $.wv([$t39, $t40], "innedit", C, false)), "text")), "")), async () => ($.ne((await $.mv((await $.wv([$t39, $t40], "idedit", C, false)), "text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t39, $t40], "namedit", C, false)), "text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t39, $t40], "dateedit", C, false)), "text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t39, $t40], "searchname", C, false)), "text")), "")))))) {
          await $.mset((await $.wv([$t39, $t40], "idedit", C, false)), "text", "");
        }
        await $.mset((await $.wv([$t39, $t40], "innedit", C, false)), "text", "");
        await $.mset((await $.wv([$t39, $t40], "dateedit", C, false)), "Text", "");
        await $.mset((await $.wv([$t39, $t40], "searchname", C, false)), "text", "");
        await $.mset((await $.wv([$t39, $t40], "namedit", C, false)), "text", "");
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Main", "GridTransactionsDrawColumnCell", async function GridTransactionsDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t41 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t41], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t42 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t41], "DataSource", C, false)), "DataSet")), "FieldByName", ["Status"])), "AsInteger"));
        if ($.eq($t42, (await $.wv([$t41], "tsCommited", C, false)))) {
          await $.wset([$t41], "ImageIndex", 7, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t42, (await $.wv([$t41], "tsRejected", C, false)))) {
          await $.wset([$t41], "ImageIndex", 8, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t42, (await $.wv([$t41], "tsDelayed", C, false)))) {
          await $.wset([$t41], "ImageIndex", 9, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t41], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t41], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t41], "ImageList", C, false)), "Draw", [(await $.wv([$t41], "Canvas", C, false)), (await $.mv((await $.wv([$t41], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t41], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t41], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t41], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t41], "DefaultDrawColumnCell", [(await $.wv([$t41], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t41], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t41], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t41], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TCO_Main", "searchaccKeyDown", async function searchaccKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_(($.ne((await $.mv((await $.v(C, "innedit")), "text")), "")), async () => ($.ne((await $.mv((await $.v(C, "idedit")), "text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "namedit")), "text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "dateedit")), "text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "searchname")), "text")), "")))))) {
    await $.mset((await $.v(C, "idedit")), "text", "");
  }
  await $.mset((await $.v(C, "innedit")), "text", "");
  await $.mset((await $.v(C, "dateedit")), "Text", "");
  await $.mset((await $.v(C, "searchname")), "text", "");
  await $.mset((await $.v(C, "namedit")), "text", "");
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TCO_Main", "searchnameKeyPress", async function searchnameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t43 = (await $.mv((await $.v(C, "CO_DataMod")), "account"));
    await $.stmt($.wcall([$t43], "Close", [], C));
    await $.mcall((await $.wv([$t43], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t43], "SQL", C, false)), "Add", [$.add($.add("Select * From accno Where accname='", (await $.mv((await $.wv([$t43], "searchname", C, false)), "text"))), "'")])));
    await $.stmt($.wcall([$t43], "Open", [], C));
    await $.mset((await $.wv([$t43], "DBGrid1", C, false)), "Options", [(await $.wv([$t43], "dgRowSelect", C, false)), (await $.wv([$t43], "dgAlwaysShowEditor", C, false)), (await $.wv([$t43], "dgTitles", C, false)), (await $.wv([$t43], "dgIndicator", C, false)), (await $.wv([$t43], "dgColumnResize", C, false)), (await $.wv([$t43], "dgColLines", C, false)), (await $.wv([$t43], "dgRowLines", C, false)), (await $.wv([$t43], "dgTabs", C, false)), (await $.wv([$t43], "dgAlwaysShowSelection", C, false)), (await $.wv([$t43], "dgConfirmDelete", C, false)), (await $.wv([$t43], "dgCancelOnExit", C, false)), (await $.wv([$t43], "dgMultiSelect", C, false))]);
    {
      const $t44 = (await $.mv((await $.wv([$t43], "CO_DataMod", C, false)), "customers"));
      await $.stmt($.wcall([$t43, $t44], "Close", [], C));
      await $.mcall((await $.wv([$t43, $t44], "SQL", C, false)), "clear", []);
      await $.stmt((await $.mcall((await $.wv([$t43, $t44], "SQL", C, false)), "add", [$.add($.add("select * from customers where id='", (await $.mv((await $.mcall((await $.mv((await $.wv([$t43, $t44], "CO_DataMod", C, false)), "account")), "fieldbyname", ["accklid"])), "asstring"))), "' ")])));
      await $.stmt($.wcall([$t43, $t44], "Open", [], C));
      await $.stmt($.wcall([$t43, $t44], "Refresh", [], C));
      await $.mset((await $.wv([$t43, $t44], "DBGrid1", C, false)), "Options", [(await $.wv([$t43, $t44], "dgRowSelect", C, false)), (await $.wv([$t43, $t44], "dgAlwaysShowEditor", C, false)), (await $.wv([$t43, $t44], "dgTitles", C, false)), (await $.wv([$t43, $t44], "dgIndicator", C, false)), (await $.wv([$t43, $t44], "dgColumnResize", C, false)), (await $.wv([$t43, $t44], "dgColLines", C, false)), (await $.wv([$t43, $t44], "dgRowLines", C, false)), (await $.wv([$t43, $t44], "dgTabs", C, false)), (await $.wv([$t43, $t44], "dgAlwaysShowSelection", C, false)), (await $.wv([$t43, $t44], "dgConfirmDelete", C, false)), (await $.wv([$t43, $t44], "dgCancelOnExit", C, false)), (await $.wv([$t43, $t44], "dgMultiSelect", C, false))]);
      {
        const $t45 = (await $.mv((await $.wv([$t43, $t44], "CO_DataMod", C, false)), "Transactions"));
        await $.stmt($.wcall([$t43, $t44, $t45], "Close", [], C));
        await $.mcall((await $.wv([$t43, $t44, $t45], "SQL", C, false)), "clear", []);
        await $.stmt((await $.mcall((await $.wv([$t43, $t44, $t45], "SQL", C, false)), "add", [$.add($.add($.add($.add("select * from trans_knn where debitid = '", (await $.mv((await $.wv([$t43, $t44, $t45], "dbedit1", C, false)), "text"))), "' or creditid = '"), (await $.mv((await $.wv([$t43, $t44, $t45], "dbedit1", C, false)), "text"))), "'  ")])));
        await $.stmt($.wcall([$t43, $t44, $t45], "Open", [], C));
        await $.stmt($.wcall([$t43, $t44, $t45], "Refresh", [], C));
        await $.mset((await $.wv([$t43, $t44, $t45], "DBGrid1", C, false)), "Options", [(await $.wv([$t43, $t44, $t45], "dgRowSelect", C, false)), (await $.wv([$t43, $t44, $t45], "dgAlwaysShowEditor", C, false)), (await $.wv([$t43, $t44, $t45], "dgTitles", C, false)), (await $.wv([$t43, $t44, $t45], "dgIndicator", C, false)), (await $.wv([$t43, $t44, $t45], "dgColumnResize", C, false)), (await $.wv([$t43, $t44, $t45], "dgColLines", C, false)), (await $.wv([$t43, $t44, $t45], "dgRowLines", C, false)), (await $.wv([$t43, $t44, $t45], "dgTabs", C, false)), (await $.wv([$t43, $t44, $t45], "dgAlwaysShowSelection", C, false)), (await $.wv([$t43, $t44, $t45], "dgConfirmDelete", C, false)), (await $.wv([$t43, $t44, $t45], "dgCancelOnExit", C, false)), (await $.wv([$t43, $t44, $t45], "dgMultiSelect", C, false))]);
        if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_(($.ne((await $.mv((await $.wv([$t43, $t44, $t45], "innedit", C, false)), "text")), "")), async () => ($.ne((await $.mv((await $.wv([$t43, $t44, $t45], "idedit", C, false)), "text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t43, $t44, $t45], "namedit", C, false)), "text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t43, $t44, $t45], "dateedit", C, false)), "text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t43, $t44, $t45], "searchacc", C, false)), "text")), "")))))) {
          await $.mset((await $.wv([$t43, $t44, $t45], "idedit", C, false)), "text", "");
        }
        await $.mset((await $.wv([$t43, $t44, $t45], "innedit", C, false)), "text", "");
        await $.mset((await $.wv([$t43, $t44, $t45], "dateedit", C, false)), "Text", "");
        await $.mset((await $.wv([$t43, $t44, $t45], "searchacc", C, false)), "text", "");
        await $.mset((await $.wv([$t43, $t44, $t45], "namedit", C, false)), "text", "");
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Main", "N3DrawItem", async function N3DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TCO_Main", "GetCustomerInfo", async function GetCustomerInfo(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"custid": $.copyArg(p0), "custname": $.asRef(p1), "custinn": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["custid"]);
  {
    const $t46 = (await $.mv((await $.v(C, "CO_DataMod")), "OPCash"));
    await $.stmt((await $.wcall([$t46], "CallProcedure", ["GetCustomerInfo", [(await $.wv([$t46], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), "", ""]], C)));
    await $.wset([$t46], "CustInn", (await $.wcall([$t46], "GetParameter", [1], C)), { get: async () => await L0["custinn"].get(), set: async (v) => { await L0["custinn"].set(v); }, local: true });
    await $.wset([$t46], "CustName", (await $.wcall([$t46], "GetParameter", [2], C)), { get: async () => await L0["custname"].get(), set: async (v) => { await L0["custname"].set(v); }, local: true });
  }
  return L0.result;
}, {"params": ["CustID", "CustName", "CustInn"], "kind": "procedure", "ptypes": ["Integer", "String", "String"]});
  U.method("TCO_Main", "N5DrawItem", async function N5DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TCO_Main", "GridTransactionsTitleClick", async function GridTransactionsTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t47 = (await $.mv((await $.v(C, "CO_DataMod")), "Transactions"));
    await $.stmt((await $.wcall([$t47], "SetVariable", ["Title", (await $.wv([$t47], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t47], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCO_Main", "N6Click", async function N6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "valutename": '', "withmanat": '', "nomanat": '', "withcoin": '', "manatposition": 0, "i": 0, "custname": '', "custinn": '', "transactionid": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["nomanat"] = "";
  try {
    {
      const $t48 = (await $.mv((await $.v(C, "CO_DataMod")), "Transactions"));
      await $.stmt((await $.wcall([$t48], "GetCustomerInfo", [(await $.mv((await $.wcall([$t48], "FieldByName", ["creditid"], C)), "AsInteger")), $.ref(async () => (await $.wv([$t48], "CustName", { get: async () => L0["custname"], set: async (v) => { L0["custname"] = v; }, local: true }, false)), async ($t49) => { await $.wset([$t48], "CustName", $t49, { get: async () => L0["custname"], set: async (v) => { L0["custname"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t48], "CustInn", { get: async () => L0["custinn"], set: async (v) => { L0["custinn"] = v; }, local: true }, false)), async ($t50) => { await $.wset([$t48], "CustInn", $t50, { get: async () => L0["custinn"], set: async (v) => { L0["custinn"] = v; }, local: true }); })], C)));
      await $.wset([$t48], "TransactionID", (await $.mv((await $.wcall([$t48], "FieldByName", ["ID"], C)), "AsString")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
      await $.wset([$t48], "Filter", $.add(" ID=", (await $.wv([$t48], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))), C);
      await $.wset([$t48], "Filtered", (await $.wv([$t48], "True", C, false)), C);
    }
    {
      const $t51 = (await $.wobj(C, "CO_DataMod"));
      const $t52 = (await $.wv([$t51], "ODSValuteName", C, false));
      await $.stmt($.wcall([$t51, $t52], "Close", [], C));
      await $.stmt((await $.wcall([$t51, $t52], "SetVariable", ["valute", (await $.mv((await $.mcall((await $.wv([$t51, $t52], "Transactions", C, false)), "FieldByName", ["debitcurrencyid"])), "Value"))], C)));
      await $.mcall((await $.wv([$t51, $t52], "ODSValuteName", C, false)), "Open", []);
      await $.wset([$t51, $t52], "ValuteName", (await $.wcall([$t51, $t52], "AnsiLowerCase", [(await $.mv((await $.wcall([$t51, $t52], "FieldByname", ["Valu_name"], C)), "Asstring"))], C)), { get: async () => L0["valutename"], set: async (v) => { L0["valutename"] = v; }, local: true });
    }
    L0["withmanat"] = (await $.call(C, "CurrencyToHR_Azeri", [(await $.call(C, "Trunc", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Transactions")), "FieldByName", ["creditamount"])), "AsFloat"))])), 0, [0]]));
    L0["manatposition"] = (await $.call(C, "POS", ["manat", L0["withmanat"]]));
    if ($.truthy($.gt(L0["manatposition"], 0))) {
      { const $t53 = $.sub(L0["manatposition"], 1);
        L0["i"] = 1;
        let $t54 = true;
        for (;;) {
          if (!$t54) { L0["i"] = $.succ(L0["i"], 1); }
          $t54 = false;
          if (!($.ord(L0["i"]) <= $.ord($t53))) break;
          L0["nomanat"] = $.add(L0["nomanat"], (await $.idx(L0["withmanat"], [L0["i"]])));
          await $.tick();
        }
      }
    }
    L0["withcoin"] = (await $.call(C, "FloatToStr", [(await $.call(C, "Frac", [(await $.call(C, "StrToFloat", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Transactions")), "FieldByName", ["creditamount"])), "Asstring"))]))]))]));
    if ($.truthy($.ne(L0["withcoin"], "0"))) {
      await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["withcoin"], async ($t55) => { L0["withcoin"] = $t55; }), 1, 2])));
      if ($.truthy($.lt((await $.call(C, "length", [L0["withcoin"]])), 2))) {
        L0["withcoin"] = $.add(L0["withcoin"], "0");
      } else {
        if ($.truthy($.gt((await $.call(C, "length", [L0["withcoin"]])), 2))) {
          await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["withcoin"], async ($t56) => { L0["withcoin"] = $t56; }), 3, (await $.call(C, "length", [L0["withcoin"]]))])));
        }
      }
      L0["withcoin"] = $.add($.add(L0["withcoin"], " "), (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "ODSValuteName")), "FieldByName", ["valu_bala"])), "AsString")));
    } else {
      L0["withcoin"] = "";
    }
    L0["valutename"] = (await $.call(C, "AnsiLowerCase", [$.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "ODSValuteName")), "FieldByname", ["Valu_name"])), "Asstring")), "  "), L0["withcoin"])]));
    if ($.truthy($.eq(L0["nomanat"], (await $.v(C, "EmptyStr"))))) {
      L0["nomanat"] = "0 ";
    }
    await $.mcall((await $.mv((await $.v(C, "CO_Report")), "ODSBank")), "Open", []);
    await $.mset((await $.mv((await $.v(C, "CO_Report")), "QRAMMOUNT1")), "Caption", $.add(L0["nomanat"], L0["valutename"]));
    await $.mset((await $.mv((await $.v(C, "CO_Report")), "QRAMMOUNT2")), "Caption", $.add(L0["nomanat"], L0["valutename"]));
    await $.mcall((await $.v(C, "CO_Report")), "Preview", []);
  } finally {
    {
      const $t57 = (await $.mv((await $.v(C, "CO_DataMod")), "Transactions"));
      await $.wset([$t57], "Filtered", (await $.wv([$t57], "false", C, false)), C);
    }
    await $.mcall((await $.mv((await $.v(C, "CO_Report")), "ODSBank")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Buyer")), "close", []);
    await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Buyer")), "open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "N6DrawItem", async function N6DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TCO_Main", "CommitTransaction", async function CommitTransaction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionid": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["transactionid"]);
  {
    const $t58 = (await $.mv((await $.v(C, "CO_DataMod")), "SBTransaction"));
    await $.wset([$t58], "Result", (await $.wcall([$t58], "CallIntegerFunction", [(await $.wv([$t58], "cs_commit_transaction", C, false)), ["TransactionID", (await $.wv([$t58], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false)), "CommitTemp", (await $.wv([$t58], "True", C, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["TransactionID"], "kind": "function", "ptypes": ["Longint"]});
  U.method("TCO_Main", "SBCommit", async function SBCommit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCO_Main", "N8Click", async function N8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "id": 0, "willrefresh": false, "status": 0, "commitedcount": 0, "errorcount": 0, "lasterrormessage": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["commitedcount"] = 0;
  L0["errorcount"] = 0;
  L0["willrefresh"] = false;
  {
    const $t59 = (await $.wobj(C, "TransactionDataModule"));
    const $t60 = (await $.wv([$t59], "GridTransactions", C, false));
    const $t61 = (await $.wv([$t59, $t60], "SelectedRows", C, false));
    const $t62 = (await $.mv((await $.wv([$t59, $t60, $t61], "DataSource", C, false)), "DataSet"));
    if ($.truthy($.eq((await $.wcall([$t59, $t60, $t61, $t62], "MessageDlg", ["Əməliyyatlar təsdiqlənsinmi?", (await $.wv([$t59, $t60, $t61, $t62], "mtConfirmation", C, false)), [(await $.wv([$t59, $t60, $t61, $t62], "mbYes", C, false)), (await $.wv([$t59, $t60, $t61, $t62], "mbCancel", C, false))], 0], C)), (await $.wv([$t59, $t60, $t61, $t62], "mrYes", C, false))))) {
      await $.stmt($.wcall([$t59, $t60, $t61, $t62], "DisableControls", [], C));
      try {
        await $.mcall((await $.wv([$t59, $t60, $t61, $t62], "Application", C, false)), "ProcessMessages", []);
        if ($.truthy($.eq((await $.wv([$t59, $t60, $t61, $t62], "Count", C, false)), 0))) {
          await $.wset([$t59, $t60, $t61, $t62], "CurrentRowSelected", (await $.wv([$t59, $t60, $t61, $t62], "True", C, false)), C);
        }
        { const $t63 = $.sub((await $.wv([$t59, $t60, $t61, $t62], "Count", C, false)), 1);
          await $.wset([$t59, $t60, $t61, $t62], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t64 = true;
          for (;;) {
            if (!$t64) { await $.wset([$t59, $t60, $t61, $t62], "i", $.succ((await $.wv([$t59, $t60, $t61, $t62], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t64 = false;
            if (!($.ord((await $.wv([$t59, $t60, $t61, $t62], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t63))) break;
            try {
              await $.stmt((await $.wcall([$t59, $t60, $t61, $t62], "GotoBookmark", [(await $.wcall([$t59, $t60, $t61, $t62], "TBookmark", [(await $.idx((await $.wv([$t59, $t60, $t61, $t62], "Items", C, false)), [(await $.wv([$t59, $t60, $t61, $t62], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
              await $.wset([$t59, $t60, $t61, $t62], "Status", (await $.mv((await $.wcall([$t59, $t60, $t61, $t62], "FieldByname", ["Status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
              if ($.truthy($.in_((await $.wv([$t59, $t60, $t61, $t62], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t59, $t60, $t61, $t62], "tsDelayed", C, false)), (await $.wv([$t59, $t60, $t61, $t62], "tsRejected", C, false))]))) {
                await $.wset([$t59, $t60, $t61, $t62], "ID", (await $.mv((await $.wcall([$t59, $t60, $t61, $t62], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
                await $.stmt((await $.wcall([$t59, $t60, $t61, $t62], "CommitTransaction", [(await $.wv([$t59, $t60, $t61, $t62], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))], C)));
                await $.wset([$t59, $t60, $t61, $t62], "WillRefresh", (await $.wv([$t59, $t60, $t61, $t62], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
                await $.stmt((await $.wcall([$t59, $t60, $t61, $t62], "Inc", [$.ref(async () => (await $.wv([$t59, $t60, $t61, $t62], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), async ($t66) => { await $.wset([$t59, $t60, $t61, $t62], "CommitedCount", $t66, { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }); })], C)));
                await $.stmt((await $.wcall([$t59, $t60, $t61, $t62], "SBCommit", [], C)));
              }
            } catch ($t65) {
              $.rethrowControl($t65);
              if ($.excIs($t65, "Exception")) {
                L0["e"] = $.exc($t65);
                await $.wset([$t59, $t60, $t61, $t62], "LastErrorMessage", (await $.mv((await $.wv([$t59, $t60, $t61, $t62], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), { get: async () => L0["lasterrormessage"], set: async (v) => { L0["lasterrormessage"] = v; }, local: true });
                await $.stmt((await $.wcall([$t59, $t60, $t61, $t62], "Inc", [$.ref(async () => (await $.wv([$t59, $t60, $t61, $t62], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), async ($t67) => { await $.wset([$t59, $t60, $t61, $t62], "ErrorCount", $t67, { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }); })], C)));
                continue;
              }
              else { throw $t65; }
            }
            await $.tick();
          }
        }
      } finally {
        if ($.truthy($.gt((await $.wv([$t59, $t60, $t61, $t62], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), 0))) {
          if ($.truthy($.eq((await $.wv([$t59, $t60, $t61, $t62], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), 1))) {
            await $.stmt((await $.wcall([$t59, $t60, $t61, $t62], "MessageDlg", [(await $.wv([$t59, $t60, $t61, $t62], "LastErrorMessage", { get: async () => L0["lasterrormessage"], set: async (v) => { L0["lasterrormessage"] = v; }, local: true }, false)), (await $.wv([$t59, $t60, $t61, $t62], "mtConfirmation", C, false)), [(await $.wv([$t59, $t60, $t61, $t62], "mbOk", C, false))], 0], C)));
          } else {
            await $.stmt((await $.wcall([$t59, $t60, $t61, $t62], "MessageDlg", [(await $.wcall([$t59, $t60, $t61, $t62], "Format", [(await $.wv([$t59, $t60, $t61, $t62], "cs_CommitInformation", C, false)), [$.add((await $.wv([$t59, $t60, $t61, $t62], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), (await $.wv([$t59, $t60, $t61, $t62], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false))), (await $.wv([$t59, $t60, $t61, $t62], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), (await $.wv([$t59, $t60, $t61, $t62], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false))]], C)), (await $.wv([$t59, $t60, $t61, $t62], "mtConfirmation", C, false)), [(await $.wv([$t59, $t60, $t61, $t62], "mbOk", C, false))], 0], C)));
          }
        }
        await $.stmt($.wcall([$t59, $t60, $t61, $t62], "EnableControls", [], C));
        if ($.truthy((await $.wv([$t59, $t60, $t61, $t62], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
          await $.wset([$t59, $t60, $t61, $t62], "TransactionState", (await $.wv([$t59, $t60, $t61, $t62], "tsCommit", C, false)), C);
          await $.mcall((await $.mv((await $.wv([$t59, $t60, $t61, $t62], "CO_DataMod", C, false)), "Transactions")), "Close", []);
          await $.mcall((await $.mv((await $.wv([$t59, $t60, $t61, $t62], "CO_DataMod", C, false)), "Transactions")), "Open", []);
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "CommitTransactions", async function CommitTransactions(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionids": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["transactionids"]);
  {
    const $t68 = (await $.mv((await $.v(C, "CO_DataMod")), "SBTransaction"));
    await $.wset([$t68], "Result", (await $.wcall([$t68], "CallIntegerFunction", [(await $.wv([$t68], "cs_commit_delayed_transactions", C, false)), ["OverloadIDsStr", (await $.wv([$t68], "TransactionIDs", { get: async () => L0["transactionids"], set: async (v) => { L0["transactionids"] = v; }, local: true }, false)), "CommitTemp", (await $.wv([$t68], "True", C, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["TransactionIDs"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TCO_Main", "D1Click", async function D1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "ids": '', "status": 0, "trcount": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["ids"] = "";
  L0["trcount"] = 0;
  {
    const $t69 = (await $.wobj(C, "GridTransactions"));
    const $t70 = (await $.wv([$t69], "SelectedRows", C, false));
    const $t71 = (await $.mv((await $.wv([$t69, $t70], "DataSource", C, false)), "DataSet"));
    if ($.truthy($.eq((await $.wv([$t69, $t70, $t71], "Count", C, false)), 0))) {
      await $.stmt((await $.wcall([$t69, $t70, $t71], "Inc", [$.ref(async () => (await $.wv([$t69, $t70, $t71], "TrCount", { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }, false)), async ($t72) => { await $.wset([$t69, $t70, $t71], "TrCount", $t72, { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }); })], C)));
      await $.wset([$t69, $t70, $t71], "IDs", (await $.mv((await $.wcall([$t69, $t70, $t71], "FieldByName", ["ID"], C)), "AsString")), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
    } else {
      await $.stmt($.wcall([$t69, $t70, $t71], "DisableControls", [], C));
      try {
        { const $t73 = $.sub((await $.wv([$t69, $t70, $t71], "Count", C, false)), 1);
          await $.wset([$t69, $t70, $t71], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t74 = true;
          for (;;) {
            if (!$t74) { await $.wset([$t69, $t70, $t71], "i", $.succ((await $.wv([$t69, $t70, $t71], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t74 = false;
            if (!($.ord((await $.wv([$t69, $t70, $t71], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t73))) break;
            await $.stmt((await $.wcall([$t69, $t70, $t71], "GotoBookmark", [(await $.wcall([$t69, $t70, $t71], "TBookmark", [(await $.idx((await $.wv([$t69, $t70, $t71], "Items", C, false)), [(await $.wv([$t69, $t70, $t71], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            await $.wset([$t69, $t70, $t71], "Status", (await $.mv((await $.wcall([$t69, $t70, $t71], "FieldByname", ["Status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
            if ($.truthy($.in_((await $.wv([$t69, $t70, $t71], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t69, $t70, $t71], "tsDelayed", C, false)), (await $.wv([$t69, $t70, $t71], "tsRejected", C, false))]))) {
              await $.stmt((await $.wcall([$t69, $t70, $t71], "Inc", [$.ref(async () => (await $.wv([$t69, $t70, $t71], "TrCount", { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }, false)), async ($t75) => { await $.wset([$t69, $t70, $t71], "TrCount", $t75, { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }); })], C)));
              await $.wset([$t69, $t70, $t71], "IDs", $.add($.add((await $.wv([$t69, $t70, $t71], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), ","), (await $.mv((await $.wcall([$t69, $t70, $t71], "FieldByName", ["ID"], C)), "AsString"))), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
            }
            await $.tick();
          }
        }
        await $.stmt((await $.mcall((await $.wv([$t69, $t70, $t71], "System", C, false)), "Delete", [$.ref(async () => (await $.wv([$t69, $t70, $t71], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), async ($t76) => { await $.wset([$t69, $t70, $t71], "IDs", $t76, { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }); }), 1, 1])));
      } finally {
        await $.stmt($.wcall([$t69, $t70, $t71], "EnableControls", [], C));
      }
    }
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["%d sayda əməliyyat təsdiqlənsinmi?", [L0["trcount"]]])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t77 = (await $.wobj(C, "TransactionDataModule"));
      await $.stmt((await $.wcall([$t77], "CommitTransactions", [(await $.wv([$t77], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t77], "SBCommit", [], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "ActionStepCommitExecute", async function ActionStepCommitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "id": 0, "willrefresh": false, "status": 0, "commitedcount": 0, "errorcount": 0, "lasterrormessage": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["commitedcount"] = 0;
  L0["errorcount"] = 0;
  L0["willrefresh"] = false;
  {
    const $t78 = (await $.wobj(C, "TransactionDataModule"));
    const $t79 = (await $.wv([$t78], "GridTransactions", C, false));
    const $t80 = (await $.wv([$t78, $t79], "SelectedRows", C, false));
    const $t81 = (await $.mv((await $.wv([$t78, $t79, $t80], "DataSource", C, false)), "DataSet"));
    if ($.truthy($.eq((await $.wcall([$t78, $t79, $t80, $t81], "MessageDlg", ["Əməliyyatlar təsdiqlənsinmi?", (await $.wv([$t78, $t79, $t80, $t81], "mtConfirmation", C, false)), [(await $.wv([$t78, $t79, $t80, $t81], "mbYes", C, false)), (await $.wv([$t78, $t79, $t80, $t81], "mbCancel", C, false))], 0], C)), (await $.wv([$t78, $t79, $t80, $t81], "mrYes", C, false))))) {
      await $.stmt($.wcall([$t78, $t79, $t80, $t81], "DisableControls", [], C));
      try {
        await $.mcall((await $.wv([$t78, $t79, $t80, $t81], "Application", C, false)), "ProcessMessages", []);
        if ($.truthy($.eq((await $.wv([$t78, $t79, $t80, $t81], "Count", C, false)), 0))) {
          await $.wset([$t78, $t79, $t80, $t81], "CurrentRowSelected", (await $.wv([$t78, $t79, $t80, $t81], "True", C, false)), C);
        }
        { const $t82 = $.sub((await $.wv([$t78, $t79, $t80, $t81], "Count", C, false)), 1);
          await $.wset([$t78, $t79, $t80, $t81], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t83 = true;
          for (;;) {
            if (!$t83) { await $.wset([$t78, $t79, $t80, $t81], "i", $.succ((await $.wv([$t78, $t79, $t80, $t81], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t83 = false;
            if (!($.ord((await $.wv([$t78, $t79, $t80, $t81], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t82))) break;
            try {
              await $.stmt((await $.wcall([$t78, $t79, $t80, $t81], "GotoBookmark", [(await $.wcall([$t78, $t79, $t80, $t81], "TBookmark", [(await $.idx((await $.wv([$t78, $t79, $t80, $t81], "Items", C, false)), [(await $.wv([$t78, $t79, $t80, $t81], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
              await $.wset([$t78, $t79, $t80, $t81], "Status", (await $.mv((await $.wcall([$t78, $t79, $t80, $t81], "FieldByname", ["Status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
              if ($.truthy($.in_((await $.wv([$t78, $t79, $t80, $t81], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t78, $t79, $t80, $t81], "tsDelayed", C, false)), (await $.wv([$t78, $t79, $t80, $t81], "tsRejected", C, false))]))) {
                await $.wset([$t78, $t79, $t80, $t81], "ID", (await $.mv((await $.wcall([$t78, $t79, $t80, $t81], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
                await $.stmt((await $.wcall([$t78, $t79, $t80, $t81], "CommitTransaction", [(await $.wv([$t78, $t79, $t80, $t81], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))], C)));
                await $.wset([$t78, $t79, $t80, $t81], "WillRefresh", (await $.wv([$t78, $t79, $t80, $t81], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
                await $.stmt((await $.wcall([$t78, $t79, $t80, $t81], "Inc", [$.ref(async () => (await $.wv([$t78, $t79, $t80, $t81], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), async ($t85) => { await $.wset([$t78, $t79, $t80, $t81], "CommitedCount", $t85, { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }); })], C)));
                await $.stmt((await $.wcall([$t78, $t79, $t80, $t81], "SBCommit", [], C)));
              }
            } catch ($t84) {
              $.rethrowControl($t84);
              if ($.excIs($t84, "Exception")) {
                L0["e"] = $.exc($t84);
                await $.wset([$t78, $t79, $t80, $t81], "LastErrorMessage", (await $.mv((await $.wv([$t78, $t79, $t80, $t81], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), { get: async () => L0["lasterrormessage"], set: async (v) => { L0["lasterrormessage"] = v; }, local: true });
                await $.stmt((await $.wcall([$t78, $t79, $t80, $t81], "Inc", [$.ref(async () => (await $.wv([$t78, $t79, $t80, $t81], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), async ($t86) => { await $.wset([$t78, $t79, $t80, $t81], "ErrorCount", $t86, { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }); })], C)));
                continue;
              }
              else { throw $t84; }
            }
            await $.tick();
          }
        }
      } finally {
        if ($.truthy($.gt((await $.wv([$t78, $t79, $t80, $t81], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), 0))) {
          if ($.truthy($.eq((await $.wv([$t78, $t79, $t80, $t81], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), 1))) {
            await $.stmt((await $.wcall([$t78, $t79, $t80, $t81], "MessageDlg", [(await $.wv([$t78, $t79, $t80, $t81], "LastErrorMessage", { get: async () => L0["lasterrormessage"], set: async (v) => { L0["lasterrormessage"] = v; }, local: true }, false)), (await $.wv([$t78, $t79, $t80, $t81], "mtConfirmation", C, false)), [(await $.wv([$t78, $t79, $t80, $t81], "mbOk", C, false))], 0], C)));
          } else {
            await $.stmt((await $.wcall([$t78, $t79, $t80, $t81], "MessageDlg", [(await $.wcall([$t78, $t79, $t80, $t81], "Format", [(await $.wv([$t78, $t79, $t80, $t81], "cs_CommitInformation", C, false)), [$.add((await $.wv([$t78, $t79, $t80, $t81], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), (await $.wv([$t78, $t79, $t80, $t81], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false))), (await $.wv([$t78, $t79, $t80, $t81], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), (await $.wv([$t78, $t79, $t80, $t81], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false))]], C)), (await $.wv([$t78, $t79, $t80, $t81], "mtConfirmation", C, false)), [(await $.wv([$t78, $t79, $t80, $t81], "mbOk", C, false))], 0], C)));
          }
        }
        await $.stmt($.wcall([$t78, $t79, $t80, $t81], "EnableControls", [], C));
        if ($.truthy((await $.wv([$t78, $t79, $t80, $t81], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
          await $.wset([$t78, $t79, $t80, $t81], "TransactionState", (await $.wv([$t78, $t79, $t80, $t81], "tsCommit", C, false)), C);
          await $.mcall((await $.mv((await $.wv([$t78, $t79, $t80, $t81], "CO_DataMod", C, false)), "Transactions")), "Close", []);
          await $.mcall((await $.mv((await $.wv([$t78, $t79, $t80, $t81], "CO_DataMod", C, false)), "Transactions")), "Open", []);
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "ActionCommitExecute", async function ActionCommitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "ids": '', "status": 0, "trcount": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["ids"] = "";
  L0["trcount"] = 0;
  {
    const $t87 = (await $.wobj(C, "GridTransactions"));
    const $t88 = (await $.wv([$t87], "SelectedRows", C, false));
    const $t89 = (await $.mv((await $.wv([$t87, $t88], "DataSource", C, false)), "DataSet"));
    if ($.truthy($.eq((await $.wv([$t87, $t88, $t89], "Count", C, false)), 0))) {
      await $.stmt((await $.wcall([$t87, $t88, $t89], "Inc", [$.ref(async () => (await $.wv([$t87, $t88, $t89], "TrCount", { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }, false)), async ($t90) => { await $.wset([$t87, $t88, $t89], "TrCount", $t90, { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }); })], C)));
      await $.wset([$t87, $t88, $t89], "IDs", (await $.mv((await $.wcall([$t87, $t88, $t89], "FieldByName", ["ID"], C)), "AsString")), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
    } else {
      await $.stmt($.wcall([$t87, $t88, $t89], "DisableControls", [], C));
      try {
        { const $t91 = $.sub((await $.wv([$t87, $t88, $t89], "Count", C, false)), 1);
          await $.wset([$t87, $t88, $t89], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t92 = true;
          for (;;) {
            if (!$t92) { await $.wset([$t87, $t88, $t89], "i", $.succ((await $.wv([$t87, $t88, $t89], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t92 = false;
            if (!($.ord((await $.wv([$t87, $t88, $t89], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t91))) break;
            await $.stmt((await $.wcall([$t87, $t88, $t89], "GotoBookmark", [(await $.wcall([$t87, $t88, $t89], "TBookmark", [(await $.idx((await $.wv([$t87, $t88, $t89], "Items", C, false)), [(await $.wv([$t87, $t88, $t89], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            await $.wset([$t87, $t88, $t89], "Status", (await $.mv((await $.wcall([$t87, $t88, $t89], "FieldByname", ["Status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
            if ($.truthy($.in_((await $.wv([$t87, $t88, $t89], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t87, $t88, $t89], "tsDelayed", C, false)), (await $.wv([$t87, $t88, $t89], "tsRejected", C, false))]))) {
              await $.stmt((await $.wcall([$t87, $t88, $t89], "Inc", [$.ref(async () => (await $.wv([$t87, $t88, $t89], "TrCount", { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }, false)), async ($t93) => { await $.wset([$t87, $t88, $t89], "TrCount", $t93, { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }); })], C)));
              await $.wset([$t87, $t88, $t89], "IDs", $.add($.add((await $.wv([$t87, $t88, $t89], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), ","), (await $.mv((await $.wcall([$t87, $t88, $t89], "FieldByName", ["ID"], C)), "AsString"))), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
            }
            await $.tick();
          }
        }
        await $.stmt((await $.mcall((await $.wv([$t87, $t88, $t89], "System", C, false)), "Delete", [$.ref(async () => (await $.wv([$t87, $t88, $t89], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), async ($t94) => { await $.wset([$t87, $t88, $t89], "IDs", $t94, { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }); }), 1, 1])));
      } finally {
        await $.stmt($.wcall([$t87, $t88, $t89], "EnableControls", [], C));
      }
    }
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["%d sayda əməliyyat təsdiqlənsinmi?", [L0["trcount"]]])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t95 = (await $.wobj(C, "TransactionDataModule"));
      await $.stmt((await $.wcall([$t95], "CommitTransactions", [(await $.wv([$t95], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t95], "SBCommit", [], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "N9Click", async function N9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CO_Cust_Form", (await $.mcall((await $.v(C, "TCO_Cust_Form")), "Create", [Self])));
  await $.mcall((await $.v(C, "CO_Cust_Form")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "N13Click", async function N13Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CO_Settings", (await $.mcall((await $.v(C, "TCO_Settings")), "Create", [Self])));
  await $.mcall((await $.v(C, "CO_Settings")), "Showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "passpeditChange", async function passpeditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "passpedit")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "physical_customers")), "Locate", ["PASSP_NUMBER", (await $.mv((await $.v(C, "passpedit")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGrid1")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  if ($.truthy(($.ne((await $.mv((await $.v(C, "passpedit")), "text")), "")))) {
    await $.mset((await $.v(C, "noedit")), "text", "");
  }
  await $.mset((await $.v(C, "nameedit")), "text", "");
  await $.mset((await $.v(C, "datedit")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "nameeditChange", async function nameeditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "nameedit")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "physical_customers")), "Locate", ["BYR_NAME", (await $.mv((await $.v(C, "nameedit")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGrid1")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_(($.ne((await $.mv((await $.v(C, "innedit")), "text")), "")), async () => ($.ne((await $.mv((await $.v(C, "searchacc")), "text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "namedit")), "text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "dateedit")), "text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "searchname")), "text")), "")))))) {
    await $.mset((await $.v(C, "searchacc")), "text", "");
  }
  await $.mset((await $.v(C, "innedit")), "text", "");
  await $.mset((await $.v(C, "dateedit")), "Text", "");
  await $.mset((await $.v(C, "searchname")), "text", "");
  await $.mset((await $.v(C, "namedit")), "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "DBGrid2DblClick", async function DBGrid2DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CO_Upd_Cust", (await $.mcall((await $.v(C, "TCO_Upd_Cust")), "Create", [Self])));
  await $.mcall((await $.v(C, "CO_Upd_Cust")), "Showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "N14Click", async function N14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CO_Upd_Cust", (await $.mcall((await $.v(C, "TCO_Upd_Cust")), "Create", [Self])));
  await $.mcall((await $.v(C, "CO_Upd_Cust")), "Showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "N15Click", async function N15Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormAccount", (await $.mcall((await $.v(C, "TFormAccount")), "Create", [Self])));
  await $.mcall((await $.v(C, "FormAccount")), "Showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
