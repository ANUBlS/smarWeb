// Generated from ExpressManagerImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ExpressManagerImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ActiveX", "AxCtrls", "ExpressManager_TLB", "StdVcl", "StdCtrls", "Menus", "ImgList", "ComCtrls", "ToolWin", "ActnList", "Grids", "DBGrids", "ExtCtrls", "OracleData", "sboapiDataModuleImpl", "XDBGrids", "XFSCtrls", "Variants", "ComObj", "ComServ", "ExpDataModuleUnit", "ExpUnitImpl", "ExpParameterUnit", "OrderPrintUnit", "CurrectionUnit", "ExpSubUnit", "ExpComAccUnit", "ExpCustomersTypeUnit", "ExpComTransactionUnit", "AdminUnit", "ExpArchiveUnit", "SBTranslateProc", "ExpUnitNewImpl", "ExpAllParametrUnit", "ExpAccTypeUnit", "UnitSearchCustName", "ExpPasswordUnit", "UnitSearchLegalCustName", "UnitPayments", "UnitPaymentsCredit", "AdminAllUnit", "UnitNominalCustomers", "UnitCreditReport", "OrderPrintXUnit", "EpxVesterUnionUnit", "UnitVesterPrintM"]);
  const C = [U];
  U.defClass("TExpress", "TActiveForm", {"popupmenuout": {"name": "PopupMenuOut", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "actionlistout": {"name": "ActionListOUT", "type": "TActionList"}, "actionaddout": {"name": "ActionAddOut", "type": "TAction"}, "actioneditout": {"name": "ActionEditOut", "type": "TAction"}, "actiondeleteout": {"name": "ActionDeleteOut", "type": "TAction"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "actioncommitout": {"name": "ActionCommitOut", "type": "TAction"}, "n5": {"name": "N5", "type": "TMenuItem"}, "actionadminout": {"name": "ActionAdminOut", "type": "TAction"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "actionarchive": {"name": "ActionArchive", "type": "TAction"}, "timer1": {"name": "Timer1", "type": "TTimer"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "actionsearchout": {"name": "ActionSearchOut", "type": "TAction"}, "n8": {"name": "N8", "type": "TMenuItem"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "n10": {"name": "N10", "type": "TMenuItem"}, "popupmenu3": {"name": "PopupMenu3", "type": "TPopupMenu"}, "n11": {"name": "N11", "type": "TMenuItem"}, "n12": {"name": "N12", "type": "TMenuItem"}, "n13": {"name": "N13", "type": "TMenuItem"}, "n14": {"name": "N14", "type": "TMenuItem"}, "n15": {"name": "N15", "type": "TMenuItem"}, "imagelist2": {"name": "ImageList2", "type": "TImageList"}, "n16": {"name": "N16", "type": "TMenuItem"}, "n17": {"name": "N17", "type": "TMenuItem"}, "n18": {"name": "N18", "type": "TMenuItem"}, "n19": {"name": "N19", "type": "TMenuItem"}, "mumisazlama1": {"name": "mumisazlama1", "type": "TMenuItem"}, "n20": {"name": "N20", "type": "TMenuItem"}, "mdaxilmxaric1": {"name": "MdaxilMxaric1", "type": "TMenuItem"}, "actionreturn": {"name": "ActionReturn", "type": "TAction"}, "imagelist4": {"name": "ImageList4", "type": "TImageList"}, "expresspagecontrol": {"name": "ExpressPageControl", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "tabsheet4": {"name": "TabSheet4", "type": "TTabSheet"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "controlbar1": {"name": "ControlBar1", "type": "TControlBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "actionlistin": {"name": "ActionListIN", "type": "TActionList"}, "actioneditin": {"name": "ActionEditIn", "type": "TAction"}, "actiontakein": {"name": "ActionTakeIn", "type": "TAction"}, "actionrefreshin": {"name": "ActionRefreshIn", "type": "TAction"}, "actionsearchin": {"name": "ActionSearchIn", "type": "TAction"}, "actionrefreshoutarchive": {"name": "ActionRefreshOutArchive", "type": "TAction"}, "actionsearchoutarchive": {"name": "ActionSearchOutArchive", "type": "TAction"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}, "xdbgrid3": {"name": "XDBGrid3", "type": "TXDBGrid"}, "xdbgrid4": {"name": "XDBGrid4", "type": "TXDBGrid"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "actionlookin": {"name": "ActionLookIn", "type": "TAction"}, "imagelist3": {"name": "ImageList3", "type": "TImageList"}, "popupmenuoutartchive": {"name": "PopupMenuOutArtchive", "type": "TPopupMenu"}, "popupmenuin": {"name": "PopupMenuIn", "type": "TPopupMenu"}, "popupmenuinartchive": {"name": "PopupMenuInArtchive", "type": "TPopupMenu"}, "redakt1": {"name": "Redakt1", "type": "TMenuItem"}, "baxmaq1": {"name": "Baxmaq1", "type": "TMenuItem"}, "yenil1": {"name": "Yenil1", "type": "TMenuItem"}, "axtar1": {"name": "Axtar1", "type": "TMenuItem"}, "qbul1": {"name": "Qbul1", "type": "TMenuItem"}, "actionprintoutarchive": {"name": "ActionPrintOutArchive", "type": "TAction"}, "actionprintoutarcive1": {"name": "ActionPrintOutArcive1", "type": "TAction"}, "gndrnap1": {"name": "Gndrnap1", "type": "TMenuItem"}, "yenil2": {"name": "Yenil2", "type": "TMenuItem"}, "axtar2": {"name": "Axtar2", "type": "TMenuItem"}, "mdaxilqbzap1": {"name": "MdaxilQbzap1", "type": "TMenuItem"}, "actionprintin": {"name": "ActionPrintIn", "type": "TAction"}, "actionprintin1": {"name": "ActionPrintIn1", "type": "TAction"}, "qbulap1": {"name": "Qbulap1", "type": "TMenuItem"}, "mdaxilqbzap2": {"name": "MdaxilQbzap2", "type": "TMenuItem"}, "actionsearchinarchive": {"name": "ActionSearchInArchive", "type": "TAction"}, "actionrefreshinarchive": {"name": "ActionRefreshInArchive", "type": "TAction"}, "actionprintinarchive": {"name": "ActionPrintInArchive", "type": "TAction"}, "actionprintinarchive1": {"name": "ActionPrintInArchive1", "type": "TAction"}, "action1": {"name": "Action1", "type": "TAction"}, "action2": {"name": "Action2", "type": "TAction"}, "yenil3": {"name": "Yenil3", "type": "TMenuItem"}, "axtar3": {"name": "Axtar3", "type": "TMenuItem"}, "axtar4": {"name": "Axtar4", "type": "TMenuItem"}, "qbulap2": {"name": "Qbulap2", "type": "TMenuItem"}, "controlbar2": {"name": "ControlBar2", "type": "TControlBar"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton21": {"name": "ToolButton21", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "xfgroupbox4": {"name": "XFGroupBox4", "type": "TXFGroupBox"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "controlbar3": {"name": "ControlBar3", "type": "TControlBar"}, "toolbar3": {"name": "ToolBar3", "type": "TToolBar"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton18": {"name": "ToolButton18", "type": "TToolButton"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "dtpoutarchiveb": {"name": "DTPOutArchiveB", "type": "TDateTimePicker"}, "dtpoutarchivee": {"name": "DTPOutArchiveE", "type": "TDateTimePicker"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "controlbar4": {"name": "ControlBar4", "type": "TControlBar"}, "toolbar4": {"name": "ToolBar4", "type": "TToolBar"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "dtpinarchiveb": {"name": "DTPInArchiveB", "type": "TDateTimePicker"}, "dtpinarchivee": {"name": "DTPInArchiveE", "type": "TDateTimePicker"}, "toolbutton19": {"name": "ToolButton19", "type": "TToolButton"}, "toolbutton20": {"name": "ToolButton20", "type": "TToolButton"}, "toolbutton22": {"name": "ToolButton22", "type": "TToolButton"}, "actionlookinarchive": {"name": "ActionLookInArchive", "type": "TAction"}, "actionlookoutarchive": {"name": "ActionLookOutArchive", "type": "TAction"}, "fevents": {"name": "FEvents", "type": "IExpressEvents"}}, {});
  U.init(async () => {
    U.var_("ExpressFrom", null, "TExpress");
  });
  U.method("TExpress", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TExpress", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TExpress", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TExpress", "Initialize", null, arguments);
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
  U.method("TExpress", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpress", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpress", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpress", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpress", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpress", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpress", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpress", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpress", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpress", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpress", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpress", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpress", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpress", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpress", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpress", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpress", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpress", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExpress", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TExpress", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TExpress", "ExpressPageControlChange", async function ExpressPageControlChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.idx((await $.mv((await $.v(C, "ExpressPageControl")), "Pages")), [0])), "Highlighted", $.eq((await $.mv((await $.v(C, "ExpressPageControl")), "ActivePageIndex")), 0));
  await $.mset((await $.idx((await $.mv((await $.v(C, "ExpressPageControl")), "Pages")), [1])), "Highlighted", $.eq((await $.mv((await $.v(C, "ExpressPageControl")), "ActivePageIndex")), 1));
  await $.mset((await $.idx((await $.mv((await $.v(C, "ExpressPageControl")), "Pages")), [2])), "Highlighted", $.eq((await $.mv((await $.v(C, "ExpressPageControl")), "ActivePageIndex")), 2));
  await $.mset((await $.idx((await $.mv((await $.v(C, "ExpressPageControl")), "Pages")), [3])), "Highlighted", $.eq((await $.mv((await $.v(C, "ExpressPageControl")), "ActivePageIndex")), 3));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExpress", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExpress", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TExpress", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TExpress", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TExpress", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TExpress", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExpress", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExpress", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExpress", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TExpress", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TExpress", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExpress", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TExpress", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TExpress", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExpress", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExpress", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ExpressFrom", Self);
  await $.set(C, "ExpDataModule", (await $.mcall((await $.v(C, "TExpDataModule")), "Create", [Self])));
  await $.set(C, "ExpParameter", (await $.mcall((await $.v(C, "TExpParameter")), "Create", [Self])));
  await $.set(C, "FormCurrection", (await $.mcall((await $.v(C, "TFormCurrection")), "Create", [Self])));
  await $.set(C, "ExpSubForm", (await $.mcall((await $.v(C, "TExpSubForm")), "Create", [Self])));
  await $.set(C, "ExpComAccForm", (await $.mcall((await $.v(C, "TExpComAccForm")), "Create", [Self])));
  await $.set(C, "ExpCustomersType", (await $.mcall((await $.v(C, "TExpCustomersType")), "Create", [Self])));
  await $.set(C, "ExpComTransactionForm", (await $.mcall((await $.v(C, "TExpComTransactionForm")), "Create", [Self])));
  await $.set(C, "AdminForm", (await $.mcall((await $.v(C, "TAdminForm")), "Create", [Self])));
  await $.set(C, "AdminAllForm", (await $.mcall((await $.v(C, "TAdminAllForm")), "Create", [Self])));
  await $.set(C, "ExpFormNew", (await $.mcall((await $.v(C, "TExpFormNew")), "Create", [Self])));
  await $.set(C, "ExpAllParametr", (await $.mcall((await $.v(C, "TExpAllParametr")), "Create", [Self])));
  await $.set(C, "ExpAccType", (await $.mcall((await $.v(C, "TExpAccType")), "Create", [Self])));
  await $.set(C, "FormSearchCustName", (await $.mcall((await $.v(C, "TFormSearchCustName")), "Create", [Self])));
  await $.set(C, "ExpPasswordForm", (await $.mcall((await $.v(C, "TExpPasswordForm")), "Create", [Self])));
  await $.set(C, "FormSearchLegalCustName", (await $.mcall((await $.v(C, "TFormSearchLegalCustName")), "Create", [Self])));
  await $.set(C, "FormPayments", (await $.mcall((await $.v(C, "TFormPayments")), "Create", [Self])));
  await $.set(C, "FormNominalCustomers", (await $.mcall((await $.v(C, "TFormNominalCustomers")), "Create", [Self])));
  await $.set(C, "FormPaymentsCredit", (await $.mcall((await $.v(C, "TFormPaymentsCredit")), "Create", [Self])));
  await $.set(C, "ExpFormDestination", (await $.mcall((await $.v(C, "TExpFormDestination")), "Create", [Self])));
  await $.set(C, "CreditReport", (await $.mcall((await $.v(C, "TCreditReport")), "Create", [Self])));
  await $.set(C, "FormVesterUnion", (await $.mcall((await $.v(C, "TFormVesterUnion")), "Create", [Self])));
  await $.mset((await $.v(C, "Edit1")), "Text", (await $.call(C, "DateToStr", [(await $.call(C, "trunc", [(await $.call(C, "StrToDateTime", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "SysdateDataSet")), "fieldbyname", ["dat"])), "AsString"))]))]))])));
  await $.mset((await $.v(C, "Edit2")), "Text", (await $.call(C, "TimeToStr", [(await $.v(C, "Time"))])));
  await $.mset((await $.v(C, "Edit3")), "Text", (await $.call(C, "DateToStr", [(await $.call(C, "trunc", [(await $.call(C, "StrToDateTime", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "SysdateDataSet")), "fieldbyname", ["dat"])), "AsString"))]))]))])));
  await $.mset((await $.v(C, "edit4")), "Text", (await $.call(C, "TimeToStr", [(await $.v(C, "Time"))])));
  await $.mset((await $.v(C, "DTPOutArchiveB")), "DateTime", (await $.call(C, "trunc", [(await $.call(C, "StrToDateTime", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "SysdateDataSet")), "fieldbyname", ["dat"])), "AsString"))]))])));
  await $.mset((await $.v(C, "DTPOutArchiveE")), "DateTime", (await $.call(C, "trunc", [(await $.call(C, "StrToDateTime", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "SysdateDataSet")), "fieldbyname", ["dat"])), "AsString"))]))])));
  await $.mset((await $.v(C, "DTPInArchiveB")), "DateTime", (await $.call(C, "trunc", [(await $.call(C, "StrToDateTime", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "SysdateDataSet")), "fieldbyname", ["dat"])), "AsString"))]))])));
  await $.mset((await $.v(C, "DTPInArchiveE")), "DateTime", (await $.call(C, "trunc", [(await $.call(C, "StrToDateTime", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "SysdateDataSet")), "fieldbyname", ["dat"])), "AsString"))]))])));
  await $.mset((await $.v(C, "ExpressPageControl")), "ActivePageIndex", 0);
  await $.mset((await $.idx((await $.mv((await $.v(C, "ExpressPageControl")), "Pages")), [0])), "Highlighted", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "Axtar3Click", async function Axtar3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FormCurrection")), "DbGr", (await $.v(C, "XDBGrid4")));
  await $.mcall((await $.v(C, "FormCurrection")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "GotoExpress", async function GotoExpress(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"id": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["id"]);
  {
    const $t1 = (await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSet"));
    await $.stmt((await $.wcall([$t1], "Locate", ["ID", (await $.wv([$t1], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), []], C)));
  }
  return L0.result;
}, {"params": ["ID"], "kind": "procedure", "ptypes": ["Longint"]});
  U.method("TExpress", "ActionAddOutExecute", async function ActionAddOutExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ExpCustomersType")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "Timer1Timer", async function Timer1Timer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit2")), "Text", (await $.call(C, "TimeToStr", [(await $.v(C, "Time"))])));
  await $.mset((await $.v(C, "Edit4")), "Text", (await $.call(C, "TimeToStr", [(await $.v(C, "Time"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ToolButton15Click", async function ToolButton15Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSet")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "FormCurrection")), "DbGr", (await $.v(C, "XDBGrid1")));
  await $.mcall((await $.v(C, "FormCurrection")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ToolButton16Click", async function ToolButton16Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_expid": 0, "voptype": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["v_expid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSet")), "FieldByName", ["expid"])), "AsInteger"));
  L0["voptype"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSet")), "FieldByName", ["optype"])), "asinteger"));
  { const $t2 = L0["v_expid"];
    if ($.eq($t2, 1)) {
      await $.mset((await $.mv((await $.v(C, "ExpFormNew")), "PageControl1")), "ActivePageIndex", 0);
      await $.mset((await $.v(C, "ExpFormNew")), "FiledBatchs", true);
      await $.mset((await $.v(C, "ExpFormNew")), "FiledIncoming", false);
      await $.mset((await $.v(C, "ExpFormNew")), "FieldBatchsArchive", false);
      await $.mset((await $.v(C, "ExpFormNew")), "FiledIncomingArchive", false);
      await $.mset((await $.v(C, "ExpFormNew")), "FForm", 1);
      await $.mset((await $.mv((await $.v(C, "ExpFormNew")), "Button1")), "Visible", false);
      await $.mcall((await $.v(C, "ExpFormNew")), "ShowModal", []);
    }
    else if ($.eq($t2, 2)) {
      if ($.truthy($.eq(L0["voptype"], 8))) {
        await $.mset((await $.mv((await $.v(C, "FormVesterUnion")), "SpeedButton4")), "Visible", false);
        await $.mset((await $.v(C, "FormPaymentsCredit")), "FiledBatchs", true);
        await $.mset((await $.v(C, "FormPaymentsCredit")), "FieldBatchsArchive", false);
        await $.mset((await $.v(C, "FormVesterUnion")), "FInsert", 1);
        await $.mcall((await $.v(C, "FormVesterUnion")), "ShowModal", []);
      } else {
        if ($.truthy($.eq(L0["voptype"], 4))) {
          await $.mset((await $.mv((await $.v(C, "FormPaymentsCredit")), "Button1")), "Visible", false);
          await $.mset((await $.mv((await $.v(C, "FormNominalCustomers")), "Button1")), "Visible", false);
          await $.mset((await $.v(C, "FormPaymentsCredit")), "FiledBatchs", true);
          await $.mset((await $.v(C, "FormPaymentsCredit")), "FiledIncoming", false);
          await $.mset((await $.v(C, "FormPaymentsCredit")), "FieldBatchsArchive", false);
          await $.mset((await $.v(C, "FormPaymentsCredit")), "FiledIncomingArchive", false);
          await $.mset((await $.v(C, "FormPaymentsCredit")), "FForm", 1);
          await $.mcall((await $.v(C, "FormPaymentsCredit")), "ShowModal", []);
        } else {
          await $.mset((await $.v(C, "FormPayments")), "FiledBatchs", true);
          await $.mset((await $.v(C, "FormPayments")), "FiledIncoming", false);
          await $.mset((await $.v(C, "FormPayments")), "FieldBatchsArchive", false);
          await $.mset((await $.v(C, "FormPayments")), "FiledIncomingArchive", false);
          await $.mset((await $.v(C, "FormPayments")), "FForm", 1);
          await $.mset((await $.mv((await $.v(C, "FormPayments")), "Button1")), "Visible", false);
          await $.mcall((await $.v(C, "FormPayments")), "ShowModal", []);
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ToolButton17Click", async function ToolButton17Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ExpDataModule")), "FullOpen", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ToolButton6Click", async function ToolButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "ExpPasswordForm")), "EditPassword")), "Clear", []);
  await $.mcall((await $.v(C, "ExpPasswordForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "N20Click", async function N20Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "AdminAllForm"))]))))) {
    await $.set(C, "AdminAllForm", (await $.mcall((await $.v(C, "TAdminAllForm")), "Create", [(await $.v(C, "Application"))])));
  }
  {
    const $t3 = (await $.v(C, "ExpDataModule"));
    const $t4 = (await $.wv([$t3], "ExpBatchsDataSet", C, false));
    if ($.truthy($.eq((await $.wcall([$t3, $t4], "UpperCase", [(await $.mv((await $.wv([$t3, $t4], "Session", C, false)), "LogonUsername"))], C)), "SMART"))) {
      await $.mcall((await $.wv([$t3, $t4], "AdminAllForm", C, false)), "ShowModal", []);
    } else {
      await $.stmt((await $.wcall([$t3, $t4], "MessageDlg", ["Bu bölməyə giriş qadğandır.! Administratora müraciət edin", (await $.wv([$t3, $t4], "mtWarning", C, false)), [(await $.wv([$t3, $t4], "mbOk", C, false))], 0], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ActionCommitOutExecute", async function ActionCommitOutExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "setir": '', "clock": '', "id": 0, "status": 0, "expdate": 0, "optype": 0, "v_setid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "ExpDataModule"));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.wv([$t5], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "RecordCount")), 0))) {
      return L0.result;
    }
    await $.wset([$t5], "status", (await $.mcall((await $.wv([$t5], "Repair", C, false)), "CallIntegerFunction", ["Exp_checkstatus", [(await $.mv((await $.mcall((await $.wv([$t5], "ExpBatchsDataSet", C, false)), "fieldbyname", ["id"])), "AsInteger"))]])), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
    await $.wset([$t5], "id", (await $.mv((await $.mcall((await $.wv([$t5], "ExpBatchsDataSet", C, false)), "fieldbyname", ["id"])), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
    await $.wset([$t5], "optype", (await $.mv((await $.mcall((await $.wv([$t5], "ExpBatchsDataSet", C, false)), "fieldbyname", ["optype"])), "AsInteger")), { get: async () => L0["optype"], set: async (v) => { L0["optype"] = v; }, local: true });
    await $.wset([$t5], "v_setid", (await $.mv((await $.mcall((await $.wv([$t5], "ExpBatchsDataSet", C, false)), "fieldbyname", ["setid"])), "AsInteger")), { get: async () => L0["v_setid"], set: async (v) => { L0["v_setid"] = v; }, local: true });
    if ($.truthy($.eq((await $.wv([$t5], "status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), 1))) {
      await $.mcall((await $.wv([$t5], "ExpBatchsDataSet", C, false)), "Refresh", []);
      return L0.result;
    }
    try {
      if ($.truthy($.eq((await $.wv([$t5], "status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), 0))) {
        { const $t7 = (await $.wv([$t5], "optype", { get: async () => L0["optype"], set: async (v) => { L0["optype"] = v; }, local: true }, false));
          if ($.eq($t7, 1)) {
            await $.stmt((await $.mcall((await $.wv([$t5], "repair", C, false)), "CallProcedure", ["Exp_batchs_Transactions", [(await $.wv([$t5], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))]])));
          }
          else if ($.eq($t7, 2) || $.eq($t7, 3) || $.eq($t7, 5) || $.eq($t7, 6)) {
            await $.stmt((await $.mcall((await $.wv([$t5], "repair", C, false)), "CallProcedure", ["Exp_GPayKomiks_SendTrans", [(await $.wv([$t5], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), (await $.wv([$t5], "v_setid", { get: async () => L0["v_setid"], set: async (v) => { L0["v_setid"] = v; }, local: true }, false))]])));
          }
          else if ($.eq($t7, 7)) {
            await $.stmt((await $.mcall((await $.wv([$t5], "repair", C, false)), "CallProcedure", ["Exp_Consolidation_SendTrans", [(await $.wv([$t5], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), (await $.wv([$t5], "v_setid", { get: async () => L0["v_setid"], set: async (v) => { L0["v_setid"] = v; }, local: true }, false))]])));
          }
          else if ($.eq($t7, 8)) {
            await $.stmt((await $.mcall((await $.wv([$t5], "repair", C, false)), "CallProcedure", ["Exp_vester_Transactions", [(await $.wv([$t5], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))]])));
          }
          else if ($.eq($t7, 4)) {
            await $.stmt((await $.mcall((await $.wv([$t5], "repair", C, false)), "CallProcedure", ["Exp_Payments_Transactions", [(await $.wv([$t5], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))]])));
          }
        }
      }
      await $.stmt((await $.mcall((await $.wv([$t5], "EXPESSPAC", C, false)), "CallProcedure", ["Exp_batchs_status", ["v_id", (await $.wv([$t5], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))]])));
      await $.mcall((await $.mv((await $.wv([$t5], "sboapiDataModule", C, false)), "SBSession")), "Commit", []);
    } catch ($t6) {
      $.rethrowControl($t6);
      if ($.excIs($t6, "Exception")) {
        L0["e"] = $.exc($t6);
        await $.wset([$t5], "setir", (await $.mv((await $.wv([$t5], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), { get: async () => L0["setir"], set: async (v) => { L0["setir"] = v; }, local: true });
        await $.mcall((await $.mv((await $.wv([$t5], "sboapiDataModule", C, false)), "SBSession")), "Rollback", []);
        await $.stmt((await $.wcall([$t5], "ShowMessage", [(await $.wv([$t5], "setir", { get: async () => L0["setir"], set: async (v) => { L0["setir"] = v; }, local: true }, false))], C)));
      }
      else { throw $t6; }
    }
    await $.mcall((await $.wv([$t5], "ExpBatchsDataSet", C, false)), "Refresh", []);
    await $.stmt((await $.mcall((await $.wv([$t5], "ExpBatchsDataSet", C, false)), "Locate", ["ID", (await $.wv([$t5], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), []])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "N6Click", async function N6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ActionEditOut")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ActionDeleteOutExecute", async function ActionDeleteOutExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.v(C, "ExpDataModule"));
    const $t9 = (await $.wv([$t8], "ExpBatchsDataSet", C, false));
    const $t10 = (await $.wv([$t8, $t9], "EXPESSPAC", C, false));
    if ($.truthy($.eq((await $.wv([$t8, $t9, $t10], "recordcount", C, false)), 0))) {
      return L0.result;
    }
    if ($.truthy(($.eq((await $.mv((await $.wcall([$t8, $t9, $t10], "Fieldbyname", ["status"], C)), "Asinteger")), 0)))) {
      { const $t11 = (await $.wcall([$t8, $t9, $t10], "Messagedlg", ["Əməliyyatın silinməsinə əminsinizmi?", (await $.wv([$t8, $t9, $t10], "mtConfirmation", C, false)), [(await $.wv([$t8, $t9, $t10], "mbYes", C, false)), (await $.wv([$t8, $t9, $t10], "mbNo", C, false))], 0], C));
        if ($.eq($t11, (await $.wv([$t8, $t9, $t10], "mrYes", C, false)))) {
          await $.stmt((await $.wcall([$t8, $t9, $t10], "CallProcedure", ["Exp_batchs_delete", ["v_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t8, $t9, $t10], "ExpDataModule", C, false)), "ExpBatchsDataSet")), "Fieldbyname", ["id"])), "Asinteger"))]], C)));
        }
        else if ($.eq($t11, (await $.wv([$t8, $t9, $t10], "mrNo", C, false)))) {
          return L0.result;
        }
      }
    } else {
      if ($.truthy(($.eq((await $.wcall([$t8, $t9, $t10], "MessageDlg", ["Əməliyyatı ləğv etmək mümkün deyil.Yalniz əməliyyatı geri qaytaradan sonra silə bilersiz!", (await $.wv([$t8, $t9, $t10], "mtWarning", C, false)), [(await $.wv([$t8, $t9, $t10], "mbYes", C, false))], 0], C)), (await $.wv([$t8, $t9, $t10], "mrYes", C, false)))))) {
        return L0.result;
      }
    }
    await $.stmt($.wcall([$t8, $t9, $t10], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ActionEditInExecute", async function ActionEditInExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_expid": 0, "v_optype": 0, "id": 0, "v_status": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingDataSet")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.mset((await $.mv((await $.v(C, "ExpFormNew")), "Button1")), "Visible", true);
  L0["v_expid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingDataSet")), "FieldByName", ["expid"])), "AsInteger"));
  L0["v_status"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingDataSet")), "FieldByName", ["status"])), "AsInteger"));
  if ($.truthy((await $.or_(($.eq(L0["v_expid"], 2)), async () => ($.eq(L0["v_status"], 1)))))) {
    return L0.result;
  }
  if ($.truthy($.eq(L0["v_status"], 0))) {
    await $.mset((await $.v(C, "ExpFormNew")), "FiledIncoming", true);
    await $.mset((await $.v(C, "ExpFormNew")), "FiledBatchs", false);
    await $.mset((await $.v(C, "ExpFormNew")), "FieldBatchsArchive", false);
    await $.mset((await $.v(C, "ExpFormNew")), "FiledIncomingArchive", false);
    await $.mset((await $.v(C, "ExpFormNew")), "FForm", 3);
    await $.mcall((await $.v(C, "ExpFormNew")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ActionEditOutExecute", async function ActionEditOutExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_expid": 0, "v_optype": 0, "fnumber": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["v_expid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSet")), "FieldByName", ["expid"])), "AsInteger"));
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSet")), "FieldByName", ["status"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSet")), "FieldByName", ["status"])), "AsInteger")), 3)))))) {
    return L0.result;
  }
  { const $t12 = L0["v_expid"];
    if ($.eq($t12, 1)) {
      await $.mset((await $.mv((await $.v(C, "ExpFormNew")), "PageControl1")), "ActivePageIndex", 0);
      await $.mset((await $.v(C, "ExpFormNew")), "FiledBatchs", true);
      await $.mset((await $.v(C, "ExpFormNew")), "FiledIncoming", false);
      await $.mset((await $.v(C, "ExpFormNew")), "FieldBatchsArchive", false);
      await $.mset((await $.v(C, "ExpFormNew")), "FiledIncomingArchive", false);
      await $.mset((await $.v(C, "ExpFormNew")), "FForm", 1);
      await $.mset((await $.mv((await $.v(C, "ExpFormNew")), "Button1")), "Visible", true);
      await $.mcall((await $.v(C, "ExpFormNew")), "ShowModal", []);
    }
    else if ($.eq($t12, 2)) {
      await $.mset((await $.v(C, "FormPayments")), "FForm", 1);
      L0["v_optype"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSet")), "FieldByName", ["optype"])), "AsInteger"));
      if ($.truthy($.eq(L0["v_optype"], 8))) {
        await $.mset((await $.v(C, "FormVesterUnion")), "FInsert", 1);
        await $.mset((await $.mv((await $.v(C, "FormVesterUnion")), "SpeedButton4")), "Visible", true);
        await $.mset((await $.v(C, "FormPaymentsCredit")), "FiledBatchs", true);
        await $.mset((await $.v(C, "FormPaymentsCredit")), "FieldBatchsArchive", false);
        await $.mcall((await $.v(C, "FormVesterUnion")), "ShowModal", []);
      } else {
        if ($.truthy($.eq(L0["v_optype"], 4))) {
          await $.mset((await $.v(C, "FormPaymentsCredit")), "FForm", 1);
          await $.mset((await $.v(C, "FormPaymentsCredit")), "FiledBatchs", true);
          await $.mset((await $.v(C, "FormPaymentsCredit")), "FiledIncoming", false);
          await $.mset((await $.v(C, "FormPaymentsCredit")), "FieldBatchsArchive", false);
          await $.mset((await $.v(C, "FormPaymentsCredit")), "FiledIncomingArchive", false);
          await $.mset((await $.mv((await $.v(C, "FormPaymentsCredit")), "Button1")), "Visible", true);
          await $.mcall((await $.v(C, "FormPaymentsCredit")), "ShowModal", []);
        } else {
          await $.mset((await $.v(C, "FormPayments")), "FiledBatchs", true);
          await $.mset((await $.v(C, "FormPayments")), "FiledIncoming", false);
          await $.mset((await $.v(C, "FormPayments")), "FieldBatchsArchive", false);
          await $.mset((await $.v(C, "FormPayments")), "FiledIncomingArchive", false);
          await $.mset((await $.mv((await $.v(C, "FormPayments")), "Button1")), "Visible", true);
          await $.mcall((await $.v(C, "FormPayments")), "ShowModal", []);
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ActionLookInArchiveExecute", async function ActionLookInArchiveExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_expid": 0, "voptype": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingarchiveDataSet")), "RecordCount")), 0))) {
    return L0.result;
  }
  L0["v_expid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingarchiveDataSet")), "FieldByName", ["expid"])), "AsInteger"));
  L0["voptype"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingarchiveDataSet")), "FieldByName", ["optype"])), "asinteger"));
  { const $t13 = L0["v_expid"];
    if ($.eq($t13, 1)) {
      await $.mset((await $.mv((await $.v(C, "ExpFormNew")), "PageControl1")), "ActivePageIndex", 1);
      await $.mset((await $.v(C, "ExpFormNew")), "FiledBatchs", false);
      await $.mset((await $.v(C, "ExpFormNew")), "FiledIncoming", false);
      await $.mset((await $.v(C, "ExpFormNew")), "FieldBatchsArchive", false);
      await $.mset((await $.v(C, "ExpFormNew")), "FiledIncomingArchive", true);
      await $.mset((await $.v(C, "ExpFormNew")), "FForm", 3);
      await $.mset((await $.mv((await $.v(C, "ExpFormNew")), "Button1")), "Visible", false);
      await $.mset((await $.mv((await $.v(C, "ExpFormNew")), "Button3")), "Visible", false);
      await $.mcall((await $.v(C, "ExpFormNew")), "ShowModal", []);
    }
    else if ($.eq($t13, 2)) {
      if ($.truthy($.eq(L0["voptype"], 4))) {
        await $.mset((await $.mv((await $.v(C, "FormPaymentsCredit")), "Button1")), "Visible", false);
        await $.mset((await $.mv((await $.v(C, "FormNominalCustomers")), "Button1")), "Visible", false);
        await $.mset((await $.v(C, "FormPaymentsCredit")), "FiledBatchs", false);
        await $.mset((await $.v(C, "FormPaymentsCredit")), "FiledIncoming", false);
        await $.mset((await $.v(C, "FormPaymentsCredit")), "FieldBatchsArchive", false);
        await $.mset((await $.v(C, "FormPaymentsCredit")), "FiledIncomingArchive", true);
        await $.mset((await $.v(C, "FormPaymentsCredit")), "FForm", 1);
        await $.mcall((await $.v(C, "FormPaymentsCredit")), "ShowModal", []);
      } else {
        await $.mset((await $.v(C, "FormPayments")), "FiledBatchs", false);
        await $.mset((await $.v(C, "FormPayments")), "FiledIncoming", false);
        await $.mset((await $.v(C, "FormPayments")), "FieldBatchsArchive", false);
        await $.mset((await $.v(C, "FormPayments")), "FiledIncomingArchive", true);
        await $.mset((await $.v(C, "FormPayments")), "FForm", 1);
        await $.mset((await $.mv((await $.v(C, "FormPayments")), "Button1")), "Visible", false);
        await $.mcall((await $.v(C, "FormPayments")), "ShowModal", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ActionLookInExecute", async function ActionLookInExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_expid": 0, "voptype": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingDataSet")), "RecordCount")), 0))) {
    return L0.result;
  }
  L0["v_expid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingDataSet")), "FieldByName", ["expid"])), "AsInteger"));
  L0["voptype"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingDataSet")), "FieldByName", ["optype"])), "asinteger"));
  { const $t14 = L0["v_expid"];
    if ($.eq($t14, 1)) {
      await $.mset((await $.mv((await $.v(C, "ExpFormNew")), "PageControl1")), "ActivePageIndex", 1);
      await $.mset((await $.v(C, "ExpFormNew")), "FiledIncoming", true);
      await $.mset((await $.v(C, "ExpFormNew")), "FiledBatchs", false);
      await $.mset((await $.v(C, "ExpFormNew")), "FieldBatchsArchive", false);
      await $.mset((await $.v(C, "ExpFormNew")), "FiledIncomingArchive", false);
      await $.mset((await $.v(C, "ExpFormNew")), "FForm", 3);
      await $.mset((await $.mv((await $.v(C, "ExpFormNew")), "Button1")), "Visible", false);
      await $.mset((await $.mv((await $.v(C, "ExpFormNew")), "Button3")), "Visible", false);
      await $.mcall((await $.v(C, "ExpFormNew")), "ShowModal", []);
    }
    else if ($.eq($t14, 2)) {
      if ($.truthy($.eq(L0["voptype"], 4))) {
        await $.mset((await $.mv((await $.v(C, "FormPaymentsCredit")), "Button1")), "Visible", false);
        await $.mset((await $.mv((await $.v(C, "FormNominalCustomers")), "Button1")), "Visible", false);
        await $.mset((await $.v(C, "FormPaymentsCredit")), "FiledIncoming", true);
        await $.mset((await $.v(C, "FormPaymentsCredit")), "FiledBatchs", false);
        await $.mset((await $.v(C, "FormPaymentsCredit")), "FieldBatchsArchive", false);
        await $.mset((await $.v(C, "FormPaymentsCredit")), "FiledIncomingArchive", false);
        await $.mset((await $.v(C, "FormPaymentsCredit")), "FForm", 1);
        await $.mcall((await $.v(C, "FormPaymentsCredit")), "ShowModal", []);
      } else {
        await $.mset((await $.v(C, "FormPayments")), "FiledIncoming", true);
        await $.mset((await $.v(C, "FormPayments")), "FiledBatchs", false);
        await $.mset((await $.v(C, "FormPayments")), "FieldBatchsArchive", false);
        await $.mset((await $.v(C, "FormPayments")), "FiledIncomingArchive", false);
        await $.mset((await $.v(C, "FormPayments")), "FForm", 1);
        await $.mset((await $.mv((await $.v(C, "FormPayments")), "Button1")), "Visible", false);
        await $.mcall((await $.v(C, "FormPayments")), "ShowModal", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ActionLookOutArchiveExecute", async function ActionLookOutArchiveExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_expid": 0, "voptype": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["v_expid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsArchiveDataSet")), "FieldByName", ["expid"])), "AsInteger"));
  L0["voptype"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsArchiveDataSet")), "FieldByName", ["optype"])), "asinteger"));
  { const $t15 = L0["v_expid"];
    if ($.eq($t15, 1)) {
      await $.mset((await $.mv((await $.v(C, "ExpFormNew")), "PageControl1")), "ActivePageIndex", 0);
      await $.mset((await $.v(C, "ExpFormNew")), "FiledBatchs", false);
      await $.mset((await $.v(C, "ExpFormNew")), "FiledIncoming", false);
      await $.mset((await $.v(C, "ExpFormNew")), "FieldBatchsArchive", true);
      await $.mset((await $.v(C, "ExpFormNew")), "FiledIncomingArchive", false);
      await $.mset((await $.v(C, "ExpFormNew")), "FForm", 1);
      await $.mset((await $.mv((await $.v(C, "ExpFormNew")), "Button1")), "Visible", false);
      await $.mcall((await $.v(C, "ExpFormNew")), "ShowModal", []);
    }
    else if ($.eq($t15, 2)) {
      if ($.truthy($.eq(L0["voptype"], 4))) {
        await $.mset((await $.mv((await $.v(C, "FormPaymentsCredit")), "Button1")), "Visible", false);
        await $.mset((await $.mv((await $.v(C, "FormNominalCustomers")), "Button1")), "Visible", false);
        await $.mset((await $.v(C, "FormPaymentsCredit")), "FiledBatchs", false);
        await $.mset((await $.v(C, "FormPaymentsCredit")), "FiledIncoming", false);
        await $.mset((await $.v(C, "FormPaymentsCredit")), "FieldBatchsArchive", true);
        await $.mset((await $.v(C, "FormPaymentsCredit")), "FiledIncomingArchive", false);
        await $.mset((await $.v(C, "FormPaymentsCredit")), "FForm", 1);
        await $.mcall((await $.v(C, "FormPaymentsCredit")), "ShowModal", []);
      } else {
        await $.mset((await $.v(C, "FormPayments")), "FiledBatchs", false);
        await $.mset((await $.v(C, "FormPayments")), "FiledIncoming", false);
        await $.mset((await $.v(C, "FormPayments")), "FieldBatchsArchive", true);
        await $.mset((await $.v(C, "FormPayments")), "FiledIncomingArchive", false);
        await $.mset((await $.v(C, "FormPayments")), "FForm", 1);
        await $.mset((await $.mv((await $.v(C, "FormPayments")), "Button1")), "Visible", false);
        await $.mcall((await $.v(C, "FormPayments")), "ShowModal", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ActionPrintIn1Execute", async function ActionPrintIn1Execute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "optype": 0, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["optype"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingDataSet")), "FieldByName", ["optype"])), "AsInteger"));
  L0["s"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingDataSet")), "FieldByName", ["kliid"])), "Asstring"));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel38")), "Caption", (await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingDataSetFILIALNAME")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel39")), "Caption", (await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingDataSetSENDDATE")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel40")), "Caption", (await $.call(C, "TimeToStr", [(await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingDataSetSENDDATETIME")), "AsDateTime"))])));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel12")), "Caption", (await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingDataSetFILIALNAME")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel13")), "Caption", (await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingDataSetSENDDATE")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel14")), "Caption", (await $.call(C, "TimeToStr", [(await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingDataSetSENDDATETIME")), "AsDateTime"))])));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel64")), "Caption", (await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingDataSetFILIALNAME")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel65")), "Caption", (await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingDataSetSENDDATE")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel66")), "Caption", (await $.call(C, "TimeToStr", [(await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingDataSetSENDDATETIME")), "AsDateTime"))])));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel42")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["inn"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel16")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["inn"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel68")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["inn"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel43")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["adress"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel17")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["adress"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel69")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["adress"])), "AsString")));
  if ($.truthy($.eq(L0["optype"], 4))) {
    {
      const $t16 = (await $.v(C, "ExpDataModule"));
      await $.mcall((await $.wv([$t16], "SendDataSet", C, false)), "close", []);
      { const $t17 = await $.iset((await $.mv((await $.wv([$t16], "SendDataSet", C, false)), "SQL")), [1], ""); if ($t17 !== undefined) { await $.mset((await $.wv([$t16], "SendDataSet", C, false)), "SQL", $t17); } }
      { const $t18 = await $.iset((await $.mv((await $.wv([$t16], "SendDataSet", C, false)), "SQL")), [1], $.add("where id= ", (await $.wv([$t16], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)))); if ($t18 !== undefined) { await $.mset((await $.wv([$t16], "SendDataSet", C, false)), "SQL", $t18); } }
      await $.mcall((await $.wv([$t16], "SendDataSet", C, false)), "open", []);
      await $.mcall((await $.wv([$t16], "AccDataSet", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t16], "AccDataSet", C, false)), "SetVariable", ["id", (await $.mv((await $.wv([$t16], "ExpIncomingDataSetKREDITACCID", C, false)), "AsInteger"))])));
      await $.mcall((await $.wv([$t16], "AccDataSet", C, false)), "Open", []);
      await $.mcall((await $.wv([$t16], "ValyutaDataSet", C, false)), "Close", []);
      await $.mset((await $.wv([$t16], "ValyutaDataSet", C, false)), "Filtered", (await $.wv([$t16], "False", C, false)));
      await $.mset((await $.wv([$t16], "ValyutaDataSet", C, false)), "filter", $.add("valute=", (await $.mv((await $.wv([$t16], "ExpIncomingDataSetVAL_COD", C, false)), "AsString"))));
      await $.mset((await $.wv([$t16], "ValyutaDataSet", C, false)), "Filtered", (await $.wv([$t16], "True", C, false)));
      await $.mcall((await $.wv([$t16], "ValyutaDataSet", C, false)), "Open", []);
      await $.mset((await $.mv((await $.wv([$t16], "CreditReport", C, false)), "QRLabel28")), "Caption", $.add($.add($.add($.add($.add($.add($.add((await $.mv((await $.mcall((await $.wv([$t16], "ExpIncomingDataSet", C, false)), "FieldByName", ["sentname"])), "AsString")), "\r\n"), (await $.mv((await $.mcall((await $.wv([$t16], "SendDataSet", C, false)), "FieldByName", ["passer"])), "AsString"))), (await $.mv((await $.mcall((await $.wv([$t16], "SendDataSet", C, false)), "FieldByName", ["paspnum"])), "AsString"))), ","), (await $.mv((await $.mcall((await $.wv([$t16], "SendDataSet", C, false)), "FieldByName", ["paspdate"])), "AsString"))), ","), (await $.mv((await $.mcall((await $.wv([$t16], "SendDataSet", C, false)), "FieldByName", ["paspplace"])), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t16], "CreditReport", C, false)), "QRLabel30")), "Caption", (await $.mv((await $.wv([$t16], "ExpIncomingDataSetSENTTONAME", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t16], "CreditReport", C, false)), "QRLabel49")), "Caption", (await $.mv((await $.wv([$t16], "ExpIncomingDataSetBFILIALNAME", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t16], "CreditReport", C, false)), "QRLabel50")), "Caption", $.add($.add($.add((await $.mv((await $.wv([$t16], "ExpIncomingDataSetAMOUNT", C, false)), "AsString")), ".00"), " "), (await $.mv((await $.wv([$t16], "ExpIncomingDataSetVALNAME", C, false)), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t16], "CreditReport", C, false)), "QRLabel33")), "Caption", (await $.mv((await $.mcall((await $.wv([$t16], "AccDataSet", C, false)), "FieldByName", ["acc_no"])), "AsString")));
      await $.mset((await $.mv((await $.wv([$t16], "CreditReport", C, false)), "QRLabel51")), "Caption", (await $.mcall((await $.wv([$t16], "ExpFormNew", C, false)), "Mani", [(await $.mv((await $.wv([$t16], "ExpIncomingDataSetAMOUNT", C, false)), "AsFloat"))])));
      await $.mset((await $.mv((await $.wv([$t16], "CreditReport", C, false)), "QRLabel52")), "Caption", (await $.mv((await $.wv([$t16], "ExpIncomingDataSetREMIT_INF", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t16], "CreditReport", C, false)), "QRLabel2")), "Caption", $.add($.add($.add($.add($.add($.add($.add((await $.mv((await $.mcall((await $.wv([$t16], "ExpIncomingDataSet", C, false)), "FieldByName", ["sentname"])), "AsString")), "\r\n"), (await $.mv((await $.mcall((await $.wv([$t16], "SendDataSet", C, false)), "FieldByName", ["passer"])), "AsString"))), (await $.mv((await $.mcall((await $.wv([$t16], "SendDataSet", C, false)), "FieldByName", ["paspnum"])), "AsString"))), ","), (await $.mv((await $.mcall((await $.wv([$t16], "SendDataSet", C, false)), "FieldByName", ["paspdate"])), "AsString"))), ","), (await $.mv((await $.mcall((await $.wv([$t16], "SendDataSet", C, false)), "FieldByName", ["paspplace"])), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t16], "CreditReport", C, false)), "QRLabel4")), "Caption", (await $.mv((await $.wv([$t16], "ExpIncomingDataSetSENTTONAME", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t16], "CreditReport", C, false)), "QRLabel23")), "Caption", (await $.mv((await $.wv([$t16], "ExpIncomingDataSetBFILIALNAME", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t16], "CreditReport", C, false)), "QRLabel24")), "Caption", $.add($.add($.add((await $.mv((await $.wv([$t16], "ExpIncomingDataSetAMOUNT", C, false)), "AsString")), ".00"), " "), (await $.mv((await $.wv([$t16], "ExpIncomingDataSetVALNAME", C, false)), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t16], "CreditReport", C, false)), "QRLabel7")), "Caption", (await $.mv((await $.mcall((await $.wv([$t16], "AccDataSet", C, false)), "FieldByName", ["acc_no"])), "AsString")));
      await $.mset((await $.mv((await $.wv([$t16], "CreditReport", C, false)), "QRLabel25")), "Caption", (await $.mcall((await $.wv([$t16], "ExpFormNew", C, false)), "Mani", [(await $.mv((await $.wv([$t16], "ExpIncomingDataSetAMOUNT", C, false)), "AsFloat"))])));
      await $.mset((await $.mv((await $.wv([$t16], "CreditReport", C, false)), "QRLabel26")), "Caption", (await $.mv((await $.wv([$t16], "ExpIncomingDataSetREMIT_INF", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t16], "CreditReport", C, false)), "QRLabel54")), "Caption", $.add($.add($.add($.add($.add($.add($.add((await $.mv((await $.mcall((await $.wv([$t16], "ExpIncomingDataSet", C, false)), "FieldByName", ["sentname"])), "AsString")), "\r\n"), (await $.mv((await $.mcall((await $.wv([$t16], "SendDataSet", C, false)), "FieldByName", ["passer"])), "AsString"))), (await $.mv((await $.mcall((await $.wv([$t16], "SendDataSet", C, false)), "FieldByName", ["paspnum"])), "AsString"))), ","), (await $.mv((await $.mcall((await $.wv([$t16], "SendDataSet", C, false)), "FieldByName", ["paspdate"])), "AsString"))), ","), (await $.mv((await $.mcall((await $.wv([$t16], "SendDataSet", C, false)), "FieldByName", ["paspplace"])), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t16], "CreditReport", C, false)), "QRLabel56")), "Caption", (await $.mv((await $.wv([$t16], "ExpIncomingDataSetSENTTONAME", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t16], "CreditReport", C, false)), "QRLabel75")), "Caption", (await $.mv((await $.wv([$t16], "ExpIncomingDataSetBFILIALNAME", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t16], "CreditReport", C, false)), "QRLabel76")), "Caption", $.add($.add($.add((await $.mv((await $.wv([$t16], "ExpIncomingDataSetAMOUNT", C, false)), "AsString")), ".00"), " "), (await $.mv((await $.wv([$t16], "ExpIncomingDataSetVALNAME", C, false)), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t16], "CreditReport", C, false)), "QRLabel59")), "Caption", (await $.mv((await $.mcall((await $.wv([$t16], "AccDataSet", C, false)), "FieldByName", ["acc_no"])), "AsString")));
      await $.mset((await $.mv((await $.wv([$t16], "CreditReport", C, false)), "QRLabel77")), "Caption", (await $.mcall((await $.wv([$t16], "ExpFormNew", C, false)), "Mani", [(await $.mv((await $.wv([$t16], "ExpIncomingDataSetAMOUNT", C, false)), "AsFloat"))])));
      await $.mset((await $.mv((await $.wv([$t16], "CreditReport", C, false)), "QRLabel78")), "Caption", (await $.mv((await $.wv([$t16], "ExpIncomingDataSetREMIT_INF", C, false)), "AsString")));
      await $.mcall((await $.wv([$t16], "CreditReport", C, false)), "Preview", []);
    }
  } else {
    return L0.result;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ActionPrintInArchive1Execute", async function ActionPrintInArchive1Execute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "optype": 0, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["optype"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingarchiveDataSet")), "FieldByName", ["optype"])), "AsInteger"));
  L0["s"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingarchiveDataSet")), "FieldByName", ["kliid"])), "Asstring"));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel38")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingarchiveDataSet")), "FieldByName", ["FILIALNAME"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel39")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingarchiveDataSet")), "FieldByName", ["SENDDATE"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel40")), "Caption", (await $.call(C, "TimeToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingarchiveDataSet")), "FieldByName", ["SENDDATETIME"])), "AsDateTime"))])));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel12")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingarchiveDataSet")), "FieldByName", ["FILIALNAME"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel13")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingarchiveDataSet")), "FieldByName", ["SENDDATE"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel14")), "Caption", (await $.call(C, "TimeToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingarchiveDataSet")), "FieldByName", ["SENDDATETIME"])), "AsDateTime"))])));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel64")), "Caption", (await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingDataSetFILIALNAME")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel65")), "Caption", (await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingDataSetSENDDATE")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel66")), "Caption", (await $.call(C, "TimeToStr", [(await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingDataSetSENDDATETIME")), "AsDateTime"))])));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel42")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["inn"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel16")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["inn"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel68")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["inn"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel43")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["adress"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel17")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["adress"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel69")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["adress"])), "AsString")));
  if ($.truthy($.eq(L0["optype"], 4))) {
    {
      const $t19 = (await $.v(C, "ExpDataModule"));
      await $.mcall((await $.wv([$t19], "SendDataSet", C, false)), "close", []);
      { const $t20 = await $.iset((await $.mv((await $.wv([$t19], "SendDataSet", C, false)), "SQL")), [1], ""); if ($t20 !== undefined) { await $.mset((await $.wv([$t19], "SendDataSet", C, false)), "SQL", $t20); } }
      { const $t21 = await $.iset((await $.mv((await $.wv([$t19], "SendDataSet", C, false)), "SQL")), [1], $.add("where id= ", (await $.wv([$t19], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)))); if ($t21 !== undefined) { await $.mset((await $.wv([$t19], "SendDataSet", C, false)), "SQL", $t21); } }
      await $.mcall((await $.wv([$t19], "SendDataSet", C, false)), "open", []);
      await $.mcall((await $.wv([$t19], "AccDataSet", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t19], "AccDataSet", C, false)), "SetVariable", ["id", (await $.mv((await $.mcall((await $.wv([$t19], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["KREDITACCID"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t19], "AccDataSet", C, false)), "Open", []);
      await $.mcall((await $.wv([$t19], "ValyutaDataSet", C, false)), "Close", []);
      await $.mset((await $.wv([$t19], "ValyutaDataSet", C, false)), "Filtered", (await $.wv([$t19], "False", C, false)));
      await $.mset((await $.wv([$t19], "ValyutaDataSet", C, false)), "filter", $.add("valute=", (await $.mv((await $.mcall((await $.wv([$t19], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["VAL_COD"])), "AsString"))));
      await $.mset((await $.wv([$t19], "ValyutaDataSet", C, false)), "Filtered", (await $.wv([$t19], "True", C, false)));
      await $.mcall((await $.wv([$t19], "ValyutaDataSet", C, false)), "Open", []);
      await $.mset((await $.mv((await $.wv([$t19], "CreditReport", C, false)), "QRLabel28")), "Caption", $.add($.add($.add($.add($.add($.add($.add((await $.mv((await $.mcall((await $.wv([$t19], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["sentname"])), "AsString")), "\r\n"), (await $.mv((await $.mcall((await $.wv([$t19], "SendDataSet", C, false)), "FieldByName", ["passer"])), "AsString"))), (await $.mv((await $.mcall((await $.wv([$t19], "SendDataSet", C, false)), "FieldByName", ["paspnum"])), "AsString"))), ","), (await $.mv((await $.mcall((await $.wv([$t19], "SendDataSet", C, false)), "FieldByName", ["paspdate"])), "AsString"))), ","), (await $.mv((await $.mcall((await $.wv([$t19], "SendDataSet", C, false)), "FieldByName", ["paspplace"])), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t19], "CreditReport", C, false)), "QRLabel30")), "Caption", (await $.mv((await $.mcall((await $.wv([$t19], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["SENTTONAME"])), "AsString")));
      await $.mset((await $.mv((await $.wv([$t19], "CreditReport", C, false)), "QRLabel49")), "Caption", (await $.mv((await $.mcall((await $.wv([$t19], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["BFILIALNAME"])), "AsString")));
      await $.mset((await $.mv((await $.wv([$t19], "CreditReport", C, false)), "QRLabel50")), "Caption", $.add($.add($.add((await $.mv((await $.mcall((await $.wv([$t19], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["AMOUNT"])), "AsString")), ".00"), " "), (await $.mv((await $.mcall((await $.wv([$t19], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["VALNAME"])), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t19], "CreditReport", C, false)), "QRLabel33")), "Caption", (await $.mv((await $.mcall((await $.wv([$t19], "AccDataSet", C, false)), "FieldByName", ["acc_no"])), "AsString")));
      await $.mset((await $.mv((await $.wv([$t19], "CreditReport", C, false)), "QRLabel51")), "Caption", (await $.mcall((await $.wv([$t19], "ExpFormNew", C, false)), "Mani", [(await $.mv((await $.mcall((await $.wv([$t19], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["AMOUNT"])), "AsFloat"))])));
      await $.mset((await $.mv((await $.wv([$t19], "CreditReport", C, false)), "QRLabel52")), "Caption", (await $.mv((await $.mcall((await $.wv([$t19], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["REMIT_INF"])), "AsString")));
      await $.mset((await $.mv((await $.wv([$t19], "CreditReport", C, false)), "QRLabel2")), "Caption", $.add($.add($.add($.add($.add($.add($.add((await $.mv((await $.mcall((await $.wv([$t19], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["sentname"])), "AsString")), "\r\n"), (await $.mv((await $.mcall((await $.wv([$t19], "SendDataSet", C, false)), "FieldByName", ["passer"])), "AsString"))), (await $.mv((await $.mcall((await $.wv([$t19], "SendDataSet", C, false)), "FieldByName", ["paspnum"])), "AsString"))), ","), (await $.mv((await $.mcall((await $.wv([$t19], "SendDataSet", C, false)), "FieldByName", ["paspdate"])), "AsString"))), ","), (await $.mv((await $.mcall((await $.wv([$t19], "SendDataSet", C, false)), "FieldByName", ["paspplace"])), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t19], "CreditReport", C, false)), "QRLabel4")), "Caption", (await $.mv((await $.mcall((await $.wv([$t19], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["SENTTONAME"])), "AsString")));
      await $.mset((await $.mv((await $.wv([$t19], "CreditReport", C, false)), "QRLabel23")), "Caption", (await $.mv((await $.mcall((await $.wv([$t19], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["BFILIALNAME"])), "AsString")));
      await $.mset((await $.mv((await $.wv([$t19], "CreditReport", C, false)), "QRLabel24")), "Caption", $.add($.add($.add((await $.mv((await $.mcall((await $.wv([$t19], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["AMOUNT"])), "AsString")), ".00"), " "), (await $.mv((await $.mcall((await $.wv([$t19], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["VALNAME"])), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t19], "CreditReport", C, false)), "QRLabel7")), "Caption", (await $.mv((await $.mcall((await $.wv([$t19], "AccDataSet", C, false)), "FieldByName", ["acc_no"])), "AsString")));
      await $.mset((await $.mv((await $.wv([$t19], "CreditReport", C, false)), "QRLabel25")), "Caption", (await $.mcall((await $.wv([$t19], "ExpFormNew", C, false)), "Mani", [(await $.mv((await $.mcall((await $.wv([$t19], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["AMOUNT"])), "AsFloat"))])));
      await $.mset((await $.mv((await $.wv([$t19], "CreditReport", C, false)), "QRLabel26")), "Caption", (await $.mv((await $.mcall((await $.wv([$t19], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["REMIT_INF"])), "AsString")));
      await $.mset((await $.mv((await $.wv([$t19], "CreditReport", C, false)), "QRLabel54")), "Caption", $.add($.add($.add($.add($.add($.add($.add((await $.mv((await $.mcall((await $.wv([$t19], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["sentname"])), "AsString")), "\r\n"), (await $.mv((await $.mcall((await $.wv([$t19], "SendDataSet", C, false)), "FieldByName", ["passer"])), "AsString"))), (await $.mv((await $.mcall((await $.wv([$t19], "SendDataSet", C, false)), "FieldByName", ["paspnum"])), "AsString"))), ","), (await $.mv((await $.mcall((await $.wv([$t19], "SendDataSet", C, false)), "FieldByName", ["paspdate"])), "AsString"))), ","), (await $.mv((await $.mcall((await $.wv([$t19], "SendDataSet", C, false)), "FieldByName", ["paspplace"])), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t19], "CreditReport", C, false)), "QRLabel56")), "Caption", (await $.mv((await $.mcall((await $.wv([$t19], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["SENTTONAME"])), "AsString")));
      await $.mset((await $.mv((await $.wv([$t19], "CreditReport", C, false)), "QRLabel75")), "Caption", (await $.mv((await $.mcall((await $.wv([$t19], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["BFILIALNAME"])), "AsString")));
      await $.mset((await $.mv((await $.wv([$t19], "CreditReport", C, false)), "QRLabel76")), "Caption", $.add($.add($.add((await $.mv((await $.mcall((await $.wv([$t19], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["AMOUNT"])), "AsString")), ".00"), " "), (await $.mv((await $.mcall((await $.wv([$t19], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["VALNAME"])), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t19], "CreditReport", C, false)), "QRLabel59")), "Caption", (await $.mv((await $.mcall((await $.wv([$t19], "AccDataSet", C, false)), "FieldByName", ["acc_no"])), "AsString")));
      await $.mset((await $.mv((await $.wv([$t19], "CreditReport", C, false)), "QRLabel77")), "Caption", (await $.mcall((await $.wv([$t19], "ExpFormNew", C, false)), "Mani", [(await $.mv((await $.mcall((await $.wv([$t19], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["AMOUNT"])), "AsFloat"))])));
      await $.mset((await $.mv((await $.wv([$t19], "CreditReport", C, false)), "QRLabel78")), "Caption", (await $.mv((await $.mcall((await $.wv([$t19], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["REMIT_INF"])), "AsString")));
      await $.mcall((await $.wv([$t19], "CreditReport", C, false)), "Preview", []);
    }
  } else {
    return L0.result;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ActionPrintInArchiveExecute", async function ActionPrintInArchiveExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "skomission": '', "s": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingarchiveDataSet")), "FieldByName", ["optype"])), "AsInteger")), 1))) {
    return L0.result;
  }
  L0["skomission"] = "";
  {
    const $t22 = (await $.v(C, "ExpDataModule"));
    const $t23 = (await $.wv([$t22], "SendDataSet", C, false));
    await $.stmt($.wcall([$t22, $t23], "Close", [], C));
    { const $t24 = await $.iset((await $.wv([$t22, $t23], "SQl", C, false)), [1], ""); if ($t24 !== undefined) { await $.wset([$t22, $t23], "SQl", $t24, C); } }
    { const $t25 = await $.iset((await $.wv([$t22, $t23], "SQl", C, false)), [1], $.add("where id=", (await $.mv((await $.mcall((await $.wv([$t22, $t23], "ExpIncomingarchiveDataSet", C, false)), "fieldbyname", ["kliid"])), "AsString")))); if ($t25 !== undefined) { await $.wset([$t22, $t23], "SQl", $t25, C); } }
    await $.stmt($.wcall([$t22, $t23], "Open", [], C));
  }
  {
    const $t26 = (await $.v(C, "ExpDataModule"));
    const $t27 = (await $.wv([$t26], "SendToDataSet", C, false));
    await $.stmt($.wcall([$t26, $t27], "Close", [], C));
    { const $t28 = await $.iset((await $.wv([$t26, $t27], "SQl", C, false)), [1], ""); if ($t28 !== undefined) { await $.wset([$t26, $t27], "SQl", $t28, C); } }
    { const $t29 = await $.iset((await $.wv([$t26, $t27], "SQl", C, false)), [1], $.add("where id=", (await $.mv((await $.mcall((await $.wv([$t26, $t27], "ExpIncomingarchiveDataSet", C, false)), "fieldbyname", ["bkliid"])), "AsString")))); if ($t29 !== undefined) { await $.wset([$t26, $t27], "SQl", $t29, C); } }
    await $.stmt($.wcall([$t26, $t27], "Open", [], C));
  }
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "QuickReportXOrder"))]))))) {
    await $.set(C, "QuickReportXOrder", (await $.mcall((await $.v(C, "TQuickReportXOrder")), "Create", [(await $.v(C, "APPLICATION"))])));
  }
  {
    const $t30 = (await $.v(C, "QuickReportXOrder"));
    const $t31 = (await $.wv([$t30], "ExpDataModule", C, false));
    await $.mset((await $.wv([$t30, $t31], "QRFilVoin", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t30, $t31], "BankInfoDataSet", C, false)), "FieldByName", ["inn"])), "AsString")));
    await $.mset((await $.wv([$t30, $t31], "QRFilialName", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t30, $t31], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["BFILIALNAME"])), "AsString")));
    await $.mset((await $.wv([$t30, $t31], "QRFilAdress", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t30, $t31], "BankInfoDataSet", C, false)), "FieldByName", ["adress"])), "AsString")));
    await $.mset((await $.wv([$t30, $t31], "QRDate", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t30, $t31], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["recdatetime"])), "AsString")));
    await $.mset((await $.wv([$t30, $t31], "QRPassword", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t30, $t31], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["PASSWORD"])), "AsString")));
    await $.mset((await $.wv([$t30, $t31], "QRSentname", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t30, $t31], "SendDataSet", C, false)), "FieldByName", ["custname"])), "AsString")));
    await $.mset((await $.wv([$t30, $t31], "QRSentname1", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t30, $t31], "SendToDataSet", C, false)), "FieldByName", ["custname"])), "AsString")));
    await $.mset((await $.wv([$t30, $t31], "QRSerial", C, false)), "Caption", $.add((await $.mv((await $.mcall((await $.wv([$t30, $t31], "SendDataSet", C, false)), "FieldByName", ["passer"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t30, $t31], "SendDataSet", C, false)), "FieldByName", ["paspnum"])), "AsString"))));
    await $.mset((await $.wv([$t30, $t31], "QRPaspdate", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t30, $t31], "SendDataSet", C, false)), "FieldByName", ["paspdate"])), "AsString")));
    await $.mset((await $.wv([$t30, $t31], "QRPaspplace", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t30, $t31], "SendDataSet", C, false)), "FieldByName", ["paspplace"])), "AsString")));
    await $.mset((await $.wv([$t30, $t31], "QRPhoneM", C, false)), "Caption", $.add($.add((await $.mv((await $.mcall((await $.wv([$t30, $t31], "SendDataSet", C, false)), "FieldByName", ["phone_m"])), "AsString")), " "), (await $.mv((await $.mcall((await $.wv([$t30, $t31], "SendDataSet", C, false)), "FieldByName", ["phone_h"])), "AsString"))));
    await $.mset((await $.wv([$t30, $t31], "QRFilialName1", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t30, $t31], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["FILIALNAME"])), "AsString")));
    await $.mset((await $.wv([$t30, $t31], "QRAmount", C, false)), "Caption", $.add($.add((await $.mv((await $.mcall((await $.wv([$t30, $t31], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["AMOUNT"])), "AsString")), " "), (await $.mv((await $.mcall((await $.wv([$t30, $t31], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["VALNAME"])), "AsString"))));
    await $.wset([$t30, $t31], "S", (await $.mv((await $.mcall((await $.wv([$t30, $t31], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["AMOUNT"])), "AsFloat")), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
    await $.mset((await $.wv([$t30, $t31], "QRAmount1", C, false)), "Caption", $.add((await $.wcall([$t30, $t31], "FloatToStr", [(await $.wv([$t30, $t31], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C)), (await $.mcall((await $.wv([$t30, $t31], "ExpFormNew", C, false)), "mani", [(await $.wcall([$t30, $t31], "FloatToStr", [(await $.wv([$t30, $t31], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C))]))));
    await $.mset((await $.wv([$t30, $t31], "QRDesciption", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t30, $t31], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["REMIT_INF"])), "AsString")));
    await $.mset((await $.wv([$t30, $t31], "QRFilVoin1", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t30, $t31], "BankInfoDataSet", C, false)), "FieldByName", ["inn"])), "AsString")));
    await $.mset((await $.wv([$t30, $t31], "QRFilialName2", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t30, $t31], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["BFILIALNAME"])), "AsString")));
    await $.mset((await $.wv([$t30, $t31], "QRFilAdress1", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t30, $t31], "BankInfoDataSet", C, false)), "FieldByName", ["adress"])), "AsString")));
    await $.mset((await $.wv([$t30, $t31], "QRDate1", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t30, $t31], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["recdatetime"])), "AsString")));
    await $.mset((await $.wv([$t30, $t31], "QRPassword1", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t30, $t31], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["PASSWORD"])), "AsString")));
    await $.mset((await $.wv([$t30, $t31], "Sentname2", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t30, $t31], "SendDataSet", C, false)), "FieldByName", ["custname"])), "AsString")));
    await $.mset((await $.wv([$t30, $t31], "Sentname3", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t30, $t31], "SendToDataSet", C, false)), "FieldByName", ["custname"])), "AsString")));
    await $.mset((await $.wv([$t30, $t31], "QRSerial1", C, false)), "Caption", $.add((await $.mv((await $.mcall((await $.wv([$t30, $t31], "SendDataSet", C, false)), "FieldByName", ["passer"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t30, $t31], "SendDataSet", C, false)), "FieldByName", ["paspnum"])), "AsString"))));
    await $.mset((await $.wv([$t30, $t31], "QRPaspdate1", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t30, $t31], "SendDataSet", C, false)), "FieldByName", ["paspdate"])), "AsString")));
    await $.mset((await $.wv([$t30, $t31], "QRPaspplace1", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t30, $t31], "SendDataSet", C, false)), "FieldByName", ["paspplace"])), "AsString")));
    await $.mset((await $.wv([$t30, $t31], "QRPhoneM1", C, false)), "Caption", $.add($.add((await $.mv((await $.mcall((await $.wv([$t30, $t31], "SendDataSet", C, false)), "FieldByName", ["phone_m"])), "AsString")), " "), (await $.mv((await $.mcall((await $.wv([$t30, $t31], "SendDataSet", C, false)), "FieldByName", ["phone_h"])), "AsString"))));
    await $.mset((await $.wv([$t30, $t31], "QRFilialName3", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t30, $t31], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["FILIALNAME"])), "AsString")));
    await $.mset((await $.wv([$t30, $t31], "QRAmount2", C, false)), "Caption", $.add($.add((await $.mv((await $.mcall((await $.wv([$t30, $t31], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["AMOUNT"])), "AsString")), " "), (await $.mv((await $.mcall((await $.wv([$t30, $t31], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["VALNAME"])), "AsString"))));
    await $.wset([$t30, $t31], "S", (await $.mv((await $.mcall((await $.wv([$t30, $t31], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["AMOUNT"])), "AsFloat")), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
    await $.mset((await $.wv([$t30, $t31], "QRAmount3", C, false)), "Caption", $.add((await $.wcall([$t30, $t31], "FloatToStr", [(await $.wv([$t30, $t31], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C)), (await $.mcall((await $.wv([$t30, $t31], "ExpFormNew", C, false)), "mani", [(await $.wcall([$t30, $t31], "FloatToStr", [(await $.wv([$t30, $t31], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C))]))));
    await $.mset((await $.wv([$t30, $t31], "QRDesciption1", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t30, $t31], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["REMIT_INF"])), "AsString")));
    await $.stmt($.wcall([$t30, $t31], "Preview", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ActionPrintInExecute", async function ActionPrintInExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "skomission": '', "s": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingDataSet")), "FieldByName", ["optype"])), "AsInteger")), 1))) {
    return L0.result;
  }
  L0["skomission"] = "";
  {
    const $t32 = (await $.v(C, "ExpDataModule"));
    const $t33 = (await $.wv([$t32], "SendDataSet", C, false));
    await $.stmt($.wcall([$t32, $t33], "Close", [], C));
    { const $t34 = await $.iset((await $.wv([$t32, $t33], "SQl", C, false)), [1], ""); if ($t34 !== undefined) { await $.wset([$t32, $t33], "SQl", $t34, C); } }
    { const $t35 = await $.iset((await $.wv([$t32, $t33], "SQl", C, false)), [1], $.add("where id=", (await $.mv((await $.mcall((await $.wv([$t32, $t33], "ExpIncomingDataSet", C, false)), "fieldbyname", ["kliid"])), "AsString")))); if ($t35 !== undefined) { await $.wset([$t32, $t33], "SQl", $t35, C); } }
    await $.stmt($.wcall([$t32, $t33], "Open", [], C));
  }
  {
    const $t36 = (await $.v(C, "ExpDataModule"));
    const $t37 = (await $.wv([$t36], "SendToDataSet", C, false));
    await $.stmt($.wcall([$t36, $t37], "Close", [], C));
    { const $t38 = await $.iset((await $.wv([$t36, $t37], "SQl", C, false)), [1], ""); if ($t38 !== undefined) { await $.wset([$t36, $t37], "SQl", $t38, C); } }
    { const $t39 = await $.iset((await $.wv([$t36, $t37], "SQl", C, false)), [1], $.add("where id=", (await $.mv((await $.mcall((await $.wv([$t36, $t37], "ExpIncomingDataSet", C, false)), "fieldbyname", ["bkliid"])), "AsString")))); if ($t39 !== undefined) { await $.wset([$t36, $t37], "SQl", $t39, C); } }
    await $.stmt($.wcall([$t36, $t37], "Open", [], C));
  }
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "QuickReportXOrder"))]))))) {
    await $.set(C, "QuickReportXOrder", (await $.mcall((await $.v(C, "TQuickReportXOrder")), "Create", [(await $.v(C, "APPLICATION"))])));
  }
  {
    const $t40 = (await $.v(C, "QuickReportXOrder"));
    const $t41 = (await $.wv([$t40], "ExpDataModule", C, false));
    await $.mset((await $.wv([$t40, $t41], "QRFilVoin", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t40, $t41], "BankInfoDataSet", C, false)), "FieldByName", ["inn"])), "AsString")));
    await $.mset((await $.wv([$t40, $t41], "QRFilialName", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t40, $t41], "ExpIncomingDataSet", C, false)), "FieldByName", ["BFILIALNAME"])), "AsString")));
    await $.mset((await $.wv([$t40, $t41], "QRFilAdress", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t40, $t41], "BankInfoDataSet", C, false)), "FieldByName", ["adress"])), "AsString")));
    await $.mset((await $.wv([$t40, $t41], "QRDate", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t40, $t41], "ExpIncomingDataSet", C, false)), "FieldByName", ["recdatetime"])), "AsString")));
    await $.mset((await $.wv([$t40, $t41], "QRPassword", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t40, $t41], "ExpIncomingDataSet", C, false)), "FieldByName", ["PASSWORD"])), "AsString")));
    await $.mset((await $.wv([$t40, $t41], "QRSentname", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t40, $t41], "SendDataSet", C, false)), "FieldByName", ["custname"])), "AsString")));
    await $.mset((await $.wv([$t40, $t41], "QRSentname1", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t40, $t41], "SendToDataSet", C, false)), "FieldByName", ["custname"])), "AsString")));
    await $.mset((await $.wv([$t40, $t41], "QRSerial", C, false)), "Caption", $.add((await $.mv((await $.mcall((await $.wv([$t40, $t41], "SendDataSet", C, false)), "FieldByName", ["passer"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t40, $t41], "SendDataSet", C, false)), "FieldByName", ["paspnum"])), "AsString"))));
    await $.mset((await $.wv([$t40, $t41], "QRPaspdate", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t40, $t41], "SendDataSet", C, false)), "FieldByName", ["paspdate"])), "AsString")));
    await $.mset((await $.wv([$t40, $t41], "QRPaspplace", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t40, $t41], "SendDataSet", C, false)), "FieldByName", ["paspplace"])), "AsString")));
    await $.mset((await $.wv([$t40, $t41], "QRPhoneM", C, false)), "Caption", $.add($.add((await $.mv((await $.mcall((await $.wv([$t40, $t41], "SendDataSet", C, false)), "FieldByName", ["phone_m"])), "AsString")), " "), (await $.mv((await $.mcall((await $.wv([$t40, $t41], "SendDataSet", C, false)), "FieldByName", ["phone_h"])), "AsString"))));
    await $.mset((await $.wv([$t40, $t41], "QRFilialName1", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t40, $t41], "ExpIncomingDataSet", C, false)), "FieldByName", ["FILIALNAME"])), "AsString")));
    await $.mset((await $.wv([$t40, $t41], "QRAmount", C, false)), "Caption", $.add($.add((await $.mv((await $.mcall((await $.wv([$t40, $t41], "ExpIncomingDataSet", C, false)), "FieldByName", ["AMOUNT"])), "AsString")), " "), (await $.mv((await $.mcall((await $.wv([$t40, $t41], "ExpIncomingDataSet", C, false)), "FieldByName", ["VALNAME"])), "AsString"))));
    await $.wset([$t40, $t41], "S", (await $.mv((await $.mcall((await $.wv([$t40, $t41], "ExpIncomingDataSet", C, false)), "FieldByName", ["AMOUNT"])), "AsFloat")), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
    await $.mset((await $.wv([$t40, $t41], "QRAmount1", C, false)), "Caption", $.add((await $.wcall([$t40, $t41], "FloatToStr", [(await $.wv([$t40, $t41], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C)), (await $.mcall((await $.wv([$t40, $t41], "ExpFormNew", C, false)), "mani", [(await $.wcall([$t40, $t41], "FloatToStr", [(await $.wv([$t40, $t41], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C))]))));
    await $.mset((await $.wv([$t40, $t41], "QRDesciption", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t40, $t41], "ExpIncomingDataSet", C, false)), "FieldByName", ["REMIT_INF"])), "AsString")));
    await $.mset((await $.wv([$t40, $t41], "QRFilVoin1", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t40, $t41], "BankInfoDataSet", C, false)), "FieldByName", ["inn"])), "AsString")));
    await $.mset((await $.wv([$t40, $t41], "QRFilialName2", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t40, $t41], "ExpIncomingDataSet", C, false)), "FieldByName", ["BFILIALNAME"])), "AsString")));
    await $.mset((await $.wv([$t40, $t41], "QRFilAdress1", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t40, $t41], "BankInfoDataSet", C, false)), "FieldByName", ["adress"])), "AsString")));
    await $.mset((await $.wv([$t40, $t41], "QRDate1", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t40, $t41], "ExpIncomingDataSet", C, false)), "FieldByName", ["recdatetime"])), "AsString")));
    await $.mset((await $.wv([$t40, $t41], "QRPassword1", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t40, $t41], "ExpIncomingDataSet", C, false)), "FieldByName", ["PASSWORD"])), "AsString")));
    await $.mset((await $.wv([$t40, $t41], "Sentname2", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t40, $t41], "SendDataSet", C, false)), "FieldByName", ["custname"])), "AsString")));
    await $.mset((await $.wv([$t40, $t41], "Sentname3", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t40, $t41], "SendToDataSet", C, false)), "FieldByName", ["custname"])), "AsString")));
    await $.mset((await $.wv([$t40, $t41], "QRSerial1", C, false)), "Caption", $.add((await $.mv((await $.mcall((await $.wv([$t40, $t41], "SendDataSet", C, false)), "FieldByName", ["passer"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t40, $t41], "SendDataSet", C, false)), "FieldByName", ["paspnum"])), "AsString"))));
    await $.mset((await $.wv([$t40, $t41], "QRPaspdate1", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t40, $t41], "SendDataSet", C, false)), "FieldByName", ["paspdate"])), "AsString")));
    await $.mset((await $.wv([$t40, $t41], "QRPaspplace1", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t40, $t41], "SendDataSet", C, false)), "FieldByName", ["paspplace"])), "AsString")));
    await $.mset((await $.wv([$t40, $t41], "QRPhoneM1", C, false)), "Caption", $.add($.add((await $.mv((await $.mcall((await $.wv([$t40, $t41], "SendDataSet", C, false)), "FieldByName", ["phone_m"])), "AsString")), " "), (await $.mv((await $.mcall((await $.wv([$t40, $t41], "SendDataSet", C, false)), "FieldByName", ["phone_h"])), "AsString"))));
    await $.mset((await $.wv([$t40, $t41], "QRFilialName3", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t40, $t41], "ExpIncomingDataSet", C, false)), "FieldByName", ["FILIALNAME"])), "AsString")));
    await $.mset((await $.wv([$t40, $t41], "QRAmount2", C, false)), "Caption", $.add($.add((await $.mv((await $.mcall((await $.wv([$t40, $t41], "ExpIncomingDataSet", C, false)), "FieldByName", ["AMOUNT"])), "AsString")), " "), (await $.mv((await $.mcall((await $.wv([$t40, $t41], "ExpIncomingDataSet", C, false)), "FieldByName", ["VALNAME"])), "AsString"))));
    await $.wset([$t40, $t41], "S", (await $.mv((await $.mcall((await $.wv([$t40, $t41], "ExpIncomingDataSet", C, false)), "FieldByName", ["AMOUNT"])), "AsFloat")), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
    await $.mset((await $.wv([$t40, $t41], "QRAmount3", C, false)), "Caption", $.add((await $.wcall([$t40, $t41], "FloatToStr", [(await $.wv([$t40, $t41], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C)), (await $.mcall((await $.wv([$t40, $t41], "ExpFormNew", C, false)), "mani", [(await $.wcall([$t40, $t41], "FloatToStr", [(await $.wv([$t40, $t41], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C))]))));
    await $.mset((await $.wv([$t40, $t41], "QRDesciption1", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t40, $t41], "ExpIncomingDataSet", C, false)), "FieldByName", ["REMIT_INF"])), "AsString")));
    await $.stmt($.wcall([$t40, $t41], "Preview", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ActionPrintOutArchiveExecute", async function ActionPrintOutArchiveExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "skomission": '', "s": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsArchiveDataSet")), "FieldByName", ["optype"])), "AsInteger")), 1))) {
    return L0.result;
  }
  L0["skomission"] = "";
  {
    const $t42 = (await $.v(C, "ExpDataModule"));
    const $t43 = (await $.wv([$t42], "SendDataSet", C, false));
    await $.stmt($.wcall([$t42, $t43], "Close", [], C));
    { const $t44 = await $.iset((await $.wv([$t42, $t43], "SQl", C, false)), [1], ""); if ($t44 !== undefined) { await $.wset([$t42, $t43], "SQl", $t44, C); } }
    { const $t45 = await $.iset((await $.wv([$t42, $t43], "SQl", C, false)), [1], $.add("where id=", (await $.mv((await $.mcall((await $.wv([$t42, $t43], "ExpBatchsArchiveDataSet", C, false)), "fieldbyname", ["kliid"])), "AsString")))); if ($t45 !== undefined) { await $.wset([$t42, $t43], "SQl", $t45, C); } }
    await $.stmt($.wcall([$t42, $t43], "Open", [], C));
  }
  {
    const $t46 = (await $.v(C, "ExpDataModule"));
    const $t47 = (await $.wv([$t46], "SendToDataSet", C, false));
    await $.stmt($.wcall([$t46, $t47], "Close", [], C));
    { const $t48 = await $.iset((await $.wv([$t46, $t47], "SQl", C, false)), [1], ""); if ($t48 !== undefined) { await $.wset([$t46, $t47], "SQl", $t48, C); } }
    { const $t49 = await $.iset((await $.wv([$t46, $t47], "SQl", C, false)), [1], $.add("where id=", (await $.mv((await $.mcall((await $.wv([$t46, $t47], "ExpBatchsArchiveDataSet", C, false)), "fieldbyname", ["bkliid"])), "AsString")))); if ($t49 !== undefined) { await $.wset([$t46, $t47], "SQl", $t49, C); } }
    await $.stmt($.wcall([$t46, $t47], "Open", [], C));
  }
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "QReportOrder"))]))))) {
    await $.set(C, "QReportOrder", (await $.mcall((await $.v(C, "TQReportOrder")), "Create", [(await $.v(C, "APPLICATION"))])));
  }
  {
    const $t50 = (await $.v(C, "QReportOrder"));
    const $t51 = (await $.wv([$t50], "ExpDataModule", C, false));
    await $.mset((await $.wv([$t50, $t51], "QRFilVoin", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t50, $t51], "BankInfoDataSet", C, false)), "FieldByName", ["inn"])), "AsString")));
    await $.mset((await $.wv([$t50, $t51], "QRFilialName", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t50, $t51], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["FILIALNAME"])), "AsString")));
    await $.mset((await $.wv([$t50, $t51], "QRFilAdress", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t50, $t51], "BankInfoDataSet", C, false)), "FieldByName", ["adress"])), "AsString")));
    await $.mset((await $.wv([$t50, $t51], "QRDate", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t50, $t51], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["senddatetime"])), "AsString")));
    await $.mset((await $.wv([$t50, $t51], "QRPassword", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t50, $t51], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["PASSWORD"])), "AsString")));
    await $.mset((await $.wv([$t50, $t51], "QRSentname", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t50, $t51], "SendDataSet", C, false)), "FieldByName", ["custname"])), "AsString")));
    await $.mset((await $.wv([$t50, $t51], "QRSentname1", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t50, $t51], "SendToDataSet", C, false)), "FieldByName", ["custname"])), "AsString")));
    await $.mset((await $.wv([$t50, $t51], "QRSerial", C, false)), "Caption", $.add((await $.mv((await $.mcall((await $.wv([$t50, $t51], "SendDataSet", C, false)), "FieldByName", ["passer"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t50, $t51], "SendDataSet", C, false)), "FieldByName", ["paspnum"])), "AsString"))));
    await $.mset((await $.wv([$t50, $t51], "QRPaspplace", C, false)), "Caption", $.add($.add((await $.mv((await $.mcall((await $.wv([$t50, $t51], "SendDataSet", C, false)), "FieldByName", ["paspplace"])), "AsString")), " "), (await $.mv((await $.mcall((await $.wv([$t50, $t51], "SendDataSet", C, false)), "FieldByName", ["paspdate"])), "AsString"))));
    await $.mset((await $.wv([$t50, $t51], "QRPhoneM", C, false)), "Caption", $.add($.add((await $.mv((await $.mcall((await $.wv([$t50, $t51], "SendDataSet", C, false)), "FieldByName", ["phone_m"])), "AsString")), " "), (await $.mv((await $.mcall((await $.wv([$t50, $t51], "SendDataSet", C, false)), "FieldByName", ["phone_h"])), "AsString"))));
    await $.mset((await $.wv([$t50, $t51], "QRAmount", C, false)), "Caption", $.add($.add((await $.mv((await $.mcall((await $.wv([$t50, $t51], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["AMOUNT"])), "AsString")), " "), (await $.mv((await $.mcall((await $.wv([$t50, $t51], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["VALNAME"])), "AsString"))));
    await $.wset([$t50, $t51], "Skomission", (await $.mcall((await $.wv([$t50, $t51], "Repair", C, false)), "CallFloatFunction", ["Exp_comissionoperation", [(await $.mv((await $.mcall((await $.wv([$t50, $t51], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["EXPID"])), "asinteger")), (await $.mv((await $.mcall((await $.wv([$t50, $t51], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["AMOUNT"])), "Asfloat"))]])), { get: async () => L0["skomission"], set: async (v) => { L0["skomission"] = v; }, local: true });
    await $.wset([$t50, $t51], "S", $.add((await $.mv((await $.mcall((await $.wv([$t50, $t51], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["AMOUNT"])), "AsFloat")), (await $.wcall([$t50, $t51], "StrToFloat", [(await $.wv([$t50, $t51], "Skomission", { get: async () => L0["skomission"], set: async (v) => { L0["skomission"] = v; }, local: true }, false))], C))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
    await $.mset((await $.wv([$t50, $t51], "QRKomission", C, false)), "Caption", $.add($.add((await $.wv([$t50, $t51], "Skomission", { get: async () => L0["skomission"], set: async (v) => { L0["skomission"] = v; }, local: true }, false)), " "), (await $.mv((await $.mcall((await $.wv([$t50, $t51], "ExpBatchsDataSet", C, false)), "FieldByName", ["VALNAME"])), "AsString"))));
    await $.mset((await $.wv([$t50, $t51], "QRAllAmount", C, false)), "Caption", $.add((await $.wcall([$t50, $t51], "FloatToStr", [(await $.wv([$t50, $t51], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C)), (await $.mcall((await $.wv([$t50, $t51], "ExpFormNew", C, false)), "mani", [(await $.wcall([$t50, $t51], "FloatToStr", [(await $.wv([$t50, $t51], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C))]))));
    await $.mset((await $.wv([$t50, $t51], "QRDesciption", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t50, $t51], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["REMIT_INF"])), "AsString")));
    await $.mset((await $.wv([$t50, $t51], "QRFilVoin1", C, false)), "Caption", (await $.mv((await $.wv([$t50, $t51], "QRFilVoin", C, false)), "Caption")));
    await $.mset((await $.wv([$t50, $t51], "QRFilialName1", C, false)), "Caption", (await $.mv((await $.wv([$t50, $t51], "QRFilialName", C, false)), "Caption")));
    await $.mset((await $.wv([$t50, $t51], "QRFilAdress1", C, false)), "Caption", (await $.mv((await $.wv([$t50, $t51], "QRFilAdress", C, false)), "Caption")));
    await $.mset((await $.wv([$t50, $t51], "QRDate1", C, false)), "Caption", (await $.mv((await $.wv([$t50, $t51], "QRDate", C, false)), "Caption")));
    await $.mset((await $.wv([$t50, $t51], "QRPassword1", C, false)), "Caption", (await $.mv((await $.wv([$t50, $t51], "QRPassword", C, false)), "Caption")));
    await $.mset((await $.wv([$t50, $t51], "QRSentname", C, false)), "Caption", (await $.mv((await $.wv([$t50, $t51], "QRSentname", C, false)), "Caption")));
    await $.mset((await $.wv([$t50, $t51], "QRSentname3", C, false)), "Caption", (await $.mv((await $.wv([$t50, $t51], "QRSentname1", C, false)), "Caption")));
    await $.mset((await $.wv([$t50, $t51], "QRSerial1", C, false)), "Caption", (await $.mv((await $.wv([$t50, $t51], "QRSerial", C, false)), "Caption")));
    await $.mset((await $.wv([$t50, $t51], "QRPaspplace1", C, false)), "Caption", (await $.mv((await $.wv([$t50, $t51], "QRPaspplace", C, false)), "Caption")));
    await $.mset((await $.wv([$t50, $t51], "QRPhoneM1", C, false)), "Caption", (await $.mv((await $.wv([$t50, $t51], "QRPhoneM", C, false)), "Caption")));
    await $.mset((await $.wv([$t50, $t51], "QRAmount1", C, false)), "Caption", (await $.mv((await $.wv([$t50, $t51], "QRAmount", C, false)), "Caption")));
    await $.mset((await $.wv([$t50, $t51], "QRKomission1", C, false)), "Caption", (await $.mv((await $.wv([$t50, $t51], "QRKomission", C, false)), "Caption")));
    await $.mset((await $.wv([$t50, $t51], "QRAllAmount1", C, false)), "Caption", (await $.mv((await $.wv([$t50, $t51], "QRAllAmount", C, false)), "Caption")));
    await $.mset((await $.wv([$t50, $t51], "QRDesciption1", C, false)), "Caption", (await $.mv((await $.wv([$t50, $t51], "QRDesciption", C, false)), "Caption")));
    await $.stmt($.wcall([$t50, $t51], "Preview", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ActionPrintOutArcive1Execute", async function ActionPrintOutArcive1Execute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "optype": 0, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["optype"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsArchiveDataSet")), "FieldByName", ["optype"])), "AsInteger"));
  L0["s"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsArchiveDataSet")), "FieldByName", ["kliid"])), "Asstring"));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel38")), "Caption", (await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsArchiveDataSetFILIALNAME")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel39")), "Caption", (await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsArchiveDataSetSENDDATE")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel40")), "Caption", (await $.call(C, "TimeToStr", [(await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsArchiveDataSetSENDDATETIME")), "AsDateTime"))])));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel12")), "Caption", (await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsArchiveDataSetFILIALNAME")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel13")), "Caption", (await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsArchiveDataSetSENDDATE")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel14")), "Caption", (await $.call(C, "TimeToStr", [(await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsArchiveDataSetSENDDATETIME")), "AsDateTime"))])));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel64")), "Caption", (await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsArchiveDataSetFILIALNAME")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel65")), "Caption", (await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsArchiveDataSetSENDDATE")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel66")), "Caption", (await $.call(C, "TimeToStr", [(await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsArchiveDataSetSENDDATETIME")), "AsDateTime"))])));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel42")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["inn"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel16")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["inn"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel68")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["inn"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel43")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["adress"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel17")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["adress"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel69")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["adress"])), "AsString")));
  if ($.truthy($.eq(L0["optype"], 4))) {
    {
      const $t52 = (await $.v(C, "ExpDataModule"));
      await $.mcall((await $.wv([$t52], "SendDataSet", C, false)), "close", []);
      { const $t53 = await $.iset((await $.mv((await $.wv([$t52], "SendDataSet", C, false)), "SQL")), [1], ""); if ($t53 !== undefined) { await $.mset((await $.wv([$t52], "SendDataSet", C, false)), "SQL", $t53); } }
      { const $t54 = await $.iset((await $.mv((await $.wv([$t52], "SendDataSet", C, false)), "SQL")), [1], $.add("where id= ", (await $.wv([$t52], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)))); if ($t54 !== undefined) { await $.mset((await $.wv([$t52], "SendDataSet", C, false)), "SQL", $t54); } }
      await $.mcall((await $.wv([$t52], "SendDataSet", C, false)), "open", []);
      await $.mcall((await $.wv([$t52], "AccDataSet", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t52], "AccDataSet", C, false)), "SetVariable", ["id", (await $.mv((await $.wv([$t52], "ExpBatchsArchiveDataSetKREDITACCID", C, false)), "AsInteger"))])));
      await $.mcall((await $.wv([$t52], "AccDataSet", C, false)), "Open", []);
      await $.mcall((await $.wv([$t52], "ValyutaDataSet", C, false)), "Close", []);
      await $.mset((await $.wv([$t52], "ValyutaDataSet", C, false)), "Filtered", (await $.wv([$t52], "False", C, false)));
      await $.mset((await $.wv([$t52], "ValyutaDataSet", C, false)), "filter", $.add("valute=", (await $.mv((await $.wv([$t52], "ExpBatchsArchiveDataSetVAL_COD", C, false)), "AsString"))));
      await $.mset((await $.wv([$t52], "ValyutaDataSet", C, false)), "Filtered", (await $.wv([$t52], "True", C, false)));
      await $.mcall((await $.wv([$t52], "ValyutaDataSet", C, false)), "Open", []);
      await $.mset((await $.mv((await $.wv([$t52], "CreditReport", C, false)), "QRLabel28")), "Caption", $.add($.add($.add($.add($.add($.add($.add((await $.mv((await $.mcall((await $.wv([$t52], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["sentname"])), "AsString")), "\r\n"), (await $.mv((await $.mcall((await $.wv([$t52], "SendDataSet", C, false)), "FieldByName", ["passer"])), "AsString"))), (await $.mv((await $.mcall((await $.wv([$t52], "SendDataSet", C, false)), "FieldByName", ["paspnum"])), "AsString"))), ","), (await $.mv((await $.mcall((await $.wv([$t52], "SendDataSet", C, false)), "FieldByName", ["paspdate"])), "AsString"))), ","), (await $.mv((await $.mcall((await $.wv([$t52], "SendDataSet", C, false)), "FieldByName", ["paspplace"])), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t52], "CreditReport", C, false)), "QRLabel30")), "Caption", (await $.mv((await $.wv([$t52], "ExpBatchsArchiveDataSetSENTTONAME", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t52], "CreditReport", C, false)), "QRLabel49")), "Caption", (await $.mv((await $.wv([$t52], "ExpBatchsArchiveDataSetBFILIALNAME", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t52], "CreditReport", C, false)), "QRLabel50")), "Caption", $.add($.add($.add((await $.mv((await $.wv([$t52], "ExpBatchsArchiveDataSetAMOUNT", C, false)), "AsString")), ".00"), " "), (await $.mv((await $.wv([$t52], "ExpBatchsArchiveDataSetVALNAME", C, false)), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t52], "CreditReport", C, false)), "QRLabel33")), "Caption", (await $.mv((await $.mcall((await $.wv([$t52], "AccDataSet", C, false)), "FieldByName", ["acc_no"])), "AsString")));
      await $.mset((await $.mv((await $.wv([$t52], "CreditReport", C, false)), "QRLabel51")), "Caption", (await $.mcall((await $.wv([$t52], "ExpFormNew", C, false)), "Mani", [(await $.mv((await $.wv([$t52], "ExpBatchsArchiveDataSetAMOUNT", C, false)), "AsFloat"))])));
      await $.mset((await $.mv((await $.wv([$t52], "CreditReport", C, false)), "QRLabel52")), "Caption", (await $.mv((await $.wv([$t52], "ExpBatchsArchiveDataSetREMIT_INF", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t52], "CreditReport", C, false)), "QRLabel2")), "Caption", $.add($.add($.add($.add($.add($.add($.add((await $.mv((await $.mcall((await $.wv([$t52], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["sentname"])), "AsString")), "\r\n"), (await $.mv((await $.mcall((await $.wv([$t52], "SendDataSet", C, false)), "FieldByName", ["passer"])), "AsString"))), (await $.mv((await $.mcall((await $.wv([$t52], "SendDataSet", C, false)), "FieldByName", ["paspnum"])), "AsString"))), ","), (await $.mv((await $.mcall((await $.wv([$t52], "SendDataSet", C, false)), "FieldByName", ["paspdate"])), "AsString"))), ","), (await $.mv((await $.mcall((await $.wv([$t52], "SendDataSet", C, false)), "FieldByName", ["paspplace"])), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t52], "CreditReport", C, false)), "QRLabel4")), "Caption", (await $.mv((await $.wv([$t52], "ExpBatchsArchiveDataSetSENTTONAME", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t52], "CreditReport", C, false)), "QRLabel23")), "Caption", (await $.mv((await $.wv([$t52], "ExpBatchsArchiveDataSetBFILIALNAME", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t52], "CreditReport", C, false)), "QRLabel24")), "Caption", $.add($.add($.add((await $.mv((await $.wv([$t52], "ExpBatchsArchiveDataSetAMOUNT", C, false)), "AsString")), ".00"), " "), (await $.mv((await $.wv([$t52], "ExpBatchsArchiveDataSetVALNAME", C, false)), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t52], "CreditReport", C, false)), "QRLabel7")), "Caption", (await $.mv((await $.mcall((await $.wv([$t52], "AccDataSet", C, false)), "FieldByName", ["acc_no"])), "AsString")));
      await $.mset((await $.mv((await $.wv([$t52], "CreditReport", C, false)), "QRLabel25")), "Caption", (await $.mcall((await $.wv([$t52], "ExpFormNew", C, false)), "Mani", [(await $.mv((await $.wv([$t52], "ExpBatchsArchiveDataSetAMOUNT", C, false)), "AsFloat"))])));
      await $.mset((await $.mv((await $.wv([$t52], "CreditReport", C, false)), "QRLabel26")), "Caption", (await $.mv((await $.wv([$t52], "ExpBatchsArchiveDataSetREMIT_INF", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t52], "CreditReport", C, false)), "QRLabel54")), "Caption", $.add($.add($.add($.add($.add($.add($.add((await $.mv((await $.mcall((await $.wv([$t52], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["sentname"])), "AsString")), "\r\n"), (await $.mv((await $.mcall((await $.wv([$t52], "SendDataSet", C, false)), "FieldByName", ["passer"])), "AsString"))), (await $.mv((await $.mcall((await $.wv([$t52], "SendDataSet", C, false)), "FieldByName", ["paspnum"])), "AsString"))), ","), (await $.mv((await $.mcall((await $.wv([$t52], "SendDataSet", C, false)), "FieldByName", ["paspdate"])), "AsString"))), ","), (await $.mv((await $.mcall((await $.wv([$t52], "SendDataSet", C, false)), "FieldByName", ["paspplace"])), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t52], "CreditReport", C, false)), "QRLabel56")), "Caption", (await $.mv((await $.wv([$t52], "ExpBatchsArchiveDataSetSENTTONAME", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t52], "CreditReport", C, false)), "QRLabel75")), "Caption", (await $.mv((await $.wv([$t52], "ExpBatchsArchiveDataSetBFILIALNAME", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t52], "CreditReport", C, false)), "QRLabel76")), "Caption", $.add($.add($.add((await $.mv((await $.wv([$t52], "ExpBatchsArchiveDataSetAMOUNT", C, false)), "AsString")), ".00"), " "), (await $.mv((await $.wv([$t52], "ExpBatchsArchiveDataSetVALNAME", C, false)), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t52], "CreditReport", C, false)), "QRLabel59")), "Caption", (await $.mv((await $.mcall((await $.wv([$t52], "AccDataSet", C, false)), "FieldByName", ["acc_no"])), "AsString")));
      await $.mset((await $.mv((await $.wv([$t52], "CreditReport", C, false)), "QRLabel77")), "Caption", (await $.mcall((await $.wv([$t52], "ExpFormNew", C, false)), "Mani", [(await $.mv((await $.wv([$t52], "ExpBatchsArchiveDataSetAMOUNT", C, false)), "AsFloat"))])));
      await $.mset((await $.mv((await $.wv([$t52], "CreditReport", C, false)), "QRLabel78")), "Caption", (await $.mv((await $.wv([$t52], "ExpBatchsArchiveDataSetREMIT_INF", C, false)), "AsString")));
      await $.mcall((await $.wv([$t52], "CreditReport", C, false)), "Preview", []);
    }
  } else {
    return L0.result;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ActionRefreshInArchiveExecute", async function ActionRefreshInArchiveExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t55 = (await $.v(C, "ExpDataModule"));
    const $t56 = (await $.wv([$t55], "ExpIncomingarchiveDataSet", C, false));
    await $.stmt($.wcall([$t55, $t56], "close", [], C));
    await $.stmt((await $.wcall([$t55, $t56], "SetVariable", ["bdate", (await $.mv((await $.wv([$t55, $t56], "DTPInArchiveB", C, false)), "DateTime"))], C)));
    await $.stmt((await $.wcall([$t55, $t56], "SetVariable", ["edate", (await $.mv((await $.wv([$t55, $t56], "DTPInArchiveE", C, false)), "DateTime"))], C)));
    await $.stmt($.wcall([$t55, $t56], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ActionRefreshInExecute", async function ActionRefreshInExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ExpDataModule")), "FullOpen", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ActionRefreshOutArchiveExecute", async function ActionRefreshOutArchiveExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t57 = (await $.v(C, "ExpDataModule"));
    const $t58 = (await $.wv([$t57], "ExpBatchsArchiveDataSet", C, false));
    await $.stmt($.wcall([$t57, $t58], "close", [], C));
    await $.stmt((await $.wcall([$t57, $t58], "SetVariable", ["bdate", (await $.mv((await $.wv([$t57, $t58], "DTPOutArchiveB", C, false)), "DateTime"))], C)));
    await $.stmt((await $.wcall([$t57, $t58], "SetVariable", ["edate", (await $.mv((await $.wv([$t57, $t58], "DTPOutArchiveE", C, false)), "DateTime"))], C)));
    await $.stmt($.wcall([$t57, $t58], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ActionReturnExecute", async function ActionReturnExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "setir": '', "id": 0, "status": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t59 = (await $.v(C, "ExpDataModule"));
    await $.wset([$t59], "id", (await $.mv((await $.mcall((await $.wv([$t59], "ExpBatchsDataSet", C, false)), "fieldbyname", ["id"])), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
    await $.wset([$t59], "status", (await $.mcall((await $.wv([$t59], "Repair", C, false)), "CallIntegerFunction", ["Exp_checkstatus", [(await $.wv([$t59], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))]])), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
    if ($.truthy($.in_((await $.wv([$t59], "status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [0, 3]))) {
      return L0.result;
    }
    try {
      if ($.truthy(($.eq((await $.wv([$t59], "status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), 1)))) {
        await $.stmt((await $.mcall((await $.wv([$t59], "Repair", C, false)), "CallProcedure", ["return_trans", [(await $.wv([$t59], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))]])));
      }
      await $.mcall((await $.mv((await $.wv([$t59], "sboapiDataModule", C, false)), "SBSession")), "Commit", []);
    } catch ($t60) {
      $.rethrowControl($t60);
      if ($.excIs($t60, "Exception")) {
        L0["e"] = $.exc($t60);
        await $.wset([$t59], "setir", (await $.mv((await $.wv([$t59], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), { get: async () => L0["setir"], set: async (v) => { L0["setir"] = v; }, local: true });
        await $.mcall((await $.mv((await $.wv([$t59], "sboapiDataModule", C, false)), "SBSession")), "Rollback", []);
        await $.stmt((await $.wcall([$t59], "ShowMessage", [(await $.wv([$t59], "setir", { get: async () => L0["setir"], set: async (v) => { L0["setir"] = v; }, local: true }, false))], C)));
      }
      else { throw $t60; }
    }
    await $.mcall((await $.wv([$t59], "ExpBatchsDataSet", C, false)), "Refresh", []);
    await $.stmt((await $.mcall((await $.wv([$t59], "ExpBatchsDataSet", C, false)), "Locate", ["ID", (await $.wv([$t59], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), []])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ActionSearchInArchiveExecute", async function ActionSearchInArchiveExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingarchiveDataSet")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "FormCurrection")), "DbGr", (await $.v(C, "XDBGrid4")));
  await $.mcall((await $.v(C, "FormCurrection")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ActionSearchInExecute", async function ActionSearchInExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingDataSet")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "FormCurrection")), "DbGr", (await $.v(C, "XDBGrid2")));
  await $.mcall((await $.v(C, "FormCurrection")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ActionSearchOutArchiveExecute", async function ActionSearchOutArchiveExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsArchiveDataSet")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "FormCurrection")), "DbGr", (await $.v(C, "XDBGrid3")));
  await $.mcall((await $.v(C, "FormCurrection")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ActionTakeInExecute", async function ActionTakeInExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0, "status": 0, "optype": 0, "v_setid": 0, "setir": '', "descript": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t61 = (await $.v(C, "ExpDataModule"));
    if ($.truthy($.eq((await $.mv((await $.wv([$t61], "ExpIncomingDataSet", C, false)), "RecordCount")), 0))) {
      return L0.result;
    }
    await $.wset([$t61], "status", (await $.mcall((await $.wv([$t61], "Repair", C, false)), "CallIntegerFunction", ["Exp_checkstatusIN", [(await $.mv((await $.mcall((await $.wv([$t61], "ExpIncomingDataSet", C, false)), "fieldbyname", ["id"])), "AsInteger"))]])), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
    if ($.truthy($.eq((await $.wv([$t61], "status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), 1))) {
      await $.mcall((await $.wv([$t61], "ExpIncomingDataSet", C, false)), "Refresh", []);
      return L0.result;
    }
    await $.wset([$t61], "id", (await $.mv((await $.mcall((await $.wv([$t61], "ExpIncomingDataSet", C, false)), "FieldByName", ["id"])), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
    await $.wset([$t61], "optype", (await $.mv((await $.mcall((await $.wv([$t61], "ExpIncomingDataSet", C, false)), "FieldByName", ["optype"])), "AsInteger")), { get: async () => L0["optype"], set: async (v) => { L0["optype"] = v; }, local: true });
    await $.wset([$t61], "v_setid", (await $.mv((await $.mcall((await $.wv([$t61], "ExpIncomingDataSet", C, false)), "FieldByName", ["setid"])), "AsInteger")), { get: async () => L0["v_setid"], set: async (v) => { L0["v_setid"] = v; }, local: true });
    if ($.truthy((await $.and_(($.eq((await $.wv([$t61], "optype", { get: async () => L0["optype"], set: async (v) => { L0["optype"] = v; }, local: true }, false)), 1)), async () => ($.eq((await $.wv([$t61], "status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), 0)))))) {
      try {
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t61], "ExpDataModule", C, false)), "Repair")), "CallProcedure", ["ExpTakeTransaction", [(await $.wv([$t61], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))]])));
        await $.mcall((await $.mv((await $.wv([$t61], "sboapiDataModule", C, false)), "SBSession")), "Commit", []);
        await $.mcall((await $.wv([$t61], "ExpIncomingDataSet", C, false)), "Refresh", []);
        await $.stmt((await $.mcall((await $.wv([$t61], "ExpIncomingDataSet", C, false)), "Locate", ["ID", (await $.wv([$t61], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), []])));
      } catch ($t62) {
        $.rethrowControl($t62);
        if ($.excIs($t62, "Exception")) {
          L0["e"] = $.exc($t62);
          await $.wset([$t61], "descript", (await $.mv((await $.wv([$t61], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), { get: async () => L0["descript"], set: async (v) => { L0["descript"] = v; }, local: true });
          await $.mcall((await $.mv((await $.wv([$t61], "sboapiDataModule", C, false)), "SBSession")), "Rollback", []);
          await $.stmt((await $.wcall([$t61], "ShowMessage", [(await $.wv([$t61], "descript", { get: async () => L0["descript"], set: async (v) => { L0["descript"] = v; }, local: true }, false))], C)));
        }
        else { throw $t62; }
      }
    } else {
      await $.mset((await $.wv([$t61], "ExpFormNew", C, false)), "FForm", 2);
      if ($.truthy((await $.or_((await $.or_((await $.or_(($.eq((await $.wv([$t61], "optype", { get: async () => L0["optype"], set: async (v) => { L0["optype"] = v; }, local: true }, false)), 2)), async () => ($.eq((await $.wv([$t61], "optype", { get: async () => L0["optype"], set: async (v) => { L0["optype"] = v; }, local: true }, false)), 3)))), async () => ($.eq((await $.wv([$t61], "optype", { get: async () => L0["optype"], set: async (v) => { L0["optype"] = v; }, local: true }, false)), 5)))), async () => ($.eq((await $.wv([$t61], "optype", { get: async () => L0["optype"], set: async (v) => { L0["optype"] = v; }, local: true }, false)), 6)))))) {
        try {
          await $.stmt((await $.mcall((await $.wv([$t61], "repair", C, false)), "CallProcedure", ["Exp_GPayKomiks_TakeTrans", [(await $.wv([$t61], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), (await $.wv([$t61], "v_setid", { get: async () => L0["v_setid"], set: async (v) => { L0["v_setid"] = v; }, local: true }, false))]])));
          await $.mcall((await $.mv((await $.wv([$t61], "sboapiDataModule", C, false)), "SBSession")), "Commit", []);
        } catch ($t63) {
          $.rethrowControl($t63);
          if ($.excIs($t63, "Exception")) {
            L0["e"] = $.exc($t63);
            await $.wset([$t61], "setir", (await $.mv((await $.wv([$t61], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), { get: async () => L0["setir"], set: async (v) => { L0["setir"] = v; }, local: true });
            await $.mcall((await $.mv((await $.wv([$t61], "sboapiDataModule", C, false)), "SBSession")), "Rollback", []);
            await $.stmt((await $.wcall([$t61], "ShowMessage", [(await $.wv([$t61], "setir", { get: async () => L0["setir"], set: async (v) => { L0["setir"] = v; }, local: true }, false))], C)));
          }
          else { throw $t63; }
        }
      }
    }
    if ($.truthy($.eq((await $.wv([$t61], "optype", { get: async () => L0["optype"], set: async (v) => { L0["optype"] = v; }, local: true }, false)), 4))) {
      try {
        await $.stmt((await $.mcall((await $.wv([$t61], "repair", C, false)), "CallProcedure", ["Exp_Consolidation_TakeTrans", [(await $.wv([$t61], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))]])));
        await $.mcall((await $.mv((await $.wv([$t61], "sboapiDataModule", C, false)), "SBSession")), "Commit", []);
      } catch ($t64) {
        $.rethrowControl($t64);
        if ($.excIs($t64, "Exception")) {
          L0["e"] = $.exc($t64);
          await $.wset([$t61], "setir", (await $.mv((await $.wv([$t61], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), { get: async () => L0["setir"], set: async (v) => { L0["setir"] = v; }, local: true });
          await $.mcall((await $.mv((await $.wv([$t61], "sboapiDataModule", C, false)), "SBSession")), "Rollback", []);
          await $.stmt((await $.wcall([$t61], "ShowMessage", [(await $.wv([$t61], "setir", { get: async () => L0["setir"], set: async (v) => { L0["setir"] = v; }, local: true }, false))], C)));
        }
        else { throw $t64; }
      }
    }
    if ($.truthy($.eq((await $.wv([$t61], "optype", { get: async () => L0["optype"], set: async (v) => { L0["optype"] = v; }, local: true }, false)), 7))) {
      try {
        await $.stmt((await $.mcall((await $.wv([$t61], "repair", C, false)), "CallProcedure", ["Exp_ConsolidationTTransactions", [(await $.wv([$t61], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), (await $.wv([$t61], "v_setid", { get: async () => L0["v_setid"], set: async (v) => { L0["v_setid"] = v; }, local: true }, false))]])));
        await $.mcall((await $.mv((await $.wv([$t61], "sboapiDataModule", C, false)), "SBSession")), "Commit", []);
      } catch ($t65) {
        $.rethrowControl($t65);
        if ($.excIs($t65, "Exception")) {
          L0["e"] = $.exc($t65);
          await $.wset([$t61], "setir", (await $.mv((await $.wv([$t61], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), { get: async () => L0["setir"], set: async (v) => { L0["setir"] = v; }, local: true });
          await $.mcall((await $.mv((await $.wv([$t61], "sboapiDataModule", C, false)), "SBSession")), "Rollback", []);
          await $.stmt((await $.wcall([$t61], "ShowMessage", [(await $.wv([$t61], "setir", { get: async () => L0["setir"], set: async (v) => { L0["setir"] = v; }, local: true }, false))], C)));
        }
        else { throw $t65; }
      }
    }
    await $.mcall((await $.wv([$t61], "ExpIncomingDataSet", C, false)), "Refresh", []);
    await $.stmt((await $.mcall((await $.wv([$t61], "ExpIncomingDataSet", C, false)), "Locate", ["ID", (await $.wv([$t61], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), []])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "N8Click", async function N8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "skomission": '', "s": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSet")), "FieldByName", ["optype"])), "AsInteger")), 1))) {
    return L0.result;
  }
  L0["skomission"] = "";
  {
    const $t66 = (await $.v(C, "ExpDataModule"));
    const $t67 = (await $.wv([$t66], "SendDataSet", C, false));
    await $.stmt($.wcall([$t66, $t67], "Close", [], C));
    { const $t68 = await $.iset((await $.wv([$t66, $t67], "SQl", C, false)), [1], ""); if ($t68 !== undefined) { await $.wset([$t66, $t67], "SQl", $t68, C); } }
    { const $t69 = await $.iset((await $.wv([$t66, $t67], "SQl", C, false)), [1], $.add("where id=", (await $.mv((await $.mcall((await $.wv([$t66, $t67], "ExpBatchsDataSet", C, false)), "fieldbyname", ["kliid"])), "AsString")))); if ($t69 !== undefined) { await $.wset([$t66, $t67], "SQl", $t69, C); } }
    await $.stmt($.wcall([$t66, $t67], "Open", [], C));
  }
  {
    const $t70 = (await $.v(C, "ExpDataModule"));
    const $t71 = (await $.wv([$t70], "SendToDataSet", C, false));
    await $.stmt($.wcall([$t70, $t71], "Close", [], C));
    { const $t72 = await $.iset((await $.wv([$t70, $t71], "SQl", C, false)), [1], ""); if ($t72 !== undefined) { await $.wset([$t70, $t71], "SQl", $t72, C); } }
    { const $t73 = await $.iset((await $.wv([$t70, $t71], "SQl", C, false)), [1], $.add("where id=", (await $.mv((await $.mcall((await $.wv([$t70, $t71], "ExpBatchsDataSet", C, false)), "fieldbyname", ["bkliid"])), "AsString")))); if ($t73 !== undefined) { await $.wset([$t70, $t71], "SQl", $t73, C); } }
    await $.stmt($.wcall([$t70, $t71], "Open", [], C));
  }
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "QReportOrder"))]))))) {
    await $.set(C, "QReportOrder", (await $.mcall((await $.v(C, "TQReportOrder")), "Create", [(await $.v(C, "APPLICATION"))])));
  }
  {
    const $t74 = (await $.v(C, "QReportOrder"));
    const $t75 = (await $.wv([$t74], "ExpDataModule", C, false));
    await $.mset((await $.wv([$t74, $t75], "QRFilVoin", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t74, $t75], "BankInfoDataSet", C, false)), "FieldByName", ["inn"])), "AsString")));
    await $.mset((await $.wv([$t74, $t75], "QRFilialName", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t74, $t75], "ExpBatchsDataSet", C, false)), "FieldByName", ["FILIALNAME"])), "AsString")));
    await $.mset((await $.wv([$t74, $t75], "QRFilAdress", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t74, $t75], "BankInfoDataSet", C, false)), "FieldByName", ["adress"])), "AsString")));
    await $.mset((await $.wv([$t74, $t75], "QRDate", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t74, $t75], "ExpBatchsDataSet", C, false)), "FieldByName", ["senddatetime"])), "AsString")));
    await $.mset((await $.wv([$t74, $t75], "QRPassword", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t74, $t75], "ExpBatchsDataSet", C, false)), "FieldByName", ["PASSWORD"])), "AsString")));
    await $.mset((await $.wv([$t74, $t75], "QRSentname", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t74, $t75], "SendDataSet", C, false)), "FieldByName", ["custname"])), "AsString")));
    await $.mset((await $.wv([$t74, $t75], "QRSentname1", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t74, $t75], "SendToDataSet", C, false)), "FieldByName", ["custname"])), "AsString")));
    await $.mset((await $.wv([$t74, $t75], "QRSerial", C, false)), "Caption", $.add((await $.mv((await $.mcall((await $.wv([$t74, $t75], "SendDataSet", C, false)), "FieldByName", ["passer"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t74, $t75], "SendDataSet", C, false)), "FieldByName", ["paspnum"])), "AsString"))));
    await $.mset((await $.wv([$t74, $t75], "QRPaspplace", C, false)), "Caption", $.add($.add((await $.mv((await $.mcall((await $.wv([$t74, $t75], "SendDataSet", C, false)), "FieldByName", ["paspplace"])), "AsString")), " "), (await $.mv((await $.mcall((await $.wv([$t74, $t75], "SendDataSet", C, false)), "FieldByName", ["paspdate"])), "AsString"))));
    await $.mset((await $.wv([$t74, $t75], "QRPhoneM", C, false)), "Caption", $.add($.add((await $.mv((await $.mcall((await $.wv([$t74, $t75], "SendDataSet", C, false)), "FieldByName", ["phone_m"])), "AsString")), " "), (await $.mv((await $.mcall((await $.wv([$t74, $t75], "SendDataSet", C, false)), "FieldByName", ["phone_h"])), "AsString"))));
    await $.mset((await $.wv([$t74, $t75], "QRAmount", C, false)), "Caption", $.add($.add((await $.mv((await $.mcall((await $.wv([$t74, $t75], "ExpBatchsDataSet", C, false)), "FieldByName", ["AMOUNT"])), "AsString")), " "), (await $.mv((await $.mcall((await $.wv([$t74, $t75], "ExpBatchsDataSet", C, false)), "FieldByName", ["VALNAME"])), "AsString"))));
    await $.wset([$t74, $t75], "Skomission", (await $.mcall((await $.wv([$t74, $t75], "Repair", C, false)), "CallFloatFunction", ["Exp_comissionoperation", [(await $.mv((await $.mcall((await $.wv([$t74, $t75], "ExpBatchsDataSet", C, false)), "FieldByName", ["EXPID"])), "asinteger")), (await $.mv((await $.mcall((await $.wv([$t74, $t75], "ExpBatchsDataSet", C, false)), "FieldByName", ["AMOUNT"])), "Asfloat"))]])), { get: async () => L0["skomission"], set: async (v) => { L0["skomission"] = v; }, local: true });
    await $.wset([$t74, $t75], "S", $.add((await $.mv((await $.mcall((await $.wv([$t74, $t75], "ExpBatchsDataSet", C, false)), "FieldByName", ["AMOUNT"])), "AsFloat")), (await $.wcall([$t74, $t75], "StrToFloat", [(await $.wv([$t74, $t75], "Skomission", { get: async () => L0["skomission"], set: async (v) => { L0["skomission"] = v; }, local: true }, false))], C))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
    await $.mset((await $.wv([$t74, $t75], "QRKomission", C, false)), "Caption", $.add($.add((await $.wv([$t74, $t75], "Skomission", { get: async () => L0["skomission"], set: async (v) => { L0["skomission"] = v; }, local: true }, false)), " "), (await $.mv((await $.mcall((await $.wv([$t74, $t75], "ExpBatchsDataSet", C, false)), "FieldByName", ["VALNAME"])), "AsString"))));
    await $.mset((await $.wv([$t74, $t75], "QRAllAmount", C, false)), "Caption", $.add($.add((await $.wcall([$t74, $t75], "FloatToStr", [(await $.wv([$t74, $t75], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C)), " "), (await $.mcall((await $.wv([$t74, $t75], "ExpFormNew", C, false)), "mani", [(await $.wcall([$t74, $t75], "FloatToStr", [(await $.wv([$t74, $t75], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C))]))));
    await $.mset((await $.wv([$t74, $t75], "QRDesciption", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t74, $t75], "ExpBatchsDataSet", C, false)), "FieldByName", ["REMIT_INF"])), "AsString")));
    await $.mset((await $.wv([$t74, $t75], "QRFilVoin1", C, false)), "Caption", (await $.mv((await $.wv([$t74, $t75], "QRFilVoin", C, false)), "Caption")));
    await $.mset((await $.wv([$t74, $t75], "QRFilialName1", C, false)), "Caption", (await $.mv((await $.wv([$t74, $t75], "QRFilialName", C, false)), "Caption")));
    await $.mset((await $.wv([$t74, $t75], "QRFilAdress1", C, false)), "Caption", (await $.mv((await $.wv([$t74, $t75], "QRFilAdress", C, false)), "Caption")));
    await $.mset((await $.wv([$t74, $t75], "QRDate1", C, false)), "Caption", (await $.mv((await $.wv([$t74, $t75], "QRDate", C, false)), "Caption")));
    await $.mset((await $.wv([$t74, $t75], "QRPassword1", C, false)), "Caption", (await $.mv((await $.wv([$t74, $t75], "QRPassword", C, false)), "Caption")));
    await $.mset((await $.wv([$t74, $t75], "QRSentname", C, false)), "Caption", (await $.mv((await $.wv([$t74, $t75], "QRSentname", C, false)), "Caption")));
    await $.mset((await $.wv([$t74, $t75], "QRSentname3", C, false)), "Caption", (await $.mv((await $.wv([$t74, $t75], "QRSentname1", C, false)), "Caption")));
    await $.mset((await $.wv([$t74, $t75], "QRSerial1", C, false)), "Caption", (await $.mv((await $.wv([$t74, $t75], "QRSerial", C, false)), "Caption")));
    await $.mset((await $.wv([$t74, $t75], "QRPaspplace1", C, false)), "Caption", (await $.mv((await $.wv([$t74, $t75], "QRPaspplace", C, false)), "Caption")));
    await $.mset((await $.wv([$t74, $t75], "QRPhoneM1", C, false)), "Caption", (await $.mv((await $.wv([$t74, $t75], "QRPhoneM", C, false)), "Caption")));
    await $.mset((await $.wv([$t74, $t75], "QRAmount1", C, false)), "Caption", (await $.mv((await $.wv([$t74, $t75], "QRAmount", C, false)), "Caption")));
    await $.mset((await $.wv([$t74, $t75], "QRKomission1", C, false)), "Caption", (await $.mv((await $.wv([$t74, $t75], "QRKomission", C, false)), "Caption")));
    await $.mset((await $.wv([$t74, $t75], "QRAllAmount1", C, false)), "Caption", (await $.mv((await $.wv([$t74, $t75], "QRAllAmount", C, false)), "Caption")));
    await $.mset((await $.wv([$t74, $t75], "QRDesciption1", C, false)), "Caption", (await $.mv((await $.wv([$t74, $t75], "QRDesciption", C, false)), "Caption")));
    await $.stmt($.wcall([$t74, $t75], "Preview", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "N11Click", async function N11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t76 = (await $.v(C, "ExpDataModule"));
    const $t77 = (await $.wv([$t76], "ExpBatchsDataSet", C, false));
    if ($.truthy($.eq((await $.wcall([$t76, $t77], "UpperCase", [(await $.mv((await $.wv([$t76, $t77], "Session", C, false)), "LogonUsername"))], C)), "SMART"))) {
      await $.mset((await $.wv([$t76, $t77], "ExpParameter", C, false)), "Caption", "Müxbir Hesablar");
      await $.mcall((await $.wv([$t76, $t77], "ExpParameter", C, false)), "ShowModal", []);
    } else {
      await $.stmt((await $.wcall([$t76, $t77], "MessageDlg", ["Bu bölməyə giriş qadğandır.! Administratora müraciət edin.!", (await $.wv([$t76, $t77], "mtWarning", C, false)), [(await $.wv([$t76, $t77], "mbOk", C, false))], 0], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "N14Click", async function N14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t78 = (await $.v(C, "ExpDataModule"));
    const $t79 = (await $.wv([$t78], "ExpBatchsDataSet", C, false));
    if ($.truthy($.eq((await $.wcall([$t78, $t79], "UpperCase", [(await $.mv((await $.wv([$t78, $t79], "Session", C, false)), "LogonUsername"))], C)), "SMART"))) {
      await $.mset((await $.wv([$t78, $t79], "ExpSubForm", C, false)), "Caption", "Əməliyyat Hesabları");
      await $.mcall((await $.wv([$t78, $t79], "ExpSubForm", C, false)), "ShowModal", []);
    } else {
      await $.stmt((await $.wcall([$t78, $t79], "MessageDlg", ["Bu bölməyə giriş qadğandır.! Administratora müraciət edin.!", (await $.wv([$t78, $t79], "mtWarning", C, false)), [(await $.wv([$t78, $t79], "mbOk", C, false))], 0], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "N12Click", async function N12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t80 = (await $.v(C, "ExpDataModule"));
    const $t81 = (await $.wv([$t80], "ExpBatchsDataSet", C, false));
    if ($.truthy($.eq((await $.wcall([$t80, $t81], "UpperCase", [(await $.mv((await $.wv([$t80, $t81], "Session", C, false)), "LogonUsername"))], C)), "SMART"))) {
      await $.mset((await $.wv([$t80, $t81], "ExpComAccForm", C, false)), "Caption", "");
      await $.mcall((await $.wv([$t80, $t81], "ExpComAccForm", C, false)), "ShowModal", []);
    } else {
      await $.stmt((await $.wcall([$t80, $t81], "MessageDlg", ["Bu bölməyə giriş qadğandır.! Administratora müraciət edin.!", (await $.wv([$t80, $t81], "mtWarning", C, false)), [(await $.wv([$t80, $t81], "mbOk", C, false))], 0], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "N15Click", async function N15Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t82 = (await $.v(C, "ExpDataModule"));
    const $t83 = (await $.wv([$t82], "ExpBatchsDataSet", C, false));
    if ($.truthy($.eq((await $.wcall([$t82, $t83], "UpperCase", [(await $.mv((await $.wv([$t82, $t83], "Session", C, false)), "LogonUsername"))], C)), "SMART"))) {
      await $.mcall((await $.wv([$t82, $t83], "ExpComTransactionForm", C, false)), "ShowModal", []);
    } else {
      await $.stmt((await $.wcall([$t82, $t83], "MessageDlg", ["Bu bölməyə giriş qadğandır.! Administratora müraciət edin.!", (await $.wv([$t82, $t83], "mtWarning", C, false)), [(await $.wv([$t82, $t83], "mbOk", C, false))], 0], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ActionArchiveExecute", async function ActionArchiveExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "ExpArchiveForm")), "DateTimePicker1")), "DateTime", (await $.call(C, "trunc", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "SysdateDataSet")), "fieldbyname", ["dat"])), "AsDateTime"))])));
  await $.mset((await $.mv((await $.v(C, "ExpArchiveForm")), "DateTimePicker2")), "DateTime", (await $.call(C, "trunc", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "SysdateDataSet")), "fieldbyname", ["dat"])), "AsDateTime"))])));
  {
    const $t84 = (await $.v(C, "ExpDataModule"));
    const $t85 = (await $.wv([$t84], "ExpBatchsArchiveDataSet", C, false));
    await $.stmt($.wcall([$t84, $t85], "close", [], C));
    await $.stmt((await $.wcall([$t84, $t85], "SetVariable", ["bdate", (await $.mv((await $.mv((await $.wv([$t84, $t85], "ExpArchiveForm", C, false)), "DateTimePicker1")), "DateTime"))], C)));
    await $.stmt((await $.wcall([$t84, $t85], "SetVariable", ["edate", (await $.mv((await $.mv((await $.wv([$t84, $t85], "ExpArchiveForm", C, false)), "DateTimePicker2")), "DateTime"))], C)));
    await $.stmt($.wcall([$t84, $t85], "open", [], C));
  }
  await $.mcall((await $.v(C, "ExpArchiveForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "XDBGrid1DblClick", async function XDBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ActionEditOut")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "ShowInfo", async function ShowInfo(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"info": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["info"]);
  return L0.result;
}, {"params": ["Info"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TExpress", "N17Click", async function N17Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["rsexpcaption"] = "(Qəbul)";
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "Acceptance", async function Acceptance(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TExpress", "N10Click", async function N10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "Edit", async function Edit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TExpress", "N18Click", async function N18Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["rsexpcaption"] = "(Baxmaq)";
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "Look", async function Look(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TExpress", "GetBankInfo", async function GetBankInfo(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"bankname": $.asRef(p0), "bankinn": $.asRef(p1), result: undefined};
  {
    const $t86 = (await $.mv((await $.v(C, "ExpDataModule")), "OPCash"));
    await $.stmt((await $.wcall([$t86], "CallProcedure", ["GetBankInfo", [(await $.wv([$t86], "BankName", { get: async () => await L0["bankname"].get(), set: async (v) => { await L0["bankname"].set(v); }, local: true }, false)), (await $.wv([$t86], "BankInn", { get: async () => await L0["bankinn"].get(), set: async (v) => { await L0["bankinn"].set(v); }, local: true }, false))]], C)));
    await $.wset([$t86], "BankName", (await $.wcall([$t86], "GetParameter", [0], C)), { get: async () => await L0["bankname"].get(), set: async (v) => { await L0["bankname"].set(v); }, local: true });
    await $.wset([$t86], "BankInn", (await $.wcall([$t86], "GetParameter", [1], C)), { get: async () => await L0["bankinn"].get(), set: async (v) => { await L0["bankinn"].set(v); }, local: true });
  }
  return L0.result;
}, {"params": ["BankName", "BankInn"], "kind": "procedure", "ptypes": ["String", "String"]});
  U.method("TExpress", "MdaxilMxaric1Click", async function MdaxilMxaric1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "optype": 0, "s": '', "bankname": '', "bankinn": '', "vtranstype": 0, "daccid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["optype"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSet")), "FieldByName", ["optype"])), "AsInteger"));
  L0["s"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSet")), "FieldByName", ["kliid"])), "Asstring"));
  L0["vtranstype"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSet")), "FieldByName", ["transtype"])), "AsInteger"));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel38")), "Caption", (await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSetFILIALNAME")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel39")), "Caption", (await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSetSENDDATE")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel40")), "Caption", (await $.call(C, "TimeToStr", [(await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSetSENDDATETIME")), "AsDateTime"))])));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel12")), "Caption", (await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSetFILIALNAME")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel13")), "Caption", (await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSetSENDDATE")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel14")), "Caption", (await $.call(C, "TimeToStr", [(await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSetSENDDATETIME")), "AsDateTime"))])));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel64")), "Caption", (await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSetFILIALNAME")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel65")), "Caption", (await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSetSENDDATE")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel66")), "Caption", (await $.call(C, "TimeToStr", [(await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSetSENDDATETIME")), "AsDateTime"))])));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel42")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["inn"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel16")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["inn"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel68")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["inn"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel43")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["adress"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel17")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["adress"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel69")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["adress"])), "AsString")));
  if ($.truthy((await $.and_(($.eq(L0["optype"], 8)), async () => ((await $.or_(($.eq(L0["vtranstype"], 1)), async () => ($.eq(L0["vtranstype"], 2))))))))) {
    {
      const $t87 = (await $.v(C, "ExpDataModule"));
      await $.mcall((await $.wv([$t87], "Settings", C, false)), "Close", []);
      await $.mcall((await $.wv([$t87], "Settings", C, false)), "Open", []);
      await $.mcall((await $.wv([$t87], "CustDataSet", C, false)), "close", []);
      await $.stmt((await $.mcall((await $.wv([$t87], "CustDataSet", C, false)), "SetVariable", ["custid", (await $.mv((await $.mcall((await $.wv([$t87], "ExpBatchsDataSet", C, false)), "FieldByName", ["kliid"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t87], "CustDataSet", C, false)), "open", []);
      await $.mcall((await $.wv([$t87], "CustInfoDataSet", C, false)), "close", []);
      await $.stmt((await $.mcall((await $.wv([$t87], "CustInfoDataSet", C, false)), "SetVariable", ["custid", (await $.mv((await $.mcall((await $.wv([$t87], "ExpBatchsDataSet", C, false)), "FieldByName", ["kliid"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t87], "CustInfoDataSet", C, false)), "open", []);
      await $.mcall((await $.wv([$t87], "DocTpDataSet", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t87], "DocTpDataSet", C, false)), "SetVariable", ["vid", (await $.mv((await $.mcall((await $.wv([$t87], "CustInfoDataSet", C, false)), "FieldByName", ["doc_type"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t87], "DocTpDataSet", C, false)), "Open", []);
      await $.mcall((await $.wv([$t87], "OdsQkreport", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t87], "OdsQkreport", C, false)), "SetVariable", ["setid", (await $.mv((await $.mcall((await $.wv([$t87], "ExpBatchsDataSet", C, false)), "FieldByName", ["setid"])), "AsInteger"))])));
      await $.stmt((await $.mcall((await $.wv([$t87], "OdsQkreport", C, false)), "SetVariable", ["filial", (await $.mv((await $.wv([$t87], "ExpBatchsDataSetFILIAL", C, false)), "AsInteger"))])));
      await $.stmt((await $.mcall((await $.wv([$t87], "OdsQkreport", C, false)), "SetVariable", ["val_cod", (await $.mv((await $.wv([$t87], "ExpBatchsDataSetVAL_COD", C, false)), "AsInteger"))])));
      await $.mcall((await $.wv([$t87], "OdsQkreport", C, false)), "Open", []);
      await $.mcall((await $.wv([$t87], "ODSAccount", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t87], "ODSAccount", C, false)), "SetVariable", ["id", (await $.mv((await $.mcall((await $.wv([$t87], "OdsQkreport", C, false)), "FieldByName", ["kredet"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t87], "ODSAccount", C, false)), "Open", []);
      await $.mcall((await $.wv([$t87], "ValyutaDataSet", C, false)), "Close", []);
      await $.mset((await $.wv([$t87], "ValyutaDataSet", C, false)), "Filtered", (await $.wv([$t87], "False", C, false)));
      await $.mset((await $.wv([$t87], "ValyutaDataSet", C, false)), "filter", $.add("valute=", (await $.mv((await $.wv([$t87], "ExpBatchsDataSetVAL_COD", C, false)), "AsString"))));
      await $.mset((await $.wv([$t87], "ValyutaDataSet", C, false)), "Filtered", (await $.wv([$t87], "True", C, false)));
      await $.mcall((await $.wv([$t87], "ValyutaDataSet", C, false)), "Open", []);
      await $.stmt((await $.wcall([$t87], "GetBankInfo", [$.ref(async () => (await $.wv([$t87], "BankName", { get: async () => L0["bankname"], set: async (v) => { L0["bankname"] = v; }, local: true }, false)), async ($t88) => { await $.wset([$t87], "BankName", $t88, { get: async () => L0["bankname"], set: async (v) => { L0["bankname"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t87], "BankInn", { get: async () => L0["bankinn"], set: async (v) => { L0["bankinn"] = v; }, local: true }, false)), async ($t89) => { await $.wset([$t87], "BankInn", $t89, { get: async () => L0["bankinn"], set: async (v) => { L0["bankinn"] = v; }, local: true }); })], C)));
      await $.wset([$t87], "FormVesterPrintM", (await $.mcall((await $.wv([$t87], "TFormVesterPrintM", C, false)), "create", [Self])), C);
      await $.mset((await $.mv((await $.wv([$t87], "FormVesterPrintM", C, false)), "QRLBankName")), "Caption", (await $.wv([$t87], "BankName", { get: async () => L0["bankname"], set: async (v) => { L0["bankname"] = v; }, local: true }, false)));
      await $.mset((await $.mv((await $.wv([$t87], "FormVesterPrintM", C, false)), "QRLBankInn")), "Caption", (await $.wv([$t87], "BankInn", { get: async () => L0["bankinn"], set: async (v) => { L0["bankinn"] = v; }, local: true }, false)));
      await $.mset((await $.mv((await $.wv([$t87], "FormVesterPrintM", C, false)), "QRINN")), "Caption", (await $.wv([$t87], "BankInn", { get: async () => L0["bankinn"], set: async (v) => { L0["bankinn"] = v; }, local: true }, false)));
      await $.mset((await $.mv((await $.wv([$t87], "FormVesterPrintM", C, false)), "QRLAmmount")), "Caption", (await $.mcall((await $.wv([$t87], "ExpFormNew", C, false)), "mani", [(await $.mv((await $.wv([$t87], "ExpBatchsDataSetAMOUNT", C, false)), "AsFloat"))])));
      await $.mcall((await $.mv((await $.wv([$t87], "FormVesterPrintM", C, false)), "QuickRepVester")), "Preview", []);
    }
  }
  if ($.truthy((await $.or_((await $.or_(($.eq(L0["optype"], 4)), async () => ((await $.and_(($.eq(L0["optype"], 8)), async () => ($.eq(L0["vtranstype"], 0))))))), async () => ($.eq(L0["optype"], 7)))))) {
    {
      const $t90 = (await $.v(C, "ExpDataModule"));
      await $.mcall((await $.wv([$t90], "SendDataSet", C, false)), "close", []);
      { const $t91 = await $.iset((await $.mv((await $.wv([$t90], "SendDataSet", C, false)), "SQL")), [1], ""); if ($t91 !== undefined) { await $.mset((await $.wv([$t90], "SendDataSet", C, false)), "SQL", $t91); } }
      { const $t92 = await $.iset((await $.mv((await $.wv([$t90], "SendDataSet", C, false)), "SQL")), [1], $.add("where id= ", (await $.wv([$t90], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)))); if ($t92 !== undefined) { await $.mset((await $.wv([$t90], "SendDataSet", C, false)), "SQL", $t92); } }
      await $.mcall((await $.wv([$t90], "SendDataSet", C, false)), "open", []);
      if ($.truthy(($.eq((await $.wv([$t90], "optype", { get: async () => L0["optype"], set: async (v) => { L0["optype"] = v; }, local: true }, false)), 8)))) {
        await $.mcall((await $.wv([$t90], "OdsQkreport", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t90], "OdsQkreport", C, false)), "SetVariable", ["setid", (await $.mv((await $.mcall((await $.wv([$t90], "ExpBatchsDataSet", C, false)), "FieldByName", ["setid"])), "AsInteger"))])));
        await $.stmt((await $.mcall((await $.wv([$t90], "OdsQkreport", C, false)), "SetVariable", ["filial", (await $.mv((await $.wv([$t90], "ExpBatchsDataSetFILIAL", C, false)), "AsInteger"))])));
        await $.stmt((await $.mcall((await $.wv([$t90], "OdsQkreport", C, false)), "SetVariable", ["val_cod", (await $.mv((await $.wv([$t90], "ExpBatchsDataSetVAL_COD", C, false)), "AsInteger"))])));
        await $.mcall((await $.wv([$t90], "OdsQkreport", C, false)), "Open", []);
        await $.wset([$t90], "daccid", (await $.mv((await $.mcall((await $.wv([$t90], "OdsQkreport", C, false)), "FieldByName", ["debet"])), "AsInteger")), { get: async () => L0["daccid"], set: async (v) => { L0["daccid"] = v; }, local: true });
        if ($.truthy(($.gt((await $.mv((await $.wv([$t90], "ExpBatchsDataSetDEBETACCID", C, false)), "AsInteger")), 0)))) {
          await $.wset([$t90], "daccid", (await $.mv((await $.wv([$t90], "ExpBatchsDataSetDEBETACCID", C, false)), "AsInteger")), { get: async () => L0["daccid"], set: async (v) => { L0["daccid"] = v; }, local: true });
        }
        await $.mcall((await $.wv([$t90], "AccDataSet", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t90], "AccDataSet", C, false)), "SetVariable", ["id", (await $.wv([$t90], "daccid", { get: async () => L0["daccid"], set: async (v) => { L0["daccid"] = v; }, local: true }, false))])));
        await $.mcall((await $.wv([$t90], "AccDataSet", C, false)), "Open", []);
      } else {
        await $.mcall((await $.wv([$t90], "AccDataSet", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t90], "AccDataSet", C, false)), "SetVariable", ["id", (await $.mv((await $.wv([$t90], "ExpBatchsDataSetKREDITACCID", C, false)), "AsInteger"))])));
        await $.mcall((await $.wv([$t90], "AccDataSet", C, false)), "Open", []);
      }
      await $.mcall((await $.wv([$t90], "ValyutaDataSet", C, false)), "Close", []);
      await $.mset((await $.wv([$t90], "ValyutaDataSet", C, false)), "Filtered", (await $.wv([$t90], "False", C, false)));
      await $.mset((await $.wv([$t90], "ValyutaDataSet", C, false)), "filter", $.add("valute=", (await $.mv((await $.wv([$t90], "ExpBatchsDataSetVAL_COD", C, false)), "AsString"))));
      await $.mset((await $.wv([$t90], "ValyutaDataSet", C, false)), "Filtered", (await $.wv([$t90], "True", C, false)));
      await $.mcall((await $.wv([$t90], "ValyutaDataSet", C, false)), "Open", []);
      await $.mset((await $.mv((await $.wv([$t90], "CreditReport", C, false)), "QRLabel28")), "Caption", $.add($.add($.add($.add($.add($.add($.add((await $.mv((await $.mcall((await $.wv([$t90], "ExpBatchsDataSet", C, false)), "FieldByName", ["sentname"])), "AsString")), "\r\n"), (await $.mv((await $.mcall((await $.wv([$t90], "SendDataSet", C, false)), "FieldByName", ["passer"])), "AsString"))), (await $.mv((await $.mcall((await $.wv([$t90], "SendDataSet", C, false)), "FieldByName", ["paspnum"])), "AsString"))), ","), (await $.mv((await $.mcall((await $.wv([$t90], "SendDataSet", C, false)), "FieldByName", ["paspdate"])), "AsString"))), ","), (await $.mv((await $.mcall((await $.wv([$t90], "SendDataSet", C, false)), "FieldByName", ["paspplace"])), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t90], "CreditReport", C, false)), "QRLabel30")), "Caption", (await $.mv((await $.wv([$t90], "ExpBatchsDataSetSENTTONAME", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t90], "CreditReport", C, false)), "QRLabel49")), "Caption", (await $.mv((await $.wv([$t90], "ExpBatchsDataSetBFILIALNAME", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t90], "CreditReport", C, false)), "QRLabel50")), "Caption", $.add($.add((await $.mv((await $.wv([$t90], "ExpBatchsDataSetAMOUNT", C, false)), "AsString")), " "), (await $.mv((await $.wv([$t90], "ExpBatchsDataSetVALNAME", C, false)), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t90], "CreditReport", C, false)), "QRLabel33")), "Caption", (await $.mv((await $.mcall((await $.wv([$t90], "AccDataSet", C, false)), "FieldByName", ["acc_no"])), "AsString")));
      await $.mset((await $.mv((await $.wv([$t90], "CreditReport", C, false)), "QRLabel51")), "Caption", (await $.mcall((await $.wv([$t90], "ExpFormNew", C, false)), "Mani", [(await $.mv((await $.wv([$t90], "ExpBatchsDataSetAMOUNT", C, false)), "AsFloat"))])));
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.wv([$t90], "ExpBatchsDataSetTRANSFERS_ACCNO", C, false)), "AsInteger")), 0)), async () => ($.gt((await $.mv((await $.wv([$t90], "ExpBatchsDataSetDEBETACCID", C, false)), "AsInteger")), 0)))))) {
        await $.mset((await $.mv((await $.wv([$t90], "CreditReport", C, false)), "QRLabel52")), "Caption", $.add($.add("Cari hesaba mədaxil", "-"), (await $.mv((await $.wv([$t90], "ExpBatchsDataSetREMIT_INF", C, false)), "AsString"))));
      } else {
        await $.mset((await $.mv((await $.wv([$t90], "CreditReport", C, false)), "QRLabel52")), "Caption", (await $.mv((await $.wv([$t90], "ExpBatchsDataSetREMIT_INF", C, false)), "AsString")));
      }
      await $.mset((await $.mv((await $.wv([$t90], "CreditReport", C, false)), "QRLabel2")), "Caption", $.add($.add($.add($.add($.add($.add($.add((await $.mv((await $.mcall((await $.wv([$t90], "ExpBatchsDataSet", C, false)), "FieldByName", ["sentname"])), "AsString")), "\r\n"), (await $.mv((await $.mcall((await $.wv([$t90], "SendDataSet", C, false)), "FieldByName", ["passer"])), "AsString"))), (await $.mv((await $.mcall((await $.wv([$t90], "SendDataSet", C, false)), "FieldByName", ["paspnum"])), "AsString"))), ","), (await $.mv((await $.mcall((await $.wv([$t90], "SendDataSet", C, false)), "FieldByName", ["paspdate"])), "AsString"))), ","), (await $.mv((await $.mcall((await $.wv([$t90], "SendDataSet", C, false)), "FieldByName", ["paspplace"])), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t90], "CreditReport", C, false)), "QRLabel4")), "Caption", (await $.mv((await $.wv([$t90], "ExpBatchsDataSetSENTTONAME", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t90], "CreditReport", C, false)), "QRLabel23")), "Caption", (await $.mv((await $.wv([$t90], "ExpBatchsDataSetBFILIALNAME", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t90], "CreditReport", C, false)), "QRLabel24")), "Caption", $.add($.add((await $.mv((await $.wv([$t90], "ExpBatchsDataSetAMOUNT", C, false)), "AsString")), " "), (await $.mv((await $.wv([$t90], "ExpBatchsDataSetVALNAME", C, false)), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t90], "CreditReport", C, false)), "QRLabel7")), "Caption", (await $.mv((await $.mcall((await $.wv([$t90], "AccDataSet", C, false)), "FieldByName", ["acc_no"])), "AsString")));
      await $.mset((await $.mv((await $.wv([$t90], "CreditReport", C, false)), "QRLabel25")), "Caption", (await $.mcall((await $.wv([$t90], "ExpFormNew", C, false)), "Mani", [(await $.mv((await $.wv([$t90], "ExpBatchsDataSetAMOUNT", C, false)), "AsFloat"))])));
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.wv([$t90], "ExpBatchsDataSetTRANSFERS_ACCNO", C, false)), "AsInteger")), 0)), async () => ($.gt((await $.mv((await $.wv([$t90], "ExpBatchsDataSetDEBETACCID", C, false)), "AsInteger")), 0)))))) {
        await $.mset((await $.mv((await $.wv([$t90], "CreditReport", C, false)), "QRLabel26")), "Caption", $.add($.add("Cari hesaba mədaxil", "-"), (await $.mv((await $.wv([$t90], "ExpBatchsDataSetREMIT_INF", C, false)), "AsString"))));
      } else {
        await $.mset((await $.mv((await $.wv([$t90], "CreditReport", C, false)), "QRLabel26")), "Caption", (await $.mv((await $.wv([$t90], "ExpBatchsDataSetREMIT_INF", C, false)), "AsString")));
      }
      await $.mset((await $.mv((await $.wv([$t90], "CreditReport", C, false)), "QRLabel54")), "Caption", $.add($.add($.add($.add($.add($.add($.add((await $.mv((await $.mcall((await $.wv([$t90], "ExpBatchsDataSet", C, false)), "FieldByName", ["sentname"])), "AsString")), "\r\n"), (await $.mv((await $.mcall((await $.wv([$t90], "SendDataSet", C, false)), "FieldByName", ["passer"])), "AsString"))), (await $.mv((await $.mcall((await $.wv([$t90], "SendDataSet", C, false)), "FieldByName", ["paspnum"])), "AsString"))), ","), (await $.mv((await $.mcall((await $.wv([$t90], "SendDataSet", C, false)), "FieldByName", ["paspdate"])), "AsString"))), ","), (await $.mv((await $.mcall((await $.wv([$t90], "SendDataSet", C, false)), "FieldByName", ["paspplace"])), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t90], "CreditReport", C, false)), "QRLabel56")), "Caption", (await $.mv((await $.wv([$t90], "ExpBatchsDataSetSENTTONAME", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t90], "CreditReport", C, false)), "QRLabel75")), "Caption", (await $.mv((await $.wv([$t90], "ExpBatchsDataSetBFILIALNAME", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t90], "CreditReport", C, false)), "QRLabel76")), "Caption", $.add($.add((await $.mv((await $.wv([$t90], "ExpBatchsDataSetAMOUNT", C, false)), "AsString")), " "), (await $.mv((await $.wv([$t90], "ExpBatchsDataSetVALNAME", C, false)), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t90], "CreditReport", C, false)), "QRLabel59")), "Caption", (await $.mv((await $.mcall((await $.wv([$t90], "AccDataSet", C, false)), "FieldByName", ["acc_no"])), "AsString")));
      await $.mset((await $.mv((await $.wv([$t90], "CreditReport", C, false)), "QRLabel77")), "Caption", (await $.mcall((await $.wv([$t90], "ExpFormNew", C, false)), "Mani", [(await $.mv((await $.wv([$t90], "ExpBatchsDataSetAMOUNT", C, false)), "AsFloat"))])));
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.wv([$t90], "ExpBatchsDataSetTRANSFERS_ACCNO", C, false)), "AsInteger")), 0)), async () => ($.gt((await $.mv((await $.wv([$t90], "ExpBatchsDataSetDEBETACCID", C, false)), "AsInteger")), 0)))))) {
        await $.mset((await $.mv((await $.wv([$t90], "CreditReport", C, false)), "QRLabel78")), "Caption", $.add($.add("Cari hesaba mədaxil", "-"), (await $.mv((await $.wv([$t90], "ExpBatchsDataSetREMIT_INF", C, false)), "AsString"))));
      } else {
        await $.mset((await $.mv((await $.wv([$t90], "CreditReport", C, false)), "QRLabel78")), "Caption", (await $.mv((await $.wv([$t90], "ExpBatchsDataSetREMIT_INF", C, false)), "AsString")));
      }
      await $.mcall((await $.wv([$t90], "CreditReport", C, false)), "Preview", []);
    }
  } else {
    return L0.result;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "mumisazlama1Click", async function mumisazlama1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t93 = (await $.v(C, "ExpDataModule"));
    const $t94 = (await $.wv([$t93], "ExpBatchsDataSet", C, false));
    if ($.truthy($.eq((await $.wcall([$t93, $t94], "UpperCase", [(await $.mv((await $.wv([$t93, $t94], "Session", C, false)), "LogonUsername"))], C)), "SMART"))) {
      await $.mcall((await $.wv([$t93, $t94], "ExpAllParametr", C, false)), "ShowModal", []);
    } else {
      await $.stmt((await $.wcall([$t93, $t94], "MessageDlg", ["Bu bölməyə giriş qadğandır.! Administratora müraciət edin.!", (await $.wv([$t93, $t94], "mtWarning", C, false)), [(await $.wv([$t93, $t94], "mbOk", C, false))], 0], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "N19Click", async function N19Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "AdminForm"))]))))) {
    await $.set(C, "AdminForm", (await $.mcall((await $.v(C, "TAdminForm")), "Create", [(await $.v(C, "Application"))])));
  }
  {
    const $t95 = (await $.v(C, "ExpDataModule"));
    const $t96 = (await $.wv([$t95], "ExpBatchsDataSet", C, false));
    if ($.truthy($.eq((await $.wcall([$t95, $t96], "UpperCase", [(await $.mv((await $.wv([$t95, $t96], "Session", C, false)), "LogonUsername"))], C)), "SMART"))) {
      await $.mcall((await $.wv([$t95, $t96], "AdminForm", C, false)), "ShowModal", []);
    } else {
      await $.stmt((await $.wcall([$t95, $t96], "MessageDlg", ["Bu bölməyə giriş qadğandır.! Administratora müraciət edin", (await $.wv([$t95, $t96], "mtWarning", C, false)), [(await $.wv([$t95, $t96], "mbOk", C, false))], 0], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "XDBGrid1TitleClick", async function XDBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy($.eq((await $.mv(L0["column"], "FieldName")), ""))) {
    return L0.result;
  }
  {
    const $t97 = (await $.v(C, "ExpDataModule"));
    const $t98 = (await $.wv([$t97], "ExpBatchsDataSet", C, false));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t97, $t98], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "Title")), "MarkerIndex")), 2))) {
      await $.stmt((await $.wcall([$t97, $t98], "SetVariable", ["title", $.add($.add((await $.mv((await $.wv([$t97, $t98], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), " "), "ASC")], C)));
    } else {
      await $.stmt((await $.wcall([$t97, $t98], "SetVariable", ["title", $.add($.add((await $.mv((await $.wv([$t97, $t98], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), " "), "DESC")], C)));
    }
    await $.stmt($.wcall([$t97, $t98], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.method("TExpress", "XDBGrid2DblClick", async function XDBGrid2DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ActionEditIN")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "XDBGrid2TitleClick", async function XDBGrid2TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy($.eq((await $.mv(L0["column"], "FieldName")), ""))) {
    return L0.result;
  }
  {
    const $t99 = (await $.v(C, "ExpDataModule"));
    const $t100 = (await $.wv([$t99], "ExpIncomingDataSet", C, false));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t99, $t100], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "Title")), "MarkerIndex")), 2))) {
      await $.stmt((await $.wcall([$t99, $t100], "SetVariable", ["title", $.add($.add((await $.mv((await $.wv([$t99, $t100], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), " "), "ASC")], C)));
    } else {
      await $.stmt((await $.wcall([$t99, $t100], "SetVariable", ["title", $.add($.add((await $.mv((await $.wv([$t99, $t100], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), " "), "DESC")], C)));
    }
    await $.stmt($.wcall([$t99, $t100], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.method("TExpress", "XDBGrid3DblClick", async function XDBGrid3DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ActionEditOut")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "XDBGrid3TitleClick", async function XDBGrid3TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy($.eq((await $.mv(L0["column"], "FieldName")), ""))) {
    return L0.result;
  }
  {
    const $t101 = (await $.v(C, "ExpDataModule"));
    const $t102 = (await $.wv([$t101], "ExpBatchsArchiveDataSet", C, false));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t101, $t102], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "Title")), "MarkerIndex")), 2))) {
      await $.stmt((await $.wcall([$t101, $t102], "SetVariable", ["title", $.add($.add((await $.mv((await $.wv([$t101, $t102], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), " "), "ASC")], C)));
    } else {
      await $.stmt((await $.wcall([$t101, $t102], "SetVariable", ["title", $.add($.add((await $.mv((await $.wv([$t101, $t102], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), " "), "DESC")], C)));
    }
    await $.stmt($.wcall([$t101, $t102], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.method("TExpress", "XDBGrid4DblClick", async function XDBGrid4DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpress", "XDBGrid4TitleClick", async function XDBGrid4TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy($.eq((await $.mv(L0["column"], "FieldName")), ""))) {
    return L0.result;
  }
  {
    const $t103 = (await $.v(C, "ExpDataModule"));
    const $t104 = (await $.wv([$t103], "ExpIncomingarchiveDataSet", C, false));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t103, $t104], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "Title")), "MarkerIndex")), 2))) {
      await $.stmt((await $.wcall([$t103, $t104], "SetVariable", ["title", $.add($.add((await $.mv((await $.wv([$t103, $t104], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), " "), "ASC")], C)));
    } else {
      await $.stmt((await $.wcall([$t103, $t104], "SetVariable", ["title", $.add($.add((await $.mv((await $.wv([$t103, $t104], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), " "), "DESC")], C)));
    }
    await $.stmt($.wcall([$t103, $t104], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  return U;
}
