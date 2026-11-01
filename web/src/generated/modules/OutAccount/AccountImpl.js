// Generated from AccountImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AccountImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "out_account_TLB", "StdVcl", "ComCtrls", "ToolWin", "DBCtrls", "ExtCtrls", "Buttons", "StdCtrls", "Mask", "Grids", "Db", "Oracledata", "DBGrids", "Menus", "ActnList", "ImgList", "ComObj", "ComServ", "AccountPropertiesImpl", "AccountDataModuleImpl", "IntervalImpl", "sboapiDataModuleImpl", "AccountTransactionsImpl", "AccountRestState", "SBTranslateProc"]);
  const C = [U];
  U.enumType("toperationmode", 3);
  U.const("omInsert", 0);
  U.const("omEdit", 1);
  U.const("omDelete", 2);
  U.defClass("TAccountForm", "TActiveForm", {"groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "gridaccount": {"name": "GridAccount", "type": "TDBGrid"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "panelsearch": {"name": "PanelSearch", "type": "TPanel"}, "editacc_no": {"name": "EditAcc_No", "type": "TEdit"}, "editbal_cn1": {"name": "EditBal_cn1", "type": "TEdit"}, "editval_acc": {"name": "EditVal_acc", "type": "TEdit"}, "editname": {"name": "EditName", "type": "TEdit"}, "editopen_dat": {"name": "EditOpen_dat", "type": "TEdit"}, "editclose_dat": {"name": "EditClose_dat", "type": "TEdit"}, "panelsettings": {"name": "PanelSettings", "type": "TGroupBox"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "gbaccountstatus": {"name": "GBAccountStatus", "type": "TRadioGroup"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dblookuptipacc": {"name": "DBLookupTipacc", "type": "TDBLookupComboBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dblookupbranch": {"name": "DBLookupBranch", "type": "TDBLookupComboBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "dblookupcurrency": {"name": "DBLookupCurrency", "type": "TDBLookupComboBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "dblookupoperator": {"name": "DBLookupOperator", "type": "TDBLookupComboBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "dblookupbalance": {"name": "DBLookupBalance", "type": "TDBLookupComboBox"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "label5": {"name": "Label5", "type": "TLabel"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "buttonfilter": {"name": "ButtonFilter", "type": "TToolButton"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "actionlist": {"name": "ActionList", "type": "TActionList"}, "actionrefresh": {"name": "ActionRefresh", "type": "TAction"}, "actioninsert": {"name": "ActionInsert", "type": "TAction"}, "actionedit": {"name": "ActionEdit", "type": "TAction"}, "actioncloseacc": {"name": "ActionCloseAcc", "type": "TAction"}, "actionshowfilter": {"name": "ActionShowFilter", "type": "TAction"}, "actionspeedsearch": {"name": "ActionSpeedSearch", "type": "TAction"}, "actionsearch": {"name": "ActionSearch", "type": "TAction"}, "actionfilter": {"name": "ActionFilter", "type": "TAction"}, "actionfullrefresh": {"name": "ActionFullRefresh", "type": "TAction"}, "actionacctrans": {"name": "ActionAccTrans", "type": "TAction"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "popupmenumain": {"name": "PopupMenuMain", "type": "TPopupMenu"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "popupmenu": {"name": "PopupMenu", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "cbfilial": {"name": "CBFilial", "type": "TCheckBox"}, "cbvalyuta": {"name": "CBValyuta", "type": "TCheckBox"}, "cbuser": {"name": "CBUser", "type": "TCheckBox"}, "cbacctype": {"name": "CbAccType", "type": "TCheckBox"}, "cbbal_cn": {"name": "CBBal_Cn", "type": "TCheckBox"}, "editkli_id": {"name": "EditKLI_ID", "type": "TEdit"}, "editold_acc_no": {"name": "EditOLD_ACC_NO", "type": "TEdit"}, "editbal_cn2": {"name": "EditBal_cn2", "type": "TEdit"}, "editsim_otcet": {"name": "EditSIM_OTCET", "type": "TEdit"}, "fevents": {"name": "FEvents", "type": "IActiveFormXEvents"}, "operationmode": {"name": "OperationMode", "type": "TOperationMode"}}, {});
  U.init(async () => {
    U.var_("AccountForm", null, "TAccountForm");
  });
  U.method("TAccountForm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TAccountForm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TAccountForm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TAccountForm", "Initialize", null, arguments);
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
  U.method("TAccountForm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountForm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountForm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountForm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountForm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountForm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountForm", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountForm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountForm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountForm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountForm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountForm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountForm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountForm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountForm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountForm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountForm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountForm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountForm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TAccountForm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "CbAccTypeClick", async function CbAccTypeClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CbAccType")), "Checked")), true))) {
    await $.mset((await $.v(C, "DBLookupTipacc")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "DBLookupTipacc")), "Enabled", false);
    await $.stmt($.call(C, "InitControl", []));
  }
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "CBBal_CnClick", async function CBBal_CnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBBal_Cn")), "Checked")), true))) {
    await $.mset((await $.v(C, "DBLookupBalance")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "DBLookupBalance")), "Enabled", false);
    await $.stmt($.call(C, "InitControl", []));
  }
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "CBFilialClick", async function CBFilialClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBFilial")), "Checked")), true))) {
    await $.mset((await $.v(C, "DBLookupBranch")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "DBLookupBranch")), "Enabled", false);
    await $.stmt($.call(C, "InitControl", []));
  }
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "CBUserClick", async function CBUserClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBUSER")), "Checked")), true))) {
    await $.mset((await $.v(C, "DBLookupOperator")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "DBLookupOperator")), "Enabled", false);
    await $.stmt($.call(C, "InitControl", []));
  }
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "CBValyutaClick", async function CBValyutaClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBValyuta")), "Checked")), true))) {
    await $.mset((await $.v(C, "DBLookupCurrency")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "DBLookupCurrency")), "Enabled", false);
    await $.stmt($.call(C, "InitControl", []));
  }
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TAccountForm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAccountForm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAccountForm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TAccountForm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TAccountForm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TAccountForm", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TAccountForm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAccountForm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAccountForm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAccountForm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TAccountForm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TAccountForm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAccountForm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TAccountForm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TAccountForm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAccountForm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAccountForm", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "accountid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "Out_accdatamodule")), "Account"));
    await $.wset([$t1], "AccountID", (await $.mv((await $.wcall([$t1], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true });
    await $.stmt($.wcall([$t1], "CloseAll", [], C));
    await $.stmt($.wcall([$t1], "Open", [], C));
    await $.stmt((await $.wcall([$t1], "Locate", ["ID", (await $.wv([$t1], "AccountID", { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true }, false)), []], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "out_accdatamodule"));
    await $.stmt((await $.mcall((await $.wv([$t2], "SB_ACA", C, false)), "CallProcedure", ["CheckObjectAccess", ["out_account", "insert"]])));
  }
  await $.set(C, "OperationMode", (await $.v(C, "omInsert")));
  await $.mcall((await $.mv((await $.v(C, "out_accdatamodule")), "Account")), "Insert", []);
  await $.mcall((await $.v(C, "AccountPropertiesForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "out_accdatamodule"));
    await $.stmt((await $.mcall((await $.wv([$t3], "SB_ACA", C, false)), "CallProcedure", ["CheckObjectAccess", ["out_account", "update"]])));
  }
  await $.mcall((await $.mv((await $.v(C, "out_accdatamodule")), "Customers")), "Open", []);
  await $.set(C, "OperationMode", (await $.v(C, "omEdit")));
  await $.mcall((await $.mv((await $.v(C, "out_accdatamodule")), "Account")), "Edit", []);
  await $.mcall((await $.v(C, "AccountPropertiesForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "ToolButton4Click", async function ToolButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["cs_message"] = "\"%s\" №-li hesab bağlansın?";
  {
    const $t4 = (await $.v(C, "out_accdatamodule"));
    const $t5 = (await $.wv([$t4], "Account", C, false));
    await $.stmt((await $.mcall((await $.wv([$t4, $t5], "SB_ACA", C, false)), "CallProcedure", ["CheckObjectAccess", ["out_account", "delete"]])));
    if ($.truthy($.eq((await $.wcall([$t4, $t5], "MessageDlg", [(await $.wcall([$t4, $t5], "Format", [(await $.wv([$t4, $t5], "cs_message", { get: async () => L0["cs_message"], set: async (v) => { L0["cs_message"] = v; }, local: true }, false)), [(await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["acc_no"], C)), "AsString"))]], C)), (await $.wv([$t4, $t5], "mtConfirmation", C, false)), [(await $.wv([$t4, $t5], "mbYes", C, false)), (await $.wv([$t4, $t5], "mbNo", C, false))], 0], C)), (await $.wv([$t4, $t5], "mrYes", C, false))))) {
      await $.stmt((await $.wcall([$t4, $t5], "CloseAccount", [(await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["ID"], C)), "AsInteger"))], C)));
      await $.stmt((await $.wcall([$t4, $t5], "ActionRefreshExecute", [(await $.wv([$t4, $t5], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "ButtonFilterClick", async function ButtonFilterClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PanelSettings")), "Visible", $.not((await $.mv((await $.v(C, "PanelSettings")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "ToolButton6Click", async function ToolButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PanelSearch")), "Visible", $.not((await $.mv((await $.v(C, "PanelSearch")), "Visible"))));
  if ($.truthy((await $.mv((await $.v(C, "EditAcc_No")), "CanFocus")))) {
    await $.mcall((await $.v(C, "EditAcc_No")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "MouseWheelHandler", async function MouseWheelHandler(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TAccountForm", "MouseWheelHandler", null, arguments);
  if ($.truthy((await $.mv((await $.v(C, "GridAccount")), "Focused")))) {
    await $.mcall((await $.mv((await $.v(C, "GridAccount")), "SelectedRows")), "Clear", []);
    {
      const $t6 = (await $.call(C, "TCMMouseWheel", [(await L0["message"].get())]));
      const $t7 = (await $.mv((await $.mv((await $.wv([$t6], "GridAccount", C, false)), "DataSource")), "DataSet"));
      if ($.truthy($.lt((await $.wv([$t6, $t7], "WheelDelta", C, false)), 0))) {
        await $.stmt($.wcall([$t6, $t7], "Next", [], C));
      } else {
        await $.stmt($.wcall([$t6, $t7], "Prior", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TAccountForm", "InitData", async function InitData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  L0["c_err_message"] = " Table or View in Dataset \"%s\" does not exist! ";
  {
    const $t8 = (await $.v(C, "out_accdatamodule"));
    await $.mcall((await $.wv([$t8], "Account", C, false)), "Open", []);
    await $.mcall((await $.wv([$t8], "Users", C, false)), "Open", []);
    await $.mcall((await $.wv([$t8], "Branches", C, false)), "Open", []);
    await $.mcall((await $.wv([$t8], "Currency", C, false)), "Open", []);
    await $.mcall((await $.wv([$t8], "AccFlags", C, false)), "Open", []);
    await $.mcall((await $.wv([$t8], "BalAcc", C, false)), "Open", []);
    await $.mcall((await $.wv([$t8], "BalAccnew", C, false)), "Open", []);
    await $.mcall((await $.wv([$t8], "Tenostat", C, false)), "Open", []);
    await $.mcall((await $.wv([$t8], "Lazyrest", C, false)), "Open", []);
    await $.mcall((await $.wv([$t8], "ReportSymbol", C, false)), "Open", []);
    await $.mcall((await $.wv([$t8], "PairAccount", C, false)), "Open", []);
    await $.mcall((await $.wv([$t8], "Sysdat", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TAccountForm", "InitControl", async function InitControl(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupBranch")), "ListSource")), "DataSet")), "First", []);
  await $.mset((await $.v(C, "DBLookupBranch")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupBranch")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupCurrency")), "ListSource")), "DataSet")), "First", []);
  await $.mset((await $.v(C, "DBLookupCurrency")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupCurrency")), "ListSource")), "DataSet")), "FieldByName", ["VALUTE"])), "AsString")));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupOperator")), "ListSource")), "DataSet")), "First", []);
  await $.mset((await $.v(C, "DBLookupOperator")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupOperator")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupTipacc")), "ListSource")), "DataSet")), "First", []);
  await $.mset((await $.v(C, "DBLookupTipacc")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupTipacc")), "ListSource")), "DataSet")), "FieldByName", ["Symbol"])), "AsString")));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupBalance")), "ListSource")), "DataSet")), "First", []);
  await $.mset((await $.v(C, "DBLookupBalance")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupBalance")), "ListSource")), "DataSet")), "FieldByName", ["Bal_cn"])), "AsString")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TAccountForm", "ActionInsertExecute", async function ActionInsertExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "OperationMode", (await $.v(C, "omInsert")));
  await $.mcall((await $.mv((await $.v(C, "out_accdatamodule")), "Account")), "Insert", []);
  await $.mcall((await $.v(C, "AccountPropertiesForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "ActionCloseAccExecute", async function ActionCloseAccExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["cs_message"] = "\"%s\" N-li hesab bağlansın?";
  {
    const $t9 = (await $.v(C, "out_accdatamodule"));
    const $t10 = (await $.wv([$t9], "Account", C, false));
    if ($.truthy($.eq((await $.wcall([$t9, $t10], "MessageDlg", [(await $.wcall([$t9, $t10], "Format", [(await $.wv([$t9, $t10], "cs_message", { get: async () => L0["cs_message"], set: async (v) => { L0["cs_message"] = v; }, local: true }, false)), [(await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["acc_no"], C)), "AsString"))]], C)), (await $.wv([$t9, $t10], "mtConfirmation", C, false)), [(await $.wv([$t9, $t10], "mbYes", C, false)), (await $.wv([$t9, $t10], "mbNo", C, false))], 0], C)), (await $.wv([$t9, $t10], "mrYes", C, false))))) {
      await $.stmt((await $.wcall([$t9, $t10], "CloseAccount", [(await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["ID"], C)), "AsInteger"))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "ActionRefreshExecute", [(await $.wv([$t9, $t10], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "ActionEditExecute", async function ActionEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "OperationMode", (await $.v(C, "omEdit")));
  await $.mcall((await $.mv((await $.v(C, "out_accdatamodule")), "Account")), "Edit", []);
  await $.mcall((await $.v(C, "AccountPropertiesForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "ActionRefreshExecute", async function ActionRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "accountid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.mv((await $.v(C, "out_accdatamodule")), "Account"));
    await $.wset([$t11], "AccountID", (await $.mv((await $.wcall([$t11], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true });
    await $.stmt($.wcall([$t11], "CloseAll", [], C));
    await $.stmt($.wcall([$t11], "Open", [], C));
    await $.stmt((await $.wcall([$t11], "Locate", ["ID", (await $.wv([$t11], "AccountID", { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true }, false)), []], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "ActionFullRefreshExecute", async function ActionFullRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (await $.v(C, "out_accdatamodule"));
    await $.stmt((await $.wcall([$t12], "Refresh_", [""], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "ActionAccTransExecute", async function ActionAccTransExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "astartdate": 0, "aenddate": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.v(C, "FormInterval"));
    await $.mset((await $.wv([$t13], "StartDateEdit", C, false)), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.wv([$t13], "out_accdatamodule", C, false)), "Sysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    await $.mset((await $.wv([$t13], "EndDateEdit", C, false)), "DateTime", (await $.mv((await $.wv([$t13], "StartDateEdit", C, false)), "DateTime")));
    if ($.truthy($.eq((await $.wv([$t13], "ShowModal", C, false)), (await $.wv([$t13], "mrOK", C, false))))) {
      await $.wset([$t13], "AStartDate", (await $.mv((await $.wv([$t13], "StartDateEdit", C, false)), "DateTime")), { get: async () => L0["astartdate"], set: async (v) => { L0["astartdate"] = v; }, local: true });
      await $.wset([$t13], "AEndDate", (await $.mv((await $.wv([$t13], "EndDateEdit", C, false)), "DateTime")), { get: async () => L0["aenddate"], set: async (v) => { L0["aenddate"] = v; }, local: true });
      {
        const $t14 = (await $.wv([$t13], "FormAccountTransactions", C, false));
        await $.stmt((await $.wcall([$t13, $t14], "OpenDataControls", [(await $.wv([$t13, $t14], "AStartDate", { get: async () => L0["astartdate"], set: async (v) => { L0["astartdate"] = v; }, local: true }, false)), (await $.wv([$t13, $t14], "AEndDate", { get: async () => L0["aenddate"], set: async (v) => { L0["aenddate"] = v; }, local: true }, false))], C)));
        await $.stmt($.wcall([$t13, $t14], "ShowModal", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "ActionShowFilterExecute", async function ActionShowFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PanelSettings")), "Visible", $.not((await $.mv((await $.v(C, "PanelSettings")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "ActionFilterExecute", async function ActionFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "status": '', "branch": '', "currency": '', "operator": '', "tipacc": '', "balance": '', "filterstr": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["booleanprefix"] = " AND ";
  L0["statusfilter"] = "(Status=%d)";
  L0["branchfilter"] = "(Filial=%d)";
  L0["currencyfilter"] = "(Val_acc=%d)";
  L0["operatorfilter"] = "(Op_ID=%d)";
  L0["tipaccfilter"] = "(Tipacc like  %s)";
  L0["balancefilter"] = "(Bal_cn1=%s)";
  L0["checkfiltered"] = $.fn(async function CheckFiltered(p0, p1, p2) {
  const L1 = {"ischecked": $.copyArg(p0), "filterstr": $.copyArg(p1), "args": $.copyArg(p2), result: ''};
  await $.fixArgs(L1, ["ischecked", "filterstr", "args"]);
  L1["result"] = "";
  if ($.truthy(L1["ischecked"])) {
    L1["result"] = (await $.call(C, "Format", [L1["filterstr"], L1["args"]]));
  }
  return L1.result;
});
  L0["filterstr"] = "";
  L0["status"] = (await $.callv(L0["checkfiltered"], [$.ne((await $.mv((await $.v(C, "GBAccountStatus")), "ItemIndex")), 0), L0["statusfilter"], [(await $.mv((await $.v(C, "GBAccountStatus")), "ItemIndex"))]]));
  L0["branch"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "CBFilial")), "Checked")), L0["branchfilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupBranch")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))]]));
  L0["currency"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "CBValyuta")), "Checked")), L0["currencyfilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupCurrency")), "ListSource")), "DataSet")), "FieldByName", ["Valute"])), "AsInteger"))]]));
  L0["operator"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "CBUser")), "Checked")), L0["operatorfilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupOperator")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))]]));
  L0["tipacc"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "CbAccType")), "Checked")), L0["tipaccfilter"], [$.add($.add($.add($.add("'", "%"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupTipacc")), "ListSource")), "DataSet")), "FieldByName", ["Symbol"])), "AsString"))), "%"), "'")]]));
  L0["balance"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "CBBal_Cn")), "Checked")), L0["balancefilter"], [(await $.mv((await $.v(C, "DBLookupBalance")), "Text"))]]));
  if ($.truthy($.eq(L0["status"], ""))) {
    L0["filterstr"] = "status is not null";
  } else {
    L0["filterstr"] = L0["status"];
  }
  if ($.truthy((await $.mv((await $.v(C, "CBFilial")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["branch"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["branch"]);
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "CBValyuta")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["currency"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["currency"]);
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "CBUser")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["operator"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["operator"]);
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "CbAccType")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["tipacc"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["tipacc"]);
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "CBBal_Cn")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["balance"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["balance"]);
    }
  }
  { const $t15 = await $.iset((await $.mv((await $.mv((await $.v(C, "out_accdatamodule")), "account")), "sql")), [6], $.add(" where ", L0["filterstr"])); if ($t15 !== undefined) { await $.mset((await $.mv((await $.v(C, "out_accdatamodule")), "account")), "sql", $t15); } }
  await $.mset((await $.mv((await $.mv((await $.v(C, "out_accdatamodule")), "account")), "sql")), "text", (await $.call(C, "Stringreplace", [(await $.mv((await $.mv((await $.mv((await $.v(C, "out_accdatamodule")), "account")), "sql")), "text")), "Status", "DECODE (close_dat, NULL, 1, 2)", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]])));
  await $.mcall((await $.mv((await $.v(C, "out_accdatamodule")), "account")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "out_accdatamodule")), "account")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "ActionSpeedSearchExecute", async function ActionSpeedSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t16 = L0["sender"];
    await $.wset([$t16], "SearchField", (await $.wcall([$t16], "copy", [(await $.wv([$t16], "Name", C, false)), 5, (await $.wcall([$t16], "length", [(await $.wv([$t16], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t17 = (await $.wcall([$t16], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t16], "GridAccount", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t16, $t17], "SearchRecord", [(await $.wv([$t16, $t17], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t16, $t17], "Text", C, false)), $.add((await $.wv([$t16, $t17], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t16, $t17], "srFromCurrent", C, false)), (await $.wv([$t16, $t17], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t16, $t17], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t16, $t17], "mtInformation", C, false)), [(await $.wv([$t16, $t17], "mbNo", C, false)), (await $.wv([$t16, $t17], "mbYes", C, false))], 0], C)), (await $.wv([$t16, $t17], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t16, $t17], "SearchRecord", [(await $.wv([$t16, $t17], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t16, $t17], "Text", C, false)), $.add((await $.wv([$t16, $t17], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t16, $t17], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t16, $t17], "MessageDlg", ["Yazı tapılmayıb!", (await $.wv([$t16, $t17], "mtInformation", C, false)), [(await $.wv([$t16, $t17], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "ActionSearchExecute", async function ActionSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PanelSearch")), "Visible", $.not((await $.mv((await $.v(C, "PanelSearch")), "Visible"))));
  if ($.truthy((await $.mv((await $.v(C, "EditAcc_No")), "CanFocus")))) {
    await $.mcall((await $.v(C, "EditAcc_No")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "GridAccountDblClick", async function GridAccountDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "OperationMode", (await $.v(C, "omEdit")));
  await $.mcall((await $.mv((await $.v(C, "out_accdatamodule")), "Account")), "Edit", []);
  await $.mcall((await $.v(C, "AccountPropertiesForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "GridAccountTitleClick", async function GridAccountTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy((await $.mv((await $.mv(L0["column"], "Field")), "Calculated")))) {
    return L0.result;
  }
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t18 = (await $.mv((await $.v(C, "out_accdatamodule")), "Account"));
    await $.mset((await $.wv([$t18], "Screen", C, false)), "Cursor", (await $.wv([$t18], "crSQLWait", C, false)));
    await $.stmt((await $.wcall([$t18], "SetVariable", ["Title", (await $.wv([$t18], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t18], "Refresh", [], C));
    await $.mset((await $.wv([$t18], "Screen", C, false)), "Cursor", (await $.wv([$t18], "crDefault", C, false)));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TAccountForm", "EditAcc_NoKeyPress", async function EditAcc_NoKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccountForm", "EditBal_cn1KeyPress", async function EditBal_cn1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccountForm", "EditVal_accKeyPress", async function EditVal_accKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccountForm", "EditNameKeyPress", async function EditNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccountForm", "EditOpen_datKeyPress", async function EditOpen_datKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccountForm", "EditSIM_OTCETKeyPress", async function EditSIM_OTCETKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccountForm", "EditClose_datKeyPress", async function EditClose_datKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccountForm", "EditKLI_IDExit", async function EditKLI_IDExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "EditKLI_IDKeyPress", async function EditKLI_IDKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccountForm", "Edit1Exit", async function Edit1Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "Edit1KeyPress", async function Edit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccountForm", "EditAcc_NoExit", async function EditAcc_NoExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "EditBal_cn1Exit", async function EditBal_cn1Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "EditVal_accExit", async function EditVal_accExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "EditNameExit", async function EditNameExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "EditOLD_ACC_NOExit", async function EditOLD_ACC_NOExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "EditOpen_datExit", async function EditOpen_datExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "EditClose_datExit", async function EditClose_datExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "AccountForm", Self);
  await $.set(C, "out_accdatamodule", (await $.mcall((await $.v(C, "Tout_accdatamodule")), "Create", [Self])));
  await $.set(C, "AccountPropertiesForm", (await $.mcall((await $.v(C, "TAccountPropertiesForm")), "Create", [Self])));
  await $.set(C, "FormAccountTransactions", (await $.mcall((await $.v(C, "TFormAccountTransactions")), "Create", [Self])));
  await $.set(C, "AccountState", (await $.mcall((await $.v(C, "TAccountState")), "Create", [Self])));
  await $.set(C, "FormInterval", (await $.mcall((await $.v(C, "TFormInterval")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  await $.stmt($.call(C, "InitData", []));
  await $.stmt($.call(C, "InitControl", []));
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "N7Click", async function N7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.v(C, "AccountState"));
    await $.stmt($.wcall([$t19], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "N4Click", async function N4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["cs_message"] = "\"%s\" №-li hesab bağlansın?";
  {
    const $t20 = (await $.v(C, "out_accdatamodule"));
    const $t21 = (await $.wv([$t20], "Account", C, false));
    if ($.truthy($.eq((await $.wcall([$t20, $t21], "MessageDlg", [(await $.wcall([$t20, $t21], "Format", [(await $.wv([$t20, $t21], "cs_message", { get: async () => L0["cs_message"], set: async (v) => { L0["cs_message"] = v; }, local: true }, false)), [(await $.mv((await $.wcall([$t20, $t21], "FieldByName", ["acc_no"], C)), "AsString"))]], C)), (await $.wv([$t20, $t21], "mtConfirmation", C, false)), [(await $.wv([$t20, $t21], "mbYes", C, false)), (await $.wv([$t20, $t21], "mbNo", C, false))], 0], C)), (await $.wv([$t20, $t21], "mrYes", C, false))))) {
      await $.stmt((await $.wcall([$t20, $t21], "CloseAccount", [(await $.mv((await $.wcall([$t20, $t21], "FieldByName", ["ID"], C)), "AsInteger"))], C)));
      await $.stmt((await $.wcall([$t20, $t21], "ActionRefreshExecute", [(await $.wv([$t20, $t21], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "Yenihesab1Click", async function Yenihesab1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "OperationMode", (await $.v(C, "omInsert")));
  await $.mcall((await $.mv((await $.v(C, "out_accdatamodule")), "Account")), "Insert", []);
  await $.mcall((await $.v(C, "AccountPropertiesForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "Redakteetmek1Click", async function Redakteetmek1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "OperationMode", (await $.v(C, "omEdit")));
  await $.mcall((await $.mv((await $.v(C, "out_accdatamodule")), "Account")), "Edit", []);
  await $.mcall((await $.v(C, "AccountPropertiesForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "DBLookupBranchClick", async function DBLookupBranchClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "DBLookupCurrencyClick", async function DBLookupCurrencyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "DBLookupOperatorClick", async function DBLookupOperatorClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "DBLookupTipaccClick", async function DBLookupTipaccClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "DBLookupBalanceClick", async function DBLookupBalanceClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ButtonFilter")), "Down", false);
  await $.mset((await $.v(C, "PanelSettings")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "InitControl", []));
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "GBAccountStatusClick", async function GBAccountStatusClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
