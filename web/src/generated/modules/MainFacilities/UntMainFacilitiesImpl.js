// Generated from UntMainFacilitiesImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntMainFacilitiesImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "MainFacilitiesProj_TLB", "StdVcl", "StdCtrls", "Grids", "DBGrids", "ExtCtrls", "ImgList", "ComCtrls", "ToolWin", "Mask", "DBCtrls", "Buttons", "Excel97", "OleServer", "SBPlgAx50_TLB", "ActnList", "Menus", "DB", "Oracledata", "ComObj", "ComServ", "MFDataModule", "UntAddWares", "UntAddGroups", "UntDelWares", "UntQuery", "UntPrint", "InventarCard", "UntRptMainF", "UntTaxPercents", "UntTraffics", "UntCloseYear", "UntMainTransactions"]);
  const C = [U];
  U.enumType("tobjectkind", 2);
  U.const("okWares", 0);
  U.const("okGroups", 1);
  U.enumType("toperationmode", 2);
  U.const("omAdd", 0);
  U.const("omEdit", 1);
  U.defClass("TMainFacilities", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbuttonadd": {"name": "ToolButtonAdd", "type": "TToolButton"}, "toolbuttontakeoff": {"name": "ToolButtonTakeOff", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbuttonedit": {"name": "ToolButtonEdit", "type": "TToolButton"}, "panelwares": {"name": "PanelWares", "type": "TPanel"}, "waresviewer": {"name": "WaresViewer", "type": "TDBGrid"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "panelgoups": {"name": "PanelGoups", "type": "TPanel"}, "groupsviewer": {"name": "GroupsViewer", "type": "TDBGrid"}, "splitter": {"name": "Splitter", "type": "TSplitter"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "popupmenuwares": {"name": "PopupMenuWares", "type": "TPopupMenu"}, "traffic1": {"name": "Traffic1", "type": "TMenuItem"}, "inventarcard1": {"name": "Inventarcard1", "type": "TMenuItem"}, "actionlistwares": {"name": "ActionListWares", "type": "TActionList"}, "actiontraffic": {"name": "ActionTraffic", "type": "TAction"}, "actioninventarcard": {"name": "ActionInventarCard", "type": "TAction"}, "toolbutton18": {"name": "ToolButton18", "type": "TToolButton"}, "toolbutton19": {"name": "ToolButton19", "type": "TToolButton"}, "toolbutton20": {"name": "ToolButton20", "type": "TToolButton"}, "toolbuttontraffic": {"name": "ToolButtonTraffic", "type": "TToolButton"}, "actionupdate": {"name": "ActionUpdate", "type": "TAction"}, "update1": {"name": "Update1", "type": "TMenuItem"}, "actionprint": {"name": "ActionPrint", "type": "TAction"}, "takoff1": {"name": "TakOff1", "type": "TMenuItem"}, "actiontakeoff": {"name": "ActionTakeOff", "type": "TAction"}, "line1": {"name": "Line1", "type": "TMenuItem"}, "panelsearch": {"name": "PanelSearch", "type": "TPanel"}, "toolbutton22": {"name": "ToolButton22", "type": "TToolButton"}, "toolbutton23": {"name": "ToolButton23", "type": "TToolButton"}, "actionsearch": {"name": "ActionSearch", "type": "TAction"}, "print1": {"name": "Print1", "type": "TMenuItem"}, "toolbutton24": {"name": "ToolButton24", "type": "TToolButton"}, "toolbutton25": {"name": "ToolButton25", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "line2": {"name": "Line2", "type": "TMenuItem"}, "search1": {"name": "Search1", "type": "TMenuItem"}, "n1": {"name": "N1", "type": "TMenuItem"}, "actionspeedseacrh": {"name": "ActionSpeedSeacrh", "type": "TAction"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "efirst_price": {"name": "EFirst_Price", "type": "TEdit"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "ebalance_price": {"name": "EBalance_Price", "type": "TEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "eallamort": {"name": "EAllAmort", "type": "TEdit"}, "actioncalculatepercents": {"name": "ActionCalculatePercents", "type": "TAction"}, "actionzoom": {"name": "ActionZoom", "type": "TAction"}, "zoom1": {"name": "Zoom1", "type": "TMenuItem"}, "actionlistgroups": {"name": "ActionListGroups", "type": "TActionList"}, "actadd": {"name": "ActAdd", "type": "TAction"}, "actupdate": {"name": "ActUpdate", "type": "TAction"}, "actzoom": {"name": "ActZoom", "type": "TAction"}, "popupmenugroups": {"name": "PopupMenuGroups", "type": "TPopupMenu"}, "add1": {"name": "Add1", "type": "TMenuItem"}, "update2": {"name": "Update2", "type": "TMenuItem"}, "zoom2": {"name": "Zoom2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "actionadd": {"name": "ActionAdd", "type": "TAction"}, "add2": {"name": "Add2", "type": "TMenuItem"}, "imagestate": {"name": "ImageState", "type": "TImageList"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "actdelete": {"name": "ActDelete", "type": "TAction"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "totalresultpanel": {"name": "TotalResultPanel", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "statictext7": {"name": "StaticText7", "type": "TStaticText"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "statictext8": {"name": "StaticText8", "type": "TStaticText"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "statictext9": {"name": "StaticText9", "type": "TStaticText"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "statictext10": {"name": "StaticText10", "type": "TStaticText"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "statictext11": {"name": "StaticText11", "type": "TStaticText"}, "nfirst": {"name": "NFirst", "type": "TMenuItem"}, "nlast": {"name": "NLast", "type": "TMenuItem"}, "actionselectall": {"name": "ActionSelectAll", "type": "TAction"}, "n5": {"name": "N5", "type": "TMenuItem"}, "yekun1": {"name": "Yekun1", "type": "TMenuItem"}, "fevents": {"name": "FEvents", "type": "IMainFacilitiesEvents"}, "rate": {"name": "Rate", "type": "array"}, "objectkind": {"name": "ObjectKind", "type": "TObjectKind"}, "opeartionmode": {"name": "OpeartionMode", "type": "TOperationMode"}}, {});
  U.fieldInit("TMainFacilities", "rate", () => []);
  U.init(async () => {
    U.const("csNewWares", 0);
    U.const("csOldWares", 1);
    U.const("csDisableCalculate", 2);
    U.const("ZoomIndex", 22);
    U.var_("MainFacilities", null, "TMainFacilities");
  });
  U.method("TMainFacilities", "Get_Icon", async function Get_Icon(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["imageindex"] = 8;
  await $.stmt((await $.mcall((await $.v(C, "ImageList")), "GetIcon", [L0["imageindex"], (await $.v(C, "Icon"))])));
  L0["result"] = (await $.mv((await $.v(C, "Icon")), "Handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainFacilities", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TMainFacilities", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TMainFacilities", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TMainFacilities", "Initialize", null, arguments);
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
  U.method("TMainFacilities", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainFacilities", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainFacilities", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainFacilities", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainFacilities", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainFacilities", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainFacilities", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainFacilities", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainFacilities", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainFacilities", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainFacilities", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainFacilities", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainFacilities", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainFacilities", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainFacilities", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainFacilities", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainFacilities", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainFacilities", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainFacilities", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TMainFacilities", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TMainFacilities", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainFacilities", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainFacilities", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TMainFacilities", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TMainFacilities", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TMainFacilities", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TMainFacilities", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainFacilities", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainFacilities", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainFacilities", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TMainFacilities", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TMainFacilities", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainFacilities", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TMainFacilities", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TMainFacilities", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainFacilities", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainFacilities", "GetPresentdate", async function GetPresentdate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  {
    const $t1 = (await $.mv((await $.v(C, "MainFDataModule")), "OPViewWares"));
    await $.wset([$t1], "result", (await $.wcall([$t1], "CallDateFunction", ["GetPresentDate", []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainFacilities", "delete_MainGroup", async function delete_MainGroup(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"groupid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["groupid"]);
  {
    const $t2 = (await $.v(C, "MainFDataModule"));
    const $t3 = (await $.wv([$t2], "OPViewWares", C, false));
    await $.stmt((await $.wcall([$t2, $t3], "CallProcedure", ["delete_MainGroup", [(await $.wv([$t2, $t3], "GroupID", { get: async () => L0["groupid"], set: async (v) => { L0["groupid"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["GroupID"], "kind": "procedure", "ptypes": ["longint"]});
  U.method("TMainFacilities", "StopCalculate", async function StopCalculate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"objectid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["objectid"]);
  {
    const $t4 = (await $.mv((await $.v(C, "MainFDataModule")), "OPViewWares"));
    await $.stmt((await $.wcall([$t4], "CallProcedure", ["StopCalculate", [(await $.wv([$t4], "ObjectID", { get: async () => L0["objectid"], set: async (v) => { L0["objectid"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["ObjectID"], "kind": "procedure", "ptypes": ["longint"]});
  U.method("TMainFacilities", "MouseWheelHandler", async function MouseWheelHandler(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TMainFacilities", "MouseWheelHandler", null, arguments);
  if ($.truthy((await $.mv((await $.v(C, "WaresViewer")), "Focused")))) {
    await $.mcall((await $.mv((await $.v(C, "WaresViewer")), "SelectedRows")), "Clear", []);
    {
      const $t5 = (await $.call(C, "TCMMouseWheel", [(await L0["message"].get())]));
      const $t6 = (await $.mv((await $.mv((await $.wv([$t5], "WaresViewer", C, false)), "DataSource")), "DataSet"));
      if ($.truthy($.lt((await $.wv([$t5, $t6], "WheelDelta", C, false)), 0))) {
        await $.stmt($.wcall([$t5, $t6], "Next", [], C));
      } else {
        await $.stmt($.wcall([$t5, $t6], "Prior", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TMainFacilities", "SumGroupDetails", async function SumGroupDetails(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"groupsid": $.copyArg(p0), "firstprice": $.asRef(p1), "balanceprice": $.asRef(p2), "allamort": $.asRef(p3), "remainder": $.asRef(p4), result: undefined};
  await $.fixArgs(L0, ["groupsid"]);
  {
    const $t7 = (await $.mv((await $.v(C, "MainFDataModule")), "OPViewWares"));
    await $.stmt((await $.wcall([$t7], "CallProcedure", ["SumGroupDetails", [(await $.wv([$t7], "GroupsID", { get: async () => L0["groupsid"], set: async (v) => { L0["groupsid"] = v; }, local: true }, false)), (await $.wv([$t7], "FirstPrice", { get: async () => await L0["firstprice"].get(), set: async (v) => { await L0["firstprice"].set(v); }, local: true }, false)), (await $.wv([$t7], "BalancePrice", { get: async () => await L0["balanceprice"].get(), set: async (v) => { await L0["balanceprice"].set(v); }, local: true }, false)), (await $.wv([$t7], "AllAmort", { get: async () => await L0["allamort"].get(), set: async (v) => { await L0["allamort"].set(v); }, local: true }, false)), (await $.wv([$t7], "Remainder", { get: async () => await L0["remainder"].get(), set: async (v) => { await L0["remainder"].set(v); }, local: true }, false))]], C)));
    await $.wset([$t7], "FirstPrice", (await $.wcall([$t7], "GetParameter", [1], C)), { get: async () => await L0["firstprice"].get(), set: async (v) => { await L0["firstprice"].set(v); }, local: true });
    await $.wset([$t7], "BalancePrice", (await $.wcall([$t7], "GetParameter", [2], C)), { get: async () => await L0["balanceprice"].get(), set: async (v) => { await L0["balanceprice"].set(v); }, local: true });
    await $.wset([$t7], "AllAmort", (await $.wcall([$t7], "GetParameter", [3], C)), { get: async () => await L0["allamort"].get(), set: async (v) => { await L0["allamort"].set(v); }, local: true });
    await $.wset([$t7], "Remainder", (await $.wcall([$t7], "GetParameter", [4], C)), { get: async () => await L0["remainder"].get(), set: async (v) => { await L0["remainder"].set(v); }, local: true });
  }
  return L0.result;
}, {"params": ["GroupsID", "FirstPrice", "BalancePrice", "AllAmort", "Remainder"], "kind": "procedure", "ptypes": ["integer", "Real", "Real", "Real", "Real"]});
  U.method("TMainFacilities", "SumGroupDetailsForTax", async function SumGroupDetailsForTax(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"groupsid": $.copyArg(p0), "firstprice": $.asRef(p1), "balanceprice": $.asRef(p2), "alltaxamort": $.asRef(p3), "taxamort": $.asRef(p4), result: undefined};
  await $.fixArgs(L0, ["groupsid"]);
  {
    const $t8 = (await $.mv((await $.v(C, "MainFDataModule")), "OPViewWares"));
    await $.stmt((await $.wcall([$t8], "CallProcedure", ["SumGroupDetailsForTax", [(await $.wv([$t8], "GroupsID", { get: async () => L0["groupsid"], set: async (v) => { L0["groupsid"] = v; }, local: true }, false)), (await $.wv([$t8], "FirstPrice", { get: async () => await L0["firstprice"].get(), set: async (v) => { await L0["firstprice"].set(v); }, local: true }, false)), (await $.wv([$t8], "BalancePrice", { get: async () => await L0["balanceprice"].get(), set: async (v) => { await L0["balanceprice"].set(v); }, local: true }, false)), (await $.wv([$t8], "AllTaxAmort", { get: async () => await L0["alltaxamort"].get(), set: async (v) => { await L0["alltaxamort"].set(v); }, local: true }, false)), (await $.wv([$t8], "TaxAmort", { get: async () => await L0["taxamort"].get(), set: async (v) => { await L0["taxamort"].set(v); }, local: true }, false))]], C)));
    await $.wset([$t8], "FirstPrice", (await $.wcall([$t8], "GetParameter", [1], C)), { get: async () => await L0["firstprice"].get(), set: async (v) => { await L0["firstprice"].set(v); }, local: true });
    await $.wset([$t8], "BalancePrice", (await $.wcall([$t8], "GetParameter", [2], C)), { get: async () => await L0["balanceprice"].get(), set: async (v) => { await L0["balanceprice"].set(v); }, local: true });
    await $.wset([$t8], "AllTaxAmort", (await $.wcall([$t8], "GetParameter", [3], C)), { get: async () => await L0["alltaxamort"].get(), set: async (v) => { await L0["alltaxamort"].set(v); }, local: true });
    await $.wset([$t8], "TaxAmort", (await $.wcall([$t8], "GetParameter", [4], C)), { get: async () => await L0["taxamort"].get(), set: async (v) => { await L0["taxamort"].set(v); }, local: true });
  }
  return L0.result;
}, {"params": ["GroupsID", "FirstPrice", "BalancePrice", "AllTaxAmort", "TaxAmort"], "kind": "procedure", "ptypes": ["integer", "real", "real", "real", "real"]});
  U.method("TMainFacilities", "SumModernedWares", async function SumModernedWares(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"groupsid": $.copyArg(p0), "modernsumma": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["groupsid"]);
  {
    const $t9 = (await $.mv((await $.v(C, "MainFDataModule")), "OPViewWares"));
    await $.stmt((await $.wcall([$t9], "CallProcedure", ["SumModernedWares", [(await $.wv([$t9], "GroupsID", { get: async () => L0["groupsid"], set: async (v) => { L0["groupsid"] = v; }, local: true }, false)), (await $.wv([$t9], "ModernSumma", { get: async () => await L0["modernsumma"].get(), set: async (v) => { await L0["modernsumma"].set(v); }, local: true }, false))]], C)));
    await $.wset([$t9], "ModernSumma", (await $.wcall([$t9], "GetParameter", [1], C)), { get: async () => await L0["modernsumma"].get(), set: async (v) => { await L0["modernsumma"].set(v); }, local: true });
  }
  return L0.result;
}, {"params": ["GroupsID", "ModernSumma"], "kind": "procedure", "ptypes": ["integer", "real"]});
  U.method("TMainFacilities", "SumRepairedWares", async function SumRepairedWares(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"groupsid": $.copyArg(p0), "repairsumma": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["groupsid"]);
  {
    const $t10 = (await $.mv((await $.v(C, "MainFDataModule")), "OPViewWares"));
    await $.stmt((await $.wcall([$t10], "CallProcedure", ["SumRepairedWares", [(await $.wv([$t10], "GroupsID", { get: async () => L0["groupsid"], set: async (v) => { L0["groupsid"] = v; }, local: true }, false)), (await $.wv([$t10], "RepairSumma", { get: async () => await L0["repairsumma"].get(), set: async (v) => { await L0["repairsumma"].set(v); }, local: true }, false))]], C)));
    await $.wset([$t10], "RepairSumma", (await $.wcall([$t10], "GetParameter", [1], C)), { get: async () => await L0["repairsumma"].get(), set: async (v) => { await L0["repairsumma"].set(v); }, local: true });
  }
  return L0.result;
}, {"params": ["GroupsID", "RepairSumma"], "kind": "procedure", "ptypes": ["integer", "real"]});
  U.method("TMainFacilities", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "MainFacilities", Self);
  await $.set(C, "MainFDataModule", (await $.mcall((await $.v(C, "TMainFDataModule")), "Create", [Self])));
  await $.set(C, "RptInventarCard", (await $.mcall((await $.v(C, "TRptInventarCard")), "Create", [Self])));
  await $.set(C, "RptDepartments", (await $.mcall((await $.v(C, "TRptDepartments")), "Create", [Self])));
  await $.set(C, "FrmAddWares", (await $.mcall((await $.v(C, "TFrmAddWares")), "Create", [Self])));
  await $.set(C, "FrmAddGroups", (await $.mcall((await $.v(C, "TFrmAddGroups")), "Create", [Self])));
  await $.set(C, "FrmDelWares", (await $.mcall((await $.v(C, "TFrmDelWares")), "Create", [Self])));
  await $.set(C, "FrmQuery", (await $.mcall((await $.v(C, "TFrmQuery")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ViewGroup")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ViewWares")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSSumModWares")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSSumRepair")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSSumWares")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSTakeDepartmentID")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSTakeGroupID")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSMODERN")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSREPAIR")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "ODSWClose")), "Open", []);
  {
    const $t11 = (await $.mv((await $.v(C, "MainFDataModule")), "ODSDepartments"));
    await $.stmt($.wcall([$t11], "Open", [], C));
    await $.stmt($.wcall([$t11], "First", [], C));
    while ($.truthy($.not((await $.wv([$t11], "EOF", C, false))))) {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t11], "FrmAddWares", C, false)), "CBDepartments")), "Items")), "Add", [(await $.mv((await $.wcall([$t11], "FieldByName", ["Department"], C)), "AsString"))])));
      await $.stmt($.wcall([$t11], "Next", [], C));
      await $.tick();
    }
  }
  await $.set(C, "ObjectKind", (await $.v(C, "okGroups")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "ActiveFormDestroy", async function ActiveFormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "MainFacilities")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "FrmTransactions", (await $.mcall((await $.v(C, "TFrmTransactions")), "Create", [Self])));
    await $.mcall((await $.v(C, "FrmTransactions")), "ShowModal", []);
  } finally {
    await $.mcall((await $.v(C, "FrmTransactions")), "Free", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "GroupsViewerEnter", async function GroupsViewerEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ObjectKind", (await $.v(C, "okGroups")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "WaresViewerEnter", async function WaresViewerEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ObjectKind", (await $.v(C, "okWares")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "GroupsViewerDblClick", async function GroupsViewerDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "OpeartionMode", (await $.v(C, "omEdit")));
  await $.mcall((await $.v(C, "FrmAddGroups")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "WaresViewerDrawColumnCell", async function WaresViewerDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  {
    const $t12 = (await $.v(C, "WaresViewer"));
    if ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t12], "MainFDataModule", C, false)), "ViewWares")), "RecordCount")), 0))) {
      if ($.truthy(($.eq((await $.wv([$t12], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 2)))) {
        { const $t13 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t12], "MainFDataModule", C, false)), "ViewWares")), "FieldByName", ["Close_format"])), "AsInteger"));
          if ($.eq($t13, (await $.wv([$t12], "csNewWares", C, false)))) {
            await $.stmt((await $.mcall((await $.wv([$t12], "ImageState", C, false)), "Draw", [(await $.wv([$t12], "Canvas", C, false)), $.add((await $.mv((await $.wv([$t12], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "left")), 2), (await $.mv((await $.wv([$t12], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "top")), (await $.wv([$t12], "csNewWares", C, false)), (await $.wv([$t12], "true", C, false))])));
          }
          else if ($.eq($t13, (await $.wv([$t12], "csOldWares", C, false)))) {
            await $.stmt((await $.mcall((await $.wv([$t12], "ImageState", C, false)), "Draw", [(await $.wv([$t12], "Canvas", C, false)), $.add((await $.mv((await $.wv([$t12], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "left")), 2), (await $.mv((await $.wv([$t12], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "top")), (await $.wv([$t12], "csOldWares", C, false)), (await $.wv([$t12], "true", C, false))])));
          }
          else if ($.eq($t13, (await $.wv([$t12], "csDisableCalculate", C, false)))) {
            await $.stmt((await $.mcall((await $.wv([$t12], "ImageState", C, false)), "Draw", [(await $.wv([$t12], "Canvas", C, false)), $.add((await $.mv((await $.wv([$t12], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "left")), 2), (await $.mv((await $.wv([$t12], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "top")), (await $.wv([$t12], "csDisableCalculate", C, false)), (await $.wv([$t12], "true", C, false))])));
          }
        }
      } else {
        await $.stmt((await $.wcall([$t12], "DefaultDrawColumnCell", [(await $.wv([$t12], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t12], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t12], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t12], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TMainFacilities", "WaresViewerTitleClick", async function WaresViewerTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy((await $.mv((await $.mv(L0["column"], "Field")), "Calculated")))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  try {
    {
      const $t14 = (await $.mv((await $.v(C, "MainFDataModule")), "ViewWares"));
      await $.stmt((await $.wcall([$t14], "SetVariable", ["Title", (await $.wv([$t14], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t14], "Refresh", [], C));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TMainFacilities", "ToolButton16Click", async function ToolButton16Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "FrmTaxPercents", (await $.mcall((await $.v(C, "TFrmTaxPercents")), "Create", [Self])));
    await $.mcall((await $.v(C, "FrmTaxPercents")), "ShowModal", []);
  } finally {
    await $.mcall((await $.v(C, "FrmTaxPercents")), "Release", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "WaresViewerKeyDown", async function WaresViewerKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy(($.eq((await L0["key"].get()), (await $.v(C, "VK_F8")))))) {
    if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Do you want delete this thing?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
      {
        const $t15 = (await $.v(C, "MainFDataModule"));
        const $t16 = (await $.wv([$t15], "OPViewWares", C, false));
        const $t17 = (await $.wv([$t15, $t16], "ViewWares", C, false));
        await $.stmt((await $.wcall([$t15, $t16, $t17], "CallProcedure", ["delete_wares", [(await $.mv((await $.mcall((await $.wv([$t15, $t16, $t17], "ViewWares", C, false)), "FieldByName", ["ID"])), "AsInteger"))]], C)));
        await $.stmt($.wcall([$t15, $t16, $t17], "Refresh", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TMainFacilities", "ActionInventarCardExecute", async function ActionInventarCardExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ids": '', "rcount": 0, "i": 0, "saveplace": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(((await $.mv((await $.mv((await $.mv((await $.v(C, "WaresViewer")), "DataSource")), "DataSet")), "IsEmpty"))))) {
    return L0.result;
  }
  L0["ids"] = "";
  {
    const $t18 = (await $.v(C, "MainFDataModule"));
    const $t19 = (await $.wv([$t18], "WaresViewer", C, false));
    const $t20 = (await $.mv((await $.wv([$t18, $t19], "DataSource", C, false)), "DataSet"));
    await $.wset([$t18, $t19, $t20], "SavePlace", (await $.mv((await $.wv([$t18, $t19, $t20], "ViewWares", C, false)), "GetBookMark")), { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true });
    try {
      await $.mcall((await $.wv([$t18, $t19, $t20], "ODSMODERN", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t18, $t19, $t20], "ODSMODERN", C, false)), "SetVariable", ["WID", (await $.mv((await $.mcall((await $.wv([$t18, $t19, $t20], "ViewWares", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t18, $t19, $t20], "ODSMODERN", C, false)), "Open", []);
      await $.mcall((await $.wv([$t18, $t19, $t20], "ODSREPAIR", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t18, $t19, $t20], "ODSREPAIR", C, false)), "SetVariable", ["WID", (await $.mv((await $.mcall((await $.wv([$t18, $t19, $t20], "ViewWares", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t18, $t19, $t20], "ODSREPAIR", C, false)), "Open", []);
      await $.wset([$t18, $t19, $t20], "RCount", $.sub((await $.mv((await $.wv([$t18, $t19, $t20], "SelectedRows", C, false)), "Count")), 1), { get: async () => L0["rcount"], set: async (v) => { L0["rcount"] = v; }, local: true });
      if ($.truthy($.le((await $.wv([$t18, $t19, $t20], "RCount", { get: async () => L0["rcount"], set: async (v) => { L0["rcount"] = v; }, local: true }, false)), 0))) {
        await $.wset([$t18, $t19, $t20], "IDs", $.add($.add(" (ID=", (await $.mv((await $.wcall([$t18, $t19, $t20], "FieldByName", ["ID"], C)), "AsString"))), ")"), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
      } else {
        { const $t21 = (await $.wv([$t18, $t19, $t20], "RCount", { get: async () => L0["rcount"], set: async (v) => { L0["rcount"] = v; }, local: true }, false));
          await $.wset([$t18, $t19, $t20], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t22 = true;
          for (;;) {
            if (!$t22) { await $.wset([$t18, $t19, $t20], "i", $.succ((await $.wv([$t18, $t19, $t20], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t22 = false;
            if (!($.ord((await $.wv([$t18, $t19, $t20], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t21))) break;
            await $.stmt((await $.wcall([$t18, $t19, $t20], "GotoBookmark", [(await $.wcall([$t18, $t19, $t20], "Pointer", [(await $.idx((await $.mv((await $.wv([$t18, $t19, $t20], "SelectedRows", C, false)), "Items")), [(await $.wv([$t18, $t19, $t20], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            if ($.truthy($.eq((await $.wv([$t18, $t19, $t20], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), ""))) {
              await $.wset([$t18, $t19, $t20], "IDs", $.add($.add(" (ID=", (await $.mv((await $.wcall([$t18, $t19, $t20], "FieldByName", ["ID"], C)), "AsString"))), ")"), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
            } else {
              await $.wset([$t18, $t19, $t20], "IDs", $.add($.add($.add((await $.wv([$t18, $t19, $t20], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), " OR (ID="), (await $.mv((await $.wcall([$t18, $t19, $t20], "FieldByName", ["ID"], C)), "AsString"))), ")"), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
            }
            await $.tick();
          }
        }
      }
      await $.wset([$t18, $t19, $t20], "Filter", (await $.wv([$t18, $t19, $t20], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), C);
      await $.wset([$t18, $t19, $t20], "Filtered", (await $.wv([$t18, $t19, $t20], "True", C, false)), C);
      await $.mcall((await $.wv([$t18, $t19, $t20], "RPTInventarCard", C, false)), "Preview", []);
    } finally {
      await $.wset([$t18, $t19, $t20], "Filtered", (await $.wv([$t18, $t19, $t20], "False", C, false)), C);
      await $.mcall((await $.wv([$t18, $t19, $t20], "SelectedRows", C, false)), "Clear", []);
      await $.stmt((await $.wcall([$t18, $t19, $t20], "GotoBookmark", [(await $.wv([$t18, $t19, $t20], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t18, $t19, $t20], "FreeBookmark", [(await $.wv([$t18, $t19, $t20], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "ActionTrafficExecute", async function ActionTrafficExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(((await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ViewWares")), "IsEmpty"))))) {
    return L0.result;
  }
  await $.set(C, "QRTraffics", (await $.mcall((await $.v(C, "TQRTraffics")), "Create", [Self])));
  {
    const $t23 = (await $.v(C, "QRTraffics"));
    const $t24 = (await $.wcall([$t23], "TOracleDataSet", [(await $.wv([$t23], "DataSet", C, false))], C));
    try {
      await $.stmt($.wcall([$t23, $t24], "Close", [], C));
      await $.stmt((await $.wcall([$t23, $t24], "SetVariable", ["WaresID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t23, $t24], "MainFDataModule", C, false)), "ViewWares")), "FieldByName", ["ID"])), "AsInteger"))], C)));
      await $.stmt($.wcall([$t23, $t24], "Open", [], C));
      await $.stmt($.wcall([$t23, $t24], "Preview", [], C));
    } finally {
      await $.mcall((await $.wv([$t23, $t24], "QRTraffics", C, false)), "Free", []);
      await $.stmt($.wcall([$t23, $t24], "Close", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "ActionUpdateExecute", async function ActionUpdateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "OpeartionMode", (await $.v(C, "omEdit")));
  if ($.truthy($.eq((await $.v(C, "ObjectKind")), (await $.v(C, "okGroups"))))) {
    await $.mcall((await $.v(C, "FrmAddGroups")), "ShowModal", []);
  }
  if ($.truthy((await $.and_($.not(((await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ViewWares")), "IsEmpty")))), async () => ($.eq((await $.v(C, "ObjectKind")), (await $.v(C, "okWares")))))))) {
    await $.mset((await $.mv((await $.v(C, "FrmAddWares")), "TitlePanel")), "Caption", "Əsas vəsaitlərin redaktə olunması");
    await $.mcall((await $.v(C, "FrmAddWares")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "ActionPrintExecute", async function ActionPrintExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "FrmPrint", (await $.mcall((await $.v(C, "TFrmPrint")), "Create", [Self])));
    await $.mcall((await $.v(C, "FrmPrint")), "ShowModal", []);
  } finally {
    await $.mcall((await $.v(C, "FrmPrint")), "Free", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "ActionTakeOffExecute", async function ActionTakeOffExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.mv((await $.mv((await $.v(C, "MainFDataModule")), "ViewWares")), "IsEmpty")))))) {
    await $.mcall((await $.v(C, "FrmDelWares")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "EFirst_PriceChange", async function EFirst_PriceChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "EFirst_PriceExit", async function EFirst_PriceExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t25 = L0["sender"];
    await $.wset([$t25], "Text", "", C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "ActionSearchExecute", async function ActionSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PanelSearch")), "Visible", $.not((await $.mv((await $.v(C, "PanelSearch")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "ToolButton25Click", async function ToolButton25Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "FrmSetCloseYear", (await $.mcall((await $.v(C, "TFrmSetCloseYear")), "Create", [Self])));
    await $.mcall((await $.v(C, "FrmSetCloseYear")), "ShowModal", []);
  } finally {
    await $.mcall((await $.v(C, "FrmSetCloseYear")), "Free", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "Traffic1DrawItem", async function Traffic1DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t26 = L0["acanvas"];
    const $t27 = (await $.wv([$t26], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t28 = (await $.mv((await $.wv([$t26, $t27], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Font"));
      await $.wset([$t26, $t27, $t28], "Charset", (await $.wv([$t26, $t27, $t28], "DEFAULT_CHARSET", C, false)), C);
      await $.wset([$t26, $t27, $t28], "Name", "Azl Sans Serif", C);
      if ($.truthy((await $.wv([$t26, $t27, $t28], "Default", C, false)))) {
        await $.wset([$t26, $t27, $t28], "Style", [(await $.wv([$t26, $t27, $t28], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t26, $t27], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t26, $t27], "Pen", C, false)), "Color", (await $.wv([$t26, $t27], "clBlack", C, false)));
      await $.wset([$t26, $t27], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t26, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t26, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t26, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t26, $t27], "MoveTo", [(await $.mv((await $.wv([$t26, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t26, $t27], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "LineTo", [(await $.mv((await $.wv([$t26, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t26, $t27], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "inc", [$.ref(async () => (await $.wv([$t26, $t27], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t29) => { await $.wset([$t26, $t27], "LineBottom", $t29, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t26, $t27], "Pen", C, false)), "Color", (await $.wv([$t26, $t27], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t26, $t27], "MoveTo", [(await $.mv((await $.wv([$t26, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t26, $t27], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "LineTo", [(await $.mv((await $.wv([$t26, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t26, $t27], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t26, $t27], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t26, $t27], "Brush", C, false)), "Color", (await $.wv([$t26, $t27], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t26, $t27], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t26, $t27], "Font", C, false)), "Color", (await $.wv([$t26, $t27], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t26, $t27], "Font", C, false)), "Color", (await $.wv([$t26, $t27], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t26, $t27], "Brush", C, false)), "Color", (await $.wv([$t26, $t27], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t26, $t27], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t26, $t27], "Font", C, false)), "Color", (await $.wv([$t26, $t27], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t26, $t27], "Font", C, false)), "Color", (await $.wv([$t26, $t27], "clGrayText", C, false)));
        }
      }
      await $.wset([$t26, $t27], "Bar", (await $.wv([$t26, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t26, $t27], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t26, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t30) => { await $.mset((await $.wv([$t26, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t30); }), 22], C)));
      await $.stmt((await $.wcall([$t26, $t27], "FillRect", [(await $.wv([$t26, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "TextOut", [$.add((await $.mv((await $.wv([$t26, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t26, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t26, $t27], "Caption", C, false))], C)));
    }
    await $.wset([$t26, $t27], "SText", (await $.wcall([$t26, $t27], "ShortCutToText", [(await $.wv([$t26, $t27], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t26, $t27], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t26, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t26, $t27], "TextWidth", [(await $.wv([$t26, $t27], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 7), $.add((await $.mv((await $.wv([$t26, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t26, $t27], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t26, $t27], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t31 = (await $.wv([$t26, $t27], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t26, $t27, $t31], "Assigned", [(await $.wv([$t26, $t27, $t31], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t26, $t27, $t31], "Checked", C, false)))) {
            await $.mset((await $.wv([$t26, $t27, $t31], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t26, $t27, $t31], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t26, $t27, $t31], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t26, $t27, $t31], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t26, $t27, $t31], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t26, $t27, $t31], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t26, $t27, $t31], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t26, $t27, $t31], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t26, $t27, $t31], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t26, $t27, $t31], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t26, $t27, $t31], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t26, $t27, $t31], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t26, $t27, $t31], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t26, $t27, $t31], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t32) => { await $.mset((await $.wv([$t26, $t27, $t31], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t32); }), 2], C)));
            await $.stmt((await $.wcall([$t26, $t27, $t31], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t26, $t27, $t31], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t33) => { await $.mset((await $.wv([$t26, $t27, $t31], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t33); }), 2], C)));
            await $.stmt((await $.wcall([$t26, $t27, $t31], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t26, $t27, $t31], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t34) => { await $.mset((await $.wv([$t26, $t27, $t31], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t34); }), 2], C)));
            await $.stmt((await $.wcall([$t26, $t27, $t31], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t26, $t27, $t31], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t35) => { await $.mset((await $.wv([$t26, $t27, $t31], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t35); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t26, $t27, $t31], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t26, $t27, $t31], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t26, $t27, $t31], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t26, $t27, $t31], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t26, $t27, $t31], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t26, $t27, $t31], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t36) => { await $.mset((await $.wv([$t26, $t27, $t31], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t36); }), 1], C)));
            await $.stmt((await $.wcall([$t26, $t27, $t31], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t26, $t27, $t31], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t37) => { await $.mset((await $.wv([$t26, $t27, $t31], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t37); }), 1], C)));
            await $.stmt((await $.wcall([$t26, $t27, $t31], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t26, $t27, $t31], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t38) => { await $.mset((await $.wv([$t26, $t27, $t31], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t38); }), 1], C)));
            await $.stmt((await $.wcall([$t26, $t27, $t31], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t26, $t27, $t31], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t39) => { await $.mset((await $.wv([$t26, $t27, $t31], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t39); }), 1], C)));
            if ($.truthy((await $.wv([$t26, $t27, $t31], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t26, $t27, $t31], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t26, $t27, $t31], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t26, $t27, $t31], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t26, $t27, $t31], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t26, $t27, $t31], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t26, $t27, $t31], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t26, $t27, $t31], "Images", C, false)), "Draw", [(await $.wv([$t26, $t27, $t31], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t26, $t27, $t31], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t26, $t27, $t31], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t26, $t27, $t31], "ImageIndex", C, false)), (await $.wv([$t26, $t27, $t31], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TMainFacilities", "ActionSpeedSeacrhExecute", async function ActionSpeedSeacrhExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t40 = L0["sender"];
    await $.wset([$t40], "SearchField", (await $.wcall([$t40], "copy", [(await $.wv([$t40], "Name", C, false)), 2, (await $.wcall([$t40], "length", [(await $.wv([$t40], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t41 = (await $.wcall([$t40], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t40], "WaresViewer", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t40, $t41], "SearchRecord", [(await $.wv([$t40, $t41], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t40, $t41], "Text", C, false)), $.add((await $.wv([$t40, $t41], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t40, $t41], "srFromCurrent", C, false)), (await $.wv([$t40, $t41], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t40, $t41], "MessageDlg", [$.add($.add("Record has reached the End of file.", "\r"), "Continue from Top of file?"), (await $.wv([$t40, $t41], "mtInformation", C, false)), [(await $.wv([$t40, $t41], "mbNo", C, false)), (await $.wv([$t40, $t41], "mbYes", C, false))], 0], C)), (await $.wv([$t40, $t41], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t40, $t41], "SearchRecord", [(await $.wv([$t40, $t41], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t40, $t41], "Text", C, false)), $.add((await $.wv([$t40, $t41], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t40, $t41], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t40, $t41], "MessageDlg", ["Record Not Found!", (await $.wv([$t40, $t41], "mtInformation", C, false)), [(await $.wv([$t40, $t41], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "EFirst_PriceKeyPress", async function EFirst_PriceKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSeacrhExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TMainFacilities", "ActionCalculatePercentsExecute", async function ActionCalculatePercentsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FrmQuery")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "ActionZoomExecute", async function ActionZoomExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t42 = (await $.v(C, "ObjectKind"));
    if ($.eq($t42, (await $.v(C, "okWares")))) {
      await $.mset((await $.v(C, "PanelGoups")), "Visible", $.not((await $.mv((await $.v(C, "PanelGoups")), "Visible"))));
      await $.mset((await $.v(C, "Splitter")), "Enabled", $.not((await $.mv((await $.v(C, "Splitter")), "Enabled"))));
      await $.mset(L0["sender"], "ImageIndex", $.add((await $.v(C, "ZoomIndex")), (await $.call(C, "Word", [$.not((await $.mv((await $.v(C, "PanelGoups")), "Visible")))]))));
    }
    else if ($.eq($t42, (await $.v(C, "okGroups")))) {
      await $.mset((await $.v(C, "PanelWares")), "Visible", $.not((await $.mv((await $.v(C, "PanelWares")), "Visible"))));
      await $.mset((await $.v(C, "Splitter")), "Enabled", $.not((await $.mv((await $.v(C, "Splitter")), "Enabled"))));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "ActionAddExecute", async function ActionAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "OpeartionMode", (await $.v(C, "omAdd")));
  { const $t43 = (await $.v(C, "ObjectKind"));
    if ($.eq($t43, (await $.v(C, "okGroups")))) {
      await $.mcall((await $.v(C, "FrmAddGroups")), "ShowModal", []);
    }
    else if ($.eq($t43, (await $.v(C, "okWares")))) {
      await $.mcall((await $.v(C, "FrmAddWares")), "ShowModal", []);
    }
  }
  await $.mset((await $.mv((await $.v(C, "FrmAddWares")), "TitlePanel")), "Caption", "Əsas vəsaitlərin əlavə olunması");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "ActDeleteExecute", async function ActDeleteExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "groupid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t44 = (await $.mv((await $.mv((await $.v(C, "GroupsViewer")), "DataSource")), "DataSet"));
    await $.wset([$t44], "GroupID", (await $.mv((await $.wcall([$t44], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["groupid"], set: async (v) => { L0["groupid"] = v; }, local: true });
    try {
      await $.stmt((await $.wcall([$t44], "delete_MainGroup", [(await $.wv([$t44], "GroupID", { get: async () => L0["groupid"], set: async (v) => { L0["groupid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t44], "DisableControls", [], C));
      await $.stmt($.wcall([$t44], "Refresh", [], C));
    } finally {
      await $.stmt($.wcall([$t44], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "NFirstClick", async function NFirstClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.call(C, "TMenuItem", [L0["sender"]])), "Tag")), 1))) {
    await $.mcall((await $.mv((await $.mv((await $.v(C, "WaresViewer")), "DataSource")), "DataSet")), "First", []);
  } else {
    await $.mcall((await $.mv((await $.mv((await $.v(C, "WaresViewer")), "DataSource")), "DataSet")), "Last", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "ActionSelectAllExecute", async function ActionSelectAllExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t45 = (await $.v(C, "WaresViewer"));
    const $t46 = (await $.wv([$t45], "SelectedRows", C, false));
    const $t47 = (await $.mv((await $.wv([$t45, $t46], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t45, $t46, $t47], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t45, $t46, $t47], "First", [], C));
      while ($.truthy($.not((await $.wv([$t45, $t46, $t47], "Eof", C, false))))) {
        await $.wset([$t45, $t46, $t47], "CurrentRowSelected", (await $.wv([$t45, $t46, $t47], "True", C, false)), C);
        await $.stmt($.wcall([$t45, $t46, $t47], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t45, $t46, $t47], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "WaresViewerExit", async function WaresViewerExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.call(C, "TDBGrid", [L0["sender"]])), "SelectedRows")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFacilities", "Yekun1Click", async function Yekun1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "TotalResultPanel")), "Visible", $.not((await $.mv((await $.v(C, "TotalResultPanel")), "Visible"))));
  await $.mset((await $.call(C, "TMenuItem", [L0["sender"]])), "Checked", (await $.mv((await $.v(C, "TotalResultPanel")), "Visible")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
