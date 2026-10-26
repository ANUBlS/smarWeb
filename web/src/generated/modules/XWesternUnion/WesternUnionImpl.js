// Generated from WesternUnionImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("WesternUnionImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "WesternUnion_TLB", "StdVcl", "ExtCtrls", "StdCtrls", "Buttons", "Grids", "DBGrids", "ActnList", "ComCtrls", "ToolWin", "Menus", "sboapiDataModuleImpl", "Db", "OracleData", "Mask", "DBCtrls", "FileCtrl", "ImgList", "CurrencyEdit", "SearchEdit", "DBViewComboBox", "ExcelExporter", "CheckLst", "ComObj", "ComServ", "DataModuleUnit", "ConfigUnit"]);
  const C = [U];
  U.defClass("TWesternUnionForm", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "controlbar1": {"name": "ControlBar1", "type": "TControlBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "buttonload": {"name": "ButtonLoad", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "buttonrefresh": {"name": "ButtonRefresh", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "buttonfilter": {"name": "ButtonFilter", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "startdate": {"name": "StartDate", "type": "TDateTimePicker"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "enddate": {"name": "EndDate", "type": "TDateTimePicker"}, "openfiledialog": {"name": "OpenFileDialog", "type": "TOpenDialog"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "loadfile": {"name": "LoadFile", "type": "TAction"}, "buttondelete": {"name": "ButtonDelete", "type": "TToolButton"}, "buttonconvert": {"name": "ButtonConvert", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "editfilename": {"name": "EditFileName", "type": "TEdit"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "buttonsearch": {"name": "ButtonSearch", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "buttonprint": {"name": "ButtonPrint", "type": "TToolButton"}, "popuperrors": {"name": "PopupErrors", "type": "TPopupMenu"}, "clear1": {"name": "Clear1", "type": "TMenuItem"}, "clearerrorlogs": {"name": "ClearErrorLogs", "type": "TAction"}, "refreshincoming": {"name": "RefreshIncoming", "type": "TAction"}, "selectall": {"name": "SelectAll", "type": "TAction"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "buttonconfig": {"name": "ButtonConfig", "type": "TToolButton"}, "convertfilea": {"name": "ConvertFileA", "type": "TAction"}, "gridimage": {"name": "GridImage", "type": "TImageList"}, "deleteincoming": {"name": "DeleteIncoming", "type": "TAction"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panelfilename": {"name": "PanelFileName", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panelfilter": {"name": "PanelFilter", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "filerich": {"name": "FileRich", "type": "TRichEdit"}, "splitter2": {"name": "Splitter2", "type": "TSplitter"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "splitter1": {"name": "Splitter1", "type": "TSplitter"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "listboxerrors": {"name": "ListBoxErrors", "type": "TListBox"}, "gridwuincoming": {"name": "GridWUIncoming", "type": "TDBGrid"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "getconfig": {"name": "GetConfig", "type": "TAction"}, "searcheditid": {"name": "SearchEditID", "type": "TSearchEdit"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "accept": {"name": "Accept", "type": "TAction"}, "excelexporter1": {"name": "ExcelExporter1", "type": "TExcelExporter"}, "loadfile1": {"name": "LoadFile1", "type": "TMenuItem"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "incomingfilter": {"name": "IncomingFilter", "type": "TAction"}, "searcheditreference": {"name": "SearchEditReference", "type": "TSearchEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "comboboxkind": {"name": "ComboBoxKind", "type": "TComboBox"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "printwithinterval": {"name": "PrintWithInterval", "type": "TAction"}, "printtotal": {"name": "PrintTotal", "type": "TAction"}, "excelexportercomplex": {"name": "ExcelExporterComplex", "type": "TExcelExporter"}, "n8": {"name": "N8", "type": "TMenuItem"}, "n9": {"name": "N9", "type": "TMenuItem"}, "n10": {"name": "N10", "type": "TMenuItem"}, "n11": {"name": "N11", "type": "TMenuItem"}, "n12": {"name": "N12", "type": "TMenuItem"}, "n13": {"name": "N13", "type": "TMenuItem"}, "n14": {"name": "N14", "type": "TMenuItem"}, "n15": {"name": "N15", "type": "TMenuItem"}, "branchfilter": {"name": "BranchFilter", "type": "TCheckListBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "combofilter": {"name": "ComboFilter", "type": "TDBViewComboBox"}, "fevents": {"name": "FEvents", "type": "IWesternUnionFormEvents"}}, {});
  U.init(async () => {
    U.var_("WesternUnionForm", null, "TWesternUnionForm");
    U.var_("FilterFilialID", null, "TStringList");
  });
  U.method("TWesternUnionForm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TWesternUnionForm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TWesternUnionForm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TWesternUnionForm", "Initialize", null, arguments);
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
  U.method("TWesternUnionForm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TWesternUnionForm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TWesternUnionForm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TWesternUnionForm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TWesternUnionForm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TWesternUnionForm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TWesternUnionForm", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TWesternUnionForm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TWesternUnionForm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TWesternUnionForm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TWesternUnionForm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TWesternUnionForm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TWesternUnionForm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TWesternUnionForm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TWesternUnionForm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TWesternUnionForm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TWesternUnionForm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TWesternUnionForm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TWesternUnionForm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TWesternUnionForm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWesternUnionForm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWesternUnionForm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWesternUnionForm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWesternUnionForm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWesternUnionForm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWesternUnionForm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TWesternUnionForm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWesternUnionForm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TWesternUnionForm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TWesternUnionForm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TWesternUnionForm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TWesternUnionForm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TWesternUnionForm", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TWesternUnionForm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TWesternUnionForm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TWesternUnionForm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TWesternUnionForm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TWesternUnionForm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TWesternUnionForm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TWesternUnionForm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TWesternUnionForm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TWesternUnionForm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TWesternUnionForm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TWesternUnionForm", "GetFilterBody", async function GetFilterBody(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "i": 0, "filterbranchbody": '', "filterkindbody": '', "filterbody": ''};
  L0["checkbodytext"] = $.fn(async function CheckBodyText(p0) {
  const L1 = {"abody": $.copyArg(p0), result: '', "filterseperat": ''};
  await $.fixArgs(L1, ["abody"]);
  if ($.truthy(($.ne(L1["abody"], (await $.v(C, "EmptyStr")))))) {
    L1["filterseperat"] = "OR";
  } else {
    L1["filterseperat"] = (await $.v(C, "EmptyStr"));
  }
  L1["result"] = L1["filterseperat"];
  return L1.result;
});
  {
    const $t1 = (await $.v(C, "BranchFilter"));
    const $t2 = (await $.wv([$t1], "DataModWU", C, false));
    if ($.truthy($.eq((await $.mv((await $.wv([$t1, $t2], "Items", C, false)), "Count")), 0))) {
      return L0.result;
    }
    await $.wset([$t1, $t2], "FilterBranchBody", (await $.wv([$t1, $t2], "EmptyStr", C, false)), { get: async () => L0["filterbranchbody"], set: async (v) => { L0["filterbranchbody"] = v; }, local: true });
    { const $t3 = $.sub((await $.mv((await $.wv([$t1, $t2], "Items", C, false)), "Count")), 1);
      await $.wset([$t1, $t2], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t4 = true;
      for (;;) {
        if (!$t4) { await $.wset([$t1, $t2], "I", $.succ((await $.wv([$t1, $t2], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t4 = false;
        if (!($.ord((await $.wv([$t1, $t2], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t3))) break;
        if ($.truthy((await $.idx((await $.wv([$t1, $t2], "Checked", C, false)), [(await $.wv([$t1, $t2], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])))) {
          await $.wset([$t1, $t2], "FilterBranchBody", $.add($.add($.add($.add((await $.wv([$t1, $t2], "FilterBranchBody", { get: async () => L0["filterbranchbody"], set: async (v) => { L0["filterbranchbody"] = v; }, local: true }, false)), (await $.wcall([$t1, $t2], "CheckBodyText", [(await $.wv([$t1, $t2], "FilterBranchBody", { get: async () => L0["filterbranchbody"], set: async (v) => { L0["filterbranchbody"] = v; }, local: true }, false))], { get: async () => L0["checkbodytext"], set: async (v) => { L0["checkbodytext"] = v; }, local: true }))), "(BranchID="), (await $.idx((await $.mv((await $.wcall([$t1, $t2], "TStringList", [(await $.wcall([$t1, $t2], "Pointer", [(await $.mv((await $.wv([$t1, $t2], "BranchFilter", C, false)), "Tag"))], C))], C)), "Strings")), [(await $.wv([$t1, $t2], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), ")"), { get: async () => L0["filterbranchbody"], set: async (v) => { L0["filterbranchbody"] = v; }, local: true });
        }
        await $.tick();
      }
    }
    if ($.truthy(($.ne((await $.wv([$t1, $t2], "FilterBranchBody", { get: async () => L0["filterbranchbody"], set: async (v) => { L0["filterbranchbody"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "EmptyStr", C, false)))))) {
      await $.wset([$t1, $t2], "FilterBranchBody", $.add($.add("(", (await $.wv([$t1, $t2], "FilterBranchBody", { get: async () => L0["filterbranchbody"], set: async (v) => { L0["filterbranchbody"] = v; }, local: true }, false))), ")"), { get: async () => L0["filterbranchbody"], set: async (v) => { L0["filterbranchbody"] = v; }, local: true });
    } else {
      await $.wset([$t1, $t2], "FilterBranchBody", (await $.wv([$t1, $t2], "EmptyStr", C, false)), { get: async () => L0["filterbranchbody"], set: async (v) => { L0["filterbranchbody"] = v; }, local: true });
    }
    {
      const $t5 = (await $.wv([$t1, $t2], "ComboBoxKind", C, false));
      { const $t6 = (await $.wv([$t1, $t2, $t5], "ItemIndex", C, false));
        if ($.eq($t6, 0)) {
          await $.wset([$t1, $t2, $t5], "FilterKindBody", (await $.wv([$t1, $t2, $t5], "EmptyStr", C, false)), { get: async () => L0["filterkindbody"], set: async (v) => { L0["filterkindbody"] = v; }, local: true });
        }
        else if ($.eq($t6, 1)) {
          await $.wset([$t1, $t2, $t5], "FilterKindBody", $.add($.add((await $.wv([$t1, $t2, $t5], "FilterKindBody", { get: async () => L0["filterkindbody"], set: async (v) => { L0["filterkindbody"] = v; }, local: true }, false)), (await $.wcall([$t1, $t2, $t5], "CheckBodyText", [(await $.wv([$t1, $t2, $t5], "FilterKindBody", { get: async () => L0["filterkindbody"], set: async (v) => { L0["filterkindbody"] = v; }, local: true }, false))], { get: async () => L0["checkbodytext"], set: async (v) => { L0["checkbodytext"] = v; }, local: true }))), "(KIND = 'P')"), { get: async () => L0["filterkindbody"], set: async (v) => { L0["filterkindbody"] = v; }, local: true });
        }
        else if ($.eq($t6, 2)) {
          await $.wset([$t1, $t2, $t5], "FilterKindBody", $.add($.add((await $.wv([$t1, $t2, $t5], "FilterKindBody", { get: async () => L0["filterkindbody"], set: async (v) => { L0["filterkindbody"] = v; }, local: true }, false)), (await $.wcall([$t1, $t2, $t5], "CheckBodyText", [(await $.wv([$t1, $t2, $t5], "FilterKindBody", { get: async () => L0["filterkindbody"], set: async (v) => { L0["filterkindbody"] = v; }, local: true }, false))], { get: async () => L0["checkbodytext"], set: async (v) => { L0["checkbodytext"] = v; }, local: true }))), "(KIND = 'S')"), { get: async () => L0["filterkindbody"], set: async (v) => { L0["filterkindbody"] = v; }, local: true });
        }
      }
    }
    if ($.truthy(($.ne((await $.wv([$t1, $t2], "FilterKindBody", { get: async () => L0["filterkindbody"], set: async (v) => { L0["filterkindbody"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "EmptyStr", C, false)))))) {
      await $.wset([$t1, $t2], "FilterKindBody", $.add($.add("(", (await $.wv([$t1, $t2], "FilterKindBody", { get: async () => L0["filterkindbody"], set: async (v) => { L0["filterkindbody"] = v; }, local: true }, false))), ")"), { get: async () => L0["filterkindbody"], set: async (v) => { L0["filterkindbody"] = v; }, local: true });
    } else {
      await $.wset([$t1, $t2], "FilterKindBody", (await $.wv([$t1, $t2], "EmptyStr", C, false)), { get: async () => L0["filterkindbody"], set: async (v) => { L0["filterkindbody"] = v; }, local: true });
    }
    if ($.truthy((await $.and_(($.not(($.eq((await $.wv([$t1, $t2], "FilterBranchBody", { get: async () => L0["filterbranchbody"], set: async (v) => { L0["filterbranchbody"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "EmptyStr", C, false)))))), async () => ($.not(($.eq((await $.wv([$t1, $t2], "FilterKindBody", { get: async () => L0["filterkindbody"], set: async (v) => { L0["filterkindbody"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "EmptyStr", C, false)))))))))) {
      await $.wset([$t1, $t2], "FilterBody", $.add($.add((await $.wv([$t1, $t2], "FilterBranchBody", { get: async () => L0["filterbranchbody"], set: async (v) => { L0["filterbranchbody"] = v; }, local: true }, false)), "AND"), (await $.wv([$t1, $t2], "FilterKindBody", { get: async () => L0["filterkindbody"], set: async (v) => { L0["filterkindbody"] = v; }, local: true }, false))), { get: async () => L0["filterbody"], set: async (v) => { L0["filterbody"] = v; }, local: true });
    } else {
      await $.wset([$t1, $t2], "FilterBody", $.add((await $.wv([$t1, $t2], "FilterBranchBody", { get: async () => L0["filterbranchbody"], set: async (v) => { L0["filterbranchbody"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "FilterKindBody", { get: async () => L0["filterkindbody"], set: async (v) => { L0["filterkindbody"] = v; }, local: true }, false))), { get: async () => L0["filterbody"], set: async (v) => { L0["filterbody"] = v; }, local: true });
    }
    if ($.truthy($.ne((await $.wv([$t1, $t2], "FilterBody", { get: async () => L0["filterbody"], set: async (v) => { L0["filterbody"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "EmptyStr", C, false))))) {
      await $.mset((await $.wv([$t1, $t2], "DataWUIncoming", C, false)), "Filter", (await $.wv([$t1, $t2], "FilterBody", { get: async () => L0["filterbody"], set: async (v) => { L0["filterbody"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t1, $t2], "DataWUIncoming", C, false)), "Filtered", (await $.wv([$t1, $t2], "True", C, false)));
    } else {
      await $.mset((await $.wv([$t1, $t2], "DataWUIncoming", C, false)), "Filtered", (await $.wv([$t1, $t2], "False", C, false)));
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("ConvertFile", async function ConvertFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "temp": 0, "tempdate": 0};
  L0["temp"] = 0;
  {
    const $t7 = (await $.v(C, "WesternUnionForm"));
    const $t8 = (await $.wv([$t7], "DataModWU", C, false));
    if ($.truthy((await $.or_(($.eq((await $.mv((await $.wv([$t7, $t8], "EditFileName", C, false)), "Text")), "")), async () => ($.not((await $.wcall([$t7, $t8], "FileExists", [(await $.mv((await $.wv([$t7, $t8], "EditFileName", C, false)), "Text"))], C)))))))) {
      return L0.result;
    }
    { const $t9 = $.sub((await $.mv((await $.mv((await $.wv([$t7, $t8], "FileRich", C, false)), "Lines")), "Count")), 1);
      await $.wset([$t7, $t8], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t10 = true;
      for (;;) {
        if (!$t10) { await $.wset([$t7, $t8], "i", $.succ((await $.wv([$t7, $t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t10 = false;
        if (!($.ord((await $.wv([$t7, $t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t9))) break;
        if ($.truthy($.eq((await $.wcall([$t7, $t8], "Trim", [(await $.idx((await $.mv((await $.wv([$t7, $t8], "FileRich", C, false)), "Lines")), [(await $.wv([$t7, $t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C)), ""))) {
          continue;
        }
        await $.stmt((await $.mcall((await $.wv([$t7, $t8], "TempPack", C, false)), "CallProcedure", ["ConvertFileToTable", [(await $.idx((await $.mv((await $.wv([$t7, $t8], "FileRich", C, false)), "Lines")), [(await $.wv([$t7, $t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), (await $.wv([$t7, $t8], "Temp", { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }, false))]])));
        await $.tick();
      }
    }
    await $.wset([$t7, $t8], "TempDate", (await $.mcall((await $.wv([$t7, $t8], "TempPack", C, false)), "GetParameter", [1])), { get: async () => L0["tempdate"], set: async (v) => { L0["tempdate"] = v; }, local: true });
    await $.mset((await $.wv([$t7, $t8], "sTarTDate", C, false)), "Date", (await $.wv([$t7, $t8], "TempDate", { get: async () => L0["tempdate"], set: async (v) => { L0["tempdate"] = v; }, local: true }, false)));
    await $.mset((await $.wv([$t7, $t8], "endDate", C, false)), "Date", (await $.wv([$t7, $t8], "TempDate", { get: async () => L0["tempdate"], set: async (v) => { L0["tempdate"] = v; }, local: true }, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TWesternUnionForm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "stdt": 0, "endt": 0, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "WesternUnionForm", Self);
  await $.set(C, "DataModWU", (await $.mcall((await $.v(C, "TDatamodWU")), "Create", [Self])));
  await $.set(C, "FormConfig", (await $.mcall((await $.v(C, "TFormConfig")), "Create", [Self])));
  await $.mset((await $.v(C, "StartDate")), "Date", (await $.v(C, "Date")));
  await $.mset((await $.v(C, "EndDate")), "Date", (await $.v(C, "Date")));
  L0["stdt"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "StartDate")), "Date"))]));
  L0["endt"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "EndDate")), "Date"))]));
  {
    const $t11 = (await $.v(C, "DataModWU"));
    const $t12 = (await $.wv([$t11], "ComboFilter", C, false));
    await $.stmt((await $.mcall((await $.wv([$t11, $t12], "DataWUIncoming", C, false)), "SetVariable", ["StDate", (await $.wv([$t11, $t12], "StDt", { get: async () => L0["stdt"], set: async (v) => { L0["stdt"] = v; }, local: true }, false))])));
    await $.stmt((await $.mcall((await $.wv([$t11, $t12], "DataWUIncoming", C, false)), "SetVariable", ["EnDate", (await $.wv([$t11, $t12], "EnDt", { get: async () => L0["endt"], set: async (v) => { L0["endt"] = v; }, local: true }, false))])));
    await $.mset((await $.wv([$t11, $t12], "DataWUIncoming", C, false)), "Active", (await $.wv([$t11, $t12], "True", C, false)));
    await $.mset((await $.wv([$t11, $t12], "DataAccount", C, false)), "Active", (await $.wv([$t11, $t12], "True", C, false)));
    await $.mset((await $.wv([$t11, $t12], "DataValute", C, false)), "Active", (await $.wv([$t11, $t12], "True", C, false)));
    await $.mset((await $.wv([$t11, $t12], "DataBranch", C, false)), "Active", (await $.wv([$t11, $t12], "True", C, false)));
    await $.stmt((await $.mcall((await $.wv([$t11, $t12], "Items", C, false)), "Insert", [0, "Bütün fililallar"])));
    await $.wset([$t11, $t12], "ItemIndex", 0, C);
  }
  await $.mset((await $.v(C, "ComboBoxKind")), "ItemIndex", 0);
  await $.set(C, "FilterFilialID", (await $.mv((await $.v(C, "TStringList")), "Create")));
  {
    const $t13 = (await $.v(C, "DataModWU"));
    const $t14 = (await $.wv([$t13], "BranchFilter", C, false));
    await $.mcall((await $.wv([$t13, $t14], "BranchFilter", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t13, $t14], "DataBranch", C, false)), "First", []);
    await $.mset((await $.wv([$t13, $t14], "BranchFilter", C, false)), "Tag", (await $.wcall([$t13, $t14], "Integer", [(await $.wv([$t13, $t14], "FilterFilialID", C, true))], C)));
    await $.wset([$t13, $t14], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
    while ($.truthy($.not((await $.mv((await $.wv([$t13, $t14], "DataBranch", C, false)), "Eof"))))) {
      await $.stmt((await $.mcall((await $.wv([$t13, $t14], "Items", C, false)), "Add", [(await $.mv((await $.mcall((await $.wv([$t13, $t14], "DataBranch", C, false)), "FieldbyName", ["BRANCHNAME"])), "AsString"))])));
      { const $t15 = await $.iset((await $.wv([$t13, $t14], "Checked", C, false)), [(await $.wv([$t13, $t14], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.wv([$t13, $t14], "True", C, false))); if ($t15 !== undefined) { await $.wset([$t13, $t14], "Checked", $t15, C); } }
      await $.stmt((await $.mcall((await $.wcall([$t13, $t14], "TStringList", [(await $.wcall([$t13, $t14], "Pointer", [(await $.wv([$t13, $t14], "Tag", C, false))], C))], C)), "Add", [(await $.mv((await $.mcall((await $.wv([$t13, $t14], "DataBranch", C, false)), "FieldbyName", ["BRANCHID"])), "AsString"))])));
      await $.stmt((await $.wcall([$t13, $t14], "Inc", [$.ref(async () => (await $.wv([$t13, $t14], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), async ($t16) => { await $.wset([$t13, $t14], "I", $t16, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); })], C)));
      await $.mcall((await $.wv([$t13, $t14], "DataBranch", C, false)), "Next", []);
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWesternUnionForm", "LoadFileExecute", async function LoadFileExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "cdir": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["cdir"] = (await $.v(C, "GetCurrentDir"));
  try {
    if ($.truthy((await $.mv((await $.v(C, "OpenFileDialog")), "Execute")))) {
      await $.mset((await $.v(C, "EditFileName")), "Text", (await $.mv((await $.v(C, "OpenFileDialog")), "FileName")));
      await $.mset((await $.v(C, "PanelFileName")), "Caption", (await $.call(C, "ExtractFileName", [(await $.mv((await $.v(C, "OpenFileDialog")), "FileName"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "FileRich")), "Lines")), "LoadFromFile", [(await $.mv((await $.v(C, "OpenFileDialog")), "FileName"))])));
    }
  } finally {
    await $.stmt((await $.call(C, "SetCurrentDir", [L0["cdir"]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWesternUnionForm", "ListBoxErrorsDrawItem", async function ListBoxErrorsDrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"control": $.copyArg(p0), "index": $.copyArg(p1), "rect": $.copyArg(p2), "state": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["control", "index", "rect", "state"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ListBoxErrors")), "Canvas")), "TextRect", [L0["rect"], 22, (await $.mv(L0["rect"], "Top")), (await $.idx((await $.mv((await $.v(C, "ListBoxErrors")), "Items")), [L0["index"]]))])));
  await $.stmt((await $.mcall((await $.v(C, "ImageList")), "draw", [(await $.mv((await $.v(C, "ListBoxErrors")), "Canvas")), $.add((await $.mv(L0["rect"], "Left")), 2), (await $.mv(L0["rect"], "Top")), 8, true])));
  return L0.result;
}, {"params": ["Control", "Index", "Rect", "State"], "kind": "procedure", "ptypes": ["TWinControl", "Integer", "TRect", "TOwnerDrawState"]});
  U.method("TWesternUnionForm", "ClearErrorLogsExecute", async function ClearErrorLogsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "ListBoxErrors")), "Items")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWesternUnionForm", "RefreshIncomingExecute", async function RefreshIncomingExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "stdt": 0, "endt": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["stdt"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "StartDate")), "Date"))]));
  L0["endt"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "EndDate")), "Date"))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWU")), "DataWUIncoming")), "SetVariable", ["StDate", L0["stdt"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWU")), "DataWUIncoming")), "SetVariable", ["EnDate", L0["endt"]])));
  await $.mcall((await $.mv((await $.v(C, "DataModWU")), "DataWUIncoming")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "GridWUIncoming")), "SelectedRows")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWesternUnionForm", "SelectAllExecute", async function SelectAllExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (await $.v(C, "GridWUIncoming"));
    const $t18 = (await $.wv([$t17], "SelectedRows", C, false));
    const $t19 = (await $.mv((await $.wv([$t17, $t18], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t17, $t18, $t19], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t17, $t18, $t19], "First", [], C));
      while ($.truthy($.not((await $.wv([$t17, $t18, $t19], "Eof", C, false))))) {
        await $.wset([$t17, $t18, $t19], "CurrentRowSelected", (await $.wv([$t17, $t18, $t19], "True", C, false)), C);
        await $.stmt($.wcall([$t17, $t18, $t19], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t17, $t18, $t19], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWesternUnionForm", "ToolButton9Click", async function ToolButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "EditFileName")), "Text")), "")), async () => ((await $.call(C, "FileExists", [(await $.mv((await $.v(C, "EditFileName")), "Text"))]))))))) {
    {
      const $t20 = (await $.v(C, "DataModWU"));
      await $.mcall((await $.wv([$t20], "DataTempFile", C, false)), "Edit", []);
      await $.stmt((await $.mcall((await $.wcall([$t20], "TBlobField", [(await $.mcall((await $.wv([$t20], "DataTempFile", C, false)), "FieldByName", ["FileBody"]))], C)), "LoadFromFile", [(await $.mv((await $.wv([$t20], "EditFileName", C, false)), "Text"))])));
      await $.mcall((await $.wv([$t20], "DataTempFile", C, false)), "Post", []);
      await $.mcall((await $.mv((await $.wv([$t20], "sboapiDataModule", C, false)), "SBSession")), "Commit", []);
      await $.stmt((await $.wcall([$t20], "ShowMessage", [(await $.mcall((await $.wv([$t20], "TempPack", C, false)), "CallStringFunction", ["ConvertFileToTable", [$.sub((await $.wcall([$t20], "Length", [(await $.mv((await $.wv([$t20], "FileRich", C, false)), "Text"))], C)), 1)]]))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWesternUnionForm", "ConvertFileAExecute", async function ConvertFileAExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "ConvertFile", []));
  await $.mcall((await $.v(C, "RefreshIncoming")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWesternUnionForm", "GridWUIncomingDrawColumnCell", async function GridWUIncomingDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t21 = (L0["sender"]);
    if ($.truthy($.ne((await $.mv((await $.mv((await $.mv(((await $.wv([$t21], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "RecordCount")), 0))) {
      { const $t22 = (await $.mv((await $.mcall((await $.mv((await $.mv(((await $.wv([$t21], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "FieldByName", ["Status"])), "AsInteger"));
        if ($.eq($t22, 0)) {
          await $.wset([$t21], "ImageIndex", 0, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t22, 1)) {
          await $.wset([$t21], "ImageIndex", 1, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t21], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 2)), async () => ($.ne((await $.wv([$t21], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t21], "Canvas", C, false)), "TextRect", [(await $.wv([$t21], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t21], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t21], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), ""])));
        await $.stmt((await $.mcall((await $.wv([$t21], "GridImage", C, false)), "Draw", [(await $.wv([$t21], "Canvas", C, false)), $.add((await $.mv((await $.wv([$t21], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), 2), $.add((await $.mv((await $.wv([$t21], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t21], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t21], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t21], "DefaultDrawColumnCell", [(await $.wv([$t21], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t21], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t21], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t21], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv(((await $.wv([$t21], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "FieldByName", ["KIND"])), "AsString")), "S"))) {
        await $.wset([$t21], "ImageIndex", 2, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
      } else {
        await $.wset([$t21], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
      }
    }
    if ($.truthy((await $.and_(($.eq((await $.wv([$t21], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 0)), async () => ($.ne((await $.wv([$t21], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
      await $.stmt((await $.mcall((await $.wv([$t21], "GridImage", C, false)), "Draw", [(await $.wv([$t21], "Canvas", C, false)), (await $.mv((await $.wv([$t21], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t21], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t21], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t21], "True", C, false))])));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TWesternUnionForm", "DeleteIncomingExecute", async function DeleteIncomingExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "GridWUIncoming")), "SetFocus", []);
  await $.mset((await $.mv((await $.v(C, "GridWUIncoming")), "SelectedRows")), "CurrentRowSelected", $.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "GridWUIncoming")), "DataSource")), "DataSet")), "RecordCount")), 0));
  { const $t23 = $.sub((await $.mv((await $.mv((await $.v(C, "GridWUIncoming")), "SelectedRows")), "Count")), 1);
    L0["i"] = 0;
    let $t24 = true;
    for (;;) {
      if (!$t24) { L0["i"] = $.succ(L0["i"], 1); }
      $t24 = false;
      if (!($.ord(L0["i"]) <= $.ord($t23))) break;
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridWUIncoming")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridWUIncoming")), "SelectedRows")), "items")), [L0["i"]]))]))])));
      { const $t25 = (await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["Emeliyyat  #%d silinsinmi ?", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridWUIncoming")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "Asinteger"))]])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno")), (await $.v(C, "mbcancel")), (await $.v(C, "mball"))], 0]));
        if ($.eq($t25, (await $.v(C, "mryes")))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWU")), "TempPack")), "CallProcedure", ["wu_incoming_delete", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridWUIncoming")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
          await $.mcall((await $.v(C, "RefreshIncoming")), "Execute", []);
        }
        else if ($.eq($t25, (await $.v(C, "mrno")))) {
          return L0.result;
        }
        else if ($.eq($t25, (await $.v(C, "mrcancel")))) {
          break;
        }
        else if ($.eq($t25, (await $.v(C, "mrall")))) {
          { const $t26 = (await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["%d sayda emeliyyat silinsinmi ?", [(await $.mv((await $.mv((await $.v(C, "GridWUIncoming")), "SelectedRows")), "Count"))]])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0]));
            if ($.eq($t26, (await $.v(C, "mryes")))) {
              { const $t27 = $.sub((await $.mv((await $.mv((await $.v(C, "GridWUIncoming")), "SelectedRows")), "Count")), 1);
                L0["j"] = 0;
                let $t28 = true;
                for (;;) {
                  if (!$t28) { L0["j"] = $.succ(L0["j"], 1); }
                  $t28 = false;
                  if (!($.ord(L0["j"]) <= $.ord($t27))) break;
                  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridWUIncoming")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridWUIncoming")), "SelectedRows")), "items")), [L0["j"]]))]))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWU")), "TempPack")), "CallProcedure", ["wu_incoming_delete", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridWUIncoming")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
                  await $.tick();
                }
              }
              await $.mcall((await $.v(C, "RefreshIncoming")), "Execute", []);
              break;
            }
            else if ($.eq($t26, (await $.v(C, "mrno")))) {
              return L0.result;
            }
          }
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWesternUnionForm", "GridWUIncomingTitleClick", async function GridWUIncomingTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy($.eq((await $.mv(L0["column"], "FieldName")), ""))) {
    return L0.result;
  }
  {
    const $t29 = (await $.v(C, "DataModWU"));
    await $.stmt((await $.mcall((await $.wv([$t29], "DataWUIncoming", C, false)), "SetVariable", ["Title", (await $.mv((await $.wv([$t29], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName"))])));
    await $.mcall((await $.wv([$t29], "DataWUIncoming", C, false)), "Refresh", []);
  }
  await $.mcall((await $.mv((await $.v(C, "GridWUIncoming")), "SelectedRows")), "Clear", []);
  {
    const $t30 = (await $.v(C, "GridWUIncoming"));
    { const $t31 = $.sub((await $.mv((await $.wv([$t30], "Columns", C, false)), "Count")), 1);
      await $.wset([$t30], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t32 = true;
      for (;;) {
        if (!$t32) { await $.wset([$t30], "i", $.succ((await $.wv([$t30], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t32 = false;
        if (!($.ord((await $.wv([$t30], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t31))) break;
        await $.mset((await $.mv((await $.mv((await $.idx((await $.wv([$t30], "Columns", C, false)), [(await $.wv([$t30], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Title")), "Font")), "Style", []);
        await $.tick();
      }
    }
  }
  await $.mset((await $.mv((await $.mv(L0["column"], "Title")), "Font")), "Style", [(await $.v(C, "fsUnderline"))]);
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TWesternUnionForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PanelFilter")), "Visible", false);
  await $.mset((await $.v(C, "ButtonFilter")), "Down", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWesternUnionForm", "GetConfigExecute", async function GetConfigExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t33 = (await $.v(C, "FormConfig"));
    const $t34 = (await $.wv([$t33], "DataModWU", C, false));
    await $.mset((await $.wv([$t33, $t34], "P_ComboDC", C, false)), "ItemIndex", 0);
    await $.mset((await $.wv([$t33, $t34], "R_ComboDC", C, false)), "ItemIndex", 0);
    await $.mset((await $.wv([$t33, $t34], "P_ComboBranch", C, false)), "ItemIndex", 0);
    await $.mset((await $.wv([$t33, $t34], "R_ComboBranch", C, false)), "ItemIndex", 0);
    await $.mcall((await $.wv([$t33, $t34], "Revenue", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t33, $t34], "Principial", C, false)), "Clear", []);
    if ($.truthy($.not((await $.mv((await $.wv([$t33, $t34], "AccountPrincipial", C, false)), "Active"))))) {
      await $.mset((await $.wv([$t33, $t34], "AccountPrincipial", C, false)), "Active", (await $.wv([$t33, $t34], "true", C, false)));
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t33, $t34], "AccountRevenue", C, false)), "Active"))))) {
      await $.mset((await $.wv([$t33, $t34], "AccountRevenue", C, false)), "Active", (await $.wv([$t33, $t34], "true", C, false)));
    }
    await $.mset((await $.wv([$t33, $t34], "CheckBox1", C, false)), "Checked", $.eq((await $.mv((await $.mcall((await $.wv([$t33, $t34], "DataConfig", C, false)), "FieldByName", ["PRINCIPIALTRANS"])), "AsInteger")), 1));
    await $.stmt($.wcall([$t33, $t34], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWesternUnionForm", "AcceptExecute", async function AcceptExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t35 = (await $.v(C, "DataModWU"));
    const $t36 = (await $.wv([$t35], "GridWUIncoming", C, false));
    try {
      if ($.truthy((await $.mv((await $.wv([$t35, $t36], "DataWUIncoming", C, false)), "IsEmpty")))) {
        return L0.result;
      }
      await $.mcall((await $.wv([$t35, $t36], "DataWUIncoming", C, false)), "DisableControls", []);
      await $.stmt($.wcall([$t35, $t36], "SetFocus", [], C));
      await $.mset((await $.wv([$t35, $t36], "SelectedRows", C, false)), "CurrentRowSelected", $.ne((await $.mv((await $.mv((await $.wv([$t35, $t36], "DataSource", C, false)), "DataSet")), "RecordCount")), 0));
      { const $t37 = $.sub((await $.mv((await $.wv([$t35, $t36], "SelectedRows", C, false)), "Count")), 1);
        await $.wset([$t35, $t36], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t38 = true;
        for (;;) {
          if (!$t38) { await $.wset([$t35, $t36], "i", $.succ((await $.wv([$t35, $t36], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t38 = false;
          if (!($.ord((await $.wv([$t35, $t36], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t37))) break;
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t35, $t36], "DataSource", C, false)), "DataSet")), "GotoBookmark", [(await $.wcall([$t35, $t36], "pointer", [(await $.idx((await $.mv((await $.wv([$t35, $t36], "SelectedRows", C, false)), "items")), [(await $.wv([$t35, $t36], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))])));
          await $.stmt((await $.mcall((await $.wv([$t35, $t36], "TempPack", C, false)), "CallProcedure", ["SetTransaction", [(await $.mv((await $.mcall((await $.wv([$t35, $t36], "DataWUIncoming", C, false)), "FieldByName", ["ID"])), "AsInteger"))]])));
          await $.tick();
        }
      }
    } finally {
      await $.mcall((await $.wv([$t35, $t36], "RefreshIncoming", C, false)), "Execute", []);
      await $.mcall((await $.wv([$t35, $t36], "DataWUIncoming", C, false)), "EnableControls", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWesternUnionForm", "ComboFilterDrawItem", async function ComboFilterDrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"control": $.copyArg(p0), "index": $.copyArg(p1), "rect": $.copyArg(p2), "state": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["control", "index", "rect", "state"]);
  {
    const $t39 = L0["control"];
    await $.stmt((await $.mcall((await $.wv([$t39], "Canvas", C, false)), "FillRect", [(await $.wv([$t39], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false))])));
    if ($.truthy((await $.and_(($.eq((await $.wv([$t39], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 0)), async () => ($.not(($.in_((await $.wv([$t39], "odComboBoxEdit", C, false)), (await $.wv([$t39], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false)))))))))) {
      if ($.truthy($.in_((await $.wv([$t39], "odSelected", C, false)), (await $.wv([$t39], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))))) {
        await $.mset((await $.mv((await $.wv([$t39], "Canvas", C, false)), "Font")), "Color", (await $.wv([$t39], "clWhite", C, false)));
      } else {
        await $.mset((await $.mv((await $.wv([$t39], "Canvas", C, false)), "Font")), "Color", (await $.wv([$t39], "clBlue", C, false)));
      }
    }
    await $.stmt((await $.mcall((await $.wv([$t39], "Canvas", C, false)), "TextOut", [$.add((await $.mv((await $.wv([$t39], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), 2), (await $.mv((await $.wv([$t39], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.idx((await $.wv([$t39], "Items", C, false)), [(await $.wv([$t39], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))])));
  }
  return L0.result;
}, {"params": ["Control", "Index", "Rect", "State"], "kind": "procedure", "ptypes": ["TWinControl", "Integer", "TRect", "TOwnerDrawState"]});
  U.method("TWesternUnionForm", "ComboFilterChange", async function ComboFilterChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t40 = (await $.v(C, "DataModWU"));
    const $t41 = (await $.wv([$t40], "ComboFilter", C, false));
    if ($.truthy($.eq((await $.wv([$t40, $t41], "ItemIndex", C, false)), 0))) {
      await $.mset((await $.wv([$t40, $t41], "DataWUIncoming", C, false)), "Filter", (await $.wv([$t40, $t41], "EmptyStr", C, false)));
    } else {
      await $.mset((await $.wv([$t40, $t41], "DataWUIncoming", C, false)), "Filter", $.add("branchID = ", (await $.mv((await $.mcall((await $.wv([$t40, $t41], "DataBranch", C, false)), "FieldByName", ["branchID"])), "AsString"))));
      await $.stmt((await $.wcall([$t40, $t41], "ShowMessage", [(await $.mv((await $.mcall((await $.wv([$t40, $t41], "DataBranch", C, false)), "FieldByName", ["branchID"])), "AsString"))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWesternUnionForm", "IncomingFilterExecute", async function IncomingFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PanelFilter")), "Visible", (await $.mv((await $.v(C, "ButtonFilter")), "Down")));
  await $.mcall((await $.v(C, "SearchEditID")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWesternUnionForm", "N5DrawItem", async function N5DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "stext": '', "linebottom": 0, "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t42 = L0["acanvas"];
    const $t43 = (await $.wv([$t42], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t44 = (await $.wv([$t42, $t43], "Font", C, false));
      await $.wset([$t42, $t43, $t44], "Name", "Azl Sans Serif", C);
      await $.wset([$t42, $t43, $t44], "Charset", (await $.wv([$t42, $t43, $t44], "RUSSIAN_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t42, $t43, $t44], "Default", C, false)))) {
        await $.wset([$t42, $t43, $t44], "Style", [(await $.wv([$t42, $t43, $t44], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t42, $t43], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t42, $t43], "Pen", C, false)), "Color", (await $.wv([$t42, $t43], "clBlack", C, false)));
      await $.wset([$t42, $t43], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t42, $t43], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t42, $t43], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t42, $t43], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t42, $t43], "MoveTo", [(await $.mv((await $.wv([$t42, $t43], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t42, $t43], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t42, $t43], "LineTo", [(await $.mv((await $.wv([$t42, $t43], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t42, $t43], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t42, $t43], "inc", [$.ref(async () => (await $.wv([$t42, $t43], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t45) => { await $.wset([$t42, $t43], "LineBottom", $t45, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t42, $t43], "Pen", C, false)), "Color", (await $.wv([$t42, $t43], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t42, $t43], "MoveTo", [(await $.mv((await $.wv([$t42, $t43], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t42, $t43], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t42, $t43], "LineTo", [(await $.mv((await $.wv([$t42, $t43], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t42, $t43], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t42, $t43], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t42, $t43], "Brush", C, false)), "Color", (await $.wv([$t42, $t43], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t42, $t43], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t42, $t43], "Font", C, false)), "Color", (await $.wv([$t42, $t43], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t42, $t43], "Font", C, false)), "Color", (await $.wv([$t42, $t43], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t42, $t43], "Brush", C, false)), "Color", (await $.wv([$t42, $t43], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t42, $t43], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t42, $t43], "Font", C, false)), "Color", (await $.wv([$t42, $t43], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t42, $t43], "Font", C, false)), "Color", (await $.wv([$t42, $t43], "clGrayText", C, false)));
        }
      }
      await $.wset([$t42, $t43], "Bar", (await $.wv([$t42, $t43], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t42, $t43], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t42, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t46) => { await $.mset((await $.wv([$t42, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t46); }), 22], C)));
      await $.stmt((await $.wcall([$t42, $t43], "FillRect", [(await $.wv([$t42, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t42, $t43], "TextOut", [$.add((await $.mv((await $.wv([$t42, $t43], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t42, $t43], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), $.add((await $.wv([$t42, $t43], "Caption", C, false)), "      ")], C)));
    }
    await $.wset([$t42, $t43], "SText", (await $.wcall([$t42, $t43], "ShortCutToText", [(await $.wv([$t42, $t43], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t42, $t43], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t42, $t43], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t42, $t43], "TextWidth", [(await $.wv([$t42, $t43], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t42, $t43], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t42, $t43], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t42, $t43], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t47 = (await $.wv([$t42, $t43], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t42, $t43, $t47], "Assigned", [(await $.wv([$t42, $t43, $t47], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t42, $t43, $t47], "Checked", C, false)))) {
            await $.mset((await $.wv([$t42, $t43, $t47], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t42, $t43, $t47], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t42, $t43, $t47], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t42, $t43, $t47], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t42, $t43, $t47], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t42, $t43, $t47], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t42, $t43, $t47], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t42, $t43, $t47], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t42, $t43, $t47], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t42, $t43, $t47], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t42, $t43, $t47], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t42, $t43, $t47], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t42, $t43, $t47], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t42, $t43, $t47], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t48) => { await $.mset((await $.wv([$t42, $t43, $t47], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t48); }), 2], C)));
            await $.stmt((await $.wcall([$t42, $t43, $t47], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t42, $t43, $t47], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t49) => { await $.mset((await $.wv([$t42, $t43, $t47], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t49); }), 2], C)));
            await $.stmt((await $.wcall([$t42, $t43, $t47], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t42, $t43, $t47], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t50) => { await $.mset((await $.wv([$t42, $t43, $t47], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t50); }), 2], C)));
            await $.stmt((await $.wcall([$t42, $t43, $t47], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t42, $t43, $t47], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t51) => { await $.mset((await $.wv([$t42, $t43, $t47], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t51); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t42, $t43, $t47], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t42, $t43, $t47], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t42, $t43, $t47], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t42, $t43, $t47], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t42, $t43, $t47], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t42, $t43, $t47], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t52) => { await $.mset((await $.wv([$t42, $t43, $t47], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t52); }), 1], C)));
            await $.stmt((await $.wcall([$t42, $t43, $t47], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t42, $t43, $t47], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t53) => { await $.mset((await $.wv([$t42, $t43, $t47], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t53); }), 1], C)));
            await $.stmt((await $.wcall([$t42, $t43, $t47], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t42, $t43, $t47], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t54) => { await $.mset((await $.wv([$t42, $t43, $t47], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t54); }), 1], C)));
            await $.stmt((await $.wcall([$t42, $t43, $t47], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t42, $t43, $t47], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t55) => { await $.mset((await $.wv([$t42, $t43, $t47], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t55); }), 1], C)));
            if ($.truthy((await $.wv([$t42, $t43, $t47], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t42, $t43, $t47], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t42, $t43, $t47], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t42, $t43, $t47], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t42, $t43, $t47], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t42, $t43, $t47], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t42, $t43, $t47], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t42, $t43, $t47], "Images", C, false)), "Draw", [(await $.wv([$t42, $t43, $t47], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t42, $t43, $t47], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t42, $t43, $t47], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t42, $t43, $t47], "ImageIndex", C, false)), (await $.wv([$t42, $t43, $t47], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TWesternUnionForm", "SearchEditReferenceExit", async function SearchEditReferenceExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.call(C, "TSearchEdit", [L0["sender"]])), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWesternUnionForm", "ComboBoxKindDrawItem", async function ComboBoxKindDrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"control": $.copyArg(p0), "index": $.copyArg(p1), "rect": $.copyArg(p2), "state": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["control", "index", "rect", "state"]);
  {
    const $t56 = L0["control"];
    await $.stmt((await $.mcall((await $.wv([$t56], "Canvas", C, false)), "FillRect", [(await $.wv([$t56], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false))])));
    if ($.truthy((await $.and_(($.eq((await $.wv([$t56], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 0)), async () => ($.not(($.in_((await $.wv([$t56], "odComboBoxEdit", C, false)), (await $.wv([$t56], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false)))))))))) {
      if ($.truthy($.in_((await $.wv([$t56], "odSelected", C, false)), (await $.wv([$t56], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))))) {
        await $.mset((await $.mv((await $.wv([$t56], "Canvas", C, false)), "Font")), "Color", (await $.wv([$t56], "clWhite", C, false)));
      } else {
        await $.mset((await $.mv((await $.wv([$t56], "Canvas", C, false)), "Font")), "Color", (await $.wv([$t56], "clBlue", C, false)));
      }
    }
    await $.stmt((await $.mcall((await $.wv([$t56], "Canvas", C, false)), "TextOut", [$.add((await $.mv((await $.wv([$t56], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), 2), (await $.mv((await $.wv([$t56], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.idx((await $.wv([$t56], "Items", C, false)), [(await $.wv([$t56], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))])));
  }
  return L0.result;
}, {"params": ["Control", "Index", "Rect", "State"], "kind": "procedure", "ptypes": ["TWinControl", "Integer", "TRect", "TOwnerDrawState"]});
  U.method("TWesternUnionForm", "PrintTotalExecute", async function PrintTotalExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "stdt": 0, "endt": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t57 = (await $.v(C, "DataModWU"));
    if ($.truthy((await $.mv((await $.wv([$t57], "DataWUIncoming", C, false)), "IsEmpty")))) {
      return L0.result;
    }
    try {
      await $.mset((await $.wv([$t57], "Screen", C, false)), "Cursor", (await $.wv([$t57], "crSQLWait", C, false)));
      await $.mcall((await $.wv([$t57], "DataReport", C, false)), "Close", []);
      await $.wset([$t57], "stdt", (await $.wcall([$t57], "Trunc", [(await $.mv((await $.wv([$t57], "StartDate", C, false)), "Date"))], C)), { get: async () => L0["stdt"], set: async (v) => { L0["stdt"] = v; }, local: true });
      await $.wset([$t57], "endt", (await $.wcall([$t57], "Trunc", [(await $.mv((await $.wv([$t57], "EndDate", C, false)), "Date"))], C)), { get: async () => L0["endt"], set: async (v) => { L0["endt"] = v; }, local: true });
      await $.stmt((await $.mcall((await $.wv([$t57], "DataReport", C, false)), "SetVariable", ["StDate", (await $.wv([$t57], "StDt", { get: async () => L0["stdt"], set: async (v) => { L0["stdt"] = v; }, local: true }, false))])));
      await $.stmt((await $.mcall((await $.wv([$t57], "DataReport", C, false)), "SetVariable", ["EnDate", (await $.wv([$t57], "EnDt", { get: async () => L0["endt"], set: async (v) => { L0["endt"] = v; }, local: true }, false))])));
      await $.mset((await $.wv([$t57], "DataReport", C, false)), "Filter", (await $.mv((await $.wv([$t57], "DataWUIncoming", C, false)), "Filter")));
      await $.mcall((await $.wv([$t57], "DataReport", C, false)), "Open", []);
      await $.mcall((await $.wv([$t57], "ExcelExporter1", C, false)), "Report", []);
    } finally {
      await $.mset((await $.wv([$t57], "Screen", C, false)), "Cursor", (await $.wv([$t57], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWesternUnionForm", "PrintWithIntervalExecute", async function PrintWithIntervalExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "stdt": 0, "endt": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t58 = (await $.v(C, "DataModWU"));
    if ($.truthy((await $.mv((await $.wv([$t58], "DataWUIncoming", C, false)), "IsEmpty")))) {
      return L0.result;
    }
    try {
      await $.mset((await $.wv([$t58], "Screen", C, false)), "Cursor", (await $.wv([$t58], "crSQLWait", C, false)));
      await $.mcall((await $.wv([$t58], "DataReport", C, false)), "Close", []);
      await $.wset([$t58], "stdt", (await $.wcall([$t58], "Int", [(await $.mv((await $.wv([$t58], "StartDate", C, false)), "Date"))], C)), { get: async () => L0["stdt"], set: async (v) => { L0["stdt"] = v; }, local: true });
      await $.wset([$t58], "endt", (await $.wcall([$t58], "Int", [(await $.mv((await $.wv([$t58], "EndDate", C, false)), "Date"))], C)), { get: async () => L0["endt"], set: async (v) => { L0["endt"] = v; }, local: true });
      await $.stmt((await $.mcall((await $.wv([$t58], "TempPack", C, false)), "CallProcedure", ["ImportReportTable", [(await $.wv([$t58], "stDt", { get: async () => L0["stdt"], set: async (v) => { L0["stdt"] = v; }, local: true }, false)), (await $.wv([$t58], "EnDt", { get: async () => L0["endt"], set: async (v) => { L0["endt"] = v; }, local: true }, false))]])));
      await $.mcall((await $.wv([$t58], "DataReportComplex", C, false)), "Refresh", []);
      await $.mcall((await $.wv([$t58], "ExcelExporterComplex", C, false)), "Report", []);
    } finally {
      await $.mset((await $.wv([$t58], "Screen", C, false)), "Cursor", (await $.wv([$t58], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWesternUnionForm", "BranchFilterClickCheck", async function BranchFilterClickCheck(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "GetFilterBody", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWesternUnionForm", "ComboBoxKindChange", async function ComboBoxKindChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "GetFilterBody", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
