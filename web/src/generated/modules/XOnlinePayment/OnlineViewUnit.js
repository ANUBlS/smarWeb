// Generated from OnlineViewUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("OnlineViewUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "OnlineView_TLB", "StdVcl", "StdCtrls", "Mask", "DBCtrlsEh", "XFSCtrls", "Grids", "XDBGrids", "ComCtrls", "ToolWin", "ExtCtrls", "ImgList", "CurrencyEdit", "dblookup", "DBCtrls", "CMHintDBLookupComboBox", "Buttons", "sboapiDataModuleImpl", "CMExcelExport", "ComObj", "ComServ", "WspayDataUnit"]);
  const C = [U];
  U.defClass("TOnlineView", "TActiveForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "xfradiobutton1": {"name": "XFRadioButton1", "type": "TXFRadioButton"}, "xfradiobutton2": {"name": "XFRadioButton2", "type": "TXFRadioButton"}, "xfradiobutton3": {"name": "XFRadioButton3", "type": "TXFRadioButton"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}, "cmhintdblookupcombobox1": {"name": "CMHintDBLookupComboBox1", "type": "TCMHintDBLookupComboBox"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "cmhintdblookupcombobox3": {"name": "CMHintDBLookupComboBox3", "type": "TCMHintDBLookupComboBox"}, "dateti_samelydate": {"name": "DateTi_samelydate", "type": "TDBDateTimeEditEh"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "fevents": {"name": "FEvents", "type": "IOnlineViewEvents"}}, {});
  U.init(async () => {
  });
  U.method("TOnlineView", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TOnlineView", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  await $.inherited(Self, "TOnlineView", "EventSinkChanged", [L0["eventsink"]], arguments);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TOnlineView", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TOnlineView", "Initialize", null, arguments);
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
  U.method("TOnlineView", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_AlignDisabled", async function Get_AlignDisabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignDisabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_AlignWithMargins", async function Get_AlignWithMargins(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignWithMargins"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_BorderWidth", async function Get_BorderWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Integer", [(await $.v(C, "BorderWidth"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_DockSite", async function Get_DockSite(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DockSite"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_ExplicitHeight", async function Get_ExplicitHeight(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitHeight"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_ExplicitLeft", async function Get_ExplicitLeft(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitLeft"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_ExplicitTop", async function Get_ExplicitTop(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitTop"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_ExplicitWidth", async function Get_ExplicitWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitWidth"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_MouseInClient", async function Get_MouseInClient(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "MouseInClient"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_ParentCustomHint", async function Get_ParentCustomHint(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentCustomHint"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_ParentDoubleBuffered", async function Get_ParentDoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentDoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_PopupMode", async function Get_PopupMode(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PopupMode"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_ScreenSnap", async function Get_ScreenSnap(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ScreenSnap"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_SnapBuffer", async function Get_SnapBuffer(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "SnapBuffer"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_UseDockManager", async function Get_UseDockManager(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "UseDockManager"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnlineView", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TOnlineView", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnlineView", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "WS_PAYDataModule", (await $.mcall((await $.v(C, "TWS_PAYDataModule")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "WS_PAYDataModule")), "Ods_wspayment")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "WS_PAYDataModule")), "ods_combolist")), "Open", []);
  await $.mset((await $.v(C, "CMHintDBLookupComboBox1")), "KeyValue", "Bütün ");
  await $.mset((await $.v(C, "CMHintDBLookupComboBox3")), "KeyValue", "Bütün ");
  await $.mset((await $.v(C, "DateTimePicker1")), "date", (await $.v(C, "now")));
  await $.mset((await $.v(C, "DateTimePicker2")), "date", (await $.v(C, "now")));
  {
    const $t1 = (await $.v(C, "WS_PAYDataModule"));
    const $t2 = (await $.wv([$t1], "Ods_wspayment", C, false));
    await $.stmt($.wcall([$t1, $t2], "close", [], C));
    { const $t3 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [5], ""); if ($t3 !== undefined) { await $.wset([$t1, $t2], "SQL", $t3, C); } }
    { const $t4 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [5], " where 1=1 "); if ($t4 !== undefined) { await $.wset([$t1, $t2], "SQL", $t4, C); } }
    { const $t5 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [7], ""); if ($t5 !== undefined) { await $.wset([$t1, $t2], "SQL", $t5, C); } }
    { const $t6 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [7], "and status in (1,0) /*and trunc(respdatetime)=trunc(sysdate)*/ "); if ($t6 !== undefined) { await $.wset([$t1, $t2], "SQL", $t6, C); } }
    await $.stmt($.wcall([$t1, $t2], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnlineView", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnlineView", "CMHintDBLookupComboBox1CloseUp", async function CMHintDBLookupComboBox1CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "WS_PAYDataModule"));
    const $t8 = (await $.wv([$t7], "Ods_wspayment", C, false));
    { const $t9 = await $.iset((await $.wv([$t7, $t8], "SQL", C, false)), [5], ""); if ($t9 !== undefined) { await $.wset([$t7, $t8], "SQL", $t9, C); } }
    { const $t10 = await $.iset((await $.wv([$t7, $t8], "SQL", C, false)), [5], " where 1=1 "); if ($t10 !== undefined) { await $.wset([$t7, $t8], "SQL", $t10, C); } }
    { const $t11 = await $.iset((await $.wv([$t7, $t8], "SQL", C, false)), [6], ""); if ($t11 !== undefined) { await $.wset([$t7, $t8], "SQL", $t11, C); } }
    if ($.truthy($.eq((await $.mv((await $.wv([$t7, $t8], "CMHintDBLookupComboBox1", C, false)), "KeyValue")), "Bütün "))) {
      { const $t12 = await $.iset((await $.wv([$t7, $t8], "SQL", C, false)), [6], "/*and trunc(respdatetime)=trunc(sysdate)*/"); if ($t12 !== undefined) { await $.wset([$t7, $t8], "SQL", $t12, C); } }
    } else {
      { const $t13 = await $.iset((await $.wv([$t7, $t8], "SQL", C, false)), [6], $.add($.add($.add(" and  terminal_type=", "'"), (await $.mv((await $.wv([$t7, $t8], "CMHintDBLookupComboBox1", C, false)), "KeyValue"))), "'")); if ($t13 !== undefined) { await $.wset([$t7, $t8], "SQL", $t13, C); } }
    }
    await $.stmt($.wcall([$t7, $t8], "refresh", [], C));
  }
  {
    const $t14 = (await $.v(C, "WS_PAYDataModule"));
    const $t15 = (await $.wv([$t14], "ods_sum", C, false));
    await $.stmt($.wcall([$t14, $t15], "close", [], C));
    { const $t16 = await $.iset((await $.wv([$t14, $t15], "SQL", C, false)), [5], ""); if ($t16 !== undefined) { await $.wset([$t14, $t15], "SQL", $t16, C); } }
    { const $t17 = await $.iset((await $.wv([$t14, $t15], "SQL", C, false)), [5], " where 1=1  "); if ($t17 !== undefined) { await $.wset([$t14, $t15], "SQL", $t17, C); } }
    { const $t18 = await $.iset((await $.wv([$t14, $t15], "SQL", C, false)), [6], ""); if ($t18 !== undefined) { await $.wset([$t14, $t15], "SQL", $t18, C); } }
    if ($.truthy($.eq((await $.mv((await $.wv([$t14, $t15], "CMHintDBLookupComboBox1", C, false)), "KeyValue")), "Bütün "))) {
      { const $t19 = await $.iset((await $.wv([$t14, $t15], "SQL", C, false)), [6], " and trunc(respdatetime)=trunc(sysdate) "); if ($t19 !== undefined) { await $.wset([$t14, $t15], "SQL", $t19, C); } }
    } else {
      { const $t20 = await $.iset((await $.wv([$t14, $t15], "SQL", C, false)), [6], $.add($.add($.add(" and  terminal_type=", "'"), (await $.mv((await $.wv([$t14, $t15], "CMHintDBLookupComboBox1", C, false)), "KeyValue"))), "'")); if ($t20 !== undefined) { await $.wset([$t14, $t15], "SQL", $t20, C); } }
    }
    await $.stmt($.wcall([$t14, $t15], "open", [], C));
    await $.mset((await $.wv([$t14, $t15], "CurrencyEdit1", C, false)), "Value", (await $.mv((await $.mv((await $.wv([$t14, $t15], "WS_PAYDataModule", C, false)), "Ods_sumAMOUNT")), "AsFloat")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnlineView", "CMHintDBLookupComboBox3CloseUp", async function CMHintDBLookupComboBox3CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_date": null};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t21 = (await $.v(C, "WS_PAYDataModule"));
    const $t22 = (await $.wv([$t21], "Ods_wspaymentarch", C, false));
    await $.stmt($.wcall([$t21, $t22], "close", [], C));
    { const $t23 = await $.iset((await $.wv([$t21, $t22], "SQL", C, false)), [6], ""); if ($t23 !== undefined) { await $.wset([$t21, $t22], "SQL", $t23, C); } }
    { const $t24 = await $.iset((await $.wv([$t21, $t22], "SQL", C, false)), [7], ""); if ($t24 !== undefined) { await $.wset([$t21, $t22], "SQL", $t24, C); } }
    { const $t25 = await $.iset((await $.wv([$t21, $t22], "SQL", C, false)), [8], ""); if ($t25 !== undefined) { await $.wset([$t21, $t22], "SQL", $t25, C); } }
    await $.wset([$t21, $t22], "p_date", (await $.mv((await $.wv([$t21, $t22], "DateTi_samelydate", C, false)), "Value")), { get: async () => L0["p_date"], set: async (v) => { L0["p_date"] = v; }, local: true });
    await $.stmt((await $.wcall([$t21, $t22], "SetVariable", ["v_dat", (await $.wcall([$t21, $t22], "trunc", [(await $.mv((await $.wv([$t21, $t22], "DateTimePicker1", C, false)), "Date"))], C))], C)));
    if ($.truthy($.eq((await $.mv((await $.wv([$t21, $t22], "CMHintDBLookupComboBox3", C, false)), "KeyValue")), "Bütün "))) {
      { const $t26 = await $.iset((await $.wv([$t21, $t22], "SQL", C, false)), [7], ""); if ($t26 !== undefined) { await $.wset([$t21, $t22], "SQL", $t26, C); } }
    } else {
      { const $t27 = await $.iset((await $.wv([$t21, $t22], "SQL", C, false)), [7], $.add($.add($.add(" and terminal_type=", "'"), (await $.mv((await $.wv([$t21, $t22], "CMHintDBLookupComboBox3", C, false)), "KeyValue"))), "'")); if ($t27 !== undefined) { await $.wset([$t21, $t22], "SQL", $t27, C); } }
    }
    await $.stmt($.wcall([$t21, $t22], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnlineView", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnlineView", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnlineView", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnlineView", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnlineView", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TOnlineView", "MouseEnterEvent", async function MouseEnterEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseEnter", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnlineView", "MouseLeaveEvent", async function MouseLeaveEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseLeave", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnlineView", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnlineView", "Set_AlignWithMargins", async function Set_AlignWithMargins(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AlignWithMargins", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnlineView", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnlineView", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnlineView", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TOnlineView", "Set_BorderWidth", async function Set_BorderWidth(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "BorderWidth", (await $.call(C, "TBorderWidth", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TOnlineView", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TOnlineView", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TOnlineView", "Set_DockSite", async function Set_DockSite(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DockSite", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnlineView", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnlineView", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnlineView", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnlineView", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TOnlineView", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "string", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TOnlineView", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnlineView", "Set_ParentCustomHint", async function Set_ParentCustomHint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentCustomHint", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnlineView", "Set_ParentDoubleBuffered", async function Set_ParentDoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentDoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnlineView", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TOnlineView", "Set_PopupMode", async function Set_PopupMode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PopupMode", (await $.call(C, "TPopupMode", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPopupMode"]});
  U.method("TOnlineView", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TOnlineView", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnlineView", "Set_ScreenSnap", async function Set_ScreenSnap(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ScreenSnap", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnlineView", "Set_SnapBuffer", async function Set_SnapBuffer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "SnapBuffer", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TOnlineView", "Set_UseDockManager", async function Set_UseDockManager(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "UseDockManager", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnlineView", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnlineView", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_date": null};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t28 = (await $.v(C, "WS_PAYDataModule"));
    const $t29 = (await $.wv([$t28], "Ods_wspaymentarch", C, false));
    await $.stmt($.wcall([$t28, $t29], "close", [], C));
    { const $t30 = await $.iset((await $.wv([$t28, $t29], "SQL", C, false)), [7], ""); if ($t30 !== undefined) { await $.wset([$t28, $t29], "SQL", $t30, C); } }
    if ($.truthy($.eq((await $.mv((await $.wv([$t28, $t29], "CMHintDBLookupComboBox3", C, false)), "KeyValue")), "Bütün "))) {
      { const $t31 = await $.iset((await $.wv([$t28, $t29], "SQL", C, false)), [7], ""); if ($t31 !== undefined) { await $.wset([$t28, $t29], "SQL", $t31, C); } }
    } else {
      { const $t32 = await $.iset((await $.wv([$t28, $t29], "SQL", C, false)), [7], $.add($.add($.add(" and terminal_type=", "'"), (await $.mv((await $.wv([$t28, $t29], "CMHintDBLookupComboBox3", C, false)), "KeyValue"))), "'")); if ($t32 !== undefined) { await $.wset([$t28, $t29], "SQL", $t32, C); } }
    }
    await $.wset([$t28, $t29], "p_date", (await $.mv((await $.wv([$t28, $t29], "DateTi_samelydate", C, false)), "Value")), { get: async () => L0["p_date"], set: async (v) => { L0["p_date"] = v; }, local: true });
    await $.stmt((await $.wcall([$t28, $t29], "SetVariable", ["v_dat", (await $.wcall([$t28, $t29], "trunc", [(await $.mv((await $.wv([$t28, $t29], "DateTimePicker1", C, false)), "Date"))], C))], C)));
    await $.stmt((await $.wcall([$t28, $t29], "SetVariable", ["v_dat2", (await $.wcall([$t28, $t29], "trunc", [(await $.mv((await $.wv([$t28, $t29], "DateTimePicker2", C, false)), "Date"))], C))], C)));
    await $.stmt($.wcall([$t28, $t29], "open", [], C));
    await $.mset((await $.wv([$t28, $t29], "memo1", C, false)), "Text", (await $.mv((await $.wv([$t28, $t29], "sql", C, false)), "Text")));
    await $.mset((await $.wv([$t28, $t29], "memo1", C, false)), "Text", (await $.wcall([$t28, $t29], "getvariable", [0], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnlineView", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t33 = (await $.v(C, "CMExcelExport1"));
    await $.stmt($.wcall([$t33], "Connect", [], C));
    await $.stmt((await $.wcall([$t33], "ExportDataset", [(await $.mv((await $.wv([$t33], "WS_PAYDataModule", C, false)), "Ods_wspaymentarch")), "Terminalpayment", (await $.wv([$t33], "True", C, false))], C)));
    await $.stmt($.wcall([$t33], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnlineView", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "XFRadioButton1")), "Checked")))) {
    {
      const $t34 = (await $.v(C, "WS_PAYDataModule"));
      const $t35 = (await $.wv([$t34], "Ods_wspayment", C, false));
      { const $t36 = await $.iset((await $.wv([$t34, $t35], "SQL", C, false)), [5], ""); if ($t36 !== undefined) { await $.wset([$t34, $t35], "SQL", $t36, C); } }
      { const $t37 = await $.iset((await $.wv([$t34, $t35], "SQL", C, false)), [5], " where 1=1 "); if ($t37 !== undefined) { await $.wset([$t34, $t35], "SQL", $t37, C); } }
      { const $t38 = await $.iset((await $.wv([$t34, $t35], "SQL", C, false)), [6], ""); if ($t38 !== undefined) { await $.wset([$t34, $t35], "SQL", $t38, C); } }
      if ($.truthy($.eq((await $.mv((await $.wv([$t34, $t35], "CMHintDBLookupComboBox1", C, false)), "KeyValue")), "Bütün "))) {
        { const $t39 = await $.iset((await $.wv([$t34, $t35], "SQL", C, false)), [6], "/*and trunc(respdatetime)=trunc(sysdate)*/"); if ($t39 !== undefined) { await $.wset([$t34, $t35], "SQL", $t39, C); } }
      } else {
        { const $t40 = await $.iset((await $.wv([$t34, $t35], "SQL", C, false)), [6], $.add($.add($.add(" and  terminal_type=", "'"), (await $.mv((await $.wv([$t34, $t35], "CMHintDBLookupComboBox1", C, false)), "KeyValue"))), "'")); if ($t40 !== undefined) { await $.wset([$t34, $t35], "SQL", $t40, C); } }
      }
      await $.stmt($.wcall([$t34, $t35], "refresh", [], C));
    }
  }
  await $.mcall((await $.mv((await $.v(C, "WS_PAYDataModule")), "Ods_wspayment")), "Refresh", []);
  if ($.truthy((await $.mv((await $.v(C, "XFRadioButton2")), "Checked")))) {
    await $.mcall((await $.mv((await $.v(C, "WS_PAYDataModule")), "Ods_sum")), "close", []);
    await $.mcall((await $.mv((await $.v(C, "WS_PAYDataModule")), "Ods_sum")), "open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnlineView", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t41 = (await $.v(C, "CMExcelExport1"));
    await $.stmt($.wcall([$t41], "Connect", [], C));
    await $.stmt((await $.wcall([$t41], "ExportDataset", [(await $.mv((await $.wv([$t41], "WS_PAYDataModule", C, false)), "Ods_wspayment")), "Terminalpayment", (await $.wv([$t41], "True", C, false))], C)));
    await $.stmt($.wcall([$t41], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnlineView", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "trid": 0, "parentid": 0, "selectrow": 0, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t42 = (await $.v(C, "XDBGrid1"));
    const $t43 = (await $.mv((await $.wv([$t42], "DataSource", C, false)), "DataSet"));
    await $.wset([$t42, $t43], "selectrow", (await $.mv((await $.wv([$t42, $t43], "SelectedRows", C, false)), "Count")), { get: async () => L0["selectrow"], set: async (v) => { L0["selectrow"] = v; }, local: true });
    { const $t44 = $.sub((await $.wv([$t42, $t43], "selectrow", { get: async () => L0["selectrow"], set: async (v) => { L0["selectrow"] = v; }, local: true }, false)), 1);
      await $.wset([$t42, $t43], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t45 = true;
      for (;;) {
        if (!$t45) { await $.wset([$t42, $t43], "i", $.succ((await $.wv([$t42, $t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t45 = false;
        if (!($.ord((await $.wv([$t42, $t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t44))) break;
        await $.stmt((await $.wcall([$t42, $t43], "GotoBookmark", [(await $.wcall([$t42, $t43], "Pointer", [(await $.idx((await $.wv([$t42, $t43], "SelectedRows", C, false)), [(await $.wv([$t42, $t43], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
        await $.wset([$t42, $t43], "parentid", (await $.mv((await $.wcall([$t42, $t43], "fieldbyname", ["id"], C)), "asInteger")), { get: async () => L0["parentid"], set: async (v) => { L0["parentid"] = v; }, local: true });
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t42, $t43], "WS_PAYDataModule", C, false)), "mainpacket")), "CallProcedure", ["Payments", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t42, $t43], "WS_PAYDataModule", C, false)), "dsrc_wspaymen")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))]])));
        await $.mcall((await $.wv([$t42, $t43], "ToolButton1", C, false)), "Click", []);
        await $.mcall((await $.mv((await $.wv([$t42, $t43], "sboapiDataModule", C, false)), "SBSession")), "commit", []);
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnlineView", "ToolButton4Click", async function ToolButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "WS_PAYDataModule")), "Payment")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "WS_PAYDataModule")), "Payment")), "Open", []);
  {
    const $t46 = (await $.v(C, "CMExcelExport1"));
    await $.stmt($.wcall([$t46], "Connect", [], C));
    await $.stmt((await $.wcall([$t46], "ExportDataset", [(await $.mv((await $.wv([$t46], "WS_PAYDataModule", C, false)), "Payment")), "Ödənişlər", (await $.wv([$t46], "True", C, false))], C)));
    await $.stmt($.wcall([$t46], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnlineView", "XFRadioButton1Click", async function XFRadioButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "XFLabel2")), "Visible", false);
  await $.mset((await $.v(C, "CurrencyEdit1")), "Visible", false);
  {
    const $t47 = (await $.v(C, "WS_PAYDataModule"));
    const $t48 = (await $.wv([$t47], "Ods_wspayment", C, false));
    await $.stmt($.wcall([$t47, $t48], "close", [], C));
    { const $t49 = await $.iset((await $.wv([$t47, $t48], "SQL", C, false)), [5], ""); if ($t49 !== undefined) { await $.wset([$t47, $t48], "SQL", $t49, C); } }
    { const $t50 = await $.iset((await $.wv([$t47, $t48], "SQL", C, false)), [5], " where 1=1 "); if ($t50 !== undefined) { await $.wset([$t47, $t48], "SQL", $t50, C); } }
    { const $t51 = await $.iset((await $.wv([$t47, $t48], "SQL", C, false)), [7], ""); if ($t51 !== undefined) { await $.wset([$t47, $t48], "SQL", $t51, C); } }
    { const $t52 = await $.iset((await $.wv([$t47, $t48], "SQL", C, false)), [7], "and status in (1,0) /*and trunc(respdatetime)=trunc(sysdate) */"); if ($t52 !== undefined) { await $.wset([$t47, $t48], "SQL", $t52, C); } }
    await $.stmt($.wcall([$t47, $t48], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnlineView", "XFRadioButton2Click", async function XFRadioButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "XFLabel2")), "Visible", true);
  await $.mset((await $.v(C, "CurrencyEdit1")), "Visible", true);
  {
    const $t53 = (await $.v(C, "WS_PAYDataModule"));
    const $t54 = (await $.wv([$t53], "Ods_wspayment", C, false));
    await $.stmt($.wcall([$t53, $t54], "close", [], C));
    { const $t55 = await $.iset((await $.wv([$t53, $t54], "SQL", C, false)), [5], ""); if ($t55 !== undefined) { await $.wset([$t53, $t54], "SQL", $t55, C); } }
    { const $t56 = await $.iset((await $.wv([$t53, $t54], "SQL", C, false)), [5], " where 1=1 "); if ($t56 !== undefined) { await $.wset([$t53, $t54], "SQL", $t56, C); } }
    { const $t57 = await $.iset((await $.wv([$t53, $t54], "SQL", C, false)), [7], ""); if ($t57 !== undefined) { await $.wset([$t53, $t54], "SQL", $t57, C); } }
    { const $t58 = await $.iset((await $.wv([$t53, $t54], "SQL", C, false)), [7], "and status=1 and trunc(respdatetime)=trunc(sysdate) "); if ($t58 !== undefined) { await $.wset([$t53, $t54], "SQL", $t58, C); } }
    await $.stmt($.wcall([$t53, $t54], "open", [], C));
  }
  {
    const $t59 = (await $.v(C, "WS_PAYDataModule"));
    const $t60 = (await $.wv([$t59], "ods_sum", C, false));
    await $.stmt($.wcall([$t59, $t60], "close", [], C));
    { const $t61 = await $.iset((await $.wv([$t59, $t60], "SQL", C, false)), [5], ""); if ($t61 !== undefined) { await $.wset([$t59, $t60], "SQL", $t61, C); } }
    { const $t62 = await $.iset((await $.wv([$t59, $t60], "SQL", C, false)), [5], " where 1=1 "); if ($t62 !== undefined) { await $.wset([$t59, $t60], "SQL", $t62, C); } }
    { const $t63 = await $.iset((await $.wv([$t59, $t60], "SQL", C, false)), [7], ""); if ($t63 !== undefined) { await $.wset([$t59, $t60], "SQL", $t63, C); } }
    { const $t64 = await $.iset((await $.wv([$t59, $t60], "SQL", C, false)), [7], "and  trunc(respdatetime)=trunc(sysdate) "); if ($t64 !== undefined) { await $.wset([$t59, $t60], "SQL", $t64, C); } }
    await $.stmt($.wcall([$t59, $t60], "open", [], C));
  }
  await $.mset((await $.v(C, "CurrencyEdit1")), "Value", (await $.mv((await $.mv((await $.v(C, "WS_PAYDataModule")), "Ods_sumAMOUNT")), "AsFloat")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnlineView", "XFRadioButton3Click", async function XFRadioButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "XFLabel2")), "Visible", false);
  await $.mset((await $.v(C, "CurrencyEdit1")), "Visible", false);
  {
    const $t65 = (await $.v(C, "WS_PAYDataModule"));
    const $t66 = (await $.wv([$t65], "Ods_wspayment", C, false));
    await $.stmt($.wcall([$t65, $t66], "close", [], C));
    { const $t67 = await $.iset((await $.wv([$t65, $t66], "SQL", C, false)), [5], ""); if ($t67 !== undefined) { await $.wset([$t65, $t66], "SQL", $t67, C); } }
    { const $t68 = await $.iset((await $.wv([$t65, $t66], "SQL", C, false)), [5], " where 1=1 "); if ($t68 !== undefined) { await $.wset([$t65, $t66], "SQL", $t68, C); } }
    { const $t69 = await $.iset((await $.wv([$t65, $t66], "SQL", C, false)), [7], ""); if ($t69 !== undefined) { await $.wset([$t65, $t66], "SQL", $t69, C); } }
    { const $t70 = await $.iset((await $.wv([$t65, $t66], "SQL", C, false)), [7], "and status=0 and trunc(respdatetime)=trunc(sysdate) "); if ($t70 !== undefined) { await $.wset([$t65, $t66], "SQL", $t70, C); } }
    await $.stmt($.wcall([$t65, $t66], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
