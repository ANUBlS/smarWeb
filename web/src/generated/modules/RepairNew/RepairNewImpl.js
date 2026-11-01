// Generated from RepairNewImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("RepairNewImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ActiveX", "AxCtrls", "RepairNew_TLB", "StdVcl", "ExtCtrls", "ToolWin", "ComCtrls", "Grids", "DBGrids", "Buttons", "ActnList", "ImgList", "StdCtrls", "DB", "OracleData", "Mask", "DBCtrls", "RepairNewEdit", "Menus", "CheckLst", "SearchCombo", "SBPlgAx50_TLB", "ComObj", "ComServ", "RepairNewDataModule", "sbcore", "RepairDelete", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.enumType("tsearchorder", 3);
  U.const("soForward", 0);
  U.const("soBackward", 1);
  U.const("soNone", 2);
  U.enumType("tfiltertype", 4);
  U.const("ftMain", 0);
  U.const("ftOrder", 1);
  U.const("ftFilial", 2);
  U.const("ftAll", 3);
  U.enumType("tbracket", 3);
  U.const("brBegin", 0);
  U.const("brEnd", 1);
  U.const("brNone", 2);
  U.defClass("TRepairNewMain", "TActiveForm", {"pnmain": {"name": "pnMain", "type": "TPanel"}, "pnmaingrid": {"name": "pnMainGrid", "type": "TPanel"}, "pngridlayer": {"name": "pnGridlayer", "type": "TPanel"}, "pnsearch": {"name": "pnSearch", "type": "TPanel"}, "dbmain": {"name": "dbMain", "type": "TDBGrid"}, "cbmainfeatures": {"name": "cbMainFeatures", "type": "TControlBar"}, "pnleftadvanced": {"name": "pnLeftAdvanced", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "operationbar": {"name": "OperationBar", "type": "TToolBar"}, "mainactionlist": {"name": "MainActionList", "type": "TActionList"}, "showadvancedoptions": {"name": "ShowAdvancedOptions", "type": "TAction"}, "addtrans": {"name": "AddTrans", "type": "TAction"}, "deltrans": {"name": "DelTrans", "type": "TAction"}, "updtrans": {"name": "UpdTrans", "type": "TAction"}, "refreshtrans": {"name": "RefreshTrans", "type": "TAction"}, "tbadd": {"name": "tbAdd", "type": "TToolButton"}, "mainimagelist": {"name": "MainImageList", "type": "TImageList"}, "tbdrop": {"name": "tbDrop", "type": "TToolButton"}, "tbrefresh": {"name": "tbRefresh", "type": "TToolButton"}, "tbadvancedoptions": {"name": "tbAdvancedOptions", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "datepanel": {"name": "DatePanel", "type": "TPanel"}, "dtpopdat": {"name": "dtpOpDat", "type": "TDateTimePicker"}, "lbsysdatdef": {"name": "lbSysDatDef", "type": "TLabel"}, "lbsysdat": {"name": "lbSysDat", "type": "TLabel"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "lbopdatdef": {"name": "lbOpDatDef", "type": "TLabel"}, "tbsearch": {"name": "tbSearch", "type": "TToolButton"}, "showsearchpanel": {"name": "ShowSearchPanel", "type": "TAction"}, "btadvancedoptionsexit": {"name": "btAdvancedOptionsExit", "type": "TButton"}, "pnsearchorder": {"name": "pnSearchOrder", "type": "TPanel"}, "sbup": {"name": "sbUp", "type": "TSpeedButton"}, "sbmiddle": {"name": "sbMiddle", "type": "TSpeedButton"}, "sbdown": {"name": "sbDown", "type": "TSpeedButton"}, "datestatement": {"name": "DateStatement", "type": "TAction"}, "pntransactiondesc": {"name": "pnTransactionDesc", "type": "TPanel"}, "dbetransactiondescr": {"name": "dbeTransactionDescr", "type": "TDBEdit"}, "showeditform": {"name": "ShowEditForm", "type": "TAction"}, "showaddform": {"name": "ShowAddForm", "type": "TAction"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "dtopdatend": {"name": "dtOpDatEnd", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "datestatementend": {"name": "DateStatementEnd", "type": "TAction"}, "pcfilters": {"name": "pcFilters", "type": "TPageControl"}, "tbfilter": {"name": "tbFilter", "type": "TTabSheet"}, "tborder": {"name": "tbOrder", "type": "TTabSheet"}, "tbfilial": {"name": "tbFilial", "type": "TTabSheet"}, "rborder": {"name": "rbOrder", "type": "TRadioGroup"}, "pnconteiner": {"name": "pnConteiner", "type": "TPanel"}, "gboperator": {"name": "gbOperator", "type": "TGroupBox"}, "gbvalute": {"name": "gbValute", "type": "TGroupBox"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "clbvalute": {"name": "clbValute", "type": "TCheckListBox"}, "clboperation": {"name": "clbOperation", "type": "TCheckListBox"}, "filter": {"name": "Filter", "type": "TAction"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "cbfiltroptions": {"name": "cbFiltrOptions", "type": "TCheckBox"}, "groupbox13": {"name": "GroupBox13", "type": "TGroupBox"}, "groupbox12": {"name": "GroupBox12", "type": "TGroupBox"}, "scdebetfilial": {"name": "scDebetFilial", "type": "TSearchCombo"}, "sckreditfilial": {"name": "scKreditFilial", "type": "TSearchCombo"}, "splitter1": {"name": "Splitter1", "type": "TSplitter"}, "scuser": {"name": "scUser", "type": "TSearchCombo"}, "trfullrefresh": {"name": "TrFullRefresh", "type": "TAction"}, "checkbox_type": {"name": "CheckBox_type", "type": "TCheckBox"}, "checkbox_val": {"name": "CheckBox_val", "type": "TCheckBox"}, "fevents": {"name": "FEvents", "type": "IRepairNewMainEvents"}, "forder": {"name": "FOrder", "type": "TSearchOrder"}}, {});
  U.init(async () => {
    U.const("csOrder", "ORDER BY");
    U.var_("RepairNewMain", null, "TRepairNewMain");
    U.var_("Valute", null, "TStringList");
    U.var_("Operation", null, "TStringList");
    U.var_("TempWidth", 0, "Integer");
  });
  U.method("TRepairNewMain", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TRepairNewMain", "Get_Icon", async function Get_Icon(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["imageindex"] = 9;
  await $.stmt((await $.mcall((await $.v(C, "MainImageList")), "GetIcon", [L0["imageindex"], (await $.v(C, "Icon"))])));
  L0["result"] = (await $.mv((await $.v(C, "Icon")), "Handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairNewMain", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TRepairNewMain", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TRepairNewMain", "Initialize", null, arguments);
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
  U.method("TRepairNewMain", "MouseWheelHandler", async function MouseWheelHandler(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TRepairNewMain", "MouseWheelHandler", null, arguments);
  if ($.truthy((await $.mv((await $.v(C, "dbMain")), "Focused")))) {
    {
      const $t1 = (await $.call(C, "TCMMouseWheel", [(await L0["message"].get())]));
      const $t2 = (await $.mv((await $.mv((await $.wv([$t1], "dbMain", C, false)), "DataSource")), "DataSet"));
      if ($.truthy($.lt((await $.wv([$t1, $t2], "WheelDelta", C, false)), 0))) {
        await $.stmt($.wcall([$t1, $t2], "Next", [], C));
      } else {
        await $.stmt($.wcall([$t1, $t2], "Prior", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TRepairNewMain", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairNewMain", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairNewMain", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairNewMain", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairNewMain", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairNewMain", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairNewMain", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairNewMain", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairNewMain", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairNewMain", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairNewMain", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairNewMain", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairNewMain", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairNewMain", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairNewMain", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairNewMain", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairNewMain", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairNewMain", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairNewMain", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TRepairNewMain", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TRepairNewMain", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TRepairNewMain", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TRepairNewMain", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TRepairNewMain", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TRepairNewMain", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TRepairNewMain", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TRepairNewMain", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TRepairNewMain", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TRepairNewMain", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TRepairNewMain", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TRepairNewMain", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TRepairNewMain", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TRepairNewMain", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TRepairNewMain", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TRepairNewMain", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TRepairNewMain", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TRepairNewMain", "InitializeChlistBoxes", async function InitializeChlistBoxes(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.not(((await $.call(C, "Assigned", [(await $.v(C, "Valute"))])))))) {
    await $.set(C, "Valute", (await $.mv((await $.v(C, "TStringList")), "Create")));
  } else {
    await $.mcall((await $.v(C, "Valute")), "Clear", []);
  }
  if ($.truthy($.not(((await $.call(C, "Assigned", [(await $.v(C, "Operation"))])))))) {
    await $.set(C, "Operation", (await $.mv((await $.v(C, "TStringList")), "Create")));
  } else {
    await $.mcall((await $.v(C, "Operation")), "Clear", []);
  }
  await $.mset((await $.v(C, "clbValute")), "Tag", (await $.call(C, "Integer", [(await $.ref_(C, "Valute"))])));
  await $.mset((await $.v(C, "clbOperation")), "Tag", (await $.call(C, "Integer", [(await $.ref_(C, "Operation"))])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRepairNewMain", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "RepairNewMain", Self);
  await $.mset((await $.v(C, "lbSysDat")), "Caption", (await $.call(C, "DateToStr", [(await $.v(C, "Sb_GetSystemDate"))])));
  await $.mset((await $.v(C, "dtpOpDat")), "DateTime", (await $.v(C, "Sb_GetSystemDate")));
  await $.mset((await $.v(C, "dtOpDatEnd")), "DateTime", (await $.v(C, "Sb_GetSystemDate")));
  await $.set(C, "RapNewDataModule", (await $.mcall((await $.v(C, "TRapNewDataModule")), "Create", [Self])));
  await $.set(C, "FOrder", (await $.v(C, "soNone")));
  await $.mset((await $.v(C, "pcFilters")), "ActivePageIndex", 0);
  await $.stmt($.call(C, "InitializeChlistBoxes", []));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "ActiveFormDestroy", async function ActiveFormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "RapNewDataModule")), "Destroy", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "sbHideAdvancedOptionsClick", async function sbHideAdvancedOptionsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "ShowAdvancedOptionsExecute", async function ShowAdvancedOptionsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "pnLeftAdvanced")), "Visible", $.not(((await $.mv((await $.v(C, "pnLeftAdvanced")), "Visible")))));
  await $.mset((await $.v(C, "tbAdvancedOptions")), "Down", (await $.mv((await $.v(C, "pnLeftAdvanced")), "Visible")));
  if ($.truthy((await $.mv((await $.v(C, "dbMain")), "CanFocus")))) {
    await $.mcall((await $.v(C, "dbMain")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "AddTransExecute", async function AddTransExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ShowAddForm")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "DelTransExecute", async function DelTransExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ShowDeleteConfirm", ["Əməliyyat silinsin?"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "UpdTransExecute", async function UpdTransExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ShowEditForm")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("FindOrder", async function FindOrder(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"list": $.copyArg(p0), "value": (p1 === undefined ? (await $.v(C, "csOrder")) : p1), result: 0, "i": 0};
  await $.fixArgs(L0, ["list", "value"]);
  L0.result = (-(1));
  {
    const $t3 = L0["list"];
    { const $t4 = $.sub((await $.wv([$t3], "Count", C, false)), 1);
      await $.wset([$t3], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t5 = true;
      for (;;) {
        if (!$t5) { await $.wset([$t3], "i", $.succ((await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t5 = false;
        if (!($.ord((await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t4))) break;
        if ($.truthy($.ne((await $.wcall([$t3], "Pos", [(await $.wcall([$t3], "UpperCase", [(await $.wv([$t3], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false))], C)), (await $.wcall([$t3], "UPperCase", [(await $.idx((await $.wv([$t3], "Strings", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)), 0))) {
          L0.result = (await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false));
          break;
        } else {
          L0.result = (-(1));
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["List", "Value"], "kind": "function", "ptypes": ["TStrings", "String"]});
  U.method("TRepairNewMain", "CheckBox_typeClick", async function CheckBox_typeClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t6 = $.sub((await $.mv((await $.v(C, "CLBOperation")), "Count")), 1);
    L0["i"] = 0;
    let $t7 = true;
    for (;;) {
      if (!$t7) { L0["i"] = $.succ(L0["i"], 1); }
      $t7 = false;
      if (!($.ord(L0["i"]) <= $.ord($t6))) break;
      if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox_type")), "Checked")), false))) {
        { const $t8 = await $.iset((await $.mv((await $.v(C, "CLBOperation")), "Checked")), [L0["i"]], false); if ($t8 !== undefined) { await $.mset((await $.v(C, "CLBOperation")), "Checked", $t8); } }
      } else {
        { const $t9 = await $.iset((await $.mv((await $.v(C, "CLBOperation")), "Checked")), [L0["i"]], true); if ($t9 !== undefined) { await $.mset((await $.v(C, "CLBOperation")), "Checked", $t9); } }
      }
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "Filter")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "CheckBox_valClick", async function CheckBox_valClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t10 = $.sub((await $.mv((await $.v(C, "clbValute")), "Count")), 1);
    L0["i"] = 0;
    let $t11 = true;
    for (;;) {
      if (!$t11) { L0["i"] = $.succ(L0["i"], 1); }
      $t11 = false;
      if (!($.ord(L0["i"]) <= $.ord($t10))) break;
      if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox_val")), "Checked")), false))) {
        { const $t12 = await $.iset((await $.mv((await $.v(C, "clbValute")), "Checked")), [L0["i"]], false); if ($t12 !== undefined) { await $.mset((await $.v(C, "clbValute")), "Checked", $t12); } }
      } else {
        { const $t13 = await $.iset((await $.mv((await $.v(C, "clbValute")), "Checked")), [L0["i"]], true); if ($t13 !== undefined) { await $.mset((await $.v(C, "clbValute")), "Checked", $t13); } }
      }
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "Filter")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "CheckFilters", async function CheckFilters(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "ordstr": ''};
  L0["changeorder"] = $.fn(async function ChangeOrder(p0) {
  const L1 = {"value": $.copyArg(p0), result: undefined, "ordnum": 0};
  await $.fixArgs(L1, ["value"]);
  {
    const $t14 = (await $.mv((await $.v(C, "RapNewDataModule")), "TransactionData"));
    const $t15 = (await $.wv([$t14], "SQL", C, false));
    await $.wset([$t14, $t15], "OrdNum", (await $.wcall([$t14, $t15], "FindOrder", [(await $.wv([$t14, $t15], "SQL", C, false))], C)), { get: async () => L1["ordnum"], set: async (v) => { L1["ordnum"] = v; }, local: true });
    if ($.truthy($.ne((await $.wv([$t14, $t15], "OrdNum", { get: async () => L1["ordnum"], set: async (v) => { L1["ordnum"] = v; }, local: true }, false)), (-(1))))) {
      { const $t16 = await $.iset((await $.wv([$t14, $t15], "SQL", C, false)), [(await $.wv([$t14, $t15], "OrdNum", { get: async () => L1["ordnum"], set: async (v) => { L1["ordnum"] = v; }, local: true }, false))], $.add("ORDER BY ", (await $.wv([$t14, $t15], "value", { get: async () => L1["value"], set: async (v) => { L1["value"] = v; }, local: true }, false)))); if ($t16 !== undefined) { await $.wset([$t14, $t15], "SQL", $t16, C); } }
    } else {
      await $.stmt((await $.mcall((await $.wv([$t14, $t15], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t14, $t15], "value", { get: async () => L1["value"], set: async (v) => { L1["value"] = v; }, local: true }, false)))])));
    }
  }
  return L1.result;
});
  { const $t17 = (await $.mv((await $.v(C, "rbOrder")), "ItemIndex"));
    if ($.eq($t17, 0)) {
      L0["ordstr"] = "P.ID";
    }
    else if ($.eq($t17, 1)) {
      L0["ordstr"] = "P.dat";
    }
    else if ($.eq($t17, 2)) {
      L0["ordstr"] = "ad.ACC_NO";
    }
    else if ($.eq($t17, 3)) {
      L0["ordstr"] = "dc.val_name ";
    }
    else if ($.eq($t17, 4)) {
      L0["ordstr"] = "ac.ACC_NO";
    }
    else if ($.eq($t17, 5)) {
      L0["ordstr"] = "cc.val_name";
    }
    else if ($.eq($t17, 6)) {
      L0["ordstr"] = "p.ammount";
    }
    else if ($.eq($t17, 7)) {
      L0["ordstr"] = "p.Ammount_C";
    }
    else if ($.eq($t17, 8)) {
      L0["ordstr"] = "p.LAmmount ";
    }
  }
  await $.stmt((await $.callv(L0["changeorder"], [L0["ordstr"]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRepairNewMain", "RefreshTransExecute", async function RefreshTransExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "CheckDates", []));
  await $.stmt($.call(C, "CheckFilters", []));
  if ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "RapNewDataModule")), "TransactionData")), "Active"))))) {
    await $.mcall((await $.mv((await $.v(C, "RapNewDataModule")), "TransactionData")), "Open", []);
  } else {
    await $.mcall((await $.mv((await $.v(C, "RapNewDataModule")), "TransactionData")), "Refresh", []);
  }
  await $.mcall((await $.v(C, "Filter")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "DatePanelMouseDown", async function DatePanelMouseDown(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  if ($.truthy((await $.and_($.not(($.is_(L0["sender"], "TForm"))), async () => ($.lt(L0["x"], 4)))))) {
    await $.stmt((await $.mcall(L0["sender"], "BeginDrag", [true])));
  }
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TRepairNewMain", "dbMainColumnMoved", async function dbMainColumnMoved(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "fromindex": $.copyArg(p1), "toindex": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "fromindex", "toindex"]);
  await $.stmt($.call(C, "Beep", []));
  return L0.result;
}, {"params": ["Sender", "FromIndex", "ToIndex"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer"]});
  U.method("TRepairNewMain", "ShowSearchPanelExecute", async function ShowSearchPanelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t18 = (L0["sender"]);
    await $.wset([$t18], "Checked", $.not(((await $.wv([$t18], "Checked", C, false)))), C);
    await $.mset((await $.wv([$t18], "pnSearch", C, false)), "Visible", (await $.wv([$t18], "Checked", C, false)));
    await $.mset((await $.wv([$t18], "tbSearch", C, false)), "Down", (await $.wv([$t18], "Checked", C, false)));
    if ($.truthy((await $.wv([$t18], "Checked", C, false)))) {
      await $.stmt($.wcall([$t18], "CreateSearchPanel", [], C));
    } else {
      await $.stmt($.wcall([$t18], "ClearSearhPanel", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "btAdvancedOptionsExitMouseUp", async function btAdvancedOptionsExitMouseUp(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  await $.mcall((await $.v(C, "btAdvancedOptionsExit")), "Update", []);
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TRepairNewMain", "ClearSearhPanel", async function ClearSearhPanel(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "pnSearch")), "DestroyComponents", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRepairNewMain", "CreateSearchPanel", async function CreateSearchPanel(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "edleft": 0, "tempedit": null};
  {
    const $t19 = (await $.v(C, "dbMain"));
    await $.wset([$t19], "edLeft", 4, { get: async () => L0["edleft"], set: async (v) => { L0["edleft"] = v; }, local: true });
    { const $t20 = $.sub((await $.mv((await $.wv([$t19], "Columns", C, false)), "Count")), 1);
      await $.wset([$t19], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t21 = true;
      for (;;) {
        if (!$t21) { await $.wset([$t19], "i", $.succ((await $.wv([$t19], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t21 = false;
        if (!($.ord((await $.wv([$t19], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t20))) break;
        {
          const $t22 = (await $.wv([$t19], "TempEdit", { get: async () => L0["tempedit"], set: async (v) => { L0["tempedit"] = v; }, local: true }, false));
          await $.wset([$t19, $t22], "TempEdit", (await $.mcall((await $.wv([$t19, $t22], "TEdit", C, false)), "Create", [(await $.wv([$t19, $t22], "pnSearch", C, false))])), { get: async () => L0["tempedit"], set: async (v) => { L0["tempedit"] = v; }, local: true });
          await $.wset([$t19, $t22], "Hint", (await $.mv((await $.mv((await $.idx((await $.wv([$t19, $t22], "Columns", C, false)), [(await $.wv([$t19, $t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Field")), "FieldName")), C);
          if ($.truthy($.eq((await $.mcall((await $.wv([$t19, $t22], "pnSearch", C, false)), "FindComponent", [$.add("ed_", (await $.wv([$t19, $t22], "Hint", C, false)))])), null))) {
            await $.wset([$t19, $t22], "Name", $.add("ed_", (await $.wv([$t19, $t22], "Hint", C, false))), C);
          }
          await $.wset([$t19, $t22], "Text", (await $.wv([$t19, $t22], "EmptyStr", C, false)), C);
          await $.wset([$t19, $t22], "OnChange", (await $.wv([$t19, $t22], "FastSearch", C, true)), C);
          await $.wset([$t19, $t22], "OnKeyPress", (await $.wv([$t19, $t22], "KeyFastSearch", C, true)), C);
          await $.wset([$t19, $t22], "OnKeyDown", (await $.wv([$t19, $t22], "KeyFastUpDownSearch", C, true)), C);
          await $.stmt((await $.wcall([$t19, $t22], "SetBounds", [(await $.wv([$t19, $t22], "edLeft", { get: async () => L0["edleft"], set: async (v) => { L0["edleft"] = v; }, local: true }, false)), 4, (await $.mv((await $.idx((await $.wv([$t19, $t22], "Columns", C, false)), [(await $.wv([$t19, $t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Width")), 10], C)));
          await $.wset([$t19, $t22], "Parent", (await $.wv([$t19, $t22], "pnSearch", C, false)), C);
          await $.wset([$t19, $t22], "Ctl3D", (await $.wv([$t19, $t22], "False", C, false)), C);
          await $.wset([$t19, $t22], "Color", (await $.wv([$t19, $t22], "clSilver", C, false)), C);
          await $.mset((await $.wv([$t19, $t22], "Font", C, false)), "Color", (await $.wv([$t19, $t22], "clNavy", C, false)));
          await $.wset([$t19, $t22], "edLeft", $.add($.add((await $.wv([$t19, $t22], "edLeft", { get: async () => L0["edleft"], set: async (v) => { L0["edleft"] = v; }, local: true }, false)), (await $.mv((await $.idx((await $.wv([$t19, $t22], "Columns", C, false)), [(await $.wv([$t19, $t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Width"))), 1), { get: async () => L0["edleft"], set: async (v) => { L0["edleft"] = v; }, local: true });
        }
        await $.tick();
      }
    }
  }
  await $.mcall((await $.v(C, "pnSearchOrder")), "BringToFront", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRepairNewMain", "KeyFastSearch", async function KeyFastSearch(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), 13))) {
    await $.stmt((await $.call(C, "sbUpClick", [(await $.v(C, "sbMiddle"))])));
    await $.stmt((await $.call(C, "FastSearch", [L0["sender"]])));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TRepairNewMain", "KeyFastUpDownSearch", async function KeyFastUpDownSearch(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  { const $t23 = (await L0["key"].get());
    if ($.eq($t23, (await $.v(C, "VK_UP")))) {
      await $.stmt((await $.call(C, "sbUpClick", [(await $.v(C, "sbUp"))])));
      await $.stmt((await $.call(C, "FastSearch", [L0["sender"]])));
      await L0["key"].set(0);
    }
    else if ($.eq($t23, (await $.v(C, "VK_DOWN")))) {
      await $.stmt((await $.call(C, "sbUpClick", [(await $.v(C, "sbDown"))])));
      await $.stmt((await $.call(C, "FastSearch", [L0["sender"]])));
      await L0["key"].set(0);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TRepairNewMain", "FastSearch", async function FastSearch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "recopt": null};
  await $.fixArgs(L0, ["sender"]);
  L0["recopt"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  if ($.truthy(($.is_(L0["sender"], "TEdit")))) {
    {
      const $t24 = (L0["sender"]);
      const $t25 = (await $.mv((await $.wv([$t24], "RapNewDataModule", C, false)), "TransactionData"));
      if ($.truthy((await $.wv([$t24, $t25], "Active", C, false)))) {
        { const $t26 = (await $.wv([$t24, $t25], "FOrder", C, false));
          if ($.eq($t26, (await $.wv([$t24, $t25], "soForward", C, false)))) {
            await $.stmt((await $.wcall([$t24, $t25], "Include", [$.ref(async () => (await $.wv([$t24, $t25], "RecOpt", { get: async () => L0["recopt"], set: async (v) => { L0["recopt"] = v; }, local: true }, false)), async ($t27) => { await $.wset([$t24, $t25], "RecOpt", $t27, { get: async () => L0["recopt"], set: async (v) => { L0["recopt"] = v; }, local: true }); }), (await $.wv([$t24, $t25], "srForward", C, false))], C)));
          }
          else if ($.eq($t26, (await $.wv([$t24, $t25], "soBackward", C, false)))) {
            await $.stmt((await $.wcall([$t24, $t25], "Include", [$.ref(async () => (await $.wv([$t24, $t25], "RecOpt", { get: async () => L0["recopt"], set: async (v) => { L0["recopt"] = v; }, local: true }, false)), async ($t28) => { await $.wset([$t24, $t25], "RecOpt", $t28, { get: async () => L0["recopt"], set: async (v) => { L0["recopt"] = v; }, local: true }); }), (await $.wv([$t24, $t25], "srBackward", C, false))], C)));
          }
          else if ($.eq($t26, (await $.wv([$t24, $t25], "soNone", C, false)))) {
            await $.stmt((await $.wcall([$t24, $t25], "Include", [$.ref(async () => (await $.wv([$t24, $t25], "RecOpt", { get: async () => L0["recopt"], set: async (v) => { L0["recopt"] = v; }, local: true }, false)), async ($t29) => { await $.wset([$t24, $t25], "RecOpt", $t29, { get: async () => L0["recopt"], set: async (v) => { L0["recopt"] = v; }, local: true }); }), (await $.wv([$t24, $t25], "srFromBeginning", C, false))], C)));
          }
        }
        await $.stmt((await $.wcall([$t24, $t25], "SearchRecord", [(await $.wv([$t24, $t25], "Hint", C, false)), (await $.wv([$t24, $t25], "Text", C, false)), (await $.wv([$t24, $t25], "RecOpt", { get: async () => L0["recopt"], set: async (v) => { L0["recopt"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "sbUpClick", async function sbUpClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["reenablecontrols"] = $.fn(async function ReenableControls(p0) {
  const L1 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L1, ["sender"]);
  {
    const $t30 = (await $.mv(L1["sender"], "Parent"));
    { const $t31 = $.sub((await $.wv([$t30], "ControlCount", C, false)), 1);
      await $.wset([$t30], "i", 0, { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true });
      let $t32 = true;
      for (;;) {
        if (!$t32) { await $.wset([$t30], "i", $.succ((await $.wv([$t30], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), 1), { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }); }
        $t32 = false;
        if (!($.ord((await $.wv([$t30], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))) <= $.ord($t31))) break;
        await $.mset((await $.idx((await $.wv([$t30], "Controls", C, false)), [(await $.wv([$t30], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), "Enabled", (await $.wv([$t30], "True", C, false)));
        await $.tick();
      }
    }
  }
  await $.mset(L1["sender"], "Enabled", false);
  return L1.result;
});
  if ($.truthy($.eq(L0["sender"], (await $.v(C, "sbUp"))))) {
    await $.set(C, "FOrder", (await $.v(C, "soBackward")));
  } else {
    if ($.truthy($.eq(L0["sender"], (await $.v(C, "sbMiddle"))))) {
      await $.set(C, "FOrder", (await $.v(C, "soNone")));
    } else {
      if ($.truthy($.eq(L0["sender"], (await $.v(C, "sbDown"))))) {
        await $.set(C, "FOrder", (await $.v(C, "soForward")));
      }
    }
  }
  await $.stmt((await $.callv(L0["reenablecontrols"], [(await $.call(C, "TControl", [L0["sender"]]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "DateStatementExecute", async function DateStatementExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "RapNewDataModule")), "TransactionData")), "SetVariable", ["DAT", (await $.mv((await $.v(C, "dtpOpDat")), "DateTime"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "dtpOpDatChange", async function dtpOpDatChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DateStatement")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "dbMainDblClick", async function dbMainDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ShowEditForm")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "ShowEditFormExecute", async function ShowEditFormExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t33 = (await $.v(C, "RapNewDataModule"));
    if ($.truthy($.gt((await $.mv((await $.wv([$t33], "TransactionData", C, false)), "RecordCount")), 0))) {
      await $.stmt((await $.wcall([$t33], "ExecuteEditAction", [(await $.wv([$t33], "TransactionData", C, false)), (await $.wv([$t33], "acUpdate", C, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "ExecuteEditAction", async function ExecuteEditAction(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "value": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["dataset", "value"]);
  L0["showeditform"] = $.fn(async function ShowEditForm(p0) {
  const L1 = {"acvalue": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["acvalue"]);
  if ($.truthy($.not(((await $.call(C, "Assigned", [(await $.v(C, "RepairEdit"))])))))) {
    await $.set(C, "RepairEdit", (await $.mcall((await $.v(C, "TRepairEdit")), "Create", [Self])));
  }
  try {
    await $.mset((await $.v(C, "RepairEdit")), "EditAction", L1["acvalue"]);
    await $.mcall((await $.v(C, "RepairEdit")), "ShowModal", []);
  } finally {
    await $.mcall((await $.v(C, "RepairEdit")), "Release", []);
    await $.set(C, "RepairEdit", null);
  }
  return L1.result;
});
  L0.result = false;
  { const $t34 = L0["value"];
    if ($.eq($t34, (await $.v(C, "acInsert")))) {
      await $.mcall(L0["dataset"], "Insert", []);
      await $.stmt((await $.callv(L0["showeditform"], [L0["value"]])));
      L0["result"] = true;
    }
    else if ($.eq($t34, (await $.v(C, "acUpdate")))) {
      await $.mcall(L0["dataset"], "Edit", []);
      await $.stmt((await $.callv(L0["showeditform"], [L0["value"]])));
      L0["result"] = true;
    }
    else if ($.eq($t34, (await $.v(C, "acDelete")))) {
      await $.stmt($.call(C, "Beep", []));
    }
  }
  return L0.result;
}, {"params": ["DataSet", "Value"], "kind": "function", "ptypes": ["TDataSet", "TEditAction"]});
  U.method("TRepairNewMain", "pnGridlayerResize", async function pnGridlayerResize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["columnswidth"] = $.fn(async function ColumnsWidth() {
  const L1 = {result: 0, "i": 0};
  L1["result"] = 0;
  {
    const $t35 = (await $.v(C, "dbMain"));
    { const $t36 = $.sub((await $.mv((await $.wv([$t35], "Columns", C, false)), "Count")), 1);
      await $.wset([$t35], "i", 0, { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true });
      let $t37 = true;
      for (;;) {
        if (!$t37) { await $.wset([$t35], "i", $.succ((await $.wv([$t35], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), 1), { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }); }
        $t37 = false;
        if (!($.ord((await $.wv([$t35], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))) <= $.ord($t36))) break;
        await $.wset([$t35], "Result", $.add((await $.wv([$t35], "Result", { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true }, false)), (await $.mv((await $.idx((await $.wv([$t35], "Columns", C, false)), [(await $.wv([$t35], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), "Width"))), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
        await $.tick();
      }
    }
  }
  return L1.result;
});
  {
    const $t38 = (await $.v(C, "dbMain"));
    if ($.truthy($.eq((await $.wv([$t38], "Tag", C, false)), 0))) {
      await $.wset([$t38], "Tag", (await $.mv(((await $.wv([$t38], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Width")), C);
      await $.mset((await $.wv([$t38], "pnGridlayer", C, false)), "Tag", (await $.mv((await $.idx((await $.wv([$t38], "Columns", C, false)), [$.sub((await $.mv((await $.wv([$t38], "Columns", C, false)), "Count")), 1)])), "Width")));
      await $.wset([$t38], "TempWidth", (await $.mv(((await $.wv([$t38], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Width")), C);
    }
    if ($.truthy((await $.and_(($.gt($.add((await $.mv((await $.idx((await $.wv([$t38], "Columns", C, false)), [$.sub((await $.mv((await $.wv([$t38], "Columns", C, false)), "Count")), 1)])), "Width")), ($.sub((await $.mv(((await $.wv([$t38], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Width")), (await $.wv([$t38], "Tag", C, false))))), (await $.mv((await $.wv([$t38], "pnGridlayer", C, false)), "Tag")))), async () => ($.gt((await $.mv(((await $.wv([$t38], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Width")), $.add((await $.wv([$t38], "TempWidth", C, false)), 4))))))) {
      await $.mset((await $.idx((await $.wv([$t38], "Columns", C, false)), [$.sub((await $.mv((await $.wv([$t38], "Columns", C, false)), "Count")), 1)])), "Width", $.add((await $.mv((await $.idx((await $.wv([$t38], "Columns", C, false)), [$.sub((await $.mv((await $.wv([$t38], "Columns", C, false)), "Count")), 1)])), "Width")), ($.sub((await $.mv(((await $.wv([$t38], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Width")), (await $.wv([$t38], "Tag", C, false))))));
      await $.wset([$t38], "Tag", (await $.mv(((await $.wv([$t38], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Width")), C);
    } else {
      await $.mset((await $.idx((await $.wv([$t38], "Columns", C, false)), [$.sub((await $.mv((await $.wv([$t38], "Columns", C, false)), "Count")), 1)])), "Width", (await $.mv((await $.wv([$t38], "pnGridlayer", C, false)), "Tag")));
      await $.wset([$t38], "Tag", (await $.mv(((await $.wv([$t38], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Width")), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "FilterShowAction", async function FilterShowAction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  L0["enabledata"] = $.fn(async function EnableData(p0) {
  const L1 = {"sender": $.copyArg(p0), result: false};
  await $.fixArgs(L1, ["sender"]);
  if ($.truthy(($.is_(L1["sender"], "TDataSet")))) {
    {
      const $t39 = (L1["sender"]);
      if ($.truthy($.not(((await $.wv([$t39], "Active", C, false)))))) {
        await $.stmt($.wcall([$t39], "Open", [], C));
      } else {
        await $.stmt($.wcall([$t39], "Refresh", [], C));
      }
    }
    L1.result = true;
  } else {
    L1.result = false;
  }
  return L1.result;
});
  {
    const $t40 = (await $.v(C, "RapNewDataModule"));
    if ($.truthy((await $.or_(($.eq((await $.wv([$t40], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), (await $.wv([$t40], "ftMain", C, false)))), async () => ($.eq((await $.wv([$t40], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), (await $.wv([$t40], "ftAll", C, false)))))))) {
      if ($.truthy($.eq((await $.wv([$t40], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), (await $.wv([$t40], "ftAll", C, false))))) {
        await $.mcall((await $.wv([$t40], "clbValute", C, false)), "Clear", []);
        await $.mcall((await $.wcall([$t40], "TStringList", [(await $.wcall([$t40], "Pointer", [(await $.mv((await $.wv([$t40], "clbValute", C, false)), "Tag"))], C))], C)), "Clear", []);
        await $.mcall((await $.wv([$t40], "clbOperation", C, false)), "Clear", []);
        await $.mcall((await $.wcall([$t40], "TStringList", [(await $.wcall([$t40], "Pointer", [(await $.mv((await $.wv([$t40], "clbOperation", C, false)), "Tag"))], C))], C)), "Clear", []);
      }
      await $.mset((await $.wv([$t40], "scUser", C, false)), "DataSource", (await $.wv([$t40], "Users", C, false)));
      await $.stmt((await $.wcall([$t40], "EnableData", [(await $.wv([$t40], "UsersData", C, false))], { get: async () => L0["enabledata"], set: async (v) => { L0["enabledata"] = v; }, local: true })));
      if ($.truthy($.not(($.gt((await $.mv((await $.mv((await $.wv([$t40], "clbValute", C, false)), "Items")), "Count")), 1))))) {
        await $.mcall((await $.wv([$t40], "Valutes", C, false)), "Execute", []);
      }
      if ($.truthy($.not(($.gt((await $.mv((await $.mv((await $.wv([$t40], "clbOperation", C, false)), "Items")), "Count")), 1))))) {
        await $.mcall((await $.wv([$t40], "VidOp", C, false)), "Execute", []);
      }
    }
    if ($.truthy((await $.or_(($.eq((await $.wv([$t40], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), (await $.wv([$t40], "ftFilial", C, false)))), async () => ($.eq((await $.wv([$t40], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), (await $.wv([$t40], "ftAll", C, false)))))))) {
      if ($.truthy((await $.or_($.not(((await $.mv((await $.wv([$t40], "FilialDebetData", C, false)), "Active")))), async () => ($.eq((await $.wv([$t40], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), (await $.wv([$t40], "ftAll", C, false)))))))) {
        if ($.truthy((await $.wcall([$t40], "EnableData", [(await $.wv([$t40], "FilialDebetData", C, false))], { get: async () => L0["enabledata"], set: async (v) => { L0["enabledata"] = v; }, local: true })))) {
          await $.mset((await $.wv([$t40], "scDebetFilial", C, false)), "DataSource", (await $.wv([$t40], "FilialDebet", C, false)));
          await $.mcall((await $.wv([$t40], "scDebetFilial", C, false)), "Refresh", []);
        }
      }
      if ($.truthy((await $.or_($.not(((await $.mv((await $.wv([$t40], "FilialCreditData", C, false)), "Active")))), async () => ($.eq((await $.wv([$t40], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), (await $.wv([$t40], "ftAll", C, false)))))))) {
        if ($.truthy((await $.wcall([$t40], "EnableData", [(await $.wv([$t40], "FilialCreditData", C, false))], { get: async () => L0["enabledata"], set: async (v) => { L0["enabledata"] = v; }, local: true })))) {
          await $.mset((await $.wv([$t40], "scKreditFilial", C, false)), "DataSource", (await $.wv([$t40], "FilialCredit", C, false)));
          await $.mcall((await $.wv([$t40], "scKreditFilial", C, false)), "Refresh", []);
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TFilterType"]});
  U.method("TRepairNewMain", "dbMainKeyDown", async function dbMainKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  { const $t41 = (await L0["key"].get());
    if ($.eq($t41, (await $.v(C, "vk_return")))) {
      await $.stmt((await $.call(C, "dbMainDblClick", [L0["sender"]])));
    }
    else if ($.eq($t41, (await $.v(C, "vk_Delete")))) {
      await $.mcall((await $.v(C, "DelTrans")), "Execute", []);
    }
    else if ($.eq($t41, (await $.v(C, "VK_INSERT")))) {
      await $.mcall((await $.v(C, "AddTrans")), "Execute", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TRepairNewMain", "dbMainTitleClick", async function dbMainTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  {
    const $t42 = (await $.mv((await $.v(C, "RapNewDataModule")), "TransactionData"));
    if ($.truthy((await $.or_(((await $.wv([$t42], "IsEmpty", C, false))), async () => ($.eq((await $.mv((await $.wv([$t42], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), (await $.wv([$t42], "EmptyStr", C, false)))))))) {
      return L0.result;
    }
    await $.stmt($.wcall([$t42], "Close", [], C));
    await $.stmt((await $.wcall([$t42], "SetVariable", ["Title", (await $.mv((await $.wv([$t42], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName"))], C)));
    await $.stmt($.wcall([$t42], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TRepairNewMain", "ShowAddFormExecute", async function ShowAddFormExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t43 = (await $.v(C, "RapNewDataModule"));
    await $.stmt((await $.wcall([$t43], "ExecuteEditAction", [(await $.wv([$t43], "TransactionData", C, false)), (await $.wv([$t43], "acInsert", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "DateStatementEndExecute", async function DateStatementEndExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "RapNewDataModule")), "TransactionData")), "SetVariable", ["DAT2", (await $.mv((await $.v(C, "dtOpDatEnd")), "DateTime"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "dtOpDatEndChange", async function dtOpDatEndChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DateStatementEnd")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "dtpOpDatEnter", async function dtpOpDatEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "tbFilterShow", async function tbFilterShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "FilterShowAction", [(await $.call(C, "TFilterType", [(await $.mv((await $.call(C, "TComponent", [L0["sender"]])), "Tag"))]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "FilterExecute", async function FilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["enablechecklistbox"] = $.fn(async function EnableCheckListBox(p0) {
  const L1 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["value"]);
  if ($.truthy($.is_(L0["sender"], "TCheckListBox"))) {
    {
      const $t44 = (L0["sender"]);
      await $.wset([$t44], "Enabled", (await $.wv([$t44], "Value", { get: async () => L1["value"], set: async (v) => { L1["value"] = v; }, local: true }, false)), C);
      await $.stmt($.wcall([$t44], "Update", [], C));
    }
  }
  return L1.result;
});
  await $.stmt((await $.callv(L0["enablechecklistbox"], [false])));
  try {
    await $.stmt((await $.call(C, "ReInitializeFilters", [(await $.mv((await $.v(C, "RapNewDataModule")), "TransactionData"))])));
  } finally {
    await $.stmt((await $.callv(L0["enablechecklistbox"], [true])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "ReInitializeFilters", async function ReInitializeFilters(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "first": false, "filterstring": ''};
  await $.fixArgs(L0, ["dataset"]);
  L0["orexpr"] = " or ";
  L0["addtofilter"] = $.fn(async function AddToFilter(p0, p1, p2, p3, p4) {
  const L1 = {"field": $.copyArg(p0), "value": $.copyArg(p1), "operation": $.copyArg(p2), "bracket": $.copyArg(p3), "boltype": (p4 === undefined ? " and " : p4), result: undefined, "decompleteres": ''};
  await $.fixArgs(L1, ["field", "value", "operation", "bracket", "boltype"]);
  L1["addbrackettofilter"] = $.fn(async function AddBracketToFilter(p0) {
  const L2 = {"value": $.copyArg(p0), result: ''};
  await $.fixArgs(L2, ["value"]);
  if ($.truthy($.ne(L2["value"], (await $.v(C, "brNone"))))) {
    L2["result"] = (await $.call(C, "Char", [$.add((await $.call(C, "Ord", [L2["value"]])), 40)]));
  } else {
    L2["result"] = (await $.v(C, "EmptyStr"));
  }
  return L2.result;
});
  if ($.truthy(L0["first"])) {
    L1["decompleteres"] = (await $.v(C, "EmptyStr"));
    L0["first"] = false;
  } else {
    L1["decompleteres"] = L1["boltype"];
  }
  if ($.truthy($.eq(L1["bracket"], (await $.v(C, "brBegin"))))) {
    L0["filterstring"] = $.add($.add($.add($.add($.add($.add($.add(L0["filterstring"], L1["decompleteres"]), (await $.callv(L1["addbrackettofilter"], [L1["bracket"]]))), "("), L1["field"]), L1["operation"]), L1["value"]), ")");
  } else {
    L0["filterstring"] = $.add($.add($.add($.add($.add($.add($.add(L0["filterstring"], L1["decompleteres"]), "("), L1["field"]), L1["operation"]), L1["value"]), ")"), (await $.callv(L1["addbrackettofilter"], [L1["bracket"]])));
  }
  return L1.result;
});
  L0["executecheckboxfilter"] = $.fn(async function ExecuteCheckBoxFilter(p0, p1, p2, p3, p4) {
  const L1 = {"box": $.copyArg(p0), "field1": $.copyArg(p1), "field2": $.copyArg(p2), "val": $.copyArg(p3), "operation": (p4 === undefined ? "<>" : p4), result: undefined, "i": 0, "cnt": 0, "brackets": null};
  await $.fixArgs(L1, ["box", "field1", "field2", "val", "operation"]);
  {
    const $t45 = L1["box"];
    const $t46 = (await $.wv([$t45], "Items", C, false));
    if ($.truthy($.not(($.gt((await $.wv([$t45, $t46], "Count", C, false)), 0))))) {
      return L1.result;
    }
    if ($.truthy((await $.wv([$t45, $t46], "Val", { get: async () => L1["val"], set: async (v) => { L1["val"] = v; }, local: true }, false)))) {
      await $.wset([$t45, $t46], "Cnt", $.sub((await $.wv([$t45, $t46], "Count", C, false)), 2), { get: async () => L1["cnt"], set: async (v) => { L1["cnt"] = v; }, local: true });
    } else {
      await $.wset([$t45, $t46], "Cnt", $.sub((await $.wv([$t45, $t46], "Count", C, false)), 1), { get: async () => L1["cnt"], set: async (v) => { L1["cnt"] = v; }, local: true });
    }
    if ($.truthy($.not(($.eq((await $.wv([$t45, $t46], "Field2", { get: async () => L1["field2"], set: async (v) => { L1["field2"] = v; }, local: true }, false)), (await $.wv([$t45, $t46], "EmptyStr", C, false))))))) {
      await $.wset([$t45, $t46], "Brackets", (await $.wv([$t45, $t46], "brBegin", C, false)), { get: async () => L1["brackets"], set: async (v) => { L1["brackets"] = v; }, local: true });
    } else {
      await $.wset([$t45, $t46], "Brackets", (await $.wv([$t45, $t46], "brNone", C, false)), { get: async () => L1["brackets"], set: async (v) => { L1["brackets"] = v; }, local: true });
    }
    { const $t47 = (await $.wv([$t45, $t46], "Cnt", { get: async () => L1["cnt"], set: async (v) => { L1["cnt"] = v; }, local: true }, false));
      await $.wset([$t45, $t46], "i", 0, { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true });
      let $t48 = true;
      for (;;) {
        if (!$t48) { await $.wset([$t45, $t46], "i", $.succ((await $.wv([$t45, $t46], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), 1), { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }); }
        $t48 = false;
        if (!($.ord((await $.wv([$t45, $t46], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))) <= $.ord($t47))) break;
        if ($.truthy($.not(((await $.idx((await $.wv([$t45, $t46], "Checked", C, false)), [(await $.wv([$t45, $t46], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])))))) {
          await $.stmt((await $.wcall([$t45, $t46], "AddToFilter", [(await $.wv([$t45, $t46], "Field1", { get: async () => L1["field1"], set: async (v) => { L1["field1"] = v; }, local: true }, false)), (await $.idx((await $.mv((await $.wcall([$t45, $t46], "TStringList", [(await $.wcall([$t45, $t46], "Pointer", [(await $.mv((await $.wv([$t45, $t46], "Box", { get: async () => L1["box"], set: async (v) => { L1["box"] = v; }, local: true }, false)), "Tag"))], C))], C)), "Strings")), [(await $.wv([$t45, $t46], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), (await $.wv([$t45, $t46], "operation", { get: async () => L1["operation"], set: async (v) => { L1["operation"] = v; }, local: true }, false)), (await $.wv([$t45, $t46], "Brackets", { get: async () => L1["brackets"], set: async (v) => { L1["brackets"] = v; }, local: true }, false))], { get: async () => L0["addtofilter"], set: async (v) => { L0["addtofilter"] = v; }, local: true })));
          if ($.truthy($.not(($.eq((await $.wv([$t45, $t46], "Field2", { get: async () => L1["field2"], set: async (v) => { L1["field2"] = v; }, local: true }, false)), (await $.wv([$t45, $t46], "EmptyStr", C, false))))))) {
            await $.stmt((await $.wcall([$t45, $t46], "AddToFilter", [(await $.wv([$t45, $t46], "Field2", { get: async () => L1["field2"], set: async (v) => { L1["field2"] = v; }, local: true }, false)), (await $.idx((await $.mv((await $.wcall([$t45, $t46], "TStringList", [(await $.wcall([$t45, $t46], "Pointer", [(await $.mv((await $.wv([$t45, $t46], "Box", { get: async () => L1["box"], set: async (v) => { L1["box"] = v; }, local: true }, false)), "Tag"))], C))], C)), "Strings")), [(await $.wv([$t45, $t46], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), (await $.wv([$t45, $t46], "operation", { get: async () => L1["operation"], set: async (v) => { L1["operation"] = v; }, local: true }, false)), (await $.wv([$t45, $t46], "brEnd", C, false)), (await $.wv([$t45, $t46], "orExpr", { get: async () => L0["orexpr"], set: async (v) => { L0["orexpr"] = v; }, local: true }, false))], { get: async () => L0["addtofilter"], set: async (v) => { L0["addtofilter"] = v; }, local: true })));
          }
        }
        await $.tick();
      }
    }
    if ($.truthy((await $.and_((await $.wv([$t45, $t46], "Val", { get: async () => L1["val"], set: async (v) => { L1["val"] = v; }, local: true }, false)), async () => $.not(((await $.idx((await $.wv([$t45, $t46], "Checked", C, false)), [$.sub((await $.wv([$t45, $t46], "Count", C, false)), 1)])))))))) {
      await $.stmt((await $.wcall([$t45, $t46], "AddToFilter", [(await $.wv([$t45, $t46], "Field1", { get: async () => L1["field1"], set: async (v) => { L1["field1"] = v; }, local: true }, false)), (await $.idx((await $.mv((await $.wcall([$t45, $t46], "TStringList", [(await $.wcall([$t45, $t46], "Pointer", [(await $.mv((await $.wv([$t45, $t46], "Box", { get: async () => L1["box"], set: async (v) => { L1["box"] = v; }, local: true }, false)), "Tag"))], C))], C)), "Strings")), [$.sub((await $.wv([$t45, $t46], "Count", C, false)), 1)])), "=", (await $.wv([$t45, $t46], "brNone", C, false))], { get: async () => L0["addtofilter"], set: async (v) => { L0["addtofilter"] = v; }, local: true })));
    }
  }
  return L1.result;
});
  L0["executecomboboxfilter"] = $.fn(async function ExecuteComboBoxFilter(p0, p1, p2, p3, p4) {
  const L1 = {"sender": $.copyArg(p0), "dataset": $.copyArg(p1), "fieldexpression": $.copyArg(p2), "field": $.copyArg(p3), "operation": $.copyArg(p4), result: undefined};
  await $.fixArgs(L1, ["sender", "dataset", "fieldexpression", "field", "operation"]);
  {
    const $t49 = (await $.v(C, "RapNewDataModule"));
    if ($.truthy((await $.mv((await $.wv([$t49], "DataSet", { get: async () => L1["dataset"], set: async (v) => { L1["dataset"] = v; }, local: true }, false)), "Active")))) {
      {
        const $t50 = ((await $.wv([$t49], "Sender", { get: async () => L1["sender"], set: async (v) => { L1["sender"] = v; }, local: true }, false)));
        if ($.truthy((await $.and_(($.ne((await $.wv([$t49, $t50], "ItemIndex", C, false)), (-(1)))), async () => ($.ne((await $.wv([$t49, $t50], "ItemIndex", C, false)), 0)))))) {
          await $.stmt((await $.wcall([$t49, $t50], "AddToFilter", [(await $.wv([$t49, $t50], "FieldExpression", { get: async () => L1["fieldexpression"], set: async (v) => { L1["fieldexpression"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t49, $t50], "DataSet", { get: async () => L1["dataset"], set: async (v) => { L1["dataset"] = v; }, local: true }, false)), "FieldByName", [(await $.wv([$t49, $t50], "Field", { get: async () => L1["field"], set: async (v) => { L1["field"] = v; }, local: true }, false))])), "AsString")), (await $.wv([$t49, $t50], "Operation", { get: async () => L1["operation"], set: async (v) => { L1["operation"] = v; }, local: true }, false)), (await $.wv([$t49, $t50], "brNone", C, false))], { get: async () => L0["addtofilter"], set: async (v) => { L0["addtofilter"] = v; }, local: true })));
        }
      }
    }
  }
  return L1.result;
});
  L0["first"] = true;
  {
    const $t51 = (await $.v(C, "RapNewDataModule"));
    const $t52 = (await $.wv([$t51], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false));
    await $.wset([$t51, $t52], "FilterString", (await $.wv([$t51, $t52], "EmptyStr", C, false)), { get: async () => L0["filterstring"], set: async (v) => { L0["filterstring"] = v; }, local: true });
    if ($.truthy((await $.and_(($.gt((await $.mv((await $.wv([$t51, $t52], "scUser", C, false)), "ItemIndex")), 0)), async () => ((await $.mv((await $.mv((await $.mv((await $.wv([$t51, $t52], "scUser", C, false)), "DataSource")), "DataSet")), "Active"))))))) {
      await $.stmt((await $.wcall([$t51, $t52], "AddToFilter", ["OPERATORID", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t51, $t52], "scUser", C, false)), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsString")), "=", (await $.wv([$t51, $t52], "brNone", C, false))], { get: async () => L0["addtofilter"], set: async (v) => { L0["addtofilter"] = v; }, local: true })));
    }
    await $.stmt((await $.wcall([$t51, $t52], "ExecuteCheckBoxFilter", [(await $.wv([$t51, $t52], "clbValute", C, false)), "DebitCurrencyID", "CreditCurrencyID", (await $.wv([$t51, $t52], "True", C, false))], { get: async () => L0["executecheckboxfilter"], set: async (v) => { L0["executecheckboxfilter"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t51, $t52], "ExecuteCheckBoxFilter", [(await $.wv([$t51, $t52], "clbOperation", C, false)), "OperationType", (await $.wv([$t51, $t52], "EmptyStr", C, false)), (await $.wv([$t51, $t52], "False", C, false))], { get: async () => L0["executecheckboxfilter"], set: async (v) => { L0["executecheckboxfilter"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t51, $t52], "ExecuteComboBoxFilter", [(await $.wv([$t51, $t52], "scDebetFilial", C, false)), (await $.wv([$t51, $t52], "FilialDebetData", C, false)), "DebFil", "ID", "="], { get: async () => L0["executecomboboxfilter"], set: async (v) => { L0["executecomboboxfilter"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t51, $t52], "ExecuteComboBoxFilter", [(await $.wv([$t51, $t52], "scKreditFilial", C, false)), (await $.wv([$t51, $t52], "FilialCreditData", C, false)), "CredFil", "ID", "="], { get: async () => L0["executecomboboxfilter"], set: async (v) => { L0["executecomboboxfilter"] = v; }, local: true })));
    await $.wset([$t51, $t52], "Filter", (await $.wv([$t51, $t52], "FilterString", { get: async () => L0["filterstring"], set: async (v) => { L0["filterstring"] = v; }, local: true }, false)), C);
    await $.wset([$t51, $t52], "Filtered", (await $.wv([$t51, $t52], "True", C, false)), C);
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TRepairNewMain", "scUserChange", async function scUserChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "cbFiltrOptions")), "Checked")))) {
    await $.mcall((await $.v(C, "Filter")), "Execute", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairNewMain", "TrFullRefreshExecute", async function TrFullRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "RapNewDataModule")), "FullRefresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
