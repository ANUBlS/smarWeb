// Generated from fmMedicalImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("fmMedicalImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "InsMedical_TLB", "StdVcl", "PlgModalContainer", "Menus", "ActnList", "ImgList", "Grids", "DBGrids", "StdCtrls", "ComCtrls", "ToolWin", "SBPlgAx50_TLB", "Db", "OracleData", "Oracle", "ComObj", "ComServ", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TfmMedical", "TActiveForm", {"toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "newblank": {"name": "NewBlank", "type": "TAction"}, "delblank": {"name": "DelBlank", "type": "TAction"}, "editblank": {"name": "EditBlank", "type": "TAction"}, "refresh": {"name": "Refresh", "type": "TAction"}, "callsuggestion": {"name": "CallSuggestion", "type": "TAction"}, "callpolicy": {"name": "CallPolicy", "type": "TAction"}, "arefreshall": {"name": "aRefreshAll", "type": "TAction"}, "pmcobject": {"name": "pmcObject", "type": "TPlgModalContainer"}, "odsmedical": {"name": "ODSMedical", "type": "TOracleDataSet"}, "dsmedical": {"name": "DSMedical", "type": "TDataSource"}, "odsmedicalid": {"name": "ODSMedicalID", "type": "TIntegerField"}, "odsmedicalempnum": {"name": "ODSMedicalEMPNUM", "type": "TIntegerField"}, "odsmedicalgroupa": {"name": "ODSMedicalGROUPA", "type": "TIntegerField"}, "odsmedicalgroupacoverage": {"name": "ODSMedicalGROUPACOVERAGE", "type": "TStringField"}, "odsmedicalgroupb": {"name": "ODSMedicalGROUPB", "type": "TIntegerField"}, "odsmedicalgroupbcoverage": {"name": "ODSMedicalGROUPBCOVERAGE", "type": "TStringField"}, "odsmedicalgroupc": {"name": "ODSMedicalGROUPC", "type": "TIntegerField"}, "odsmedicalgroupccoverage": {"name": "ODSMedicalGROUPCCOVERAGE", "type": "TStringField"}, "odsmedicalinsprogram": {"name": "ODSMedicalINSPROGRAM", "type": "TStringField"}, "odsmedicalserv_id": {"name": "ODSMedicalSERV_ID", "type": "TIntegerField"}, "odsmedicalbegindate": {"name": "ODSMedicalBEGINDATE", "type": "TDateTimeField"}, "odsmedicalenddate": {"name": "ODSMedicalENDDATE", "type": "TDateTimeField"}, "odsmedicalemps_id": {"name": "ODSMedicalEMPS_ID", "type": "TStringField"}, "odsmedicalinpatserv": {"name": "ODSMedicalINPATSERV", "type": "TIntegerField"}, "odsmedicaloutpatserv": {"name": "ODSMedicalOUTPATSERV", "type": "TIntegerField"}, "odsmedicalemeraid": {"name": "ODSMedicalEMERAID", "type": "TIntegerField"}, "odsmedicalprescdrugs": {"name": "ODSMedicalPRESCDRUGS", "type": "TIntegerField"}, "odsmedicaldentserv": {"name": "ODSMedicalDENTSERV", "type": "TIntegerField"}, "odsmedicalprophyserv": {"name": "ODSMedicalPROPHYSERV", "type": "TIntegerField"}, "odsmedicalprophyins": {"name": "ODSMedicalPROPHYINS", "type": "TIntegerField"}, "odsmedicalsanatorium": {"name": "ODSMedicalSANATORIUM", "type": "TIntegerField"}, "odsmedicalchildbirth": {"name": "ODSMedicalCHILDBIRTH", "type": "TIntegerField"}, "odsmedicalprivatedrserv": {"name": "ODSMedicalPRIVATEDRSERV", "type": "TIntegerField"}, "odsmedicalmedicalevac": {"name": "ODSMedicalMEDICALEVAC", "type": "TIntegerField"}, "odsmedicalprostins": {"name": "ODSMedicalPROSTINS", "type": "TIntegerField"}, "odsmedicalchemoradiotherapy": {"name": "ODSMedicalCHEMORADIOTHERAPY", "type": "TIntegerField"}, "odsmedicalkli_id": {"name": "ODSMedicalKLI_ID", "type": "TIntegerField"}, "odsmedicaltypeid": {"name": "ODSMedicalTYPEID", "type": "TIntegerField"}, "odsmedicalid_1": {"name": "ODSMedicalID_1", "type": "TIntegerField"}, "odsmedicalcust_id": {"name": "ODSMedicalCUST_ID", "type": "TIntegerField"}, "odsmedicalname": {"name": "ODSMedicalNAME", "type": "TStringField"}, "odsmedicalsurname": {"name": "ODSMedicalSURNAME", "type": "TStringField"}, "odsmedicalfathername": {"name": "ODSMedicalFATHERNAME", "type": "TStringField"}, "odsmedicalhomephone": {"name": "ODSMedicalHOMEPHONE", "type": "TStringField"}, "odsmedicalworkphone": {"name": "ODSMedicalWORKPHONE", "type": "TStringField"}, "odsmedicalmobilephone": {"name": "ODSMedicalMOBILEPHONE", "type": "TStringField"}, "odsmedicalfax": {"name": "ODSMedicalFAX", "type": "TStringField"}, "odsmedicaladdress": {"name": "ODSMedicalADDRESS", "type": "TStringField"}, "odsmedicaldateofbirth": {"name": "ODSMedicalDATEOFBIRTH", "type": "TDateTimeField"}, "odsmedicalplaceofbirth": {"name": "ODSMedicalPLACEOFBIRTH", "type": "TStringField"}, "odsmedicalage": {"name": "ODSMedicalAGE", "type": "TIntegerField"}, "odsmedicalsex": {"name": "ODSMedicalSEX", "type": "TIntegerField"}, "odsmedicalpasportno": {"name": "ODSMedicalPASPORTNO", "type": "TStringField"}, "odsmedicalms_id": {"name": "ODSMedicalMS_ID", "type": "TIntegerField"}, "odsmedicalcity": {"name": "ODSMedicalCITY", "type": "TStringField"}, "odsmedicalindex_": {"name": "ODSMedicalINDEX_", "type": "TStringField"}, "odsmedicalmailingaddress": {"name": "ODSMedicalMAILINGADDRESS", "type": "TStringField"}, "odsmedicalocc_id": {"name": "ODSMedicalOCC_ID", "type": "TIntegerField"}, "odsmedicaled_id": {"name": "ODSMedicalED_ID", "type": "TIntegerField"}, "odsmedicalstate": {"name": "ODSMedicalSTATE", "type": "TStringField"}, "odsmedicalact_id": {"name": "ODSMedicalACT_ID", "type": "TIntegerField"}, "odsmedicalcontactperson": {"name": "ODSMedicalCONTACTPERSON", "type": "TStringField"}, "odsmedicalmeds_id": {"name": "ODSMedicalMEDS_ID", "type": "TFloatField"}, "odsmedicalmedp_id": {"name": "ODSMedicalMEDP_ID", "type": "TFloatField"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "menuitem1": {"name": "MenuItem1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "policy1": {"name": "Policy1", "type": "TMenuItem"}, "odscontracts": {"name": "ODSContracts", "type": "TOracleDataSet"}, "odscontractsid": {"name": "ODSContractsID", "type": "TFloatField"}, "odscontractstype_id": {"name": "ODSContractsTYPE_ID", "type": "TFloatField"}, "odscontractsblank_id": {"name": "ODSContractsBLANK_ID", "type": "TFloatField"}, "odscontractssugg_id": {"name": "ODSContractsSUGG_ID", "type": "TFloatField"}, "odscontractspolicy_id": {"name": "ODSContractsPOLICY_ID", "type": "TFloatField"}, "odscontractsins_date": {"name": "ODSContractsINS_DATE", "type": "TDateTimeField"}, "odscontractsbegin_date": {"name": "ODSContractsBEGIN_DATE", "type": "TDateTimeField"}, "odscontractsend_date": {"name": "ODSContractsEND_DATE", "type": "TDateTimeField"}, "odscontractsvalute_id": {"name": "ODSContractsVALUTE_ID", "type": "TFloatField"}, "odscontractsclose_prefix": {"name": "ODSContractsCLOSE_PREFIX", "type": "TIntegerField"}, "odscontractskli_id": {"name": "ODSContractsKLI_ID", "type": "TFloatField"}, "odscontractsloanacc_id": {"name": "ODSContractsLOANACC_ID", "type": "TFloatField"}, "odscontractscurracc_id": {"name": "ODSContractsCURRACC_ID", "type": "TFloatField"}, "odscontractspolicy_num": {"name": "ODSContractsPOLICY_NUM", "type": "TStringField"}, "odscontractsammount": {"name": "ODSContractsAMMOUNT", "type": "TFloatField"}, "dscontracts": {"name": "DSContracts", "type": "TDataSource"}, "odsmedicalclose_prefix": {"name": "ODSMedicalCLOSE_PREFIX", "type": "TIntegerField"}, "pins_medical": {"name": "PINS_Medical", "type": "TOraclePackage"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}, "fevents": {"name": "FEvents", "type": "IfmMedicalEvents"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    U.var_("fmMedical", null, "TfmMedical");
  });
  U.method("TfmMedical", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TfmMedical", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TfmMedical", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TfmMedical", "Initialize", null, arguments);
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
  U.method("TfmMedical", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TfmMedical", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedical", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedical", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedical", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedical", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedical", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedical", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TfmMedical", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedical", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMedical", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMedical", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TfmMedical", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TfmMedical", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TfmMedical", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TfmMedical", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMedical", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMedical", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMedical", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TfmMedical", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TfmMedical", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMedical", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TfmMedical", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TfmMedical", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMedical", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TfmMedical", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TfmMedical", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TfmMedical", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t1 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t1); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TfmMedical", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmMedical", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "fmMedical", Self);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedical", "ShowBlank", async function ShowBlank(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"params": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["params"]);
  {
    const $t2 = (await $.v(C, "pmcObject"));
    await $.wset([$t2], "Result", (await $.wcall([$t2], "ShowModal", [(await $.wcall([$t2], "StringToGuid", ["{0B7E3E71-EE29-4EED-9D88-4BC424513DDC}"], C)), (await $.wv([$t2], "params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false))], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["params"], "kind": "function", "ptypes": ["TStringList"]});
  U.method("TfmMedical", "NewBlankExecute", async function NewBlankExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "params": null};
  await $.fixArgs(L0, ["sender"]);
  L0["params"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t3 = await $.iset((await $.mv(L0["params"], "Values")), ["Mod"], "Insert"); if ($t3 !== undefined) { await $.mset(L0["params"], "Values", $t3); } }
  { const $t4 = await $.iset((await $.mv(L0["params"], "Values")), ["KLI_ID"], "-1"); if ($t4 !== undefined) { await $.mset(L0["params"], "Values", $t4); } }
  if ($.truthy($.eq((await $.call(C, "ShowBlank", [L0["params"]])), (await $.v(C, "mrOk"))))) {
    await $.mcall((await $.v(C, "ODSMedical")), "Refresh", []);
  }
  await $.mcall(L0["params"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedical", "EditBlankExecute", async function EditBlankExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "params": null};
  await $.fixArgs(L0, ["sender"]);
  L0["params"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t5 = await $.iset((await $.mv(L0["params"], "Values")), ["Mod"], "Edit"); if ($t5 !== undefined) { await $.mset(L0["params"], "Values", $t5); } }
  { const $t6 = await $.iset((await $.mv(L0["params"], "Values")), ["ID"], (await $.call(C, "VarToStr", [(await $.mv((await $.v(C, "ODSMedicalID")), "Value"))]))); if ($t6 !== undefined) { await $.mset(L0["params"], "Values", $t6); } }
  { const $t7 = await $.iset((await $.mv(L0["params"], "Values")), ["KLI_ID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSMedicalKLI_ID")), "Value"))]))); if ($t7 !== undefined) { await $.mset(L0["params"], "Values", $t7); } }
  if ($.truthy($.eq((await $.call(C, "ShowBlank", [L0["params"]])), (await $.v(C, "mrOk"))))) {
    await $.mcall((await $.v(C, "ODSMedical")), "RefreshRecord", []);
  }
  await $.mcall(L0["params"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedical", "RefreshExecute", async function RefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.v(C, "ODSMedical"));
    await $.stmt($.wcall([$t8], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedical", "DelBlankExecute", async function DelBlankExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["id"] = (await $.mv((await $.v(C, "ODSMedicalID")), "Value"));
  await $.stmt((await $.mcall((await $.v(C, "PInS_Medical")), "CallProcedure", ["delete_medicalinfo", ["v_id", L0["id"]]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedical", "ShowSuggestion", async function ShowSuggestion(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"params": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["params"]);
  {
    const $t9 = (await $.v(C, "pmcObject"));
    await $.wset([$t9], "Result", (await $.wcall([$t9], "ShowModal", [(await $.wcall([$t9], "StringToGuid", ["{8488AAD4-B4AC-42D2-B3F4-53A042977147}"], C)), (await $.wv([$t9], "params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false))], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["params"], "kind": "function", "ptypes": ["TStringList"]});
  U.method("TfmMedical", "CallSuggestionExecute", async function CallSuggestionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "params": null};
  await $.fixArgs(L0, ["sender"]);
  L0["params"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  try {
    if ($.truthy((await $.mv((await $.v(C, "ODSMedical")), "IsEmpty")))) {
      throw $.raise((await $.mcall((await $.v(C, "TMEDError")), "Create", ["goto"])));
    }
    { const $t10 = await $.iset((await $.mv(L0["params"], "Values")), ["MED_ID"], (await $.call(C, "VarToStr", [(await $.mv((await $.v(C, "ODSMedicalID")), "Value"))]))); if ($t10 !== undefined) { await $.mset(L0["params"], "Values", $t10); } }
    { const $t11 = await $.iset((await $.mv(L0["params"], "Values")), ["KLI_ID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSMedicalKLI_ID")), "Value"))]))); if ($t11 !== undefined) { await $.mset(L0["params"], "Values", $t11); } }
    await $.stmt((await $.call(C, "ShowSuggestion", [L0["params"]])));
  } finally {
    await $.mcall(L0["params"], "Free", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedical", "ShowPolicy", async function ShowPolicy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"params": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["params"]);
  {
    const $t12 = (await $.v(C, "pmcObject"));
    await $.wset([$t12], "Result", (await $.wcall([$t12], "ShowModal", [(await $.wcall([$t12], "StringToGuid", ["{6730B53F-5460-40A6-8554-F904B6690915}"], C)), (await $.wv([$t12], "params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false))], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["params"], "kind": "function", "ptypes": ["TStringList"]});
  U.method("TfmMedical", "CallPolicyExecute", async function CallPolicyExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "params": null};
  await $.fixArgs(L0, ["sender"]);
  L0["params"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  try {
    if ($.truthy($.eq((await $.mv((await $.v(C, "ODSMedicalMEDS_ID")), "Value")), 0))) {
      throw $.raise((await $.mcall((await $.v(C, "TMEDError")), "Create", ["goto"])));
    }
    { const $t13 = await $.iset((await $.mv(L0["params"], "Values")), ["MEDS_ID"], (await $.call(C, "VarToStr", [(await $.mv((await $.v(C, "ODSMedicalMEDS_ID")), "Value"))]))); if ($t13 !== undefined) { await $.mset(L0["params"], "Values", $t13); } }
    await $.stmt((await $.call(C, "ShowPolicy", [L0["params"]])));
  } finally {
    await $.mcall(L0["params"], "Free", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedical", "MenuItem1DrawItem", async function MenuItem1DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t14 = L0["acanvas"];
    const $t15 = (await $.wv([$t14], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t16 = (await $.wv([$t14, $t15], "Font", C, false));
      await $.wset([$t14, $t15, $t16], "Name", "Azl Sans Serif", C);
      await $.wset([$t14, $t15, $t16], "Charset", (await $.wv([$t14, $t15, $t16], "DEFAULT_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t14, $t15, $t16], "Default", C, false)))) {
        await $.wset([$t14, $t15, $t16], "Style", [(await $.wv([$t14, $t15, $t16], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t14, $t15], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t14, $t15], "Pen", C, false)), "Color", (await $.wv([$t14, $t15], "clBlack", C, false)));
      await $.wset([$t14, $t15], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t14, $t15], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t14, $t15], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t14, $t15], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t14, $t15], "MoveTo", [(await $.mv((await $.wv([$t14, $t15], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t14, $t15], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t14, $t15], "LineTo", [(await $.mv((await $.wv([$t14, $t15], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t14, $t15], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t14, $t15], "inc", [$.ref(async () => (await $.wv([$t14, $t15], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t17) => { await $.wset([$t14, $t15], "LineBottom", $t17, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t14, $t15], "Pen", C, false)), "Color", (await $.wv([$t14, $t15], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t14, $t15], "MoveTo", [(await $.mv((await $.wv([$t14, $t15], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t14, $t15], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t14, $t15], "LineTo", [(await $.mv((await $.wv([$t14, $t15], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t14, $t15], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t14, $t15], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t14, $t15], "Brush", C, false)), "Color", (await $.wv([$t14, $t15], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t14, $t15], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t14, $t15], "Font", C, false)), "Color", (await $.wv([$t14, $t15], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t14, $t15], "Font", C, false)), "Color", (await $.wv([$t14, $t15], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t14, $t15], "Brush", C, false)), "Color", (await $.wv([$t14, $t15], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t14, $t15], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t14, $t15], "Font", C, false)), "Color", (await $.wv([$t14, $t15], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t14, $t15], "Font", C, false)), "Color", (await $.wv([$t14, $t15], "clGrayText", C, false)));
        }
      }
      await $.wset([$t14, $t15], "Bar", (await $.wv([$t14, $t15], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t14, $t15], "FillRect", [(await $.wv([$t14, $t15], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t14, $t15], "TextOut", [$.add((await $.mv((await $.wv([$t14, $t15], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 20), $.add((await $.mv((await $.wv([$t14, $t15], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t14, $t15], "Caption", C, false))], C)));
    }
    await $.wset([$t14, $t15], "SText", (await $.wcall([$t14, $t15], "ShortCutToText", [(await $.wv([$t14, $t15], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t14, $t15], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t14, $t15], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t14, $t15], "TextWidth", [(await $.wv([$t14, $t15], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t14, $t15], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t14, $t15], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t14, $t15], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t18 = (await $.wv([$t14, $t15], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t14, $t15, $t18], "Assigned", [(await $.wv([$t14, $t15, $t18], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t14, $t15, $t18], "Checked", C, false)))) {
            await $.mset((await $.wv([$t14, $t15, $t18], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t14, $t15, $t18], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t14, $t15, $t18], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t14, $t15, $t18], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t14, $t15, $t18], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t14, $t15, $t18], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t14, $t15, $t18], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t14, $t15, $t18], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t14, $t15, $t18], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t14, $t15, $t18], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t14, $t15, $t18], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t14, $t15, $t18], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t14, $t15, $t18], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t14, $t15, $t18], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t19) => { await $.mset((await $.wv([$t14, $t15, $t18], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t19); }), 2], C)));
            await $.stmt((await $.wcall([$t14, $t15, $t18], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t14, $t15, $t18], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t20) => { await $.mset((await $.wv([$t14, $t15, $t18], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t20); }), 2], C)));
            await $.stmt((await $.wcall([$t14, $t15, $t18], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t14, $t15, $t18], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t21) => { await $.mset((await $.wv([$t14, $t15, $t18], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t21); }), 2], C)));
            await $.stmt((await $.wcall([$t14, $t15, $t18], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t14, $t15, $t18], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t22) => { await $.mset((await $.wv([$t14, $t15, $t18], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t22); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t14, $t15, $t18], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t14, $t15, $t18], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t14, $t15, $t18], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t14, $t15, $t18], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t14, $t15, $t18], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t14, $t15, $t18], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t23) => { await $.mset((await $.wv([$t14, $t15, $t18], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t23); }), 1], C)));
            await $.stmt((await $.wcall([$t14, $t15, $t18], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t14, $t15, $t18], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t24) => { await $.mset((await $.wv([$t14, $t15, $t18], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t24); }), 1], C)));
            await $.stmt((await $.wcall([$t14, $t15, $t18], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t14, $t15, $t18], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t25) => { await $.mset((await $.wv([$t14, $t15, $t18], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t25); }), 1], C)));
            await $.stmt((await $.wcall([$t14, $t15, $t18], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t14, $t15, $t18], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t26) => { await $.mset((await $.wv([$t14, $t15, $t18], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t26); }), 1], C)));
            if ($.truthy((await $.wv([$t14, $t15, $t18], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t14, $t15, $t18], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t14, $t15, $t18], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t14, $t15, $t18], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t14, $t15, $t18], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t14, $t15, $t18], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t14, $t15, $t18], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t14, $t15, $t18], "Images", C, false)), "Draw", [(await $.wv([$t14, $t15, $t18], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t14, $t15, $t18], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t14, $t15, $t18], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t14, $t15, $t18], "ImageIndex", C, false)), (await $.wv([$t14, $t15, $t18], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TfmMedical", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "EditBlank")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmMedical", "ODSMedicalAfterScroll", async function ODSMedicalAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.v(C, "CallPolicy")), "Enabled", $.gt((await $.mv((await $.v(C, "ODSMedicalMEDS_ID")), "Value")), 0));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TfmMedical", "ODSMedicalAfterFetchRecord", async function ODSMedicalAfterFetchRecord(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "filteraccept": $.copyArg(p1), "action": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "filteraccept"]);
  await $.mset((await $.v(C, "CallPolicy")), "Enabled", $.gt((await $.mv((await $.v(C, "ODSMedicalMEDS_ID")), "Value")), 0));
  return L0.result;
}, {"params": ["Sender", "FilterAccept", "Action"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Boolean", "TAfterFetchRecordAction"]});
  return U;
}
