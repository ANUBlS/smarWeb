// Generated from RepairMainFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("RepairMainFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "Repair_TLB", "StdVcl", "ExtCtrls", "ComCtrls", "StdCtrls", "Grids", "DBGrids", "Db", "OracleData", "Mask", "DBCtrls", "Oracle", "SearchCombo", "SBPlgAx50_TLB", "ImgList", "ComObj", "ComServ", "repairdatamodule", "sboapidatamoduleimpl", "TransactionUnit", "RepUpdateForm_unit"]);
  const C = [U];
  U.defClass("TRepairMainForm", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "begdate": {"name": "BegDate", "type": "TDateTimePicker"}, "buttonrefresh": {"name": "ButtonRefresh", "type": "TButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "filtrpanel": {"name": "FiltrPanel", "type": "TPanel"}, "splitter1": {"name": "Splitter1", "type": "TSplitter"}, "enddate": {"name": "EndDate", "type": "TDateTimePicker"}, "buttonnew": {"name": "ButtonNew", "type": "TButton"}, "lrate_d": {"name": "LRate_D", "type": "TLabel"}, "buttonupdate": {"name": "ButtonUpdate", "type": "TButton"}, "buttondelete": {"name": "ButtonDelete", "type": "TButton"}, "ltrdate": {"name": "LTrDate", "type": "TLabel"}, "lrate_c": {"name": "LRate_C", "type": "TLabel"}, "ld_currency": {"name": "LD_Currency", "type": "TLabel"}, "lc_currency": {"name": "LC_Currency", "type": "TLabel"}, "ltrrate_d": {"name": "LTrRate_D", "type": "TLabel"}, "ltrrate_c": {"name": "LTrRate_C", "type": "TLabel"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "filial": {"name": "Filial", "type": "TTabSheet"}, "sortby": {"name": "SortBy", "type": "TTabSheet"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "fltfilial_d": {"name": "fltFilial_D", "type": "TSearchCombo"}, "fltfilial_c": {"name": "fltFilial_C", "type": "TSearchCombo"}, "label3": {"name": "Label3", "type": "TLabel"}, "cbuser": {"name": "cbUser", "type": "TSearchCombo"}, "number": {"name": "Number", "type": "TRadioButton"}, "debitnumber": {"name": "DebitNumber", "type": "TRadioButton"}, "creditnumber": {"name": "CreditNumber", "type": "TRadioButton"}, "debitcurrency": {"name": "DebitCurrency", "type": "TRadioButton"}, "creditcurrency": {"name": "CreditCurrency", "type": "TRadioButton"}, "debitamount": {"name": "DebitAmount", "type": "TRadioButton"}, "creditamount": {"name": "CreditAmount", "type": "TRadioButton"}, "lamount": {"name": "LAmount", "type": "TRadioButton"}, "filtr": {"name": "Filtr", "type": "TTabSheet"}, "buttonfiltr": {"name": "ButtonFiltr", "type": "TButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "nationalcurrency": {"name": "NationalCurrency", "type": "TCheckBox"}, "foreigncurrency": {"name": "ForeignCurrency", "type": "TCheckBox"}, "multycurrency": {"name": "MultyCurrency", "type": "TCheckBox"}, "ratedifference": {"name": "RateDifference", "type": "TCheckBox"}, "profitloss": {"name": "ProfitLoss", "type": "TCheckBox"}, "hox": {"name": "Hox", "type": "TCheckBox"}, "swift": {"name": "Swift", "type": "TCheckBox"}, "chprofit": {"name": "ChProfit", "type": "TCheckBox"}, "chrate": {"name": "ChRate", "type": "TCheckBox"}, "salary": {"name": "Salary", "type": "TCheckBox"}, "azcard": {"name": "AzCard", "type": "TCheckBox"}, "credit": {"name": "Credit", "type": "TCheckBox"}, "depozit": {"name": "Depozit", "type": "TCheckBox"}, "grbox": {"name": "grbox", "type": "TGroupBox"}, "cbfiltr": {"name": "cbFiltr", "type": "TComboBox"}, "fixedassets": {"name": "FixedAssets", "type": "TCheckBox"}, "fevents": {"name": "FEvents", "type": "IRepairMainFormEvents"}}, {});
  U.init(async () => {
    U.var_("RepairMainForm", null, "TRepairMainForm");
    U.var_("TrMode", '', "Char");
  });
  U.method("TRepairMainForm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TRepairMainForm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TRepairMainForm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TRepairMainForm", "Initialize", null, arguments);
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
  U.method("TRepairMainForm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairMainForm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairMainForm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairMainForm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairMainForm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairMainForm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairMainForm", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairMainForm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairMainForm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairMainForm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairMainForm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairMainForm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairMainForm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairMainForm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairMainForm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairMainForm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairMainForm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairMainForm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairMainForm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TRepairMainForm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TRepairMainForm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TRepairMainForm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TRepairMainForm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TRepairMainForm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TRepairMainForm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TRepairMainForm", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TRepairMainForm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TRepairMainForm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TRepairMainForm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TRepairMainForm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TRepairMainForm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TRepairMainForm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TRepairMainForm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TRepairMainForm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TRepairMainForm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TRepairMainForm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TRepairMainForm", "ButtonRefreshClick", async function ButtonRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "str1": '', "str2": '', "str3": '', "strorder": '', "strsql": '', "dbeg": '', "dend": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["dbeg"] = (await $.call(C, "FormatDateTime", ["d-mmmm-yy", (await $.mv((await $.v(C, "BegDate")), "Date"))]));
  L0["dend"] = (await $.call(C, "FormatDateTime", ["d-mmmm-yy", (await $.mv((await $.v(C, "EndDate")), "Date"))]));
  L0["str1"] = "select p.d$ D, p.c$ C, p.* from v_provarch1 p where ";
  L0["str2"] = $.add($.add(" dat>='", L0["dbeg"]), "'");
  L0["str3"] = $.add($.add(" and dat<='", L0["dend"]), "'");
  L0["strorder"] = " order by dat,id";
  L0["strsql"] = $.add($.add($.add(L0["str1"], L0["str2"]), L0["str3"]), L0["strorder"]);
  {
    const $t1 = (await $.v(C, "dataMod"));
    await $.mcall((await $.wv([$t1], "Transactions", C, false)), "Close", []);
    await $.mcall((await $.mv((await $.wv([$t1], "Transactions", C, false)), "SQL")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "Transactions", C, false)), "SQL")), "Add", [(await $.wv([$t1], "StrSql", { get: async () => L0["strsql"], set: async (v) => { L0["strsql"] = v; }, local: true }, false))])));
    await $.mset((await $.wv([$t1], "Transactions", C, false)), "Active", (await $.wv([$t1], "true", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "RepairMainForm", Self);
  await $.set(C, "DataMod", (await $.mcall((await $.v(C, "TDataMod")), "Create", [null])));
  await $.set(C, "frmTransaction", (await $.mcall((await $.v(C, "TfrmTransaction")), "Create", [null])));
  {
    const $t2 = (await $.v(C, "datamod"));
    await $.mset((await $.wv([$t2], "BegDate", C, false)), "DateTime", (await $.mv((await $.mcall((await $.wv([$t2], "BankDay", C, false)), "FieldByName", ["tek_dat"])), "AsDateTime")));
    await $.mset((await $.wv([$t2], "EndDate", C, false)), "DateTime", (await $.mv((await $.mcall((await $.wv([$t2], "BankDay", C, false)), "FieldByName", ["tek_dat"])), "AsDateTime")));
  }
  await $.mset((await $.v(C, "cbUser")), "ItemIndex", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "ButtonUpdateClick", async function ButtonUpdateClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "TrMode", "U");
  {
    const $t3 = (await $.v(C, "frmTransaction"));
    {
      const $t4 = (await $.wv([$t3], "datamod", C, false));
      await $.mset((await $.wv([$t3, $t4], "TransactionDateEdit", C, false)), "DateTime", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "Transactions", C, false)), "FieldByName", ["dat"])), "asdatetime")));
      await $.mset((await $.wv([$t3, $t4], "DebitCurrencyIDEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "Transactions", C, false)), "FieldByName", ["D$"])), "asString")));
      await $.mset((await $.wv([$t3, $t4], "CreditCurrencyIDEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "Transactions", C, false)), "FieldByName", ["C$"])), "asString")));
      await $.mset((await $.wv([$t3, $t4], "DebitCurrencyCB", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "Transactions", C, false)), "FieldByName", ["D$"])), "asInteger")));
      await $.mset((await $.wv([$t3, $t4], "CreditCurrencyCB", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "Transactions", C, false)), "FieldByName", ["C$"])), "asInteger")));
      await $.mset((await $.wv([$t3, $t4], "DebitRateEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "Transactions", C, false)), "FieldByName", ["Rate_D"])), "asString")));
      await $.mset((await $.wv([$t3, $t4], "CreditRateEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "Transactions", C, false)), "FieldByName", ["Rate_C"])), "asString")));
      await $.stmt((await $.mcall((await $.wv([$t3, $t4], "DebitAccount", C, false)), "Locate", ["AccountNumber", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "Transactions", C, false)), "FieldByName", ["DebitNumber"])), "asstring")), []])));
      await $.mset((await $.wv([$t3, $t4], "DebitAccNoCB", C, false)), "itemindex", $.sub((await $.mv((await $.wv([$t3, $t4], "DebitAccount", C, false)), "RecNo")), 1));
      await $.stmt((await $.wcall([$t3, $t4], "DebitAccNoCBChange", [(await $.wv([$t3, $t4], "DebitAccNoCB", C, false))], C)));
      await $.stmt((await $.mcall((await $.wv([$t3, $t4], "CreditAccount", C, false)), "Locate", ["accountNumber", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "Transactions", C, false)), "FieldByName", ["CreditNumber"])), "asstring")), []])));
      await $.mset((await $.wv([$t3, $t4], "CreditAccNoCB", C, false)), "itemindex", $.sub((await $.mv((await $.wv([$t3, $t4], "CreditAccount", C, false)), "RecNo")), 1));
      await $.stmt((await $.wcall([$t3, $t4], "CreditAccNoCBChange", [(await $.wv([$t3, $t4], "CreditAccNoCB", C, false))], C)));
      await $.mset((await $.wv([$t3, $t4], "DebitAmountEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "Transactions", C, false)), "FieldByName", ["Amount_d"])), "AsString")));
      await $.mset((await $.wv([$t3, $t4], "CreditAmountEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "Transactions", C, false)), "FieldByName", ["Amount_c"])), "AsString")));
      await $.mset((await $.wv([$t3, $t4], "LAmountEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "Transactions", C, false)), "FieldByName", ["LAmount"])), "AsString")));
      await $.mset((await $.wv([$t3, $t4], "InBalanceCharEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "Transactions", C, false)), "FieldByName", ["Kassa_B"])), "AsString")));
      await $.mset((await $.wv([$t3, $t4], "OutBalanceCharEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "Transactions", C, false)), "FieldByName", ["Kassa_Z"])), "AsString")));
      await $.mset((await $.wv([$t3, $t4], "OutBalanceCharCB", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "Transactions", C, false)), "FieldByName", ["Kassa_Z"])), "AsInteger")));
      await $.mset((await $.wv([$t3, $t4], "TrNameEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "Transactions", C, false)), "FieldByName", ["Name"])), "AsString")));
    }
    await $.stmt($.wcall([$t3], "Show", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "ButtonFiltrClick", async function ButtonFiltrClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FiltrPanel")), "Visible", $.not((await $.mv((await $.v(C, "FiltrPanel")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "ButtonDeleteClick", async function ButtonDeleteClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "result": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "datamod"));
    await $.wset([$t5], "Result", (await $.mcall((await $.wv([$t5], "p_correct", C, false)), "CallIntegerFunction", ["Main", ["Flag", 0, "CorMode", 0, "TransactionID", (await $.mv((await $.mcall((await $.wv([$t5], "Transactions", C, false)), "fieldbyname", ["id"])), "asstring"))]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  if ($.truthy($.eq(L0["result"], 0))) {
  }
  await $.mcall((await $.v(C, "ButtonRefresh")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ButtonUpdate")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "Get_Icon", async function Get_Icon(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["imageindex"] = 0;
  await $.stmt((await $.mcall((await $.v(C, "ImageList1")), "GetIcon", [L0["imageindex"], (await $.v(C, "Icon"))])));
  L0["result"] = (await $.mv((await $.v(C, "Icon")), "Handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairMainForm", "ButtonNewClick", async function ButtonNewClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "TrMode", "N");
  {
    const $t6 = (await $.v(C, "frmTransaction"));
    await $.mset((await $.wv([$t6], "TransactionDateEdit", C, false)), "DateTime", (await $.mv((await $.mv((await $.wv([$t6], "RepairMainForm", C, false)), "EndDate")), "Date")));
    await $.stmt((await $.wcall([$t6], "SetNull", ["N"], C)));
    await $.stmt($.wcall([$t6], "show", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "ChRateClick", async function ChRateClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ChRate")), "Checked")), false))) {
    await $.mset((await $.v(C, "ChProfit")), "Enabled", false);
  } else {
    await $.mset((await $.v(C, "ChProfit")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "ChProfitClick", async function ChProfitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ChProfit")), "Checked")), true))) {
    await $.mset((await $.v(C, "ChRate")), "Checked", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "NationalCurrencyClick", async function NationalCurrencyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetFilter", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("SetFilter", async function SetFilter(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "strfilt": '', "s1": '', "s2": '', "s3": '', "s4": '', "s5": '', "s6": '', "s7": '', "s8": '', "s9": '', "s10": '', "s11": '', "s12": ''};
  {
    const $t7 = (await $.v(C, "RepairMainForm"));
    if ($.truthy($.eq((await $.mv((await $.wv([$t7], "NationalCurrency", C, false)), "Checked")), (await $.wv([$t7], "true", C, false))))) {
      await $.wset([$t7], "S1", "1", { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true });
    } else {
      await $.wset([$t7], "s1", "", { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t7], "ForeignCurrency", C, false)), "Checked")), (await $.wv([$t7], "true", C, false))))) {
      await $.wset([$t7], "S2", "1", { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true });
    } else {
      await $.wset([$t7], "s2", "", { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t7], "MultyCurrency", C, false)), "Checked")), (await $.wv([$t7], "true", C, false))))) {
      await $.wset([$t7], "S3", "(vid_op=0)", { get: async () => L0["s3"], set: async (v) => { L0["s3"] = v; }, local: true });
    } else {
      await $.wset([$t7], "s3", "", { get: async () => L0["s3"], set: async (v) => { L0["s3"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t7], "RateDifference", C, false)), "Checked")), (await $.wv([$t7], "true", C, false))))) {
      await $.wset([$t7], "S4", "(vid_op=1)", { get: async () => L0["s4"], set: async (v) => { L0["s4"] = v; }, local: true });
    } else {
      await $.wset([$t7], "s4", "", { get: async () => L0["s4"], set: async (v) => { L0["s4"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t7], "ProfitLoss", C, false)), "Checked")), (await $.wv([$t7], "true", C, false))))) {
      await $.wset([$t7], "S5", "(vid_op=2)", { get: async () => L0["s5"], set: async (v) => { L0["s5"] = v; }, local: true });
    } else {
      await $.wset([$t7], "s5", "", { get: async () => L0["s5"], set: async (v) => { L0["s5"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t7], "Credit", C, false)), "Checked")), (await $.wv([$t7], "true", C, false))))) {
      await $.wset([$t7], "S6", "1", { get: async () => L0["s6"], set: async (v) => { L0["s6"] = v; }, local: true });
    } else {
      await $.wset([$t7], "s6", "", { get: async () => L0["s6"], set: async (v) => { L0["s6"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t7], "Depozit", C, false)), "Checked")), (await $.wv([$t7], "true", C, false))))) {
      await $.wset([$t7], "S7", "1", { get: async () => L0["s7"], set: async (v) => { L0["s7"] = v; }, local: true });
    } else {
      await $.wset([$t7], "s7", "", { get: async () => L0["s7"], set: async (v) => { L0["s7"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t7], "Hox", C, false)), "Checked")), (await $.wv([$t7], "true", C, false))))) {
      await $.wset([$t7], "S8", "1", { get: async () => L0["s8"], set: async (v) => { L0["s8"] = v; }, local: true });
    } else {
      await $.wset([$t7], "s8", "", { get: async () => L0["s8"], set: async (v) => { L0["s8"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t7], "Swift", C, false)), "Checked")), (await $.wv([$t7], "true", C, false))))) {
      await $.wset([$t7], "S9", "1", { get: async () => L0["s9"], set: async (v) => { L0["s9"] = v; }, local: true });
    } else {
      await $.wset([$t7], "s9", "", { get: async () => L0["s9"], set: async (v) => { L0["s9"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t7], "Salary", C, false)), "Checked")), (await $.wv([$t7], "true", C, false))))) {
      await $.wset([$t7], "S10", "1", { get: async () => L0["s10"], set: async (v) => { L0["s10"] = v; }, local: true });
    } else {
      await $.wset([$t7], "s10", "", { get: async () => L0["s10"], set: async (v) => { L0["s10"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t7], "AzCard", C, false)), "Checked")), (await $.wv([$t7], "true", C, false))))) {
      await $.wset([$t7], "S11", "1", { get: async () => L0["s11"], set: async (v) => { L0["s11"] = v; }, local: true });
    } else {
      await $.wset([$t7], "s11", "", { get: async () => L0["s11"], set: async (v) => { L0["s11"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t7], "FixedAssets", C, false)), "Checked")), (await $.wv([$t7], "true", C, false))))) {
      await $.wset([$t7], "S12", "1", { get: async () => L0["s12"], set: async (v) => { L0["s12"] = v; }, local: true });
    } else {
      await $.wset([$t7], "s12", "", { get: async () => L0["s12"], set: async (v) => { L0["s12"] = v; }, local: true });
    }
  }
  L0["strfilt"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["s1"], L0["s2"]), L0["s3"]), L0["s4"]), L0["s5"]), L0["s6"]), L0["s7"]), L0["s8"]), L0["s9"]), L0["s10"]), L0["s11"]), L0["s12"]);
  await $.mset((await $.mv((await $.v(C, "DataMod")), "Transactions")), "Filtered", true);
  await $.mset((await $.mv((await $.v(C, "DataMod")), "Transactions")), "Filter", L0["strfilt"]);
  await $.mset((await $.mv((await $.v(C, "DataMod")), "Transactions")), "Filtered", true);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRepairMainForm", "ForeignCurrencyClick", async function ForeignCurrencyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetFilter", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "MultyCurrencyClick", async function MultyCurrencyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetFilter", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "RateDifferenceClick", async function RateDifferenceClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetFilter", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "ProfitLossClick", async function ProfitLossClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetFilter", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "HoxClick", async function HoxClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetFilter", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "SwiftClick", async function SwiftClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetFilter", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "SalaryClick", async function SalaryClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetFilter", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "AzCardClick", async function AzCardClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetFilter", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "CreditClick", async function CreditClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetFilter", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "DepozitClick", async function DepozitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetFilter", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "NumberClick", async function NumberClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Setfilter", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairMainForm", "cbFiltrChange", async function cbFiltrChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "strfiltr": '', "s": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["s"] = (await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((await $.v(C, "DataMod")), "Transactions")), "Fields")), "Fields")), [3])), "FieldName"));
  { const $t8 = (await $.mv((await $.mv((await $.v(C, "RepairMainForm")), "cbFiltr")), "ItemIndex"));
    if ($.eq($t8, 1)) {
      L0["strfiltr"] = "(D=0) and (C=0)";
    }
    else if ($.eq($t8, 2)) {
      L0["strfiltr"] = "(D=C) and (D>0)";
    }
    else if ($.eq($t8, 3)) {
      L0["strfiltr"] = "(vid_op=0)";
    }
    else if ($.eq($t8, 4)) {
      L0["strfiltr"] = "(vid_op=1)";
    }
    else if ($.eq($t8, 5)) {
      L0["strfiltr"] = "(vid_op=2)";
    }
    else if ($.eq($t8, 6)) {
      L0["strfiltr"] = "";
    }
    else if ($.eq($t8, 7)) {
      L0["strfiltr"] = "";
    }
    else if ($.eq($t8, 8)) {
      L0["strfiltr"] = "";
    }
    else if ($.eq($t8, 9)) {
      L0["strfiltr"] = "";
    }
    else if ($.eq($t8, 10)) {
      L0["strfiltr"] = "";
    }
    else if ($.eq($t8, 11)) {
      L0["strfiltr"] = "(vid_op=621)";
    }
    else if ($.eq($t8, 12)) {
      L0["strfiltr"] = "";
    }
    else {
      L0["strfiltr"] = "";
    }
  }
  await $.mset((await $.mv((await $.v(C, "DataMod")), "Transactions")), "Filtered", true);
  await $.mset((await $.mv((await $.v(C, "DataMod")), "Transactions")), "Filter", L0["strfiltr"]);
  await $.mset((await $.mv((await $.v(C, "DataMod")), "Transactions")), "Filtered", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
