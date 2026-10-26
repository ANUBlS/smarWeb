// Generated from MainResourceImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("MainResourceImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "ActiveX", "AxCtrls", "MainResourcePr_TLB", "StdVcl", "StdCtrls", "ComCtrls", "ToolWin", "ImgList", "Grids", "DBGridEh", "Menus", "Mask", "Unit1", "DBCtrlsEh", "DBSumLst", "Tabs", "FileCtrl", "DB", "QRExport", "ExtCtrls", "DBCtrls", "OleServer", "ExcelXp", "ActnList", "PluginPopupMenu", "ComObj", "CMExcelExport", "QuickRpt", "Dialogs", "DBGridEhGrouping", "GridsEh", "ComServ", "UnitData", "UnitInsWares", "UnitWares", "UnitAddGroups", "UnitCalcWares", "UnitShowTrans", "UnitPreview", "UnitTraffics", "UnitTrafficsNL", "UnitCurrentRep", "UnitCurrentRepNL", "UnitTransOut", "UnitUpdGroups", "UnitDat", "UnitImpXLS", "UnitViewTurn", "UnitRepGroupNB", "UnitFilter", "UnitRepGroupNL", "UnitGroupDat", "Oracle", "Oracledata", "UnitArchiveWares", "UnitArWaresSRep", "UnitChoice", "Unit3", "Unit4", "quickrep", "UnitInsert_t", "Unit2", "Unit22", "sboapiDataModuleImpl", "SBTranslateProc", "Unit10", "Uniybuysellwares"]);
  const C = [U];
  U.defClass("TMainResource", "TActiveForm", {"imagelist": {"name": "ImageList", "type": "TImageList"}, "pmenuwares": {"name": "PMenuWares", "type": "TPluginPopupMenu"}, "ninsertw": {"name": "NInsertW", "type": "TMenuItem"}, "neditw": {"name": "NEditW", "type": "TMenuItem"}, "pmenugroups": {"name": "PMenuGroups", "type": "TPluginPopupMenu"}, "nwaresturnover": {"name": "NWaresTurnOver", "type": "TMenuItem"}, "ndeletewares": {"name": "NDeleteWares", "type": "TMenuItem"}, "naddgroups": {"name": "NAddGroups", "type": "TMenuItem"}, "neditgroups": {"name": "NEditGroups", "type": "TMenuItem"}, "ndeletegroups": {"name": "NDeleteGroups", "type": "TMenuItem"}, "nturnnb": {"name": "NTurnNB", "type": "TMenuItem"}, "nturnnl": {"name": "NTurnNL", "type": "TMenuItem"}, "pmenutoolbar": {"name": "PMenuToolBar", "type": "TPopupMenu"}, "pmenucurrenttrun": {"name": "PMenuCurrentTrun", "type": "TPopupMenu"}, "nqreport": {"name": "NQReport", "type": "TMenuItem"}, "nmillibank": {"name": "NMilliBank", "type": "TMenuItem"}, "nvergi": {"name": "NVergi", "type": "TMenuItem"}, "nstop_calculate": {"name": "NStop_Calculate", "type": "TMenuItem"}, "nstop_calculatenb": {"name": "NStop_CalculateNB", "type": "TMenuItem"}, "nstop_calculatenl": {"name": "NStop_CalculateNL", "type": "TMenuItem"}, "timera": {"name": "TimerA", "type": "TTimer"}, "timerb": {"name": "TimerB", "type": "TTimer"}, "importexcel": {"name": "ImportExcel", "type": "TMenuItem"}, "nviewturn": {"name": "NViewTurn", "type": "TMenuItem"}, "nqreportall": {"name": "NQReportAll", "type": "TMenuItem"}, "excelexport": {"name": "ExcelExport", "type": "TMenuItem"}, "nturnexcelexport": {"name": "NTurnExcelExport", "type": "TMenuItem"}, "pmenucalc": {"name": "PMenuCalc", "type": "TPopupMenu"}, "ncalculatemonth": {"name": "NCalculateMonth", "type": "TMenuItem"}, "ncalcabort": {"name": "NCalcAbort", "type": "TMenuItem"}, "paneltool": {"name": "PanelTool", "type": "TPanel"}, "toolbarmain": {"name": "ToolBarMain", "type": "TToolBar"}, "panelchange": {"name": "PanelChange", "type": "TPanel"}, "rbuttonnb": {"name": "RButtonNB", "type": "TRadioButton"}, "rbuttonnl": {"name": "RButtonNL", "type": "TRadioButton"}, "toolbtnc": {"name": "ToolBtnC", "type": "TToolButton"}, "calcamort": {"name": "CalcAmort", "type": "TToolButton"}, "toolbtnd": {"name": "ToolBtnD", "type": "TToolButton"}, "tooltrans": {"name": "ToolTrans", "type": "TToolButton"}, "toolbtnf": {"name": "ToolBtnF", "type": "TToolButton"}, "toolbuttonturn": {"name": "ToolButtonTurn", "type": "TToolButton"}, "toolbtnk": {"name": "ToolBtnK", "type": "TToolButton"}, "toolbuttonturngeneral": {"name": "ToolButtonTurnGeneral", "type": "TToolButton"}, "toolbtnm": {"name": "ToolBtnM", "type": "TToolButton"}, "tbuttonoption": {"name": "TButtonOption", "type": "TToolButton"}, "toolbtnl": {"name": "ToolBtnL", "type": "TToolButton"}, "tbtnfilter": {"name": "TBtnFilter", "type": "TToolButton"}, "toolbtnp": {"name": "ToolBtnP", "type": "TToolButton"}, "pmenutrans": {"name": "PMenuTrans", "type": "TPopupMenu"}, "ntransaction": {"name": "NTransaction", "type": "TMenuItem"}, "ntransout": {"name": "NTransOut", "type": "TMenuItem"}, "popupmenufilter": {"name": "PopupMenuFilter", "type": "TPopupMenu"}, "filterall": {"name": "FilterAll", "type": "TMenuItem"}, "filternone": {"name": "FilterNone", "type": "TMenuItem"}, "actionlist": {"name": "ActionList", "type": "TActionList"}, "refreshall": {"name": "RefreshAll", "type": "TAction"}, "pexpiredrepar": {"name": "PExpiredRepar", "type": "TPopupMenu"}, "perdeg": {"name": "PerDeg", "type": "TMenuItem"}, "exprwares": {"name": "ExprWares", "type": "TMenuItem"}, "aaa1": {"name": "aaa1", "type": "TMenuItem"}, "excele1": {"name": "Excele1", "type": "TMenuItem"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "kart1": {"name": "kart1", "type": "TMenuItem"}, "gggh1": {"name": "gggh1", "type": "TMenuItem"}, "gboxnl": {"name": "GBoxNL", "type": "TGroupBox"}, "dbgridehwaresnl": {"name": "DBGridEhWaresNL", "type": "TDBGridEh"}, "panelsumtax": {"name": "PanelSumTax", "type": "TPanel"}, "labelk": {"name": "LabelK", "type": "TLabel"}, "labeltaxfirstprice": {"name": "LabelTaxFirstPrice", "type": "TLabel"}, "labeltaxremainder": {"name": "LabelTaxRemainder", "type": "TLabel"}, "labeltaxallamort": {"name": "LabelTaxAllAmort", "type": "TLabel"}, "labeltaxamort": {"name": "LabelTaxAmort", "type": "TLabel"}, "dbeditfp": {"name": "DBEditFP", "type": "TDBEdit"}, "dbedittaxfirstprice": {"name": "DBEditTaxFirstPrice", "type": "TDBEdit"}, "dbedittaxremainder": {"name": "DBEditTaxRemainder", "type": "TDBEdit"}, "dbedittaxallamort": {"name": "DBEditTaxAllAmort", "type": "TDBEdit"}, "dbedittaxamort": {"name": "DBEditTaxAmort", "type": "TDBEdit"}, "gboxnb": {"name": "GBoxNB", "type": "TGroupBox"}, "dbgridwaresnb": {"name": "DBGridWaresNB", "type": "TDBGridEh"}, "dbgridehgroupnb": {"name": "DBGridEhGroupNB", "type": "TDBGridEh"}, "panelsum": {"name": "PanelSum", "type": "TPanel"}, "labelfirstprice": {"name": "LabelFirstPrice", "type": "TLabel"}, "labelremainder": {"name": "LabelRemainder", "type": "TLabel"}, "labelallamort": {"name": "LabelAllAmort", "type": "TLabel"}, "labelamort": {"name": "LabelAmort", "type": "TLabel"}, "labelsum": {"name": "LabelSum", "type": "TLabel"}, "labelrefreshall": {"name": "LabelRefreshAll", "type": "TLabel"}, "dbeditfirstprice": {"name": "DBEditFirstPrice", "type": "TDBEdit"}, "dbremainder": {"name": "DBRemainder", "type": "TDBEdit"}, "dballamort": {"name": "DBAllAmort", "type": "TDBEdit"}, "dbeditamort": {"name": "DBEditAmort", "type": "TDBEdit"}, "panelsearch": {"name": "PanelSearch", "type": "TPanel"}, "labels": {"name": "LabelS", "type": "TLabel"}, "search": {"name": "Search", "type": "TLabel"}, "labelsrchname": {"name": "LabelSrchName", "type": "TLabel"}, "labelsrchfp": {"name": "LabelSrchFP", "type": "TLabel"}, "labelsrchr": {"name": "LabelSrchR", "type": "TLabel"}, "labelsrchaa": {"name": "LabelSrchAA", "type": "TLabel"}, "labelsrcha": {"name": "LabelSrchA", "type": "TLabel"}, "editsrchfp": {"name": "EditSrchFP", "type": "TEdit"}, "editsrchr": {"name": "EditSrchR", "type": "TEdit"}, "editsrchaa": {"name": "EditSrchAA", "type": "TEdit"}, "editsrchname": {"name": "EditSrchName", "type": "TEdit"}, "editsrcha": {"name": "EditSrchA", "type": "TEdit"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "radiobutton1": {"name": "RadioButton1", "type": "TRadioButton"}, "vsaitinalsat1": {"name": "Vsaitinalsat1", "type": "TMenuItem"}, "fevents": {"name": "FEvents", "type": "IMainResourceEvents"}}, {});
  U.init(async () => {
    U.const("GPosition", 0);
    U.const("LastPosition", 0);
    U.const("row", 0);
    U.var_("MainResource", null, "TMainResource");
    U.var_("p_id", 0, "integer");
    U.var_("v_groups_id", 0, "real");
    U.var_("New_Or_Calc_Wares_Trans", 0, "byte");
  });
  U.method("TMainResource", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TMainResource", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TMainResource", "Initialize", null, arguments);
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
  U.method("TMainResource", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainResource", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainResource", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainResource", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainResource", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainResource", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainResource", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainResource", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainResource", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainResource", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainResource", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainResource", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainResource", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainResource", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainResource", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainResource", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainResource", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainResource", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainResource", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TMainResource", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TMainResource", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainResource", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainResource", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TMainResource", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TMainResource", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TMainResource", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TMainResource", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainResource", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainResource", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainResource", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TMainResource", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TMainResource", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainResource", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TMainResource", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TMainResource", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainResource", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainResource", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormCurrentRepNL", (await $.mcall((await $.v(C, "TFormCurrentRepNL")), "Create", [Self])));
  await $.set(C, "FormCurrentRep", (await $.mcall((await $.v(C, "TFormCurrentRep")), "Create", [Self])));
  await $.set(C, "FormFilter", (await $.mcall((await $.v(C, "TFormFilter")), "Create", [Self])));
  await $.set(C, "QRepGroupAll", (await $.mcall((await $.v(C, "TQRepGroupAll")), "Create", [Self])));
  await $.set(C, "QRepGroupAllNL", (await $.mcall((await $.v(C, "TQRepGroupAllNL")), "Create", [Self])));
  await $.set(C, "DataModWares", (await $.mcall((await $.v(C, "TDataModWares")), "Create", [Self])));
  await $.set(C, "FormMeans", (await $.mcall((await $.v(C, "TFormMeans")), "Create", [Self])));
  await $.set(C, "FormChoice", (await $.mcall((await $.v(C, "TFormChoice")), "Create", [Self])));
  await $.set(C, "FormInsert_t", (await $.mcall((await $.v(C, "TFormInsert_t")), "Create", [Self])));
  await $.set(C, "form2", (await $.mcall((await $.v(C, "Tform2")), "create", [Self])));
  await $.set(C, "FormQrep", (await $.mcall((await $.v(C, "TFormQrep")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSGroups")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSWares")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSSumWares")), "Open", []);
  await $.mset((await $.v(C, "GBoxNB")), "Visible", ($.eq((await $.mv((await $.v(C, "RButtonNB")), "Checked")), true)));
  await $.mset((await $.v(C, "GBoxNL")), "Visible", false);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  L0["titlename"] = "INVENTAR_NO";
  {
    const $t1 = (await $.mv((await $.v(C, "DataModWares")), "ODSWares"));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["Title", (await $.wv([$t1], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "str": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["str"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSGroups")), "FieldByName", ["NAme"])), "AsString"));
  await $.stmt((await $.call(C, "ShowMessage", [L0["str"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "DBGridWaresNBDrawColumnCell", async function DBGridWaresNBDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  {
    const $t2 = (await $.v(C, "DBGridWaresNB"));
    if ($.truthy(($.eq((await $.wv([$t2], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 4)))) {
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t2], "DataModWares", C, false)), "ODSWares")), "FieldByName", ["close_format"])), "AsFloat")), 0))) {
        await $.stmt((await $.mcall((await $.wv([$t2], "ImageList", C, false)), "Draw", [(await $.wv([$t2], "Canvas", C, false)), (await $.mv((await $.wv([$t2], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "left")), (await $.mv((await $.wv([$t2], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "top")), 28, (await $.wv([$t2], "true", C, false))])));
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t2], "DataModWares", C, false)), "ODSWares")), "FieldByName", ["close_format"])), "AsFloat")), 1))) {
        await $.stmt((await $.mcall((await $.wv([$t2], "ImageList", C, false)), "Draw", [(await $.wv([$t2], "Canvas", C, false)), (await $.mv((await $.wv([$t2], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "left")), (await $.mv((await $.wv([$t2], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "top")), 29, (await $.wv([$t2], "true", C, false))])));
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t2], "DataModWares", C, false)), "ODSWares")), "FieldByName", ["close_format"])), "AsFloat")), 2))) {
        await $.stmt((await $.mcall((await $.wv([$t2], "ImageList", C, false)), "Draw", [(await $.wv([$t2], "Canvas", C, false)), (await $.mv((await $.wv([$t2], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "left")), (await $.mv((await $.wv([$t2], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "top")), 30, (await $.wv([$t2], "true", C, false))])));
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t2], "DataModWares", C, false)), "ODSWares")), "FieldByName", ["close_format"])), "AsFloat")), 3))) {
        await $.stmt((await $.mcall((await $.wv([$t2], "ImageList", C, false)), "Draw", [(await $.wv([$t2], "Canvas", C, false)), (await $.mv((await $.wv([$t2], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "left")), (await $.mv((await $.wv([$t2], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "top")), 35, (await $.wv([$t2], "true", C, false))])));
      }
      if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t2], "DataModWares", C, false)), "ODSWares")), "RecordCount")), 0))) {
        await $.stmt((await $.wcall([$t2], "DefaultDrawColumnCell", [(await $.wv([$t2], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t2], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t2], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t2], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumnEh", "TGridDrawState"]});
  U.method("TMainResource", "DBGridEhWaresNLDrawColumnCell", async function DBGridEhWaresNLDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  {
    const $t3 = (await $.v(C, "DBGridEhWaresNL"));
    if ($.truthy(($.eq((await $.wv([$t3], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 4)))) {
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "DataModWares", C, false)), "ODSWares")), "FieldByName", ["tax_close_format"])), "AsFloat")), 0))) {
        await $.stmt((await $.mcall((await $.wv([$t3], "ImageList", C, false)), "Draw", [(await $.wv([$t3], "Canvas", C, false)), (await $.mv((await $.wv([$t3], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "left")), (await $.mv((await $.wv([$t3], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "top")), 28, (await $.wv([$t3], "true", C, false))])));
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "DataModWares", C, false)), "ODSWares")), "FieldByName", ["tax_close_format"])), "AsFloat")), 1))) {
        await $.stmt((await $.mcall((await $.wv([$t3], "ImageList", C, false)), "Draw", [(await $.wv([$t3], "Canvas", C, false)), (await $.mv((await $.wv([$t3], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "left")), (await $.mv((await $.wv([$t3], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "top")), 29, (await $.wv([$t3], "true", C, false))])));
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "DataModWares", C, false)), "ODSWares")), "FieldByName", ["tax_close_format"])), "AsFloat")), 2))) {
        await $.stmt((await $.mcall((await $.wv([$t3], "ImageList", C, false)), "Draw", [(await $.wv([$t3], "Canvas", C, false)), (await $.mv((await $.wv([$t3], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "left")), (await $.mv((await $.wv([$t3], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "top")), 30, (await $.wv([$t3], "true", C, false))])));
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "DataModWares", C, false)), "ODSWares")), "FieldByName", ["tax_close_format"])), "AsFloat")), 3))) {
        await $.stmt((await $.mcall((await $.wv([$t3], "ImageList", C, false)), "Draw", [(await $.wv([$t3], "Canvas", C, false)), (await $.mv((await $.wv([$t3], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "left")), (await $.mv((await $.wv([$t3], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "top")), 35, (await $.wv([$t3], "true", C, false))])));
      }
      if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t3], "DataModWares", C, false)), "ODSWares")), "RecordCount")), 0))) {
        await $.stmt((await $.wcall([$t3], "DefaultDrawColumnCell", [(await $.wv([$t3], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t3], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t3], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t3], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumnEh", "TGridDrawState"]});
  U.method("TMainResource", "NInsertWDrawItem", async function NInsertWDrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t4 = L0["acanvas"];
    const $t5 = (await $.wv([$t4], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t6 = (await $.wv([$t4, $t5], "Font", C, false));
      await $.wset([$t4, $t5, $t6], "Name", "Tahoma", C);
      await $.wset([$t4, $t5, $t6], "Charset", (await $.wv([$t4, $t5, $t6], "RUSSIAN_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t4, $t5, $t6], "Default", C, false)))) {
        await $.wset([$t4, $t5, $t6], "Style", [(await $.wv([$t4, $t5, $t6], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t4, $t5], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t4, $t5], "Pen", C, false)), "Color", (await $.wv([$t4, $t5], "clBlack", C, false)));
      await $.wset([$t4, $t5], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t4, $t5], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t4, $t5], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t4, $t5], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t4, $t5], "MoveTo", [(await $.mv((await $.wv([$t4, $t5], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t4, $t5], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t4, $t5], "LineTo", [(await $.mv((await $.wv([$t4, $t5], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t4, $t5], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t4, $t5], "inc", [$.ref(async () => (await $.wv([$t4, $t5], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t7) => { await $.wset([$t4, $t5], "LineBottom", $t7, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t4, $t5], "Pen", C, false)), "Color", (await $.wv([$t4, $t5], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t4, $t5], "MoveTo", [(await $.mv((await $.wv([$t4, $t5], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t4, $t5], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t4, $t5], "LineTo", [(await $.mv((await $.wv([$t4, $t5], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t4, $t5], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t4, $t5], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t4, $t5], "Brush", C, false)), "Color", (await $.wv([$t4, $t5], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t4, $t5], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t4, $t5], "Font", C, false)), "Color", (await $.wv([$t4, $t5], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t4, $t5], "Font", C, false)), "Color", (await $.wv([$t4, $t5], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t4, $t5], "Brush", C, false)), "Color", (await $.wv([$t4, $t5], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t4, $t5], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t4, $t5], "Font", C, false)), "Color", (await $.wv([$t4, $t5], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t4, $t5], "Font", C, false)), "Color", (await $.wv([$t4, $t5], "clGrayText", C, false)));
        }
      }
      await $.wset([$t4, $t5], "Bar", (await $.wv([$t4, $t5], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t4, $t5], "FillRect", [(await $.wv([$t4, $t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t4, $t5], "TextOut", [$.add((await $.mv((await $.wv([$t4, $t5], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 2), $.add((await $.mv((await $.wv([$t4, $t5], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t4, $t5], "Caption", C, false))], C)));
    }
    await $.wset([$t4, $t5], "SText", (await $.wcall([$t4, $t5], "ShortCutToText", [(await $.wv([$t4, $t5], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t4, $t5], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t4, $t5], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t4, $t5], "TextWidth", [(await $.wv([$t4, $t5], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t4, $t5], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t4, $t5], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t4, $t5], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t8 = (await $.wv([$t4, $t5], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t4, $t5, $t8], "Assigned", [(await $.wv([$t4, $t5, $t8], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t4, $t5, $t8], "Checked", C, false)))) {
            await $.mset((await $.wv([$t4, $t5, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t4, $t5, $t8], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t4, $t5, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t4, $t5, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t4, $t5, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t4, $t5, $t8], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t4, $t5, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t4, $t5, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t4, $t5, $t8], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t4, $t5, $t8], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t4, $t5, $t8], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t4, $t5, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t4, $t5, $t8], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t4, $t5, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t9) => { await $.mset((await $.wv([$t4, $t5, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t9); }), 2], C)));
            await $.stmt((await $.wcall([$t4, $t5, $t8], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t4, $t5, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t10) => { await $.mset((await $.wv([$t4, $t5, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t10); }), 2], C)));
            await $.stmt((await $.wcall([$t4, $t5, $t8], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t4, $t5, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t11) => { await $.mset((await $.wv([$t4, $t5, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t11); }), 2], C)));
            await $.stmt((await $.wcall([$t4, $t5, $t8], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t4, $t5, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t12) => { await $.mset((await $.wv([$t4, $t5, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t12); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t4, $t5, $t8], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t4, $t5, $t8], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t4, $t5, $t8], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t4, $t5, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t4, $t5, $t8], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t4, $t5, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t13) => { await $.mset((await $.wv([$t4, $t5, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t13); }), 1], C)));
            await $.stmt((await $.wcall([$t4, $t5, $t8], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t4, $t5, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t14) => { await $.mset((await $.wv([$t4, $t5, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t14); }), 1], C)));
            await $.stmt((await $.wcall([$t4, $t5, $t8], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t4, $t5, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t15) => { await $.mset((await $.wv([$t4, $t5, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t15); }), 1], C)));
            await $.stmt((await $.wcall([$t4, $t5, $t8], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t4, $t5, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t16) => { await $.mset((await $.wv([$t4, $t5, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t16); }), 1], C)));
            if ($.truthy((await $.wv([$t4, $t5, $t8], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t4, $t5, $t8], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t4, $t5, $t8], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t4, $t5, $t8], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t4, $t5, $t8], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t4, $t5, $t8], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t4, $t5, $t8], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t4, $t5, $t8], "Images", C, false)), "Draw", [(await $.wv([$t4, $t5, $t8], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t4, $t5, $t8], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t4, $t5, $t8], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t4, $t5, $t8], "ImageIndex", C, false)), (await $.wv([$t4, $t5, $t8], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TMainResource", "NInsertWClick", async function NInsertWClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormInsert", (await $.mcall((await $.v(C, "TFormInsert")), "Create", [Self])));
  await $.mcall((await $.v(C, "FormInsert")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "NDeleteWaresClick", async function NDeleteWaresClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_wares_id": 0, "v_groups_id": 0, "v_first_price": 0, "v_debt": 0, "v_cred": 0, "v_trans_name": '', "v_wares_name": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "New_Or_Calc_Wares_Trans", 3);
  L0["v_groups_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSGroups")), "fieldbyname", ["id"])), "AsFloat"));
  L0["v_wares_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSWares")), "fieldbyname", ["wares_id"])), "AsFloat"));
  L0["v_first_price"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSWares")), "fieldbyname", ["first_price"])), "AsFloat"));
  L0["v_wares_name"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSWares")), "fieldbyname", ["wares_name"])), "AsString"));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Bu vəsaiti silməyə əminsiniz?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallProcedure", ["Delete_Wares", [L0["v_wares_id"]]])));
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSWares")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "NEditWClick", async function NEditWClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormUpdWares", (await $.mcall((await $.v(C, "TFormUpdWares")), "Create", [Self])));
  await $.mcall((await $.v(C, "FormUpdWares")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "NAddGroupsClick", async function NAddGroupsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "FormAddGroups", (await $.mcall((await $.v(C, "TFormAddGroups")), "Create", [Self])));
    await $.mcall((await $.v(C, "FormAddGroups")), "ShowModal", []);
  } finally {
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "NDeleteGroupsClick", async function NDeleteGroupsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "v_groups_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSGroups")), "fieldbyname", ["id"])), "AsFloat")));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Bu qrupu silməyə əminsiniz?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallProcedure", ["Delete_Groups", [(await $.v(C, "v_groups_id"))]])));
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSGroups")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "PMenuGroupsPopup", async function PMenuGroupsPopup(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "NDeleteGroups")), "Enabled", (await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallBooleanFunction", ["Enable_Delete_Groups", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSGroups")), "fieldbyname", ["id"])), "AsFloat"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "NTurnNBClick", async function NTurnNBClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(((await $.mv((await $.mv((await $.v(C, "DataModWares")), "ODSWares")), "IsEmpty"))))) {
    return L0.result;
  }
  await $.set(C, "FormTraffics", (await $.mcall((await $.v(C, "TFormTraffics")), "Create", [Self])));
  {
    const $t17 = (await $.mv((await $.v(C, "FormTraffics")), "QuickRep"));
    const $t18 = (await $.mv((await $.wv([$t17], "DataModWares", C, false)), "ODSTraffics"));
    try {
      await $.stmt($.wcall([$t17, $t18], "Close", [], C));
      await $.stmt((await $.wcall([$t17, $t18], "SetVariable", ["WaresID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t17, $t18], "DataModWares", C, false)), "ODSWares")), "FieldByName", ["wares_ID"])), "AsInteger"))], C)));
      await $.stmt($.wcall([$t17, $t18], "Open", [], C));
      await $.stmt($.wcall([$t17, $t18], "Preview", [], C));
    } finally {
      await $.mcall((await $.wv([$t17, $t18], "FormTraffics", C, false)), "Free", []);
      await $.stmt($.wcall([$t17, $t18], "Close", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "NTurnNLClick", async function NTurnNLClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(((await $.mv((await $.mv((await $.v(C, "DataModWares")), "ODSWares")), "IsEmpty"))))) {
    return L0.result;
  }
  await $.set(C, "FormTrafficsNL", (await $.mcall((await $.v(C, "TFormTrafficsNL")), "Create", [Self])));
  {
    const $t19 = (await $.mv((await $.v(C, "FormTrafficsNL")), "QuickRep"));
    const $t20 = (await $.mv((await $.wv([$t19], "DataModWares", C, false)), "ODSTraffics"));
    try {
      await $.stmt($.wcall([$t19, $t20], "Close", [], C));
      await $.stmt((await $.wcall([$t19, $t20], "SetVariable", ["WaresID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t19, $t20], "DataModWares", C, false)), "ODSWares")), "FieldByName", ["wares_ID"])), "AsInteger"))], C)));
      await $.stmt($.wcall([$t19, $t20], "Open", [], C));
      await $.stmt($.wcall([$t19, $t20], "Preview", [], C));
    } finally {
      await $.mcall((await $.wv([$t19, $t20], "FormTrafficsNL", C, false)), "Free", []);
      await $.stmt($.wcall([$t19, $t20], "Close", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "NVergiClick", async function NVergiClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "andfilter": '', "arightsymbol": '', "aleftsymbol": '', "brightsymbol": '', "bleftsymbol": '', "groupfilter": '', "sectorfilter": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["andfilter"] = " and ";
  L0["arightsymbol"] = ")";
  L0["aleftsymbol"] = "(";
  L0["brightsymbol"] = ")";
  L0["bleftsymbol"] = "(";
  L0["groupfilter"] = (await $.mv((await $.mv((await $.v(C, "DataModWares")), "ODSGroups")), "Filter"));
  L0["sectorfilter"] = (await $.mv((await $.mv((await $.v(C, "DataModWares")), "ODSWares")), "Filter"));
  if ($.truthy($.eq(L0["groupfilter"], ""))) {
    L0["andfilter"] = "";
    L0["aleftsymbol"] = "";
    L0["arightsymbol"] = "";
  }
  if ($.truthy($.eq(L0["sectorfilter"], ""))) {
    L0["andfilter"] = "";
    L0["bleftsymbol"] = "";
    L0["brightsymbol"] = "";
  }
  {
    const $t21 = (await $.mv((await $.v(C, "DataModWares")), "ODSReport"));
    await $.stmt($.wcall([$t21], "Close", [], C));
    await $.mcall((await $.wv([$t21], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t21], "SQL", C, false)), "Add", ["select g.name,g.id,w.* from groups g,wares_all w where g.id=w.groups_id  order by g.id"])));
    if ($.truthy((await $.or_(($.ne((await $.wv([$t21], "GroupFilter", { get: async () => L0["groupfilter"], set: async (v) => { L0["groupfilter"] = v; }, local: true }, false)), "")), async () => ($.ne((await $.wv([$t21], "SectorFilter", { get: async () => L0["sectorfilter"], set: async (v) => { L0["sectorfilter"] = v; }, local: true }, false)), "")))))) {
      await $.wset([$t21], "Filtered", (await $.wv([$t21], "false", C, false)), C);
      await $.wset([$t21], "Filter", $.add($.add($.add($.add($.add($.add((await $.wv([$t21], "aLeftSymbol", { get: async () => L0["aleftsymbol"], set: async (v) => { L0["aleftsymbol"] = v; }, local: true }, false)), (await $.wv([$t21], "GroupFilter", { get: async () => L0["groupfilter"], set: async (v) => { L0["groupfilter"] = v; }, local: true }, false))), (await $.wv([$t21], "aRightSymbol", { get: async () => L0["arightsymbol"], set: async (v) => { L0["arightsymbol"] = v; }, local: true }, false))), (await $.wv([$t21], "andFilter", { get: async () => L0["andfilter"], set: async (v) => { L0["andfilter"] = v; }, local: true }, false))), (await $.wv([$t21], "bLeftSymbol", { get: async () => L0["bleftsymbol"], set: async (v) => { L0["bleftsymbol"] = v; }, local: true }, false))), (await $.wv([$t21], "SectorFilter", { get: async () => L0["sectorfilter"], set: async (v) => { L0["sectorfilter"] = v; }, local: true }, false))), (await $.wv([$t21], "bRightSymbol", { get: async () => L0["brightsymbol"], set: async (v) => { L0["brightsymbol"] = v; }, local: true }, false))), C);
      await $.wset([$t21], "Filtered", (await $.wv([$t21], "true", C, false)), C);
    }
    await $.stmt($.wcall([$t21], "Open", [], C));
  }
  await $.mcall((await $.mv((await $.v(C, "FormCurrentRepNL")), "QuickRepNL")), "Preview", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "TButtonDifTransClick", async function TButtonDifTransClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormTransOut", (await $.mcall((await $.v(C, "TFormTransOut")), "Create", [Self])));
  await $.mcall((await $.v(C, "FormTransOut")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "RButtonNLClick", async function RButtonNLClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "GBoxNL")), "Visible", ($.eq((await $.mv((await $.v(C, "RButtonNL")), "Checked")), true)));
  await $.mset((await $.v(C, "GBoxNB")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "RButtonNBClick", async function RButtonNBClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "GBoxNB")), "Visible", ($.eq((await $.mv((await $.v(C, "RButtonNB")), "Checked")), true)));
  await $.mset((await $.v(C, "GBoxNL")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "TButtonOptionClick", async function TButtonOptionClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Növbəti ilə keçmək üçün qalıq dəyərini təyin edim?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallProcedure", ["repair_wares", []])));
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSWares")), "Refresh", []);
    await $.stmt((await $.call(C, "ShowMessage", ["Əməliyyat yerinə yetirildi!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "NEditGroupsClick", async function NEditGroupsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
    await $.set(C, "FormUpdGroups", (await $.mcall((await $.v(C, "TFormUpdGroups")), "Create", [Self])));
  } finally {
    await $.mcall((await $.v(C, "FormUpdGroups")), "ShowModal", []);
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "NStop_CalculateNBClick", async function NStop_CalculateNBClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_wares_id": 0, "rh": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["v_wares_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSWares")), "fieldbyname", ["wares_id"])), "AsFloat"));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Hesablamanı dayandırım?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallProcedure", ["Stop_Calculate", ["nb", L0["v_wares_id"]]])));
    L0["rh"] = L0["v_wares_id"];
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSWares")), "Refresh", []);
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridWaresNB")), "DataSource")), "DataSet")), "Locate", ["wares_id", L0["rh"], []])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "NStop_CalculateNLClick", async function NStop_CalculateNLClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_wares_id": 0, "rh": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["v_wares_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSWares")), "fieldbyname", ["wares_id"])), "AsFloat"));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Hesablamanı dayandırım?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallProcedure", ["Stop_Calculate", ["nl", L0["v_wares_id"]]])));
    L0["rh"] = L0["v_wares_id"];
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSWares")), "Refresh", []);
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridEhWaresNL")), "DataSource")), "DataSet")), "Locate", ["wares_id", L0["rh"], []])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "DBGridWaresNBTitleClick", async function DBGridWaresNBTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy((await $.mv((await $.mv(L0["column"], "Field")), "Calculated")))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  try {
    {
      const $t22 = (await $.mv((await $.v(C, "DataModWares")), "ODSWares"));
      await $.stmt((await $.wcall([$t22], "SetVariable", ["Title", (await $.wv([$t22], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t22], "Refresh", [], C));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumnEh"]});
  U.method("TMainResource", "LabelSClick", async function LabelSClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "LabelS")), "Caption")), "<"))) {
    await $.mset((await $.v(C, "TimerA")), "Enabled", true);
    await $.mset((await $.v(C, "TimerB")), "Enabled", false);
  } else {
    await $.mset((await $.v(C, "TimerB")), "Enabled", true);
    await $.mset((await $.v(C, "TimerA")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "TimerATimer", async function TimerATimer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.lt((await $.mv((await $.v(C, "PanelSearch")), "Width")), $.sub((await $.mv((await $.v(C, "PanelSum")), "Width")), 4)))) {
    await $.mset((await $.v(C, "PanelSearch")), "Width", $.add((await $.mv((await $.v(C, "PanelSearch")), "Width")), 10));
    await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
    await $.mset((await $.v(C, "LabelS")), "Caption", ">");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "TimerBTimer", async function TimerBTimer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.v(C, "PanelSearch")), "Width")), $.add(16, 10)))) {
    await $.mset((await $.v(C, "PanelSearch")), "Width", $.sub((await $.mv((await $.v(C, "PanelSearch")), "Width")), 10));
    await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
    await $.mset((await $.v(C, "LabelS")), "Caption", "<");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "Vsaitinalsat1Click", async function Vsaitinalsat1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Formbuysellwares", (await $.mcall((await $.v(C, "TFormbuysellwares")), "Create", [Self])));
  await $.mcall((await $.v(C, "Formbuysellwares")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "EditSrchNameChange", async function EditSrchNameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditSrchName")), "Text")), ""))) {
    {
      const $t23 = (await $.mv((await $.v(C, "DataModWares")), "ODSWares"));
      await $.stmt((await $.wcall([$t23], "Locate", ["wares_name", (await $.mv((await $.wv([$t23], "EditSrchName", C, false)), "Text")), [(await $.wv([$t23], "loCaseInsensitive", C, false)), (await $.wv([$t23], "loPartialKey", C, false))]], C)));
      await $.mset((await $.wv([$t23], "DBGridEhGroupNB", C, false)), "SelectedIndex", (await $.wv([$t23], "RecNo", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "EditSrchFPChange", async function EditSrchFPChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditSrchFP")), "Text")), ""))) {
    {
      const $t24 = (await $.mv((await $.v(C, "DataModWares")), "ODSWares"));
      await $.stmt((await $.wcall([$t24], "Locate", ["first_price", (await $.mv((await $.wv([$t24], "EditSrchFP", C, false)), "Text")), [(await $.wv([$t24], "loCaseInsensitive", C, false)), (await $.wv([$t24], "loPartialKey", C, false))]], C)));
      await $.mset((await $.wv([$t24], "DBGridEhGroupNB", C, false)), "SelectedIndex", (await $.wv([$t24], "RecNo", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "EditSrchRChange", async function EditSrchRChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditSrchR")), "Text")), ""))) {
    {
      const $t25 = (await $.mv((await $.v(C, "DataModWares")), "ODSWares"));
      await $.stmt((await $.wcall([$t25], "Locate", ["remainder", (await $.mv((await $.wv([$t25], "EditSrchR", C, false)), "Text")), [(await $.wv([$t25], "loCaseInsensitive", C, false)), (await $.wv([$t25], "loPartialKey", C, false))]], C)));
      await $.mset((await $.wv([$t25], "DBGridEhGroupNB", C, false)), "SelectedIndex", (await $.wv([$t25], "RecNo", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "EditSrchAAChange", async function EditSrchAAChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditSrchAA")), "Text")), ""))) {
    {
      const $t26 = (await $.mv((await $.v(C, "DataModWares")), "ODSWares"));
      await $.stmt((await $.wcall([$t26], "Locate", ["all_amort", (await $.mv((await $.wv([$t26], "EditSrchAA", C, false)), "Text")), [(await $.wv([$t26], "loCaseInsensitive", C, false)), (await $.wv([$t26], "loPartialKey", C, false))]], C)));
      await $.mset((await $.wv([$t26], "DBGridEhGroupNB", C, false)), "SelectedIndex", (await $.wv([$t26], "RecNo", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "EditSrchAChange", async function EditSrchAChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditSrchA")), "Text")), ""))) {
    {
      const $t27 = (await $.mv((await $.v(C, "DataModWares")), "ODSWares"));
      await $.stmt((await $.wcall([$t27], "Locate", ["amort", (await $.mv((await $.wv([$t27], "EditSrchA", C, false)), "Text")), [(await $.wv([$t27], "loCaseInsensitive", C, false)), (await $.wv([$t27], "loPartialKey", C, false))]], C)));
      await $.mset((await $.wv([$t27], "DBGridEhGroupNB", C, false)), "SelectedIndex", (await $.wv([$t27], "RecNo", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "ImportExcelClick", async function ImportExcelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormImpXLS", (await $.mcall((await $.v(C, "TFormImpXLS")), "Create", [Self])));
  await $.mcall((await $.v(C, "FormImpXLS")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "NViewTurnClick", async function NViewTurnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormViewTurn", (await $.mcall((await $.v(C, "TFormViewTurn")), "Create", [Self])));
  await $.mcall((await $.v(C, "FormViewTurn")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("DestroySheet", async function DestroySheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Sheet"))])));
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Exl"))])));
  } catch ($t28) {
    $.rethrowControl($t28);
    $.handled($t28);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ShowSheet", async function ShowSheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.mset((await $.v(C, "Exl")), "Visible", true);
  } catch ($t29) {
    $.rethrowControl($t29);
    $.handled($t29);
    await $.stmt($.call(C, "DestroySheet", []));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("CreateSheet", async function CreateSheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.set(C, "Exl", (await $.call(C, "CreateOleObject", ["Excel.Application"])));
    await $.mcall((await $.mv((await $.v(C, "Exl")), "WorkBooks")), "add", []);
    await $.set(C, "Sheet", (await $.idx((await $.mv((await $.mv((await $.mv((await $.v(C, "Exl")), "Application")), "Worksheets")), "Item")), [1])));
  } catch ($t30) {
    $.rethrowControl($t30);
    $.handled($t30);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TMainResource", "ExcelExportClick", async function ExcelExportClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0, "k": 0, "m": 0, "e_first_price": 0, "e_remainder": 0, "e_amort": 0, "e_all_amort": 0, "e_tax_first_price": 0, "e_tax_remainder": 0, "e_tax_amort": 0, "e_tax_all_amort": 0, "bash": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["f"] = 3;
  L0["dd"] = 2;
  try {
    {
      const $t31 = (await $.v(C, "DataModWares"));
      if ($.truthy($.ne((await $.mv((await $.wv([$t31], "ODSGroups", C, false)), "Filter")), ""))) {
        await $.mset((await $.wv([$t31], "ODSGroupXLS", C, false)), "Filtered", (await $.wv([$t31], "false", C, false)));
        await $.mset((await $.wv([$t31], "ODSGroupXLS", C, false)), "Filter", (await $.mv((await $.wv([$t31], "ODSGroups", C, false)), "Filter")));
        await $.mset((await $.wv([$t31], "ODSGroupXLS", C, false)), "Filtered", (await $.wv([$t31], "true", C, false)));
      }
      await $.mcall((await $.wv([$t31], "ODSGroupXLS", C, false)), "Open", []);
      await $.mcall((await $.wv([$t31], "ODSGroupXLS", C, false)), "First", []);
      if ($.truthy($.ne((await $.mv((await $.wv([$t31], "ODSWares", C, false)), "Filter")), ""))) {
        await $.mset((await $.wv([$t31], "ODSWaresXLSALL", C, false)), "Filtered", (await $.wv([$t31], "false", C, false)));
        await $.mset((await $.wv([$t31], "ODSWaresXLSALL", C, false)), "Filter", (await $.mv((await $.wv([$t31], "ODSWares", C, false)), "Filter")));
        await $.mset((await $.wv([$t31], "ODSWaresXLSALL", C, false)), "Filtered", (await $.wv([$t31], "true", C, false)));
      }
      await $.mcall((await $.wv([$t31], "ODSWaresXLSALL", C, false)), "Open", []);
      await $.mcall((await $.wv([$t31], "ODSWaresXLSALL", C, false)), "First", []);
    }
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
    await $.stmt($.call(C, "CreateSheet", []));
    L0["k"] = 0;
    {
      const $t32 = (await $.v(C, "DataModWares"));
      await $.mset((await $.idx((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Exl", C, false)), "WorkBooks")), [1])), "WorkSheets")), [1])), "name", " Milli Bank ");
      { const $t33 = (await $.mv((await $.wv([$t32], "ODSGroupXLS", C, false)), "RecordCount"));
        await $.wset([$t32], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t34 = true;
        for (;;) {
          if (!$t34) { await $.wset([$t32], "i", $.succ((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t34 = false;
          if (!($.ord((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t33))) break;
          await $.wset([$t32], "bash", (await $.wcall([$t32], "inttostr", [$.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)))], C)), { get: async () => L0["bash"], set: async (v) => { L0["bash"] = v; }, local: true });
          { const $t35 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1], " Grup :"); if ($t35 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t35); } }
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1])), "Font")), "Bold", (await $.wv([$t32], "true", C, false)));
          { const $t36 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2], (await $.mv((await $.mcall((await $.wv([$t32], "ODSGroupXLS", C, false)), "FieldByName", ["Name"])), "AsString"))); if ($t36 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t36); } }
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2])), "Font")), "Bold", (await $.wv([$t32], "true", C, false)));
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2])), "Font")), "Name", "Tahoma");
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2])), "Font")), "Color", (await $.wv([$t32], "clBlue", C, false)));
          { const $t37 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 1], "Vəsaitin adı"); if ($t37 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t37); } }
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 1])), "Font")), "Name", "Tahoma");
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 1])), "Font")), "Bold", (await $.wv([$t32], "true", C, false)));
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 1])), "Font")), "Color", (await $.wv([$t32], "clBlue", C, false)));
          await $.mset((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 2])), "Value", "Faiz");
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 2])), "Font")), "Name", "Tahoma");
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 2])), "Font")), "Bold", (await $.wv([$t32], "true", C, false)));
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 2])), "Font")), "Color", (await $.wv([$t32], "clBlue", C, false)));
          { const $t38 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 3], "Invent tar."); if ($t38 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t38); } }
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 3])), "Font")), "Name", "Tahoma");
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 3])), "Font")), "Bold", (await $.wv([$t32], "true", C, false)));
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 3])), "Font")), "Color", (await $.wv([$t32], "clBlue", C, false)));
          { const $t39 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 4], "İlkin dəyəri"); if ($t39 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t39); } }
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 4])), "Font")), "Name", "Tahoma");
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 4])), "Font")), "Bold", (await $.wv([$t32], "true", C, false)));
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 4])), "Font")), "Color", (await $.wv([$t32], "clBlue", C, false)));
          { const $t40 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 5], "Qalıq dəyəri"); if ($t40 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t40); } }
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 5])), "Font")), "Name", "Tahoma");
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 5])), "Font")), "Bold", (await $.wv([$t32], "true", C, false)));
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 5])), "Font")), "Color", (await $.wv([$t32], "clBlue", C, false)));
          { const $t41 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 6], "Amortizasiya"); if ($t41 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t41); } }
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 6])), "Font")), "Name", "Tahoma");
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 6])), "Font")), "Bold", (await $.wv([$t32], "true", C, false)));
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 6])), "Font")), "Color", (await $.wv([$t32], "clBlue", C, false)));
          { const $t42 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 7], "Yığ. Amort"); if ($t42 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t42); } }
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 7])), "Font")), "Name", "Tahoma");
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 7])), "Font")), "Bold", (await $.wv([$t32], "true", C, false)));
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 7])), "Font")), "Color", (await $.wv([$t32], "clBlue", C, false)));
          await $.mset((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 8])), "Value", "Vergi faiz");
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 8])), "Font")), "Name", "Tahoma");
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 8])), "Font")), "Bold", (await $.wv([$t32], "true", C, false)));
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 8])), "Font")), "Color", (await $.wv([$t32], "clBlue", C, false)));
          { const $t43 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 9], "İlin əvv. dəyər"); if ($t43 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t43); } }
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 9])), "Font")), "Name", "Tahoma");
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 9])), "Font")), "Bold", (await $.wv([$t32], "true", C, false)));
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 9])), "Font")), "Color", (await $.wv([$t32], "clBlue", C, false)));
          { const $t44 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 10], "Qalıq dəyəri"); if ($t44 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t44); } }
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 10])), "Font")), "Name", "Tahoma");
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 10])), "Font")), "Bold", (await $.wv([$t32], "true", C, false)));
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 10])), "Font")), "Color", (await $.wv([$t32], "clBlue", C, false)));
          { const $t45 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 11], "Amortizasiya"); if ($t45 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t45); } }
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 11])), "Font")), "Name", "Tahoma");
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 11])), "Font")), "Bold", (await $.wv([$t32], "true", C, false)));
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 11])), "Font")), "Color", (await $.wv([$t32], "clBlue", C, false)));
          { const $t46 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 12], "Yığ. Amort"); if ($t46 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t46); } }
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 12])), "Font")), "Name", "Tahoma");
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 12])), "Font")), "Bold", (await $.wv([$t32], "true", C, false)));
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 12])), "Font")), "Color", (await $.wv([$t32], "clBlue", C, false)));
          { const $t47 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 13], "Amort tar."); if ($t47 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t47); } }
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 13])), "Font")), "Name", "Tahoma");
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 13])), "Font")), "Bold", (await $.wv([$t32], "true", C, false)));
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 13])), "Font")), "Color", (await $.wv([$t32], "clBlue", C, false)));
          { const $t48 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 14], "Inventar №"); if ($t48 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t48); } }
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 14])), "Font")), "Name", "Tahoma");
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 14])), "Font")), "Bold", (await $.wv([$t32], "true", C, false)));
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 14])), "Font")), "Color", (await $.wv([$t32], "clBlue", C, false)));
          { const $t49 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 15], "Istifadçinin adı"); if ($t49 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t49); } }
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 15])), "Font")), "Name", "Tahoma");
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 15])), "Font")), "Bold", (await $.wv([$t32], "true", C, false)));
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 15])), "Font")), "Color", (await $.wv([$t32], "clBlue", C, false)));
          { const $t50 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 16], "Vesaitin Id"); if ($t50 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t50); } }
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 16])), "Font")), "Name", "Tahoma");
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 16])), "Font")), "Bold", (await $.wv([$t32], "true", C, false)));
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 16])), "Font")), "Color", (await $.wv([$t32], "clBlue", C, false)));
          await $.wset([$t32], "e_First_Price", 0, { get: async () => L0["e_first_price"], set: async (v) => { L0["e_first_price"] = v; }, local: true });
          await $.wset([$t32], "e_Remainder", 0, { get: async () => L0["e_remainder"], set: async (v) => { L0["e_remainder"] = v; }, local: true });
          await $.wset([$t32], "e_All_Amort", 0, { get: async () => L0["e_all_amort"], set: async (v) => { L0["e_all_amort"] = v; }, local: true });
          await $.wset([$t32], "e_Amort", 0, { get: async () => L0["e_amort"], set: async (v) => { L0["e_amort"] = v; }, local: true });
          await $.wset([$t32], "e_Tax_First_Price", 0, { get: async () => L0["e_tax_first_price"], set: async (v) => { L0["e_tax_first_price"] = v; }, local: true });
          await $.wset([$t32], "e_Tax_Remainder", 0, { get: async () => L0["e_tax_remainder"], set: async (v) => { L0["e_tax_remainder"] = v; }, local: true });
          await $.wset([$t32], "e_Tax_All_Amort", 0, { get: async () => L0["e_tax_all_amort"], set: async (v) => { L0["e_tax_all_amort"] = v; }, local: true });
          await $.wset([$t32], "e_Tax_Amort", 0, { get: async () => L0["e_tax_amort"], set: async (v) => { L0["e_tax_amort"] = v; }, local: true });
          { const $t51 = (await $.mv((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "RecordCount"));
            await $.wset([$t32], "j", 1, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
            let $t52 = true;
            for (;;) {
              if (!$t52) { await $.wset([$t32], "j", $.succ((await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
              $t52 = false;
              if (!($.ord((await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t51))) break;
              await $.wset([$t32], "e_First_Price", $.add((await $.wv([$t32], "e_First_Price", { get: async () => L0["e_first_price"], set: async (v) => { L0["e_first_price"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "FieldByName", ["First_Price"])), "AsFloat"))), { get: async () => L0["e_first_price"], set: async (v) => { L0["e_first_price"] = v; }, local: true });
              await $.wset([$t32], "e_Remainder", $.add((await $.wv([$t32], "e_Remainder", { get: async () => L0["e_remainder"], set: async (v) => { L0["e_remainder"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "FieldByName", ["Remainder"])), "AsFloat"))), { get: async () => L0["e_remainder"], set: async (v) => { L0["e_remainder"] = v; }, local: true });
              await $.wset([$t32], "e_Amort", $.add((await $.wv([$t32], "e_Amort", { get: async () => L0["e_amort"], set: async (v) => { L0["e_amort"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "FieldByName", ["Amort"])), "AsFloat"))), { get: async () => L0["e_amort"], set: async (v) => { L0["e_amort"] = v; }, local: true });
              await $.wset([$t32], "e_All_Amort", $.add((await $.wv([$t32], "e_All_Amort", { get: async () => L0["e_all_amort"], set: async (v) => { L0["e_all_amort"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "FieldByName", ["All_Amort"])), "AsFloat"))), { get: async () => L0["e_all_amort"], set: async (v) => { L0["e_all_amort"] = v; }, local: true });
              await $.wset([$t32], "e_Tax_First_Price", $.add((await $.wv([$t32], "e_Tax_First_Price", { get: async () => L0["e_tax_first_price"], set: async (v) => { L0["e_tax_first_price"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "FieldByName", ["Tax_First_Price"])), "AsFloat"))), { get: async () => L0["e_tax_first_price"], set: async (v) => { L0["e_tax_first_price"] = v; }, local: true });
              await $.wset([$t32], "e_Tax_Remainder", $.add((await $.wv([$t32], "e_Tax_Remainder", { get: async () => L0["e_tax_remainder"], set: async (v) => { L0["e_tax_remainder"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "FieldByName", ["Tax_Remainder"])), "AsFloat"))), { get: async () => L0["e_tax_remainder"], set: async (v) => { L0["e_tax_remainder"] = v; }, local: true });
              await $.wset([$t32], "e_Tax_Amort", $.add((await $.wv([$t32], "e_Tax_Amort", { get: async () => L0["e_tax_amort"], set: async (v) => { L0["e_tax_amort"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "FieldByName", ["Tax_Amort"])), "AsFloat"))), { get: async () => L0["e_tax_amort"], set: async (v) => { L0["e_tax_amort"] = v; }, local: true });
              await $.wset([$t32], "e_Tax_All_Amort", $.add((await $.wv([$t32], "e_Tax_All_Amort", { get: async () => L0["e_tax_all_amort"], set: async (v) => { L0["e_tax_all_amort"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "FieldByName", ["Tax_All_Amort"])), "AsFloat"))), { get: async () => L0["e_tax_all_amort"], set: async (v) => { L0["e_tax_all_amort"] = v; }, local: true });
              { const $t53 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 1], (await $.mv((await $.mcall((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "FieldByName", ["wares_name"])), "AsString"))); if ($t53 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t53); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 1])), "Font")), "Name", "Tahoma");
              { const $t54 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 2], (await $.mv((await $.mcall((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "FieldByName", ["percent"])), "AsFloat"))); if ($t54 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t54); } }
              { const $t55 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 3], (await $.mv((await $.mcall((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "FieldByName", ["inventar_date"])), "AsDateTime"))); if ($t55 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t55); } }
              { const $t56 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 4], (await $.mv((await $.mcall((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "FieldByName", ["first_price"])), "AsFloat"))); if ($t56 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t56); } }
              { const $t57 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 5], (await $.mv((await $.mcall((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "FieldByName", ["remainder"])), "AsFloat"))); if ($t57 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t57); } }
              { const $t58 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 6], (await $.mv((await $.mcall((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "FieldByName", ["amort"])), "AsFloat"))); if ($t58 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t58); } }
              { const $t59 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 7], (await $.mv((await $.mcall((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "FieldByName", ["all_amort"])), "AsFloat"))); if ($t59 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t59); } }
              { const $t60 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 8], (await $.mv((await $.mcall((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "FieldByName", ["tax_percent"])), "AsFloat"))); if ($t60 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t60); } }
              { const $t61 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 9], (await $.mv((await $.mcall((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "FieldByName", ["tax_first_price"])), "AsFloat"))); if ($t61 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t61); } }
              { const $t62 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 10], (await $.mv((await $.mcall((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "FieldByName", ["tax_remainder"])), "AsFloat"))); if ($t62 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t62); } }
              { const $t63 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 11], (await $.mv((await $.mcall((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "FieldByName", ["tax_amort"])), "AsFloat"))); if ($t63 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t63); } }
              { const $t64 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 12], (await $.mv((await $.mcall((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "FieldByName", ["tax_all_amort"])), "AsFloat"))); if ($t64 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t64); } }
              { const $t65 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 13], (await $.mv((await $.mcall((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "FieldByName", ["amort_date"])), "AsDateTime"))); if ($t65 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t65); } }
              { const $t66 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 14], (await $.mv((await $.mcall((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "FieldByName", ["inventar_no"])), "AsString"))); if ($t66 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t66); } }
              { const $t67 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 15], (await $.mv((await $.mcall((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "FieldByName", ["user_name"])), "AsString"))); if ($t67 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t67); } }
              { const $t68 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), 1), 16], (await $.mv((await $.mcall((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "FieldByName", ["wares_id"])), "AsInteger"))); if ($t68 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t68); } }
              await $.mcall((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "Next", []);
              await $.tick();
            }
          }
          await $.wset([$t32], "m", (await $.mv((await $.wv([$t32], "ODSWaresXLSALL", C, false)), "RecordCount")), { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true });
          { const $t69 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2), 4], (await $.wcall([$t32], "FormatFloat", ["#,##0.00", (await $.wv([$t32], "e_First_Price", { get: async () => L0["e_first_price"], set: async (v) => { L0["e_first_price"] = v; }, local: true }, false))], C))); if ($t69 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t69); } }
          { const $t70 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2), 5], (await $.wcall([$t32], "FormatFloat", ["#,##0.00", (await $.wv([$t32], "e_Remainder", { get: async () => L0["e_remainder"], set: async (v) => { L0["e_remainder"] = v; }, local: true }, false))], C))); if ($t70 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t70); } }
          { const $t71 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2), 6], (await $.wcall([$t32], "FormatFloat", ["#,##0.00", (await $.wv([$t32], "e_Amort", { get: async () => L0["e_amort"], set: async (v) => { L0["e_amort"] = v; }, local: true }, false))], C))); if ($t71 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t71); } }
          { const $t72 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2), 7], (await $.wcall([$t32], "FormatFloat", ["#,##0.00", (await $.wv([$t32], "e_All_Amort", { get: async () => L0["e_all_amort"], set: async (v) => { L0["e_all_amort"] = v; }, local: true }, false))], C))); if ($t72 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t72); } }
          { const $t73 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2), 9], (await $.wcall([$t32], "FormatFloat", ["#,##0.00", (await $.wv([$t32], "e_Tax_First_Price", { get: async () => L0["e_tax_first_price"], set: async (v) => { L0["e_tax_first_price"] = v; }, local: true }, false))], C))); if ($t73 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t73); } }
          { const $t74 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2), 10], (await $.wcall([$t32], "FormatFloat", ["#,##0.00", (await $.wv([$t32], "e_Tax_Remainder", { get: async () => L0["e_tax_remainder"], set: async (v) => { L0["e_tax_remainder"] = v; }, local: true }, false))], C))); if ($t74 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t74); } }
          { const $t75 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2), 11], (await $.wcall([$t32], "FormatFloat", ["#,##0.00", (await $.wv([$t32], "e_Tax_Amort", { get: async () => L0["e_tax_amort"], set: async (v) => { L0["e_tax_amort"] = v; }, local: true }, false))], C))); if ($t75 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t75); } }
          { const $t76 = await $.iset((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2), 12], (await $.wcall([$t32], "FormatFloat", ["#,##0.00", (await $.wv([$t32], "e_Tax_All_Amort", { get: async () => L0["e_tax_all_amort"], set: async (v) => { L0["e_tax_all_amort"] = v; }, local: true }, false))], C))); if ($t76 !== undefined) { await $.mset((await $.wv([$t32], "Sheet", C, false)), "Cells", $t76); } }
          await $.mcall((await $.idx((await $.mv((await $.wv([$t32], "Exl", C, false)), "Range")), [$.add($.add($.add("A", (await $.wv([$t32], "bash", { get: async () => L0["bash"], set: async (v) => { L0["bash"] = v; }, local: true }, false))), ":P"), (await $.wcall([$t32], "inttostr", [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2)], C)))])), "select", []);
          await $.mset((await $.mv((await $.mv((await $.wv([$t32], "Exl", C, false)), "Selection")), "Interior")), "ColorIndex", 6);
          await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t32], "Sheet", C, false)), "Range")), [$.add($.add($.add("A", (await $.wv([$t32], "bash", { get: async () => L0["bash"], set: async (v) => { L0["bash"] = v; }, local: true }, false))), ":P"), (await $.wcall([$t32], "inttostr", [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 2)], C)))])), "Borders")), "Color", (await $.wv([$t32], "clRed", C, false)));
          await $.mcall((await $.idx((await $.mv((await $.wv([$t32], "Exl", C, false)), "Range")), [$.add($.add($.add("A", (await $.wcall([$t32], "Inttostr", [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 3)], C))), ":P"), (await $.wcall([$t32], "Inttostr", [$.add($.add($.add((await $.wv([$t32], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t32], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 3)], C)))])), "Select", []);
          await $.mset((await $.mv((await $.mv((await $.wv([$t32], "Exl", C, false)), "Selection")), "Interior")), "ColorIndex", 8);
          await $.wset([$t32], "k", $.add($.add((await $.wv([$t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), (await $.wv([$t32], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), 3), { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true });
          await $.mcall((await $.wv([$t32], "ODSGroupXLS", C, false)), "Next", []);
          await $.tick();
        }
      }
    }
    await $.stmt($.call(C, "ShowSheet", []));
  } finally {
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), ["A1:A1"])), "Select", []);
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.stmt($.call(C, "DestroySheet", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "NTurnExcelExportClick", async function NTurnExcelExportClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormDat", (await $.mcall((await $.v(C, "TFormDat")), "Create", [Self])));
  await $.mcall((await $.v(C, "FormDat")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "NCalculateMonthClick", async function NCalculateMonthClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FormCalcWares"))]))))) {
    await $.set(C, "FormCalcWares", (await $.mcall((await $.v(C, "TFormCalcWares")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "FormCalcWares")), "ShowModal", []);
  await $.mset((await $.v(C, "RadioButton1")), "Checked", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "CalcAmortClick", async function CalcAmortClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CalcAmort")), "Down", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "NTransactionClick", async function NTransactionClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "RButtonNB")), "Checked")), true))) {
    await $.set(C, "New_Or_Calc_Wares_Trans", 1);
    await $.set(C, "FormShowTrans", (await $.mcall((await $.v(C, "TFormShowTrans")), "Create", [Self])));
    await $.mcall((await $.v(C, "FormShowTrans")), "ShowModal", []);
    await $.mset((await $.v(C, "RadioButton1")), "Checked", false);
  } else {
    await $.set(C, "New_Or_Calc_Wares_Trans", 2);
    await $.set(C, "FormShowTrans", (await $.mcall((await $.v(C, "TFormShowTrans")), "Create", [Self])));
    await $.mcall((await $.v(C, "FormShowTrans")), "ShowModal", []);
    await $.mset((await $.v(C, "RadioButton1")), "Checked", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "NTransOutClick", async function NTransOutClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormTransOut", (await $.mcall((await $.v(C, "TFormTransOut")), "Create", [Self])));
  await $.mcall((await $.v(C, "FormTransOut")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "NCalcAbortClick", async function NCalcAbortClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    {
      const $t77 = (await $.v(C, "DataModWares"));
      if ($.truthy($.eq((await $.wcall([$t77], "MessageDlg", [$.add($.add($.add($.add("Hesablamanı ləğv etməyə əminsiniz?", "\r"), (await $.wcall([$t77], "FormatDateTime", ["dd-mmm-yyyy", (await $.mcall((await $.wv([$t77], "SB_MAIN_RESOURCE", C, false)), "CallDateFunction", ["first_amort_date", []]))], C))), " -"), "tarixinə qayıdacaq!!!!"), (await $.wv([$t77], "mtConfirmation", C, false)), (await $.wv([$t77], "mbYesNoCancel", C, false)), 0], C)), (await $.wv([$t77], "mrYes", C, false))))) {
        await $.mset((await $.wv([$t77], "Screen", C, false)), "Cursor", (await $.wv([$t77], "crSQLWait", C, false)));
        await $.mcall((await $.wv([$t77], "Application", C, false)), "ProcessMessages", []);
        await $.stmt((await $.mcall((await $.wv([$t77], "SB_MAIN_RESOURCE", C, false)), "CallProcedure", ["restore_calculate", []])));
        await $.mcall((await $.wv([$t77], "ODSWares", C, false)), "Refresh", []);
        await $.stmt((await $.wcall([$t77], "ShowMessage", ["Hesablama ləğv olundu!!!"], C)));
      }
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "DBGridEhGroupNBTitleClick", async function DBGridEhGroupNBTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy((await $.mv((await $.mv(L0["column"], "Field")), "Calculated")))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  try {
    {
      const $t78 = (await $.mv((await $.v(C, "DataModWares")), "ODSGroups"));
      await $.stmt((await $.wcall([$t78], "SetVariable", ["Title", (await $.wv([$t78], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t78], "Refresh", [], C));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumnEh"]});
  U.method("TMainResource", "NQReportAllClick", async function NQReportAllClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
    await $.set(C, "FormGroupDat", (await $.mcall((await $.v(C, "TFormGroupDat")), "Create", [Self])));
    await $.mcall((await $.v(C, "FormGroupDat")), "ShowModal", []);
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "NMilliBankClick", async function NMilliBankClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "andfilter": '', "arightsymbol": '', "aleftsymbol": '', "brightsymbol": '', "bleftsymbol": '', "groupfilter": '', "sectorfilter": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["andfilter"] = " and ";
  L0["arightsymbol"] = ")";
  L0["aleftsymbol"] = "(";
  L0["brightsymbol"] = ")";
  L0["bleftsymbol"] = "(";
  L0["groupfilter"] = (await $.mv((await $.mv((await $.v(C, "DataModWares")), "ODSGroups")), "Filter"));
  L0["sectorfilter"] = (await $.mv((await $.mv((await $.v(C, "DataModWares")), "ODSWares")), "Filter"));
  if ($.truthy($.eq(L0["groupfilter"], ""))) {
    L0["andfilter"] = "";
    L0["aleftsymbol"] = "";
    L0["arightsymbol"] = "";
  }
  if ($.truthy($.eq(L0["sectorfilter"], ""))) {
    L0["andfilter"] = "";
    L0["bleftsymbol"] = "";
    L0["brightsymbol"] = "";
  }
  {
    const $t79 = (await $.mv((await $.v(C, "DataModWares")), "ODSReport"));
    await $.stmt($.wcall([$t79], "Close", [], C));
    await $.mcall((await $.wv([$t79], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t79], "SQL", C, false)), "Add", ["select g.name,g.id,w.* from groups g,wares_all w where g.id=w.groups_id  order by g.id"])));
    if ($.truthy((await $.or_(($.ne((await $.wv([$t79], "GroupFilter", { get: async () => L0["groupfilter"], set: async (v) => { L0["groupfilter"] = v; }, local: true }, false)), "")), async () => ($.ne((await $.wv([$t79], "SectorFilter", { get: async () => L0["sectorfilter"], set: async (v) => { L0["sectorfilter"] = v; }, local: true }, false)), "")))))) {
      await $.wset([$t79], "Filtered", (await $.wv([$t79], "false", C, false)), C);
      await $.wset([$t79], "Filter", $.add($.add($.add($.add($.add($.add((await $.wv([$t79], "aLeftSymbol", { get: async () => L0["aleftsymbol"], set: async (v) => { L0["aleftsymbol"] = v; }, local: true }, false)), (await $.wv([$t79], "GroupFilter", { get: async () => L0["groupfilter"], set: async (v) => { L0["groupfilter"] = v; }, local: true }, false))), (await $.wv([$t79], "aRightSymbol", { get: async () => L0["arightsymbol"], set: async (v) => { L0["arightsymbol"] = v; }, local: true }, false))), (await $.wv([$t79], "andFilter", { get: async () => L0["andfilter"], set: async (v) => { L0["andfilter"] = v; }, local: true }, false))), (await $.wv([$t79], "bLeftSymbol", { get: async () => L0["bleftsymbol"], set: async (v) => { L0["bleftsymbol"] = v; }, local: true }, false))), (await $.wv([$t79], "SectorFilter", { get: async () => L0["sectorfilter"], set: async (v) => { L0["sectorfilter"] = v; }, local: true }, false))), (await $.wv([$t79], "bRightSymbol", { get: async () => L0["brightsymbol"], set: async (v) => { L0["brightsymbol"] = v; }, local: true }, false))), C);
      await $.wset([$t79], "Filtered", (await $.wv([$t79], "true", C, false)), C);
    }
    await $.stmt($.wcall([$t79], "Open", [], C));
  }
  await $.mcall((await $.mv((await $.v(C, "FormCurrentRep")), "QuickRep")), "Preview", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "DBGridEhGroupNLTitleClick", async function DBGridEhGroupNLTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy((await $.mv((await $.mv(L0["column"], "Field")), "Calculated")))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  try {
    {
      const $t80 = (await $.mv((await $.v(C, "DataModWares")), "ODSGroups"));
      await $.stmt((await $.wcall([$t80], "SetVariable", ["Title", (await $.wv([$t80], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t80], "Refresh", [], C));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumnEh"]});
  U.method("TMainResource", "FilterAllClick", async function FilterAllClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
    await $.mcall((await $.v(C, "FormFilter")), "ShowModal", []);
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "FilterNoneClick", async function FilterNoneClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": 0};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
    {
      const $t81 = (await $.v(C, "DataModWares"));
      { const $t82 = $.sub((await $.wv([$t81], "ComponentCount", C, false)), 1);
        await $.wset([$t81], "a", 0, { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
        let $t83 = true;
        for (;;) {
          if (!$t83) { await $.wset([$t81], "a", $.succ((await $.wv([$t81], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), 1), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }); }
          $t83 = false;
          if (!($.ord((await $.wv([$t81], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))) <= $.ord($t82))) break;
          if ($.truthy($.eq((await $.mv((await $.idx((await $.wv([$t81], "Components", C, false)), [(await $.wv([$t81], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))])), "ClassName")), "TOracleDataSet"))) {
            await $.mset((await $.wcall([$t81], "TOracleDataSet", [(await $.idx((await $.wv([$t81], "Components", C, false)), [(await $.wv([$t81], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))]))], C)), "Filtered", (await $.wv([$t81], "false", C, false)));
            await $.mset((await $.wcall([$t81], "TOracleDataSet", [(await $.idx((await $.wv([$t81], "Components", C, false)), [(await $.wv([$t81], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))]))], C)), "Filter", (await $.wv([$t81], "EmptyStr", C, false)));
            await $.mset((await $.wcall([$t81], "TOracleDataSet", [(await $.idx((await $.wv([$t81], "Components", C, false)), [(await $.wv([$t81], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))]))], C)), "Filtered", (await $.wv([$t81], "true", C, false)));
          }
          await $.tick();
        }
      }
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("Refresh_All_DataSet", async function Refresh_All_DataSet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
    {
      const $t84 = (await $.v(C, "DataModWares"));
      { const $t85 = $.sub((await $.wv([$t84], "ComponentCount", C, false)), 1);
        await $.wset([$t84], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t86 = true;
        for (;;) {
          if (!$t86) { await $.wset([$t84], "i", $.succ((await $.wv([$t84], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t86 = false;
          if (!($.ord((await $.wv([$t84], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t85))) break;
          if ($.truthy($.eq((await $.mv((await $.idx((await $.wv([$t84], "Components", C, false)), [(await $.wv([$t84], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "ClassName")), "TOracleDataSet"))) {
            if ($.truthy($.eq((await $.mv((await $.wcall([$t84], "TOracleDataSet", [(await $.idx((await $.wv([$t84], "Components", C, false)), [(await $.wv([$t84], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C)), "Active")), (await $.wv([$t84], "true", C, false))))) {
              await $.mcall((await $.wcall([$t84], "TOracleDataSet", [(await $.idx((await $.wv([$t84], "Components", C, false)), [(await $.wv([$t84], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C)), "Refresh", []);
            }
          }
          await $.tick();
        }
      }
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TMainResource", "RefreshAllExecute", async function RefreshAllExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Refresh_All_DataSet", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "LabelRefreshAllClick", async function LabelRefreshAllClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Refresh_All_DataSet", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "DBGridEhGroupNBCellClick", async function DBGridEhGroupNBCellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.set(C, "v_groups_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamodwares")), "ODSGroups")), "fieldbyname", ["id"])), "AsInteger")));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumnEh"]});
  U.method("TMainResource", "PerDegClick", async function PerDegClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "inputstring": '', "z": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSet_WExp")), "Refresh", []);
  L0["z"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSet_WExp")), "FieldByName", ["VALUE"])), "AsString"));
  L0["inputstring"] = (await $.call(C, "InputBox", ["Vergi", L0["z"], ""]));
  if ($.truthy($.ne(L0["inputstring"], ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallProcedure", ["update_wares_ar_per", [L0["inputstring"]]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "ExprWaresClick", async function ExprWaresClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ArchiveWares", (await $.mcall((await $.v(C, "TArchiveWares")), "Create", [Self])));
  await $.mcall((await $.v(C, "ArchiveWares")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "aaa1Click", async function aaa1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ArWaresSRep", (await $.mcall((await $.v(C, "TArWaresSRep")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "ArWaresSRep")), "QuickRep")), "Preview", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "N3Click", async function N3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormMeans")), "Show", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "Excele1Click", async function Excele1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormChoice")), "show", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "N1Click", async function N1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "Application")), "CreateForm", [(await $.v(C, "TForm_enter")), (await $.v(C, "Form_enter"))])));
  await $.mcall((await $.v(C, "Form_enter")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "N2Click", async function N2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "Application")), "CreateForm", [(await $.v(C, "TFormDeleted")), (await $.v(C, "FormDeleted"))])));
  await $.mcall((await $.v(C, "FormDeleted")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "kart1Click", async function kart1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "formQrep")), "QuickRep1")), "Preview", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainResource", "gggh1Click", async function gggh1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "form2")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
