// Generated from UCProperty.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UCProperty", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "PCPropertyBlank_TLB", "StdVcl", "SBPlgAx50_TLB", "ExtCtrls", "StdCtrls", "Buttons", "DBCtrls", "ComCtrls", "Mask", "Db", "OracleData", "Oracle", "INSWordExporter", "PlgModalContainer", "ComObj", "ComServ", "sboapidatamoduleimpl", "URisks", "UDModule"]);
  const C = [U];
  U.defClass("TCProperty", "TActiveForm", {"constructionpagecontrol": {"name": "ConstructionPageControl", "type": "TPageControl"}, "section1": {"name": "SECTION1", "type": "TTabSheet"}, "datailsgroupbox": {"name": "DatailsGroupBox", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "inslookupcombobox": {"name": "InsLookupComboBox", "type": "TDBLookupComboBox"}, "section23": {"name": "SECTION23", "type": "TTabSheet"}, "securitygroupbox": {"name": "SecurityGroupBox", "type": "TGroupBox"}, "section4": {"name": "SECTION4", "type": "TTabSheet"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label11": {"name": "Label11", "type": "TLabel"}, "label64": {"name": "Label64", "type": "TLabel"}, "label65": {"name": "Label65", "type": "TLabel"}, "label66": {"name": "Label66", "type": "TLabel"}, "label67": {"name": "Label67", "type": "TLabel"}, "label68": {"name": "Label68", "type": "TLabel"}, "label69": {"name": "Label69", "type": "TLabel"}, "label70": {"name": "Label70", "type": "TLabel"}, "label71": {"name": "Label71", "type": "TLabel"}, "label72": {"name": "Label72", "type": "TLabel"}, "label73": {"name": "Label73", "type": "TLabel"}, "label74": {"name": "Label74", "type": "TLabel"}, "label75": {"name": "Label75", "type": "TLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "constyeardatetimepicker": {"name": "ConstYearDateTimePicker", "type": "TDateTimePicker"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label12": {"name": "Label12", "type": "TLabel"}, "dbcombobox1": {"name": "DBComboBox1", "type": "TDBComboBox"}, "section5": {"name": "SECTION5", "type": "TTabSheet"}, "covergroupbox": {"name": "CoverGroupBox", "type": "TGroupBox"}, "label17": {"name": "Label17", "type": "TLabel"}, "dblookupcomboboxrisk": {"name": "DBLookupComboBoxRisk", "type": "TDBLookupComboBox"}, "btrisksadd": {"name": "btRisksAdd", "type": "TBitBtn"}, "memrisk": {"name": "memRisk", "type": "TMemo"}, "cbrisks": {"name": "cbRisks", "type": "TCheckBox"}, "lossofprofitgroupbox": {"name": "LossOfProfitGroupBox", "type": "TGroupBox"}, "label49": {"name": "Label49", "type": "TLabel"}, "label50": {"name": "Label50", "type": "TLabel"}, "label51": {"name": "Label51", "type": "TLabel"}, "label52": {"name": "Label52", "type": "TLabel"}, "label53": {"name": "Label53", "type": "TLabel"}, "label54": {"name": "Label54", "type": "TLabel"}, "label55": {"name": "Label55", "type": "TLabel"}, "label56": {"name": "Label56", "type": "TLabel"}, "label57": {"name": "Label57", "type": "TLabel"}, "erent": {"name": "ERent", "type": "TDBEdit"}, "eannual": {"name": "EAnnual", "type": "TDBEdit"}, "ewages": {"name": "EWages", "type": "TDBEdit"}, "eemploy": {"name": "EEmploy", "type": "TDBEdit"}, "eindeminity": {"name": "EIndeminity", "type": "TDBEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label20": {"name": "Label20", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "label22": {"name": "Label22", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "label24": {"name": "Label24", "type": "TLabel"}, "label39": {"name": "Label39", "type": "TLabel"}, "dbedit17": {"name": "DBEdit17", "type": "TDBEdit"}, "dbedit18": {"name": "DBEdit18", "type": "TDBEdit"}, "dbedit19": {"name": "DBEdit19", "type": "TDBEdit"}, "dbedit20": {"name": "DBEdit20", "type": "TDBEdit"}, "dbedit21": {"name": "DBEdit21", "type": "TDBEdit"}, "dbcombobox5": {"name": "DBComboBox5", "type": "TDBComboBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "back": {"name": "Back", "type": "TBitBtn"}, "next": {"name": "Next", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "commit": {"name": "Commit", "type": "TBitBtn"}, "report": {"name": "Report", "type": "TBitBtn"}, "suggest": {"name": "Suggest", "type": "TBitBtn"}, "btapply": {"name": "btApply", "type": "TBitBtn"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "label10": {"name": "Label10", "type": "TLabel"}, "dbedit13": {"name": "DBEdit13", "type": "TDBEdit"}, "label13": {"name": "Label13", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "dbedit14": {"name": "DBEdit14", "type": "TDBEdit"}, "dbedit15": {"name": "DBEdit15", "type": "TDBEdit"}, "dbedit16": {"name": "DBEdit16", "type": "TDBEdit"}, "label33": {"name": "Label33", "type": "TLabel"}, "agentlookupcombobox": {"name": "AgentLookupComboBox", "type": "TDBLookupComboBox"}, "cpropertyexporter": {"name": "CPropertyExporter", "type": "TINSWordExporter"}, "plgsuggest": {"name": "plgSuggest", "type": "TPlgModalContainer"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "label40": {"name": "Label40", "type": "TLabel"}, "label41": {"name": "Label41", "type": "TLabel"}, "label43": {"name": "Label43", "type": "TLabel"}, "edbegindate": {"name": "edBeginDate", "type": "TDateTimePicker"}, "edins_date": {"name": "edIns_Date", "type": "TDateTimePicker"}, "edenddate": {"name": "edEndDate", "type": "TDateTimePicker"}, "rbbank": {"name": "rbBank", "type": "TRadioButton"}, "rbbeneficiary": {"name": "rbBeneficiary", "type": "TRadioButton"}, "dbbeneficiary": {"name": "dbBeneficiary", "type": "TDBEdit"}, "dbbanks": {"name": "DBBanks", "type": "TDBLookupComboBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "label16": {"name": "Label16", "type": "TLabel"}, "lbinssumm": {"name": "lbInsSumm", "type": "TLabel"}, "lbfranshiz": {"name": "lbFranshiz", "type": "TLabel"}, "speedbutton7": {"name": "SpeedButton7", "type": "TSpeedButton"}, "dbavalute": {"name": "dbAvalute", "type": "TDBLookupComboBox"}, "edinssumm": {"name": "edInsSumm", "type": "TDBEdit"}, "edfranshiz": {"name": "edFranshiz", "type": "TDBComboBox"}, "edammount": {"name": "edAmmount", "type": "TDBEdit"}, "label44": {"name": "Label44", "type": "TLabel"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "label25": {"name": "Label25", "type": "TLabel"}, "label26": {"name": "Label26", "type": "TLabel"}, "label27": {"name": "Label27", "type": "TLabel"}, "label28": {"name": "Label28", "type": "TLabel"}, "label29": {"name": "Label29", "type": "TLabel"}, "label31": {"name": "Label31", "type": "TLabel"}, "label34": {"name": "Label34", "type": "TLabel"}, "label35": {"name": "Label35", "type": "TLabel"}, "label36": {"name": "Label36", "type": "TLabel"}, "label37": {"name": "Label37", "type": "TLabel"}, "label38": {"name": "Label38", "type": "TLabel"}, "especify": {"name": "ESpecify", "type": "TDBEdit"}, "eheat": {"name": "EHeat", "type": "TDBEdit"}, "dbcombobox2": {"name": "DBComboBox2", "type": "TDBComboBox"}, "dbcombobox4": {"name": "DBComboBox4", "type": "TDBComboBox"}, "dbcombobox6": {"name": "DBComboBox6", "type": "TDBComboBox"}, "dbcombobox7": {"name": "DBComboBox7", "type": "TDBComboBox"}, "dbcombobox8": {"name": "DBComboBox8", "type": "TDBComboBox"}, "dbmemo1": {"name": "DBMemo1", "type": "TDBMemo"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "label15": {"name": "Label15", "type": "TLabel"}, "dbedit12": {"name": "DBEdit12", "type": "TDBEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbcombobox12": {"name": "DBComboBox12", "type": "TDBComboBox"}, "dbcombobox13": {"name": "DBComboBox13", "type": "TDBComboBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "fuldescrip": {"name": "FulDescrip", "type": "TDBEdit"}, "yearsinbus": {"name": "YearsInBus", "type": "TDBEdit"}, "expiritydatetimepicker": {"name": "ExpirityDateTimePicker", "type": "TDateTimePicker"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "label45": {"name": "Label45", "type": "TLabel"}, "dbedit22": {"name": "DBEdit22", "type": "TDBEdit"}, "label46": {"name": "Label46", "type": "TLabel"}, "label47": {"name": "Label47", "type": "TLabel"}, "dbedit23": {"name": "DBEdit23", "type": "TDBEdit"}, "dbedit24": {"name": "DBEdit24", "type": "TDBEdit"}, "lbtariff": {"name": "lbTariff", "type": "TLabel"}, "edtariff": {"name": "edTariff", "type": "TDBEdit"}, "label8": {"name": "Label8", "type": "TLabel"}, "label48": {"name": "Label48", "type": "TLabel"}, "btpolicy": {"name": "btPolicy", "type": "TBitBtn"}, "dbedit25": {"name": "DBEdit25", "type": "TDBEdit"}, "id": {"name": "id", "type": "Integer"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}, "fevents": {"name": "FEvents", "type": "ICPropertyEvents"}, "cid": {"name": "CID", "type": "Integer"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    U.const("WM_ModalResult", $.add((await $.v(C, "WM_USER")), 139));
    U.var_("CProperty", null, "TCProperty");
  });
  U.method("TCProperty", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TCProperty", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TCProperty", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TCProperty", "Initialize", null, arguments);
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
  U.method("TCProperty", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCProperty", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCProperty", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCProperty", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCProperty", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCProperty", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCProperty", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCProperty", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TCProperty", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCProperty", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCProperty", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCProperty", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TCProperty", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCProperty", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TCProperty", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TCProperty", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCProperty", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCProperty", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCProperty", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCProperty", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCProperty", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCProperty", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCProperty", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TCProperty", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCProperty", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCProperty", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCProperty", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TCProperty", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t1 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t1); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TCProperty", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.set(C, "CID", (await $.call(C, "Get_Params", ["SID"])));
  {
    const $t2 = (await $.v(C, "DModule"));
    await $.stmt((await $.mcall((await $.wv([$t2], "ODSCProperty", C, false)), "SetVariable", ["CID", (await $.wv([$t2], "CID", C, false))])));
    await $.mcall((await $.wv([$t2], "ODSCProperty", C, false)), "Open", []);
    await $.stmt((await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "SetVariable", ["CID", (await $.wv([$t2], "CID", C, false))])));
    await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "Open", []);
    await $.stmt((await $.mcall((await $.wv([$t2], "ODSCustomers", C, false)), "Locate", ["id", (await $.mv((await $.wv([$t2], "ODSContractsKli_ID", C, false)), "Value")), []])));
  }
  if ($.truthy($.eq((await $.call(C, "Get_Params", ["Mod"])), "Insert"))) {
    {
      const $t3 = (await $.v(C, "DModule"));
      await $.mcall((await $.wv([$t3], "ODSContracts", C, false)), "Insert", []);
      await $.mcall((await $.wv([$t3], "ODSCProperty", C, false)), "Insert", []);
      await $.mset((await $.wv([$t3], "edBeginDate", C, false)), "DateTime", (await $.wv([$t3], "Now", C, false)));
      await $.mset((await $.wv([$t3], "edEndDate", C, false)), "DateTime", (await $.wv([$t3], "Now", C, false)));
      await $.mset((await $.wv([$t3], "InsLookupComboBox", C, false)), "KeyValue", (await $.wcall([$t3], "StrToInt", [(await $.wcall([$t3], "Get_Params", ["KLI_ID"], C))], C)));
      await $.mset((await $.mcall((await $.wv([$t3], "ODSContracts", C, false)), "FieldByName", ["KLI_ID"])), "AsInteger", (await $.wcall([$t3], "StrToInt", [(await $.wcall([$t3], "Get_Params", ["KLI_ID"], C))], C)));
    }
  }
  if ($.truthy($.eq((await $.call(C, "Get_Params", ["Mod"])), "Edit"))) {
    {
      const $t4 = (await $.v(C, "DModule"));
      const $t5 = (await $.wv([$t4], "ODSContracts", C, false));
      await $.stmt($.wcall([$t4, $t5], "LoadData", [], C));
      await $.mcall((await $.wv([$t4, $t5], "ODSCProperty", C, false)), "Edit", []);
      await $.mcall((await $.wv([$t4, $t5], "ODSContracts", C, false)), "Edit", []);
      await $.mset((await $.wv([$t4, $t5], "edBeginDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t4, $t5], "fieldByName", ["BEGIN_DATE"], C)), "asDateTime")));
      await $.mset((await $.wv([$t4, $t5], "edEndDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t4, $t5], "fieldByName", ["END_DATE"], C)), "asDateTime")));
      await $.mset((await $.wv([$t4, $t5], "rbBank", C, false)), "Checked", $.eq((await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["ben_id"], C)), "asInteger")), 0));
      await $.mset((await $.wv([$t4, $t5], "rbBeneficiary", C, false)), "Checked", $.eq((await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["ben_id"], C)), "asInteger")), 1));
    }
    await $.mset((await $.v(C, "Report")), "Enabled", true);
  }
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CProperty", Self);
  await $.set(C, "FParams", (await $.mv((await $.v(C, "TStringList")), "Create")));
  await $.set(C, "DModule", (await $.mcall((await $.v(C, "TDModule")), "Create", [Self])));
  await $.mset((await $.v(C, "Back")), "Enabled", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCProperty", "ConstructionPageControlChange", async function ConstructionPageControlChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "ConstructionPageControl"));
    if ($.truthy($.ne((await $.wv([$t6], "ActivePageIndex", C, false)), $.sub((await $.wv([$t6], "PageCount", C, false)), 1)))) {
      await $.mset((await $.wv([$t6], "Next", C, false)), "Enabled", (await $.wv([$t6], "true", C, false)));
    } else {
      await $.mset((await $.wv([$t6], "Next", C, false)), "Enabled", (await $.wv([$t6], "false", C, false)));
    }
    if ($.truthy($.ne((await $.wv([$t6], "ActivepageIndex", C, false)), 0))) {
      await $.mset((await $.wv([$t6], "Back", C, false)), "Enabled", (await $.wv([$t6], "true", C, false)));
    } else {
      await $.mset((await $.wv([$t6], "Back", C, false)), "Enabled", (await $.wv([$t6], "false", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCProperty", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrCancel")), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCProperty", "InsLookupComboBoxKeyPress", async function InsLookupComboBoxKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.call(C, "HiWord", [(await $.call(C, "GetKeyState", [(await $.v(C, "VK_Shift"))]))])), 0))) {
      {
        const $t7 = L0["sender"];
        await $.stmt((await $.wcall([$t7], "SelectNext", [(await $.wv([$t7], "ActiveControl", C, false)), (await $.wv([$t7], "False", C, false)), (await $.wv([$t7], "True", C, false))], C)));
      }
    } else {
      {
        const $t8 = L0["sender"];
        await $.stmt((await $.wcall([$t8], "SelectNext", [(await $.wv([$t8], "ActiveControl", C, false)), (await $.wv([$t8], "True", C, false)), (await $.wv([$t8], "True", C, false))], C)));
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCProperty", "BackClick", async function BackClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.v(C, "ConstructionPageControl"));
    await $.wset([$t9], "ActivePageIndex", $.sub((await $.wv([$t9], "ActivePageIndex", C, false)), 1), C);
    if ($.truthy($.eq((await $.wv([$t9], "ActivePageIndex", C, false)), 0))) {
      await $.mset((await $.wv([$t9], "Back", C, false)), "Enabled", (await $.wv([$t9], "false", C, false)));
    }
    await $.mset((await $.wv([$t9], "Next", C, false)), "Enabled", (await $.wv([$t9], "true", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCProperty", "NextClick", async function NextClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ConstructionPageControl")), "ActivePageIndex", $.add((await $.mv((await $.v(C, "ConstructionPageControl")), "ActivePageIndex")), 1));
  if ($.truthy($.eq((await $.mv((await $.v(C, "ConstructionPageControl")), "ActivePageIndex")), $.sub((await $.mv((await $.v(C, "ConstructionPageControl")), "PageCount")), 1)))) {
    await $.mset((await $.v(C, "Next")), "Enabled", false);
  }
  await $.mset((await $.v(C, "Back")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCProperty", "SaveData", async function SaveData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = false;
  if ($.truthy($.eq((await $.mv((await $.v(C, "cbRisks")), "State")), (await $.v(C, "cbChecked"))))) {
    {
      const $t10 = (await $.mv((await $.v(C, "DModule")), "ODSRisks"));
      await $.stmt($.wcall([$t10], "Insert", [], C));
      await $.mset((await $.wcall([$t10], "FieldByName", ["name"], C)), "asString", (await $.mv((await $.wv([$t10], "memRisk", C, false)), "Text")));
      await $.stmt($.wcall([$t10], "Post", [], C));
      await $.stmt($.wcall([$t10], "RefreshRecord", [], C));
    }
  }
  {
    const $t11 = (await $.v(C, "DModule"));
    const $t12 = (await $.wv([$t11], "ODSContracts", C, false));
    if ($.truthy($.in_((await $.wv([$t11, $t12], "State", C, false)), [(await $.wv([$t11, $t12], "dsEdit", C, false)), (await $.wv([$t11, $t12], "dsInsert", C, false))]))) {
      await $.mset((await $.wcall([$t11, $t12], "FieldByName", ["AGENT_ID"], C)), "AsFloat", (await $.mv((await $.wv([$t11, $t12], "ODSAgentID", C, false)), "value")));
      await $.mset((await $.wcall([$t11, $t12], "FieldByName", ["Ins_Date"], C)), "AsDateTime", (await $.wcall([$t11, $t12], "Integer", [(await $.wcall([$t11, $t12], "trunc", [(await $.mv((await $.wv([$t11, $t12], "edIns_Date", C, false)), "Date"))], C))], C)));
      await $.mset((await $.wcall([$t11, $t12], "FieldByName", ["Begin_Date"], C)), "AsDateTime", (await $.wcall([$t11, $t12], "Integer", [(await $.wcall([$t11, $t12], "trunc", [(await $.mv((await $.wv([$t11, $t12], "edBeginDate", C, false)), "Date"))], C))], C)));
      await $.mset((await $.wcall([$t11, $t12], "FieldByName", ["End_Date"], C)), "AsDateTime", (await $.wcall([$t11, $t12], "Integer", [(await $.wcall([$t11, $t12], "trunc", [(await $.mv((await $.wv([$t11, $t12], "edEndDate", C, false)), "Date"))], C))], C)));
      await $.stmt($.wcall([$t11, $t12], "Post", [], C));
      await $.stmt($.wcall([$t11, $t12], "RefreshRecord", [], C));
      await $.wset([$t11, $t12], "CID", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["id"], C)), "asInteger")), C);
      await $.stmt($.wcall([$t11, $t12], "Edit", [], C));
    }
  }
  {
    const $t13 = (await $.v(C, "DModule"));
    const $t14 = (await $.wv([$t13], "ODSCProperty", C, false));
    if ($.truthy($.in_((await $.wv([$t13, $t14], "State", C, false)), [(await $.wv([$t13, $t14], "dsInsert", C, false)), (await $.wv([$t13, $t14], "dsEdit", C, false))]))) {
      await $.stmt((await $.mcall((await $.wv([$t13, $t14], "ODSBanks", C, false)), "Locate", ["name", (await $.mv((await $.wv([$t13, $t14], "DBBanks", C, false)), "KeyValue")), []])));
      await $.mset((await $.wv([$t13, $t14], "ODSCPropertyBank_Id", C, false)), "Value", (await $.mv((await $.wv([$t13, $t14], "ODSBanksID", C, false)), "Value")));
      await $.mset((await $.wcall([$t13, $t14], "FieldByName", ["riskid"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t13, $t14], "ODSRisks", C, false)), "FieldByName", ["id"])), "AsInteger")));
      await $.mset((await $.wcall([$t13, $t14], "FieldByName", ["ConstYear"], C)), "AsDateTime", (await $.mv((await $.wv([$t13, $t14], "ConstYearDateTimePicker", C, false)), "Date")));
      await $.mset((await $.wcall([$t13, $t14], "FieldByName", ["Expirity"], C)), "AsDateTime", (await $.mv((await $.wv([$t13, $t14], "ExpirityDateTimePicker", C, false)), "Date")));
      await $.mset((await $.wcall([$t13, $t14], "FieldByName", ["CID"], C)), "AsInteger", (await $.wv([$t13, $t14], "CID", C, false)));
      await $.stmt($.wcall([$t13, $t14], "Post", [], C));
      await $.stmt($.wcall([$t13, $t14], "RefreshRecord", [], C));
      await $.mcall((await $.wv([$t13, $t14], "ODSContracts", C, false)), "Edit", []);
      await $.mset((await $.wv([$t13, $t14], "ODSContractsAmmount", C, false)), "Value", (await $.mv((await $.wv([$t13, $t14], "ODSCPropertyAmmount", C, false)), "Value")));
      await $.mset((await $.wv([$t13, $t14], "ODSContractsTariff", C, false)), "Value", (await $.mv((await $.wv([$t13, $t14], "ODSCPropertyTariff", C, false)), "Value")));
      await $.mset((await $.wv([$t13, $t14], "ODSContractsInssumm", C, false)), "Value", (await $.mv((await $.wv([$t13, $t14], "ODSCPropertyInssumm", C, false)), "Value")));
      await $.mcall((await $.wv([$t13, $t14], "ODSContracts", C, false)), "Post", []);
      await $.mcall((await $.wv([$t13, $t14], "ODSContracts", C, false)), "RefreshRecord", []);
    }
  }
  L0["result"] = true;
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCProperty", "btApplyClick", async function btApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "SaveData", [])))) {
    await $.mset((await $.v(C, "Report")), "Enabled", true);
    await $.mset((await $.v(C, "Suggest")), "Enabled", true);
    await $.mset((await $.v(C, "btApply")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCProperty", "CommitClick", async function CommitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "SaveData", [])))) {
    await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrOk")), 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCProperty", "LoadData", async function LoadData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t15 = (await $.v(C, "DModule"));
    const $t16 = (await $.wv([$t15], "ODSCProperty", C, false));
    await $.mset((await $.wv([$t15, $t16], "ConstYearDateTimePicker", C, false)), "Date", (await $.mv((await $.wcall([$t15, $t16], "FieldByName", ["ConstYear"], C)), "AsDateTime")));
    await $.mset((await $.wv([$t15, $t16], "ExpirityDateTimePicker", C, false)), "Date", (await $.mv((await $.wcall([$t15, $t16], "FieldByName", ["Expirity"], C)), "AsDateTime")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCProperty", "btRisksAddClick", async function btRisksAddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DModule")), "ODSRisktype")), "Open", []);
  {
    const $t17 = (await $.mcall((await $.v(C, "TRiskForm")), "Create", [Self]));
    await $.stmt($.wcall([$t17], "ShowModal", [], C));
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "memRisk")), "Text")), ""))) {
    await $.mset((await $.v(C, "cbRisks")), "State", (await $.v(C, "cbChecked")));
  }
  await $.mcall((await $.mv((await $.v(C, "DModule")), "ODSRisktype")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCProperty", "InsLookupComboBoxClick", async function InsLookupComboBoxClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCProperty", "ReportClick", async function ReportClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t18 = (await $.v(C, "DModule"));
    await $.mcall((await $.wv([$t18], "ODSContracts", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t18], "ODSContracts", C, false)), "SetVariable", ["cid", (await $.wv([$t18], "cid", C, false))])));
    await $.mcall((await $.wv([$t18], "ODSContracts", C, false)), "Open", []);
    await $.stmt((await $.mcall((await $.wv([$t18], "ODSCustomers", C, false)), "Locate", ["id", (await $.mv((await $.wv([$t18], "ODSContractsKLI_ID", C, false)), "Value")), []])));
    await $.stmt((await $.mcall((await $.wv([$t18], "ODSBeneficiary", C, false)), "Locate", ["id", (await $.mv((await $.wv([$t18], "ODSCPropertyProfitID", C, false)), "Value")), []])));
    await $.stmt((await $.mcall((await $.wv([$t18], "ODSRisks", C, false)), "Locate", ["id", (await $.mv((await $.wv([$t18], "ODSCPropertyRiskID", C, false)), "Value")), []])));
    try {
      {
        const $t19 = (await $.wv([$t18], "CPropertyExporter", C, false));
        await $.wset([$t18, $t19], "FileName", $.add((await $.wcall([$t18, $t19], "ExtractFilePath", [(await $.mv((await $.wv([$t18, $t19], "Application", C, false)), "ExeName"))], C)), "\\CPropertyppl.doc"), C);
        await $.stmt((await $.wcall([$t18, $t19], "Open", [(await $.wv([$t18, $t19], "False", C, false))], C)));
        if ($.truthy((await $.mv((await $.wv([$t18, $t19], "ODSCPropertyGuard", C, false)), "IsNull")))) {
          await $.stmt((await $.wcall([$t18, $t19], "SetBookmark", ["Issecure", "Xeyr", (await $.wv([$t18, $t19], "false", C, false)), (await $.wv([$t18, $t19], "false", C, false)), (await $.wv([$t18, $t19], "False", C, false)), (await $.wv([$t18, $t19], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t18, $t19], "False", C, false))], C)));
        } else {
          await $.stmt((await $.wcall([$t18, $t19], "SetBookmark", ["Issecure", "Bəli", (await $.wv([$t18, $t19], "false", C, false)), (await $.wv([$t18, $t19], "false", C, false)), (await $.wv([$t18, $t19], "False", C, false)), (await $.wv([$t18, $t19], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t18, $t19], "False", C, false))], C)));
        }
        if ($.truthy($.not(((await $.mv((await $.wv([$t18, $t19], "ODSCPropertyRepair", C, false)), "IsNull")))))) {
          await $.stmt((await $.wcall([$t18, $t19], "SetBookmark", ["Repair", "Bəli", (await $.wv([$t18, $t19], "false", C, false)), (await $.wv([$t18, $t19], "false", C, false)), (await $.wv([$t18, $t19], "False", C, false)), (await $.wv([$t18, $t19], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t18, $t19], "False", C, false))], C)));
        }
        await $.stmt((await $.wcall([$t18, $t19], "SetBookmark", ["RepairDetail", (await $.mv((await $.wv([$t18, $t19], "ODSCPropertyRepair", C, false)), "value")), (await $.wv([$t18, $t19], "false", C, false)), (await $.wv([$t18, $t19], "false", C, false)), (await $.wv([$t18, $t19], "False", C, false)), (await $.wv([$t18, $t19], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t18, $t19], "False", C, false))], C)));
      }
    } finally {
      await $.mcall((await $.wv([$t18], "CPropertyExporter", C, false)), "Show", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCProperty", "SuggestClick", async function SuggestClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t20 = await $.iset((await $.mv(L0["p"], "Values")), ["ID"], (await $.call(C, "IntToStr", [(await $.v(C, "cid"))]))); if ($t20 !== undefined) { await $.mset(L0["p"], "Values", $t20); } }
  {
    const $t21 = (await $.v(C, "plgSuggest"));
    await $.stmt((await $.wcall([$t21], "ShowModal", [(await $.wcall([$t21], "StringToGuid", ["{3918AA1B-6A5D-4559-8F6E-826F4E72F309}"], C)), (await $.wv([$t21], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["p"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCProperty", "edBeginDateChange", async function edBeginDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCProperty", "SpeedButton7Click", async function SpeedButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "edAmmount")), "SetFocus", []);
  {
    const $t22 = (await $.v(C, "DModule"));
    const $t23 = (await $.wv([$t22], "ODSCProperty", C, false));
    await $.mset((await $.wcall([$t22, $t23], "FieldByName", ["AMMOUNT"], C)), "asFloat", (await $.wcall([$t22, $t23], "round", [$.mul(($.fdiv((await $.mv((await $.wcall([$t22, $t23], "FieldByName", ["INSSUMM"], C)), "asFloat")), 100)), (await $.mv((await $.wcall([$t22, $t23], "FieldByName", ["TARIFF"], C)), "asFloat")))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCProperty", "DBLookupComboBox1Click", async function DBLookupComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t24 = (await $.v(C, "DModule"));
    const $t25 = (await $.wv([$t24], "ODSCProperty", C, false));
    await $.mset((await $.wv([$t24, $t25], "edEndDate", C, false)), "DateTime", (await $.wcall([$t24, $t25], "IncMonth", [(await $.mv((await $.wv([$t24, $t25], "edBeginDate", C, false)), "DateTime")), (await $.mv((await $.mcall((await $.wv([$t24, $t25], "ODSMonths", C, false)), "fieldbyname", ["COUNT"])), "asInteger"))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCProperty", "btPolicyClick", async function btPolicyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t26 = await $.iset((await $.mv(L0["p"], "Values")), ["CID"], (await $.call(C, "IntToStr", [(await $.v(C, "cid"))]))); if ($t26 !== undefined) { await $.mset(L0["p"], "Values", $t26); } }
  {
    const $t27 = (await $.v(C, "PLGSuggest"));
    await $.stmt((await $.wcall([$t27], "ShowModal", [(await $.wcall([$t27], "StringToGuid", ["{0F2A35A4-7A65-4085-BED1-BDCBC55C5836}"], C)), (await $.wv([$t27], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["p"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
