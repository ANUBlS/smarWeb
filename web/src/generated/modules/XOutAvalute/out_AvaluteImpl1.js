// Generated from out_AvaluteImpl1.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("out_AvaluteImpl1", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "out_Avalute_TLB", "StdVcl", "StdCtrls", "Mask", "DBCtrls", "Grids", "DBGrids", "ExtCtrls", "Oracle", "ImgList", "Db", "OracleData", "ComObj", "ComServ", "sboapiDataModuleImpl", "SBCore", "SBTranslateProc"]);
  const C = [U];
  U.defClass("Tout_AvaluteForm", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "dblookupcombobox7": {"name": "DBLookupComboBox7", "type": "TDBLookupComboBox"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "statictext7": {"name": "StaticText7", "type": "TStaticText"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "statictext8": {"name": "StaticText8", "type": "TStaticText"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "statictext9": {"name": "StaticText9", "type": "TStaticText"}, "dblookupcombobox6": {"name": "DBLookupComboBox6", "type": "TDBLookupComboBox"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "statictext10": {"name": "StaticText10", "type": "TStaticText"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "statictext11": {"name": "StaticText11", "type": "TStaticText"}, "dbedit17": {"name": "DBEdit17", "type": "TDBEdit"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "statictext12": {"name": "StaticText12", "type": "TStaticText"}, "dbedit20": {"name": "DBEdit20", "type": "TDBEdit"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "statictext13": {"name": "StaticText13", "type": "TStaticText"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "statictext14": {"name": "StaticText14", "type": "TStaticText"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "statictext15": {"name": "StaticText15", "type": "TStaticText"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "statictext16": {"name": "StaticText16", "type": "TStaticText"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "avalutedataset": {"name": "AvaluteDataSet", "type": "TOracleDataSet"}, "avalutedatasetvalute": {"name": "AvaluteDataSetVALUTE", "type": "TIntegerField"}, "avalutedatasetval_name": {"name": "AvaluteDataSetVAL_NAME", "type": "TWideStringField"}, "avalutedatasetvalu_name": {"name": "AvaluteDataSetVALU_NAME", "type": "TWideStringField"}, "avalutedatasetvalu_short": {"name": "AvaluteDataSetVALU_SHORT", "type": "TWideStringField"}, "avalutedatasetdebet": {"name": "AvaluteDataSetDEBET", "type": "TFloatField"}, "avalutedatasetkredit": {"name": "AvaluteDataSetKREDIT", "type": "TFloatField"}, "avalutedatasetustorg": {"name": "AvaluteDataSetUSTORG", "type": "TFloatField"}, "avalutedatasetustpok": {"name": "AvaluteDataSetUSTPOK", "type": "TFloatField"}, "avalutedatasetvalu_gen": {"name": "AvaluteDataSetVALU_GEN", "type": "TWideStringField"}, "avalutedatasetvalu_az": {"name": "AvaluteDataSetVALU_AZ", "type": "TWideStringField"}, "avalutedatasetusing": {"name": "AvaluteDataSetUSING", "type": "TIntegerField"}, "avalutedatasetvalu_other": {"name": "AvaluteDataSetVALU_OTHER", "type": "TWideStringField"}, "avalutedatasetvalu_inter": {"name": "AvaluteDataSetVALU_INTER", "type": "TWideStringField"}, "avalutedatasetvalu_bala": {"name": "AvaluteDataSetVALU_BALA", "type": "TWideStringField"}, "avalutedatasetpristavka": {"name": "AvaluteDataSetPRISTAVKA", "type": "TFloatField"}, "avalutedatasetcountry": {"name": "AvaluteDataSetCOUNTRY", "type": "TWideStringField"}, "avalutedatasetust_pok1": {"name": "AvaluteDataSetUST_POK1", "type": "TFloatField"}, "avalutedatasetf5501p": {"name": "AvaluteDataSetF5501P", "type": "TFloatField"}, "avalutedatasetf5501v": {"name": "AvaluteDataSetF5501V", "type": "TFloatField"}, "avalutedatasetsdebet": {"name": "AvaluteDataSetSDEBET", "type": "TFloatField"}, "avalutedatasetscredit": {"name": "AvaluteDataSetSCREDIT", "type": "TFloatField"}, "avalutedatasetoffical": {"name": "AvaluteDataSetOFFICAL", "type": "TWideStringField"}, "avalutedatasetlimit": {"name": "AvaluteDataSetLIMIT", "type": "TFloatField"}, "dsavalute": {"name": "dsAvalute", "type": "TDataSource"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "accounts": {"name": "Accounts", "type": "TOracleDataSet"}, "accountsid": {"name": "AccountsID", "type": "TFloatField"}, "accountsacc_no": {"name": "AccountsACC_NO", "type": "TWideStringField"}, "dataaccounts": {"name": "DataAccounts", "type": "TDataSource"}, "p_avalute": {"name": "P_AVALUTE", "type": "TOraclePackage"}, "ords_avalute_t": {"name": "OrDS_Avalute_T", "type": "TOracleDataSet"}, "ds_avalute_t": {"name": "DS_Avalute_T", "type": "TDataSource"}, "ds_valutesettings": {"name": "DS_ValuteSettings", "type": "TDataSource"}, "ords_valutesettings": {"name": "OrDS_ValuteSettings", "type": "TOracleDataSet"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbgridavalute_t": {"name": "DBGridAvalute_T", "type": "TDBGrid"}, "btnok": {"name": "BtnOK", "type": "TButton"}, "btncancel": {"name": "BtnCancel", "type": "TButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "cboxkredit": {"name": "CBoxKREDIT", "type": "TDBLookupComboBox"}, "cboxdebet": {"name": "CBoxDebet", "type": "TDBLookupComboBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "cboxf5501v": {"name": "CBoxF5501V", "type": "TDBLookupComboBox"}, "cboxf5501p": {"name": "CBoxF5501P", "type": "TDBLookupComboBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "cboxscredit": {"name": "CBoxSCredit", "type": "TDBLookupComboBox"}, "cboxsdebet": {"name": "CBoxSDebet", "type": "TDBLookupComboBox"}, "btnrefresh": {"name": "BtnRefresh", "type": "TButton"}, "fevents": {"name": "FEvents", "type": "Iout_AvaluteFormEvents"}}, {});
  U.init(async () => {
  });
  U.method("Tout_AvaluteForm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("Tout_AvaluteForm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("Tout_AvaluteForm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "Tout_AvaluteForm", "Initialize", null, arguments);
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
  U.method("Tout_AvaluteForm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tout_AvaluteForm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tout_AvaluteForm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tout_AvaluteForm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tout_AvaluteForm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tout_AvaluteForm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tout_AvaluteForm", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tout_AvaluteForm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tout_AvaluteForm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tout_AvaluteForm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tout_AvaluteForm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tout_AvaluteForm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tout_AvaluteForm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tout_AvaluteForm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tout_AvaluteForm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tout_AvaluteForm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tout_AvaluteForm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tout_AvaluteForm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tout_AvaluteForm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("Tout_AvaluteForm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tout_AvaluteForm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tout_AvaluteForm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tout_AvaluteForm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tout_AvaluteForm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tout_AvaluteForm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tout_AvaluteForm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("Tout_AvaluteForm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tout_AvaluteForm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tout_AvaluteForm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tout_AvaluteForm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("Tout_AvaluteForm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("Tout_AvaluteForm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("Tout_AvaluteForm", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("Tout_AvaluteForm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tout_AvaluteForm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tout_AvaluteForm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tout_AvaluteForm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("Tout_AvaluteForm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("Tout_AvaluteForm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tout_AvaluteForm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("Tout_AvaluteForm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("Tout_AvaluteForm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tout_AvaluteForm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tout_AvaluteForm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tout_AvaluteForm", "AvaluteDataSetAfterPost", async function AvaluteDataSetAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall((await $.v(C, "AvaluteDataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("Tout_AvaluteForm", "AvaluteDataSetApplyRecord", async function AvaluteDataSetApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "action"]);
  { const $t1 = L0["action"];
    if ($.eq($t1, "I")) {
      {
        const $t2 = (await $.v(C, "P_avalute"));
        const $t3 = (await $.wv([$t2], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
        await $.stmt((await $.wcall([$t2, $t3], "CallProcedure", ["add_avalute", ["v_VALUTE", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["VALUTE"], C)), "AsString")), "v_VAL_NAME", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["VAL_NAME"], C)), "AsString")), "v_VALU_NAME", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["VALU_NAME"], C)), "AsString")), "v_VALU_SHORT", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["VALU_SHORT"], C)), "AsString")), "v_USTORG", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["USTORG"], C)), "AsString")), "v_USTPOK", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["USTPOK"], C)), "AsString")), "v_VALU_GEN", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["VALU_GEN"], C)), "AsString")), "v_VALU_AZ", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["VALU_AZ"], C)), "AsString")), "v_USING", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["USING"], C)), "AsString")), "v_VALU_OTHER", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["VALU_OTHER"], C)), "AsString")), "v_VALU_INTER", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["VALU_INTER"], C)), "AsString")), "v_VALU_BALA", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["VALU_BALA"], C)), "AsString")), "v_PRISTAVKA", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["PRISTAVKA"], C)), "AsString")), "v_COUNTRY", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["COUNTRY"], C)), "AsString")), "v_UST_POK1", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["UST_POK1"], C)), "AsString")), "v_OFFICAL", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["OFFICAL"], C)), "AsString")), "v_LIMIT", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["LIMIT"], C)), "AsString")), "v_DEBET", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["DEBET"], C)), "AsString")), "v_KREDIT", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["KREDIT"], C)), "AsString")), "v_F5501P", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["F5501P"], C)), "AsString")), "v_F5501V", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["F5501V"], C)), "AsString")), "v_SDEBET", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["SDEBET"], C)), "AsString")), "v_SCREDIT", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["SCREDIT"], C)), "AsString"))]], C)));
      }
      await L0["applied"].set(true);
    }
    else if ($.eq($t1, "U")) {
      {
        const $t4 = (await $.v(C, "P_avalute"));
        const $t5 = (await $.wv([$t4], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
        await $.stmt((await $.wcall([$t4, $t5], "CallProcedure", ["add_avalute", ["v_VALUTE", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["VALUTE"], C)), "AsString")), "v_VAL_NAME", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["VAL_NAME"], C)), "AsString")), "v_VALU_NAME", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["VALU_NAME"], C)), "AsString")), "v_VALU_SHORT", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["VALU_SHORT"], C)), "AsString")), "v_USTORG", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["USTORG"], C)), "AsString")), "v_USTPOK", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["USTPOK"], C)), "AsString")), "v_VALU_GEN", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["VALU_GEN"], C)), "AsString")), "v_VALU_AZ", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["VALU_AZ"], C)), "AsString")), "v_USING", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["USING"], C)), "AsString")), "v_VALU_OTHER", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["VALU_OTHER"], C)), "AsString")), "v_VALU_INTER", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["VALU_INTER"], C)), "AsString")), "v_VALU_BALA", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["VALU_BALA"], C)), "AsString")), "v_PRISTAVKA", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["PRISTAVKA"], C)), "AsString")), "v_COUNTRY", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["COUNTRY"], C)), "AsString")), "v_UST_POK1", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["UST_POK1"], C)), "AsString")), "v_OFFICAL", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["OFFICAL"], C)), "AsString")), "v_LIMIT", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["LIMIT"], C)), "AsString")), "v_DEBET", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["DEBET"], C)), "AsString")), "v_KREDIT", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["KREDIT"], C)), "AsString")), "v_F5501P", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["F5501P"], C)), "AsString")), "v_F5501V", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["F5501V"], C)), "AsString")), "v_SDEBET", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["SDEBET"], C)), "AsString")), "v_SCREDIT", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["SCREDIT"], C)), "AsString"))]], C)));
      }
      await L0["applied"].set(true);
    }
    else {
      await L0["applied"].set(false);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("Tout_AvaluteForm", "OrDS_Avalute_TAfterScroll", async function OrDS_Avalute_TAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t6 = (await $.v(C, "OrDS_ValuteSettings"));
    await $.stmt($.wcall([$t6], "Close", [], C));
    await $.stmt((await $.wcall([$t6], "SetVariable", ["Val", (await $.mv((await $.mcall((await $.wv([$t6], "OrDS_Avalute_T", C, false)), "FieldByName", ["Valute"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t6], "Open", [], C));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("Tout_AvaluteForm", "OrDS_Avalute_TApplyRecord", async function OrDS_Avalute_TApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "action"]);
  { const $t7 = L0["action"];
    if ($.eq($t7, "I")) {
      {
        const $t8 = (await $.v(C, "P_avalute"));
        const $t9 = (await $.wv([$t8], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
        await $.stmt((await $.wcall([$t8, $t9], "CallProcedure", ["add_avalute", ["v_VALUTE", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["VALUTE"], C)), "AsString")), "v_VAL_NAME", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["VAL_NAME"], C)), "AsString")), "v_VALU_NAME", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["VALU_NAME"], C)), "AsString")), "v_VALU_SHORT", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["VALU_SHORT"], C)), "AsString")), "v_USTORG", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["USTORG"], C)), "AsString")), "v_USTPOK", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["USTPOK"], C)), "AsString")), "v_VALU_GEN", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["VALU_GEN"], C)), "AsString")), "v_VALU_AZ", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["VALU_AZ"], C)), "AsString")), "v_USING", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["USING"], C)), "AsString")), "v_VALU_OTHER", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["VALU_OTHER"], C)), "AsString")), "v_VALU_INTER", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["VALU_INTER"], C)), "AsString")), "v_VALU_BALA", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["VALU_BALA"], C)), "AsString")), "v_PRISTAVKA", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["PRISTAVKA"], C)), "AsString")), "v_COUNTRY", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["COUNTRY"], C)), "AsString")), "v_UST_POK1", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["UST_POK1"], C)), "AsString")), "v_OFFICAL", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["OFFICAL"], C)), "AsString")), "v_LIMIT", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["LIMIT"], C)), "AsString")), "v_DEBET", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["DEBET"], C)), "AsString")), "v_KREDIT", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["KREDIT"], C)), "AsString")), "v_F5501P", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["F5501P"], C)), "AsString")), "v_F5501V", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["F5501V"], C)), "AsString")), "v_SDEBET", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["SDEBET"], C)), "AsString")), "v_SCREDIT", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["SCREDIT"], C)), "AsString"))]], C)));
      }
      await L0["applied"].set(true);
    }
    else if ($.eq($t7, "U")) {
      {
        const $t10 = (await $.v(C, "P_avalute"));
        const $t11 = (await $.wv([$t10], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
        await $.stmt((await $.wcall([$t10, $t11], "CallProcedure", ["upd_avalute", ["v_VALUTE", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["VALUTE"], C)), "AsString")), "v_VAL_NAME", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["VAL_NAME"], C)), "AsString")), "v_VALU_NAME", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["VALU_NAME"], C)), "AsString")), "v_VALU_SHORT", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["VALU_SHORT"], C)), "AsString")), "v_USTORG", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["USTORG"], C)), "AsString")), "v_USTPOK", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["USTPOK"], C)), "AsString")), "v_VALU_GEN", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["VALU_GEN"], C)), "AsString")), "v_VALU_AZ", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["VALU_AZ"], C)), "AsString")), "v_USING", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["USING"], C)), "AsString")), "v_VALU_OTHER", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["VALU_OTHER"], C)), "AsString")), "v_VALU_INTER", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["VALU_INTER"], C)), "AsString")), "v_VALU_BALA", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["VALU_BALA"], C)), "AsString")), "v_PRISTAVKA", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["PRISTAVKA"], C)), "AsString")), "v_COUNTRY", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["COUNTRY"], C)), "AsString")), "v_UST_POK1", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["UST_POK1"], C)), "AsString")), "v_OFFICAL", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["OFFICAL"], C)), "AsString")), "v_LIMIT", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["LIMIT"], C)), "AsString")), "v_DEBET", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["DEBET"], C)), "AsString")), "v_KREDIT", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["KREDIT"], C)), "AsString")), "v_F5501P", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["F5501P"], C)), "AsString")), "v_F5501V", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["F5501V"], C)), "AsString")), "v_SDEBET", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["SDEBET"], C)), "AsString")), "v_SCREDIT", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["SCREDIT"], C)), "AsString"))]], C)));
      }
      await L0["applied"].set(true);
    }
    else if ($.eq($t7, "L") || $.eq($t7, "R") || $.eq($t7, "C")) {
      await L0["applied"].set(true);
    }
    else {
      await L0["applied"].set(false);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("Tout_AvaluteForm", "BtnOKClick", async function BtnOKClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mcall((await $.v(C, "OrDS_Avalute_T")), "Post", []);
  } catch ($t12) {
    $.rethrowControl($t12);
    $.handled($t12);
  }
  await $.mcall((await $.v(C, "OrDS_ValuteSettings")), "edit", []);
  await $.mcall((await $.v(C, "OrDS_ValuteSettings")), "Post", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tout_AvaluteForm", "BtnCancelClick", async function BtnCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OrDS_Avalute_T")), "Cancel", []);
  await $.mcall((await $.v(C, "OrDS_ValuteSettings")), "Cancel", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tout_AvaluteForm", "BtnRefreshClick", async function BtnRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OrDS_Avalute_T")), "Refresh", []);
  await $.mcall((await $.v(C, "OrDS_ValuteSettings")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
