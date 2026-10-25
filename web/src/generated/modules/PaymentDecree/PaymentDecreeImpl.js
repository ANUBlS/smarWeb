// Generated from PaymentDecreeImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PaymentDecreeImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "PaymentDecreeX_TLB", "StdVcl", "StdCtrls", "ExtCtrls", "Mask", "DBCtrls", "Db", "OracleData", "ComCtrls", "ToolWin", "ImgList", "Buttons", "SBPlgAx50_TLB", "CMDBSearchEdit", "Grids", "XDBGrids", "XDBCtrls", "DBGrids", "ComObj", "ComServ", "PaymentDataModul", "CurrencyToHR_Azeri_Impl", "UntArchive", "UntMainReport", "UntSecondReport", "sboapiDataModuleImpl", "accserch", "SBTranslateProc", "inv_Archiveimpl", "CommanParametrs"]);
  const C = [U];
  U.defClass("TPaymentDecree", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "ekbcod": {"name": "EKBCod", "type": "TEdit"}, "cbkbname": {"name": "CBKBName", "type": "TComboBox"}, "ekbinn": {"name": "EKBInn", "type": "TEdit"}, "ekbcoracc": {"name": "EKBCorAcc", "type": "TEdit"}, "ekbswift": {"name": "EKBSwift", "type": "TEdit"}, "edaname": {"name": "EDAName", "type": "TEdit"}, "edainn": {"name": "EDAInn", "type": "TEdit"}, "ekanum": {"name": "EKANum", "type": "TEdit"}, "ekaname": {"name": "EKAName", "type": "TEdit"}, "ekainn": {"name": "EKAInn", "type": "TEdit"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "eammountw": {"name": "EAmmountW", "type": "TEdit"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "eammount": {"name": "EAmmount", "type": "TEdit"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "panel20": {"name": "Panel20", "type": "TPanel"}, "eextra": {"name": "EExtra", "type": "TEdit"}, "panel21": {"name": "Panel21", "type": "TPanel"}, "epnum": {"name": "EPNum", "type": "TEdit"}, "panel22": {"name": "Panel22", "type": "TPanel"}, "eassignment": {"name": "EAssignment", "type": "TEdit"}, "panel23": {"name": "Panel23", "type": "TPanel"}, "dtpayment": {"name": "DTPayment", "type": "TDateTimePicker"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "checkbox": {"name": "CheckBox", "type": "TCheckBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "dbname": {"name": "DBName", "type": "TComboBox"}, "dbcod": {"name": "DBCod", "type": "TEdit"}, "dbinn": {"name": "DBInn", "type": "TEdit"}, "dbcoracc": {"name": "DBCorAcc", "type": "TEdit"}, "dbswift": {"name": "DBSwift", "type": "TEdit"}, "panel24": {"name": "Panel24", "type": "TPanel"}, "mod_bank": {"name": "mod_bank", "type": "TDBLookupComboBox"}, "panel25": {"name": "Panel25", "type": "TPanel"}, "panel26": {"name": "Panel26", "type": "TPanel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "ednum": {"name": "EdNum", "type": "TEdit"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "edprescription": {"name": "edPrescription", "type": "TMemo"}, "col1": {"name": "Col1", "type": "TMemo"}, "col2": {"name": "Col2", "type": "TMemo"}, "col3": {"name": "Col3", "type": "TMemo"}, "col4": {"name": "Col4", "type": "TMemo"}, "cbdanum": {"name": "CBDANum", "type": "TComboBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "editdebtaccno": {"name": "EditDebtAccNo", "type": "TEdit"}, "fevents": {"name": "FEvents", "type": "IPaymentDecreeEvents"}, "rate": {"name": "Rate", "type": "array"}, "rate1": {"name": "Rate1", "type": "array"}, "isupdate": {"name": "isUpdate", "type": "boolean"}, "cid": {"name": "cid", "type": "integer"}}, {});
  U.fieldInit("TPaymentDecree", "rate", () => []);
  U.fieldInit("TPaymentDecree", "rate1", () => []);
  U.init(async () => {
    U.var_("PaymentDecree", null, "TPaymentDecree");
    U.var_("val_name", '', "String");
    U.var_("Activ", 0, "integer");
  });
  U.method("TPaymentDecree", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TPaymentDecree", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TPaymentDecree", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TPaymentDecree", "Initialize", null, arguments);
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
  U.method("TPaymentDecree", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentDecree", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentDecree", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentDecree", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentDecree", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentDecree", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentDecree", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentDecree", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentDecree", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentDecree", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentDecree", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentDecree", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentDecree", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentDecree", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentDecree", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentDecree", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentDecree", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentDecree", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentDecree", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TPaymentDecree", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TPaymentDecree", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPaymentDecree", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPaymentDecree", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TPaymentDecree", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TPaymentDecree", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TPaymentDecree", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TPaymentDecree", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPaymentDecree", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPaymentDecree", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPaymentDecree", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TPaymentDecree", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TPaymentDecree", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPaymentDecree", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TPaymentDecree", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TPaymentDecree", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPaymentDecree", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPaymentDecree", "Get_Icon", async function Get_Icon(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["imageindex"] = 1;
  await $.stmt((await $.mcall((await $.v(C, "ImageList")), "GetIcon", [L0["imageindex"], (await $.v(C, "Icon"))])));
  L0["result"] = (await $.mv((await $.v(C, "Icon")), "Handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPaymentDecree", "WithCoin", async function WithCoin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"ammount": $.copyArg(p0), result: '', "ttrunc": 0, "tdev": 0, "s": 0, "sr": '', "et": '', "st": 0, "aa": ''};
  await $.fixArgs(L0, ["ammount"]);
  if ($.truthy($.eq((await $.v(C, "Activ")), 1))) {
    L0["aa"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "ODSArchive")), "FieldByName", ["Dacc_no"])), "AsString"));
  }
  if ($.truthy($.eq((await $.v(C, "Activ")), 2))) {
    L0["aa"] = (await $.mv((await $.v(C, "DBLookupComboBox2")), "Text"));
  }
  {
    const $t1 = (await $.v(C, "PaymentDataMod"));
    await $.mcall((await $.wv([$t1], "Ods_Acc_Vall", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t1], "Ods_Acc_Vall", C, false)), "SetVariable", ["acc_no", (await $.wv([$t1], "aa", { get: async () => L0["aa"], set: async (v) => { L0["aa"] = v; }, local: true }, false))])));
    await $.mcall((await $.wv([$t1], "Ods_Acc_Vall", C, false)), "Open", []);
    if ($.truthy(($.ge((await $.mv((await $.mcall((await $.wv([$t1], "Ods_Acc_Vall", C, false)), "FieldByName", ["val_acc"])), "AsInteger")), 0)))) {
      await $.wset([$t1], "sr", (await $.wcall([$t1], "CurrencyToHR_Azeri", [(await $.wcall([$t1], "StrToCurr", [(await $.wv([$t1], "Ammount", { get: async () => L0["ammount"], set: async (v) => { L0["ammount"] = v; }, local: true }, false))], C)), 0, [1]], C)), { get: async () => L0["sr"], set: async (v) => { L0["sr"] = v; }, local: true });
      await $.wset([$t1], "s", (await $.wcall([$t1], "pos", ["manat", (await $.wv([$t1], "sr", { get: async () => L0["sr"], set: async (v) => { L0["sr"] = v; }, local: true }, false))], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.stmt((await $.wcall([$t1], "delete", [$.ref(async () => (await $.wv([$t1], "sr", { get: async () => L0["sr"], set: async (v) => { L0["sr"] = v; }, local: true }, false)), async ($t2) => { await $.wset([$t1], "sr", $t2, { get: async () => L0["sr"], set: async (v) => { L0["sr"] = v; }, local: true }); }), (await $.wv([$t1], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), 5], C)));
      await $.wset([$t1], "tDev", ((await $.wcall([$t1], "Round", [$.mul((await $.wcall([$t1], "Frac", [(await $.wcall([$t1], "StrToCurr", [(await $.wv([$t1], "Ammount", { get: async () => L0["ammount"], set: async (v) => { L0["ammount"] = v; }, local: true }, false))], C))], C)), 100)], C))), { get: async () => L0["tdev"], set: async (v) => { L0["tdev"] = v; }, local: true });
      await $.wset([$t1], "ET", $.add($.add($.add($.add($.add($.add($.add($.add((await $.wv([$t1], "sr", { get: async () => L0["sr"], set: async (v) => { L0["sr"] = v; }, local: true }, false)), ""), (await $.mv((await $.mcall((await $.wv([$t1], "Ods_Acc_Vall", C, false)), "FieldByName", ["VALU_SHORT"])), "AsString"))), " "), ", "), " "), (await $.wcall([$t1], "FloatToStr", [(await $.wv([$t1], "tDev", { get: async () => L0["tdev"], set: async (v) => { L0["tdev"] = v; }, local: true }, false))], C))), " "), (await $.mv((await $.mcall((await $.wv([$t1], "Ods_Acc_Vall", C, false)), "FieldByName", ["Valu_Bala"])), "AsString"))), { get: async () => L0["et"], set: async (v) => { L0["et"] = v; }, local: true });
      await $.wset([$t1], "val_name", (await $.mv((await $.mcall((await $.wv([$t1], "Ods_Acc_Vall", C, false)), "FieldByName", ["val_name"])), "AsString")), C);
      L0.result = (await $.wv([$t1], "ET", { get: async () => L0["et"], set: async (v) => { L0["et"] = v; }, local: true }, false));
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t1], "Ods_Acc_Vall", C, false)), "RecordCount")), 0))) {
      if ($.truthy((await $.or_(($.ge((await $.mv((await $.mcall((await $.wv([$t1], "Ds_valute", C, false)), "FieldByName", ["valute"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t1], "Ds_valute", C, false)), "FieldByName", ["valute"])), "AsInteger")), 0)))))) {
        await $.wset([$t1], "sr", (await $.wcall([$t1], "CurrencyToHR_Azeri", [(await $.wcall([$t1], "StrToCurr", [(await $.wv([$t1], "Ammount", { get: async () => L0["ammount"], set: async (v) => { L0["ammount"] = v; }, local: true }, false))], C)), 0, [1]], C)), { get: async () => L0["sr"], set: async (v) => { L0["sr"] = v; }, local: true });
        await $.wset([$t1], "s", (await $.wcall([$t1], "pos", ["manat", (await $.wv([$t1], "sr", { get: async () => L0["sr"], set: async (v) => { L0["sr"] = v; }, local: true }, false))], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
        await $.stmt((await $.wcall([$t1], "delete", [$.ref(async () => (await $.wv([$t1], "sr", { get: async () => L0["sr"], set: async (v) => { L0["sr"] = v; }, local: true }, false)), async ($t3) => { await $.wset([$t1], "sr", $t3, { get: async () => L0["sr"], set: async (v) => { L0["sr"] = v; }, local: true }); }), (await $.wv([$t1], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), 5], C)));
        await $.wset([$t1], "tDev", ((await $.wcall([$t1], "Round", [$.mul((await $.wcall([$t1], "Frac", [(await $.wcall([$t1], "StrToCurr", [(await $.wv([$t1], "Ammount", { get: async () => L0["ammount"], set: async (v) => { L0["ammount"] = v; }, local: true }, false))], C))], C)), 100)], C))), { get: async () => L0["tdev"], set: async (v) => { L0["tdev"] = v; }, local: true });
        await $.wset([$t1], "ET", $.add($.add($.add($.add($.add($.add($.add($.add((await $.wv([$t1], "sr", { get: async () => L0["sr"], set: async (v) => { L0["sr"] = v; }, local: true }, false)), ""), (await $.mv((await $.mcall((await $.wv([$t1], "Ds_valute", C, false)), "FieldByName", ["VALU_SHORT"])), "AsString"))), " "), ", "), " "), (await $.wcall([$t1], "FloatToStr", [(await $.wv([$t1], "tDev", { get: async () => L0["tdev"], set: async (v) => { L0["tdev"] = v; }, local: true }, false))], C))), " "), (await $.mv((await $.mcall((await $.wv([$t1], "Ds_valute", C, false)), "FieldByName", ["Valu_Bala"])), "AsString"))), { get: async () => L0["et"], set: async (v) => { L0["et"] = v; }, local: true });
        await $.wset([$t1], "val_name", (await $.mv((await $.mcall((await $.wv([$t1], "Ds_valute", C, false)), "FieldByName", ["val_name"])), "AsString")), C);
        L0.result = (await $.wv([$t1], "ET", { get: async () => L0["et"], set: async (v) => { L0["et"] = v; }, local: true }, false));
      }
    }
  }
  return L0.result;
}, {"params": ["Ammount"], "kind": "function", "ptypes": ["String"]});
  U.method("TPaymentDecree", "XDBGrid1CellClick", async function XDBGrid1CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_child")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_child")), "SetVariable", ["PID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_Archive")), "FieldByName", ["id"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_child")), "Open", []);
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.method("TPaymentDecree", "ExtractMonth", async function ExtractMonth(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"datetime": $.copyArg(p0), "decimalsymbol": $.copyArg(p1), result: '', "year": 0, "month": 0, "day": 0};
  await $.fixArgs(L0, ["datetime", "decimalsymbol"]);
  L0["months"] = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"];
  await $.stmt((await $.call(C, "DecodeDate", [L0["datetime"], $.ref(async () => L0["year"], async ($t4) => { L0["year"] = $t4; }), $.ref(async () => L0["month"], async ($t5) => { L0["month"] = $t5; }), $.ref(async () => L0["day"], async ($t6) => { L0["day"] = $t6; })])));
  L0["result"] = $.add($.add($.add($.add((await $.call(C, "IntToStr", [L0["day"]])), L0["decimalsymbol"]), (await $.idx(L0["months"], [L0["month"]]))), L0["decimalsymbol"]), (await $.call(C, "IntToStr", [L0["year"]])));
  return L0.result;
}, {"params": ["DateTime", "DecimalSymbol"], "kind": "function", "ptypes": ["TDateTime", "String"]});
  U.method("TPaymentDecree", "CleanUp", async function CleanUp(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "compcount": 0};
  { const $t7 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["compcount"] = 0;
    let $t8 = true;
    for (;;) {
      if (!$t8) { L0["compcount"] = $.succ(L0["compcount"], 1); }
      $t8 = false;
      if (!($.ord(L0["compcount"]) <= $.ord($t7))) break;
      if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["compcount"]])), "TEdit")))) {
        await $.mset((await $.idx((await $.v(C, "Components")), [L0["compcount"]])), "Text", "");
      } else {
        if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["compcount"]])), "TComboBox")))) {
          await $.mset((await $.idx((await $.v(C, "Components")), [L0["compcount"]])), "Text", "");
        } else {
          if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["compcount"]])), "TDBLookupComboBox")))) {
            await $.mset((await $.idx((await $.v(C, "Components")), [L0["compcount"]])), "KeyValue", "");
          }
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPaymentDecree", "PustToCombo", async function PustToCombo(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "field": $.copyArg(p1), "combobox": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["dataset", "field", "combobox"]);
  if ($.truthy($.eq((await $.mv(L0["dataset"], "Active")), false))) {
    await $.mcall(L0["dataset"], "Open", []);
  }
  await $.mcall(L0["dataset"], "First", []);
  await $.mcall((await $.mv(L0["combobox"], "Items")), "Clear", []);
  while ($.truthy($.not(((await $.mv(L0["dataset"], "Eof")))))) {
    await $.stmt((await $.mcall((await $.mv(L0["combobox"], "Items")), "Add", [(await $.mv((await $.mcall(L0["dataset"], "FieldByName", [L0["field"]])), "AsString"))])));
    await $.mcall(L0["dataset"], "Next", []);
    await $.tick();
  }
  return L0.result;
}, {"params": ["DataSet", "Field", "ComboBox"], "kind": "procedure", "ptypes": ["TOracleDataSet", "String", "TComboBox"]});
  U.method("TPaymentDecree", "PustToComboID", async function PustToComboID(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "field": $.copyArg(p1), "idfield": $.copyArg(p2), "combobox": $.copyArg(p3), result: undefined, "rateindex": 0};
  await $.fixArgs(L0, ["dataset", "field", "idfield", "combobox"]);
  L0["rateindex"] = 0;
  if ($.truthy($.eq((await $.mv(L0["dataset"], "Active")), false))) {
    await $.mcall(L0["dataset"], "Open", []);
  }
  await $.mcall(L0["dataset"], "First", []);
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "Rate")), async ($t9) => { await $.set(C, "Rate", $t9); }), (await $.mv(L0["dataset"], "RecordCount"))])));
  await $.mcall((await $.mv(L0["combobox"], "Items")), "Clear", []);
  while ($.truthy($.not(((await $.mv(L0["dataset"], "Eof")))))) {
    await $.stmt((await $.mcall((await $.mv(L0["combobox"], "Items")), "Add", [(await $.mv((await $.mcall(L0["dataset"], "FieldByName", [L0["field"]])), "AsString"))])));
    { const $t10 = await $.iset((await $.v(C, "Rate")), [L0["rateindex"]], (await $.mv((await $.mcall(L0["dataset"], "FieldByName", [L0["idfield"]])), "AsInteger"))); if ($t10 !== undefined) { await $.set(C, "Rate", $t10); } }
    await $.mcall(L0["dataset"], "Next", []);
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["rateindex"], async ($t11) => { L0["rateindex"] = $t11; })])));
    await $.tick();
  }
  return L0.result;
}, {"params": ["DataSet", "Field", "IDfield", "ComboBox"], "kind": "procedure", "ptypes": ["TOracleDataSet", "String", "String", "TComboBox"]});
  U.method("TPaymentDecree", "PustToComboKOD", async function PustToComboKOD(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "field": $.copyArg(p1), "idfield": $.copyArg(p2), "combobox": $.copyArg(p3), result: undefined, "rateindex1": 0};
  await $.fixArgs(L0, ["dataset", "field", "idfield", "combobox"]);
  L0["rateindex1"] = 0;
  if ($.truthy($.eq((await $.mv(L0["dataset"], "Active")), false))) {
    await $.mcall(L0["dataset"], "Open", []);
  }
  await $.mcall(L0["dataset"], "First", []);
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "Rate1")), async ($t12) => { await $.set(C, "Rate1", $t12); }), (await $.mv(L0["dataset"], "RecordCount"))])));
  await $.mcall((await $.mv(L0["combobox"], "Items")), "Clear", []);
  while ($.truthy($.not(((await $.mv(L0["dataset"], "Eof")))))) {
    await $.stmt((await $.mcall((await $.mv(L0["combobox"], "Items")), "Add", [(await $.mv((await $.mcall(L0["dataset"], "FieldByName", [L0["field"]])), "AsString"))])));
    { const $t13 = await $.iset((await $.v(C, "Rate1")), [L0["rateindex1"]], (await $.mv((await $.mcall(L0["dataset"], "FieldByName", [L0["idfield"]])), "AsInteger"))); if ($t13 !== undefined) { await $.set(C, "Rate1", $t13); } }
    await $.mcall(L0["dataset"], "Next", []);
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["rateindex1"], async ($t14) => { L0["rateindex1"] = $t14; })])));
    await $.tick();
  }
  return L0.result;
}, {"params": ["DataSet", "Field", "IDfield", "ComboBox"], "kind": "procedure", "ptypes": ["TOracleDataSet", "String", "String", "TComboBox"]});
  U.method("TPaymentDecree", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "PaymentDecree", Self);
  await $.set(C, "PaymentDataMod", (await $.mcall((await $.v(C, "TPaymentDataMod")), "Create", [Self])));
  await $.set(C, "QRMainReport", (await $.mcall((await $.v(C, "TQRMainReport")), "Create", [Self])));
  await $.set(C, "QRCommonReport", (await $.mcall((await $.v(C, "TQRCommonReport")), "Create", [Self])));
  await $.set(C, "FormAccounts", (await $.mcall((await $.v(C, "TFormAccounts")), "Create", [Self])));
  {
    const $t15 = (await $.v(C, "PaymentDataMod"));
    await $.mcall((await $.wv([$t15], "ODSAccounts", C, false)), "Open", []);
    await $.mcall((await $.wv([$t15], "ODSBankInfo", C, false)), "Open", []);
    await $.mcall((await $.wv([$t15], "ODSBankM", C, false)), "Open", []);
    await $.mcall((await $.wv([$t15], "Ds_valute", C, false)), "Open", []);
    await $.mcall((await $.wv([$t15], "Ds_Acoount", C, false)), "Open", []);
    await $.mcall((await $.wv([$t15], "ODSbank", C, false)), "Open", []);
    await $.mset((await $.wv([$t15], "DBLookupComboBox1", C, false)), "KeyValue", "");
    await $.stmt((await $.mcall((await $.wv([$t15], "PaymentDecree", C, false)), "PustToComboID", [(await $.wv([$t15], "ODSBankM", C, false)), "NAME", "ID", (await $.wv([$t15], "CBKBName", C, false))])));
    await $.stmt((await $.mcall((await $.wv([$t15], "PaymentDecree", C, false)), "PustToComboKod", [(await $.wv([$t15], "ODSBankInfo", C, false)), "NAME", "bankcode", (await $.wv([$t15], "DBName", C, false))])));
    if ($.truthy($.eq((await $.wcall([$t15], "trim", [(await $.mv((await $.wv([$t15], "EPNum", C, false)), "Text"))], C)), ""))) {
      {
        const $t16 = (await $.mv((await $.wv([$t15], "PaymentDataMod", C, false)), "ODS_PNUM"));
        await $.stmt($.wcall([$t15, $t16], "Close", [], C));
        await $.stmt($.wcall([$t15, $t16], "Open", [], C));
        await $.mset((await $.wv([$t15, $t16], "EPNum", C, false)), "Text", (await $.mv((await $.wcall([$t15, $t16], "FieldByName", ["PNum"], C)), "AsString")));
      }
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t15], "ODSbank", C, false)), "FieldByName", ["swift"])), "AsString")), "REVAAZ22"))) {
      await $.mset((await $.wv([$t15], "ODSTransferaccount", C, false)), "Filtered", (await $.wv([$t15], "false", C, false)));
      await $.mset((await $.wv([$t15], "ODSTransferaccount", C, false)), "Filter", "");
      await $.mcall((await $.wv([$t15], "ODSTransferaccount", C, false)), "Open", []);
      await $.mset((await $.wv([$t15], "DBLookupComboBox2", C, false)), "ListSource", (await $.wv([$t15], "DS_transferaccount", C, false)));
      await $.mset((await $.wv([$t15], "EDAName", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t15], "PaymentDataMod", C, false)), "ODSbank")), "FieldByName", ["bank"])), "AsString")));
      await $.mset((await $.wv([$t15], "EDAInn", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t15], "PaymentDataMod", C, false)), "ODSbank")), "FieldByName", ["inn"])), "AsString")));
    }
    await $.mset((await $.wv([$t15], "DTPayment", C, false)), "DateTime", (await $.mcall((await $.wv([$t15], "OPPayment", C, false)), "CallDateFunction", ["GetCurrentDate", []])));
    await $.mset((await $.wv([$t15], "CheckBox", C, false)), "Checked", (await $.mcall((await $.wv([$t15], "OPPayment", C, false)), "CallBooleanFunction", ["isAccountDetails", []])));
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "CBDANumChange", async function CBDANumChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "CBKBNameChange", async function CBKBNameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EKBCod")), "Text", "");
  await $.mset((await $.v(C, "EKBInn")), "Text", "");
  await $.mset((await $.v(C, "EKBCorAcc")), "Text", "");
  await $.mset((await $.v(C, "EKBSwift")), "Text", "");
  try {
    {
      const $t17 = (await $.mv((await $.v(C, "PaymentDataMod")), "ODSBankM"));
      await $.stmt($.wcall([$t17], "Close", [], C));
      await $.mcall((await $.wv([$t17], "SQL", C, false)), "Clear", []);
      await $.mset((await $.wv([$t17], "SQL", C, false)), "Text", $.add($.add("Select * From BankM Where ID= ", (await $.wcall([$t17], "IntToStr", [(await $.idx((await $.wv([$t17], "Rate", C, false)), [(await $.mv((await $.wv([$t17], "CBKBName", C, false)), "ItemIndex"))]))], C))), "order by name"));
      await $.stmt($.wcall([$t17], "Open", [], C));
      await $.mset((await $.wv([$t17], "EKBCod", C, false)), "Text", (await $.mv((await $.wcall([$t17], "FieldByName", ["BANKCODE"], C)), "AsString")));
      await $.mset((await $.wv([$t17], "EKBInn", C, false)), "Text", (await $.mv((await $.wcall([$t17], "FieldByName", ["INN"], C)), "AsString")));
      await $.mset((await $.wv([$t17], "EKBCorAcc", C, false)), "Text", (await $.mv((await $.wcall([$t17], "FieldByName", ["KRNO"], C)), "AsString")));
      await $.mset((await $.wv([$t17], "EKBSwift", C, false)), "Text", (await $.mv((await $.wcall([$t17], "FieldByName", ["SWIFT"], C)), "AsString")));
    }
  } finally {
    {
      const $t18 = (await $.mv((await $.v(C, "PaymentDataMod")), "ODSBankM"));
      await $.stmt($.wcall([$t18], "Close", [], C));
      await $.mcall((await $.wv([$t18], "SQL", C, false)), "Clear", []);
      await $.mset((await $.wv([$t18], "SQL", C, false)), "Text", "Select * From BankM  order by name");
      await $.stmt($.wcall([$t18], "Open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "ActiveFormDestroy", async function ActiveFormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "Rate"))])))) {
    await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "Rate")), async ($t19) => { await $.set(C, "Rate", $t19); }), 0])));
  }
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "Rate1"))])))) {
    await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "Rate1")), async ($t20) => { await $.set(C, "Rate1", $t20); }), 0])));
  }
  await $.mcall((await $.v(C, "PaymentDecree")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "EAmmountKeyPress", async function EAmmountKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Activ", 2);
  if ($.truthy((await $.and_(($.eq((await L0["key"].get()), "\r")), async () => ($.ne((await $.call(C, "Trim", [(await $.mv((await $.call(C, "TEdit", [L0["sender"]])), "Text"))])), "")))))) {
    await $.mset((await $.v(C, "EAmmountW")), "text", (await $.call(C, "WithCoin", [(await $.mv((await $.v(C, "EAmmount")), "text"))])));
  } else {
    if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPaymentDecree", "EditDebtAccNoDblClick", async function EditDebtAccNoDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "EAmmount")), "Clear", []);
  await $.mcall((await $.v(C, "EAmmountW")), "Clear", []);
  {
    const $t21 = (await $.mv((await $.v(C, "PaymentDataMod")), "ODSAccounts"));
    await $.stmt($.wcall([$t21], "Close", [], C));
    await $.mcall((await $.wv([$t21], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t21], "SQL", C, false)), "Text", (await $.mv((await $.mv((await $.mv((await $.wv([$t21], "PaymentDataMod", C, false)), "rezerv")), "sql")), "Text")));
    await $.stmt($.wcall([$t21], "Open", [], C));
  }
  await $.mset((await $.v(C, "FormAccounts")), "DebOrKred", true);
  await $.mset((await $.v(C, "FormAccounts")), "v_AccNo", (await $.mv((await $.v(C, "EditDebtAccNo")), "Text")));
  await $.mcall((await $.v(C, "FormAccounts")), "ShowModal", []);
  await $.mset((await $.v(C, "EditDebtAccNo")), "Text", (await $.mv((await $.v(C, "FormAccounts")), "v_AccNo")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "EditDebtAccNoExit", async function EditDebtAccNoExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ods_Acc_Vall")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ods_Acc_Vall")), "SetVariable", ["acc_no", (await $.mv((await $.v(C, "EditDebtAccNo")), "Text"))])));
  await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ods_Acc_Vall")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "ToolButton8Click", async function ToolButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "FrmArchive", (await $.mcall((await $.v(C, "TFrmArchive")), "Create", [Self])));
    {
      const $t22 = (await $.mv((await $.v(C, "PaymentDataMod")), "ODSArchive"));
      if ($.truthy($.eq((await $.wv([$t22], "Active", C, false)), (await $.wv([$t22], "false", C, false))))) {
        await $.stmt($.wcall([$t22], "Open", [], C));
      } else {
        await $.stmt($.wcall([$t22], "Refresh", [], C));
      }
    }
    await $.mcall((await $.v(C, "FrmArchive")), "ShowModal", []);
  } finally {
    await $.mcall((await $.v(C, "FrmArchive")), "Release", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "ToolButton10Click", async function ToolButton10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "CleanUp", []));
  await $.mset((await $.v(C, "ToolButton12")), "Enabled", true);
  await $.mset((await $.v(C, "GroupBox5")), "Visible", false);
  await $.mset((await $.v(C, "Panel25")), "Visible", false);
  await $.mset((await $.v(C, "GroupBox4")), "Visible", false);
  await $.mset((await $.v(C, "GroupBox6")), "Visible", false);
  await $.mset((await $.v(C, "Panel26")), "Visible", false);
  await $.mset((await $.v(C, "GroupBox7")), "Visible", true);
  await $.mset((await $.v(C, "GroupBox8")), "Visible", true);
  await $.mset((await $.v(C, "edPrescription")), "Text", "");
  await $.mset((await $.v(C, "EDAInn")), "Visible", false);
  await $.mset((await $.v(C, "Panel13")), "Visible", false);
  await $.mset((await $.v(C, "Panel24")), "Visible", false);
  await $.mset((await $.v(C, "CheckBox")), "Visible", false);
  await $.mset((await $.v(C, "DBLookupComboBox2")), "KeyValue", "");
  await $.mset((await $.v(C, "Col1")), "Text", "");
  await $.mset((await $.v(C, "Col2")), "Text", "");
  await $.mset((await $.v(C, "Col3")), "Text", "");
  await $.mset((await $.v(C, "Col4")), "Text", "");
  await $.mset((await $.v(C, "edPrescription")), "Text", "");
  await $.set(C, "cid", (-(1)));
  await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_Archive")), "close", []);
  await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Columns")), "Items")), [1])), "Title")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_Archive")), "FieldByName", ["col1"])), "AsString")));
  await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Columns")), "Items")), [2])), "Title")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_Archive")), "FieldByName", ["col2"])), "AsString")));
  await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Columns")), "Items")), [3])), "Title")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_Archive")), "FieldByName", ["col3"])), "AsString")));
  await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Columns")), "Items")), [4])), "Title")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_Archive")), "FieldByName", ["col4"])), "AsString")));
  await $.mcall((await $.v(C, "DBGrid1")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "ToolButton12Click", async function ToolButton12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_Archive")), "open", []);
  if ($.truthy($.eq((await $.v(C, "isUpdate")), false))) {
    if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Do you want to transfer this invoices?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
      {
        const $t23 = (await $.mv((await $.v(C, "PaymentDataMod")), "OPPayment"));
        await $.stmt((await $.wcall([$t23], "CallProcedure", ["add_invoices", [(await $.mv((await $.wv([$t23], "DateTimePicker1", C, false)), "DateTime")), (await $.mv((await $.wv([$t23], "DBName", C, false)), "text")), (await $.mv((await $.wv([$t23], "DBCod", C, false)), "text")), (await $.mv((await $.wv([$t23], "DBInn", C, false)), "text")), (await $.mv((await $.wv([$t23], "DBCorAcc", C, false)), "text")), (await $.mv((await $.wv([$t23], "DBSwift", C, false)), "Text")), (await $.mv((await $.wv([$t23], "CBKBName", C, false)), "text")), (await $.mv((await $.wv([$t23], "EKBInn", C, false)), "text")), (await $.mv((await $.wv([$t23], "DBLookupComboBox2", C, false)), "KeyValue")), (await $.mv((await $.wv([$t23], "EdNum", C, false)), "Text")), (await $.mv((await $.wv([$t23], "edPrescription", C, false)), "Text")), (await $.mv((await $.wv([$t23], "Col1", C, false)), "Text")), (await $.mv((await $.wv([$t23], "Col2", C, false)), "Text")), (await $.mv((await $.wv([$t23], "Col3", C, false)), "Text")), (await $.mv((await $.wv([$t23], "Col4", C, false)), "Text"))]], C)));
      }
    }
    await $.mcall((await $.mv((await $.mv((await $.v(C, "PaymentDataMod")), "Dsr_Inv_Archive")), "DataSet")), "Refresh", []);
    await $.set(C, "cid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "PaymentDataMod")), "Dsr_Inv_Archive")), "DataSet")), "FieldByName", ["id"])), "AsInteger")));
    await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_child")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_child")), "SetVariable", ["INV_ID", (await $.v(C, "cid"))])));
    await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_child")), "Open", []);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Columns")), "Items")), [1])), "Title")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_Archive")), "FieldByName", ["col1"])), "AsString")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Columns")), "Items")), [2])), "Title")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_Archive")), "FieldByName", ["col2"])), "AsString")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Columns")), "Items")), [3])), "Title")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_Archive")), "FieldByName", ["col3"])), "AsString")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Columns")), "Items")), [4])), "Title")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_Archive")), "FieldByName", ["col4"])), "AsString")));
    await $.mcall((await $.v(C, "DBGrid1")), "Refresh", []);
    await $.mset((await $.v(C, "ToolButton12")), "Enabled", false);
  } else {
    if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Do you want to change this invoices?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
      {
        const $t24 = (await $.mv((await $.v(C, "PaymentDataMod")), "OPPayment"));
        const $t25 = (await $.mv((await $.wv([$t24], "PaymentDataMod", C, false)), "Ds_Inv_Archive"));
        await $.stmt((await $.wcall([$t24, $t25], "CallProcedure", ["update_invoices", [(await $.wv([$t24, $t25], "cid", C, false)), (await $.mv((await $.wv([$t24, $t25], "DateTimePicker1", C, false)), "DateTime")), (await $.mv((await $.wv([$t24, $t25], "DBName", C, false)), "text")), (await $.mv((await $.wv([$t24, $t25], "DBCod", C, false)), "text")), (await $.mv((await $.wv([$t24, $t25], "DBInn", C, false)), "text")), (await $.mv((await $.wv([$t24, $t25], "DBCorAcc", C, false)), "text")), (await $.mv((await $.wv([$t24, $t25], "DBSwift", C, false)), "Text")), (await $.mv((await $.wv([$t24, $t25], "CBKBName", C, false)), "text")), (await $.mv((await $.wv([$t24, $t25], "EKBInn", C, false)), "text")), (await $.mv((await $.wv([$t24, $t25], "DBLookupComboBox2", C, false)), "KeyValue")), (await $.mv((await $.wv([$t24, $t25], "EdNum", C, false)), "Text")), (await $.mv((await $.wv([$t24, $t25], "edPrescription", C, false)), "Text")), (await $.mv((await $.wv([$t24, $t25], "Col1", C, false)), "Text")), (await $.mv((await $.wv([$t24, $t25], "Col2", C, false)), "Text")), (await $.mv((await $.wv([$t24, $t25], "Col3", C, false)), "Text")), (await $.mv((await $.wv([$t24, $t25], "Col4", C, false)), "Text"))]], C)));
      }
      await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_child")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_child")), "SetVariable", ["INV_ID", (await $.v(C, "cid"))])));
      await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_child")), "Open", []);
      await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_Archive")), "RefreshRecord", []);
      await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Columns")), "Items")), [1])), "Title")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_Archive")), "FieldByName", ["col1"])), "AsString")));
      await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Columns")), "Items")), [2])), "Title")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_Archive")), "FieldByName", ["col2"])), "AsString")));
      await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Columns")), "Items")), [3])), "Title")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_Archive")), "FieldByName", ["col3"])), "AsString")));
      await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Columns")), "Items")), [4])), "Title")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_Archive")), "FieldByName", ["col4"])), "AsString")));
      await $.mcall((await $.v(C, "DBGrid1")), "Refresh", []);
      await $.mset((await $.v(C, "ToolButton12")), "Enabled", false);
      await $.set(C, "isUpdate", false);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "ToolButton14Click", async function ToolButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "inv_Archive", (await $.mcall((await $.v(C, "Tinv_Archive")), "Create", [Self])));
    await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_Archive")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Inv_Archive")), "Refresh", []);
    await $.mcall((await $.v(C, "inv_Archive")), "ShowModal", []);
  } finally {
    await $.mcall((await $.v(C, "inv_Archive")), "Release", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "pdate": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CBDANum")), "text", (await $.mv((await $.v(C, "EditDebtAccNo")), "Text")));
  await $.mset((await $.v(C, "CBDANum")), "text", (await $.mv((await $.v(C, "DBLookupComboBox2")), "Text")));
  L0["pdate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPayment")), "DateTime"))]));
  if ($.truthy($.eq((await $.v(C, "isUpdate")), false))) {
    if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Do you want to transfer this payment?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
      {
        const $t26 = (await $.mv((await $.v(C, "PaymentDataMod")), "OPPayment"));
        await $.stmt((await $.wcall([$t26], "CallProcedure", ["add_payment", [(await $.wv([$t26], "PDate", { get: async () => L0["pdate"], set: async (v) => { L0["pdate"] = v; }, local: true }, false)), (await $.wcall([$t26], "strtoint", [(await $.mv((await $.wv([$t26], "EPNum", C, false)), "text"))], C)), (await $.mv((await $.wv([$t26], "DBName", C, false)), "text")), (await $.mv((await $.wv([$t26], "DBCod", C, false)), "text")), (await $.mv((await $.wv([$t26], "DBInn", C, false)), "text")), (await $.mv((await $.wv([$t26], "DBCorAcc", C, false)), "text")), (await $.mv((await $.wv([$t26], "DBSwift", C, false)), "text")), (await $.mv((await $.wv([$t26], "EditDebtAccNo", C, false)), "text")), (await $.mv((await $.wv([$t26], "EDAName", C, false)), "text")), (await $.mv((await $.wv([$t26], "EDAInn", C, false)), "text")), (await $.mv((await $.wv([$t26], "CBKBName", C, false)), "text")), (await $.mv((await $.wv([$t26], "EKBCod", C, false)), "text")), (await $.mv((await $.wv([$t26], "EKBInn", C, false)), "text")), (await $.mv((await $.wv([$t26], "EKBCorAcc", C, false)), "text")), (await $.mv((await $.wv([$t26], "EKBSwift", C, false)), "text")), (await $.mv((await $.wv([$t26], "EKANum", C, false)), "text")), (await $.mv((await $.wv([$t26], "EKAName", C, false)), "text")), (await $.mv((await $.wv([$t26], "EKAInn", C, false)), "text")), (await $.wcall([$t26], "strtofloat", [(await $.mv((await $.wv([$t26], "EAmmount", C, false)), "text"))], C)), (await $.mv((await $.wv([$t26], "EAssignment", C, false)), "text")), (await $.mv((await $.wv([$t26], "EExtra", C, false)), "text")), (await $.mv((await $.wv([$t26], "Mod_Bank", C, false)), "text")), (await $.mv((await $.wv([$t26], "edit1", C, false)), "text")), (await $.mv((await $.wv([$t26], "edit4", C, false)), "text")), (await $.mv((await $.wv([$t26], "DBLookupComboBox1", C, false)), "Text"))]], C)));
      }
    }
  } else {
    if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Do you want to change this payment?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
      {
        const $t27 = (await $.mv((await $.v(C, "PaymentDataMod")), "OPPayment"));
        const $t28 = (await $.mv((await $.wv([$t27], "PaymentDataMod", C, false)), "ODSArchive"));
        await $.stmt((await $.wcall([$t27, $t28], "CallProcedure", ["update_payment", [(await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["ID"], C)), "AsInteger")), (await $.wv([$t27, $t28], "PDate", { get: async () => L0["pdate"], set: async (v) => { L0["pdate"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t27, $t28], "EPNum", C, false)), "text")), (await $.mv((await $.wv([$t27, $t28], "DBName", C, false)), "text")), (await $.mv((await $.wv([$t27, $t28], "DBCod", C, false)), "text")), (await $.mv((await $.wv([$t27, $t28], "DBInn", C, false)), "text")), (await $.mv((await $.wv([$t27, $t28], "DBCorAcc", C, false)), "text")), (await $.mv((await $.wv([$t27, $t28], "DBSwift", C, false)), "text")), (await $.mv((await $.wv([$t27, $t28], "CBDANum", C, false)), "text")), (await $.mv((await $.wv([$t27, $t28], "EDAName", C, false)), "text")), (await $.mv((await $.wv([$t27, $t28], "EDAInn", C, false)), "text")), (await $.mv((await $.wv([$t27, $t28], "CBKBName", C, false)), "text")), (await $.mv((await $.wv([$t27, $t28], "EKBCod", C, false)), "text")), (await $.mv((await $.wv([$t27, $t28], "EKBInn", C, false)), "text")), (await $.mv((await $.wv([$t27, $t28], "EKBCorAcc", C, false)), "text")), (await $.mv((await $.wv([$t27, $t28], "EKBSwift", C, false)), "text")), (await $.mv((await $.wv([$t27, $t28], "EKANum", C, false)), "text")), (await $.mv((await $.wv([$t27, $t28], "EKAName", C, false)), "text")), (await $.mv((await $.wv([$t27, $t28], "EKAInn", C, false)), "text")), (await $.wcall([$t27, $t28], "strtofloat", [(await $.mv((await $.wv([$t27, $t28], "EAmmount", C, false)), "text"))], C)), (await $.mv((await $.wv([$t27, $t28], "EAssignment", C, false)), "text")), (await $.mv((await $.wv([$t27, $t28], "EExtra", C, false)), "text")), (await $.mv((await $.wv([$t27, $t28], "Mod_Bank", C, false)), "text")), (await $.mv((await $.wv([$t27, $t28], "edit1", C, false)), "text")), (await $.mv((await $.wv([$t27, $t28], "edit4", C, false)), "text")), (await $.mv((await $.wv([$t27, $t28], "DBLookupComboBox1", C, false)), "Text"))]], C)));
      }
      await $.set(C, "isUpdate", false);
    }
  }
  await $.stmt($.call(C, "CleanUp", []));
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "ODSbank")), "FieldByName", ["swift"])), "AsString")), "REVAAZ22"))) {
    await $.mset((await $.v(C, "EDAName")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "ODSbank")), "FieldByName", ["bank"])), "AsString")));
    await $.mset((await $.v(C, "EDAInn")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "ODSbank")), "FieldByName", ["inn"])), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "ToolButton6Click", async function ToolButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "QRMainReport", (await $.mcall((await $.v(C, "TQRMainReport")), "Create", [Self])));
    await $.mcall((await $.v(C, "QRMainReport")), "Preview", []);
  } finally {
    await $.mcall((await $.v(C, "QRMainReport")), "Free", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "EKAInnChange", async function EKAInnChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "lengthstr": 0, "str": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["str"] = (await $.mv((L0["sender"]), "text"));
  L0["lengthstr"] = (await $.call(C, "Length", [L0["str"]]));
  if ($.truthy($.gt(L0["lengthstr"], 10))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Field inn contains 10 numbers!"])));
    await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["str"], async ($t29) => { L0["str"] = $t29; }), 11, $.sub(L0["lengthstr"], 10)])));
    await $.mset(L0["sender"], "text", L0["str"]);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "EKBCodKeyPress", async function EKBCodKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    {
      const $t30 = (await $.mv((await $.v(C, "PaymentDataMod")), "ODSBankM"));
      if ($.truthy((await $.wcall([$t30], "Locate", ["BANKCODE", (await $.mv((await $.wv([$t30], "EKBCod", C, false)), "Text")), [(await $.wv([$t30], "loCaseInsensitive", C, false)), (await $.wv([$t30], "loPartialKey", C, false))]], C)))) {
        await $.mset((await $.wv([$t30], "CBKBName", C, false)), "Text", (await $.mv((await $.wcall([$t30], "FieldByName", ["NAME"], C)), "AsString")));
        await $.mset((await $.wv([$t30], "EKBInn", C, false)), "Text", (await $.mv((await $.wcall([$t30], "FieldByName", ["INN"], C)), "AsString")));
        await $.mset((await $.wv([$t30], "EKBCorAcc", C, false)), "Text", (await $.mv((await $.wcall([$t30], "FieldByName", ["KRNO"], C)), "AsString")));
        await $.mset((await $.wv([$t30], "EKBSwift", C, false)), "Text", (await $.mv((await $.wcall([$t30], "FieldByName", ["SWIFT"], C)), "AsString")));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPaymentDecree", "CheckBoxClick", async function CheckBoxClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "OPPayment")), "CallProcedure", ["SetNewDetails", [(await $.call(C, "Word", [(await $.mv((L0["sender"]), "Checked"))]))]])));
  { const $t31 = (await $.mv((L0["sender"]), "Checked"));
    if ($.eq($t31, true)) {
      {
        const $t32 = (await $.v(C, "QRMainReport"));
        const $t33 = (await $.wv([$t32], "QRCommonReport", C, false));
        await $.mset((await $.wv([$t32, $t33], "QRDBACCNAME1", C, false)), "DataField", "DACCNAME");
        await $.mset((await $.wv([$t32, $t33], "QRDBACCNAME2", C, false)), "DataField", "DACCNAME");
        await $.mset((await $.wv([$t32, $t33], "QRDBACCINN1", C, false)), "DataField", "DACCINN");
        await $.mset((await $.wv([$t32, $t33], "QRDBACCINN2", C, false)), "DataField", "DACCINN");
        await $.mset((await $.wv([$t32, $t33], "QRDBACCNAME", C, false)), "DataField", "DACCNAME");
        await $.mset((await $.wv([$t32, $t33], "QRDBACCINN", C, false)), "DataField", "DACCINN");
      }
    }
    else if ($.eq($t31, false)) {
      {
        const $t34 = (await $.v(C, "QRMainReport"));
        const $t35 = (await $.wv([$t34], "QRCommonReport", C, false));
        await $.mset((await $.wv([$t34, $t35], "QRDBACCNAME1", C, false)), "DataField", "DBNAME");
        await $.mset((await $.wv([$t34, $t35], "QRDBACCNAME2", C, false)), "DataField", "DBNAME");
        await $.mset((await $.wv([$t34, $t35], "QRDBACCINN1", C, false)), "DataField", "DBINN");
        await $.mset((await $.wv([$t34, $t35], "QRDBACCINN2", C, false)), "DataField", "DBINN");
        await $.mset((await $.wv([$t34, $t35], "QRDBACCNAME", C, false)), "DataField", "DBNAME");
        await $.mset((await $.wv([$t34, $t35], "QRDBACCINN", C, false)), "DataField", "DBINN");
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "EAmmountExit", async function EAmmountExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Activ", 2);
  if ($.truthy($.ne((await $.mv((await $.v(C, "EAmmount")), "text")), ""))) {
    await $.mset((await $.v(C, "EAmmountW")), "text", (await $.call(C, "WithCoin", [(await $.mv((await $.v(C, "EAmmount")), "text"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "CleanUp", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "ToolButton4Click", async function ToolButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "CleanUp", []));
  await $.mset((await $.v(C, "GroupBox7")), "Visible", false);
  await $.mset((await $.v(C, "GroupBox5")), "Visible", true);
  await $.mset((await $.v(C, "Panel25")), "Visible", true);
  await $.mset((await $.v(C, "GroupBox4")), "Visible", true);
  await $.mset((await $.v(C, "GroupBox6")), "Visible", true);
  await $.mset((await $.v(C, "Panel26")), "Visible", true);
  await $.mset((await $.v(C, "GroupBox7")), "Visible", false);
  await $.mset((await $.v(C, "GroupBox8")), "Visible", false);
  await $.mset((await $.v(C, "EDAInn")), "Visible", true);
  await $.mset((await $.v(C, "Panel13")), "Visible", true);
  await $.mset((await $.v(C, "Panel24")), "Visible", true);
  await $.mset((await $.v(C, "CheckBox")), "Visible", true);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "ODSbank")), "FieldByName", ["swift"])), "AsString")), "REVAAZ22"))) {
    await $.mset((await $.v(C, "EDAName")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "ODSbank")), "FieldByName", ["bank"])), "AsString")));
    await $.mset((await $.v(C, "EDAInn")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "ODSbank")), "FieldByName", ["inn"])), "AsString")));
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EPNum")), "Text"))])), ""))) {
    {
      const $t36 = (await $.mv((await $.v(C, "PaymentDataMod")), "ODS_PNUM"));
      await $.stmt($.wcall([$t36], "Close", [], C));
      await $.stmt($.wcall([$t36], "Open", [], C));
      await $.mset((await $.wv([$t36], "EPNum", C, false)), "Text", (await $.mv((await $.wcall([$t36], "FieldByName", ["PNum"], C)), "AsString")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "DBLookupComboBox2Click", async function DBLookupComboBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "PaymentDataMod")), "ODSbank")), "FieldByName", ["swift"])), "AsString")), "REVAAZ22"))) {
    {
      const $t37 = (await $.mv((await $.v(C, "PaymentDataMod")), "Ds_Acoount"));
      await $.mset((await $.wv([$t37], "EDAName", C, false)), "Text", (await $.mv((await $.wcall([$t37], "FieldByName", ["name"], C)), "AsString")));
      await $.mset((await $.wv([$t37], "EDAInn", C, false)), "Text", (await $.mv((await $.wcall([$t37], "FieldByName", ["inn"], C)), "AsString")));
      await $.mset((await $.wv([$t37], "EditDebtAccNo", C, false)), "Text", (await $.mv((await $.wcall([$t37], "FieldByName", ["acc_no"], C)), "AsString")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "DBNameChange", async function DBNameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBCod")), "Text", "");
  await $.mset((await $.v(C, "DBInn")), "Text", "");
  await $.mset((await $.v(C, "DBCorAcc")), "Text", "");
  await $.mset((await $.v(C, "DBSwift")), "Text", "");
  try {
    {
      const $t38 = (await $.mv((await $.v(C, "PaymentDataMod")), "ODSBankInfo"));
      await $.stmt($.wcall([$t38], "Close", [], C));
      await $.mcall((await $.wv([$t38], "SQL", C, false)), "Clear", []);
      await $.mset((await $.wv([$t38], "SQL", C, false)), "Text", $.add("Select * From bankm_ours Where bankcode= ", (await $.wcall([$t38], "IntToStr", [(await $.idx((await $.wv([$t38], "Rate1", C, false)), [(await $.mv((await $.wv([$t38], "DBName", C, false)), "ItemIndex"))]))], C))));
      await $.stmt($.wcall([$t38], "Open", [], C));
      await $.mset((await $.wv([$t38], "DBCod", C, false)), "Text", (await $.mv((await $.wcall([$t38], "FieldByName", ["bankcode"], C)), "AsString")));
      await $.mset((await $.wv([$t38], "DBInn", C, false)), "Text", (await $.mv((await $.wcall([$t38], "FieldByName", ["INN"], C)), "AsString")));
      await $.mset((await $.wv([$t38], "DBCorAcc", C, false)), "Text", (await $.mv((await $.wcall([$t38], "FieldByName", ["KRNO"], C)), "AsString")));
      await $.mset((await $.wv([$t38], "DBSwift", C, false)), "Text", (await $.mv((await $.wcall([$t38], "FieldByName", ["SWIFT"], C)), "AsString")));
    }
  } finally {
    {
      const $t39 = (await $.mv((await $.v(C, "PaymentDataMod")), "ODSBankInfo"));
      await $.stmt($.wcall([$t39], "Close", [], C));
      await $.mcall((await $.wv([$t39], "SQL", C, false)), "Clear", []);
      await $.mset((await $.wv([$t39], "SQL", C, false)), "Text", "Select * From Bankm_ours ");
      await $.stmt($.wcall([$t39], "Open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentDecree", "DBCodKeyPress", async function DBCodKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    {
      const $t40 = (await $.mv((await $.v(C, "PaymentDataMod")), "ODSBankInfo"));
      if ($.truthy((await $.wcall([$t40], "Locate", ["bankcode", (await $.mv((await $.wv([$t40], "DBCod", C, false)), "Text")), [(await $.wv([$t40], "loCaseInsensitive", C, false)), (await $.wv([$t40], "loPartialKey", C, false))]], C)))) {
        await $.mset((await $.wv([$t40], "DBName", C, false)), "Text", (await $.mv((await $.wcall([$t40], "FieldByName", ["name"], C)), "AsString")));
        await $.mset((await $.wv([$t40], "DBInn", C, false)), "Text", (await $.mv((await $.wcall([$t40], "FieldByName", ["INN"], C)), "AsString")));
        await $.mset((await $.wv([$t40], "DBCorAcc", C, false)), "Text", (await $.mv((await $.wcall([$t40], "FieldByName", ["KRNO"], C)), "AsString")));
        await $.mset((await $.wv([$t40], "DBSwift", C, false)), "Text", (await $.mv((await $.wcall([$t40], "FieldByName", ["SWIFT"], C)), "AsString")));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
