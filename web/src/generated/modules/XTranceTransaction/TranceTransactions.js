// Generated from TranceTransactions.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TranceTransactions", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "TranshTransaction_TLB", "StdVcl", "DBGridEhGrouping", "GridsEh", "DBGridEh", "ExtCtrls", "Grids", "DBGrids", "DB", "OracleData", "StdCtrls", "DBCtrls", "ComCtrls", "ActnList", "IdBaseComponent", "IdComponent", "IdTCPConnection", "IdTCPClient", "IdHTTP", "GIFImg", "ComObj", "ComServ", "sboapiDataModuleImpl", "TrdataUnit", "ShellAPI", "UnitImage"]);
  const C = [U];
  U.defClass("TTranceTransaction", "TActiveForm", {"panel2": {"name": "Panel2", "type": "TPanel"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "gridtransactions": {"name": "GridTransactions", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "dtpcurrentdate_laz": {"name": "DTPCurrentDate_laz", "type": "TDateTimePicker"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "dbtext1": {"name": "DBText1", "type": "TDBText"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dtpcurrentdate_pro": {"name": "DTPCurrentDate_pro", "type": "TDateTimePicker"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "dbtext2": {"name": "DBText2", "type": "TDBText"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "action1": {"name": "Action1", "type": "TAction"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "button4": {"name": "Button4", "type": "TButton"}, "idhttp1": {"name": "IdHTTP1", "type": "TIdHTTP"}, "url": {"name": "url", "type": "TButton"}, "timer1": {"name": "Timer1", "type": "TTimer"}, "timer": {"name": "Timer", "type": "TButton"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "imgloading": {"name": "imgLoading", "type": "TImage"}, "fevents": {"name": "FEvents", "type": "ITranceTransactionEvents"}}, {});
  U.init(async () => {
    U.const("tsDelayed", 1);
    U.const("tsCommited", 2);
    U.const("tsRejected", 3);
    U.const("cs_CommitInformation", $.add($.add($.add($.add("Ümumi əməliyyatlar: %d", "\r"), "Təsdiqlənmiş əməliyyatlar: %d"), "\r"), "Təsdiqlənməmiş əməliyyatlar: %d"));
  });
  U.method("TTranceTransaction", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TTranceTransaction", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  await $.inherited(Self, "TTranceTransaction", "EventSinkChanged", [L0["eventsink"]], arguments);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TTranceTransaction", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TTranceTransaction", "Initialize", null, arguments);
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
  U.method("TTranceTransaction", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_AlignDisabled", async function Get_AlignDisabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignDisabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_AlignWithMargins", async function Get_AlignWithMargins(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignWithMargins"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_BorderWidth", async function Get_BorderWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Integer", [(await $.v(C, "BorderWidth"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_DockSite", async function Get_DockSite(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DockSite"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_ExplicitHeight", async function Get_ExplicitHeight(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitHeight"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_ExplicitLeft", async function Get_ExplicitLeft(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitLeft"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_ExplicitTop", async function Get_ExplicitTop(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitTop"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_ExplicitWidth", async function Get_ExplicitWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitWidth"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_MouseInClient", async function Get_MouseInClient(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "MouseInClient"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_ParentCustomHint", async function Get_ParentCustomHint(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentCustomHint"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_ParentDoubleBuffered", async function Get_ParentDoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentDoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_PopupMode", async function Get_PopupMode(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PopupMode"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_ScreenSnap", async function Get_ScreenSnap(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ScreenSnap"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_SnapBuffer", async function Get_SnapBuffer(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "SnapBuffer"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_UseDockManager", async function Get_UseDockManager(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "UseDockManager"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTranceTransaction", "GridTransactionsDrawColumnCell", async function GridTransactionsDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  if ($.truthy($.not(($.in_((await $.v(C, "gdSelected")), L0["state"]))))) {
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridTransactions")), "DataSource")), "DataSet")), "FieldByName", ["vid_op"])), "AsFloat")), 99))) {
      await $.mset((await $.mv((await $.mv((await $.v(C, "GridTransactions")), "Canvas")), "Brush")), "Color", (await $.v(C, "clAqua")));
      await $.mset((await $.mv((await $.mv((await $.v(C, "GridTransactions")), "Canvas")), "Font")), "Color", (await $.v(C, "clBlack")));
    }
  }
  await $.stmt((await $.mcall((await $.v(C, "GridTransactions")), "DefaultDrawColumnCell", [L0["rect"], L0["datacol"], L0["column"], L0["state"]])));
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TTranceTransaction", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TTranceTransaction", "Action1Execute", async function Action1Execute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTranceTransaction", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTranceTransaction", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "currentdate": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "TrData", (await $.mcall((await $.v(C, "TTrData")), "create", [Self])));
  await $.set(C, "FormImage", (await $.mcall((await $.v(C, "TFormImage")), "create", [Self])));
  {
    const $t1 = (await $.v(C, "TrData"));
    await $.mset((await $.wv([$t1], "DTPCurrentDate_laz", C, false)), "Date", (await $.mv((await $.mcall((await $.wv([$t1], "ods_sys", C, false)), "FieldByName", ["TEK_DAT"])), "AsDateTime")));
    await $.mset((await $.wv([$t1], "DTPCurrentDate_pro", C, false)), "Date", (await $.mv((await $.mcall((await $.wv([$t1], "ods_sys", C, false)), "FieldByName", ["TEK_DAT"])), "AsDateTime")));
    await $.wset([$t1], "CurrentDate", (await $.mv((await $.wv([$t1], "ods_sysTEK_DAT", C, false)), "AsDateTime")), { get: async () => L0["currentdate"], set: async (v) => { L0["currentdate"] = v; }, local: true });
    await $.mcall((await $.wv([$t1], "Transactions_lazytr", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t1], "Transactions_lazytr", C, false)), "SetVariable", ["TransactionDate", (await $.wv([$t1], "CurrentDate", { get: async () => L0["currentdate"], set: async (v) => { L0["currentdate"] = v; }, local: true }, false))])));
    await $.mcall((await $.wv([$t1], "Transactions_lazytr", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTranceTransaction", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "currentdate": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "TrData"));
    await $.mcall((await $.wv([$t2], "Transactions_lazytr", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t2], "Transactions_lazytr", C, false)), "SetVariable", ["TransactionDate", (await $.wcall([$t2], "Trunc", [(await $.mv((await $.wv([$t2], "DTPCurrentDate_laz", C, false)), "DateTime"))], C))])));
    await $.mcall((await $.wv([$t2], "Transactions_lazytr", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTranceTransaction", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "currentdate": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "TrData"));
    await $.mcall((await $.wv([$t3], "Transactions_provarch", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t3], "Transactions_provarch", C, false)), "SetVariable", ["TransactionDate", (await $.wcall([$t3], "Trunc", [(await $.mv((await $.wv([$t3], "DTPCurrentDate_pro", C, false)), "DateTime"))], C))])));
    await $.mcall((await $.wv([$t3], "Transactions_provarch", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTranceTransaction", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "id": 0, "f": false, "willrefresh": false, "status": 0, "commitedcount": 0, "errorcount": 0, "lasterrormessage": '', "url": '', "vidop": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["commitedcount"] = 0;
  L0["errorcount"] = 0;
  {
    const $t4 = (await $.v(C, "TrData"));
    const $t5 = (await $.wv([$t4], "GridTransactions", C, false));
    const $t6 = (await $.wv([$t4, $t5], "SelectedRows", C, false));
    const $t7 = (await $.mv((await $.wv([$t4, $t5, $t6], "DataSource", C, false)), "DataSet"));
    if ($.truthy($.eq((await $.wcall([$t4, $t5, $t6, $t7], "MessageDlg", ["Əməliyyatlar təsdiqlənsin?", (await $.wv([$t4, $t5, $t6, $t7], "mtConfirmation", C, false)), [(await $.wv([$t4, $t5, $t6, $t7], "mbYes", C, false)), (await $.wv([$t4, $t5, $t6, $t7], "mbCancel", C, false))], 0], C)), (await $.wv([$t4, $t5, $t6, $t7], "mrYes", C, false))))) {
      await $.stmt($.wcall([$t4, $t5, $t6, $t7], "DisableControls", [], C));
      try {
        await $.mcall((await $.wv([$t4, $t5, $t6, $t7], "Application", C, false)), "ProcessMessages", []);
        if ($.truthy($.eq((await $.wv([$t4, $t5, $t6, $t7], "Count", C, false)), 0))) {
          await $.wset([$t4, $t5, $t6, $t7], "CurrentRowSelected", (await $.wv([$t4, $t5, $t6, $t7], "True", C, false)), C);
        }
        { const $t8 = $.sub((await $.wv([$t4, $t5, $t6, $t7], "Count", C, false)), 1);
          await $.wset([$t4, $t5, $t6, $t7], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t9 = true;
          for (;;) {
            if (!$t9) { await $.wset([$t4, $t5, $t6, $t7], "i", $.succ((await $.wv([$t4, $t5, $t6, $t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t9 = false;
            if (!($.ord((await $.wv([$t4, $t5, $t6, $t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t8))) break;
            try {
              await $.stmt((await $.wcall([$t4, $t5, $t6, $t7], "GotoBookmark", [(await $.wcall([$t4, $t5, $t6, $t7], "TBookmark", [(await $.idx((await $.wv([$t4, $t5, $t6, $t7], "Items", C, false)), [(await $.wv([$t4, $t5, $t6, $t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
              await $.wset([$t4, $t5, $t6, $t7], "Status", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByname", ["Status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
              if ($.truthy($.in_((await $.wv([$t4, $t5, $t6, $t7], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t4, $t5, $t6, $t7], "tsDelayed", C, false)), (await $.wv([$t4, $t5, $t6, $t7], "tsRejected", C, false))]))) {
                await $.wset([$t4, $t5, $t6, $t7], "ID", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
                await $.wset([$t4, $t5, $t6, $t7], "vidop", (await $.mv((await $.wcall([$t4, $t5, $t6, $t7], "FieldByName", ["vid_op"], C)), "AsInteger")), { get: async () => L0["vidop"], set: async (v) => { L0["vidop"] = v; }, local: true });
                if ($.truthy($.eq((await $.wv([$t4, $t5, $t6, $t7], "vidop", { get: async () => L0["vidop"], set: async (v) => { L0["vidop"] = v; }, local: true }, false)), 99))) {
                  await $.mcall((await $.wv([$t4, $t5, $t6, $t7], "ods_m10_chek", C, false)), "close", []);
                  await $.stmt((await $.mcall((await $.wv([$t4, $t5, $t6, $t7], "ods_m10_chek", C, false)), "SetVariable", ["trid", (await $.wv([$t4, $t5, $t6, $t7], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))])));
                  await $.mcall((await $.wv([$t4, $t5, $t6, $t7], "ods_m10_chek", C, false)), "open", []);
                  await $.stmt((await $.mcall((await $.wv([$t4, $t5, $t6, $t7], "webservispkg", C, false)), "CallProcedure", ["call_services", [(await $.mv((await $.wv([$t4, $t5, $t6, $t7], "ods_m10_chekPHONE_M", C, false)), "AsString")), (await $.mv((await $.wv([$t4, $t5, $t6, $t7], "ods_m10_chekAMMOUNT", C, false)), "AsFloat")), (await $.mv((await $.wv([$t4, $t5, $t6, $t7], "ods_m10_chekcreditID", C, false)), "AsString")), (await $.mv((await $.wv([$t4, $t5, $t6, $t7], "ods_m10_chekPASSPIN", C, false)), "AsString"))]])));
                  await $.stmt((await $.wcall([$t4, $t5, $t6, $t7], "TimerClick", [(await $.wv([$t4, $t5, $t6, $t7], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
                  await $.mcall((await $.wv([$t4, $t5, $t6, $t7], "ods_payout_chek", C, false)), "Close", []);
                  await $.stmt((await $.mcall((await $.wv([$t4, $t5, $t6, $t7], "ods_payout_chek", C, false)), "SetVariable", ["v_creditid", (await $.mv((await $.wv([$t4, $t5, $t6, $t7], "ods_m10_chekCREDITID", C, false)), "AsInteger"))])));
                  await $.mcall((await $.wv([$t4, $t5, $t6, $t7], "ods_payout_chek", C, false)), "Open", []);
                  if ($.truthy($.eq((await $.mv((await $.wv([$t4, $t5, $t6, $t7], "ods_payout_chekOPERATION_STATUS_S", C, false)), "AsString")), "SUCCESS"))) {
                    await $.stmt((await $.mcall((await $.wv([$t4, $t5, $t6, $t7], "tranche", C, false)), "CallProcedure", ["tranche_commit", [(await $.wv([$t4, $t5, $t6, $t7], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))]])));
                    await $.stmt((await $.wcall([$t4, $t5, $t6, $t7], "Inc", [$.ref(async () => (await $.wv([$t4, $t5, $t6, $t7], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), async ($t11) => { await $.wset([$t4, $t5, $t6, $t7], "CommitedCount", $t11, { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }); })], C)));
                    await $.stmt((await $.wcall([$t4, $t5, $t6, $t7], "SBCommit", [], C)));
                    await $.wset([$t4, $t5, $t6, $t7], "URL", $.add("http://192.168.0.248:5000/payout_receipt?transactionId=", (await $.mv((await $.mv((await $.wv([$t4, $t5, $t6, $t7], "trdata", C, false)), "ods_payout_chekoperation_id")), "AsString"))), { get: async () => L0["url"], set: async (v) => { L0["url"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t4, $t5, $t6, $t7], "OpenURLInFirefox", [(await $.wv([$t4, $t5, $t6, $t7], "URL", { get: async () => L0["url"], set: async (v) => { L0["url"] = v; }, local: true }, false))], C)));
                  }
                }
                if ($.truthy($.eq((await $.wv([$t4, $t5, $t6, $t7], "vidop", { get: async () => L0["vidop"], set: async (v) => { L0["vidop"] = v; }, local: true }, false)), 98))) {
                  await $.stmt((await $.mcall((await $.wv([$t4, $t5, $t6, $t7], "tranche", C, false)), "CallProcedure", ["tranche_commit", [(await $.wv([$t4, $t5, $t6, $t7], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))]])));
                  await $.stmt((await $.wcall([$t4, $t5, $t6, $t7], "Inc", [$.ref(async () => (await $.wv([$t4, $t5, $t6, $t7], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), async ($t12) => { await $.wset([$t4, $t5, $t6, $t7], "CommitedCount", $t12, { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }); })], C)));
                  await $.stmt((await $.wcall([$t4, $t5, $t6, $t7], "SBCommit", [], C)));
                }
              }
            } catch ($t10) {
              $.rethrowControl($t10);
              if ($.excIs($t10, "Exception")) {
                L0["e"] = $.exc($t10);
                await $.wset([$t4, $t5, $t6, $t7], "LastErrorMessage", (await $.mv((await $.wv([$t4, $t5, $t6, $t7], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), { get: async () => L0["lasterrormessage"], set: async (v) => { L0["lasterrormessage"] = v; }, local: true });
                await $.stmt((await $.wcall([$t4, $t5, $t6, $t7], "Inc", [$.ref(async () => (await $.wv([$t4, $t5, $t6, $t7], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), async ($t13) => { await $.wset([$t4, $t5, $t6, $t7], "ErrorCount", $t13, { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }); })], C)));
                continue;
              }
              else { throw $t10; }
            }
            await $.tick();
          }
        }
      } finally {
        if ($.truthy($.gt((await $.wv([$t4, $t5, $t6, $t7], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), 0))) {
          if ($.truthy($.eq((await $.wv([$t4, $t5, $t6, $t7], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), 1))) {
            await $.stmt((await $.wcall([$t4, $t5, $t6, $t7], "MessageDlg", [(await $.wv([$t4, $t5, $t6, $t7], "LastErrorMessage", { get: async () => L0["lasterrormessage"], set: async (v) => { L0["lasterrormessage"] = v; }, local: true }, false)), (await $.wv([$t4, $t5, $t6, $t7], "mtConfirmation", C, false)), [(await $.wv([$t4, $t5, $t6, $t7], "mbOk", C, false))], 0], C)));
          } else {
            await $.stmt((await $.wcall([$t4, $t5, $t6, $t7], "MessageDlg", [(await $.wcall([$t4, $t5, $t6, $t7], "Format", [(await $.wv([$t4, $t5, $t6, $t7], "cs_CommitInformation", C, false)), [$.add((await $.wv([$t4, $t5, $t6, $t7], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), (await $.wv([$t4, $t5, $t6, $t7], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false))), (await $.wv([$t4, $t5, $t6, $t7], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), (await $.wv([$t4, $t5, $t6, $t7], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false))]], C)), (await $.wv([$t4, $t5, $t6, $t7], "mtConfirmation", C, false)), [(await $.wv([$t4, $t5, $t6, $t7], "mbOk", C, false))], 0], C)));
          }
        }
        await $.stmt($.wcall([$t4, $t5, $t6, $t7], "EnableControls", [], C));
        await $.mcall((await $.mv((await $.wv([$t4, $t5, $t6, $t7], "TrData", C, false)), "Transactions_lazytr")), "Refresh", []);
      }
    }
  }
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridTransactions")), "DataSource")), "DataSet")), "Locate", ["ID", L0["id"], [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTranceTransaction", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTranceTransaction", "TimerClick", async function TimerClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "gif": null, "centerx": 0, "centery": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["gif"] = (await $.mv((await $.v(C, "TGIFImage")), "Create"));
  await $.stmt((await $.mcall(L0["gif"], "LoadFromFile", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), "Spinner-3.gif")])));
  await $.mset(L0["gif"], "Animate", true);
  await $.mset((await $.mv((await $.v(C, "imgLoading")), "Picture")), "Graphic", L0["gif"]);
  await $.mset((await $.v(C, "imgLoading")), "Visible", true);
  await $.mset((await $.v(C, "imgLoading")), "Stretch", true);
  await $.mset((await $.v(C, "imgLoading")), "Proportional", true);
  await $.mset((await $.v(C, "imgLoading")), "Width", 75);
  await $.mset((await $.v(C, "imgLoading")), "Height", 70);
  await $.mset((await $.v(C, "panel9")), "Visible", true);
  L0["centerx"] = $.add((await $.mv((await $.v(C, "DBGrid1")), "Left")), $.idiv(($.sub((await $.mv((await $.v(C, "DBGrid1")), "Width")), (await $.mv((await $.v(C, "panel9")), "Width")))), 2));
  L0["centery"] = $.add((await $.mv((await $.v(C, "DBGrid1")), "Top")), $.idiv(($.sub((await $.mv((await $.v(C, "DBGrid1")), "Height")), (await $.mv((await $.v(C, "panel9")), "Height")))), 2));
  await $.mset((await $.v(C, "panel9")), "Left", L0["centerx"]);
  await $.mset((await $.v(C, "panel9")), "Top", L0["centery"]);
  await $.mset((await $.v(C, "Timer1")), "Interval", 10000);
  await $.mset((await $.v(C, "Timer1")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTranceTransaction", "OpenURLInFirefox", async function OpenURLInFirefox(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"url": $.copyArg(p0), result: undefined, "params": '', "url1": ''};
  await $.fixArgs(L0, ["url"]);
  L0["firefoxpath"] = "C:\\Program Files (x86)\\Mozilla Firefox\\firefox.exe";
  if ($.truthy((await $.call(C, "FileExists", [L0["firefoxpath"]])))) {
    L0["params"] = $.add($.add("-new-tab \"", L0["url"]), "\"");
    await $.stmt((await $.call(C, "ShellExecute", [(await $.v(C, "Handle")), null, (await $.call(C, "PChar", [L0["firefoxpath"]])), (await $.call(C, "PChar", [L0["params"]])), null, (await $.v(C, "SW_SHOWNORMAL"))])));
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Firefox tapılmadı!"])));
  }
  return L0.result;
}, {"params": ["URL"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TTranceTransaction", "urlClick", async function urlClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "url": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["url"] = $.add("http://192.168.0.248:5000/payout_receipt?transactionId=", (await $.mv((await $.mv((await $.v(C, "trdata")), "ods_payout_chekOPERATION_ID")), "AsString")));
  await $.stmt((await $.call(C, "OpenURLInFirefox", [L0["url"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTranceTransaction", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTranceTransaction", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTranceTransaction", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTranceTransaction", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTranceTransaction", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTranceTransaction", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TTranceTransaction", "MouseEnterEvent", async function MouseEnterEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseEnter", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTranceTransaction", "MouseLeaveEvent", async function MouseLeaveEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseLeave", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTranceTransaction", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTranceTransaction", "Set_AlignWithMargins", async function Set_AlignWithMargins(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AlignWithMargins", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTranceTransaction", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTranceTransaction", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTranceTransaction", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TTranceTransaction", "Set_BorderWidth", async function Set_BorderWidth(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "BorderWidth", (await $.call(C, "TBorderWidth", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TTranceTransaction", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TTranceTransaction", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TTranceTransaction", "Set_DockSite", async function Set_DockSite(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DockSite", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTranceTransaction", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTranceTransaction", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTranceTransaction", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTranceTransaction", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TTranceTransaction", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "string", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TTranceTransaction", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTranceTransaction", "Set_ParentCustomHint", async function Set_ParentCustomHint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentCustomHint", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTranceTransaction", "Set_ParentDoubleBuffered", async function Set_ParentDoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentDoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTranceTransaction", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TTranceTransaction", "Set_PopupMode", async function Set_PopupMode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PopupMode", (await $.call(C, "TPopupMode", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPopupMode"]});
  U.method("TTranceTransaction", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TTranceTransaction", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTranceTransaction", "Set_ScreenSnap", async function Set_ScreenSnap(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ScreenSnap", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTranceTransaction", "Set_SnapBuffer", async function Set_SnapBuffer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "SnapBuffer", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TTranceTransaction", "Set_UseDockManager", async function Set_UseDockManager(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "UseDockManager", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTranceTransaction", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTranceTransaction", "Timer1Timer", async function Timer1Timer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Timer1")), "Enabled", false);
  await $.mset((await $.v(C, "imgLoading")), "Visible", false);
  await $.mset((await $.v(C, "panel9")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
