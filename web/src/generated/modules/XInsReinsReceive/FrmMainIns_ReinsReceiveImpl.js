// Generated from FrmMainIns_ReinsReceiveImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmMainIns_ReinsReceiveImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "PrjIns_ReinsReceive_TLB", "StdVcl", "StdCtrls", "Grids", "XDBGrids", "ComCtrls", "variants", "DB", "OracleData", "Oracle", "ToolWin", "ActnList", "DBGrids", "XFSCtrls", "ExtCtrls", "DBCtrls", "ImgList", "CMExcelExport", "Menus", "ComObj", "ComServ", "CommanParametrs", "DMIns_ReinsReceiveImpl", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TMainReInsReceive", "TActiveForm", {"emeliyyat": {"name": "Emeliyyat", "type": "TPopupMenu"}, "dmplan1": {"name": "dmplan1", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "dmlr1": {"name": "dmlr1", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "zrrlr1": {"name": "Zrrlr1", "type": "TMenuItem"}, "n9": {"name": "N9", "type": "TMenuItem"}, "xitam1": {"name": "Xitam1", "type": "TMenuItem"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "imagelist2": {"name": "ImageList2", "type": "TImageList"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "rgcontract": {"name": "RGContract", "type": "TXFRadioGroup"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "xfcheckbox1": {"name": "XFCheckBox1", "type": "TXFCheckBox"}, "xfgroupbox11": {"name": "XFGroupBox11", "type": "TXFGroupBox"}, "dblookupcombobox6": {"name": "DBLookupComboBox6", "type": "TDBLookupComboBox"}, "xfcheckbox9": {"name": "XFCheckBox9", "type": "TXFCheckBox"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "xfcheckbox2": {"name": "XFCheckBox2", "type": "TXFCheckBox"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfgroupbox4": {"name": "XFGroupBox4", "type": "TXFGroupBox"}, "xfradiogroup1": {"name": "XFRadioGroup1", "type": "TXFRadioGroup"}, "xfcheckbox6": {"name": "XFCheckBox6", "type": "TXFCheckBox"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfcheckbox3": {"name": "XFCheckBox3", "type": "TXFCheckBox"}, "xfgroupbox5": {"name": "XFGroupBox5", "type": "TXFGroupBox"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "xfcheckbox4": {"name": "XFCheckBox4", "type": "TXFCheckBox"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "editammount": {"name": "EditAMMOUNT", "type": "TEdit"}, "editfranshiz": {"name": "EditFRANSHIZ", "type": "TEdit"}, "editinssumm": {"name": "EditINSSUMM", "type": "TEdit"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "n1": {"name": "N1", "type": "TMenuItem"}, "xitambarderosu1": {"name": "Xitambarderosu1", "type": "TMenuItem"}, "editpolicy_num": {"name": "EditPOLICY_NUM", "type": "TEdit"}, "editname": {"name": "editNAME", "type": "TEdit"}, "editsigorta_novu": {"name": "editSIGORTA_NOVU", "type": "TEdit"}, "xfgroupbox6": {"name": "XFGroupBox6", "type": "TXFGroupBox"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "xfcheckbox5": {"name": "XFCheckBox5", "type": "TXFCheckBox"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "t1": {"name": "T1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "combobox2": {"name": "ComboBox2", "type": "TComboBox"}, "xfcheckbox7": {"name": "XFCheckBox7", "type": "TXFCheckBox"}, "button1": {"name": "Button1", "type": "TButton"}, "fevents": {"name": "FEvents", "type": "IMainReInsReceiveEvents"}}, {});
  U.init(async () => {
    U.var_("filterstatus", 0, "integer");
    U.var_("sort_ASC", false, "Boolean");
    U.var_("sqlstring", '', "String");
    U.var_("sql", '', "String");
    U.var_("sql1", '', "String");
  });
  U.method("TMainReInsReceive", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TMainReInsReceive", "EditPOLICY_NUMExit", async function EditPOLICY_NUMExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "EditPOLICY_NUMKeyPress", async function EditPOLICY_NUMKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TMainReInsReceive", "editNAMEExit", async function editNAMEExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "ActionSpeedSearchExecute", async function ActionSpeedSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t1 = L0["sender"];
    await $.wset([$t1], "SearchField", (await $.wcall([$t1], "copy", [(await $.wv([$t1], "Name", C, false)), 5, (await $.wcall([$t1], "length", [(await $.wv([$t1], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t2 = (await $.wcall([$t1], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t1], "XDBGrid1", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t1, $t2], "SearchRecord", [(await $.wv([$t1, $t2], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "Text", C, false)), $.add((await $.wv([$t1, $t2], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "srFromCurrent", C, false)), (await $.wv([$t1, $t2], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t1, $t2], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t1, $t2], "mtInformation", C, false)), [(await $.wv([$t1, $t2], "mbNo", C, false)), (await $.wv([$t1, $t2], "mbYes", C, false))], 0], C)), (await $.wv([$t1, $t2], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t1, $t2], "SearchRecord", [(await $.wv([$t1, $t2], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "Text", C, false)), $.add((await $.wv([$t1, $t2], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t1, $t2], "MessageDlg", ["Yazı tapılmayıb!", (await $.wv([$t1, $t2], "mtInformation", C, false)), [(await $.wv([$t1, $t2], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  await $.inherited(Self, "TMainReInsReceive", "EventSinkChanged", [L0["eventsink"]], arguments);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TMainReInsReceive", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TMainReInsReceive", "Initialize", null, arguments);
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
  U.method("TMainReInsReceive", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_AlignDisabled", async function Get_AlignDisabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignDisabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_AlignWithMargins", async function Get_AlignWithMargins(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignWithMargins"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_BorderWidth", async function Get_BorderWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Integer", [(await $.v(C, "BorderWidth"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_DockSite", async function Get_DockSite(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DockSite"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_ExplicitHeight", async function Get_ExplicitHeight(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitHeight"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_ExplicitLeft", async function Get_ExplicitLeft(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitLeft"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_ExplicitTop", async function Get_ExplicitTop(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitTop"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_ExplicitWidth", async function Get_ExplicitWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitWidth"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_MouseInClient", async function Get_MouseInClient(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "MouseInClient"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_ParentCustomHint", async function Get_ParentCustomHint(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentCustomHint"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_ParentDoubleBuffered", async function Get_ParentDoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentDoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_PopupMode", async function Get_PopupMode(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PopupMode"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_ScreenSnap", async function Get_ScreenSnap(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ScreenSnap"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_SnapBuffer", async function Get_SnapBuffer(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "SnapBuffer"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_UseDockManager", async function Get_UseDockManager(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "UseDockManager"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainReInsReceive", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TMainReInsReceive", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "filterstatus", 0);
  await $.set(C, "Reinsgrid", (await $.v(C, "XDBGrid1")));
  await $.set(C, "DMIns_ReinsReceive", (await $.mcall((await $.v(C, "TDMIns_ReinsReceive")), "Create", [Self])));
  await $.set(C, "sql1", (await $.mv((await $.mv((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "DSMAIN")), "SQL")), "Text")));
  await $.mset((await $.v(C, "RGContract")), "ItemIndex", 0);
  await $.mset((await $.v(C, "XFRadioGroup1")), "ItemIndex", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "loadPlugin", ["ferid.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "dmlr1Click", async function dmlr1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "recordcount")), 0))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət! Cədvəldə məlumat yoxdur."])));
    return L0.result;
  }
  {
    const $t3 = (await $.v(C, "DMIns_ReinsReceive"));
    const $t4 = (await $.wv([$t3], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t3, $t4], "CallProcedure", ["checkadvancedobjectaccess", ["SEEPAYMENT"]], C)));
  }
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["cid"])), "AsInteger")));
  await $.set(C, "contractstatus", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["STATE"])), "AsInteger")));
  await $.stmt((await $.call(C, "loadPlugin", ["InsPayment.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "dmplan1Click", async function dmplan1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "recordcount")), 0))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət! Cədvəldə məlumat yoxdur."])));
    return L0.result;
  }
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["cid"])), "AsInteger")));
  await $.set(C, "contractstatus", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["STATE"])), "AsInteger")));
  await $.stmt((await $.call(C, "loadPlugin", ["InsPaymentPlan.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TMainReInsReceive", "MouseEnterEvent", async function MouseEnterEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseEnter", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "MouseLeaveEvent", async function MouseLeaveEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseLeave", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "RGContractClick", async function RGContractClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TMainReInsReceive", "Set_AlignWithMargins", async function Set_AlignWithMargins(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AlignWithMargins", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainReInsReceive", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainReInsReceive", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainReInsReceive", "Set_BorderWidth", async function Set_BorderWidth(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "BorderWidth", (await $.call(C, "TBorderWidth", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TMainReInsReceive", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TMainReInsReceive", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TMainReInsReceive", "Set_DockSite", async function Set_DockSite(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DockSite", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainReInsReceive", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainReInsReceive", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainReInsReceive", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainReInsReceive", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TMainReInsReceive", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "string", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TMainReInsReceive", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainReInsReceive", "Set_ParentCustomHint", async function Set_ParentCustomHint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentCustomHint", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainReInsReceive", "Set_ParentDoubleBuffered", async function Set_ParentDoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentDoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainReInsReceive", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TMainReInsReceive", "Set_PopupMode", async function Set_PopupMode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PopupMode", (await $.call(C, "TPopupMode", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPopupMode"]});
  U.method("TMainReInsReceive", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TMainReInsReceive", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainReInsReceive", "Set_ScreenSnap", async function Set_ScreenSnap(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ScreenSnap", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainReInsReceive", "Set_SnapBuffer", async function Set_SnapBuffer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "SnapBuffer", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TMainReInsReceive", "Set_UseDockManager", async function Set_UseDockManager(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "UseDockManager", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainReInsReceive", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainReInsReceive", "T1Click", async function T1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "loadPlugin", ["ins_reins_exelinp.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "ToolButton13Click", async function ToolButton13Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t5], "Connect", [], C));
    await $.stmt((await $.wcall([$t5], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t5], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "tekrar sigorta.", (await $.wv([$t5], "True", C, false)), (await $.wv([$t5], "false", C, false))], C)));
    await $.stmt($.wcall([$t5], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "ToolButton14Click", async function ToolButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "funcname": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "DMIns_ReinsReceive"));
    const $t7 = (await $.wv([$t6], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t6, $t7], "CallProcedure", ["checkadvancedobjectaccess", ["COMMITINSCONTRACTS"]], C)));
  }
  if ($.truthy($.eq((await $.v(C, "contractstatus")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bu müqavilə bağlanmış müqavilə olduğundan heç bir deyişiklik oluna bilməz."])));
    return L0.result;
  }
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "asInteger")));
  {
    const $t8 = (await $.v(C, "DMIns_ReinsReceive"));
    await $.mcall((await $.wv([$t8], "DSPaymentSettingInfo", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t8], "DSPaymentSettingInfo", C, false)), "SetVariable", ["pcid", (await $.wv([$t8], "contactid", C, false))])));
    await $.mcall((await $.wv([$t8], "DSPaymentSettingInfo", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t8], "DSPaymentSettingInfo", C, false)), "FieldByName", ["say"])), "AsInteger")), 0))) {
      await $.stmt((await $.wcall([$t8], "showmessage", ["Diqqət! Bu müqavilənin Ödəmə planı haqqındakı məlumatları yığılmayıb!"], C)));
      return L0.result;
    }
    await $.mcall((await $.wv([$t8], "DSPaymentsetting", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t8], "DSPaymentsetting", C, false)), "SetVariable", ["pcid", (await $.wv([$t8], "contactid", C, false))])));
    await $.mcall((await $.wv([$t8], "DSPaymentsetting", C, false)), "Open", []);
    await $.mcall((await $.wv([$t8], "DSPaymentInfo", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t8], "DSPaymentInfo", C, false)), "SetVariable", ["pcid", (await $.wv([$t8], "contactid", C, false))])));
    await $.mcall((await $.wv([$t8], "DSPaymentInfo", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t8], "DSPaymentsetting", C, false)), "FieldByName", ["payment_type"])), "AsInteger")), 2))) {
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t8], "DSPaymentInfo", C, false)), "FieldByName", ["say"])), "AsInteger")), 0))) {
        await $.stmt((await $.wcall([$t8], "showmessage", ["Diqqət! Bu müqavilənin Ödəmə planı hissələrlə ödəniş olduğundan ödəmə planı yığılmalıdır!"], C)));
        return L0.result;
      }
    }
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["valute_id"])), "AsInteger")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "DSOperkurs")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "DSOperkurs")), "SetVariable", ["pval_kod", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["valute_id"])), "AsInteger"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "DSOperkurs")), "SetVariable", ["pdat", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ins_date"])), "AsDateTime"))])));
    await $.mcall((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "DSOperkurs")), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "DSOperkurs")), "FieldByName", ["say"])), "AsInteger")), 0))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət !Sistemdə bu müqavilənin  muqavilə tarixinə və valyutasına uyğun kurs movcudd deyil."])));
      return L0.result;
    }
  }
  {
    const $t9 = (await $.v(C, "DMIns_ReinsReceive"));
    const $t10 = (await $.wv([$t9], "OPCOMMON", C, false));
    if ($.truthy($.eq((await $.mcall((await $.wv([$t9, $t10], "OPCOMMON", C, false)), "CallIntegerFunction", ["commitcontract", [(await $.wv([$t9, $t10], "contactid", C, false))]])), 1))) {
      await $.stmt((await $.wcall([$t9, $t10], "MessageDlg", ["Testiq olundu.", (await $.wv([$t9, $t10], "mtInformation", C, false)), [(await $.wv([$t9, $t10], "mbok", C, false))], 0], C)));
      await $.mcall((await $.mv((await $.wv([$t9, $t10], "DMIns_ReinsReceive", C, false)), "DSMain")), "RefreshRecord", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "opetion", "ins");
  await $.stmt((await $.call(C, "loadPlugin", ["Ins_ReinsR_contract.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Məlumat Yoxdur"])));
    return L0.result;
  }
  await $.set(C, "opetion", "upd");
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")));
  await $.stmt((await $.call(C, "loadPlugin", ["Ins_ReinsR_contract.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "DSMain")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.v(C, "DMIns_ReinsReceive"));
    const $t12 = (await $.wv([$t11], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t11, $t12], "CallProcedure", ["checkadvancedobjectaccess", ["CLOSECONTRACT_ALLReinsurance"]], C)));
  }
  if ($.truthy($.eq((await $.v(C, "contractstatus")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bu müqavilə bağlanmış müqavilə olduğundan heç bir deyişiklik oluna bilməz."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş siğorta ləğv olunacaq!", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    try {
      {
        const $t14 = (await $.v(C, "DMIns_ReinsReceive"));
        const $t15 = (await $.wv([$t14], "OPCOMMON", C, false));
        const $t16 = (await $.wv([$t14, $t15], "DSMain", C, false));
        if ($.truthy((await $.mcall((await $.mv((await $.wv([$t14, $t15, $t16], "DMIns_ReinsReceive", C, false)), "OPCOMMON")), "callbooleanfunction", ["del_ins", [(await $.mv((await $.wv([$t14, $t15, $t16], "DSMainID", C, false)), "Value")), (await $.mv((await $.wv([$t14, $t15, $t16], "DSMainType_Id", C, false)), "value"))]])))) {
          await $.mcall((await $.mv((await $.mv((await $.wv([$t14, $t15, $t16], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "Refresh", []);
        }
      }
    } catch ($t13) {
      $.rethrowControl($t13);
      if ($.excIs($t13, "EOracleError")) {
        L0["e"] = $.exc($t13);
        { const $t17 = (await $.mv(L0["e"], "ErrorCode"));
          if ($.eq($t17, 20002)) {
            if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş müqaviləyə uyğun hesablar ləğv olunacaq!", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "OPCOMMON")), "CallProcedure", ["close_acc", [(await $.mv((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "ODSAccountID")), "value"))]])));
            }
          }
          else if ($.eq($t17, 20001)) {
            await $.stmt((await $.call(C, "ShowMessage", ["Aslı hesablarda qalıq sıfırdan fərqlidir!"])));
          }
        }
      }
      else { throw $t13; }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "ToolButton9Click", async function ToolButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "XFGroupBox1")), "Visible", $.not((await $.mv((await $.v(C, "XFGroupBox1")), "Visible"))));
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFGroupBox1")), "Visible")), true))) {
    await $.mcall((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "DSIns_cust")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "DSIns_cust")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "DScutomers")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "DScutomers")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "DSins_agents")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "DSins_agents")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "XDBGrid1DblClick", async function XDBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "opetion", "upd");
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")));
  await $.stmt((await $.call(C, "loadPlugin", ["Ins_ReinsR_contract.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "XDBGrid1DrawColumnCell", async function XDBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  {
    const $t18 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t18], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      await $.wset([$t18], "ImageIndex", (await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataSource", C, false)), "DataSet")), "FieldByName", ["state"])), "AsInteger")), { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
      if ($.truthy((await $.and_(($.eq((await $.wv([$t18], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t18], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.mset((await $.mv((await $.wv([$t18], "Canvas", C, false)), "brush")), "Style", (await $.wv([$t18], "bsSolid", C, false)));
        await $.stmt((await $.mcall((await $.wv([$t18], "Canvas", C, false)), "FillRect", [(await $.wv([$t18], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false))])));
        await $.stmt((await $.mcall((await $.wv([$t18], "ImageList2", C, false)), "Draw", [(await $.wv([$t18], "Canvas", C, false)), (await $.mv((await $.wv([$t18], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t18], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t18], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t18], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t18], "DefaultDrawColumnCell", [(await $.wv([$t18], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t18], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t18], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t18], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TXColumn", "TGridDrawState"]});
  U.method("TMainReInsReceive", "XDBGrid1TitleClick", async function XDBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": '', "sortposition": 0};
  await $.fixArgs(L0, ["column"]);
  L0["sortposition"] = 100;
  if ($.truthy((await $.or_(((await $.mv((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "DSMain")), "IsEmpty"))), async () => ($.eq((await $.mv(L0["column"], "FieldName")), (await $.v(C, "EmptyStr")))))))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t19 = (await $.v(C, "DMIns_ReinsReceive"));
    const $t20 = (await $.wv([$t19], "DSMain", C, false));
    try {
      await $.wset([$t19, $t20], "SortPosition", (await $.mcall((await $.wv([$t19, $t20], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t19, $t20], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t19, $t20], "Refresh", [], C));
    } finally {
      { const $t21 = await $.iset((await $.wv([$t19, $t20], "SQL", C, false)), [(await $.wv([$t19, $t20], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t19, $t20], "EmptyStr", C, false))); if ($t21 !== undefined) { await $.wset([$t19, $t20], "SQL", $t21, C); } }
      await $.mset((await $.wv([$t19, $t20], "Screen", C, false)), "Cursor", (await $.wv([$t19, $t20], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.method("TMainReInsReceive", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "Xitam1Click", async function Xitam1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "recordcount")), 0))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət! Cədvəldə məlumat yoxdur."])));
    return L0.result;
  }
  {
    const $t22 = (await $.v(C, "DMIns_ReinsReceive"));
    const $t23 = (await $.wv([$t22], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t22, $t23], "CallProcedure", ["checkadvancedobjectaccess", ["TERMINATEDINS_CONTRACT"]], C)));
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["state"])), "AsInteger")), 8))) {
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["state"])), "AsInteger")), 6))) {
      await $.stmt((await $.call(C, "Showmessage", ["Diqqət!Yalnız Təsdiq statusunda olan muqaviləyə xitam vermək olar."])));
      return L0.result;
    }
    await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["cid"])), "AsInteger")));
    await $.set(C, "contractstatus", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["STATE"])), "AsInteger")));
    await $.stmt((await $.call(C, "loadPlugin", ["InsContracterminated.bpl", ""])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "Xitambarderosu1Click", async function Xitambarderosu1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "recordcount")), 0))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət! Cədvəldə məlumat yoxdur."])));
    return L0.result;
  }
  {
    const $t24 = (await $.v(C, "DMIns_ReinsReceive"));
    const $t25 = (await $.wv([$t24], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t24, $t25], "CallProcedure", ["checkadvancedobjectaccess", ["SEEBARDERO_TERMINATE"]], C)));
  }
  await $.mcall((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "DSReins")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "DSReins")), "SetVariable", ["pcid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["cid"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "DSReins")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "DSReins")), "FieldByName", ["say"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız təkrarsığortaya göndərilmiş müqavilə üçün Xitam barderosu yığmaq olar!"])));
    return L0.result;
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["state"])), "AsInteger")), 8))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız xitam statusunda olan müqavilə üçün Xitam barderosu yığmaq olar!"])));
    return L0.result;
  }
  await $.set(C, "Bordero_type", "xitam");
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["cid"])), "AsInteger")));
  await $.stmt((await $.call(C, "loadPlugin", ["reinsurance.bpl", "terminate"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "Zrrlr1Click", async function Zrrlr1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "recordcount")), 0))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət! Cədvəldə məlumat yoxdur."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["type_id"])), "AsInteger")), 4))) {
    {
      const $t26 = (await $.v(C, "DMIns_ReinsReceive"));
      const $t27 = (await $.wv([$t26], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t26, $t27], "CallProcedure", ["checkadvancedobjectaccess", ["SEELOSSKASKO"]], C)));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["type_id"])), "AsInteger")), 1))) {
    {
      const $t28 = (await $.v(C, "DMIns_ReinsReceive"));
      const $t29 = (await $.wv([$t28], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t28, $t29], "CallProcedure", ["checkadvancedobjectaccess", ["SEELOSSFQ"]], C)));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["type_id"])), "AsInteger")), 13))) {
    {
      const $t30 = (await $.v(C, "DMIns_ReinsReceive"));
      const $t31 = (await $.wv([$t30], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t30, $t31], "CallProcedure", ["checkadvancedobjectaccess", ["SEELOSSMES"]], C)));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["type_id"])), "AsInteger")), 8))) {
    {
      const $t32 = (await $.v(C, "DMIns_ReinsReceive"));
      const $t33 = (await $.wv([$t32], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t32, $t33], "CallProcedure", ["checkadvancedobjectaccess", ["SEELOSYUK"]], C)));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["type_id"])), "AsInteger")), 3))) {
    {
      const $t34 = (await $.v(C, "DMIns_ReinsReceive"));
      const $t35 = (await $.wv([$t34], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t34, $t35], "CallProcedure", ["checkadvancedobjectaccess", ["SEELOSSEMLAK"]], C)));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["type_id"])), "AsInteger")), 21))) {
    {
      const $t36 = (await $.v(C, "DMIns_ReinsReceive"));
      const $t37 = (await $.wv([$t36], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t36, $t37], "CallProcedure", ["checkadvancedobjectaccess", ["SEELOSSSEYAHET"]], C)));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["type_id"])), "AsInteger")), 2))) {
    {
      const $t38 = (await $.v(C, "DMIns_ReinsReceive"));
      const $t39 = (await $.wv([$t38], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t38, $t39], "CallProcedure", ["checkadvancedobjectaccess", ["SEELOSSTIBB"]], C)));
    }
  }
  await $.set(C, "commoncid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["cid"])), "AsInteger")));
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["cid"])), "AsInteger")));
  await $.set(C, "contractstatus", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["STATE"])), "AsInteger")));
  await $.stmt((await $.call(C, "loadPlugin", ["loss.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainReInsReceive", "ActionFilterExecute", async function ActionFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "status": '', "p_name": '', "p_cust_id": '', "p_agent_id": '', "p_marka": '', "p_avtotype": '', "p_fransiza": '', "p_type": '', "p_begin_date": '', "p_end_date": '', "p_ins_type": '', "pstate": 0, "filterstr": '', "p_reins": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["booleanprefix"] = " AND ";
  L0["statusfilter"] = "(a.close_prefix=%d)";
  L0["nametype"] = "(a.type_id=%d)";
  L0["namefilter"] = "(a.KLI_ID=%d)";
  L0["custfilter"] = "(cust.id=%d)";
  L0["agent_idfilter"] = "(a.AGENT_ID=%d)";
  L0["fransizafilter"] = "(a.franshiz=%d)";
  L0["begindatefilter"] = " a.begin_date ";
  L0["enddatefilter"] = " a.end_date ";
  L0["sigortanovufilter"] = "(a.type_id=%d)";
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
  L0["status"] = (await $.callv(L0["checkfiltered"], [$.ne((await $.mv((await $.v(C, "RGContract")), "ItemIndex")), (-(1))), L0["statusfilter"], [(await $.mv((await $.v(C, "RGContract")), "ItemIndex"))]]));
  L0["p_name"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "XFCheckBox1")), "Checked")), L0["namefilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboBox1")), "ListSource")), "DataSet")), "FieldByName", ["id"])), "asinteger"))]]));
  L0["p_cust_id"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "XFCheckBox9")), "Checked")), L0["custfilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboBox6")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))]]));
  L0["p_agent_id"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "XFCheckBox2")), "Checked")), L0["agent_idfilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboBox2")), "ListSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))]]));
  L0["p_ins_type"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "XFCheckBox5")), "Checked")), L0["sigortanovufilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboBox3")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))]]));
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox7")), "Checked")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox2")), "ItemIndex")), 0))) {
      L0["p_reins"] = " a.id in  (select cid from ins_reinsurance)";
    } else {
      L0["p_reins"] = " a.id in  ((select id from ins_contracts minus select id from ins_contracts where id in  (select cid from ins_reinsurance)))";
    }
  } else {
    L0["p_reins"] = "";
  }
  if ($.truthy($.eq(L0["status"], ""))) {
    L0["filterstr"] = "status is not null";
  } else {
    L0["filterstr"] = L0["status"];
  }
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox1")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["p_name"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_name"]);
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox5")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["p_ins_type"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_ins_type"]);
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox9")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["p_cust_id"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_cust_id"]);
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox2")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["p_agent_id"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_agent_id"]);
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox7")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["p_reins"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_reins"]);
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox3")), "Checked")))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroup1")), "ItemIndex")), 0))) {
      L0["p_begin_date"] = $.add($.add($.add($.add($.add($.add($.add($.add(L0["begindatefilter"], " between  "), "'"), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))), "'"), " and "), "'"), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]))), "'");
      if ($.truthy($.eq(L0["filterstr"], ""))) {
        L0["filterstr"] = $.add(L0["booleanprefix"], L0["p_begin_date"]);
      } else {
        L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_begin_date"]);
      }
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroup1")), "ItemIndex")), 1))) {
      L0["p_end_date"] = $.add($.add($.add($.add($.add($.add($.add($.add(L0["enddatefilter"], " between  "), "'"), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))), "'"), " and "), "'"), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]))), "'");
      if ($.truthy($.eq(L0["filterstr"], ""))) {
        L0["filterstr"] = L0["p_end_date"];
      } else {
        L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_end_date"]);
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox4")), "Checked")), true))) {
    { const $t40 = (await $.mv((await $.v(C, "ComboBox1")), "ItemIndex"));
      if ($.eq($t40, 0)) {
        L0["pstate"] = 6;
      }
      else if ($.eq($t40, 1)) {
        L0["pstate"] = 0;
      }
      else if ($.eq($t40, 2)) {
        L0["pstate"] = 7;
      }
      else if ($.eq($t40, 3)) {
        L0["pstate"] = 8;
      }
    }
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = $.add(" and ic.state=", (await $.call(C, "inttostr", [L0["pstate"]])));
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], " and a.state="), (await $.call(C, "inttostr", [L0["pstate"]])));
    }
  }
  await $.mset((await $.mv((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "DSMain")), "sql")), "Text", "");
  await $.set(C, "sql", $.add($.add((await $.v(C, "sql1")), " and "), L0["filterstr"]));
  await $.mset((await $.mv((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "DSMain")), "sql")), "Text", (await $.v(C, "sql")));
  await $.mset((await $.v(C, "memo1")), "Text", (await $.mv((await $.mv((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "DSMain")), "sql")), "Text")));
  await $.mset((await $.mv((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "DSMain")), "sql")), "text", (await $.call(C, "Stringreplace", [(await $.mv((await $.mv((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "DSMain")), "sql")), "text")), "status", "DECODE (a.close_prefix, 0, 1, 2)", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]])));
  await $.mcall((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "DSMain")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DMIns_ReinsReceive")), "DSMain")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
