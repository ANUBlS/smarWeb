// Generated from ThomsonImpl1.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ThomsonImpl1", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "ThomsonProj1_TLB", "StdVcl", "Db", "OracleData", "Grids", "DBGrids", "ExtCtrls", "ExcelXP", "OleServer", "StdCtrls", "Oracle", "ImgList", "ComCtrls", "ToolWin", "XDBGrids", "ComObj", "ComServ", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TThomson", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "opendialog1": {"name": "OpenDialog1", "type": "TOpenDialog"}, "excelapplication1": {"name": "ExcelApplication1", "type": "TExcelApplication"}, "excelworksheet1": {"name": "ExcelWorksheet1", "type": "TExcelWorksheet"}, "excelworkbook1": {"name": "ExcelWorkbook1", "type": "TExcelWorkbook"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset3": {"name": "OracleDataSet3", "type": "TOracleDataSet"}, "oraclepackage1": {"name": "OraclePackage1", "type": "TOraclePackage"}, "oraclepackage2": {"name": "OraclePackage2", "type": "TOraclePackage"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "xdbgridthomson": {"name": "XDBGridThomson", "type": "TXDBGrid"}, "imagelist2": {"name": "ImageList2", "type": "TImageList"}, "oracledataset1hdate": {"name": "OracleDataSet1HDATE", "type": "TDateTimeField"}, "oracledataset1debitcurrency": {"name": "OracleDataSet1DEBITCURRENCY", "type": "TWideStringField"}, "oracledataset1debit": {"name": "OracleDataSet1DEBIT", "type": "TWideStringField"}, "oracledataset1creditcurrency": {"name": "OracleDataSet1CREDITCURRENCY", "type": "TWideStringField"}, "oracledataset1credit": {"name": "OracleDataSet1CREDIT", "type": "TWideStringField"}, "oracledataset1debitamount": {"name": "OracleDataSet1DEBITAMOUNT", "type": "TFloatField"}, "oracledataset1creditamount": {"name": "OracleDataSet1CREDITAMOUNT", "type": "TFloatField"}, "oracledataset1description": {"name": "OracleDataSet1DESCRIPTION", "type": "TWideStringField"}, "oracledataset1username": {"name": "OracleDataSet1USERNAME", "type": "TWideStringField"}, "oracledataset1status": {"name": "OracleDataSet1STATUS", "type": "TIntegerField"}, "oracledataset1commitusername": {"name": "OracleDataSet1COMMITUSERNAME", "type": "TWideStringField"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "fevents": {"name": "FEvents", "type": "IThomsonEvents"}}, {});
  U.init(async () => {
  });
  U.method("TThomson", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TThomson", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TThomson", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TThomson", "Initialize", null, arguments);
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
  U.method("TThomson", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TThomson", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TThomson", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TThomson", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TThomson", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TThomson", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TThomson", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TThomson", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TThomson", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TThomson", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TThomson", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TThomson", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TThomson", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TThomson", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TThomson", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TThomson", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TThomson", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TThomson", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TThomson", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TThomson", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TThomson", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Close", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TThomson", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TThomson", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TThomson", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TThomson", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TThomson", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TThomson", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TThomson", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TThomson", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TThomson", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TThomson", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TThomson", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TThomson", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TThomson", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TThomson", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TThomson", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TThomson", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TThomson", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TThomson", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TThomson", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TThomson", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TThomson", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TThomson", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TThomson", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TThomson", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "i": 0, "j": 0, "a": '', "val_name": '', "f": false, "say": 0, "k": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rootcell"] = 2;
  if ($.truthy($.not((await $.mv((await $.v(C, "OpenDialog1")), "Execute"))))) {
    return L0.result;
  }
  L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
  await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
  try {
    await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [(await $.mv((await $.v(C, "OpenDialog1")), "FileName"))])));
    L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [1])), "Worksheets")), ["Sheet1"]));
    L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
    await $.mcall((await $.v(C, "OracleDataSet2")), "Open", []);
    await $.mcall((await $.v(C, "OracleDataSet1")), "Refresh", []);
    {
      const $t1 = (await $.v(C, "OracleDataSet1"));
      { const $t2 = (await $.mv((await $.mv((await $.mv((await $.mv((await $.wv([$t1], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), "CurrentRegion")), "Rows")), "Count"));
        await $.wset([$t1], "i", 3, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t3 = true;
        for (;;) {
          if (!$t3) { await $.wset([$t1], "i", $.succ((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t3 = false;
          if (!($.ord((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t2))) break;
          await $.stmt($.wcall([$t1], "Insert", [], C));
          await $.mset((await $.wcall([$t1], "FieldByName", ["HDATE"], C)), "AsDateTime", (await $.idx((await $.mv((await $.wv([$t1], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells")), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 2])));
          await $.mset((await $.wcall([$t1], "FieldByName", ["DEBITCURRENCY"], C)), "AsString", (await $.idx((await $.mv((await $.wv([$t1], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells")), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 3])));
          await $.mset((await $.wcall([$t1], "FieldByName", ["DEBIT"], C)), "AsString", (await $.idx((await $.mv((await $.wv([$t1], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells")), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 4])));
          await $.mset((await $.wcall([$t1], "FieldByName", ["CREDITCURRENCY"], C)), "AsString", (await $.idx((await $.mv((await $.wv([$t1], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells")), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 5])));
          await $.mset((await $.wcall([$t1], "FieldByName", ["CREDIT"], C)), "AsString", (await $.idx((await $.mv((await $.wv([$t1], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells")), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 6])));
          await $.mset((await $.wcall([$t1], "FieldByName", ["DEBITAMOUNT"], C)), "AsFloat", (await $.idx((await $.mv((await $.wv([$t1], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells")), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 7])));
          await $.mset((await $.wcall([$t1], "FieldByName", ["CREDITAMOUNT"], C)), "AsFloat", (await $.idx((await $.mv((await $.wv([$t1], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells")), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 8])));
          await $.mset((await $.wcall([$t1], "FieldByName", ["DESCRIPTION"], C)), "AsString", (await $.idx((await $.mv((await $.wv([$t1], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells")), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 9])));
          await $.mset((await $.wcall([$t1], "FieldByName", ["USERNAME"], C)), "AsString", (await $.mv((await $.mcall((await $.wv([$t1], "OracleDataSet3", C, false)), "FieldByName", ["USER"])), "AsString")));
          await $.mset((await $.wcall([$t1], "FieldByName", ["STATUS"], C)), "AsInteger", 0);
          await $.stmt($.wcall([$t1], "Post", [], C));
          await $.stmt($.wcall([$t1], "Next", [], C));
          await $.tick();
        }
      }
    }
  } finally {
    await $.mcall((await $.v(C, "ExcelApplication1")), "Quit", []);
    await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
  }
  await $.mcall((await $.v(C, "OracleDataSet2")), "Close", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TThomson", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0, "i": 0, "j": 0, "status": 0, "f": false};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGridThomson")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.mcall((await $.v(C, "XDBGridThomson")), "SetFocus", []);
  await $.mset((await $.mv((await $.v(C, "XDBGridThomson")), "SelectedRows")), "CurrentRowSelected", $.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGridThomson")), "DataSource")), "DataSet")), "RecordCount")), 0));
  { const $t4 = $.sub((await $.mv((await $.mv((await $.v(C, "XDBGridThomson")), "SelectedRows")), "Count")), 1);
    L0["i"] = 0;
    let $t5 = true;
    for (;;) {
      if (!$t5) { L0["i"] = $.succ(L0["i"], 1); }
      $t5 = false;
      if (!($.ord(L0["i"]) <= $.ord($t4))) break;
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGridThomson")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "XDBGridThomson")), "SelectedRows")), "items")), [L0["i"]]))]))])));
      L0["id"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGridThomson")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"));
      { const $t6 = (await $.call(C, "MessageDlg", [(await $.call(C, "format", ["Əməliyyat təsdiqlənsinmi #%d ?", [L0["id"]]])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno")), (await $.v(C, "mbcancel")), (await $.v(C, "mball"))], 0]));
        if ($.eq($t6, (await $.v(C, "mryes")))) {
          L0["status"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGridThomson")), "DataSource")), "DataSet")), "fieldbyname", ["status"])), "asinteger"));
          if ($.truthy($.eq(L0["status"], 0))) {
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["sb_thomson", [L0["id"]]])));
            await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
            await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGridThomson")), "DataSource")), "DataSet")), "Refresh", []);
            if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "XDBGridThomson")), "SelectedRows")), "Count")), 1))) {
              await $.mcall((await $.mv((await $.v(C, "XDBGridThomson")), "SelectedRows")), "Clear", []);
            }
          }
        }
        else if ($.eq($t6, (await $.v(C, "mrno")))) {
          return L0.result;
        }
        else if ($.eq($t6, (await $.v(C, "mrcancel")))) {
          break;
        }
        else if ($.eq($t6, (await $.v(C, "mrall")))) {
          { const $t7 = (await $.call(C, "MessageDlg", [$.add((await $.call(C, "inttostr", [(await $.mv((await $.mv((await $.v(C, "XDBGridThomson")), "SelectedRows")), "Count"))])), " sayda əməliyyat təsdiqlənsinmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0]));
            if ($.eq($t7, (await $.v(C, "mryes")))) {
              { const $t8 = $.sub((await $.mv((await $.mv((await $.v(C, "XDBGridThomson")), "SelectedRows")), "Count")), 1);
                L0["j"] = 0;
                let $t9 = true;
                for (;;) {
                  if (!$t9) { L0["j"] = $.succ(L0["j"], 1); }
                  $t9 = false;
                  if (!($.ord(L0["j"]) <= $.ord($t8))) break;
                  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGridThomson")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "XDBGridThomson")), "SelectedRows")), "items")), [L0["j"]]))]))])));
                  L0["id"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGridThomson")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"));
                  L0["status"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGridThomson")), "DataSource")), "DataSet")), "fieldbyname", ["status"])), "asinteger"));
                  if ($.truthy($.eq(L0["status"], 0))) {
                    await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["sb_thomson", [L0["id"]]])));
                    await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
                  }
                  await $.tick();
                }
              }
              await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGridThomson")), "DataSource")), "DataSet")), "Refresh", []);
              await $.mcall((await $.mv((await $.v(C, "XDBGridThomson")), "SelectedRows")), "Clear", []);
              break;
            }
            else if ($.eq($t7, (await $.v(C, "mrno")))) {
              return L0.result;
            }
          }
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TThomson", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Close", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
