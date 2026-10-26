// Generated from SimCorpImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SimCorpImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "SimCorp_TLB", "StdVcl", "StdCtrls", "Mask", "ExtCtrls", "ComCtrls", "ToolWin", "ImgList", "DB", "OracleData", "Grids", "DBGrids", "Menus", "Oracle", "ComObj", "ComServ", "sboapiDataModuleImpl", "EditFormImpl"]);
  const C = [U];
  U.defClass("TSimCorp", "TActiveForm", {"imagelist1": {"name": "ImageList1", "type": "TImageList"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "filterpanel": {"name": "FilterPanel", "type": "TPanel"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "radiogrpcont": {"name": "RadioGrpCont", "type": "TRadioGroup"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "maingrid": {"name": "MainGrid", "type": "TDBGrid"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "label1": {"name": "Label1", "type": "TLabel"}, "editdat": {"name": "EditDat", "type": "TEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "editdebit_accno": {"name": "EditDebit_accno", "type": "TEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "editcredit_accno": {"name": "Editcredit_accno", "type": "TEdit"}, "label4": {"name": "Label4", "type": "TLabel"}, "edituniqueno": {"name": "Edituniqueno", "type": "TEdit"}, "label5": {"name": "Label5", "type": "TLabel"}, "editsecurityid": {"name": "Editsecurityid", "type": "TEdit"}, "oraclepackage1": {"name": "OraclePackage1", "type": "TOraclePackage"}, "hamsnse1": {"name": "Hamsnse1", "type": "TMenuItem"}, "fevents": {"name": "FEvents", "type": "ISimCorpEvents"}}, {});
  U.init(async () => {
    U.var_("SimCorp", null, "TSimCorp");
  });
  U.method("TSimCorp", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TSimCorp", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "SimCorp", Self);
  await $.set(C, "EditForm", (await $.mcall((await $.v(C, "TEditForm")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "EditForm")), "OracleDataSet1")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSimCorp", "ActnSearchExecute", async function ActnSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t1 = L0["sender"];
    await $.wset([$t1], "SearchField", (await $.wcall([$t1], "copy", [(await $.wv([$t1], "Name", C, false)), 5, (await $.wcall([$t1], "length", [(await $.wv([$t1], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t2 = (await $.wv([$t1], "OracleDataSet1", C, false));
      { const $t3 = await $.iset((await $.wv([$t1, $t2], "SQL", C, false)), [2], (":pSearch")); if ($t3 !== undefined) { await $.wset([$t1, $t2], "SQL", $t3, C); } }
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["pSearch", $.add($.add($.add($.add(" and lower(", (await $.wv([$t1, $t2], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false))), ") = '"), (await $.wcall([$t1, $t2], "LowerCase", [(await $.wv([$t1, $t2], "Text", C, false))], C))), "'")], C)));
      if ($.truthy($.eq((await $.wcall([$t1, $t2], "Trim", [(await $.wv([$t1, $t2], "Text", C, false))], C)), ""))) {
        await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["pSearch", ""], C)));
      }
      await $.stmt($.wcall([$t1, $t2], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSimCorp", "EditDatExit", async function EditDatExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  await $.stmt((await $.mcall((await $.v(C, "OracleDataSet1")), "SetVariable", ["pSearch", ""])));
  await $.mcall((await $.v(C, "OracleDataSet1")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSimCorp", "EditDatKeyPress", async function EditDatKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "ActnSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TSimCorp", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  await $.inherited(Self, "TSimCorp", "EventSinkChanged", [L0["eventsink"]], arguments);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TSimCorp", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TSimCorp", "Initialize", null, arguments);
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
  U.method("TSimCorp", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_AlignDisabled", async function Get_AlignDisabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignDisabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_AlignWithMargins", async function Get_AlignWithMargins(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignWithMargins"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_BorderWidth", async function Get_BorderWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Integer", [(await $.v(C, "BorderWidth"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_DockSite", async function Get_DockSite(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DockSite"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_ExplicitHeight", async function Get_ExplicitHeight(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitHeight"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_ExplicitLeft", async function Get_ExplicitLeft(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitLeft"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_ExplicitTop", async function Get_ExplicitTop(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitTop"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_ExplicitWidth", async function Get_ExplicitWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitWidth"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_MouseInClient", async function Get_MouseInClient(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "MouseInClient"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_ParentCustomHint", async function Get_ParentCustomHint(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentCustomHint"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_ParentDoubleBuffered", async function Get_ParentDoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentDoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_PopupMode", async function Get_PopupMode(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PopupMode"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_ScreenSnap", async function Get_ScreenSnap(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ScreenSnap"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_SnapBuffer", async function Get_SnapBuffer(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "SnapBuffer"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_UseDockManager", async function Get_UseDockManager(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "UseDockManager"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSimCorp", "Hamsnse1Click", async function Hamsnse1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "MainGrid"));
    const $t5 = (await $.wv([$t4], "SelectedRows", C, false));
    const $t6 = (await $.mv((await $.wv([$t4, $t5], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t4, $t5, $t6], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t4, $t5, $t6], "First", [], C));
      while ($.truthy($.not((await $.wv([$t4, $t5, $t6], "Eof", C, false))))) {
        await $.wset([$t4, $t5, $t6], "CurrentRowSelected", (await $.wv([$t4, $t5, $t6], "True", C, false)), C);
        await $.stmt($.wcall([$t4, $t5, $t6], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t4, $t5, $t6], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSimCorp", "MainGridCellClick", async function MainGridCellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mset((await $.v(C, "MainGrid")), "Options", $.sub((await $.mv((await $.v(C, "MainGrid")), "Options")), [(await $.v(C, "dgRowSelect"))]));
  await $.mset((await $.v(C, "MainGrid")), "Options", $.add((await $.mv((await $.v(C, "MainGrid")), "Options")), [(await $.v(C, "dgEditing"))]));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TSimCorp", "MainGridDblClick", async function MainGridDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "EditForm")), "CMSearchEditLoacAccs")), "Text", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["debit_accno"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "EditForm")), "CMSearchEdit1")), "Text", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["credit_accno"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "EditForm")), "CurrencyEdit1")), "Value", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["debit_ammount"])), "AsFloat")));
  await $.mset((await $.mv((await $.v(C, "EditForm")), "CurrencyEdit2")), "Value", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["credit_ammount"])), "AsFloat")));
  await $.mset((await $.mv((await $.v(C, "EditForm")), "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["dat"])), "AsDateTime")));
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["typ"])), "AsInteger")), 0))) {
    await $.mset((await $.mv((await $.v(C, "EditForm")), "CurrencyEdit3")), "Value", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["amount_pc"])), "AsFloat")));
  } else {
    await $.mset((await $.mv((await $.v(C, "EditForm")), "CurrencyEdit3")), "Value", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["lammount"])), "AsFloat")));
  }
  await $.mset((await $.mv((await $.v(C, "EditForm")), "Edit1")), "Text", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["description"])), "AsString")));
  await $.mcall((await $.mv((await $.v(C, "MainGrid")), "SelectedRows")), "Clear", []);
  await $.mset((await $.v(C, "MainGrid")), "Options", $.add((await $.mv((await $.v(C, "MainGrid")), "Options")), [(await $.v(C, "dgRowSelect"))]));
  await $.mcall((await $.v(C, "EditForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSimCorp", "MainGridDrawColumnCell", async function MainGridDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t7 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t7], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t8 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t7], "DataSource", C, false)), "DataSet")), "FieldByName", ["Status"])), "AsInteger"));
        if ($.eq($t8, 0)) {
          await $.wset([$t7], "ImageIndex", 7, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t8, 1)) {
          await $.wset([$t7], "ImageIndex", 8, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t8, 2)) {
          await $.wset([$t7], "ImageIndex", 9, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t7], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t7], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t7], "ImageList", C, false)), "Draw", [(await $.wv([$t7], "Canvas", C, false)), (await $.mv((await $.wv([$t7], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t7], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t7], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t7], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t7], "DefaultDrawColumnCell", [(await $.wv([$t7], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t7], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t7], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t7], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TSimCorp", "MainGridTitleClick", async function MainGridTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy((await $.or_(((await $.mv((await $.mv((await $.mv((await $.v(C, "MainGrid")), "DataSource")), "DataSet")), "IsEmpty"))), async () => ($.eq((await $.mv(L0["column"], "FieldName")), (await $.v(C, "EmptyStr")))))))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t9 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "MainGrid")), "DataSource")), "DataSet"))]));
    try {
      await $.stmt((await $.wcall([$t9], "SetVariable", ["Title", (await $.wv([$t9], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t9], "Refresh", [], C));
    } finally {
      await $.mset((await $.wv([$t9], "Screen", C, false)), "Cursor", (await $.wv([$t9], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TSimCorp", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TSimCorp", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSimCorp", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSimCorp", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSimCorp", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSimCorp", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSimCorp", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSimCorp", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TSimCorp", "MouseEnterEvent", async function MouseEnterEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseEnter", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSimCorp", "MouseLeaveEvent", async function MouseLeaveEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseLeave", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSimCorp", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSimCorp", "RadioGrpContClick", async function RadioGrpContClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.v(C, "OracleDataSet1"));
    if ($.truthy($.eq((await $.mv((await $.wv([$t10], "RadioGrpCont", C, false)), "ItemIndex")), 1))) {
      await $.stmt($.wcall([$t10], "Close", [], C));
      { const $t11 = await $.iset((await $.wv([$t10], "SQL", C, false)), [1], ""); if ($t11 !== undefined) { await $.wset([$t10], "SQL", $t11, C); } }
      { const $t12 = await $.iset((await $.wv([$t10], "SQL", C, false)), [1], " and typ=0"); if ($t12 !== undefined) { await $.wset([$t10], "SQL", $t12, C); } }
      await $.stmt($.wcall([$t10], "Open", [], C));
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t10], "RadioGrpCont", C, false)), "ItemIndex")), 2))) {
      await $.stmt($.wcall([$t10], "Close", [], C));
      { const $t13 = await $.iset((await $.wv([$t10], "SQL", C, false)), [1], ""); if ($t13 !== undefined) { await $.wset([$t10], "SQL", $t13, C); } }
      { const $t14 = await $.iset((await $.wv([$t10], "SQL", C, false)), [1], " and typ=1"); if ($t14 !== undefined) { await $.wset([$t10], "SQL", $t14, C); } }
      await $.stmt($.wcall([$t10], "Open", [], C));
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t10], "RadioGrpCont", C, false)), "ItemIndex")), 0))) {
      await $.stmt($.wcall([$t10], "Close", [], C));
      { const $t15 = await $.iset((await $.wv([$t10], "SQL", C, false)), [1], ""); if ($t15 !== undefined) { await $.wset([$t10], "SQL", $t15, C); } }
      await $.stmt($.wcall([$t10], "Open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSimCorp", "Set_AlignWithMargins", async function Set_AlignWithMargins(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AlignWithMargins", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSimCorp", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSimCorp", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSimCorp", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TSimCorp", "Set_BorderWidth", async function Set_BorderWidth(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "BorderWidth", (await $.call(C, "TBorderWidth", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TSimCorp", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TSimCorp", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TSimCorp", "Set_DockSite", async function Set_DockSite(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DockSite", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSimCorp", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSimCorp", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSimCorp", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSimCorp", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TSimCorp", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "string", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TSimCorp", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSimCorp", "Set_ParentCustomHint", async function Set_ParentCustomHint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentCustomHint", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSimCorp", "Set_ParentDoubleBuffered", async function Set_ParentDoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentDoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSimCorp", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TSimCorp", "Set_PopupMode", async function Set_PopupMode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PopupMode", (await $.call(C, "TPopupMode", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPopupMode"]});
  U.method("TSimCorp", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TSimCorp", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSimCorp", "Set_ScreenSnap", async function Set_ScreenSnap(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ScreenSnap", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSimCorp", "Set_SnapBuffer", async function Set_SnapBuffer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "SnapBuffer", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TSimCorp", "Set_UseDockManager", async function Set_UseDockManager(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "UseDockManager", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSimCorp", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSimCorp", "ExcuseMeUser", async function ExcuseMeUser(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"question": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["question"]);
  L0["result"] = $.eq((await $.call(C, "MessageDlg", [L0["question"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes")));
  return L0.result;
}, {"params": ["Question"], "kind": "function", "ptypes": ["String"]});
  U.method("TSimCorp", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "typ": 0, "id": 0, "status": 0, "i": 0, "selectedrowscnt": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rsconfirmforone"] = "%s  - № li əməliyyat %s. Əminsiniz?";
  L0["rsconfirmforall"] = "%d - sayda əməliyyat %s. Əminsiniz?";
  L0["rscalcpercent"] = "Günün sənədlərinə göndərləcək";
  {
    const $t16 = (await $.v(C, "MainGrid"));
    const $t17 = (await $.mv((await $.wv([$t16], "DataSource", C, false)), "DataSet"));
    await $.wset([$t16, $t17], "SelectedRowsCnt", (await $.mv((await $.wv([$t16, $t17], "SelectedRows", C, false)), "Count")), { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true });
    if ($.truthy($.gt((await $.wv([$t16, $t17], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1))) {
      if ($.truthy($.not((await $.wcall([$t16, $t17], "ExcuseMeUser", [(await $.wcall([$t16, $t17], "Format", [(await $.wv([$t16, $t17], "rsConfirmForAll", { get: async () => L0["rsconfirmforall"], set: async (v) => { L0["rsconfirmforall"] = v; }, local: true }, false)), [(await $.wv([$t16, $t17], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), (await $.wv([$t16, $t17], "rsCalcPercent", { get: async () => L0["rscalcpercent"], set: async (v) => { L0["rscalcpercent"] = v; }, local: true }, false))]], C))], C))))) {
        return L0.result;
      }
      await $.mcall(Self, "Update", []);
      { const $t18 = $.sub((await $.wv([$t16, $t17], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1);
        await $.wset([$t16, $t17], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t19 = true;
        for (;;) {
          if (!$t19) { await $.wset([$t16, $t17], "I", $.succ((await $.wv([$t16, $t17], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t19 = false;
          if (!($.ord((await $.wv([$t16, $t17], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t18))) break;
          await $.stmt((await $.wcall([$t16, $t17], "GotoBookmark", [(await $.wcall([$t16, $t17], "Pointer", [(await $.idx((await $.wv([$t16, $t17], "SelectedRows", C, false)), [(await $.wv([$t16, $t17], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t16, $t17], "ID", (await $.mv((await $.wcall([$t16, $t17], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
          await $.wset([$t16, $t17], "Status", (await $.mv((await $.wcall([$t16, $t17], "FieldByName", ["status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
          await $.wset([$t16, $t17], "typ", (await $.mv((await $.wcall([$t16, $t17], "FieldByName", ["typ"], C)), "AsInteger")), { get: async () => L0["typ"], set: async (v) => { L0["typ"] = v; }, local: true });
          if ($.truthy($.in_((await $.wv([$t16, $t17], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [0, 2]))) {
            if ($.truthy($.eq((await $.wv([$t16, $t17], "typ", { get: async () => L0["typ"], set: async (v) => { L0["typ"] = v; }, local: true }, false)), 1))) {
              await $.stmt((await $.mcall((await $.wv([$t16, $t17], "OraclePackage1", C, false)), "CallProcedure", ["Simcop_Faiz", ["p_id", (await $.wv([$t16, $t17], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))]])));
            } else {
              await $.stmt((await $.mcall((await $.wv([$t16, $t17], "OraclePackage1", C, false)), "CallProcedure", ["Simcop_Adi", ["p_id", (await $.wv([$t16, $t17], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))]])));
            }
          }
          await $.tick();
        }
      }
    } else {
      await $.wset([$t16, $t17], "ID", (await $.mv((await $.wcall([$t16, $t17], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
      await $.wset([$t16, $t17], "Status", (await $.mv((await $.wcall([$t16, $t17], "FieldByName", ["status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
      await $.wset([$t16, $t17], "typ", (await $.mv((await $.wcall([$t16, $t17], "FieldByName", ["typ"], C)), "AsInteger")), { get: async () => L0["typ"], set: async (v) => { L0["typ"] = v; }, local: true });
      if ($.truthy($.not((await $.wcall([$t16, $t17], "ExcuseMeUser", [(await $.wcall([$t16, $t17], "Format", [(await $.wv([$t16, $t17], "rsConfirmForOne", { get: async () => L0["rsconfirmforone"], set: async (v) => { L0["rsconfirmforone"] = v; }, local: true }, false)), [(await $.mv((await $.wcall([$t16, $t17], "FieldByName", ["uniqueno"], C)), "AsString")), (await $.wv([$t16, $t17], "rsCalcPercent", { get: async () => L0["rscalcpercent"], set: async (v) => { L0["rscalcpercent"] = v; }, local: true }, false))]], C))], C))))) {
        return L0.result;
      }
      if ($.truthy($.in_((await $.wv([$t16, $t17], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [0, 2]))) {
        if ($.truthy($.eq((await $.wv([$t16, $t17], "typ", { get: async () => L0["typ"], set: async (v) => { L0["typ"] = v; }, local: true }, false)), 1))) {
          await $.stmt((await $.mcall((await $.wv([$t16, $t17], "OraclePackage1", C, false)), "CallProcedure", ["Simcop_Faiz", ["p_id", (await $.wv([$t16, $t17], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))]])));
        } else {
          await $.stmt((await $.mcall((await $.wv([$t16, $t17], "OraclePackage1", C, false)), "CallProcedure", ["Simcop_Adi", ["p_id", (await $.wv([$t16, $t17], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))]])));
        }
      }
    }
    await $.stmt($.wcall([$t16, $t17], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSimCorp", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSimCorp", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "typ": 0, "id": 0, "status": 0, "i": 0, "selectedrowscnt": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rsconfirmforone"] = "%s  - № li əməliyyat %s. Əminsiniz?";
  L0["rsconfirmforall"] = "%d - sayda əməliyyat %s. Əminsiniz?";
  L0["rscalcpercent"] = "Silnəcək";
  {
    const $t20 = (await $.v(C, "MainGrid"));
    const $t21 = (await $.mv((await $.wv([$t20], "DataSource", C, false)), "DataSet"));
    await $.wset([$t20, $t21], "SelectedRowsCnt", (await $.mv((await $.wv([$t20, $t21], "SelectedRows", C, false)), "Count")), { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true });
    if ($.truthy($.gt((await $.wv([$t20, $t21], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1))) {
      if ($.truthy($.not((await $.wcall([$t20, $t21], "ExcuseMeUser", [(await $.wcall([$t20, $t21], "Format", [(await $.wv([$t20, $t21], "rsConfirmForAll", { get: async () => L0["rsconfirmforall"], set: async (v) => { L0["rsconfirmforall"] = v; }, local: true }, false)), [(await $.wv([$t20, $t21], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), (await $.wv([$t20, $t21], "rsCalcPercent", { get: async () => L0["rscalcpercent"], set: async (v) => { L0["rscalcpercent"] = v; }, local: true }, false))]], C))], C))))) {
        return L0.result;
      }
      await $.mcall(Self, "Update", []);
      { const $t22 = $.sub((await $.wv([$t20, $t21], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1);
        await $.wset([$t20, $t21], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t23 = true;
        for (;;) {
          if (!$t23) { await $.wset([$t20, $t21], "I", $.succ((await $.wv([$t20, $t21], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t23 = false;
          if (!($.ord((await $.wv([$t20, $t21], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t22))) break;
          await $.stmt((await $.wcall([$t20, $t21], "GotoBookmark", [(await $.wcall([$t20, $t21], "Pointer", [(await $.idx((await $.wv([$t20, $t21], "SelectedRows", C, false)), [(await $.wv([$t20, $t21], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t20, $t21], "ID", (await $.mv((await $.wcall([$t20, $t21], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
          await $.wset([$t20, $t21], "Status", (await $.mv((await $.wcall([$t20, $t21], "FieldByName", ["status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
          await $.wset([$t20, $t21], "typ", (await $.mv((await $.wcall([$t20, $t21], "FieldByName", ["typ"], C)), "AsInteger")), { get: async () => L0["typ"], set: async (v) => { L0["typ"] = v; }, local: true });
          if ($.truthy($.in_((await $.wv([$t20, $t21], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [0, 2]))) {
            await $.stmt((await $.mcall((await $.wv([$t20, $t21], "OraclePackage1", C, false)), "CallProcedure", ["delete_arxive", ["p_id", (await $.mv((await $.mcall((await $.wv([$t20, $t21], "OracleDataSet1", C, false)), "FieldByName", ["ID"])), "AsInteger"))]])));
          }
          await $.tick();
        }
      }
    } else {
      await $.wset([$t20, $t21], "ID", (await $.mv((await $.wcall([$t20, $t21], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
      await $.wset([$t20, $t21], "Status", (await $.mv((await $.wcall([$t20, $t21], "FieldByName", ["status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
      await $.wset([$t20, $t21], "typ", (await $.mv((await $.wcall([$t20, $t21], "FieldByName", ["typ"], C)), "AsInteger")), { get: async () => L0["typ"], set: async (v) => { L0["typ"] = v; }, local: true });
      if ($.truthy($.not((await $.wcall([$t20, $t21], "ExcuseMeUser", [(await $.wcall([$t20, $t21], "Format", [(await $.wv([$t20, $t21], "rsConfirmForOne", { get: async () => L0["rsconfirmforone"], set: async (v) => { L0["rsconfirmforone"] = v; }, local: true }, false)), [(await $.mv((await $.wcall([$t20, $t21], "FieldByName", ["uniqueno"], C)), "AsString")), (await $.wv([$t20, $t21], "rsCalcPercent", { get: async () => L0["rscalcpercent"], set: async (v) => { L0["rscalcpercent"] = v; }, local: true }, false))]], C))], C))))) {
        return L0.result;
      }
      if ($.truthy($.in_((await $.wv([$t20, $t21], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [0, 2]))) {
        await $.stmt((await $.mcall((await $.wv([$t20, $t21], "OraclePackage1", C, false)), "CallProcedure", ["delete_arxive", ["p_id", (await $.mv((await $.mcall((await $.wv([$t20, $t21], "OracleDataSet1", C, false)), "FieldByName", ["ID"])), "AsInteger"))]])));
      }
    }
    await $.stmt($.wcall([$t20, $t21], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSimCorp", "ToolButton9Click", async function ToolButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FilterPanel")), "Visible", $.not((await $.mv((await $.v(C, "FilterPanel")), "Visible"))));
  await $.mset((await $.v(C, "ToolButton9")), "Down", (await $.mv((await $.v(C, "FilterPanel")), "Visible")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
