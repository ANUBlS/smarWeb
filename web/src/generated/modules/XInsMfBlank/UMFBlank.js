// Generated from UMFBlank.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UMFBlank", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ActiveX", "AxCtrls", "PMFBlank_TLB", "StdVcl", "StdCtrls", "Buttons", "ExtCtrls", "DBCtrls", "Grids", "DBGrids", "Mask", "ComCtrls", "SBPlgAx50_TLB", "Oracle", "Db", "OracleData", "INSWordExporter", "PlgModalContainer", "ComObj", "ComServ", "sboapiDataModuleImpl", "UMFDataMod"]);
  const C = [U];
  $.defRecord("tmotorfull", {"id": () => 0, "kli_id": () => 0, "banking_details": () => '', "profitid": () => 0, "insuredtype": () => '', "insuredcolor": () => '', "insuredoutputyear": () => 0, "insuredmodel": () => '', "insuredstatenum": () => '', "insurednumseats": () => 0, "insuredenginenum": () => '', "insuredchassisnum": () => '', "insuredactualvalue": () => 0, "transmission_type": () => '', "presence_alarm": () => '', "motor_usage": () => '', "motorstorageplace": () => '', "existingdamage": () => '', "insurancegeographicallimit": () => '', "broker": () => 0, "insuredbody": () => '', "begindate": () => null, "enddate": () => null});
  U.defClass("TMFBlank", "TActiveForm", {"motorapppagecontrol": {"name": "MotorAppPageControl", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbeditbanking": {"name": "DBEditBanking", "type": "TDBEdit"}, "inslookupcombobox": {"name": "InsLookupComboBox", "type": "TDBLookupComboBox"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label31": {"name": "Label31", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbedit1statenum": {"name": "DBEdit1StateNum", "type": "TDBEdit"}, "dbeditseatcount": {"name": "DBEditSeatCount", "type": "TDBEdit"}, "dbeditenginnum": {"name": "DBEditEnginNum", "type": "TDBEdit"}, "dbeditchassisnum": {"name": "DBEditChassisNum", "type": "TDBEdit"}, "dbedittransmission": {"name": "DBEditTransmission", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "tabsheet5": {"name": "TabSheet5", "type": "TTabSheet"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "label21": {"name": "Label21", "type": "TLabel"}, "label22": {"name": "Label22", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "dbnavigator2": {"name": "DBNavigator2", "type": "TDBNavigator"}, "tabsheet6": {"name": "TabSheet6", "type": "TTabSheet"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "label27": {"name": "Label27", "type": "TLabel"}, "label28": {"name": "Label28", "type": "TLabel"}, "label30": {"name": "Label30", "type": "TLabel"}, "label49": {"name": "Label49", "type": "TLabel"}, "label50": {"name": "Label50", "type": "TLabel"}, "label51": {"name": "Label51", "type": "TLabel"}, "label52": {"name": "Label52", "type": "TLabel"}, "label53": {"name": "Label53", "type": "TLabel"}, "label54": {"name": "Label54", "type": "TLabel"}, "label55": {"name": "Label55", "type": "TLabel"}, "label56": {"name": "Label56", "type": "TLabel"}, "label57": {"name": "Label57", "type": "TLabel"}, "label58": {"name": "Label58", "type": "TLabel"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "dbedit12": {"name": "DBEdit12", "type": "TDBEdit"}, "dbedit13": {"name": "DBEdit13", "type": "TDBEdit"}, "dbedit16": {"name": "DBEdit16", "type": "TDBEdit"}, "dbedit17": {"name": "DBEdit17", "type": "TDBEdit"}, "dbedit20": {"name": "DBEdit20", "type": "TDBEdit"}, "dbedit21": {"name": "DBEdit21", "type": "TDBEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "back": {"name": "Back", "type": "TBitBtn"}, "next": {"name": "Next", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "commit": {"name": "Commit", "type": "TBitBtn"}, "report": {"name": "Report", "type": "TBitBtn"}, "suggest": {"name": "Suggest", "type": "TBitBtn"}, "inswordexporter1": {"name": "INSWordExporter1", "type": "TINSWordExporter"}, "lbbookmarks": {"name": "lbBookmarks", "type": "TListBox"}, "btapply": {"name": "btApply", "type": "TBitBtn"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "label17": {"name": "Label17", "type": "TLabel"}, "dbcombobox1": {"name": "DBComboBox1", "type": "TDBComboBox"}, "label18": {"name": "Label18", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "label20": {"name": "Label20", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "accesoriesdbgrid": {"name": "AccesoriesDBGrid", "type": "TDBGrid"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "plgsuggest": {"name": "PlgSuggest", "type": "TPlgModalContainer"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "dbcoutput": {"name": "dbcOutput", "type": "TDBComboBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "dbcombobox3": {"name": "DBComboBox3", "type": "TDBComboBox"}, "label25": {"name": "Label25", "type": "TLabel"}, "edbegindate": {"name": "edBeginDate", "type": "TDateTimePicker"}, "lbbegindate": {"name": "lbBeginDate", "type": "TLabel"}, "label36": {"name": "Label36", "type": "TLabel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "dbmonths": {"name": "DBMonths", "type": "TDBLookupComboBox"}, "edenddate": {"name": "edEndDate", "type": "TDateTimePicker"}, "lbenddate": {"name": "lbEndDate", "type": "TLabel"}, "dbeammount": {"name": "dbeAmmount", "type": "TDBEdit"}, "speedbutton7": {"name": "SpeedButton7", "type": "TSpeedButton"}, "dbetarif": {"name": "dbeTarif", "type": "TDBEdit"}, "label34": {"name": "Label34", "type": "TLabel"}, "label32": {"name": "Label32", "type": "TLabel"}, "label33": {"name": "Label33", "type": "TLabel"}, "dbcfranshiz": {"name": "dbcFranshiz", "type": "TDBComboBox"}, "dbesum": {"name": "dbeSum", "type": "TDBEdit"}, "label26": {"name": "Label26", "type": "TLabel"}, "dbeditactualvalue": {"name": "DBEditActualValue", "type": "TDBEdit"}, "label16": {"name": "Label16", "type": "TLabel"}, "dblcvalute": {"name": "dblcValute", "type": "TDBLookupComboBox"}, "label35": {"name": "Label35", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "dbedit22": {"name": "DBEdit22", "type": "TDBEdit"}, "label24": {"name": "Label24", "type": "TLabel"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbcombobox2": {"name": "DBComboBox2", "type": "TDBComboBox"}, "label37": {"name": "Label37", "type": "TLabel"}, "label38": {"name": "Label38", "type": "TLabel"}, "dbckasco": {"name": "dbcKasco", "type": "TDBComboBox"}, "dbcextra": {"name": "dbcExtra", "type": "TDBComboBox"}, "dbcthird": {"name": "dbcThird", "type": "TDBComboBox"}, "dbcpersonal": {"name": "dbcPersonal", "type": "TDBComboBox"}, "id": {"name": "id", "type": "Integer"}, "cid": {"name": "cid", "type": "Integer"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fevents": {"name": "FEvents", "type": "IMFBlankEvents"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    try { U.const("tconversionexcept", await $.ref_(C, "Exception")); } catch (e) { /* unresolved alias */ }
    try { U.const("tcalcexception", await $.ref_(C, "Exception")); } catch (e) { /* unresolved alias */ }
    try { U.const("toutputyear", await $.ref_(C, "Exception")); } catch (e) { /* unresolved alias */ }
    U.const("WM_ModalResult", $.add((await $.v(C, "WM_USER")), 139));
    U.const("cs_generateID", "GenerateID");
    U.const("cs_generateAcc_ID", "GenerateAcc_ID");
    U.const("cs_generateAcs_id", "GenerateAcs_ID");
    U.const("cs_generateMoreID", "generateMore_ID");
    U.const("cs_add_motorinfo", "add_fullmotor");
    U.const("cs_update_motorinfo", "update_fullmotor");
    U.var_("MFBlank", null, "TMFBlank");
  });
  U.method("TMFBlank", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TMFBlank", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TMFBlank", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TMFBlank", "Initialize", null, arguments);
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
  U.method("TMFBlank", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TMFBlank", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFBlank", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFBlank", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFBlank", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFBlank", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFBlank", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFBlank", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TMFBlank", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFBlank", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMFBlank", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMFBlank", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TMFBlank", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TMFBlank", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TMFBlank", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TMFBlank", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMFBlank", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMFBlank", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMFBlank", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TMFBlank", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TMFBlank", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMFBlank", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TMFBlank", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TMFBlank", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMFBlank", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMFBlank", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TMFBlank", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TMFBlank", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t1 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t1); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TMFBlank", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.set(C, "CID", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["SID"]))])));
  {
    const $t2 = (await $.v(C, "DModule"));
    await $.stmt((await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "SetVariable", ["CID", (await $.wv([$t2], "CID", C, false))])));
    await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "Open", []);
    if ($.truthy($.eq((await $.wcall([$t2], "Get_Params", ["Mod"], C)), "Insert"))) {
      await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "Insert", []);
      await $.mcall((await $.wv([$t2], "Ins_MotorFull", C, false)), "Insert", []);
      await $.mset((await $.wv([$t2], "edBeginDate", C, false)), "DateTime", (await $.wv([$t2], "Now", C, false)));
      await $.mset((await $.wv([$t2], "edEndDate", C, false)), "DateTime", (await $.wv([$t2], "Now", C, false)));
      await $.mset((await $.wv([$t2], "Report", C, false)), "Enabled", (await $.wv([$t2], "false", C, false)));
      await $.mset((await $.wv([$t2], "InsLookUpComboBox", C, false)), "KeyValue", (await $.wcall([$t2], "StrToInt", [(await $.wcall([$t2], "Get_Params", ["KLI_ID"], C))], C)));
      await $.mset((await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "FieldByName", ["KLI_ID"])), "AsInteger", (await $.wcall([$t2], "StrToInt", [(await $.wcall([$t2], "Get_Params", ["KLI_ID"], C))], C)));
      await $.stmt($.wcall([$t2], "MonthPeriod", [], C));
    }
    if ($.truthy($.eq((await $.wcall([$t2], "Get_Params", ["Mod"], C)), "Edit"))) {
      await $.mcall((await $.wv([$t2], "Ins_MotorFull", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t2], "Ins_MotorFull", C, false)), "SetVariable", ["CID", (await $.wv([$t2], "cid", C, false))])));
      await $.mcall((await $.wv([$t2], "Ins_MotorFull", C, false)), "Open", []);
      await $.stmt((await $.mcall((await $.wv([$t2], "Customers", C, false)), "Locate", ["id", (await $.mv((await $.wv([$t2], "Ins_MotorFullKli_ID", C, false)), "value")), []])));
      await $.stmt((await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "SetVariable", ["cid", (await $.wv([$t2], "cid", C, false))])));
      await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "Open", []);
      await $.mcall((await $.wv([$t2], "ODSContracts", C, false)), "Edit", []);
      await $.mset((await $.wv([$t2], "edBeginDate", C, false)), "DateTime", (await $.mv((await $.wv([$t2], "ODSContractsbegin_date", C, false)), "AsDateTime")));
      await $.mset((await $.wv([$t2], "edEndDate", C, false)), "DateTime", (await $.mv((await $.wv([$t2], "ODSContractsEnd_date", C, false)), "AsDateTime")));
      await $.mset((await $.wv([$t2], "Suggest", C, false)), "Enabled", (await $.wv([$t2], "True", C, false)));
      await $.mset((await $.wv([$t2], "btApply", C, false)), "Enabled", (await $.wv([$t2], "true", C, false)));
      await $.stmt($.wcall([$t2], "MonthPeriod", [], C));
    }
  }
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "MFBlank", Self);
  await $.set(C, "FParams", (await $.mv((await $.v(C, "TStringList")), "Create")));
  await $.set(C, "DModule", (await $.mcall((await $.v(C, "TDModule")), "Create", [Self])));
  await $.mset((await $.v(C, "Back")), "Enabled", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFBlank", "BackClick", async function BackClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "MotorAppPageControl"));
    await $.wset([$t3], "ActivePageIndex", $.sub((await $.wv([$t3], "ActivePageIndex", C, false)), 1), C);
    if ($.truthy($.eq((await $.wv([$t3], "ActivePageIndex", C, false)), 0))) {
      await $.mset((await $.wv([$t3], "Back", C, false)), "Enabled", (await $.wv([$t3], "false", C, false)));
    }
    await $.mset((await $.wv([$t3], "Next", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFBlank", "NextClick", async function NextClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "MotorAppPageControl")), "ActivePageIndex", $.add((await $.mv((await $.v(C, "MotorAppPageControl")), "ActivePageIndex")), 1));
  if ($.truthy($.eq((await $.mv((await $.v(C, "MotorAppPageControl")), "ActivePageIndex")), $.sub((await $.mv((await $.v(C, "MotorAppPageControl")), "PageCount")), 1)))) {
    await $.mset((await $.v(C, "Next")), "Enabled", false);
  }
  await $.mset((await $.v(C, "Back")), "Enabled", true);
  if ($.truthy($.eq((await $.mv((await $.v(C, "MotorAppPageControl")), "ActivePageIndex")), 2))) {
    if ($.truthy((await $.v(C, "SaveData")))) {
      await $.mcall((await $.mv((await $.v(C, "DModule")), "Ins_MotorFull")), "RefreshRecord", []);
    }
  }
  { const $t4 = (await $.mv((await $.v(C, "MotorAppPageControl")), "ActivePageIndex"));
    if ($.eq($t4, 0)) {
      await $.mcall((await $.v(C, "InsLookupComboBox")), "SetFocus", []);
    }
    else if ($.eq($t4, 2)) {
      await $.mcall((await $.v(C, "AccesoriesDBGrid")), "SetFocus", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFBlank", "InsLookupComboBoxKeyPress", async function InsLookupComboBoxKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.call(C, "HiWord", [(await $.call(C, "GetKeyState", [(await $.v(C, "VK_Shift"))]))])), 0))) {
      {
        const $t5 = L0["sender"];
        await $.stmt((await $.wcall([$t5], "SelectNext", [(await $.wv([$t5], "ActiveControl", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "True", C, false))], C)));
      }
    } else {
      {
        const $t6 = L0["sender"];
        await $.stmt((await $.wcall([$t6], "SelectNext", [(await $.wv([$t6], "ActiveControl", C, false)), (await $.wv([$t6], "True", C, false)), (await $.wv([$t6], "True", C, false))], C)));
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TMFBlank", "MotorAppPageControlChange", async function MotorAppPageControlChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "MotorAppPagecontrol"));
    if ($.truthy($.ne((await $.wv([$t7], "ActivePageIndex", C, false)), $.sub((await $.wv([$t7], "PageCount", C, false)), 1)))) {
      await $.mset((await $.wv([$t7], "Next", C, false)), "Enabled", (await $.wv([$t7], "true", C, false)));
    } else {
      await $.mset((await $.wv([$t7], "Next", C, false)), "Enabled", (await $.wv([$t7], "false", C, false)));
    }
    if ($.truthy($.ne((await $.wv([$t7], "ActivepageIndex", C, false)), 0))) {
      await $.mset((await $.wv([$t7], "Back", C, false)), "Enabled", (await $.wv([$t7], "true", C, false)));
    } else {
      await $.mset((await $.wv([$t7], "Back", C, false)), "Enabled", (await $.wv([$t7], "false", C, false)));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "MotorAppPageControl")), "ActivePageIndex")), 2))) {
    if ($.truthy((await $.v(C, "SaveData")))) {
      await $.mcall((await $.mv((await $.v(C, "DModule")), "Ins_MotorFull")), "RefreshRecord", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFBlank", "CommitClick", async function CommitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "SaveData")))) {
    await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrCancel")), 0])));
  }
  await $.mset((await $.v(C, "MotorAppPageControl")), "ActivePageIndex", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFBlank", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrCancel")), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFBlank", "ActiveFormDestroy", async function ActiveFormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FParams")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFBlank", "ReportClick", async function ReportClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "p": null, "id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  {
    const $t8 = (await $.v(C, "DModule"));
    { const $t9 = await $.iset((await $.mv((await $.wv([$t8], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values")), ["R_ID"], (await $.wcall([$t8], "FloatToStr", [(await $.mv((await $.wv([$t8], "Ins_MotorFullID", C, false)), "value"))], C))); if ($t9 !== undefined) { await $.mset((await $.wv([$t8], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values", $t9); } }
    await $.wset([$t8], "id", (await $.mv((await $.wv([$t8], "Ins_MotorFullID", C, false)), "value")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
    await $.stmt((await $.mcall((await $.wv([$t8], "ODSAutoTypes", C, false)), "Locate", ["id", (await $.mv((await $.wv([$t8], "Ins_MotorFullInsuredType", C, false)), "value")), []])));
    await $.stmt((await $.mcall((await $.wv([$t8], "Customers", C, false)), "Locate", ["id", (await $.mv((await $.wv([$t8], "Ins_MotorFullKli_ID", C, false)), "Value")), []])));
    await $.mcall((await $.wv([$t8], "More_Report", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t8], "More_Report", C, false)), "SetVariable", ["full_id", (await $.wv([$t8], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))])));
    await $.mcall((await $.wv([$t8], "More_Report", C, false)), "Open", []);
    {
      const $t10 = (await $.wv([$t8], "INSWordExporter1", C, false));
      await $.wset([$t8, $t10], "FileName", $.add((await $.wcall([$t8, $t10], "ExtractFilePath", [(await $.mv((await $.wv([$t8, $t10], "Application", C, false)), "ExeName"))], C)), "\\MotorFullApplicationForm.doc"), C);
      await $.stmt((await $.wcall([$t8, $t10], "Open", [(await $.wv([$t8, $t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["Insured", (await $.mv((await $.wv([$t8, $t10], "CustomersName", C, false)), "value")), (await $.wv([$t8, $t10], "True", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["Address", (await $.mv((await $.wv([$t8, $t10], "CustomersAddress", C, false)), "value")), (await $.wv([$t8, $t10], "True", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["Tel", (await $.mv((await $.wv([$t8, $t10], "CustomersMobilePhone", C, false)), "value")), (await $.wv([$t8, $t10], "True", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["fax", (await $.mv((await $.wv([$t8, $t10], "CustomersFax", C, false)), "value")), (await $.wv([$t8, $t10], "True", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["Model", $.add($.add((await $.mv((await $.wv([$t8, $t10], "Ins_MotorFullInsuredMark", C, false)), "value")), " "), (await $.mv((await $.wv([$t8, $t10], "Ins_MotorFullInsuredModel", C, false)), "Value"))), (await $.wv([$t8, $t10], "True", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["Type", (await $.mv((await $.wv([$t8, $t10], "ODSAutoTypesName", C, false)), "value")), (await $.wv([$t8, $t10], "True", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["Plate", (await $.mv((await $.wv([$t8, $t10], "Ins_MotorFullInsuredStateNum", C, false)), "value")), (await $.wv([$t8, $t10], "True", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["Colour", (await $.mv((await $.wv([$t8, $t10], "Ins_MotorFullInsuredColor", C, false)), "value")), (await $.wv([$t8, $t10], "True", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["Year", (await $.wcall([$t8, $t10], "IntToStr", [(await $.mv((await $.wv([$t8, $t10], "Ins_MotorFullInsuredOutputYear", C, false)), "value"))], C)), (await $.wv([$t8, $t10], "True", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["Seats", (await $.wcall([$t8, $t10], "IntToStr", [(await $.mv((await $.wv([$t8, $t10], "Ins_MotorFullInsuredNumSeats", C, false)), "value"))], C)), (await $.wv([$t8, $t10], "True", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["Nmotor", (await $.mv((await $.wv([$t8, $t10], "Ins_MotorFullInsuredEngineNum", C, false)), "value")), (await $.wv([$t8, $t10], "True", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["Nchassis", (await $.mv((await $.wv([$t8, $t10], "Ins_MotorFullInsuredChassisNum", C, false)), "value")), (await $.wv([$t8, $t10], "True", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["Avalue", (await $.wcall([$t8, $t10], "FloatToStr", [(await $.mv((await $.wv([$t8, $t10], "Ins_MotorFullInsuredActualvalue", C, false)), "value"))], C)), (await $.wv([$t8, $t10], "True", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["Transmission", (await $.mv((await $.wv([$t8, $t10], "Ins_MotorFullTransMission_Type", C, false)), "value")), (await $.wv([$t8, $t10], "True", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["Alarm", (await $.mv((await $.wv([$t8, $t10], "Ins_MotorFullPresence_Alarm", C, false)), "value")), (await $.wv([$t8, $t10], "True", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["Usage", (await $.mv((await $.wv([$t8, $t10], "Ins_MotorFullMotor_USAGE", C, false)), "value")), (await $.wv([$t8, $t10], "True", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["Splace", (await $.mv((await $.wv([$t8, $t10], "Ins_MotorFullMotorStoragePlace", C, false)), "value")), (await $.wv([$t8, $t10], "True", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["Edamage", (await $.mv((await $.wv([$t8, $t10], "Ins_MotorFullExistingDamage", C, false)), "value")), (await $.wv([$t8, $t10], "True", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["Geo", (await $.mv((await $.wv([$t8, $t10], "Ins_MotorFullInsuranceGeographicalLimit", C, false)), "value")), (await $.wv([$t8, $t10], "True", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["ContactP", (await $.mv((await $.wv([$t8, $t10], "CustomersContactperson", C, false)), "value")), (await $.wv([$t8, $t10], "True", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["ContactP1", (await $.mv((await $.wv([$t8, $t10], "CustomersContactperson", C, false)), "value")), (await $.wv([$t8, $t10], "True", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["Beneficiary", (await $.mv((await $.wv([$t8, $t10], "ODSBeneficiaryName", C, false)), "value")), (await $.wv([$t8, $t10], "True", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["BeneficiaryA", (await $.mv((await $.wv([$t8, $t10], "ODSBeneficiaryAddress", C, false)), "value")), (await $.wv([$t8, $t10], "True", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["BeneficiaryT", (await $.mv((await $.wv([$t8, $t10], "ODSBeneficiaryPhone", C, false)), "value")), (await $.wv([$t8, $t10], "True", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["BeneficiaryB", (await $.mv((await $.wv([$t8, $t10], "ODSBeneficiaryBanking_details", C, false)), "value")), (await $.wv([$t8, $t10], "True", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
      if ($.truthy($.ne((await $.mv((await $.wv([$t8, $t10], "Accesories", C, false)), "RecordCount")), 0))) {
        await $.mcall((await $.wv([$t8, $t10], "Accesories", C, false)), "First", []);
        { const $t11 = $.sub((await $.mv((await $.wv([$t8, $t10], "Accesories", C, false)), "RecordCount")), 1);
          await $.wset([$t8, $t10], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t12 = true;
          for (;;) {
            if (!$t12) { await $.wset([$t8, $t10], "i", $.succ((await $.wv([$t8, $t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t12 = false;
            if (!($.ord((await $.wv([$t8, $t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t11))) break;
            await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["AType", $.add($.add((await $.mv((await $.wv([$t8, $t10], "AccesoriesType", C, false)), "value")), ","), "\r\n"), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
            await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["AMake", $.add($.add((await $.mv((await $.wv([$t8, $t10], "AccesoriesMake", C, false)), "value")), ","), "\r\n"), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
            await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["AValues", $.add($.add((await $.wcall([$t8, $t10], "FloatToStr", [(await $.mv((await $.wv([$t8, $t10], "AccesoriesValue", C, false)), "value"))], C)), ","), "\r\n"), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
            await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["Hcreated", $.add($.add((await $.mv((await $.wv([$t8, $t10], "AccesoriesHowcreated", C, false)), "value")), ","), "\r\n"), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
            await $.mcall((await $.wv([$t8, $t10], "Accesories", C, false)), "Next", []);
            await $.tick();
          }
        }
      }
      if ($.truthy($.ne((await $.mv((await $.wv([$t8, $t10], "More_Report", C, false)), "RecordCount")), 0))) {
        await $.mcall((await $.wv([$t8, $t10], "More_Report", C, false)), "First", []);
        { const $t13 = $.sub((await $.mv((await $.wv([$t8, $t10], "More_Report", C, false)), "RecordCount")), 1);
          await $.wset([$t8, $t10], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t14 = true;
          for (;;) {
            if (!$t14) { await $.wset([$t8, $t10], "i", $.succ((await $.wv([$t8, $t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t14 = false;
            if (!($.ord((await $.wv([$t8, $t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t13))) break;
            await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["MName", $.add($.add((await $.mv((await $.wv([$t8, $t10], "More_ReportName", C, false)), "value")), ","), "\r\n"), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
            await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["MAge", $.add($.add((await $.wcall([$t8, $t10], "IntToStr", [(await $.mv((await $.wv([$t8, $t10], "More_ReportAge", C, false)), "value"))], C)), ","), "\r\n"), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
            await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["MExp", $.add($.add((await $.mv((await $.wv([$t8, $t10], "More_ReportExperience", C, false)), "value")), ","), "\r\n"), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
            await $.stmt((await $.wcall([$t8, $t10], "SetBookmark", ["MHist", $.add($.add((await $.mv((await $.wv([$t8, $t10], "More_ReportHistory", C, false)), "value")), ","), "\r\n"), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "false", C, false)), (await $.wv([$t8, $t10], "False", C, false)), (await $.wv([$t8, $t10], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t8, $t10], "False", C, false))], C)));
            await $.mcall((await $.wv([$t8, $t10], "More_Report", C, false)), "Next", []);
            await $.tick();
          }
        }
      }
      await $.stmt($.wcall([$t8, $t10], "Show", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFBlank", "SuggestClick", async function SuggestClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  {
    const $t15 = (await $.v(C, "DModule"));
    { const $t16 = await $.iset((await $.mv((await $.wv([$t15], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values")), ["MK_ID"], (await $.wcall([$t15], "FloatToStr", [(await $.mv((await $.wv([$t15], "Ins_MotorFullId", C, false)), "value"))], C))); if ($t16 !== undefined) { await $.mset((await $.wv([$t15], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values", $t16); } }
    if ($.truthy($.lt((await $.mv((await $.wv([$t15], "Suggestion", C, false)), "RecordCount")), 1))) {
      { const $t17 = await $.iset((await $.mv((await $.wv([$t15], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values")), ["Mod"], "Insert"); if ($t17 !== undefined) { await $.mset((await $.wv([$t15], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values", $t17); } }
    } else {
      { const $t18 = await $.iset((await $.mv((await $.wv([$t15], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values")), ["Mod"], "Edit"); if ($t18 !== undefined) { await $.mset((await $.wv([$t15], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values", $t18); } }
    }
  }
  {
    const $t19 = (await $.v(C, "plgSuggest"));
    await $.stmt((await $.wcall([$t19], "ShowModal", [(await $.wcall([$t19], "StringToGuid", ["{9D5D6D94-4ED9-4D64-9BC1-67394E009B52}"], C)), (await $.wv([$t19], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["p"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFBlank", "btApplyClick", async function btApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "SaveData")))) {
    await $.mset((await $.v(C, "Suggest")), "Enabled", true);
    await $.mset((await $.v(C, "Report")), "Enabled", true);
    await $.mset((await $.v(C, "btApply")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFBlank", "DBEditContactPersonChange", async function DBEditContactPersonChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFBlank", "edBeginDateChange", async function edBeginDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "MonthPeriod", []));
  await $.mcall((await $.mv((await $.v(C, "DModule")), "Ins_Motorfull")), "Edit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFBlank", "MonthPeriod", async function MonthPeriod(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TMFBlank", "SaveData", async function SaveData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false, "a1": 0, "a2": 0};
  L0["result"] = false;
  {
    const $t20 = (await $.v(C, "DModule"));
    {
      const $t21 = (await $.wv([$t20], "ODSContracts", C, false));
      if ($.truthy($.in_((await $.wv([$t20, $t21], "State", C, false)), [(await $.wv([$t20, $t21], "dsInsert", C, false)), (await $.wv([$t20, $t21], "dsEdit", C, false))]))) {
        await $.mset((await $.wcall([$t20, $t21], "FieldByName", ["Begin_Date"], C)), "AsDateTime", (await $.mv((await $.wv([$t20, $t21], "edBeginDate", C, false)), "Date")));
        await $.mset((await $.wcall([$t20, $t21], "FieldByName", ["End_Date"], C)), "AsDateTime", (await $.mv((await $.wv([$t20, $t21], "edEndDate", C, false)), "Date")));
        await $.stmt($.wcall([$t20, $t21], "Post", [], C));
        await $.stmt($.wcall([$t20, $t21], "RefreshRecord", [], C));
        await $.wset([$t20, $t21], "CID", (await $.mv((await $.wcall([$t20, $t21], "FieldByName", ["id"], C)), "asInteger")), C);
      }
    }
    {
      const $t22 = (await $.wv([$t20], "Ins_MotorFull", C, false));
      if ($.truthy($.in_((await $.wv([$t20, $t22], "State", C, false)), [(await $.wv([$t20, $t22], "dsInsert", C, false)), (await $.wv([$t20, $t22], "dsEdit", C, false))]))) {
        await $.stmt($.wcall([$t20, $t22], "Post", [], C));
        await $.stmt($.wcall([$t20, $t22], "RefreshRecord", [], C));
      }
    }
    if ($.truthy($.in_((await $.mv((await $.wv([$t20], "Accesories", C, false)), "State")), [(await $.wv([$t20], "dsEdit", C, false)), (await $.wv([$t20], "dsInsert", C, false))]))) {
      await $.mcall((await $.wv([$t20], "Accesories", C, false)), "Post", []);
      await $.mcall((await $.wv([$t20], "Accesories", C, false)), "Refresh", []);
    }
    if ($.truthy($.in_((await $.mv((await $.wv([$t20], "MoreThanOne", C, false)), "State")), [(await $.wv([$t20], "dsEdit", C, false)), (await $.wv([$t20], "dsInsert", C, false))]))) {
      await $.mcall((await $.wv([$t20], "MoreThanOne", C, false)), "Post", []);
      await $.mcall((await $.wv([$t20], "MoreThanOne", C, false)), "Refresh", []);
    }
    {
      const $t23 = (await $.wv([$t20], "DModule", C, false));
      const $t24 = (await $.wv([$t20, $t23], "ODSContracts", C, false));
      if ($.truthy($.in_((await $.wv([$t20, $t23, $t24], "State", C, false)), [(await $.wv([$t20, $t23, $t24], "dsEdit", C, false)), (await $.wv([$t20, $t23, $t24], "dsInsert", C, false))]))) {
        await $.stmt($.wcall([$t20, $t23, $t24], "Post", [], C));
        await $.stmt($.wcall([$t20, $t23, $t24], "RefreshRecord", [], C));
        await $.wset([$t20, $t23, $t24], "CID", (await $.mv((await $.wcall([$t20, $t23, $t24], "FieldByName", ["id"], C)), "asInteger")), C);
      }
    }
  }
  L0["result"] = true;
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMFBlank", "SpeedButton7Click", async function SpeedButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t25 = (await $.v(C, "DModule"));
    const $t26 = (await $.wv([$t25], "ODSContracts", C, false));
    await $.stmt($.wcall([$t25, $t26], "Edit", [], C));
    await $.mset((await $.wcall([$t25, $t26], "FieldByName", ["AMMOUNT"], C)), "asFloat", $.mul(($.fdiv((await $.mv((await $.wcall([$t25, $t26], "FieldByName", ["INSSUMM"], C)), "asFloat")), 100)), (await $.mv((await $.wcall([$t25, $t26], "FieldByName", ["TARIFF"], C)), "asFloat"))));
    if ($.truthy($.in_((await $.wv([$t25, $t26], "state", C, false)), [(await $.wv([$t25, $t26], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t25, $t26], "post", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFBlank", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t27 = (await $.v(C, "DModule"));
    const $t28 = (await $.wv([$t27], "ODSReliaseDates", C, false));
    try {
      await $.stmt($.wcall([$t27, $t28], "Close", [], C));
      if ($.truthy(($.eq((await $.mv((await $.mcall((await $.wv([$t27, $t28], "ODSMarks", C, false)), "FieldByName", ["calcoptions"])), "asInteger")), 1)))) {
        throw $.raise((await $.mcall((await $.wv([$t27, $t28], "TCalcException", C, false)), "Create", ["Verilmish avtomobil markasi ucun tarif hesablanmir."])));
      }
      if ($.truthy($.eq((await $.wcall([$t27, $t28], "trim", [(await $.mv((await $.wv([$t27, $t28], "dbcOutput", C, false)), "Text"))], C)), ""))) {
        throw $.raise((await $.mcall((await $.wv([$t27, $t28], "TOutputYear", C, false)), "Create", ["Avtomobilin buraxilish ilini daxil edin"])));
      }
      await $.stmt((await $.wcall([$t27, $t28], "SetVariable", ["state", (await $.mv((await $.mcall((await $.wv([$t27, $t28], "ODSMarks", C, false)), "fieldbyName", ["state_id"])), "asInteger"))], C)));
      await $.stmt((await $.wcall([$t27, $t28], "SetVariable", ["releaseyear", (await $.wcall([$t27, $t28], "StrToInt", [(await $.mv((await $.wv([$t27, $t28], "dbcOutput", C, false)), "Text"))], C))], C)));
      await $.stmt($.wcall([$t27, $t28], "Open", [], C));
      await $.mcall((await $.wv([$t27, $t28], "ODSMonths", C, false)), "Open", []);
      await $.mcall((await $.wv([$t27, $t28], "ODSFranshiz", C, false)), "Close", []);
      await $.mcall((await $.wv([$t27, $t28], "ODSFranshiz", C, false)), "Open", []);
      await $.stmt($.wcall([$t27, $t28], "MakeFranshizList", [], C));
    } catch ($t29) {
      $.rethrowControl($t29);
      if ($.excIs($t29, "Exception")) {
        L0["e"] = $.exc($t29);
        await $.stmt((await $.wcall([$t27, $t28], "MessageDlg", [(await $.mv((await $.wv([$t27, $t28], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), (await $.wv([$t27, $t28], "mtInformation", C, false)), [(await $.wv([$t27, $t28], "mbOK", C, false))], 0], C)));
      }
      else { throw $t29; }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMFBlank", "MakeFranshizList", async function MakeFranshizList(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t30 = (await $.v(C, "DModule"));
    const $t31 = (await $.wv([$t30], "ODSFranshiz", C, false));
    await $.mcall((await $.mv((await $.wv([$t30, $t31], "dbcFranshiz", C, false)), "Items")), "Clear", []);
    await $.stmt($.wcall([$t30, $t31], "First", [], C));
    while ($.truthy($.not((await $.wv([$t30, $t31], "EOF", C, false))))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t30, $t31], "dbcFranshiz", C, false)), "Items")), "Add", [(await $.wcall([$t30, $t31], "FloatToStr", [(await $.mv((await $.wcall([$t30, $t31], "FieldByName", ["FRANSHIZ"], C)), "asFloat"))], C))])));
      await $.stmt($.wcall([$t30, $t31], "Next", [], C));
      await $.tick();
    }
    await $.stmt($.wcall([$t30, $t31], "First", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TMFBlank", "dbcFranshizChange", async function dbcFranshizChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t32 = (await $.v(C, "DModule"));
    const $t33 = (await $.wv([$t32], "ODSFranshiz", C, false));
    await $.stmt((await $.wcall([$t32, $t33], "Locate", ["FRANSHIZ", (await $.mv((await $.mcall((await $.wv([$t32, $t33], "ODSContracts", C, false)), "FieldByName", ["FRANSHIZ"])), "asFloat")), []], C)));
    await $.mset((await $.mcall((await $.wv([$t32, $t33], "ODSContracts", C, false)), "FieldByName", ["TARIFF"])), "asFloat", (await $.mv((await $.wcall([$t32, $t33], "FieldByName", ["TARIFF"], C)), "asFloat")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
