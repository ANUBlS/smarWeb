// Generated from BalanceRefEditImpl1.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("BalanceRefEditImpl1", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "OUT_BalanceRefEditX_TLB", "StdVcl", "Db", "OracleData", "StdCtrls", "Grids", "DBGrids", "DBCtrls", "Mask", "ComCtrls", "ExtCtrls", "ToolWin", "ComObj", "ComServ", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TBalanceRefEditX", "TActiveForm", {"toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "dbnavigator": {"name": "DBNavigator", "type": "TDBNavigator"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "comboboxplan": {"name": "ComboBoxPlan", "type": "TComboBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbcheckbox1": {"name": "DBCheckBox1", "type": "TDBCheckBox"}, "dbcheckbox2": {"name": "DBCheckBox2", "type": "TDBCheckBox"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "comboboxtypeid_name": {"name": "ComboBoxTYPEID_NAME", "type": "TComboBox"}, "comboboxadditionaltypeid_name": {"name": "ComboBoxADDITIONALTYPEID_NAME", "type": "TComboBox"}, "cmbboxcurrposition": {"name": "CmbBoxCurrPosition", "type": "TComboBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "editsearch": {"name": "EditSearch", "type": "TEdit"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "balancedataset": {"name": "BalanceDataSet", "type": "TOracleDataSet"}, "closetypes": {"name": "CloseTypes", "type": "TDataSource"}, "closetypesdata": {"name": "CloseTypesData", "type": "TOracleDataSet"}, "balancedatasetbal_cn": {"name": "BalanceDataSetBAL_CN", "type": "TFloatField"}, "balancedatasettypeid": {"name": "BalanceDataSetTYPEID", "type": "TFloatField"}, "balancedatasetadditionaltypeid": {"name": "BalanceDataSetADDITIONALTYPEID", "type": "TFloatField"}, "balancedatasetaccgroup": {"name": "BalanceDataSetACCGROUP", "type": "TFloatField"}, "balancedatasetaccclass": {"name": "BalanceDataSetACCCLASS", "type": "TFloatField"}, "balancedatasetsaldo": {"name": "BalanceDataSetSALDO", "type": "TFloatField"}, "balancedatasetpart": {"name": "BalanceDataSetPART", "type": "TIntegerField"}, "balancedatasetbalname": {"name": "BalanceDataSetBALNAME", "type": "TWideStringField"}, "balancedatasetclosebalance": {"name": "BalanceDataSetCLOSEBALANCE", "type": "TFloatField"}, "balancedatasetratedifference": {"name": "BalanceDataSetRATEDIFFERENCE", "type": "TFloatField"}, "balancedatasetcurrencyposition": {"name": "BalanceDataSetCURRENCYPOSITION", "type": "TFloatField"}, "balancedatasetcashincoming": {"name": "BalanceDataSetCASHINCOMING", "type": "TFloatField"}, "balancedatasettypeid_name": {"name": "BalanceDataSetTYPEID_NAME", "type": "TStringField"}, "balancedatasetadditionaltypeid_name": {"name": "BalanceDataSetADDITIONALTYPEID_NAME", "type": "TStringField"}, "balancedatasetsaldo_name": {"name": "BalanceDataSetSALDO_NAME", "type": "TWideStringField"}, "balancedatasetratedifference_name": {"name": "BalanceDataSetRATEDIFFERENCE_NAME", "type": "TWideStringField"}, "fevents": {"name": "FEvents", "type": "IActiveFormXEvents"}}, {});
  U.init(async () => {
  });
  U.method("TBalanceRefEditX", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TBalanceRefEditX", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TBalanceRefEditX", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TBalanceRefEditX", "Initialize", null, arguments);
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
  U.method("TBalanceRefEditX", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TBalanceRefEditX", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TBalanceRefEditX", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBalanceRefEditX", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBalanceRefEditX", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TBalanceRefEditX", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TBalanceRefEditX", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TBalanceRefEditX", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TBalanceRefEditX", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBalanceRefEditX", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBalanceRefEditX", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBalanceRefEditX", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TBalanceRefEditX", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TBalanceRefEditX", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBalanceRefEditX", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TBalanceRefEditX", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TBalanceRefEditX", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBalanceRefEditX", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBalanceRefEditX", "BalanceDataSetCalcFields", async function BalanceDataSetCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  { const $t1 = (await $.mv((await $.v(C, "BalanceDataSetTYPEID")), "AsInteger"));
    if ($.eq($t1, 1)) {
      await $.mset((await $.v(C, "BalanceDataSetTYPEID_NAME")), "Value", "Aktiv");
    }
    else if ($.eq($t1, 2)) {
      await $.mset((await $.v(C, "BalanceDataSetTYPEID_NAME")), "Value", "Passiv");
    }
    else if ($.eq($t1, 3)) {
      await $.mset((await $.v(C, "BalanceDataSetTYPEID_NAME")), "Value", "Aktiv-Passiv");
    }
  }
  { const $t2 = (await $.mv((await $.v(C, "BalanceDataSetADDITIONALTYPEID")), "AsInteger"));
    if ($.eq($t2, 1)) {
      await $.mset((await $.v(C, "BalanceDataSetADDITIONALTYPEID_NAME")), "Value", "Aktiv");
    }
    else if ($.eq($t2, 2)) {
      await $.mset((await $.v(C, "BalanceDataSetADDITIONALTYPEID_NAME")), "Value", "Passiv");
    }
    else if ($.eq($t2, 3)) {
      await $.mset((await $.v(C, "BalanceDataSetADDITIONALTYPEID_NAME")), "Value", "Aktiv-Passiv");
    }
  }
  { const $t3 = (await $.mv((await $.v(C, "BalanceDataSetRATEDIFFERENCE")), "AsInteger"));
    if ($.eq($t3, 0)) {
      await $.mset((await $.v(C, "BalanceDataSetRATEDIFFERENCE_NAME")), "Value", "Hesablanmır");
    }
    else if ($.eq($t3, 1)) {
      await $.mset((await $.v(C, "BalanceDataSetRATEDIFFERENCE_NAME")), "Value", "Hesablanır");
    }
  }
  { const $t4 = (await $.mv((await $.v(C, "BalanceDataSetSALDO")), "AsInteger"));
    if ($.eq($t4, 0)) {
      await $.mset((await $.v(C, "BalanceDataSetSALDO_NAME")), "Value", "Nəzərə alınmır");
    }
    else if ($.eq($t4, 1)) {
      await $.mset((await $.v(C, "BalanceDataSetSALDO_NAME")), "Value", "Nəzərə alınır");
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TBalanceRefEditX", "BalanceDataSetAfterScroll", async function BalanceDataSetAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.v(C, "ComboBoxTYPEID_NAME")), "ItemIndex", $.sub((await $.mv((await $.v(C, "BalanceDataSetTYPEID")), "asinteger")), 1));
  await $.mset((await $.v(C, "ComboBoxADDITIONALTYPEID_NAME")), "ItemIndex", $.sub((await $.mv((await $.v(C, "BalanceDataSetADDITIONALTYPEID")), "asinteger")), 1));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TBalanceRefEditX", "ComboBoxPlanChange", async function ComboBoxPlanChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t5 = (await $.mv((await $.v(C, "ComboBoxPlan")), "ItemIndex"));
    if ($.eq($t5, 0)) {
      { const $t6 = await $.iset((await $.mv((await $.v(C, "BalanceDataSet")), "SQL")), [1], "out_bal_spr1 b"); if ($t6 !== undefined) { await $.mset((await $.v(C, "BalanceDataSet")), "SQL", $t6); } }
    }
    else if ($.eq($t5, 1)) {
      { const $t7 = await $.iset((await $.mv((await $.v(C, "BalanceDataSet")), "SQL")), [1], "out_bal_spr2 b"); if ($t7 !== undefined) { await $.mset((await $.v(C, "BalanceDataSet")), "SQL", $t7); } }
    }
    else if ($.eq($t5, 2)) {
      { const $t8 = await $.iset((await $.mv((await $.v(C, "BalanceDataSet")), "SQL")), [1], "out_bal_spr3 b"); if ($t8 !== undefined) { await $.mset((await $.v(C, "BalanceDataSet")), "SQL", $t8); } }
    }
    else if ($.eq($t5, 3)) {
      { const $t9 = await $.iset((await $.mv((await $.v(C, "BalanceDataSet")), "SQL")), [1], "out_bal_spr4 b"); if ($t9 !== undefined) { await $.mset((await $.v(C, "BalanceDataSet")), "SQL", $t9); } }
    }
  }
  await $.mcall((await $.v(C, "BalanceDataSet")), "Close", []);
  await $.mcall((await $.v(C, "BalanceDataSet")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "ComboBoxTYPEID_NAMEChange", async function ComboBoxTYPEID_NAMEChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BalanceDataSet")), "Edit", []);
  await $.mset((await $.v(C, "BalanceDataSetTYPEID")), "AsInteger", $.add((await $.mv((await $.v(C, "ComboBoxTYPEID_NAME")), "ItemIndex")), 1));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "ComboBoxADDITIONALTYPEID_NAMEChange", async function ComboBoxADDITIONALTYPEID_NAMEChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BalanceDataSet")), "Edit", []);
  await $.mset((await $.v(C, "BalanceDataSetADDITIONALTYPEID")), "AsInteger", $.add((await $.mv((await $.v(C, "ComboBoxADDITIONALTYPEID_NAME")), "ItemIndex")), 1));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "EditSearchChange", async function EditSearchChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataSource1")), "DataSet")), "Locate", ["BAL_CN", (await $.mv((await $.v(C, "EditSearch")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "CmbBoxCurrPositionChange", async function CmbBoxCurrPositionChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BalanceDataSet")), "Edit", []);
  await $.mset((await $.v(C, "BalanceDataSetCURRENCYPOSITION")), "Value", (await $.mv((await $.v(C, "CmbBoxCurrPosition")), "ItemIndex")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "CmbBoxCashIncomingChange", async function CmbBoxCashIncomingChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BalanceDataSet")), "Edit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "DataSource1DataChange", async function DataSource1DataChange(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "field": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "field"]);
  await $.mset((await $.v(C, "CmbBoxCurrPosition")), "ItemIndex", (await $.mv((await $.v(C, "BalanceDataSetCURRENCYPOSITION")), "AsInteger")));
  return L0.result;
}, {"params": ["Sender", "Field"], "kind": "procedure", "ptypes": ["TObject", "TField"]});
  U.method("TBalanceRefEditX", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ComboBoxTYPEID_NAME")), "ItemIndex", $.sub((await $.mv((await $.v(C, "BalanceDataSetTYPEID")), "asinteger")), 1));
  await $.mset((await $.v(C, "CmbBoxCurrPosition")), "ItemIndex", 0);
  await $.mset((await $.v(C, "BalanceDataSet")), "active", true);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
