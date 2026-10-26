// Generated from TransactionManagerImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TransactionManagerImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "out_TransactionManagerForm_TLB", "StdVcl", "ImgList", "Menus", "ActnList", "ToolWin", "ComCtrls", "DBTables", "StdCtrls", "Grids", "DBGrids", "DBCtrls", "DB", "Oracledata", "Mask", "Buttons", "CheckLst", "ExtCtrls", "ComObj", "ComServ", "TransactionPropertiesImpl", "TransactionDataModuleUnit", "out_TransactionDestinationForm", "out_CommissionImpl", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.const("omInsert", 0);
  U.const("omEdit", 1);
  U.const("omCommission", 2);
  U.const("tsCommit", 0);
  U.const("tsDelete", 1);
  U.const("tsReject", 2);
  U.defClass("TTransactionManagerForm", "TActiveForm", {"panelsettings": {"name": "PanelSettings", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "cbdebetfilial": {"name": "CBDebetFilial", "type": "TCheckBox"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "cboperator": {"name": "CBOperator", "type": "TCheckBox"}, "dblookup2": {"name": "DBLookup2", "type": "TDBLookupComboBox"}, "dblookup3": {"name": "DBLookup3", "type": "TDBLookupComboBox"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "cbcreditfilial": {"name": "CBCreditFilial", "type": "TCheckBox"}, "dblookup1": {"name": "DBLookup1", "type": "TDBLookupComboBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "clboperationtypes": {"name": "CLBOperationTypes", "type": "TCheckListBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "clbcurrency": {"name": "CLBCurrency", "type": "TCheckListBox"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "cbimmediatelyrefresh": {"name": "CBImmediatelyRefresh", "type": "TCheckBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "cbdelayed": {"name": "CBDelayed", "type": "TCheckBox"}, "cbcommited": {"name": "CBCommited", "type": "TCheckBox"}, "cbrejected": {"name": "CBRejected", "type": "TCheckBox"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "paneldestination": {"name": "PanelDestination", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "dbeditrejectreason": {"name": "DBEditRejectReason", "type": "TDBEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "dbeditassignment": {"name": "DBEditAssignment", "type": "TDBEdit"}, "panelsearch": {"name": "PanelSearch", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbtext2": {"name": "DBText2", "type": "TDBText"}, "editid": {"name": "EditID", "type": "TEdit"}, "editdebitaccno": {"name": "EditDEBITACCNO", "type": "TEdit"}, "editcreditaccno": {"name": "EditCREDITACCNO", "type": "TEdit"}, "editdebitamount": {"name": "EditDEBITAMOUNT", "type": "TEdit"}, "editcreditamount": {"name": "EditCREDITAMOUNT", "type": "TEdit"}, "editlamount": {"name": "EditLAMOUNT", "type": "TEdit"}, "gridtransactions": {"name": "GridTransactions", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "dbtext1": {"name": "DBText1", "type": "TDBText"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "dtpcurrentdate": {"name": "DTPCurrentDate", "type": "TDateTimePicker"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "actionlist": {"name": "ActionList", "type": "TActionList"}, "actionrefresh": {"name": "ActionRefresh", "type": "TAction"}, "actioninsert": {"name": "ActionInsert", "type": "TAction"}, "actionedit": {"name": "ActionEdit", "type": "TAction"}, "actiondelete": {"name": "ActionDelete", "type": "TAction"}, "actionshowfilter": {"name": "ActionShowFilter", "type": "TAction"}, "actionspeedsearch": {"name": "ActionSpeedSearch", "type": "TAction"}, "actionselectall": {"name": "ActionSelectAll", "type": "TAction"}, "actioncommit": {"name": "ActionCommit", "type": "TAction"}, "actionloadfilters": {"name": "ActionLoadFilters", "type": "TAction"}, "actionfilter": {"name": "ActionFilter", "type": "TAction"}, "actionstepcommit": {"name": "ActionStepCommit", "type": "TAction"}, "actionreject": {"name": "ActionReject", "type": "TAction"}, "actioncommission": {"name": "ActionCommission", "type": "TAction"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "buttonfilter": {"name": "ButtonFilter", "type": "TToolButton"}, "popupmenu": {"name": "PopupMenu", "type": "TPopupMenu"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "n9": {"name": "N9", "type": "TMenuItem"}, "n1": {"name": "N1", "type": "TMenuItem"}, "nfirst": {"name": "NFirst", "type": "TMenuItem"}, "nlast": {"name": "NLast", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "popuprefresh": {"name": "PopupRefresh", "type": "TPopupMenu"}, "nfullrefresh": {"name": "NFullRefresh", "type": "TMenuItem"}, "fevents": {"name": "FEvents", "type": "IActiveFormXEvents"}, "fcurrentdate": {"name": "FCurrentDate", "type": "TDateTime"}, "requiredorderbyfield": {"name": "RequiredOrderByField", "type": "variant"}, "operationmode": {"name": "OperationMode", "type": "TOperationMode"}, "lasttransactionid": {"name": "LastTransactionID", "type": "Longint"}, "transactionstate": {"name": "TransactionState", "type": "TTransactionState"}}, {"currentdate": {"name": "CurrentDate", "read": "FCurrentDate", "write": "SetCurrentDate"}});
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
  U.method("TTransactionManagerForm", "InitData", async function InitData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  L0["c_err_message"] = " Table or View in Dataset \"%s\" does not exist! ";
  {
    const $t3 = (await $.v(C, "out_Transactiondatamodule"));
    { const $t4 = $.sub((await $.wv([$t3], "ComponentCount", C, false)), 1);
      await $.wset([$t3], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t5 = true;
      for (;;) {
        if (!$t5) { await $.wset([$t3], "i", $.succ((await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t5 = false;
        if (!($.ord((await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t4))) break;
        if ($.truthy(($.is_((await $.idx((await $.wv([$t3], "Components", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDataSet")))) {
          if ($.truthy($.eq((await $.mv(((await $.idx((await $.wv([$t3], "Components", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Tag")), 1))) {
            try {
              await $.mcall((await $.idx((await $.wv([$t3], "Components", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Open", []);
            } catch ($t6) {
              $.rethrowControl($t6);
              $.handled($t6);
              throw $.raise((await $.mcall((await $.wv([$t3], "Exception", C, false)), "Create", [(await $.wcall([$t3], "Format", [(await $.wv([$t3], "c_err_message", { get: async () => L0["c_err_message"], set: async (v) => { L0["c_err_message"] = v; }, local: true }, false)), [(await $.mv(((await $.idx((await $.wv([$t3], "Components", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name"))]], C))])));
            }
          }
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
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
    const $t7 = (await $.mv((await $.v(C, "out_Transactiondatamodule")), "Transactions"));
    await $.stmt((await $.wcall([$t7], "Locate", ["ID", (await $.wv([$t7], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), []], C)));
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
  U.method("TTransactionManagerForm", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "kis": 0, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.mv((await $.v(C, "out_Transactiondatamodule")), "Transactions"));
    try {
      await $.wset([$t8], "TransactionID", (await $.mv((await $.wcall([$t8], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
      await $.stmt($.wcall([$t8], "Close", [], C));
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t8], "out_Transactiondatamodule", C, false)), "Transactions")), "SetVariable", ["TransactionDate", (await $.wv([$t8], "CurrentDate", C, false))])));
      await $.stmt($.wcall([$t8], "Open", [], C));
      if ($.truthy($.ne((await $.wv([$t8], "TransactionState", C, false)), (await $.wv([$t8], "tsDelete", C, false))))) {
        await $.stmt((await $.wcall([$t8], "GotoTransaction", [(await $.wv([$t8], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))], C)));
      }
      await $.wset([$t8], "TransactionState", (await $.wv([$t8], "tsDelete", C, false)), C);
    } finally {
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "OperationMode", (await $.v(C, "omInsert")));
  {
    const $t9 = (await $.v(C, "out_transactiondatamodule"));
    await $.mcall((await $.wv([$t9], "Transactions", C, false)), "Insert", []);
  }
  await $.stmt($.call(C, "InitProperties", []));
  await $.mcall((await $.mv((await $.v(C, "GridTransactions")), "SelectedRows")), "Clear", []);
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
    const $t10 = (await $.v(C, "out_transactiondatamodule"));
    await $.mcall((await $.wv([$t10], "Operations", C, false)), "Execute", []);
    await $.mcall((await $.wv([$t10], "Valute", C, false)), "Execute", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
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
    const $t11 = L1["checklistbox"];
    const $t12 = (await $.wv([$t11], "Items", C, false));
    await $.wset([$t11, $t12], "Position", 0, { get: async () => L1["position"], set: async (v) => { L1["position"] = v; }, local: true });
    if ($.truthy($.not(($.gt((await $.wv([$t11, $t12], "Count", C, false)), 0))))) {
      return L1.result;
    }
    if ($.truthy($.not((await $.idx((await $.wv([$t11, $t12], "Checked", C, false)), [0]))))) {
      if ($.truthy($.eq((await $.wv([$t11, $t12], "ICount", { get: async () => L1["icount"], set: async (v) => { L1["icount"] = v; }, local: true }, false)), 1))) {
        await $.wset([$t11, $t12], "Filter", (await $.wcall([$t11, $t12], "Format", [(await $.wv([$t11, $t12], "FilterConst", { get: async () => L1["filterconst"], set: async (v) => { L1["filterconst"] = v; }, local: true }, false)), [(await $.wcall([$t11, $t12], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t11, $t12], "TStringList", [(await $.wcall([$t11, $t12], "Pointer", [(await $.wv([$t11, $t12], "Tag", C, false))], C))], C)), "Strings")), [0]))], C))]], C)), { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true });
      } else {
        await $.wset([$t11, $t12], "Filter", (await $.wcall([$t11, $t12], "Format", [(await $.wv([$t11, $t12], "FilterConst", { get: async () => L1["filterconst"], set: async (v) => { L1["filterconst"] = v; }, local: true }, false)), [(await $.wcall([$t11, $t12], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t11, $t12], "TStringList", [(await $.wcall([$t11, $t12], "Pointer", [(await $.wv([$t11, $t12], "Tag", C, false))], C))], C)), "Strings")), [0]))], C)), (await $.wcall([$t11, $t12], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t11, $t12], "TStringList", [(await $.wcall([$t11, $t12], "Pointer", [(await $.wv([$t11, $t12], "Tag", C, false))], C))], C)), "Strings")), [0]))], C))]], C)), { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true });
      }
    } else {
      await $.wset([$t11, $t12], "Filter", "", { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true });
    }
    { const $t13 = $.sub((await $.mv((await $.wv([$t11, $t12], "Items", C, false)), "Count")), 1);
      await $.wset([$t11, $t12], "i", 1, { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true });
      let $t14 = true;
      for (;;) {
        if (!$t14) { await $.wset([$t11, $t12], "i", $.succ((await $.wv([$t11, $t12], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), 1), { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }); }
        $t14 = false;
        if (!($.ord((await $.wv([$t11, $t12], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))) <= $.ord($t13))) break;
        if ($.truthy($.not((await $.idx((await $.wv([$t11, $t12], "Checked", C, false)), [(await $.wv([$t11, $t12], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))))) {
          if ($.truthy($.eq((await $.wv([$t11, $t12], "ICount", { get: async () => L1["icount"], set: async (v) => { L1["icount"] = v; }, local: true }, false)), 1))) {
            await $.wset([$t11, $t12], "Filter", $.add($.add((await $.wv([$t11, $t12], "Filter", { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true }, false)), (await $.wcall([$t11, $t12], "AddBoolPrefix", [$.not((await $.idx((await $.wv([$t11, $t12], "Checked", C, false)), [(await $.wv([$t11, $t12], "Position", { get: async () => L1["position"], set: async (v) => { L1["position"] = v; }, local: true }, false))])))], { get: async () => L0["addboolprefix"], set: async (v) => { L0["addboolprefix"] = v; }, local: true }))), (await $.wcall([$t11, $t12], "Format", [(await $.wv([$t11, $t12], "FilterConst", { get: async () => L1["filterconst"], set: async (v) => { L1["filterconst"] = v; }, local: true }, false)), [(await $.wcall([$t11, $t12], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t11, $t12], "TStringList", [(await $.wcall([$t11, $t12], "Pointer", [(await $.wv([$t11, $t12], "Tag", C, false))], C))], C)), "Strings")), [(await $.wv([$t11, $t12], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))], C))]], C))), { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true });
          } else {
            await $.wset([$t11, $t12], "Filter", $.add($.add((await $.wv([$t11, $t12], "Filter", { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true }, false)), (await $.wcall([$t11, $t12], "AddBoolPrefix", [$.not((await $.idx((await $.wv([$t11, $t12], "Checked", C, false)), [(await $.wv([$t11, $t12], "Position", { get: async () => L1["position"], set: async (v) => { L1["position"] = v; }, local: true }, false))])))], { get: async () => L0["addboolprefix"], set: async (v) => { L0["addboolprefix"] = v; }, local: true }))), (await $.wcall([$t11, $t12], "Format", [(await $.wv([$t11, $t12], "FilterConst", { get: async () => L1["filterconst"], set: async (v) => { L1["filterconst"] = v; }, local: true }, false)), [(await $.wcall([$t11, $t12], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t11, $t12], "TStringList", [(await $.wcall([$t11, $t12], "Pointer", [(await $.wv([$t11, $t12], "Tag", C, false))], C))], C)), "Strings")), [(await $.wv([$t11, $t12], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))], C)), (await $.wcall([$t11, $t12], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t11, $t12], "TStringList", [(await $.wcall([$t11, $t12], "Pointer", [(await $.wv([$t11, $t12], "Tag", C, false))], C))], C)), "Strings")), [(await $.wv([$t11, $t12], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))], C))]], C))), { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true });
          }
          await $.wset([$t11, $t12], "Position", (await $.wv([$t11, $t12], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), { get: async () => L1["position"], set: async (v) => { L1["position"] = v; }, local: true });
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
    const $t15 = (await $.mv((await $.mv((await $.v(C, "GridTransactions")), "DataSource")), "DataSet"));
    await $.wset([$t15], "Filtered", (await $.wv([$t15], "False", C, false)), C);
    await $.wset([$t15], "Filter", (await $.wv([$t15], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false)), C);
    await $.wset([$t15], "Filtered", (await $.wv([$t15], "True", C, false)), C);
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
    const $t16 = (await $.v(C, "GridTransactions"));
    const $t17 = (await $.wv([$t16], "SelectedRows", C, false));
    const $t18 = (await $.mv((await $.wv([$t16, $t17], "DataSource", C, false)), "DataSet"));
    if ($.truthy((await $.or_(($.eq((await $.wv([$t16, $t17, $t18], "Count", C, false)), 1)), async () => ($.eq((await $.wv([$t16, $t17, $t18], "Count", C, false)), 0)))))) {
      await $.stmt($.wcall([$t16, $t17, $t18], "CheckRow", [], { get: async () => L0["checkrow"], set: async (v) => { L0["checkrow"] = v; }, local: true }));
    } else {
      await $.stmt($.wcall([$t16, $t17, $t18], "DisableControls", [], C));
      await $.wset([$t16, $t17, $t18], "SavedPos", (await $.wv([$t16, $t17, $t18], "GetBookmark", C, false)), { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true });
      try {
        { const $t19 = $.sub((await $.wv([$t16, $t17, $t18], "Count", C, false)), 1);
          await $.wset([$t16, $t17, $t18], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
          let $t20 = true;
          for (;;) {
            if (!$t20) { await $.wset([$t16, $t17, $t18], "Index", $.succ((await $.wv([$t16, $t17, $t18], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
            $t20 = false;
            if (!($.ord((await $.wv([$t16, $t17, $t18], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t19))) break;
            await $.stmt((await $.wcall([$t16, $t17, $t18], "GotoBookmark", [(await $.wcall([$t16, $t17, $t18], "TBookmark", [(await $.idx((await $.wv([$t16, $t17, $t18], "Items", C, false)), [(await $.wv([$t16, $t17, $t18], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
            await $.stmt($.wcall([$t16, $t17, $t18], "CheckRow", [], { get: async () => L0["checkrow"], set: async (v) => { L0["checkrow"] = v; }, local: true }));
            if ($.truthy((await $.wv([$t16, $t17, $t18], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)))) {
              break;
            }
            await $.tick();
          }
        }
      } finally {
        await $.stmt((await $.wcall([$t16, $t17, $t18], "GotoBookmark", [(await $.wv([$t16, $t17, $t18], "SavedPos", { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true }, false))], C)));
        await $.stmt($.wcall([$t16, $t17, $t18], "EnableControls", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Flag"], "kind": "function", "ptypes": ["Word"]});
  U.method("TTransactionManagerForm", "ActionSpeedSearchExecute", async function ActionSpeedSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t21 = L0["sender"];
    await $.wset([$t21], "SearchField", (await $.wcall([$t21], "copy", [(await $.wv([$t21], "Name", C, false)), 5, (await $.wcall([$t21], "length", [(await $.wv([$t21], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t22 = (await $.wcall([$t21], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t21], "GridTransactions", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t21, $t22], "SearchRecord", [(await $.wv([$t21, $t22], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t21, $t22], "Text", C, false)), $.add((await $.wv([$t21, $t22], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t21, $t22], "srFromCurrent", C, false)), (await $.wv([$t21, $t22], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t21, $t22], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t21, $t22], "mtInformation", C, false)), [(await $.wv([$t21, $t22], "mbNo", C, false)), (await $.wv([$t21, $t22], "mbYes", C, false))], 0], C)), (await $.wv([$t21, $t22], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t21, $t22], "SearchRecord", [(await $.wv([$t21, $t22], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t21, $t22], "Text", C, false)), $.add((await $.wv([$t21, $t22], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t21, $t22], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t21, $t22], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t21, $t22], "mtInformation", C, false)), [(await $.wv([$t21, $t22], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActionRefreshExecute", async function ActionRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "kis": 0, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t23 = (await $.mv((await $.v(C, "out_transactiondatamodule")), "Transactions"));
    try {
      await $.wset([$t23], "TransactionID", (await $.mv((await $.wcall([$t23], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
      await $.stmt($.wcall([$t23], "Close", [], C));
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t23], "out_transactiondatamodule", C, false)), "Transactions")), "SetVariable", ["TransactionDate", (await $.wv([$t23], "CurrentDate", C, false))])));
      await $.stmt($.wcall([$t23], "Open", [], C));
      if ($.truthy($.ne((await $.wv([$t23], "TransactionState", C, false)), (await $.wv([$t23], "tsDelete", C, false))))) {
        await $.stmt((await $.wcall([$t23], "GotoTransaction", [(await $.wv([$t23], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))], C)));
      }
      await $.wset([$t23], "TransactionState", (await $.wv([$t23], "tsDelete", C, false)), C);
    } finally {
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActionInsertExecute", async function ActionInsertExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "OperationMode", (await $.v(C, "omInsert")));
    {
      const $t24 = (await $.v(C, "out_transactiondatamodule"));
      const $t25 = (await $.wv([$t24], "TransactionEditForm", C, false));
      await $.stmt((await $.mcall((await $.wv([$t24, $t25], "SB_ACA", C, false)), "CallProcedure", ["CheckObjectAccess", ["out_Transactionmanagerform", "insert"]])));
      await $.mcall((await $.wv([$t24, $t25], "Transactions", C, false)), "Insert", []);
      await $.stmt($.wcall([$t24, $t25], "InitProperties", [], C));
    }
    await $.mcall((await $.mv((await $.v(C, "GridTransactions")), "SelectedRows")), "Clear", []);
  } finally {
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActionEditExecute", async function ActionEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "OperationMode", (await $.v(C, "omEdit")));
  {
    const $t26 = (await $.v(C, "out_transactiondatamodule"));
    await $.stmt((await $.mcall((await $.wv([$t26], "SB_ACA", C, false)), "CallProcedure", ["CheckObjectAccess", ["out_Transactionmanagerform", "update"]])));
    await $.mcall((await $.wv([$t26], "Transactions", C, false)), "Edit", []);
  }
  await $.stmt($.call(C, "InitProperties", []));
  await $.mcall((await $.mv((await $.v(C, "GridTransactions")), "SelectedRows")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActionDeleteExecute", async function ActionDeleteExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "out_TransactionDataModule")), "SB_ACA")), "CallProcedure", ["CheckObjectAccess", ["out_Transactionmanagerform", "delete"]])));
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  await $.stmt($.call(C, "Focus", []));
  {
    const $t27 = (await $.v(C, "GridTransactions"));
    const $t28 = (await $.wv([$t27], "SelectedRows", C, false));
    const $t29 = (await $.mv((await $.wv([$t27, $t28], "DataSource", C, false)), "DataSet"));
    const $t30 = (await $.wv([$t27, $t28, $t29], "out_transactiondatamodule", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t27, $t28, $t29, $t30], "Count", C, false)), 0))) {
        await $.wset([$t27, $t28, $t29, $t30], "CurrentRowSelected", (await $.wv([$t27, $t28, $t29, $t30], "True", C, false)), C);
      }
      { const $t31 = $.sub((await $.wv([$t27, $t28, $t29, $t30], "Count", C, false)), 1);
        await $.wset([$t27, $t28, $t29, $t30], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t32 = true;
        for (;;) {
          if (!$t32) { await $.wset([$t27, $t28, $t29, $t30], "Index", $.succ((await $.wv([$t27, $t28, $t29, $t30], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t32 = false;
          if (!($.ord((await $.wv([$t27, $t28, $t29, $t30], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t31))) break;
          await $.stmt((await $.wcall([$t27, $t28, $t29, $t30], "GotoBookmark", [(await $.wcall([$t27, $t28, $t29, $t30], "Pointer", [(await $.idx((await $.wv([$t27, $t28, $t29, $t30], "Items", C, false)), [(await $.wv([$t27, $t28, $t29, $t30], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t27, $t28, $t29, $t30], "TransactionID", (await $.mv((await $.wcall([$t27, $t28, $t29, $t30], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t27, $t28, $t29, $t30], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t33 = (await $.wcall([$t27, $t28, $t29, $t30], "MessageDlg", [(await $.wcall([$t27, $t28, $t29, $t30], "Format", ["Əməliyyat #%d silinsinmi?", [(await $.wv([$t27, $t28, $t29, $t30], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)), (await $.wv([$t27, $t28, $t29, $t30], "mtConfirmation", C, false)), [(await $.wv([$t27, $t28, $t29, $t30], "mbYes", C, false)), (await $.wv([$t27, $t28, $t29, $t30], "mbNo", C, false)), (await $.wv([$t27, $t28, $t29, $t30], "mbCancel", C, false)), (await $.wv([$t27, $t28, $t29, $t30], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t33, (await $.wv([$t27, $t28, $t29, $t30], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t33, (await $.wv([$t27, $t28, $t29, $t30], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t33, (await $.wv([$t27, $t28, $t29, $t30], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t27, $t28, $t29, $t30], "MessageDlg", [(await $.wcall([$t27, $t28, $t29, $t30], "Format", ["%d  sayda əməliyyat silinsinmi?", [$.sub((await $.wv([$t27, $t28, $t29, $t30], "Count", C, false)), (await $.wv([$t27, $t28, $t29, $t30], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t27, $t28, $t29, $t30], "mtConfirmation", C, false)), [(await $.wv([$t27, $t28, $t29, $t30], "mbYes", C, false)), (await $.wv([$t27, $t28, $t29, $t30], "mbCancel", C, false))], 0], C)), (await $.wv([$t27, $t28, $t29, $t30], "mrYes", C, false))))) {
                  await $.wset([$t27, $t28, $t29, $t30], "WaitNextConfirm", (await $.wv([$t27, $t28, $t29, $t30], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t27, $t28, $t29, $t30], "Application", C, false)), "ProcessMessages", []);
          await $.stmt((await $.wcall([$t27, $t28, $t29, $t30], "DeleteTransaction", [(await $.wv([$t27, $t28, $t29, $t30], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))], C)));
          await $.wset([$t27, $t28, $t29, $t30], "WillRefresh", (await $.wv([$t27, $t28, $t29, $t30], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.stmt($.wcall([$t27, $t28, $t29, $t30], "SBCommit", [], C));
          await $.wset([$t27, $t28, $t29, $t30], "TransactionState", (await $.wv([$t27, $t28, $t29, $t30], "tsDelete", C, false)), C);
          await $.tick();
        }
      }
    } finally {
      if ($.truthy((await $.wv([$t27, $t28, $t29, $t30], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.stmt((await $.wcall([$t27, $t28, $t29, $t30], "ActionRefreshExecute", [(await $.wv([$t27, $t28, $t29, $t30], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "OperationMode", (await $.v(C, "omEdit")));
  {
    const $t34 = (await $.v(C, "out_transactiondatamodule"));
    await $.mcall((await $.wv([$t34], "Transactions", C, false)), "Edit", []);
  }
  await $.stmt($.call(C, "InitProperties", []));
  await $.mcall((await $.mv((await $.v(C, "GridTransactions")), "SelectedRows")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ToolButton4Click", async function ToolButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  await $.stmt($.call(C, "Focus", []));
  {
    const $t35 = (await $.v(C, "GridTransactions"));
    const $t36 = (await $.wv([$t35], "SelectedRows", C, false));
    const $t37 = (await $.mv((await $.wv([$t35, $t36], "DataSource", C, false)), "DataSet"));
    const $t38 = (await $.wv([$t35, $t36, $t37], "out_transactiondatamodule", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t35, $t36, $t37, $t38], "Count", C, false)), 0))) {
        await $.wset([$t35, $t36, $t37, $t38], "CurrentRowSelected", (await $.wv([$t35, $t36, $t37, $t38], "True", C, false)), C);
      }
      { const $t39 = $.sub((await $.wv([$t35, $t36, $t37, $t38], "Count", C, false)), 1);
        await $.wset([$t35, $t36, $t37, $t38], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t40 = true;
        for (;;) {
          if (!$t40) { await $.wset([$t35, $t36, $t37, $t38], "Index", $.succ((await $.wv([$t35, $t36, $t37, $t38], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t40 = false;
          if (!($.ord((await $.wv([$t35, $t36, $t37, $t38], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t39))) break;
          await $.stmt((await $.wcall([$t35, $t36, $t37, $t38], "GotoBookmark", [(await $.wcall([$t35, $t36, $t37, $t38], "Pointer", [(await $.idx((await $.wv([$t35, $t36, $t37, $t38], "Items", C, false)), [(await $.wv([$t35, $t36, $t37, $t38], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t35, $t36, $t37, $t38], "TransactionID", (await $.mv((await $.wcall([$t35, $t36, $t37, $t38], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t35, $t36, $t37, $t38], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t41 = (await $.wcall([$t35, $t36, $t37, $t38], "MessageDlg", [(await $.wcall([$t35, $t36, $t37, $t38], "Format", ["Əməliyyat #%d silinsinmi?", [(await $.wv([$t35, $t36, $t37, $t38], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)), (await $.wv([$t35, $t36, $t37, $t38], "mtConfirmation", C, false)), [(await $.wv([$t35, $t36, $t37, $t38], "mbYes", C, false)), (await $.wv([$t35, $t36, $t37, $t38], "mbNo", C, false)), (await $.wv([$t35, $t36, $t37, $t38], "mbCancel", C, false)), (await $.wv([$t35, $t36, $t37, $t38], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t41, (await $.wv([$t35, $t36, $t37, $t38], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t41, (await $.wv([$t35, $t36, $t37, $t38], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t41, (await $.wv([$t35, $t36, $t37, $t38], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t35, $t36, $t37, $t38], "MessageDlg", [(await $.wcall([$t35, $t36, $t37, $t38], "Format", ["%d  sayda əməliyyat silinsinmi?", [$.sub((await $.wv([$t35, $t36, $t37, $t38], "Count", C, false)), (await $.wv([$t35, $t36, $t37, $t38], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t35, $t36, $t37, $t38], "mtConfirmation", C, false)), [(await $.wv([$t35, $t36, $t37, $t38], "mbYes", C, false)), (await $.wv([$t35, $t36, $t37, $t38], "mbCancel", C, false))], 0], C)), (await $.wv([$t35, $t36, $t37, $t38], "mrYes", C, false))))) {
                  await $.wset([$t35, $t36, $t37, $t38], "WaitNextConfirm", (await $.wv([$t35, $t36, $t37, $t38], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t35, $t36, $t37, $t38], "Application", C, false)), "ProcessMessages", []);
          await $.stmt((await $.wcall([$t35, $t36, $t37, $t38], "DeleteTransaction", [(await $.wv([$t35, $t36, $t37, $t38], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))], C)));
          await $.wset([$t35, $t36, $t37, $t38], "WillRefresh", (await $.wv([$t35, $t36, $t37, $t38], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.stmt($.wcall([$t35, $t36, $t37, $t38], "SBCommit", [], C));
          await $.wset([$t35, $t36, $t37, $t38], "TransactionState", (await $.wv([$t35, $t36, $t37, $t38], "tsDelete", C, false)), C);
          await $.tick();
        }
      }
    } finally {
      if ($.truthy((await $.wv([$t35, $t36, $t37, $t38], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.stmt((await $.wcall([$t35, $t36, $t37, $t38], "ActionRefreshExecute", [(await $.wv([$t35, $t36, $t37, $t38], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "ids": '', "status": 0, "trcount": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["ids"] = "";
  L0["trcount"] = 0;
  {
    const $t42 = (await $.v(C, "GridTransactions"));
    const $t43 = (await $.wv([$t42], "SelectedRows", C, false));
    const $t44 = (await $.mv((await $.wv([$t42, $t43], "DataSource", C, false)), "DataSet"));
    if ($.truthy($.eq((await $.wv([$t42, $t43, $t44], "Count", C, false)), 0))) {
      await $.stmt((await $.wcall([$t42, $t43, $t44], "Inc", [$.ref(async () => (await $.wv([$t42, $t43, $t44], "TrCount", { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }, false)), async ($t45) => { await $.wset([$t42, $t43, $t44], "TrCount", $t45, { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }); })], C)));
      await $.wset([$t42, $t43, $t44], "IDs", (await $.mv((await $.wcall([$t42, $t43, $t44], "FieldByName", ["ID"], C)), "AsString")), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
    } else {
      await $.stmt($.wcall([$t42, $t43, $t44], "DisableControls", [], C));
      try {
        { const $t46 = $.sub((await $.wv([$t42, $t43, $t44], "Count", C, false)), 1);
          await $.wset([$t42, $t43, $t44], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t47 = true;
          for (;;) {
            if (!$t47) { await $.wset([$t42, $t43, $t44], "i", $.succ((await $.wv([$t42, $t43, $t44], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t47 = false;
            if (!($.ord((await $.wv([$t42, $t43, $t44], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t46))) break;
            await $.stmt((await $.wcall([$t42, $t43, $t44], "GotoBookmark", [(await $.wcall([$t42, $t43, $t44], "TBookmark", [(await $.idx((await $.wv([$t42, $t43, $t44], "Items", C, false)), [(await $.wv([$t42, $t43, $t44], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            await $.wset([$t42, $t43, $t44], "Status", (await $.mv((await $.wcall([$t42, $t43, $t44], "FieldByname", ["Status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
            if ($.truthy($.in_((await $.wv([$t42, $t43, $t44], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t42, $t43, $t44], "tsDelayed", C, false)), (await $.wv([$t42, $t43, $t44], "tsRejected", C, false))]))) {
              await $.stmt((await $.wcall([$t42, $t43, $t44], "Inc", [$.ref(async () => (await $.wv([$t42, $t43, $t44], "TrCount", { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }, false)), async ($t48) => { await $.wset([$t42, $t43, $t44], "TrCount", $t48, { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }); })], C)));
              await $.wset([$t42, $t43, $t44], "IDs", $.add($.add((await $.wv([$t42, $t43, $t44], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), ","), (await $.mv((await $.wcall([$t42, $t43, $t44], "FieldByName", ["ID"], C)), "AsString"))), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
            }
            await $.tick();
          }
        }
        await $.stmt((await $.mcall((await $.wv([$t42, $t43, $t44], "System", C, false)), "Delete", [$.ref(async () => (await $.wv([$t42, $t43, $t44], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), async ($t49) => { await $.wset([$t42, $t43, $t44], "IDs", $t49, { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }); }), 1, 1])));
      } finally {
        await $.stmt($.wcall([$t42, $t43, $t44], "EnableControls", [], C));
      }
    }
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["%d sayda əməliyyat təsdiqlənsinmi?", [L0["trcount"]]])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t50 = (await $.v(C, "out_transactionDataModule"));
      await $.stmt((await $.wcall([$t50], "CommitTransactions", [(await $.wv([$t50], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t50], "SBCommit", [], C)));
      await $.stmt((await $.wcall([$t50], "ActionRefreshExecute", [(await $.wv([$t50], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ToolButton6Click", async function ToolButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "id": 0, "willrefresh": false, "status": 0, "commitedcount": 0, "errorcount": 0, "lasterrormessage": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["commitedcount"] = 0;
  L0["errorcount"] = 0;
  L0["willrefresh"] = false;
  {
    const $t51 = (await $.v(C, "out_transactionDataModule"));
    const $t52 = (await $.wv([$t51], "GridTransactions", C, false));
    const $t53 = (await $.wv([$t51, $t52], "SelectedRows", C, false));
    const $t54 = (await $.mv((await $.wv([$t51, $t52, $t53], "DataSource", C, false)), "DataSet"));
    if ($.truthy($.eq((await $.wcall([$t51, $t52, $t53, $t54], "MessageDlg", ["Əməliyyatlar təsdiqlənsinmi?", (await $.wv([$t51, $t52, $t53, $t54], "mtConfirmation", C, false)), [(await $.wv([$t51, $t52, $t53, $t54], "mbYes", C, false)), (await $.wv([$t51, $t52, $t53, $t54], "mbCancel", C, false))], 0], C)), (await $.wv([$t51, $t52, $t53, $t54], "mrYes", C, false))))) {
      await $.stmt($.wcall([$t51, $t52, $t53, $t54], "DisableControls", [], C));
      try {
        await $.mcall((await $.wv([$t51, $t52, $t53, $t54], "Application", C, false)), "ProcessMessages", []);
        if ($.truthy($.eq((await $.wv([$t51, $t52, $t53, $t54], "Count", C, false)), 0))) {
          await $.wset([$t51, $t52, $t53, $t54], "CurrentRowSelected", (await $.wv([$t51, $t52, $t53, $t54], "True", C, false)), C);
        }
        { const $t55 = $.sub((await $.wv([$t51, $t52, $t53, $t54], "Count", C, false)), 1);
          await $.wset([$t51, $t52, $t53, $t54], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t56 = true;
          for (;;) {
            if (!$t56) { await $.wset([$t51, $t52, $t53, $t54], "i", $.succ((await $.wv([$t51, $t52, $t53, $t54], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t56 = false;
            if (!($.ord((await $.wv([$t51, $t52, $t53, $t54], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t55))) break;
            try {
              await $.stmt((await $.wcall([$t51, $t52, $t53, $t54], "GotoBookmark", [(await $.wcall([$t51, $t52, $t53, $t54], "TBookmark", [(await $.idx((await $.wv([$t51, $t52, $t53, $t54], "Items", C, false)), [(await $.wv([$t51, $t52, $t53, $t54], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
              await $.wset([$t51, $t52, $t53, $t54], "Status", (await $.mv((await $.wcall([$t51, $t52, $t53, $t54], "FieldByname", ["Status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
              if ($.truthy($.in_((await $.wv([$t51, $t52, $t53, $t54], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t51, $t52, $t53, $t54], "tsDelayed", C, false)), (await $.wv([$t51, $t52, $t53, $t54], "tsRejected", C, false))]))) {
                await $.wset([$t51, $t52, $t53, $t54], "ID", (await $.mv((await $.wcall([$t51, $t52, $t53, $t54], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
                await $.stmt((await $.wcall([$t51, $t52, $t53, $t54], "CommitTransaction", [(await $.wv([$t51, $t52, $t53, $t54], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))], C)));
                await $.wset([$t51, $t52, $t53, $t54], "WillRefresh", (await $.wv([$t51, $t52, $t53, $t54], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
                await $.stmt((await $.wcall([$t51, $t52, $t53, $t54], "Inc", [$.ref(async () => (await $.wv([$t51, $t52, $t53, $t54], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), async ($t58) => { await $.wset([$t51, $t52, $t53, $t54], "CommitedCount", $t58, { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }); })], C)));
                await $.stmt((await $.wcall([$t51, $t52, $t53, $t54], "SBCommit", [], C)));
              }
            } catch ($t57) {
              $.rethrowControl($t57);
              if ($.excIs($t57, "Exception")) {
                L0["e"] = $.exc($t57);
                await $.wset([$t51, $t52, $t53, $t54], "LastErrorMessage", (await $.mv((await $.wv([$t51, $t52, $t53, $t54], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), { get: async () => L0["lasterrormessage"], set: async (v) => { L0["lasterrormessage"] = v; }, local: true });
                await $.stmt((await $.wcall([$t51, $t52, $t53, $t54], "Inc", [$.ref(async () => (await $.wv([$t51, $t52, $t53, $t54], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), async ($t59) => { await $.wset([$t51, $t52, $t53, $t54], "ErrorCount", $t59, { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }); })], C)));
                continue;
              }
              else { throw $t57; }
            }
            await $.tick();
          }
        }
      } finally {
        if ($.truthy($.gt((await $.wv([$t51, $t52, $t53, $t54], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), 0))) {
          if ($.truthy($.eq((await $.wv([$t51, $t52, $t53, $t54], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), 1))) {
            await $.stmt((await $.wcall([$t51, $t52, $t53, $t54], "MessageDlg", [(await $.wv([$t51, $t52, $t53, $t54], "LastErrorMessage", { get: async () => L0["lasterrormessage"], set: async (v) => { L0["lasterrormessage"] = v; }, local: true }, false)), (await $.wv([$t51, $t52, $t53, $t54], "mtConfirmation", C, false)), [(await $.wv([$t51, $t52, $t53, $t54], "mbOk", C, false))], 0], C)));
          } else {
            await $.stmt((await $.wcall([$t51, $t52, $t53, $t54], "MessageDlg", [(await $.wcall([$t51, $t52, $t53, $t54], "Format", [(await $.wv([$t51, $t52, $t53, $t54], "cs_CommitInformation", C, false)), [$.add((await $.wv([$t51, $t52, $t53, $t54], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), (await $.wv([$t51, $t52, $t53, $t54], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false))), (await $.wv([$t51, $t52, $t53, $t54], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), (await $.wv([$t51, $t52, $t53, $t54], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false))]], C)), (await $.wv([$t51, $t52, $t53, $t54], "mtConfirmation", C, false)), [(await $.wv([$t51, $t52, $t53, $t54], "mbOk", C, false))], 0], C)));
          }
        }
        await $.stmt($.wcall([$t51, $t52, $t53, $t54], "EnableControls", [], C));
        if ($.truthy((await $.wv([$t51, $t52, $t53, $t54], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
          await $.wset([$t51, $t52, $t53, $t54], "TransactionState", (await $.wv([$t51, $t52, $t53, $t54], "tsCommit", C, false)), C);
          await $.stmt((await $.wcall([$t51, $t52, $t53, $t54], "ActionRefreshExecute", [(await $.wv([$t51, $t52, $t53, $t54], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "id": 0, "willrefresh": false, "rejectreason": '', "status": 0, "rejectedcount": 0, "errorcount": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["errorcount"] = 0;
  L0["rejectedcount"] = 0;
  L0["willrefresh"] = false;
  if ($.truthy((await $.call(C, "InputQuery", ["İnkarolunma !!! ", "Təyinat:", $.ref(async () => L0["rejectreason"], async ($t60) => { L0["rejectreason"] = $t60; })])))) {
    {
      const $t61 = (await $.v(C, "out_transactionDataModule"));
      const $t62 = (await $.wv([$t61], "GridTransactions", C, false));
      const $t63 = (await $.wv([$t61, $t62], "SelectedRows", C, false));
      const $t64 = (await $.mv((await $.wv([$t61, $t62, $t63], "DataSource", C, false)), "DataSet"));
      if ($.truthy($.eq((await $.wv([$t61, $t62, $t63, $t64], "Count", C, false)), 0))) {
        await $.wset([$t61, $t62, $t63, $t64], "CurrentRowSelected", (await $.wv([$t61, $t62, $t63, $t64], "True", C, false)), C);
      }
      { const $t65 = $.sub((await $.wv([$t61, $t62, $t63, $t64], "Count", C, false)), 1);
        await $.wset([$t61, $t62, $t63, $t64], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t66 = true;
        for (;;) {
          if (!$t66) { await $.wset([$t61, $t62, $t63, $t64], "i", $.succ((await $.wv([$t61, $t62, $t63, $t64], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t66 = false;
          if (!($.ord((await $.wv([$t61, $t62, $t63, $t64], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t65))) break;
          try {
            await $.stmt((await $.wcall([$t61, $t62, $t63, $t64], "GotoBookmark", [(await $.wcall([$t61, $t62, $t63, $t64], "TBookmark", [(await $.idx((await $.wv([$t61, $t62, $t63, $t64], "Items", C, false)), [(await $.wv([$t61, $t62, $t63, $t64], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            await $.wset([$t61, $t62, $t63, $t64], "Status", (await $.mv((await $.wcall([$t61, $t62, $t63, $t64], "FieldByname", ["Status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
            if ($.truthy($.in_((await $.wv([$t61, $t62, $t63, $t64], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t61, $t62, $t63, $t64], "tsDelayed", C, false)), (await $.wv([$t61, $t62, $t63, $t64], "tsRejected", C, false))]))) {
              await $.wset([$t61, $t62, $t63, $t64], "ID", (await $.mv((await $.wcall([$t61, $t62, $t63, $t64], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
              await $.stmt((await $.wcall([$t61, $t62, $t63, $t64], "RejectTransaction", [(await $.wv([$t61, $t62, $t63, $t64], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), (await $.wv([$t61, $t62, $t63, $t64], "RejectReason", { get: async () => L0["rejectreason"], set: async (v) => { L0["rejectreason"] = v; }, local: true }, false))], C)));
              await $.wset([$t61, $t62, $t63, $t64], "WillRefresh", (await $.wv([$t61, $t62, $t63, $t64], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
              await $.stmt((await $.wcall([$t61, $t62, $t63, $t64], "Inc", [$.ref(async () => (await $.wv([$t61, $t62, $t63, $t64], "RejectedCount", { get: async () => L0["rejectedcount"], set: async (v) => { L0["rejectedcount"] = v; }, local: true }, false)), async ($t68) => { await $.wset([$t61, $t62, $t63, $t64], "RejectedCount", $t68, { get: async () => L0["rejectedcount"], set: async (v) => { L0["rejectedcount"] = v; }, local: true }); })], C)));
              await $.stmt((await $.wcall([$t61, $t62, $t63, $t64], "SBCommit", [], C)));
            }
          } catch ($t67) {
            $.rethrowControl($t67);
            $.handled($t67);
            await $.stmt((await $.wcall([$t61, $t62, $t63, $t64], "Inc", [$.ref(async () => (await $.wv([$t61, $t62, $t63, $t64], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), async ($t69) => { await $.wset([$t61, $t62, $t63, $t64], "ErrorCount", $t69, { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }); })], C)));
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
  U.method("TTransactionManagerForm", "DBLookup2Click", async function DBLookup2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ActionFilter")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "DBLookup1Click", async function DBLookup1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ActionFilter")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "DBLookup3Click", async function DBLookup3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ActionFilter")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "CBDebetFilialClick", async function CBDebetFilialClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dblookupno": '', "dblookupname": '', "dblookup": null};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t70 = (await $.call(C, "TCheckBox", [L0["sender"]]));
    await $.wset([$t70], "DBLookupNo", (await $.wcall([$t70], "IntToStr", [(await $.wv([$t70], "Tag", C, false))], C)), { get: async () => L0["dblookupno"], set: async (v) => { L0["dblookupno"] = v; }, local: true });
  }
  L0["dblookupname"] = $.add("DBLookup", L0["dblookupno"]);
  L0["dblookup"] = (await $.call(C, "TDBLookupComboBox", [(await $.call(C, "FindComponent", [L0["dblookupname"]]))]));
  {
    const $t71 = L0["dblookup"];
    const $t72 = (await $.wcall([$t71], "TCheckBox", [(await $.wv([$t71], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C));
    if ($.truthy((await $.wv([$t71, $t72], "Checked", C, false)))) {
      await $.mcall((await $.mv((await $.wv([$t71, $t72], "ListSource", C, false)), "DataSet")), "First", []);
      await $.wset([$t71, $t72], "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t71, $t72], "ListSource", C, false)), "DataSet")), "FieldByName", [(await $.wv([$t71, $t72], "KeyField", C, false))])), "AsInteger")), C);
    } else {
      await $.wset([$t71, $t72], "KeyValue", (-(1)), C);
    }
  }
  await $.mcall((await $.v(C, "ActionFilter")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "CBCreditFilialClick", async function CBCreditFilialClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dblookupno": '', "dblookupname": '', "dblookup": null};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t73 = (await $.call(C, "TCheckBox", [L0["sender"]]));
    await $.wset([$t73], "DBLookupNo", (await $.wcall([$t73], "IntToStr", [(await $.wv([$t73], "Tag", C, false))], C)), { get: async () => L0["dblookupno"], set: async (v) => { L0["dblookupno"] = v; }, local: true });
  }
  L0["dblookupname"] = $.add("DBLookup", L0["dblookupno"]);
  L0["dblookup"] = (await $.call(C, "TDBLookupComboBox", [(await $.call(C, "FindComponent", [L0["dblookupname"]]))]));
  {
    const $t74 = L0["dblookup"];
    const $t75 = (await $.wcall([$t74], "TCheckBox", [(await $.wv([$t74], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C));
    if ($.truthy((await $.wv([$t74, $t75], "Checked", C, false)))) {
      await $.mcall((await $.mv((await $.wv([$t74, $t75], "ListSource", C, false)), "DataSet")), "First", []);
      await $.wset([$t74, $t75], "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t74, $t75], "ListSource", C, false)), "DataSet")), "FieldByName", [(await $.wv([$t74, $t75], "KeyField", C, false))])), "AsInteger")), C);
    } else {
      await $.wset([$t74, $t75], "KeyValue", (-(1)), C);
    }
  }
  await $.mcall((await $.v(C, "ActionFilter")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "CBOperatorClick", async function CBOperatorClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dblookupno": '', "dblookupname": '', "dblookup": null};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t76 = (await $.call(C, "TCheckBox", [L0["sender"]]));
    await $.wset([$t76], "DBLookupNo", (await $.wcall([$t76], "IntToStr", [(await $.wv([$t76], "Tag", C, false))], C)), { get: async () => L0["dblookupno"], set: async (v) => { L0["dblookupno"] = v; }, local: true });
  }
  L0["dblookupname"] = $.add("DBLookup", L0["dblookupno"]);
  L0["dblookup"] = (await $.call(C, "TDBLookupComboBox", [(await $.call(C, "FindComponent", [L0["dblookupname"]]))]));
  {
    const $t77 = L0["dblookup"];
    const $t78 = (await $.wcall([$t77], "TCheckBox", [(await $.wv([$t77], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C));
    if ($.truthy((await $.wv([$t77, $t78], "Checked", C, false)))) {
      await $.mcall((await $.mv((await $.wv([$t77, $t78], "ListSource", C, false)), "DataSet")), "First", []);
      await $.wset([$t77, $t78], "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t77, $t78], "ListSource", C, false)), "DataSet")), "FieldByName", [(await $.wv([$t77, $t78], "KeyField", C, false))])), "AsInteger")), C);
    } else {
      await $.wset([$t77, $t78], "KeyValue", (-(1)), C);
    }
  }
  await $.mcall((await $.v(C, "ActionFilter")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "CBDelayedClick", async function CBDelayedClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ActionFilter")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "CBCommitedClick", async function CBCommitedClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ActionFilter")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "CBRejectedClick", async function CBRejectedClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ActionFilter")), "Execute", []);
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
  U.method("TTransactionManagerForm", "EditDEBITACCNOKeyPress", async function EditDEBITACCNOKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionManagerForm", "EditCREDITACCNOKeyPress", async function EditCREDITACCNOKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionManagerForm", "EditDEBITAMOUNTKeyPress", async function EditDEBITAMOUNTKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionManagerForm", "EditCREDITAMOUNTKeyPress", async function EditCREDITAMOUNTKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionManagerForm", "EditLAMOUNTKeyPress", async function EditLAMOUNTKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionManagerForm", "EditIDExit", async function EditIDExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "EditDEBITACCNOExit", async function EditDEBITACCNOExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "EditCREDITACCNOExit", async function EditCREDITACCNOExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "EditDEBITAMOUNTExit", async function EditDEBITAMOUNTExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "EditCREDITAMOUNTExit", async function EditCREDITAMOUNTExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "EditLAMOUNTExit", async function EditLAMOUNTExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
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
  await $.set(C, "out_transactiondatamodule", (await $.mcall((await $.v(C, "tout_transactiondatamodule")), "Create", [Self])));
  await $.set(C, "TransactionDestinationForm", (await $.mcall((await $.v(C, "TTransactionDestinationForm")), "Create", [Self])));
  await $.stmt($.call(C, "InitData", []));
  await $.mcall((await $.mv((await $.v(C, "out_transactiondatamodule")), "sysdat")), "open", []);
  {
    const $t79 = (await $.v(C, "out_transactiondatamodule"));
    await $.wset([$t79], "CurrentDate", (await $.mv((await $.mcall((await $.wv([$t79], "Sysdat", C, false)), "FieldByName", ["tek_dat"])), "AsDateTime")), C);
  }
  await $.set(C, "TransactionState", (await $.v(C, "tsDelete")));
  await $.stmt((await $.call(C, "ActionRefreshExecute", [L0["sender"]])));
  await $.stmt($.call(C, "SetAddress", []));
  await $.mcall((await $.v(C, "ActionLoadFilters")), "Execute", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActiveFormKeyDown", async function ActiveFormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TTransactionManagerForm", "GridTransactionsDblClick", async function GridTransactionsDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t80 = (await $.v(C, "out_transactiondatamodule"));
    await $.stmt((await $.mcall((await $.wv([$t80], "SB_ACA", C, false)), "CallProcedure", ["CheckObjectAccess", ["out_Transactionmanagerform", "update"]])));
  }
  await $.set(C, "OperationMode", (await $.v(C, "omEdit")));
  {
    const $t81 = (await $.v(C, "out_transactiondatamodule"));
    await $.mcall((await $.wv([$t81], "Transactions", C, false)), "Edit", []);
  }
  await $.stmt($.call(C, "InitProperties", []));
  await $.mcall((await $.mv((await $.v(C, "GridTransactions")), "SelectedRows")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "GridTransactionsDrawColumnCell", async function GridTransactionsDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t82 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t82], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t83 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t82], "DataSource", C, false)), "DataSet")), "FieldByName", ["Status"])), "AsInteger"));
        if ($.eq($t83, (await $.wv([$t82], "tsCommited", C, false)))) {
          await $.wset([$t82], "ImageIndex", 7, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t83, (await $.wv([$t82], "tsRejected", C, false)))) {
          await $.wset([$t82], "ImageIndex", 8, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t83, (await $.wv([$t82], "tsDelayed", C, false)))) {
          await $.wset([$t82], "ImageIndex", 9, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t82], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t82], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t82], "ImageList", C, false)), "Draw", [(await $.wv([$t82], "Canvas", C, false)), (await $.mv((await $.wv([$t82], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t82], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t82], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t82], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t82], "DefaultDrawColumnCell", [(await $.wv([$t82], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t82], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t82], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t82], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
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
    const $t84 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "GridTransactions")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t84], "SortPosition", (await $.mcall((await $.wv([$t84], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t84], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t84], "Refresh", [], C));
    } finally {
      { const $t85 = await $.iset((await $.wv([$t84], "SQL", C, false)), [(await $.wv([$t84], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t84], "EmptyStr", C, false))); if ($t85 !== undefined) { await $.wset([$t84], "SQL", $t85, C); } }
      await $.mset((await $.wv([$t84], "Screen", C, false)), "Cursor", (await $.wv([$t84], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TTransactionManagerForm", "ToolButton8Click", async function ToolButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PanelSettings")), "Visible", $.not((await $.mv((await $.v(C, "PanelSettings")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "Senedinelaveedilmesi1Click", async function Senedinelaveedilmesi1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "OperationMode", (await $.v(C, "omInsert")));
  {
    const $t86 = (await $.v(C, "out_transactiondatamodule"));
    await $.mcall((await $.wv([$t86], "Transactions", C, false)), "Insert", []);
  }
  await $.stmt($.call(C, "InitProperties", []));
  await $.mcall((await $.mv((await $.v(C, "GridTransactions")), "SelectedRows")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "Senedinlegvedilmesi1Click", async function Senedinlegvedilmesi1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  await $.stmt($.call(C, "Focus", []));
  {
    const $t87 = (await $.v(C, "GridTransactions"));
    const $t88 = (await $.wv([$t87], "SelectedRows", C, false));
    const $t89 = (await $.mv((await $.wv([$t87, $t88], "DataSource", C, false)), "DataSet"));
    const $t90 = (await $.wv([$t87, $t88, $t89], "out_transactiondatamodule", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t87, $t88, $t89, $t90], "Count", C, false)), 0))) {
        await $.wset([$t87, $t88, $t89, $t90], "CurrentRowSelected", (await $.wv([$t87, $t88, $t89, $t90], "True", C, false)), C);
      }
      { const $t91 = $.sub((await $.wv([$t87, $t88, $t89, $t90], "Count", C, false)), 1);
        await $.wset([$t87, $t88, $t89, $t90], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t92 = true;
        for (;;) {
          if (!$t92) { await $.wset([$t87, $t88, $t89, $t90], "Index", $.succ((await $.wv([$t87, $t88, $t89, $t90], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t92 = false;
          if (!($.ord((await $.wv([$t87, $t88, $t89, $t90], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t91))) break;
          await $.stmt((await $.wcall([$t87, $t88, $t89, $t90], "GotoBookmark", [(await $.wcall([$t87, $t88, $t89, $t90], "Pointer", [(await $.idx((await $.wv([$t87, $t88, $t89, $t90], "Items", C, false)), [(await $.wv([$t87, $t88, $t89, $t90], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t87, $t88, $t89, $t90], "TransactionID", (await $.mv((await $.wcall([$t87, $t88, $t89, $t90], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t87, $t88, $t89, $t90], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t93 = (await $.wcall([$t87, $t88, $t89, $t90], "MessageDlg", [(await $.wcall([$t87, $t88, $t89, $t90], "Format", ["Əməliyyat #%d silinsinmi?", [(await $.wv([$t87, $t88, $t89, $t90], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)), (await $.wv([$t87, $t88, $t89, $t90], "mtConfirmation", C, false)), [(await $.wv([$t87, $t88, $t89, $t90], "mbYes", C, false)), (await $.wv([$t87, $t88, $t89, $t90], "mbNo", C, false)), (await $.wv([$t87, $t88, $t89, $t90], "mbCancel", C, false)), (await $.wv([$t87, $t88, $t89, $t90], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t93, (await $.wv([$t87, $t88, $t89, $t90], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t93, (await $.wv([$t87, $t88, $t89, $t90], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t93, (await $.wv([$t87, $t88, $t89, $t90], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t87, $t88, $t89, $t90], "MessageDlg", [(await $.wcall([$t87, $t88, $t89, $t90], "Format", ["%d  sayda əməliyyat silinsinmi?", [$.sub((await $.wv([$t87, $t88, $t89, $t90], "Count", C, false)), (await $.wv([$t87, $t88, $t89, $t90], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t87, $t88, $t89, $t90], "mtConfirmation", C, false)), [(await $.wv([$t87, $t88, $t89, $t90], "mbYes", C, false)), (await $.wv([$t87, $t88, $t89, $t90], "mbCancel", C, false))], 0], C)), (await $.wv([$t87, $t88, $t89, $t90], "mrYes", C, false))))) {
                  await $.wset([$t87, $t88, $t89, $t90], "WaitNextConfirm", (await $.wv([$t87, $t88, $t89, $t90], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t87, $t88, $t89, $t90], "Application", C, false)), "ProcessMessages", []);
          await $.stmt((await $.wcall([$t87, $t88, $t89, $t90], "DeleteTransaction", [(await $.wv([$t87, $t88, $t89, $t90], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))], C)));
          await $.wset([$t87, $t88, $t89, $t90], "WillRefresh", (await $.wv([$t87, $t88, $t89, $t90], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.stmt($.wcall([$t87, $t88, $t89, $t90], "SBCommit", [], C));
          await $.wset([$t87, $t88, $t89, $t90], "TransactionState", (await $.wv([$t87, $t88, $t89, $t90], "tsDelete", C, false)), C);
          await $.tick();
        }
      }
    } finally {
      if ($.truthy((await $.wv([$t87, $t88, $t89, $t90], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.stmt((await $.wcall([$t87, $t88, $t89, $t90], "ActionRefreshExecute", [(await $.wv([$t87, $t88, $t89, $t90], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "Inkaretmek1Click", async function Inkaretmek1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "id": 0, "willrefresh": false, "rejectreason": '', "status": 0, "rejectedcount": 0, "errorcount": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["errorcount"] = 0;
  L0["rejectedcount"] = 0;
  L0["willrefresh"] = false;
  if ($.truthy((await $.call(C, "InputQuery", ["İnkarolunma !!! ", "Təyinat:", $.ref(async () => L0["rejectreason"], async ($t94) => { L0["rejectreason"] = $t94; })])))) {
    {
      const $t95 = (await $.v(C, "out_transactionDataModule"));
      const $t96 = (await $.wv([$t95], "GridTransactions", C, false));
      const $t97 = (await $.wv([$t95, $t96], "SelectedRows", C, false));
      const $t98 = (await $.mv((await $.wv([$t95, $t96, $t97], "DataSource", C, false)), "DataSet"));
      if ($.truthy($.eq((await $.wv([$t95, $t96, $t97, $t98], "Count", C, false)), 0))) {
        await $.wset([$t95, $t96, $t97, $t98], "CurrentRowSelected", (await $.wv([$t95, $t96, $t97, $t98], "True", C, false)), C);
      }
      { const $t99 = $.sub((await $.wv([$t95, $t96, $t97, $t98], "Count", C, false)), 1);
        await $.wset([$t95, $t96, $t97, $t98], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t100 = true;
        for (;;) {
          if (!$t100) { await $.wset([$t95, $t96, $t97, $t98], "i", $.succ((await $.wv([$t95, $t96, $t97, $t98], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t100 = false;
          if (!($.ord((await $.wv([$t95, $t96, $t97, $t98], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t99))) break;
          try {
            await $.stmt((await $.wcall([$t95, $t96, $t97, $t98], "GotoBookmark", [(await $.wcall([$t95, $t96, $t97, $t98], "TBookmark", [(await $.idx((await $.wv([$t95, $t96, $t97, $t98], "Items", C, false)), [(await $.wv([$t95, $t96, $t97, $t98], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            await $.wset([$t95, $t96, $t97, $t98], "Status", (await $.mv((await $.wcall([$t95, $t96, $t97, $t98], "FieldByname", ["Status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
            if ($.truthy($.in_((await $.wv([$t95, $t96, $t97, $t98], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t95, $t96, $t97, $t98], "tsDelayed", C, false)), (await $.wv([$t95, $t96, $t97, $t98], "tsRejected", C, false))]))) {
              await $.wset([$t95, $t96, $t97, $t98], "ID", (await $.mv((await $.wcall([$t95, $t96, $t97, $t98], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
              await $.stmt((await $.wcall([$t95, $t96, $t97, $t98], "RejectTransaction", [(await $.wv([$t95, $t96, $t97, $t98], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), (await $.wv([$t95, $t96, $t97, $t98], "RejectReason", { get: async () => L0["rejectreason"], set: async (v) => { L0["rejectreason"] = v; }, local: true }, false))], C)));
              await $.wset([$t95, $t96, $t97, $t98], "WillRefresh", (await $.wv([$t95, $t96, $t97, $t98], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
              await $.stmt((await $.wcall([$t95, $t96, $t97, $t98], "Inc", [$.ref(async () => (await $.wv([$t95, $t96, $t97, $t98], "RejectedCount", { get: async () => L0["rejectedcount"], set: async (v) => { L0["rejectedcount"] = v; }, local: true }, false)), async ($t102) => { await $.wset([$t95, $t96, $t97, $t98], "RejectedCount", $t102, { get: async () => L0["rejectedcount"], set: async (v) => { L0["rejectedcount"] = v; }, local: true }); })], C)));
              await $.stmt((await $.wcall([$t95, $t96, $t97, $t98], "SBCommit", [], C)));
            }
          } catch ($t101) {
            $.rethrowControl($t101);
            $.handled($t101);
            await $.stmt((await $.wcall([$t95, $t96, $t97, $t98], "Inc", [$.ref(async () => (await $.wv([$t95, $t96, $t97, $t98], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), async ($t103) => { await $.wset([$t95, $t96, $t97, $t98], "ErrorCount", $t103, { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }); })], C)));
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
  U.method("TTransactionManagerForm", "Yenilemek1Click", async function Yenilemek1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "kis": 0, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t104 = (await $.mv((await $.v(C, "out_transactiondatamodule")), "Transactions"));
    try {
      await $.wset([$t104], "TransactionID", (await $.mv((await $.wcall([$t104], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
      await $.stmt($.wcall([$t104], "Close", [], C));
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t104], "out_transactiondatamodule", C, false)), "Transactions")), "SetVariable", ["TransactionDate", (await $.wv([$t104], "CurrentDate", C, false))])));
      await $.stmt($.wcall([$t104], "Open", [], C));
      if ($.truthy($.ne((await $.wv([$t104], "TransactionState", C, false)), (await $.wv([$t104], "tsDelete", C, false))))) {
        await $.stmt((await $.wcall([$t104], "GotoTransaction", [(await $.wv([$t104], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))], C)));
      }
      await $.wset([$t104], "TransactionState", (await $.wv([$t104], "tsDelete", C, false)), C);
    } finally {
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "Eveline1Click", async function Eveline1Click(Self, p0) {
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
  U.method("TTransactionManagerForm", "Sonuna1Click", async function Sonuna1Click(Self, p0) {
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
  U.method("TTransactionManagerForm", "Komissiyaemeliyyatlari1Click", async function Komissiyaemeliyyatlari1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "CommissionForm"))]))))) {
    await $.set(C, "CommissionForm", (await $.mcall((await $.v(C, "TCommissionForm")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "CommissionForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "Hamisinisecmek1Click", async function Hamisinisecmek1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t105 = (await $.v(C, "GridTransactions"));
    const $t106 = (await $.wv([$t105], "SelectedRows", C, false));
    const $t107 = (await $.mv((await $.wv([$t105, $t106], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t105, $t106, $t107], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t105, $t106, $t107], "First", [], C));
      while ($.truthy($.not((await $.wv([$t105, $t106, $t107], "Eof", C, false))))) {
        await $.wset([$t105, $t106, $t107], "CurrentRowSelected", (await $.wv([$t105, $t106, $t107], "True", C, false)), C);
        await $.stmt($.wcall([$t105, $t106, $t107], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t105, $t106, $t107], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "Senedinredakteedilmesi1Click", async function Senedinredakteedilmesi1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "OperationMode", (await $.v(C, "omEdit")));
  {
    const $t108 = (await $.v(C, "out_transactionDataModule"));
    await $.mcall((await $.wv([$t108], "Transactions", C, false)), "Edit", []);
  }
  await $.stmt($.call(C, "InitProperties", []));
  await $.mcall((await $.mv((await $.v(C, "GridTransactions")), "SelectedRows")), "Clear", []);
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
  U.method("TTransactionManagerForm", "ActionRejectExecute", async function ActionRejectExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "id": 0, "willrefresh": false, "rejectreason": '', "status": 0, "rejectedcount": 0, "errorcount": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["errorcount"] = 0;
  L0["rejectedcount"] = 0;
  L0["willrefresh"] = false;
  if ($.truthy((await $.call(C, "InputQuery", ["İnkarolunma !!! ", "Təyinat:", $.ref(async () => L0["rejectreason"], async ($t109) => { L0["rejectreason"] = $t109; })])))) {
    {
      const $t110 = (await $.v(C, "out_transactionDataModule"));
      const $t111 = (await $.wv([$t110], "GridTransactions", C, false));
      const $t112 = (await $.wv([$t110, $t111], "SelectedRows", C, false));
      const $t113 = (await $.mv((await $.wv([$t110, $t111, $t112], "DataSource", C, false)), "DataSet"));
      if ($.truthy($.eq((await $.wv([$t110, $t111, $t112, $t113], "Count", C, false)), 0))) {
        await $.wset([$t110, $t111, $t112, $t113], "CurrentRowSelected", (await $.wv([$t110, $t111, $t112, $t113], "True", C, false)), C);
      }
      { const $t114 = $.sub((await $.wv([$t110, $t111, $t112, $t113], "Count", C, false)), 1);
        await $.wset([$t110, $t111, $t112, $t113], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t115 = true;
        for (;;) {
          if (!$t115) { await $.wset([$t110, $t111, $t112, $t113], "i", $.succ((await $.wv([$t110, $t111, $t112, $t113], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t115 = false;
          if (!($.ord((await $.wv([$t110, $t111, $t112, $t113], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t114))) break;
          try {
            await $.stmt((await $.wcall([$t110, $t111, $t112, $t113], "GotoBookmark", [(await $.wcall([$t110, $t111, $t112, $t113], "TBookmark", [(await $.idx((await $.wv([$t110, $t111, $t112, $t113], "Items", C, false)), [(await $.wv([$t110, $t111, $t112, $t113], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            await $.wset([$t110, $t111, $t112, $t113], "Status", (await $.mv((await $.wcall([$t110, $t111, $t112, $t113], "FieldByname", ["Status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
            if ($.truthy($.in_((await $.wv([$t110, $t111, $t112, $t113], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t110, $t111, $t112, $t113], "tsDelayed", C, false)), (await $.wv([$t110, $t111, $t112, $t113], "tsRejected", C, false))]))) {
              await $.wset([$t110, $t111, $t112, $t113], "ID", (await $.mv((await $.wcall([$t110, $t111, $t112, $t113], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
              await $.stmt((await $.wcall([$t110, $t111, $t112, $t113], "RejectTransaction", [(await $.wv([$t110, $t111, $t112, $t113], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), (await $.wv([$t110, $t111, $t112, $t113], "RejectReason", { get: async () => L0["rejectreason"], set: async (v) => { L0["rejectreason"] = v; }, local: true }, false))], C)));
              await $.wset([$t110, $t111, $t112, $t113], "WillRefresh", (await $.wv([$t110, $t111, $t112, $t113], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
              await $.stmt((await $.wcall([$t110, $t111, $t112, $t113], "Inc", [$.ref(async () => (await $.wv([$t110, $t111, $t112, $t113], "RejectedCount", { get: async () => L0["rejectedcount"], set: async (v) => { L0["rejectedcount"] = v; }, local: true }, false)), async ($t117) => { await $.wset([$t110, $t111, $t112, $t113], "RejectedCount", $t117, { get: async () => L0["rejectedcount"], set: async (v) => { L0["rejectedcount"] = v; }, local: true }); })], C)));
              await $.stmt((await $.wcall([$t110, $t111, $t112, $t113], "SBCommit", [], C)));
            }
          } catch ($t116) {
            $.rethrowControl($t116);
            $.handled($t116);
            await $.stmt((await $.wcall([$t110, $t111, $t112, $t113], "Inc", [$.ref(async () => (await $.wv([$t110, $t111, $t112, $t113], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), async ($t118) => { await $.wset([$t110, $t111, $t112, $t113], "ErrorCount", $t118, { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }); })], C)));
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
  U.method("TTransactionManagerForm", "ActionStepCommitExecute", async function ActionStepCommitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "id": 0, "willrefresh": false, "status": 0, "commitedcount": 0, "errorcount": 0, "lasterrormessage": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "out_transactiondatamodule")), "SB_ACA")), "CallProcedure", ["checkadvancedobjectaccess", ["OUTTRANSACTIONCOMMITRIGHT"]])));
  L0["commitedcount"] = 0;
  L0["errorcount"] = 0;
  L0["willrefresh"] = false;
  {
    const $t119 = (await $.v(C, "out_transactionDataModule"));
    const $t120 = (await $.wv([$t119], "GridTransactions", C, false));
    const $t121 = (await $.wv([$t119, $t120], "SelectedRows", C, false));
    const $t122 = (await $.mv((await $.wv([$t119, $t120, $t121], "DataSource", C, false)), "DataSet"));
    if ($.truthy($.eq((await $.wcall([$t119, $t120, $t121, $t122], "MessageDlg", ["Əməliyyatlar təsdiqlənsinmi?", (await $.wv([$t119, $t120, $t121, $t122], "mtConfirmation", C, false)), [(await $.wv([$t119, $t120, $t121, $t122], "mbYes", C, false)), (await $.wv([$t119, $t120, $t121, $t122], "mbCancel", C, false))], 0], C)), (await $.wv([$t119, $t120, $t121, $t122], "mrYes", C, false))))) {
      await $.stmt($.wcall([$t119, $t120, $t121, $t122], "DisableControls", [], C));
      try {
        await $.mcall((await $.wv([$t119, $t120, $t121, $t122], "Application", C, false)), "ProcessMessages", []);
        if ($.truthy($.eq((await $.wv([$t119, $t120, $t121, $t122], "Count", C, false)), 0))) {
          await $.wset([$t119, $t120, $t121, $t122], "CurrentRowSelected", (await $.wv([$t119, $t120, $t121, $t122], "True", C, false)), C);
        }
        { const $t123 = $.sub((await $.wv([$t119, $t120, $t121, $t122], "Count", C, false)), 1);
          await $.wset([$t119, $t120, $t121, $t122], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t124 = true;
          for (;;) {
            if (!$t124) { await $.wset([$t119, $t120, $t121, $t122], "i", $.succ((await $.wv([$t119, $t120, $t121, $t122], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t124 = false;
            if (!($.ord((await $.wv([$t119, $t120, $t121, $t122], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t123))) break;
            try {
              await $.stmt((await $.wcall([$t119, $t120, $t121, $t122], "GotoBookmark", [(await $.wcall([$t119, $t120, $t121, $t122], "TBookmark", [(await $.idx((await $.wv([$t119, $t120, $t121, $t122], "Items", C, false)), [(await $.wv([$t119, $t120, $t121, $t122], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
              await $.wset([$t119, $t120, $t121, $t122], "Status", (await $.mv((await $.wcall([$t119, $t120, $t121, $t122], "FieldByname", ["Status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
              if ($.truthy($.in_((await $.wv([$t119, $t120, $t121, $t122], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t119, $t120, $t121, $t122], "tsDelayed", C, false)), (await $.wv([$t119, $t120, $t121, $t122], "tsRejected", C, false))]))) {
                await $.wset([$t119, $t120, $t121, $t122], "ID", (await $.mv((await $.wcall([$t119, $t120, $t121, $t122], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
                await $.stmt((await $.wcall([$t119, $t120, $t121, $t122], "CommitTransaction", [(await $.wv([$t119, $t120, $t121, $t122], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))], C)));
                await $.wset([$t119, $t120, $t121, $t122], "WillRefresh", (await $.wv([$t119, $t120, $t121, $t122], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
                await $.stmt((await $.wcall([$t119, $t120, $t121, $t122], "Inc", [$.ref(async () => (await $.wv([$t119, $t120, $t121, $t122], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), async ($t126) => { await $.wset([$t119, $t120, $t121, $t122], "CommitedCount", $t126, { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }); })], C)));
                await $.stmt((await $.wcall([$t119, $t120, $t121, $t122], "SBCommit", [], C)));
                await $.mcall((await $.wv([$t119, $t120, $t121, $t122], "out_transactionDataModule", C, false)), "FullRefresh", []);
              }
            } catch ($t125) {
              $.rethrowControl($t125);
              if ($.excIs($t125, "Exception")) {
                L0["e"] = $.exc($t125);
                await $.wset([$t119, $t120, $t121, $t122], "LastErrorMessage", (await $.mv((await $.wv([$t119, $t120, $t121, $t122], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), { get: async () => L0["lasterrormessage"], set: async (v) => { L0["lasterrormessage"] = v; }, local: true });
                await $.stmt((await $.wcall([$t119, $t120, $t121, $t122], "Inc", [$.ref(async () => (await $.wv([$t119, $t120, $t121, $t122], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), async ($t127) => { await $.wset([$t119, $t120, $t121, $t122], "ErrorCount", $t127, { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }); })], C)));
                continue;
              }
              else { throw $t125; }
            }
            await $.tick();
          }
        }
      } finally {
        if ($.truthy($.gt((await $.wv([$t119, $t120, $t121, $t122], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), 0))) {
          if ($.truthy($.eq((await $.wv([$t119, $t120, $t121, $t122], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), 1))) {
            await $.stmt((await $.wcall([$t119, $t120, $t121, $t122], "MessageDlg", [(await $.wv([$t119, $t120, $t121, $t122], "LastErrorMessage", { get: async () => L0["lasterrormessage"], set: async (v) => { L0["lasterrormessage"] = v; }, local: true }, false)), (await $.wv([$t119, $t120, $t121, $t122], "mtConfirmation", C, false)), [(await $.wv([$t119, $t120, $t121, $t122], "mbOk", C, false))], 0], C)));
          } else {
            await $.stmt((await $.wcall([$t119, $t120, $t121, $t122], "MessageDlg", [(await $.wcall([$t119, $t120, $t121, $t122], "Format", [(await $.wv([$t119, $t120, $t121, $t122], "cs_CommitInformation", C, false)), [$.add((await $.wv([$t119, $t120, $t121, $t122], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), (await $.wv([$t119, $t120, $t121, $t122], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false))), (await $.wv([$t119, $t120, $t121, $t122], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), (await $.wv([$t119, $t120, $t121, $t122], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false))]], C)), (await $.wv([$t119, $t120, $t121, $t122], "mtConfirmation", C, false)), [(await $.wv([$t119, $t120, $t121, $t122], "mbOk", C, false))], 0], C)));
          }
        }
        await $.stmt($.wcall([$t119, $t120, $t121, $t122], "EnableControls", [], C));
        if ($.truthy((await $.wv([$t119, $t120, $t121, $t122], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
          await $.wset([$t119, $t120, $t121, $t122], "TransactionState", (await $.wv([$t119, $t120, $t121, $t122], "tsCommit", C, false)), C);
          await $.stmt((await $.wcall([$t119, $t120, $t121, $t122], "ActionRefreshExecute", [(await $.wv([$t119, $t120, $t121, $t122], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
          await $.mcall((await $.wv([$t119, $t120, $t121, $t122], "out_transactionDataModule", C, false)), "FullRefresh", []);
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActionCommitExecute", async function ActionCommitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "ids": '', "status": 0, "trcount": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "out_transactiondatamodule")), "SB_ACA")), "CallProcedure", ["checkadvancedobjectaccess", ["OUTTRANSACTIONCOMMITRIGHT"]])));
  L0["ids"] = "";
  L0["trcount"] = 0;
  {
    const $t128 = (await $.v(C, "GridTransactions"));
    const $t129 = (await $.wv([$t128], "SelectedRows", C, false));
    const $t130 = (await $.mv((await $.wv([$t128, $t129], "DataSource", C, false)), "DataSet"));
    if ($.truthy($.eq((await $.wv([$t128, $t129, $t130], "Count", C, false)), 0))) {
      await $.stmt((await $.wcall([$t128, $t129, $t130], "Inc", [$.ref(async () => (await $.wv([$t128, $t129, $t130], "TrCount", { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }, false)), async ($t131) => { await $.wset([$t128, $t129, $t130], "TrCount", $t131, { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }); })], C)));
      await $.wset([$t128, $t129, $t130], "IDs", (await $.mv((await $.wcall([$t128, $t129, $t130], "FieldByName", ["ID"], C)), "AsString")), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
    } else {
      await $.stmt($.wcall([$t128, $t129, $t130], "DisableControls", [], C));
      try {
        { const $t132 = $.sub((await $.wv([$t128, $t129, $t130], "Count", C, false)), 1);
          await $.wset([$t128, $t129, $t130], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t133 = true;
          for (;;) {
            if (!$t133) { await $.wset([$t128, $t129, $t130], "i", $.succ((await $.wv([$t128, $t129, $t130], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t133 = false;
            if (!($.ord((await $.wv([$t128, $t129, $t130], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t132))) break;
            await $.stmt((await $.wcall([$t128, $t129, $t130], "GotoBookmark", [(await $.wcall([$t128, $t129, $t130], "TBookmark", [(await $.idx((await $.wv([$t128, $t129, $t130], "Items", C, false)), [(await $.wv([$t128, $t129, $t130], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            await $.wset([$t128, $t129, $t130], "Status", (await $.mv((await $.wcall([$t128, $t129, $t130], "FieldByname", ["Status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
            if ($.truthy($.in_((await $.wv([$t128, $t129, $t130], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t128, $t129, $t130], "tsDelayed", C, false)), (await $.wv([$t128, $t129, $t130], "tsRejected", C, false))]))) {
              await $.stmt((await $.wcall([$t128, $t129, $t130], "Inc", [$.ref(async () => (await $.wv([$t128, $t129, $t130], "TrCount", { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }, false)), async ($t134) => { await $.wset([$t128, $t129, $t130], "TrCount", $t134, { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }); })], C)));
              await $.wset([$t128, $t129, $t130], "IDs", $.add($.add((await $.wv([$t128, $t129, $t130], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), ","), (await $.mv((await $.wcall([$t128, $t129, $t130], "FieldByName", ["ID"], C)), "AsString"))), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
            }
            await $.tick();
          }
        }
        await $.stmt((await $.mcall((await $.wv([$t128, $t129, $t130], "System", C, false)), "Delete", [$.ref(async () => (await $.wv([$t128, $t129, $t130], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), async ($t135) => { await $.wset([$t128, $t129, $t130], "IDs", $t135, { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }); }), 1, 1])));
      } finally {
        await $.stmt($.wcall([$t128, $t129, $t130], "EnableControls", [], C));
      }
    }
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["%d sayda əməliyyat təsdiqlənsinmi?", [L0["trcount"]]])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t136 = (await $.v(C, "out_transactionDataModule"));
      await $.stmt((await $.wcall([$t136], "CommitTransactions", [(await $.wv([$t136], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t136], "SBCommit", [], C)));
      await $.stmt((await $.wcall([$t136], "ActionRefreshExecute", [(await $.wv([$t136], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t136], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActionSelectAllExecute", async function ActionSelectAllExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t137 = (await $.v(C, "GridTransactions"));
    const $t138 = (await $.wv([$t137], "SelectedRows", C, false));
    const $t139 = (await $.mv((await $.wv([$t137, $t138], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t137, $t138, $t139], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t137, $t138, $t139], "First", [], C));
      while ($.truthy($.not((await $.wv([$t137, $t138, $t139], "Eof", C, false))))) {
        await $.wset([$t137, $t138, $t139], "CurrentRowSelected", (await $.wv([$t137, $t138, $t139], "True", C, false)), C);
        await $.stmt($.wcall([$t137, $t138, $t139], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t137, $t138, $t139], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActionCommitUpdate", async function ActionCommitUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t140 = (L0["sender"]);
    const $t141 = (await $.mv((await $.wv([$t140], "out_transactionDataModule", C, false)), "Transactions"));
    await $.wset([$t140, $t141], "Enabled", (await $.and_($.not(((await $.wv([$t140, $t141], "IsEmpty", C, false)))), async () => ($.ne((await $.mv((await $.wcall([$t140, $t141], "FieldByName", ["Status"], C)), "AsInteger")), (await $.wv([$t140, $t141], "tsCommited", C, false)))))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActionDeleteUpdate", async function ActionDeleteUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t142 = (L0["sender"]);
    const $t143 = (await $.mv((await $.wv([$t142], "out_transactionDataModule", C, false)), "Transactions"));
    await $.wset([$t142, $t143], "Enabled", $.not(((await $.wv([$t142, $t143], "IsEmpty", C, false)))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActionStepCommitUpdate", async function ActionStepCommitUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t144 = (L0["sender"]);
    const $t145 = (await $.mv((await $.wv([$t144], "out_transactionDataModule", C, false)), "Transactions"));
    await $.wset([$t144, $t145], "Enabled", (await $.and_($.not(((await $.wv([$t144, $t145], "IsEmpty", C, false)))), async () => ($.ne((await $.mv((await $.wcall([$t144, $t145], "FieldByName", ["Status"], C)), "AsInteger")), (await $.wv([$t144, $t145], "tsCommited", C, false)))))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "NFullRefreshClick", async function NFullRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "out_transactionDataModule")), "FullRefresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "N8Click", async function N8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "id": 0, "willrefresh": false, "rejectreason": '', "status": 0, "rejectedcount": 0, "errorcount": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["errorcount"] = 0;
  L0["rejectedcount"] = 0;
  L0["willrefresh"] = false;
  if ($.truthy((await $.call(C, "InputQuery", ["İnkarolunma !!! ", "Təyinat:", $.ref(async () => L0["rejectreason"], async ($t146) => { L0["rejectreason"] = $t146; })])))) {
    {
      const $t147 = (await $.v(C, "out_transactionDataModule"));
      const $t148 = (await $.wv([$t147], "GridTransactions", C, false));
      const $t149 = (await $.wv([$t147, $t148], "SelectedRows", C, false));
      const $t150 = (await $.mv((await $.wv([$t147, $t148, $t149], "DataSource", C, false)), "DataSet"));
      if ($.truthy($.eq((await $.wv([$t147, $t148, $t149, $t150], "Count", C, false)), 0))) {
        await $.wset([$t147, $t148, $t149, $t150], "CurrentRowSelected", (await $.wv([$t147, $t148, $t149, $t150], "True", C, false)), C);
      }
      { const $t151 = $.sub((await $.wv([$t147, $t148, $t149, $t150], "Count", C, false)), 1);
        await $.wset([$t147, $t148, $t149, $t150], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t152 = true;
        for (;;) {
          if (!$t152) { await $.wset([$t147, $t148, $t149, $t150], "i", $.succ((await $.wv([$t147, $t148, $t149, $t150], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t152 = false;
          if (!($.ord((await $.wv([$t147, $t148, $t149, $t150], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t151))) break;
          try {
            await $.stmt((await $.wcall([$t147, $t148, $t149, $t150], "GotoBookmark", [(await $.wcall([$t147, $t148, $t149, $t150], "TBookmark", [(await $.idx((await $.wv([$t147, $t148, $t149, $t150], "Items", C, false)), [(await $.wv([$t147, $t148, $t149, $t150], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            await $.wset([$t147, $t148, $t149, $t150], "Status", (await $.mv((await $.wcall([$t147, $t148, $t149, $t150], "FieldByname", ["Status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
            if ($.truthy($.in_((await $.wv([$t147, $t148, $t149, $t150], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t147, $t148, $t149, $t150], "tsDelayed", C, false)), (await $.wv([$t147, $t148, $t149, $t150], "tsRejected", C, false))]))) {
              await $.wset([$t147, $t148, $t149, $t150], "ID", (await $.mv((await $.wcall([$t147, $t148, $t149, $t150], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
              await $.stmt((await $.wcall([$t147, $t148, $t149, $t150], "RejectTransaction", [(await $.wv([$t147, $t148, $t149, $t150], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), (await $.wv([$t147, $t148, $t149, $t150], "RejectReason", { get: async () => L0["rejectreason"], set: async (v) => { L0["rejectreason"] = v; }, local: true }, false))], C)));
              await $.wset([$t147, $t148, $t149, $t150], "WillRefresh", (await $.wv([$t147, $t148, $t149, $t150], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
              await $.stmt((await $.wcall([$t147, $t148, $t149, $t150], "Inc", [$.ref(async () => (await $.wv([$t147, $t148, $t149, $t150], "RejectedCount", { get: async () => L0["rejectedcount"], set: async (v) => { L0["rejectedcount"] = v; }, local: true }, false)), async ($t154) => { await $.wset([$t147, $t148, $t149, $t150], "RejectedCount", $t154, { get: async () => L0["rejectedcount"], set: async (v) => { L0["rejectedcount"] = v; }, local: true }); })], C)));
              await $.stmt((await $.wcall([$t147, $t148, $t149, $t150], "SBCommit", [], C)));
            }
          } catch ($t153) {
            $.rethrowControl($t153);
            $.handled($t153);
            await $.stmt((await $.wcall([$t147, $t148, $t149, $t150], "Inc", [$.ref(async () => (await $.wv([$t147, $t148, $t149, $t150], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), async ($t155) => { await $.wset([$t147, $t148, $t149, $t150], "ErrorCount", $t155, { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }); })], C)));
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
  U.method("TTransactionManagerForm", "NLastClick", async function NLastClick(Self, p0) {
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
  U.method("TTransactionManagerForm", "CLBCurrencyClickCheck", async function CLBCurrencyClickCheck(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ActionFilter")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "CLBCurrencyKeyDown", async function CLBCurrencyKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy(($.eq((await L0["key"].get()), (await $.v(C, "VK_F6")))))) {
    await $.mcall((await $.v(C, "ActionLoadFilters")), "Execute", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TTransactionManagerForm", "CLBOperationTypesClickCheck", async function CLBOperationTypesClickCheck(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ActionFilter")), "Execute", []);
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
  U.method("TTransactionManagerForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ButtonFilter")), "Down", false);
  await $.mset((await $.v(C, "PanelSettings")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
