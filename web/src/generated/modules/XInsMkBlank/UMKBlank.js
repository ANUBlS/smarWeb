// Generated from UMKBlank.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UMKBlank", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ActiveX", "AxCtrls", "MKBlank_TLB", "StdVcl", "StdCtrls", "DBCtrls", "Mask", "Buttons", "ExtCtrls", "Db", "OracleData", "SBPlgAx50_TLB", "Oracle", "DBViewComboBox", "HintBox", "CurrencyEdit", "ComCtrls", "PlgModalContainer", "Grids", "DBGrids", "INSWordExporter", "ComObj", "ComServ", "sboapiDataModuleImpl", "UMKDataMod", "UMKAccesories", "UClaims", "UConditions", "UNotes"]);
  const C = [U];
  U.defClass("TfmMKBlank", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "btok": {"name": "btOk", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "lbdraccesspeople1": {"name": "lbDrAccessPeople1", "type": "TGroupBox"}, "hberrmsg": {"name": "hbErrMsg", "type": "THintBox"}, "btsuggestion": {"name": "btSuggestion", "type": "TBitBtn"}, "btapply": {"name": "btApply", "type": "TBitBtn"}, "pmcsuggestion": {"name": "pmcSuggestion", "type": "TPlgModalContainer"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "gddraccesspeople": {"name": "gdDrAccessPeople", "type": "TDBGrid"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "speedbutton5": {"name": "SpeedButton5", "type": "TSpeedButton"}, "speedbutton6": {"name": "SpeedButton6", "type": "TSpeedButton"}, "suggest": {"name": "Suggest", "type": "TBitBtn"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "lbdbcbcustname": {"name": "lbDBCBCustName", "type": "TLabel"}, "dbcbcustname": {"name": "DBCBCustName", "type": "TDBLookupComboBox"}, "edagents": {"name": "edAgents", "type": "TEdit"}, "rbbank": {"name": "rbBank", "type": "TRadioButton"}, "rbbeneficiary": {"name": "rbBeneficiary", "type": "TRadioButton"}, "dbbeneficiary": {"name": "dbBeneficiary", "type": "TDBEdit"}, "dbbanks": {"name": "DBBanks", "type": "TDBLookupComboBox"}, "dbagents": {"name": "DBAgents", "type": "TDBLookupComboBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "sbtninsert": {"name": "sbtnInsert", "type": "TSpeedButton"}, "speedbutton9": {"name": "SpeedButton9", "type": "TSpeedButton"}, "speedbutton10": {"name": "SpeedButton10", "type": "TSpeedButton"}, "speedbutton11": {"name": "SpeedButton11", "type": "TSpeedButton"}, "sbtnsave": {"name": "sbtnSave", "type": "TSpeedButton"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "edbegindate": {"name": "edBeginDate", "type": "TDateTimePicker"}, "lbbegindate": {"name": "lbBeginDate", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "edins_date": {"name": "edIns_Date", "type": "TDateTimePicker"}, "edenddate": {"name": "edEndDate", "type": "TDateTimePicker"}, "lbenddate": {"name": "lbEndDate", "type": "TLabel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label15": {"name": "Label15", "type": "TLabel"}, "lbinssumm": {"name": "lbInsSumm", "type": "TLabel"}, "lbfranshiz": {"name": "lbFranshiz", "type": "TLabel"}, "lbtariff": {"name": "lbTariff", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "speedbutton7": {"name": "SpeedButton7", "type": "TSpeedButton"}, "dbavalute": {"name": "dbAvalute", "type": "TDBLookupComboBox"}, "edinssumm": {"name": "edInsSumm", "type": "TDBEdit"}, "edfranshiz": {"name": "edFranshiz", "type": "TDBComboBox"}, "edammount": {"name": "edAmmount", "type": "TDBEdit"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "label11": {"name": "Label11", "type": "TLabel"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "label12": {"name": "Label12", "type": "TLabel"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "wordexporter": {"name": "WordExporter", "type": "TINSWordExporter"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "label3": {"name": "Label3", "type": "TLabel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "dbmonths": {"name": "DBMonths", "type": "TDBLookupComboBox"}, "btncondition": {"name": "btnCondition", "type": "TBitBtn"}, "btnnew": {"name": "btnNew", "type": "TBitBtn"}, "speedbutton8": {"name": "SpeedButton8", "type": "TSpeedButton"}, "edtariff": {"name": "edTariff", "type": "TDBComboBox"}, "edextrafranshiz": {"name": "edExtraFranshiz", "type": "TDBEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fevents": {"name": "FEvents", "type": "IfmMKBlankEvents"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}, "issaved": {"name": "IsSaved", "type": "Boolean"}, "ch": {"name": "ch", "type": "Boolean"}, "cid": {"name": "CID", "type": "Integer"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    U.const("WM_ModalResult", $.add((await $.v(C, "WM_USER")), 139));
    U.const("fmCaption", "Kasko sigortasi anket formasi: (%s)");
    U.const("pBlankDone", 1);
    U.var_("fmMKBlank", null, "TfmMKBlank");
  });
  U.method("TfmMKBlank", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TfmMKBlank", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TfmMKBlank", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TfmMKBlank", "Initialize", null, arguments);
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
  U.method("TfmMKBlank", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TfmMKBlank", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TfmMKBlank", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMKBlank", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMKBlank", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TfmMKBlank", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TfmMKBlank", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TfmMKBlank", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TfmMKBlank", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMKBlank", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMKBlank", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMKBlank", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TfmMKBlank", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TfmMKBlank", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMKBlank", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TfmMKBlank", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TfmMKBlank", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMKBlank", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMKBlank", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TfmMKBlank", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TfmMKBlank", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t1 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t1); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TfmMKBlank", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "DisableControls", async function DisableControls(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"controlname": $.copyArg(p0), "disable": (p1 === undefined ? true : p1), result: undefined};
  await $.fixArgs(L0, ["controlname", "disable"]);
  L0["disablecontrol"] = $.fn(async function DisableControl(p0) {
  const L1 = {"cname": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L1, ["cname"]);
  {
    const $t2 = L1["cname"];
    { const $t3 = $.sub((await $.wv([$t2], "ControlCount", C, false)), 1);
      await $.wset([$t2], "i", 0, { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true });
      let $t4 = true;
      for (;;) {
        if (!$t4) { await $.wset([$t2], "i", $.succ((await $.wv([$t2], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), 1), { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }); }
        $t4 = false;
        if (!($.ord((await $.wv([$t2], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))) <= $.ord($t3))) break;
        if ($.truthy(($.is_((await $.idx((await $.wv([$t2], "Controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), "TCustomControl")))) {
          await $.stmt((await $.wcall([$t2], "DisableControl", [(await $.idx((await $.wv([$t2], "Controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))], { get: async () => L0["disablecontrol"], set: async (v) => { L0["disablecontrol"] = v; }, local: true })));
        }
        await $.mset((await $.idx((await $.wv([$t2], "Controls", C, false)), [(await $.wv([$t2], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), "Enabled", (await $.wv([$t2], "disable", { get: async () => L0["disable"], set: async (v) => { L0["disable"] = v; }, local: true }, false)));
        await $.tick();
      }
    }
  }
  return L1.result;
});
  {
    const $t5 = (await $.v(C, "InsMKDataMod"));
    if ($.truthy($.eq((await $.mcall((await $.wv([$t5], "OPCOMMON", C, false)), "CallIntegerFunction", ["disablepolicies", []])), 0))) {
      return L0.result;
    }
  }
  await $.stmt((await $.callv(L0["disablecontrol"], [L0["controlname"]])));
  await $.mset((await $.v(C, "btApply")), "Enabled", L0["disable"]);
  await $.mset((await $.v(C, "btOk")), "Enabled", L0["disable"]);
  return L0.result;
}, {"params": ["ControlName", "disable"], "kind": "procedure", "ptypes": ["TCustomControl", "boolean"]});
  U.method("TfmMKBlank", "BlankInitialization", async function BlankInitialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "CID", (await $.call(C, "Get_Params", ["SID"])));
  {
    const $t6 = (await $.v(C, "InsMKDataMod"));
    await $.stmt((await $.mcall((await $.wv([$t6], "ODSMotorKasko", C, false)), "SetVariable", ["CID", (await $.wv([$t6], "CID", C, false))])));
    await $.mcall((await $.wv([$t6], "ODSMotorKasko", C, false)), "Open", []);
    await $.stmt((await $.mcall((await $.wv([$t6], "ODSContracts", C, false)), "SetVariable", ["CID", (await $.wv([$t6], "CID", C, false))])));
    await $.mcall((await $.wv([$t6], "ODSContracts", C, false)), "Open", []);
    await $.stmt((await $.mcall((await $.wv([$t6], "ODSCusts", C, false)), "Locate", ["id", (await $.mv((await $.wv([$t6], "ODSContractsKli_ID", C, false)), "Value")), []])));
    await $.mcall((await $.wv([$t6], "ODSModels", C, false)), "Open", []);
  }
  await $.stmt($.call(C, "CalcAccessories", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmMKBlank", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt($.call(C, "BlankInitialization", []));
  if ($.truthy($.eq((await $.call(C, "Get_Params", ["Mod"])), "Insert"))) {
    {
      const $t7 = (await $.v(C, "InsMKDataMod"));
      await $.mcall((await $.wv([$t7], "ODSMotorkasko", C, false)), "Insert", []);
      await $.mcall((await $.wv([$t7], "ODSContracts", C, false)), "Insert", []);
    }
    await $.mset((await $.v(C, "edIns_Date")), "DateTime", (await $.v(C, "Now")));
    await $.mset((await $.v(C, "edBeginDate")), "DateTime", (await $.v(C, "Now")));
    await $.mset((await $.v(C, "edEndDate")), "DateTime", (await $.v(C, "Now")));
    await $.set(C, "Caption", (await $.call(C, "format", [(await $.v(C, "fmCaption")), ["Yeni anket"]])));
    await $.mset((await $.v(C, "DBCBCustName")), "KeyValue", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["KLI_ID"]))])));
    {
      const $t8 = (await $.v(C, "InsMKDataMod"));
      await $.mset((await $.mcall((await $.wv([$t8], "ODSContracts", C, false)), "FieldByName", ["KLI_ID"])), "AsInteger", (await $.wcall([$t8], "StrToInt", [(await $.wcall([$t8], "Get_Params", ["KLI_ID"], C))], C)));
    }
  }
  if ($.truthy($.eq((await $.call(C, "Get_Params", ["Mod"])), "Edit"))) {
    await $.set(C, "Caption", (await $.call(C, "format", [(await $.v(C, "fmCaption")), ["Redakte"]])));
    {
      const $t9 = (await $.v(C, "InsMKDataMod"));
      await $.mcall((await $.wv([$t9], "ODSReliaseDates", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t9], "ODSReliaseDates", C, false)), "SetVariable", ["state_id", (await $.mv((await $.mcall((await $.wv([$t9], "ODSMarks", C, false)), "fieldbyName", ["state_id"])), "asInteger"))])));
      await $.stmt((await $.mcall((await $.wv([$t9], "ODSReliaseDates", C, false)), "SetVariable", ["releaseyear", (await $.mv((await $.mcall((await $.wv([$t9], "ODSMotorKasko", C, false)), "FieldByName", ["InsuredOutputYear"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t9], "ODSReliaseDates", C, false)), "Open", []);
      await $.mcall((await $.wv([$t9], "ODSMonths", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t9], "ODSMonths", C, false)), "SetVariable", ["release_id", (await $.mv((await $.wv([$t9], "ODSReliaseDatesID", C, false)), "AsInteger"))])));
      await $.mcall((await $.wv([$t9], "ODSMonths", C, false)), "Open", []);
      await $.mcall((await $.wv([$t9], "ODSFranshiz", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t9], "ODSFranshiz", C, false)), "SetVariable", ["month_id", (await $.mv((await $.wv([$t9], "ODSMonthsID", C, false)), "AsInteger"))])));
      await $.mcall((await $.wv([$t9], "ODSFranshiz", C, false)), "Open", []);
      await $.mcall((await $.wv([$t9], "ODSTariffs", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t9], "ODSTariffs", C, false)), "SetVariable", ["franshiz_id", (await $.mv((await $.wv([$t9], "ODSFranshizID", C, false)), "AsInteger"))])));
      await $.mcall((await $.wv([$t9], "ODSTariffs", C, false)), "Open", []);
    }
    {
      const $t10 = (await $.v(C, "InsMKDataMod"));
      const $t11 = (await $.wv([$t10], "ODSdrAccessPeople", C, false));
      await $.stmt((await $.wcall([$t10, $t11], "SetVariable", ["ID", (await $.wv([$t10, $t11], "CID", C, false))], C)));
      await $.stmt($.wcall([$t10, $t11], "Open", [], C));
    }
    {
      const $t12 = (await $.v(C, "InsMKDataMod"));
      const $t13 = (await $.wv([$t12], "ODSContracts", C, false));
      await $.mset((await $.wv([$t12, $t13], "rbBank", C, false)), "Checked", $.eq((await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["ben_id"], C)), "asInteger")), 0));
      await $.mset((await $.wv([$t12, $t13], "rbBeneficiary", C, false)), "Checked", $.eq((await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["ben_id"], C)), "asInteger")), 1));
    }
    {
      const $t14 = (await $.v(C, "InsMKDataMod"));
      const $t15 = (await $.wv([$t14], "ODSContracts", C, false));
      await $.mcall((await $.wv([$t14, $t15], "ODSMotorkasko", C, false)), "Edit", []);
      await $.mcall((await $.wv([$t14, $t15], "ODSContracts", C, false)), "Edit", []);
      await $.mset((await $.wv([$t14, $t15], "edIns_Date", C, false)), "DateTime", (await $.mv((await $.wcall([$t14, $t15], "fieldByName", ["INS_DATE"], C)), "asDateTime")));
      await $.mset((await $.wv([$t14, $t15], "edBeginDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t14, $t15], "fieldByName", ["BEGIN_DATE"], C)), "asDateTime")));
      await $.mset((await $.wv([$t14, $t15], "edEndDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t14, $t15], "fieldByName", ["END_DATE"], C)), "asDateTime")));
    }
    await $.mset((await $.v(C, "btSuggestion")), "Enabled", true);
    {
      const $t16 = (await $.v(C, "InsMKDataMod"));
      const $t17 = (await $.wv([$t16], "OPCOMMON", C, false));
      if ($.truthy($.eq((await $.wcall([$t16, $t17], "CallIntegerFunction", ["get_state", [(await $.wv([$t16, $t17], "CID", C, false))]], C)), 6))) {
        await $.stmt((await $.wcall([$t16, $t17], "DisableControls", [(await $.wv([$t16, $t17], "Panel2", C, false)), (await $.wv([$t16, $t17], "false", C, false))], C)));
      }
    }
  }
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "SaveData", async function SaveData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false, "str": '', "s": 0, "s1": 0, "i": 0};
  L0["result"] = false;
  L0["s"] = 0;
  L0["s1"] = 0;
  try {
    {
      const $t19 = (await $.v(C, "InsMKDataMod"));
      const $t20 = (await $.wv([$t19], "ODSContracts", C, false));
      if ($.truthy($.in_((await $.wv([$t19, $t20], "State", C, false)), [(await $.wv([$t19, $t20], "dsEdit", C, false)), (await $.wv([$t19, $t20], "dsInsert", C, false))]))) {
        await $.mset((await $.wcall([$t19, $t20], "FieldByName", ["AGENT_ID"], C)), "AsFloat", (await $.mv((await $.wv([$t19, $t20], "ODSAgentID", C, false)), "value")));
        await $.mset((await $.wcall([$t19, $t20], "FieldByName", ["Ins_Date"], C)), "AsDateTime", (await $.wcall([$t19, $t20], "Integer", [(await $.wcall([$t19, $t20], "trunc", [(await $.mv((await $.wv([$t19, $t20], "edIns_Date", C, false)), "Date"))], C))], C)));
        await $.mset((await $.wcall([$t19, $t20], "FieldByName", ["Begin_Date"], C)), "AsDateTime", (await $.wcall([$t19, $t20], "Integer", [(await $.wcall([$t19, $t20], "trunc", [(await $.mv((await $.wv([$t19, $t20], "edBeginDate", C, false)), "Date"))], C))], C)));
        await $.mset((await $.wcall([$t19, $t20], "FieldByName", ["End_Date"], C)), "AsDateTime", (await $.wcall([$t19, $t20], "Integer", [(await $.wcall([$t19, $t20], "trunc", [(await $.mv((await $.wv([$t19, $t20], "edEndDate", C, false)), "Date"))], C))], C)));
        await $.mset((await $.wcall([$t19, $t20], "FieldByName", ["ben_id"], C)), "asInteger", (await $.wcall([$t19, $t20], "Integer", [$.not((await $.mv((await $.wv([$t19, $t20], "rbBank", C, false)), "Checked")))], C)));
        await $.stmt($.wcall([$t19, $t20], "Post", [], C));
        await $.stmt($.wcall([$t19, $t20], "RefreshRecord", [], C));
        await $.wset([$t19, $t20], "CID", (await $.mv((await $.wcall([$t19, $t20], "FieldByName", ["id"], C)), "asInteger")), C);
        await $.stmt($.wcall([$t19, $t20], "Edit", [], C));
      }
    }
    {
      const $t21 = (await $.v(C, "InsMKDataMod"));
      const $t22 = (await $.wv([$t21], "ODSMotorkasko", C, false));
      if ($.truthy($.in_((await $.wv([$t21, $t22], "State", C, false)), [(await $.wv([$t21, $t22], "dsEdit", C, false)), (await $.wv([$t21, $t22], "dsInsert", C, false))]))) {
        await $.mset((await $.wcall([$t21, $t22], "FieldByName", ["CID"], C)), "AsInteger", (await $.wv([$t21, $t22], "CID", C, false)));
        await $.stmt((await $.mcall((await $.wv([$t21, $t22], "ODSBanks", C, false)), "Locate", ["name", (await $.mv((await $.wv([$t21, $t22], "DBBanks", C, false)), "KeyValue")), []])));
        if ($.truthy((await $.mv((await $.wv([$t21, $t22], "rbBank", C, false)), "Checked")))) {
          await $.mset((await $.wv([$t21, $t22], "ODSMotorkaskoBank_Id", C, false)), "Value", (await $.mv((await $.wv([$t21, $t22], "ODSBanksID", C, false)), "Value")));
        }
        await $.stmt($.wcall([$t21, $t22], "Post", [], C));
        await $.stmt($.wcall([$t21, $t22], "RefreshRecord", [], C));
        await $.mcall((await $.wv([$t21, $t22], "ODSContracts", C, false)), "Edit", []);
      }
    }
    {
      const $t23 = (await $.v(C, "InsMKDataMod"));
      const $t24 = (await $.wv([$t23], "ODSMotorkasko", C, false));
      await $.stmt($.wcall([$t23, $t24], "First", [], C));
      { const $t25 = (await $.wv([$t23, $t24], "RecordCount", C, false));
        await $.wset([$t23, $t24], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t26 = true;
        for (;;) {
          if (!$t26) { await $.wset([$t23, $t24], "i", $.succ((await $.wv([$t23, $t24], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t26 = false;
          if (!($.ord((await $.wv([$t23, $t24], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t25))) break;
          await $.wset([$t23, $t24], "s", $.add((await $.wv([$t23, $t24], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t23, $t24], "FieldByName", ["inssumm"], C)), "AsFloat"))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
          await $.wset([$t23, $t24], "s1", $.add((await $.wv([$t23, $t24], "s1", { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t23, $t24], "FieldByName", ["ammount"], C)), "AsFloat"))), { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true });
          await $.stmt($.wcall([$t23, $t24], "next", [], C));
          await $.tick();
        }
      }
    }
    {
      const $t27 = (await $.v(C, "InsMKDataMod"));
      const $t28 = (await $.wv([$t27], "ODSContracts", C, false));
      if ($.truthy($.in_((await $.wv([$t27, $t28], "State", C, false)), [(await $.wv([$t27, $t28], "dsEdit", C, false)), (await $.wv([$t27, $t28], "dsInsert", C, false))]))) {
        await $.mset((await $.wv([$t27, $t28], "ODSContractsAmmount", C, false)), "Value", (await $.wv([$t27, $t28], "s1", { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true }, false)));
        await $.mset((await $.wv([$t27, $t28], "ODSContractsInssumm", C, false)), "Value", (await $.wv([$t27, $t28], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
        await $.mset((await $.wv([$t27, $t28], "ODSContractsFranshiz", C, false)), "Value", (await $.mv((await $.mv((await $.wv([$t27, $t28], "InsMKDataMod", C, false)), "ODSMotorKaskoFranshiz")), "Value")));
        await $.mset((await $.wv([$t27, $t28], "ODSContractsTariff", C, false)), "Value", (await $.mv((await $.mv((await $.wv([$t27, $t28], "InsMKDataMod", C, false)), "ODSMotorKaskoTariff")), "Value")));
        await $.stmt($.wcall([$t27, $t28], "Post", [], C));
        await $.stmt($.wcall([$t27, $t28], "RefreshRecord", [], C));
      }
    }
    {
      const $t29 = (await $.v(C, "InsMKDataMod"));
      const $t30 = (await $.wv([$t29], "ODSdrAccessPeople", C, false));
      const $t31 = (await $.wv([$t29, $t30], "ODSAccessories", C, false));
      if ($.truthy($.in_((await $.wv([$t29, $t30, $t31], "State", C, false)), [(await $.wv([$t29, $t30, $t31], "dsEdit", C, false)), (await $.wv([$t29, $t30, $t31], "dsInsert", C, false))]))) {
        await $.stmt($.wcall([$t29, $t30, $t31], "Post", [], C));
        await $.stmt($.wcall([$t29, $t30, $t31], "RefreshRecord", [], C));
      }
    }
    {
      const $t32 = (await $.v(C, "InsMKDataMod"));
      const $t33 = (await $.wv([$t32], "ODSAgent", C, false));
      if ($.truthy(($.ne((await $.wcall([$t32, $t33], "trim", [(await $.mv((await $.wv([$t32, $t33], "edAgents", C, false)), "Text"))], C)), "")))) {
        if ($.truthy(($.ne((await $.mv((await $.wv([$t32, $t33], "edAgents", C, false)), "Text")), (await $.mv((await $.wv([$t32, $t33], "DBAgents", C, false)), "Text")))))) {
          await $.wset([$t32, $t33], "str", (await $.mv((await $.wv([$t32, $t33], "edAgents", C, false)), "Text")), { get: async () => L0["str"], set: async (v) => { L0["str"] = v; }, local: true });
          await $.stmt($.wcall([$t32, $t33], "Insert", [], C));
          await $.mset((await $.wcall([$t32, $t33], "FieldByName", ["ID"], C)), "asInteger", 1);
          await $.mset((await $.wcall([$t32, $t33], "FieldByName", ["Surname"], C)), "asString", (await $.wv([$t32, $t33], "str", { get: async () => L0["str"], set: async (v) => { L0["str"] = v; }, local: true }, false)));
          await $.stmt($.wcall([$t32, $t33], "Post", [], C));
          await $.stmt($.wcall([$t32, $t33], "RefreshRecord", [], C));
        }
      }
    }
    await $.set(C, "IsSaved", true);
    L0["result"] = true;
  } catch ($t18) {
    $.rethrowControl($t18);
    if ($.excIs($t18, "Exception")) {
      L0["e"] = $.exc($t18);
      await $.stmt((await $.mcall((await $.v(C, "hbErrMsg")), "ShowMessage", [(await $.mv(L0["e"], "message"))])));
    }
    else { throw $t18; }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMKBlank", "btOkClick", async function btOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_((await $.call(C, "SaveData", [])), async () => (await $.v(C, "IsSaved")))))) {
    await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrOk")), 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "fmMKBlank", Self);
  await $.set(C, "FParams", (await $.mv((await $.v(C, "TStringList")), "Create")));
  await $.set(C, "InsMKDataMod", (await $.mcall((await $.v(C, "TInsMKDataMod")), "Create", [Self])));
  await $.set(C, "isSaved", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "ActiveFormDestroy", async function ActiveFormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "InsMKDataMod")), "free", []);
  await $.mcall((await $.v(C, "FParams")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t34 = (await $.v(C, "InsMKDataMod"));
    await $.mcall((await $.wv([$t34], "ODSMotorkasko", C, false)), "Cancel", []);
    await $.mcall((await $.wv([$t34], "ODSContracts", C, false)), "Cancel", []);
    await $.mcall((await $.wv([$t34], "ODSdrAccessPeople", C, false)), "Cancel", []);
  }
  await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrCancel")), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("ReplaceStr", async function ReplaceStr(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"substr": $.copyArg(p0), "s": $.copyArg(p1), result: '', "res": '', "p": 0};
  await $.fixArgs(L0, ["substr", "s"]);
  L0["p"] = (await $.call(C, "pos", [L0["substr"], L0["s"]]));
  L0["res"] = $.add("lb", (await $.call(C, "copy", [L0["s"], $.add(L0["p"], 2), (await $.call(C, "Length", [L0["s"]]))])));
  L0["result"] = L0["res"];
  return L0.result;
}, {"params": ["Substr", "S"], "kind": "function", "ptypes": ["String", "String"]});
  U.method("TfmMKBlank", "AssignVariables", async function AssignVariables(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"valname": $.copyArg(p0), "value": $.copyArg(p1), "valtype": $.copyArg(p2), "varbl": $.asRef(p3), result: 0};
  await $.fixArgs(L0, ["valname", "value", "valtype"]);
  try {
    await $.stmt((await $.call(C, "varCast", [(await L0["varbl"].get()), L0["value"], L0["valtype"]])));
    L0["result"] = (await $.v(C, "mrOk"));
  } catch ($t35) {
    $.rethrowControl($t35);
    if ($.excIs($t35, "Exception")) {
      L0["e"] = $.exc($t35);
      throw $.raise((await $.mcall((await $.v(C, "TConversionExcept")), "Create", [$.add($.add((await $.mv(((await $.call(C, "FindComponent", [(await $.call(C, "ReplaceStr", ["ed", L0["valname"]]))]))), "Caption")), "-səhv daxil edilib\r"), (await $.mv(L0["e"], "message")))])));
    }
    else { throw $t35; }
  }
  return L0.result;
}, {"params": ["Valname", "Value", "Valtype", "Varbl"], "kind": "function", "ptypes": ["String", "Variant", "Integer", "Variant"]});
  U.method("TfmMKBlank", "edDBCBCustNameChange", async function edDBCBCustNameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "key": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "edDBCBCustNameKeyPress", [L0["sender"], $.ref(async () => L0["key"], async ($t36) => { L0["key"] = $t36; })])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "edDBCBCustNameKeyPress", async function edDBCBCustNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.call(C, "FindNextControl", [(await $.v(C, "ActiveControl")), true, true, false])), "SetFocus", []);
    await L0["key"].set("\u0000");
  } else {
    await $.mset((await $.v(C, "btApply")), "Enabled", true);
  }
  await $.set(C, "IsSaved", $.not((await $.mv((await $.v(C, "btApply")), "Enabled"))));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfmMKBlank", "btApplyClick", async function btApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "SaveData")))) {
    await $.mset((await $.v(C, "btSuggestion")), "Enabled", true);
    await $.mset((await $.v(C, "btApply")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "btSuggestionClick", async function btSuggestionClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "policformguid": null, "params": null};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SaveData", []));
  L0["params"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  L0["policformguid"] = (await $.call(C, "StringToGUID", ["{3C454A4C-C304-4633-AAAD-4C46C68BB8EE}"]));
  {
    const $t37 = (await $.v(C, "InsMKDataMod"));
    { const $t38 = await $.iset((await $.mv((await $.wv([$t37], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false)), "Values")), ["CID"], (await $.wcall([$t37], "FloatToStr", [(await $.mv((await $.wv([$t37], "ODSContractsID", C, false)), "Value"))], C))); if ($t38 !== undefined) { await $.mset((await $.wv([$t37], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false)), "Values", $t38); } }
  }
  {
    const $t39 = (await $.v(C, "pmcSuggestion"));
    await $.stmt((await $.wcall([$t39], "ShowModal", [(await $.wv([$t39], "PolicFormGuid", { get: async () => L0["policformguid"], set: async (v) => { L0["policformguid"] = v; }, local: true }, false)), (await $.wv([$t39], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["params"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "edDrIntendChange", async function edDrIntendChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "key": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "edDBCBCustNameKeyPress", [L0["sender"], $.ref(async () => L0["key"], async ($t40) => { L0["key"] = $t40; })])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "CalcMonth", async function CalcMonth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t41 = (await $.v(C, "InsMKDataMod"));
    await $.stmt((await $.mcall((await $.wv([$t41], "ODSMonths", C, false)), "Locate", ["count", (await $.wcall([$t41], "IntToStr", [(await $.wcall([$t41], "trunc", [$.fdiv(($.sub((await $.mv((await $.wv([$t41], "edEndDate", C, false)), "DateTime")), (await $.mv((await $.wv([$t41], "edBeginDate", C, false)), "DateTime")))), 30)], C))], C)), []])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmMKBlank", "CalcEndDate", async function CalcEndDate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t42 = (await $.v(C, "InsMKDataMod"));
    await $.mset((await $.wv([$t42], "edEndDate", C, false)), "DateTime", (await $.wcall([$t42], "IncMonth", [(await $.mv((await $.wv([$t42], "edBeginDate", C, false)), "DateTime")), (await $.mv((await $.mcall((await $.wv([$t42], "ODSMonths", C, false)), "fieldbyname", ["COUNT"])), "asInteger"))], C)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmMKBlank", "edBeginDateChange", async function edBeginDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "key": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CalcEndDate", [])));
  await $.stmt((await $.call(C, "edDBCBCustNameKeyPress", [L0["sender"], $.ref(async () => L0["key"], async ($t43) => { L0["key"] = $t43; })])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "DBBentypeClick", async function DBBentypeClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "key": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "edDBCBCustNameKeyPress", [L0["sender"], $.ref(async () => L0["key"], async ($t44) => { L0["key"] = $t44; })])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "MakeFranshizList", async function MakeFranshizList(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t45 = (await $.v(C, "InsMKDataMod"));
    const $t46 = (await $.wv([$t45], "ODSFranshiz", C, false));
    await $.mcall((await $.mv((await $.wv([$t45, $t46], "edFranshiz", C, false)), "Items")), "Clear", []);
    await $.stmt($.wcall([$t45, $t46], "First", [], C));
    while ($.truthy($.not((await $.wv([$t45, $t46], "EOF", C, false))))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t45, $t46], "edFranshiz", C, false)), "Items")), "Add", [(await $.wcall([$t45, $t46], "FloatToStr", [(await $.mv((await $.wcall([$t45, $t46], "FieldByName", ["FRANSHIZ"], C)), "asFloat"))], C))])));
      await $.stmt($.wcall([$t45, $t46], "Next", [], C));
      await $.tick();
    }
    await $.stmt($.wcall([$t45, $t46], "First", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmMKBlank", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "begindate": '', "enddate": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t47 = (await $.v(C, "InsMKDataMod"));
    const $t48 = (await $.wv([$t47], "ODSReliaseDates", C, false));
    try {
      await $.stmt($.wcall([$t47, $t48], "Close", [], C));
      if ($.truthy(($.eq((await $.mv((await $.mcall((await $.wv([$t47, $t48], "ODSMarks", C, false)), "FieldByName", ["calcoptions"])), "asInteger")), 1)))) {
        throw $.raise((await $.mcall((await $.wv([$t47, $t48], "TCalcException", C, false)), "Create", ["Verilmiş avtomobil markası üçün tarif hesablanmır!"])));
      }
      if ($.truthy($.eq((await $.wcall([$t47, $t48], "trim", [(await $.mv((await $.mcall((await $.wv([$t47, $t48], "ODSMotorKasko", C, false)), "FieldByName", ["InsuredOutputYear"])), "AsString"))], C)), ""))) {
        throw $.raise((await $.mcall((await $.wv([$t47, $t48], "TOutputYear", C, false)), "Create", ["Avtomobilin buraxılış ilini daxil edin!"])));
      }
      await $.stmt((await $.wcall([$t47, $t48], "SetVariable", ["state_id", (await $.mv((await $.mcall((await $.wv([$t47, $t48], "ODSMarks", C, false)), "fieldbyName", ["state_id"])), "asInteger"))], C)));
      await $.stmt((await $.wcall([$t47, $t48], "SetVariable", ["releaseyear", (await $.mv((await $.mcall((await $.wv([$t47, $t48], "ODSMotorKasko", C, false)), "FieldByName", ["InsuredOutputYear"])), "AsInteger"))], C)));
      await $.stmt($.wcall([$t47, $t48], "Open", [], C));
      await $.wset([$t47, $t48], "begindate", (await $.wcall([$t47, $t48], "FormatDateTime", ["YYYY", (await $.mv((await $.wv([$t47, $t48], "ODSReliaseDatesBeginDate", C, false)), "value"))], C)), { get: async () => L0["begindate"], set: async (v) => { L0["begindate"] = v; }, local: true });
      await $.wset([$t47, $t48], "enddate", (await $.wcall([$t47, $t48], "FormatDateTime", ["YYYY", (await $.mv((await $.wv([$t47, $t48], "ODSReliaseDatesEndDate", C, false)), "value"))], C)), { get: async () => L0["enddate"], set: async (v) => { L0["enddate"] = v; }, local: true });
      if ($.truthy((await $.or_(($.lt((await $.mv((await $.mcall((await $.wv([$t47, $t48], "ODSMotorKasko", C, false)), "FieldByName", ["InsuredOutputYear"])), "AsString")), (await $.wv([$t47, $t48], "begindate", { get: async () => L0["begindate"], set: async (v) => { L0["begindate"] = v; }, local: true }, false)))), async () => ($.gt((await $.mv((await $.mcall((await $.wv([$t47, $t48], "ODSMotorKasko", C, false)), "FieldByName", ["InsuredOutputYear"])), "AsString")), (await $.wv([$t47, $t48], "enddate", { get: async () => L0["enddate"], set: async (v) => { L0["enddate"] = v; }, local: true }, false)))))))) {
        throw $.raise((await $.mcall((await $.wv([$t47, $t48], "TCalcException", C, false)), "Create", ["Verilmiş avtomobil markasının buraxılış ilinə uyğun tarif hesablanmır!"])));
      }
      await $.mcall((await $.wv([$t47, $t48], "ODSMonths", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t47, $t48], "ODSMonths", C, false)), "SetVariable", ["release_id", (await $.mv((await $.wv([$t47, $t48], "ODSReliaseDatesID", C, false)), "AsInteger"))])));
      await $.mcall((await $.wv([$t47, $t48], "ODSMonths", C, false)), "Open", []);
      await $.mcall((await $.wv([$t47, $t48], "ODSFranshiz", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t47, $t48], "ODSFranshiz", C, false)), "SetVariable", ["month_id", (await $.mv((await $.wv([$t47, $t48], "ODSMonthsID", C, false)), "AsInteger"))])));
      await $.mcall((await $.wv([$t47, $t48], "ODSFranshiz", C, false)), "Open", []);
      await $.stmt($.wcall([$t47, $t48], "MakeFranshizList", [], C));
    } catch ($t49) {
      $.rethrowControl($t49);
      if ($.excIs($t49, "Exception")) {
        L0["e"] = $.exc($t49);
        await $.stmt((await $.wcall([$t47, $t48], "MessageDlg", [(await $.mv((await $.wv([$t47, $t48], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), (await $.wv([$t47, $t48], "mtInformation", C, false)), [(await $.wv([$t47, $t48], "mbOK", C, false))], 0], C)));
      }
      else { throw $t49; }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "DBMonthsClick", async function DBMonthsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "key": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "edDBCBCustNameKeyPress", [L0["sender"], $.ref(async () => L0["key"], async ($t50) => { L0["key"] = $t50; })])));
  await $.stmt((await $.call(C, "CalcEndDate", [])));
  await $.stmt($.call(C, "MakeFranshizList", []));
  {
    const $t51 = (await $.v(C, "InsMKDataMod"));
    await $.mcall((await $.wv([$t51], "ODSTariffs", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t51], "ODSTariffs", C, false)), "SetVariable", ["franshiz_id", (await $.mv((await $.wv([$t51], "ODSFranshizID", C, false)), "AsInteger"))])));
    await $.mcall((await $.wv([$t51], "ODSTariffs", C, false)), "Open", []);
  }
  await $.stmt($.call(C, "MakeTariffList", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "DBMonthsKeyPress", async function DBMonthsKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "edDBCBCustNameKeyPress", [L0["sender"], $.ref(async () => (await L0["key"].get()), async ($t52) => { await L0["key"].set($t52); })])));
  await $.stmt((await $.call(C, "CalcEndDate", [])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfmMKBlank", "DBFranshizClick", async function DBFranshizClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "key": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "edDBCBCustNameKeyPress", [L0["sender"], $.ref(async () => L0["key"], async ($t53) => { L0["key"] = $t53; })])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "DBFranshizKeyPress", async function DBFranshizKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "edDBCBCustNameKeyPress", [L0["sender"], $.ref(async () => (await L0["key"].get()), async ($t54) => { await L0["key"].set($t54); })])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfmMKBlank", "edFranshizClick", async function edFranshizClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "key": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t55 = (await $.v(C, "InsMKDataMod"));
    const $t56 = (await $.wv([$t55], "ODSFranshiz", C, false));
    await $.stmt($.wcall([$t55, $t56], "First", [], C));
    await $.stmt((await $.wcall([$t55, $t56], "Locate", ["FRANSHIZ", (await $.wcall([$t55, $t56], "StrToFloat", [(await $.mv((await $.wv([$t55, $t56], "edFranshiz", C, false)), "Text"))], C)), []], C)));
    await $.mset((await $.wv([$t55, $t56], "edTariff", C, false)), "Text", (await $.wcall([$t55, $t56], "FloatToStr", [(await $.mv((await $.wcall([$t55, $t56], "FieldByName", ["tariff"], C)), "asFloat"))], C)));
  }
  await $.stmt((await $.call(C, "edDBCBCustNameKeyPress", [L0["sender"], $.ref(async () => L0["key"], async ($t57) => { L0["key"] = $t57; })])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "ODSFranshizAfterOpen", async function ODSFranshizAfterOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall((await $.mv((await $.v(C, "edFranshiz")), "Items")), "Clear", []);
  {
    const $t58 = L0["dataset"];
    while ($.truthy($.not((await $.wv([$t58], "EOF", C, false))))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t58], "edFranshiz", C, false)), "Items")), "Add", [(await $.wcall([$t58], "FloatToStr", [(await $.mv((await $.wcall([$t58], "FieldByName", ["FRANSHIZ"], C)), "asFloat"))], C))])));
      await $.stmt($.wcall([$t58], "Next", [], C));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TfmMKBlank", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t59 = (await $.mv((await $.v(C, "InsMKDataMod")), "ODSdrAccessPeople"));
    if ($.truthy($.eq((await $.wv([$t59], "CID", C, false)), (-(1))))) {
      if ($.truthy($.eq((await $.wcall([$t59], "MessageDlg", ["Melumatlar yadda saxlanilsin?", (await $.wv([$t59], "mtConfirmation", C, false)), [(await $.wv([$t59], "mbYes", C, false)), (await $.wv([$t59], "mbNo", C, false))], 0], C)), (await $.wv([$t59], "mrYes", C, false))))) {
        await $.stmt($.wcall([$t59], "SaveData", [], C));
      } else {
        return L0.result;
      }
    }
    await $.stmt((await $.wcall([$t59], "SetVariable", ["ID", (await $.mv((await $.mv((await $.wv([$t59], "InsMKDataMod", C, false)), "ODSMotorKaskoid")), "value"))], C)));
    await $.stmt($.wcall([$t59], "Open", [], C));
    if ($.truthy($.not(($.in_((await $.wv([$t59], "state", C, false)), [(await $.wv([$t59], "dsInsert", C, false))]))))) {
      await $.stmt($.wcall([$t59], "Insert", [], C));
    }
    await $.mset((await $.wcall([$t59], "FieldByName", ["ID"], C)), "AsFloat", (await $.mv((await $.mv((await $.wv([$t59], "InsMKDataMod", C, false)), "ODSMotorKaskoid")), "value")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t60 = (await $.mv((await $.v(C, "InsMKDataMod")), "ODSdrAccessPeople"));
    if ($.truthy((await $.wv([$t60], "Active", C, false)))) {
      await $.stmt($.wcall([$t60], "Edit", [], C));
    } else {
      await $.stmt((await $.mcall((await $.wv([$t60], "hbErrMsg", C, false)), "ShowMessage", ["Can't change the data."])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "SpeedButton4Click", async function SpeedButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t61 = (await $.mv((await $.v(C, "InsMKDataMod")), "ODSdrAccessPeople"));
    if ($.truthy((await $.wv([$t61], "Active", C, false)))) {
      if ($.truthy($.eq((await $.wcall([$t61], "MessageDlg", ["Məlumatlar silinsin?", (await $.wv([$t61], "mtConfirmation", C, false)), [(await $.wv([$t61], "mbYes", C, false)), (await $.wv([$t61], "mbNo", C, false))], 0], C)), (await $.wv([$t61], "mrYes", C, false))))) {
        await $.stmt($.wcall([$t61], "Delete", [], C));
      }
    } else {
      await $.stmt((await $.mcall((await $.wv([$t61], "hbErrMsg", C, false)), "ShowMessage", ["Can't change the data."])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "SpeedButton5Click", async function SpeedButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t62 = (await $.mv((await $.v(C, "InsMKDataMod")), "ODSdrAccessPeople"));
    if ($.truthy((await $.wv([$t62], "Active", C, false)))) {
      await $.stmt($.wcall([$t62], "Refresh", [], C));
    } else {
      await $.stmt((await $.mcall((await $.wv([$t62], "hbErrMsg", C, false)), "ShowMessage", ["Can't change the data."])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "SpeedButton6Click", async function SpeedButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t63 = (await $.mv((await $.v(C, "InsMKDataMod")), "ODSdrAccessPeople"));
    if ($.truthy((await $.and_((await $.wv([$t63], "Active", C, false)), async () => ($.in_((await $.wv([$t63], "State", C, false)), [(await $.wv([$t63], "dsEdit", C, false)), (await $.wv([$t63], "dsInsert", C, false))])))))) {
      await $.stmt($.wcall([$t63], "Post", [], C));
    } else {
      await $.stmt((await $.mcall((await $.wv([$t63], "hbErrMsg", C, false)), "ShowMessage", ["Can't change the data or there're no changes."])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "ODSdrAccessPeopleAfterInsert", async function ODSdrAccessPeopleAfterInsert(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t64 = (await $.v(C, "InsMKDataMod"));
    const $t65 = (await $.wv([$t64], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false));
    await $.mset((await $.wcall([$t64, $t65], "FieldByName", ["CID"], C)), "asInteger", (await $.wv([$t64, $t65], "CID", C, false)));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TfmMKBlank", "ODSdrAccessPeopleBeforePost", async function ODSdrAccessPeopleBeforePost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "exp": 0};
  await $.fixArgs(L0, ["dataset"]);
  L0["showmsg"] = $.fn(async function ShowMsg(p0) {
  const L1 = {"msg": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["msg"]);
  await $.stmt((await $.mcall((await $.v(C, "hbErrMsg")), "ShowMessage", [L1["msg"]])));
  throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", ["goto"])));
  return L1.result;
});
  try {
    {
      const $t67 = (await $.v(C, "InsMKDataMod"));
      const $t68 = (await $.wv([$t67], "ODSdrAccessPeople", C, false));
      await $.wset([$t67, $t68], "exp", (await $.mv((await $.wcall([$t67, $t68], "FieldByName", ["DREXPERIENCE"], C)), "AsDateTime")), { get: async () => L0["exp"], set: async (v) => { L0["exp"] = v; }, local: true });
      if ($.truthy($.le(($.sub((await $.wv([$t67, $t68], "exp", { get: async () => L0["exp"], set: async (v) => { L0["exp"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t67, $t68], "FieldByName", ["BIRTHDAY"], C)), "AsDateTime")))), 0))) {
        await $.stmt((await $.wcall([$t67, $t68], "ShowMsg", ["Sürücülük təcrübəsi doğum tarixindən az ola bilməz!"], { get: async () => L0["showmsg"], set: async (v) => { L0["showmsg"] = v; }, local: true })));
      }
      if ($.truthy($.lt(($.fdiv(($.sub((await $.wv([$t67, $t68], "exp", { get: async () => L0["exp"], set: async (v) => { L0["exp"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t67, $t68], "FieldByName", ["BIRTHDAY"], C)), "AsDateTime")))), 364)), 18))) {
        await $.stmt((await $.wcall([$t67, $t68], "ShowMsg", ["18 yaşdan aşağı şəxslərin sürücülük vəsiqəsi ola bilməz!"], { get: async () => L0["showmsg"], set: async (v) => { L0["showmsg"] = v; }, local: true })));
      }
      await $.wset([$t67, $t68], "exp", (await $.mv((await $.wcall([$t67, $t68], "FieldByName", ["BIRTHDAY"], C)), "AsDateTime")), { get: async () => L0["exp"], set: async (v) => { L0["exp"] = v; }, local: true });
      if ($.truthy($.lt(($.fdiv(($.sub((await $.wv([$t67, $t68], "now", C, false)), (await $.wv([$t67, $t68], "exp", { get: async () => L0["exp"], set: async (v) => { L0["exp"] = v; }, local: true }, false)))), 364)), 18))) {
        await $.stmt((await $.wcall([$t67, $t68], "ShowMsg", ["18 yaşdan aşağı şəxslərin sürücülük vəsiqəsi ola bilməz!"], { get: async () => L0["showmsg"], set: async (v) => { L0["showmsg"] = v; }, local: true })));
      }
    }
  } catch ($t66) {
    $.rethrowControl($t66);
    $.handled($t66);
    $.abort();
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TfmMKBlank", "ODSdrAccessPeopleBeforeDelete", async function ODSdrAccessPeopleBeforeDelete(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş sürücü pozulacaq!", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrNo"))))) {
    $.abort();
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TfmMKBlank", "cbBenTypeChange", async function cbBenTypeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "str": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t69 = (await $.v(C, "InsMKDataMod"));
    const $t70 = (await $.wv([$t69], "ODSContracts", C, false));
    await $.mcall((await $.wv([$t69, $t70], "ODSReport", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t69, $t70], "ODSReport", C, false)), "SetVariable", ["CID", (await $.wv([$t69, $t70], "CID", C, false))])));
    await $.mcall((await $.wv([$t69, $t70], "ODSReport", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t69, $t70], "ODSReportSex", C, false)), "Value")), 0))) {
      await $.wset([$t69, $t70], "str", "oğlu", { get: async () => L0["str"], set: async (v) => { L0["str"] = v; }, local: true });
    } else {
      if ($.truthy($.eq((await $.mv((await $.wv([$t69, $t70], "ODSReportSex", C, false)), "Value")), 1))) {
        await $.wset([$t69, $t70], "str", "qızı", { get: async () => L0["str"], set: async (v) => { L0["str"] = v; }, local: true });
      }
    }
    if ($.truthy((await $.mv((await $.wv([$t69, $t70], "rbBeneficiary", C, false)), "Checked")))) {
      await $.mset((await $.wcall([$t69, $t70], "FieldByName", ["BENEFICIARY"], C)), "AsString", $.add($.add((await $.mv((await $.mcall((await $.wv([$t69, $t70], "ODSCusts", C, false)), "FieldByName", ["Name"])), "asString")), " "), (await $.wv([$t69, $t70], "str", { get: async () => L0["str"], set: async (v) => { L0["str"] = v; }, local: true }, false))));
    }
    await $.mset((await $.wv([$t69, $t70], "dbBanks", C, false)), "enabled", (await $.mv((await $.wv([$t69, $t70], "rbBank", C, false)), "Checked")));
    await $.mset((await $.wv([$t69, $t70], "dbBeneficiary", C, false)), "Enabled", (await $.mv((await $.wv([$t69, $t70], "rbBeneficiary", C, false)), "Checked")));
    await $.mset((await $.wv([$t69, $t70], "btApply", C, false)), "Enabled", (await $.wv([$t69, $t70], "True", C, false)));
    await $.stmt($.wcall([$t69, $t70], "Edit", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "DBBanksClick", async function DBBanksClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "key": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "edDBCBCustNameKeyPress", [L0["sender"], $.ref(async () => L0["key"], async ($t71) => { L0["key"] = $t71; })])));
  {
    const $t72 = (await $.v(C, "InsMKDataMod"));
    const $t73 = (await $.wv([$t72], "ODSContracts", C, false));
    await $.mset((await $.wcall([$t72, $t73], "FieldByName", ["BENEFICIARY"], C)), "AsString", (await $.mv((await $.mcall((await $.wv([$t72, $t73], "ODSBanks", C, false)), "fieldbyname", ["NAME"])), "asString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "DBBanksKeyPress", async function DBBanksKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "DBBanksClick", [(await $.v(C, "DBBanks"))])));
    await $.mcall((await $.call(C, "FindNextControl", [(await $.v(C, "ActiveControl")), true, true, false])), "SetFocus", []);
    await L0["key"].set("\u0000");
  } else {
    await $.mset((await $.v(C, "btApply")), "Enabled", true);
  }
  await $.set(C, "IsSaved", $.not((await $.mv((await $.v(C, "btApply")), "Enabled"))));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfmMKBlank", "edFranshizChange", async function edFranshizChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t74 = (await $.v(C, "InsMKDataMod"));
    const $t75 = (await $.wv([$t74], "ODSFranshiz", C, false));
    await $.stmt((await $.wcall([$t74, $t75], "Locate", ["FRANSHIZ", (await $.mv((await $.mcall((await $.wv([$t74, $t75], "ODSContracts", C, false)), "FieldByName", ["FRANSHIZ"])), "asFloat")), []], C)));
    await $.mset((await $.mcall((await $.wv([$t74, $t75], "ODSContracts", C, false)), "FieldByName", ["TARIFF"])), "asFloat", (await $.mv((await $.wcall([$t74, $t75], "FieldByName", ["TARIFF"], C)), "asFloat")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "SpeedButton7Click", async function SpeedButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ThousandSeparator", " ");
  await $.mcall((await $.v(C, "edAmmount")), "SetFocus", []);
  {
    const $t76 = (await $.v(C, "InsMKDataMod"));
    const $t77 = (await $.wv([$t76], "ODSMotorKasko", C, false));
    await $.mset((await $.wcall([$t76, $t77], "FieldByName", ["AMMOUNT"], C)), "asFloat", (await $.wcall([$t76, $t77], "round", [$.mul(($.fdiv((await $.mv((await $.wcall([$t76, $t77], "FieldByName", ["INSSUMM"], C)), "asFloat")), 100)), (await $.mv((await $.wcall([$t76, $t77], "FieldByName", ["TARIFF"], C)), "asFloat")))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t78 = (await $.mv((await $.v(C, "InsMKDataMod")), "ODSAccessories"));
    if ($.truthy($.eq((await $.wv([$t78], "CID", C, false)), (-(1))))) {
      if ($.truthy($.eq((await $.wcall([$t78], "MessageDlg", ["Məlumatlar yadda saxlanılsın?", (await $.wv([$t78], "mtConfirmation", C, false)), [(await $.wv([$t78], "mbYes", C, false)), (await $.wv([$t78], "mbNo", C, false))], 0], C)), (await $.wv([$t78], "mrYes", C, false))))) {
        await $.stmt($.wcall([$t78], "SaveData", [], C));
      } else {
        return L0.result;
      }
    }
    await $.stmt((await $.wcall([$t78], "SetVariable", ["CID", (await $.wv([$t78], "CID", C, false))], C)));
    await $.stmt($.wcall([$t78], "Open", [], C));
    await $.wset([$t78], "frmAccessories", (await $.mcall((await $.wv([$t78], "TfrmAccessories", C, false)), "Create", [Self])), C);
    await $.mcall((await $.wv([$t78], "frmAccessories", C, false)), "ShowModal", []);
    await $.stmt($.wcall([$t78], "Close", [], C));
    await $.stmt($.wcall([$t78], "CalcAccessories", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "CalcAccessories", async function CalcAccessories(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "value": 0};
  {
    const $t79 = (await $.v(C, "InsMKDataMod"));
    const $t80 = (await $.wv([$t79], "pkgMotorKasco", C, false));
    await $.wset([$t79, $t80], "value", (await $.wcall([$t79, $t80], "CallFloatFunction", ["getAccessoriesSum", [(await $.wv([$t79, $t80], "CID", C, false))]], C)), { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmMKBlank", "edIns_DateChange", async function edIns_DateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "key": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t81 = (await $.v(C, "InsMKDataMod"));
    const $t82 = (await $.wv([$t81], "ODSContracts", C, false));
    if ($.truthy($.in_((await $.wv([$t81, $t82], "state", C, false)), [(await $.wv([$t81, $t82], "dsInsert", C, false))]))) {
      await $.mset((await $.wv([$t81, $t82], "edBeginDate", C, false)), "DateTime", (await $.mv(((await $.wv([$t81, $t82], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DateTime")));
    }
  }
  await $.stmt((await $.call(C, "edDBCBCustNameKeyPress", [L0["sender"], $.ref(async () => L0["key"], async ($t83) => { L0["key"] = $t83; })])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "rbBankClick", async function rbBankClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "sbtnInsert")), "Enabled", false);
  await $.mset((await $.v(C, "sbtnSave")), "Enabled", false);
  {
    const $t84 = (await $.v(C, "InsMKDataMod"));
    await $.stmt((await $.mcall((await $.wv([$t84], "ODSCustTypes", C, false)), "SetVariable", ["id", (await $.mv((await $.wv([$t84], "ODSCustsInsured_TypeID", C, false)), "Value"))])));
    await $.mcall((await $.wv([$t84], "ODSCustTypes", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t84], "ODSCustTypesName", C, false)), "AsString")), "İndividual"))) {
      await $.stmt((await $.wcall([$t84], "MessageDlg", ["Seçilmiş müştəri bank müştərisi deyil !", (await $.wv([$t84], "mtWarning", C, false)), [(await $.wv([$t84], "mbOk", C, false))], 0], C)));
      return L0.result;
    }
  }
  await $.stmt((await $.call(C, "cbBenTypeChange", [L0["sender"]])));
  await $.mset((await $.v(C, "Suggest")), "Enabled", (await $.mv((await $.v(C, "rbBeneficiary")), "Checked")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "DBAgentsClick", async function DBAgentsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edAgents")), "Text", (await $.mv((await $.v(C, "DBAgents")), "Text")));
  await $.stmt((await $.call(C, "edDBCBCustNameChange", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t85 = (await $.v(C, "InsMKDataMod"));
    await $.stmt((await $.mcall((await $.wv([$t85], "ODSClaims", C, false)), "SetVariable", ["id", (await $.wv([$t85], "cid", C, false))])));
    await $.stmt((await $.mcall((await $.wv([$t85], "ODSClaimSal", C, false)), "SetVariable", ["eid", (await $.wv([$t85], "cid", C, false))])));
  }
  await $.set(C, "frmClaims", (await $.mcall((await $.v(C, "TfrmClaims")), "Create", [Self])));
  await $.mcall((await $.v(C, "frmClaims")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "SuggestClick", async function SuggestClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "policformguid": null, "params": null};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SaveData", []));
  L0["params"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  L0["policformguid"] = (await $.call(C, "StringToGUID", ["{D5269FCA-2559-4984-A565-16C0EE110CF6}"]));
  {
    const $t86 = (await $.v(C, "InsMKDataMod"));
    { const $t87 = await $.iset((await $.mv((await $.wv([$t86], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false)), "Values")), ["CID"], (await $.wcall([$t86], "FloatToStr", [(await $.mv((await $.wv([$t86], "ODSContractsID", C, false)), "Value"))], C))); if ($t87 !== undefined) { await $.mset((await $.wv([$t86], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false)), "Values", $t87); } }
    { const $t88 = await $.iset((await $.mv((await $.wv([$t86], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false)), "Values")), ["KLI_ID"], (await $.wcall([$t86], "FloatToStr", [(await $.mv((await $.wv([$t86], "ODSCustsID", C, false)), "Value"))], C))); if ($t88 !== undefined) { await $.mset((await $.wv([$t86], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false)), "Values", $t88); } }
  }
  {
    const $t89 = (await $.v(C, "pmcSuggestion"));
    await $.stmt((await $.wcall([$t89], "ShowModal", [(await $.wv([$t89], "PolicFormGuid", { get: async () => L0["policformguid"], set: async (v) => { L0["policformguid"] = v; }, local: true }, false)), (await $.wv([$t89], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["params"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "sbtnInsertClick", async function sbtnInsertClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t90 = (await $.mv((await $.v(C, "InsMKDataMod")), "ODSMotorKasko"));
    if ($.truthy($.eq((await $.wv([$t90], "CID", C, false)), (-(1))))) {
      if ($.truthy($.eq((await $.wcall([$t90], "MessageDlg", ["Məlumatlar yadda saxlanılsın?", (await $.wv([$t90], "mtConfirmation", C, false)), [(await $.wv([$t90], "mbYes", C, false)), (await $.wv([$t90], "mbNo", C, false))], 0], C)), (await $.wv([$t90], "mrYes", C, false))))) {
        await $.stmt($.wcall([$t90], "SaveData", [], C));
      } else {
        return L0.result;
      }
    }
    await $.stmt((await $.wcall([$t90], "SetVariable", ["CID", (await $.wv([$t90], "CID", C, false))], C)));
    await $.stmt($.wcall([$t90], "Open", [], C));
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t90], "InsMKDataMod", C, false)), "ODSCusts")), "Locate", ["id", (await $.mv((await $.mv((await $.wv([$t90], "InsMKDataMod", C, false)), "ODSContractsKli_ID")), "Value")), []])));
    if ($.truthy((await $.and_(($.eq((await $.wv([$t90], "RecordCount", C, false)), 1)), async () => ($.ne((await $.mv((await $.mv((await $.wv([$t90], "InsMKDataMod", C, false)), "ODSCustsINSURED_TYPEID")), "Value")), 3)))))) {
      await $.stmt((await $.wcall([$t90], "MessageDlg", ["Müştəri korporativ müştəri deyil !", (await $.wv([$t90], "mtWarning", C, false)), [(await $.wv([$t90], "mbOk", C, false))], 0], C)));
      return L0.result;
    }
    if ($.truthy($.not(($.in_((await $.wv([$t90], "state", C, false)), [(await $.wv([$t90], "dsInsert", C, false))]))))) {
      await $.stmt($.wcall([$t90], "Insert", [], C));
    }
    await $.mset((await $.wcall([$t90], "FieldByName", ["CID"], C)), "AsInteger", (await $.wv([$t90], "CID", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "SpeedButton9Click", async function SpeedButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t91 = (await $.mv((await $.v(C, "InsMKDataMod")), "ODSMotorKasko"));
    if ($.truthy((await $.wv([$t91], "Active", C, false)))) {
      await $.stmt($.wcall([$t91], "Edit", [], C));
    } else {
      await $.stmt((await $.mcall((await $.wv([$t91], "hbErrMsg", C, false)), "ShowMessage", ["Can't change the data."])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "SpeedButton10Click", async function SpeedButton10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t92 = (await $.mv((await $.v(C, "InsMKDataMod")), "ODSMotorKasko"));
    if ($.truthy((await $.wv([$t92], "Active", C, false)))) {
      if ($.truthy($.eq((await $.wcall([$t92], "MessageDlg", ["Məlumatlar silinsin?", (await $.wv([$t92], "mtConfirmation", C, false)), [(await $.wv([$t92], "mbYes", C, false)), (await $.wv([$t92], "mbNo", C, false))], 0], C)), (await $.wv([$t92], "mrYes", C, false))))) {
        await $.stmt($.wcall([$t92], "Delete", [], C));
      }
    } else {
      await $.stmt((await $.mcall((await $.wv([$t92], "hbErrMsg", C, false)), "ShowMessage", ["Can't change the data."])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "SpeedButton11Click", async function SpeedButton11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t93 = (await $.mv((await $.v(C, "InsMKDataMod")), "ODSMotorKasko"));
    if ($.truthy((await $.wv([$t93], "Active", C, false)))) {
      await $.stmt($.wcall([$t93], "Refresh", [], C));
    } else {
      await $.stmt((await $.mcall((await $.wv([$t93], "hbErrMsg", C, false)), "ShowMessage", ["Can't change the data."])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "sbtnSaveClick", async function sbtnSaveClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t94 = (await $.mv((await $.v(C, "InsMKDataMod")), "ODSMotorKasko"));
    if ($.truthy((await $.and_((await $.wv([$t94], "Active", C, false)), async () => ($.in_((await $.wv([$t94], "State", C, false)), [(await $.wv([$t94], "dsEdit", C, false)), (await $.wv([$t94], "dsInsert", C, false))])))))) {
      await $.stmt($.wcall([$t94], "Post", [], C));
      await $.stmt($.wcall([$t94], "RefreshRecord", [], C));
    } else {
      await $.stmt((await $.mcall((await $.wv([$t94], "hbErrMsg", C, false)), "ShowMessage", ["Can't change the data or there're no changes."])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "rbBeneficiaryClick", async function rbBeneficiaryClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "cbBenTypeChange", [L0["sender"]])));
  await $.mset((await $.v(C, "Suggest")), "Enabled", (await $.mv((await $.v(C, "rbBeneficiary")), "Checked")));
  await $.mset((await $.v(C, "sbtnInsert")), "Enabled", true);
  await $.mset((await $.v(C, "sbtnSave")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "btnConditionClick", async function btnConditionClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "btnNewClick", async function btnNewClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t95 = (await $.mcall((await $.v(C, "TfrmNotes")), "Create", [Self]));
    await $.stmt($.wcall([$t95], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMKBlank", "MakeTariffList", async function MakeTariffList(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t96 = (await $.v(C, "InsMKDataMod"));
    const $t97 = (await $.wv([$t96], "ODSTariffs", C, false));
    await $.stmt($.wcall([$t96, $t97], "Open", [], C));
    await $.mcall((await $.mv((await $.wv([$t96, $t97], "edTariff", C, false)), "Items")), "Clear", []);
    await $.stmt($.wcall([$t96, $t97], "First", [], C));
    while ($.truthy($.not((await $.wv([$t96, $t97], "EOF", C, false))))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t96, $t97], "edTariff", C, false)), "Items")), "Add", [(await $.wcall([$t96, $t97], "FloatToStr", [(await $.mv((await $.wcall([$t96, $t97], "FieldByName", ["Ammount"], C)), "asFloat"))], C))])));
      await $.stmt($.wcall([$t96, $t97], "Next", [], C));
      await $.tick();
    }
    await $.stmt($.wcall([$t96, $t97], "First", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmMKBlank", "edTariffChange", async function edTariffChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t98 = (await $.v(C, "InsMKDataMod"));
    const $t99 = (await $.wv([$t98], "ODSTariffs", C, false));
    await $.stmt((await $.wcall([$t98, $t99], "Locate", ["FRANSHIZ_ID", (await $.mv((await $.wv([$t98, $t99], "ODSFranshizID", C, false)), "AsInteger")), []], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
