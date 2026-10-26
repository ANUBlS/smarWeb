// Generated from BusinessProcessSetupImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("BusinessProcessSetupImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "BusProcSet_TLB", "StdVcl", "Db", "OracleData", "ExtCtrls", "DBCtrls", "Grids", "DBGrids", "StdCtrls", "Mask", "XDBGrids", "ComObj", "ComServ", "About1", "sboapidatamoduleimpl", "SBTranslateProc", "Unit6", "konvert", "DMBusProcSetimpl", "UnitRp", "kassa", "UnitTr", "Unitcountry"]);
  const C = [U];
  U.defClass("TBusinessProcessSetup", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}, "dbnavigator3": {"name": "DBNavigator3", "type": "TDBNavigator"}, "xdbgrid3": {"name": "XDBGrid3", "type": "TXDBGrid"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "label1": {"name": "Label1", "type": "TLabel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbnavigator2": {"name": "DBNavigator2", "type": "TDBNavigator"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "fevents": {"name": "FEvents", "type": "IBusinessProcessSetupEvents"}}, {});
  U.init(async () => {
    U.var_("BusinessProcessSetup", null, "TBusinessProcessSetup");
  });
  U.method("TBusinessProcessSetup", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TBusinessProcessSetup", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TBusinessProcessSetup", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TBusinessProcessSetup", "Initialize", null, arguments);
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
  U.method("TBusinessProcessSetup", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBusinessProcessSetup", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBusinessProcessSetup", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBusinessProcessSetup", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBusinessProcessSetup", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBusinessProcessSetup", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBusinessProcessSetup", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBusinessProcessSetup", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBusinessProcessSetup", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBusinessProcessSetup", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBusinessProcessSetup", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBusinessProcessSetup", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBusinessProcessSetup", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBusinessProcessSetup", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBusinessProcessSetup", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBusinessProcessSetup", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBusinessProcessSetup", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBusinessProcessSetup", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBusinessProcessSetup", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TBusinessProcessSetup", "AboutBox", async function AboutBox(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "ShowBusinessProcessSetupAbout", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TBusinessProcessSetup", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBusinessProcessSetup", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "BusinessProcessSetup", Self);
  await $.set(C, "DMBusProcSet", (await $.mcall((await $.v(C, "TDMBusProcSet")), "Create", [Self])));
  await $.mset((await $.v(C, "DBLookupComboBox5")), "KeyValue", (-(2)));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBusinessProcessSetup", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBusinessProcessSetup", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBusinessProcessSetup", "DBGrid2TitleClick", async function DBGrid2TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TBusinessProcessSetup", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBusinessProcessSetup", "DBLookupComboBox5CloseUp", async function DBLookupComboBox5CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "buildfilterstring": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_SB_BUSINESS_PROC_TARIFS")), "State")), [(await $.v(C, "dsInsert")), (await $.v(C, "dsedit"))]))))) {
    await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_SB_BUSINESS_PROC_TARIFS")), "Close", []);
    { const $t1 = await $.iset((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_SB_BUSINESS_PROC_TARIFS")), "SQL")), [4], $.add(" and groupid=", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "DBLookupComboBox5")), "KeyValue"))])))); if ($t1 !== undefined) { await $.mset((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_SB_BUSINESS_PROC_TARIFS")), "SQL", $t1); } }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox5")), "KeyValue")), (-(2))))) {
      { const $t2 = await $.iset((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_SB_BUSINESS_PROC_TARIFS")), "SQL")), [4], ""); if ($t2 !== undefined) { await $.mset((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_SB_BUSINESS_PROC_TARIFS")), "SQL", $t2); } }
    }
    await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_SB_BUSINESS_PROC_TARIFS")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBusinessProcessSetup", "DBNavigator2Click", async function DBNavigator2Click(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "button"]);
  return L0.result;
}, {"params": ["Sender", "Button"], "kind": "procedure", "ptypes": ["TObject", "TNavigateBtn"]});
  U.method("TBusinessProcessSetup", "DBNavigator3Click", async function DBNavigator3Click(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "button"]);
  { const $t3 = L0["button"];
    if ($.eq($t3, (await $.v(C, "nbPost")))) {
    }
  }
  return L0.result;
}, {"params": ["Sender", "Button"], "kind": "procedure", "ptypes": ["TObject", "TNavigateBtn"]});
  U.method("TBusinessProcessSetup", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBusinessProcessSetup", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBusinessProcessSetup", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TBusinessProcessSetup", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBusinessProcessSetup", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBusinessProcessSetup", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBusinessProcessSetup", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TBusinessProcessSetup", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TBusinessProcessSetup", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TBusinessProcessSetup", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TBusinessProcessSetup", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBusinessProcessSetup", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBusinessProcessSetup", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBusinessProcessSetup", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TBusinessProcessSetup", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TBusinessProcessSetup", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBusinessProcessSetup", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TBusinessProcessSetup", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TBusinessProcessSetup", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBusinessProcessSetup", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBusinessProcessSetup", "XDBGrid1TitleClick", async function XDBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": '', "kind": ''};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy($.not(((await $.or_(($.eq((await $.mv(L0["column"], "FieldName")), "NAME")), async () => ($.eq((await $.mv(L0["column"], "FieldName")), "ID")))))))) {
    return L0.result;
  }
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  if ($.truthy((await $.mv((await $.mv(L0["column"], "Field")), "Calculated")))) {
    return L0.result;
  }
  {
    const $t4 = (await $.mv((await $.v(C, "DMBusProcSet")), "ODS_SB_BUSINESS_PROCESSES"));
    await $.mset((await $.wv([$t4], "Screen", C, false)), "Cursor", (await $.wv([$t4], "crSQLWait", C, false)));
    await $.stmt((await $.wcall([$t4], "SetVariable", ["sort", $.add($.add((await $.wv([$t4], "titlename", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)), " "), (await $.wv([$t4], "kind", { get: async () => L0["kind"], set: async (v) => { L0["kind"] = v; }, local: true }, false)))], C)));
    await $.stmt($.wcall([$t4], "Open", [], C));
    await $.stmt($.wcall([$t4], "refresh", [], C));
    await $.mset((await $.wv([$t4], "Screen", C, false)), "Cursor", (await $.wv([$t4], "crDefault", C, false)));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.method("TBusinessProcessSetup", "XDBGrid3CellDblClick", async function XDBGrid3CellDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "a": '', "b": ''};
  await $.fixArgs(L0, ["column"]);
  L0["b"] = (await $.mv(L0["column"], "FieldName"));
  L0["a"] = (await $.mv(L0["column"], "FieldName"));
  if ($.truthy($.eq(L0["b"], "KASSA_Z_NAME"))) {
    L0["a"] = "KASSA_Z";
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "konvert1"))]))))) {
      await $.set(C, "konvert1", (await $.mcall((await $.v(C, "Tkonvert1")), "Create", [Self])));
    }
    await $.mcall((await $.v(C, "konvert1")), "ShowModal", []);
    if ($.truthy($.not(($.in_((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "State")), [(await $.v(C, "dsInsert")), (await $.v(C, "dsedit"))]))))) {
      await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "Edit", []);
    }
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "FieldByName", [L0["a"]])), "AsInteger", (await $.mv((await $.v(C, "konvert1")), "v_shortname")));
    await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "Post", []);
    await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "ODS_sb_business_proc_childs")), "Refresh", []);
  }
  if ($.truthy($.eq(L0["b"], "REPORTDESC"))) {
    L0["a"] = "REPORTID";
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FrmReport"))]))))) {
      await $.set(C, "FrmReport", (await $.mcall((await $.v(C, "TFrmReport")), "Create", [Self])));
    }
    await $.mcall((await $.v(C, "FrmReport")), "ShowModal", []);
    if ($.truthy($.not(($.in_((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "State")), [(await $.v(C, "dsInsert")), (await $.v(C, "dsedit"))]))))) {
      await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "Edit", []);
    }
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "FieldByName", [L0["a"]])), "AsInteger", (await $.mv((await $.v(C, "FrmReport")), "v_id")));
    await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "Post", []);
    await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "refresh", []);
  }
  if ($.truthy($.eq(L0["b"], "KASSA_B"))) {
    L0["a"] = "KASSA_B";
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "kassa1"))]))))) {
      await $.set(C, "kassa1", (await $.mcall((await $.v(C, "Tkassa1")), "Create", [Self])));
    }
    await $.mcall((await $.v(C, "kassa1")), "ShowModal", []);
    if ($.truthy($.not(($.in_((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "State")), [(await $.v(C, "dsInsert")), (await $.v(C, "dsedit"))]))))) {
      await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "Edit", []);
    }
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "FieldByName", [L0["a"]])), "AsString", (await $.mv((await $.v(C, "kassa1")), "v_kassa")));
    await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "Post", []);
    await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "refresh", []);
  }
  if ($.truthy($.eq(L0["b"], "VID_OP_NAME"))) {
    L0["a"] = "VID_OP";
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FrmTransaction"))]))))) {
      await $.set(C, "FrmTransaction", (await $.mcall((await $.v(C, "TFrmTransaction")), "Create", [Self])));
    }
    await $.mcall((await $.v(C, "FrmTransaction")), "ShowModal", []);
    if ($.truthy($.not(($.in_((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "State")), [(await $.v(C, "dsInsert")), (await $.v(C, "dsedit"))]))))) {
      await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "Edit", []);
    }
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "FieldByName", [L0["a"]])), "AsInteger", (await $.mv((await $.v(C, "FrmTransaction")), "v_transaction")));
    await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "Post", []);
    await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "refresh", []);
  }
  if ($.truthy($.eq(L0["b"], "CNTR_NAME"))) {
    L0["a"] = "COUNTRID";
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FrmCountry"))]))))) {
      await $.set(C, "FrmCountry", (await $.mcall((await $.v(C, "TFrmCountry")), "Create", [Self])));
    }
    await $.mcall((await $.v(C, "FrmCountry")), "ShowModal", []);
    if ($.truthy($.not(($.in_((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "State")), [(await $.v(C, "dsInsert")), (await $.v(C, "dsedit"))]))))) {
      await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "Edit", []);
    }
    await $.mcall((await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "FieldByName", [L0["a"]])), "AsInteger", []);
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "FieldByName", [L0["a"]])), "AsInteger", (await $.mv((await $.v(C, "FrmCountry")), "v_countries")));
    await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "Post", []);
    await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "refresh", []);
  }
  if ($.truthy($.eq(L0["a"], "DEBTACC"))) {
    L0["a"] = "DEBT";
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "Form6"))]))))) {
      await $.set(C, "Form6", (await $.mcall((await $.v(C, "TForm6")), "Create", [Self])));
    }
    await $.mset((await $.v(C, "Form6")), "v_accID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "FieldByName", [L0["a"]])), "AsInteger")));
    await $.mcall((await $.v(C, "Form6")), "ShowModal", []);
    if ($.truthy($.not(($.in_((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "State")), [(await $.v(C, "dsInsert")), (await $.v(C, "dsedit"))]))))) {
      await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "Edit", []);
    }
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "FieldByName", [L0["a"]])), "AsInteger", (await $.mv((await $.v(C, "Form6")), "v_accID")));
    await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "Post", []);
    await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "refresh", []);
  }
  if ($.truthy($.eq(L0["a"], "KREDACC"))) {
    L0["a"] = "KREDIT";
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "Form6"))]))))) {
      await $.set(C, "Form6", (await $.mcall((await $.v(C, "TForm6")), "Create", [Self])));
    }
    await $.mset((await $.v(C, "Form6")), "v_accID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "FieldByName", [L0["a"]])), "AsInteger")));
    await $.mcall((await $.v(C, "Form6")), "ShowModal", []);
    if ($.truthy($.not(($.in_((await $.mv((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "State")), [(await $.v(C, "dsInsert")), (await $.v(C, "dsedit"))]))))) {
      await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "Edit", []);
    }
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "FieldByName", [L0["a"]])), "AsInteger", (await $.mv((await $.v(C, "Form6")), "v_accID")));
    await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "Post", []);
    await $.mcall((await $.mv((await $.v(C, "DMBusProcSet")), "Ods_sb_business_proc_childs")), "refresh", []);
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.method("TBusinessProcessSetup", "OracleDataSet1AfterScroll", async function OracleDataSet1AfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TBusinessProcessSetup", "OracleDataSet2AfterInsert", async function OracleDataSet2AfterInsert(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TBusinessProcessSetup", "OracleDataSet3BeforePost", async function OracleDataSet3BeforePost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.mcall(L0["dataset"], "FieldByName", ["GroupID"])), "AsInteger", (await $.mv((await $.v(C, "DBLookupComboBox5")), "KeyValue")));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
