// Generated from mainUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("mainUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Variants", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "Accepted_portfel_TLB", "StdVcl", "Grids", "DBGrids", "StdCtrls", "ExtCtrls", "ImgList", "OleServer", "ExcelXP", "Menus", "Buttons", "DBCtrls", "ComCtrls", "ComObj", "ComServ", "sboapiDataModuleImpl", "Datamodunit", "NewFrm", "SBTranslateProc", "trasactions", "SettingsUnit", "PaymentsUnit", "PaymentreportUnit", "Unitselection", "CourtUNIT", "PropertyUnit", "Unittranarxiv", "EDİTORFORM"]);
  const C = [U];
  U.defClass("TAcceptedportfell", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "btnrefresh": {"name": "BtnRefresh", "type": "TButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "excelapplication1": {"name": "ExcelApplication1", "type": "TExcelApplication"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "mliyyat1": {"name": "mliyyat1", "type": "TMenuItem"}, "settbtn": {"name": "Settbtn", "type": "TButton"}, "button4": {"name": "Button4", "type": "TButton"}, "filtergroup": {"name": "filtergroup", "type": "TGroupBox"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "filterrefreshbutton": {"name": "filterrefreshbutton", "type": "TSpeedButton"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "button1": {"name": "Button1", "type": "TButton"}, "button5": {"name": "Button5", "type": "TButton"}, "button6": {"name": "Button6", "type": "TButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "searchgroup": {"name": "SearchGroup", "type": "TGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "editrownum": {"name": "EditRownum", "type": "TEdit"}, "editid": {"name": "EditId", "type": "TEdit"}, "editinnorpinn": {"name": "Editinnorpinn", "type": "TEdit"}, "editborrowername": {"name": "EditBorrowername", "type": "TEdit"}, "editakt1": {"name": "Editakt1", "type": "TEdit"}, "editakt2": {"name": "Editakt2", "type": "TEdit"}, "editbeneficiar": {"name": "Editbeneficiar", "type": "TEdit"}, "button7": {"name": "Button7", "type": "TButton"}, "hquqitdbirlr1": {"name": "HquqiTdbirlr1", "type": "TMenuItem"}, "mlak1": {"name": "mlak1", "type": "TMenuItem"}, "mliyyatarxiv1": {"name": "mliyyatArxiv1", "type": "TMenuItem"}, "maliyyaray1": {"name": "MaliyyAray1", "type": "TMenuItem"}, "redakt1": {"name": "Redakt1", "type": "TMenuItem"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "fevents": {"name": "FEvents", "type": "IAcceptedportfellEvents"}}, {});
  U.init(async () => {
  });
  U.method("TAcceptedportfell", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TAcceptedportfell", "Editakt1Change", async function Editakt1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "datamod")), "maincrprt"));
    await $.wset([$t1], "Filter", $.add($.add($.add("akt1 = '", (await $.mv((await $.wv([$t1], "Editakt1", C, false)), "Text"))), ("*")), "'"), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "Editakt2Change", async function Editakt2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.mv((await $.v(C, "datamod")), "maincrprt"));
    await $.wset([$t2], "Filter", $.add($.add($.add("akt2 = '", (await $.mv((await $.wv([$t2], "Editakt2", C, false)), "Text"))), ("*")), "'"), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "EditbeneficiarChange", async function EditbeneficiarChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.mv((await $.v(C, "datamod")), "maincrprt"));
    await $.wset([$t3], "Filter", $.add($.add($.add("beneficiar = '", (await $.mv((await $.wv([$t3], "Editbeneficiar", C, false)), "Text"))), ("*")), "'"), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "EditBorrowernameChange", async function EditBorrowernameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.mv((await $.v(C, "datamod")), "maincrprt"));
    await $.wset([$t4], "Filter", $.add($.add($.add("borrower_name = '", (await $.mv((await $.wv([$t4], "EditBorrowername", C, false)), "Text"))), ("*")), "'"), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "EditIdChange", async function EditIdChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.mv((await $.v(C, "datamod")), "maincrprt"));
    await $.wset([$t5], "Filter", $.add($.add($.add("cust_id = '", (await $.mv((await $.wv([$t5], "Editid", C, false)), "Text"))), ("*")), "'"), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "EditinnorpinnChange", async function EditinnorpinnChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.mv((await $.v(C, "datamod")), "maincrprt"));
    await $.wset([$t6], "Filter", $.add($.add($.add("innorpin = '", (await $.mv((await $.wv([$t6], "Editinnorpinn", C, false)), "Text"))), ("*")), "'"), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "EditRownumChange", async function EditRownumChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.mv((await $.v(C, "datamod")), "maincrprt"));
    await $.wset([$t7], "Filter", $.add($.add($.add("prtid = '", (await $.mv((await $.wv([$t7], "EditRownum", C, false)), "Text"))), ("*")), "'"), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  await $.inherited(Self, "TAcceptedportfell", "EventSinkChanged", [L0["eventsink"]], arguments);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TAcceptedportfell", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TAcceptedportfell", "Initialize", null, arguments);
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
  U.method("TAcceptedportfell", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_AlignDisabled", async function Get_AlignDisabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignDisabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_AlignWithMargins", async function Get_AlignWithMargins(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignWithMargins"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_BorderWidth", async function Get_BorderWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Integer", [(await $.v(C, "BorderWidth"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_DockSite", async function Get_DockSite(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DockSite"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_ExplicitHeight", async function Get_ExplicitHeight(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitHeight"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_ExplicitLeft", async function Get_ExplicitLeft(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitLeft"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_ExplicitTop", async function Get_ExplicitTop(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitTop"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_ExplicitWidth", async function Get_ExplicitWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitWidth"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_MouseInClient", async function Get_MouseInClient(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "MouseInClient"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_ParentCustomHint", async function Get_ParentCustomHint(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentCustomHint"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_ParentDoubleBuffered", async function Get_ParentDoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentDoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_PopupMode", async function Get_PopupMode(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PopupMode"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_ScreenSnap", async function Get_ScreenSnap(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ScreenSnap"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_SnapBuffer", async function Get_SnapBuffer(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "SnapBuffer"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_UseDockManager", async function Get_UseDockManager(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "UseDockManager"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAcceptedportfell", "HquqiTdbirlr1Click", async function HquqiTdbirlr1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["COURTEDIT"]])));
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "datamod"))]))))) {
    await $.set(C, "datamod", (await $.mcall((await $.v(C, "TDataMod")), "Create", [null])));
  }
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "CourtFrm"))]))))) {
    await $.set(C, "CourtFrm", (await $.mcall((await $.v(C, "TCourtFrm")), "Create", [null])));
  }
  await $.mcall((await $.v(C, "CourtFrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TAcceptedportfell", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateFEComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "datamod"))]))))) {
    await $.set(C, "datamod", (await $.mcall((await $.v(C, "TDataMod")), "Create", [null])));
  }
  await $.mset((await $.v(C, "DBGrid1")), "DataSource", (await $.mv((await $.v(C, "DataMod")), "maincrprt_datasrc")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "BtnRefreshClick", async function BtnRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "datamod"))]))))) {
    await $.set(C, "datamod", (await $.mcall((await $.v(C, "TDataMod")), "Create", [null])));
  }
  if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallIntegerFunction", ["checkadvancedobjectaccess_func", ["GROUPLOCAL"]])), 1))) {
    { const $t8 = await $.iset((await $.mv((await $.mv((await $.v(C, "datamod")), "maincrprt")), "sql")), [9], " and grp.id = 1"); if ($t8 !== undefined) { await $.mset((await $.mv((await $.v(C, "datamod")), "maincrprt")), "sql", $t8); } }
  } else {
    { const $t9 = await $.iset((await $.mv((await $.mv((await $.v(C, "datamod")), "maincrprt")), "sql")), [9], " and grp.id = 2"); if ($t9 !== undefined) { await $.mset((await $.mv((await $.v(C, "datamod")), "maincrprt")), "sql", $t9); } }
  }
  if ($.truthy((await $.and_(($.eq((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallIntegerFunction", ["checkadvancedobjectaccess_func", ["GROUPLOCAL"]])), 1)), async () => ($.eq((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallIntegerFunction", ["checkadvancedobjectaccess_func", ["GROUPFOREIGN"]])), 1)))))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox2")), "Checked")), false))) {
      { const $t10 = await $.iset((await $.mv((await $.mv((await $.v(C, "datamod")), "maincrprt")), "sql")), [9], ""); if ($t10 !== undefined) { await $.mset((await $.mv((await $.v(C, "datamod")), "maincrprt")), "sql", $t10); } }
    } else {
      { const $t11 = await $.iset((await $.mv((await $.mv((await $.v(C, "datamod")), "maincrprt")), "sql")), [9], $.add($.add(" and grp.id = '", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue"))]))), "'")); if ($t11 !== undefined) { await $.mset((await $.mv((await $.v(C, "datamod")), "maincrprt")), "sql", $t11); } }
    }
    await $.mset((await $.v(C, "EditRownum")), "Text", "");
    await $.mset((await $.v(C, "EditBorrowername")), "Text", "");
    await $.mset((await $.v(C, "Editbeneficiar")), "Text", "");
    await $.mset((await $.v(C, "EditId")), "Text", "");
    await $.mset((await $.v(C, "Editinnorpinn")), "Text", "");
    await $.mset((await $.v(C, "Editakt1")), "Text", "");
    await $.mset((await $.v(C, "Editakt2")), "text", "");
    await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "close", []);
    await $.mset((await $.mv((await $.v(C, "datamod")), "maincrprt")), "Filter", "");
    await $.mset((await $.mv((await $.v(C, "datamod")), "maincrprt")), "ReadBuffer", 30);
    await $.mset((await $.mv((await $.v(C, "datamod")), "maincrprt")), "QueryAllRecords", false);
    await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "open", []);
    await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "close", []);
    await $.mset((await $.mv((await $.v(C, "datamod")), "Main_court")), "Filter", "");
    await $.mset((await $.mv((await $.v(C, "datamod")), "Main_court")), "QueryAllRecords", false);
    await $.mset((await $.mv((await $.v(C, "datamod")), "Main_court")), "ReadBuffer", 30);
    await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "open", []);
  } else {
    await $.mset((await $.v(C, "EditRownum")), "Text", "");
    await $.mset((await $.v(C, "EditBorrowername")), "Text", "");
    await $.mset((await $.v(C, "Editbeneficiar")), "Text", "");
    await $.mset((await $.v(C, "EditId")), "Text", "");
    await $.mset((await $.v(C, "Editinnorpinn")), "Text", "");
    await $.mset((await $.v(C, "Editakt1")), "Text", "");
    await $.mset((await $.v(C, "Editakt2")), "text", "");
    await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "close", []);
    await $.mset((await $.mv((await $.v(C, "datamod")), "maincrprt")), "Filter", "");
    await $.mset((await $.mv((await $.v(C, "datamod")), "maincrprt")), "ReadBuffer", 30);
    await $.mset((await $.mv((await $.v(C, "datamod")), "maincrprt")), "QueryAllRecords", false);
    await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "open", []);
    await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "close", []);
    await $.mset((await $.mv((await $.v(C, "datamod")), "Main_court")), "Filter", "");
    await $.mset((await $.mv((await $.v(C, "datamod")), "Main_court")), "QueryAllRecords", false);
    await $.mset((await $.mv((await $.v(C, "datamod")), "Main_court")), "ReadBuffer", 30);
    await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "open", []);
  }
  await $.mset((await $.v(C, "memo1")), "Text", (await $.mv((await $.mv((await $.mv((await $.v(C, "datamod")), "maincrprt")), "SQL")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["PAYMENTLIST"]])));
  await $.set(C, "Payments", (await $.mcall((await $.v(C, "TPayments")), "create", [Self])));
  await $.mcall((await $.v(C, "Payments")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["ADDNEW"]])));
  await $.set(C, "Addingnew", (await $.mcall((await $.v(C, "TAddingnew")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "datamod")), "Valute")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "datamod")), "reducttypes")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "datamod")), "OracleDataSet1")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "datamod")), "OracleDataSet2")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "datamod")), "OracleDataSet3")), "Open", []);
  await $.mcall((await $.v(C, "Addingnew")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sheet": null, "sheets": null, "ay": '', "il": '', "il_s": '', "k": '', "s": '', "ss": '', "st": '', "sc": '', "sd": '', "sf": '', "l": '', "val": '', "v": null, "openedxlscnt": 0, "b": 0, "a": 0, "i": 0, "j": 0, "w": 0, "v_bdate": 0, "v_edate": 0, "row": 0, "esasborc": 0, "faizborc": 0, "cemiesas": 0, "cemifaiz": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
  L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
  await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
  await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))]))])), "PortfelABB_payment.xlsx")])));
  try {
    { const $t13 = 100;
      L0["openedxlscnt"] = 1;
      let $t14 = true;
      for (;;) {
        if (!$t14) { L0["openedxlscnt"] = $.succ(L0["openedxlscnt"], 1); }
        $t14 = false;
        if (!($.ord(L0["openedxlscnt"]) <= $.ord($t13))) break;
        L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [L0["openedxlscnt"]])), "Worksheets")), ["sheet1"]));
        await $.tick();
      }
    }
  } catch ($t12) {
    $.rethrowControl($t12);
    $.handled($t12);
  }
  L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
  L0["a"] = 0;
  L0["i"] = 0;
  await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "First", []);
  { const $t15 = $.sub((await $.mv((await $.mv((await $.v(C, "datamod")), "maincrprt")), "RecordCount")), 1);
    L0["a"] = 0;
    let $t16 = true;
    for (;;) {
      if (!$t16) { L0["a"] = $.succ(L0["a"], 1); }
      $t16 = false;
      if (!($.ord(L0["a"]) <= $.ord($t15))) break;
      L0["esasborc"] = 0;
      L0["faizborc"] = 0;
      L0["cemiesas"] = 0;
      L0["cemifaiz"] = 0;
      L0["val"] = "AZN";
      { const $t17 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rownum"])), "AsString"))); if ($t17 !== undefined) { await $.mset(L0["sheet"], "cells", $t17); } }
      { const $t18 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 2], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rownum"])), "AsString"))); if ($t18 !== undefined) { await $.mset(L0["sheet"], "cells", $t18); } }
      { const $t19 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["prtid"])), "AsString"))); if ($t19 !== undefined) { await $.mset(L0["sheet"], "cells", $t19); } }
      { const $t20 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["INNORPIN"])), "AsString"))); if ($t20 !== undefined) { await $.mset(L0["sheet"], "cells", $t20); } }
      { const $t21 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 5], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["types"])), "AsString"))); if ($t21 !== undefined) { await $.mset(L0["sheet"], "cells", $t21); } }
      { const $t22 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 6], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["borrower_name"])), "AsString"))); if ($t22 !== undefined) { await $.mset(L0["sheet"], "cells", $t22); } }
      { const $t23 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 7], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["akt1"])), "AsString"))); if ($t23 !== undefined) { await $.mset(L0["sheet"], "cells", $t23); } }
      { const $t24 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 8], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["akt1_date"])), "AsVariant"))); if ($t24 !== undefined) { await $.mset(L0["sheet"], "cells", $t24); } }
      { const $t25 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 9], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["akt2"])), "AsString"))); if ($t25 !== undefined) { await $.mset(L0["sheet"], "cells", $t25); } }
      { const $t26 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 10], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["akt2_date"])), "AsVariant"))); if ($t26 !== undefined) { await $.mset(L0["sheet"], "cells", $t26); } }
      { const $t27 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 11], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurabbesas"])), "AsFloat"))); if ($t27 !== undefined) { await $.mset(L0["sheet"], "cells", $t27); } }
      { const $t28 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 12], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurabbfaiz"])), "AsFloat"))); if ($t28 !== undefined) { await $.mset(L0["sheet"], "cells", $t28); } }
      { const $t29 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 13], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurabbesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurabbfaiz"])), "AsFloat")))); if ($t29 !== undefined) { await $.mset(L0["sheet"], "cells", $t29); } }
      { const $t30 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 14], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdabbesas"])), "AsFloat"))); if ($t30 !== undefined) { await $.mset(L0["sheet"], "cells", $t30); } }
      { const $t31 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 15], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdabbfaiz"])), "AsFloat"))); if ($t31 !== undefined) { await $.mset(L0["sheet"], "cells", $t31); } }
      { const $t32 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 16], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdabbesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdabbfaiz"])), "AsFloat")))); if ($t32 !== undefined) { await $.mset(L0["sheet"], "cells", $t32); } }
      { const $t33 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 17], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurabbesas"])), "AsFloat"))); if ($t33 !== undefined) { await $.mset(L0["sheet"], "cells", $t33); } }
      { const $t34 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 18], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurabbfaiz"])), "AsFloat"))); if ($t34 !== undefined) { await $.mset(L0["sheet"], "cells", $t34); } }
      { const $t35 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 19], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurabbesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurabbfaiz"])), "AsFloat")))); if ($t35 !== undefined) { await $.mset(L0["sheet"], "cells", $t35); } }
      { const $t36 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 20], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznabbesas"])), "AsFloat"))); if ($t36 !== undefined) { await $.mset(L0["sheet"], "cells", $t36); } }
      { const $t37 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 21], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznabbfaiz"])), "AsFloat"))); if ($t37 !== undefined) { await $.mset(L0["sheet"], "cells", $t37); } }
      { const $t38 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 22], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznabbesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznabbfaiz"])), "AsFloat")))); if ($t38 !== undefined) { await $.mset(L0["sheet"], "cells", $t38); } }
      if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznesas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznfaiz"])), "AsFloat")), 0)))))) {
        L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznesas"])), "AsFloat"));
        L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznfaiz"])), "AsFloat"));
        L0["val"] = "AZN";
      }
      if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdesas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdfaiz"])), "AsFloat")), 0)))))) {
        L0["esasborc"] = 0;
        L0["faizborc"] = 0;
        L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdesas"])), "AsFloat"));
        L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdfaiz"])), "AsFloat"));
        L0["val"] = "USD";
      }
      if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["euresas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurfaiz"])), "AsFloat")), 0)))))) {
        L0["esasborc"] = 0;
        L0["faizborc"] = 0;
        L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["euresas"])), "AsFloat"));
        L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurfaiz"])), "AsFloat"));
        L0["val"] = "EUR";
      }
      if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gbpesas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gbpfaiz"])), "AsFloat")), 0)))))) {
        L0["esasborc"] = 0;
        L0["faizborc"] = 0;
        L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gbpesas"])), "AsFloat"));
        L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gbpfaiz"])), "AsFloat"));
        L0["val"] = "GBP";
      }
      if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ruresas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurfaiz"])), "AsFloat")), 0)))))) {
        L0["esasborc"] = 0;
        L0["faizborc"] = 0;
        L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ruresas"])), "AsFloat"));
        L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurfaiz"])), "AsFloat"));
        L0["val"] = "RUR";
      }
      if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gelesas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gelfaiz"])), "AsFloat")), 0)))))) {
        L0["esasborc"] = 0;
        L0["faizborc"] = 0;
        L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gelesas"])), "AsFloat"));
        L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gelfaiz"])), "AsFloat"));
        L0["val"] = "GEL";
      }
      { const $t39 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 23], (await $.call(C, "UpperCase", [L0["val"]]))); if ($t39 !== undefined) { await $.mset(L0["sheet"], "cells", $t39); } }
      { const $t40 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 24], L0["esasborc"]); if ($t40 !== undefined) { await $.mset(L0["sheet"], "cells", $t40); } }
      { const $t41 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 25], L0["faizborc"]); if ($t41 !== undefined) { await $.mset(L0["sheet"], "cells", $t41); } }
      { const $t42 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 26], $.add(L0["esasborc"], L0["faizborc"])); if ($t42 !== undefined) { await $.mset(L0["sheet"], "cells", $t42); } }
      { const $t43 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 27], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["RESTRUKesas"])), "AsFloat"))); if ($t43 !== undefined) { await $.mset(L0["sheet"], "cells", $t43); } }
      { const $t44 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 28], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["RESTRUKfaiz"])), "AsFloat"))); if ($t44 !== undefined) { await $.mset(L0["sheet"], "cells", $t44); } }
      { const $t45 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 29], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["RESTRUKesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["RESTRUKfaiz"])), "AsFloat")))); if ($t45 !== undefined) { await $.mset(L0["sheet"], "cells", $t45); } }
      { const $t46 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 30], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["otmetarixi"])), "AsVariant"))); if ($t46 !== undefined) { await $.mset(L0["sheet"], "cells", $t46); } }
      { const $t47 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 31], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["OTURMEesas"])), "AsFloat"))); if ($t47 !== undefined) { await $.mset(L0["sheet"], "cells", $t47); } }
      { const $t48 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 32], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["OTURMEfaiz"])), "AsFloat"))); if ($t48 !== undefined) { await $.mset(L0["sheet"], "cells", $t48); } }
      { const $t49 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 33], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["OTURMEesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["OTURMEfaiz"])), "AsFloat")))); if ($t49 !== undefined) { await $.mset(L0["sheet"], "cells", $t49); } }
      { const $t50 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 34], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ODENISesas"])), "AsFloat"))); if ($t50 !== undefined) { await $.mset(L0["sheet"], "cells", $t50); } }
      { const $t51 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 35], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ODENISfaiz"])), "AsFloat"))); if ($t51 !== undefined) { await $.mset(L0["sheet"], "cells", $t51); } }
      { const $t52 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 36], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ODENISesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ODENISfaiz"])), "AsFloat")))); if ($t52 !== undefined) { await $.mset(L0["sheet"], "cells", $t52); } }
      { const $t53 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 37], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["Servishaqq"])), "AsFloat"))); if ($t53 !== undefined) { await $.mset(L0["sheet"], "cells", $t53); } }
      { const $t54 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 38], $.add((await $.call(C, "floattostr", [$.mul((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["xidmetfaizi"])), "AsFloat")), 100)])), "%")); if ($t54 !== undefined) { await $.mset(L0["sheet"], "cells", $t54); } }
      { const $t55 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 39], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ximethaqqi"])), "AsFloat"))); if ($t55 !== undefined) { await $.mset(L0["sheet"], "cells", $t55); } }
      { const $t56 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 40], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmasehmesas"])), "AsFloat"))); if ($t56 !== undefined) { await $.mset(L0["sheet"], "cells", $t56); } }
      { const $t57 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 41], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmasehmfaiz"])), "AsFloat"))); if ($t57 !== undefined) { await $.mset(L0["sheet"], "cells", $t57); } }
      { const $t58 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 42], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmasehmesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmasehmfaiz"])), "AsFloat")))); if ($t58 !== undefined) { await $.mset(L0["sheet"], "cells", $t58); } }
      { const $t59 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 43], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmemlakesas"])), "AsFloat"))); if ($t59 !== undefined) { await $.mset(L0["sheet"], "cells", $t59); } }
      { const $t60 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 44], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmemlakfaiz"])), "AsFloat"))); if ($t60 !== undefined) { await $.mset(L0["sheet"], "cells", $t60); } }
      { const $t61 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 45], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmemlakfaiz"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmemlakesas"])), "AsFloat")))); if ($t61 !== undefined) { await $.mset(L0["sheet"], "cells", $t61); } }
      { const $t62 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 46], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmguzestesas"])), "AsFloat"))); if ($t62 !== undefined) { await $.mset(L0["sheet"], "cells", $t62); } }
      { const $t63 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 47], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmguzestfaiz"])), "AsFloat"))); if ($t63 !== undefined) { await $.mset(L0["sheet"], "cells", $t63); } }
      { const $t64 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 48], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmguzestesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmguzestfaiz"])), "AsFloat")))); if ($t64 !== undefined) { await $.mset(L0["sheet"], "cells", $t64); } }
      { const $t65 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 49], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmqarantesas"])), "AsFloat"))); if ($t65 !== undefined) { await $.mset(L0["sheet"], "cells", $t65); } }
      { const $t66 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 50], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmqarantfaiz"])), "AsFloat"))); if ($t66 !== undefined) { await $.mset(L0["sheet"], "cells", $t66); } }
      { const $t67 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 51], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmqarantesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmqarantfaiz"])), "AsFloat")))); if ($t67 !== undefined) { await $.mset(L0["sheet"], "cells", $t67); } }
      { const $t68 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 52], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["askesas"])), "AsFloat"))); if ($t68 !== undefined) { await $.mset(L0["sheet"], "cells", $t68); } }
      { const $t69 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 53], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["askfaiz"])), "AsFloat"))); if ($t69 !== undefined) { await $.mset(L0["sheet"], "cells", $t69); } }
      { const $t70 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 54], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["askesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["askfaiz"])), "AsFloat")))); if ($t70 !== undefined) { await $.mset(L0["sheet"], "cells", $t70); } }
      { const $t71 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 55], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["emlak"])), "AsFloat"))); if ($t71 !== undefined) { await $.mset(L0["sheet"], "cells", $t71); } }
      L0["cemiesas"] = $.sub($.sub($.sub($.sub($.sub($.add($.add(L0["esasborc"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["RESTRUKesas"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["OTURMEesas"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmasehmesas"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmemlakesas"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmguzestesas"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmqarantesas"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ODENISesas"])), "AsFloat")));
      L0["cemifaiz"] = $.sub($.sub($.sub($.sub($.sub($.add($.add(L0["faizborc"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["RESTRUKfaiz"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["OTURMEfaiz"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmasehmfaiz"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmemlakfaiz"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmguzestfaiz"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmqarantfaiz"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ODENISfaiz"])), "AsFloat")));
      { const $t72 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 56], L0["cemiesas"]); if ($t72 !== undefined) { await $.mset(L0["sheet"], "cells", $t72); } }
      { const $t73 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 57], L0["cemifaiz"]); if ($t73 !== undefined) { await $.mset(L0["sheet"], "cells", $t73); } }
      { const $t74 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 58], $.add(L0["cemiesas"], L0["cemifaiz"])); if ($t74 !== undefined) { await $.mset(L0["sheet"], "cells", $t74); } }
      { const $t75 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 59], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["management"])), "AsString"))); if ($t75 !== undefined) { await $.mset(L0["sheet"], "cells", $t75); } }
      { const $t76 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 60], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["beneficiar"])), "AsString"))); if ($t76 !== undefined) { await $.mset(L0["sheet"], "cells", $t76); } }
      { const $t77 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 61], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["project"])), "AsString"))); if ($t77 !== undefined) { await $.mset(L0["sheet"], "cells", $t77); } }
      { const $t78 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 62], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["prject_country"])), "AsString"))); if ($t78 !== undefined) { await $.mset(L0["sheet"], "cells", $t78); } }
      { const $t79 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 63], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["group_type"])), "AsString"))); if ($t79 !== undefined) { await $.mset(L0["sheet"], "cells", $t79); } }
      { const $t80 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 64], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["name"])), "AsString"))); if ($t80 !== undefined) { await $.mset(L0["sheet"], "cells", $t80); } }
      { const $t81 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 65], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["abb_branch"])), "AsString"))); if ($t81 !== undefined) { await $.mset(L0["sheet"], "cells", $t81); } }
      { const $t82 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 66], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["legal_type"])), "AsString"))); if ($t82 !== undefined) { await $.mset(L0["sheet"], "cells", $t82); } }
      { const $t83 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 67], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["mtk"])), "AsString"))); if ($t83 !== undefined) { await $.mset(L0["sheet"], "cells", $t83); } }
      { const $t84 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 68], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["activity_area"])), "AsString"))); if ($t84 !== undefined) { await $.mset(L0["sheet"], "cells", $t84); } }
      { const $t85 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 69], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["capital_founder"])), "AsString"))); if ($t85 !== undefined) { await $.mset(L0["sheet"], "cells", $t85); } }
      { const $t86 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 70], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["founder"])), "AsString"))); if ($t86 !== undefined) { await $.mset(L0["sheet"], "cells", $t86); } }
      { const $t87 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 71], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["address"])), "AsString"))); if ($t87 !== undefined) { await $.mset(L0["sheet"], "cells", $t87); } }
      { const $t88 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 72], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["phone"])), "AsString"))); if ($t88 !== undefined) { await $.mset(L0["sheet"], "cells", $t88); } }
      { const $t89 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 73], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["types_1"])), "AsString"))); if ($t89 !== undefined) { await $.mset(L0["sheet"], "cells", $t89); } }
      { const $t90 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 74], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["valut"])), "AsString"))); if ($t90 !== undefined) { await $.mset(L0["sheet"], "cells", $t90); } }
      { const $t91 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 75], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ammount"])), "AsFloat"))); if ($t91 !== undefined) { await $.mset(L0["sheet"], "cells", $t91); } }
      { const $t92 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 76], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["descs"])), "AsString"))); if ($t92 !== undefined) { await $.mset(L0["sheet"], "cells", $t92); } }
      { const $t93 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 77], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["pricername"])), "AsString"))); if ($t93 !== undefined) { await $.mset(L0["sheet"], "cells", $t93); } }
      { const $t94 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 78], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["price_date"])), "AsString"))); if ($t94 !== undefined) { await $.mset(L0["sheet"], "cells", $t94); } }
      { const $t95 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 79], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["price"])), "AsFloat"))); if ($t95 !== undefined) { await $.mset(L0["sheet"], "cells", $t95); } }
      { const $t96 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 80], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["valut_1"])), "AsString"))); if ($t96 !== undefined) { await $.mset(L0["sheet"], "cells", $t96); } }
      { const $t97 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 81], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["pricername_"])), "AsString"))); if ($t97 !== undefined) { await $.mset(L0["sheet"], "cells", $t97); } }
      { const $t98 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 82], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["price_date_"])), "AsVariant"))); if ($t98 !== undefined) { await $.mset(L0["sheet"], "cells", $t98); } }
      { const $t99 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 83], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["price_"])), "AsFloat"))); if ($t99 !== undefined) { await $.mset(L0["sheet"], "cells", $t99); } }
      { const $t100 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 84], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["valut_"])), "AsString"))); if ($t100 !== undefined) { await $.mset(L0["sheet"], "cells", $t100); } }
      { const $t101 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 85], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["descs_1"])), "AsString"))); if ($t101 !== undefined) { await $.mset(L0["sheet"], "cells", $t101); } }
      { const $t102 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 86], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["court_date"])), "AsVariant"))); if ($t102 !== undefined) { await $.mset(L0["sheet"], "cells", $t102); } }
      { const $t103 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 87], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["court_dec"])), "AsString"))); if ($t103 !== undefined) { await $.mset(L0["sheet"], "cells", $t103); } }
      { const $t104 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 88], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["decission"])), "AsString"))); if ($t104 !== undefined) { await $.mset(L0["sheet"], "cells", $t104); } }
      { const $t105 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 89], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["dec_date"])), "AsVariant"))); if ($t105 !== undefined) { await $.mset(L0["sheet"], "cells", $t105); } }
      { const $t106 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 90], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["manages"])), "AsString"))); if ($t106 !== undefined) { await $.mset(L0["sheet"], "cells", $t106); } }
      { const $t107 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 91], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["laststat"])), "AsString"))); if ($t107 !== undefined) { await $.mset(L0["sheet"], "cells", $t107); } }
      L0["i"] = $.add(L0["i"], 1);
      await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "Next", []);
      await $.tick();
    }
  }
  { const $t108 = await $.iset((await $.mv((await $.v(C, "ExcelApplication1")), "Visible")), [0], true); if ($t108 !== undefined) { await $.mset((await $.v(C, "ExcelApplication1")), "Visible", $t108); } }
  await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "filtergroup")), "Visible", $.not((await $.mv((await $.v(C, "filtergroup")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "Button5Click", async function Button5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Payreport", (await $.mcall((await $.v(C, "TPayreport")), "create", [Self])));
  await $.mcall((await $.v(C, "Payreport")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "Button6Click", async function Button6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "SelectionUnit", (await $.mcall((await $.v(C, "TSelectionUnit")), "create", [Self])));
  await $.mcall((await $.v(C, "SelectionUnit")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "Button7Click", async function Button7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "SearchGroup")), "Visible", $.not((await $.mv((await $.v(C, "SearchGroup")), "Visible"))));
  await $.mset((await $.mv((await $.v(C, "datamod")), "maincrprt")), "Filtered", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "Button8Click", async function Button8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sheet": null, "sheets": null, "ay": '', "il": '', "il_s": '', "k": '', "s": '', "ss": '', "st": '', "sc": '', "sd": '', "sf": '', "l": '', "val": '', "v": null, "openedxlscnt": 0, "b": 0, "a": 0, "i": 0, "j": 0, "w": 0, "v_bdate": 0, "v_edate": 0, "row": 0, "esasborc": 0, "faizborc": 0, "cemiesas": 0, "cemifaiz": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
  L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
  await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
  await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))]))])), "PortfelABB_payment.xlsx")])));
  try {
    { const $t110 = 100;
      L0["openedxlscnt"] = 1;
      let $t111 = true;
      for (;;) {
        if (!$t111) { L0["openedxlscnt"] = $.succ(L0["openedxlscnt"], 1); }
        $t111 = false;
        if (!($.ord(L0["openedxlscnt"]) <= $.ord($t110))) break;
        L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [L0["openedxlscnt"]])), "Worksheets")), ["sheet1"]));
        await $.tick();
      }
    }
  } catch ($t109) {
    $.rethrowControl($t109);
    $.handled($t109);
  }
  L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
  L0["a"] = 0;
  L0["i"] = 0;
  await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "First", []);
  { const $t112 = $.sub((await $.mv((await $.mv((await $.v(C, "datamod")), "maincrprt")), "RecordCount")), 1);
    L0["a"] = 0;
    let $t113 = true;
    for (;;) {
      if (!$t113) { L0["a"] = $.succ(L0["a"], 1); }
      $t113 = false;
      if (!($.ord(L0["a"]) <= $.ord($t112))) break;
      L0["esasborc"] = 0;
      L0["faizborc"] = 0;
      L0["cemiesas"] = 0;
      L0["cemifaiz"] = 0;
      L0["val"] = "AZN";
      { const $t114 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rownum"])), "AsString"))); if ($t114 !== undefined) { await $.mset(L0["sheet"], "cells", $t114); } }
      { const $t115 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 2], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rownum"])), "AsString"))); if ($t115 !== undefined) { await $.mset(L0["sheet"], "cells", $t115); } }
      { const $t116 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["prtid"])), "AsString"))); if ($t116 !== undefined) { await $.mset(L0["sheet"], "cells", $t116); } }
      { const $t117 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["INNORPIN"])), "AsString"))); if ($t117 !== undefined) { await $.mset(L0["sheet"], "cells", $t117); } }
      { const $t118 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 5], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["types"])), "AsString"))); if ($t118 !== undefined) { await $.mset(L0["sheet"], "cells", $t118); } }
      { const $t119 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 6], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["borrower_name"])), "AsString"))); if ($t119 !== undefined) { await $.mset(L0["sheet"], "cells", $t119); } }
      { const $t120 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 7], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["akt1"])), "AsString"))); if ($t120 !== undefined) { await $.mset(L0["sheet"], "cells", $t120); } }
      { const $t121 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 8], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["akt1_date"])), "AsVariant"))); if ($t121 !== undefined) { await $.mset(L0["sheet"], "cells", $t121); } }
      { const $t122 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 9], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["akt2"])), "AsString"))); if ($t122 !== undefined) { await $.mset(L0["sheet"], "cells", $t122); } }
      { const $t123 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 10], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["akt2_date"])), "AsVariant"))); if ($t123 !== undefined) { await $.mset(L0["sheet"], "cells", $t123); } }
      { const $t124 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 11], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurabbesas"])), "AsFloat"))); if ($t124 !== undefined) { await $.mset(L0["sheet"], "cells", $t124); } }
      { const $t125 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 12], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurabbfaiz"])), "AsFloat"))); if ($t125 !== undefined) { await $.mset(L0["sheet"], "cells", $t125); } }
      { const $t126 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 13], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurabbesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurabbfaiz"])), "AsFloat")))); if ($t126 !== undefined) { await $.mset(L0["sheet"], "cells", $t126); } }
      { const $t127 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 14], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdabbesas"])), "AsFloat"))); if ($t127 !== undefined) { await $.mset(L0["sheet"], "cells", $t127); } }
      { const $t128 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 15], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdabbfaiz"])), "AsFloat"))); if ($t128 !== undefined) { await $.mset(L0["sheet"], "cells", $t128); } }
      { const $t129 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 16], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdabbesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdabbfaiz"])), "AsFloat")))); if ($t129 !== undefined) { await $.mset(L0["sheet"], "cells", $t129); } }
      { const $t130 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 17], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurabbesas"])), "AsFloat"))); if ($t130 !== undefined) { await $.mset(L0["sheet"], "cells", $t130); } }
      { const $t131 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 18], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurabbfaiz"])), "AsFloat"))); if ($t131 !== undefined) { await $.mset(L0["sheet"], "cells", $t131); } }
      { const $t132 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 19], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurabbesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurabbfaiz"])), "AsFloat")))); if ($t132 !== undefined) { await $.mset(L0["sheet"], "cells", $t132); } }
      { const $t133 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 20], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznabbesas"])), "AsFloat"))); if ($t133 !== undefined) { await $.mset(L0["sheet"], "cells", $t133); } }
      { const $t134 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 21], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznabbfaiz"])), "AsFloat"))); if ($t134 !== undefined) { await $.mset(L0["sheet"], "cells", $t134); } }
      { const $t135 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 22], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznabbesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznabbfaiz"])), "AsFloat")))); if ($t135 !== undefined) { await $.mset(L0["sheet"], "cells", $t135); } }
      if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznesas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznfaiz"])), "AsFloat")), 0)))))) {
        L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznesas"])), "AsFloat"));
        L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznfaiz"])), "AsFloat"));
        L0["val"] = "AZN";
      }
      if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdesas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdfaiz"])), "AsFloat")), 0)))))) {
        L0["esasborc"] = 0;
        L0["faizborc"] = 0;
        L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdesas"])), "AsFloat"));
        L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdfaiz"])), "AsFloat"));
        L0["val"] = "USD";
      }
      if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["euresas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurfaiz"])), "AsFloat")), 0)))))) {
        L0["esasborc"] = 0;
        L0["faizborc"] = 0;
        L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["euresas"])), "AsFloat"));
        L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurfaiz"])), "AsFloat"));
        L0["val"] = "EUR";
      }
      if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gbpesas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gbpfaiz"])), "AsFloat")), 0)))))) {
        L0["esasborc"] = 0;
        L0["faizborc"] = 0;
        L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gbpesas"])), "AsFloat"));
        L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gbpfaiz"])), "AsFloat"));
        L0["val"] = "GBP";
      }
      if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ruresas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurfaiz"])), "AsFloat")), 0)))))) {
        L0["esasborc"] = 0;
        L0["faizborc"] = 0;
        L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ruresas"])), "AsFloat"));
        L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurfaiz"])), "AsFloat"));
        L0["val"] = "RUR";
      }
      if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gelesas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gelfaiz"])), "AsFloat")), 0)))))) {
        L0["esasborc"] = 0;
        L0["faizborc"] = 0;
        L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gelesas"])), "AsFloat"));
        L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gelfaiz"])), "AsFloat"));
        L0["val"] = "GEL";
      }
      { const $t136 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 23], (await $.call(C, "UpperCase", [L0["val"]]))); if ($t136 !== undefined) { await $.mset(L0["sheet"], "cells", $t136); } }
      { const $t137 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 24], L0["esasborc"]); if ($t137 !== undefined) { await $.mset(L0["sheet"], "cells", $t137); } }
      { const $t138 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 25], L0["faizborc"]); if ($t138 !== undefined) { await $.mset(L0["sheet"], "cells", $t138); } }
      { const $t139 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 26], $.add(L0["esasborc"], L0["faizborc"])); if ($t139 !== undefined) { await $.mset(L0["sheet"], "cells", $t139); } }
      { const $t140 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 27], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["RESTRUKesas"])), "AsFloat"))); if ($t140 !== undefined) { await $.mset(L0["sheet"], "cells", $t140); } }
      { const $t141 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 28], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["RESTRUKfaiz"])), "AsFloat"))); if ($t141 !== undefined) { await $.mset(L0["sheet"], "cells", $t141); } }
      { const $t142 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 29], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["RESTRUKesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["RESTRUKfaiz"])), "AsFloat")))); if ($t142 !== undefined) { await $.mset(L0["sheet"], "cells", $t142); } }
      { const $t143 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 30], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["otmetarixi"])), "AsVariant"))); if ($t143 !== undefined) { await $.mset(L0["sheet"], "cells", $t143); } }
      { const $t144 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 31], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["OTURMEesas"])), "AsFloat"))); if ($t144 !== undefined) { await $.mset(L0["sheet"], "cells", $t144); } }
      { const $t145 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 32], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["OTURMEfaiz"])), "AsFloat"))); if ($t145 !== undefined) { await $.mset(L0["sheet"], "cells", $t145); } }
      { const $t146 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 33], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["OTURMEesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["OTURMEfaiz"])), "AsFloat")))); if ($t146 !== undefined) { await $.mset(L0["sheet"], "cells", $t146); } }
      { const $t147 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 34], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ODENISesas"])), "AsFloat"))); if ($t147 !== undefined) { await $.mset(L0["sheet"], "cells", $t147); } }
      { const $t148 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 35], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ODENISfaiz"])), "AsFloat"))); if ($t148 !== undefined) { await $.mset(L0["sheet"], "cells", $t148); } }
      { const $t149 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 36], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ODENISesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ODENISfaiz"])), "AsFloat")))); if ($t149 !== undefined) { await $.mset(L0["sheet"], "cells", $t149); } }
      { const $t150 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 37], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["Servishaqq"])), "AsFloat"))); if ($t150 !== undefined) { await $.mset(L0["sheet"], "cells", $t150); } }
      { const $t151 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 38], $.add((await $.call(C, "floattostr", [$.mul((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["xidmetfaizi"])), "AsFloat")), 100)])), "%")); if ($t151 !== undefined) { await $.mset(L0["sheet"], "cells", $t151); } }
      { const $t152 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 39], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ximethaqqi"])), "AsFloat"))); if ($t152 !== undefined) { await $.mset(L0["sheet"], "cells", $t152); } }
      { const $t153 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 40], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmasehmesas"])), "AsFloat"))); if ($t153 !== undefined) { await $.mset(L0["sheet"], "cells", $t153); } }
      { const $t154 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 41], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmasehmfaiz"])), "AsFloat"))); if ($t154 !== undefined) { await $.mset(L0["sheet"], "cells", $t154); } }
      { const $t155 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 42], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmasehmesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmasehmfaiz"])), "AsFloat")))); if ($t155 !== undefined) { await $.mset(L0["sheet"], "cells", $t155); } }
      { const $t156 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 43], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmemlakesas"])), "AsFloat"))); if ($t156 !== undefined) { await $.mset(L0["sheet"], "cells", $t156); } }
      { const $t157 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 44], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmemlakfaiz"])), "AsFloat"))); if ($t157 !== undefined) { await $.mset(L0["sheet"], "cells", $t157); } }
      { const $t158 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 45], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmemlakfaiz"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmemlakesas"])), "AsFloat")))); if ($t158 !== undefined) { await $.mset(L0["sheet"], "cells", $t158); } }
      { const $t159 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 46], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmguzestesas"])), "AsFloat"))); if ($t159 !== undefined) { await $.mset(L0["sheet"], "cells", $t159); } }
      { const $t160 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 47], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmguzestfaiz"])), "AsFloat"))); if ($t160 !== undefined) { await $.mset(L0["sheet"], "cells", $t160); } }
      { const $t161 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 48], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmguzestesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmguzestfaiz"])), "AsFloat")))); if ($t161 !== undefined) { await $.mset(L0["sheet"], "cells", $t161); } }
      { const $t162 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 49], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmqarantesas"])), "AsFloat"))); if ($t162 !== undefined) { await $.mset(L0["sheet"], "cells", $t162); } }
      { const $t163 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 50], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmqarantfaiz"])), "AsFloat"))); if ($t163 !== undefined) { await $.mset(L0["sheet"], "cells", $t163); } }
      { const $t164 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 51], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmqarantesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmqarantfaiz"])), "AsFloat")))); if ($t164 !== undefined) { await $.mset(L0["sheet"], "cells", $t164); } }
      { const $t165 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 52], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["askesas"])), "AsFloat"))); if ($t165 !== undefined) { await $.mset(L0["sheet"], "cells", $t165); } }
      { const $t166 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 53], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["askfaiz"])), "AsFloat"))); if ($t166 !== undefined) { await $.mset(L0["sheet"], "cells", $t166); } }
      { const $t167 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 54], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["askesas"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["askfaiz"])), "AsFloat")))); if ($t167 !== undefined) { await $.mset(L0["sheet"], "cells", $t167); } }
      { const $t168 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 55], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["emlak"])), "AsFloat"))); if ($t168 !== undefined) { await $.mset(L0["sheet"], "cells", $t168); } }
      L0["cemiesas"] = $.sub($.sub($.sub($.sub($.sub($.add($.add(L0["esasborc"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["RESTRUKesas"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["OTURMEesas"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmasehmesas"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmemlakesas"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmguzestesas"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmqarantesas"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ODENISesas"])), "AsFloat")));
      L0["cemifaiz"] = $.sub($.sub($.sub($.sub($.sub($.add($.add(L0["faizborc"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["RESTRUKfaiz"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["OTURMEfaiz"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmasehmfaiz"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmemlakfaiz"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmguzestfaiz"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["azalmqarantfaiz"])), "AsFloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ODENISfaiz"])), "AsFloat")));
      { const $t169 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 56], L0["cemiesas"]); if ($t169 !== undefined) { await $.mset(L0["sheet"], "cells", $t169); } }
      { const $t170 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 57], L0["cemifaiz"]); if ($t170 !== undefined) { await $.mset(L0["sheet"], "cells", $t170); } }
      { const $t171 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 58], $.add(L0["cemiesas"], L0["cemifaiz"])); if ($t171 !== undefined) { await $.mset(L0["sheet"], "cells", $t171); } }
      { const $t172 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 59], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["management"])), "AsString"))); if ($t172 !== undefined) { await $.mset(L0["sheet"], "cells", $t172); } }
      { const $t173 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 60], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["beneficiar"])), "AsString"))); if ($t173 !== undefined) { await $.mset(L0["sheet"], "cells", $t173); } }
      { const $t174 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 61], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["project"])), "AsString"))); if ($t174 !== undefined) { await $.mset(L0["sheet"], "cells", $t174); } }
      { const $t175 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 62], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["prject_country"])), "AsString"))); if ($t175 !== undefined) { await $.mset(L0["sheet"], "cells", $t175); } }
      { const $t176 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 63], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["group_type"])), "AsString"))); if ($t176 !== undefined) { await $.mset(L0["sheet"], "cells", $t176); } }
      { const $t177 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 64], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["name"])), "AsString"))); if ($t177 !== undefined) { await $.mset(L0["sheet"], "cells", $t177); } }
      { const $t178 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 65], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["abb_branch"])), "AsString"))); if ($t178 !== undefined) { await $.mset(L0["sheet"], "cells", $t178); } }
      { const $t179 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 66], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["legal_type"])), "AsString"))); if ($t179 !== undefined) { await $.mset(L0["sheet"], "cells", $t179); } }
      { const $t180 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 67], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["mtk"])), "AsString"))); if ($t180 !== undefined) { await $.mset(L0["sheet"], "cells", $t180); } }
      { const $t181 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 68], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["activity_area"])), "AsString"))); if ($t181 !== undefined) { await $.mset(L0["sheet"], "cells", $t181); } }
      { const $t182 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 69], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["capital_founder"])), "AsString"))); if ($t182 !== undefined) { await $.mset(L0["sheet"], "cells", $t182); } }
      { const $t183 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 70], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["founder"])), "AsString"))); if ($t183 !== undefined) { await $.mset(L0["sheet"], "cells", $t183); } }
      { const $t184 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 71], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["address"])), "AsString"))); if ($t184 !== undefined) { await $.mset(L0["sheet"], "cells", $t184); } }
      { const $t185 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 72], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["phone"])), "AsString"))); if ($t185 !== undefined) { await $.mset(L0["sheet"], "cells", $t185); } }
      { const $t186 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 73], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["types_1"])), "AsString"))); if ($t186 !== undefined) { await $.mset(L0["sheet"], "cells", $t186); } }
      { const $t187 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 74], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["valut"])), "AsString"))); if ($t187 !== undefined) { await $.mset(L0["sheet"], "cells", $t187); } }
      { const $t188 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 75], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ammount"])), "AsFloat"))); if ($t188 !== undefined) { await $.mset(L0["sheet"], "cells", $t188); } }
      { const $t189 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 76], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["descs"])), "AsString"))); if ($t189 !== undefined) { await $.mset(L0["sheet"], "cells", $t189); } }
      { const $t190 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 77], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["pricername"])), "AsString"))); if ($t190 !== undefined) { await $.mset(L0["sheet"], "cells", $t190); } }
      { const $t191 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 78], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["price_date"])), "AsString"))); if ($t191 !== undefined) { await $.mset(L0["sheet"], "cells", $t191); } }
      { const $t192 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 79], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["price"])), "AsFloat"))); if ($t192 !== undefined) { await $.mset(L0["sheet"], "cells", $t192); } }
      { const $t193 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 80], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["valut_1"])), "AsString"))); if ($t193 !== undefined) { await $.mset(L0["sheet"], "cells", $t193); } }
      { const $t194 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 81], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["pricername_"])), "AsString"))); if ($t194 !== undefined) { await $.mset(L0["sheet"], "cells", $t194); } }
      { const $t195 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 82], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["price_date_"])), "AsVariant"))); if ($t195 !== undefined) { await $.mset(L0["sheet"], "cells", $t195); } }
      { const $t196 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 83], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["price_"])), "AsFloat"))); if ($t196 !== undefined) { await $.mset(L0["sheet"], "cells", $t196); } }
      { const $t197 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 84], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["valut_"])), "AsString"))); if ($t197 !== undefined) { await $.mset(L0["sheet"], "cells", $t197); } }
      { const $t198 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 85], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["descs_1"])), "AsString"))); if ($t198 !== undefined) { await $.mset(L0["sheet"], "cells", $t198); } }
      { const $t199 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 86], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["court_date"])), "AsVariant"))); if ($t199 !== undefined) { await $.mset(L0["sheet"], "cells", $t199); } }
      { const $t200 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 87], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["court_dec"])), "AsString"))); if ($t200 !== undefined) { await $.mset(L0["sheet"], "cells", $t200); } }
      { const $t201 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 88], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["decission"])), "AsString"))); if ($t201 !== undefined) { await $.mset(L0["sheet"], "cells", $t201); } }
      { const $t202 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 89], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["dec_date"])), "AsVariant"))); if ($t202 !== undefined) { await $.mset(L0["sheet"], "cells", $t202); } }
      { const $t203 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 90], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["manages"])), "AsString"))); if ($t203 !== undefined) { await $.mset(L0["sheet"], "cells", $t203); } }
      { const $t204 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 91], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["laststat"])), "AsString"))); if ($t204 !== undefined) { await $.mset(L0["sheet"], "cells", $t204); } }
      L0["i"] = $.add(L0["i"], 1);
      await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "Next", []);
      await $.tick();
    }
  }
  { const $t205 = await $.iset((await $.mv((await $.v(C, "ExcelApplication1")), "Visible")), [0], true); if ($t205 !== undefined) { await $.mset((await $.v(C, "ExcelApplication1")), "Visible", $t205); } }
  await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "SettbtnClick", async function SettbtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "excelfile": null, "workbook": null, "worksheet": null};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SETTINGS"]])));
  await $.set(C, "SettingFrm", (await $.mcall((await $.v(C, "TSettingFrm")), "create", [Self])));
  await $.mcall((await $.v(C, "SettingFrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
    await $.mset((await $.v(C, "DBLookupComboBox1")), "Enabled", true);
    await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", 0);
  } else {
    { const $t206 = await $.iset((await $.mv((await $.mv((await $.v(C, "datamod")), "maincrprt")), "sql")), [8], ""); if ($t206 !== undefined) { await $.mset((await $.mv((await $.v(C, "datamod")), "maincrprt")), "sql", $t206); } }
    { const $t207 = await $.iset((await $.mv((await $.mv((await $.v(C, "datamod")), "Main_court")), "sql")), [8], ""); if ($t207 !== undefined) { await $.mset((await $.mv((await $.v(C, "datamod")), "Main_court")), "sql", $t207); } }
    await $.mset((await $.v(C, "DBLookupComboBox1")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", 0);
    await $.mcall((await $.v(C, "BtnRefresh")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "CheckBox2Click", async function CheckBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox2")), "Checked")))) {
    await $.mset((await $.v(C, "DBLookupComboBox2")), "Enabled", true);
    await $.mset((await $.v(C, "DBLookupComboBox2")), "KeyValue", 0);
  } else {
    { const $t208 = await $.iset((await $.mv((await $.mv((await $.v(C, "datamod")), "maincrprt")), "sql")), [9], ""); if ($t208 !== undefined) { await $.mset((await $.mv((await $.v(C, "datamod")), "maincrprt")), "sql", $t208); } }
    await $.mset((await $.v(C, "DBLookupComboBox2")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupComboBox2")), "KeyValue", 0);
    await $.mcall((await $.v(C, "BtnRefresh")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "DBGrid1KeyDown", async function DBGrid1KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_up"))))) {
    await $.mset((await $.v(C, "memo1")), "Visible", true);
  }
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_down"))))) {
    await $.mset((await $.v(C, "memo1")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TAcceptedportfell", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "DBLookupComboBox1CloseUp", async function DBLookupComboBox1CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t209 = (await $.mv((await $.v(C, "datamod")), "maincrprt"));
    { const $t210 = await $.iset((await $.wv([$t209], "sql", C, false)), [8], $.add($.add("and flt.id = '", (await $.wcall([$t209], "inttostr", [(await $.mv((await $.wv([$t209], "DBLookupComboBox1", C, false)), "KeyValue"))], C))), "'")); if ($t210 !== undefined) { await $.wset([$t209], "sql", $t210, C); } }
  }
  {
    const $t211 = (await $.mv((await $.v(C, "datamod")), "Main_court"));
    { const $t212 = await $.iset((await $.wv([$t211], "sql", C, false)), [8], $.add($.add("and flt.id = '", (await $.wcall([$t211], "inttostr", [(await $.mv((await $.wv([$t211], "DBLookupComboBox1", C, false)), "KeyValue"))], C))), "'")); if ($t212 !== undefined) { await $.wset([$t211], "sql", $t212, C); } }
  }
  await $.mcall((await $.v(C, "BtnRefresh")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "DBLookupComboBox2Click", async function DBLookupComboBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t213 = (await $.mv((await $.v(C, "datamod")), "maincrprt"));
    { const $t214 = await $.iset((await $.wv([$t213], "sql", C, false)), [9], $.add($.add(" and grp.id = '", (await $.wcall([$t213], "inttostr", [(await $.mv((await $.wv([$t213], "DBLookupComboBox2", C, false)), "KeyValue"))], C))), "'")); if ($t214 !== undefined) { await $.wset([$t213], "sql", $t214, C); } }
  }
  await $.mcall((await $.v(C, "BtnRefresh")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TAcceptedportfell", "MaliyyAray1Click", async function MaliyyAray1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sheet": null, "sheets": null, "ay": '', "il": '', "il_s": '', "k": '', "s": '', "ss": '', "st": '', "sc": '', "sd": '', "sf": '', "l": '', "val": '', "v": null, "openedxlscnt": 0, "b": 0, "z": 0, "p": 0, "a": 0, "m": 0, "n": 0, "i": 0, "j": 0, "w": 0, "v_bdate": 0, "v_edate": 0, "row": 0, "azalemlak": '', "azalguz": '', "azalsehm": '', "azalqaran": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["FINANCEREF"]])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "main_araryis")), "CloseAll", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "main_araryis")), "SetVariable", ["vid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["cust_id"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "main_araryis")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "arayislist_agg")), "CloseAll", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "arayislist_agg")), "SetVariable", ["vid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["cust_id"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "arayislist_agg")), "open", []);
  await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
  L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
  await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
  await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))]))])), "PortfelABB_Finance_ref.xlsx")])));
  try {
    { const $t216 = 100;
      L0["openedxlscnt"] = 1;
      let $t217 = true;
      for (;;) {
        if (!$t217) { L0["openedxlscnt"] = $.succ(L0["openedxlscnt"], 1); }
        $t217 = false;
        if (!($.ord(L0["openedxlscnt"]) <= $.ord($t216))) break;
        L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [L0["openedxlscnt"]])), "Worksheets")), ["sheet1"]));
        await $.tick();
      }
    }
  } catch ($t215) {
    $.rethrowControl($t215);
    $.handled($t215);
  }
  L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
  L0["a"] = 0;
  L0["i"] = 0;
  L0["m"] = 0;
  L0["w"] = 0;
  L0["n"] = 0;
  L0["z"] = 0;
  L0["p"] = 0;
  await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "First", []);
  L0["st"] = $.add($.add($.add($.add($.add($.add("Azərbaycan Respublikası Prezidentinin 15 iyul 2015-ci il tarixli 570 nömrəli Fərmanının icrası ilə bağlı ", " ”Azərbaycan Beynəlxalq Bankı” ASC ilə ”Aqrarkredit” QSC arasında imzalanmış "), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "arayislist_agg")), "FieldByName", ["akts"])), "AsString"))), " təhvil təslim aktı əsasında  "), "  ”Aqrarkredit QSC”-nin idarəetməsinə verimiş  "), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "arayislist_agg")), "FieldByName", ["BORROWNAME"])), "AsString"))), " üzrə borclar barədə maliyyə arayışı");
  { const $t218 = await $.iset((await $.mv(L0["sheet"], "Range")), ["A6", "K6"], L0["st"]); if ($t218 !== undefined) { await $.mset(L0["sheet"], "Range", $t218); } }
  { const $t219 = await $.iset((await $.mv(L0["sheet"], "cells")), [13, 11], (await $.v(C, "now"))); if ($t219 !== undefined) { await $.mset(L0["sheet"], "cells", $t219); } }
  { const $t220 = $.sub((await $.mv((await $.mv((await $.v(C, "datamod")), "main_araryis")), "RecordCount")), 1);
    L0["a"] = 0;
    let $t221 = true;
    for (;;) {
      if (!$t221) { L0["a"] = $.succ(L0["a"], 1); }
      $t221 = false;
      if (!($.ord(L0["a"]) <= $.ord($t220))) break;
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["ACCEPTED_VALUTE"])), "Asfloat")), 0))) {
        { const $t222 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(17, L0["i"]), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["nov"])), "AsString"))); if ($t222 !== undefined) { await $.mset(L0["sheet"], "cells", $t222); } }
        { const $t223 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(17, L0["i"]), 2], "AZN"); if ($t223 !== undefined) { await $.mset(L0["sheet"], "cells", $t223); } }
        { const $t224 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(17, L0["i"]), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["aznesas"])), "asfloat"))); if ($t224 !== undefined) { await $.mset(L0["sheet"], "cells", $t224); } }
        { const $t225 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(17, L0["i"]), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["aznfaiz"])), "asfloat"))); if ($t225 !== undefined) { await $.mset(L0["sheet"], "cells", $t225); } }
        { const $t226 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(17, L0["i"]), 5], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["aznesas"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["aznfaiz"])), "asfloat")))); if ($t226 !== undefined) { await $.mset(L0["sheet"], "cells", $t226); } }
        { const $t227 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(17, L0["i"]), 6], $.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesas"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesas"])), "asfloat")))); if ($t227 !== undefined) { await $.mset(L0["sheet"], "cells", $t227); } }
        { const $t228 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(17, L0["i"]), 7], $.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaiz"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaiz"])), "asfloat")))); if ($t228 !== undefined) { await $.mset(L0["sheet"], "cells", $t228); } }
        await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(17, L0["i"]), 8])), "Formula", $.add($.add($.add($.add("=Sum(F", (await $.call(C, "inttostr", [$.add(17, L0["i"])]))), ":G"), (await $.call(C, "inttostr", [$.add(17, L0["i"])]))), ")"));
        { const $t229 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(17, L0["i"]), 9], $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["aznesas"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesas"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesas"])), "asfloat")))))); if ($t229 !== undefined) { await $.mset(L0["sheet"], "cells", $t229); } }
        { const $t230 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(17, L0["i"]), 10], $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["aznfaiz"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaiz"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaiz"])), "asfloat")))))); if ($t230 !== undefined) { await $.mset(L0["sheet"], "cells", $t230); } }
        await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(17, L0["i"]), 11])), "Formula", $.add($.add($.add($.add("=Sum(I", (await $.call(C, "inttostr", [$.add(17, L0["i"])]))), ":J"), (await $.call(C, "inttostr", [$.add(17, L0["i"])]))), ")"));
        L0["i"] = $.add(L0["i"], 1);
        { const $t231 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(17, L0["i"]), 1], "Cəmi"); if ($t231 !== undefined) { await $.mset(L0["sheet"], "cells", $t231); } }
        { const $t232 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(17, L0["i"]), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["aznesascem"])), "asfloat"))); if ($t232 !== undefined) { await $.mset(L0["sheet"], "cells", $t232); } }
        { const $t233 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(17, L0["i"]), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["aznfaizcem"])), "asfloat"))); if ($t233 !== undefined) { await $.mset(L0["sheet"], "cells", $t233); } }
        await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(17, L0["i"]), 5])), "Formula", $.add($.add($.add($.add("=Sum(C", (await $.call(C, "inttostr", [$.add(17, L0["i"])]))), ":D"), (await $.call(C, "inttostr", [$.add(17, L0["i"])]))), ")"));
        { const $t234 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(17, L0["i"]), 6], $.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesasazncem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesascem"])), "asfloat")))); if ($t234 !== undefined) { await $.mset(L0["sheet"], "cells", $t234); } }
        { const $t235 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(17, L0["i"]), 7], $.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaizazncem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["AZALMEMLAKFAIZSCEM"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaizcem"])), "asfloat")))); if ($t235 !== undefined) { await $.mset(L0["sheet"], "cells", $t235); } }
        await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add(17, L0["i"]), 8])), "Formula", $.add($.add($.add($.add("=Sum(F", (await $.call(C, "inttostr", [$.add(17, L0["i"])]))), ":G"), (await $.call(C, "inttostr", [$.add(17, L0["i"])]))), ")"));
        { const $t236 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(17, L0["i"]), 9], $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["aznesascem"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesasazncem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesascem"])), "asfloat")))))); if ($t236 !== undefined) { await $.mset(L0["sheet"], "cells", $t236); } }
        { const $t237 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(17, L0["i"]), 10], $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["aznfaizcem"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaizazncem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["AZALMEMLAKFAIZSCEM"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaizcem"])), "asfloat")))))); if ($t237 !== undefined) { await $.mset(L0["sheet"], "cells", $t237); } }
        { const $t238 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(17, L0["i"]), 11], $.sub($.add($.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["aznesascem"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesasazncem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesascem"])), "asfloat"))))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["aznfaizcem"])), "asfloat"))), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaizazncem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["AZALMEMLAKFAIZSCEM"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaizcem"])), "asfloat")))))); if ($t238 !== undefined) { await $.mset(L0["sheet"], "cells", $t238); } }
        L0["m"] = 1;
        L0["w"] = 1;
        L0["n"] = 1;
        L0["z"] = 1;
        L0["p"] = 1;
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["ACCEPTED_VALUTE"])), "asfloat")), 1))) {
        L0["w"] = 1;
        L0["n"] = 1;
        L0["z"] = 1;
        L0["p"] = 1;
        { const $t239 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add(17, L0["i"]), L0["m"]), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["nov"])), "AsString"))); if ($t239 !== undefined) { await $.mset(L0["sheet"], "cells", $t239); } }
        { const $t240 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add(17, L0["i"]), L0["m"]), 2], "USD"); if ($t240 !== undefined) { await $.mset(L0["sheet"], "cells", $t240); } }
        { const $t241 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add(17, L0["i"]), L0["m"]), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["usdesas"])), "asfloat"))); if ($t241 !== undefined) { await $.mset(L0["sheet"], "cells", $t241); } }
        { const $t242 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add(17, L0["i"]), L0["m"]), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["usdfaiz"])), "asfloat"))); if ($t242 !== undefined) { await $.mset(L0["sheet"], "cells", $t242); } }
        { const $t243 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add(17, L0["i"]), L0["m"]), 5], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["usdesas"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["usdfaiz"])), "asfloat")))); if ($t243 !== undefined) { await $.mset(L0["sheet"], "cells", $t243); } }
        { const $t244 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add(17, L0["i"]), L0["m"]), 6], $.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesas"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesas"])), "asfloat")))); if ($t244 !== undefined) { await $.mset(L0["sheet"], "cells", $t244); } }
        { const $t245 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add(17, L0["i"]), L0["m"]), 7], $.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaiz"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaiz"])), "asfloat")))); if ($t245 !== undefined) { await $.mset(L0["sheet"], "cells", $t245); } }
        await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add($.add(17, L0["i"]), L0["m"]), 8])), "Formula", $.add($.add($.add($.add("=Sum(F", (await $.call(C, "inttostr", [$.add($.add(17, L0["i"]), L0["m"])]))), ":G"), (await $.call(C, "inttostr", [$.add($.add(17, L0["i"]), L0["m"])]))), ")"));
        { const $t246 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add(17, L0["i"]), L0["m"]), 9], $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["usdesas"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesas"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesas"])), "asfloat")))))); if ($t246 !== undefined) { await $.mset(L0["sheet"], "cells", $t246); } }
        { const $t247 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add(17, L0["i"]), L0["m"]), 10], $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["usdfaiz"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaiz"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaiz"])), "asfloat")))))); if ($t247 !== undefined) { await $.mset(L0["sheet"], "cells", $t247); } }
        await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add($.add(17, L0["i"]), L0["m"]), 11])), "Formula", $.add($.add($.add($.add("=Sum(I", (await $.call(C, "inttostr", [$.add($.add(17, L0["i"]), L0["m"])]))), ":J"), (await $.call(C, "inttostr", [$.add($.add(17, L0["i"]), L0["m"])]))), ")"));
        L0["m"] = $.add(L0["m"], 1);
        { const $t248 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add(17, L0["i"]), L0["m"]), 1], "Cəmi"); if ($t248 !== undefined) { await $.mset(L0["sheet"], "cells", $t248); } }
        { const $t249 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add(17, L0["i"]), L0["m"]), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["usdesascem"])), "asfloat"))); if ($t249 !== undefined) { await $.mset(L0["sheet"], "cells", $t249); } }
        { const $t250 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add(17, L0["i"]), L0["m"]), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["usdfaizcem"])), "asfloat"))); if ($t250 !== undefined) { await $.mset(L0["sheet"], "cells", $t250); } }
        { const $t251 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add(17, L0["i"]), L0["m"]), 5], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["usdfaizcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["usdesascem"])), "asfloat")))); if ($t251 !== undefined) { await $.mset(L0["sheet"], "cells", $t251); } }
        { const $t252 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add(17, L0["i"]), L0["m"]), 6], $.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesasusdcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesascem"])), "asfloat")))); if ($t252 !== undefined) { await $.mset(L0["sheet"], "cells", $t252); } }
        { const $t253 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add(17, L0["i"]), L0["m"]), 7], $.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaizusdcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["AZALMEMLAKFAIZSCEM"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaizcem"])), "asfloat")))); if ($t253 !== undefined) { await $.mset(L0["sheet"], "cells", $t253); } }
        await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add($.add(17, L0["i"]), L0["m"]), 8])), "Formula", $.add($.add($.add($.add("=Sum(F", (await $.call(C, "inttostr", [$.add($.add(17, L0["i"]), L0["m"])]))), ":G"), (await $.call(C, "inttostr", [$.add($.add(17, L0["i"]), L0["m"])]))), ")"));
        { const $t254 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add(17, L0["i"]), L0["m"]), 9], $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["usdesascem"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesasusdcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesascem"])), "asfloat")))))); if ($t254 !== undefined) { await $.mset(L0["sheet"], "cells", $t254); } }
        { const $t255 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add(17, L0["i"]), L0["m"]), 10], $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["usdfaizcem"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaizusdcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["AZALMEMLAKFAIZSCEM"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaizcem"])), "asfloat")))))); if ($t255 !== undefined) { await $.mset(L0["sheet"], "cells", $t255); } }
        { const $t256 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add(17, L0["i"]), L0["m"]), 11], $.sub($.add($.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["usdesascem"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesasusdcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesascem"])), "asfloat"))))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["usdfaizcem"])), "asfloat"))), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaizusdcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["AZALMEMLAKFAIZSCEM"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaizcem"])), "asfloat")))))); if ($t256 !== undefined) { await $.mset(L0["sheet"], "cells", $t256); } }
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["ACCEPTED_VALUTE"])), "asfloat")), 45))) {
        if ($.truthy($.eq(L0["m"], 1))) {
          L0["m"] = 0;
        }
        L0["n"] = 1;
        L0["z"] = 1;
        L0["p"] = 1;
        { const $t257 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["nov"])), "AsString"))); if ($t257 !== undefined) { await $.mset(L0["sheet"], "cells", $t257); } }
        { const $t258 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), 2], "EUR"); if ($t258 !== undefined) { await $.mset(L0["sheet"], "cells", $t258); } }
        { const $t259 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["euresas"])), "asfloat"))); if ($t259 !== undefined) { await $.mset(L0["sheet"], "cells", $t259); } }
        { const $t260 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["eurfaiz"])), "asfloat"))); if ($t260 !== undefined) { await $.mset(L0["sheet"], "cells", $t260); } }
        { const $t261 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), 5], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["euresas"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["eurfaiz"])), "asfloat")))); if ($t261 !== undefined) { await $.mset(L0["sheet"], "cells", $t261); } }
        { const $t262 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), 6], $.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesas"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesas"])), "asfloat")))); if ($t262 !== undefined) { await $.mset(L0["sheet"], "cells", $t262); } }
        { const $t263 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), 7], $.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaiz"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaiz"])), "asfloat")))); if ($t263 !== undefined) { await $.mset(L0["sheet"], "cells", $t263); } }
        await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), 8])), "Formula", $.add($.add($.add($.add("=Sum(F", (await $.call(C, "inttostr", [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"])]))), ":G"), (await $.call(C, "inttostr", [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"])]))), ")"));
        { const $t264 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), 9], $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["euresas"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesas"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesas"])), "asfloat")))))); if ($t264 !== undefined) { await $.mset(L0["sheet"], "cells", $t264); } }
        { const $t265 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), 10], $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["eurfaiz"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaiz"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaiz"])), "asfloat")))))); if ($t265 !== undefined) { await $.mset(L0["sheet"], "cells", $t265); } }
        await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), 11])), "Formula", $.add($.add($.add($.add("=Sum(I", (await $.call(C, "inttostr", [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"])]))), ":J"), (await $.call(C, "inttostr", [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"])]))), ")"));
        L0["w"] = $.add(L0["w"], 1);
        { const $t266 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), 1], "Cəmi"); if ($t266 !== undefined) { await $.mset(L0["sheet"], "cells", $t266); } }
        { const $t267 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["euresascem"])), "asfloat"))); if ($t267 !== undefined) { await $.mset(L0["sheet"], "cells", $t267); } }
        { const $t268 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["eurfaizcem"])), "asfloat"))); if ($t268 !== undefined) { await $.mset(L0["sheet"], "cells", $t268); } }
        { const $t269 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), 5], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["eurfaizcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["euresascem"])), "asfloat")))); if ($t269 !== undefined) { await $.mset(L0["sheet"], "cells", $t269); } }
        { const $t270 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), 6], $.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesaseurcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesascem"])), "asfloat")))); if ($t270 !== undefined) { await $.mset(L0["sheet"], "cells", $t270); } }
        { const $t271 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), 7], $.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaizeurcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["AZALMEMLAKFAIZSCEM"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaizcem"])), "asfloat")))); if ($t271 !== undefined) { await $.mset(L0["sheet"], "cells", $t271); } }
        await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), 8])), "Formula", $.add($.add($.add($.add("=Sum(F", (await $.call(C, "inttostr", [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"])]))), ":G"), (await $.call(C, "inttostr", [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"])]))), ")"));
        { const $t272 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), 9], $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["euresascem"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesaseurcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesascem"])), "asfloat")))))); if ($t272 !== undefined) { await $.mset(L0["sheet"], "cells", $t272); } }
        { const $t273 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), 10], $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["eurfaizcem"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaizeurcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["AZALMEMLAKFAIZSCEM"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaizcem"])), "asfloat")))))); if ($t273 !== undefined) { await $.mset(L0["sheet"], "cells", $t273); } }
        { const $t274 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), 11], $.sub($.add($.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["euresascem"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesaseurcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesascem"])), "asfloat"))))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["eurfaizcem"])), "asfloat"))), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaizeurcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["AZALMEMLAKFAIZSCEM"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaizcem"])), "asfloat")))))); if ($t274 !== undefined) { await $.mset(L0["sheet"], "cells", $t274); } }
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["ACCEPTED_VALUTE"])), "asfloat")), 48))) {
        if ($.truthy($.eq(L0["m"], 1))) {
          L0["m"] = 0;
        }
        if ($.truthy($.eq(L0["w"], 1))) {
          L0["w"] = 0;
        }
        L0["z"] = 1;
        L0["p"] = 1;
        { const $t275 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["nov"])), "AsString"))); if ($t275 !== undefined) { await $.mset(L0["sheet"], "cells", $t275); } }
        { const $t276 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), 2], "RUR"); if ($t276 !== undefined) { await $.mset(L0["sheet"], "cells", $t276); } }
        { const $t277 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["ruresas"])), "asfloat"))); if ($t277 !== undefined) { await $.mset(L0["sheet"], "cells", $t277); } }
        { const $t278 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["rurfaiz"])), "asfloat"))); if ($t278 !== undefined) { await $.mset(L0["sheet"], "cells", $t278); } }
        { const $t279 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), 5], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["ruresas"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["rurfaiz"])), "asfloat")))); if ($t279 !== undefined) { await $.mset(L0["sheet"], "cells", $t279); } }
        { const $t280 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), 6], $.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesas"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesas"])), "asfloat")))); if ($t280 !== undefined) { await $.mset(L0["sheet"], "cells", $t280); } }
        { const $t281 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), 7], $.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaiz"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaiz"])), "asfloat")))); if ($t281 !== undefined) { await $.mset(L0["sheet"], "cells", $t281); } }
        await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), 8])), "Formula", $.add($.add($.add($.add("=Sum(F", (await $.call(C, "inttostr", [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"])]))), ":G"), (await $.call(C, "inttostr", [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"])]))), ")"));
        { const $t282 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), 9], $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["ruresas"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesas"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesas"])), "asfloat")))))); if ($t282 !== undefined) { await $.mset(L0["sheet"], "cells", $t282); } }
        { const $t283 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), 10], $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["rurfaiz"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaiz"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaiz"])), "asfloat")))))); if ($t283 !== undefined) { await $.mset(L0["sheet"], "cells", $t283); } }
        await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), 11])), "Formula", $.add($.add($.add($.add("=Sum(I", (await $.call(C, "inttostr", [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"])]))), ":J"), (await $.call(C, "inttostr", [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"])]))), ")"));
        L0["n"] = $.add(L0["n"], 1);
        { const $t284 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), 1], "Cəmi"); if ($t284 !== undefined) { await $.mset(L0["sheet"], "cells", $t284); } }
        { const $t285 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["ruresascem"])), "asfloat"))); if ($t285 !== undefined) { await $.mset(L0["sheet"], "cells", $t285); } }
        { const $t286 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["rurfaizcem"])), "asfloat"))); if ($t286 !== undefined) { await $.mset(L0["sheet"], "cells", $t286); } }
        { const $t287 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), 5], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["eurfaizcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["ruresascem"])), "asfloat")))); if ($t287 !== undefined) { await $.mset(L0["sheet"], "cells", $t287); } }
        { const $t288 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["n"]), L0["w"]), 6], $.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesasrurcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesascem"])), "asfloat")))); if ($t288 !== undefined) { await $.mset(L0["sheet"], "cells", $t288); } }
        { const $t289 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), 7], $.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaizrurcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["AZALMEMLAKFAIZSCEM"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaizcem"])), "asfloat")))); if ($t289 !== undefined) { await $.mset(L0["sheet"], "cells", $t289); } }
        await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), 8])), "Formula", $.add($.add($.add($.add("=Sum(F", (await $.call(C, "inttostr", [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"])]))), ":G"), (await $.call(C, "inttostr", [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["n"]), L0["w"])]))), ")"));
        { const $t290 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), 9], $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["ruresascem"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesasrurcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesascem"])), "asfloat")))))); if ($t290 !== undefined) { await $.mset(L0["sheet"], "cells", $t290); } }
        { const $t291 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), 10], $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["rurfaizcem"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaizrurcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["AZALMEMLAKFAIZSCEM"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaizcem"])), "asfloat")))))); if ($t291 !== undefined) { await $.mset(L0["sheet"], "cells", $t291); } }
        { const $t292 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), 11], $.sub($.add($.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["ruresascem"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesasrurcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesascem"])), "asfloat"))))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["rurfaizcem"])), "asfloat"))), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaizrurcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["AZALMEMLAKFAIZSCEM"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaizcem"])), "asfloat")))))); if ($t292 !== undefined) { await $.mset(L0["sheet"], "cells", $t292); } }
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["ACCEPTED_VALUTE"])), "asfloat")), 475))) {
        if ($.truthy($.eq(L0["m"], 1))) {
          L0["m"] = 0;
        }
        if ($.truthy($.eq(L0["w"], 1))) {
          L0["w"] = 0;
        }
        if ($.truthy($.eq(L0["n"], 1))) {
          L0["n"] = 0;
        }
        L0["p"] = 1;
        { const $t293 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["nov"])), "AsString"))); if ($t293 !== undefined) { await $.mset(L0["sheet"], "cells", $t293); } }
        { const $t294 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), 2], "GEL"); if ($t294 !== undefined) { await $.mset(L0["sheet"], "cells", $t294); } }
        { const $t295 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gelesas"])), "asfloat"))); if ($t295 !== undefined) { await $.mset(L0["sheet"], "cells", $t295); } }
        { const $t296 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gelfaiz"])), "asfloat"))); if ($t296 !== undefined) { await $.mset(L0["sheet"], "cells", $t296); } }
        { const $t297 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), 5], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gelesas"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gelfaiz"])), "asfloat")))); if ($t297 !== undefined) { await $.mset(L0["sheet"], "cells", $t297); } }
        { const $t298 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), 6], $.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesas"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesas"])), "asfloat")))); if ($t298 !== undefined) { await $.mset(L0["sheet"], "cells", $t298); } }
        { const $t299 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), 7], $.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaiz"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaiz"])), "asfloat")))); if ($t299 !== undefined) { await $.mset(L0["sheet"], "cells", $t299); } }
        await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), 8])), "Formula", $.add($.add($.add($.add("=Sum(F", (await $.call(C, "inttostr", [$.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"])]))), ":G"), (await $.call(C, "inttostr", [$.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"])]))), ")"));
        { const $t300 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), 9], $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gelesas"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesas"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesas"])), "asfloat")))))); if ($t300 !== undefined) { await $.mset(L0["sheet"], "cells", $t300); } }
        { const $t301 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), 10], $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gelfaiz"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaiz"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaiz"])), "asfloat")))))); if ($t301 !== undefined) { await $.mset(L0["sheet"], "cells", $t301); } }
        await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), 11])), "Formula", $.add($.add($.add($.add("=Sum(I", (await $.call(C, "inttostr", [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"])]))), ":J"), (await $.call(C, "inttostr", [$.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"])]))), ")"));
        L0["z"] = $.add(L0["z"], 1);
        { const $t302 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), 1], "Cəmi"); if ($t302 !== undefined) { await $.mset(L0["sheet"], "cells", $t302); } }
        { const $t303 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gelesascem"])), "asfloat"))); if ($t303 !== undefined) { await $.mset(L0["sheet"], "cells", $t303); } }
        { const $t304 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gelfaizcem"])), "asfloat"))); if ($t304 !== undefined) { await $.mset(L0["sheet"], "cells", $t304); } }
        { const $t305 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), 5], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["eurfaizcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gelesascem"])), "asfloat")))); if ($t305 !== undefined) { await $.mset(L0["sheet"], "cells", $t305); } }
        { const $t306 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["n"]), L0["w"]), 6], $.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesasgelcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesascem"])), "asfloat")))); if ($t306 !== undefined) { await $.mset(L0["sheet"], "cells", $t306); } }
        { const $t307 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), 7], $.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaizgelcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["AZALMEMLAKFAIZSCEM"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaizcem"])), "asfloat")))); if ($t307 !== undefined) { await $.mset(L0["sheet"], "cells", $t307); } }
        await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), 8])), "Formula", $.add($.add($.add($.add("=Sum(F", (await $.call(C, "inttostr", [$.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"])]))), ":G"), (await $.call(C, "inttostr", [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["n"]), L0["w"])]))), ")"));
        { const $t308 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), 9], $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gelesascem"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesasgelcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesascem"])), "asfloat")))))); if ($t308 !== undefined) { await $.mset(L0["sheet"], "cells", $t308); } }
        { const $t309 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), 10], $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gelfaizcem"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaizgelcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["AZALMEMLAKFAIZSCEM"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaizcem"])), "asfloat")))))); if ($t309 !== undefined) { await $.mset(L0["sheet"], "cells", $t309); } }
        { const $t310 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), 11], $.sub($.add($.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gelesascem"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesasgelcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesascem"])), "asfloat"))))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gelfaizcem"])), "asfloat"))), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaizgelcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["AZALMEMLAKFAIZSCEM"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaizcem"])), "asfloat")))))); if ($t310 !== undefined) { await $.mset(L0["sheet"], "cells", $t310); } }
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["ACCEPTED_VALUTE"])), "asfloat")), 50))) {
        if ($.truthy($.eq(L0["m"], 1))) {
          L0["m"] = 0;
        }
        if ($.truthy($.eq(L0["w"], 1))) {
          L0["w"] = 0;
        }
        if ($.truthy($.eq(L0["n"], 1))) {
          L0["n"] = 0;
        }
        if ($.truthy($.eq(L0["z"], 1))) {
          L0["z"] = 0;
        }
        { const $t311 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"]), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["nov"])), "AsString"))); if ($t311 !== undefined) { await $.mset(L0["sheet"], "cells", $t311); } }
        { const $t312 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"]), 2], "GBP"); if ($t312 !== undefined) { await $.mset(L0["sheet"], "cells", $t312); } }
        { const $t313 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"]), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gbpesas"])), "asfloat"))); if ($t313 !== undefined) { await $.mset(L0["sheet"], "cells", $t313); } }
        { const $t314 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"]), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gbpfaiz"])), "asfloat"))); if ($t314 !== undefined) { await $.mset(L0["sheet"], "cells", $t314); } }
        { const $t315 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"]), 5], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gbpesas"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gbpfaiz"])), "asfloat")))); if ($t315 !== undefined) { await $.mset(L0["sheet"], "cells", $t315); } }
        { const $t316 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"]), 6], $.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesas"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesas"])), "asfloat")))); if ($t316 !== undefined) { await $.mset(L0["sheet"], "cells", $t316); } }
        { const $t317 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"]), 7], $.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaiz"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaiz"])), "asfloat")))); if ($t317 !== undefined) { await $.mset(L0["sheet"], "cells", $t317); } }
        await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"]), 8])), "Formula", $.add($.add($.add($.add("=Sum(F", (await $.call(C, "inttostr", [$.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"])]))), ":G"), (await $.call(C, "inttostr", [$.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"])]))), ")"));
        { const $t318 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"]), 9], $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gbpesas"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesas"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesas"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesas"])), "asfloat")))))); if ($t318 !== undefined) { await $.mset(L0["sheet"], "cells", $t318); } }
        { const $t319 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"]), 10], $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gbpfaiz"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaiz"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaiz"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaiz"])), "asfloat")))))); if ($t319 !== undefined) { await $.mset(L0["sheet"], "cells", $t319); } }
        await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"]), 11])), "Formula", $.add($.add($.add($.add("=Sum(I", (await $.call(C, "inttostr", [$.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"])]))), ":J"), (await $.call(C, "inttostr", [$.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"])]))), ")"));
        L0["p"] = $.add(L0["p"], 1);
        { const $t320 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"]), 1], "Cəmi"); if ($t320 !== undefined) { await $.mset(L0["sheet"], "cells", $t320); } }
        { const $t321 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"]), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gbpesascem"])), "asfloat"))); if ($t321 !== undefined) { await $.mset(L0["sheet"], "cells", $t321); } }
        { const $t322 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"]), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gbpfaizcem"])), "asfloat"))); if ($t322 !== undefined) { await $.mset(L0["sheet"], "cells", $t322); } }
        { const $t323 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"]), 5], $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gbpfaizcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gbpesascem"])), "asfloat")))); if ($t323 !== undefined) { await $.mset(L0["sheet"], "cells", $t323); } }
        { const $t324 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["n"]), L0["w"]), 6], $.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesasdbpcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesascem"])), "asfloat")))); if ($t324 !== undefined) { await $.mset(L0["sheet"], "cells", $t324); } }
        { const $t325 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"]), 7], $.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaizdbpcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["AZALMEMLAKFAIZSCEM"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaizcem"])), "asfloat")))); if ($t325 !== undefined) { await $.mset(L0["sheet"], "cells", $t325); } }
        await $.mset((await $.idx((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"]), 8])), "Formula", $.add($.add($.add($.add("=Sum(F", (await $.call(C, "inttostr", [$.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"])]))), ":G"), (await $.call(C, "inttostr", [$.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["n"]), L0["w"])]))), ")"));
        { const $t326 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"]), 9], $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gbpesascem"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesasdbpcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesascem"])), "asfloat")))))); if ($t326 !== undefined) { await $.mset(L0["sheet"], "cells", $t326); } }
        { const $t327 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"]), 10], $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gbpfaizcem"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaizdbpcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["AZALMEMLAKFAIZSCEM"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaizcem"])), "asfloat")))))); if ($t327 !== undefined) { await $.mset(L0["sheet"], "cells", $t327); } }
        { const $t328 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"]), 11], $.sub($.add($.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gbpesascem"])), "asfloat")), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesasdbpcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesascem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesascem"])), "asfloat"))))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["gbpfaizcem"])), "asfloat"))), ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaizdbpcem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["AZALMEMLAKFAIZSCEM"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaizcem"])), "asfloat"))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaizcem"])), "asfloat")))))); if ($t328 !== undefined) { await $.mset(L0["sheet"], "cells", $t328); } }
      }
      await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "Next", []);
      await $.tick();
    }
  }
  if ($.truthy($.eq(L0["m"], 1))) {
    L0["m"] = 0;
  }
  if ($.truthy($.eq(L0["w"], 1))) {
    L0["w"] = 0;
  }
  if ($.truthy($.eq(L0["n"], 1))) {
    L0["n"] = 0;
  }
  if ($.truthy($.eq(L0["z"], 1))) {
    L0["z"] = 0;
  }
  if ($.truthy($.eq(L0["p"], 1))) {
    L0["p"] = 0;
  }
  if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesasazncem"])), "asfloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaizazncem"])), "asfloat")), 0)))))) {
    { const $t329 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"]), 2), 2], "Qeyd"); if ($t329 !== undefined) { await $.mset(L0["sheet"], "cells", $t329); } }
    { const $t330 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"]), 2), 3], " \"Aqrarkredit” QSC tərəfindən borcun idarəetməyə götürüldükdən sonra azalmanın tərkibi aşağıdaki kimidir."); if ($t330 !== undefined) { await $.mset(L0["sheet"], "cells", $t330); } }
    { const $t331 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"]), 4), 3], $.add($.add($.add($.add($.add($.add("- Ödəniş hesabına: əsas borcdan ", (await $.call(C, "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesasazncem"])), "asfloat"))]))), " manat, faiz borcundan "), (await $.call(C, "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaizazncem"])), "asfloat"))]))), " cəmi borcdan "), (await $.call(C, "floattostr", [$.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisesasazncem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["odenisfaizazncem"])), "asfloat")))]))), " manat təşkil edir")); if ($t331 !== undefined) { await $.mset(L0["sheet"], "cells", $t331); } }
  }
  if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesascem"])), "asfloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["AZALMEMLAKFAIZSCEM"])), "asfloat")), 0)))))) {
    L0["azalemlak"] = $.add($.add($.add($.add($.add($.add($.add("Əmlak hesabına: əsas borcundan ", (await $.call(C, "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesascem"])), "asfloat"))]))), " manat, faiz borcundan "), (await $.call(C, "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["AZALMEMLAKFAIZSCEM"])), "asfloat"))]))), " manat, cəmi borcdan "), (await $.call(C, "floattostr", [$.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmemlakesascem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["AZALMEMLAKFAIZSCEM"])), "asfloat")))]))), " manat təşkil edir."), "\r\n");
  }
  if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesascem"])), "asfloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaizcem"])), "asfloat")), 0)))))) {
    L0["azalguz"] = $.add($.add($.add($.add($.add($.add($.add("Güzəşt hesabına: əsas borcundan ", (await $.call(C, "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesascem"])), "asfloat"))]))), " manat, faiz borcundan "), (await $.call(C, "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaizcem"])), "asfloat"))]))), " manat, cəmi borcdan "), (await $.call(C, "floattostr", [$.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestesascem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmguzestfaizcem"])), "asfloat")))]))), " manat təşkil edir."), "\r\n");
  }
  if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesascem"])), "asfloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaizcem"])), "asfloat")), 0)))))) {
    L0["azalsehm"] = $.add($.add($.add($.add($.add($.add($.add("Səhm hesabına: əsas borcundan ", (await $.call(C, "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesascem"])), "asfloat"))]))), " manat, faiz borcundan "), (await $.call(C, "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaizcem"])), "asfloat"))]))), " manat, cəmi borcdan "), (await $.call(C, "floattostr", [$.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmesascem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmasehmfaizcem"])), "asfloat")))]))), " manat təşkil edir."), "\r\n");
  }
  if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesascem"])), "asfloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaizcem"])), "asfloat")), 0)))))) {
    L0["azalqaran"] = $.add($.add($.add($.add($.add($.add($.add("Qarantiya hesabına: əsas borcundan ", (await $.call(C, "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesascem"])), "asfloat"))]))), " manat, faiz borcundan "), (await $.call(C, "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaizcem"])), "asfloat"))]))), " manat, cəmi borcdan "), (await $.call(C, "floattostr", [$.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantesascem"])), "asfloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "main_araryis")), "fieldbyname", ["azalmqarantfaizcem"])), "asfloat")))]))), " manat təşkil edir."), "\r\n");
  }
  if ($.truthy((await $.or_((await $.or_((await $.or_(($.ne(L0["azalemlak"], "")), async () => ($.ne(L0["azalguz"], "")))), async () => ($.ne(L0["azalsehm"], "")))), async () => ($.ne(L0["azalqaran"], "")))))) {
    { const $t332 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add($.add($.add($.add($.add($.add($.add(17, L0["i"]), L0["m"]), L0["w"]), L0["n"]), L0["z"]), L0["p"]), 6), 3], $.add($.add($.add($.add(" - BAİA tərəfindən edilmiş ", L0["azalemlak"]), L0["azalguz"]), L0["azalsehm"]), L0["azalqaran"])); if ($t332 !== undefined) { await $.mset(L0["sheet"], "cells", $t332); } }
  }
  await $.mset((await $.idx((await $.mv(L0["sheet"], "Range")), ["C17", "C100"])), "WrapText", false);
  { const $t333 = await $.iset((await $.mv((await $.v(C, "ExcelApplication1")), "Visible")), [0], true); if ($t333 !== undefined) { await $.mset((await $.v(C, "ExcelApplication1")), "Visible", $t333); } }
  await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "mlak1Click", async function mlak1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["PROPERTYEDIT"]])));
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "datamod"))]))))) {
    await $.set(C, "datamod", (await $.mcall((await $.v(C, "TDataMod")), "Create", [null])));
  }
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "Propertyfrm"))]))))) {
    await $.set(C, "Propertyfrm", (await $.mcall((await $.v(C, "TPropertyfrm")), "Create", [null])));
  }
  await $.mcall((await $.v(C, "Propertyfrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "mliyyat1Click", async function mliyyat1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["transactions"]])));
  await $.set(C, "Transacfrm", (await $.mcall((await $.v(C, "TTransacfrm")), "Create", [Self])));
  await $.mcall((await $.v(C, "Transacfrm")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "mliyyatArxiv1Click", async function mliyyatArxiv1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["Arxivtransaction"]])));
  await $.set(C, "ArxivTran", (await $.mcall((await $.v(C, "TArxivTran")), "Create", [Self])));
  await $.mcall((await $.v(C, "ArxivTran")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "MouseEnterEvent", async function MouseEnterEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseEnter", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "MouseLeaveEvent", async function MouseLeaveEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseLeave", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "Redakt1Click", async function Redakt1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "acc_val": 0, "esasborc": 0, "faizborc": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["EDITOR"]])));
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "Editform"))]))))) {
    await $.set(C, "Editform", (await $.mcall((await $.v(C, "TEditform")), "Create", [null])));
  }
  await $.mset((await $.mv((await $.v(C, "Editform")), "Branchedit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["branch"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "ABBMAINEDIT")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["aznabbesas"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "ABBPERCEDIT")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["aznabbfaiz"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "ABBMAINusd")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["usdabbesas"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "ABBPERCusd")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["usdabbfaiz"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "ABBMAINeur")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["eurabbesas"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "ABBPERCeur")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["eurabbfaiz"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "ABBMAINrub")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["rurabbesas"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "ABBPERCrub")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["rurabbfaiz"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "REDUCTIONMAINEDIT")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["AZALMASEHMESAS"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "REDUCTIONpercEDIT")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["AZALMASEHMFAIZ"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "REDUCTIONMAINprop")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["AZALMEMLAKESAS"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "REDUCTIONpercprop")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["AZALMEMLAKFAIZ"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "REDUCTIONMAINqarant")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["AZALMQARANTESAS"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "REDUCTIONpercqarant")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["AZALMQARANTFAIZ"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "REDUCTIONmainguz")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["AZALMGUZESTESAS"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "REDUCTIONpercguz")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["AZALMGUZESTFAIZ"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "RESTRUCTMAINEDIT")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["RESTRUKESAS"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "RESTRUCTpercEDIT")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["RESTRUKFAIZ"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "ASKSENDEDMNAINEDIT")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ASKESAS"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "ASKSENDEDpercEDIT")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ASKFAIZ"])), "AsVariant")));
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["isrestruct"])), "AsVariant")), "Y"))) {
    await $.mset((await $.mv((await $.v(C, "Editform")), "Isrestruct")), "Checked", true);
  } else {
    await $.mset((await $.mv((await $.v(C, "Editform")), "Isrestruct")), "Checked", false);
  }
  await $.mset((await $.mv((await $.v(C, "Editform")), "crednum")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["creditnumber"])), "AsVariant")));
  L0["acc_val"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["accepted_valute"])), "AsVariant"));
  if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznesas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznfaiz"])), "AsFloat")), 0)))))) {
    L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznesas"])), "AsFloat"));
    L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["aznfaiz"])), "AsFloat"));
    L0["acc_val"] = 0;
  }
  if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdesas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdfaiz"])), "AsFloat")), 0)))))) {
    L0["esasborc"] = 0;
    L0["faizborc"] = 0;
    L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdesas"])), "AsFloat"));
    L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["usdfaiz"])), "AsFloat"));
    L0["acc_val"] = 1;
  }
  if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["euresas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurfaiz"])), "AsFloat")), 0)))))) {
    L0["esasborc"] = 0;
    L0["faizborc"] = 0;
    L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["euresas"])), "AsFloat"));
    L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["eurfaiz"])), "AsFloat"));
    L0["acc_val"] = 45;
  }
  if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gbpesas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gbpfaiz"])), "AsFloat")), 0)))))) {
    L0["esasborc"] = 0;
    L0["faizborc"] = 0;
    L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gbpesas"])), "AsFloat"));
    L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gbpfaiz"])), "AsFloat"));
    L0["acc_val"] = 3;
  }
  if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ruresas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurfaiz"])), "AsFloat")), 0)))))) {
    L0["esasborc"] = 0;
    L0["faizborc"] = 0;
    L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["ruresas"])), "AsFloat"));
    L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["rurfaiz"])), "AsFloat"));
    L0["acc_val"] = 48;
  }
  if ($.truthy((await $.or_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gelesas"])), "AsFloat")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gelfaiz"])), "AsFloat")), 0)))))) {
    L0["esasborc"] = 0;
    L0["faizborc"] = 0;
    L0["esasborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gelesas"])), "AsFloat"));
    L0["faizborc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "fieldbyname", ["gelfaiz"])), "AsFloat"));
    L0["acc_val"] = 475;
  }
  await $.mset((await $.mv((await $.v(C, "Editform")), "ACCEPTEDMAINEDIT")), "Text", (await $.call(C, "floattostr", [L0["esasborc"]])));
  await $.mset((await $.mv((await $.v(C, "Editform")), "ACCEPTEDpercEDIT")), "Text", (await $.call(C, "floattostr", [L0["faizborc"]])));
  await $.mset((await $.mv((await $.v(C, "Editform")), "Acceprtedval")), "KeyValue", L0["acc_val"]);
  await $.mset((await $.mv((await $.v(C, "Editform")), "SENDEDMAINEDIT")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["OTURMEESAS"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "SENDEDpercEDIT")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["OTURMEFAIZ"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "DBDateTimeEditEh1")), "Value", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["OTMETARIXI"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "PAidmainEDIT")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ODENISESAS"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "PAidPERCEDit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ODENISFAIZ"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "servicecalcedit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["SERVISHAQQ"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "SERVICEamtedit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["XIMETHAQQI"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "SERVICEPERCENTEDITEDIT")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["XIDMETFAIZI"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "DBLookupComboBox1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["branch"])), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "custidedit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["cust_id"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "Editprtid")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["prtid"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "Editform")), "Emlakedit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["emlak"])), "AsString")));
  await $.mcall((await $.v(C, "Editform")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAcceptedportfell", "Set_AlignWithMargins", async function Set_AlignWithMargins(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AlignWithMargins", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAcceptedportfell", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAcceptedportfell", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAcceptedportfell", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TAcceptedportfell", "Set_BorderWidth", async function Set_BorderWidth(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "BorderWidth", (await $.call(C, "TBorderWidth", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TAcceptedportfell", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TAcceptedportfell", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TAcceptedportfell", "Set_DockSite", async function Set_DockSite(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DockSite", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAcceptedportfell", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAcceptedportfell", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAcceptedportfell", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAcceptedportfell", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TAcceptedportfell", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "string", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TAcceptedportfell", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAcceptedportfell", "Set_ParentCustomHint", async function Set_ParentCustomHint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentCustomHint", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAcceptedportfell", "Set_ParentDoubleBuffered", async function Set_ParentDoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentDoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAcceptedportfell", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TAcceptedportfell", "Set_PopupMode", async function Set_PopupMode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PopupMode", (await $.call(C, "TPopupMode", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPopupMode"]});
  U.method("TAcceptedportfell", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TAcceptedportfell", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAcceptedportfell", "Set_ScreenSnap", async function Set_ScreenSnap(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ScreenSnap", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAcceptedportfell", "Set_SnapBuffer", async function Set_SnapBuffer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "SnapBuffer", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TAcceptedportfell", "Set_UseDockManager", async function Set_UseDockManager(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "UseDockManager", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAcceptedportfell", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  return U;
}
