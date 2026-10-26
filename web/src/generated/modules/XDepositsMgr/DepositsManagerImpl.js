// Generated from DepositsManagerImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DepositsManagerImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "DepositsManager_TLB", "StdVcl", "ComCtrls", "ToolWin", "ExtCtrls", "Menus", "ImgList", "Grids", "DBGridEh", "StdCtrls", "Buttons", "DBViewComboBox", "Mask", "Oracle", "Oracledata", "ActnList", "CMExcelExport", "DBCtrlsEh", "DBLookupEh", "ComObj", "ComServ", "DMDepositManagerImpl", "SBTranslateProc", "sboapiDataModuleimpl", "CommonDeclsImpl"]);
  const C = [U];
  U.defClass("TfrmDepositsManager", "TActiveForm", {"imagelist": {"name": "ImageList", "type": "TImageList"}, "lastpopupmenu": {"name": "LastPopupMenu", "type": "TPopupMenu"}, "micontract": {"name": "miContract", "type": "TMenuItem"}, "n16": {"name": "N16", "type": "TMenuItem"}, "n17": {"name": "N17", "type": "TMenuItem"}, "n18": {"name": "N18", "type": "TMenuItem"}, "n19": {"name": "N19", "type": "TMenuItem"}, "n20": {"name": "N20", "type": "TMenuItem"}, "n21": {"name": "N21", "type": "TMenuItem"}, "n22": {"name": "N22", "type": "TMenuItem"}, "n23": {"name": "N23", "type": "TMenuItem"}, "n24": {"name": "N24", "type": "TMenuItem"}, "n25": {"name": "N25", "type": "TMenuItem"}, "n26": {"name": "N26", "type": "TMenuItem"}, "n27": {"name": "N27", "type": "TMenuItem"}, "n28": {"name": "N28", "type": "TMenuItem"}, "n29": {"name": "N29", "type": "TMenuItem"}, "n30": {"name": "N30", "type": "TMenuItem"}, "n34": {"name": "N34", "type": "TMenuItem"}, "n35": {"name": "N35", "type": "TMenuItem"}, "actionsmenu": {"name": "ActionsMenu", "type": "TPopupMenu"}, "mideposit": {"name": "miDeposit", "type": "TMenuItem"}, "miwithdraw": {"name": "miWithdraw", "type": "TMenuItem"}, "micapitalization": {"name": "miCapitalization", "type": "TMenuItem"}, "miuntimelywithdraw": {"name": "miUntimelyWithdraw", "type": "TMenuItem"}, "n12": {"name": "N12", "type": "TMenuItem"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "toolbar": {"name": "ToolBar", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "tbfilteration": {"name": "TBFilteration", "type": "TToolButton"}, "filterpanel": {"name": "FilterPanel", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "cbcurrency": {"name": "CBCurrency", "type": "TCheckBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "cbpersons": {"name": "CBpersons", "type": "TCheckBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "cbclienttype": {"name": "CBClientType", "type": "TCheckBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "cbfilial": {"name": "CBFilial", "type": "TCheckBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "cbcontracttype": {"name": "CBContractType", "type": "TCheckBox"}, "panelmain": {"name": "PanelMain", "type": "TPanel"}, "searchpanel": {"name": "SearchPanel", "type": "TGroupBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "editcontractno": {"name": "EditContractNo", "type": "TEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "editcontractaccno": {"name": "EditContractAccNo", "type": "TEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "editinterestaccno": {"name": "EditInterestAccNo", "type": "TEdit"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "editstopcalculationdate": {"name": "EditSTOPCALCULATIONDATE", "type": "TEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "editfacticaldebt": {"name": "EditFacticalDebt", "type": "TEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "editclientfacticaldebt": {"name": "EDITCLIENTFACTICALDEBT", "type": "TEdit"}, "maingrid": {"name": "MainGrid", "type": "TDBGridEh"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "statusimages": {"name": "StatusImages", "type": "TImageList"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnsearch": {"name": "ActnSearch", "type": "TAction"}, "actnfilter": {"name": "ActnFilter", "type": "TAction"}, "actnrefresh": {"name": "ActnRefresh", "type": "TAction"}, "popupmenusettings": {"name": "PopupMenuSettings", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "n9": {"name": "N9", "type": "TMenuItem"}, "n10": {"name": "N10", "type": "TMenuItem"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "lcbstatus": {"name": "LCBStatus", "type": "TComboBox"}, "cbstatus": {"name": "CBStatus", "type": "TCheckBox"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "dtpopendate": {"name": "DTPOpenDate", "type": "TDateTimePicker"}, "dtpclosedate": {"name": "DTPCloseDate", "type": "TDateTimePicker"}, "cbopendat": {"name": "CBOpendat", "type": "TCheckBox"}, "eexport": {"name": "EExport", "type": "TCMExcelExport"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "bitbtnexp": {"name": "BitBtnexp", "type": "TBitBtn"}, "n11": {"name": "N11", "type": "TMenuItem"}, "n13": {"name": "N13", "type": "TMenuItem"}, "bgvcjh1": {"name": "bgvcjh1", "type": "TMenuItem"}, "n14": {"name": "N14", "type": "TMenuItem"}, "n15": {"name": "N15", "type": "TMenuItem"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "editcustomerid": {"name": "EditCustomerid", "type": "TEdit"}, "statictext7": {"name": "StaticText7", "type": "TStaticText"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "statictext8": {"name": "StaticText8", "type": "TStaticText"}, "editcustomername": {"name": "EditCustomerName", "type": "TEdit"}, "fevents": {"name": "FEvents", "type": "IDepositsManagerEvents"}}, {});
  U.init(async () => {
    U.const("csUnknown", (-(9)));
    U.const("csCalculated", (-(10)));
    U.const("csDisabled", (-(11)));
  });
  U.method("TfrmDepositsManager", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TfrmDepositsManager", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TfrmDepositsManager", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TfrmDepositsManager", "Initialize", null, arguments);
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
  U.method("TfrmDepositsManager", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmDepositsManager", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmDepositsManager", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmDepositsManager", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmDepositsManager", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmDepositsManager", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmDepositsManager", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmDepositsManager", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmDepositsManager", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmDepositsManager", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmDepositsManager", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmDepositsManager", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmDepositsManager", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmDepositsManager", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmDepositsManager", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmDepositsManager", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmDepositsManager", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmDepositsManager", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmDepositsManager", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TfrmDepositsManager", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TfrmDepositsManager", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "PopupMenuSettingsChange", async function PopupMenuSettingsChange(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "source": $.copyArg(p1), "rebuild": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "source", "rebuild"]);
  return L0.result;
}, {"params": ["Sender", "Source", "Rebuild"], "kind": "procedure", "ptypes": ["TObject", "TMenuItem", "Boolean"]});
  U.method("TfrmDepositsManager", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmDepositsManager", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmDepositsManager", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TfrmDepositsManager", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TfrmDepositsManager", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TfrmDepositsManager", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TfrmDepositsManager", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmDepositsManager", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmDepositsManager", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmDepositsManager", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TfrmDepositsManager", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TfrmDepositsManager", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmDepositsManager", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TfrmDepositsManager", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TfrmDepositsManager", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmDepositsManager", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfrmDepositsManager", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DMDepositsManager", (await $.mcall((await $.v(C, "TDMDepositsManager")), "Create", [Self])));
  await $.stmt($.call(C, "PrepareFilter", []));
  await $.set(C, "CommonApplication", (await $.v(C, "Application")));
  await $.set(C, "CommonGrid", (await $.v(C, "MainGrid")));
  {
    const $t1 = (await $.v(C, "DMDepositsManager"));
    await $.wset([$t1], "Get_FilialID", (await $.mv((await $.mcall((await $.wv([$t1], "FilialID", C, false)), "FieldByname", ["kod_fil"])), "AsInteger")), C);
    await $.wset([$t1], "Get_BankDate", (await $.mv((await $.mcall((await $.wv([$t1], "BankDate", C, false)), "FieldByname", ["Tek_Dat"])), "AsDateTime")), C);
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "ActiveFormDestroy", async function ActiveFormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DMDepositsManager")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "MainGridDblClick", async function MainGridDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_Contract.bpl", "EditContract"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "MainGridDrawColumnCell", async function MainGridDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["datacolindex"] = 1;
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumnEh", "TGridDrawState"]});
  U.method("TfrmDepositsManager", "TBFilterationClick", async function TBFilterationClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FilterPanel")), "Visible", $.not((await $.mv((await $.v(C, "FilterPanel")), "Visible"))));
  await $.mset((await $.v(C, "DTPOpenDate")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "DTPCloseDate")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "TBFilteration")), "Down", (await $.mv((await $.v(C, "FilterPanel")), "Visible")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "ActnSearchExecute", async function ActnSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t2 = L0["sender"];
    await $.wset([$t2], "SearchField", (await $.wcall([$t2], "copy", [(await $.wv([$t2], "Name", C, false)), 5, (await $.wcall([$t2], "length", [(await $.wv([$t2], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    await $.mcall((await $.mv((await $.wv([$t2], "MainGrid", C, false)), "SelectedRows")), "Clear", []);
    {
      const $t3 = (await $.wcall([$t2], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t2], "MainGrid", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t2, $t3], "SearchRecord", [(await $.wv([$t2, $t3], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t2, $t3], "Text", C, false)), $.add((await $.wv([$t2, $t3], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t2, $t3], "srFromCurrent", C, false)), (await $.wv([$t2, $t3], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t2, $t3], "MessageDlg", [$.add($.add("Axtarış sona çatıb.", "\r"), "əvvəldən başlamaq istəyirsinizmi?"), (await $.wv([$t2, $t3], "mtInformation", C, false)), [(await $.wv([$t2, $t3], "mbNo", C, false)), (await $.wv([$t2, $t3], "mbYes", C, false))], 0], C)), (await $.wv([$t2, $t3], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t2, $t3], "SearchRecord", [(await $.wv([$t2, $t3], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t2, $t3], "Text", C, false)), $.add((await $.wv([$t2, $t3], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t2, $t3], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t2, $t3], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t2, $t3], "mtInformation", C, false)), [(await $.wv([$t2, $t3], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "EditContractNoKeyPress", async function EditContractNoKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "ActnSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmDepositsManager", "EditContractNoExit", async function EditContractNoExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (L0["sender"]);
    await $.wset([$t4], "Text", "", C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "BuildFilterString", async function BuildFilterString(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "fstatus": '', "fopendat1": '', "fopendat2": '', "fopendat": ''};
  L0["concatfilter"] = $.fn(async function ConcatFilter(p0, p1, p2, p3, p4) {
  const L1 = {"s": $.asRef(p0), "prefix": $.copyArg(p1), "checked": $.copyArg(p2), "keyvalue": $.copyArg(p3), "check": $.copyArg(p4), result: undefined, "temp": '', "op": ''};
  await $.fixArgs(L1, ["prefix", "checked", "keyvalue", "check"]);
  L1["csformat"] = "(%s=%s)";
  if ($.truthy(L1["check"])) {
    L1["op"] = " and ";
  } else {
    L1["op"] = " or ";
  }
  if ($.truthy(L1["checked"])) {
    L1["temp"] = (await $.call(C, "Format", [L1["csformat"], [L1["prefix"], L1["keyvalue"]]]));
    if ($.truthy($.eq((await L1["s"].get()), ""))) {
      await L1["s"].set(L1["temp"]);
    } else {
      await L1["s"].set($.add($.add((await L1["s"].get()), L1["op"]), L1["temp"]));
    }
  }
  return L1.result;
});
  L0["concatfilter1"] = $.fn(async function ConcatFilter1(p0, p1) {
  const L1 = {"s": $.asRef(p0), "prefix": $.asRef(p1), result: undefined};
  if ($.truthy((await $.and_(($.ne((await L1["s"].get()), "")), async () => ($.ne((await L1["prefix"].get()), "")))))) {
    await L1["s"].set($.add($.add((await L1["s"].get()), " and "), (await L1["prefix"].get())));
  }
  if ($.truthy((await $.and_(($.eq((await L1["s"].get()), "")), async () => ($.ne((await L1["prefix"].get()), "")))))) {
    await L1["s"].set((await L1["prefix"].get()));
  }
  return L1.result;
});
  L0["result"] = "";
  L0["fstatus"] = "";
  L0["fopendat1"] = "";
  L0["fopendat2"] = "";
  L0["fopendat"] = "";
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "CURRENCY", (await $.mv((await $.v(C, "CBCurrency")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue")), true])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "branchid", (await $.mv((await $.v(C, "CBFilial")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue")), true])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "contracttype", (await $.mv((await $.v(C, "CBContractType")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue")), true])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "clienttype", (await $.mv((await $.v(C, "CBpersons")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh4")), "KeyValue")), true])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "personaltype", (await $.mv((await $.v(C, "CBClientType")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh5")), "KeyValue")), true])));
  if ($.truthy((await $.mv((await $.v(C, "CBStatus")), "Checked")))) {
    { const $t5 = (await $.mv((await $.v(C, "LCBStatus")), "ItemIndex"));
      if ($.eq($t5, 0)) {
        L0["fstatus"] = "(status = 1)";
      }
      else if ($.eq($t5, 1)) {
        L0["fstatus"] = "(Status = 0)";
      }
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "CBOpendat")), "Checked")))) {
    L0["fopendat1"] = $.add($.add(" opendate >=  '", (await $.call(C, "FormatDateTime", ["dd/MM/yyyy", (await $.mv((await $.v(C, "DTPOpenDate")), "Date"))]))), "'");
    L0["fopendat2"] = $.add($.add(" opendate <=  '", (await $.call(C, "FormatDateTime", ["dd/MM/yyyy", (await $.mv((await $.v(C, "DTPCloseDate")), "Date"))]))), "'");
    L0["fopendat"] = $.add($.add($.add($.add($.add($.add($.add($.add("(", "("), L0["fopendat1"]), ")"), " and "), "("), L0["fopendat2"]), ")"), ")");
  }
  await $.stmt((await $.callv(L0["concatfilter1"], [L0["result"], L0["fstatus"]])));
  await $.stmt((await $.callv(L0["concatfilter1"], [L0["result"], L0["fopendat"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmDepositsManager", "ActnFilterExecute", async function ActnFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "MainGrid"));
    const $t7 = (await $.wv([$t6], "SelectedRows", C, false));
    await $.stmt($.wcall([$t6, $t7], "Clear", [], C));
  }
  {
    const $t8 = (await $.v(C, "MainGrid"));
    const $t9 = (await $.mv((await $.wv([$t8], "DataSource", C, false)), "DataSet"));
    await $.wset([$t8, $t9], "Cursor", (await $.wv([$t8, $t9], "crSqlWait", C, false)), C);
    await $.wset([$t8, $t9], "Filtered", (await $.wv([$t8, $t9], "False", C, false)), C);
    await $.wset([$t8, $t9], "Filter", (await $.wv([$t8, $t9], "BuildFilterString", C, false)), C);
    await $.wset([$t8, $t9], "Filtered", (await $.wv([$t8, $t9], "true", C, false)), C);
    await $.wset([$t8, $t9], "Cursor", (await $.wv([$t8, $t9], "crDefault", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "CBCurrencyClick", async function CBCurrencyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActnFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "DBLookupComboboxEh1Change", async function DBLookupComboboxEh1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActnFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "PrepareFilter", async function PrepareFilter(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t10 = (await $.v(C, "DMDepositsManager"));
    await $.mset((await $.wv([$t10], "DBLookupComboboxEh1", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t10], "Valutes", C, false)), "fieldByName", ["Valute"])), "AsInteger")));
    await $.mset((await $.wv([$t10], "DBLookupComboboxEh2", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t10], "Filials", C, false)), "fieldByName", ["id"])), "AsInteger")));
    await $.mset((await $.wv([$t10], "DBLookupComboboxEh3", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t10], "DepositTypes", C, false)), "fieldByName", ["id"])), "AsInteger")));
    await $.mset((await $.wv([$t10], "DBLookupComboboxEh4", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t10], "Categories", C, false)), "fieldByName", ["id"])), "AsInteger")));
    await $.mset((await $.wv([$t10], "DBLookupComboboxEh5", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t10], "persons", C, false)), "fieldByName", ["id"])), "AsInteger")));
    await $.mset((await $.wv([$t10], "LCBStatus", C, false)), "ItemIndex", 0);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmDepositsManager", "MainGridTitleBtnClick", async function MainGridTitleBtnClick(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acol": $.copyArg(p1), "column": $.copyArg(p2), result: undefined, "sortfield": ''};
  await $.fixArgs(L0, ["sender", "acol", "column"]);
  L0["sortfield"] = (await $.mv(L0["column"], "FieldName"));
  if ($.truthy($.eq((await $.mv((await $.mv(L0["column"], "Title")), "SortMarker")), (await $.v(C, "smDownEh"))))) {
    L0["sortfield"] = $.add(L0["sortfield"], " DESC");
  }
  {
    const $t11 = L0["sender"];
    const $t12 = (await $.wcall([$t11], "TOracleDataSet", [(await $.mv((await $.wv([$t11], "DataSource", C, false)), "DataSet"))], C));
    await $.mset((await $.wv([$t11, $t12], "Screen", C, false)), "Cursor", (await $.wv([$t11, $t12], "crSQLWait", C, false)));
    await $.stmt((await $.wcall([$t11, $t12], "SetVariable", ["OrderField", (await $.wv([$t11, $t12], "SortField", { get: async () => L0["sortfield"], set: async (v) => { L0["sortfield"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t11, $t12], "RefResh", [], C));
    await $.mset((await $.wv([$t11, $t12], "Screen", C, false)), "Cursor", (await $.wv([$t11, $t12], "crDefault", C, false)));
  }
  return L0.result;
}, {"params": ["Sender", "ACol", "Column"], "kind": "procedure", "ptypes": ["TObject", "Integer", "TColumnEh"]});
  U.method("TfrmDepositsManager", "N35Click", async function N35Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "SearchPanel")), "Visible", $.not((await $.mv((await $.v(C, "SearchPanel")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N16Click", async function N16Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_Contract.bpl", "InsertContract"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N17Click", async function N17Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_Contract.bpl", "EditContract"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "ActnRefreshExecute", async function ActnRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "saveid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "MainGrid")), "SelectedRows")), "Clear", []);
  {
    const $t13 = (await $.v(C, "DMDepositsManager"));
    const $t14 = (await $.wv([$t13], "DepositsData", C, false));
    await $.wset([$t13, $t14], "SaveID", (await $.wv([$t13, $t14], "Get_SelectedContID", C, false)), { get: async () => L0["saveid"], set: async (v) => { L0["saveid"] = v; }, local: true });
    await $.stmt($.wcall([$t13, $t14], "Refresh", [], C));
    await $.stmt((await $.wcall([$t13, $t14], "Locate", ["ID", (await $.wv([$t13, $t14], "SaveID", { get: async () => L0["saveid"], set: async (v) => { L0["saveid"] = v; }, local: true }, false)), []], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N23Click", async function N23Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_ApplyMoney.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N25Click", async function N25Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_ExtractMoney.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N24Click", async function N24Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_Capitalize.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N26Click", async function N26Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_UntimelyEtMoney.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N27Click", async function N27Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_PercentConverting.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N1Click", async function N1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_Settings.bpl", "showrefer"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N2Click", async function N2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_Settings.bpl", "showcccgroups"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N3Click", async function N3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_Settings.bpl", "showcategories"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N4Click", async function N4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_Settings.bpl", "showdeposittypes"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N20Click", async function N20Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_ContractReport.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N5Click", async function N5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_Settings.bpl", "showaccountturning"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N6Click", async function N6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_WRSetup.bpl", "showSBWRBookmarkSetup"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N21Click", async function N21Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_WReport.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N7Click", async function N7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_PercentSettings.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N18Click", async function N18Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "cf": '', "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["cfmsg"] = "Müqavilə bağlannır, əminsinizmi?";
  L0["cfselmsg"] = "Seçilmiş müqavilələr bağlanır, əminsinizmi?";
  {
    const $t15 = (await $.v(C, "MainGrid"));
    const $t16 = (await $.wv([$t15], "SelectedRows", C, false));
    if ($.truthy($.gt((await $.wv([$t15, $t16], "Count", C, false)), 1))) {
      await $.wset([$t15, $t16], "Cf", (await $.wv([$t15, $t16], "CfSelMsg", { get: async () => L0["cfselmsg"], set: async (v) => { L0["cfselmsg"] = v; }, local: true }, false)), { get: async () => L0["cf"], set: async (v) => { L0["cf"] = v; }, local: true });
    } else {
      await $.wset([$t15, $t16], "Cf", (await $.wv([$t15, $t16], "CfMsg", { get: async () => L0["cfmsg"], set: async (v) => { L0["cfmsg"] = v; }, local: true }, false)), { get: async () => L0["cf"], set: async (v) => { L0["cf"] = v; }, local: true });
    }
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["cf"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrNo"))))) {
    return L0.result;
  }
  {
    const $t17 = (await $.v(C, "MainGrid"));
    const $t18 = (await $.wv([$t17], "SelectedRows", C, false));
    const $t19 = (await $.mv((await $.wv([$t17, $t18], "DataSource", C, false)), "DataSet"));
    { const $t20 = $.sub((await $.wv([$t17, $t18, $t19], "Count", C, false)), 1);
      await $.wset([$t17, $t18, $t19], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t21 = true;
      for (;;) {
        if (!$t21) { await $.wset([$t17, $t18, $t19], "i", $.succ((await $.wv([$t17, $t18, $t19], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t21 = false;
        if (!($.ord((await $.wv([$t17, $t18, $t19], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t20))) break;
        await $.stmt((await $.wcall([$t17, $t18, $t19], "GotoBookmark", [(await $.wcall([$t17, $t18, $t19], "Pointer", [(await $.idx((await $.wv([$t17, $t18, $t19], "Items", C, false)), [(await $.wv([$t17, $t18, $t19], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t17, $t18, $t19], "DMDepositsManager", C, false)), "Stored_Programs")), "CallProcedure", ["CloseDeposit", ["ContractID", (await $.mv((await $.wcall([$t17, $t18, $t19], "FieldByName", ["ID"], C)), "AsInteger"))]])));
        await $.tick();
      }
    }
    await $.stmt($.wcall([$t17, $t18, $t19], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N19Click", async function N19Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "calculationenabled": false, "confmsg": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t22 = (await $.v(C, "DMDepositsManager"));
    const $t23 = (await $.wv([$t22], "Stored_Programs", C, false));
    await $.wset([$t22, $t23], "CalculationEnabled", (await $.wcall([$t22, $t23], "CallBooleanFunction", ["IsCalculationEnabled", ["ContractID", (await $.wv([$t22, $t23], "get_SelectedContID", C, false))]], C)), { get: async () => L0["calculationenabled"], set: async (v) => { L0["calculationenabled"] = v; }, local: true });
  }
  if ($.truthy(L0["calculationenabled"])) {
    L0["confmsg"] = "Faizlərin hesablanması dayandırılır, əminsinizmi?";
  } else {
    L0["confmsg"] = "Faizlərin hesablanması davam etdirilir, əminsinizmi?";
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["confmsg"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t24 = (await $.v(C, "DMDepositsManager"));
      const $t25 = (await $.wv([$t24], "Stored_Programs", C, false));
      if ($.truthy((await $.wv([$t24, $t25], "CalculationEnabled", { get: async () => L0["calculationenabled"], set: async (v) => { L0["calculationenabled"] = v; }, local: true }, false)))) {
        await $.stmt((await $.wcall([$t24, $t25], "CallProcedure", ["DisableCalculation", ["ContractID", (await $.wv([$t24, $t25], "get_SelectedContID", C, false))]], C)));
      } else {
        await $.stmt((await $.wcall([$t24, $t25], "CallProcedure", ["EnableCalculation", ["ContractID", (await $.wv([$t24, $t25], "get_SelectedContID", C, false))]], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N30Click", async function N30Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_PeriodReport.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N8Click", async function N8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_Prolongation.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N10Click", async function N10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_Filter.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "DTPCloseDateChange", async function DTPCloseDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "DBLookupComboboxEh1Change", [null])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "BitBtnexpClick", async function BitBtnexpClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t26 = (await $.v(C, "EExport"));
    await $.mcall((await $.mv((await $.mv((await $.wv([$t26], "MainGrid", C, false)), "DataSource")), "DataSet")), "Last", []);
    await $.stmt($.wcall([$t26], "Connect", [], C));
    await $.stmt((await $.wcall([$t26], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t26], "MainGrid", C, false)), "DataSource")), "DataSet")), "Depozitlər", (await $.wv([$t26], "True", C, false)), (await $.wv([$t26], "false", C, false))], C)));
    await $.stmt($.wcall([$t26], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N11Click", async function N11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_Report.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N13Click", async function N13Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_Prognoz.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N14Click", async function N14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_PercentChange.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N15Click", async function N15Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_TaxPayments.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "N34Click", async function N34Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_Control.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositsManager", "bgvcjh1Click", async function bgvcjh1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_ReportofBalance.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
