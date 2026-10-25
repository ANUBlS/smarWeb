// Generated from AboutBanksImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AboutBanksImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "AboutBanksProj_TLB", "StdVcl", "StdCtrls", "ExtCtrls", "Grids", "DBGrids", "DBCtrls", "Db", "Buttons", "IdHTTP", "IdSSL", "IdSSLOpenSSL", "IdServerIOHandler", "xmldom", "XMLIntf", "msxmldom", "XMLDoc", "Oracle", "OracleData", "Gauges", "ComObj", "ComServ", "BanksDataModule", "UntQRPBanks", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TAboutBanks", "TActiveForm", {"dbbanksviewer": {"name": "DBBanksViewer", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "editbankcode": {"name": "EditBANKCODE", "type": "TEdit"}, "editname": {"name": "EditName", "type": "TEdit"}, "editkrno": {"name": "EditKRNO", "type": "TEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "editinn": {"name": "EditInn", "type": "TEdit"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "editswift": {"name": "EditSWIFT", "type": "TEdit"}, "editsubkrno": {"name": "EditSubKRNO", "type": "TEdit"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "editlicense_date": {"name": "EditLICENSE_DATE", "type": "TEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "edittax_regcode": {"name": "EditTAX_REGCODE", "type": "TEdit"}, "statictext8": {"name": "StaticText8", "type": "TStaticText"}, "statictext7": {"name": "StaticText7", "type": "TStaticText"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "opendialog1": {"name": "OpenDialog1", "type": "TOpenDialog"}, "xmldocument1": {"name": "XMLDocument1", "type": "TXMLDocument"}, "oraclequery1": {"name": "OracleQuery1", "type": "TOracleQuery"}, "ods_bas": {"name": "ods_bas", "type": "TOracleDataSet"}, "ods_fil": {"name": "ods_fil", "type": "TOracleDataSet"}, "gauge1": {"name": "Gauge1", "type": "TGauge"}, "fevents": {"name": "FEvents", "type": "IAboutBanksEvents"}}, {});
  U.init(async () => {
    U.var_("p_Code", '', "String");
    U.var_("p_ParentCode", '', "String");
    U.var_("p_SWIFTBI", '', "String");
    U.var_("p_Name", '', "String");
    U.var_("p_ParentName", '', "String");
    U.var_("p_CorAccountAZN", '', "String");
    U.var_("p_CorAccountEUR", '', "String");
    U.var_("p_CorAccountGBP", '', "String");
    U.var_("p_CorAccountUSD", '', "String");
    U.var_("p_SubCorAccountLVPCSS", '', "String");
    U.var_("p_SubCorAccountIPS", '', "String");
    U.var_("p_TaxNumber", '', "String");
    U.var_("p_Address", '', "String");
    U.var_("p_PhoneNumbe", '', "String");
    U.var_("p_valAZN", '', "String");
    U.var_("p_valUSD", '', "String");
    U.var_("p_valEUR", '', "String");
    U.var_("p_valGBP", '', "String");
  });
  U.method("TAboutBanks", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TAboutBanks", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TAboutBanks", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TAboutBanks", "Initialize", null, arguments);
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
  U.method("TAboutBanks", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAboutBanks", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAboutBanks", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAboutBanks", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAboutBanks", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAboutBanks", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAboutBanks", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAboutBanks", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAboutBanks", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAboutBanks", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAboutBanks", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAboutBanks", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAboutBanks", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAboutBanks", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAboutBanks", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAboutBanks", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAboutBanks", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAboutBanks", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAboutBanks", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TAboutBanks", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAboutBanks", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fname": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditName")), "Text", "");
  await $.mset((await $.v(C, "EditBANKCODE")), "Text", "");
  await $.mset((await $.v(C, "EditSwift")), "Text", "");
  await $.mset((await $.v(C, "EditInn")), "Text", "");
  await $.mset((await $.v(C, "EditTAX_REGCODE")), "Text", "");
  await $.mset((await $.v(C, "EditKRNO")), "Text", "");
  await $.mset((await $.v(C, "EditSubKRNO")), "Text", "");
  await $.mset((await $.v(C, "EditLICENSE_DATE")), "Text", "");
  await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Close", []);
  { const $t1 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL")), [8], ""); if ($t1 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL", $t1); } }
  await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAboutBanks", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAboutBanks", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAboutBanks", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAboutBanks", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAboutBanks", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAboutBanks", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TAboutBanks", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAboutBanks", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAboutBanks", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAboutBanks", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TAboutBanks", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TAboutBanks", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TAboutBanks", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TAboutBanks", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAboutBanks", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAboutBanks", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAboutBanks", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TAboutBanks", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TAboutBanks", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAboutBanks", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TAboutBanks", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TAboutBanks", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAboutBanks", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAboutBanks", "MouseWheelHandler", async function MouseWheelHandler(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TAboutBanks", "MouseWheelHandler", null, arguments);
  if ($.truthy((await $.mv((await $.v(C, "DBBanksViewer")), "Focused")))) {
    {
      const $t2 = (await $.call(C, "TCMMouseWheel", [(await L0["message"].get())]));
      const $t3 = (await $.mv((await $.mv((await $.wv([$t2], "DBBanksViewer", C, false)), "DataSource")), "DataSet"));
      if ($.truthy($.lt((await $.wv([$t2, $t3], "WheelDelta", C, false)), 0))) {
        await $.stmt($.wcall([$t2, $t3], "Next", [], C));
      } else {
        await $.stmt($.wcall([$t2, $t3], "Prior", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TAboutBanks", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataModuleBanks", (await $.mcall((await $.v(C, "TDataModuleBanks")), "Create", [Self])));
  await $.set(C, "QRBanks", (await $.mcall((await $.v(C, "TQRBanks")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAboutBanks", "DBBanksViewerTitleClick", async function DBBanksViewerTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  try {
    {
      const $t4 = (await $.mv((await $.v(C, "DataModuleBanks")), "Banks"));
      await $.stmt((await $.wcall([$t4], "SetVariable", ["Title", (await $.wv([$t4], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t4], "Refresh", [], C));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TAboutBanks", "EditBANKCODEExit", async function EditBANKCODEExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAboutBanks", "EditInnChange", async function EditInnChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fname": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox1")), "Checked")), false))) {
    if ($.truthy($.eq((await $.mv((L0["sender"]), "Text")), ""))) {
      return L0.result;
    }
    L0["fname"] = (await $.call(C, "copy", [(await $.mv((L0["sender"]), "Name")), 5, (await $.call(C, "Length", [(await $.mv((L0["sender"]), "Name"))]))]));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Locate", [L0["fname"], (await $.mv((L0["sender"]), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  } else {
    await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Close", []);
    { const $t5 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL")), [8], $.add($.add($.add($.add("where inn like '", ("%")), (await $.mv((await $.v(C, "Editinn")), "Text"))), ("%")), "'")); if ($t5 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL", $t5); } }
    await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.v(C, "Editinn")), "Text")), ""))) {
      await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Close", []);
      { const $t6 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL")), [8], ""); if ($t6 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL", $t6); } }
      await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAboutBanks", "EditInnExit", async function EditInnExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAboutBanks", "EditKRNOChange", async function EditKRNOChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fname": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox1")), "Checked")), false))) {
    if ($.truthy($.eq((await $.mv((L0["sender"]), "Text")), ""))) {
      return L0.result;
    }
    L0["fname"] = (await $.call(C, "copy", [(await $.mv((L0["sender"]), "Name")), 5, (await $.call(C, "Length", [(await $.mv((L0["sender"]), "Name"))]))]));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Locate", [L0["fname"], (await $.mv((L0["sender"]), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  } else {
    if ($.truthy($.eq((await $.mv((L0["sender"]), "Text")), ""))) {
      return L0.result;
    }
    await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Close", []);
    { const $t7 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL")), [8], $.add($.add($.add($.add("where KRNO like '", ("%")), (await $.mv((await $.v(C, "EditKRNO")), "Text"))), ("%")), "'")); if ($t7 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL", $t7); } }
    await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.v(C, "EditKRNO")), "Text")), ""))) {
      await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Close", []);
      { const $t8 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL")), [8], ""); if ($t8 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL", $t8); } }
      await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Open", []);
    }
    await $.mset((await $.v(C, "memo1")), "Text", (await $.mv((await $.mv((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "sql")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAboutBanks", "EditKRNOExit", async function EditKRNOExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAboutBanks", "EditNameChange", async function EditNameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fname": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox1")), "Checked")), false))) {
    if ($.truthy($.eq((await $.mv((L0["sender"]), "Text")), ""))) {
      return L0.result;
    }
    L0["fname"] = (await $.call(C, "copy", [(await $.mv((L0["sender"]), "Name")), 5, (await $.call(C, "Length", [(await $.mv((L0["sender"]), "Name"))]))]));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Locate", [L0["fname"], (await $.mv((L0["sender"]), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  } else {
    await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Close", []);
    { const $t9 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL")), [8], $.add($.add($.add($.add("where name like '", ("%")), (await $.mv((await $.v(C, "EditName")), "Text"))), ("%")), "'")); if ($t9 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL", $t9); } }
    await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.v(C, "EditName")), "Text")), ""))) {
      await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Close", []);
      { const $t10 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL")), [8], ""); if ($t10 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL", $t10); } }
      await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Open", []);
    }
    await $.mset((await $.v(C, "memo1")), "Text", (await $.mv((await $.mv((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "sql")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAboutBanks", "EditNameExit", async function EditNameExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAboutBanks", "EditSubKRNOChange", async function EditSubKRNOChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fname": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox1")), "Checked")), false))) {
    if ($.truthy($.eq((await $.mv((L0["sender"]), "Text")), ""))) {
      return L0.result;
    }
    L0["fname"] = (await $.call(C, "copy", [(await $.mv((L0["sender"]), "Name")), 5, (await $.call(C, "Length", [(await $.mv((L0["sender"]), "Name"))]))]));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Locate", [L0["fname"], (await $.mv((L0["sender"]), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  } else {
    await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Close", []);
    { const $t11 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL")), [8], $.add($.add($.add($.add("where subkrno like '", ("%")), (await $.mv((await $.v(C, "EditSubKRNO")), "Text"))), ("%")), "'")); if ($t11 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL", $t11); } }
    await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.v(C, "EditSubKRNO")), "Text")), ""))) {
      await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Close", []);
      { const $t12 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL")), [8], ""); if ($t12 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL", $t12); } }
      await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAboutBanks", "EditSubKRNOExit", async function EditSubKRNOExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAboutBanks", "EditSWIFTChange", async function EditSWIFTChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fname": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox1")), "Checked")), false))) {
    if ($.truthy($.eq((await $.mv((L0["sender"]), "Text")), ""))) {
      return L0.result;
    }
    L0["fname"] = (await $.call(C, "copy", [(await $.mv((L0["sender"]), "Name")), 5, (await $.call(C, "Length", [(await $.mv((L0["sender"]), "Name"))]))]));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Locate", [L0["fname"], (await $.mv((L0["sender"]), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  } else {
    await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Close", []);
    { const $t13 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL")), [8], $.add($.add($.add($.add("where swift like '", ("%")), (await $.mv((await $.v(C, "EditSwift")), "Text"))), ("%")), "'")); if ($t13 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL", $t13); } }
    await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.v(C, "EditSwift")), "Text")), ""))) {
      await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Close", []);
      { const $t14 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL")), [8], ""); if ($t14 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL", $t14); } }
      await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAboutBanks", "EditSWIFTExit", async function EditSWIFTExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAboutBanks", "EditTAX_REGCODEChange", async function EditTAX_REGCODEChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fname": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox1")), "Checked")), false))) {
    if ($.truthy($.eq((await $.mv((L0["sender"]), "Text")), ""))) {
      return L0.result;
    }
    L0["fname"] = (await $.call(C, "copy", [(await $.mv((L0["sender"]), "Name")), 5, (await $.call(C, "Length", [(await $.mv((L0["sender"]), "Name"))]))]));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Locate", [L0["fname"], (await $.mv((L0["sender"]), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  } else {
    await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Close", []);
    { const $t15 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL")), [8], $.add($.add($.add($.add("where tax_regcode like '", ("%")), (await $.mv((await $.v(C, "EditTAX_REGCODE")), "Text"))), ("%")), "'")); if ($t15 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL", $t15); } }
    await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.v(C, "EditTAX_REGCODE")), "Text")), ""))) {
      await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Close", []);
      { const $t16 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL")), [8], ""); if ($t16 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL", $t16); } }
      await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Open", []);
    }
    await $.mset((await $.v(C, "memo1")), "Text", (await $.mv((await $.mv((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "SQL")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAboutBanks", "EditTAX_REGCODEExit", async function EditTAX_REGCODEExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAboutBanks", "EditBANKCODChange", async function EditBANKCODChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fname": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((L0["sender"]), "Text")), ""))) {
    return L0.result;
  }
  L0["fname"] = (await $.call(C, "copy", [(await $.mv((L0["sender"]), "Name")), 5, (await $.call(C, "Length", [(await $.mv((L0["sender"]), "Name"))]))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModuleBanks")), "Banks")), "Locate", [L0["fname"], (await $.mv((L0["sender"]), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAboutBanks", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (await $.mv((await $.v(C, "DataModuleBanks")), "Banks"));
    if ($.truthy((await $.wv([$t17], "Active", C, false)))) {
      await $.stmt($.wcall([$t17], "First", [], C));
    } else {
      await $.stmt($.wcall([$t17], "Open", [], C));
    }
  }
  await $.mcall((await $.v(C, "QRBanks")), "Preview", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAboutBanks", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t18 = (await $.mv((await $.v(C, "DataModuleBanks")), "Banks"));
    if ($.truthy((await $.wv([$t18], "Active", C, false)))) {
      await $.stmt($.wcall([$t18], "First", [], C));
    } else {
      await $.stmt($.wcall([$t18], "Open", [], C));
    }
  }
  await $.mcall((await $.v(C, "QRBanks")), "Preview", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAboutBanks", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "idhttp": null, "id_handlersocket": null, "ss": null, "ms": null, "aa": null, "tt": '', "s": 0, "i": 0, "bi": 0, "i_f": 0, "fi": 0, "mainnode": null, "customernode": null, "xmlcount": null, "hiderbasofis": null, "bankbas": null, "branchoffices": null, "bankfil": null};
  await $.fixArgs(L0, ["sender"]);
  L0["idhttp"] = (await $.mcall((await $.v(C, "TIdHTTP")), "Create", [null]));
  L0["ms"] = (await $.mv((await $.v(C, "TMemoryStream")), "Create"));
  L0["aa"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  L0["id_handlersocket"] = (await $.mcall((await $.v(C, "TIdSSLIOHandlerSocketOpenSSL")), "Create", [L0["idhttp"]]));
  try {
    L0["tt"] = ("https://www.cbar.az/bankinfonew/banks.xml");
    await $.mcall((await $.mv((await $.v(C, "TEncoding")), "UTF8")), "ToString", []);
    await $.stmt((await $.mcall(L0["aa"], "LoadFromStream", [L0["ms"], (await $.mv((await $.v(C, "TENCODING")), "UTF8"))])));
    L0["ss"] = (await $.mcall((await $.v(C, "TStringStream")), "Create", ["", (await $.mv((await $.v(C, "TEncoding")), "UTF8"))]));
    await $.mset((await $.mv(L0["idhttp"], "Request")), "ContentType", "application/xml; charset=utf-8");
    await $.mset((await $.mv(L0["idhttp"], "Request")), "BasicAuthentication", false);
    await $.mset((await $.mv(L0["idhttp"], "Request")), "UserAgent", "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:12.0) Gecko/20100101 Firefox/12.0");
    await $.mset((await $.mv(L0["id_handlersocket"], "SSLOptions")), "Mode", (await $.v(C, "sslmClient")));
    await $.mset((await $.mv(L0["id_handlersocket"], "SSLOptions")), "Method", (await $.v(C, "sslvSSLv23")));
    await $.mset(L0["idhttp"], "IOHandler", L0["id_handlersocket"]);
    await $.stmt((await $.mcall(L0["idhttp"], "get", [L0["tt"], L0["ms"]])));
    await $.stmt((await $.mcall((await $.v(C, "XMLDocument1")), "LoadFromStream", [L0["ms"]])));
    L0["mainnode"] = (await $.mv((await $.v(C, "XMLDocument1")), "DocumentElement"));
    L0["hiderbasofis"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["mainnode"], "ChildNodes")), ["HeadOffices"])), "ChildNodes")), ["Operations"]));
    { const $t19 = $.sub((await $.mv((await $.mv(L0["hiderbasofis"], "ChildNodes")), "Count")), 1);
      L0["i"] = 0;
      let $t20 = true;
      for (;;) {
        if (!$t20) { L0["i"] = $.succ(L0["i"], 1); }
        $t20 = false;
        if (!($.ord(L0["i"]) <= $.ord($t19))) break;
        L0["bankbas"] = (await $.idx((await $.mv(L0["hiderbasofis"], "ChildNodes")), [L0["i"]]));
        await $.set(C, "p_CorAccountAZN", "");
        await $.set(C, "p_valAZN", "");
        await $.set(C, "p_CorAccountUSD", "");
        await $.set(C, "p_valUSD", "");
        await $.set(C, "p_CorAccountEUR", "");
        await $.set(C, "p_valEUR", "");
        await $.set(C, "p_CorAccountGBP", "");
        await $.set(C, "p_valGBP", "");
        await $.set(C, "p_code", "");
        { const $t21 = $.sub((await $.mv((await $.mv(L0["bankbas"], "ChildNodes")), "Count")), 1);
          L0["bi"] = 0;
          let $t22 = true;
          for (;;) {
            if (!$t22) { L0["bi"] = $.succ(L0["bi"], 1); }
            $t22 = false;
            if (!($.ord(L0["bi"]) <= $.ord($t21))) break;
            if ($.truthy($.eq((await $.mv((await $.idx((await $.mv(L0["bankbas"], "ChildNodes")), [L0["bi"]])), "NodeName")), "Code"))) {
              await $.set(C, "p_code", (await $.mv((await $.idx((await $.mv(L0["bankbas"], "ChildNodes")), [L0["bi"]])), "Text")));
            }
            if ($.truthy($.eq((await $.mv((await $.idx((await $.mv(L0["bankbas"], "ChildNodes")), [L0["bi"]])), "NodeName")), "SWIFTBIC"))) {
              await $.set(C, "p_SWIFTBI", (await $.mv((await $.idx((await $.mv(L0["bankbas"], "ChildNodes")), [L0["bi"]])), "Text")));
            }
            if ($.truthy($.eq((await $.mv((await $.idx((await $.mv(L0["bankbas"], "ChildNodes")), [L0["bi"]])), "NodeName")), "Name"))) {
              await $.set(C, "p_name", (await $.mv((await $.idx((await $.mv(L0["bankbas"], "ChildNodes")), [L0["bi"]])), "Text")));
            }
            if ($.truthy($.eq((await $.mv((await $.idx((await $.mv(L0["bankbas"], "ChildNodes")), [L0["bi"]])), "NodeName")), "TaxNumber"))) {
              await $.set(C, "p_TaxNumber", (await $.mv((await $.idx((await $.mv(L0["bankbas"], "ChildNodes")), [L0["bi"]])), "Text")));
            }
            if ($.truthy($.eq((await $.mv((await $.idx((await $.mv(L0["bankbas"], "ChildNodes")), [L0["bi"]])), "NodeName")), "CorAccount"))) {
              if ($.truthy($.eq((await $.idx((await $.mv((await $.idx((await $.mv(L0["bankbas"], "ChildNodes")), [L0["bi"]])), "Attributes")), ["Currency"])), "AZN"))) {
                await $.set(C, "p_CorAccountAZN", (await $.mv((await $.idx((await $.mv(L0["bankbas"], "ChildNodes")), [L0["bi"]])), "Text")));
                await $.set(C, "p_valAZN", "AZN");
              }
              if ($.truthy($.eq((await $.idx((await $.mv((await $.idx((await $.mv(L0["bankbas"], "ChildNodes")), [L0["bi"]])), "Attributes")), ["Currency"])), "USD"))) {
                await $.set(C, "p_CorAccountUSD", (await $.mv((await $.idx((await $.mv(L0["bankbas"], "ChildNodes")), [L0["bi"]])), "Text")));
                await $.set(C, "p_valUSD", "USD");
              }
              if ($.truthy($.eq((await $.idx((await $.mv((await $.idx((await $.mv(L0["bankbas"], "ChildNodes")), [L0["bi"]])), "Attributes")), ["Currency"])), "EUR"))) {
                await $.set(C, "p_CorAccountEUR", (await $.mv((await $.idx((await $.mv(L0["bankbas"], "ChildNodes")), [L0["bi"]])), "Text")));
                await $.set(C, "p_valEUR", "EUR");
              }
              if ($.truthy($.eq((await $.idx((await $.mv((await $.idx((await $.mv(L0["bankbas"], "ChildNodes")), [L0["bi"]])), "Attributes")), ["Currency"])), "GBP"))) {
                await $.set(C, "p_CorAccountGBP", (await $.mv((await $.idx((await $.mv(L0["bankbas"], "ChildNodes")), [L0["bi"]])), "Text")));
                await $.set(C, "p_valGBP", "GBP");
              }
            }
            if ($.truthy($.eq((await $.mv((await $.idx((await $.mv(L0["bankbas"], "ChildNodes")), [L0["bi"]])), "NodeName")), "SubCorAccount"))) {
              if ($.truthy($.eq((await $.idx((await $.mv((await $.idx((await $.mv(L0["bankbas"], "ChildNodes")), [L0["bi"]])), "Attributes")), ["System"])), "LVPCSS"))) {
                await $.set(C, "p_SubCorAccountLVPCSS", (await $.mv((await $.idx((await $.mv(L0["bankbas"], "ChildNodes")), [L0["bi"]])), "Text")));
              }
              if ($.truthy($.eq((await $.idx((await $.mv((await $.idx((await $.mv(L0["bankbas"], "ChildNodes")), [L0["bi"]])), "Attributes")), ["System"])), "IPS"))) {
                await $.set(C, "p_SubCorAccountIPS", (await $.mv((await $.idx((await $.mv(L0["bankbas"], "ChildNodes")), [L0["bi"]])), "Text")));
              }
            }
            await $.tick();
          }
        }
        if ($.truthy($.eq((await $.v(C, "p_valAZN")), "AZN"))) {
          await $.mcall((await $.v(C, "ods_bas")), "Close", []);
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_krno", (await $.v(C, "p_CorAccountAZN"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_bankcode", (await $.v(C, "p_code"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_name", (await $.v(C, "p_name"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_swift", (await $.v(C, "p_SWIFTBI"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_inn", (await $.v(C, "p_TaxNumber"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_val_code", (await $.v(C, "p_valAZN"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_subkrno", (await $.v(C, "p_SubCorAccountLVPCSS"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_ours", 1])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_count", 0])));
          await $.mcall((await $.v(C, "ods_bas")), "open", []);
        }
        if ($.truthy($.eq((await $.v(C, "p_valUSD")), "USD"))) {
          await $.mcall((await $.v(C, "ods_bas")), "Close", []);
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_krno", (await $.v(C, "p_CorAccountUSD"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_bankcode", (await $.v(C, "p_code"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_name", (await $.v(C, "p_name"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_swift", (await $.v(C, "p_SWIFTBI"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_inn", (await $.v(C, "p_TaxNumber"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_val_code", (await $.v(C, "p_valUSD"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_subkrno", ""])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_ours", 1])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_count", 0])));
          await $.mcall((await $.v(C, "ods_bas")), "open", []);
        }
        if ($.truthy($.eq((await $.v(C, "p_valEUR")), "EUR"))) {
          await $.mcall((await $.v(C, "ods_bas")), "Close", []);
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_krno", (await $.v(C, "p_CorAccountEUR"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_bankcode", (await $.v(C, "p_code"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_name", (await $.v(C, "p_name"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_swift", (await $.v(C, "p_SWIFTBI"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_inn", (await $.v(C, "p_TaxNumber"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_val_code", (await $.v(C, "p_valEUR"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_subkrno", ""])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_ours", 1])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_count", 0])));
          await $.mcall((await $.v(C, "ods_bas")), "open", []);
        }
        if ($.truthy($.eq((await $.v(C, "p_valGBP")), "GBP"))) {
          await $.mcall((await $.v(C, "ods_bas")), "Close", []);
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_krno", (await $.v(C, "p_CorAccountGBP"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_bankcode", (await $.v(C, "p_code"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_name", (await $.v(C, "p_name"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_swift", (await $.v(C, "p_SWIFTBI"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_inn", (await $.v(C, "p_TaxNumber"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_val_code", (await $.v(C, "p_valGBP"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_subkrno", ""])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_ours", 1])));
          await $.stmt((await $.mcall((await $.v(C, "ods_bas")), "SetVariable", ["v_count", 0])));
          await $.mcall((await $.v(C, "ods_bas")), "open", []);
        }
        await $.tick();
      }
    }
    L0["branchoffices"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["mainnode"], "ChildNodes")), ["BranchOffices"])), "ChildNodes")), ["Operations"]));
    L0["s"] = 1;
    { const $t23 = $.sub((await $.mv((await $.mv(L0["branchoffices"], "ChildNodes")), "Count")), 1);
      L0["i_f"] = 0;
      let $t24 = true;
      for (;;) {
        if (!$t24) { L0["i_f"] = $.succ(L0["i_f"], 1); }
        $t24 = false;
        if (!($.ord(L0["i_f"]) <= $.ord($t23))) break;
        L0["bankfil"] = (await $.idx((await $.mv(L0["branchoffices"], "ChildNodes")), [L0["i_f"]]));
        await $.set(C, "p_CorAccountAZN", "");
        await $.set(C, "p_valAZN", "");
        await $.set(C, "p_code", "");
        await $.set(C, "p_name", "");
        await $.set(C, "p_SWIFTBI", "");
        await $.set(C, "p_TaxNumber", "");
        L0["s"] = $.add(L0["s"], 1);
        { const $t25 = $.sub((await $.mv((await $.mv(L0["bankfil"], "ChildNodes")), "Count")), 1);
          L0["fi"] = 0;
          let $t26 = true;
          for (;;) {
            if (!$t26) { L0["fi"] = $.succ(L0["fi"], 1); }
            $t26 = false;
            if (!($.ord(L0["fi"]) <= $.ord($t25))) break;
            if ($.truthy($.eq((await $.mv((await $.idx((await $.mv(L0["bankfil"], "ChildNodes")), [L0["fi"]])), "NodeName")), "ParentCode"))) {
              await $.set(C, "p_ParentCode", (await $.mv((await $.idx((await $.mv(L0["bankfil"], "ChildNodes")), [L0["fi"]])), "Text")));
            }
            if ($.truthy($.eq((await $.mv((await $.idx((await $.mv(L0["bankfil"], "ChildNodes")), [L0["fi"]])), "NodeName")), "Code"))) {
              await $.set(C, "p_code", (await $.mv((await $.idx((await $.mv(L0["bankfil"], "ChildNodes")), [L0["fi"]])), "Text")));
            }
            if ($.truthy($.eq((await $.mv((await $.idx((await $.mv(L0["bankfil"], "ChildNodes")), [L0["fi"]])), "NodeName")), "SWIFTBIC"))) {
              await $.set(C, "p_SWIFTBI", (await $.mv((await $.idx((await $.mv(L0["bankfil"], "ChildNodes")), [L0["fi"]])), "Text")));
            }
            if ($.truthy($.eq((await $.mv((await $.idx((await $.mv(L0["bankfil"], "ChildNodes")), [L0["fi"]])), "NodeName")), "ParentName"))) {
              await $.set(C, "p_ParentName", (await $.mv((await $.idx((await $.mv(L0["bankfil"], "ChildNodes")), [L0["fi"]])), "Text")));
            }
            if ($.truthy($.eq((await $.mv((await $.idx((await $.mv(L0["bankfil"], "ChildNodes")), [L0["fi"]])), "NodeName")), "Name"))) {
              await $.set(C, "p_name", (await $.mv((await $.idx((await $.mv(L0["bankfil"], "ChildNodes")), [L0["fi"]])), "Text")));
            }
            if ($.truthy($.eq((await $.mv((await $.idx((await $.mv(L0["bankfil"], "ChildNodes")), [L0["fi"]])), "NodeName")), "TaxNumber"))) {
              await $.set(C, "p_TaxNumber", (await $.mv((await $.idx((await $.mv(L0["bankfil"], "ChildNodes")), [L0["fi"]])), "Text")));
            }
            if ($.truthy($.eq((await $.mv((await $.idx((await $.mv(L0["bankfil"], "ChildNodes")), [L0["fi"]])), "NodeName")), "CorAccount"))) {
              if ($.truthy($.eq((await $.idx((await $.mv((await $.idx((await $.mv(L0["bankfil"], "ChildNodes")), [L0["fi"]])), "Attributes")), ["Currency"])), "AZN"))) {
                await $.set(C, "p_CorAccountAZN", (await $.mv((await $.idx((await $.mv(L0["bankfil"], "ChildNodes")), [L0["fi"]])), "Text")));
                await $.set(C, "p_valAZN", "AZN");
              }
            }
            if ($.truthy($.eq((await $.mv((await $.idx((await $.mv(L0["bankfil"], "ChildNodes")), [L0["fi"]])), "NodeName")), "SubCorAccount"))) {
              if ($.truthy($.eq((await $.idx((await $.mv((await $.idx((await $.mv(L0["bankfil"], "ChildNodes")), [L0["fi"]])), "Attributes")), ["System"])), "LVPCSS"))) {
                await $.set(C, "p_SubCorAccountLVPCSS", (await $.mv((await $.idx((await $.mv(L0["bankfil"], "ChildNodes")), [L0["fi"]])), "Text")));
              }
            }
            await $.mset((await $.v(C, "Gauge1")), "Progress", (await $.call(C, "Trunc", [$.fdiv($.mul(L0["s"], 100), ($.sub((await $.mv((await $.mv(L0["branchoffices"], "ChildNodes")), "Count")), 1)))])));
            await $.tick();
          }
        }
        if ($.truthy($.eq((await $.v(C, "p_valAZN")), "AZN"))) {
          await $.mcall((await $.v(C, "ods_fil")), "Close", []);
          await $.stmt((await $.mcall((await $.v(C, "ods_fil")), "SetVariable", ["v_krno", (await $.v(C, "p_CorAccountAZN"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_fil")), "SetVariable", ["v_bankcode", (await $.v(C, "p_code"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_fil")), "SetVariable", ["v_name", $.add($.add((await $.v(C, "p_ParentName")), " "), (await $.v(C, "p_Name")))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_fil")), "SetVariable", ["v_swift", (await $.v(C, "p_SWIFTBI"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_fil")), "SetVariable", ["v_inn", (await $.v(C, "p_TaxNumber"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_fil")), "SetVariable", ["v_val_code", (await $.v(C, "p_valAZN"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_fil")), "SetVariable", ["v_subkrno", (await $.v(C, "p_SubCorAccountLVPCSS"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_fil")), "SetVariable", ["v_bank_kod", (await $.v(C, "p_ParentCode"))])));
          await $.stmt((await $.mcall((await $.v(C, "ods_fil")), "SetVariable", ["v_ours", 1])));
          await $.stmt((await $.mcall((await $.v(C, "ods_fil")), "SetVariable", ["v_count", 0])));
          await $.mcall((await $.v(C, "ods_fil")), "open", []);
        }
        await $.tick();
      }
    }
  } finally {
    await $.stmt((await $.call(C, "MessageDlg", ["Bank  məlumatları  uğurla yükləndi", (await $.v(C, "mtInformation")), [(await $.v(C, "mbOk"))], 0])));
    await $.mset((await $.v(C, "Gauge1")), "Progress", 0);
    await $.mcall(L0["id_handlersocket"], "Free", []);
    await $.mcall(L0["idhttp"], "Free", []);
    await $.mcall(L0["aa"], "Free", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
