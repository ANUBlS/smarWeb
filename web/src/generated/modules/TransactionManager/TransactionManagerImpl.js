// Generated from TransactionManagerImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TransactionManagerImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ActiveX", "AxCtrls", "TransactionManager_TLB", "StdVcl", "ExtCtrls", "StdCtrls", "ComCtrls", "ToolWin", "Grids", "DBGrids", "ImgList", "ActnList", "DBCtrls", "OracleData", "Db", "DBTables", "Mask", "Menus", "SBPlgAx50_TLB", "CheckLst", "Buttons", "ComObj", "ComServ", "TransactionDataModuleUnit", "TransactionPropertiesImpl", "TransactionDestinationImpl", "CommissionImpl"]);
  const C = [U];
  U.const("omInsert", 0);
  U.const("omEdit", 1);
  U.const("omCommission", 2);
  U.const("tsCommit", 0);
  U.const("tsDelete", 1);
  U.const("tsReject", 2);
  U.defClass("TTransactionManagerForm", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panelsettings": {"name": "PanelSettings", "type": "TGroupBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "dtpcurrentdate": {"name": "DTPCurrentDate", "type": "TDateTimePicker"}, "paneldestination": {"name": "PanelDestination", "type": "TPanel"}, "panelsearch": {"name": "PanelSearch", "type": "TPanel"}, "gridtransactions": {"name": "GridTransactions", "type": "TDBGrid"}, "editid": {"name": "EditID", "type": "TEdit"}, "editdebitaccno": {"name": "EditDEBITACCNO", "type": "TEdit"}, "editcreditaccno": {"name": "EditCREDITACCNO", "type": "TEdit"}, "editdebitamount": {"name": "EditDEBITAMOUNT", "type": "TEdit"}, "editcreditamount": {"name": "EditCREDITAMOUNT", "type": "TEdit"}, "editlamount": {"name": "EditLAMOUNT", "type": "TEdit"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "actionlist": {"name": "ActionList", "type": "TActionList"}, "actionrefresh": {"name": "ActionRefresh", "type": "TAction"}, "dbtext1": {"name": "DBText1", "type": "TDBText"}, "actioninsert": {"name": "ActionInsert", "type": "TAction"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "dbeditassignment": {"name": "DBEditAssignment", "type": "TDBEdit"}, "dbeditrejectreason": {"name": "DBEditRejectReason", "type": "TDBEdit"}, "actiondelete": {"name": "ActionDelete", "type": "TAction"}, "actionedit": {"name": "ActionEdit", "type": "TAction"}, "buttonfilter": {"name": "ButtonFilter", "type": "TToolButton"}, "actionshowfilter": {"name": "ActionShowFilter", "type": "TAction"}, "actionspeedsearch": {"name": "ActionSpeedSearch", "type": "TAction"}, "actionselectall": {"name": "ActionSelectAll", "type": "TAction"}, "popupmenu": {"name": "PopupMenu", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "nfirst": {"name": "NFirst", "type": "TMenuItem"}, "nlast": {"name": "NLast", "type": "TMenuItem"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "actioncommit": {"name": "ActionCommit", "type": "TAction"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "cbdebetfilial": {"name": "CBDebetFilial", "type": "TCheckBox"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "cboperator": {"name": "CBOperator", "type": "TCheckBox"}, "dblookup2": {"name": "DBLookup2", "type": "TDBLookupComboBox"}, "dblookup3": {"name": "DBLookup3", "type": "TDBLookupComboBox"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "cbcreditfilial": {"name": "CBCreditFilial", "type": "TCheckBox"}, "dblookup1": {"name": "DBLookup1", "type": "TDBLookupComboBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "clboperationtypes": {"name": "CLBOperationTypes", "type": "TCheckListBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "clbcurrency": {"name": "CLBCurrency", "type": "TCheckListBox"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "cbimmediatelyrefresh": {"name": "CBImmediatelyRefresh", "type": "TCheckBox"}, "actionloadfilters": {"name": "ActionLoadFilters", "type": "TAction"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "cbdelayed": {"name": "CBDelayed", "type": "TCheckBox"}, "cbcommited": {"name": "CBCommited", "type": "TCheckBox"}, "cbrejected": {"name": "CBRejected", "type": "TCheckBox"}, "actionfilter": {"name": "ActionFilter", "type": "TAction"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbtext2": {"name": "DBText2", "type": "TDBText"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "n9": {"name": "N9", "type": "TMenuItem"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "actionstepcommit": {"name": "ActionStepCommit", "type": "TAction"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "actionreject": {"name": "ActionReject", "type": "TAction"}, "actioncommission": {"name": "ActionCommission", "type": "TAction"}, "n10": {"name": "N10", "type": "TMenuItem"}, "popuprefresh": {"name": "PopupRefresh", "type": "TPopupMenu"}, "nfullrefresh": {"name": "NFullRefresh", "type": "TMenuItem"}, "fevents": {"name": "FEvents", "type": "ITransactionManagerFormEvents"}, "fcurrentdate": {"name": "FCurrentDate", "type": "TDateTime"}, "requiredorderbyfield": {"name": "RequiredOrderByField", "type": "variant"}, "operationmode": {"name": "OperationMode", "type": "TOperationMode"}, "lasttransactionid": {"name": "LastTransactionID", "type": "Longint"}, "transactionstate": {"name": "TransactionState", "type": "TTransactionState"}, "sik": {"name": "sik", "type": "boolean"}}, {"currentdate": {"name": "CurrentDate", "read": "FCurrentDate", "write": "SetCurrentDate"}});
  U.init(async () => {
    U.const("tsDelayed", 1);
    U.const("tsCommited", 2);
    U.const("tsRejected", 3);
    U.const("BooleanPrefix", " AND ");
    U.const("cs_CommitInformation", $.add($.add($.add($.add("Ümumi əməliyyatlar: %d", "\r"), "Təsdiqlənmiş əməliyyatlar: %d"), "\r"), "Təsdiqlənməmiş əməliyyatlar: %d"));
    U.const("cs_RejectInformation", $.add($.add($.add($.add("Ümumi əməliyyatlar: %d", "\r"), "İnkaredilmiş əməliyyatlar: %d"), "\r"), "İnkaredilməmiş əməliyyatlar: %d"));
    U.var_("TransactionManagerForm", null, "TTransactionManagerForm");
    U.var_("OperationIDs", null, "TStringList");
    U.var_("CurrencyIDs", null, "TStringList");
  });
  U.method("TTransactionManagerForm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TTransactionManagerForm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TTransactionManagerForm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TTransactionManagerForm", "Initialize", null, arguments);
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
  U.method("TTransactionManagerForm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionManagerForm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionManagerForm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionManagerForm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionManagerForm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionManagerForm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionManagerForm", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionManagerForm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionManagerForm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionManagerForm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionManagerForm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionManagerForm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionManagerForm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionManagerForm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionManagerForm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionManagerForm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionManagerForm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionManagerForm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionManagerForm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TTransactionManagerForm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TTransactionManagerForm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTransactionManagerForm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTransactionManagerForm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TTransactionManagerForm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TTransactionManagerForm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TTransactionManagerForm", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TTransactionManagerForm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTransactionManagerForm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTransactionManagerForm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTransactionManagerForm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TTransactionManagerForm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TTransactionManagerForm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTransactionManagerForm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TTransactionManagerForm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TTransactionManagerForm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTransactionManagerForm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTransactionManagerForm", "Get_Icon", async function Get_Icon(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["imageindex"] = 0;
  await $.stmt((await $.mcall((await $.v(C, "ImageList")), "GetIcon", [L0["imageindex"], (await $.v(C, "Icon"))])));
  L0["result"] = (await $.mv((await $.v(C, "Icon")), "Handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionManagerForm", "SetCurrentDate", async function SetCurrentDate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FCurrentDate", L0["value"]);
  await $.mset((await $.v(C, "DTPCurrentDate")), "DateTime", (await $.call(C, "Int", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TDateTime"]});
  U.method("TTransactionManagerForm", "SetAddress", async function SetAddress(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.not(((await $.call(C, "Assigned", [(await $.v(C, "OperationIDs"))])))))) {
    await $.set(C, "OperationIDs", (await $.mv((await $.v(C, "TStringList")), "Create")));
  } else {
    await $.mcall((await $.v(C, "OperationIDs")), "Clear", []);
  }
  if ($.truthy($.not(((await $.call(C, "Assigned", [(await $.v(C, "CurrencyIDs"))])))))) {
    await $.set(C, "CurrencyIDs", (await $.mv((await $.v(C, "TStringList")), "Create")));
  } else {
    await $.mcall((await $.v(C, "CurrencyIDs")), "Clear", []);
  }
  await $.mset((await $.v(C, "CLBOperationTypes")), "Tag", (await $.call(C, "Integer", [(await $.ref_(C, "OperationIDs"))])));
  await $.mset((await $.v(C, "CLBCurrency")), "Tag", (await $.call(C, "Integer", [(await $.ref_(C, "CurrencyIDs"))])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionManagerForm", "EditIDExit", async function EditIDExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "MouseWheelHandler", async function MouseWheelHandler(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TTransactionManagerForm", "MouseWheelHandler", null, arguments);
  if ($.truthy((await $.mv((await $.v(C, "GridTransactions")), "Focused")))) {
    await $.mcall((await $.mv((await $.v(C, "GridTransactions")), "SelectedRows")), "Clear", []);
    {
      const $t1 = (await $.call(C, "TCMMouseWheel", [(await L0["message"].get())]));
      const $t2 = (await $.mv((await $.mv((await $.wv([$t1], "GridTransactions", C, false)), "DataSource")), "DataSet"));
      if ($.truthy($.lt((await $.wv([$t1, $t2], "WheelDelta", C, false)), 0))) {
        await $.stmt($.wcall([$t1, $t2], "Next", [], C));
      } else {
        await $.stmt($.wcall([$t1, $t2], "Prior", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TTransactionManagerForm", "InitProperties", async function InitProperties(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "TransactionEditForm"))]))))) {
    await $.set(C, "TransactionEditForm", (await $.mcall((await $.v(C, "TTransactionEditForm")), "Create", [Self])));
  }
  try {
    await $.mcall((await $.v(C, "TransactionEditForm")), "ShowModal", []);
  } finally {
    await $.mcall((await $.v(C, "TransactionEditForm")), "Release", []);
    await $.set(C, "TransactionEditForm", null);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionManagerForm", "GotoTransaction", async function GotoTransaction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"id": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["id"]);
  {
    const $t3 = (await $.mv((await $.v(C, "TransactionDataModule")), "Transactions"));
    await $.stmt((await $.wcall([$t3], "Locate", ["ID", (await $.wv([$t3], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), []], C)));
  }
  return L0.result;
}, {"params": ["ID"], "kind": "procedure", "ptypes": ["Longint"]});
  U.method("TTransactionManagerForm", "Focus", async function Focus(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.mv((await $.v(C, "GridTransactions")), "CanFocus")))) {
    await $.mcall((await $.v(C, "GridTransactions")), "SetFocus", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionManagerForm", "ActionRefreshExecute", async function ActionRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "kis": 0, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.mv((await $.v(C, "TransactionDataModule")), "Transactions"));
    try {
      await $.wset([$t4], "TransactionID", (await $.mv((await $.wcall([$t4], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
      await $.stmt($.wcall([$t4], "Close", [], C));
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t4], "TransactionDataModule", C, false)), "Transactions")), "SetVariable", ["TransactionDate", (await $.wv([$t4], "CurrentDate", C, false))])));
      await $.stmt($.wcall([$t4], "Open", [], C));
      if ($.truthy($.ne((await $.wv([$t4], "TransactionState", C, false)), (await $.wv([$t4], "tsDelete", C, false))))) {
        await $.stmt((await $.wcall([$t4], "GotoTransaction", [(await $.wv([$t4], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))], C)));
      }
      await $.wset([$t4], "TransactionState", (await $.wv([$t4], "tsDelete", C, false)), C);
    } finally {
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "DTPCurrentDateChange", async function DTPCurrentDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CurrentDate", (await $.call(C, "Int", [(await $.mv((L0["sender"]), "DateTime"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "TransactionManagerForm", Self);
  await $.set(C, "TransactionDataModule", (await $.mcall((await $.v(C, "TTransactionDataModule")), "Create", [Self])));
  await $.set(C, "TransactionDestinationForm", (await $.mcall((await $.v(C, "TTransactionDestinationForm")), "Create", [Self])));
  {
    const $t5 = (await $.v(C, "TransactionDataModule"));
    await $.wset([$t5], "CurrentDate", (await $.mv((await $.mcall((await $.wv([$t5], "Sysdat", C, false)), "FieldByName", ["tek_dat"])), "AsDateTime")), C);
  }
  await $.set(C, "TransactionState", (await $.v(C, "tsDelete")));
  await $.stmt((await $.call(C, "ActionRefreshExecute", [L0["sender"]])));
  await $.stmt($.call(C, "SetAddress", []));
  await $.mcall((await $.v(C, "ActionLoadFilters")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActionInsertExecute", async function ActionInsertExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "OperationMode", (await $.v(C, "omInsert")));
  {
    const $t6 = (await $.v(C, "TransactionDataModule"));
    await $.mcall((await $.wv([$t6], "Transactions", C, false)), "Insert", []);
  }
  await $.stmt($.call(C, "InitProperties", []));
  await $.mcall((await $.mv((await $.v(C, "GridTransactions")), "SelectedRows")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "GridTransactionsTitleClick", async function GridTransactionsTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": '', "sortposition": 0};
  await $.fixArgs(L0, ["column"]);
  L0["sortposition"] = 100;
  if ($.truthy((await $.or_(((await $.mv((await $.mv((await $.mv((await $.v(C, "GridTransactions")), "DataSource")), "DataSet")), "IsEmpty"))), async () => ($.eq((await $.mv(L0["column"], "FieldName")), (await $.v(C, "EmptyStr")))))))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t7 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "GridTransactions")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t7], "SortPosition", (await $.mcall((await $.wv([$t7], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t7], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t7], "Refresh", [], C));
    } finally {
      { const $t8 = await $.iset((await $.wv([$t7], "SQL", C, false)), [(await $.wv([$t7], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t7], "EmptyStr", C, false))); if ($t8 !== undefined) { await $.wset([$t7], "SQL", $t8, C); } }
      await $.mset((await $.wv([$t7], "Screen", C, false)), "Cursor", (await $.wv([$t7], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TTransactionManagerForm", "ActionEditExecute", async function ActionEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "OperationMode", (await $.v(C, "omEdit")));
  {
    const $t9 = (await $.v(C, "TransactionDataModule"));
    await $.mcall((await $.wv([$t9], "Transactions", C, false)), "Edit", []);
  }
  await $.stmt($.call(C, "InitProperties", []));
  await $.mcall((await $.mv((await $.v(C, "GridTransactions")), "SelectedRows")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActionSpeedSearchExecute", async function ActionSpeedSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t10 = L0["sender"];
    await $.wset([$t10], "SearchField", (await $.wcall([$t10], "copy", [(await $.wv([$t10], "Name", C, false)), 5, (await $.wcall([$t10], "length", [(await $.wv([$t10], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t11 = (await $.wcall([$t10], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t10], "GridTransactions", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t10, $t11], "SearchRecord", [(await $.wv([$t10, $t11], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t10, $t11], "Text", C, false)), $.add((await $.wv([$t10, $t11], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t10, $t11], "srFromCurrent", C, false)), (await $.wv([$t10, $t11], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t10, $t11], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t10, $t11], "mtInformation", C, false)), [(await $.wv([$t10, $t11], "mbNo", C, false)), (await $.wv([$t10, $t11], "mbYes", C, false))], 0], C)), (await $.wv([$t10, $t11], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t10, $t11], "SearchRecord", [(await $.wv([$t10, $t11], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t10, $t11], "Text", C, false)), $.add((await $.wv([$t10, $t11], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t10, $t11], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t10, $t11], "MessageDlg", ["Yazı tapılmayıb!", (await $.wv([$t10, $t11], "mtInformation", C, false)), [(await $.wv([$t10, $t11], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "EditIDKeyPress", async function EditIDKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionManagerForm", "ActionSelectAllExecute", async function ActionSelectAllExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (await $.v(C, "GridTransactions"));
    const $t13 = (await $.wv([$t12], "SelectedRows", C, false));
    const $t14 = (await $.mv((await $.wv([$t12, $t13], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t12, $t13, $t14], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t12, $t13, $t14], "First", [], C));
      while ($.truthy($.not((await $.wv([$t12, $t13, $t14], "Eof", C, false))))) {
        await $.wset([$t12, $t13, $t14], "CurrentRowSelected", (await $.wv([$t12, $t13, $t14], "True", C, false)), C);
        await $.stmt($.wcall([$t12, $t13, $t14], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t12, $t13, $t14], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "N2DrawItem", async function N2DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t15 = L0["acanvas"];
    const $t16 = (await $.wv([$t15], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t17 = (await $.wv([$t15, $t16], "Font", C, false));
      await $.wset([$t15, $t16, $t17], "Name", "Azl Sans Serif", C);
      await $.wset([$t15, $t16, $t17], "Charset", (await $.wv([$t15, $t16, $t17], "RUSSIAN_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t15, $t16, $t17], "Default", C, false)))) {
        await $.wset([$t15, $t16, $t17], "Style", [(await $.wv([$t15, $t16, $t17], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t15, $t16], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t15, $t16], "Pen", C, false)), "Color", (await $.wv([$t15, $t16], "clBlack", C, false)));
      await $.wset([$t15, $t16], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t15, $t16], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t15, $t16], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t15, $t16], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t15, $t16], "MoveTo", [(await $.mv((await $.wv([$t15, $t16], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t15, $t16], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t15, $t16], "LineTo", [(await $.mv((await $.wv([$t15, $t16], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t15, $t16], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t15, $t16], "inc", [$.ref(async () => (await $.wv([$t15, $t16], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t18) => { await $.wset([$t15, $t16], "LineBottom", $t18, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t15, $t16], "Pen", C, false)), "Color", (await $.wv([$t15, $t16], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t15, $t16], "MoveTo", [(await $.mv((await $.wv([$t15, $t16], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t15, $t16], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t15, $t16], "LineTo", [(await $.mv((await $.wv([$t15, $t16], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t15, $t16], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t15, $t16], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t15, $t16], "Brush", C, false)), "Color", (await $.wv([$t15, $t16], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t15, $t16], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t15, $t16], "Font", C, false)), "Color", (await $.wv([$t15, $t16], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t15, $t16], "Font", C, false)), "Color", (await $.wv([$t15, $t16], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t15, $t16], "Brush", C, false)), "Color", (await $.wv([$t15, $t16], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t15, $t16], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t15, $t16], "Font", C, false)), "Color", (await $.wv([$t15, $t16], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t15, $t16], "Font", C, false)), "Color", (await $.wv([$t15, $t16], "clGrayText", C, false)));
        }
      }
      await $.wset([$t15, $t16], "Bar", (await $.wv([$t15, $t16], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t15, $t16], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t15, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t19) => { await $.mset((await $.wv([$t15, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t19); }), 22], C)));
      await $.stmt((await $.wcall([$t15, $t16], "FillRect", [(await $.wv([$t15, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t15, $t16], "TextOut", [$.add((await $.mv((await $.wv([$t15, $t16], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t15, $t16], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t15, $t16], "Caption", C, false))], C)));
    }
    await $.wset([$t15, $t16], "SText", (await $.wcall([$t15, $t16], "ShortCutToText", [(await $.wv([$t15, $t16], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t15, $t16], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t15, $t16], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t15, $t16], "TextWidth", [(await $.wv([$t15, $t16], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t15, $t16], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t15, $t16], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t15, $t16], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t20 = (await $.wv([$t15, $t16], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t15, $t16, $t20], "Assigned", [(await $.wv([$t15, $t16, $t20], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t15, $t16, $t20], "Checked", C, false)))) {
            await $.mset((await $.wv([$t15, $t16, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t15, $t16, $t20], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t15, $t16, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t15, $t16, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t15, $t16, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t15, $t16, $t20], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t15, $t16, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t15, $t16, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t15, $t16, $t20], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t15, $t16, $t20], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t15, $t16, $t20], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t15, $t16, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t15, $t16, $t20], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t15, $t16, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t21) => { await $.mset((await $.wv([$t15, $t16, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t21); }), 2], C)));
            await $.stmt((await $.wcall([$t15, $t16, $t20], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t15, $t16, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t22) => { await $.mset((await $.wv([$t15, $t16, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t22); }), 2], C)));
            await $.stmt((await $.wcall([$t15, $t16, $t20], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t15, $t16, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t23) => { await $.mset((await $.wv([$t15, $t16, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t23); }), 2], C)));
            await $.stmt((await $.wcall([$t15, $t16, $t20], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t15, $t16, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t24) => { await $.mset((await $.wv([$t15, $t16, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t24); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t15, $t16, $t20], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t15, $t16, $t20], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t15, $t16, $t20], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t15, $t16, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t15, $t16, $t20], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t15, $t16, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t25) => { await $.mset((await $.wv([$t15, $t16, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t25); }), 1], C)));
            await $.stmt((await $.wcall([$t15, $t16, $t20], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t15, $t16, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t26) => { await $.mset((await $.wv([$t15, $t16, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t26); }), 1], C)));
            await $.stmt((await $.wcall([$t15, $t16, $t20], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t15, $t16, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t27) => { await $.mset((await $.wv([$t15, $t16, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t27); }), 1], C)));
            await $.stmt((await $.wcall([$t15, $t16, $t20], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t15, $t16, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t28) => { await $.mset((await $.wv([$t15, $t16, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t28); }), 1], C)));
            if ($.truthy((await $.wv([$t15, $t16, $t20], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t15, $t16, $t20], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t15, $t16, $t20], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t15, $t16, $t20], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t15, $t16, $t20], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t15, $t16, $t20], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t15, $t16, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t15, $t16, $t20], "Images", C, false)), "Draw", [(await $.wv([$t15, $t16, $t20], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t15, $t16, $t20], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t15, $t16, $t20], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t15, $t16, $t20], "ImageIndex", C, false)), (await $.wv([$t15, $t16, $t20], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TTransactionManagerForm", "ActionSelectAllUpdate", async function ActionSelectAllUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t29 = (L0["sender"]);
    await $.wset([$t29], "Enabled", $.not((await $.mv((await $.mv((await $.mv((await $.wv([$t29], "GridTransactions", C, false)), "DataSource")), "DataSet")), "IsEmpty"))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "NFirstClick", async function NFirstClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.call(C, "TMenuItem", [L0["sender"]])), "Tag")), 1))) {
    await $.mcall((await $.mv((await $.mv((await $.v(C, "GridTransactions")), "DataSource")), "DataSet")), "First", []);
  } else {
    await $.mcall((await $.mv((await $.mv((await $.v(C, "GridTransactions")), "DataSource")), "DataSet")), "Last", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "GridTransactionsDrawColumnCell", async function GridTransactionsDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t30 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t30], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t31 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t30], "DataSource", C, false)), "DataSet")), "FieldByName", ["Status"])), "AsInteger"));
        if ($.eq($t31, (await $.wv([$t30], "tsCommited", C, false)))) {
          await $.wset([$t30], "ImageIndex", 7, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t31, (await $.wv([$t30], "tsRejected", C, false)))) {
          await $.wset([$t30], "ImageIndex", 8, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t31, (await $.wv([$t30], "tsDelayed", C, false)))) {
          await $.wset([$t30], "ImageIndex", 9, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t30], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t30], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t30], "ImageList", C, false)), "Draw", [(await $.wv([$t30], "Canvas", C, false)), (await $.mv((await $.wv([$t30], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t30], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t30], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t30], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t30], "DefaultDrawColumnCell", [(await $.wv([$t30], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t30], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t30], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t30], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TTransactionManagerForm", "ActionCommitExecute", async function ActionCommitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "ids": '', "status": 0, "trcount": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["ids"] = "";
  L0["trcount"] = 0;
  {
    const $t32 = (await $.v(C, "GridTransactions"));
    const $t33 = (await $.wv([$t32], "SelectedRows", C, false));
    const $t34 = (await $.mv((await $.wv([$t32, $t33], "DataSource", C, false)), "DataSet"));
    if ($.truthy($.eq((await $.wv([$t32, $t33, $t34], "Count", C, false)), 0))) {
      await $.stmt((await $.wcall([$t32, $t33, $t34], "Inc", [$.ref(async () => (await $.wv([$t32, $t33, $t34], "TrCount", { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }, false)), async ($t35) => { await $.wset([$t32, $t33, $t34], "TrCount", $t35, { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }); })], C)));
      await $.wset([$t32, $t33, $t34], "IDs", (await $.mv((await $.wcall([$t32, $t33, $t34], "FieldByName", ["ID"], C)), "AsString")), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
    } else {
      await $.stmt($.wcall([$t32, $t33, $t34], "DisableControls", [], C));
      try {
        { const $t36 = $.sub((await $.wv([$t32, $t33, $t34], "Count", C, false)), 1);
          await $.wset([$t32, $t33, $t34], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t37 = true;
          for (;;) {
            if (!$t37) { await $.wset([$t32, $t33, $t34], "i", $.succ((await $.wv([$t32, $t33, $t34], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t37 = false;
            if (!($.ord((await $.wv([$t32, $t33, $t34], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t36))) break;
            await $.stmt((await $.wcall([$t32, $t33, $t34], "GotoBookmark", [(await $.wcall([$t32, $t33, $t34], "TBookmark", [(await $.idx((await $.wv([$t32, $t33, $t34], "Items", C, false)), [(await $.wv([$t32, $t33, $t34], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            await $.wset([$t32, $t33, $t34], "Status", (await $.mv((await $.wcall([$t32, $t33, $t34], "FieldByname", ["Status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
            if ($.truthy($.in_((await $.wv([$t32, $t33, $t34], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t32, $t33, $t34], "tsDelayed", C, false)), (await $.wv([$t32, $t33, $t34], "tsRejected", C, false))]))) {
              await $.stmt((await $.wcall([$t32, $t33, $t34], "Inc", [$.ref(async () => (await $.wv([$t32, $t33, $t34], "TrCount", { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }, false)), async ($t38) => { await $.wset([$t32, $t33, $t34], "TrCount", $t38, { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }); })], C)));
              await $.wset([$t32, $t33, $t34], "IDs", $.add($.add((await $.wv([$t32, $t33, $t34], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), ","), (await $.mv((await $.wcall([$t32, $t33, $t34], "FieldByName", ["ID"], C)), "AsString"))), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
            }
            await $.tick();
          }
        }
        await $.stmt((await $.mcall((await $.wv([$t32, $t33, $t34], "System", C, false)), "Delete", [$.ref(async () => (await $.wv([$t32, $t33, $t34], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), async ($t39) => { await $.wset([$t32, $t33, $t34], "IDs", $t39, { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }); }), 1, 1])));
      } finally {
        await $.stmt($.wcall([$t32, $t33, $t34], "EnableControls", [], C));
      }
    }
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["%d sayda əməliyyat təsdiqlənsinmi?", [L0["trcount"]]])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t40 = (await $.v(C, "TransactionDataModule"));
      await $.stmt((await $.wcall([$t40], "CommitTransactions", [(await $.wv([$t40], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t40], "SBCommit", [], C)));
      await $.stmt((await $.wcall([$t40], "ActionRefreshExecute", [(await $.wv([$t40], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActionCommitUpdate", async function ActionCommitUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t41 = (L0["sender"]);
    const $t42 = (await $.mv((await $.wv([$t41], "TransactionDataModule", C, false)), "Transactions"));
    await $.wset([$t41, $t42], "Enabled", (await $.and_($.not(((await $.wv([$t41, $t42], "IsEmpty", C, false)))), async () => ($.ne((await $.mv((await $.wcall([$t41, $t42], "FieldByName", ["Status"], C)), "AsInteger")), (await $.wv([$t41, $t42], "tsCommited", C, false)))))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActionDeleteExecute", async function ActionDeleteExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  await $.stmt($.call(C, "Focus", []));
  {
    const $t43 = (await $.v(C, "GridTransactions"));
    const $t44 = (await $.wv([$t43], "SelectedRows", C, false));
    const $t45 = (await $.mv((await $.wv([$t43, $t44], "DataSource", C, false)), "DataSet"));
    const $t46 = (await $.wv([$t43, $t44, $t45], "TransactionDataModule", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t43, $t44, $t45, $t46], "Count", C, false)), 0))) {
        await $.wset([$t43, $t44, $t45, $t46], "CurrentRowSelected", (await $.wv([$t43, $t44, $t45, $t46], "True", C, false)), C);
      }
      { const $t47 = $.sub((await $.wv([$t43, $t44, $t45, $t46], "Count", C, false)), 1);
        await $.wset([$t43, $t44, $t45, $t46], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t48 = true;
        for (;;) {
          if (!$t48) { await $.wset([$t43, $t44, $t45, $t46], "Index", $.succ((await $.wv([$t43, $t44, $t45, $t46], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t48 = false;
          if (!($.ord((await $.wv([$t43, $t44, $t45, $t46], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t47))) break;
          await $.stmt((await $.wcall([$t43, $t44, $t45, $t46], "GotoBookmark", [(await $.wcall([$t43, $t44, $t45, $t46], "Pointer", [(await $.idx((await $.wv([$t43, $t44, $t45, $t46], "Items", C, false)), [(await $.wv([$t43, $t44, $t45, $t46], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t43, $t44, $t45, $t46], "TransactionID", (await $.mv((await $.wcall([$t43, $t44, $t45, $t46], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t43, $t44, $t45, $t46], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t49 = (await $.wcall([$t43, $t44, $t45, $t46], "MessageDlg", [(await $.wcall([$t43, $t44, $t45, $t46], "Format", ["Əməliyyat #%d silinsinmi?", [(await $.wv([$t43, $t44, $t45, $t46], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)), (await $.wv([$t43, $t44, $t45, $t46], "mtConfirmation", C, false)), [(await $.wv([$t43, $t44, $t45, $t46], "mbYes", C, false)), (await $.wv([$t43, $t44, $t45, $t46], "mbNo", C, false)), (await $.wv([$t43, $t44, $t45, $t46], "mbCancel", C, false)), (await $.wv([$t43, $t44, $t45, $t46], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t49, (await $.wv([$t43, $t44, $t45, $t46], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t49, (await $.wv([$t43, $t44, $t45, $t46], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t49, (await $.wv([$t43, $t44, $t45, $t46], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t43, $t44, $t45, $t46], "MessageDlg", [(await $.wcall([$t43, $t44, $t45, $t46], "Format", ["%d  sayda əməliyyat silinsinmi?", [$.sub((await $.wv([$t43, $t44, $t45, $t46], "Count", C, false)), (await $.wv([$t43, $t44, $t45, $t46], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t43, $t44, $t45, $t46], "mtConfirmation", C, false)), [(await $.wv([$t43, $t44, $t45, $t46], "mbYes", C, false)), (await $.wv([$t43, $t44, $t45, $t46], "mbCancel", C, false))], 0], C)), (await $.wv([$t43, $t44, $t45, $t46], "mrYes", C, false))))) {
                  await $.wset([$t43, $t44, $t45, $t46], "WaitNextConfirm", (await $.wv([$t43, $t44, $t45, $t46], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t43, $t44, $t45, $t46], "Application", C, false)), "ProcessMessages", []);
          await $.stmt((await $.wcall([$t43, $t44, $t45, $t46], "DeleteTransaction", [(await $.wv([$t43, $t44, $t45, $t46], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))], C)));
          await $.wset([$t43, $t44, $t45, $t46], "WillRefresh", (await $.wv([$t43, $t44, $t45, $t46], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.stmt($.wcall([$t43, $t44, $t45, $t46], "SBCommit", [], C));
          await $.wset([$t43, $t44, $t45, $t46], "TransactionState", (await $.wv([$t43, $t44, $t45, $t46], "tsDelete", C, false)), C);
          await $.tick();
        }
      }
    } finally {
      if ($.truthy((await $.wv([$t43, $t44, $t45, $t46], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.stmt((await $.wcall([$t43, $t44, $t45, $t46], "ActionRefreshExecute", [(await $.wv([$t43, $t44, $t45, $t46], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActionDeleteUpdate", async function ActionDeleteUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t50 = (L0["sender"]);
    const $t51 = (await $.mv((await $.wv([$t50], "TransactionDataModule", C, false)), "Transactions"));
    await $.wset([$t50, $t51], "Enabled", $.not(((await $.wv([$t50, $t51], "IsEmpty", C, false)))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "CBDebetFilialClick", async function CBDebetFilialClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dblookupno": '', "dblookupname": '', "dblookup": null};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t52 = (await $.call(C, "TCheckBox", [L0["sender"]]));
    await $.wset([$t52], "DBLookupNo", (await $.wcall([$t52], "IntToStr", [(await $.wv([$t52], "Tag", C, false))], C)), { get: async () => L0["dblookupno"], set: async (v) => { L0["dblookupno"] = v; }, local: true });
  }
  L0["dblookupname"] = $.add("DBLookup", L0["dblookupno"]);
  L0["dblookup"] = (await $.call(C, "TDBLookupComboBox", [(await $.call(C, "FindComponent", [L0["dblookupname"]]))]));
  {
    const $t53 = L0["dblookup"];
    const $t54 = (await $.wcall([$t53], "TCheckBox", [(await $.wv([$t53], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C));
    if ($.truthy((await $.wv([$t53, $t54], "Checked", C, false)))) {
      await $.mcall((await $.mv((await $.wv([$t53, $t54], "ListSource", C, false)), "DataSet")), "First", []);
      await $.wset([$t53, $t54], "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t53, $t54], "ListSource", C, false)), "DataSet")), "FieldByName", [(await $.wv([$t53, $t54], "KeyField", C, false))])), "AsInteger")), C);
    } else {
      await $.wset([$t53, $t54], "KeyValue", (-(1)), C);
    }
  }
  await $.mcall((await $.v(C, "ActionFilter")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActionShowFilterExecute", async function ActionShowFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PanelSettings")), "Visible", $.not((await $.mv((await $.v(C, "PanelSettings")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActionLoadFiltersExecute", async function ActionLoadFiltersExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CLBOperationTypes")), "Clear", []);
  await $.mcall((await $.call(C, "TStringList", [(await $.call(C, "Pointer", [(await $.mv((await $.v(C, "CLBOperationTypes")), "Tag"))]))])), "Clear", []);
  await $.mcall((await $.v(C, "CLBCurrency")), "Clear", []);
  await $.mcall((await $.call(C, "TStringList", [(await $.call(C, "Pointer", [(await $.mv((await $.v(C, "CLBCurrency")), "Tag"))]))])), "Clear", []);
  {
    const $t55 = (await $.v(C, "TransactionDataModule"));
    await $.mcall((await $.wv([$t55], "Operations", C, false)), "Execute", []);
    await $.mcall((await $.wv([$t55], "Valute", C, false)), "Execute", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "CLBOperationTypesKeyDown", async function CLBOperationTypesKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy(($.eq((await L0["key"].get()), (await $.v(C, "VK_F6")))))) {
    await $.mcall((await $.v(C, "ActionLoadFilters")), "Execute", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TTransactionManagerForm", "ActionFilterExecute", async function ActionFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "t_delayed": 0, "t_commited": 0, "t_rejected": 0, "currencyf": '', "debetfilialf": '', "creditfilialf": '', "operatorf": '', "operationtypef": '', "operationstatusf": '', "filterstr": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["currencyfilter"] = "((DebitCurrencyID<>%d)AND(CreditCurrencyID<>%d))";
  L0["debetfilialfilter"] = "(DebitBranch=%d)";
  L0["creditfilialfilter"] = "(CreditBranch=%d)";
  L0["operatorfilter"] = "(OperatorID=%d)";
  L0["operationtypefilter"] = "(OperationCode<>%d)";
  L0["operationstatus"] = "((Status=%d)OR(Status=%d)OR(Status=%d))";
  L0["checkfiltred"] = $.fn(async function CheckFiltred(p0, p1, p2) {
  const L1 = {"ischecked": $.copyArg(p0), "filterstr": $.copyArg(p1), "args": $.copyArg(p2), result: ''};
  await $.fixArgs(L1, ["ischecked", "filterstr", "args"]);
  L1["result"] = "";
  if ($.truthy(L1["ischecked"])) {
    L1["result"] = (await $.call(C, "Format", [L1["filterstr"], L1["args"]]));
  }
  return L1.result;
});
  L0["addboolprefix"] = $.fn(async function AddBoolPrefix(p0) {
  const L1 = {"willadd": $.copyArg(p0), result: ''};
  await $.fixArgs(L1, ["willadd"]);
  L1["result"] = " ";
  if ($.truthy(L1["willadd"])) {
    L1["result"] = (await $.v(C, "BooleanPrefix"));
  }
  return L1.result;
});
  L0["generatefilter"] = $.fn(async function GenerateFilter(p0, p1, p2) {
  const L1 = {"checklistbox": $.copyArg(p0), "filterconst": $.copyArg(p1), "icount": $.copyArg(p2), result: '', "position": 0, "i": 0, "filter": ''};
  await $.fixArgs(L1, ["checklistbox", "filterconst", "icount"]);
  L1["result"] = "";
  {
    const $t56 = L1["checklistbox"];
    const $t57 = (await $.wv([$t56], "Items", C, false));
    await $.wset([$t56, $t57], "Position", 0, { get: async () => L1["position"], set: async (v) => { L1["position"] = v; }, local: true });
    if ($.truthy($.not(($.gt((await $.wv([$t56, $t57], "Count", C, false)), 0))))) {
      return L1.result;
    }
    if ($.truthy($.not((await $.idx((await $.wv([$t56, $t57], "Checked", C, false)), [0]))))) {
      if ($.truthy($.eq((await $.wv([$t56, $t57], "ICount", { get: async () => L1["icount"], set: async (v) => { L1["icount"] = v; }, local: true }, false)), 1))) {
        await $.wset([$t56, $t57], "Filter", (await $.wcall([$t56, $t57], "Format", [(await $.wv([$t56, $t57], "FilterConst", { get: async () => L1["filterconst"], set: async (v) => { L1["filterconst"] = v; }, local: true }, false)), [(await $.wcall([$t56, $t57], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t56, $t57], "TStringList", [(await $.wcall([$t56, $t57], "Pointer", [(await $.wv([$t56, $t57], "Tag", C, false))], C))], C)), "Strings")), [0]))], C))]], C)), { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true });
      } else {
        await $.wset([$t56, $t57], "Filter", (await $.wcall([$t56, $t57], "Format", [(await $.wv([$t56, $t57], "FilterConst", { get: async () => L1["filterconst"], set: async (v) => { L1["filterconst"] = v; }, local: true }, false)), [(await $.wcall([$t56, $t57], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t56, $t57], "TStringList", [(await $.wcall([$t56, $t57], "Pointer", [(await $.wv([$t56, $t57], "Tag", C, false))], C))], C)), "Strings")), [0]))], C)), (await $.wcall([$t56, $t57], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t56, $t57], "TStringList", [(await $.wcall([$t56, $t57], "Pointer", [(await $.wv([$t56, $t57], "Tag", C, false))], C))], C)), "Strings")), [0]))], C))]], C)), { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true });
      }
    } else {
      await $.wset([$t56, $t57], "Filter", "", { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true });
    }
    { const $t58 = $.sub((await $.mv((await $.wv([$t56, $t57], "Items", C, false)), "Count")), 1);
      await $.wset([$t56, $t57], "i", 1, { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true });
      let $t59 = true;
      for (;;) {
        if (!$t59) { await $.wset([$t56, $t57], "i", $.succ((await $.wv([$t56, $t57], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), 1), { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }); }
        $t59 = false;
        if (!($.ord((await $.wv([$t56, $t57], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))) <= $.ord($t58))) break;
        if ($.truthy($.not((await $.idx((await $.wv([$t56, $t57], "Checked", C, false)), [(await $.wv([$t56, $t57], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))))) {
          if ($.truthy($.eq((await $.wv([$t56, $t57], "ICount", { get: async () => L1["icount"], set: async (v) => { L1["icount"] = v; }, local: true }, false)), 1))) {
            await $.wset([$t56, $t57], "Filter", $.add($.add((await $.wv([$t56, $t57], "Filter", { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true }, false)), (await $.wcall([$t56, $t57], "AddBoolPrefix", [$.not((await $.idx((await $.wv([$t56, $t57], "Checked", C, false)), [(await $.wv([$t56, $t57], "Position", { get: async () => L1["position"], set: async (v) => { L1["position"] = v; }, local: true }, false))])))], { get: async () => L0["addboolprefix"], set: async (v) => { L0["addboolprefix"] = v; }, local: true }))), (await $.wcall([$t56, $t57], "Format", [(await $.wv([$t56, $t57], "FilterConst", { get: async () => L1["filterconst"], set: async (v) => { L1["filterconst"] = v; }, local: true }, false)), [(await $.wcall([$t56, $t57], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t56, $t57], "TStringList", [(await $.wcall([$t56, $t57], "Pointer", [(await $.wv([$t56, $t57], "Tag", C, false))], C))], C)), "Strings")), [(await $.wv([$t56, $t57], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))], C))]], C))), { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true });
          } else {
            await $.wset([$t56, $t57], "Filter", $.add($.add((await $.wv([$t56, $t57], "Filter", { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true }, false)), (await $.wcall([$t56, $t57], "AddBoolPrefix", [$.not((await $.idx((await $.wv([$t56, $t57], "Checked", C, false)), [(await $.wv([$t56, $t57], "Position", { get: async () => L1["position"], set: async (v) => { L1["position"] = v; }, local: true }, false))])))], { get: async () => L0["addboolprefix"], set: async (v) => { L0["addboolprefix"] = v; }, local: true }))), (await $.wcall([$t56, $t57], "Format", [(await $.wv([$t56, $t57], "FilterConst", { get: async () => L1["filterconst"], set: async (v) => { L1["filterconst"] = v; }, local: true }, false)), [(await $.wcall([$t56, $t57], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t56, $t57], "TStringList", [(await $.wcall([$t56, $t57], "Pointer", [(await $.wv([$t56, $t57], "Tag", C, false))], C))], C)), "Strings")), [(await $.wv([$t56, $t57], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))], C)), (await $.wcall([$t56, $t57], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t56, $t57], "TStringList", [(await $.wcall([$t56, $t57], "Pointer", [(await $.wv([$t56, $t57], "Tag", C, false))], C))], C)), "Strings")), [(await $.wv([$t56, $t57], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))], C))]], C))), { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true });
          }
          await $.wset([$t56, $t57], "Position", (await $.wv([$t56, $t57], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), { get: async () => L1["position"], set: async (v) => { L1["position"] = v; }, local: true });
        }
        await $.tick();
      }
    }
  }
  L1["result"] = L1["filter"];
  return L1.result;
});
  L0["filterstr"] = "";
  L0["t_delayed"] = $.mul((await $.call(C, "Word", [(await $.mv((await $.v(C, "CBDelayed")), "Checked"))])), (await $.mv((await $.v(C, "CBDelayed")), "Tag")));
  L0["t_commited"] = $.mul((await $.call(C, "Word", [(await $.mv((await $.v(C, "CBCommited")), "Checked"))])), (await $.mv((await $.v(C, "CBCommited")), "Tag")));
  L0["t_rejected"] = $.mul((await $.call(C, "Word", [(await $.mv((await $.v(C, "CBRejected")), "Checked"))])), (await $.mv((await $.v(C, "CBRejected")), "Tag")));
  L0["debetfilialf"] = (await $.callv(L0["checkfiltred"], [(await $.mv((await $.v(C, "CBDebetFilial")), "Checked")), L0["debetfilialfilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookup2")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))]]));
  L0["creditfilialf"] = (await $.callv(L0["checkfiltred"], [(await $.mv((await $.v(C, "CBCreditFilial")), "Checked")), L0["creditfilialfilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookup1")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))]]));
  L0["operatorf"] = (await $.callv(L0["checkfiltred"], [(await $.mv((await $.v(C, "CBOperator")), "Checked")), L0["operatorfilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookup3")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))]]));
  L0["operationstatusf"] = (await $.callv(L0["checkfiltred"], [true, L0["operationstatus"], [L0["t_delayed"], L0["t_commited"], L0["t_rejected"]]]));
  L0["currencyf"] = (await $.callv(L0["generatefilter"], [(await $.v(C, "CLBCurrency")), L0["currencyfilter"], 2]));
  L0["operationtypef"] = (await $.callv(L0["generatefilter"], [(await $.v(C, "CLBOperationTypes")), L0["operationtypefilter"], 1]));
  L0["filterstr"] = L0["currencyf"];
  if ($.truthy($.ne(L0["debetfilialf"], ""))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["debetfilialf"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], (await $.v(C, "BooleanPrefix"))), L0["debetfilialf"]);
    }
  }
  if ($.truthy($.ne(L0["creditfilialf"], ""))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["creditfilialf"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], (await $.v(C, "BooleanPrefix"))), L0["creditfilialf"]);
    }
  }
  if ($.truthy($.ne(L0["operatorf"], ""))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["operatorf"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], (await $.v(C, "BooleanPrefix"))), L0["operatorf"]);
    }
  }
  if ($.truthy($.ne(L0["operationtypef"], ""))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["operationtypef"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], (await $.v(C, "BooleanPrefix"))), L0["operationtypef"]);
    }
  }
  if ($.truthy($.ne(L0["operationstatusf"], ""))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["operationstatusf"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], (await $.v(C, "BooleanPrefix"))), L0["operationstatusf"]);
    }
  }
  {
    const $t60 = (await $.mv((await $.mv((await $.v(C, "GridTransactions")), "DataSource")), "DataSet"));
    await $.wset([$t60], "Filtered", (await $.wv([$t60], "False", C, false)), C);
    await $.wset([$t60], "Filter", (await $.wv([$t60], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false)), C);
    await $.wset([$t60], "Filtered", (await $.wv([$t60], "True", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "FlagEnabled", async function FlagEnabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"flag": $.copyArg(p0), result: false, "savedpos": null, "index": 0};
  await $.fixArgs(L0, ["flag"]);
  L0["checkrow"] = $.fn(async function CheckRow() {
  const L1 = {result: undefined};
  L1["result"] = $.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridTransactions")), "DataSource")), "DataSet")), "FieldByName", ["Status"])), "AsInteger")), L0["flag"]);
  return L1.result;
});
  L0["result"] = false;
  {
    const $t61 = (await $.v(C, "GridTransactions"));
    const $t62 = (await $.wv([$t61], "SelectedRows", C, false));
    const $t63 = (await $.mv((await $.wv([$t61, $t62], "DataSource", C, false)), "DataSet"));
    if ($.truthy((await $.or_(($.eq((await $.wv([$t61, $t62, $t63], "Count", C, false)), 1)), async () => ($.eq((await $.wv([$t61, $t62, $t63], "Count", C, false)), 0)))))) {
      await $.stmt($.wcall([$t61, $t62, $t63], "CheckRow", [], { get: async () => L0["checkrow"], set: async (v) => { L0["checkrow"] = v; }, local: true }));
    } else {
      await $.stmt($.wcall([$t61, $t62, $t63], "DisableControls", [], C));
      await $.wset([$t61, $t62, $t63], "SavedPos", (await $.wv([$t61, $t62, $t63], "GetBookmark", C, false)), { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true });
      try {
        { const $t64 = $.sub((await $.wv([$t61, $t62, $t63], "Count", C, false)), 1);
          await $.wset([$t61, $t62, $t63], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
          let $t65 = true;
          for (;;) {
            if (!$t65) { await $.wset([$t61, $t62, $t63], "Index", $.succ((await $.wv([$t61, $t62, $t63], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
            $t65 = false;
            if (!($.ord((await $.wv([$t61, $t62, $t63], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t64))) break;
            await $.stmt((await $.wcall([$t61, $t62, $t63], "GotoBookmark", [(await $.wcall([$t61, $t62, $t63], "TBookmark", [(await $.idx((await $.wv([$t61, $t62, $t63], "Items", C, false)), [(await $.wv([$t61, $t62, $t63], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
            await $.stmt($.wcall([$t61, $t62, $t63], "CheckRow", [], { get: async () => L0["checkrow"], set: async (v) => { L0["checkrow"] = v; }, local: true }));
            if ($.truthy((await $.wv([$t61, $t62, $t63], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)))) {
              break;
            }
            await $.tick();
          }
        }
      } finally {
        await $.stmt((await $.wcall([$t61, $t62, $t63], "GotoBookmark", [(await $.wv([$t61, $t62, $t63], "SavedPos", { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true }, false))], C)));
        await $.stmt($.wcall([$t61, $t62, $t63], "EnableControls", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Flag"], "kind": "function", "ptypes": ["Word"]});
  U.method("TTransactionManagerForm", "DBLookup2Click", async function DBLookup2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ActionFilter")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActionStepCommitExecute", async function ActionStepCommitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "id": 0, "willrefresh": false, "status": 0, "commitedcount": 0, "errorcount": 0, "lasterrormessage": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["commitedcount"] = 0;
  L0["errorcount"] = 0;
  L0["willrefresh"] = false;
  {
    const $t66 = (await $.v(C, "TransactionDataModule"));
    const $t67 = (await $.wv([$t66], "GridTransactions", C, false));
    const $t68 = (await $.wv([$t66, $t67], "SelectedRows", C, false));
    const $t69 = (await $.mv((await $.wv([$t66, $t67, $t68], "DataSource", C, false)), "DataSet"));
    if ($.truthy($.eq((await $.wcall([$t66, $t67, $t68, $t69], "MessageDlg", ["Əməliyyatlar təsdiqlənsinmi?", (await $.wv([$t66, $t67, $t68, $t69], "mtConfirmation", C, false)), [(await $.wv([$t66, $t67, $t68, $t69], "mbYes", C, false)), (await $.wv([$t66, $t67, $t68, $t69], "mbCancel", C, false))], 0], C)), (await $.wv([$t66, $t67, $t68, $t69], "mrYes", C, false))))) {
      await $.stmt($.wcall([$t66, $t67, $t68, $t69], "DisableControls", [], C));
      try {
        await $.mcall((await $.wv([$t66, $t67, $t68, $t69], "Application", C, false)), "ProcessMessages", []);
        if ($.truthy($.eq((await $.wv([$t66, $t67, $t68, $t69], "Count", C, false)), 0))) {
          await $.wset([$t66, $t67, $t68, $t69], "CurrentRowSelected", (await $.wv([$t66, $t67, $t68, $t69], "True", C, false)), C);
        }
        { const $t70 = $.sub((await $.wv([$t66, $t67, $t68, $t69], "Count", C, false)), 1);
          await $.wset([$t66, $t67, $t68, $t69], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t71 = true;
          for (;;) {
            if (!$t71) { await $.wset([$t66, $t67, $t68, $t69], "i", $.succ((await $.wv([$t66, $t67, $t68, $t69], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t71 = false;
            if (!($.ord((await $.wv([$t66, $t67, $t68, $t69], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t70))) break;
            try {
              await $.stmt((await $.wcall([$t66, $t67, $t68, $t69], "GotoBookmark", [(await $.wcall([$t66, $t67, $t68, $t69], "TBookmark", [(await $.idx((await $.wv([$t66, $t67, $t68, $t69], "Items", C, false)), [(await $.wv([$t66, $t67, $t68, $t69], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
              await $.wset([$t66, $t67, $t68, $t69], "Status", (await $.mv((await $.wcall([$t66, $t67, $t68, $t69], "FieldByname", ["Status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
              if ($.truthy($.in_((await $.wv([$t66, $t67, $t68, $t69], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t66, $t67, $t68, $t69], "tsDelayed", C, false)), (await $.wv([$t66, $t67, $t68, $t69], "tsRejected", C, false))]))) {
                await $.wset([$t66, $t67, $t68, $t69], "ID", (await $.mv((await $.wcall([$t66, $t67, $t68, $t69], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
                await $.stmt((await $.wcall([$t66, $t67, $t68, $t69], "CommitTransaction", [(await $.wv([$t66, $t67, $t68, $t69], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))], C)));
                await $.wset([$t66, $t67, $t68, $t69], "WillRefresh", (await $.wv([$t66, $t67, $t68, $t69], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
                await $.stmt((await $.wcall([$t66, $t67, $t68, $t69], "Inc", [$.ref(async () => (await $.wv([$t66, $t67, $t68, $t69], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), async ($t73) => { await $.wset([$t66, $t67, $t68, $t69], "CommitedCount", $t73, { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }); })], C)));
                await $.stmt((await $.wcall([$t66, $t67, $t68, $t69], "SBCommit", [], C)));
              }
            } catch ($t72) {
              $.rethrowControl($t72);
              if ($.excIs($t72, "Exception")) {
                L0["e"] = $.exc($t72);
                await $.wset([$t66, $t67, $t68, $t69], "LastErrorMessage", (await $.mv((await $.wv([$t66, $t67, $t68, $t69], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), { get: async () => L0["lasterrormessage"], set: async (v) => { L0["lasterrormessage"] = v; }, local: true });
                await $.stmt((await $.wcall([$t66, $t67, $t68, $t69], "Inc", [$.ref(async () => (await $.wv([$t66, $t67, $t68, $t69], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), async ($t74) => { await $.wset([$t66, $t67, $t68, $t69], "ErrorCount", $t74, { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }); })], C)));
                continue;
              }
              else { throw $t72; }
            }
            await $.tick();
          }
        }
      } finally {
        if ($.truthy($.gt((await $.wv([$t66, $t67, $t68, $t69], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), 0))) {
          if ($.truthy($.eq((await $.wv([$t66, $t67, $t68, $t69], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), 1))) {
            await $.stmt((await $.wcall([$t66, $t67, $t68, $t69], "MessageDlg", [(await $.wv([$t66, $t67, $t68, $t69], "LastErrorMessage", { get: async () => L0["lasterrormessage"], set: async (v) => { L0["lasterrormessage"] = v; }, local: true }, false)), (await $.wv([$t66, $t67, $t68, $t69], "mtConfirmation", C, false)), [(await $.wv([$t66, $t67, $t68, $t69], "mbOk", C, false))], 0], C)));
          } else {
            await $.stmt((await $.wcall([$t66, $t67, $t68, $t69], "MessageDlg", [(await $.wcall([$t66, $t67, $t68, $t69], "Format", [(await $.wv([$t66, $t67, $t68, $t69], "cs_CommitInformation", C, false)), [$.add((await $.wv([$t66, $t67, $t68, $t69], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), (await $.wv([$t66, $t67, $t68, $t69], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false))), (await $.wv([$t66, $t67, $t68, $t69], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), (await $.wv([$t66, $t67, $t68, $t69], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false))]], C)), (await $.wv([$t66, $t67, $t68, $t69], "mtConfirmation", C, false)), [(await $.wv([$t66, $t67, $t68, $t69], "mbOk", C, false))], 0], C)));
          }
        }
        await $.stmt($.wcall([$t66, $t67, $t68, $t69], "EnableControls", [], C));
        if ($.truthy((await $.wv([$t66, $t67, $t68, $t69], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
          await $.wset([$t66, $t67, $t68, $t69], "TransactionState", (await $.wv([$t66, $t67, $t68, $t69], "tsCommit", C, false)), C);
          await $.stmt((await $.wcall([$t66, $t67, $t68, $t69], "ActionRefreshExecute", [(await $.wv([$t66, $t67, $t68, $t69], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActionRejectExecute", async function ActionRejectExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "id": 0, "willrefresh": false, "rejectreason": '', "status": 0, "rejectedcount": 0, "errorcount": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["errorcount"] = 0;
  L0["rejectedcount"] = 0;
  L0["willrefresh"] = false;
  if ($.truthy((await $.call(C, "InputQuery", ["Inkarolunma !!! ", "Təyinat:", $.ref(async () => L0["rejectreason"], async ($t75) => { L0["rejectreason"] = $t75; })])))) {
    {
      const $t76 = (await $.v(C, "TransactionDataModule"));
      const $t77 = (await $.wv([$t76], "GridTransactions", C, false));
      const $t78 = (await $.wv([$t76, $t77], "SelectedRows", C, false));
      const $t79 = (await $.mv((await $.wv([$t76, $t77, $t78], "DataSource", C, false)), "DataSet"));
      if ($.truthy($.eq((await $.wv([$t76, $t77, $t78, $t79], "Count", C, false)), 0))) {
        await $.wset([$t76, $t77, $t78, $t79], "CurrentRowSelected", (await $.wv([$t76, $t77, $t78, $t79], "True", C, false)), C);
      }
      { const $t80 = $.sub((await $.wv([$t76, $t77, $t78, $t79], "Count", C, false)), 1);
        await $.wset([$t76, $t77, $t78, $t79], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t81 = true;
        for (;;) {
          if (!$t81) { await $.wset([$t76, $t77, $t78, $t79], "i", $.succ((await $.wv([$t76, $t77, $t78, $t79], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t81 = false;
          if (!($.ord((await $.wv([$t76, $t77, $t78, $t79], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t80))) break;
          try {
            await $.stmt((await $.wcall([$t76, $t77, $t78, $t79], "GotoBookmark", [(await $.wcall([$t76, $t77, $t78, $t79], "TBookmark", [(await $.idx((await $.wv([$t76, $t77, $t78, $t79], "Items", C, false)), [(await $.wv([$t76, $t77, $t78, $t79], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            await $.wset([$t76, $t77, $t78, $t79], "Status", (await $.mv((await $.wcall([$t76, $t77, $t78, $t79], "FieldByname", ["Status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
            if ($.truthy($.in_((await $.wv([$t76, $t77, $t78, $t79], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t76, $t77, $t78, $t79], "tsDelayed", C, false)), (await $.wv([$t76, $t77, $t78, $t79], "tsRejected", C, false))]))) {
              await $.wset([$t76, $t77, $t78, $t79], "ID", (await $.mv((await $.wcall([$t76, $t77, $t78, $t79], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
              await $.stmt((await $.wcall([$t76, $t77, $t78, $t79], "RejectTransaction", [(await $.wv([$t76, $t77, $t78, $t79], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), (await $.wv([$t76, $t77, $t78, $t79], "RejectReason", { get: async () => L0["rejectreason"], set: async (v) => { L0["rejectreason"] = v; }, local: true }, false))], C)));
              await $.wset([$t76, $t77, $t78, $t79], "WillRefresh", (await $.wv([$t76, $t77, $t78, $t79], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
              await $.stmt((await $.wcall([$t76, $t77, $t78, $t79], "Inc", [$.ref(async () => (await $.wv([$t76, $t77, $t78, $t79], "RejectedCount", { get: async () => L0["rejectedcount"], set: async (v) => { L0["rejectedcount"] = v; }, local: true }, false)), async ($t83) => { await $.wset([$t76, $t77, $t78, $t79], "RejectedCount", $t83, { get: async () => L0["rejectedcount"], set: async (v) => { L0["rejectedcount"] = v; }, local: true }); })], C)));
              await $.stmt((await $.wcall([$t76, $t77, $t78, $t79], "SBCommit", [], C)));
            }
          } catch ($t82) {
            $.rethrowControl($t82);
            $.handled($t82);
            await $.stmt((await $.wcall([$t76, $t77, $t78, $t79], "Inc", [$.ref(async () => (await $.wv([$t76, $t77, $t78, $t79], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), async ($t84) => { await $.wset([$t76, $t77, $t78, $t79], "ErrorCount", $t84, { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }); })], C)));
            continue;
          }
          await $.tick();
        }
      }
    }
  }
  if ($.truthy($.gt(L0["errorcount"], 0))) {
    await $.stmt((await $.call(C, "MessageDlg", [(await $.call(C, "Format", [(await $.v(C, "cs_RejectInformation")), [$.add(L0["rejectedcount"], L0["errorcount"]), L0["rejectedcount"], L0["errorcount"]]])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbOk"))], 0])));
  }
  if ($.truthy(L0["willrefresh"])) {
    await $.stmt((await $.call(C, "ActionRefreshExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActionCommissionExecute", async function ActionCommissionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "CommissionForm"))]))))) {
    await $.set(C, "CommissionForm", (await $.mcall((await $.v(C, "TCommissionForm")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "CommissionForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ButtonFilter")), "Down", false);
  await $.mset((await $.v(C, "PanelSettings")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActiveFormKeyDown", async function ActiveFormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.and_(($.in_((await $.v(C, "ssCtrl")), L0["shift"])), async () => ($.eq((await L0["key"].get()), (await $.v(C, "VK_F1")))))))) {
    await $.mcall((await $.v(C, "TransactionDataModule")), "ShowInfo", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TTransactionManagerForm", "NFullRefreshClick", async function NFullRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "TransactionDataModule")), "FullRefresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
