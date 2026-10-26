// Generated from fmMedBlankImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("fmMedBlankImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "MEDBlank_TLB", "StdVcl", "StdCtrls", "DBViewComboBox", "Db", "OracleData", "HintBox", "Buttons", "ExtCtrls", "ComCtrls", "Mask", "DBCtrls", "SBPlgAx50_TLB", "PlgModalContainer", "ComObj", "ComServ", "sboapiDataModuleImpl", "UEmploees", "UDataMod"]);
  const C = [U];
  U.defClass("TfmMedBlank", "TActiveForm", {"lbdbcbcustname": {"name": "lbDBCBCustName", "type": "TLabel"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "hberrmsg": {"name": "hbErrMsg", "type": "THintBox"}, "btsuggestion": {"name": "btSuggestion", "type": "TBitBtn"}, "btapply": {"name": "btApply", "type": "TBitBtn"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "label5": {"name": "Label5", "type": "TLabel"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "label6": {"name": "Label6", "type": "TLabel"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "label8": {"name": "Label8", "type": "TLabel"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "label9": {"name": "Label9", "type": "TLabel"}, "edbegindate": {"name": "edBeginDate", "type": "TDateTimePicker"}, "edenddate": {"name": "edEndDate", "type": "TDateTimePicker"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "gbchecks": {"name": "gbChecks", "type": "TGroupBox"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "label20": {"name": "Label20", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "label22": {"name": "Label22", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "label24": {"name": "Label24", "type": "TLabel"}, "chbinpatserva": {"name": "chbINPATSERVa", "type": "TCheckBox"}, "chbinpatservb": {"name": "chbINPATSERVb", "type": "TCheckBox"}, "chbinpatservc": {"name": "chbINPATSERVc", "type": "TCheckBox"}, "chboutpatserva": {"name": "chbOUTPATSERVa", "type": "TCheckBox"}, "chboutpatservb": {"name": "chbOUTPATSERVb", "type": "TCheckBox"}, "chboutpatservc": {"name": "chbOUTPATSERVc", "type": "TCheckBox"}, "chbemeraida": {"name": "chbEMERAIDa", "type": "TCheckBox"}, "chbemeraidb": {"name": "chbEMERAIDb", "type": "TCheckBox"}, "chbemeraidc": {"name": "chbEMERAIDc", "type": "TCheckBox"}, "chbprescdrugsa": {"name": "chbPRESCDRUGSa", "type": "TCheckBox"}, "chbprescdrugsb": {"name": "chbPRESCDRUGSb", "type": "TCheckBox"}, "chbprescdrugsc": {"name": "chbPRESCDRUGSc", "type": "TCheckBox"}, "chbdentserva": {"name": "chbDENTSERVa", "type": "TCheckBox"}, "chbdentservb": {"name": "chbDENTSERVb", "type": "TCheckBox"}, "chbdentservc": {"name": "chbDENTSERVc", "type": "TCheckBox"}, "chbprophyserva": {"name": "chbPROPHYSERVa", "type": "TCheckBox"}, "chbprophyservb": {"name": "chbPROPHYSERVb", "type": "TCheckBox"}, "chbprophyservc": {"name": "chbPROPHYSERVc", "type": "TCheckBox"}, "chbprophyinsa": {"name": "chbPROPHYINSa", "type": "TCheckBox"}, "chbprophyinsb": {"name": "chbPROPHYINSb", "type": "TCheckBox"}, "chbprophyinsc": {"name": "chbPROPHYINSc", "type": "TCheckBox"}, "chbsanatoriuma": {"name": "chbSANATORIUMa", "type": "TCheckBox"}, "chbsanatoriumb": {"name": "chbSANATORIUMb", "type": "TCheckBox"}, "chbsanatoriumc": {"name": "chbSANATORIUMc", "type": "TCheckBox"}, "chbchildbirtha": {"name": "chbCHILDBIRTHa", "type": "TCheckBox"}, "chbchildbirthb": {"name": "chbCHILDBIRTHb", "type": "TCheckBox"}, "chbchildbirthc": {"name": "chbCHILDBIRTHc", "type": "TCheckBox"}, "chbprivatedrserva": {"name": "chbPRIVATEDRSERVa", "type": "TCheckBox"}, "chbprivatedrservb": {"name": "chbPRIVATEDRSERVb", "type": "TCheckBox"}, "chbprivatedrservc": {"name": "chbPRIVATEDRSERVc", "type": "TCheckBox"}, "chbmedicalevaca": {"name": "chbMEDICALEVACa", "type": "TCheckBox"}, "chbmedicalevacb": {"name": "chbMEDICALEVACb", "type": "TCheckBox"}, "chbmedicalevacc": {"name": "chbMEDICALEVACc", "type": "TCheckBox"}, "chbprostinsa": {"name": "chbPROSTINSa", "type": "TCheckBox"}, "chbprostinsb": {"name": "chbPROSTINSb", "type": "TCheckBox"}, "chbprostinsc": {"name": "chbPROSTINSc", "type": "TCheckBox"}, "chbchemoradiotherapya": {"name": "chbCHEMORADIOTHERAPYa", "type": "TCheckBox"}, "chbchemoradiotherapyb": {"name": "chbCHEMORADIOTHERAPYb", "type": "TCheckBox"}, "chbchemoradiotherapyc": {"name": "chbCHEMORADIOTHERAPYc", "type": "TCheckBox"}, "btemployes": {"name": "btEmployes", "type": "TBitBtn"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "pmcsuggestion": {"name": "pmcSuggestion", "type": "TPlgModalContainer"}, "id": {"name": "id", "type": "Integer"}, "issaved": {"name": "IsSaved", "type": "Boolean"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}, "fevents": {"name": "FEvents", "type": "IfmMedBlankEvents"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    U.const("WM_ModalResult", $.add((await $.v(C, "WM_USER")), 139));
    U.const("fmCaption", "Tibbi sigorta anket formasi: (%s)");
    U.var_("fmMedBlank", null, "TfmMedBlank");
  });
  U.method("TfmMedBlank", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TfmMedBlank", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TfmMedBlank", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TfmMedBlank", "Initialize", null, arguments);
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
  U.method("TfmMedBlank", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TfmMedBlank", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedBlank", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedBlank", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedBlank", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedBlank", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedBlank", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedBlank", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TfmMedBlank", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedBlank", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMedBlank", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMedBlank", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TfmMedBlank", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TfmMedBlank", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TfmMedBlank", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TfmMedBlank", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMedBlank", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMedBlank", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMedBlank", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TfmMedBlank", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TfmMedBlank", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMedBlank", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TfmMedBlank", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TfmMedBlank", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMedBlank", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMedBlank", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TfmMedBlank", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TfmMedBlank", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t1 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t1); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TfmMedBlank", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  if ($.truthy($.eq((await $.call(C, "Get_Params", ["Mod"])), "Insert"))) {
    await $.set(C, "id", (-(1)));
    await $.mset((await $.v(C, "edBeginDate")), "DateTime", (await $.v(C, "Now")));
    await $.mset((await $.v(C, "edEndDate")), "DateTime", (await $.v(C, "Now")));
    await $.set(C, "Caption", (await $.call(C, "format", [(await $.v(C, "fmCaption")), ["Yeni anket"]])));
    {
      const $t2 = (await $.v(C, "MedBDataMod"));
      const $t3 = (await $.wv([$t2], "ODSMedical", C, false));
      await $.stmt((await $.wcall([$t2, $t3], "SetVariable", ["ID", (await $.wv([$t2, $t3], "id", C, false))], C)));
      await $.stmt($.wcall([$t2, $t3], "Open", [], C));
      await $.stmt($.wcall([$t2, $t3], "Insert", [], C));
      await $.mset((await $.wcall([$t2, $t3], "FieldByName", ["KLI_ID"], C)), "asFloat", (await $.wcall([$t2, $t3], "StrToInt", [(await $.wcall([$t2, $t3], "Get_Params", ["KLI_ID"], C))], C)));
    }
  }
  if ($.truthy($.eq((await $.call(C, "Get_Params", ["Mod"])), "Edit"))) {
    await $.set(C, "id", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["ID"]))])));
    {
      const $t4 = (await $.v(C, "MedBDataMod"));
      const $t5 = (await $.wv([$t4], "ODSMedical", C, false));
      await $.stmt((await $.wcall([$t4, $t5], "SetVariable", ["ID", (await $.wv([$t4, $t5], "id", C, false))], C)));
      await $.stmt($.wcall([$t4, $t5], "Open", [], C));
      await $.mset((await $.wv([$t4, $t5], "edBeginDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["begindate"], C)), "AsDateTime")));
      await $.mset((await $.wv([$t4, $t5], "edEndDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["enddate"], C)), "AsDateTime")));
      await $.stmt($.wcall([$t4, $t5], "setChecks", [], C));
      await $.stmt($.wcall([$t4, $t5], "Edit", [], C));
    }
    await $.set(C, "Caption", (await $.call(C, "format", [(await $.v(C, "fmCaption")), ["Redakte"]])));
    await $.mset((await $.v(C, "btSuggestion")), "Enabled", true);
    await $.mset((await $.v(C, "btEmployes")), "Enabled", true);
  }
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "fmMedBlank", Self);
  await $.set(C, "FParams", (await $.mv((await $.v(C, "TStringList")), "Create")));
  await $.set(C, "isSaved", false);
  await $.set(C, "MedBDataMod", (await $.mcall((await $.v(C, "TMedBDataMod")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedBlank", "SaveData", async function SaveData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = true;
  try {
    {
      const $t7 = (await $.v(C, "MedBDataMod"));
      const $t8 = (await $.wv([$t7], "ODSMedical", C, false));
      await $.stmt($.wcall([$t7, $t8], "Edit", [], C));
      await $.mset((await $.wcall([$t7, $t8], "FieldByName", ["begindate"], C)), "AsDateTime", (await $.mv((await $.wv([$t7, $t8], "edBeginDate", C, false)), "DateTime")));
      await $.mset((await $.wcall([$t7, $t8], "FieldByName", ["enddate"], C)), "AsDateTime", (await $.mv((await $.wv([$t7, $t8], "edEndDate", C, false)), "DateTime")));
      await $.stmt((await $.wcall([$t7, $t8], "getChecks", [], C)));
      await $.stmt($.wcall([$t7, $t8], "Post", [], C));
      await $.stmt($.wcall([$t7, $t8], "RefreshRecord", [], C));
      if ($.truthy($.eq((await $.wcall([$t7, $t8], "Get_Params", ["Mod"], C)), "Insert"))) {
        await $.stmt((await $.mcall((await $.wv([$t7, $t8], "OPCOMMON", C, false)), "CallIntegerFunction", ["newinsurance", [9, (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["ID"], C)), "asFloat")), (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["begindate"], C)), "AsDateTime")), (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["enddate"], C)), "AsDateTime")), (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["kli_id"], C)), "AsFloat"))]])));
      }
      if ($.truthy($.eq((await $.wcall([$t7, $t8], "Get_Params", ["Mod"], C)), "Edit"))) {
        await $.stmt((await $.mcall((await $.wv([$t7, $t8], "OPCOMMON", C, false)), "CallBooleanFunction", ["setblankdata", [9, (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["ID"], C)), "asFloat")), (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["begindate"], C)), "AsDateTime")), (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["enddate"], C)), "AsDateTime")), (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["kli_id"], C)), "AsFloat"))]])));
      }
    }
  } catch ($t6) {
    $.rethrowControl($t6);
    if ($.excIs($t6, "Exception")) {
      L0["e"] = $.exc($t6);
      await $.stmt((await $.mcall((await $.v(C, "hbErrMsg")), "ShowMessage", [(await $.mv(L0["e"], "Message"))])));
      L0["result"] = false;
    }
    else { throw $t6; }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedBlank", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_((await $.call(C, "SaveData", [])), async () => (await $.v(C, "IsSaved")))))) {
    await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrOk")), 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedBlank", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrCancel")), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedBlank", "btEmployesClick", async function btEmployesClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.v(C, "MedBDataMod"));
    const $t10 = (await $.wv([$t9], "ODSEmployees", C, false));
    try {
      await $.stmt((await $.wcall([$t9, $t10], "SetVariable", ["MED_ID", (await $.mv((await $.wv([$t9, $t10], "ODSMedicalID", C, false)), "Value"))], C)));
      await $.stmt($.wcall([$t9, $t10], "Open", [], C));
      await $.mcall((await $.wv([$t9, $t10], "ODSOccupation", C, false)), "open", []);
      await $.wset([$t9, $t10], "fmEmploees", (await $.mcall((await $.wv([$t9, $t10], "TfmEmploees", C, false)), "Create", [Self])), C);
      await $.mcall((await $.wv([$t9, $t10], "fmEmploees", C, false)), "ShowModal", []);
    } finally {
      await $.stmt($.wcall([$t9, $t10], "Close", [], C));
      await $.mcall((await $.wv([$t9, $t10], "ODSOccupation", C, false)), "Close", []);
      await $.mcall((await $.wv([$t9, $t10], "fmEmploees", C, false)), "Free", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedBlank", "btApplyClick", async function btApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "SaveData", [])))) {
    await $.mset((await $.v(C, "btApply")), "Enabled", false);
  }
  await $.mset((await $.v(C, "btSuggestion")), "Enabled", true);
  await $.mset((await $.v(C, "btEmployes")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedBlank", "DBEdit1KeyPress", async function DBEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.call(C, "FindNextControl", [(await $.v(C, "ActiveControl")), true, true, false])), "SetFocus", []);
    await L0["key"].set("\u0000");
  } else {
    await $.mset((await $.v(C, "btApply")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfmMedBlank", "setChecks", async function setChecks(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  {
    const $t11 = (await $.v(C, "MedBDataMod"));
    const $t12 = (await $.wv([$t11], "ODSMedical", C, false));
    { const $t13 = $.sub((await $.wv([$t11, $t12], "FieldCount", C, false)), 1);
      await $.wset([$t11, $t12], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t14 = true;
      for (;;) {
        if (!$t14) { await $.wset([$t11, $t12], "i", $.succ((await $.wv([$t11, $t12], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t14 = false;
        if (!($.ord((await $.wv([$t11, $t12], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t13))) break;
        if ($.truthy($.eq((await $.mv((await $.idx((await $.wv([$t11, $t12], "Fields", C, false)), [(await $.wv([$t11, $t12], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Tag")), 777))) {
          await $.stmt((await $.wcall([$t11, $t12], "setChecksByName", [(await $.mv((await $.idx((await $.wv([$t11, $t12], "Fields", C, false)), [(await $.wv([$t11, $t12], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "FieldName")), (await $.mv((await $.idx((await $.wv([$t11, $t12], "Fields", C, false)), [(await $.wv([$t11, $t12], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "AsInteger"))], C)));
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmMedBlank", "getChecksByName", async function getChecksByName(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"fieldname": $.copyArg(p0), result: 0, "res": 0};
  await $.fixArgs(L0, ["fieldname"]);
  L0["res"] = 0;
  {
    const $t15 = (await $.v(C, "MedBDataMod"));
    const $t16 = (await $.wv([$t15], "ODSMedical", C, false));
    const $t17 = (await $.wv([$t15, $t16], "gbChecks", C, false));
    if ($.truthy((await $.mv((await $.wcall([$t15, $t16, $t17], "TCheckBox", [(await $.wcall([$t15, $t16, $t17], "FindChildControl", [$.add($.add("chb", (await $.wv([$t15, $t16, $t17], "fieldname", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false))), "a")], C))], C)), "Checked")))) {
      await $.wset([$t15, $t16, $t17], "res", $.add((await $.wv([$t15, $t16, $t17], "res", { get: async () => L0["res"], set: async (v) => { L0["res"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t15, $t16, $t17], "TCheckBox", [(await $.wcall([$t15, $t16, $t17], "FindChildControl", [$.add($.add("chb", (await $.wv([$t15, $t16, $t17], "fieldname", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false))), "a")], C))], C)), "Tag"))), { get: async () => L0["res"], set: async (v) => { L0["res"] = v; }, local: true });
    }
    if ($.truthy((await $.mv((await $.wcall([$t15, $t16, $t17], "TCheckBox", [(await $.wcall([$t15, $t16, $t17], "FindChildControl", [$.add($.add("chb", (await $.wv([$t15, $t16, $t17], "fieldname", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false))), "b")], C))], C)), "Checked")))) {
      await $.wset([$t15, $t16, $t17], "res", $.add((await $.wv([$t15, $t16, $t17], "res", { get: async () => L0["res"], set: async (v) => { L0["res"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t15, $t16, $t17], "TCheckBox", [(await $.wcall([$t15, $t16, $t17], "FindChildControl", [$.add($.add("chb", (await $.wv([$t15, $t16, $t17], "fieldname", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false))), "b")], C))], C)), "Tag"))), { get: async () => L0["res"], set: async (v) => { L0["res"] = v; }, local: true });
    }
    if ($.truthy((await $.mv((await $.wcall([$t15, $t16, $t17], "TCheckBox", [(await $.wcall([$t15, $t16, $t17], "FindChildControl", [$.add($.add("chb", (await $.wv([$t15, $t16, $t17], "fieldname", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false))), "c")], C))], C)), "Checked")))) {
      await $.wset([$t15, $t16, $t17], "res", $.add((await $.wv([$t15, $t16, $t17], "res", { get: async () => L0["res"], set: async (v) => { L0["res"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t15, $t16, $t17], "TCheckBox", [(await $.wcall([$t15, $t16, $t17], "FindChildControl", [$.add($.add("chb", (await $.wv([$t15, $t16, $t17], "fieldname", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false))), "c")], C))], C)), "Tag"))), { get: async () => L0["res"], set: async (v) => { L0["res"] = v; }, local: true });
    }
  }
  L0["result"] = L0["res"];
  return L0.result;
}, {"params": ["fieldname"], "kind": "function", "ptypes": ["String"]});
  U.method("TfmMedBlank", "getChecks", async function getChecks(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  {
    const $t18 = (await $.v(C, "MedBDataMod"));
    const $t19 = (await $.wv([$t18], "ODSMedical", C, false));
    { const $t20 = $.sub((await $.wv([$t18, $t19], "FieldCount", C, false)), 1);
      await $.wset([$t18, $t19], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t21 = true;
      for (;;) {
        if (!$t21) { await $.wset([$t18, $t19], "i", $.succ((await $.wv([$t18, $t19], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t21 = false;
        if (!($.ord((await $.wv([$t18, $t19], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t20))) break;
        if ($.truthy($.eq((await $.mv((await $.idx((await $.wv([$t18, $t19], "Fields", C, false)), [(await $.wv([$t18, $t19], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Tag")), 777))) {
          await $.mset((await $.idx((await $.wv([$t18, $t19], "Fields", C, false)), [(await $.wv([$t18, $t19], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "AsInteger", (await $.wcall([$t18, $t19], "getChecksByName", [(await $.mv((await $.idx((await $.wv([$t18, $t19], "Fields", C, false)), [(await $.wv([$t18, $t19], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "FieldName"))], C)));
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmMedBlank", "setChecksByName", async function setChecksByName(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"chbname": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["chbname", "value"]);
  {
    const $t22 = (await $.v(C, "gbChecks"));
    { const $t23 = (await $.wv([$t22], "value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false));
      if ($.eq($t23, 7)) {
        await $.mset((await $.wcall([$t22], "TCheckBox", [(await $.wcall([$t22], "FindChildControl", [$.add($.add("chb", (await $.wv([$t22], "chbname", { get: async () => L0["chbname"], set: async (v) => { L0["chbname"] = v; }, local: true }, false))), "a")], C))], C)), "Checked", (await $.wv([$t22], "true", C, false)));
        await $.mset((await $.wcall([$t22], "TCheckBox", [(await $.wcall([$t22], "FindChildControl", [$.add($.add("chb", (await $.wv([$t22], "chbname", { get: async () => L0["chbname"], set: async (v) => { L0["chbname"] = v; }, local: true }, false))), "b")], C))], C)), "Checked", (await $.wv([$t22], "true", C, false)));
        await $.mset((await $.wcall([$t22], "TCheckBox", [(await $.wcall([$t22], "FindChildControl", [$.add($.add("chb", (await $.wv([$t22], "chbname", { get: async () => L0["chbname"], set: async (v) => { L0["chbname"] = v; }, local: true }, false))), "c")], C))], C)), "Checked", (await $.wv([$t22], "true", C, false)));
      }
      else if ($.eq($t23, 6)) {
        await $.mset((await $.wcall([$t22], "TCheckBox", [(await $.wcall([$t22], "FindChildControl", [$.add($.add("chb", (await $.wv([$t22], "chbname", { get: async () => L0["chbname"], set: async (v) => { L0["chbname"] = v; }, local: true }, false))), "a")], C))], C)), "Checked", (await $.wv([$t22], "true", C, false)));
        await $.mset((await $.wcall([$t22], "TCheckBox", [(await $.wcall([$t22], "FindChildControl", [$.add($.add("chb", (await $.wv([$t22], "chbname", { get: async () => L0["chbname"], set: async (v) => { L0["chbname"] = v; }, local: true }, false))), "b")], C))], C)), "Checked", (await $.wv([$t22], "true", C, false)));
      }
      else if ($.eq($t23, 5)) {
        await $.mset((await $.wcall([$t22], "TCheckBox", [(await $.wcall([$t22], "FindChildControl", [$.add($.add("chb", (await $.wv([$t22], "chbname", { get: async () => L0["chbname"], set: async (v) => { L0["chbname"] = v; }, local: true }, false))), "a")], C))], C)), "Checked", (await $.wv([$t22], "true", C, false)));
        await $.mset((await $.wcall([$t22], "TCheckBox", [(await $.wcall([$t22], "FindChildControl", [$.add($.add("chb", (await $.wv([$t22], "chbname", { get: async () => L0["chbname"], set: async (v) => { L0["chbname"] = v; }, local: true }, false))), "c")], C))], C)), "Checked", (await $.wv([$t22], "true", C, false)));
      }
      else if ($.eq($t23, 3)) {
        await $.mset((await $.wcall([$t22], "TCheckBox", [(await $.wcall([$t22], "FindChildControl", [$.add($.add("chb", (await $.wv([$t22], "chbname", { get: async () => L0["chbname"], set: async (v) => { L0["chbname"] = v; }, local: true }, false))), "b")], C))], C)), "Checked", (await $.wv([$t22], "true", C, false)));
        await $.mset((await $.wcall([$t22], "TCheckBox", [(await $.wcall([$t22], "FindChildControl", [$.add($.add("chb", (await $.wv([$t22], "chbname", { get: async () => L0["chbname"], set: async (v) => { L0["chbname"] = v; }, local: true }, false))), "c")], C))], C)), "Checked", (await $.wv([$t22], "true", C, false)));
      }
      else if ($.eq($t23, 4)) {
        await $.mset((await $.wcall([$t22], "TCheckBox", [(await $.wcall([$t22], "FindChildControl", [$.add($.add("chb", (await $.wv([$t22], "chbname", { get: async () => L0["chbname"], set: async (v) => { L0["chbname"] = v; }, local: true }, false))), "a")], C))], C)), "Checked", (await $.wv([$t22], "true", C, false)));
      }
      else if ($.eq($t23, 2)) {
        await $.mset((await $.wcall([$t22], "TCheckBox", [(await $.wcall([$t22], "FindChildControl", [$.add($.add("chb", (await $.wv([$t22], "chbname", { get: async () => L0["chbname"], set: async (v) => { L0["chbname"] = v; }, local: true }, false))), "b")], C))], C)), "Checked", (await $.wv([$t22], "true", C, false)));
      }
      else if ($.eq($t23, 1)) {
        await $.mset((await $.wcall([$t22], "TCheckBox", [(await $.wcall([$t22], "FindChildControl", [$.add($.add("chb", (await $.wv([$t22], "chbname", { get: async () => L0["chbname"], set: async (v) => { L0["chbname"] = v; }, local: true }, false))), "c")], C))], C)), "Checked", (await $.wv([$t22], "true", C, false)));
      }
    }
  }
  return L0.result;
}, {"params": ["chbname", "value"], "kind": "procedure", "ptypes": ["String", "integer"]});
  U.method("TfmMedBlank", "gbChecksDblClick", async function gbChecksDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t24 = (await $.v(C, "gbChecks"));
    await $.mset((await $.wcall([$t24], "TCheckBox", [(await $.wcall([$t24], "FindChildControl", ["chbINPATSERVa"], C))], C)), "Checked", (await $.wv([$t24], "true", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedBlank", "btSuggestionClick", async function btSuggestionClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "params": null};
  await $.fixArgs(L0, ["sender"]);
  L0["params"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  {
    const $t25 = (await $.v(C, "MedBDataMod"));
    { const $t26 = await $.iset((await $.mv((await $.wv([$t25], "params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false)), "Values")), ["MED_ID"], (await $.wcall([$t25], "IntToStr", [(await $.mv((await $.wv([$t25], "ODSMedicalID", C, false)), "Value"))], C))); if ($t26 !== undefined) { await $.mset((await $.wv([$t25], "params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false)), "Values", $t26); } }
    { const $t27 = await $.iset((await $.mv((await $.wv([$t25], "params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false)), "Values")), ["KLI_ID"], (await $.wcall([$t25], "IntToStr", [(await $.mv((await $.wv([$t25], "ODSCustsID", C, false)), "Value"))], C))); if ($t27 !== undefined) { await $.mset((await $.wv([$t25], "params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false)), "Values", $t27); } }
  }
  {
    const $t28 = (await $.v(C, "pmcSuggestion"));
    await $.stmt((await $.wcall([$t28], "ShowModal", [(await $.wcall([$t28], "StringToGuid", ["{8488AAD4-B4AC-42D2-B3F4-53A042977147}"], C)), (await $.wv([$t28], "params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["params"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
