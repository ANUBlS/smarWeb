// Generated from UMainPersonalAcc.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UMainPersonalAcc", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ActiveX", "AxCtrls", "PMainPersonalAcc_TLB", "StdVcl", "Db", "OracleData", "ActnList", "Menus", "ImgList", "Grids", "DBGrids", "ComCtrls", "ToolWin", "SBPlgAx50_TLB", "PlgModalContainer", "Oracle", "INSWordExporter", "ComObj", "ComServ", "sboapiDataModuleImpl", "USearch"]);
  const C = [U];
  U.defClass("TMainPersonalAcc", "TActiveForm", {"toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "accidentgrid": {"name": "AccidentGrid", "type": "TDBGrid"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n9": {"name": "N9", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "ainsert": {"name": "AInsert", "type": "TAction"}, "aedit": {"name": "AEdit", "type": "TAction"}, "adelete": {"name": "ADelete", "type": "TAction"}, "areport": {"name": "AReport", "type": "TAction"}, "arefresh": {"name": "ARefresh", "type": "TAction"}, "afullrefresh": {"name": "AFullRefresh", "type": "TAction"}, "asuggestion": {"name": "ASuggestion", "type": "TAction"}, "apolicy": {"name": "APolicy", "type": "TAction"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "accidentreportsource": {"name": "AccidentReportSource", "type": "TDataSource"}, "odspaccidentr": {"name": "ODSPAccidentR", "type": "TOracleDataSet"}, "odspaccidentsource": {"name": "ODSPAccidentSource", "type": "TDataSource"}, "odscustomerssource": {"name": "ODSCustomersSource", "type": "TDataSource"}, "odspaccident": {"name": "ODSPAccident", "type": "TOracleDataSet"}, "odspaccidentid": {"name": "ODSPAccidentID", "type": "TFloatField"}, "odspaccidentkli_id": {"name": "ODSPAccidentKLI_ID", "type": "TFloatField"}, "odspaccidentcontact_person": {"name": "ODSPAccidentCONTACT_PERSON", "type": "TStringField"}, "odspaccidentbanking_details": {"name": "ODSPAccidentBANKING_DETAILS", "type": "TStringField"}, "odspaccidenttotalemp_number": {"name": "ODSPAccidentTOTALEMP_NUMBER", "type": "TFloatField"}, "odspaccidentaog": {"name": "ODSPAccidentAOG", "type": "TFloatField"}, "odspaccidentaop": {"name": "ODSPAccidentAOP", "type": "TFloatField"}, "odspaccidentsmg": {"name": "ODSPAccidentSMG", "type": "TFloatField"}, "odspaccidentsmp": {"name": "ODSPAccidentSMP", "type": "TFloatField"}, "odspaccidentbcg": {"name": "ODSPAccidentBCG", "type": "TFloatField"}, "odspaccidentbcp": {"name": "ODSPAccidentBCP", "type": "TFloatField"}, "odspaccidentdecired_amount": {"name": "ODSPAccidentDECIRED_AMOUNT", "type": "TFloatField"}, "odspaccidentad": {"name": "ODSPAccidentAD", "type": "TFloatField"}, "odspaccidentpd": {"name": "ODSPAccidentPD", "type": "TFloatField"}, "odspaccidentplu": {"name": "ODSPAccidentPLU", "type": "TFloatField"}, "odspaccidenteme": {"name": "ODSPAccidentEME", "type": "TFloatField"}, "odspaccidenthc": {"name": "ODSPAccidentHC", "type": "TFloatField"}, "odspaccidenths": {"name": "ODSPAccidentHS", "type": "TFloatField"}, "odspaccidentbrb": {"name": "ODSPAccidentBRB", "type": "TFloatField"}, "odspaccidentburn": {"name": "ODSPAccidentBURN", "type": "TFloatField"}, "odspaccidentttd": {"name": "ODSPAccidentTTD", "type": "TFloatField"}, "odspaccidentnot_coveredperiod": {"name": "ODSPAccidentNOT_COVEREDPERIOD", "type": "TStringField"}, "odspaccidentoutsideofaze": {"name": "ODSPAccidentOUTSIDEOFAZE", "type": "TStringField"}, "odspaccidentrenewal": {"name": "ODSPAccidentRENEWAL", "type": "TStringField"}, "odspaccidenttravels": {"name": "ODSPAccidentTRAVELS", "type": "TStringField"}, "odspaccidenttypeid": {"name": "ODSPAccidentTYPEID", "type": "TIntegerField"}, "odscustomers": {"name": "ODSCustomers", "type": "TOracleDataSet"}, "odspaccidentriskid": {"name": "ODSPAccidentRISKID", "type": "TFloatField"}, "blankmodalcontainer": {"name": "BlankModalContainer", "type": "TPlgModalContainer"}, "pins_paccident": {"name": "PINS_PACCIDENT", "type": "TOraclePackage"}, "odspaccidentnot_covereperiod1": {"name": "ODSPAccidentNOT_COVEREPERIOD1", "type": "TStringField"}, "odspaccidentmaxweeks": {"name": "ODSPAccidentMAXWEEKS", "type": "TIntegerField"}, "accidentexporter": {"name": "AccidentExporter", "type": "TINSWordExporter"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "odsactivity": {"name": "ODSActivity", "type": "TOracleDataSet"}, "odspaccidentrname": {"name": "ODSPAccidentRNAME", "type": "TStringField"}, "odspaccidentrphone": {"name": "ODSPAccidentRPHONE", "type": "TStringField"}, "odspaccidentrfax": {"name": "ODSPAccidentRFAX", "type": "TStringField"}, "odspaccidentraddress": {"name": "ODSPAccidentRADDRESS", "type": "TStringField"}, "odspaccidentrcontact_person": {"name": "ODSPAccidentRCONTACT_PERSON", "type": "TStringField"}, "odspaccidentrbanking_details": {"name": "ODSPAccidentRBANKING_DETAILS", "type": "TStringField"}, "odspaccidentrtotalemp_number": {"name": "ODSPAccidentRTOTALEMP_NUMBER", "type": "TFloatField"}, "odspaccidentraog": {"name": "ODSPAccidentRAOG", "type": "TFloatField"}, "odspaccidentraop": {"name": "ODSPAccidentRAOP", "type": "TFloatField"}, "odspaccidentrsmg": {"name": "ODSPAccidentRSMG", "type": "TFloatField"}, "odspaccidentrsmp": {"name": "ODSPAccidentRSMP", "type": "TFloatField"}, "odspaccidentrbcg": {"name": "ODSPAccidentRBCG", "type": "TFloatField"}, "odspaccidentrbcp": {"name": "ODSPAccidentRBCP", "type": "TFloatField"}, "odspaccidentrdecired_amount": {"name": "ODSPAccidentRDECIRED_AMOUNT", "type": "TFloatField"}, "odspaccidentrad": {"name": "ODSPAccidentRAD", "type": "TFloatField"}, "odspaccidentrpd": {"name": "ODSPAccidentRPD", "type": "TFloatField"}, "odspaccidentrplu": {"name": "ODSPAccidentRPLU", "type": "TFloatField"}, "odspaccidentreme": {"name": "ODSPAccidentREME", "type": "TFloatField"}, "odspaccidentrhc": {"name": "ODSPAccidentRHC", "type": "TFloatField"}, "odspaccidentrhs": {"name": "ODSPAccidentRHS", "type": "TFloatField"}, "odspaccidentrbrb": {"name": "ODSPAccidentRBRB", "type": "TFloatField"}, "odspaccidentrburn": {"name": "ODSPAccidentRBURN", "type": "TFloatField"}, "odspaccidentrttd": {"name": "ODSPAccidentRTTD", "type": "TFloatField"}, "odspaccidentrnot_coveredperiod": {"name": "ODSPAccidentRNOT_COVEREDPERIOD", "type": "TStringField"}, "odspaccidentroutsideofaze": {"name": "ODSPAccidentROUTSIDEOFAZE", "type": "TStringField"}, "odspaccidentrrenewal": {"name": "ODSPAccidentRRENEWAL", "type": "TStringField"}, "odspaccidentrtravels": {"name": "ODSPAccidentRTRAVELS", "type": "TStringField"}, "odspaccidentrtypeid": {"name": "ODSPAccidentRTYPEID", "type": "TIntegerField"}, "odspaccidentrriskid": {"name": "ODSPAccidentRRISKID", "type": "TFloatField"}, "odspaccidentrnot_covereperiod1": {"name": "ODSPAccidentRNOT_COVEREPERIOD1", "type": "TStringField"}, "odspaccidentrmaxweeks": {"name": "ODSPAccidentRMAXWEEKS", "type": "TIntegerField"}, "risks": {"name": "Risks", "type": "TOracleDataSet"}, "risksid": {"name": "RisksID", "type": "TFloatField"}, "risksname": {"name": "RisksNAME", "type": "TStringField"}, "risksdata": {"name": "RisksData", "type": "TDataSource"}, "odspaccidentprofitid": {"name": "ODSPAccidentPROFITID", "type": "TFloatField"}, "beneficiarysource": {"name": "BeneficiarySource", "type": "TDataSource"}, "odsbeneficiary": {"name": "ODSBeneficiary", "type": "TOracleDataSet"}, "odsbeneficiaryid": {"name": "ODSBeneficiaryID", "type": "TFloatField"}, "odsbeneficiaryname": {"name": "ODSBeneficiaryNAME", "type": "TStringField"}, "odsbeneficiaryaddress": {"name": "ODSBeneficiaryADDRESS", "type": "TStringField"}, "odsbeneficiaryphone": {"name": "ODSBeneficiaryPHONE", "type": "TStringField"}, "odsbeneficiarybanking_details": {"name": "ODSBeneficiaryBANKING_DETAILS", "type": "TStringField"}, "odscustomersid": {"name": "ODSCustomersID", "type": "TIntegerField"}, "odscustomersname": {"name": "ODSCustomersNAME", "type": "TStringField"}, "odscustomersaddress": {"name": "ODSCustomersADDRESS", "type": "TStringField"}, "odscustomersmobilephone": {"name": "ODSCustomersMOBILEPHONE", "type": "TStringField"}, "odscustomersfax": {"name": "ODSCustomersFAX", "type": "TStringField"}, "odspaccsuggest": {"name": "ODSPAccSuggest", "type": "TOracleDataSet"}, "odspaccsuggestid": {"name": "ODSPAccSuggestID", "type": "TFloatField"}, "odspaccsuggestpaid": {"name": "ODSPAccSuggestPAID", "type": "TFloatField"}, "odspaccsuggestcndt_id": {"name": "ODSPAccSuggestCNDT_ID", "type": "TFloatField"}, "odspaccsuggestinsurancesum": {"name": "ODSPAccSuggestINSURANCESUM", "type": "TFloatField"}, "odspaccsuggestinsurancetime": {"name": "ODSPAccSuggestINSURANCETIME", "type": "TDateTimeField"}, "odspaccsuggestmedicalcost": {"name": "ODSPAccSuggestMEDICALCOST", "type": "TFloatField"}, "odspaccsuggestall_insammount": {"name": "ODSPAccSuggestALL_INSAMMOUNT", "type": "TFloatField"}, "odspaccsuggestgeo": {"name": "ODSPAccSuggestGEO", "type": "TStringField"}, "paccsugestsource": {"name": "PAccSugestSource", "type": "TDataSource"}, "suggestcontainer": {"name": "SuggestContainer", "type": "TPlgModalContainer"}, "odspaccidentagentid": {"name": "ODSPAccidentAGENTID", "type": "TFloatField"}, "policycontainer": {"name": "PolicyContainer", "type": "TPlgModalContainer"}, "odspaccsuggestfrz_id": {"name": "ODSPAccSuggestFRZ_ID", "type": "TFloatField"}, "odspaccidentclose_prefix": {"name": "ODSPAccidentCLOSE_PREFIX", "type": "TIntegerField"}, "odscontracts": {"name": "ODSContracts", "type": "TOracleDataSet"}, "odscontractsid": {"name": "ODSContractsID", "type": "TFloatField"}, "odscontractstype_id": {"name": "ODSContractsTYPE_ID", "type": "TFloatField"}, "odscontractsblank_id": {"name": "ODSContractsBLANK_ID", "type": "TFloatField"}, "odscontractssugg_id": {"name": "ODSContractsSUGG_ID", "type": "TFloatField"}, "odscontractspolicy_id": {"name": "ODSContractsPOLICY_ID", "type": "TFloatField"}, "odscontractsins_date": {"name": "ODSContractsINS_DATE", "type": "TDateTimeField"}, "odscontractsbegin_date": {"name": "ODSContractsBEGIN_DATE", "type": "TDateTimeField"}, "odscontractsend_date": {"name": "ODSContractsEND_DATE", "type": "TDateTimeField"}, "odscontractsvalute_id": {"name": "ODSContractsVALUTE_ID", "type": "TFloatField"}, "odscontractsammount": {"name": "ODSContractsAMMOUNT", "type": "TFloatField"}, "odscontractsclose_prefix": {"name": "ODSContractsCLOSE_PREFIX", "type": "TIntegerField"}, "odscontractskli_id": {"name": "ODSContractsKLI_ID", "type": "TFloatField"}, "odscontractsloanacc_id": {"name": "ODSContractsLOANACC_ID", "type": "TFloatField"}, "odscontractscurracc_id": {"name": "ODSContractsCURRACC_ID", "type": "TFloatField"}, "odscontractspolicy_num": {"name": "ODSContractsPOLICY_NUM", "type": "TStringField"}, "dscontracts": {"name": "DSContracts", "type": "TDataSource"}, "opcommon": {"name": "OPCOMMON", "type": "TOraclePackage"}, "asearch": {"name": "ASearch", "type": "TAction"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "odspaccidentname": {"name": "ODSPAccidentNAME", "type": "TStringField"}, "odspaccidentbegin_date": {"name": "ODSPAccidentBEGIN_DATE", "type": "TDateTimeField"}, "odspaccidentend_date": {"name": "ODSPAccidentEND_DATE", "type": "TDateTimeField"}, "id": {"name": "id", "type": "Integer"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}, "fevents": {"name": "FEvents", "type": "IMainPersonalAccEvents"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    U.const("WM_ModalResult", $.add((await $.v(C, "WM_USER")), 139));
    U.var_("MainPersonalAcc", null, "TMainPersonalAcc");
  });
  U.method("TMainPersonalAcc", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TMainPersonalAcc", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TMainPersonalAcc", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TMainPersonalAcc", "Initialize", null, arguments);
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
  U.method("TMainPersonalAcc", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TMainPersonalAcc", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainPersonalAcc", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainPersonalAcc", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainPersonalAcc", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainPersonalAcc", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainPersonalAcc", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainPersonalAcc", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TMainPersonalAcc", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainPersonalAcc", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainPersonalAcc", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainPersonalAcc", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TMainPersonalAcc", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TMainPersonalAcc", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TMainPersonalAcc", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TMainPersonalAcc", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainPersonalAcc", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainPersonalAcc", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainPersonalAcc", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TMainPersonalAcc", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TMainPersonalAcc", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainPersonalAcc", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TMainPersonalAcc", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TMainPersonalAcc", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainPersonalAcc", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMainPersonalAcc", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TMainPersonalAcc", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TMainPersonalAcc", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t1 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t1); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TMainPersonalAcc", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainPersonalAcc", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "MainPersonalAcc", Self);
  await $.set(C, "FParams", (await $.mv((await $.v(C, "TStringList")), "Create")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainPersonalAcc", "N1DrawItem", async function N1DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t2 = L0["acanvas"];
    const $t3 = (await $.wv([$t2], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t4 = (await $.wv([$t2, $t3], "Font", C, false));
      await $.wset([$t2, $t3, $t4], "Name", "Azl Sans Serif", C);
      await $.wset([$t2, $t3, $t4], "Charset", (await $.wv([$t2, $t3, $t4], "RUSSIAN_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t2, $t3, $t4], "Default", C, false)))) {
        await $.wset([$t2, $t3, $t4], "Style", [(await $.wv([$t2, $t3, $t4], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t2, $t3], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t2, $t3], "Pen", C, false)), "Color", (await $.wv([$t2, $t3], "clBlack", C, false)));
      await $.wset([$t2, $t3], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t2, $t3], "MoveTo", [(await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t2, $t3], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t2, $t3], "LineTo", [(await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t2, $t3], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t2, $t3], "inc", [$.ref(async () => (await $.wv([$t2, $t3], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t5) => { await $.wset([$t2, $t3], "LineBottom", $t5, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t2, $t3], "Pen", C, false)), "Color", (await $.wv([$t2, $t3], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t2, $t3], "MoveTo", [(await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t2, $t3], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t2, $t3], "LineTo", [(await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t2, $t3], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t2, $t3], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t2, $t3], "Brush", C, false)), "Color", (await $.wv([$t2, $t3], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t2, $t3], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t2, $t3], "Font", C, false)), "Color", (await $.wv([$t2, $t3], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t2, $t3], "Font", C, false)), "Color", (await $.wv([$t2, $t3], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t2, $t3], "Brush", C, false)), "Color", (await $.wv([$t2, $t3], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t2, $t3], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t2, $t3], "Font", C, false)), "Color", (await $.wv([$t2, $t3], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t2, $t3], "Font", C, false)), "Color", (await $.wv([$t2, $t3], "clGrayText", C, false)));
        }
      }
      await $.wset([$t2, $t3], "Bar", (await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t2, $t3], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t6) => { await $.mset((await $.wv([$t2, $t3], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t6); }), 22], C)));
      await $.stmt((await $.wcall([$t2, $t3], "FillRect", [(await $.wv([$t2, $t3], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t2, $t3], "TextOut", [$.add((await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t2, $t3], "Caption", C, false))], C)));
    }
    await $.wset([$t2, $t3], "SText", (await $.wcall([$t2, $t3], "ShortCutToText", [(await $.wv([$t2, $t3], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t2, $t3], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t2, $t3], "TextWidth", [(await $.wv([$t2, $t3], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t2, $t3], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t2, $t3], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t7 = (await $.wv([$t2, $t3], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t2, $t3, $t7], "Assigned", [(await $.wv([$t2, $t3, $t7], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t2, $t3, $t7], "Checked", C, false)))) {
            await $.mset((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t2, $t3, $t7], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t2, $t3, $t7], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t2, $t3, $t7], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t2, $t3, $t7], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t2, $t3, $t7], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t2, $t3, $t7], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t8) => { await $.mset((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t8); }), 2], C)));
            await $.stmt((await $.wcall([$t2, $t3, $t7], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t9) => { await $.mset((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t9); }), 2], C)));
            await $.stmt((await $.wcall([$t2, $t3, $t7], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t10) => { await $.mset((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t10); }), 2], C)));
            await $.stmt((await $.wcall([$t2, $t3, $t7], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t11) => { await $.mset((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t11); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t2, $t3, $t7], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t2, $t3, $t7], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t2, $t3, $t7], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t2, $t3, $t7], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t12) => { await $.mset((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t12); }), 1], C)));
            await $.stmt((await $.wcall([$t2, $t3, $t7], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t13) => { await $.mset((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t13); }), 1], C)));
            await $.stmt((await $.wcall([$t2, $t3, $t7], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t14) => { await $.mset((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t14); }), 1], C)));
            await $.stmt((await $.wcall([$t2, $t3, $t7], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t15) => { await $.mset((await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t15); }), 1], C)));
            if ($.truthy((await $.wv([$t2, $t3, $t7], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t2, $t3, $t7], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t2, $t3, $t7], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t2, $t3, $t7], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t2, $t3, $t7], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t2, $t3, $t7], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t2, $t3, $t7], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t2, $t3, $t7], "Images", C, false)), "Draw", [(await $.wv([$t2, $t3, $t7], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t2, $t3, $t7], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t2, $t3, $t7], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t2, $t3, $t7], "ImageIndex", C, false)), (await $.wv([$t2, $t3, $t7], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TMainPersonalAcc", "AInsertExecute", async function AInsertExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t16 = await $.iset((await $.mv(L0["p"], "Values")), ["Mod"], "Insert"); if ($t16 !== undefined) { await $.mset(L0["p"], "Values", $t16); } }
  { const $t17 = await $.iset((await $.mv(L0["p"], "Values")), ["KLI_ID"], (await $.call(C, "IntToStr", [(await $.mv((await $.v(C, "ODSCustomersId")), "Value"))]))); if ($t17 !== undefined) { await $.mset(L0["p"], "Values", $t17); } }
  {
    const $t18 = (await $.v(C, "BlankModalContainer"));
    await $.stmt((await $.wcall([$t18], "ShowModal", [(await $.wcall([$t18], "StringToGuid", ["{4CE12A01-2B74-46A1-B926-62459B0099FF}"], C)), (await $.wv([$t18], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["p"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainPersonalAcc", "AEditExecute", async function AEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "ODSPAccident")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Cədvəldə məlumat yoxdur !"])));
    return L0.result;
  }
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t19 = await $.iset((await $.mv(L0["p"], "Values")), ["Mod"], "Edit"); if ($t19 !== undefined) { await $.mset(L0["p"], "Values", $t19); } }
  { const $t20 = await $.iset((await $.mv(L0["p"], "Values")), ["ID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSPAccidentID")), "Value"))]))); if ($t20 !== undefined) { await $.mset(L0["p"], "Values", $t20); } }
  {
    const $t21 = (await $.v(C, "BlankModalContainer"));
    await $.stmt((await $.wcall([$t21], "ShowModal", [(await $.wcall([$t21], "StringToGuid", ["{4CE12A01-2B74-46A1-B926-62459B0099FF}"], C)), (await $.wv([$t21], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["p"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainPersonalAcc", "ARefreshExecute", async function ARefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "accidentid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t22 = (await $.v(C, "ODSPAccident"));
    await $.wset([$t22], "accidentID", (await $.mv((await $.wcall([$t22], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["accidentid"], set: async (v) => { L0["accidentid"] = v; }, local: true });
    await $.stmt($.wcall([$t22], "CloseAll", [], C));
    await $.stmt($.wcall([$t22], "Open", [], C));
    await $.stmt((await $.wcall([$t22], "Locate", ["ID", (await $.wv([$t22], "accidentID", { get: async () => L0["accidentid"], set: async (v) => { L0["accidentid"] = v; }, local: true }, false)), []], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainPersonalAcc", "FullRefresh", async function FullRefresh(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"datasetname": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["datasetname"]);
  L0["c_err_message"] = " Table or View in Dataset \"%s\" does not exist! ";
  { const $t23 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t24 = true;
    for (;;) {
      if (!$t24) { L0["i"] = $.succ(L0["i"], 1); }
      $t24 = false;
      if (!($.ord(L0["i"]) <= $.ord($t23))) break;
      if ($.truthy((await $.and_(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TOracleDataSet")), async () => ($.ne((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Name")), L0["datasetname"])))))) {
        try {
          await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Close", []);
          await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
        } catch ($t25) {
          $.rethrowControl($t25);
          $.handled($t25);
          throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", [(await $.call(C, "Format", [L0["c_err_message"], [(await $.mv(((await $.idx((await $.v(C, "Components")), [L0["i"]]))), "Name"))]]))])));
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["DataSetName"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TMainPersonalAcc", "AFullRefreshExecute", async function AFullRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "FullRefresh", [""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainPersonalAcc", "DeletePAccidentInfo", async function DeletePAccidentInfo(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"id": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["id"]);
  try {
    await $.stmt((await $.mcall((await $.v(C, "OPCommon")), "CallBooleanFunction", ["del_ins", [L0["id"], 3]])));
  } catch ($t26) {
    $.rethrowControl($t26);
    if ($.excIs($t26, "EOracleError")) {
      L0["e"] = $.exc($t26);
      { const $t27 = (await $.mv(L0["e"], "ErrorCode"));
        if ($.eq($t27, 20001)) {
          await $.stmt((await $.call(C, "ShowMessage", ["Asılı hesablarda qalıq sıfırdan fərqlidir!"])));
        }
        else if ($.eq($t27, 20002)) {
          await $.stmt((await $.call(C, "ShowMessage", ["Əvvəlcə asılı hesabları bağlayın!"])));
        }
      }
    }
    else { throw $t26; }
  }
  return L0.result;
}, {"params": ["id"], "kind": "procedure", "ptypes": ["integer"]});
  U.method("TMainPersonalAcc", "ADeleteExecute", async function ADeleteExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0, "i": 0, "waitnextconfirm": false, "willrefresh": false};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  {
    const $t28 = (await $.v(C, "AccidentGrid"));
    const $t29 = (await $.wv([$t28], "SelectedRows", C, false));
    const $t30 = (await $.wv([$t28, $t29], "ODSPAccident", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t28, $t29, $t30], "Count", C, false)), 0))) {
        await $.wset([$t28, $t29, $t30], "CurrentRowSelected", (await $.wv([$t28, $t29, $t30], "True", C, false)), C);
      }
      { const $t31 = $.sub((await $.wv([$t28, $t29, $t30], "Count", C, false)), 1);
        await $.wset([$t28, $t29, $t30], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t32 = true;
        for (;;) {
          if (!$t32) { await $.wset([$t28, $t29, $t30], "I", $.succ((await $.wv([$t28, $t29, $t30], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t32 = false;
          if (!($.ord((await $.wv([$t28, $t29, $t30], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t31))) break;
          await $.stmt((await $.wcall([$t28, $t29, $t30], "GotoBookmark", [(await $.wcall([$t28, $t29, $t30], "Pointer", [(await $.idx((await $.wv([$t28, $t29, $t30], "Items", C, false)), [(await $.wv([$t28, $t29, $t30], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t28, $t29, $t30], "ID", (await $.mv((await $.wcall([$t28, $t29, $t30], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
          if ($.truthy((await $.wv([$t28, $t29, $t30], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t33 = (await $.wcall([$t28, $t29, $t30], "MessageDlg", ["Məlumatlar silinsin ?", (await $.wv([$t28, $t29, $t30], "mtConfirmation", C, false)), [(await $.wv([$t28, $t29, $t30], "mbYes", C, false)), (await $.wv([$t28, $t29, $t30], "mbNo", C, false)), (await $.wv([$t28, $t29, $t30], "mbCancel", C, false)), (await $.wv([$t28, $t29, $t30], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t33, (await $.wv([$t28, $t29, $t30], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t33, (await $.wv([$t28, $t29, $t30], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t33, (await $.wv([$t28, $t29, $t30], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t28, $t29, $t30], "MessageDlg", [(await $.wcall([$t28, $t29, $t30], "Format", ["%d  sayda məlumat silinsin?", [$.sub((await $.wv([$t28, $t29, $t30], "Count", C, false)), (await $.wv([$t28, $t29, $t30], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)))]], C)), (await $.wv([$t28, $t29, $t30], "mtConfirmation", C, false)), [(await $.wv([$t28, $t29, $t30], "mbYes", C, false)), (await $.wv([$t28, $t29, $t30], "mbCancel", C, false))], 0], C)), (await $.wv([$t28, $t29, $t30], "mrYes", C, false))))) {
                  await $.wset([$t28, $t29, $t30], "WaitNextConfirm", (await $.wv([$t28, $t29, $t30], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t28, $t29, $t30], "Application", C, false)), "ProcessMessages", []);
          await $.stmt((await $.wcall([$t28, $t29, $t30], "DeletePAccidentInfo", [(await $.wv([$t28, $t29, $t30], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))], C)));
          await $.wset([$t28, $t29, $t30], "WillRefresh", (await $.wv([$t28, $t29, $t30], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.tick();
        }
      }
      await $.stmt((await $.wcall([$t28, $t29, $t30], "ARefreshExecute", [(await $.wv([$t28, $t29, $t30], "sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
    } finally {
      if ($.truthy((await $.wv([$t28, $t29, $t30], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.stmt((await $.wcall([$t28, $t29, $t30], "ARefreshExecute", [(await $.wv([$t28, $t29, $t30], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainPersonalAcc", "AccidentGridTitleClick", async function AccidentGridTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy((await $.mv((await $.mv(L0["column"], "Field")), "Calculated")))) {
    return L0.result;
  }
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  if ($.truthy($.eq((await $.mv(L0["column"], "FieldName")), "NAME"))) {
    L0["titlename"] = "kli_id";
  }
  {
    const $t34 = (await $.v(C, "ODSPAccident"));
    await $.mset((await $.wv([$t34], "Screen", C, false)), "Cursor", (await $.wv([$t34], "crSQLWait", C, false)));
    await $.stmt((await $.wcall([$t34], "SetVariable", ["ID", (await $.wv([$t34], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t34], "Refresh", [], C));
    await $.mset((await $.wv([$t34], "Screen", C, false)), "Cursor", (await $.wv([$t34], "crDefault", C, false)));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TMainPersonalAcc", "AReportExecute", async function AReportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "idr": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["idr"] = (await $.mv((await $.v(C, "ODSPAccidentID")), "Value"));
  await $.mcall((await $.v(C, "ODSPAccidentR")), "CloseAll", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSPAccidentR")), "SetVariable", ["id", L0["idr"]])));
  await $.mcall((await $.v(C, "ODSPAccidentR")), "Open", []);
  try {
    {
      const $t35 = (await $.v(C, "AccidentExporter"));
      await $.wset([$t35], "FileName", $.add((await $.wcall([$t35], "ExtractFilePath", [(await $.mv((await $.wv([$t35], "Application", C, false)), "ExeName"))], C)), "\\GPAccidentAppl.doc"), C);
      await $.stmt((await $.wcall([$t35], "Open", [(await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.mcall((await $.wv([$t35], "Risks", C, false)), "Locate", ["id", (await $.mv((await $.wv([$t35], "ODSPAccidentRRiskid", C, false)), "Value")), []])));
      if ($.truthy($.ne((await $.mv((await $.wv([$t35], "ODSPAccidentRRiskid", C, false)), "Value")), 0))) {
        await $.stmt((await $.wcall([$t35], "SetBookmark", ["RISKS", (await $.mv((await $.wv([$t35], "RISKSNAME", C, false)), "Value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      }
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Insured", (await $.mv((await $.wv([$t35], "ODSPAccidentRName", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Address", (await $.mv((await $.wv([$t35], "ODSPAccidentRAddress", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["ITel", (await $.mv((await $.wv([$t35], "ODSPAccidentRPhone", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["fax", (await $.mv((await $.wv([$t35], "ODSPAccidentRfax", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["CPerson", (await $.mv((await $.wv([$t35], "ODSPAccidentRContact_person", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["CPerson1", (await $.mv((await $.wv([$t35], "ODSPAccidentRContact_person", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Banking", (await $.mv((await $.wv([$t35], "ODSPAccidentRBanking_details", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Beneficiary", (await $.mv((await $.wv([$t35], "ODSBeneficiaryName", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["BAddress", (await $.mv((await $.wv([$t35], "ODSBeneficiaryAddress", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["BTel", (await $.mv((await $.wv([$t35], "ODSBeneficiaryPhone", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["BBanking", (await $.mv((await $.wv([$t35], "ODSBeneficiaryBanking_Details", C, false)), "value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["Empnum", (await $.wcall([$t35], "FloatToStr", [(await $.mv((await $.wv([$t35], "ODSPAccidentRTotalemp_number", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["AOG", (await $.wcall([$t35], "FloatToStr", [(await $.mv((await $.wv([$t35], "ODSPAccidentRAOG", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["AOP", (await $.wcall([$t35], "FloatToStr", [(await $.mv((await $.wv([$t35], "ODSPAccidentRAOP", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["SMG", (await $.wcall([$t35], "FloatToStr", [(await $.mv((await $.wv([$t35], "ODSPAccidentRSMG", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["SMP", (await $.wcall([$t35], "FloatToStr", [(await $.mv((await $.wv([$t35], "ODSPAccidentRSMP", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["BCG", (await $.wcall([$t35], "FloatToStr", [(await $.mv((await $.wv([$t35], "ODSPAccidentRBCG", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["BCP", (await $.wcall([$t35], "FloatToStr", [(await $.mv((await $.wv([$t35], "ODSPAccidentRBCP", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      if ($.truthy($.not((await $.mv((await $.wv([$t35], "ODSPAccidentRDecired_amount", C, false)), "IsNull"))))) {
        await $.stmt((await $.wcall([$t35], "SetBookmark", ["ISMultiple", "Bəli", (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t35], "SetBookmark", ["ISMultiplesum", (await $.wcall([$t35], "FloatToStr", [(await $.mv((await $.wv([$t35], "ODSPAccidentRDecired_amount", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      } else {
        await $.stmt((await $.wcall([$t35], "SetBookmark", ["ISMultiple", "Xeyr", (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      }
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["EME", (await $.wcall([$t35], "FloatToStr", [(await $.mv((await $.wv([$t35], "ODSPAccidentREME", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["HC", (await $.wcall([$t35], "FloatToStr", [(await $.mv((await $.wv([$t35], "ODSPAccidentRHC", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["HS", (await $.wcall([$t35], "FloatToStr", [(await $.mv((await $.wv([$t35], "ODSPAccidentRHS", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["BRB", (await $.wcall([$t35], "FloatToStr", [(await $.mv((await $.wv([$t35], "ODSPAccidentRBRB", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["BURN", (await $.wcall([$t35], "FloatToStr", [(await $.mv((await $.wv([$t35], "ODSPAccidentRBURN", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["TTD", (await $.wcall([$t35], "FloatToStr", [(await $.mv((await $.wv([$t35], "ODSPAccidentRTTD", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["WEEKS", (await $.wcall([$t35], "FloatToStr", [(await $.mv((await $.wv([$t35], "ODSPAccidentMAXWEEKS", C, false)), "value"))], C)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["NOTCOVERED", $.add($.add((await $.mv((await $.wv([$t35], "ODSPAccidentRNOT_COVEREDPERIOD", C, false)), "value")), "  -  "), (await $.mv((await $.wv([$t35], "ODSPAccidentRNOT_COVEREPERIOD1", C, false)), "value"))), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      if ($.truthy((await $.or_(($.eq((await $.mv((await $.wv([$t35], "ODSPAccidentROUTSIDEOFAZE", C, false)), "Value")), "Xeyr")), async () => ($.eq((await $.mv((await $.wv([$t35], "ODSPAccidentROUTSIDEOFAZE", C, false)), "Value")), "Bəli")))))) {
        await $.stmt((await $.wcall([$t35], "SetBookmark", ["OUTOFAZE", (await $.mv((await $.wv([$t35], "ODSPAccidentROUTSIDEOFAZE", C, false)), "Value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      }
      if ($.truthy((await $.and_(($.ne((await $.mv((await $.wv([$t35], "ODSPAccidentROUTSIDEOFAZE", C, false)), "Value")), "Xeyr")), async () => ($.ne((await $.mv((await $.wv([$t35], "ODSPAccidentROUTSIDEOFAZE", C, false)), "Value")), "Bəli")))))) {
        await $.stmt((await $.wcall([$t35], "SetBookmark", ["OUTOFAZE1", (await $.mv((await $.wv([$t35], "ODSPAccidentROUTSIDEOFAZE", C, false)), "Value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t35], "SetBookmark", ["OUTOFAZE", "Bəli", (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      }
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["RENEWAL", (await $.mv((await $.wv([$t35], "ODSPAccidentRRENEWAL", C, false)), "Value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t35], "SetBookmark", ["TRAVELS", (await $.mv((await $.wv([$t35], "ODSPAccidentRTRAVELS", C, false)), "Value")), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "false", C, false)), (await $.wv([$t35], "False", C, false)), (await $.wv([$t35], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t35], "False", C, false))], C)));
    }
  } finally {
    await $.mcall((await $.v(C, "AccidentExporter")), "Show", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainPersonalAcc", "ASuggestionExecute", async function ASuggestionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "ODSPAccident")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Əvvəlcə anket forması hazırlanmalıdır !"])));
    return L0.result;
  }
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  await $.mcall((await $.v(C, "ODSPaccSuggest")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSPaccSuggest")), "SetVariable", ["paid", (await $.mv((await $.v(C, "ODSPAccidentId")), "value"))])));
  await $.mcall((await $.v(C, "ODSPaccSuggest")), "Open", []);
  { const $t36 = await $.iset((await $.mv(L0["p"], "Values")), ["MK_ID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSPAccidentID")), "value"))]))); if ($t36 !== undefined) { await $.mset(L0["p"], "Values", $t36); } }
  if ($.truthy($.lt((await $.mv((await $.v(C, "ODSPaccSuggest")), "RecordCount")), 1))) {
    { const $t37 = await $.iset((await $.mv(L0["p"], "Values")), ["Mod"], "Insert"); if ($t37 !== undefined) { await $.mset(L0["p"], "Values", $t37); } }
  } else {
    { const $t38 = await $.iset((await $.mv(L0["p"], "Values")), ["Mod"], "Edit"); if ($t38 !== undefined) { await $.mset(L0["p"], "Values", $t38); } }
  }
  {
    const $t39 = (await $.v(C, "SuggestContainer"));
    await $.stmt((await $.wcall([$t39], "ShowModal", [(await $.wcall([$t39], "StringToGuid", ["{F64B6260-CAB7-4D0A-9149-CF1A4639CD5C}"], C)), (await $.wv([$t39], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["p"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainPersonalAcc", "APolicyExecute", async function APolicyExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ODSPAccSUGGEST")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSPAccSuggest")), "SetVariable", ["paid", (await $.mv((await $.v(C, "ODSPAccidentID")), "value"))])));
  await $.mcall((await $.v(C, "ODSPAccSuggest")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ODSPAccSUGGESTID")), "Value")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Təklifnamə hazır deyil ! Əvvəlcə təklifnamə hazırlanmalıdır !"])));
    return L0.result;
  }
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t40 = await $.iset((await $.mv(L0["p"], "Values")), ["ID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSPAccidentId")), "value"))]))); if ($t40 !== undefined) { await $.mset(L0["p"], "Values", $t40); } }
  {
    const $t41 = (await $.v(C, "PolicyContainer"));
    await $.stmt((await $.wcall([$t41], "ShowModal", [(await $.wcall([$t41], "StringToGuid", ["{DF05FA85-2A5E-472D-8506-3C31DF75BDD8}"], C)), (await $.wv([$t41], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["p"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainPersonalAcc", "ASearchExecute", async function ASearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "frmSearch"))]))))) {
    await $.set(C, "frmSearch", (await $.mcall((await $.v(C, "TfrmSearch")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "frmSearch")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
