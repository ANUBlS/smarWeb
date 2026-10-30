// Generated from Out_RepairImpl1.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Out_RepairImpl1", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "OutRepair_TLB", "StdVcl", "StdCtrls", "ExtCtrls", "Grids", "OracleData", "DBGrids", "DB", "RepairNewEdit", "ComCtrls", "ToolWin", "Menus", "ImgList", "ActnList", "CheckLst", "SearchCombo", "SBPlgAx50_TLB", "Mask", "DBCtrls", "Buttons", "RepairNewDataModule", "HintBox", "ComObj", "ComServ", "sbcore", "OutRepdelete", "sboapiDataModuleImpl", "SBTranslateProc"]);
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
  U.defClass("TOut_RepairFrm", "TActiveForm", {"out_pngridlayer": {"name": "Out_pnGridlayer", "type": "TPanel"}, "out_pnleftadvanced": {"name": "Out_pnLeftAdvanced", "type": "TPanel"}, "cbmainfeatures": {"name": "cbMainFeatures", "type": "TControlBar"}, "out_dbmain": {"name": "Out_dbMain", "type": "TDBGrid"}, "mainactionlist": {"name": "MainActionList", "type": "TActionList"}, "showadvancedoptions": {"name": "ShowAdvancedOptions", "type": "TAction"}, "addtrans": {"name": "AddTrans", "type": "TAction"}, "deltrans": {"name": "DelTrans", "type": "TAction"}, "updtrans": {"name": "UpdTrans", "type": "TAction"}, "refreshtrans": {"name": "RefreshTrans", "type": "TAction"}, "showsearchpanel": {"name": "ShowSearchPanel", "type": "TAction"}, "datestatement": {"name": "DateStatement", "type": "TAction"}, "showeditform": {"name": "ShowEditForm", "type": "TAction"}, "datestatementend": {"name": "DateStatementEnd", "type": "TAction"}, "showaddform": {"name": "ShowAddForm", "type": "TAction"}, "filter": {"name": "Filter", "type": "TAction"}, "trfullrefresh": {"name": "TrFullRefresh", "type": "TAction"}, "action1": {"name": "Action1", "type": "TAction"}, "mainimagelist": {"name": "MainImageList", "type": "TImageList"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "tbadd": {"name": "tbAdd", "type": "TToolButton"}, "tbdrop": {"name": "tbDrop", "type": "TToolButton"}, "tbrefresh": {"name": "tbRefresh", "type": "TToolButton"}, "tbadvancedoptions": {"name": "tbAdvancedOptions", "type": "TToolButton"}, "tbsearch": {"name": "tbSearch", "type": "TToolButton"}, "datepanel": {"name": "DatePanel", "type": "TPanel"}, "lbsysdatdef": {"name": "lbSysDatDef", "type": "TLabel"}, "lbsysdat": {"name": "lbSysDat", "type": "TLabel"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "lbopdatdef": {"name": "lbOpDatDef", "type": "TLabel"}, "label1": {"name": "Label1", "type": "TLabel"}, "dtpopdat": {"name": "dtpOpDat", "type": "TDateTimePicker"}, "dtopdatend": {"name": "dtOpDatEnd", "type": "TDateTimePicker"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "btadvancedoptionsexit": {"name": "btAdvancedOptionsExit", "type": "TButton"}, "button1": {"name": "Button1", "type": "TButton"}, "pcfilters": {"name": "pcFilters", "type": "TPageControl"}, "tbfilter": {"name": "tbFilter", "type": "TTabSheet"}, "pnconteiner": {"name": "pnConteiner", "type": "TPanel"}, "splitter1": {"name": "Splitter1", "type": "TSplitter"}, "gboperator": {"name": "gbOperator", "type": "TGroupBox"}, "scuser": {"name": "scUser", "type": "TSearchCombo"}, "gbvalute": {"name": "gbValute", "type": "TGroupBox"}, "clbvalute": {"name": "clbValute", "type": "TCheckListBox"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "clboperation": {"name": "clbOperation", "type": "TCheckListBox"}, "tbfilial": {"name": "tbFilial", "type": "TTabSheet"}, "groupbox13": {"name": "GroupBox13", "type": "TGroupBox"}, "sckreditfilial": {"name": "scKreditFilial", "type": "TSearchCombo"}, "groupbox12": {"name": "GroupBox12", "type": "TGroupBox"}, "scdebetfilial": {"name": "scDebetFilial", "type": "TSearchCombo"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "cbfiltroptions": {"name": "cbFiltrOptions", "type": "TCheckBox"}, "hintbox1": {"name": "HintBox1", "type": "THintBox"}, "pntransactiondesc": {"name": "pnTransactionDesc", "type": "TPanel"}, "dbetransactiondescr": {"name": "dbeTransactionDescr", "type": "TDBEdit"}, "pnsearch": {"name": "pnSearch", "type": "TPanel"}, "pnsearchorder": {"name": "pnSearchOrder", "type": "TPanel"}, "sbup": {"name": "sbUp", "type": "TSpeedButton"}, "sbmiddle": {"name": "sbMiddle", "type": "TSpeedButton"}, "sbdown": {"name": "sbDown", "type": "TSpeedButton"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "fevents": {"name": "FEvents", "type": "IOut_RepairEvents"}, "forder": {"name": "FOrder", "type": "TSearchOrder"}}, {});
  U.init(async () => {
    U.const("csOrder", "ORDER BY");
    U.var_("Out_RepairFrm", null, "TOut_RepairFrm");
    U.var_("Valute", null, "TStringList");
    U.var_("Operation", null, "TStringList");
    U.var_("TempWidth", 0, "Integer");
  });
  U.method("TOut_RepairFrm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TOut_RepairFrm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TOut_RepairFrm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TOut_RepairFrm", "Initialize", null, arguments);
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
  U.method("TOut_RepairFrm", "MouseWheelHandler", async function MouseWheelHandler(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TOut_RepairFrm", "MouseWheelHandler", null, arguments);
  if ($.truthy((await $.mv((await $.v(C, "out_dbMain")), "Focused")))) {
    {
      const $t1 = (await $.call(C, "TCMMouseWheel", [(await L0["message"].get())]));
      const $t2 = (await $.mv((await $.mv((await $.wv([$t1], "out_dbMain", C, false)), "DataSource")), "DataSet"));
      if ($.truthy($.lt((await $.wv([$t1, $t2], "WheelDelta", C, false)), 0))) {
        await $.stmt($.wcall([$t1, $t2], "Next", [], C));
      } else {
        await $.stmt($.wcall([$t1, $t2], "Prior", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TOut_RepairFrm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOut_RepairFrm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOut_RepairFrm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOut_RepairFrm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOut_RepairFrm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOut_RepairFrm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOut_RepairFrm", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOut_RepairFrm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOut_RepairFrm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOut_RepairFrm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOut_RepairFrm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOut_RepairFrm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOut_RepairFrm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOut_RepairFrm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOut_RepairFrm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOut_RepairFrm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOut_RepairFrm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOut_RepairFrm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOut_RepairFrm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TOut_RepairFrm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TOut_RepairFrm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOut_RepairFrm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOut_RepairFrm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TOut_RepairFrm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TOut_RepairFrm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TOut_RepairFrm", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TOut_RepairFrm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOut_RepairFrm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOut_RepairFrm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOut_RepairFrm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TOut_RepairFrm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TOut_RepairFrm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOut_RepairFrm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TOut_RepairFrm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TOut_RepairFrm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOut_RepairFrm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOut_RepairFrm", "Out_pnGridlayerResize", async function Out_pnGridlayerResize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["columnswidth"] = $.fn(async function ColumnsWidth() {
  const L1 = {result: 0, "i": 0};
  L1["result"] = 0;
  {
    const $t3 = (await $.v(C, "Out_dbMain"));
    { const $t4 = $.sub((await $.mv((await $.wv([$t3], "Columns", C, false)), "Count")), 1);
      await $.wset([$t3], "i", 0, { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true });
      let $t5 = true;
      for (;;) {
        if (!$t5) { await $.wset([$t3], "i", $.succ((await $.wv([$t3], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), 1), { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }); }
        $t5 = false;
        if (!($.ord((await $.wv([$t3], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))) <= $.ord($t4))) break;
        await $.wset([$t3], "Result", $.add((await $.wv([$t3], "Result", { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true }, false)), (await $.mv((await $.idx((await $.wv([$t3], "Columns", C, false)), [(await $.wv([$t3], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), "Width"))), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
        await $.tick();
      }
    }
  }
  return L1.result;
});
  {
    const $t6 = (await $.v(C, "Out_dbMain"));
    if ($.truthy($.eq((await $.wv([$t6], "Tag", C, false)), 0))) {
      await $.wset([$t6], "Tag", (await $.mv(((await $.wv([$t6], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Width")), C);
      await $.mset((await $.wv([$t6], "Out_pnGridlayer", C, false)), "Tag", (await $.mv((await $.idx((await $.wv([$t6], "Columns", C, false)), [$.sub((await $.mv((await $.wv([$t6], "Columns", C, false)), "Count")), 1)])), "Width")));
      await $.wset([$t6], "TempWidth", (await $.mv(((await $.wv([$t6], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Width")), C);
    }
    if ($.truthy((await $.and_(($.gt($.add((await $.mv((await $.idx((await $.wv([$t6], "Columns", C, false)), [$.sub((await $.mv((await $.wv([$t6], "Columns", C, false)), "Count")), 1)])), "Width")), ($.sub((await $.mv(((await $.wv([$t6], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Width")), (await $.wv([$t6], "Tag", C, false))))), (await $.mv((await $.wv([$t6], "Out_pnGridlayer", C, false)), "Tag")))), async () => ($.gt((await $.mv(((await $.wv([$t6], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Width")), $.add((await $.wv([$t6], "TempWidth", C, false)), 4))))))) {
      await $.mset((await $.idx((await $.wv([$t6], "Columns", C, false)), [$.sub((await $.mv((await $.wv([$t6], "Columns", C, false)), "Count")), 1)])), "Width", $.add((await $.mv((await $.idx((await $.wv([$t6], "Columns", C, false)), [$.sub((await $.mv((await $.wv([$t6], "Columns", C, false)), "Count")), 1)])), "Width")), ($.sub((await $.mv(((await $.wv([$t6], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Width")), (await $.wv([$t6], "Tag", C, false))))));
      await $.wset([$t6], "Tag", (await $.mv(((await $.wv([$t6], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Width")), C);
    } else {
      await $.mset((await $.idx((await $.wv([$t6], "Columns", C, false)), [$.sub((await $.mv((await $.wv([$t6], "Columns", C, false)), "Count")), 1)])), "Width", (await $.mv((await $.wv([$t6], "Out_pnGridlayer", C, false)), "Tag")));
      await $.wset([$t6], "Tag", (await $.mv(((await $.wv([$t6], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Width")), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("FindOrder", async function FindOrder(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"list": $.copyArg(p0), "value": (p1 === undefined ? (await $.v(C, "csOrder")) : p1), result: 0, "i": 0};
  await $.fixArgs(L0, ["list", "value"]);
  L0.result = (-(1));
  {
    const $t7 = L0["list"];
    { const $t8 = $.sub((await $.wv([$t7], "Count", C, false)), 1);
      await $.wset([$t7], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t9 = true;
      for (;;) {
        if (!$t9) { await $.wset([$t7], "i", $.succ((await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t9 = false;
        if (!($.ord((await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t8))) break;
        if ($.truthy($.ne((await $.wcall([$t7], "Pos", [(await $.wcall([$t7], "UpperCase", [(await $.wv([$t7], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false))], C)), (await $.wcall([$t7], "UPperCase", [(await $.idx((await $.wv([$t7], "Strings", C, false)), [(await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)), 0))) {
          L0.result = (await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false));
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
  U.method("TOut_RepairFrm", "InitializeChlistBoxes", async function InitializeChlistBoxes(Self) {
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
  U.method("TOut_RepairFrm", "CheckFilters", async function CheckFilters(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TOut_RepairFrm", "FilterShowAction", async function FilterShowAction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  L0["enabledata"] = $.fn(async function EnableData(p0) {
  const L1 = {"sender": $.copyArg(p0), result: false};
  await $.fixArgs(L1, ["sender"]);
  if ($.truthy(($.is_(L1["sender"], "TDataSet")))) {
    {
      const $t10 = (L1["sender"]);
      if ($.truthy($.not(((await $.wv([$t10], "Active", C, false)))))) {
        await $.stmt($.wcall([$t10], "Open", [], C));
      } else {
        await $.stmt($.wcall([$t10], "Refresh", [], C));
      }
    }
    L1.result = true;
  } else {
    L1.result = false;
  }
  return L1.result;
});
  {
    const $t11 = (await $.v(C, "RepDataModule"));
    if ($.truthy((await $.or_(($.eq((await $.wv([$t11], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), (await $.wv([$t11], "ftMain", C, false)))), async () => ($.eq((await $.wv([$t11], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), (await $.wv([$t11], "ftAll", C, false)))))))) {
      if ($.truthy($.eq((await $.wv([$t11], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), (await $.wv([$t11], "ftAll", C, false))))) {
        await $.mcall((await $.wv([$t11], "clbValute", C, false)), "Clear", []);
        await $.mcall((await $.wcall([$t11], "TStringList", [(await $.wcall([$t11], "Pointer", [(await $.mv((await $.wv([$t11], "clbValute", C, false)), "Tag"))], C))], C)), "Clear", []);
        await $.mcall((await $.wv([$t11], "clbOperation", C, false)), "Clear", []);
        await $.mcall((await $.wcall([$t11], "TStringList", [(await $.wcall([$t11], "Pointer", [(await $.mv((await $.wv([$t11], "clbOperation", C, false)), "Tag"))], C))], C)), "Clear", []);
      }
      await $.mset((await $.wv([$t11], "scUser", C, false)), "DataSource", (await $.wv([$t11], "Users", C, false)));
      await $.stmt((await $.wcall([$t11], "EnableData", [(await $.wv([$t11], "UsersData", C, false))], { get: async () => L0["enabledata"], set: async (v) => { L0["enabledata"] = v; }, local: true })));
      if ($.truthy($.not(($.gt((await $.mv((await $.mv((await $.wv([$t11], "clbValute", C, false)), "Items")), "Count")), 1))))) {
        await $.mcall((await $.wv([$t11], "Valutes", C, false)), "Execute", []);
      }
      if ($.truthy($.not(($.gt((await $.mv((await $.mv((await $.wv([$t11], "clbOperation", C, false)), "Items")), "Count")), 1))))) {
        await $.mcall((await $.wv([$t11], "VidOp", C, false)), "Execute", []);
      }
    }
    if ($.truthy((await $.or_(($.eq((await $.wv([$t11], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), (await $.wv([$t11], "ftFilial", C, false)))), async () => ($.eq((await $.wv([$t11], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), (await $.wv([$t11], "ftAll", C, false)))))))) {
      if ($.truthy((await $.or_($.not(((await $.mv((await $.wv([$t11], "FilialDebetData", C, false)), "Active")))), async () => ($.eq((await $.wv([$t11], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), (await $.wv([$t11], "ftAll", C, false)))))))) {
        if ($.truthy((await $.wcall([$t11], "EnableData", [(await $.wv([$t11], "FilialDebetData", C, false))], { get: async () => L0["enabledata"], set: async (v) => { L0["enabledata"] = v; }, local: true })))) {
          await $.mset((await $.wv([$t11], "scDebetFilial", C, false)), "DataSource", (await $.wv([$t11], "FilialDebet", C, false)));
          await $.mcall((await $.wv([$t11], "scDebetFilial", C, false)), "Refresh", []);
        }
      }
      if ($.truthy((await $.or_($.not(((await $.mv((await $.wv([$t11], "FilialCreditData", C, false)), "Active")))), async () => ($.eq((await $.wv([$t11], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), (await $.wv([$t11], "ftAll", C, false)))))))) {
        if ($.truthy((await $.wcall([$t11], "EnableData", [(await $.wv([$t11], "FilialCreditData", C, false))], { get: async () => L0["enabledata"], set: async (v) => { L0["enabledata"] = v; }, local: true })))) {
          await $.mset((await $.wv([$t11], "scKreditFilial", C, false)), "DataSource", (await $.wv([$t11], "FilialCredit", C, false)));
          await $.mcall((await $.wv([$t11], "scKreditFilial", C, false)), "Refresh", []);
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TFilterType"]});
  U.method("TOut_RepairFrm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "lbSysDat")), "Caption", (await $.call(C, "DateToStr", [(await $.v(C, "Sb_GetSystemDate"))])));
  await $.mset((await $.v(C, "dtpOpDat")), "DateTime", (await $.v(C, "Sb_GetSystemDate")));
  await $.mset((await $.v(C, "dtOpDatEnd")), "DateTime", (await $.v(C, "Sb_GetSystemDate")));
  await $.set(C, "Out_RepairFrm", Self);
  await $.set(C, "RepDataModule", (await $.mcall((await $.v(C, "TRepDataModule")), "Create", [Self])));
  await $.set(C, "FOrder", (await $.v(C, "soNone")));
  await $.mset((await $.v(C, "pcFilters")), "ActivePageIndex", 0);
  await $.stmt($.call(C, "InitializeChlistBoxes", []));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "AddTransExecute", async function AddTransExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ShowAddForm")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "ActiveFormDestroy", async function ActiveFormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "RepDataModule")), "Destroy", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "ShowAddFormExecute", async function ShowAddFormExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (await $.v(C, "RepDataModule"));
    await $.stmt((await $.wcall([$t12], "ExecuteEditAction", [(await $.wv([$t12], "TransactionData", C, false)), (await $.wv([$t12], "acInsert", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "Out_dbMainColumnMoved", async function Out_dbMainColumnMoved(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "fromindex": $.copyArg(p1), "toindex": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "fromindex", "toindex"]);
  await $.stmt($.call(C, "Beep", []));
  return L0.result;
}, {"params": ["Sender", "FromIndex", "ToIndex"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer"]});
  U.method("TOut_RepairFrm", "Out_dbMainKeyDown", async function Out_dbMainKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  { const $t13 = (await L0["key"].get());
    if ($.eq($t13, (await $.v(C, "vk_return")))) {
      await $.stmt((await $.call(C, "Out_dbMainDblClick", [L0["sender"]])));
    }
    else if ($.eq($t13, (await $.v(C, "vk_Delete")))) {
      await $.mcall((await $.v(C, "DelTrans")), "Execute", []);
    }
    else if ($.eq($t13, (await $.v(C, "VK_INSERT")))) {
      await $.mcall((await $.v(C, "AddTrans")), "Execute", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TOut_RepairFrm", "Out_dbMainTitleClick", async function Out_dbMainTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  {
    const $t14 = (await $.mv((await $.v(C, "RepDataModule")), "TransactionData"));
    if ($.truthy((await $.or_(((await $.wv([$t14], "IsEmpty", C, false))), async () => ($.eq((await $.mv((await $.wv([$t14], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), (await $.wv([$t14], "EmptyStr", C, false)))))))) {
      return L0.result;
    }
    await $.stmt($.wcall([$t14], "Close", [], C));
    await $.stmt((await $.wcall([$t14], "SetVariable", ["Title", (await $.mv((await $.wv([$t14], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName"))], C)));
    await $.stmt($.wcall([$t14], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TOut_RepairFrm", "Out_dbMainDblClick", async function Out_dbMainDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ShowEditForm")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "ShowEditFormExecute", async function ShowEditFormExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.v(C, "RepDataModule"));
    if ($.truthy($.gt((await $.mv((await $.wv([$t15], "TransactionData", C, false)), "RecordCount")), 0))) {
      await $.stmt((await $.wcall([$t15], "ExecuteEditAction", [(await $.wv([$t15], "TransactionData", C, false)), (await $.wv([$t15], "acUpdate", C, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "ExecuteEditAction", async function ExecuteEditAction(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "value": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["dataset", "value"]);
  L0["showeditform"] = $.fn(async function ShowEditForm(p0) {
  const L1 = {"acvalue": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["acvalue"]);
  if ($.truthy($.not(((await $.call(C, "Assigned", [(await $.v(C, "OutRepairEdit"))])))))) {
    await $.set(C, "OutRepairEdit", (await $.mcall((await $.v(C, "TOutRepairEdit")), "Create", [Self])));
  }
  try {
    await $.mset((await $.v(C, "OutRepairEdit")), "EditAction", L1["acvalue"]);
    await $.mcall((await $.v(C, "OutRepairEdit")), "ShowModal", []);
  } finally {
    await $.mcall((await $.v(C, "OutRepairEdit")), "Release", []);
    await $.set(C, "OutRepairEdit", null);
  }
  return L1.result;
});
  L0.result = false;
  { const $t16 = L0["value"];
    if ($.eq($t16, (await $.v(C, "acInsert")))) {
      await $.mcall(L0["dataset"], "Insert", []);
      await $.stmt((await $.callv(L0["showeditform"], [L0["value"]])));
      L0["result"] = true;
    }
    else if ($.eq($t16, (await $.v(C, "acUpdate")))) {
      await $.mcall(L0["dataset"], "Edit", []);
      await $.stmt((await $.callv(L0["showeditform"], [L0["value"]])));
      L0["result"] = true;
    }
    else if ($.eq($t16, (await $.v(C, "acDelete")))) {
      await $.stmt($.call(C, "Beep", []));
    }
  }
  return L0.result;
}, {"params": ["DataSet", "Value"], "kind": "function", "ptypes": ["TDataSet", "TEditAction"]});
  U.method("TOut_RepairFrm", "DelTransExecute", async function DelTransExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ShowDeleteConfirm", ["Əməliyyat silinsin?"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "RefreshTransExecute", async function RefreshTransExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "CheckDates", []));
  {
    const $t17 = (await $.v(C, "RepDataModule"));
    const $t18 = (await $.wv([$t17], "TransactionData", C, false));
    await $.stmt($.wcall([$t17, $t18], "Close", [], C));
    await $.stmt((await $.mcall((await $.wv([$t17, $t18], "TransactionData", C, false)), "SetVariable", ["DAT", (await $.mv((await $.wv([$t17, $t18], "dtpOpdat", C, false)), "DateTime"))])));
    await $.stmt((await $.mcall((await $.wv([$t17, $t18], "TransactionData", C, false)), "SetVariable", ["DAT2", (await $.mv((await $.wv([$t17, $t18], "dtOpdatEnd", C, false)), "DateTime"))])));
    await $.stmt($.wcall([$t17, $t18], "open", [], C));
    await $.mcall((await $.wv([$t17, $t18], "TransactionData", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "dtpOpDatChange", async function dtpOpDatChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DateStatement")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "dtpOpDatEnter", async function dtpOpDatEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "dtpOpDat")), "MaxDate", (await $.mv((await $.v(C, "dtOpDatEnd")), "DateTime")));
  await $.mset((await $.v(C, "dtOpDatEnd")), "MinDate", (await $.mv((await $.v(C, "dtpOpDat")), "DateTime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "dtOpDatEndChange", async function dtOpDatEndChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DateStatementEnd")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "dtOpDatEndEnter", async function dtOpDatEndEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "dtpOpDat")), "MaxDate", (await $.mv((await $.v(C, "dtOpDatEnd")), "DateTime")));
  await $.mset((await $.v(C, "dtOpDatEnd")), "MinDate", (await $.mv((await $.v(C, "dtpOpDat")), "DateTime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "KeyFastUpDownSearch", async function KeyFastUpDownSearch(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  { const $t19 = (await L0["key"].get());
    if ($.eq($t19, (await $.v(C, "VK_UP")))) {
      await $.stmt((await $.call(C, "sbUpClick", [(await $.v(C, "sbUp"))])));
      await $.stmt((await $.call(C, "FastSearch", [L0["sender"]])));
      await L0["key"].set(0);
    }
    else if ($.eq($t19, (await $.v(C, "VK_DOWN")))) {
      await $.stmt((await $.call(C, "sbUpClick", [(await $.v(C, "sbDown"))])));
      await $.stmt((await $.call(C, "FastSearch", [L0["sender"]])));
      await L0["key"].set(0);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TOut_RepairFrm", "DatePanelMouseDown", async function DatePanelMouseDown(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  if ($.truthy((await $.and_($.not(($.is_(L0["sender"], "TForm"))), async () => ($.lt(L0["x"], 4)))))) {
    await $.stmt((await $.mcall(L0["sender"], "BeginDrag", [true])));
  }
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TOut_RepairFrm", "FastSearch", async function FastSearch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "recopt": null};
  await $.fixArgs(L0, ["sender"]);
  L0["recopt"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  if ($.truthy(($.is_(L0["sender"], "TEdit")))) {
    {
      const $t20 = (L0["sender"]);
      const $t21 = (await $.mv((await $.wv([$t20], "RepDataModule", C, false)), "TransactionData"));
      if ($.truthy((await $.wv([$t20, $t21], "Active", C, false)))) {
        { const $t22 = (await $.wv([$t20, $t21], "FOrder", C, false));
          if ($.eq($t22, (await $.wv([$t20, $t21], "soForward", C, false)))) {
            await $.stmt((await $.wcall([$t20, $t21], "Include", [$.ref(async () => (await $.wv([$t20, $t21], "RecOpt", { get: async () => L0["recopt"], set: async (v) => { L0["recopt"] = v; }, local: true }, false)), async ($t23) => { await $.wset([$t20, $t21], "RecOpt", $t23, { get: async () => L0["recopt"], set: async (v) => { L0["recopt"] = v; }, local: true }); }), (await $.wv([$t20, $t21], "srForward", C, false))], C)));
          }
          else if ($.eq($t22, (await $.wv([$t20, $t21], "soBackward", C, false)))) {
            await $.stmt((await $.wcall([$t20, $t21], "Include", [$.ref(async () => (await $.wv([$t20, $t21], "RecOpt", { get: async () => L0["recopt"], set: async (v) => { L0["recopt"] = v; }, local: true }, false)), async ($t24) => { await $.wset([$t20, $t21], "RecOpt", $t24, { get: async () => L0["recopt"], set: async (v) => { L0["recopt"] = v; }, local: true }); }), (await $.wv([$t20, $t21], "srBackward", C, false))], C)));
          }
          else if ($.eq($t22, (await $.wv([$t20, $t21], "soNone", C, false)))) {
            await $.stmt((await $.wcall([$t20, $t21], "Include", [$.ref(async () => (await $.wv([$t20, $t21], "RecOpt", { get: async () => L0["recopt"], set: async (v) => { L0["recopt"] = v; }, local: true }, false)), async ($t25) => { await $.wset([$t20, $t21], "RecOpt", $t25, { get: async () => L0["recopt"], set: async (v) => { L0["recopt"] = v; }, local: true }); }), (await $.wv([$t20, $t21], "srFromBeginning", C, false))], C)));
          }
        }
        await $.stmt((await $.wcall([$t20, $t21], "SearchRecord", [(await $.wv([$t20, $t21], "Hint", C, false)), (await $.wv([$t20, $t21], "Text", C, false)), (await $.wv([$t20, $t21], "RecOpt", { get: async () => L0["recopt"], set: async (v) => { L0["recopt"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "KeyFastSearch", async function KeyFastSearch(Self, p0, p1) {
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
  U.method("TOut_RepairFrm", "ShowAdvancedOptionsExecute", async function ShowAdvancedOptionsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Out_pnLeftAdvanced")), "Visible", $.not(((await $.mv((await $.v(C, "Out_pnLeftAdvanced")), "Visible")))));
  await $.mset((await $.v(C, "tbAdvancedOptions")), "Down", (await $.mv((await $.v(C, "Out_pnLeftAdvanced")), "Visible")));
  if ($.truthy((await $.mv((await $.v(C, "Out_dbMain")), "CanFocus")))) {
    await $.mcall((await $.v(C, "Out_dbMain")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "ClearSearhPanel", async function ClearSearhPanel(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "pnSearch")), "DestroyComponents", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TOut_RepairFrm", "CreateSearchPanel", async function CreateSearchPanel(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "edleft": 0, "tempedit": null};
  {
    const $t26 = (await $.v(C, "out_dbMain"));
    await $.wset([$t26], "edLeft", 4, { get: async () => L0["edleft"], set: async (v) => { L0["edleft"] = v; }, local: true });
    { const $t27 = $.sub((await $.mv((await $.wv([$t26], "Columns", C, false)), "Count")), 1);
      await $.wset([$t26], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t28 = true;
      for (;;) {
        if (!$t28) { await $.wset([$t26], "i", $.succ((await $.wv([$t26], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t28 = false;
        if (!($.ord((await $.wv([$t26], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t27))) break;
        {
          const $t29 = (await $.wv([$t26], "TempEdit", { get: async () => L0["tempedit"], set: async (v) => { L0["tempedit"] = v; }, local: true }, false));
          await $.wset([$t26, $t29], "TempEdit", (await $.mcall((await $.wv([$t26, $t29], "TEdit", C, false)), "Create", [(await $.wv([$t26, $t29], "pnSearch", C, false))])), { get: async () => L0["tempedit"], set: async (v) => { L0["tempedit"] = v; }, local: true });
          await $.wset([$t26, $t29], "Hint", (await $.mv((await $.mv((await $.idx((await $.wv([$t26, $t29], "Columns", C, false)), [(await $.wv([$t26, $t29], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Field")), "FieldName")), C);
          if ($.truthy($.eq((await $.mcall((await $.wv([$t26, $t29], "pnSearch", C, false)), "FindComponent", [$.add("ed_", (await $.wv([$t26, $t29], "Hint", C, false)))])), null))) {
            await $.wset([$t26, $t29], "Name", $.add("ed_", (await $.wv([$t26, $t29], "Hint", C, false))), C);
          }
          await $.wset([$t26, $t29], "Text", (await $.wv([$t26, $t29], "EmptyStr", C, false)), C);
          await $.wset([$t26, $t29], "OnChange", (await $.wv([$t26, $t29], "FastSearch", C, true)), C);
          await $.wset([$t26, $t29], "OnKeyPress", (await $.wv([$t26, $t29], "KeyFastSearch", C, true)), C);
          await $.wset([$t26, $t29], "OnKeyDown", (await $.wv([$t26, $t29], "KeyFastUpDownSearch", C, true)), C);
          await $.stmt((await $.wcall([$t26, $t29], "SetBounds", [(await $.wv([$t26, $t29], "edLeft", { get: async () => L0["edleft"], set: async (v) => { L0["edleft"] = v; }, local: true }, false)), 4, (await $.mv((await $.idx((await $.wv([$t26, $t29], "Columns", C, false)), [(await $.wv([$t26, $t29], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Width")), 10], C)));
          await $.wset([$t26, $t29], "Parent", (await $.wv([$t26, $t29], "pnSearch", C, false)), C);
          await $.wset([$t26, $t29], "Ctl3D", (await $.wv([$t26, $t29], "False", C, false)), C);
          await $.wset([$t26, $t29], "Color", (await $.wv([$t26, $t29], "clSilver", C, false)), C);
          await $.mset((await $.wv([$t26, $t29], "Font", C, false)), "Color", (await $.wv([$t26, $t29], "clNavy", C, false)));
          await $.wset([$t26, $t29], "edLeft", $.add($.add((await $.wv([$t26, $t29], "edLeft", { get: async () => L0["edleft"], set: async (v) => { L0["edleft"] = v; }, local: true }, false)), (await $.mv((await $.idx((await $.wv([$t26, $t29], "Columns", C, false)), [(await $.wv([$t26, $t29], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Width"))), 1), { get: async () => L0["edleft"], set: async (v) => { L0["edleft"] = v; }, local: true });
        }
        await $.tick();
      }
    }
  }
  await $.mcall((await $.v(C, "pnSearchOrder")), "BringToFront", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TOut_RepairFrm", "ShowSearchPanelExecute", async function ShowSearchPanelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t30 = (L0["sender"]);
    await $.wset([$t30], "Checked", $.not(((await $.wv([$t30], "Checked", C, false)))), C);
    await $.mset((await $.wv([$t30], "pnSearch", C, false)), "Visible", (await $.wv([$t30], "Checked", C, false)));
    await $.mset((await $.wv([$t30], "tbSearch", C, false)), "Down", (await $.wv([$t30], "Checked", C, false)));
    if ($.truthy((await $.wv([$t30], "Checked", C, false)))) {
      await $.stmt($.wcall([$t30], "CreateSearchPanel", [], C));
    } else {
      await $.stmt($.wcall([$t30], "ClearSearhPanel", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "scUserChange", async function scUserChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "cbFiltrOptions")), "Checked")))) {
    await $.stmt((await $.call(C, "FilterExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "FilterExecute", async function FilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["enablechecklistbox"] = $.fn(async function EnableCheckListBox(p0) {
  const L1 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["value"]);
  if ($.truthy($.is_(L0["sender"], "TCheckListBox"))) {
    {
      const $t31 = (L0["sender"]);
      await $.wset([$t31], "Enabled", (await $.wv([$t31], "Value", { get: async () => L1["value"], set: async (v) => { L1["value"] = v; }, local: true }, false)), C);
      await $.stmt($.wcall([$t31], "Update", [], C));
    }
  }
  return L1.result;
});
  await $.stmt((await $.callv(L0["enablechecklistbox"], [false])));
  try {
    await $.stmt((await $.call(C, "ReInitializeFilters", [(await $.mv((await $.v(C, "RepDataModule")), "TransactionData"))])));
  } finally {
    await $.stmt((await $.callv(L0["enablechecklistbox"], [true])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "ReInitializeFilters", async function ReInitializeFilters(Self, p0) {
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
    const $t32 = L1["box"];
    const $t33 = (await $.wv([$t32], "Items", C, false));
    if ($.truthy($.not(($.gt((await $.wv([$t32, $t33], "Count", C, false)), 0))))) {
      return L1.result;
    }
    if ($.truthy((await $.wv([$t32, $t33], "Val", { get: async () => L1["val"], set: async (v) => { L1["val"] = v; }, local: true }, false)))) {
      await $.wset([$t32, $t33], "Cnt", $.sub((await $.wv([$t32, $t33], "Count", C, false)), 2), { get: async () => L1["cnt"], set: async (v) => { L1["cnt"] = v; }, local: true });
    } else {
      await $.wset([$t32, $t33], "Cnt", $.sub((await $.wv([$t32, $t33], "Count", C, false)), 1), { get: async () => L1["cnt"], set: async (v) => { L1["cnt"] = v; }, local: true });
    }
    if ($.truthy($.not(($.eq((await $.wv([$t32, $t33], "Field2", { get: async () => L1["field2"], set: async (v) => { L1["field2"] = v; }, local: true }, false)), (await $.wv([$t32, $t33], "EmptyStr", C, false))))))) {
      await $.wset([$t32, $t33], "Brackets", (await $.wv([$t32, $t33], "brBegin", C, false)), { get: async () => L1["brackets"], set: async (v) => { L1["brackets"] = v; }, local: true });
    } else {
      await $.wset([$t32, $t33], "Brackets", (await $.wv([$t32, $t33], "brNone", C, false)), { get: async () => L1["brackets"], set: async (v) => { L1["brackets"] = v; }, local: true });
    }
    { const $t34 = (await $.wv([$t32, $t33], "Cnt", { get: async () => L1["cnt"], set: async (v) => { L1["cnt"] = v; }, local: true }, false));
      await $.wset([$t32, $t33], "i", 0, { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true });
      let $t35 = true;
      for (;;) {
        if (!$t35) { await $.wset([$t32, $t33], "i", $.succ((await $.wv([$t32, $t33], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), 1), { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }); }
        $t35 = false;
        if (!($.ord((await $.wv([$t32, $t33], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))) <= $.ord($t34))) break;
        if ($.truthy($.not(((await $.idx((await $.wv([$t32, $t33], "Checked", C, false)), [(await $.wv([$t32, $t33], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])))))) {
          await $.stmt((await $.wcall([$t32, $t33], "AddToFilter", [(await $.wv([$t32, $t33], "Field1", { get: async () => L1["field1"], set: async (v) => { L1["field1"] = v; }, local: true }, false)), (await $.idx((await $.mv((await $.wcall([$t32, $t33], "TStringList", [(await $.wcall([$t32, $t33], "Pointer", [(await $.mv((await $.wv([$t32, $t33], "Box", { get: async () => L1["box"], set: async (v) => { L1["box"] = v; }, local: true }, false)), "Tag"))], C))], C)), "Strings")), [(await $.wv([$t32, $t33], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), (await $.wv([$t32, $t33], "operation", { get: async () => L1["operation"], set: async (v) => { L1["operation"] = v; }, local: true }, false)), (await $.wv([$t32, $t33], "Brackets", { get: async () => L1["brackets"], set: async (v) => { L1["brackets"] = v; }, local: true }, false))], { get: async () => L0["addtofilter"], set: async (v) => { L0["addtofilter"] = v; }, local: true })));
          if ($.truthy($.not(($.eq((await $.wv([$t32, $t33], "Field2", { get: async () => L1["field2"], set: async (v) => { L1["field2"] = v; }, local: true }, false)), (await $.wv([$t32, $t33], "EmptyStr", C, false))))))) {
            await $.stmt((await $.wcall([$t32, $t33], "AddToFilter", [(await $.wv([$t32, $t33], "Field2", { get: async () => L1["field2"], set: async (v) => { L1["field2"] = v; }, local: true }, false)), (await $.idx((await $.mv((await $.wcall([$t32, $t33], "TStringList", [(await $.wcall([$t32, $t33], "Pointer", [(await $.mv((await $.wv([$t32, $t33], "Box", { get: async () => L1["box"], set: async (v) => { L1["box"] = v; }, local: true }, false)), "Tag"))], C))], C)), "Strings")), [(await $.wv([$t32, $t33], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), (await $.wv([$t32, $t33], "operation", { get: async () => L1["operation"], set: async (v) => { L1["operation"] = v; }, local: true }, false)), (await $.wv([$t32, $t33], "brEnd", C, false)), (await $.wv([$t32, $t33], "orExpr", { get: async () => L0["orexpr"], set: async (v) => { L0["orexpr"] = v; }, local: true }, false))], { get: async () => L0["addtofilter"], set: async (v) => { L0["addtofilter"] = v; }, local: true })));
          }
        }
        await $.tick();
      }
    }
    if ($.truthy((await $.and_((await $.wv([$t32, $t33], "Val", { get: async () => L1["val"], set: async (v) => { L1["val"] = v; }, local: true }, false)), async () => $.not(((await $.idx((await $.wv([$t32, $t33], "Checked", C, false)), [$.sub((await $.wv([$t32, $t33], "Count", C, false)), 1)])))))))) {
      await $.stmt((await $.wcall([$t32, $t33], "AddToFilter", [(await $.wv([$t32, $t33], "Field1", { get: async () => L1["field1"], set: async (v) => { L1["field1"] = v; }, local: true }, false)), (await $.idx((await $.mv((await $.wcall([$t32, $t33], "TStringList", [(await $.wcall([$t32, $t33], "Pointer", [(await $.mv((await $.wv([$t32, $t33], "Box", { get: async () => L1["box"], set: async (v) => { L1["box"] = v; }, local: true }, false)), "Tag"))], C))], C)), "Strings")), [$.sub((await $.wv([$t32, $t33], "Count", C, false)), 1)])), "=", (await $.wv([$t32, $t33], "brNone", C, false))], { get: async () => L0["addtofilter"], set: async (v) => { L0["addtofilter"] = v; }, local: true })));
    }
  }
  return L1.result;
});
  L0["executecomboboxfilter"] = $.fn(async function ExecuteComboBoxFilter(p0, p1, p2, p3, p4) {
  const L1 = {"sender": $.copyArg(p0), "dataset": $.copyArg(p1), "fieldexpression": $.copyArg(p2), "field": $.copyArg(p3), "operation": $.copyArg(p4), result: undefined};
  await $.fixArgs(L1, ["sender", "dataset", "fieldexpression", "field", "operation"]);
  {
    const $t36 = (await $.v(C, "RepDataModule"));
    if ($.truthy((await $.mv((await $.wv([$t36], "DataSet", { get: async () => L1["dataset"], set: async (v) => { L1["dataset"] = v; }, local: true }, false)), "Active")))) {
      {
        const $t37 = ((await $.wv([$t36], "Sender", { get: async () => L1["sender"], set: async (v) => { L1["sender"] = v; }, local: true }, false)));
        if ($.truthy((await $.and_(($.ne((await $.wv([$t36, $t37], "ItemIndex", C, false)), (-(1)))), async () => ($.ne((await $.wv([$t36, $t37], "ItemIndex", C, false)), 0)))))) {
          await $.stmt((await $.wcall([$t36, $t37], "AddToFilter", [(await $.wv([$t36, $t37], "FieldExpression", { get: async () => L1["fieldexpression"], set: async (v) => { L1["fieldexpression"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t36, $t37], "DataSet", { get: async () => L1["dataset"], set: async (v) => { L1["dataset"] = v; }, local: true }, false)), "FieldByName", [(await $.wv([$t36, $t37], "Field", { get: async () => L1["field"], set: async (v) => { L1["field"] = v; }, local: true }, false))])), "AsString")), (await $.wv([$t36, $t37], "Operation", { get: async () => L1["operation"], set: async (v) => { L1["operation"] = v; }, local: true }, false)), (await $.wv([$t36, $t37], "brNone", C, false))], { get: async () => L0["addtofilter"], set: async (v) => { L0["addtofilter"] = v; }, local: true })));
        }
      }
    }
  }
  return L1.result;
});
  L0["first"] = true;
  {
    const $t38 = (await $.v(C, "RepDataModule"));
    const $t39 = (await $.wv([$t38], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false));
    await $.wset([$t38, $t39], "FilterString", (await $.wv([$t38, $t39], "EmptyStr", C, false)), { get: async () => L0["filterstring"], set: async (v) => { L0["filterstring"] = v; }, local: true });
    if ($.truthy((await $.and_(($.gt((await $.mv((await $.wv([$t38, $t39], "scUser", C, false)), "ItemIndex")), 0)), async () => ((await $.mv((await $.mv((await $.mv((await $.wv([$t38, $t39], "scUser", C, false)), "DataSource")), "DataSet")), "Active"))))))) {
      await $.stmt((await $.wcall([$t38, $t39], "AddToFilter", ["OPERATORID", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t38, $t39], "scUser", C, false)), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsString")), "=", (await $.wv([$t38, $t39], "brNone", C, false))], { get: async () => L0["addtofilter"], set: async (v) => { L0["addtofilter"] = v; }, local: true })));
    }
    await $.stmt((await $.wcall([$t38, $t39], "ExecuteCheckBoxFilter", [(await $.wv([$t38, $t39], "clbValute", C, false)), "DebitCurrencyID", "CreditCurrencyID", (await $.wv([$t38, $t39], "True", C, false))], { get: async () => L0["executecheckboxfilter"], set: async (v) => { L0["executecheckboxfilter"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t38, $t39], "ExecuteCheckBoxFilter", [(await $.wv([$t38, $t39], "clbOperation", C, false)), "OperationType", "OperationType", (await $.wv([$t38, $t39], "true", C, false))], { get: async () => L0["executecheckboxfilter"], set: async (v) => { L0["executecheckboxfilter"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t38, $t39], "ExecuteComboBoxFilter", [(await $.wv([$t38, $t39], "scDebetFilial", C, false)), (await $.wv([$t38, $t39], "FilialDebetData", C, false)), "DebFil", "ID", "="], { get: async () => L0["executecomboboxfilter"], set: async (v) => { L0["executecomboboxfilter"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t38, $t39], "ExecuteComboBoxFilter", [(await $.wv([$t38, $t39], "scKreditFilial", C, false)), (await $.wv([$t38, $t39], "FilialCreditData", C, false)), "CredFil", "ID", "="], { get: async () => L0["executecomboboxfilter"], set: async (v) => { L0["executecomboboxfilter"] = v; }, local: true })));
    await $.wset([$t38, $t39], "Filter", (await $.wv([$t38, $t39], "FilterString", { get: async () => L0["filterstring"], set: async (v) => { L0["filterstring"] = v; }, local: true }, false)), C);
    await $.wset([$t38, $t39], "Filtered", (await $.wv([$t38, $t39], "True", C, false)), C);
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TOut_RepairFrm", "clbValuteClickCheck", async function clbValuteClickCheck(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "cbFiltrOptions")), "Checked")))) {
    await $.stmt((await $.call(C, "FilterExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "clbOperationClickCheck", async function clbOperationClickCheck(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "cbFiltrOptions")), "Checked")))) {
    await $.stmt((await $.call(C, "FilterExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "scDebetFilialChange", async function scDebetFilialChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "cbFiltrOptions")), "Checked")))) {
    await $.stmt((await $.call(C, "FilterExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "scKreditFilialChange", async function scKreditFilialChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "cbFiltrOptions")), "Checked")))) {
    await $.stmt((await $.call(C, "FilterExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "DateStatementEndExecute", async function DateStatementEndExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "RepDataModule")), "TransactionData")), "SetVariable", ["DAT2", (await $.mv((await $.v(C, "dtOpDatEnd")), "DateTime"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "DateStatementExecute", async function DateStatementExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "RepDataModule")), "TransactionData")), "SetVariable", ["DAT", (await $.mv((await $.v(C, "dtpOpDat")), "DateTime"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "UpdTransExecute", async function UpdTransExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ShowEditForm")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "TrFullRefreshExecute", async function TrFullRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "RepDataModule")), "FullRefresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "tbFilialShow", async function tbFilialShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "FilterShowAction", [(await $.call(C, "TFilterType", [(await $.mv((await $.call(C, "TComponent", [L0["sender"]])), "Tag"))]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "tbOrderShow", async function tbOrderShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "FilterShowAction", [(await $.call(C, "TFilterType", [(await $.mv((await $.call(C, "TComponent", [L0["sender"]])), "Tag"))]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "tbFilterShow", async function tbFilterShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "FilterShowAction", [(await $.call(C, "TFilterType", [(await $.mv((await $.call(C, "TComponent", [L0["sender"]])), "Tag"))]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOut_RepairFrm", "sbUpClick", async function sbUpClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["reenablecontrols"] = $.fn(async function ReenableControls(p0) {
  const L1 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L1, ["sender"]);
  {
    const $t40 = (await $.mv(L1["sender"], "Parent"));
    { const $t41 = $.sub((await $.wv([$t40], "ControlCount", C, false)), 1);
      await $.wset([$t40], "i", 0, { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true });
      let $t42 = true;
      for (;;) {
        if (!$t42) { await $.wset([$t40], "i", $.succ((await $.wv([$t40], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), 1), { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }); }
        $t42 = false;
        if (!($.ord((await $.wv([$t40], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))) <= $.ord($t41))) break;
        await $.mset((await $.idx((await $.wv([$t40], "Controls", C, false)), [(await $.wv([$t40], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), "Enabled", (await $.wv([$t40], "True", C, false)));
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
  U.method("TOut_RepairFrm", "sbDownClick", async function sbDownClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["reenablecontrols"] = $.fn(async function ReenableControls(p0) {
  const L1 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L1, ["sender"]);
  {
    const $t43 = (await $.mv(L1["sender"], "Parent"));
    { const $t44 = $.sub((await $.wv([$t43], "ControlCount", C, false)), 1);
      await $.wset([$t43], "i", 0, { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true });
      let $t45 = true;
      for (;;) {
        if (!$t45) { await $.wset([$t43], "i", $.succ((await $.wv([$t43], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), 1), { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }); }
        $t45 = false;
        if (!($.ord((await $.wv([$t43], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))) <= $.ord($t44))) break;
        await $.mset((await $.idx((await $.wv([$t43], "Controls", C, false)), [(await $.wv([$t43], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), "Enabled", (await $.wv([$t43], "True", C, false)));
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
  return U;
}
