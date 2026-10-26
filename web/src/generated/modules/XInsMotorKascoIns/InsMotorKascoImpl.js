// Generated from InsMotorKascoImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InsMotorKascoImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ActiveX", "AxCtrls", "InsMotorKasco_TLB", "StdVcl", "SBPlgAx50_TLB", "ImgList", "Grids", "DBGrids", "StdCtrls", "Db", "OracleData", "ComCtrls", "ToolWin", "ActnList", "PlgModalContainer", "Menus", "Oracle", "ExtCtrls", "Buttons", "DBCtrls", "ExcelExporter", "TntStdCtrls", "ComObj", "ComServ", "sboapiDataModuleImpl", "InsSettings", "InsFindFilter"]);
  const C = [U];
  U.defClass("TfmInsMotorKasco", "TActiveForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "odsmotorkasco": {"name": "ODSMotorKasco", "type": "TOracleDataSet"}, "dsmotorkasco": {"name": "DSMotorKasco", "type": "TDataSource"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "newblank": {"name": "NewBlank", "type": "TAction"}, "delblank": {"name": "DelBlank", "type": "TAction"}, "editblank": {"name": "EditBlank", "type": "TAction"}, "refresh": {"name": "Refresh", "type": "TAction"}, "callsuggestion": {"name": "CallSuggestion", "type": "TAction"}, "callpolicy": {"name": "CallPolicy", "type": "TAction"}, "arefreshall": {"name": "aRefreshAll", "type": "TAction"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "pmcobject": {"name": "pmcObject", "type": "TPlgModalContainer"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "policy1": {"name": "Policy1", "type": "TMenuItem"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "callsettings": {"name": "CallSettings", "type": "TAction"}, "odscontracts": {"name": "ODSContracts", "type": "TOracleDataSet"}, "odscontractsid": {"name": "ODSContractsID", "type": "TFloatField"}, "odscontractstype_id": {"name": "ODSContractsTYPE_ID", "type": "TFloatField"}, "odscontractsins_date": {"name": "ODSContractsINS_DATE", "type": "TDateTimeField"}, "odscontractsbegin_date": {"name": "ODSContractsBEGIN_DATE", "type": "TDateTimeField"}, "odscontractsend_date": {"name": "ODSContractsEND_DATE", "type": "TDateTimeField"}, "odscontractsvalute_id": {"name": "ODSContractsVALUTE_ID", "type": "TFloatField"}, "odscontractsclose_prefix": {"name": "ODSContractsCLOSE_PREFIX", "type": "TIntegerField"}, "odscontractskli_id": {"name": "ODSContractsKLI_ID", "type": "TFloatField"}, "odscontractsloanacc_id": {"name": "ODSContractsLOANACC_ID", "type": "TFloatField"}, "odscontractscurracc_id": {"name": "ODSContractsCURRACC_ID", "type": "TFloatField"}, "odscontractspolicy_num": {"name": "ODSContractsPOLICY_NUM", "type": "TStringField"}, "odscontractsammount": {"name": "ODSContractsAMMOUNT", "type": "TFloatField"}, "dscontracts": {"name": "DSContracts", "type": "TDataSource"}, "pins_mcasco": {"name": "PINS_MCasco", "type": "TOraclePackage"}, "opcommon": {"name": "OPCOMMON", "type": "TOraclePackage"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "afindfilter": {"name": "aFindFilter", "type": "TAction"}, "odsmotorkascoid": {"name": "ODSMotorKascoID", "type": "TFloatField"}, "odsmotorkascoinsuredtype": {"name": "ODSMotorKascoINSUREDTYPE", "type": "TStringField"}, "odsmotorkascoinsuredcolor": {"name": "ODSMotorKascoINSUREDCOLOR", "type": "TStringField"}, "odsmotorkascoinsuredoutputyear": {"name": "ODSMotorKascoINSUREDOUTPUTYEAR", "type": "TIntegerField"}, "odsmotorkascoinsuredstatenum": {"name": "ODSMotorKascoINSUREDSTATENUM", "type": "TStringField"}, "odsmotorkascounderframenum": {"name": "ODSMotorKascoUNDERFRAMENUM", "type": "TStringField"}, "odsmotorkascoinsuredbannum": {"name": "ODSMotorKascoINSUREDBANNUM", "type": "TStringField"}, "odsmotorkascoinsuredenginenum": {"name": "ODSMotorKascoINSUREDENGINENUM", "type": "TStringField"}, "odsmotorkascodriveintended": {"name": "ODSMotorKascoDRIVEINTENDED", "type": "TStringField"}, "odsmotorkascotypeid": {"name": "ODSMotorKascoTYPEID", "type": "TIntegerField"}, "odsmotorkascoben_id": {"name": "ODSMotorKascoBEN_ID", "type": "TFloatField"}, "odsmotorkascoinsuredmark": {"name": "ODSMotorKascoINSUREDMARK", "type": "TStringField"}, "odsmotorkascoinsuredmodel": {"name": "ODSMotorKascoINSUREDMODEL", "type": "TStringField"}, "odsmotorkascobank_id": {"name": "ODSMotorKascoBANK_ID", "type": "TFloatField"}, "odsmotorkascomonth_id": {"name": "ODSMotorKascoMONTH_ID", "type": "TFloatField"}, "odsmotorkascobegin_date": {"name": "ODSMotorKascoBEGIN_DATE", "type": "TDateTimeField"}, "odsmotorkascoend_date": {"name": "ODSMotorKascoEND_DATE", "type": "TDateTimeField"}, "odsmotorkascokli_id": {"name": "ODSMotorKascoKLI_ID", "type": "TFloatField"}, "odsmotorkascocid": {"name": "ODSMotorKascoCID", "type": "TFloatField"}, "odsmotorkasconame": {"name": "ODSMotorKascoNAME", "type": "TStringField"}, "odsmotorkascomark": {"name": "ODSMotorKascoMARK", "type": "TStringField"}, "odsmotorkascobeneficiary": {"name": "ODSMotorKascoBENEFICIARY", "type": "TStringField"}, "odsmotorkascopolicy_num": {"name": "ODSMotorKascoPOLICY_NUM", "type": "TStringField"}, "odsmotorkascoagent": {"name": "ODSMotorKascoAGENT", "type": "TStringField"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "edinssum": {"name": "edInsSum", "type": "TEdit"}, "edinsammount": {"name": "edInsAmmount", "type": "TEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "odsmotorkascoammount": {"name": "ODSMotorKascoAMMOUNT", "type": "TFloatField"}, "odsmotorkascoinssumm": {"name": "ODSMotorKascoINSSUMM", "type": "TFloatField"}, "odsmotorkascofranshiz": {"name": "ODSMotorKascoFRANSHIZ", "type": "TFloatField"}, "label2": {"name": "Label2", "type": "TLabel"}, "edfranshiz": {"name": "edFranshiz", "type": "TEdit"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "odsoperkurs": {"name": "ODSOperkurs", "type": "TOracleDataSet"}, "dsoperkurs": {"name": "DSOperkurs", "type": "TDataSource"}, "odsmotorkascovalute": {"name": "ODSMotorKascoVALUTE", "type": "TIntegerField"}, "rgvalute": {"name": "rgValute", "type": "TRadioGroup"}, "dsavtotypes": {"name": "DSAvtoTypes", "type": "TDataSource"}, "odsautotypes": {"name": "ODSAutoTypes", "type": "TOracleDataSet"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "odsmotorkascoaznfranshiz": {"name": "ODSMotorKascoaznfranshiz", "type": "TFloatField"}, "odsmotorkascoazninssum": {"name": "ODSMotorKascoAZNInsSum", "type": "TFloatField"}, "odsmotorkascoaznammount": {"name": "ODSMotorKascoAZNAmmount", "type": "TFloatField"}, "odsmotorkascoisdisabled": {"name": "ODSMotorKascoIsDisabled", "type": "TStringField"}, "odsmotorkascoclose_prefix": {"name": "ODSMotorKascoCLOSE_PREFIX", "type": "TIntegerField"}, "excelexporter": {"name": "ExcelExporter", "type": "TExcelExporter"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "odsmotorkascovalyuta": {"name": "ODSMotorKascoVALYUTA", "type": "TStringField"}, "odsmotorkascoins_date": {"name": "ODSMotorKascoINS_DATE", "type": "TDateTimeField"}, "odsoperkursval_kod": {"name": "ODSOperkursVAL_KOD", "type": "TIntegerField"}, "odsoperkursostat": {"name": "ODSOperkursOSTAT", "type": "TFloatField"}, "odsoperkursdat": {"name": "ODSOperkursDAT", "type": "TDateTimeField"}, "lbnonunicode": {"name": "lbNonUnicode", "type": "TListBox"}, "tlbunicode": {"name": "tlbUnicode", "type": "TTntListBox"}, "odsexcelreport": {"name": "ODSExcelReport", "type": "TOracleDataSet"}, "odsexcelreportinsuredstatenum": {"name": "ODSExcelReportINSUREDSTATENUM", "type": "TStringField"}, "odsexcelreportname": {"name": "ODSExcelReportNAME", "type": "TStringField"}, "odsexcelreportmark": {"name": "ODSExcelReportMARK", "type": "TStringField"}, "odsexcelreportbeneficiary": {"name": "ODSExcelReportBENEFICIARY", "type": "TStringField"}, "odsexcelreportpolicy_num": {"name": "ODSExcelReportPOLICY_NUM", "type": "TStringField"}, "odsexcelreportagent": {"name": "ODSExcelReportAGENT", "type": "TStringField"}, "odsexcelreportammount": {"name": "ODSExcelReportAMMOUNT", "type": "TFloatField"}, "odsexcelreportinssumm": {"name": "ODSExcelReportINSSUMM", "type": "TFloatField"}, "odsexcelreportfranshiz": {"name": "ODSExcelReportFRANSHIZ", "type": "TFloatField"}, "odsexcelreportvalyuta": {"name": "ODSExcelReportVALYUTA", "type": "TStringField"}, "odsexcelreportdrivecost": {"name": "ODSExcelReportDRIVECOST", "type": "TFloatField"}, "odsexcelreportvalute": {"name": "ODSExcelReportVALUTE", "type": "TIntegerField"}, "odsexcelreportins_date": {"name": "ODSExcelReportINS_DATE", "type": "TDateTimeField"}, "odsexcelreportbegin_date": {"name": "ODSExcelReportBEGIN_DATE", "type": "TDateTimeField"}, "odsexcelreportend_date": {"name": "ODSExcelReportEND_DATE", "type": "TDateTimeField"}, "odsmotorkascodrivecost": {"name": "ODSMotorKascoDRIVECOST", "type": "TFloatField"}, "odsval": {"name": "ODSVal", "type": "TOracleDataSet"}, "odsvalval_kod": {"name": "ODSValVAL_KOD", "type": "TIntegerField"}, "odsvalostat": {"name": "ODSValOSTAT", "type": "TFloatField"}, "odsvaldat": {"name": "ODSValDAT", "type": "TDateTimeField"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}, "fevents": {"name": "FEvents", "type": "IfmInsMotorKascoEvents"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    U.var_("fmInsMotorKasco", null, "TfmInsMotorKasco");
  });
  U.method("TfmInsMotorKasco", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TfmInsMotorKasco", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TfmInsMotorKasco", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TfmInsMotorKasco", "Initialize", null, arguments);
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
  U.method("TfmInsMotorKasco", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TfmInsMotorKasco", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmInsMotorKasco", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmInsMotorKasco", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmInsMotorKasco", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmInsMotorKasco", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmInsMotorKasco", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmInsMotorKasco", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TfmInsMotorKasco", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmInsMotorKasco", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmInsMotorKasco", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmInsMotorKasco", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TfmInsMotorKasco", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TfmInsMotorKasco", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TfmInsMotorKasco", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TfmInsMotorKasco", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmInsMotorKasco", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmInsMotorKasco", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmInsMotorKasco", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TfmInsMotorKasco", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TfmInsMotorKasco", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmInsMotorKasco", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TfmInsMotorKasco", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TfmInsMotorKasco", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmInsMotorKasco", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmInsMotorKasco", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TfmInsMotorKasco", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TfmInsMotorKasco", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t1 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t1); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TfmInsMotorKasco", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  await $.mcall((await $.v(C, "ODSMotorKasco")), "Open", []);
  await $.mcall((await $.v(C, "ODSContracts")), "Open", []);
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmInsMotorKasco", "ShowBlank", async function ShowBlank(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"params": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["params"]);
  {
    const $t2 = (await $.v(C, "pmcObject"));
    await $.wset([$t2], "Result", (await $.wcall([$t2], "ShowModal", [(await $.wcall([$t2], "StringToGuid", ["{10B7A209-A993-466D-A763-98A80A7E74C6}"], C)), (await $.wv([$t2], "params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false))], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["params"], "kind": "function", "ptypes": ["TStringList"]});
  U.method("TfmInsMotorKasco", "NewBlankExecute", async function NewBlankExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "params": null};
  await $.fixArgs(L0, ["sender"]);
  L0["params"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t3 = await $.iset((await $.mv(L0["params"], "Values")), ["Mod"], "Insert"); if ($t3 !== undefined) { await $.mset(L0["params"], "Values", $t3); } }
  { const $t4 = await $.iset((await $.mv(L0["params"], "Values")), ["KLI_ID"], "-1"); if ($t4 !== undefined) { await $.mset(L0["params"], "Values", $t4); } }
  { const $t5 = await $.iset((await $.mv(L0["params"], "Values")), ["SID"], "-1"); if ($t5 !== undefined) { await $.mset(L0["params"], "Values", $t5); } }
  if ($.truthy($.eq((await $.call(C, "ShowBlank", [L0["params"]])), (await $.v(C, "mrOk"))))) {
    await $.mcall((await $.v(C, "ODSMotorKasco")), "Refresh", []);
  }
  await $.mcall(L0["params"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmInsMotorKasco", "EditBlankExecute", async function EditBlankExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "params": null};
  await $.fixArgs(L0, ["sender"]);
  L0["params"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  await $.mcall((await $.v(C, "ODSContracts")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSContracts")), "SetVariable", ["cid", (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSMotorKascoCID")), "Value"))]))])));
  await $.mcall((await $.v(C, "ODSContracts")), "Open", []);
  { const $t6 = await $.iset((await $.mv(L0["params"], "Values")), ["Mod"], "Edit"); if ($t6 !== undefined) { await $.mset(L0["params"], "Values", $t6); } }
  { const $t7 = await $.iset((await $.mv(L0["params"], "Values")), ["ID"], (await $.call(C, "VarToStr", [(await $.mv((await $.v(C, "ODSMotorKascoID")), "Value"))]))); if ($t7 !== undefined) { await $.mset(L0["params"], "Values", $t7); } }
  { const $t8 = await $.iset((await $.mv(L0["params"], "Values")), ["KLI_ID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSMotorKascoKLI_ID")), "Value"))]))); if ($t8 !== undefined) { await $.mset(L0["params"], "Values", $t8); } }
  { const $t9 = await $.iset((await $.mv(L0["params"], "Values")), ["SID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSContractsID")), "Value"))]))); if ($t9 !== undefined) { await $.mset(L0["params"], "Values", $t9); } }
  if ($.truthy($.eq((await $.call(C, "ShowBlank", [L0["params"]])), (await $.v(C, "mrOk"))))) {
    await $.mcall((await $.v(C, "ODSMotorKasco")), "RefreshRecord", []);
  }
  await $.mcall(L0["params"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmInsMotorKasco", "DelBlankExecute", async function DelBlankExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["id"] = (await $.mv((await $.v(C, "ODSMotorKascoCID")), "Value"));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Secilmish sigorta lagv olunacaq!", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    try {
      await $.stmt((await $.mcall((await $.v(C, "OPCommon")), "CallBooleanFunction", ["del_ins", [L0["id"], 1]])));
    } catch ($t10) {
      $.rethrowControl($t10);
      if ($.excIs($t10, "EOracleError")) {
        L0["e"] = $.exc($t10);
        { const $t11 = (await $.mv(L0["e"], "ErrorCode"));
          if ($.eq($t11, 20002)) {
            await $.stmt((await $.call(C, "ShowMessage", ["Əvvəlcə sılı hesabları bağlayın!"])));
          }
          else if ($.eq($t11, 20001)) {
            await $.stmt((await $.call(C, "ShowMessage", ["Asılı hesablarda qalıq sıfırdan fərqlidir!"])));
          }
        }
      }
      else { throw $t10; }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmInsMotorKasco", "RefreshExecute", async function RefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (await $.v(C, "ODSMotorKasco"));
    await $.stmt($.wcall([$t12], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmInsMotorKasco", "ShowSuggestion", async function ShowSuggestion(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"params": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["params"]);
  {
    const $t13 = (await $.v(C, "pmcObject"));
    await $.wset([$t13], "Result", (await $.wcall([$t13], "ShowModal", [(await $.wcall([$t13], "StringToGuid", ["{D5269FCA-2559-4984-A565-16C0EE110CF6}"], C)), (await $.wv([$t13], "params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false))], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["params"], "kind": "function", "ptypes": ["TStringList"]});
  U.method("TfmInsMotorKasco", "CallSuggestionExecute", async function CallSuggestionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "params": null};
  await $.fixArgs(L0, ["sender"]);
  L0["params"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  try {
    { const $t14 = await $.iset((await $.mv(L0["params"], "Values")), ["KLI_ID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSMotorKascoKLI_ID")), "Value"))]))); if ($t14 !== undefined) { await $.mset(L0["params"], "Values", $t14); } }
    { const $t15 = await $.iset((await $.mv(L0["params"], "Values")), ["CID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSMotorKascoCID")), "Value"))]))); if ($t15 !== undefined) { await $.mset(L0["params"], "Values", $t15); } }
    await $.stmt((await $.call(C, "ShowSuggestion", [L0["params"]])));
  } finally {
    await $.mcall(L0["params"], "Free", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmInsMotorKasco", "ShowPolicy", async function ShowPolicy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"params": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["params"]);
  {
    const $t16 = (await $.v(C, "pmcObject"));
    await $.wset([$t16], "Result", (await $.wcall([$t16], "ShowModal", [(await $.wcall([$t16], "StringToGuid", ["{3C454A4C-C304-4633-AAAD-4C46C68BB8EE}"], C)), (await $.wv([$t16], "params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false))], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["params"], "kind": "function", "ptypes": ["TStringList"]});
  U.method("TfmInsMotorKasco", "CallPolicyExecute", async function CallPolicyExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "params": null};
  await $.fixArgs(L0, ["sender"]);
  L0["params"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  try {
    { const $t17 = await $.iset((await $.mv(L0["params"], "Values")), ["CID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSContractsID")), "Value"))]))); if ($t17 !== undefined) { await $.mset(L0["params"], "Values", $t17); } }
    await $.stmt((await $.call(C, "ShowPolicy", [L0["params"]])));
  } finally {
    await $.mcall(L0["params"], "Free", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmInsMotorKasco", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "EditBlank")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmInsMotorKasco", "N1DrawItem", async function N1DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t18 = L0["acanvas"];
    const $t19 = (await $.wv([$t18], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t20 = (await $.wv([$t18, $t19], "Font", C, false));
      await $.wset([$t18, $t19, $t20], "Name", "Azl Sans Serif", C);
      await $.wset([$t18, $t19, $t20], "Charset", (await $.wv([$t18, $t19, $t20], "DEFAULT_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t18, $t19, $t20], "Default", C, false)))) {
        await $.wset([$t18, $t19, $t20], "Style", [(await $.wv([$t18, $t19, $t20], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t18, $t19], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t18, $t19], "Pen", C, false)), "Color", (await $.wv([$t18, $t19], "clBlack", C, false)));
      await $.wset([$t18, $t19], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t18, $t19], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t18, $t19], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t18, $t19], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t18, $t19], "MoveTo", [(await $.mv((await $.wv([$t18, $t19], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t18, $t19], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t18, $t19], "LineTo", [(await $.mv((await $.wv([$t18, $t19], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t18, $t19], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t18, $t19], "inc", [$.ref(async () => (await $.wv([$t18, $t19], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t21) => { await $.wset([$t18, $t19], "LineBottom", $t21, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t18, $t19], "Pen", C, false)), "Color", (await $.wv([$t18, $t19], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t18, $t19], "MoveTo", [(await $.mv((await $.wv([$t18, $t19], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t18, $t19], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t18, $t19], "LineTo", [(await $.mv((await $.wv([$t18, $t19], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t18, $t19], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t18, $t19], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t18, $t19], "Brush", C, false)), "Color", (await $.wv([$t18, $t19], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t18, $t19], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t18, $t19], "Font", C, false)), "Color", (await $.wv([$t18, $t19], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t18, $t19], "Font", C, false)), "Color", (await $.wv([$t18, $t19], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t18, $t19], "Brush", C, false)), "Color", (await $.wv([$t18, $t19], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t18, $t19], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t18, $t19], "Font", C, false)), "Color", (await $.wv([$t18, $t19], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t18, $t19], "Font", C, false)), "Color", (await $.wv([$t18, $t19], "clGrayText", C, false)));
        }
      }
      await $.wset([$t18, $t19], "Bar", (await $.wv([$t18, $t19], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t18, $t19], "FillRect", [(await $.wv([$t18, $t19], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t18, $t19], "TextOut", [$.add((await $.mv((await $.wv([$t18, $t19], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 20), $.add((await $.mv((await $.wv([$t18, $t19], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t18, $t19], "Caption", C, false))], C)));
    }
    await $.wset([$t18, $t19], "SText", (await $.wcall([$t18, $t19], "ShortCutToText", [(await $.wv([$t18, $t19], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t18, $t19], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t18, $t19], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t18, $t19], "TextWidth", [(await $.wv([$t18, $t19], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t18, $t19], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t18, $t19], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t18, $t19], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t22 = (await $.wv([$t18, $t19], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t18, $t19, $t22], "Assigned", [(await $.wv([$t18, $t19, $t22], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t18, $t19, $t22], "Checked", C, false)))) {
            await $.mset((await $.wv([$t18, $t19, $t22], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t18, $t19, $t22], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t18, $t19, $t22], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t18, $t19, $t22], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t18, $t19, $t22], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t18, $t19, $t22], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t18, $t19, $t22], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t18, $t19, $t22], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t18, $t19, $t22], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t18, $t19, $t22], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t18, $t19, $t22], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t18, $t19, $t22], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t18, $t19, $t22], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t18, $t19, $t22], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t23) => { await $.mset((await $.wv([$t18, $t19, $t22], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t23); }), 2], C)));
            await $.stmt((await $.wcall([$t18, $t19, $t22], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t18, $t19, $t22], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t24) => { await $.mset((await $.wv([$t18, $t19, $t22], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t24); }), 2], C)));
            await $.stmt((await $.wcall([$t18, $t19, $t22], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t18, $t19, $t22], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t25) => { await $.mset((await $.wv([$t18, $t19, $t22], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t25); }), 2], C)));
            await $.stmt((await $.wcall([$t18, $t19, $t22], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t18, $t19, $t22], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t26) => { await $.mset((await $.wv([$t18, $t19, $t22], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t26); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t18, $t19, $t22], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t18, $t19, $t22], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t18, $t19, $t22], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t18, $t19, $t22], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t18, $t19, $t22], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t18, $t19, $t22], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t27) => { await $.mset((await $.wv([$t18, $t19, $t22], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t27); }), 1], C)));
            await $.stmt((await $.wcall([$t18, $t19, $t22], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t18, $t19, $t22], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t28) => { await $.mset((await $.wv([$t18, $t19, $t22], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t28); }), 1], C)));
            await $.stmt((await $.wcall([$t18, $t19, $t22], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t18, $t19, $t22], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t29) => { await $.mset((await $.wv([$t18, $t19, $t22], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t29); }), 1], C)));
            await $.stmt((await $.wcall([$t18, $t19, $t22], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t18, $t19, $t22], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t30) => { await $.mset((await $.wv([$t18, $t19, $t22], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t30); }), 1], C)));
            if ($.truthy((await $.wv([$t18, $t19, $t22], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t18, $t19, $t22], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t18, $t19, $t22], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t18, $t19, $t22], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t18, $t19, $t22], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t18, $t19, $t22], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t18, $t19, $t22], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t18, $t19, $t22], "Images", C, false)), "Draw", [(await $.wv([$t18, $t19, $t22], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t18, $t19, $t22], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t18, $t19, $t22], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t18, $t19, $t22], "ImageIndex", C, false)), (await $.wv([$t18, $t19, $t22], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TfmInsMotorKasco", "CallSettingsExecute", async function CallSettingsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "fmSettings", (await $.mcall((await $.v(C, "TfmSettings")), "Create", [Self])));
  {
    const $t31 = (await $.v(C, "fmSettings"));
    try {
      await $.mcall((await $.wv([$t31], "ODSStates", C, false)), "Open", []);
      await $.mcall((await $.wv([$t31], "ODSPerRates", C, false)), "Open", []);
      await $.mcall((await $.wv([$t31], "ODSBankm", C, false)), "Open", []);
      await $.mcall((await $.wv([$t31], "ODSTariffs", C, false)), "Open", []);
      await $.stmt($.wcall([$t31], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t31], "Free", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmInsMotorKasco", "aFindFilterExecute", async function aFindFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "fmFind"))]))))) {
    await $.set(C, "fmFind", (await $.mcall((await $.v(C, "TfmFind")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "fmFind")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmInsMotorKasco", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "fmInsMotorKasco", Self);
  await $.stmt((await $.mcall((await $.v(C, "ODSOperkurs")), "Locate", ["val_kod;dat", (await $.call(C, "VarArrayOF", [[1, (await $.v(C, "now"))]])), []])));
  await $.stmt((await $.mcall((await $.v(C, "ODSVal")), "Locate", ["val_kod", 1, []])));
  await $.stmt((await $.call(C, "ShowMessage", [(await $.mv((await $.v(C, "ODSOperkursOstat")), "AsString"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmInsMotorKasco", "DBGrid1MouseUp", async function DBGrid1MouseUp(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined, "s": 0, "s1": 0, "s2": 0, "i": 0};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  L0["s"] = 0;
  L0["s1"] = 0;
  L0["s2"] = 0;
  {
    const $t32 = (await $.v(C, "DBGrid1"));
    const $t33 = (await $.wv([$t32], "SelectedRows", C, false));
    const $t34 = (await $.wv([$t32, $t33], "ODSMotorKasco", C, false));
    if ($.truthy($.eq((await $.wv([$t32, $t33, $t34], "Count", C, false)), 0))) {
      await $.wset([$t32, $t33, $t34], "CurrentRowSelected", (await $.wv([$t32, $t33, $t34], "True", C, false)), C);
    }
    { const $t35 = $.sub((await $.wv([$t32, $t33, $t34], "Count", C, false)), 1);
      await $.wset([$t32, $t33, $t34], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t36 = true;
      for (;;) {
        if (!$t36) { await $.wset([$t32, $t33, $t34], "I", $.succ((await $.wv([$t32, $t33, $t34], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t36 = false;
        if (!($.ord((await $.wv([$t32, $t33, $t34], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t35))) break;
        await $.stmt((await $.wcall([$t32, $t33, $t34], "GotoBookmark", [(await $.wcall([$t32, $t33, $t34], "Pointer", [(await $.idx((await $.wv([$t32, $t33, $t34], "Items", C, false)), [(await $.wv([$t32, $t33, $t34], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
        if ($.truthy($.eq((await $.mv((await $.wv([$t32, $t33, $t34], "rgValute", C, false)), "ItemIndex")), 0))) {
          if ($.truthy($.not(($.eq((await $.mv((await $.wv([$t32, $t33, $t34], "ODSMotorKascoValute", C, false)), "Value")), 0))))) {
            await $.wset([$t32, $t33, $t34], "s", $.add((await $.wv([$t32, $t33, $t34], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), $.mul((await $.mv((await $.wcall([$t32, $t33, $t34], "FieldbyName", ["Franshiz"], C)), "AsFloat")), (await $.mv((await $.wv([$t32, $t33, $t34], "ODSValOstat", C, false)), "Value")))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
            await $.wset([$t32, $t33, $t34], "s1", $.add((await $.wv([$t32, $t33, $t34], "s1", { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true }, false)), $.mul((await $.mv((await $.wcall([$t32, $t33, $t34], "FieldbyName", ["InsSumm"], C)), "AsFloat")), (await $.mv((await $.wv([$t32, $t33, $t34], "ODSValOstat", C, false)), "Value")))), { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true });
            await $.wset([$t32, $t33, $t34], "s2", $.add((await $.wv([$t32, $t33, $t34], "s2", { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true }, false)), $.mul((await $.mv((await $.wcall([$t32, $t33, $t34], "FieldbyName", ["Ammount"], C)), "AsFloat")), (await $.mv((await $.wv([$t32, $t33, $t34], "ODSValOstat", C, false)), "Value")))), { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true });
            await $.wset([$t32, $t33, $t34], "s", (await $.wcall([$t32, $t33, $t34], "round", [(await $.wv([$t32, $t33, $t34], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
            await $.wset([$t32, $t33, $t34], "s1", (await $.wcall([$t32, $t33, $t34], "round", [(await $.wv([$t32, $t33, $t34], "s1", { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true }, false))], C)), { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true });
            await $.wset([$t32, $t33, $t34], "s2", (await $.wcall([$t32, $t33, $t34], "round", [(await $.wv([$t32, $t33, $t34], "s2", { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true }, false))], C)), { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true });
          } else {
            await $.wset([$t32, $t33, $t34], "s", $.add((await $.wv([$t32, $t33, $t34], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t32, $t33, $t34], "FieldbyName", ["Franshiz"], C)), "AsFloat"))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
            await $.wset([$t32, $t33, $t34], "s1", $.add((await $.wv([$t32, $t33, $t34], "s1", { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t32, $t33, $t34], "FieldbyName", ["InsSumm"], C)), "AsFloat"))), { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true });
            await $.wset([$t32, $t33, $t34], "s2", $.add((await $.wv([$t32, $t33, $t34], "s2", { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t32, $t33, $t34], "FieldbyName", ["Ammount"], C)), "AsFloat"))), { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true });
          }
        }
        if ($.truthy($.eq((await $.mv((await $.wv([$t32, $t33, $t34], "rgValute", C, false)), "ItemIndex")), 1))) {
          if ($.truthy($.not(($.eq((await $.mv((await $.wv([$t32, $t33, $t34], "ODSMotorKascoValute", C, false)), "Value")), 1))))) {
            await $.wset([$t32, $t33, $t34], "s", $.add((await $.wv([$t32, $t33, $t34], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), $.fdiv((await $.mv((await $.wcall([$t32, $t33, $t34], "FieldbyName", ["Franshiz"], C)), "AsFloat")), (await $.mv((await $.wv([$t32, $t33, $t34], "ODSValOstat", C, false)), "Value")))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
            await $.wset([$t32, $t33, $t34], "s1", $.add((await $.wv([$t32, $t33, $t34], "s1", { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true }, false)), $.fdiv((await $.mv((await $.wcall([$t32, $t33, $t34], "FieldbyName", ["InsSumm"], C)), "AsFloat")), (await $.mv((await $.wv([$t32, $t33, $t34], "ODSValOstat", C, false)), "Value")))), { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true });
            await $.wset([$t32, $t33, $t34], "s2", $.add((await $.wv([$t32, $t33, $t34], "s2", { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true }, false)), $.fdiv((await $.mv((await $.wcall([$t32, $t33, $t34], "FieldbyName", ["Ammount"], C)), "AsFloat")), (await $.mv((await $.wv([$t32, $t33, $t34], "ODSValOstat", C, false)), "Value")))), { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true });
            await $.wset([$t32, $t33, $t34], "s", (await $.wcall([$t32, $t33, $t34], "round", [(await $.wv([$t32, $t33, $t34], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
            await $.wset([$t32, $t33, $t34], "s1", (await $.wcall([$t32, $t33, $t34], "round", [(await $.wv([$t32, $t33, $t34], "s1", { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true }, false))], C)), { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true });
            await $.wset([$t32, $t33, $t34], "s2", (await $.wcall([$t32, $t33, $t34], "round", [(await $.wv([$t32, $t33, $t34], "s2", { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true }, false))], C)), { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true });
          } else {
            await $.wset([$t32, $t33, $t34], "s", $.add((await $.wv([$t32, $t33, $t34], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t32, $t33, $t34], "FieldbyName", ["Franshiz"], C)), "AsFloat"))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
            await $.wset([$t32, $t33, $t34], "s1", $.add((await $.wv([$t32, $t33, $t34], "s1", { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t32, $t33, $t34], "FieldbyName", ["InsSumm"], C)), "AsFloat"))), { get: async () => L0["s1"], set: async (v) => { L0["s1"] = v; }, local: true });
            await $.wset([$t32, $t33, $t34], "s2", $.add((await $.wv([$t32, $t33, $t34], "s2", { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t32, $t33, $t34], "FieldbyName", ["Ammount"], C)), "AsFloat"))), { get: async () => L0["s2"], set: async (v) => { L0["s2"] = v; }, local: true });
          }
        }
        await $.tick();
      }
    }
  }
  await $.mset((await $.v(C, "edFranshiz")), "Text", (await $.call(C, "FloatToStr", [L0["s"]])));
  await $.mset((await $.v(C, "edInsSum")), "Text", (await $.call(C, "FloatToStr", [L0["s1"]])));
  await $.mset((await $.v(C, "edInsAmmount")), "Text", (await $.call(C, "FloatToStr", [L0["s2"]])));
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TfmInsMotorKasco", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edFranshiz")), "Text", "");
  await $.mset((await $.v(C, "edInsSum")), "Text", "");
  await $.mset((await $.v(C, "edInsAmmount")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmInsMotorKasco", "ODSMotorKascoCalcFields", async function ODSMotorKascoCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t37 = L0["dataset"];
    if ($.truthy($.eq((await $.mv((await $.wcall([$t37], "FieldbyName", ["Valute"], C)), "AsFloat")), 1))) {
      await $.mset((await $.wcall([$t37], "FieldbyName", ["AZNFranshiz"], C)), "AsFloat", $.mul((await $.mv((await $.wcall([$t37], "FieldbyName", ["Franshiz"], C)), "AsFloat")), (await $.mv((await $.wv([$t37], "ODSValOstat", C, false)), "AsFloat"))));
      await $.mset((await $.wcall([$t37], "FieldbyName", ["AZNInsSum"], C)), "AsFloat", $.mul((await $.mv((await $.wcall([$t37], "FieldbyName", ["InsSumm"], C)), "AsFloat")), (await $.mv((await $.wv([$t37], "ODSValOstat", C, false)), "AsFloat"))));
      await $.mset((await $.wcall([$t37], "FieldbyName", ["AZNAmmount"], C)), "AsFloat", $.mul((await $.mv((await $.wcall([$t37], "FieldbyName", ["Ammount"], C)), "AsFloat")), (await $.mv((await $.wv([$t37], "ODSValOstat", C, false)), "AsFloat"))));
    } else {
      await $.mset((await $.wcall([$t37], "FieldbyName", ["AZNFranshiz"], C)), "AsFloat", (await $.mv((await $.wcall([$t37], "FieldbyName", ["Franshiz"], C)), "AsFloat")));
      await $.mset((await $.wcall([$t37], "FieldbyName", ["AZNInsSum"], C)), "AsFloat", (await $.mv((await $.wcall([$t37], "FieldbyName", ["InsSumm"], C)), "AsFloat")));
      await $.mset((await $.wcall([$t37], "FieldbyName", ["AZNAmmount"], C)), "AsFloat", (await $.mv((await $.wcall([$t37], "FieldbyName", ["Ammount"], C)), "AsFloat")));
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TfmInsMotorKasco", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ODSExcelReport")), "Close", []);
  await $.mcall((await $.v(C, "ODSExcelReport")), "Open", []);
  await $.stmt($.call(C, "ExportToExl", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmInsMotorKasco", "ExportToExl", async function ExportToExl(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "xapp": null, "sheet": null, "r": 0, "c": 0, "i": 0, "q": 0, "row": 0, "col": 0, "fildname": 0};
  try {
    L0["xapp"] = (await $.call(C, "CreateOleObject", ["Excel.Application"]));
    await $.mset(L0["xapp"], "Visible", true);
  } catch ($t38) {
    $.rethrowControl($t38);
    $.handled($t38);
    await $.stmt((await $.call(C, "ShowMessage", ["Unable to link with MS Excel,  it seems as it is not installed on this system."])));
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.mv(L0["xapp"], "WorkBooks")), "Add", [(-(4167))])));
  await $.mset((await $.idx((await $.mv((await $.idx((await $.mv(L0["xapp"], "WorkBooks")), [1])), "WorkSheets")), [1])), "Name", "Sheet1");
  L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["xapp"], "WorkBooks")), [1])), "WorkSheets")), ["Sheet1"]));
  { const $t39 = await $.iset((await $.mv(L0["sheet"], "Cells")), [1, 1], (await $.call(C, "UTFEncoder", ["Şəhadətnamə №-si"]))); if ($t39 !== undefined) { await $.mset(L0["sheet"], "Cells", $t39); } }
  { const $t40 = await $.iset((await $.mv(L0["sheet"], "Cells")), [1, 2], (await $.call(C, "UTFEncoder", ["Sığorta etdirən"]))); if ($t40 !== undefined) { await $.mset(L0["sheet"], "Cells", $t40); } }
  { const $t41 = await $.iset((await $.mv(L0["sheet"], "Cells")), [1, 3], (await $.call(C, "UTFEncoder", ["Marka və model"]))); if ($t41 !== undefined) { await $.mset(L0["sheet"], "Cells", $t41); } }
  { const $t42 = await $.iset((await $.mv(L0["sheet"], "Cells")), [1, 4], (await $.call(C, "UTFEncoder", ["Qeydiyyat №-si"]))); if ($t42 !== undefined) { await $.mset(L0["sheet"], "Cells", $t42); } }
  { const $t43 = await $.iset((await $.mv(L0["sheet"], "Cells")), [1, 5], (await $.call(C, "UTFEncoder", ["Müq. valyutası"]))); if ($t43 !== undefined) { await $.mset(L0["sheet"], "Cells", $t43); } }
  { const $t44 = await $.iset((await $.mv(L0["sheet"], "Cells")), [1, 6], (await $.call(C, "UTFEncoder", ["Franşiza"]))); if ($t44 !== undefined) { await $.mset(L0["sheet"], "Cells", $t44); } }
  { const $t45 = await $.iset((await $.mv(L0["sheet"], "Cells")), [1, 7], (await $.call(C, "UTFEncoder", ["Sı. məbləği"]))); if ($t45 !== undefined) { await $.mset(L0["sheet"], "Cells", $t45); } }
  { const $t46 = await $.iset((await $.mv(L0["sheet"], "Cells")), [1, 8], (await $.call(C, "UTFEncoder", ["Sı. haqqı"]))); if ($t46 !== undefined) { await $.mset(L0["sheet"], "Cells", $t46); } }
  { const $t47 = await $.iset((await $.mv(L0["sheet"], "Cells")), [1, 9], (await $.call(C, "UTFEncoder", ["Avto. dəyəri"]))); if ($t47 !== undefined) { await $.mset(L0["sheet"], "Cells", $t47); } }
  { const $t48 = await $.iset((await $.mv(L0["sheet"], "Cells")), [1, 10], (await $.call(C, "UTFEncoder", ["Faydagötürən"]))); if ($t48 !== undefined) { await $.mset(L0["sheet"], "Cells", $t48); } }
  { const $t49 = await $.iset((await $.mv(L0["sheet"], "Cells")), [1, 11], (await $.call(C, "UTFEncoder", ["Agent"]))); if ($t49 !== undefined) { await $.mset(L0["sheet"], "Cells", $t49); } }
  { const $t50 = await $.iset((await $.mv(L0["sheet"], "Cells")), [1, 12], (await $.call(C, "UTFEncoder", ["Müq. tarixi"]))); if ($t50 !== undefined) { await $.mset(L0["sheet"], "Cells", $t50); } }
  { const $t51 = await $.iset((await $.mv(L0["sheet"], "Cells")), [1, 13], (await $.call(C, "UTFEncoder", ["Başlanma tarixi"]))); if ($t51 !== undefined) { await $.mset(L0["sheet"], "Cells", $t51); } }
  { const $t52 = await $.iset((await $.mv(L0["sheet"], "Cells")), [1, 14], (await $.call(C, "UTFEncoder", ["Bitmə tarixi"]))); if ($t52 !== undefined) { await $.mset(L0["sheet"], "Cells", $t52); } }
  { const $t53 = await $.iset((await $.mv(L0["sheet"], "Cells")), [1, 15], (await $.call(C, "UTFEncoder", ["Franşiza(AZN)"]))); if ($t53 !== undefined) { await $.mset(L0["sheet"], "Cells", $t53); } }
  { const $t54 = await $.iset((await $.mv(L0["sheet"], "Cells")), [1, 16], (await $.call(C, "UTFEncoder", ["Franşiza(USD)"]))); if ($t54 !== undefined) { await $.mset(L0["sheet"], "Cells", $t54); } }
  { const $t55 = await $.iset((await $.mv(L0["sheet"], "Cells")), [1, 17], (await $.call(C, "UTFEncoder", ["Sı. məbləği(AZN)"]))); if ($t55 !== undefined) { await $.mset(L0["sheet"], "Cells", $t55); } }
  { const $t56 = await $.iset((await $.mv(L0["sheet"], "Cells")), [1, 18], (await $.call(C, "UTFEncoder", ["Sı. məbləği(USD)"]))); if ($t56 !== undefined) { await $.mset(L0["sheet"], "Cells", $t56); } }
  { const $t57 = await $.iset((await $.mv(L0["sheet"], "Cells")), [1, 19], (await $.call(C, "UTFEncoder", ["Sı. haqqı(AZN)"]))); if ($t57 !== undefined) { await $.mset(L0["sheet"], "Cells", $t57); } }
  { const $t58 = await $.iset((await $.mv(L0["sheet"], "Cells")), [1, 20], (await $.call(C, "UTFEncoder", ["Sı. haqqı(USD)"]))); if ($t58 !== undefined) { await $.mset(L0["sheet"], "Cells", $t58); } }
  { const $t59 = await $.iset((await $.mv(L0["sheet"], "Cells")), [1, 21], (await $.call(C, "UTFEncoder", ["Avto. dəyəri(AZN)"]))); if ($t59 !== undefined) { await $.mset(L0["sheet"], "Cells", $t59); } }
  { const $t60 = await $.iset((await $.mv(L0["sheet"], "Cells")), [1, 22], (await $.call(C, "UTFEncoder", ["Avto. dəyəri(USD)"]))); if ($t60 !== undefined) { await $.mset(L0["sheet"], "Cells", $t60); } }
  await $.mcall((await $.v(C, "ODSMotorKasco")), "First", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSOperkurs")), "Locate", ["val_kod;dat", (await $.call(C, "VarArrayOF", [[1, (await $.mv((await $.v(C, "ODSMotorKascoIns_Date")), "AsVariant"))]])), []])));
  { const $t61 = $.sub((await $.mv((await $.v(C, "ODSMotorKasco")), "RecordCount")), 1);
    L0["r"] = 0;
    let $t62 = true;
    for (;;) {
      if (!$t62) { L0["r"] = $.succ(L0["r"], 1); }
      $t62 = false;
      if (!($.ord(L0["r"]) <= $.ord($t61))) break;
      await $.stmt((await $.mcall((await $.v(C, "ODSOperkurs")), "Locate", ["val_kod;dat", (await $.call(C, "VarArrayOF", [[1, (await $.mv((await $.v(C, "ODSMotorKascoIns_Date")), "AsVariant"))]])), []])));
      { const $t63 = $.sub((await $.mv((await $.v(C, "ODSExcelReport")), "FieldCount")), 5);
        L0["c"] = 0;
        let $t64 = true;
        for (;;) {
          if (!$t64) { L0["c"] = $.succ(L0["c"], 1); }
          $t64 = false;
          if (!($.ord(L0["c"]) <= $.ord($t63))) break;
          L0["row"] = $.add(L0["r"], 2);
          { const $t65 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 1], (await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSMotorKascoPolicy_Num")), "Value"))]))); if ($t65 !== undefined) { await $.mset(L0["sheet"], "Cells", $t65); } }
          { const $t66 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 2], (await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSMotorKascoName")), "Value"))]))); if ($t66 !== undefined) { await $.mset(L0["sheet"], "Cells", $t66); } }
          { const $t67 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 3], (await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSMotorKascoMark")), "Value"))]))); if ($t67 !== undefined) { await $.mset(L0["sheet"], "Cells", $t67); } }
          { const $t68 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 4], (await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSMotorKascoInsuredStateNum")), "Value"))]))); if ($t68 !== undefined) { await $.mset(L0["sheet"], "Cells", $t68); } }
          { const $t69 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 5], (await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSMotorKascoValyuta")), "Value"))]))); if ($t69 !== undefined) { await $.mset(L0["sheet"], "Cells", $t69); } }
          { const $t70 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 6], (await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSMotorKascoFranshiz")), "AsString"))]))); if ($t70 !== undefined) { await $.mset(L0["sheet"], "Cells", $t70); } }
          { const $t71 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 7], (await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSMotorKascoInsSumm")), "AsString"))]))); if ($t71 !== undefined) { await $.mset(L0["sheet"], "Cells", $t71); } }
          { const $t72 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 8], (await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSMotorKascoAmmount")), "AsString"))]))); if ($t72 !== undefined) { await $.mset(L0["sheet"], "Cells", $t72); } }
          { const $t73 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 9], (await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSMotorKascoDriveCost")), "AsString"))]))); if ($t73 !== undefined) { await $.mset(L0["sheet"], "Cells", $t73); } }
          { const $t74 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 10], (await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSMotorKascoBeneficiary")), "AsString"))]))); if ($t74 !== undefined) { await $.mset(L0["sheet"], "Cells", $t74); } }
          { const $t75 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 11], (await $.call(C, "UTFEncoder", [(await $.mv((await $.v(C, "ODSMotorKascoAgent")), "AsString"))]))); if ($t75 !== undefined) { await $.mset(L0["sheet"], "Cells", $t75); } }
          { const $t76 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 12], (await $.mv((await $.v(C, "ODSMotorKascoIns_Date")), "Value"))); if ($t76 !== undefined) { await $.mset(L0["sheet"], "Cells", $t76); } }
          { const $t77 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 13], (await $.mv((await $.v(C, "ODSMotorKascoBegin_Date")), "Value"))); if ($t77 !== undefined) { await $.mset(L0["sheet"], "Cells", $t77); } }
          { const $t78 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 14], (await $.mv((await $.v(C, "ODSMotorKascoEnd_Date")), "Value"))); if ($t78 !== undefined) { await $.mset(L0["sheet"], "Cells", $t78); } }
          await $.tick();
        }
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "ODSExcelReport")), "FieldbyName", ["Valute"])), "AsFloat")), 1))) {
        { const $t79 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 15], $.mul((await $.mv((await $.v(C, "ODSMotorKascoFranshiz")), "Value")), (await $.mv((await $.v(C, "ODSOperkursOstat")), "AsFloat")))); if ($t79 !== undefined) { await $.mset(L0["sheet"], "Cells", $t79); } }
        { const $t80 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 17], $.mul((await $.mv((await $.v(C, "ODSMotorKascoInsSumm")), "Value")), (await $.mv((await $.v(C, "ODSOperkursOstat")), "AsFloat")))); if ($t80 !== undefined) { await $.mset(L0["sheet"], "Cells", $t80); } }
        { const $t81 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 19], $.mul((await $.mv((await $.v(C, "ODSMotorKascoAmmount")), "Value")), (await $.mv((await $.v(C, "ODSOperkursOstat")), "AsFloat")))); if ($t81 !== undefined) { await $.mset(L0["sheet"], "Cells", $t81); } }
        { const $t82 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 21], $.mul((await $.mv((await $.v(C, "ODSMotorKascoDriveCost")), "AsFloat")), (await $.mv((await $.v(C, "ODSOperkursOstat")), "AsFloat")))); if ($t82 !== undefined) { await $.mset(L0["sheet"], "Cells", $t82); } }
      } else {
        { const $t83 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 15], (await $.mv((await $.v(C, "ODSMotorKascoFranshiz")), "AsString"))); if ($t83 !== undefined) { await $.mset(L0["sheet"], "Cells", $t83); } }
        { const $t84 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 17], (await $.mv((await $.v(C, "ODSMotorKascoInsSumm")), "AsString"))); if ($t84 !== undefined) { await $.mset(L0["sheet"], "Cells", $t84); } }
        { const $t85 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 19], (await $.mv((await $.v(C, "ODSMotorKascoAmmount")), "AsString"))); if ($t85 !== undefined) { await $.mset(L0["sheet"], "Cells", $t85); } }
        { const $t86 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 21], (await $.mv((await $.v(C, "ODSMotorKascoDriveCost")), "Value"))); if ($t86 !== undefined) { await $.mset(L0["sheet"], "Cells", $t86); } }
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "ODSExcelReport")), "FieldbyName", ["Valute"])), "AsFloat")), 0))) {
        try {
          { const $t88 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 16], $.fdiv((await $.mv((await $.v(C, "ODSMotorKascoFranshiz")), "Value")), (await $.mv((await $.v(C, "ODSOperkursOstat")), "AsFloat")))); if ($t88 !== undefined) { await $.mset(L0["sheet"], "Cells", $t88); } }
          { const $t89 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 18], $.fdiv((await $.mv((await $.v(C, "ODSMotorKascoInsSumm")), "Value")), (await $.mv((await $.v(C, "ODSOperkursOstat")), "AsFloat")))); if ($t89 !== undefined) { await $.mset(L0["sheet"], "Cells", $t89); } }
          { const $t90 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 20], $.fdiv((await $.mv((await $.v(C, "ODSMotorKascoAmmount")), "Value")), (await $.mv((await $.v(C, "ODSOperkursOstat")), "AsFloat")))); if ($t90 !== undefined) { await $.mset(L0["sheet"], "Cells", $t90); } }
          { const $t91 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 22], $.fdiv((await $.mv((await $.v(C, "ODSMotorKascoDriveCost")), "AsFloat")), (await $.mv((await $.v(C, "ODSOperkursOstat")), "AsFloat")))); if ($t91 !== undefined) { await $.mset(L0["sheet"], "Cells", $t91); } }
        } catch ($t87) {
          $.rethrowControl($t87);
          $.handled($t87);
          await $.stmt((await $.call(C, "ShowMessage", ["Sığorta müqaviləsinin bağlanma tarixinə uyğun valyuta məzənnələri sistemə daxil edilməyib!"])));
        }
      } else {
        { const $t92 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 16], (await $.mv((await $.v(C, "ODSMotorKascoFranshiz")), "AsString"))); if ($t92 !== undefined) { await $.mset(L0["sheet"], "Cells", $t92); } }
        { const $t93 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 18], (await $.mv((await $.v(C, "ODSMotorKascoInsSumm")), "AsString"))); if ($t93 !== undefined) { await $.mset(L0["sheet"], "Cells", $t93); } }
        { const $t94 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 20], (await $.mv((await $.v(C, "ODSMotorKascoAmmount")), "AsString"))); if ($t94 !== undefined) { await $.mset(L0["sheet"], "Cells", $t94); } }
        { const $t95 = await $.iset((await $.mv(L0["sheet"], "Cells")), [L0["row"], 22], (await $.mv((await $.v(C, "ODSMotorKascoDriveCost")), "Value"))); if ($t95 !== undefined) { await $.mset(L0["sheet"], "Cells", $t95); } }
      }
      await $.mcall((await $.v(C, "ODSMotorKasco")), "Next", []);
      await $.tick();
    }
  }
  await $.mset((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xapp"], "WorkSheets")), ["Sheet1"])), "Range")), ["A1:AA1"])), "Font")), "Bold", true);
  await $.mset((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xapp"], "WorkSheets")), ["Sheet1"])), "Range")), ["A1:AA1"])), "Font")), "Size", 12);
  await $.mset((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xapp"], "WorkSheets")), ["Sheet1"])), "Range")), ["A1:AA1"])), "Font")), "Name", "Times New Roman");
  await $.mset((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xapp"], "WorkSheets")), ["Sheet1"])), "Range")), ["A1:AA1"])), "Font")), "Color", (await $.v(C, "clblue")));
  await $.mset((await $.idx((await $.mv((await $.idx((await $.mv(L0["xapp"], "WorkSheets")), ["Sheet1"])), "Rows")), [1])), "RowHeight", 25);
  await $.mset((await $.idx((await $.mv((await $.idx((await $.mv(L0["xapp"], "WorkSheets")), ["Sheet1"])), "Rows")), [1])), "Verticalalignment", 2);
  await $.mset((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xapp"], "WorkSheets")), ["Sheet1"])), "Range")), ["A1:AA1"])), "Borders")), "LineStyle", 13);
  { const $t96 = 30;
    L0["i"] = 1;
    let $t97 = true;
    for (;;) {
      if (!$t97) { L0["i"] = $.succ(L0["i"], 1); }
      $t97 = false;
      if (!($.ord(L0["i"]) <= $.ord($t96))) break;
      await $.mset((await $.idx((await $.mv((await $.idx((await $.mv(L0["xapp"], "WorkSheets")), ["Sheet1"])), "Columns")), [L0["i"]])), "ColumnWidth", 20);
      await $.mset((await $.idx((await $.mv((await $.idx((await $.mv(L0["xapp"], "WorkSheets")), ["Sheet1"])), "Columns")), [L0["i"]])), "HorizontalAlignment", 2);
      await $.mset((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xapp"], "WorkSheets")), ["Sheet1"])), "Columns")), [L0["i"]])), "Font")), "Name", "Times New Roman");
      await $.tick();
    }
  }
  await $.mset(L0["xapp"], "Caption", "Copyright Smart SST");
  await $.mset((await $.idx((await $.mv(L0["xapp"], "WorkSheets")), ["Sheet1"])), "Name", (await $.call(C, "UTFEncoder", ["Avtomobillərin kasko sığortası"])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfmInsMotorKasco", "UTFEncoder", async function UTFEncoder(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"str": $.copyArg(p0), result: '', "i": 0, "j": 0};
  await $.fixArgs(L0, ["str"]);
  { const $t98 = (await $.call(C, "length", [L0["str"]]));
    L0["i"] = 1;
    let $t99 = true;
    for (;;) {
      if (!$t99) { L0["i"] = $.succ(L0["i"], 1); }
      $t99 = false;
      if (!($.ord(L0["i"]) <= $.ord($t98))) break;
      { const $t100 = $.sub((await $.mv((await $.mv((await $.v(C, "lbNonUnicode")), "Items")), "Count")), 1);
        L0["j"] = 0;
        let $t101 = true;
        for (;;) {
          if (!$t101) { L0["j"] = $.succ(L0["j"], 1); }
          $t101 = false;
          if (!($.ord(L0["j"]) <= $.ord($t100))) break;
          if ($.truthy($.eq((await $.idx(L0["str"], [L0["i"]])), (await $.idx((await $.mv((await $.v(C, "lbNonUnicode")), "Items")), [L0["j"]]))))) {
            { const $t102 = await $.iset(L0["str"], [L0["i"]], (await $.idx((await $.idx((await $.mv((await $.v(C, "tlbUnicode")), "Items")), [L0["j"]])), [1]))); if ($t102 !== undefined) { L0["str"] = $t102; } }
          }
          await $.tick();
        }
      }
      await $.tick();
    }
  }
  L0["result"] = L0["str"];
  return L0.result;
}, {"params": ["str"], "kind": "function", "ptypes": ["WideString"]});
  return U;
}
