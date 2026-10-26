// Generated from OrderImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("OrderImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "Order_TLB", "StdVcl", "ComCtrls", "ExtCtrls", "StdCtrls", "Db", "OracleData", "DBViewComboBox", "Mask", "DBCtrls", "SearchEdit", "ComObj", "ComServ", "sboapiDataModuleImpl", "OrderDataModuleUnit", "OrderReportUnit", "CurrencyToHR_Azeri_", "OrderPropertyPage", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TOrderForm", "TActiveForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "contractnumedit": {"name": "ContractNumEdit", "type": "TEdit"}, "dtpsysdate": {"name": "DTPSysdate", "type": "TDateTimePicker"}, "cbcurrencys": {"name": "CBCurrencys", "type": "TDBViewComboBox"}, "strate": {"name": "STRate", "type": "TStaticText"}, "p5": {"name": "p5", "type": "TPanel"}, "rbusertype": {"name": "RBUserType", "type": "TRadioGroup"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "p4": {"name": "p4", "type": "TPanel"}, "p43": {"name": "p43", "type": "TPanel"}, "c4": {"name": "c4", "type": "TEdit"}, "p42": {"name": "p42", "type": "TPanel"}, "s4": {"name": "s4", "type": "TEdit"}, "p41": {"name": "p41", "type": "TPanel"}, "penaltyedit": {"name": "PenaltyEdit", "type": "TEdit"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "p3": {"name": "p3", "type": "TPanel"}, "p33": {"name": "p33", "type": "TPanel"}, "c3": {"name": "c3", "type": "TEdit"}, "p32": {"name": "p32", "type": "TPanel"}, "s3": {"name": "s3", "type": "TEdit"}, "p31": {"name": "p31", "type": "TPanel"}, "reservedebtedit": {"name": "ReserveDebtEdit", "type": "TEdit"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "p2": {"name": "p2", "type": "TPanel"}, "p23": {"name": "p23", "type": "TPanel"}, "c2": {"name": "c2", "type": "TEdit"}, "p22": {"name": "p22", "type": "TPanel"}, "s2": {"name": "s2", "type": "TEdit"}, "p21": {"name": "p21", "type": "TPanel"}, "interestdebtedit": {"name": "InterestDebtEdit", "type": "TEdit"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "p1": {"name": "p1", "type": "TPanel"}, "p13": {"name": "p13", "type": "TPanel"}, "c1": {"name": "C1", "type": "TEdit"}, "p12": {"name": "p12", "type": "TPanel"}, "s1": {"name": "S1", "type": "TEdit"}, "p11": {"name": "p11", "type": "TPanel"}, "facticaldebtedit": {"name": "FacticalDebtEdit", "type": "TEdit"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "cbf": {"name": "CBF", "type": "TCheckBox"}, "cbi": {"name": "CBI", "type": "TCheckBox"}, "cbr": {"name": "CBR", "type": "TCheckBox"}, "cbp": {"name": "CBP", "type": "TCheckBox"}, "panel23": {"name": "Panel23", "type": "TPanel"}, "rgdescription": {"name": "RGDescription", "type": "TRadioGroup"}, "rgreservedescription": {"name": "RGReserveDescription", "type": "TRadioGroup"}, "panel24": {"name": "Panel24", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "contractaccounts": {"name": "ContractAccounts", "type": "TSearchEdit"}, "reserveaccounts": {"name": "ReserveAccounts", "type": "TSearchEdit"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "label4": {"name": "Label4", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "fevents": {"name": "FEvents", "type": "IOrderFormEvents"}}, {});
  U.init(async () => {
  });
  U.method("TOrderForm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  await $.stmt((await $.callv(L0["definepropertypage"], [(await $.v(C, "Class_PropertyPage1"))])));
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TOrderForm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TOrderForm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TOrderForm", "Initialize", null, arguments);
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
  U.method("TOrderForm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOrderForm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOrderForm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOrderForm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOrderForm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOrderForm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOrderForm", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOrderForm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOrderForm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOrderForm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOrderForm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOrderForm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOrderForm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOrderForm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOrderForm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOrderForm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOrderForm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOrderForm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOrderForm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TOrderForm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOrderForm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOrderForm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOrderForm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOrderForm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOrderForm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOrderForm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TOrderForm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOrderForm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOrderForm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOrderForm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TOrderForm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TOrderForm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TOrderForm", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TOrderForm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOrderForm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOrderForm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOrderForm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TOrderForm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TOrderForm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOrderForm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TOrderForm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TOrderForm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOrderForm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOrderForm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataModOrder", (await $.mcall((await $.v(C, "TDataModOrder")), "Create", [Self])));
  await $.set(C, "OrderRpt", (await $.mcall((await $.v(C, "TOrderRpt")), "Create", [Self])));
  await $.mset((await $.v(C, "ContractAccounts")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "ContractAccounts")), "DataSource")), "DataSet")), "FieldByName", ["Acc_No"])), "AsString")));
  await $.mset((await $.v(C, "ReserveAccounts")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "ReserveAccounts")), "DataSource")), "DataSet")), "FieldByName", ["Acc_No"])), "AsString")));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOrderForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["reportdataasstr"] = $.fn(async function ReportDataAsStr() {
  const L1 = {result: '', "resultstr": '', "cname": '', "csname": '', "a1": '', "a2": '', "a3": '', "a4": '', "ca1": '', "ca2": '', "ca3": '', "ca4": '', "maindebt": '', "interest": '', "reserve": '', "penalty": ''};
  L1["n1"] = " № li hesablaşma hesabından ";
  L1["n2"] = " - ci il tarixinə kimi kreditə hesablanmış faizə siləsiniz ";
  L1["n3"] = " cərimə sanksiyasına siləsiniz. ";
  L1["cname"] = $.add($.add("  ", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "CBCurrencys")), "ListSource")), "DataSet")), "FieldByName", ["Valu_name"])), "AsString"))), "  ");
  L1["csname"] = $.add($.add("  ", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "CBCurrencys")), "ListSource")), "DataSet")), "FieldByName", ["Valu_Bala"])), "AsString"))), "  ");
  L1["resultstr"] = "";
  if ($.truthy($.ne((await $.mv((await $.v(C, "RBUserType")), "ItemIndex")), (-(1))))) {
    L1["resultstr"] = $.add((await $.idx((await $.mv((await $.v(C, "RBUserType")), "Items")), [(await $.mv((await $.v(C, "RBUserType")), "ItemIndex"))])), "  ");
  }
  L1["resultstr"] = $.add($.add($.add($.add($.add(L1["resultstr"], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "ContractAccounts")), "DataSource")), "DataSet")), "FieldByName", ["Name"])), "AsString"))), " "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "ContractAccounts")), "DataSource")), "DataSet")), "FieldByName", ["Acc_No"])), "AsString"))), " "), L1["n1"]);
  L1["maindebt"] = "";
  L1["interest"] = "";
  L1["reserve"] = "";
  L1["penalty"] = "";
  if ($.truthy((await $.mv((await $.v(C, "CBF")), "Checked")))) {
    if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "FacticalDebtEdit")), "Text"))])), ""))) {
      L1["maindebt"] = (await $.mv((await $.v(C, "FacticalDebtEdit")), "Text"));
      L1["a1"] = $.add($.add($.add(" (", (await $.call(C, "CurrencyToHR_Azeri", [(await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "FacticalDebtEdit")), "Text"))])), 0, []]))), " "), L1["cname"]);
    } else {
      L1["a1"] = " (";
    }
    if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "C1")), "Text"))])), ""))) {
      L1["maindebt"] = $.add($.add(L1["maindebt"], (await $.mv((await $.v(C, "S1")), "Text"))), (await $.mv((await $.v(C, "C1")), "Text")));
      L1["ca1"] = $.add($.add($.add((await $.call(C, "CurrencyToHR_Azeri", [(await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "c1")), "Text"))])), 0, []])), " "), L1["csname"]), ")");
    } else {
      L1["ca1"] = ")";
    }
    L1["maindebt"] = $.add($.add($.add($.add(L1["maindebt"], L1["a1"]), L1["ca1"]), " "), (await $.idx((await $.mv((await $.v(C, "RGDescription")), "Items")), [(await $.mv((await $.v(C, "RGDescription")), "ItemIndex"))])));
  }
  if ($.truthy((await $.mv((await $.v(C, "CBI")), "Checked")))) {
    if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "InterestDebtEdit")), "Text"))])), ""))) {
      L1["interest"] = (await $.mv((await $.v(C, "InterestDebtEdit")), "Text"));
      L1["a2"] = $.add($.add($.add(" (", (await $.call(C, "CurrencyToHR_Azeri", [(await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "InterestDebtEdit")), "Text"))])), 0, []]))), " "), L1["cname"]);
    } else {
      L1["a2"] = " (";
    }
    if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "C2")), "Text"))])), ""))) {
      L1["interest"] = $.add($.add(L1["interest"], (await $.mv((await $.v(C, "S2")), "Text"))), (await $.mv((await $.v(C, "C2")), "Text")));
      L1["ca2"] = $.add($.add($.add((await $.call(C, "CurrencyToHR_Azeri", [(await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "c2")), "Text"))])), 0, []])), " "), L1["csname"]), ")");
    } else {
      L1["ca2"] = ") ";
    }
    L1["interest"] = $.add($.add($.add($.add($.add(L1["interest"], L1["a2"]), L1["ca2"]), " "), (await $.call(C, "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.v(C, "DTPSysdate")), "Date"))]))), L1["n2"]);
  }
  if ($.truthy((await $.mv((await $.v(C, "CBP")), "Checked")))) {
    if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "PenaltyEdit")), "Text"))])), ""))) {
      L1["penalty"] = (await $.mv((await $.v(C, "PenaltyEdit")), "Text"));
      L1["a4"] = $.add($.add($.add(" (", (await $.call(C, "CurrencyToHR_Azeri", [(await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "PenaltyEdit")), "Text"))])), 0, []]))), " "), L1["cname"]);
    } else {
      L1["a4"] = " (";
    }
    if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "C4")), "Text"))])), ""))) {
      L1["penalty"] = $.add($.add(L1["penalty"], (await $.mv((await $.v(C, "S4")), "Text"))), (await $.mv((await $.v(C, "C4")), "Text")));
      L1["ca4"] = $.add($.add($.add((await $.call(C, "CurrencyToHR_Azeri", [(await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "c4")), "Text"))])), 0, []])), " "), L1["csname"]), ")");
    } else {
      L1["ca4"] = ")";
    }
    L1["penalty"] = $.add($.add($.add($.add($.add(" və ", L1["penalty"]), L1["a4"]), L1["ca4"]), " "), L1["n3"]);
  }
  if ($.truthy((await $.mv((await $.v(C, "CBR")), "Checked")))) {
    if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "ReserveDebtEdit")), "Text"))])), ""))) {
      L1["reserve"] = (await $.mv((await $.v(C, "ReserveDebtEdit")), "Text"));
      L1["a3"] = $.add($.add($.add(" (", (await $.call(C, "CurrencyToHR_Azeri", [(await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "ReserveDebtEdit")), "Text"))])), 0, []]))), " "), L1["cname"]);
    } else {
      L1["a3"] = " (";
    }
    if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "C3")), "Text"))])), ""))) {
      L1["reserve"] = $.add($.add(L1["reserve"], (await $.mv((await $.v(C, "S3")), "Text"))), (await $.mv((await $.v(C, "C3")), "Text")));
      L1["ca3"] = $.add($.add($.add((await $.call(C, "CurrencyToHR_Azeri", [(await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "c3")), "Text"))])), 0, []])), " "), L1["csname"]), ")");
    } else {
      L1["ca3"] = ")";
    }
    L1["reserve"] = $.add($.add($.add($.add($.add($.add(L1["reserve"], L1["a3"]), L1["ca3"]), " ("), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "ReserveAccounts")), "DataSource")), "DataSet")), "FieldByName", ["Acc_No"])), "AsString"))), ") "), (await $.idx((await $.mv((await $.v(C, "RGReserveDescription")), "Items")), [(await $.mv((await $.v(C, "RGReserveDescription")), "ItemIndex"))])));
  }
  L1["resultstr"] = $.add($.add($.add($.add($.add(L1["resultstr"], L1["maindebt"]), ","), L1["interest"]), L1["reserve"]), L1["penalty"]);
  L1["result"] = L1["resultstr"];
  return L1.result;
});
  {
    const $t1 = (await $.v(C, "OrderRpt"));
    await $.mset((await $.mv((await $.wv([$t1], "QRMemo", C, false)), "Lines")), "Text", (await $.wv([$t1], "ReportDataAsStr", { get: async () => L0["reportdataasstr"], set: async (v) => { L0["reportdataasstr"] = v; }, local: true }, false)));
    await $.mset((await $.wv([$t1], "QRLContractNum", C, false)), "Caption", (await $.mv((await $.wv([$t1], "ContractNumEdit", C, false)), "Text")));
    await $.mset((await $.wv([$t1], "Chef", C, false)), "Caption", (await $.mv((await $.wv([$t1], "Edit1", C, false)), "Text")));
    await $.mset((await $.wv([$t1], "CreditChef", C, false)), "Caption", (await $.mv((await $.wv([$t1], "Edit2", C, false)), "Text")));
    await $.mset((await $.wv([$t1], "Manager", C, false)), "Caption", (await $.mv((await $.wv([$t1], "Edit3", C, false)), "Text")));
    await $.mset((await $.wv([$t1], "QRLDate", C, false)), "Caption", (await $.wcall([$t1], "FormatDateTime", ["dd/mm/yyyy", (await $.mv((await $.wv([$t1], "DTPSysdate", C, false)), "Date"))], C)));
    await $.stmt($.wcall([$t1], "Preview", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOrderForm", "CBCurrencysChange", async function CBCurrencysChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ContractAccounts")), "Text", "");
  await $.mset((await $.v(C, "ReserveAccounts")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOrderForm", "ContractAccountsKeyPress", async function ContractAccountsKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "id": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    L0["id"] = (await $.mv((await $.mcall((await $.mv((await $.mv((L0["sender"]), "DataSource")), "DataSet")), "FieldByName", ["KLI_ID"])), "AsInteger"));
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "ReserveAccounts")), "DataSource")), "DataSet")), "Locate", ["KLI_ID", L0["id"], []])));
    await $.mset((await $.v(C, "ReserveAccounts")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "ReserveAccounts")), "DataSource")), "DataSet")), "FieldByName", ["ACC_NO"])), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
