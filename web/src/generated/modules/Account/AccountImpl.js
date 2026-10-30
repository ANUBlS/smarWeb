// Generated from AccountImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AccountImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "Account_TLB", "StdVcl", "ExtCtrls", "StdCtrls", "Buttons", "ComCtrls", "ToolWin", "ImgList", "ActnList", "DBCtrls", "Grids", "DBGrids", "Mask", "OracleData", "DB", "Menus", "ComObj", "ComServ", "AccountDataModuleImpl", "AccountPropertiesImpl", "AccountTransactionsImpl", "IntervalImpl", "AccountRestState", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.enumType("toperationmode", 3);
  U.const("omInsert", 0);
  U.const("omEdit", 1);
  U.const("omDelete", 2);
  U.defClass("TAccountForm", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panelsettings": {"name": "PanelSettings", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "buttonfilter": {"name": "ButtonFilter", "type": "TToolButton"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "actionlist": {"name": "ActionList", "type": "TActionList"}, "actioninsert": {"name": "ActionInsert", "type": "TAction"}, "actionedit": {"name": "ActionEdit", "type": "TAction"}, "actionrefresh": {"name": "ActionRefresh", "type": "TAction"}, "actioncloseacc": {"name": "ActionCloseAcc", "type": "TAction"}, "actionshowfilter": {"name": "ActionShowFilter", "type": "TAction"}, "gbaccountstatus": {"name": "GBAccountStatus", "type": "TRadioGroup"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dblookuptipacc": {"name": "DBLookupTipacc", "type": "TDBLookupComboBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dblookupbranch": {"name": "DBLookupBranch", "type": "TDBLookupComboBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "dblookupcurrency": {"name": "DBLookupCurrency", "type": "TDBLookupComboBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "dblookupoperator": {"name": "DBLookupOperator", "type": "TDBLookupComboBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "dblookupbalance": {"name": "DBLookupBalance", "type": "TDBLookupComboBox"}, "gridaccount": {"name": "GridAccount", "type": "TDBGrid"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "panelsearch": {"name": "PanelSearch", "type": "TPanel"}, "actionspeedsearch": {"name": "ActionSpeedSearch", "type": "TAction"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "actionsearch": {"name": "ActionSearch", "type": "TAction"}, "actionfilter": {"name": "ActionFilter", "type": "TAction"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "label5": {"name": "Label5", "type": "TLabel"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "popupmenu": {"name": "PopupMenu", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "actionfullrefresh": {"name": "ActionFullRefresh", "type": "TAction"}, "popupmenumain": {"name": "PopupMenuMain", "type": "TPopupMenu"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "actionacctrans": {"name": "ActionAccTrans", "type": "TAction"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "cbfilial": {"name": "CBFilial", "type": "TCheckBox"}, "cbvalyuta": {"name": "CBValyuta", "type": "TCheckBox"}, "cbuser": {"name": "CBUser", "type": "TCheckBox"}, "cbacctype": {"name": "CbAccType", "type": "TCheckBox"}, "cbbal_cn": {"name": "CBBal_Cn", "type": "TCheckBox"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "chboxsimotcet": {"name": "ChBoxSimOtcet", "type": "TCheckBox"}, "dblookupcboxsimotcet": {"name": "DBLookupCBoxSimOtcet", "type": "TDBLookupComboBox"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "checkboxcust": {"name": "CheckBoxCust", "type": "TCheckBox"}, "editcust": {"name": "EditCust", "type": "TEdit"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "editname1": {"name": "EditNAME1", "type": "TEdit"}, "scrollbox1": {"name": "ScrollBox1", "type": "TScrollBox"}, "editold_acc_no": {"name": "EditOLD_ACC_NO", "type": "TEdit"}, "editsim_otcet": {"name": "EditSIM_OTCET", "type": "TEdit"}, "editbal_cn2": {"name": "EditBal_cn2", "type": "TEdit"}, "edituserinsert": {"name": "EditUSERINSERT", "type": "TEdit"}, "editclose_dat": {"name": "EditClose_dat", "type": "TEdit"}, "editopen_dat": {"name": "EditOpen_dat", "type": "TEdit"}, "editname": {"name": "EditName", "type": "TEdit"}, "editkli_id": {"name": "EditKLI_ID", "type": "TEdit"}, "editacc_no_search": {"name": "EditACC_NO_SEARCH", "type": "TEdit"}, "editbal_cn1": {"name": "EditBal_cn1", "type": "TEdit"}, "editval_acc": {"name": "EditVal_acc", "type": "TEdit"}, "fevents": {"name": "FEvents", "type": "IAccountFormEvents"}, "operationmode": {"name": "OperationMode", "type": "TOperationMode"}}, {});
  U.init(async () => {
    U.var_("AccountForm", null, "TAccountForm");
    U.var_("user", 0, "integer");
    U.var_("FilterStr", '', "String");
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
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
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
  }
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "ChBoxSimOtcetClick", async function ChBoxSimOtcetClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ChBoxSimOtcet")), "Checked")), true))) {
    await $.mset((await $.v(C, "DBLookupCBoxSimOtcet")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "DBLookupCBoxSimOtcet")), "Enabled", false);
  }
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "CheckBoxCustClick", async function CheckBoxCustClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBoxCust")), "Checked")), true))) {
    await $.mset((await $.v(C, "EditCust")), "Enabled", true);
    await $.mset((await $.v(C, "EditCust")), "Text", (await $.call(C, "inttostr", [(-(1))])));
  } else {
    await $.mset((await $.v(C, "EditCust")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditCust")), "Text")), ""))) {
    await $.set(C, "FilterStr", "");
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
  U.method("TAccountForm", "DBLookupComboBoxCust22Click", async function DBLookupComboBoxCust22Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "EditCustChange", async function EditCustChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditCust")), "text")), ""))) {
    await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
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
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
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
  U.method("TAccountForm", "MouseWheelHandler", async function MouseWheelHandler(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TAccountForm", "MouseWheelHandler", null, arguments);
  if ($.truthy((await $.mv((await $.v(C, "GridAccount")), "Focused")))) {
    await $.mcall((await $.mv((await $.v(C, "GridAccount")), "SelectedRows")), "Clear", []);
    {
      const $t1 = (await $.call(C, "TCMMouseWheel", [(await L0["message"].get())]));
      const $t2 = (await $.mv((await $.mv((await $.wv([$t1], "GridAccount", C, false)), "DataSource")), "DataSet"));
      if ($.truthy($.lt((await $.wv([$t1, $t2], "WheelDelta", C, false)), 0))) {
        await $.stmt($.wcall([$t1, $t2], "Next", [], C));
      } else {
        await $.stmt($.wcall([$t1, $t2], "Prior", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TAccountForm", "InitData", async function InitData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "spos": 0};
  L0["c_err_message"] = " Table or View in Dataset \"%s\" does not exist! ";
  {
    const $t3 = (await $.v(C, "AccDataModule"));
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
  U.method("TAccountForm", "InitControl", async function InitControl(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "DBLookupBranch")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupBranch")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")));
  await $.mset((await $.v(C, "DBLookupCurrency")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupCurrency")), "ListSource")), "DataSet")), "FieldByName", ["VALUTE"])), "AsString")));
  await $.mset((await $.v(C, "DBLookupOperator")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupOperator")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupTipacc")), "ListSource")), "DataSet")), "First", []);
  await $.mset((await $.v(C, "DBLookupTipacc")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupTipacc")), "ListSource")), "DataSet")), "FieldByName", ["Symbol"])), "AsString")));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupBalance")), "ListSource")), "DataSet")), "First", []);
  await $.mset((await $.v(C, "DBLookupBalance")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupBalance")), "ListSource")), "DataSet")), "FieldByName", ["Bal_cn"])), "AsString")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TAccountForm", "ActionShowFilterExecute", async function ActionShowFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PanelSettings")), "Visible", $.not((await $.mv((await $.v(C, "PanelSettings")), "Visible"))));
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
  U.method("TAccountForm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "AccountForm", Self);
  await $.set(C, "AccDataModule", (await $.mcall((await $.v(C, "TAccDataModule")), "Create", [Self])));
  await $.mset((await $.v(C, "PanelSearch")), "Height", 35);
  if ($.truthy($.eq((await $.mv((await $.v(C, "screen")), "Width")), 1024))) {
    await $.mset((await $.v(C, "ScrollBox1")), "Width", $.sub($.sub((await $.mv((await $.v(C, "ScrollBox1")), "Width")), (await $.mv((await $.v(C, "EditOLD_ACC_NO")), "Width"))), 100));
    await $.mset((await $.v(C, "PanelSearch")), "Height", 54);
  }
  await $.stmt($.call(C, "InitData", []));
  await $.stmt($.call(C, "InitControl", []));
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "ActionRefreshExecute", async function ActionRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "accountid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.mv((await $.v(C, "AccDataModule")), "Account"));
    await $.wset([$t7], "AccountID", (await $.mv((await $.wcall([$t7], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true });
    await $.stmt($.wcall([$t7], "CloseAll", [], C));
    await $.stmt($.wcall([$t7], "Open", [], C));
    await $.stmt((await $.wcall([$t7], "Locate", ["ID", (await $.wv([$t7], "AccountID", { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true }, false)), []], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "ActionSpeedSearchExecute", async function ActionSpeedSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "v_name": '', "searchoptions": null, "result": false};
  await $.fixArgs(L0, ["sender"]);
  L0["rsrecordrecachedeof"] = "Axtarış cərgənin sonuna çatıb .";
  L0["rscontinuefromtop"] = "Əvvəldən axtarmaqla davam etmək istəyirsiniz?";
  L0["rsrecordnotfound"] = "Yazı Tapılmadı.";
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t8 = L0["sender"];
    await $.wset([$t8], "v_name", (await $.wv([$t8], "Name", C, false)), { get: async () => L0["v_name"], set: async (v) => { L0["v_name"] = v; }, local: true });
    if ($.truthy($.eq((await $.wcall([$t8], "UpperCase", [(await $.wv([$t8], "Name", C, false))], C)), (await $.wcall([$t8], "UpperCase", ["EditAcc_No_Search"], C))))) {
      await $.wset([$t8], "v_name", "EditACC_NO", { get: async () => L0["v_name"], set: async (v) => { L0["v_name"] = v; }, local: true });
    }
    await $.wset([$t8], "name", (await $.wv([$t8], "v_Name", { get: async () => L0["v_name"], set: async (v) => { L0["v_name"] = v; }, local: true }, false)), C);
    await $.wset([$t8], "SearchOptions", [(await $.wv([$t8], "srIgnoreCase", C, false)), (await $.wv([$t8], "srPartialMatch", C, false))], { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true });
    {
      const $t9 = (await $.wv([$t8], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
      await $.wset([$t8, $t9], "SearchField", (await $.wcall([$t8, $t9], "copy", [(await $.wv([$t8, $t9], "Name", C, false)), 5, (await $.wcall([$t8, $t9], "length", [(await $.wv([$t8, $t9], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
      {
        const $t10 = (await $.mv((await $.wv([$t8, $t9], "AccDataModule", C, false)), "Account"));
        if ($.truthy((await $.or_((await $.or_(($.eq((await $.wcall([$t8, $t9, $t10], "UpperCase", [(await $.wv([$t8, $t9, $t10], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false))], C)), "ACC_NO")), async () => ($.eq((await $.wcall([$t8, $t9, $t10], "UpperCase", [(await $.wv([$t8, $t9, $t10], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false))], C)), "NAME1")))), async () => ($.eq((await $.wcall([$t8, $t9, $t10], "UpperCase", [(await $.wv([$t8, $t9, $t10], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false))], C)), "OLD_ACC_NO")))))) {
          { const $t11 = await $.iset((await $.wv([$t8, $t9, $t10], "SQL", C, false)), [7], ($.add($.add($.add($.add(" and lower(", (await $.wv([$t8, $t9, $t10], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false))), ") like '"), (await $.wcall([$t8, $t9, $t10], "LowerCase", [(await $.wv([$t8, $t9, $t10], "Text", C, false))], C))), "%'"))); if ($t11 !== undefined) { await $.wset([$t8, $t9, $t10], "SQL", $t11, C); } }
        } else {
          if ($.truthy((await $.or_((await $.or_(($.eq((await $.wcall([$t8, $t9, $t10], "UpperCase", [(await $.wv([$t8, $t9, $t10], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false))], C)), "OPEN_DAT")), async () => ($.eq((await $.wcall([$t8, $t9, $t10], "UpperCase", [(await $.wv([$t8, $t9, $t10], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false))], C)), "CLOSE_DAT")))), async () => ($.eq((await $.wcall([$t8, $t9, $t10], "UpperCase", [(await $.wv([$t8, $t9, $t10], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false))], C)), "USERINSERT")))))) {
            { const $t12 = await $.iset((await $.wv([$t8, $t9, $t10], "SQL", C, false)), [7], (":pSearch")); if ($t12 !== undefined) { await $.wset([$t8, $t9, $t10], "SQL", $t12, C); } }
            await $.stmt((await $.wcall([$t8, $t9, $t10], "SetVariable", ["pSearch", $.add($.add($.add($.add(" and lower(", (await $.wv([$t8, $t9, $t10], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false))), ") = '"), (await $.wcall([$t8, $t9, $t10], "LowerCase", [(await $.wv([$t8, $t9, $t10], "Text", C, false))], C))), "'")], C)));
          } else {
            { const $t13 = await $.iset((await $.wv([$t8, $t9, $t10], "SQL", C, false)), [7], (":pSearch")); if ($t13 !== undefined) { await $.wset([$t8, $t9, $t10], "SQL", $t13, C); } }
            await $.stmt((await $.wcall([$t8, $t9, $t10], "SetVariable", ["pSearch", $.add($.add($.add(" and lower(", (await $.wv([$t8, $t9, $t10], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false))), ") = "), (await $.wcall([$t8, $t9, $t10], "LowerCase", [(await $.wv([$t8, $t9, $t10], "Text", C, false))], C)))], C)));
          }
        }
        await $.mset((await $.wv([$t8, $t9, $t10], "Memo1", C, false)), "Text", (await $.wcall([$t8, $t9, $t10], "GetVariable", ["pSearch"], C)));
        if ($.truthy($.eq((await $.wcall([$t8, $t9, $t10], "Trim", [(await $.wv([$t8, $t9, $t10], "Text", C, false))], C)), ""))) {
          await $.stmt((await $.wcall([$t8, $t9, $t10], "SetVariable", ["pSearch", ""], C)));
        }
        await $.stmt($.wcall([$t8, $t9, $t10], "Refresh", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "EditACC_NO_SEARCHKeyPress", async function EditACC_NO_SEARCHKeyPress(Self, p0, p1) {
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
    await $.mset((await $.v(C, "EditNAME1")), "Text", (await $.mv((await $.v(C, "EditName")), "Text")));
    {
      const $t14 = (await $.v(C, "EditNAME1"));
    }
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [(await $.v(C, "EditNAME1"))])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccountForm", "ActionSearchExecute", async function ActionSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PanelSearch")), "Visible", $.not((await $.mv((await $.v(C, "PanelSearch")), "Visible"))));
  if ($.truthy((await $.mv((await $.v(C, "EditACC_NO_SEARCH")), "CanFocus")))) {
    await $.mcall((await $.v(C, "EditACC_NO_SEARCH")), "SetFocus", []);
  }
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
    const $t15 = (await $.mv((await $.v(C, "AccDataModule")), "Account"));
    await $.mset((await $.wv([$t15], "Screen", C, false)), "Cursor", (await $.wv([$t15], "crSQLWait", C, false)));
    await $.stmt((await $.wcall([$t15], "SetVariable", ["Title", (await $.wv([$t15], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t15], "Refresh", [], C));
    await $.mset((await $.wv([$t15], "Screen", C, false)), "Cursor", (await $.wv([$t15], "crDefault", C, false)));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TAccountForm", "EditBal_cn2Exit", async function EditBal_cn2Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "EditBal_cn2KeyPress", async function EditBal_cn2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccountForm", "EditACC_NO_SEARCHExit", async function EditACC_NO_SEARCHExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "ActionFilterExecute", async function ActionFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "status": '', "branch": '', "currency": '', "operator": '', "tipacc": '', "balance": '', "repsymb": '', "kli_id": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["booleanprefix"] = " AND ";
  L0["statusfilter"] = "(Status=%d)";
  L0["branchfilter"] = "(Filial=%d)";
  L0["currencyfilter"] = "(Val_acc=%d)";
  L0["operatorfilter"] = "(Op_ID=%d)";
  L0["tipaccfilter"] = "(Tipacc like  %s)";
  L0["balancefilter"] = "(Bal_cn1=%s)";
  L0["repsymbfilter"] = "(Sim_Otcet=%d)";
  L0["kli_idfilter"] = "(kli_id=%s)";
  L0["checkfiltered"] = $.fn(async function CheckFiltered(p0, p1, p2) {
  const L1 = {"ischecked": $.copyArg(p0), "filterstr": $.copyArg(p1), "args": $.copyArg(p2), result: ''};
  await $.fixArgs(L1, ["ischecked", "filterstr", "args"]);
  L1["result"] = "";
  if ($.truthy(L1["ischecked"])) {
    L1["result"] = (await $.call(C, "Format", [L1["filterstr"], L1["args"]]));
  }
  return L1.result;
});
  await $.set(C, "FilterStr", "");
  L0["status"] = (await $.callv(L0["checkfiltered"], [$.ne((await $.mv((await $.v(C, "GBAccountStatus")), "ItemIndex")), 0), L0["statusfilter"], [(await $.mv((await $.v(C, "GBAccountStatus")), "ItemIndex"))]]));
  L0["branch"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "CBFilial")), "Checked")), L0["branchfilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupBranch")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))]]));
  L0["currency"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "CBValyuta")), "Checked")), L0["currencyfilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupCurrency")), "ListSource")), "DataSet")), "FieldByName", ["Valute"])), "AsInteger"))]]));
  L0["operator"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "CBUser")), "Checked")), L0["operatorfilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupOperator")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))]]));
  L0["tipacc"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "CbAccType")), "Checked")), L0["tipaccfilter"], [$.add($.add($.add($.add("'", "%"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupTipacc")), "ListSource")), "DataSet")), "FieldByName", ["Symbol"])), "AsString"))), "%"), "'")]]));
  L0["balance"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "CBBal_Cn")), "Checked")), L0["balancefilter"], [(await $.mv((await $.v(C, "DBLookupBalance")), "Text"))]]));
  L0["repsymb"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "ChBoxSimOtcet")), "Checked")), L0["repsymbfilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupCBoxSimOtcet")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))]]));
  L0["kli_id"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "CheckBoxCust")), "Checked")), L0["kli_idfilter"], [(await $.mv((await $.v(C, "EditCust")), "text"))]]));
  if ($.truthy($.eq(L0["status"], ""))) {
    await $.set(C, "FilterStr", "status is not null");
  } else {
    await $.set(C, "FilterStr", L0["status"]);
  }
  if ($.truthy((await $.mv((await $.v(C, "CBFilial")), "Checked")))) {
    if ($.truthy($.eq((await $.v(C, "FilterStr")), ""))) {
      await $.set(C, "FilterStr", L0["branch"]);
    } else {
      await $.set(C, "FilterStr", $.add($.add((await $.v(C, "FilterStr")), L0["booleanprefix"]), L0["branch"]));
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "CBValyuta")), "Checked")))) {
    if ($.truthy($.eq((await $.v(C, "FilterStr")), ""))) {
      await $.set(C, "FilterStr", L0["currency"]);
    } else {
      await $.set(C, "FilterStr", $.add($.add((await $.v(C, "FilterStr")), L0["booleanprefix"]), L0["currency"]));
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "CBUser")), "Checked")))) {
    if ($.truthy($.eq((await $.v(C, "FilterStr")), ""))) {
      await $.set(C, "FilterStr", L0["operator"]);
    } else {
      await $.set(C, "FilterStr", $.add($.add((await $.v(C, "FilterStr")), L0["booleanprefix"]), L0["operator"]));
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "CbAccType")), "Checked")))) {
    if ($.truthy($.eq((await $.v(C, "FilterStr")), ""))) {
      await $.set(C, "FilterStr", L0["tipacc"]);
    } else {
      await $.set(C, "FilterStr", $.add($.add((await $.v(C, "FilterStr")), L0["booleanprefix"]), L0["tipacc"]));
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "CBBal_Cn")), "Checked")))) {
    if ($.truthy($.eq((await $.v(C, "FilterStr")), ""))) {
      await $.set(C, "FilterStr", L0["balance"]);
    } else {
      await $.set(C, "FilterStr", $.add($.add((await $.v(C, "FilterStr")), L0["booleanprefix"]), L0["balance"]));
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "ChBoxSimOtcet")), "Checked")))) {
    if ($.truthy($.eq((await $.v(C, "FilterStr")), ""))) {
      await $.set(C, "FilterStr", L0["repsymb"]);
    } else {
      await $.set(C, "FilterStr", $.add($.add((await $.v(C, "FilterStr")), L0["booleanprefix"]), L0["repsymb"]));
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "CheckBoxCust")), "Checked")))) {
    if ($.truthy($.eq((await $.v(C, "FilterStr")), ""))) {
      await $.set(C, "FilterStr", L0["kli_id"]);
    } else {
      await $.set(C, "FilterStr", $.add($.add((await $.v(C, "FilterStr")), L0["booleanprefix"]), L0["kli_id"]));
    }
  }
  {
    const $t16 = (await $.mv((await $.v(C, "AccDataModule")), "Account"));
    { const $t17 = await $.iset((await $.wv([$t16], "SQL", C, false)), [6], $.add(" where ", (await $.wv([$t16], "FilterStr", C, false)))); if ($t17 !== undefined) { await $.wset([$t16], "SQL", $t17, C); } }
    await $.mset((await $.wv([$t16], "SQL", C, false)), "Text", (await $.wcall([$t16], "Stringreplace", [(await $.mv((await $.wv([$t16], "SQL", C, false)), "Text")), "Status", "DECODE (close_dat, NULL, 1, 2)", [(await $.wv([$t16], "rfReplaceAll", C, false)), (await $.wv([$t16], "rfIgnoreCase", C, false))]], C)));
    await $.stmt($.wcall([$t16], "Close", [], C));
    await $.stmt($.wcall([$t16], "Open", [], C));
  }
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
  U.method("TAccountForm", "ActionInsertExecute", async function ActionInsertExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "AccountPropertiesForm"))]))))) {
    await $.set(C, "AccountPropertiesForm", (await $.mcall((await $.v(C, "TAccountPropertiesForm")), "Create", [Self])));
  }
  await $.set(C, "OperationMode", (await $.v(C, "omInsert")));
  await $.set(C, "user", (await $.mv((await $.mcall((await $.mv((await $.v(C, "AccDataModule")), "user_Branches")), "FieldByName", ["id"])), "AsInteger")));
  await $.mset((await $.mv((await $.v(C, "AccountPropertiesForm")), "DBEditBranchID")), "text", (await $.call(C, "inttostr", [(await $.v(C, "user"))])));
  await $.mset((await $.mv((await $.v(C, "AccountPropertiesForm")), "DBLookupComboBoxBranchName")), "KeyValue", (await $.v(C, "user")));
  await $.mcall((await $.mv((await $.v(C, "AccDataModule")), "Account")), "Insert", []);
  await $.mcall((await $.v(C, "AccountPropertiesForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "ActionEditExecute", async function ActionEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "AccountPropertiesForm"))]))))) {
    await $.set(C, "AccountPropertiesForm", (await $.mcall((await $.v(C, "TAccountPropertiesForm")), "Create", [Self])));
  }
  await $.set(C, "OperationMode", (await $.v(C, "omEdit")));
  await $.set(C, "user", (await $.mv((await $.mcall((await $.mv((await $.v(C, "AccDataModule")), "user_Branches")), "FieldByName", ["id"])), "AsInteger")));
  await $.mset((await $.mv((await $.v(C, "AccountPropertiesForm")), "DBEditBranchID")), "text", (await $.call(C, "inttostr", [(await $.v(C, "user"))])));
  await $.mset((await $.mv((await $.v(C, "AccountPropertiesForm")), "DBLookupComboBoxBranchName")), "KeyValue", (await $.v(C, "user")));
  await $.mcall((await $.mv((await $.v(C, "AccDataModule")), "Account")), "Edit", []);
  await $.mcall((await $.v(C, "AccountPropertiesForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "ActionFullRefreshExecute", async function ActionFullRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t18 = (await $.v(C, "AccDataModule"));
    await $.stmt((await $.wcall([$t18], "Refresh_", [""], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "ActionAccTransExecute", async function ActionAccTransExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "astartdate": 0, "aenddate": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FormInterval"))]))))) {
    await $.set(C, "FormInterval", (await $.mcall((await $.v(C, "TFormInterval")), "Create", [Self])));
  }
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FormAccountTransactions"))]))))) {
    await $.set(C, "FormAccountTransactions", (await $.mcall((await $.v(C, "TFormAccountTransactions")), "Create", [Self])));
  }
  {
    const $t19 = (await $.v(C, "FormInterval"));
    await $.mset((await $.wv([$t19], "StartDateEdit", C, false)), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.wv([$t19], "AccDataModule", C, false)), "Sysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    await $.mset((await $.wv([$t19], "EndDateEdit", C, false)), "DateTime", (await $.mv((await $.wv([$t19], "StartDateEdit", C, false)), "DateTime")));
    if ($.truthy($.eq((await $.wv([$t19], "ShowModal", C, false)), (await $.wv([$t19], "mrOK", C, false))))) {
      await $.wset([$t19], "AStartDate", (await $.mv((await $.wv([$t19], "StartDateEdit", C, false)), "DateTime")), { get: async () => L0["astartdate"], set: async (v) => { L0["astartdate"] = v; }, local: true });
      await $.wset([$t19], "AEndDate", (await $.mv((await $.wv([$t19], "EndDateEdit", C, false)), "DateTime")), { get: async () => L0["aenddate"], set: async (v) => { L0["aenddate"] = v; }, local: true });
      {
        const $t20 = (await $.wv([$t19], "FormAccountTransactions", C, false));
        await $.stmt((await $.wcall([$t19, $t20], "OpenDataControls", [(await $.wv([$t19, $t20], "AStartDate", { get: async () => L0["astartdate"], set: async (v) => { L0["astartdate"] = v; }, local: true }, false)), (await $.wv([$t19, $t20], "AEndDate", { get: async () => L0["aenddate"], set: async (v) => { L0["aenddate"] = v; }, local: true }, false))], C)));
        await $.stmt($.wcall([$t19, $t20], "ShowModal", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "N7Click", async function N7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FormAccountState"))]))))) {
    await $.set(C, "FormAccountState", (await $.mcall((await $.v(C, "TFormAccountState")), "Create", [Self])));
  }
  {
    const $t21 = (await $.v(C, "FormAccountState"));
    await $.stmt($.wcall([$t21], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountForm", "ActionCloseAccExecute", async function ActionCloseAccExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["cs_message"] = "\"%s\" N-li hesab bağlansın?";
  {
    const $t22 = (await $.v(C, "AccDataModule"));
    const $t23 = (await $.wv([$t22], "Account", C, false));
    if ($.truthy($.eq((await $.wcall([$t22, $t23], "MessageDlg", [(await $.wcall([$t22, $t23], "Format", [(await $.wv([$t22, $t23], "cs_message", { get: async () => L0["cs_message"], set: async (v) => { L0["cs_message"] = v; }, local: true }, false)), [(await $.mv((await $.wcall([$t22, $t23], "FieldByName", ["acc_no"], C)), "AsString"))]], C)), (await $.wv([$t22, $t23], "mtConfirmation", C, false)), [(await $.wv([$t22, $t23], "mbYes", C, false)), (await $.wv([$t22, $t23], "mbNo", C, false))], 0], C)), (await $.wv([$t22, $t23], "mrYes", C, false))))) {
      await $.stmt((await $.wcall([$t22, $t23], "CloseAccount", [(await $.mv((await $.wcall([$t22, $t23], "FieldByName", ["ID"], C)), "AsInteger"))], C)));
      await $.stmt((await $.wcall([$t22, $t23], "ActionRefreshExecute", [(await $.wv([$t22, $t23], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
