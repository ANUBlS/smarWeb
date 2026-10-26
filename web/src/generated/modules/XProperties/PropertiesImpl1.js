// Generated from PropertiesImpl1.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PropertiesImpl1", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "ActiveX", "AxCtrls", "Properties_TLB", "StdVcl", "ComCtrls", "ToolWin", "Grids", "Db", "DBGrids", "ExtCtrls", "ActnList", "DBActns", "StdCtrls", "ImgList", "DBGridEh", "Oracledata", "Menus", "CMExcelExport", "DBGridEhGrouping", "GridsEh", "DBViewComboBox", "Mask", "DBCtrlsEh", "DBLookupEh", "ComObj", "ComServ", "DMprop", "FrmPropAddImpl", "frmpropeditImol", "FormInfoImpl", "FrmtypicalImpl", "FrmtranceImpl", "CommonPropImpl", "PropQReportImpl", "FrmProp_paymentImpl", "FrmProp_paymentAddImpl", "gelirimpl", "SBTranslateProc", "sboapiDataModuleImpl", "InfoImpl", "ReportImpl"]);
  const C = [U];
  U.defClass("TPropertiesFrm", "TActiveForm", {"imagelist1": {"name": "ImageList1", "type": "TImageList"}, "mainactionlist": {"name": "MainActionList", "type": "TActionList"}, "refresh": {"name": "Refresh", "type": "TAction"}, "showeditform": {"name": "ShowEditForm", "type": "TAction"}, "showaddform": {"name": "ShowAddForm", "type": "TAction"}, "action1": {"name": "Action1", "type": "TAction"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "setingpopupmenu": {"name": "SetingPopupMenu", "type": "TPopupMenu"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "isertbtn": {"name": "isertbtn", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "n8": {"name": "N8", "type": "TMenuItem"}, "n9": {"name": "N9", "type": "TMenuItem"}, "n10": {"name": "N10", "type": "TMenuItem"}, "n11": {"name": "N11", "type": "TMenuItem"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "accountpopupmenu": {"name": "accountPopupMenu", "type": "TPopupMenu"}, "n13": {"name": "N13", "type": "TMenuItem"}, "n14": {"name": "N14", "type": "TMenuItem"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "editcontractnum": {"name": "editCONTRACTNUM", "type": "TEdit"}, "editname": {"name": "editname", "type": "TEdit"}, "editprop_count": {"name": "editPROP_COUNT", "type": "TEdit"}, "editvalue": {"name": "editvalue", "type": "TEdit"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "n12": {"name": "N12", "type": "TMenuItem"}, "ddfd1": {"name": "ddfd1", "type": "TMenuItem"}, "lavmlumat1": {"name": "lavmlumat1", "type": "TMenuItem"}, "mllakbalamaq1": {"name": "mllakbalamaq1", "type": "TMenuItem"}, "filterpanel": {"name": "FilterPanel", "type": "TPanel"}, "panel": {"name": "Panel", "type": "TPanel"}, "maingrid": {"name": "MainGrid", "type": "TDBGridEh"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "radiogrpcont": {"name": "RadioGrpCont", "type": "TRadioGroup"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "checkboxfilials": {"name": "CheckBoxFilials", "type": "TCheckBox"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "fevents": {"name": "FEvents", "type": "IPropertiesXEvents"}}, {});
  U.init(async () => {
  });
  U.method("TPropertiesFrm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TPropertiesFrm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TPropertiesFrm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TPropertiesFrm", "Initialize", null, arguments);
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
  U.method("TPropertiesFrm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPropertiesFrm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPropertiesFrm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPropertiesFrm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPropertiesFrm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPropertiesFrm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPropertiesFrm", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPropertiesFrm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPropertiesFrm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPropertiesFrm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPropertiesFrm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPropertiesFrm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPropertiesFrm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPropertiesFrm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPropertiesFrm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPropertiesFrm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPropertiesFrm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPropertiesFrm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPropertiesFrm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TPropertiesFrm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "CheckBoxFilialsClick", async function CheckBoxFilialsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DMproperties"));
    const $t2 = (await $.wv([$t1], "DataSetPropIns", C, false));
    if ($.truthy($.eq((await $.mv((await $.wv([$t1, $t2], "CheckBoxFilials", C, false)), "Checked")), (await $.wv([$t1, $t2], "true", C, false))))) {
      await $.stmt($.wcall([$t1, $t2], "Close", [], C));
      { const $t3 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [6], ""); if ($t3 !== undefined) { await $.wset([$t1, $t2], "SQL", $t3, C); } }
      { const $t4 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [6], $.add(" and a.branchid=", (await $.wcall([$t1, $t2], "inttostr", [(await $.mv((await $.wv([$t1, $t2], "DBLookupComboboxEh1", C, false)), "KeyValue"))], C)))); if ($t4 !== undefined) { await $.wset([$t1, $t2], "SQL", $t4, C); } }
      await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    }
  }
  {
    const $t5 = (await $.v(C, "DMproperties"));
    const $t6 = (await $.wv([$t5], "DataSetPropIns", C, false));
    if ($.truthy($.eq((await $.mv((await $.wv([$t5, $t6], "CheckBoxFilials", C, false)), "Checked")), (await $.wv([$t5, $t6], "false", C, false))))) {
      await $.stmt($.wcall([$t5, $t6], "Close", [], C));
      { const $t7 = await $.iset((await $.wv([$t5, $t6], "SQL", C, false)), [6], ""); if ($t7 !== undefined) { await $.wset([$t5, $t6], "SQL", $t7, C); } }
      await $.stmt($.wcall([$t5, $t6], "open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TPropertiesFrm", "lavmlumat1Click", async function lavmlumat1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "InfoFrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "Panel11Click", async function Panel11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FilterPanel")), "Visible", false);
  await $.mset((await $.v(C, "ToolButton9")), "Down", (await $.mv((await $.v(C, "FilterPanel")), "Visible")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPropertiesFrm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPropertiesFrm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TPropertiesFrm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TPropertiesFrm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TPropertiesFrm", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TPropertiesFrm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPropertiesFrm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPropertiesFrm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPropertiesFrm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TPropertiesFrm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TPropertiesFrm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPropertiesFrm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TPropertiesFrm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TPropertiesFrm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPropertiesFrm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPropertiesFrm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DMproperties", (await $.mcall((await $.v(C, "TDMproperties")), "Create", [Self])));
  await $.set(C, "FrmPropAdd", (await $.mcall((await $.v(C, "TFrmPropAdd")), "Create", [Self])));
  await $.set(C, "InfoFrm", (await $.mcall((await $.v(C, "tInfoFrm")), "Create", [Self])));
  await $.set(C, "ReportFrm", (await $.mcall((await $.v(C, "TReportFrm")), "Create", [Self])));
  await $.set(C, "FrmTrance", (await $.mcall((await $.v(C, "TFrmTrance")), "Create", [Self])));
  await $.set(C, "FrmProp_payment", (await $.mcall((await $.v(C, "TFrmProp_payment")), "Create", [Self])));
  await $.set(C, "CommonGrid", (await $.v(C, "MainGrid")));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "ShowAddFormExecute", async function ShowAddFormExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FrmPropAdd")), "Caption", "Əmlak barədə məlumatın yığılması");
  {
    const $t8 = (await $.v(C, "DMproperties"));
    const $t9 = (await $.wv([$t8], "DataSetPropIns", C, false));
    await $.stmt($.wcall([$t8, $t9], "insert", [], C));
  }
  await $.mcall((await $.v(C, "FrmPropAdd")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "ShowEditFormExecute", async function ShowEditFormExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FrmPropAdd")), "Caption", "Əmlak barədə məlumatın redaktə olunması");
  {
    const $t10 = (await $.v(C, "DMproperties"));
    const $t11 = (await $.wv([$t10], "DataSetPropIns", C, false));
    await $.stmt($.wcall([$t10, $t11], "edit", [], C));
  }
  await $.mcall((await $.v(C, "FrmPropAdd")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "ToolButton9Click", async function ToolButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FilterPanel")), "Visible", $.not((await $.mv((await $.v(C, "FilterPanel")), "Visible"))));
  await $.mset((await $.v(C, "ToolButton9")), "Down", (await $.mv((await $.v(C, "FilterPanel")), "Visible")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "RadioGrpContClick", async function RadioGrpContClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (await $.v(C, "DMproperties"));
    const $t13 = (await $.wv([$t12], "DataSetPropIns", C, false));
    if ($.truthy($.eq((await $.mv((await $.wv([$t12, $t13], "RadioGrpCont", C, false)), "ItemIndex")), 0))) {
      await $.stmt($.wcall([$t12, $t13], "Close", [], C));
      { const $t14 = await $.iset((await $.wv([$t12, $t13], "SQL", C, false)), [5], ""); if ($t14 !== undefined) { await $.wset([$t12, $t13], "SQL", $t14, C); } }
      { const $t15 = await $.iset((await $.wv([$t12, $t13], "SQL", C, false)), [5], " and a.status=0"); if ($t15 !== undefined) { await $.wset([$t12, $t13], "SQL", $t15, C); } }
      await $.stmt($.wcall([$t12, $t13], "Open", [], C));
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t12, $t13], "RadioGrpCont", C, false)), "ItemIndex")), 1))) {
      await $.stmt($.wcall([$t12, $t13], "Close", [], C));
      { const $t16 = await $.iset((await $.wv([$t12, $t13], "SQL", C, false)), [5], ""); if ($t16 !== undefined) { await $.wset([$t12, $t13], "SQL", $t16, C); } }
      { const $t17 = await $.iset((await $.wv([$t12, $t13], "SQL", C, false)), [5], " and a.status=1"); if ($t17 !== undefined) { await $.wset([$t12, $t13], "SQL", $t17, C); } }
      await $.stmt($.wcall([$t12, $t13], "Open", [], C));
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t12, $t13], "RadioGrpCont", C, false)), "ItemIndex")), 2))) {
      await $.stmt($.wcall([$t12, $t13], "Close", [], C));
      { const $t18 = await $.iset((await $.wv([$t12, $t13], "SQL", C, false)), [5], ""); if ($t18 !== undefined) { await $.wset([$t12, $t13], "SQL", $t18, C); } }
      await $.stmt($.wcall([$t12, $t13], "Open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "RefreshExecute", async function RefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "RefreshWithSavely", [true])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "N1Click", async function N1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FrmPropAdd")), "Caption", "Əmlak barədə məlumatların yazılması");
  {
    const $t19 = (await $.v(C, "DMproperties"));
    const $t20 = (await $.wv([$t19], "DataSetPropIns", C, false));
    await $.stmt($.wcall([$t19, $t20], "insert", [], C));
  }
  await $.mcall((await $.v(C, "FrmPropAdd")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "N2Click", async function N2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FrmPropAdd")), "Caption", "Əmlak barədə məlumatların redaktə olunması");
  {
    const $t21 = (await $.v(C, "DMproperties"));
    const $t22 = (await $.wv([$t21], "DataSetPropIns", C, false));
    await $.stmt($.wcall([$t21, $t22], "open", [], C));
    await $.stmt($.wcall([$t21, $t22], "edit", [], C));
  }
  await $.mcall((await $.v(C, "FrmPropAdd")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "N3Click", async function N3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMproperties")), "DataSetPropIns")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "N4Click", async function N4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "panel1")), "Visible", true);
  await $.mset((await $.v(C, "N4")), "Visible", false);
  await $.mset((await $.v(C, "N5")), "Visible", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "N5Click", async function N5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "panel1")), "Visible", false);
  await $.mset((await $.v(C, "N4")), "Visible", true);
  await $.mset((await $.v(C, "N5")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "MainGridDblClick", async function MainGridDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FrmPropAdd")), "Caption", "Əmlak barədə məlumatın redaktə olunması");
  {
    const $t23 = (await $.v(C, "DMproperties"));
    const $t24 = (await $.wv([$t23], "DataSetPropIns", C, false));
    await $.stmt($.wcall([$t23, $t24], "edit", [], C));
  }
  await $.mcall((await $.v(C, "FrmPropAdd")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "MainGridTitleBtnClick", async function MainGridTitleBtnClick(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acol": $.copyArg(p1), "column": $.copyArg(p2), result: undefined, "sortfield": ''};
  await $.fixArgs(L0, ["sender", "acol", "column"]);
  L0["sortfield"] = (await $.mv(L0["column"], "FieldName"));
  if ($.truthy($.eq((await $.mv((await $.mv(L0["column"], "Title")), "SortMarker")), (await $.v(C, "smDownEh"))))) {
    L0["sortfield"] = $.add(L0["sortfield"], " DESC");
  }
  {
    const $t25 = L0["sender"];
    const $t26 = (await $.wcall([$t25], "TOracleDataSet", [(await $.mv((await $.wv([$t25], "DataSource", C, false)), "DataSet"))], C));
    await $.mset((await $.wv([$t25, $t26], "Screen", C, false)), "Cursor", (await $.wv([$t25, $t26], "crSQLWait", C, false)));
    await $.stmt((await $.wcall([$t25, $t26], "SetVariable", ["OrderField", (await $.wv([$t25, $t26], "SortField", { get: async () => L0["sortfield"], set: async (v) => { L0["sortfield"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t25, $t26], "RefResh", [], C));
    await $.mset((await $.wv([$t25, $t26], "Screen", C, false)), "Cursor", (await $.wv([$t25, $t26], "crDefault", C, false)));
  }
  return L0.result;
}, {"params": ["Sender", "ACol", "Column"], "kind": "procedure", "ptypes": ["TObject", "Integer", "TColumnEh"]});
  U.method("TPropertiesFrm", "mllakbalamaq1Click", async function mllakbalamaq1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMproperties")), "OraclePackage2")), "CallProcedure", ["Close_emlak", ["p_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMproperties")), "DataSetPropIns")), "FieldByname", ["id"])), "asinteger"))]])));
  await $.mcall((await $.v(C, "ToolButton3")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "N6Click", async function N6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FrmSeting"))]))))) {
    {
      const $t27 = (await $.mcall((await $.v(C, "TFrmSeting")), "Create", [Self]));
      try {
        await $.stmt($.wcall([$t27], "ShowModal", [], C));
      } finally {
        await $.stmt($.wcall([$t27], "Release", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "N7Click", async function N7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FormInfo"))]))))) {
    {
      const $t28 = (await $.mcall((await $.v(C, "TFormInfo")), "Create", [Self]));
      try {
        await $.stmt($.wcall([$t28], "ShowModal", [], C));
      } finally {
        await $.stmt($.wcall([$t28], "Release", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "N8Click", async function N8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FrmTypical"))]))))) {
    {
      const $t29 = (await $.mcall((await $.v(C, "TFrmTypical")), "Create", [Self]));
      try {
        await $.stmt($.wcall([$t29], "ShowModal", [], C));
      } finally {
        await $.stmt($.wcall([$t29], "Release", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "N10Click", async function N10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["id"] = (await $.v(C, "Get_SelectedContID"));
  {
    const $t30 = (await $.mv((await $.v(C, "DMproperties")), "DSet_Prop_Kredit"));
    await $.stmt($.wcall([$t30], "close", [], C));
    await $.stmt((await $.wcall([$t30], "SetVariable", ["id", (await $.wv([$t30], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t30], "open", [], C));
  }
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DMproperties")), "DSet_Prop_Kredit")), "RecordCount")), 0))) {
    await $.mcall((await $.v(C, "FrmTrance")), "showmodal", []);
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Bu əmlak kreditlə əlaqələndirilməyib!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "N14Click", async function N14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t31 = (await $.v(C, "DMproperties"));
    const $t32 = (await $.wv([$t31], "ReportDataSet", C, false));
    await $.stmt($.wcall([$t31, $t32], "close", [], C));
    await $.stmt($.wcall([$t31, $t32], "open", [], C));
  }
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "PropQReport"))]))))) {
    await $.set(C, "PropQReport", (await $.mcall((await $.v(C, "TPropQReport")), "Create", [Self])));
  }
  {
    const $t33 = (await $.v(C, "PropQReport"));
    await $.stmt($.wcall([$t33], "Preview", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "N11Click", async function N11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["id"] = (await $.v(C, "Get_SelectedContID"));
  await $.mcall((await $.mv((await $.v(C, "DMproperties")), "DataSetproperties_payments")), "open", []);
  {
    const $t34 = (await $.mv((await $.v(C, "DMproperties")), "DataSetProp_take"));
    await $.stmt($.wcall([$t34], "close", [], C));
    await $.stmt((await $.wcall([$t34], "SetVariable", ["propid", (await $.wv([$t34], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t34], "open", [], C));
  }
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DMproperties")), "DataSetProp_take")), "RecordCount")), 0))) {
    await $.mcall((await $.v(C, "FrmProp_payment")), "ShowModal", []);
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Bu əmlakın alınması üçün əməliyyat aparılmayıb!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "N13Click", async function N13Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ReportFrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "ActnSearchExecute", async function ActnSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t35 = L0["sender"];
    await $.wset([$t35], "SearchField", (await $.wcall([$t35], "copy", [(await $.wv([$t35], "Name", C, false)), 5, (await $.wcall([$t35], "length", [(await $.wv([$t35], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    await $.mcall((await $.mv((await $.wv([$t35], "MainGrid", C, false)), "SelectedRows")), "Clear", []);
    {
      const $t36 = (await $.wcall([$t35], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t35], "MainGrid", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t35, $t36], "SearchRecord", [(await $.wv([$t35, $t36], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t35, $t36], "Text", C, false)), $.add((await $.wv([$t35, $t36], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t35, $t36], "srFromCurrent", C, false)), (await $.wv([$t35, $t36], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t35, $t36], "MessageDlg", [$.add($.add("Axtarış sona çatıb.", "\r"), "əvvəldən başlamaq istəyirsinizmi?"), (await $.wv([$t35, $t36], "mtInformation", C, false)), [(await $.wv([$t35, $t36], "mbNo", C, false)), (await $.wv([$t35, $t36], "mbYes", C, false))], 0], C)), (await $.wv([$t35, $t36], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t35, $t36], "SearchRecord", [(await $.wv([$t35, $t36], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t35, $t36], "Text", C, false)), $.add((await $.wv([$t35, $t36], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t35, $t36], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t35, $t36], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t35, $t36], "mtInformation", C, false)), [(await $.wv([$t35, $t36], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "editCONTRACTNUMExit", async function editCONTRACTNUMExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "editCONTRACTNUMKeyPress", async function editCONTRACTNUMKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "ActnSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPropertiesFrm", "editvalueKeyPress", async function editvalueKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "ActnSearchExecute", [L0["sender"]])));
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
    await $.stmt($.call(C, "Beep", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPropertiesFrm", "editPROP_COUNTKeyPress", async function editPROP_COUNTKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "ActnSearchExecute", [L0["sender"]])));
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b"]))))) {
    await L0["key"].set("\u0000");
    await $.stmt($.call(C, "Beep", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPropertiesFrm", "DateTimePicker1KeyPress", async function DateTimePicker1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "a": false};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    L0["a"] = (await $.mcall((await $.mv((await $.v(C, "DMproperties")), "DataSetPropIns")), "locate", ["BDATE", (await $.mv((await $.v(C, "datetimepicker1")), "Date")), [(await $.v(C, "locaseinsensitive"))]]));
    if ($.truthy($.eq(L0["a"], false))) {
      await $.stmt((await $.call(C, "showmessage", ["Tarix tapılmadı!"])));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPropertiesFrm", "N12Click", async function N12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "propid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["propid"] = (await $.v(C, "Get_SelectedContID"));
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "PropQReport"))]))))) {
    await $.set(C, "PropQReport", (await $.mcall((await $.v(C, "TPropQReport")), "Create", [Self])));
  }
  {
    const $t37 = (await $.v(C, "DMproperties"));
    const $t38 = (await $.wv([$t37], "ReportDataSet", C, false));
    await $.stmt($.wcall([$t37, $t38], "close", [], C));
    { const $t39 = await $.iset((await $.wv([$t37, $t38], "sql", C, false)), [22], $.add("and a.id =", (await $.wcall([$t37, $t38], "inttostr", [(await $.wv([$t37, $t38], "propid", { get: async () => L0["propid"], set: async (v) => { L0["propid"] = v; }, local: true }, false))], C)))); if ($t39 !== undefined) { await $.wset([$t37, $t38], "sql", $t39, C); } }
    await $.stmt($.wcall([$t37, $t38], "open", [], C));
  }
  {
    const $t40 = (await $.v(C, "PropQReport"));
    await $.stmt($.wcall([$t40], "Preview", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "ActiveFormDestroy", async function ActiveFormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DMproperties")), "free", []);
  await $.mcall((await $.v(C, "FrmPropAdd")), "free", []);
  await $.mcall((await $.v(C, "FrmTrance")), "free", []);
  await $.mcall((await $.v(C, "FrmProp_payment")), "free", []);
  await $.mcall((await $.v(C, "PropQReport")), "free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertiesFrm", "ddfd1Click", async function ddfd1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMproperties")), "GDataSet")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DMproperties")), "XDataSet")), "open", []);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FormGelirXerc"))]))))) {
    await $.stmt((await $.mcall((await $.v(C, "TFormGelirXerc")), "Create", [Self])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
