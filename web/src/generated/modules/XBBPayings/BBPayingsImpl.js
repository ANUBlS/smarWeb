// Generated from BBPayingsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("BBPayingsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ActiveX", "AxCtrls", "BBPayings_TLB", "StdVcl", "ComCtrls", "ToolWin", "ImgList", "Grids", "DBGrids", "ExtCtrls", "StdCtrls", "DBCtrls", "ExcelExporter", "CMExcelExport", "ComObj", "ComServ", "UnitDataModBBPayings", "UnitBBPayingAdd", "SBCore"]);
  const C = [U];
  U.defClass("TBBPayingsForm", "TActiveForm", {"toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "btnedit": {"name": "BtnEdit", "type": "TToolButton"}, "btndel": {"name": "BtnDel", "type": "TToolButton"}, "btnconfirm": {"name": "BtnConfirm", "type": "TToolButton"}, "btnrefresh": {"name": "BtnRefresh", "type": "TToolButton"}, "btnadd": {"name": "BtnAdd", "type": "TToolButton"}, "dbgridcontracts": {"name": "DBGridContracts", "type": "TDBGrid"}, "panelsettings": {"name": "PanelSettings", "type": "TPanel"}, "btnfilterpanel": {"name": "BtnFilterPanel", "type": "TToolButton"}, "gboxdate": {"name": "GBoxDate", "type": "TGroupBox"}, "dtpickbegin": {"name": "DTPickBegin", "type": "TDateTimePicker"}, "dtpickend": {"name": "DTPickend", "type": "TDateTimePicker"}, "gboxsrvtype": {"name": "GBoxSrvType", "type": "TGroupBox"}, "chboxsrvtype": {"name": "ChBoxSrvType", "type": "TCheckBox"}, "cboxsrvtype": {"name": "CBoxSrvType", "type": "TDBLookupComboBox"}, "btnexcel": {"name": "BtnExcel", "type": "TToolButton"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "gboxconfirmed": {"name": "GBoxConfirmed", "type": "TGroupBox"}, "chboxconfirmed": {"name": "ChBoxConfirmed", "type": "TCheckBox"}, "chboxnotconfirmed": {"name": "ChBoxNotConfirmed", "type": "TCheckBox"}, "fevents": {"name": "FEvents", "type": "IBBPayingsFormEvents"}}, {});
  U.init(async () => {
  });
  U.method("TBBPayingsForm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TBBPayingsForm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TBBPayingsForm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TBBPayingsForm", "Initialize", null, arguments);
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
  U.method("TBBPayingsForm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBBPayingsForm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBBPayingsForm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBBPayingsForm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBBPayingsForm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBBPayingsForm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBBPayingsForm", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBBPayingsForm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBBPayingsForm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBBPayingsForm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBBPayingsForm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBBPayingsForm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBBPayingsForm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBBPayingsForm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBBPayingsForm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBBPayingsForm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBBPayingsForm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBBPayingsForm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBBPayingsForm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TBBPayingsForm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBBPayingsForm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBBPayingsForm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBBPayingsForm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBBPayingsForm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBBPayingsForm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBBPayingsForm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TBBPayingsForm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBBPayingsForm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBBPayingsForm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBBPayingsForm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TBBPayingsForm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TBBPayingsForm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TBBPayingsForm", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TBBPayingsForm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBBPayingsForm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBBPayingsForm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBBPayingsForm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TBBPayingsForm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TBBPayingsForm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBBPayingsForm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TBBPayingsForm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TBBPayingsForm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBBPayingsForm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBBPayingsForm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "stdate": 0, "enddate": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataModBBPayings", (await $.mcall((await $.v(C, "TDataModBBPayings")), "Create", [Self])));
  await $.mset((await $.v(C, "DTPickBegin")), "Date", (await $.mcall((await $.mv((await $.v(C, "DataModBBPayings")), "OrPack_SBOP")), "CallDateFunction", ["get_date", []])));
  await $.mset((await $.v(C, "DTPickEnd")), "Date", (await $.mcall((await $.mv((await $.v(C, "DataModBBPayings")), "OrPack_SBOP")), "CallDateFunction", ["get_date", []])));
  L0["stdate"] = (await $.mv((await $.v(C, "DTPickBegin")), "DateTime"));
  L0["enddate"] = (await $.mv((await $.v(C, "DTPickEnd")), "DateTime"));
  {
    const $t1 = (await $.v(C, "DataModBBPayings"));
    await $.stmt((await $.mcall((await $.wv([$t1], "ODS_ABNServices", C, false)), "SetVariable", ["StDate", (await $.wv([$t1], "StDate", { get: async () => L0["stdate"], set: async (v) => { L0["stdate"] = v; }, local: true }, false))])));
    await $.stmt((await $.mcall((await $.wv([$t1], "ODS_ABNServices", C, false)), "SetVariable", ["EndDate", (await $.wv([$t1], "EndDate", { get: async () => L0["enddate"], set: async (v) => { L0["enddate"] = v; }, local: true }, false))])));
    await $.mcall((await $.wv([$t1], "ODS_ABNServices", C, false)), "Open", []);
    await $.mcall((await $.wv([$t1], "ODS_Contracts", C, false)), "Open", []);
    await $.mcall((await $.wv([$t1], "ODS_Services", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBBPayingsForm", "DBGridContractsTitleClick", async function DBGridContractsTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "sqlline": 0};
  await $.fixArgs(L0, ["column"]);
  L0["sqlline"] = 20;
  L0["sqlline"] = (await $.mcall((await $.mv((await $.mv((await $.v(C, "DataModBBPayings")), "ODS_ABNServices")), "SQL")), "Add", [$.add(" order by ", (await $.mv(L0["column"], "FieldName")))]));
  await $.mcall((await $.mv((await $.v(C, "DataModBBPayings")), "ODS_ABNServices")), "Refresh", []);
  { const $t2 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModBBPayings")), "ODS_ABNServices")), "SQL")), [L0["sqlline"]], (await $.v(C, "EmptyStr"))); if ($t2 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModBBPayings")), "ODS_ABNServices")), "SQL", $t2); } }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TBBPayingsForm", "BtnRefreshClick", async function BtnRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "stdate": 0, "enddate": 0, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["stdate"] = (await $.mv((await $.v(C, "DTPickBegin")), "DateTime"));
  L0["enddate"] = (await $.mv((await $.v(C, "DTPickEnd")), "DateTime"));
  {
    const $t3 = (await $.mv((await $.v(C, "DataModBBPayings")), "ODS_ABNServices"));
    await $.stmt((await $.wcall([$t3], "SetVariable", ["StDate", (await $.wv([$t3], "StDate", { get: async () => L0["stdate"], set: async (v) => { L0["stdate"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t3], "SetVariable", ["EndDate", (await $.wv([$t3], "EndDate", { get: async () => L0["enddate"], set: async (v) => { L0["enddate"] = v; }, local: true }, false))], C)));
    await $.wset([$t3], "s", "1=1", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
    if ($.truthy((await $.mv((await $.wv([$t3], "ChBoxSrvType", C, false)), "Checked")))) {
      await $.wset([$t3], "s", $.add($.add($.add((await $.wv([$t3], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), " and (srv_id="), (await $.wcall([$t3], "string", [(await $.mv((await $.wv([$t3], "CBoxSrvType", C, false)), "KeyValue"))], C))), ")"), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
    }
    if ($.truthy(((await $.and_(($.eq((await $.mv((await $.wv([$t3], "ChBoxConfirmed", C, false)), "Checked")), (await $.wv([$t3], "true", C, false)))), async () => ($.eq((await $.mv((await $.wv([$t3], "ChBoxNotConfirmed", C, false)), "Checked")), (await $.wv([$t3], "false", C, false))))))))) {
      await $.wset([$t3], "s", $.add((await $.wv([$t3], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), " and (status=1)"), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
    }
    if ($.truthy(((await $.and_(($.eq((await $.mv((await $.wv([$t3], "ChBoxConfirmed", C, false)), "Checked")), (await $.wv([$t3], "false", C, false)))), async () => ($.eq((await $.mv((await $.wv([$t3], "ChBoxNotConfirmed", C, false)), "Checked")), (await $.wv([$t3], "true", C, false))))))))) {
      await $.wset([$t3], "s", $.add((await $.wv([$t3], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), " and (status=0)"), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
    }
    await $.wset([$t3], "Filter", (await $.wv([$t3], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), C);
    await $.wset([$t3], "Filtered", (await $.wv([$t3], "true", C, false)), C);
    await $.stmt($.wcall([$t3], "Close", [], C));
    await $.stmt($.wcall([$t3], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBBPayingsForm", "BtnAddClick", async function BtnAddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "r": 0, "p_dt": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FormBBPayingAdd"))]))))) {
    await $.set(C, "FormBBPayingAdd", (await $.mcall((await $.v(C, "TFormBBPayingAdd")), "Create", [Self])));
  }
  {
    const $t4 = (await $.v(C, "FormBBPayingAdd"));
    await $.mset((await $.wv([$t4], "DTPicker", C, false)), "Date", (await $.wv([$t4], "sb_GetSystemDate", C, false)));
    await $.mset((await $.wv([$t4], "DBEditAbonentName", C, false)), "Text", "");
    await $.mset((await $.wv([$t4], "CBoxContractNum", C, false)), "KeyValue", 0);
    await $.mset((await $.wv([$t4], "CBoxServiceType", C, false)), "KeyValue", 0);
    await $.mset((await $.wv([$t4], "CBoxMethod", C, false)), "ItemIndex", 0);
    await $.mset((await $.wv([$t4], "EditAmount", C, false)), "Text", "");
    await $.wset([$t4], "p_DT", (await $.wcall([$t4], "trunc", [(await $.mv((await $.wv([$t4], "DTPicker", C, false)), "DateTime"))], C)), { get: async () => L0["p_dt"], set: async (v) => { L0["p_dt"] = v; }, local: true });
    if ($.truthy(($.eq((await $.mv((await $.wv([$t4], "FormBBPayingAdd", C, false)), "ShowModal")), 1)))) {
      await $.wset([$t4], "r", (await $.mcall((await $.mv((await $.wv([$t4], "DataModBBPayings", C, false)), "OrPack_CableManager")), "CallIntegerFunction", ["AbnServAdd", [(await $.mv((await $.wv([$t4], "CBoxContractNum", C, false)), "KeyValue")), (await $.wv([$t4], "null", C, false)), (await $.mv((await $.wv([$t4], "CBoxServiceType", C, false)), "KeyValue")), (await $.mv((await $.wv([$t4], "EditAmount", C, false)), "Text")), 0, 0, (await $.wv([$t4], "p_DT", { get: async () => L0["p_dt"], set: async (v) => { L0["p_dt"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t4], "CBoxMethod", C, false)), "ItemIndex"))]])), { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true });
    }
    await $.mcall((await $.mv((await $.wv([$t4], "DataModBBPayings", C, false)), "ODS_ABNServices")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBBPayingsForm", "BtnEditClick", async function BtnEditClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_dt": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FormBBPayingAdd"))]))))) {
    await $.set(C, "FormBBPayingAdd", (await $.mcall((await $.v(C, "TFormBBPayingAdd")), "Create", [Self])));
  }
  {
    const $t5 = (await $.v(C, "FormBBPayingAdd"));
    const $t6 = (await $.mv((await $.wv([$t5], "DataModBBPayings", C, false)), "ODS_ABNServices"));
    await $.mset((await $.wv([$t5, $t6], "DTPicker", C, false)), "Date", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["Done_Time"], C)), "AsVariant")));
    await $.mset((await $.wv([$t5, $t6], "DBEditAbonentName", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["ABN_Name"], C)), "AsString")));
    await $.mset((await $.wv([$t5, $t6], "CBoxContractNum", C, false)), "KeyValue", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["Contract_ID"], C)), "AsVariant")));
    await $.mset((await $.wv([$t5, $t6], "CBoxServiceType", C, false)), "KeyValue", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["Srv_ID"], C)), "AsVariant")));
    await $.mset((await $.wv([$t5, $t6], "CBoxMethod", C, false)), "ItemIndex", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["PayMethod"], C)), "AsInteger")));
    await $.mset((await $.wv([$t5, $t6], "EditAmount", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["Amount"], C)), "AsString")));
    await $.wset([$t5, $t6], "p_DT", (await $.wcall([$t5, $t6], "trunc", [(await $.mv((await $.wv([$t5, $t6], "DTPicker", C, false)), "DateTime"))], C)), { get: async () => L0["p_dt"], set: async (v) => { L0["p_dt"] = v; }, local: true });
    if ($.truthy(($.eq((await $.mv((await $.wv([$t5, $t6], "FormBBPayingAdd", C, false)), "ShowModal")), 1)))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t5, $t6], "DataModBBPayings", C, false)), "OrPack_CableManager")), "CallProcedure", ["AbnServUpd", [(await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["ID"], C)), "AsVariant")), (await $.mv((await $.wv([$t5, $t6], "CBoxContractNum", C, false)), "KeyValue")), (await $.wv([$t5, $t6], "null", C, false)), (await $.mv((await $.wv([$t5, $t6], "CBoxServiceType", C, false)), "KeyValue")), (await $.mv((await $.wv([$t5, $t6], "EditAmount", C, false)), "Text")), 0, 0, (await $.wv([$t5, $t6], "p_DT", { get: async () => L0["p_dt"], set: async (v) => { L0["p_dt"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t5, $t6], "CBoxMethod", C, false)), "ItemIndex"))]])));
    }
    await $.mcall((await $.mv((await $.wv([$t5, $t6], "DataModBBPayings", C, false)), "ODS_ABNServices")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBBPayingsForm", "DBGridContractsDblClick", async function DBGridContractsDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BtnEdit")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBBPayingsForm", "BtnDelClick", async function BtnDelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "msgid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["msgid"] = (await $.call(C, "MessageDlg", ["Əməliyyat günün sənədlərindən silinsinmi?", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo")), (await $.v(C, "mbCancel"))], 0]));
  if ($.truthy($.eq(L0["msgid"], (await $.v(C, "idYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModBBPayings")), "OrPack_CableManager")), "CallProcedure", ["AbnServDel", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModBBPayings")), "ODS_ABNServices")), "FieldByName", ["ID"])), "AsVariant")), 1]])));
  }
  if ($.truthy($.eq(L0["msgid"], (await $.v(C, "idNo"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModBBPayings")), "OrPack_CableManager")), "CallProcedure", ["AbnServDel", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModBBPayings")), "ODS_ABNServices")), "FieldByName", ["ID"])), "AsVariant")), 0]])));
  }
  await $.mcall((await $.mv((await $.v(C, "DataModBBPayings")), "ODS_ABNServices")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBBPayingsForm", "BtnConfirmClick", async function BtnConfirmClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "selrow": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.call(C, "MessageDlg", ["Əməliyyat təsdiqlənsinmi?", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "idYes")))))) {
    { const $t7 = $.sub((await $.mv((await $.mv((await $.v(C, "DBGridContracts")), "SelectedRows")), "Count")), 1);
      L0["selrow"] = 0;
      let $t8 = true;
      for (;;) {
        if (!$t8) { L0["selrow"] = $.succ(L0["selrow"], 1); }
        $t8 = false;
        if (!($.ord(L0["selrow"]) <= $.ord($t7))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModBBPayings")), "ODS_ABNServices")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "DBGridContracts")), "SelectedRows")), "items")), [L0["selrow"]]))]))])));
        if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModBBPayings")), "ODS_ABNServices")), "FieldByName", ["STATUS"])), "AsInteger")), 0))) {
          continue;
        } else {
          {
            const $t9 = (await $.v(C, "DataModBBPayings"));
            await $.stmt((await $.mcall((await $.wv([$t9], "OrPack_CableManager", C, false)), "CallProcedure", ["AbnServCommit", [(await $.mv((await $.mcall((await $.wv([$t9], "ODS_ABNServices", C, false)), "FieldByName", ["ID"])), "AsVariant"))]])));
          }
        }
        await $.mcall((await $.mv((await $.v(C, "DataModBBPayings")), "ODS_ABNServices")), "Refresh", []);
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBBPayingsForm", "DBGridContractsDrawColumnCell", async function DBGridContractsDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t10 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t10], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t11 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "DataSource", C, false)), "DataSet")), "FieldByName", ["Status"])), "AsInteger"));
        if ($.eq($t11, 0)) {
          await $.wset([$t10], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t11, 1)) {
          await $.wset([$t10], "ImageIndex", 6, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t10], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t10], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t10], "ImageList", C, false)), "Draw", [(await $.wv([$t10], "Canvas", C, false)), (await $.mv((await $.wv([$t10], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t10], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t10], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t10], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t10], "DefaultDrawColumnCell", [(await $.wv([$t10], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t10], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t10], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t10], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TBBPayingsForm", "BtnFilterPanelClick", async function BtnFilterPanelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PanelSettings")), "Visible", $.not((await $.mv((await $.v(C, "PanelSettings")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBBPayingsForm", "BtnExcelClick", async function BtnExcelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (await $.v(C, "ExcelExport"));
    if ($.truthy($.not((await $.wv([$t12], "Connected", C, false))))) {
      await $.stmt($.wcall([$t12], "Connect", [], C));
    }
    await $.stmt((await $.wcall([$t12], "ExportDataset", [(await $.mv((await $.wv([$t12], "DataModBBPayings", C, false)), "ODS_ABNServices")), "Services", (await $.wv([$t12], "true", C, false))], C)));
    await $.stmt($.wcall([$t12], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
