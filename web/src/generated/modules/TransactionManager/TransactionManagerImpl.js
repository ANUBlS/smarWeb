// Generated from TransactionManagerImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TransactionManagerImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "TransactionManager_TLB", "StdVcl", "ExtCtrls", "StdCtrls", "ComCtrls", "ToolWin", "Grids", "DBGrids", "ImgList", "ActnList", "DBCtrls", "OracleData", "Db", "DBTables", "Mask", "Menus", "SBPlgAx50_TLB", "CheckLst", "Buttons", "Keyboard", "ComObj", "ComServ", "TransactionDataModuleUnit", "TransactionPropertiesImpl", "TransactionDestinationImpl", "CommissionImpl", "BProcTrans", "sboapiDataModuleImpl", "SBTranslateProc", "FormAccountsImpl", "FormBalCnImpl", "UnitGoaml", "WorldCheckProc", "UnitWorMessa", "Insurance"]);
  const C = [U];
  U.enumType("toperationmode", 3);
  U.const("omInsert", 0);
  U.const("omEdit", 1);
  U.const("omCommission", 2);
  U.enumType("ttransactionstate", 3);
  U.const("tsCommit", 0);
  U.const("tsDelete", 1);
  U.const("tsReject", 2);
  U.defClass("TTransactionManagerForm", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panelsettings": {"name": "PanelSettings", "type": "TGroupBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "dtpcurrentdate": {"name": "DTPCurrentDate", "type": "TDateTimePicker"}, "paneldestination": {"name": "PanelDestination", "type": "TPanel"}, "panelsearch": {"name": "PanelSearch", "type": "TPanel"}, "gridtransactions": {"name": "GridTransactions", "type": "TDBGrid"}, "editid": {"name": "EditID", "type": "TEdit"}, "editdebitaccno": {"name": "EditDEBITACCNO", "type": "TEdit"}, "editcreditaccno": {"name": "EditCREDITACCNO", "type": "TEdit"}, "editdebitamount": {"name": "EditDEBITAMOUNT", "type": "TEdit"}, "editcreditamount": {"name": "EditCREDITAMOUNT", "type": "TEdit"}, "editlamount": {"name": "EditLAMOUNT", "type": "TEdit"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "actionlist": {"name": "ActionList", "type": "TActionList"}, "actionrefresh": {"name": "ActionRefresh", "type": "TAction"}, "dbtext1": {"name": "DBText1", "type": "TDBText"}, "actioninsert": {"name": "ActionInsert", "type": "TAction"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "dbeditassignment": {"name": "DBEditAssignment", "type": "TDBEdit"}, "dbeditrejectreason": {"name": "DBEditRejectReason", "type": "TDBEdit"}, "actiondelete": {"name": "ActionDelete", "type": "TAction"}, "actionedit": {"name": "ActionEdit", "type": "TAction"}, "buttonfilter": {"name": "ButtonFilter", "type": "TToolButton"}, "actionshowfilter": {"name": "ActionShowFilter", "type": "TAction"}, "actionspeedsearch": {"name": "ActionSpeedSearch", "type": "TAction"}, "actionselectall": {"name": "ActionSelectAll", "type": "TAction"}, "popupmenu": {"name": "PopupMenu", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "nfirst": {"name": "NFirst", "type": "TMenuItem"}, "nlast": {"name": "NLast", "type": "TMenuItem"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "actioncommit": {"name": "ActionCommit", "type": "TAction"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "cbdebetfilial": {"name": "CBDebetFilial", "type": "TCheckBox"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "cboperator": {"name": "CBOperator", "type": "TCheckBox"}, "dblookup2": {"name": "DBLookup2", "type": "TDBLookupComboBox"}, "dblookup3": {"name": "DBLookup3", "type": "TDBLookupComboBox"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "cbcreditfilial": {"name": "CBCreditFilial", "type": "TCheckBox"}, "dblookup1": {"name": "DBLookup1", "type": "TDBLookupComboBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "clboperationtypes": {"name": "CLBOperationTypes", "type": "TCheckListBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "clbcurrency": {"name": "CLBCurrency", "type": "TCheckListBox"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "cbimmediatelyrefresh": {"name": "CBImmediatelyRefresh", "type": "TCheckBox"}, "actionloadfilters": {"name": "ActionLoadFilters", "type": "TAction"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "cbdelayed": {"name": "CBDelayed", "type": "TCheckBox"}, "cbcommited": {"name": "CBCommited", "type": "TCheckBox"}, "cbrejected": {"name": "CBRejected", "type": "TCheckBox"}, "actionfilter": {"name": "ActionFilter", "type": "TAction"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbtext2": {"name": "DBText2", "type": "TDBText"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "n9": {"name": "N9", "type": "TMenuItem"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "actionstepcommit": {"name": "ActionStepCommit", "type": "TAction"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "actionreject": {"name": "ActionReject", "type": "TAction"}, "actioncommission": {"name": "ActionCommission", "type": "TAction"}, "n10": {"name": "N10", "type": "TMenuItem"}, "popuprefresh": {"name": "PopupRefresh", "type": "TPopupMenu"}, "nfullrefresh": {"name": "NFullRefresh", "type": "TMenuItem"}, "chboxstatust": {"name": "ChBoxStatusT", "type": "TCheckBox"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "checkbox_val": {"name": "CheckBox_val", "type": "TCheckBox"}, "checkbox_type": {"name": "CheckBox_type", "type": "TCheckBox"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "actioncheck": {"name": "ActionCheck", "type": "TAction"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "fevents": {"name": "FEvents", "type": "ITransactionManagerFormEvents"}, "fcurrentdate": {"name": "FCurrentDate", "type": "TDateTime"}, "requiredorderbyfield": {"name": "RequiredOrderByField", "type": "variant"}, "operationmode": {"name": "OperationMode", "type": "TOperationMode"}, "lasttransactionid": {"name": "LastTransactionID", "type": "Longint"}, "transactionstate": {"name": "TransactionState", "type": "TTransactionState"}, "sik": {"name": "sik", "type": "boolean"}}, {"currentdate": {"name": "CurrentDate", "read": "FCurrentDate", "write": "SetCurrentDate"}});
  U.init(async () => {
    U.const("tsDelayed", 1);
    U.const("tsCommited", 2);
    U.const("tsRejected", 3);
    U.const("BooleanPrefix", " AND ");
    U.const("cs_CommitInformation", $.add($.add($.add($.add("Ümumi əməliyyatlar: %d", "\r"), "Təsdiqlənmiş əməliyyatlar: %d"), "\r"), "Təsdiqlənməmiş əməliyyatlar: %d"));
    U.const("cs_RejectInformation", $.add($.add($.add($.add("Ümumi əməliyyatlar: %d", "\r"), "İnkar edilmiş əməliyyatlar: %d"), "\r"), "İnkar edilməmiş əməliyyatlar: %d"));
    U.var_("TransactionManagerForm", null, "TTransactionManagerForm");
    U.var_("OperationIDs", null, "TStringList");
    U.var_("CurrencyIDs", null, "TStringList");
    U.var_("OrderedTitle", '', "String");
    U.var_("Insert_Edit", false, "boolean");
    U.var_("vCustId", 0, "integer");
    U.var_("nocustId", false, "boolean");
    U.var_("monex_id", false, "boolean");
    U.var_("v_reoprt_code", false, "boolean");
    U.var_("dbt", '', "String");
    U.var_("crt", '', "String");
    U.var_("id1", 0, "integer");
    U.var_("id2", 0, "integer");
    U.var_("monexid", 0, "integer");
    U.var_("kli_id1", 0, "integer");
    U.var_("kli_id2", 0, "integer");
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
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
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
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
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
  U.method("TTransactionManagerForm", "InitData", async function InitData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  L0["c_err_message"] = " Table or View in Dataset \"%s\" does not exist! ";
  {
    const $t3 = (await $.wobj(C, "TransactionDataModule"));
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
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FormBal_CN"))]))))) {
    await $.set(C, "FormBal_CN", (await $.mcall((await $.v(C, "TFormBal_CN")), "Create", [Self])));
  }
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FormAccounts"))]))))) {
    await $.set(C, "FormAccounts", (await $.mcall((await $.v(C, "TFormAccounts")), "Create", [Self])));
  }
  try {
    await $.mset((await $.mv((await $.v(C, "TransactionEditForm")), "ButtonApply")), "Visible", true);
    if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "SB_ACA")), "CallBooleanFunction", ["isadm", []])), false))) {
      if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "SB_ACA")), "CallBooleanFunction", ["checkadvancedobjectaccess", ["CHECKING"]])), true))) {
        await $.mset((await $.mv((await $.v(C, "TransactionEditForm")), "ButtonApply")), "Visible", false);
      }
    }
    await $.mcall((await $.v(C, "TransactionEditForm")), "ShowModal", []);
  } finally {
    await $.mcall((await $.v(C, "TransactionEditForm")), "Release", []);
    await $.set(C, "TransactionEditForm", null);
    await $.mcall((await $.v(C, "FormAccounts")), "Release", []);
    await $.set(C, "FormAccounts", null);
    await $.mcall((await $.v(C, "FormBal_CN")), "Release", []);
    await $.set(C, "FormBal_CN", null);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionManagerForm", "GotoTransaction", async function GotoTransaction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"id": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["id"]);
  {
    const $t7 = (await $.mv((await $.v(C, "TransactionDataModule")), "Transactions"));
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
  U.method("TTransactionManagerForm", "ActionRefreshExecute", async function ActionRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "kis": 0, "transactionid": 0, "k": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.mv((await $.v(C, "TransactionDataModule")), "Transactions"));
    try {
      await $.wset([$t8], "TransactionID", (await $.mv((await $.wcall([$t8], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
      await $.stmt($.wcall([$t8], "Close", [], C));
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t8], "TransactionDataModule", C, false)), "Transactions")), "SetVariable", ["TransactionDate", (await $.wv([$t8], "CurrentDate", C, false))])));
      if ($.truthy($.ne((await $.wv([$t8], "OrderedTitle", C, false)), ""))) {
        if ($.truthy((await $.mv((await $.wv([$t8], "ChBoxStatusT", C, false)), "Checked")))) {
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t8], "TransactionDataModule", C, false)), "Transactions")), "SetVariable", ["TITLE", $.add(" Status asc, ", (await $.wv([$t8], "OrderedTitle", C, false)))])));
        } else {
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t8], "TransactionDataModule", C, false)), "Transactions")), "SetVariable", ["TITLE", (await $.wv([$t8], "OrderedTitle", C, false))])));
        }
      }
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
  await $.set(C, "frmBTrans", (await $.mcall((await $.v(C, "TfrmBTrans")), "Create", [Self])));
  await $.set(C, "FormWorMessag", (await $.mcall((await $.v(C, "TFormWorMessag")), "create", [Self])));
  await $.set(C, "Forminsurance", (await $.mcall((await $.v(C, "TForminsurance")), "create", [Self])));
  await $.stmt($.call(C, "InitData", []));
  {
    const $t9 = (await $.wobj(C, "TransactionDataModule"));
    await $.wset([$t9], "CurrentDate", (await $.mv((await $.mcall((await $.wv([$t9], "Sysdat", C, false)), "FieldByName", ["tek_dat"])), "AsDateTime")), C);
  }
  await $.set(C, "TransactionState", (await $.v(C, "tsDelete")));
  await $.set(C, "OrderedTitle", " ID ");
  await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_StatusT")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_StatusT")), "FieldByName", ["VALUE"])), "AsInteger")), 1))) {
    await $.mset((await $.v(C, "ChBoxStatusT")), "Checked", true);
  } else {
    await $.mset((await $.v(C, "ChBoxStatusT")), "Checked", false);
  }
  await $.stmt((await $.call(C, "ActionRefreshExecute", [L0["sender"]])));
  await $.stmt($.call(C, "SetAddress", []));
  await $.mcall((await $.v(C, "ActionLoadFilters")), "Execute", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActionInsertExecute", async function ActionInsertExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "Insert_Edit", true);
    await $.set(C, "OperationMode", (await $.v(C, "omInsert")));
    {
      const $t10 = (await $.wobj(C, "TransactionDataModule"));
      const $t11 = (await $.wv([$t10], "TransactionEditForm", C, false));
      await $.stmt((await $.mcall((await $.wv([$t10, $t11], "SB_ACA", C, false)), "CallProcedure", ["CheckObjectAccess", ["TransactionManager", "insert"]])));
      await $.mcall((await $.wv([$t10, $t11], "Transactions", C, false)), "Insert", []);
      await $.stmt($.wcall([$t10, $t11], "InitProperties", [], C));
    }
    await $.mcall((await $.mv((await $.v(C, "GridTransactions")), "SelectedRows")), "Clear", []);
  } finally {
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "GridTransactionsTitleClick", async function GridTransactionsTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  await $.set(C, "OrderedTitle", (await $.mv(L0["column"], "FieldName")));
  if ($.truthy($.eq((await $.v(C, "OrderedTitle")), "DEBITACCNO"))) {
    await $.set(C, "OrderedTitle", "D_ACCNO");
  }
  if ($.truthy($.eq((await $.v(C, "OrderedTitle")), "CREDITACCNO"))) {
    await $.set(C, "OrderedTitle", "C_ACCNO");
  }
  if ($.truthy((await $.or_(((await $.mv((await $.mv((await $.mv((await $.v(C, "GridTransactions")), "DataSource")), "DataSet")), "IsEmpty"))), async () => ($.eq((await $.mv(L0["column"], "FieldName")), (await $.v(C, "EmptyStr")))))))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t12 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "GridTransactions")), "DataSource")), "DataSet"))]));
    try {
      if ($.truthy((await $.mv((await $.wv([$t12], "ChBoxStatusT", C, false)), "Checked")))) {
        await $.stmt((await $.wcall([$t12], "SetVariable", ["Title", $.add(" Status desc, ", (await $.wv([$t12], "OrderedTitle", C, false)))], C)));
      } else {
        await $.stmt((await $.wcall([$t12], "SetVariable", ["Title", (await $.wv([$t12], "OrderedTitle", C, false))], C)));
      }
      await $.stmt($.wcall([$t12], "Refresh", [], C));
    } finally {
      await $.mset((await $.wv([$t12], "Screen", C, false)), "Cursor", (await $.wv([$t12], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TTransactionManagerForm", "ActionEditExecute", async function ActionEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Insert_Edit", false);
  await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "Ods_budce")), "ClearVariables", []);
  await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "Ods_budce")), "Refresh", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridTransactions")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 1))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "SB_ACA")), "CallProcedure", ["checkadvancedobjectaccess", ["DELAYEDEDIT"]])));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridTransactions")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 2))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "SB_ACA")), "CallProcedure", ["checkadvancedobjectaccess", ["COMMITEDEDIT"]])));
  }
  await $.set(C, "OperationMode", (await $.v(C, "omEdit")));
  {
    const $t13 = (await $.wobj(C, "TransactionDataModule"));
    await $.stmt((await $.mcall((await $.wv([$t13], "SB_ACA", C, false)), "CallProcedure", ["CheckObjectAccess", ["TransactionManager", "update"]])));
    await $.mcall((await $.wv([$t13], "Transactions", C, false)), "Edit", []);
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
    const $t14 = L0["sender"];
    await $.wset([$t14], "SearchField", (await $.wcall([$t14], "copy", [(await $.wv([$t14], "Name", C, false)), 5, (await $.wcall([$t14], "length", [(await $.wv([$t14], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t15 = (await $.wcall([$t14], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t14], "GridTransactions", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t14, $t15], "SearchRecord", [(await $.wv([$t14, $t15], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t14, $t15], "Text", C, false)), $.add((await $.wv([$t14, $t15], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t14, $t15], "srFromCurrent", C, false)), (await $.wv([$t14, $t15], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t14, $t15], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t14, $t15], "mtInformation", C, false)), [(await $.wv([$t14, $t15], "mbNo", C, false)), (await $.wv([$t14, $t15], "mbYes", C, false))], 0], C)), (await $.wv([$t14, $t15], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t14, $t15], "SearchRecord", [(await $.wv([$t14, $t15], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t14, $t15], "Text", C, false)), $.add((await $.wv([$t14, $t15], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t14, $t15], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t14, $t15], "MessageDlg", ["Yazı tapılmayıb!", (await $.wv([$t14, $t15], "mtInformation", C, false)), [(await $.wv([$t14, $t15], "mbOK", C, false))], 0], C)));
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
    const $t16 = (await $.wobj(C, "GridTransactions"));
    const $t17 = (await $.wv([$t16], "SelectedRows", C, false));
    const $t18 = (await $.mv((await $.wv([$t16, $t17], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t16, $t17, $t18], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t16, $t17, $t18], "First", [], C));
      while ($.truthy($.not((await $.wv([$t16, $t17, $t18], "Eof", C, false))))) {
        await $.wset([$t16, $t17, $t18], "CurrentRowSelected", (await $.wv([$t16, $t17, $t18], "True", C, false)), C);
        await $.stmt($.wcall([$t16, $t17, $t18], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t16, $t17, $t18], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "N2DrawItem", async function N2DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t19 = L0["acanvas"];
    const $t20 = (await $.wv([$t19], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t21 = (await $.wv([$t19, $t20], "Font", C, false));
      await $.wset([$t19, $t20, $t21], "Name", "Azl Sans Serif", C);
      await $.wset([$t19, $t20, $t21], "Charset", (await $.wv([$t19, $t20, $t21], "RUSSIAN_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t19, $t20, $t21], "Default", C, false)))) {
        await $.wset([$t19, $t20, $t21], "Style", [(await $.wv([$t19, $t20, $t21], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t19, $t20], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t19, $t20], "Pen", C, false)), "Color", (await $.wv([$t19, $t20], "clBlack", C, false)));
      await $.wset([$t19, $t20], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t19, $t20], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t19, $t20], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t19, $t20], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t19, $t20], "MoveTo", [(await $.mv((await $.wv([$t19, $t20], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t19, $t20], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t19, $t20], "LineTo", [(await $.mv((await $.wv([$t19, $t20], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t19, $t20], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t19, $t20], "inc", [$.ref(async () => (await $.wv([$t19, $t20], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t22) => { await $.wset([$t19, $t20], "LineBottom", $t22, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t19, $t20], "Pen", C, false)), "Color", (await $.wv([$t19, $t20], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t19, $t20], "MoveTo", [(await $.mv((await $.wv([$t19, $t20], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t19, $t20], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t19, $t20], "LineTo", [(await $.mv((await $.wv([$t19, $t20], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t19, $t20], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t19, $t20], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t19, $t20], "Brush", C, false)), "Color", (await $.wv([$t19, $t20], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t19, $t20], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t19, $t20], "Font", C, false)), "Color", (await $.wv([$t19, $t20], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t19, $t20], "Font", C, false)), "Color", (await $.wv([$t19, $t20], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t19, $t20], "Brush", C, false)), "Color", (await $.wv([$t19, $t20], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t19, $t20], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t19, $t20], "Font", C, false)), "Color", (await $.wv([$t19, $t20], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t19, $t20], "Font", C, false)), "Color", (await $.wv([$t19, $t20], "clGrayText", C, false)));
        }
      }
      await $.wset([$t19, $t20], "Bar", (await $.wv([$t19, $t20], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t19, $t20], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t19, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t23) => { await $.mset((await $.wv([$t19, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t23); }), 22], C)));
      await $.stmt((await $.wcall([$t19, $t20], "FillRect", [(await $.wv([$t19, $t20], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t19, $t20], "TextOut", [$.add((await $.mv((await $.wv([$t19, $t20], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t19, $t20], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t19, $t20], "Caption", C, false))], C)));
    }
    await $.wset([$t19, $t20], "SText", (await $.wcall([$t19, $t20], "ShortCutToText", [(await $.wv([$t19, $t20], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t19, $t20], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t19, $t20], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t19, $t20], "TextWidth", [(await $.wv([$t19, $t20], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t19, $t20], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t19, $t20], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t19, $t20], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t24 = (await $.wv([$t19, $t20], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t19, $t20, $t24], "Assigned", [(await $.wv([$t19, $t20, $t24], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t19, $t20, $t24], "Checked", C, false)))) {
            await $.mset((await $.wv([$t19, $t20, $t24], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t19, $t20, $t24], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t19, $t20, $t24], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t19, $t20, $t24], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t19, $t20, $t24], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t19, $t20, $t24], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t19, $t20, $t24], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t19, $t20, $t24], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t19, $t20, $t24], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t19, $t20, $t24], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t19, $t20, $t24], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t19, $t20, $t24], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t19, $t20, $t24], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t19, $t20, $t24], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t25) => { await $.mset((await $.wv([$t19, $t20, $t24], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t25); }), 2], C)));
            await $.stmt((await $.wcall([$t19, $t20, $t24], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t19, $t20, $t24], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t26) => { await $.mset((await $.wv([$t19, $t20, $t24], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t26); }), 2], C)));
            await $.stmt((await $.wcall([$t19, $t20, $t24], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t19, $t20, $t24], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t27) => { await $.mset((await $.wv([$t19, $t20, $t24], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t27); }), 2], C)));
            await $.stmt((await $.wcall([$t19, $t20, $t24], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t19, $t20, $t24], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t28) => { await $.mset((await $.wv([$t19, $t20, $t24], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t28); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t19, $t20, $t24], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t19, $t20, $t24], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t19, $t20, $t24], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t19, $t20, $t24], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t19, $t20, $t24], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t19, $t20, $t24], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t29) => { await $.mset((await $.wv([$t19, $t20, $t24], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t29); }), 1], C)));
            await $.stmt((await $.wcall([$t19, $t20, $t24], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t19, $t20, $t24], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t30) => { await $.mset((await $.wv([$t19, $t20, $t24], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t30); }), 1], C)));
            await $.stmt((await $.wcall([$t19, $t20, $t24], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t19, $t20, $t24], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t31) => { await $.mset((await $.wv([$t19, $t20, $t24], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t31); }), 1], C)));
            await $.stmt((await $.wcall([$t19, $t20, $t24], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t19, $t20, $t24], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t32) => { await $.mset((await $.wv([$t19, $t20, $t24], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t32); }), 1], C)));
            if ($.truthy((await $.wv([$t19, $t20, $t24], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t19, $t20, $t24], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t19, $t20, $t24], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t19, $t20, $t24], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t19, $t20, $t24], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t19, $t20, $t24], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t19, $t20, $t24], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t19, $t20, $t24], "Images", C, false)), "Draw", [(await $.wv([$t19, $t20, $t24], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t19, $t20, $t24], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t19, $t20, $t24], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t19, $t20, $t24], "ImageIndex", C, false)), (await $.wv([$t19, $t20, $t24], "Enabled", C, false))])));
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
    const $t33 = (L0["sender"]);
    await $.wset([$t33], "Enabled", $.not((await $.mv((await $.mv((await $.mv((await $.wv([$t33], "GridTransactions", C, false)), "DataSource")), "DataSet")), "IsEmpty"))), C);
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
    const $t34 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t34], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t35 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t34], "DataSource", C, false)), "DataSet")), "FieldByName", ["Status"])), "AsInteger"));
        if ($.eq($t35, (await $.wv([$t34], "tsCommited", C, false)))) {
          await $.wset([$t34], "ImageIndex", 7, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t35, (await $.wv([$t34], "tsRejected", C, false)))) {
          await $.wset([$t34], "ImageIndex", 8, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t35, (await $.wv([$t34], "tsDelayed", C, false)))) {
          await $.wset([$t34], "ImageIndex", 9, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t34], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t34], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t34], "ImageList", C, false)), "Draw", [(await $.wv([$t34], "Canvas", C, false)), (await $.mv((await $.wv([$t34], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t34], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t34], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t34], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t34], "DefaultDrawColumnCell", [(await $.wv([$t34], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t34], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t34], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t34], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
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
    const $t36 = (await $.wobj(C, "GridTransactions"));
    const $t37 = (await $.wv([$t36], "SelectedRows", C, false));
    const $t38 = (await $.mv((await $.wv([$t36, $t37], "DataSource", C, false)), "DataSet"));
    if ($.truthy($.eq((await $.wv([$t36, $t37, $t38], "Count", C, false)), 0))) {
      await $.stmt((await $.wcall([$t36, $t37, $t38], "Inc", [$.ref(async () => (await $.wv([$t36, $t37, $t38], "TrCount", { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }, false)), async ($t39) => { await $.wset([$t36, $t37, $t38], "TrCount", $t39, { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }); })], C)));
      await $.wset([$t36, $t37, $t38], "IDs", (await $.mv((await $.wcall([$t36, $t37, $t38], "FieldByName", ["ID"], C)), "AsString")), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
    } else {
      await $.stmt($.wcall([$t36, $t37, $t38], "DisableControls", [], C));
      try {
        { const $t40 = $.sub((await $.wv([$t36, $t37, $t38], "Count", C, false)), 1);
          await $.wset([$t36, $t37, $t38], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t41 = true;
          for (;;) {
            if (!$t41) { await $.wset([$t36, $t37, $t38], "i", $.succ((await $.wv([$t36, $t37, $t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t41 = false;
            if (!($.ord((await $.wv([$t36, $t37, $t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t40))) break;
            await $.stmt((await $.wcall([$t36, $t37, $t38], "GotoBookmark", [(await $.wcall([$t36, $t37, $t38], "TBookmark", [(await $.idx((await $.wv([$t36, $t37, $t38], "Items", C, false)), [(await $.wv([$t36, $t37, $t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            await $.wset([$t36, $t37, $t38], "Status", (await $.mv((await $.wcall([$t36, $t37, $t38], "FieldByname", ["Status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
            if ($.truthy($.in_((await $.wv([$t36, $t37, $t38], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t36, $t37, $t38], "tsDelayed", C, false)), (await $.wv([$t36, $t37, $t38], "tsRejected", C, false))]))) {
              await $.stmt((await $.wcall([$t36, $t37, $t38], "Inc", [$.ref(async () => (await $.wv([$t36, $t37, $t38], "TrCount", { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }, false)), async ($t42) => { await $.wset([$t36, $t37, $t38], "TrCount", $t42, { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }); })], C)));
              await $.wset([$t36, $t37, $t38], "IDs", $.add($.add((await $.wv([$t36, $t37, $t38], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), ","), (await $.mv((await $.wcall([$t36, $t37, $t38], "FieldByName", ["ID"], C)), "AsString"))), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
            }
            await $.tick();
          }
        }
        await $.stmt((await $.mcall((await $.wv([$t36, $t37, $t38], "System", C, false)), "Delete", [$.ref(async () => (await $.wv([$t36, $t37, $t38], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), async ($t43) => { await $.wset([$t36, $t37, $t38], "IDs", $t43, { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }); }), 1, 1])));
      } finally {
        await $.stmt($.wcall([$t36, $t37, $t38], "EnableControls", [], C));
      }
    }
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["%d sayda əməliyyat təsdiqlənsin?", [L0["trcount"]]])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t44 = (await $.wobj(C, "TransactionDataModule"));
      await $.stmt((await $.wcall([$t44], "CommitTransactions", [(await $.wv([$t44], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t44], "SBCommit", [], C)));
      await $.stmt((await $.wcall([$t44], "ActionRefreshExecute", [(await $.wv([$t44], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActionCommitUpdate", async function ActionCommitUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t45 = (L0["sender"]);
    const $t46 = (await $.mv((await $.wv([$t45], "TransactionDataModule", C, false)), "Transactions"));
    await $.wset([$t45, $t46], "Enabled", $.not(((await $.wv([$t45, $t46], "IsEmpty", C, false)))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActionDeleteExecute", async function ActionDeleteExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridTransactions")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 1))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "SB_ACA")), "CallProcedure", ["checkadvancedobjectaccess", ["DELAYEDDELETE"]])));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridTransactions")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), 2))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "SB_ACA")), "CallProcedure", ["checkadvancedobjectaccess", ["COMMITEDDELETE"]])));
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "SB_ACA")), "CallProcedure", ["CheckObjectAccess", ["TransactionManager", "delete"]])));
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  await $.stmt($.call(C, "Focus", []));
  {
    const $t47 = (await $.wobj(C, "GridTransactions"));
    const $t48 = (await $.wv([$t47], "SelectedRows", C, false));
    const $t49 = (await $.mv((await $.wv([$t47, $t48], "DataSource", C, false)), "DataSet"));
    const $t50 = (await $.wv([$t47, $t48, $t49], "TransactionDataModule", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t47, $t48, $t49, $t50], "Count", C, false)), 0))) {
        await $.wset([$t47, $t48, $t49, $t50], "CurrentRowSelected", (await $.wv([$t47, $t48, $t49, $t50], "True", C, false)), C);
      }
      { const $t51 = $.sub((await $.wv([$t47, $t48, $t49, $t50], "Count", C, false)), 1);
        await $.wset([$t47, $t48, $t49, $t50], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t52 = true;
        for (;;) {
          if (!$t52) { await $.wset([$t47, $t48, $t49, $t50], "Index", $.succ((await $.wv([$t47, $t48, $t49, $t50], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t52 = false;
          if (!($.ord((await $.wv([$t47, $t48, $t49, $t50], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t51))) break;
          await $.stmt((await $.wcall([$t47, $t48, $t49, $t50], "GotoBookmark", [(await $.wcall([$t47, $t48, $t49, $t50], "Pointer", [(await $.idx((await $.wv([$t47, $t48, $t49, $t50], "Items", C, false)), [(await $.wv([$t47, $t48, $t49, $t50], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t47, $t48, $t49, $t50], "TransactionID", (await $.mv((await $.wcall([$t47, $t48, $t49, $t50], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t47, $t48, $t49, $t50], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t53 = (await $.wcall([$t47, $t48, $t49, $t50], "MessageDlg", [(await $.wcall([$t47, $t48, $t49, $t50], "Format", ["Əməliyyat #%d silinsin?", [(await $.wv([$t47, $t48, $t49, $t50], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)), (await $.wv([$t47, $t48, $t49, $t50], "mtConfirmation", C, false)), [(await $.wv([$t47, $t48, $t49, $t50], "mbYes", C, false)), (await $.wv([$t47, $t48, $t49, $t50], "mbNo", C, false)), (await $.wv([$t47, $t48, $t49, $t50], "mbCancel", C, false)), (await $.wv([$t47, $t48, $t49, $t50], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t53, (await $.wv([$t47, $t48, $t49, $t50], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t53, (await $.wv([$t47, $t48, $t49, $t50], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t53, (await $.wv([$t47, $t48, $t49, $t50], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t47, $t48, $t49, $t50], "MessageDlg", [(await $.wcall([$t47, $t48, $t49, $t50], "Format", ["%d sayda əməliyyat silinsin?", [$.sub((await $.wv([$t47, $t48, $t49, $t50], "Count", C, false)), (await $.wv([$t47, $t48, $t49, $t50], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t47, $t48, $t49, $t50], "mtConfirmation", C, false)), [(await $.wv([$t47, $t48, $t49, $t50], "mbYes", C, false)), (await $.wv([$t47, $t48, $t49, $t50], "mbCancel", C, false))], 0], C)), (await $.wv([$t47, $t48, $t49, $t50], "mrYes", C, false))))) {
                  await $.wset([$t47, $t48, $t49, $t50], "WaitNextConfirm", (await $.wv([$t47, $t48, $t49, $t50], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t47, $t48, $t49, $t50], "Application", C, false)), "ProcessMessages", []);
          {
            const $t54 = (await $.wv([$t47, $t48, $t49, $t50], "ODS_VidOPTrDel", C, false));
            await $.stmt($.wcall([$t47, $t48, $t49, $t50, $t54], "Close", [], C));
            await $.stmt((await $.wcall([$t47, $t48, $t49, $t50, $t54], "SetVariable", ["v_ID", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t47, $t48, $t49, $t50, $t54], "GridTransactions", C, false)), "DataSource")), "DataSet")), "FieldByName", ["OperationCode"])), "AsInteger"))], C)));
            await $.stmt($.wcall([$t47, $t48, $t49, $t50, $t54], "Open", [], C));
          }
          if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t47, $t48, $t49, $t50], "ODS_VidOPTrDel", C, false)), "FieldByName", ["Cnt"])), "AsInteger")), 1))) {
            await $.stmt((await $.wcall([$t47, $t48, $t49, $t50], "ShowMessage", ["Bu növ əməliyyatı bu moduldan silmək olmaz."], C)));
            continue;
          }
          if ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t47, $t48, $t49, $t50], "GridTransactions", C, false)), "SelectedRows")), "Count")), 1))) {
            try {
              await $.stmt((await $.wcall([$t47, $t48, $t49, $t50], "DeleteTransaction", [(await $.wv([$t47, $t48, $t49, $t50], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))], C)));
            } catch ($t55) {
              $.rethrowControl($t55);
              $.handled($t55);
            }
          } else {
            await $.stmt((await $.wcall([$t47, $t48, $t49, $t50], "DeleteTransaction", [(await $.wv([$t47, $t48, $t49, $t50], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))], C)));
          }
          await $.wset([$t47, $t48, $t49, $t50], "WillRefresh", (await $.wv([$t47, $t48, $t49, $t50], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.stmt($.wcall([$t47, $t48, $t49, $t50], "SBCommit", [], C));
          await $.wset([$t47, $t48, $t49, $t50], "TransactionState", (await $.wv([$t47, $t48, $t49, $t50], "tsDelete", C, false)), C);
          await $.tick();
        }
      }
    } finally {
      if ($.truthy((await $.wv([$t47, $t48, $t49, $t50], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.stmt((await $.wcall([$t47, $t48, $t49, $t50], "ActionRefreshExecute", [(await $.wv([$t47, $t48, $t49, $t50], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
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
    const $t56 = (L0["sender"]);
    const $t57 = (await $.mv((await $.wv([$t56], "TransactionDataModule", C, false)), "Transactions"));
    await $.wset([$t56, $t57], "Enabled", $.not(((await $.wv([$t56, $t57], "IsEmpty", C, false)))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "CBDebetFilialClick", async function CBDebetFilialClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dblookupno": '', "dblookupname": '', "dblookup": null};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t58 = (await $.call(C, "TCheckBox", [L0["sender"]]));
    await $.wset([$t58], "DBLookupNo", (await $.wcall([$t58], "IntToStr", [(await $.wv([$t58], "Tag", C, false))], C)), { get: async () => L0["dblookupno"], set: async (v) => { L0["dblookupno"] = v; }, local: true });
  }
  L0["dblookupname"] = $.add("DBLookup", L0["dblookupno"]);
  L0["dblookup"] = (await $.call(C, "TDBLookupComboBox", [(await $.call(C, "FindComponent", [L0["dblookupname"]]))]));
  {
    const $t59 = L0["dblookup"];
    const $t60 = (await $.wcall([$t59], "TCheckBox", [(await $.wv([$t59], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C));
    if ($.truthy((await $.wv([$t59, $t60], "Checked", C, false)))) {
      await $.mcall((await $.mv((await $.wv([$t59, $t60], "ListSource", C, false)), "DataSet")), "First", []);
      await $.wset([$t59, $t60], "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t59, $t60], "ListSource", C, false)), "DataSet")), "FieldByName", [(await $.wv([$t59, $t60], "KeyField", C, false))])), "AsInteger")), C);
    } else {
      await $.wset([$t59, $t60], "KeyValue", (-(1)), C);
    }
  }
  await $.mcall((await $.v(C, "ActionFilter")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ChBoxStatusTClick", async function ChBoxStatusTClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t61 = (await $.mv((await $.v(C, "TransactionDataModule")), "ODS_StatusT"));
    await $.stmt($.wcall([$t61], "Edit", [], C));
    if ($.truthy((await $.mv((await $.wv([$t61], "ChBoxStatusT", C, false)), "Checked")))) {
      await $.mset((await $.wcall([$t61], "FieldByName", ["Value"], C)), "AsInteger", 1);
    } else {
      await $.mset((await $.wcall([$t61], "FieldByName", ["Value"], C)), "AsInteger", 0);
    }
    await $.stmt($.wcall([$t61], "Post", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "CheckBox_typeClick", async function CheckBox_typeClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t62 = $.sub((await $.mv((await $.v(C, "CLBOperationTypes")), "count")), 1);
    L0["i"] = 0;
    let $t63 = true;
    for (;;) {
      if (!$t63) { L0["i"] = $.succ(L0["i"], 1); }
      $t63 = false;
      if (!($.ord(L0["i"]) <= $.ord($t62))) break;
      if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox_type")), "Checked")), false))) {
        { const $t64 = await $.iset((await $.mv((await $.v(C, "CLBOperationTypes")), "Checked")), [L0["i"]], false); if ($t64 !== undefined) { await $.mset((await $.v(C, "CLBOperationTypes")), "Checked", $t64); } }
      } else {
        { const $t65 = await $.iset((await $.mv((await $.v(C, "CLBOperationTypes")), "Checked")), [L0["i"]], true); if ($t65 !== undefined) { await $.mset((await $.v(C, "CLBOperationTypes")), "Checked", $t65); } }
      }
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "ActionFilter")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "CheckBox_valClick", async function CheckBox_valClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t66 = $.sub((await $.mv((await $.v(C, "CLBCurrency")), "count")), 1);
    L0["i"] = 0;
    let $t67 = true;
    for (;;) {
      if (!$t67) { L0["i"] = $.succ(L0["i"], 1); }
      $t67 = false;
      if (!($.ord(L0["i"]) <= $.ord($t66))) break;
      if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox_val")), "Checked")), false))) {
        { const $t68 = await $.iset((await $.mv((await $.v(C, "CLBCurrency")), "Checked")), [L0["i"]], false); if ($t68 !== undefined) { await $.mset((await $.v(C, "CLBCurrency")), "Checked", $t68); } }
      } else {
        { const $t69 = await $.iset((await $.mv((await $.v(C, "CLBCurrency")), "Checked")), [L0["i"]], true); if ($t69 !== undefined) { await $.mset((await $.v(C, "CLBCurrency")), "Checked", $t69); } }
      }
      await $.tick();
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
    const $t70 = (await $.wobj(C, "TransactionDataModule"));
    await $.mcall((await $.wv([$t70], "Operations", C, false)), "Execute", []);
    await $.mcall((await $.wv([$t70], "Valute", C, false)), "Execute", []);
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
    const $t71 = L1["checklistbox"];
    const $t72 = (await $.wv([$t71], "Items", C, false));
    await $.wset([$t71, $t72], "Position", 0, { get: async () => L1["position"], set: async (v) => { L1["position"] = v; }, local: true });
    if ($.truthy($.not(($.gt((await $.wv([$t71, $t72], "Count", C, false)), 0))))) {
      return L1.result;
    }
    if ($.truthy($.not((await $.idx((await $.wv([$t71, $t72], "Checked", C, false)), [0]))))) {
      if ($.truthy($.eq((await $.wv([$t71, $t72], "ICount", { get: async () => L1["icount"], set: async (v) => { L1["icount"] = v; }, local: true }, false)), 1))) {
        await $.wset([$t71, $t72], "Filter", (await $.wcall([$t71, $t72], "Format", [(await $.wv([$t71, $t72], "FilterConst", { get: async () => L1["filterconst"], set: async (v) => { L1["filterconst"] = v; }, local: true }, false)), [(await $.wcall([$t71, $t72], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t71, $t72], "TStringList", [(await $.wcall([$t71, $t72], "Pointer", [(await $.wv([$t71, $t72], "Tag", C, false))], C))], C)), "Strings")), [0]))], C))]], C)), { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true });
      } else {
        await $.wset([$t71, $t72], "Filter", (await $.wcall([$t71, $t72], "Format", [(await $.wv([$t71, $t72], "FilterConst", { get: async () => L1["filterconst"], set: async (v) => { L1["filterconst"] = v; }, local: true }, false)), [(await $.wcall([$t71, $t72], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t71, $t72], "TStringList", [(await $.wcall([$t71, $t72], "Pointer", [(await $.wv([$t71, $t72], "Tag", C, false))], C))], C)), "Strings")), [0]))], C)), (await $.wcall([$t71, $t72], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t71, $t72], "TStringList", [(await $.wcall([$t71, $t72], "Pointer", [(await $.wv([$t71, $t72], "Tag", C, false))], C))], C)), "Strings")), [0]))], C))]], C)), { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true });
      }
    } else {
      await $.wset([$t71, $t72], "Filter", "", { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true });
    }
    { const $t73 = $.sub((await $.mv((await $.wv([$t71, $t72], "Items", C, false)), "Count")), 1);
      await $.wset([$t71, $t72], "i", 1, { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true });
      let $t74 = true;
      for (;;) {
        if (!$t74) { await $.wset([$t71, $t72], "i", $.succ((await $.wv([$t71, $t72], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), 1), { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }); }
        $t74 = false;
        if (!($.ord((await $.wv([$t71, $t72], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))) <= $.ord($t73))) break;
        if ($.truthy($.not((await $.idx((await $.wv([$t71, $t72], "Checked", C, false)), [(await $.wv([$t71, $t72], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))))) {
          if ($.truthy($.eq((await $.wv([$t71, $t72], "ICount", { get: async () => L1["icount"], set: async (v) => { L1["icount"] = v; }, local: true }, false)), 1))) {
            await $.wset([$t71, $t72], "Filter", $.add($.add((await $.wv([$t71, $t72], "Filter", { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true }, false)), (await $.wcall([$t71, $t72], "AddBoolPrefix", [$.not((await $.idx((await $.wv([$t71, $t72], "Checked", C, false)), [(await $.wv([$t71, $t72], "Position", { get: async () => L1["position"], set: async (v) => { L1["position"] = v; }, local: true }, false))])))], { get: async () => L0["addboolprefix"], set: async (v) => { L0["addboolprefix"] = v; }, local: true }))), (await $.wcall([$t71, $t72], "Format", [(await $.wv([$t71, $t72], "FilterConst", { get: async () => L1["filterconst"], set: async (v) => { L1["filterconst"] = v; }, local: true }, false)), [(await $.wcall([$t71, $t72], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t71, $t72], "TStringList", [(await $.wcall([$t71, $t72], "Pointer", [(await $.wv([$t71, $t72], "Tag", C, false))], C))], C)), "Strings")), [(await $.wv([$t71, $t72], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))], C))]], C))), { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true });
          } else {
            await $.wset([$t71, $t72], "Filter", $.add($.add((await $.wv([$t71, $t72], "Filter", { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true }, false)), (await $.wcall([$t71, $t72], "AddBoolPrefix", [$.not((await $.idx((await $.wv([$t71, $t72], "Checked", C, false)), [(await $.wv([$t71, $t72], "Position", { get: async () => L1["position"], set: async (v) => { L1["position"] = v; }, local: true }, false))])))], { get: async () => L0["addboolprefix"], set: async (v) => { L0["addboolprefix"] = v; }, local: true }))), (await $.wcall([$t71, $t72], "Format", [(await $.wv([$t71, $t72], "FilterConst", { get: async () => L1["filterconst"], set: async (v) => { L1["filterconst"] = v; }, local: true }, false)), [(await $.wcall([$t71, $t72], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t71, $t72], "TStringList", [(await $.wcall([$t71, $t72], "Pointer", [(await $.wv([$t71, $t72], "Tag", C, false))], C))], C)), "Strings")), [(await $.wv([$t71, $t72], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))], C)), (await $.wcall([$t71, $t72], "StrToInt", [(await $.idx((await $.mv((await $.wcall([$t71, $t72], "TStringList", [(await $.wcall([$t71, $t72], "Pointer", [(await $.wv([$t71, $t72], "Tag", C, false))], C))], C)), "Strings")), [(await $.wv([$t71, $t72], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))], C))]], C))), { get: async () => L1["filter"], set: async (v) => { L1["filter"] = v; }, local: true });
          }
          await $.wset([$t71, $t72], "Position", (await $.wv([$t71, $t72], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), { get: async () => L1["position"], set: async (v) => { L1["position"] = v; }, local: true });
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
    const $t75 = (await $.mv((await $.mv((await $.v(C, "GridTransactions")), "DataSource")), "DataSet"));
    await $.wset([$t75], "Filtered", (await $.wv([$t75], "False", C, false)), C);
    await $.wset([$t75], "Filter", (await $.wv([$t75], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false)), C);
    await $.wset([$t75], "Filtered", (await $.wv([$t75], "True", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "FlagEnabled", async function FlagEnabled(Self, p0) {
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
    const $t76 = (await $.wobj(C, "GridTransactions"));
    const $t77 = (await $.wv([$t76], "SelectedRows", C, false));
    const $t78 = (await $.mv((await $.wv([$t76, $t77], "DataSource", C, false)), "DataSet"));
    if ($.truthy((await $.or_(($.eq((await $.wv([$t76, $t77, $t78], "Count", C, false)), 1)), async () => ($.eq((await $.wv([$t76, $t77, $t78], "Count", C, false)), 0)))))) {
      await $.stmt($.wcall([$t76, $t77, $t78], "CheckRow", [], { get: async () => L0["checkrow"], set: async (v) => { L0["checkrow"] = v; }, local: true }));
    } else {
      await $.stmt($.wcall([$t76, $t77, $t78], "DisableControls", [], C));
      await $.wset([$t76, $t77, $t78], "SavedPos", (await $.wv([$t76, $t77, $t78], "GetBookmark", C, false)), { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true });
      try {
        { const $t79 = $.sub((await $.wv([$t76, $t77, $t78], "Count", C, false)), 1);
          await $.wset([$t76, $t77, $t78], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
          let $t80 = true;
          for (;;) {
            if (!$t80) { await $.wset([$t76, $t77, $t78], "Index", $.succ((await $.wv([$t76, $t77, $t78], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
            $t80 = false;
            if (!($.ord((await $.wv([$t76, $t77, $t78], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t79))) break;
            await $.stmt((await $.wcall([$t76, $t77, $t78], "GotoBookmark", [(await $.wcall([$t76, $t77, $t78], "TBookmark", [(await $.idx((await $.wv([$t76, $t77, $t78], "Items", C, false)), [(await $.wv([$t76, $t77, $t78], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
            await $.stmt($.wcall([$t76, $t77, $t78], "CheckRow", [], { get: async () => L0["checkrow"], set: async (v) => { L0["checkrow"] = v; }, local: true }));
            if ($.truthy((await $.wv([$t76, $t77, $t78], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)))) {
              break;
            }
            await $.tick();
          }
        }
      } finally {
        await $.stmt((await $.wcall([$t76, $t77, $t78], "GotoBookmark", [(await $.wv([$t76, $t77, $t78], "SavedPos", { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true }, false))], C)));
        await $.stmt($.wcall([$t76, $t77, $t78], "EnableControls", [], C));
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
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "id": 0, "f": false, "willrefresh": false, "status": 0, "commitedcount": 0, "errorcount": 0, "lasterrormessage": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["f"] = (await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "SB_ACA")), "CallBooleanFunction", ["checkadvancedobjectaccess", ["COMMITSTATUS"]]));
  if ($.truthy($.eq(L0["f"], false))) {
    await $.stmt((await $.call(C, "showmessage", ["Əməliyyatı təsdiqləmək hüquqnuz  yoxdur  !"])));
    return L0.result;
  }
  L0["commitedcount"] = 0;
  L0["errorcount"] = 0;
  L0["willrefresh"] = false;
  {
    const $t81 = (await $.wobj(C, "TransactionDataModule"));
    const $t82 = (await $.wv([$t81], "GridTransactions", C, false));
    const $t83 = (await $.wv([$t81, $t82], "SelectedRows", C, false));
    const $t84 = (await $.mv((await $.wv([$t81, $t82, $t83], "DataSource", C, false)), "DataSet"));
    if ($.truthy($.eq((await $.wcall([$t81, $t82, $t83, $t84], "MessageDlg", ["Əməliyyatlar təsdiqlənsin?", (await $.wv([$t81, $t82, $t83, $t84], "mtConfirmation", C, false)), [(await $.wv([$t81, $t82, $t83, $t84], "mbYes", C, false)), (await $.wv([$t81, $t82, $t83, $t84], "mbCancel", C, false))], 0], C)), (await $.wv([$t81, $t82, $t83, $t84], "mrYes", C, false))))) {
      await $.stmt($.wcall([$t81, $t82, $t83, $t84], "DisableControls", [], C));
      try {
        await $.mcall((await $.wv([$t81, $t82, $t83, $t84], "Application", C, false)), "ProcessMessages", []);
        if ($.truthy($.eq((await $.wv([$t81, $t82, $t83, $t84], "Count", C, false)), 0))) {
          await $.wset([$t81, $t82, $t83, $t84], "CurrentRowSelected", (await $.wv([$t81, $t82, $t83, $t84], "True", C, false)), C);
        }
        { const $t85 = $.sub((await $.wv([$t81, $t82, $t83, $t84], "Count", C, false)), 1);
          await $.wset([$t81, $t82, $t83, $t84], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t86 = true;
          for (;;) {
            if (!$t86) { await $.wset([$t81, $t82, $t83, $t84], "i", $.succ((await $.wv([$t81, $t82, $t83, $t84], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t86 = false;
            if (!($.ord((await $.wv([$t81, $t82, $t83, $t84], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t85))) break;
            try {
              await $.stmt((await $.wcall([$t81, $t82, $t83, $t84], "GotoBookmark", [(await $.wcall([$t81, $t82, $t83, $t84], "TBookmark", [(await $.idx((await $.wv([$t81, $t82, $t83, $t84], "Items", C, false)), [(await $.wv([$t81, $t82, $t83, $t84], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
              await $.wset([$t81, $t82, $t83, $t84], "Status", (await $.mv((await $.wcall([$t81, $t82, $t83, $t84], "FieldByname", ["Status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
              if ($.truthy($.in_((await $.wv([$t81, $t82, $t83, $t84], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t81, $t82, $t83, $t84], "tsDelayed", C, false)), (await $.wv([$t81, $t82, $t83, $t84], "tsRejected", C, false))]))) {
                await $.wset([$t81, $t82, $t83, $t84], "ID", (await $.mv((await $.wcall([$t81, $t82, $t83, $t84], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
                await $.stmt((await $.wcall([$t81, $t82, $t83, $t84], "CommitTransaction", [(await $.wv([$t81, $t82, $t83, $t84], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))], C)));
                await $.wset([$t81, $t82, $t83, $t84], "WillRefresh", (await $.wv([$t81, $t82, $t83, $t84], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
                await $.stmt((await $.wcall([$t81, $t82, $t83, $t84], "Inc", [$.ref(async () => (await $.wv([$t81, $t82, $t83, $t84], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), async ($t88) => { await $.wset([$t81, $t82, $t83, $t84], "CommitedCount", $t88, { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }); })], C)));
                await $.stmt((await $.wcall([$t81, $t82, $t83, $t84], "SBCommit", [], C)));
              }
            } catch ($t87) {
              $.rethrowControl($t87);
              if ($.excIs($t87, "Exception")) {
                L0["e"] = $.exc($t87);
                await $.wset([$t81, $t82, $t83, $t84], "LastErrorMessage", (await $.mv((await $.wv([$t81, $t82, $t83, $t84], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), { get: async () => L0["lasterrormessage"], set: async (v) => { L0["lasterrormessage"] = v; }, local: true });
                await $.stmt((await $.wcall([$t81, $t82, $t83, $t84], "Inc", [$.ref(async () => (await $.wv([$t81, $t82, $t83, $t84], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), async ($t89) => { await $.wset([$t81, $t82, $t83, $t84], "ErrorCount", $t89, { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }); })], C)));
                continue;
              }
              else { throw $t87; }
            }
            await $.tick();
          }
        }
      } finally {
        if ($.truthy($.gt((await $.wv([$t81, $t82, $t83, $t84], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), 0))) {
          if ($.truthy($.eq((await $.wv([$t81, $t82, $t83, $t84], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), 1))) {
            await $.stmt((await $.wcall([$t81, $t82, $t83, $t84], "MessageDlg", [(await $.wv([$t81, $t82, $t83, $t84], "LastErrorMessage", { get: async () => L0["lasterrormessage"], set: async (v) => { L0["lasterrormessage"] = v; }, local: true }, false)), (await $.wv([$t81, $t82, $t83, $t84], "mtConfirmation", C, false)), [(await $.wv([$t81, $t82, $t83, $t84], "mbOk", C, false))], 0], C)));
          } else {
            await $.stmt((await $.wcall([$t81, $t82, $t83, $t84], "MessageDlg", [(await $.wcall([$t81, $t82, $t83, $t84], "Format", [(await $.wv([$t81, $t82, $t83, $t84], "cs_CommitInformation", C, false)), [$.add((await $.wv([$t81, $t82, $t83, $t84], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), (await $.wv([$t81, $t82, $t83, $t84], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false))), (await $.wv([$t81, $t82, $t83, $t84], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), (await $.wv([$t81, $t82, $t83, $t84], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false))]], C)), (await $.wv([$t81, $t82, $t83, $t84], "mtConfirmation", C, false)), [(await $.wv([$t81, $t82, $t83, $t84], "mbOk", C, false))], 0], C)));
          }
        }
        await $.stmt($.wcall([$t81, $t82, $t83, $t84], "EnableControls", [], C));
        if ($.truthy((await $.wv([$t81, $t82, $t83, $t84], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
          await $.wset([$t81, $t82, $t83, $t84], "TransactionState", (await $.wv([$t81, $t82, $t83, $t84], "tsCommit", C, false)), C);
          await $.stmt((await $.wcall([$t81, $t82, $t83, $t84], "ActionRefreshExecute", [(await $.wv([$t81, $t82, $t83, $t84], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
        }
      }
    }
  }
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridTransactions")), "DataSource")), "DataSet")), "Locate", ["ID", L0["id"], [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ActionRejectExecute", async function ActionRejectExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "id": 0, "willrefresh": false, "rejectreason": '', "status": 0, "rejectedcount": 0, "errorcount": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["errorcount"] = 0;
  L0["rejectedcount"] = 0;
  L0["willrefresh"] = false;
  if ($.truthy((await $.call(C, "InputQuery", ["İnkarolunma !!! ", "Təyinat:", $.ref(async () => L0["rejectreason"], async ($t90) => { L0["rejectreason"] = $t90; })])))) {
    {
      const $t91 = (await $.wobj(C, "TransactionDataModule"));
      const $t92 = (await $.wv([$t91], "GridTransactions", C, false));
      const $t93 = (await $.wv([$t91, $t92], "SelectedRows", C, false));
      const $t94 = (await $.mv((await $.wv([$t91, $t92, $t93], "DataSource", C, false)), "DataSet"));
      if ($.truthy($.eq((await $.wv([$t91, $t92, $t93, $t94], "Count", C, false)), 0))) {
        await $.wset([$t91, $t92, $t93, $t94], "CurrentRowSelected", (await $.wv([$t91, $t92, $t93, $t94], "True", C, false)), C);
      }
      { const $t95 = $.sub((await $.wv([$t91, $t92, $t93, $t94], "Count", C, false)), 1);
        await $.wset([$t91, $t92, $t93, $t94], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t96 = true;
        for (;;) {
          if (!$t96) { await $.wset([$t91, $t92, $t93, $t94], "i", $.succ((await $.wv([$t91, $t92, $t93, $t94], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t96 = false;
          if (!($.ord((await $.wv([$t91, $t92, $t93, $t94], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t95))) break;
          try {
            await $.stmt((await $.wcall([$t91, $t92, $t93, $t94], "GotoBookmark", [(await $.wcall([$t91, $t92, $t93, $t94], "TBookmark", [(await $.idx((await $.wv([$t91, $t92, $t93, $t94], "Items", C, false)), [(await $.wv([$t91, $t92, $t93, $t94], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            await $.wset([$t91, $t92, $t93, $t94], "Status", (await $.mv((await $.wcall([$t91, $t92, $t93, $t94], "FieldByname", ["Status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
            if ($.truthy($.in_((await $.wv([$t91, $t92, $t93, $t94], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t91, $t92, $t93, $t94], "tsDelayed", C, false)), (await $.wv([$t91, $t92, $t93, $t94], "tsRejected", C, false))]))) {
              await $.wset([$t91, $t92, $t93, $t94], "ID", (await $.mv((await $.wcall([$t91, $t92, $t93, $t94], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
              await $.stmt((await $.wcall([$t91, $t92, $t93, $t94], "RejectTransaction", [(await $.wv([$t91, $t92, $t93, $t94], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), (await $.wv([$t91, $t92, $t93, $t94], "RejectReason", { get: async () => L0["rejectreason"], set: async (v) => { L0["rejectreason"] = v; }, local: true }, false))], C)));
              await $.wset([$t91, $t92, $t93, $t94], "WillRefresh", (await $.wv([$t91, $t92, $t93, $t94], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
              await $.stmt((await $.wcall([$t91, $t92, $t93, $t94], "Inc", [$.ref(async () => (await $.wv([$t91, $t92, $t93, $t94], "RejectedCount", { get: async () => L0["rejectedcount"], set: async (v) => { L0["rejectedcount"] = v; }, local: true }, false)), async ($t98) => { await $.wset([$t91, $t92, $t93, $t94], "RejectedCount", $t98, { get: async () => L0["rejectedcount"], set: async (v) => { L0["rejectedcount"] = v; }, local: true }); })], C)));
              await $.stmt((await $.wcall([$t91, $t92, $t93, $t94], "SBCommit", [], C)));
            }
          } catch ($t97) {
            $.rethrowControl($t97);
            $.handled($t97);
            await $.stmt((await $.wcall([$t91, $t92, $t93, $t94], "Inc", [$.ref(async () => (await $.wv([$t91, $t92, $t93, $t94], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), async ($t99) => { await $.wset([$t91, $t92, $t93, $t94], "ErrorCount", $t99, { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }); })], C)));
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
  U.method("TTransactionManagerForm", "ActionCheckExecute", async function ActionCheckExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "id": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t100 = (await $.wobj(C, "TransactionDataModule"));
    await $.stmt((await $.mcall((await $.wv([$t100], "SB_ACA", C, false)), "CallProcedure", ["checkadvancedobjectaccess", ["CHECKING"]])));
    await $.mset((await $.mv((await $.wv([$t100], "GridTransactions", C, false)), "SelectedRows")), "CurrentRowSelected", $.ne((await $.mv((await $.mv((await $.mv((await $.wv([$t100], "GridTransactions", C, false)), "DataSource")), "DataSet")), "RecordCount")), 0));
    { const $t101 = $.sub((await $.mv((await $.mv((await $.wv([$t100], "GridTransactions", C, false)), "SelectedRows")), "Count")), 1);
      await $.wset([$t100], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t102 = true;
      for (;;) {
        if (!$t102) { await $.wset([$t100], "i", $.succ((await $.wv([$t100], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t102 = false;
        if (!($.ord((await $.wv([$t100], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t101))) break;
        await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t100], "GridTransactions", C, false)), "DataSource")), "DataSet")), "GotoBookmark", [(await $.idx((await $.mv((await $.mv((await $.wv([$t100], "GridTransactions", C, false)), "SelectedRows")), "Items")), [(await $.wv([$t100], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))])));
        await $.wset([$t100], "ID", (await $.mv((await $.wv([$t100], "TransactionsID", C, false)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
        await $.stmt((await $.mcall((await $.wv([$t100], "SBTransaction", C, false)), "CallProcedure", ["CheckUserUpdate", ["v_id", (await $.wv([$t100], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))]])));
        await $.tick();
      }
    }
  }
  await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "Transactions")), "Refresh", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridTransactions")), "DataSource")), "DataSet")), "Locate", ["ID", L0["id"], [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
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
  U.method("TTransactionManagerForm", "ToolButton10Click", async function ToolButton10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Forminsurance")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormGo", (await $.mcall((await $.v(C, "TFormGo")), "create", [Self])));
  await $.mcall((await $.v(C, "FormGo")), "ShowModal", []);
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
  U.method("TTransactionManagerForm", "BtnKeyboardClick", async function BtnKeyboardClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionManagerForm", "NFullRefreshClick", async function NFullRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "TransactionDataModule")), "FullRefresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
