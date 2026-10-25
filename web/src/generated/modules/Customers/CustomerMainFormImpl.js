// Generated from CustomerMainFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CustomerMainFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "Customers_TLB", "StdVcl", "ToolWin", "ComCtrls", "ExtCtrls", "Grids", "DBGrids", "ActnList", "ImgList", "StdCtrls", "DBCtrls", "Menus", "SBOInitPkg", "DB", "DBViewComboBox", "OracleData", "SBPlgAx50_TLB", "SearchCombo", "ComObj", "ComServ", "CustomerDataModuleImpl", "CustomerPropertiesForm_Unit", "SBCore", "SBCustomer", "sboapiDataModuleImpl", "CustomerInfoFormImpl", "UnitFrmZoom", "uSettingsImpl", "SBTranslateProc"]);
  const C = [U];
  U.const("aotAccNo", 0);
  U.const("aotAccName", 1);
  U.const("aotAccCurrency", 2);
  U.const("aotAccOpenDate", 3);
  U.const("aotNoOrder", 4);
  U.defClass("TCustomerMainForm", "TActiveForm", {"actionlist1": {"name": "ActionList1", "type": "TActionList"}, "add": {"name": "Add", "type": "TAction"}, "close": {"name": "Close", "type": "TAction"}, "edit": {"name": "Edit", "type": "TAction"}, "statusbar": {"name": "StatusBar", "type": "TStatusBar"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "order": {"name": "Order", "type": "TAction"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "refresh": {"name": "Refresh", "type": "TAction"}, "accounts": {"name": "Accounts", "type": "TDataSource"}, "activeaccountlist": {"name": "ActiveAccountList", "type": "TOracleDataSet"}, "activeaccountlistid": {"name": "ActiveAccountListID", "type": "TFloatField"}, "activeaccountlistopendate": {"name": "ActiveAccountListOPENDATE", "type": "TDateTimeField"}, "activeaccountlistbalance": {"name": "ActiveAccountListBALANCE", "type": "TFloatField"}, "activeaccountlistlbalance": {"name": "ActiveAccountListLBALANCE", "type": "TFloatField"}, "infoview": {"name": "InfoView", "type": "TAction"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "infoview1": {"name": "InfoView1", "type": "TMenuItem"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "customergb": {"name": "CustomerGB", "type": "TGroupBox"}, "controlbar1": {"name": "ControlBar1", "type": "TControlBar"}, "customertoolbar": {"name": "CustomerToolBar", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "customersearchbar": {"name": "CustomerSearchBar", "type": "TToolBar"}, "editid": {"name": "EditID", "type": "TEdit"}, "editinn": {"name": "EditINN", "type": "TEdit"}, "editname": {"name": "EditNAME", "type": "TEdit"}, "editopen_dat": {"name": "EditOPEN_DAT", "type": "TEdit"}, "customergrid": {"name": "CustomerGrid", "type": "TDBGrid"}, "accountsgb": {"name": "AccountsGB", "type": "TGroupBox"}, "accountgrid": {"name": "AccountGrid", "type": "TDBGrid"}, "controlbar2": {"name": "ControlBar2", "type": "TControlBar"}, "accountviewsettingspanel": {"name": "AccountViewSettingsPanel", "type": "TPanel"}, "accountsorderpanel": {"name": "AccountsOrderPanel", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "accordercb": {"name": "AccOrderCB", "type": "TComboBox"}, "accountcurrencypanel": {"name": "AccountCurrencyPanel", "type": "TPanel"}, "label2": {"name": "Label2", "type": "TLabel"}, "acccurrencycb": {"name": "AccCurrencyCB", "type": "TComboBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "editaccno": {"name": "EditAccNo", "type": "TEdit"}, "editaccname": {"name": "EditAccName", "type": "TEdit"}, "splitter1": {"name": "Splitter1", "type": "TSplitter"}, "controlbar3": {"name": "ControlBar3", "type": "TControlBar"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "scbfilial": {"name": "scbFilial", "type": "TSearchCombo"}, "cbordercus": {"name": "cbOrderCus", "type": "TComboBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "actsettings": {"name": "actSettings", "type": "TAction"}, "n7": {"name": "N7", "type": "TMenuItem"}, "secimler1": {"name": "Secimler1", "type": "TMenuItem"}, "button1": {"name": "Button1", "type": "TButton"}, "activeaccountlistaccno": {"name": "ActiveAccountListACCNO", "type": "TWideStringField"}, "activeaccountlistaccname": {"name": "ActiveAccountListACCNAME", "type": "TWideStringField"}, "activeaccountlistcurrencysname": {"name": "ActiveAccountListCURRENCYSNAME", "type": "TWideStringField"}, "editname1": {"name": "EditNAME1", "type": "TEdit"}, "fevents": {"name": "FEvents", "type": "ICustomerMainFormEvents"}, "fuseaccorder": {"name": "FUseAccOrder", "type": "Boolean"}, "faccorder": {"name": "FAccOrder", "type": "TAccOrder"}, "canrefresh": {"name": "CanRefresh", "type": "Boolean"}}, {"useaccorder": {"name": "UseAccOrder", "read": "FUseAccOrder"}, "accorder": {"name": "AccOrder", "read": "FAccOrder"}});
  U.init(async () => {
    U.const("SAOAccNo", "AccNo");
    U.const("SAOAccName", "AccName");
    U.const("SAOAccCurrency", "CurrencySName");
    U.const("SAOAccOpenDate", "OpenDate");
    U.const("SAONoOrder", "unused");
    U.const("AccOrderFields", [(await $.v(C, "SAOAccNo")), (await $.v(C, "SAOAccName")), (await $.v(C, "SAOAccCurrency")), (await $.v(C, "SAOAccOpenDate")), (await $.v(C, "SAONoOrder"))]);
    U.const("AccOrderToIndexMap", [1, 2, 4, 3, 0]);
    U.const("AccIndexToOrderMap", [(await $.v(C, "aotNoOrder")), (await $.v(C, "aotAccNo")), (await $.v(C, "aotAccName")), (await $.v(C, "aotAccOpenDate")), (await $.v(C, "aotAccCurrency"))]);
    U.const("SGetCustomerAccsQuery", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("SELECT acc.ID, acc.ACC_NO as AccNo, acc.NAME as AccName, acc.OPEN_DAT as OpenDate,\r\n", " Currency.VAL_NAME as CurrencySName, T.OSTAT as Balance, T.POK_OSTAT as LBalance\r\n"), "FROM\r\n"), " Account acc,\r\n"), " AVALUTE Currency,\r\n"), " tenostat t\r\n"), "WHERE\r\n"), " (CLOSE_DAT IS NULL)\r\n"), " AND (acc.KLI_ID = :ID)\r\n"), " AND (Currency.VALUTE = acc.VAL_ACC)\r\n"), " AND (T.ACC_ID = acc.ID)\r\n"), " UNION ALL "), "SELECT acc.ID, acc.ACC_NO as AccNo, acc.NAME as AccName, acc.OPEN_DAT as OpenDate,\r\n"), " Currency.VAL_NAME as CurrencySName, T.OSTAT as Balance, T.POK_OSTAT as LBalance\r\n"), "FROM\r\n"), " out_Account acc,\r\n"), " AVALUTE Currency,\r\n"), " out_tenostat t\r\n"), "WHERE\r\n"), " (CLOSE_DAT IS NULL)\r\n"), " AND (acc.KLI_ID = :ID)\r\n"), " AND (Currency.VALUTE = acc.VAL_ACC)\r\n"), " AND (T.ACC_ID = acc.ID)\r\n"));
    U.const("SGetCusQuery", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("select c.rowID,id, op_id, open_dat, close_dat, nerezident,prinad_kod, name, short_name, group_klie, vid_sob, org_sob, sfera_dey, otrasl, nalog_kod, kod_okpro,inn, dat_nal, dat_ustav, bik ,", "  translate(name, 'IiİiIı', '``````') as name1,"), "decode(c.cust_type,null,"), "'"), "Hüquqi"), "'"), ", 1, "), "'"), "Fiziki"), "'"), ", 2, "), "'"), "f.s."), "'"), ") tip from CUSTOMERS C\r\n"), "where CLOSE_DAT IS NULL\r\n"));
  });
  U.method("TCustomerMainForm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TCustomerMainForm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TCustomerMainForm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TCustomerMainForm", "Initialize", null, arguments);
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
  U.method("TCustomerMainForm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomerMainForm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomerMainForm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomerMainForm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomerMainForm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomerMainForm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomerMainForm", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomerMainForm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomerMainForm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomerMainForm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomerMainForm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomerMainForm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomerMainForm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomerMainForm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomerMainForm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomerMainForm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomerMainForm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomerMainForm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomerMainForm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCustomerMainForm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerMainForm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerMainForm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerMainForm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerMainForm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerMainForm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerMainForm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TCustomerMainForm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerMainForm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCustomerMainForm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCustomerMainForm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TCustomerMainForm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCustomerMainForm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TCustomerMainForm", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TCustomerMainForm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCustomerMainForm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCustomerMainForm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCustomerMainForm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCustomerMainForm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCustomerMainForm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCustomerMainForm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCustomerMainForm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TCustomerMainForm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCustomerMainForm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCustomerMainForm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CustomerDataModuleImpl")), "Initialize", []);
  await $.set(C, "CustomerPropertiesForm", (await $.mcall((await $.v(C, "TCustomerPropertiesForm")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "CustomerDataModule")), "ActiveCustomerList")), "Open", []);
  {
    const $t1 = (await $.mv((await $.v(C, "CustomerDataModule")), "CurrencyData"));
    await $.stmt($.wcall([$t1], "First", [], C));
    while ($.truthy($.not((await $.wv([$t1], "Eof", C, false))))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "AccCurrencyCB", C, false)), "Items")), "Add", [(await $.mv((await $.wcall([$t1], "FieldByName", ["VALU_NAME"], C)), "AsString"))])));
      await $.stmt($.wcall([$t1], "Next", [], C));
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "AccCurrencyCB")), "ItemIndex", 0);
  await $.mset((await $.v(C, "AccOrderCB")), "ItemIndex", 0);
  await $.set(C, "CanRefresh", false);
  await $.mset((await $.v(C, "cbOrderCus")), "ItemIndex", 0);
  await $.mset((await $.v(C, "scbFilial")), "ItemIndex", 0);
  await $.set(C, "CanRefresh", true);
  await $.stmt($.call(C, "RebuildAccQuery", []));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerMainForm", "AddExecute", async function AddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CustomerPropertiesForm")), "New")))) {
    await $.mcall((await $.v(C, "Refresh")), "Execute", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerMainForm", "CloseExecute", async function CloseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "ActiveAccountList")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "MessageDlg", ["Aktiv hesabları olan müştərini bağlamaq olmaz", (await $.v(C, "mtError")), [(await $.v(C, "mbOk"))], 0])));
  } else {
    if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Müştəri bağlansın?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrYes"))))) {
      await $.stmt((await $.call(C, "Sb_CloseCustomer", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "CustomerDataModule")), "Customers")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
      await $.mcall((await $.v(C, "Refresh")), "Execute", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerMainForm", "RefreshExecute", async function RefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "savedpos": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.mv((await $.v(C, "CustomerDataModule")), "ActiveCustomerList"));
    await $.wset([$t2], "SavedPos", (await $.wv([$t2], "RecNo", C, false)), { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true });
    await $.stmt($.wcall([$t2], "Close", [], C));
    await $.mset((await $.wv([$t2], "SQL", C, false)), "Text", (await $.wv([$t2], "BuildCusQuery", C, false)));
    await $.wset([$t2], "Session", (await $.mv((await $.wv([$t2], "sboapiDataModule", C, false)), "SBSession")), C);
    await $.stmt($.wcall([$t2], "Open", [], C));
    if ($.truthy($.gt((await $.wv([$t2], "SavedPos", { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true }, false)), (await $.wv([$t2], "RecordCount", C, false))))) {
      await $.wset([$t2], "RecNo", (await $.wv([$t2], "RecordCount", C, false)), C);
    } else {
      await $.wset([$t2], "RecNo", (await $.wv([$t2], "SavedPos", { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true }, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerMainForm", "EditExecute", async function EditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "CustomerPropertiesForm")), "Edit", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "CustomerDataModule")), "Customers")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerMainForm", "EditIDKeyPress", async function EditIDKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCustomerMainForm", "EditINNChange", async function EditINNChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerMainForm", "EditAccNoChange", async function EditAccNoChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerMainForm", "EditAccNoKeyPress", async function EditAccNoKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
    {
      const $t3 = L0["sender"];
      await $.wset([$t3], "SearchField", (await $.wcall([$t3], "copy", [(await $.wv([$t3], "Name", C, false)), 5, (await $.wcall([$t3], "length", [(await $.wv([$t3], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
      {
        const $t4 = (await $.wcall([$t3], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t3], "AccountGrid", C, false)), "DataSource")), "DataSet"))], C));
        if ($.truthy($.not((await $.wcall([$t3, $t4], "SearchRecord", [(await $.wv([$t3, $t4], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "Text", C, false)), $.add((await $.wv([$t3, $t4], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t3, $t4], "srFromCurrent", C, false)), (await $.wv([$t3, $t4], "srForward", C, false))])], C))))) {
          if ($.truthy($.eq((await $.wcall([$t3, $t4], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t3, $t4], "mtInformation", C, false)), [(await $.wv([$t3, $t4], "mbNo", C, false)), (await $.wv([$t3, $t4], "mbYes", C, false))], 0], C)), (await $.wv([$t3, $t4], "mrYes", C, false))))) {
            if ($.truthy($.not((await $.wcall([$t3, $t4], "SearchRecord", [(await $.wv([$t3, $t4], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "Text", C, false)), $.add((await $.wv([$t3, $t4], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t3, $t4], "srFromBeginning", C, false))])], C))))) {
              await $.stmt((await $.wcall([$t3, $t4], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t3, $t4], "mtInformation", C, false)), [(await $.wv([$t3, $t4], "mbOK", C, false))], 0], C)));
            }
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCustomerMainForm", "EditINNExit", async function EditINNExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerMainForm", "EditNAMEKeyPress", async function EditNAMEKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "EditNAME1")), "Text", (await $.mv((await $.v(C, "EditName")), "Text")));
    {
      const $t5 = (await $.v(C, "EditNAME1"));
      await $.wset([$t5], "Text", (await $.wcall([$t5], "StringReplace", [(await $.wv([$t5], "Text", C, false)), "i", "`", [(await $.wv([$t5], "rfReplaceAll", C, false))]], C)), C);
      await $.wset([$t5], "Text", (await $.wcall([$t5], "StringReplace", [(await $.wv([$t5], "Text", C, false)), "I", "`", [(await $.wv([$t5], "rfReplaceAll", C, false))]], C)), C);
      await $.wset([$t5], "Text", (await $.wcall([$t5], "StringReplace", [(await $.wv([$t5], "Text", C, false)), "İ", "`", [(await $.wv([$t5], "rfReplaceAll", C, false))]], C)), C);
      await $.wset([$t5], "Text", (await $.wcall([$t5], "StringReplace", [(await $.wv([$t5], "Text", C, false)), "I", "`", [(await $.wv([$t5], "rfReplaceAll", C, false))]], C)), C);
      await $.wset([$t5], "Text", (await $.wcall([$t5], "StringReplace", [(await $.wv([$t5], "Text", C, false)), "ı", "`", [(await $.wv([$t5], "rfReplaceAll", C, false))]], C)), C);
    }
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [(await $.v(C, "EditNAME1"))])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCustomerMainForm", "AccOrderCBChange", async function AccOrderCBChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FAccOrder", (await $.idx((await $.v(C, "AccIndexToOrderMap")), [(await $.mv((L0["sender"]), "ItemIndex"))])));
  await $.set(C, "FUseAccOrder", $.ne((await $.v(C, "AccOrder")), (await $.v(C, "aotNoOrder"))));
  await $.stmt($.call(C, "RebuildAccQuery", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerMainForm", "BuildAccQuery", async function BuildAccQuery(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.v(C, "SGetCustomerAccsQuery"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "AccCurrencyCB")), "ItemIndex")), 0))) {
    L0["result"] = (await $.call(C, "Format", ["%sAND (acc.VAL_ACC = %d)\r\n", [L0["result"], (await $.mcall((await $.v(C, "CustomerDataModule")), "CurrencyIDByIndex", [(await $.mv((await $.v(C, "AccCurrencyCB")), "ItemIndex"))]))]]));
  }
  if ($.truthy((await $.v(C, "UseAccOrder")))) {
    L0["result"] = (await $.call(C, "Format", ["%sORDER BY %s", [L0["result"], (await $.idx((await $.v(C, "AccOrderFields")), [(await $.v(C, "AccOrder"))]))]]));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomerMainForm", "RebuildAccQuery", async function RebuildAccQuery(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t6 = (await $.v(C, "ActiveAccountList"));
    await $.stmt($.wcall([$t6], "Close", [], C));
    {
      const $t7 = (await $.wv([$t6], "SQL", C, false));
      await $.wset([$t6, $t7], "Text", (await $.wv([$t6, $t7], "BuildAccQuery", C, false)), C);
    }
    await $.stmt($.wcall([$t6], "Open", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCustomerMainForm", "BuildCusQuery", async function BuildCusQuery(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.v(C, "SGetCusQuery"));
  if ($.truthy($.gt((await $.mv((await $.v(C, "scbFilial")), "ItemIndex")), 0))) {
    L0["result"] = (await $.call(C, "Format", ["%sAND ID in(select KLI_ID from ACCOUNT where FILIAL=%d)\r\n", [L0["result"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustomerDataModule")), "FilialsData")), "FieldByName", ["Id"])), "AsInteger"))]]));
  }
  { const $t8 = (await $.mv((await $.v(C, "cbOrderCus")), "ItemIndex"));
    if ($.eq($t8, 2)) {
      L0["result"] = $.add(L0["result"], "\r\norder by C.NAME");
    }
    else if ($.eq($t8, 3)) {
      L0["result"] = $.add(L0["result"], "\r\norder by C.OPEN_DAT");
    }
    else {
      L0["result"] = $.add(L0["result"], "\r\norder by C.ID");
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomerMainForm", "AccCurrencyCBChange", async function AccCurrencyCBChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "RebuildAccQuery", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerMainForm", "ICustomerMainForm_Get_Color", async function ICustomerMainForm_Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomerMainForm", "ICustomerMainForm_Get_Font", async function ICustomerMainForm_Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomerMainForm", "ICustomerMainForm__Set_Font", async function ICustomerMainForm__Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCustomerMainForm", "ICustomerMainForm_Set_Color", async function ICustomerMainForm_Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TCustomerMainForm", "ICustomerMainForm_Set_Font", async function ICustomerMainForm_Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCustomerMainForm", "CustomerGridDblClick", async function CustomerGridDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Edit")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerMainForm", "CustomerGridTitleClick", async function CustomerGridTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t9 = (await $.mv((await $.v(C, "CustomerDataModule")), "ActiveCustomerList"));
    await $.stmt((await $.wcall([$t9], "SetVariable", ["Title", (await $.wv([$t9], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t9], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCustomerMainForm", "Get_Icon", async function Get_Icon(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["iconindex"] = 14;
  await $.stmt((await $.mcall((await $.v(C, "ImageList1")), "GetIcon", [L0["iconindex"], (await $.v(C, "Icon"))])));
  L0["result"] = (await $.mv((await $.v(C, "Icon")), "Handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomerMainForm", "InfoViewExecute", async function InfoViewExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.mcall((await $.v(C, "TCustomerInfoForm")), "Create", [Self]));
    try {
      await $.stmt((await $.wcall([$t10], "ViewCustInfo", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t10], "CustomerDataModule", C, false)), "Customers")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))], C)));
    } finally {
      await $.stmt($.wcall([$t10], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerMainForm", "FilterByFilialsExecute", async function FilterByFilialsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = L0["sender"];
    await $.wset([$t11], "Checked", $.not((await $.wv([$t11], "Checked", C, false))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerMainForm", "cbOrderCusChange", async function cbOrderCusChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "CanRefresh")))) {
    await $.mcall((await $.v(C, "Refresh")), "Execute", []);
    await $.mcall((await $.v(C, "CustomerGrid")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerMainForm", "actSettingsExecute", async function actSettingsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "frmsettings"))]))))) {
    await $.set(C, "frmSettings", (await $.mcall((await $.v(C, "TfrmSettings")), "create", [Self])));
  }
  await $.mcall((await $.v(C, "frmSettings")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerMainForm", "AccountGridDblClick", async function AccountGridDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditAccNo")), "text", (await $.mv((await $.v(C, "ActiveAccountListACCNO")), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerMainForm", "ActionSpeedSearchExecute", async function ActionSpeedSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t12 = L0["sender"];
    await $.wset([$t12], "SearchField", (await $.wcall([$t12], "copy", [(await $.wv([$t12], "Name", C, false)), 5, (await $.wcall([$t12], "length", [(await $.wv([$t12], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t13 = (await $.wcall([$t12], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t12], "CustomerGrid", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t12, $t13], "SearchRecord", [(await $.wv([$t12, $t13], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t12, $t13], "Text", C, false)), $.add((await $.wv([$t12, $t13], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t12, $t13], "srFromCurrent", C, false)), (await $.wv([$t12, $t13], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t12, $t13], "MessageDlg", [$.add($.add("Axtarış sona çatdı. ", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t12, $t13], "mtInformation", C, false)), [(await $.wv([$t12, $t13], "mbNo", C, false)), (await $.wv([$t12, $t13], "mbYes", C, false))], 0], C)), (await $.wv([$t12, $t13], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t12, $t13], "SearchRecord", [(await $.wv([$t12, $t13], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t12, $t13], "Text", C, false)), $.add((await $.wv([$t12, $t13], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t12, $t13], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t12, $t13], "MessageDlg", ["Yazı tapılmadı", (await $.wv([$t12, $t13], "mtInformation", C, false)), [(await $.wv([$t12, $t13], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
