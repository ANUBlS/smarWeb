// Generated from DepositsManagerImpl_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DepositsManagerImpl_new", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "ActiveX", "AxCtrls", "DepositsManager_new_TLB", "StdVcl", "ComCtrls", "ToolWin", "ExtCtrls", "Menus", "ImgList", "Grids", "StdCtrls", "Buttons", "Dialogs", "DBViewComboBox", "Mask", "DBCtrlsEh", "Oracle", "Oracledata", "ActnList", "CMExcelExport", "XDBGrids", "DBLookupEh", "ComObj", "ComServ", "DMDepositManagerImpl_new", "NewCommonDeclsImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TDepositsManager_new", "TActiveForm", {"actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnsearch": {"name": "ActnSearch", "type": "TAction"}, "actnfilter": {"name": "ActnFilter", "type": "TAction"}, "actnrefresh": {"name": "ActnRefresh", "type": "TAction"}, "actionsmenu": {"name": "ActionsMenu", "type": "TPopupMenu"}, "mideposit": {"name": "miDeposit", "type": "TMenuItem"}, "miwithdraw": {"name": "miWithdraw", "type": "TMenuItem"}, "n15": {"name": "N15", "type": "TMenuItem"}, "micapitalization": {"name": "miCapitalization", "type": "TMenuItem"}, "miuntimelywithdraw": {"name": "miUntimelyWithdraw", "type": "TMenuItem"}, "n12": {"name": "N12", "type": "TMenuItem"}, "n9": {"name": "N9", "type": "TMenuItem"}, "n36": {"name": "N36", "type": "TMenuItem"}, "eexport": {"name": "EExport", "type": "TCMExcelExport"}, "filterpanel": {"name": "FilterPanel", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "cbcurrency": {"name": "CBCurrency", "type": "TCheckBox"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "cbpersons": {"name": "CBpersons", "type": "TCheckBox"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "cbclienttype": {"name": "CBClientType", "type": "TCheckBox"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "cbfilial": {"name": "CBFilial", "type": "TCheckBox"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "cbcontracttype": {"name": "CBContractType", "type": "TCheckBox"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "lcbstatus": {"name": "LCBStatus", "type": "TComboBox"}, "cbstatus": {"name": "CBStatus", "type": "TCheckBox"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "dtpopendate": {"name": "DTPOpenDate", "type": "TDateTimePicker"}, "dtpclosedate": {"name": "DTPCloseDate", "type": "TDateTimePicker"}, "cbopendat": {"name": "CBOpendat", "type": "TCheckBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "bitbtnexp": {"name": "BitBtnexp", "type": "TBitBtn"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "lastpopupmenu": {"name": "LastPopupMenu", "type": "TPopupMenu"}, "micontract": {"name": "miContract", "type": "TMenuItem"}, "n16": {"name": "N16", "type": "TMenuItem"}, "n14": {"name": "N14", "type": "TMenuItem"}, "n17": {"name": "N17", "type": "TMenuItem"}, "n18": {"name": "N18", "type": "TMenuItem"}, "n19": {"name": "N19", "type": "TMenuItem"}, "n20": {"name": "N20", "type": "TMenuItem"}, "n21": {"name": "N21", "type": "TMenuItem"}, "n22": {"name": "N22", "type": "TMenuItem"}, "n23": {"name": "N23", "type": "TMenuItem"}, "n25": {"name": "N25", "type": "TMenuItem"}, "n24": {"name": "N24", "type": "TMenuItem"}, "n26": {"name": "N26", "type": "TMenuItem"}, "n27": {"name": "N27", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "n28": {"name": "N28", "type": "TMenuItem"}, "n10": {"name": "N10", "type": "TMenuItem"}, "n35": {"name": "N35", "type": "TMenuItem"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "toolbar": {"name": "ToolBar", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "tbfilteration": {"name": "TBFilteration", "type": "TToolButton"}, "panelmain": {"name": "PanelMain", "type": "TPanel"}, "searchpanel": {"name": "SearchPanel", "type": "TGroupBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "editcontractno": {"name": "EditContractNo", "type": "TEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "editcontractaccno": {"name": "EditContractAccNo", "type": "TEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "editinterestaccno": {"name": "EditInterestAccNo", "type": "TEdit"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "editstopcalculationdate": {"name": "EditSTOPCALCULATIONDATE", "type": "TEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "editfacticaldebt": {"name": "EditFacticalDebt", "type": "TEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "editcustomername": {"name": "EditCustomerName", "type": "TEdit"}, "maingrid": {"name": "MainGrid", "type": "TXDBGrid"}, "popupmenusettings": {"name": "PopupMenuSettings", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "repairmenu": {"name": "RepairMenu", "type": "TPopupMenu"}, "n31": {"name": "N31", "type": "TMenuItem"}, "n32": {"name": "N32", "type": "TMenuItem"}, "n33": {"name": "N33", "type": "TMenuItem"}, "statusimages": {"name": "StatusImages", "type": "TImageList"}, "hesablarin1": {"name": "Hesablarin1", "type": "TMenuItem"}, "fevents": {"name": "FEvents", "type": "IDepositsManager_newEvents"}}, {});
  U.init(async () => {
    U.const("csUnknown", (-(9)));
    U.const("csCalculated", (-(10)));
    U.const("csDisabled", (-(11)));
  });
  U.method("TDepositsManager_new", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TDepositsManager_new", "EditContractNoExit", async function EditContractNoExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (L0["sender"]);
    await $.wset([$t1], "Text", "", C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "EditContractNoKeyPress", async function EditContractNoKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "ActnSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TDepositsManager_new", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  await $.inherited(Self, "TDepositsManager_new", "EventSinkChanged", [L0["eventsink"]], arguments);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TDepositsManager_new", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TDepositsManager_new", "Initialize", null, arguments);
  await $.set(C, "OnActivate", (await $.ref_(C, "ActivateEvent")));
  await $.set(C, "OnClick", (await $.ref_(C, "ClickEvent")));
  await $.set(C, "OnCreate", (await $.ref_(C, "CreateEvent")));
  await $.set(C, "OnDblClick", (await $.ref_(C, "DblClickEvent")));
  await $.set(C, "OnDeactivate", (await $.ref_(C, "DeactivateEvent")));
  await $.set(C, "OnDestroy", (await $.ref_(C, "DestroyEvent")));
  await $.set(C, "OnKeyPress", (await $.ref_(C, "KeyPressEvent")));
  await $.set(C, "OnMouseEnter", (await $.ref_(C, "MouseEnterEvent")));
  await $.set(C, "OnMouseLeave", (await $.ref_(C, "MouseLeaveEvent")));
  await $.set(C, "OnPaint", (await $.ref_(C, "PaintEvent")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TDepositsManager_new", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_AlignDisabled", async function Get_AlignDisabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignDisabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_AlignWithMargins", async function Get_AlignWithMargins(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignWithMargins"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_BorderWidth", async function Get_BorderWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Integer", [(await $.v(C, "BorderWidth"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_DockSite", async function Get_DockSite(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DockSite"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_ExplicitHeight", async function Get_ExplicitHeight(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitHeight"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_ExplicitLeft", async function Get_ExplicitLeft(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitLeft"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_ExplicitTop", async function Get_ExplicitTop(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitTop"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_ExplicitWidth", async function Get_ExplicitWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitWidth"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_MouseInClient", async function Get_MouseInClient(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "MouseInClient"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_ParentCustomHint", async function Get_ParentCustomHint(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentCustomHint"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_ParentDoubleBuffered", async function Get_ParentDoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentDoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_PopupMode", async function Get_PopupMode(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PopupMode"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_ScreenSnap", async function Get_ScreenSnap(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ScreenSnap"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_SnapBuffer", async function Get_SnapBuffer(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "SnapBuffer"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_UseDockManager", async function Get_UseDockManager(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "UseDockManager"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "Hesablarin1Click", async function Hesablarin1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_DepozitAccSettings_new.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TDepositsManager_new", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "BitBtnexpClick", async function BitBtnexpClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.wobj(C, "EExport"));
    await $.mcall((await $.mv((await $.mv((await $.wv([$t2], "MainGrid", C, false)), "DataSource")), "DataSet")), "Last", []);
    await $.stmt($.wcall([$t2], "Connect", [], C));
    await $.stmt((await $.wcall([$t2], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t2], "MainGrid", C, false)), "DataSource")), "DataSet")), "Depozitlər", (await $.wv([$t2], "True", C, false))], C)));
    await $.stmt($.wcall([$t2], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "BuildFilterString", async function BuildFilterString(Self) {
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
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t3) => { L0["result"] = $t3; }), "CURRENCY", (await $.mv((await $.v(C, "CBCurrency")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue")), true])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t4) => { L0["result"] = $t4; }), "branchid", (await $.mv((await $.v(C, "CBFilial")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue")), true])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t5) => { L0["result"] = $t5; }), "contracttype", (await $.mv((await $.v(C, "CBContractType")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue")), true])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t6) => { L0["result"] = $t6; }), "clienttype", (await $.mv((await $.v(C, "CBpersons")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh4")), "KeyValue")), true])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t7) => { L0["result"] = $t7; }), "personaltype", (await $.mv((await $.v(C, "CBClientType")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh5")), "KeyValue")), true])));
  if ($.truthy((await $.mv((await $.v(C, "CBStatus")), "Checked")))) {
    { const $t8 = (await $.mv((await $.v(C, "LCBStatus")), "ItemIndex"));
      if ($.eq($t8, 0)) {
        L0["fstatus"] = "(status = 1)";
      }
      else if ($.eq($t8, 1)) {
        L0["fstatus"] = "(Status = 0)";
      }
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "CBOpendat")), "Checked")))) {
    L0["fopendat1"] = $.add($.add(" opendate >=  '", (await $.call(C, "FormatDateTime", ["dd/MM/yyyy", (await $.mv((await $.v(C, "DTPOpenDate")), "Date"))]))), "'");
    L0["fopendat2"] = $.add($.add(" opendate <=  '", (await $.call(C, "FormatDateTime", ["dd/MM/yyyy", (await $.mv((await $.v(C, "DTPCloseDate")), "Date"))]))), "'");
    L0["fopendat"] = $.add($.add($.add($.add($.add($.add($.add($.add("(", "("), L0["fopendat1"]), ")"), " and "), "("), L0["fopendat2"]), ")"), ")");
  }
  await $.stmt((await $.callv(L0["concatfilter1"], [$.ref(async () => L0["result"], async ($t9) => { L0["result"] = $t9; }), $.ref(async () => L0["fstatus"], async ($t10) => { L0["fstatus"] = $t10; })])));
  await $.stmt((await $.callv(L0["concatfilter1"], [$.ref(async () => L0["result"], async ($t11) => { L0["result"] = $t11; }), $.ref(async () => L0["fopendat"], async ($t12) => { L0["fopendat"] = $t12; })])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDepositsManager_new", "PrepareFilter", async function PrepareFilter(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t13 = (await $.wobj(C, "DMDepositsManager_new"));
    await $.mset((await $.wv([$t13], "DBLookupComboboxEh1", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t13], "Valutes", C, false)), "fieldByName", ["Valute"])), "AsInteger")));
    await $.mset((await $.wv([$t13], "DBLookupComboboxEh2", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t13], "Filials", C, false)), "fieldByName", ["id"])), "AsInteger")));
    await $.mset((await $.wv([$t13], "DBLookupComboboxEh3", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t13], "DepositTypes", C, false)), "fieldByName", ["id"])), "AsInteger")));
    await $.mset((await $.wv([$t13], "DBLookupComboboxEh4", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t13], "Categories", C, false)), "fieldByName", ["id"])), "AsInteger")));
    await $.mset((await $.wv([$t13], "DBLookupComboboxEh5", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t13], "persons", C, false)), "fieldByName", ["id"])), "AsInteger")));
    await $.mset((await $.wv([$t13], "LCBStatus", C, false)), "ItemIndex", 0);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TDepositsManager_new", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DMDepositsManager_new", (await $.mcall((await $.v(C, "TDMDepositsManager_new")), "Create", [Self])));
  await $.stmt($.call(C, "PrepareFilter", []));
  await $.set(C, "ApplicationPath", (await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])));
  await $.set(C, "CommonApplication", (await $.v(C, "Application")));
  await $.set(C, "CommonGrid", (await $.v(C, "MainGrid")));
  {
    const $t14 = (await $.wobj(C, "DMDepositsManager_new"));
    await $.wset([$t14], "Get_FilialID", (await $.mv((await $.mcall((await $.wv([$t14], "FilialID", C, false)), "FieldByname", ["kod_fil"])), "AsInteger")), C);
    await $.wset([$t14], "Get_BankDate", (await $.mv((await $.mcall((await $.wv([$t14], "BankDate", C, false)), "FieldByname", ["Tek_Dat"])), "AsDateTime")), C);
  }
  await $.mset((await $.v(C, "DTPOpenDate")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "DTPCloseDate")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "ActiveFormDestroy", async function ActiveFormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DMDepositsManager_new")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "ActnFilterExecute", async function ActnFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.wobj(C, "MainGrid"));
    const $t16 = (await $.wv([$t15], "SelectedRows", C, false));
    await $.stmt($.wcall([$t15, $t16], "Clear", [], C));
  }
  {
    const $t17 = (await $.wobj(C, "MainGrid"));
    const $t18 = (await $.mv((await $.wv([$t17], "DataSource", C, false)), "DataSet"));
    await $.wset([$t17, $t18], "Cursor", (await $.wv([$t17, $t18], "crSqlWait", C, false)), C);
    await $.wset([$t17, $t18], "Filtered", (await $.wv([$t17, $t18], "False", C, false)), C);
    await $.wset([$t17, $t18], "Filter", (await $.wv([$t17, $t18], "BuildFilterString", C, false)), C);
    await $.wset([$t17, $t18], "Filtered", (await $.wv([$t17, $t18], "true", C, false)), C);
    await $.wset([$t17, $t18], "Cursor", (await $.wv([$t17, $t18], "crDefault", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "ActnRefreshExecute", async function ActnRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "saveid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "MainGrid")), "SelectedRows")), "Clear", []);
  {
    const $t19 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t20 = (await $.wv([$t19], "DepositsData", C, false));
    await $.wset([$t19, $t20], "SaveID", (await $.wv([$t19, $t20], "Get_SelectedContID", C, false)), { get: async () => L0["saveid"], set: async (v) => { L0["saveid"] = v; }, local: true });
    await $.stmt($.wcall([$t19, $t20], "Refresh", [], C));
    await $.stmt((await $.wcall([$t19, $t20], "Locate", ["ID", (await $.wv([$t19, $t20], "SaveID", { get: async () => L0["saveid"], set: async (v) => { L0["saveid"] = v; }, local: true }, false)), []], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "ActnSearchExecute", async function ActnSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t21 = L0["sender"];
    await $.wset([$t21], "SearchField", (await $.wcall([$t21], "copy", [(await $.wv([$t21], "Name", C, false)), 5, (await $.wcall([$t21], "length", [(await $.wv([$t21], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    await $.mcall((await $.mv((await $.wv([$t21], "MainGrid", C, false)), "SelectedRows")), "Clear", []);
    {
      const $t22 = (await $.wcall([$t21], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t21], "MainGrid", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t21, $t22], "SearchRecord", [(await $.wv([$t21, $t22], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t21, $t22], "Text", C, false)), $.add((await $.wv([$t21, $t22], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t21, $t22], "srFromCurrent", C, false)), (await $.wv([$t21, $t22], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t21, $t22], "MessageDlg", [$.add($.add("Axtarış sona çatıb.", "\r"), "əvvəldən başlamaq istəyirsinizmi?"), (await $.wv([$t21, $t22], "mtInformation", C, false)), [(await $.wv([$t21, $t22], "mbNo", C, false)), (await $.wv([$t21, $t22], "mbYes", C, false))], 0], C)), (await $.wv([$t21, $t22], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t21, $t22], "SearchRecord", [(await $.wv([$t21, $t22], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t21, $t22], "Text", C, false)), $.add((await $.wv([$t21, $t22], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t21, $t22], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t21, $t22], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t21, $t22], "mtInformation", C, false)), [(await $.wv([$t21, $t22], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "DBLookupComboboxEh1Change", async function DBLookupComboboxEh1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActnFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TDepositsManager_new", "miCapitalizationClick", async function miCapitalizationClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t23 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t24 = (await $.wv([$t23], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t23, $t24], "CallProcedure", ["checkadvancedobjectaccess", ["NEW_SBCM_CAPITALIZATION"]], C)));
  }
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_Capitalize_new.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "miDepositClick", async function miDepositClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t25 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t26 = (await $.wv([$t25], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t25, $t26], "CallProcedure", ["checkadvancedobjectaccess", ["NEW_SBCM_TRANSH"]], C)));
  }
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_ApplyMoney_new.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "miUntimelyWithdrawClick", async function miUntimelyWithdrawClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t27 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t28 = (await $.wv([$t27], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t27, $t28], "CallProcedure", ["checkadvancedobjectaccess", ["NEW_SBCM_UNTIMELY"]], C)));
  }
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_UntimelyEtMoney_new.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "miWithdrawClick", async function miWithdrawClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t29 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t30 = (await $.wv([$t29], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t29, $t30], "CallProcedure", ["checkadvancedobjectaccess", ["NEW_SBCM_PEYMENT"]], C)));
  }
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_ExtractMoney_new.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "MouseEnterEvent", async function MouseEnterEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseEnter", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "MouseLeaveEvent", async function MouseLeaveEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseLeave", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "N10Click", async function N10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_Filter_new.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "N12Click", async function N12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t31 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t32 = (await $.wv([$t31], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t31, $t32], "CallProcedure", ["checkadvancedobjectaccess", ["NEW_SBCM_CALC_PERCENT"]], C)));
  }
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_PercentConverting_new.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "N14Click", async function N14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["Sbdm_Shedule_new.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "N15Click", async function N15Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t33 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t34 = (await $.wv([$t33], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t33, $t34], "CallProcedure", ["checkadvancedobjectaccess", ["NEW_SBCM_PARTIAL_PEYMENT"]], C)));
  }
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_PartialPayment_new.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "N18Click", async function N18Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "cf": '', "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["cfmsg"] = "Müqavilə bağlanır, əminsinizmi?";
  L0["cfselmsg"] = "Seçilmiş müqavilələr bağlanır, əminsinizmi?";
  {
    const $t35 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t36 = (await $.wv([$t35], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t35, $t36], "CallProcedure", ["checkadvancedobjectaccess", ["SBCM_CLOSE_CONTRACT"]], C)));
  }
  {
    const $t37 = (await $.wobj(C, "MainGrid"));
    const $t38 = (await $.wv([$t37], "SelectedRows", C, false));
    if ($.truthy($.gt((await $.wv([$t37, $t38], "Count", C, false)), 1))) {
      await $.wset([$t37, $t38], "Cf", (await $.wv([$t37, $t38], "CfSelMsg", { get: async () => L0["cfselmsg"], set: async (v) => { L0["cfselmsg"] = v; }, local: true }, false)), { get: async () => L0["cf"], set: async (v) => { L0["cf"] = v; }, local: true });
    } else {
      await $.wset([$t37, $t38], "Cf", (await $.wv([$t37, $t38], "CfMsg", { get: async () => L0["cfmsg"], set: async (v) => { L0["cfmsg"] = v; }, local: true }, false)), { get: async () => L0["cf"], set: async (v) => { L0["cf"] = v; }, local: true });
    }
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["cf"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrNo"))))) {
    return L0.result;
  }
  {
    const $t39 = (await $.wobj(C, "MainGrid"));
    const $t40 = (await $.wv([$t39], "SelectedRows", C, false));
    const $t41 = (await $.mv((await $.wv([$t39, $t40], "DataSource", C, false)), "DataSet"));
    { const $t42 = $.sub((await $.wv([$t39, $t40, $t41], "Count", C, false)), 1);
      await $.wset([$t39, $t40, $t41], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t43 = true;
      for (;;) {
        if (!$t43) { await $.wset([$t39, $t40, $t41], "i", $.succ((await $.wv([$t39, $t40, $t41], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t43 = false;
        if (!($.ord((await $.wv([$t39, $t40, $t41], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t42))) break;
        await $.stmt((await $.wcall([$t39, $t40, $t41], "GotoBookmark", [(await $.wcall([$t39, $t40, $t41], "Pointer", [(await $.idx((await $.wv([$t39, $t40, $t41], "Items", C, false)), [(await $.wv([$t39, $t40, $t41], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t39, $t40, $t41], "DMDepositsManager_new", C, false)), "Stored_Programs")), "CallProcedure", ["CloseDeposit", ["ContractID", (await $.mv((await $.wcall([$t39, $t40, $t41], "FieldByName", ["ID"], C)), "AsInteger"))]])));
        await $.tick();
      }
    }
    await $.stmt($.wcall([$t39, $t40, $t41], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "N19Click", async function N19Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "calculationenabled": false, "confmsg": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t44 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t45 = (await $.wv([$t44], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t44, $t45], "CallProcedure", ["checkadvancedobjectaccess", ["SBCM_STOP_START_CALCPERCENT"]], C)));
  }
  {
    const $t46 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t47 = (await $.wv([$t46], "Stored_Programs", C, false));
    await $.wset([$t46, $t47], "CalculationEnabled", (await $.wcall([$t46, $t47], "CallBooleanFunction", ["IsCalculationEnabled", ["ContractID", (await $.wv([$t46, $t47], "get_SelectedContID", C, false))]], C)), { get: async () => L0["calculationenabled"], set: async (v) => { L0["calculationenabled"] = v; }, local: true });
  }
  if ($.truthy(L0["calculationenabled"])) {
    L0["confmsg"] = "Faizlərin hesablanması dayandırılır əminsinizmi?";
  } else {
    L0["confmsg"] = "Faizlərin hesablanmasını davam etdirilir əminsinizmi?";
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["confmsg"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t48 = (await $.wobj(C, "DMDepositsManager_new"));
      const $t49 = (await $.wv([$t48], "Stored_Programs", C, false));
      if ($.truthy((await $.wv([$t48, $t49], "CalculationEnabled", { get: async () => L0["calculationenabled"], set: async (v) => { L0["calculationenabled"] = v; }, local: true }, false)))) {
        await $.stmt((await $.wcall([$t48, $t49], "CallProcedure", ["DisableCalculation", ["ContractID", (await $.wv([$t48, $t49], "get_SelectedContID", C, false))]], C)));
      } else {
        await $.stmt((await $.wcall([$t48, $t49], "CallProcedure", ["EnableCalculation", ["ContractID", (await $.wv([$t48, $t49], "get_SelectedContID", C, false))]], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "N1Click", async function N1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_Settings_new.bpl", "showrefer"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "N20Click", async function N20Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t50 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t51 = (await $.wv([$t50], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t50, $t51], "CallProcedure", ["checkadvancedobjectaccess", ["SBCM_PRINT_APPLYMONEY"]], C)));
  }
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_ContractReport_new.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "N21Click", async function N21Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t52 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t53 = (await $.wv([$t52], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t52, $t53], "CallProcedure", ["checkadvancedobjectaccess", ["SBCM_PRINT_CONTRACT1"]], C)));
  }
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_WReport_new.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "N36Click", async function N36Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["Sbdm_Shedule_new.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "N9Click", async function N9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t54 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t55 = (await $.wv([$t54], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t54, $t55], "CallProcedure", ["checkadvancedobjectaccess", ["NEW_SBCM_PROLONGATION"]], C)));
  }
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_Prolongation_new.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TDepositsManager_new", "Set_AlignWithMargins", async function Set_AlignWithMargins(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AlignWithMargins", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TDepositsManager_new", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TDepositsManager_new", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TDepositsManager_new", "Set_BorderWidth", async function Set_BorderWidth(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "BorderWidth", (await $.call(C, "TBorderWidth", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TDepositsManager_new", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TDepositsManager_new", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TDepositsManager_new", "Set_DockSite", async function Set_DockSite(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DockSite", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TDepositsManager_new", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TDepositsManager_new", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TDepositsManager_new", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TDepositsManager_new", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TDepositsManager_new", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "string", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TDepositsManager_new", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TDepositsManager_new", "Set_ParentCustomHint", async function Set_ParentCustomHint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentCustomHint", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TDepositsManager_new", "Set_ParentDoubleBuffered", async function Set_ParentDoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentDoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TDepositsManager_new", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TDepositsManager_new", "Set_PopupMode", async function Set_PopupMode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PopupMode", (await $.call(C, "TPopupMode", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPopupMode"]});
  U.method("TDepositsManager_new", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TDepositsManager_new", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TDepositsManager_new", "Set_ScreenSnap", async function Set_ScreenSnap(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ScreenSnap", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TDepositsManager_new", "Set_SnapBuffer", async function Set_SnapBuffer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "SnapBuffer", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TDepositsManager_new", "Set_UseDockManager", async function Set_UseDockManager(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "UseDockManager", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TDepositsManager_new", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TDepositsManager_new", "TBFilterationClick", async function TBFilterationClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FilterPanel")), "Visible", $.not((await $.mv((await $.v(C, "FilterPanel")), "Visible"))));
  await $.mset((await $.v(C, "DTPOpenDate")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "DTPCloseDate")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "TBFilteration")), "Down", (await $.mv((await $.v(C, "FilterPanel")), "Visible")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t56 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t57 = (await $.wv([$t56], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t56, $t57], "CallProcedure", ["checkadvancedobjectaccess", ["NEW_SBCM_CONTRACT"]], C)));
  }
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_Contract_new.bpl", "InsertContract"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t58 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t59 = (await $.wv([$t58], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t58, $t59], "CallProcedure", ["checkadvancedobjectaccess", ["EDIT_SBCM_CONTRACT"]], C)));
  }
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_Contract_new.bpl", "EditContract"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "saveid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "MainGrid")), "SelectedRows")), "Clear", []);
  {
    const $t60 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t61 = (await $.wv([$t60], "DepositsData", C, false));
    await $.wset([$t60, $t61], "SaveID", (await $.wv([$t60, $t61], "Get_SelectedContID", C, false)), { get: async () => L0["saveid"], set: async (v) => { L0["saveid"] = v; }, local: true });
    await $.stmt($.wcall([$t60, $t61], "Refresh", [], C));
    await $.stmt((await $.wcall([$t60, $t61], "Locate", ["ID", (await $.wv([$t60, $t61], "SaveID", { get: async () => L0["saveid"], set: async (v) => { L0["saveid"] = v; }, local: true }, false)), []], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "N28Click", async function N28Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "saveid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "MainGrid")), "SelectedRows")), "Clear", []);
  {
    const $t62 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t63 = (await $.wv([$t62], "DepositsData", C, false));
    await $.wset([$t62, $t63], "SaveID", (await $.wv([$t62, $t63], "Get_SelectedContID", C, false)), { get: async () => L0["saveid"], set: async (v) => { L0["saveid"] = v; }, local: true });
    await $.stmt($.wcall([$t62, $t63], "Refresh", [], C));
    await $.stmt((await $.wcall([$t62, $t63], "Locate", ["ID", (await $.wv([$t62, $t63], "SaveID", { get: async () => L0["saveid"], set: async (v) => { L0["saveid"] = v; }, local: true }, false)), []], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "N2Click", async function N2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t64 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t65 = (await $.wv([$t64], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t64, $t65], "CallProcedure", ["checkadvancedobjectaccess", ["SBCM_ACCOUNT_GROUP"]], C)));
  }
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_Settings_new.bpl", "showcccgroups"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "N31Click", async function N31Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t66 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t67 = (await $.wv([$t66], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t66, $t67], "CallProcedure", ["checkadvancedobjectaccess", ["SBCM_PERIOD_REPORT"]], C)));
  }
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_PeriodReport_new.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "N32Click", async function N32Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t68 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t69 = (await $.wv([$t68], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t68, $t69], "CallProcedure", ["checkadvancedobjectaccess", ["SBCM_MIS_REPORT"]], C)));
  }
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_Report_new.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "N33Click", async function N33Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t70 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t71 = (await $.wv([$t70], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t70, $t71], "CallProcedure", ["checkadvancedobjectaccess", ["SBCM_OF_BALANCE_REPORT"]], C)));
  }
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_ReportofBalance_new.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "N35Click", async function N35Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "SearchPanel")), "Visible", $.not((await $.mv((await $.v(C, "SearchPanel")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "N3Click", async function N3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t72 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t73 = (await $.wv([$t72], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t72, $t73], "CallProcedure", ["checkadvancedobjectaccess", ["SBCM_CUSTOMERS_TYPE"]], C)));
  }
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_Settings_new.bpl", "showcategories"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "N4Click", async function N4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t74 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t75 = (await $.wv([$t74], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t74, $t75], "CallProcedure", ["checkadvancedobjectaccess", ["SBCM_DEPOSIT_TYPE"]], C)));
  }
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_Settings_new.bpl", "showdeposittypes"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "N5Click", async function N5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t76 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t77 = (await $.wv([$t76], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t76, $t77], "CallProcedure", ["checkadvancedobjectaccess", ["SBCM_LOSS_INCOME_ADJUSTMENT_ACC"]], C)));
  }
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_Settings_new.bpl", "showaccountturning"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "N6Click", async function N6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t78 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t79 = (await $.wv([$t78], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t78, $t79], "CallProcedure", ["checkadvancedobjectaccess", ["SBCM_PRINT_CONTRACT"]], C)));
  }
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_WRSetup_new.bpl", "showSBWRBookmarkSetup"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDepositsManager_new", "N7Click", async function N7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t80 = (await $.wobj(C, "DMDepositsManager_new"));
    const $t81 = (await $.wv([$t80], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t80, $t81], "CallProcedure", ["checkadvancedobjectaccess", ["SBCM_PERCENT_SETTING"]], C)));
  }
  await $.stmt((await $.call(C, "LoadPlugin", ["SBDM_PercentSettings_new.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
