// Generated from QK_ImoprtUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("QK_ImoprtUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "QKI_mport_TLB", "StdVcl", "ExtCtrls", "StdCtrls", "ComCtrls", "ToolWin", "Grids", "DBGrids", "ImgList", "ActnList", "DBCtrls", "OracleData", "Db", "DBTables", "Mask", "Menus", "SBPlgAx50_TLB", "CheckLst", "Buttons", "Keyboard", "ExcelXP", "OleServer", "CMExcelExport", "XDBGrids", "XFSCtrls", "ComObj", "ComServ", "QK_İmpotDataMod", "FormReport", "SboapiDataModuleImpl", "ExcelCheckImpl"]);
  const C = [U];
  U.defClass("TQK_Import", "TActiveForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "excelapplication1": {"name": "ExcelApplication1", "type": "TExcelApplication"}, "opendialog": {"name": "OpenDialog", "type": "TOpenDialog"}, "excelworksheet1": {"name": "ExcelWorksheet1", "type": "TExcelWorksheet"}, "excelworkbook1": {"name": "ExcelWorkbook1", "type": "TExcelWorkbook"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "mliyyatlarnsilinmsi1": {"name": "mliyyatlarnsilinmsi1", "type": "TMenuItem"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "sil1": {"name": "Sil1", "type": "TMenuItem"}, "exceldnoxumaq1": {"name": "ExceldnOxumaq1", "type": "TMenuItem"}, "sdiqetmk1": {"name": "sdiqetmk1", "type": "TMenuItem"}, "sazlama1": {"name": "Sazlama1", "type": "TMenuItem"}, "yenileme1": {"name": "Yenileme1", "type": "TMenuItem"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "edit_description": {"name": "Edit_description", "type": "TEdit"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "fevents": {"name": "FEvents", "type": "IQK_ImportEvents"}}, {});
  U.init(async () => {
    U.const("cs_CommitInformation", $.add($.add($.add($.add("Ümumi əməliyyatlar: %d", "\r"), "Təsdiqlənmiş əməliyyatlar: %d"), "\r"), "Təsdiqlənməmiş əməliyyatlar: %d"));
    U.const("cs_RejectInformation", $.add($.add($.add($.add("Ümumi əməliyyatlar: %d", "\r"), "İnkar edilmiş əməliyyatlar: %d"), "\r"), "İnkar edilməmiş əməliyyatlar: %d"));
  });
  U.method("TQK_Import", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TQK_Import", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  await $.inherited(Self, "TQK_Import", "EventSinkChanged", [L0["eventsink"]], arguments);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TQK_Import", "ExceldnOxumaq1Click", async function ExceldnOxumaq1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ToolButton1")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQK_Import", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TQK_Import", "Initialize", null, arguments);
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
  U.method("TQK_Import", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_AlignDisabled", async function Get_AlignDisabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignDisabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_AlignWithMargins", async function Get_AlignWithMargins(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignWithMargins"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_BorderWidth", async function Get_BorderWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Integer", [(await $.v(C, "BorderWidth"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_DockSite", async function Get_DockSite(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DockSite"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_ExplicitHeight", async function Get_ExplicitHeight(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitHeight"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_ExplicitLeft", async function Get_ExplicitLeft(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitLeft"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_ExplicitTop", async function Get_ExplicitTop(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitTop"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_ExplicitWidth", async function Get_ExplicitWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitWidth"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_MouseInClient", async function Get_MouseInClient(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "MouseInClient"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_ParentCustomHint", async function Get_ParentCustomHint(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentCustomHint"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_ParentDoubleBuffered", async function Get_ParentDoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentDoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_PopupMode", async function Get_PopupMode(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PopupMode"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_ScreenSnap", async function Get_ScreenSnap(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ScreenSnap"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_SnapBuffer", async function Get_SnapBuffer(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "SnapBuffer"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_UseDockManager", async function Get_UseDockManager(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "UseDockManager"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQK_Import", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TQK_Import", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQK_Import", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit_description")), "Text", "Yenidən qiymətləndirme");
  await $.set(C, "QKİmportDataMod", (await $.mcall((await $.v(C, "TQKİmportDataMod")), "create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ods_qk_transaction")), "Open", []);
  await $.set(C, "ExcelCheck", (await $.mcall((await $.v(C, "TExcelCheck")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQK_Import", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQK_Import", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQK_Import", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQK_Import", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQK_Import", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQK_Import", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TQK_Import", "mliyyatlarnsilinmsi1Click", async function mliyyatlarnsilinmsi1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "selectedrowscnt": 0, "i": 0, "ids": '', "status": 0, "trcount": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "QKİmportDataMod")), "ods_qk_transaction")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Heç bir məlumat yoxdur  !"])));
    return L0.result;
  }
  {
    const $t1 = (await $.v(C, "XDBGrid2"));
    const $t2 = (await $.mv((await $.wv([$t1], "DataSource", C, false)), "DataSet"));
    await $.wset([$t1, $t2], "SelectedRowsCnt", (await $.mv((await $.wv([$t1, $t2], "SelectedRows", C, false)), "Count")), { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true });
    if ($.truthy($.gt((await $.wv([$t1, $t2], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1))) {
      if ($.truthy($.eq((await $.wcall([$t1, $t2], "MessageDlg", [(await $.wcall([$t1, $t2], "Format", [$.add((await $.wcall([$t1, $t2], "inttostr", [(await $.wv([$t1, $t2], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false))], C)), "  Sayda əməliyyat günün sənədlərindən silinsinmi  ?"), []], C)), (await $.wv([$t1, $t2], "mtConfirmation", C, false)), [(await $.wv([$t1, $t2], "mbYes", C, false)), (await $.wv([$t1, $t2], "mbCancel", C, false))], 0], C)), (await $.wv([$t1, $t2], "mrYes", C, false))))) {
        { const $t3 = $.sub((await $.wv([$t1, $t2], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1);
          await $.wset([$t1, $t2], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t4 = true;
          for (;;) {
            if (!$t4) { await $.wset([$t1, $t2], "I", $.succ((await $.wv([$t1, $t2], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t4 = false;
            if (!($.ord((await $.wv([$t1, $t2], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t3))) break;
            await $.stmt((await $.wcall([$t1, $t2], "GotoBookmark", [(await $.wcall([$t1, $t2], "Pointer", [(await $.idx((await $.wv([$t1, $t2], "SelectedRows", C, false)), [(await $.wv([$t1, $t2], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            await $.stmt((await $.mcall((await $.mv((await $.wv([$t1, $t2], "QKİmportDataMod", C, false)), "qk_accsettings")), "CallProcedure", ["delet_qk_transaction", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t1, $t2], "QKİmportDataMod", C, false)), "ods_qk_transaction")), "FieldByName", ["ISIN"])), "AsString")), (await $.mv((await $.mcall((await $.mv((await $.wv([$t1, $t2], "QKİmportDataMod", C, false)), "ods_qk_transaction")), "FieldByName", ["TR_ID"])), "AsInteger"))]])));
            await $.mcall((await $.mv((await $.wv([$t1, $t2], "QKİmportDataMod", C, false)), "ods_qk_transaction")), "next", []);
            await $.tick();
          }
        }
      }
    } else {
      if ($.truthy($.eq((await $.wcall([$t1, $t2], "MessageDlg", [(await $.wcall([$t1, $t2], "Format", [$.add((await $.wcall([$t1, $t2], "inttostr", [(await $.wv([$t1, $t2], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false))], C)), "  Sayda əməliyyat günün sənədlərindən silinsinmi  ?"), []], C)), (await $.wv([$t1, $t2], "mtConfirmation", C, false)), [(await $.wv([$t1, $t2], "mbYes", C, false)), (await $.wv([$t1, $t2], "mbCancel", C, false))], 0], C)), (await $.wv([$t1, $t2], "mrYes", C, false))))) {
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t1, $t2], "QKİmportDataMod", C, false)), "qk_accsettings")), "CallProcedure", ["delet_qk_transaction", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t1, $t2], "QKİmportDataMod", C, false)), "ods_qk_transaction")), "FieldByName", ["ISIN"])), "AsString")), (await $.mv((await $.mcall((await $.mv((await $.wv([$t1, $t2], "QKİmportDataMod", C, false)), "ods_qk_transaction")), "FieldByName", ["TR_ID"])), "AsInteger"))]])));
      }
      await $.mcall((await $.mv((await $.wv([$t1, $t2], "QKİmportDataMod", C, false)), "ods_qk_transaction")), "next", []);
    }
  }
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ods_QK_Import")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ods_qk_transaction")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQK_Import", "MouseEnterEvent", async function MouseEnterEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseEnter", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQK_Import", "MouseLeaveEvent", async function MouseLeaveEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseLeave", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQK_Import", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQK_Import", "Sazlama1Click", async function Sazlama1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ToolButton5")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQK_Import", "sdiqetmk1Click", async function sdiqetmk1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ToolButton3")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQK_Import", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TQK_Import", "Set_AlignWithMargins", async function Set_AlignWithMargins(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AlignWithMargins", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TQK_Import", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TQK_Import", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TQK_Import", "Set_BorderWidth", async function Set_BorderWidth(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "BorderWidth", (await $.call(C, "TBorderWidth", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TQK_Import", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TQK_Import", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TQK_Import", "Set_DockSite", async function Set_DockSite(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DockSite", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TQK_Import", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TQK_Import", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TQK_Import", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TQK_Import", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TQK_Import", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "string", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TQK_Import", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TQK_Import", "Set_ParentCustomHint", async function Set_ParentCustomHint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentCustomHint", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TQK_Import", "Set_ParentDoubleBuffered", async function Set_ParentDoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentDoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TQK_Import", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TQK_Import", "Set_PopupMode", async function Set_PopupMode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PopupMode", (await $.call(C, "TPopupMode", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPopupMode"]});
  U.method("TQK_Import", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TQK_Import", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TQK_Import", "Set_ScreenSnap", async function Set_ScreenSnap(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ScreenSnap", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TQK_Import", "Set_SnapBuffer", async function Set_SnapBuffer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "SnapBuffer", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TQK_Import", "Set_UseDockManager", async function Set_UseDockManager(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "UseDockManager", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TQK_Import", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TQK_Import", "Sil1Click", async function Sil1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ToolButton9")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQK_Import", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "row": 0, "cellstr": '', "a": '', "val_name": '', "f": false, "x": 0, "i": 0, "j": 0, "say": 0, "k": 0, "meb": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rootcell"] = 2;
  if ($.truthy($.not((await $.mv((await $.v(C, "OpenDialog")), "Execute"))))) {
    return L0.result;
  }
  L0["v"] = (await $.call(C, "CreateOleObject", ["Excel.Application"]));
  L0["x"] = 0;
  try {
    await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [(await $.mv((await $.v(C, "OpenDialog")), "FileName"))])));
    L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
    await $.mset((await $.v(C, "Edit_description")), "Text", "Yenidən qiymətləndirme");
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "qk_accsettings")), "CallProcedure", ["delet_qk_import", []])));
    await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_QK_Import")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ods_qk_transaction")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_QK_Import_excel")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_QK_Import_excel")), "First", []);
    {
      const $t5 = (await $.v(C, "QKİmportDataMod"));
      const $t6 = (await $.wv([$t5], "ODS_QK_Import_excel", C, false));
      await $.stmt($.wcall([$t5, $t6], "Open", [], C));
      await $.stmt($.wcall([$t5, $t6], "First", [], C));
      { const $t7 = (await $.mv((await $.mv((await $.wv([$t5, $t6], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), "Sheets")), "Count"));
        await $.wset([$t5, $t6], "J", 1, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
        let $t8 = true;
        for (;;) {
          if (!$t8) { await $.wset([$t5, $t6], "J", $.succ((await $.wv([$t5, $t6], "J", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
          $t8 = false;
          if (!($.ord((await $.wv([$t5, $t6], "J", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t7))) break;
          await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t5, $t6], "ExcelCheck", C, false)), "CheckListBox1")), "Items")), "Add", [(await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.wv([$t5, $t6], "v", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), "Workbooks")), [1])), "Worksheets")), [(await $.wv([$t5, $t6], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "Name"))])));
          await $.tick();
        }
      }
      if ($.truthy($.gt((await $.mv((await $.mv((await $.mv((await $.wv([$t5, $t6], "ExcelCheck", C, false)), "CheckListBox1")), "Items")), "Count")), 1))) {
        await $.mcall((await $.wv([$t5, $t6], "ExcelCheck", C, false)), "ShowModal", []);
      }
      if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.wv([$t5, $t6], "ExcelCheck", C, false)), "CheckListBox1")), "Items")), "Count")), 1))) {
        { const $t9 = await $.iset((await $.mv((await $.mv((await $.wv([$t5, $t6], "ExcelCheck", C, false)), "CheckListBox1")), "Checked")), [0], (await $.wv([$t5, $t6], "True", C, false))); if ($t9 !== undefined) { await $.mset((await $.mv((await $.wv([$t5, $t6], "ExcelCheck", C, false)), "CheckListBox1")), "Checked", $t9); } }
      }
      { const $t10 = (await $.mv((await $.mv((await $.mv((await $.wv([$t5, $t6], "ExcelCheck", C, false)), "CheckListBox1")), "Items")), "Count"));
        await $.wset([$t5, $t6], "j", 1, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
        let $t11 = true;
        for (;;) {
          if (!$t11) { await $.wset([$t5, $t6], "j", $.succ((await $.wv([$t5, $t6], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
          $t11 = false;
          if (!($.ord((await $.wv([$t5, $t6], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t10))) break;
          if ($.truthy((await $.idx((await $.mv((await $.mv((await $.wv([$t5, $t6], "ExcelCheck", C, false)), "CheckListBox1")), "Checked")), [$.sub((await $.wv([$t5, $t6], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1)])))) {
            await $.wset([$t5, $t6], "Row", 2, { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true });
            { const $t12 = (await $.mv((await $.mv((await $.mv((await $.idx((await $.mv((await $.wv([$t5, $t6], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), "sheets")), [(await $.wv([$t5, $t6], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "usedrange")), "rows")), "count"));
              await $.wset([$t5, $t6], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
              let $t13 = true;
              for (;;) {
                if (!$t13) { await $.wset([$t5, $t6], "I", $.succ((await $.wv([$t5, $t6], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
                $t13 = false;
                if (!($.ord((await $.wv([$t5, $t6], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t12))) break;
                await $.stmt($.wcall([$t5, $t6], "Insert", [], C));
                await $.mset((await $.wcall([$t5, $t6], "FieldByName", ["A"], C)), "AsString", (await $.idx((await $.mv((await $.idx((await $.mv((await $.wv([$t5, $t6], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), "Sheets")), [(await $.wv([$t5, $t6], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "cells")), [(await $.wv([$t5, $t6], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), 1])));
                await $.mset((await $.wcall([$t5, $t6], "FieldByName", ["B"], C)), "AsString", (await $.idx((await $.mv((await $.idx((await $.mv((await $.wv([$t5, $t6], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), "Sheets")), [(await $.wv([$t5, $t6], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "cells")), [(await $.wv([$t5, $t6], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), 2])));
                await $.mset((await $.wcall([$t5, $t6], "FieldByName", ["C"], C)), "AsString", (await $.idx((await $.mv((await $.idx((await $.mv((await $.wv([$t5, $t6], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), "Sheets")), [(await $.wv([$t5, $t6], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "cells")), [(await $.wv([$t5, $t6], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), 3])));
                await $.mset((await $.wcall([$t5, $t6], "FieldByName", ["D"], C)), "AsString", (await $.idx((await $.mv((await $.idx((await $.mv((await $.wv([$t5, $t6], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), "Sheets")), [(await $.wv([$t5, $t6], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "cells")), [(await $.wv([$t5, $t6], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), 4])));
                await $.mset((await $.wcall([$t5, $t6], "FieldByName", ["E"], C)), "AsString", (await $.idx((await $.mv((await $.idx((await $.mv((await $.wv([$t5, $t6], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), "Sheets")), [(await $.wv([$t5, $t6], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "cells")), [(await $.wv([$t5, $t6], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), 5])));
                await $.mset((await $.wcall([$t5, $t6], "FieldByName", ["F"], C)), "AsString", (await $.idx((await $.mv((await $.idx((await $.mv((await $.wv([$t5, $t6], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), "Sheets")), [(await $.wv([$t5, $t6], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "cells")), [(await $.wv([$t5, $t6], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), 6])));
                await $.mset((await $.wcall([$t5, $t6], "FieldByName", ["G"], C)), "AsString", (await $.idx((await $.mv((await $.idx((await $.mv((await $.wv([$t5, $t6], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), "Sheets")), [(await $.wv([$t5, $t6], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "cells")), [(await $.wv([$t5, $t6], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), 7])));
                await $.mset((await $.wcall([$t5, $t6], "FieldByName", ["H"], C)), "AsString", (await $.idx((await $.mv((await $.idx((await $.mv((await $.wv([$t5, $t6], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), "Sheets")), [(await $.wv([$t5, $t6], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "cells")), [(await $.wv([$t5, $t6], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), 8])));
                await $.mset((await $.wcall([$t5, $t6], "FieldByName", ["I"], C)), "AsString", (await $.idx((await $.mv((await $.idx((await $.mv((await $.wv([$t5, $t6], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), "Sheets")), [(await $.wv([$t5, $t6], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "cells")), [(await $.wv([$t5, $t6], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), 9])));
                await $.mset((await $.wcall([$t5, $t6], "FieldByName", ["I1"], C)), "AsString", (await $.idx((await $.mv((await $.idx((await $.mv((await $.wv([$t5, $t6], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), "Sheets")), [(await $.wv([$t5, $t6], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "cells")), [(await $.wv([$t5, $t6], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), 9])));
                try {
                  await $.wset([$t5, $t6], "meb", (await $.idx((await $.mv((await $.idx((await $.mv((await $.wv([$t5, $t6], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), "Sheets")), [(await $.wv([$t5, $t6], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "cells")), [(await $.wv([$t5, $t6], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), 9])), { get: async () => L0["meb"], set: async (v) => { L0["meb"] = v; }, local: true });
                } catch ($t14) {
                  $.rethrowControl($t14);
                  $.handled($t14);
                  await $.mset((await $.wcall([$t5, $t6], "FieldByName", ["I1"], C)), "AsVariant", "0");
                  await $.wset([$t5, $t6], "x", $.add((await $.wv([$t5, $t6], "x", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 1), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
                }
                await $.mset((await $.wcall([$t5, $t6], "FieldByName", ["J"], C)), "AsString", (await $.idx((await $.mv((await $.idx((await $.mv((await $.wv([$t5, $t6], "V", { get: async () => L0["v"], set: async (v) => { L0["v"] = v; }, local: true }, false)), "Sheets")), [(await $.wv([$t5, $t6], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "cells")), [(await $.wv([$t5, $t6], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), 10])));
                await $.stmt($.wcall([$t5, $t6], "Post", [], C));
                await $.stmt((await $.wcall([$t5, $t6], "Inc", [$.ref(async () => (await $.wv([$t5, $t6], "Row", { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }, false)), async ($t15) => { await $.wset([$t5, $t6], "Row", $t15, { get: async () => L0["row"], set: async (v) => { L0["row"] = v; }, local: true }); })], C)));
                await $.tick();
              }
            }
            await $.stmt($.wcall([$t5, $t6], "Next", [], C));
          }
          await $.tick();
        }
      }
      await $.mcall((await $.mv((await $.wv([$t5, $t6], "ExcelCheck", C, false)), "CheckListBox1")), "Clear", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t5, $t6], "QKİmportDataMod", C, false)), "qk_accsettings")), "CallProcedure", ["excel_sum", []])));
      await $.mcall((await $.mv((await $.wv([$t5, $t6], "QKİmportDataMod", C, false)), "ODS_QK_import")), "Refresh", []);
      await $.mcall((await $.mv((await $.wv([$t5, $t6], "QKİmportDataMod", C, false)), "ODS_QK_Import_excel")), "Refresh", []);
      await $.mcall((await $.mv((await $.wv([$t5, $t6], "QKİmportDataMod", C, false)), "ods_qk_transaction")), "Refresh", []);
    }
  } finally {
    await $.mcall(L0["v"], "Quit", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQK_Import", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tt": 0, "selectedrowscnt": 0, "i": 0, "ids": '', "status": 0, "trcount": 0, "waitnextconfirm": false, "transname": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["tt"] = (await $.mv((await $.mv((await $.v(C, "QKİmportDataMod")), "ods_qk_transaction")), "RecordCount"));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_QK_Import")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Heç bir məlumat yoxdur  !"])));
    return L0.result;
  }
  {
    const $t16 = (await $.v(C, "XDBGrid1"));
    const $t17 = (await $.mv((await $.wv([$t16], "DataSource", C, false)), "DataSet"));
    await $.wset([$t16, $t17], "SelectedRowsCnt", (await $.mv((await $.wv([$t16, $t17], "SelectedRows", C, false)), "Count")), { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true });
    if ($.truthy($.gt((await $.wv([$t16, $t17], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1))) {
      if ($.truthy($.eq((await $.wcall([$t16, $t17], "MessageDlg", [(await $.wcall([$t16, $t17], "Format", [$.add((await $.wcall([$t16, $t17], "inttostr", [(await $.wv([$t16, $t17], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false))], C)), "   sayda əməliyyat təsdiq olunsunmu ? "), []], C)), (await $.wv([$t16, $t17], "mtConfirmation", C, false)), [(await $.wv([$t16, $t17], "mbYes", C, false)), (await $.wv([$t16, $t17], "mbCancel", C, false))], 0], C)), (await $.wv([$t16, $t17], "mrYes", C, false))))) {
        { const $t18 = $.sub((await $.wv([$t16, $t17], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1);
          await $.wset([$t16, $t17], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t19 = true;
          for (;;) {
            if (!$t19) { await $.wset([$t16, $t17], "I", $.succ((await $.wv([$t16, $t17], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t19 = false;
            if (!($.ord((await $.wv([$t16, $t17], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t18))) break;
            await $.wset([$t16, $t17], "transname", (await $.mv((await $.wv([$t16, $t17], "Edit_description", C, false)), "Text")), { get: async () => L0["transname"], set: async (v) => { L0["transname"] = v; }, local: true });
            await $.stmt((await $.wcall([$t16, $t17], "GotoBookmark", [(await $.wcall([$t16, $t17], "Pointer", [(await $.idx((await $.wv([$t16, $t17], "SelectedRows", C, false)), [(await $.wv([$t16, $t17], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            await $.stmt((await $.mcall((await $.mv((await $.wv([$t16, $t17], "QKİmportDataMod", C, false)), "qk_accsettings")), "CallProcedure", ["tr_add", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t16, $t17], "QKİmportDataMod", C, false)), "ods_QK_Import")), "FieldByName", ["c"])), "AsString")), (await $.mv((await $.mcall((await $.mv((await $.wv([$t16, $t17], "QKİmportDataMod", C, false)), "ods_QK_Import")), "FieldByName", ["i1"])), "AsVariant")), (await $.wv([$t16, $t17], "transname", { get: async () => L0["transname"], set: async (v) => { L0["transname"] = v; }, local: true }, false))]])));
            await $.mcall((await $.mv((await $.wv([$t16, $t17], "QKİmportDataMod", C, false)), "ods_QK_Import")), "next", []);
            await $.tick();
          }
        }
      } else {
        return L0.result;
      }
    } else {
      if ($.truthy($.eq((await $.wcall([$t16, $t17], "MessageDlg", [(await $.wcall([$t16, $t17], "Format", [$.add((await $.wcall([$t16, $t17], "inttostr", [(await $.wv([$t16, $t17], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false))], C)), "  sayda əməliyyat təsdiq olunsunmu ?"), []], C)), (await $.wv([$t16, $t17], "mtConfirmation", C, false)), [(await $.wv([$t16, $t17], "mbYes", C, false)), (await $.wv([$t16, $t17], "mbCancel", C, false))], 0], C)), (await $.wv([$t16, $t17], "mrYes", C, false))))) {
        await $.wset([$t16, $t17], "transname", (await $.mv((await $.wv([$t16, $t17], "Edit_description", C, false)), "Text")), { get: async () => L0["transname"], set: async (v) => { L0["transname"] = v; }, local: true });
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t16, $t17], "QKİmportDataMod", C, false)), "qk_accsettings")), "CallProcedure", ["tr_add", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t16, $t17], "QKİmportDataMod", C, false)), "ods_QK_Import")), "FieldByName", ["c"])), "AsString")), (await $.mv((await $.mcall((await $.mv((await $.wv([$t16, $t17], "QKİmportDataMod", C, false)), "ods_QK_Import")), "FieldByName", ["i1"])), "AsVariant")), (await $.wv([$t16, $t17], "transname", { get: async () => L0["transname"], set: async (v) => { L0["transname"] = v; }, local: true }, false))]])));
        await $.mcall((await $.mv((await $.wv([$t16, $t17], "QKİmportDataMod", C, false)), "ods_QK_Import")), "next", []);
      } else {
        return L0.result;
      }
    }
  }
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ods_QK_Import")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ods_qk_transaction")), "Refresh", []);
  await $.stmt((await $.call(C, "ShowMessage", [$.add((await $.call(C, "inttostr", [$.sub((await $.mv((await $.mv((await $.v(C, "QKİmportDataMod")), "ods_qk_transaction")), "RecordCount")), L0["tt"])])), "  sayda əməliyyat günün sənədlərinə göndərildi ?")])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQK_Import", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Form_Report", (await $.mcall((await $.v(C, "TForm_Report")), "create", [Self])));
  await $.mcall((await $.v(C, "Form_Report")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQK_Import", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_QK_Import")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_QK_Import")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ods_qk_transaction")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ods_qk_transaction")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQK_Import", "ToolButton9Click", async function ToolButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "selectedrowscnt": 0, "i": 0, "ids": '', "status": 0, "trcount": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t20 = (await $.v(C, "XDBGrid1"));
    const $t21 = (await $.mv((await $.wv([$t20], "DataSource", C, false)), "DataSet"));
    await $.wset([$t20, $t21], "SelectedRowsCnt", (await $.mv((await $.wv([$t20, $t21], "SelectedRows", C, false)), "Count")), { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true });
    if ($.truthy($.gt((await $.wv([$t20, $t21], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1))) {
      if ($.truthy($.eq((await $.wcall([$t20, $t21], "MessageDlg", [(await $.wcall([$t20, $t21], "Format", [$.add((await $.wcall([$t20, $t21], "inttostr", [(await $.wv([$t20, $t21], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false))], C)), "  sayda  əməliyyat silinsinmi ? "), []], C)), (await $.wv([$t20, $t21], "mtConfirmation", C, false)), [(await $.wv([$t20, $t21], "mbYes", C, false)), (await $.wv([$t20, $t21], "mbCancel", C, false))], 0], C)), (await $.wv([$t20, $t21], "mrYes", C, false))))) {
        { const $t22 = $.sub((await $.wv([$t20, $t21], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1);
          await $.wset([$t20, $t21], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t23 = true;
          for (;;) {
            if (!$t23) { await $.wset([$t20, $t21], "I", $.succ((await $.wv([$t20, $t21], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t23 = false;
            if (!($.ord((await $.wv([$t20, $t21], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t22))) break;
            await $.stmt((await $.wcall([$t20, $t21], "GotoBookmark", [(await $.wcall([$t20, $t21], "Pointer", [(await $.idx((await $.wv([$t20, $t21], "SelectedRows", C, false)), [(await $.wv([$t20, $t21], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            await $.stmt((await $.mcall((await $.mv((await $.wv([$t20, $t21], "QKİmportDataMod", C, false)), "qk_accsettings")), "CallProcedure", ["del_QK_import", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t20, $t21], "QKİmportDataMod", C, false)), "ODS_qk_import")), "FieldByName", ["c"])), "AsString"))]])));
            await $.tick();
          }
        }
      }
    } else {
      if ($.truthy($.eq((await $.wcall([$t20, $t21], "MessageDlg", [(await $.wcall([$t20, $t21], "Format", [$.add((await $.wcall([$t20, $t21], "inttostr", [(await $.wv([$t20, $t21], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false))], C)), "  sayda  əməliyyat silinsinmi ? "), []], C)), (await $.wv([$t20, $t21], "mtConfirmation", C, false)), [(await $.wv([$t20, $t21], "mbYes", C, false)), (await $.wv([$t20, $t21], "mbCancel", C, false))], 0], C)), (await $.wv([$t20, $t21], "mrYes", C, false))))) {
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t20, $t21], "QKİmportDataMod", C, false)), "qk_accsettings")), "CallProcedure", ["del_QK_import", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t20, $t21], "QKİmportDataMod", C, false)), "ODS_qk_import")), "FieldByName", ["c"])), "AsString"))]])));
      }
    }
  }
  await $.mcall((await $.mv((await $.v(C, "QKİmportDataMod")), "ODS_QK_import")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQK_Import", "XDBGrid1DrawColumnCell", async function XDBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "s": '', "w": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["w"] = $.add(5, (await $.mv((await $.mcall((await $.v(C, "Canvas")), "TextExtent", [(await $.mv((await $.mv(L0["column"], "Field")), "DisplayText"))])), "cx")));
  if ($.truthy($.gt(L0["w"], (await $.mv(L0["column"], "Width"))))) {
    await $.mset(L0["column"], "Width", L0["w"]);
  }
  if ($.truthy(($.eq((await $.mv(L0["column"], "FieldName")), "INFO")))) {
    {
      const $t24 = (await $.v(C, "XDBGrid1"));
      const $t25 = (await $.wv([$t24], "Canvas", C, false));
      await $.wset([$t24, $t25], "s", (await $.mv((await $.mcall((await $.mv((await $.wv([$t24, $t25], "DataSource", C, false)), "DataSet")), "FieldByName", ["info"])), "AsString")), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.stmt((await $.wcall([$t24, $t25], "FillRect", [(await $.wv([$t24, $t25], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false))], C)));
      await $.mset((await $.wv([$t24, $t25], "Font", C, false)), "Color", (await $.wv([$t24, $t25], "clRed", C, false)));
      await $.stmt((await $.wcall([$t24, $t25], "TextOut", [$.add($.sub((await $.mv((await $.wv([$t24, $t25], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), 90), (await $.mcall((await $.wv([$t24, $t25], "Canvas", C, false)), "TextWidth", [(await $.wv([$t24, $t25], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))]))), $.add((await $.mv((await $.wv([$t24, $t25], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 2), (await $.wv([$t24, $t25], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TXColumn", "TGridDrawState"]});
  U.method("TQK_Import", "Yenileme1Click", async function Yenileme1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ToolButton7")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
