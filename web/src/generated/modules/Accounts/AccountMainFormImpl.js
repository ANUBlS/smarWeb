// Generated from AccountMainFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AccountMainFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "Accounts_TLB", "StdVcl", "ToolWin", "ComCtrls", "Grids", "DBGrids", "ActnList", "ExtCtrls", "ImgList", "Db", "OracleData", "Menus", "StdCtrls", "Buttons", "Oracle", "DBViewComboBox", "AccountPropertiesForm_Unit", "SBPlgAx50_TLB", "HintBox", "SearchCombo", "ComObj", "ComServ", "AccountAboutImpl", "sboapiDataModuleImpl", "AccountDataModuleImpl", "SBAccount", "AccTransactionsFormImpl", "StartEndDateInputImpl", "SBCore", "AccStatesImpl", "SecurityBrowserImpl", "SBSecurity"]);
  const C = [U];
  U.defClass("TAccountMainForm", "TActiveForm", {"actionlist1": {"name": "ActionList1", "type": "TActionList"}, "add": {"name": "Add", "type": "TAction"}, "close": {"name": "Close", "type": "TAction"}, "edit": {"name": "Edit", "type": "TAction"}, "refresh": {"name": "Refresh", "type": "TAction"}, "togglefilter": {"name": "ToggleFilter", "type": "TAction"}, "activeaccounts": {"name": "ActiveAccounts", "type": "TAction"}, "closedaccounts": {"name": "ClosedAccounts", "type": "TAction"}, "allaccounts": {"name": "AllAccounts", "type": "TAction"}, "usebalancefilter": {"name": "UseBalanceFilter", "type": "TAction"}, "applyfilter": {"name": "ApplyFilter", "type": "TAction"}, "resetfilter": {"name": "ResetFilter", "type": "TAction"}, "usecustomerfilter": {"name": "UseCustomerFilter", "type": "TAction"}, "usecurrencyfilter": {"name": "UseCurrencyFilter", "type": "TAction"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "filtergb": {"name": "FilterGB", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "bevel2": {"name": "Bevel2", "type": "TBevel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "radiobutton1": {"name": "RadioButton1", "type": "TRadioButton"}, "radiobutton2": {"name": "RadioButton2", "type": "TRadioButton"}, "radiobutton3": {"name": "RadioButton3", "type": "TRadioButton"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "saccnamelabel": {"name": "SAccNameLabel", "type": "TLabel"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "toolbar3": {"name": "ToolBar3", "type": "TToolBar"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "customeridsearchedit": {"name": "CustomerIDSearchEdit", "type": "TEdit"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "checkbox3": {"name": "CheckBox3", "type": "TCheckBox"}, "controlbar1": {"name": "ControlBar1", "type": "TControlBar"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "filterbutton": {"name": "FilterButton", "type": "TToolButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "dbviewcombobox1": {"name": "DBViewComboBox1", "type": "TDBViewComboBox"}, "customernamecb": {"name": "CustomerNameCB", "type": "TDBViewComboBox"}, "currencynamecb": {"name": "CurrencyNameCB", "type": "TDBViewComboBox"}, "accnosearchedit": {"name": "AccNoSearchEdit", "type": "TEdit"}, "saccsearchedit": {"name": "SAccSearchEdit", "type": "TEdit"}, "currencysnamesearchedit": {"name": "CurrencySNameSearchEdit", "type": "TEdit"}, "accnamesearchedit": {"name": "AccNameSearchEdit", "type": "TEdit"}, "amountsearchedit": {"name": "AmountSearchEdit", "type": "TEdit"}, "lamountsearchedit": {"name": "LAmountSearchEdit", "type": "TEdit"}, "opendatesearchedit": {"name": "OpenDateSearchEdit", "type": "TEdit"}, "closedatesearchedit": {"name": "CloseDateSearchEdit", "type": "TEdit"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "accsearchdirectionpopupmenu": {"name": "AccSearchDirectionPopupMenu", "type": "TPopupMenu"}, "searchforward": {"name": "SearchForward", "type": "TAction"}, "searchbackward": {"name": "SearchBackward", "type": "TAction"}, "action11": {"name": "Action11", "type": "TMenuItem"}, "action21": {"name": "Action21", "type": "TMenuItem"}, "findaccount": {"name": "FindAccount", "type": "TAction"}, "accorderpopupmenu": {"name": "AccOrderPopupMenu", "type": "TPopupMenu"}, "orderaccno": {"name": "OrderAccNo", "type": "TAction"}, "orderaccname": {"name": "OrderAccName", "type": "TAction"}, "orderaccno1": {"name": "OrderAccNo1", "type": "TMenuItem"}, "orderaccname1": {"name": "OrderAccName1", "type": "TMenuItem"}, "orderacccurrency": {"name": "OrderAccCurrency", "type": "TAction"}, "orderacccurrency1": {"name": "OrderAccCurrency1", "type": "TMenuItem"}, "accorderbutton": {"name": "AccOrderButton", "type": "TToolButton"}, "viewtransactions": {"name": "ViewTransactions", "type": "TAction"}, "accgridpopupmenu": {"name": "AccGridPopupMenu", "type": "TPopupMenu"}, "add1": {"name": "Add1", "type": "TMenuItem"}, "edit1": {"name": "Edit1", "type": "TMenuItem"}, "close1": {"name": "Close1", "type": "TMenuItem"}, "orderitem": {"name": "OrderItem", "type": "TMenuItem"}, "allaccounts1": {"name": "AllAccounts1", "type": "TMenuItem"}, "closedaccounts1": {"name": "ClosedAccounts1", "type": "TMenuItem"}, "activeaccounts1": {"name": "ActiveAccounts1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "applyfilter1": {"name": "ApplyFilter1", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "resetfilter1": {"name": "ResetFilter1", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "viewstates": {"name": "ViewStates", "type": "TAction"}, "viewstates1": {"name": "ViewStates1", "type": "TMenuItem"}, "mainmenu1": {"name": "MainMenu1", "type": "TMainMenu"}, "file1": {"name": "File1", "type": "TMenuItem"}, "edit2": {"name": "Edit2", "type": "TMenuItem"}, "file11": {"name": "File11", "type": "TMenuItem"}, "file21": {"name": "File21", "type": "TMenuItem"}, "hintpanel": {"name": "HintPanel", "type": "TPanel"}, "errorhintbox": {"name": "ErrorHintBox", "type": "THintBox"}, "n9": {"name": "N9", "type": "TMenuItem"}, "reopen": {"name": "ReOpen", "type": "TAction"}, "customaction": {"name": "CustomAction", "type": "TAction"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "checkbox4": {"name": "CheckBox4", "type": "TCheckBox"}, "filialnamecb": {"name": "FilialNameCB", "type": "TDBViewComboBox"}, "usefilialfilter": {"name": "UseFilialFilter", "type": "TAction"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "arest": {"name": "Arest", "type": "TAction"}, "saferefresh": {"name": "SafeRefresh", "type": "TAction"}, "cbaccsymbols": {"name": "CBAccSymbols", "type": "TDBViewComboBox"}, "cbuseaccflags": {"name": "CBUseAccFlags", "type": "TCheckBox"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "ltimeshow": {"name": "LTimeShow", "type": "TLabel"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "faccountpropertiesform": {"name": "FAccountPropertiesForm", "type": "TAccountPropertiesForm"}, "ffirstsearch": {"name": "FFirstSearch", "type": "Boolean"}, "fjustcreated": {"name": "FJustCreated", "type": "Boolean"}, "fevents": {"name": "FEvents", "type": "IAccountMainFormEvents"}}, {});
  U.init(async () => {
    U.const("SAccountsQuery", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("SELECT\r\n", "  acc.ID AS AccID,\r\n"), "  acc.ACC_NO AS AccNo,\r\n"), "  acc.NAME AS AccName,\r\n"), "  acc.OPEN_DAT AS OpenDate,\r\n"), "  acc.CLOSE_DAT AS CloseDate,\r\n"), "  acc.VAL_ACC AS CurrencyID,\r\n"), "  acc.bal_cn1 AS SAcc,\r\n"), "  acc.bal_cn2 AS SAcc2,\r\n"), "  acc.bal_cn3 AS SAcc3,\r\n"), "  acc.bal_cn4 AS SAcc4,\r\n"), "  acc.KLI_ID as CustomerID,\r\n"), "  acc.PAIR_ACC as PairAcc,\r\n"), "  acc.Limit as AccLimit,\r\n"), "  acc.SIM_OTCET as ReportSymbol,\r\n"), "  acc.tipacc as AccFlags ,\r\n"), "  acc.FILIAL as FilialID,\r\n"), "  acc.Insider as Insider,\r\n"), "  t.OSTAT AS Amount,\r\n"), "  t.POK_OSTAT AS LAmount,\r\n"), "  t.OBR_D AS DebitTurnover,\r\n"), "  t.OBR_K AS CreditTurnover,\r\n"), "  t.POK_OBR_D AS DebitLTurnover,\r\n"), "  t.POK_OBR_K AS CreditLTurnover,\r\n"), "  Currency.VAL_NAME AS CurrencySName,\r\n"), "  dsb.OSTAT as DayStartAmount,\r\n"), "  dsb.POK_OSTAT as DayStartLAmount,\r\n"), "  dlb.OSTAT as DelayedAmount,\r\n"), "  dlb.POK_OSTAT as DelayedLAmount,\r\n"), "  acc.sid#,\r\n"), "  acc.rowid\r\n"), "FROM\r\n"), "  ACCOUNT acc,\r\n"), "  TENOSTAT t,\r\n"), "  TEMPOST dsb,\r\n"), "  LAZYREST dlb,\r\n"), "  AVALUTE Currency\r\n"), "WHERE\r\n"), "  (t.ACC_ID = acc.ID)\r\n"), "  AND (Currency.VALUTE = acc.VAL_ACC)\r\n"), "  AND (dsb.ACC_ID = acc.ID)\r\n"), "  AND (dlb.ACC_ID = acc.ID)"));
  });
  U.method("TAccountMainForm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TAccountMainForm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TAccountMainForm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TAccountMainForm", "Initialize", null, arguments);
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
  U.method("TAccountMainForm", "MouseWheelHandler", async function MouseWheelHandler(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  {
    const $t1 = (await $.call(C, "TCMMouseWheel", [(await L0["message"].get())]));
    const $t2 = (await $.mv((await $.mv((await $.wv([$t1], "AccountDataModule", C, false)), "Accounts")), "DataSet"));
    if ($.truthy($.lt((await $.wv([$t1, $t2], "WheelDelta", C, false)), 0))) {
      await $.stmt($.wcall([$t1, $t2], "Next", [], C));
    } else {
      await $.stmt($.wcall([$t1, $t2], "Prior", [], C));
    }
  }
  await $.mcall((await $.v(C, "DBGrid1")), "Repaint", []);
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TAccountMainForm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountMainForm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountMainForm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountMainForm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountMainForm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountMainForm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountMainForm", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountMainForm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountMainForm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountMainForm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountMainForm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountMainForm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountMainForm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountMainForm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountMainForm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountMainForm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountMainForm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountMainForm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountMainForm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TAccountMainForm", "AboutBox", async function AboutBox(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "ShowAccountMainFormAbout", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TAccountMainForm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TAccountMainForm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAccountMainForm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAccountMainForm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TAccountMainForm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TAccountMainForm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TAccountMainForm", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TAccountMainForm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAccountMainForm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAccountMainForm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAccountMainForm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TAccountMainForm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TAccountMainForm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAccountMainForm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TAccountMainForm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TAccountMainForm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAccountMainForm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAccountMainForm", "BuildAccsQuery", async function BuildAccsQuery(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.v(C, "SAccountsQuery"));
  if ($.truthy((await $.mv((await $.v(C, "ApplyFilter")), "Checked")))) {
    {
      const $t3 = (await $.v(C, "AccountDataModule"));
      if ($.truthy((await $.mv((await $.wv([$t3], "ActiveAccounts", C, false)), "Checked")))) {
        await $.wset([$t3], "Result", $.add((await $.wv([$t3], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), " AND (acc.CLOSE_DAT IS NULL)\r\n"), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      } else {
        if ($.truthy((await $.mv((await $.wv([$t3], "ClosedAccounts", C, false)), "Checked")))) {
          await $.wset([$t3], "Result", $.add((await $.wv([$t3], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), " AND (acc.CLOSE_DAT IS NOT NULL)\r\n"), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
        }
      }
      if ($.truthy((await $.mv((await $.wv([$t3], "UseBalanceFilter", C, false)), "Checked")))) {
        await $.wset([$t3], "Result", $.add((await $.wv([$t3], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), (await $.wcall([$t3], "Format", [" AND (acc.BAL_CN1 = %d)\r\n", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "SAccs", C, false)), "DataSet")), "FieldByName", ["BAL_CN"])), "AsInteger"))]], C))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      }
      if ($.truthy((await $.mv((await $.wv([$t3], "UseCustomerFilter", C, false)), "Checked")))) {
        await $.wset([$t3], "Result", $.add((await $.wv([$t3], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), (await $.wcall([$t3], "Format", [" AND (acc.KLI_ID = %d)\r\n", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "Customers", C, false)), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))]], C))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      }
      if ($.truthy((await $.mv((await $.wv([$t3], "UseCurrencyFilter", C, false)), "Checked")))) {
        await $.wset([$t3], "Result", $.add((await $.wv([$t3], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), (await $.wcall([$t3], "Format", [" AND (acc.VAL_ACC = %d)\r\n", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "Currency", C, false)), "DataSet")), "FieldByName", ["VALUTE"])), "AsInteger"))]], C))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      }
      if ($.truthy((await $.mv((await $.wv([$t3], "UseFilialFilter", C, false)), "Checked")))) {
        await $.wset([$t3], "Result", $.add((await $.wv([$t3], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), (await $.wcall([$t3], "Format", [" AND (acc.FILIAL = %d)\r\n", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "Filials", C, false)), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))]], C))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      }
      if ($.truthy((await $.mv((await $.wv([$t3], "CBUseAccFlags", C, false)), "Checked")))) {
        await $.wset([$t3], "Result", $.add($.add($.add($.add($.add($.add($.add((await $.wv([$t3], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), " AND (acc.tipacc like "), "'"), "%"), (await $.idx((await $.mv((await $.mcall((await $.wv([$t3], "AccountFlagsData", C, false)), "FieldByName", ["Symbol"])), "AsString")), [1]))), "%"), "'"), "  )\r\n"), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      }
      await $.mset((await $.wv([$t3], "memo1", C, false)), "text", (await $.wv([$t3], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)));
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "OrderAccNo")), "Checked")))) {
    L0["result"] = $.add(L0["result"], "ORDER BY acc.ACC_NO\r\n");
  } else {
    if ($.truthy((await $.mv((await $.v(C, "OrderAccName")), "Checked")))) {
      L0["result"] = $.add(L0["result"], "ORDER BY acc.NAME\r\n");
    } else {
      if ($.truthy((await $.mv((await $.v(C, "OrderAccCurrency")), "Checked")))) {
        L0["result"] = $.add(L0["result"], "ORDER BY acc.VAL_ACC\r\n");
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountMainForm", "RefreshExecute", async function RefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tbeg": 0, "tend": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["tbeg"] = (await $.call(C, "Time", []));
  await $.mcall((await $.v(C, "AccountDataModuleImpl")), "Initialize", []);
  {
    const $t4 = (await $.v(C, "AccountDataModule"));
    const $t5 = (await $.wv([$t4], "AccountsData", C, false));
    await $.stmt($.wcall([$t4, $t5], "CloseAll", [], C));
    {
      const $t6 = (await $.wv([$t4, $t5], "SQL", C, false));
      await $.wset([$t4, $t5, $t6], "Text", (await $.wv([$t4, $t5, $t6], "BuildAccsQuery", C, false)), C);
    }
    await $.wset([$t4, $t5], "Session", (await $.mv((await $.wv([$t4, $t5], "sboapiDataModule", C, false)), "SBSession")), C);
    await $.stmt($.wcall([$t4, $t5], "Open", [], C));
    await $.wset([$t4, $t5], "TEnd", (await $.wcall([$t4, $t5], "Time", [], C)), { get: async () => L0["tend"], set: async (v) => { L0["tend"] = v; }, local: true });
    await $.mset((await $.wv([$t4, $t5], "LTimeShow", C, false)), "Caption", $.add($.add((await $.wcall([$t4, $t5], "TimeToStr", [(await $.wv([$t4, $t5], "TBeg", { get: async () => L0["tbeg"], set: async (v) => { L0["tbeg"] = v; }, local: true }, false))], C)), " - "), (await $.wcall([$t4, $t5], "TimeToStr", [(await $.wv([$t4, $t5], "TEnd", { get: async () => L0["tend"], set: async (v) => { L0["tend"] = v; }, local: true }, false))], C))));
    await $.mcall((await $.wv([$t4, $t5], "AccFlagsData", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ToggleFilter")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "ToggleFilterExecute", async function ToggleFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = L0["sender"];
    await $.wset([$t7], "Checked", $.not((await $.wv([$t7], "Checked", C, false))), C);
    await $.mset((await $.wv([$t7], "FilterGB", C, false)), "Visible", (await $.wv([$t7], "Checked", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "RefreshAction", async function RefreshAction(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "action"]);
  await $.mset(L0["action"], "Checked", $.eq(L0["action"], L0["sender"]));
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TAction"]});
  U.method("TAccountMainForm", "RefreshActions", async function RefreshActions(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "actions": $.copyArg(p1), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender", "actions"]);
  { const $t8 = (await $.lowHigh("high", "Actions", async () => L0["actions"]));
    L0["index"] = (await $.lowHigh("low", "Actions", async () => L0["actions"]));
    let $t9 = true;
    for (;;) {
      if (!$t9) { L0["index"] = $.succ(L0["index"], 1); }
      $t9 = false;
      if (!($.ord(L0["index"]) <= $.ord($t8))) break;
      await $.stmt((await $.call(C, "RefreshAction", [L0["sender"], (await $.idx(L0["actions"], [L0["index"]]))])));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender", "Actions"], "kind": "procedure", "ptypes": ["TObject", null]});
  U.method("TAccountMainForm", "ActiveAccountsExecute", async function ActiveAccountsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "RefreshActions", [L0["sender"], [(await $.v(C, "AllAccounts")), (await $.v(C, "ActiveAccounts")), (await $.v(C, "ClosedAccounts"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "ToggleChecked", async function ToggleChecked(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = L0["sender"];
    await $.wset([$t10], "Checked", $.not((await $.wv([$t10], "Checked", C, false))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "ToggleAndRefresh", async function ToggleAndRefresh(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ToggleChecked", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "SAccsDataAfterScroll", async function SAccsDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "SAccNameLabel")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "AccountDataModule")), "SAccsData")), "FieldByName", ["BALNAME"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "CustomerIDSearchEditChange", async function CustomerIDSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = L0["sender"];
    if ($.truthy((await $.mcall((await $.mv((await $.mv((await $.wv([$t11], "AccountDataModule", C, false)), "Customers")), "DataSet")), "Locate", [(await $.wcall([$t11], "Copy", [(await $.wv([$t11], "Name", C, false)), 9, $.sub((await $.wcall([$t11], "Length", [(await $.wv([$t11], "Name", C, false))], C)), 18)], C)), (await $.wv([$t11], "Text", C, false)), [(await $.wv([$t11], "loCaseInsensitive", C, false)), (await $.wv([$t11], "loPartialKey", C, false))]])))) {
      await $.mset((await $.wv([$t11], "CustomerNameCB", C, false)), "ItemIndex", $.sub((await $.mv((await $.mv((await $.mv((await $.wv([$t11], "AccountDataModule", C, false)), "Customers")), "DataSet")), "RecNo")), 1));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "CustomersDataAfterScroll", async function CustomersDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "AccNoSearchEditExit", async function AccNoSearchEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["clearifnotfocused"] = $.fn(async function ClearIfNotFocused(p0) {
  const L1 = {"edit": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["edit"]);
  if ($.truthy($.not((await $.mv(L1["edit"], "Focused"))))) {
    await $.mcall(L1["edit"], "Clear", []);
  }
  return L1.result;
});
  await $.stmt((await $.callv(L0["clearifnotfocused"], [(await $.v(C, "AccNoSearchEdit"))])));
  await $.stmt((await $.callv(L0["clearifnotfocused"], [(await $.v(C, "SAccSearchEdit"))])));
  await $.stmt((await $.callv(L0["clearifnotfocused"], [(await $.v(C, "CurrencySNameSearchEdit"))])));
  await $.stmt((await $.callv(L0["clearifnotfocused"], [(await $.v(C, "AccNameSearchEdit"))])));
  await $.stmt((await $.callv(L0["clearifnotfocused"], [(await $.v(C, "AccNoSearchEdit"))])));
  await $.stmt((await $.callv(L0["clearifnotfocused"], [(await $.v(C, "AccNoSearchEdit"))])));
  await $.stmt((await $.callv(L0["clearifnotfocused"], [(await $.v(C, "AccNoSearchEdit"))])));
  await $.stmt((await $.callv(L0["clearifnotfocused"], [(await $.v(C, "AccNoSearchEdit"))])));
  await $.stmt((await $.callv(L0["clearifnotfocused"], [(await $.v(C, "AccNoSearchEdit"))])));
  await $.stmt((await $.callv(L0["clearifnotfocused"], [(await $.v(C, "AccNoSearchEdit"))])));
  await $.mcall((await $.v(C, "ErrorHintBox")), "Hide", []);
  await $.set(C, "FFirstSearch", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "FindAccountExecute", async function FindAccountExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchoptions": null, "fieldname": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srPartialMatch"))];
  if ($.truthy((await $.mv((await $.v(C, "SearchForward")), "Checked")))) {
    await $.stmt((await $.call(C, "Include", [$.ref(async () => L0["searchoptions"], async ($t12) => { L0["searchoptions"] = $t12; }), (await $.v(C, "srForward"))])));
  } else {
    await $.stmt((await $.call(C, "Include", [$.ref(async () => L0["searchoptions"], async ($t13) => { L0["searchoptions"] = $t13; }), (await $.v(C, "srBackward"))])));
  }
  if ($.truthy((await $.v(C, "FFirstSearch")))) {
    await $.stmt((await $.call(C, "Include", [$.ref(async () => L0["searchoptions"], async ($t14) => { L0["searchoptions"] = $t14; }), (await $.v(C, "srFromBeginning"))])));
  } else {
    await $.stmt((await $.call(C, "Include", [$.ref(async () => L0["searchoptions"], async ($t15) => { L0["searchoptions"] = $t15; }), (await $.v(C, "srFromCurrent"))])));
  }
  {
    const $t16 = (await $.mv((await $.v(C, "AccountDataModule")), "AccountsData"));
    const $t17 = (await $.wv([$t16], "FindFocusedAccSearchEdit", C, false));
    if ($.truthy((await $.and_(($.ne((await $.wv([$t16, $t17], "Text", C, false)), "")), async () => (await $.wv([$t16, $t17], "Focused", C, false)))))) {
      await $.wset([$t16, $t17], "FieldName", (await $.wcall([$t16, $t17], "Copy", [(await $.wv([$t16, $t17], "Name", C, false)), 1, $.sub((await $.wcall([$t16, $t17], "Length", [(await $.wv([$t16, $t17], "Name", C, false))], C)), 10)], C)), { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true });
      if ($.truthy($.not((await $.wcall([$t16, $t17], "SearchRecord", [(await $.wv([$t16, $t17], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false)), (await $.wv([$t16, $t17], "Text", C, false)), (await $.wv([$t16, $t17], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false))], C))))) {
        await $.stmt((await $.mcall((await $.wv([$t16, $t17], "ErrorHintBox", C, false)), "ShowMessage", [(await $.wcall([$t16, $t17], "Format", ["Hesab tapılmıyıb: %s=%s", [(await $.mv((await $.wcall([$t16, $t17], "FieldByName", [(await $.wv([$t16, $t17], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false))], C)), "DisplayName")), (await $.wv([$t16, $t17], "Text", C, false))]], C))])));
      }
    }
  }
  await $.set(C, "FFirstSearch", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "FindFocusedAccSearchEdit", async function FindFocusedAccSearchEdit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null, "control": null};
  L0["control"] = (await $.v(C, "ActiveControl"));
  if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_(($.eq(L0["control"], (await $.v(C, "AccNoSearchEdit")))), async () => ($.eq(L0["control"], (await $.v(C, "AccNameSearchEdit")))))), async () => ($.eq(L0["control"], (await $.v(C, "CurrencySNameSearchEdit")))))), async () => ($.eq(L0["control"], (await $.v(C, "SAccSearchEdit")))))), async () => ($.eq(L0["control"], (await $.v(C, "AmountSearchEdit")))))), async () => ($.eq(L0["control"], (await $.v(C, "LAmountSearchEdit")))))), async () => ($.eq(L0["control"], (await $.v(C, "OpenDateSearchEdit")))))), async () => ($.eq(L0["control"], (await $.v(C, "CloseDateSearchEdit")))))))) {
    L0["result"] = L0["control"];
  } else {
    L0["result"] = null;
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountMainForm", "FindAccountUpdate", async function FindAccountUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t18 = L0["sender"];
    await $.wset([$t18], "Enabled", $.ne((await $.wv([$t18], "FindFocusedAccSearchEdit", C, false)), null), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "SearchForwardExecute", async function SearchForwardExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "RefreshActions", [L0["sender"], [(await $.v(C, "SearchForward")), (await $.v(C, "SearchBackward"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "OrderAccNoExecute", async function OrderAccNoExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "RefreshActions", [L0["sender"], [(await $.v(C, "OrderAccNo")), (await $.v(C, "OrderAccName")), (await $.v(C, "OrderAccCurrency"))]])));
  await $.mcall((await $.v(C, "Refresh")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "AddExecute", async function AddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "FAccountPropertiesForm")), "New")))) {
    await $.mcall((await $.v(C, "SafeRefresh")), "Execute", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FJustCreated", true);
  await $.mset((await $.v(C, "CBAccSymbols")), "ItemIndex", 0);
  await $.set(C, "FAccountPropertiesForm", (await $.mcall((await $.v(C, "TAccountPropertiesForm")), "Create", [Self])));
  await $.mcall((await $.v(C, "Refresh")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "EditExecute", async function EditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "FAccountPropertiesForm")), "Edit")))) {
    await $.mcall((await $.v(C, "SafeRefresh")), "Execute", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "CurrencyNameCBChange", async function CurrencyNameCBChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "CloseExecute", async function CloseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.mv((await $.mv((await $.v(C, "AccountDataModule")), "Accounts")), "DataSet"));
    if ($.truthy((await $.or_(($.ne((await $.mv((await $.wcall([$t19], "FieldByName", ["Amount"], C)), "AsCurrency")), 0)), async () => ($.ne((await $.mv((await $.wcall([$t19], "FieldByName", ["LAmount"], C)), "AsCurrency")), 0)))))) {
      await $.stmt((await $.mcall((await $.wv([$t19], "ErrorHintBox", C, false)), "ShowMessage", ["You can not close account, if they have positive balance"])));
    } else {
      if ($.truthy($.eq((await $.wcall([$t19], "MessageDlg", ["Are you sure you want to close this account?", (await $.wv([$t19], "mtConfirmation", C, false)), [(await $.wv([$t19], "mbYes", C, false)), (await $.wv([$t19], "mbNo", C, false))], 0], C)), (await $.wv([$t19], "mrYes", C, false))))) {
        await $.stmt((await $.wcall([$t19], "Sb_CloseAccount", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t19], "AccountDataModule", C, false)), "Accounts")), "DataSet")), "FieldByName", ["AccID"])), "AsInteger"))], C)));
        await $.mcall((await $.mv(Self, "SafeRefresh")), "Execute", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Edit")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "ViewTransactionsExecute", async function ViewTransactionsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "astartdate": 0, "aenddate": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t20 = (await $.mcall((await $.v(C, "TStartEndDateInputForm")), "Create", [Self]));
    try {
      await $.wset([$t20], "StartDate", (await $.wcall([$t20], "Sb_GetSystemDate", [], C)), C);
      await $.wset([$t20], "EndDate", (await $.wv([$t20], "StartDate", C, false)), C);
      if ($.truthy($.not((await $.wv([$t20], "Execute", C, false))))) {
        return L0.result;
      }
      await $.wset([$t20], "AStartDate", (await $.wv([$t20], "StarTDate", C, false)), { get: async () => L0["astartdate"], set: async (v) => { L0["astartdate"] = v; }, local: true });
      await $.wset([$t20], "AEndDate", (await $.wv([$t20], "EndDate", C, false)), { get: async () => L0["aenddate"], set: async (v) => { L0["aenddate"] = v; }, local: true });
    } finally {
      await $.stmt($.wcall([$t20], "Release", [], C));
    }
  }
  {
    const $t21 = (await $.mcall((await $.v(C, "TAccTransactionsForm")), "Create", [Self]));
    try {
      await $.wset([$t21], "StartDate", (await $.wv([$t21], "AStartDate", { get: async () => L0["astartdate"], set: async (v) => { L0["astartdate"] = v; }, local: true }, false)), C);
      await $.wset([$t21], "EndDate", (await $.wv([$t21], "AEndDate", { get: async () => L0["aenddate"], set: async (v) => { L0["aenddate"] = v; }, local: true }, false)), C);
      await $.stmt($.wcall([$t21], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t21], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "DrawMenuItem", async function DrawMenuItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t22 = L0["acanvas"];
    const $t23 = (await $.wv([$t22], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t24 = (await $.wv([$t22, $t23], "Font", C, false));
      await $.wset([$t22, $t23, $t24], "Name", "Azl Sans Serif", C);
      await $.wset([$t22, $t23, $t24], "Charset", (await $.wv([$t22, $t23, $t24], "RUSSIAN_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t22, $t23, $t24], "Default", C, false)))) {
        await $.wset([$t22, $t23, $t24], "Style", [(await $.wv([$t22, $t23, $t24], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t22, $t23], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t22, $t23], "Pen", C, false)), "Color", (await $.wv([$t22, $t23], "clBlack", C, false)));
      await $.wset([$t22, $t23], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t22, $t23], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t22, $t23], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t22, $t23], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t22, $t23], "MoveTo", [(await $.mv((await $.wv([$t22, $t23], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t22, $t23], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t22, $t23], "LineTo", [(await $.mv((await $.wv([$t22, $t23], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t22, $t23], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t22, $t23], "inc", [$.ref(async () => (await $.wv([$t22, $t23], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t25) => { await $.wset([$t22, $t23], "LineBottom", $t25, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t22, $t23], "Pen", C, false)), "Color", (await $.wv([$t22, $t23], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t22, $t23], "MoveTo", [(await $.mv((await $.wv([$t22, $t23], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t22, $t23], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t22, $t23], "LineTo", [(await $.mv((await $.wv([$t22, $t23], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t22, $t23], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t22, $t23], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t22, $t23], "Brush", C, false)), "Color", (await $.wv([$t22, $t23], "clNavy", C, false)));
      } else {
        await $.mset((await $.wv([$t22, $t23], "Brush", C, false)), "Color", (await $.wv([$t22, $t23], "clBtnFace", C, false)));
      }
      await $.wset([$t22, $t23], "Bar", (await $.wv([$t22, $t23], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t22, $t23], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t22, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t26) => { await $.mset((await $.wv([$t22, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t26); }), 22], C)));
      await $.stmt((await $.wcall([$t22, $t23], "FillRect", [(await $.wv([$t22, $t23], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t22, $t23], "TextOut", [$.add((await $.mv((await $.wv([$t22, $t23], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t22, $t23], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t22, $t23], "Caption", C, false))], C)));
    }
    await $.wset([$t22, $t23], "SText", (await $.wcall([$t22, $t23], "ShortCutToText", [(await $.wv([$t22, $t23], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t22, $t23], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t22, $t23], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t22, $t23], "TextWidth", [(await $.wv([$t22, $t23], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t22, $t23], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t22, $t23], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t22, $t23], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t27 = (await $.wv([$t22, $t23], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t22, $t23, $t27], "Assigned", [(await $.wv([$t22, $t23, $t27], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t22, $t23, $t27], "Checked", C, false)))) {
            await $.mset((await $.wv([$t22, $t23, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t22, $t23, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t22, $t23, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t22, $t23, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t22, $t23, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t22, $t23, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t22, $t23, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t22, $t23, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t22, $t23, $t27], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t22, $t23, $t27], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t22, $t23, $t27], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t22, $t23, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t22, $t23, $t27], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t22, $t23, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t28) => { await $.mset((await $.wv([$t22, $t23, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t28); }), 2], C)));
            await $.stmt((await $.wcall([$t22, $t23, $t27], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t22, $t23, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t29) => { await $.mset((await $.wv([$t22, $t23, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t29); }), 2], C)));
            await $.stmt((await $.wcall([$t22, $t23, $t27], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t22, $t23, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t30) => { await $.mset((await $.wv([$t22, $t23, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t30); }), 2], C)));
            await $.stmt((await $.wcall([$t22, $t23, $t27], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t22, $t23, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t31) => { await $.mset((await $.wv([$t22, $t23, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t31); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t22, $t23, $t27], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t22, $t23, $t27], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t22, $t23, $t27], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t22, $t23, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t22, $t23, $t27], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t22, $t23, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t32) => { await $.mset((await $.wv([$t22, $t23, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t32); }), 1], C)));
            await $.stmt((await $.wcall([$t22, $t23, $t27], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t22, $t23, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t33) => { await $.mset((await $.wv([$t22, $t23, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t33); }), 1], C)));
            await $.stmt((await $.wcall([$t22, $t23, $t27], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t22, $t23, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t34) => { await $.mset((await $.wv([$t22, $t23, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t34); }), 1], C)));
            await $.stmt((await $.wcall([$t22, $t23, $t27], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t22, $t23, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t35) => { await $.mset((await $.wv([$t22, $t23, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t35); }), 1], C)));
            if ($.truthy((await $.wv([$t22, $t23, $t27], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t22, $t23, $t27], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t22, $t23, $t27], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t22, $t23, $t27], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t22, $t23, $t27], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t22, $t23, $t27], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t22, $t23, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t22, $t23, $t27], "Images", C, false)), "Draw", [(await $.wv([$t22, $t23, $t27], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t22, $t23, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t22, $t23, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t22, $t23, $t27], "ImageIndex", C, false)), (await $.wv([$t22, $t23, $t27], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TAccountMainForm", "ViewStatesExecute", async function ViewStatesExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t36 = (await $.mcall((await $.v(C, "TAccStatesForm")), "Create", [Self]));
    try {
      await $.stmt($.wcall([$t36], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t36], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "IAccountMainForm_Get_Color", async function IAccountMainForm_Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountMainForm", "IAccountMainForm_Get_Font", async function IAccountMainForm_Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountMainForm", "IAccountMainForm_Set_Font", async function IAccountMainForm_Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TAccountMainForm", "IAccountMainForm_Set_Color", async function IAccountMainForm_Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TAccountMainForm", "IAccountMainForm__Set_Font", async function IAccountMainForm__Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TAccountMainForm", "Get_SharedMenu", async function Get_SharedMenu(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mv((await $.v(C, "MainMenu1")), "Handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountMainForm", "CloseUpdate", async function CloseUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t37 = L0["sender"];
    await $.wset([$t37], "Enabled", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t37], "AccountDataModule", C, false)), "Accounts")), "DataSet")), "FieldByName", ["CloseDate"])), "IsNull")), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "ErrorHintBoxAfterMessage", async function ErrorHintBoxAfterMessage(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "HintPanel")), "Visible", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "ErrorHintBoxAfterHide", async function ErrorHintBoxAfterHide(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "HintPanel")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "Get_Icon", async function Get_Icon(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["iconindex"] = 13;
  await $.stmt((await $.mcall((await $.v(C, "ImageList1")), "GetIcon", [L0["iconindex"], (await $.v(C, "Icon"))])));
  L0["result"] = (await $.mv((await $.v(C, "Icon")), "Handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountMainForm", "CustomActionUpdate", async function CustomActionUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "ArestExecute", async function ArestExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t38 = L0["sender"];
    await $.wset([$t38], "Checked", $.not(((await $.wv([$t38], "Checked", C, false)))), C);
  }
  await $.mcall((await $.v(C, "DBGrid1")), "Repaint", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "SafeRefreshExecute", async function SafeRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "savedpos": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t39 = (await $.v(C, "AccountDataModule"));
    const $t40 = (await $.wv([$t39], "AccountsData", C, false));
    await $.wset([$t39, $t40], "SavedPos", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["AccID"], C)), "AsInteger")), { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true });
    await $.stmt($.wcall([$t39, $t40], "Refresh", [], C));
    await $.stmt((await $.wcall([$t39, $t40], "Locate", ["AccID", (await $.wv([$t39, $t40], "SavedPos", { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true }, false)), []], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "LTimeShowClick", async function LTimeShowClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "memo1")), "BringToFront", []);
  await $.mset((await $.v(C, "memo1")), "visible", $.not((await $.mv((await $.v(C, "memo1")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t41 = (await $.v(C, "AccountDataModule"));
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t41], "AccountsData", C, false)), "SQL")), "Assign", [(await $.mv((await $.wv([$t41], "Memo1", C, false)), "Lines"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountMainForm", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tbeg": 0, "tend": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["tbeg"] = (await $.call(C, "Time", []));
  await $.mcall((await $.v(C, "AccountDataModuleImpl")), "Initialize", []);
  {
    const $t42 = (await $.v(C, "AccountDataModule"));
    const $t43 = (await $.wv([$t42], "AccountsData", C, false));
    await $.stmt($.wcall([$t42, $t43], "CloseAll", [], C));
    {
      const $t44 = (await $.wv([$t42, $t43], "SQL", C, false));
      await $.wset([$t42, $t43, $t44], "Text", (await $.mv((await $.mv((await $.wv([$t42, $t43, $t44], "Memo1", C, false)), "Lines")), "Text")), C);
    }
    await $.wset([$t42, $t43], "Session", (await $.mv((await $.wv([$t42, $t43], "sboapiDataModule", C, false)), "SBSession")), C);
    await $.stmt($.wcall([$t42, $t43], "Open", [], C));
    await $.wset([$t42, $t43], "TEnd", (await $.wcall([$t42, $t43], "Time", [], C)), { get: async () => L0["tend"], set: async (v) => { L0["tend"] = v; }, local: true });
    await $.mset((await $.wv([$t42, $t43], "LTimeShow", C, false)), "Caption", $.add($.add((await $.wcall([$t42, $t43], "TimeToStr", [(await $.wv([$t42, $t43], "TBeg", { get: async () => L0["tbeg"], set: async (v) => { L0["tbeg"] = v; }, local: true }, false))], C)), " - "), (await $.wcall([$t42, $t43], "TimeToStr", [(await $.wv([$t42, $t43], "TEnd", { get: async () => L0["tend"], set: async (v) => { L0["tend"] = v; }, local: true }, false))], C))));
    await $.mcall((await $.wv([$t42, $t43], "AccFlagsData", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
