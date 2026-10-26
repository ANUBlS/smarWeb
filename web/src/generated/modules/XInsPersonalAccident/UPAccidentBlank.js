// Generated from UPAccidentBlank.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UPAccidentBlank", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ActiveX", "AxCtrls", "PPAccidentBlank_TLB", "StdVcl", "StdCtrls", "DBCtrls", "Mask", "ExtCtrls", "ComCtrls", "Buttons", "Db", "OracleData", "SBPlgAx50_TLB", "Oracle", "INSWordExporter", "PlgModalContainer", "ComObj", "sboapiDataModuleImpl", "ComServ", "UPAccidentRisks"]);
  const C = [U];
  U.defClass("TPAccidentBlank", "TActiveForm", {"accidentpagecontrol": {"name": "AccidentPageControl", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "inslookupcombobox": {"name": "InsLookupComboBox", "type": "TDBLookupComboBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "label6": {"name": "Label6", "type": "TLabel"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "label7": {"name": "Label7", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "label25": {"name": "Label25", "type": "TLabel"}, "label26": {"name": "Label26", "type": "TLabel"}, "label27": {"name": "Label27", "type": "TLabel"}, "label28": {"name": "Label28", "type": "TLabel"}, "label31": {"name": "Label31", "type": "TLabel"}, "label32": {"name": "Label32", "type": "TLabel"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "label35": {"name": "Label35", "type": "TLabel"}, "label36": {"name": "Label36", "type": "TLabel"}, "label40": {"name": "Label40", "type": "TLabel"}, "pluedit": {"name": "PLUEdit", "type": "TDBEdit"}, "label38": {"name": "Label38", "type": "TLabel"}, "emeedit": {"name": "EMEEdit", "type": "TDBEdit"}, "label41": {"name": "Label41", "type": "TLabel"}, "hcedit": {"name": "HCEdit", "type": "TDBEdit"}, "label43": {"name": "Label43", "type": "TLabel"}, "hsedit": {"name": "HSEdit", "type": "TDBEdit"}, "label45": {"name": "Label45", "type": "TLabel"}, "brbedit": {"name": "BrBEdit", "type": "TDBEdit"}, "label49": {"name": "Label49", "type": "TLabel"}, "buedit": {"name": "BuEdit", "type": "TDBEdit"}, "label51": {"name": "Label51", "type": "TLabel"}, "ttdedit": {"name": "TTDEdit", "type": "TDBEdit"}, "label52": {"name": "Label52", "type": "TLabel"}, "label37": {"name": "Label37", "type": "TLabel"}, "tabsheet4": {"name": "TabSheet4", "type": "TTabSheet"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "label39": {"name": "Label39", "type": "TLabel"}, "label46": {"name": "Label46", "type": "TLabel"}, "label50": {"name": "Label50", "type": "TLabel"}, "label53": {"name": "Label53", "type": "TLabel"}, "label54": {"name": "Label54", "type": "TLabel"}, "dbedit20": {"name": "DBEdit20", "type": "TDBEdit"}, "dbedit21": {"name": "DBEdit21", "type": "TDBEdit"}, "datetp1": {"name": "DateTP1", "type": "TDateTimePicker"}, "datetp2": {"name": "DateTP2", "type": "TDateTimePicker"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "memrisk": {"name": "memRisk", "type": "TMemo"}, "btrisksadd": {"name": "btRisksAdd", "type": "TBitBtn"}, "cbrisks": {"name": "cbRisks", "type": "TCheckBox"}, "dblookupcomboboxrisk": {"name": "DBLookupComboBoxRisk", "type": "TDBLookupComboBox"}, "odspaccidentsource": {"name": "ODSPAccidentSource", "type": "TDataSource"}, "odscustomerssource": {"name": "ODSCustomersSource", "type": "TDataSource"}, "odspaccident": {"name": "ODSPAccident", "type": "TOracleDataSet"}, "odscustomers": {"name": "ODSCustomers", "type": "TOracleDataSet"}, "odspaccidentid": {"name": "ODSPAccidentID", "type": "TFloatField"}, "odspaccidentkli_id": {"name": "ODSPAccidentKLI_ID", "type": "TFloatField"}, "odspaccidentcontact_person": {"name": "ODSPAccidentCONTACT_PERSON", "type": "TStringField"}, "odspaccidentbanking_details": {"name": "ODSPAccidentBANKING_DETAILS", "type": "TStringField"}, "odspaccidenttotalemp_number": {"name": "ODSPAccidentTOTALEMP_NUMBER", "type": "TFloatField"}, "odspaccidentaog": {"name": "ODSPAccidentAOG", "type": "TFloatField"}, "odspaccidentaop": {"name": "ODSPAccidentAOP", "type": "TFloatField"}, "odspaccidentsmg": {"name": "ODSPAccidentSMG", "type": "TFloatField"}, "odspaccidentsmp": {"name": "ODSPAccidentSMP", "type": "TFloatField"}, "odspaccidentbcg": {"name": "ODSPAccidentBCG", "type": "TFloatField"}, "odspaccidentbcp": {"name": "ODSPAccidentBCP", "type": "TFloatField"}, "odspaccidentdecired_amount": {"name": "ODSPAccidentDECIRED_AMOUNT", "type": "TFloatField"}, "odspaccidentpd": {"name": "ODSPAccidentPD", "type": "TFloatField"}, "odspaccidentplu": {"name": "ODSPAccidentPLU", "type": "TFloatField"}, "odspaccidenteme": {"name": "ODSPAccidentEME", "type": "TFloatField"}, "odspaccidenthc": {"name": "ODSPAccidentHC", "type": "TFloatField"}, "odspaccidenths": {"name": "ODSPAccidentHS", "type": "TFloatField"}, "odspaccidentbrb": {"name": "ODSPAccidentBRB", "type": "TFloatField"}, "odspaccidentburn": {"name": "ODSPAccidentBURN", "type": "TFloatField"}, "odspaccidentttd": {"name": "ODSPAccidentTTD", "type": "TFloatField"}, "odspaccidentnot_coveredperiod": {"name": "ODSPAccidentNOT_COVEREDPERIOD", "type": "TStringField"}, "odspaccidentoutsideofaze": {"name": "ODSPAccidentOUTSIDEOFAZE", "type": "TStringField"}, "odspaccidentrenewal": {"name": "ODSPAccidentRENEWAL", "type": "TStringField"}, "odspaccidenttravels": {"name": "ODSPAccidentTRAVELS", "type": "TStringField"}, "odspaccidenttypeid": {"name": "ODSPAccidentTYPEID", "type": "TIntegerField"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "label55": {"name": "Label55", "type": "TLabel"}, "pdedit": {"name": "PDEdit", "type": "TDBEdit"}, "label56": {"name": "Label56", "type": "TLabel"}, "odspaccidentriskid": {"name": "ODSPAccidentRISKID", "type": "TFloatField"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "dbedit27": {"name": "DBEdit27", "type": "TDBEdit"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "label20": {"name": "Label20", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "label22": {"name": "Label22", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "label24": {"name": "Label24", "type": "TLabel"}, "dbedit29": {"name": "DBEdit29", "type": "TDBEdit"}, "dbedit31": {"name": "DBEdit31", "type": "TDBEdit"}, "dbedit33": {"name": "DBEdit33", "type": "TDBEdit"}, "dbedit32": {"name": "DBEdit32", "type": "TDBEdit"}, "dbedit30": {"name": "DBEdit30", "type": "TDBEdit"}, "dbedit28": {"name": "DBEdit28", "type": "TDBEdit"}, "label29": {"name": "Label29", "type": "TLabel"}, "label30": {"name": "Label30", "type": "TLabel"}, "label33": {"name": "Label33", "type": "TLabel"}, "label34": {"name": "Label34", "type": "TLabel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "back": {"name": "Back", "type": "TBitBtn"}, "next": {"name": "Next", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "commit": {"name": "Commit", "type": "TBitBtn"}, "report": {"name": "Report", "type": "TBitBtn"}, "suggest": {"name": "Suggest", "type": "TBitBtn"}, "btapply": {"name": "btApply", "type": "TBitBtn"}, "pins_paccident": {"name": "PINS_PACCIDENT", "type": "TOraclePackage"}, "odspaccidentnot_covereperiod1": {"name": "ODSPAccidentNOT_COVEREPERIOD1", "type": "TStringField"}, "adedit": {"name": "ADEdit", "type": "TDBEdit"}, "odspaccidentad": {"name": "ODSPAccidentAD", "type": "TFloatField"}, "odscustomersid": {"name": "ODSCustomersID", "type": "TIntegerField"}, "odscustomersname": {"name": "ODSCustomersNAME", "type": "TStringField"}, "odscustomersaddress": {"name": "ODSCustomersADDRESS", "type": "TStringField"}, "odscustomersmobilephone": {"name": "ODSCustomersMOBILEPHONE", "type": "TStringField"}, "odscustomersfax": {"name": "ODSCustomersFAX", "type": "TStringField"}, "risksdata": {"name": "RisksData", "type": "TDataSource"}, "risks": {"name": "Risks", "type": "TOracleDataSet"}, "risksid": {"name": "RisksID", "type": "TFloatField"}, "risksname": {"name": "RisksNAME", "type": "TStringField"}, "odsrisktype": {"name": "ODSRiskType", "type": "TOracleDataSet"}, "odsrisktypeid": {"name": "ODSRiskTypeID", "type": "TFloatField"}, "odsrisktypename": {"name": "ODSRiskTypeNAME", "type": "TStringField"}, "risktypedata": {"name": "RiskTypeData", "type": "TDataSource"}, "aogedit": {"name": "AOGEdit", "type": "TDBEdit"}, "aopedit": {"name": "AOPEdit", "type": "TDBEdit"}, "smgedit": {"name": "SMGEdit", "type": "TDBEdit"}, "bcgedit": {"name": "BCGEdit", "type": "TDBEdit"}, "smpedit": {"name": "SMPEdit", "type": "TDBEdit"}, "decirededit": {"name": "DeciredEdit", "type": "TDBEdit"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "odspaccidentmaxweeks": {"name": "ODSPAccidentMAXWEEKS", "type": "TIntegerField"}, "odspaccidentr": {"name": "ODSPAccidentR", "type": "TOracleDataSet"}, "odspaccidentrname": {"name": "ODSPAccidentRNAME", "type": "TStringField"}, "odspaccidentraddress": {"name": "ODSPAccidentRADDRESS", "type": "TStringField"}, "odspaccidentrphone": {"name": "ODSPAccidentRPHONE", "type": "TStringField"}, "odspaccidentrfax": {"name": "ODSPAccidentRFAX", "type": "TStringField"}, "odspaccidentrcontact_person": {"name": "ODSPAccidentRCONTACT_PERSON", "type": "TStringField"}, "odspaccidentrbanking_details": {"name": "ODSPAccidentRBANKING_DETAILS", "type": "TStringField"}, "odspaccidentrtotalemp_number": {"name": "ODSPAccidentRTOTALEMP_NUMBER", "type": "TFloatField"}, "odspaccidentraog": {"name": "ODSPAccidentRAOG", "type": "TFloatField"}, "odspaccidentraop": {"name": "ODSPAccidentRAOP", "type": "TFloatField"}, "odspaccidentrsmg": {"name": "ODSPAccidentRSMG", "type": "TFloatField"}, "odspaccidentrsmp": {"name": "ODSPAccidentRSMP", "type": "TFloatField"}, "odspaccidentrbcg": {"name": "ODSPAccidentRBCG", "type": "TFloatField"}, "odspaccidentrbcp": {"name": "ODSPAccidentRBCP", "type": "TFloatField"}, "odspaccidentrdecired_amount": {"name": "ODSPAccidentRDECIRED_AMOUNT", "type": "TFloatField"}, "odspaccidentrad": {"name": "ODSPAccidentRAD", "type": "TFloatField"}, "odspaccidentrpd": {"name": "ODSPAccidentRPD", "type": "TFloatField"}, "odspaccidentrplu": {"name": "ODSPAccidentRPLU", "type": "TFloatField"}, "odspaccidentreme": {"name": "ODSPAccidentREME", "type": "TFloatField"}, "odspaccidentrhc": {"name": "ODSPAccidentRHC", "type": "TFloatField"}, "odspaccidentrhs": {"name": "ODSPAccidentRHS", "type": "TFloatField"}, "odspaccidentrbrb": {"name": "ODSPAccidentRBRB", "type": "TFloatField"}, "odspaccidentrburn": {"name": "ODSPAccidentRBURN", "type": "TFloatField"}, "odspaccidentrttd": {"name": "ODSPAccidentRTTD", "type": "TFloatField"}, "odspaccidentrnot_coveredperiod": {"name": "ODSPAccidentRNOT_COVEREDPERIOD", "type": "TStringField"}, "odspaccidentroutsideofaze": {"name": "ODSPAccidentROUTSIDEOFAZE", "type": "TStringField"}, "odspaccidentrrenewal": {"name": "ODSPAccidentRRENEWAL", "type": "TStringField"}, "odspaccidentrtravels": {"name": "ODSPAccidentRTRAVELS", "type": "TStringField"}, "odspaccidentrtypeid": {"name": "ODSPAccidentRTYPEID", "type": "TIntegerField"}, "odspaccidentrriskid": {"name": "ODSPAccidentRRISKID", "type": "TFloatField"}, "odspaccidentrnot_covereperiod1": {"name": "ODSPAccidentRNOT_COVEREPERIOD1", "type": "TStringField"}, "odspaccidentrmaxweeks": {"name": "ODSPAccidentRMAXWEEKS", "type": "TIntegerField"}, "accidentreportsource": {"name": "AccidentReportSource", "type": "TDataSource"}, "accidentexporter": {"name": "AccidentExporter", "type": "TINSWordExporter"}, "label57": {"name": "Label57", "type": "TLabel"}, "label58": {"name": "Label58", "type": "TLabel"}, "label59": {"name": "Label59", "type": "TLabel"}, "label60": {"name": "Label60", "type": "TLabel"}, "label61": {"name": "Label61", "type": "TLabel"}, "label62": {"name": "Label62", "type": "TLabel"}, "label63": {"name": "Label63", "type": "TLabel"}, "label64": {"name": "Label64", "type": "TLabel"}, "label65": {"name": "Label65", "type": "TLabel"}, "label66": {"name": "Label66", "type": "TLabel"}, "odsbeneficiary": {"name": "ODSBeneficiary", "type": "TOracleDataSet"}, "odsbeneficiaryid": {"name": "ODSBeneficiaryID", "type": "TFloatField"}, "odsbeneficiaryname": {"name": "ODSBeneficiaryNAME", "type": "TStringField"}, "odsbeneficiaryaddress": {"name": "ODSBeneficiaryADDRESS", "type": "TStringField"}, "odsbeneficiaryphone": {"name": "ODSBeneficiaryPHONE", "type": "TStringField"}, "odsbeneficiarybanking_details": {"name": "ODSBeneficiaryBANKING_DETAILS", "type": "TStringField"}, "beneficiarysource": {"name": "BeneficiarySource", "type": "TDataSource"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "odspaccidentprofitid": {"name": "ODSPAccidentPROFITID", "type": "TFloatField"}, "label8": {"name": "Label8", "type": "TLabel"}, "label47": {"name": "Label47", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "label9": {"name": "Label9", "type": "TLabel"}, "lbbegindate": {"name": "lbBeginDate", "type": "TLabel"}, "edbegindate": {"name": "edBeginDate", "type": "TDateTimePicker"}, "lbenddate": {"name": "lbEndDate", "type": "TLabel"}, "edenddate": {"name": "edEndDate", "type": "TDateTimePicker"}, "opcommon": {"name": "OPCOMMON", "type": "TOraclePackage"}, "odscontracts": {"name": "ODSContracts", "type": "TOracleDataSet"}, "odscontractsid": {"name": "ODSContractsID", "type": "TFloatField"}, "odscontractstype_id": {"name": "ODSContractsTYPE_ID", "type": "TFloatField"}, "odscontractsblank_id": {"name": "ODSContractsBLANK_ID", "type": "TFloatField"}, "odscontractssugg_id": {"name": "ODSContractsSUGG_ID", "type": "TFloatField"}, "odscontractspolicy_id": {"name": "ODSContractsPOLICY_ID", "type": "TFloatField"}, "odscontractsins_date": {"name": "ODSContractsINS_DATE", "type": "TDateTimeField"}, "odscontractsbegin_date": {"name": "ODSContractsBEGIN_DATE", "type": "TDateTimeField"}, "odscontractsend_date": {"name": "ODSContractsEND_DATE", "type": "TDateTimeField"}, "odscontractsvalute_id": {"name": "ODSContractsVALUTE_ID", "type": "TFloatField"}, "odscontractsammount": {"name": "ODSContractsAMMOUNT", "type": "TFloatField"}, "odscontractsclose_prefix": {"name": "ODSContractsCLOSE_PREFIX", "type": "TIntegerField"}, "odscontractskli_id": {"name": "ODSContractsKLI_ID", "type": "TFloatField"}, "odscontractsloanacc_id": {"name": "ODSContractsLOANACC_ID", "type": "TFloatField"}, "odscontractscurracc_id": {"name": "ODSContractsCURRACC_ID", "type": "TFloatField"}, "odscontractspolicy_num": {"name": "ODSContractsPOLICY_NUM", "type": "TStringField"}, "dscontracts": {"name": "DSContracts", "type": "TDataSource"}, "suggestcontainer": {"name": "SuggestContainer", "type": "TPlgModalContainer"}, "odspaccsuggest": {"name": "ODSPAccSuggest", "type": "TOracleDataSet"}, "odspaccsuggestid": {"name": "ODSPAccSuggestID", "type": "TFloatField"}, "odspaccsuggestpaid": {"name": "ODSPAccSuggestPAID", "type": "TFloatField"}, "odspaccsuggestcndt_id": {"name": "ODSPAccSuggestCNDT_ID", "type": "TFloatField"}, "odspaccsuggestinsurancesum": {"name": "ODSPAccSuggestINSURANCESUM", "type": "TFloatField"}, "odspaccsuggestinsurancetime": {"name": "ODSPAccSuggestINSURANCETIME", "type": "TDateTimeField"}, "odspaccsuggestmedicalcost": {"name": "ODSPAccSuggestMEDICALCOST", "type": "TFloatField"}, "odspaccsuggestall_insammount": {"name": "ODSPAccSuggestALL_INSAMMOUNT", "type": "TFloatField"}, "odspaccsuggestgeo": {"name": "ODSPAccSuggestGEO", "type": "TStringField"}, "paccsugestsource": {"name": "PAccSugestSource", "type": "TDataSource"}, "odspaccidentagentid": {"name": "ODSPAccidentAGENTID", "type": "TFloatField"}, "label42": {"name": "Label42", "type": "TLabel"}, "agentlookupcombobox": {"name": "AgentLookupComboBox", "type": "TDBLookupComboBox"}, "agentsource": {"name": "AgentSource", "type": "TDataSource"}, "odsagent": {"name": "ODSAgent", "type": "TOracleDataSet"}, "odsagentid": {"name": "ODSAgentID", "type": "TFloatField"}, "odsagentname": {"name": "ODSAgentNAME", "type": "TStringField"}, "monthedit": {"name": "MonthEdit", "type": "TEdit"}, "id": {"name": "id", "type": "Integer"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}, "fevents": {"name": "FEvents", "type": "IPAccidentBlankEvents"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    U.const("WM_ModalResult", $.add((await $.v(C, "WM_USER")), 139));
    U.var_("PAccidentBlank", null, "TPAccidentBlank");
  });
  U.method("TPAccidentBlank", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TPAccidentBlank", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TPAccidentBlank", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TPAccidentBlank", "Initialize", null, arguments);
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
  U.method("TPAccidentBlank", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TPAccidentBlank", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentBlank", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentBlank", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentBlank", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentBlank", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentBlank", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentBlank", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TPAccidentBlank", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentBlank", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPAccidentBlank", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPAccidentBlank", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TPAccidentBlank", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TPAccidentBlank", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TPAccidentBlank", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TPAccidentBlank", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPAccidentBlank", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPAccidentBlank", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPAccidentBlank", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TPAccidentBlank", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TPAccidentBlank", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPAccidentBlank", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TPAccidentBlank", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TPAccidentBlank", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPAccidentBlank", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPAccidentBlank", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TPAccidentBlank", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TPAccidentBlank", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t1 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t1); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TPAccidentBlank", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  if ($.truthy($.eq((await $.call(C, "Get_Params", ["Mod"])), "Insert"))) {
    if ($.truthy($.not((await $.mv((await $.v(C, "ODSPAccident")), "Active"))))) {
      await $.mcall((await $.v(C, "ODSPAccident")), "Open", []);
    }
    await $.mcall((await $.v(C, "ODSPAccident")), "Insert", []);
    await $.mset((await $.v(C, "edBeginDate")), "DateTime", (await $.v(C, "Now")));
    await $.mset((await $.v(C, "edEndDate")), "DateTime", (await $.v(C, "Now")));
    await $.mset((await $.v(C, "InsLookupComboBox")), "KeyValue", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["KLI_ID"]))])));
    await $.stmt($.call(C, "MonthPeriod", []));
  }
  if ($.truthy($.eq((await $.call(C, "Get_Params", ["Mod"])), "Edit"))) {
    await $.mset((await $.v(C, "Suggest")), "Enabled", true);
    await $.mset((await $.v(C, "Report")), "Enabled", true);
    await $.mcall((await $.v(C, "ODSPAccident")), "Close", []);
    await $.stmt((await $.mcall((await $.v(C, "ODSPAccident")), "SetVariable", ["id", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["ID"]))]))])));
    await $.mcall((await $.v(C, "ODSPAccident")), "Open", []);
    await $.mcall((await $.v(C, "ODSContracts")), "Close", []);
    await $.stmt((await $.mcall((await $.v(C, "ODSContracts")), "SetVariable", ["blankid", (await $.mv((await $.v(C, "ODSPAccidentID")), "value"))])));
    await $.mcall((await $.v(C, "ODSContracts")), "Open", []);
    await $.mset((await $.v(C, "edBeginDate")), "DateTime", (await $.mv((await $.v(C, "ODSContractsbegin_date")), "AsDateTime")));
    await $.mset((await $.v(C, "edEndDate")), "DateTime", (await $.mv((await $.v(C, "ODSContractsEnd_date")), "AsDateTime")));
    await $.stmt($.call(C, "LoadData", []));
    await $.stmt($.call(C, "MonthPeriod", []));
    await $.mcall((await $.v(C, "ODSPAccident")), "Edit", []);
  }
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "PAccidentBlank", Self);
  await $.set(C, "FParams", (await $.mv((await $.v(C, "TStringList")), "Create")));
  await $.mset((await $.v(C, "Back")), "Enabled", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentBlank", "btRisksAddClick", async function btRisksAddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ODSRisktype")), "Open", []);
  {
    const $t2 = (await $.mcall((await $.v(C, "TfmRiskTypes")), "Create", [Self]));
    await $.stmt($.wcall([$t2], "ShowModal", [], C));
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "memRisk")), "Text")), ""))) {
    await $.mset((await $.v(C, "cbRisks")), "State", (await $.v(C, "cbChecked")));
  }
  await $.mcall((await $.v(C, "ODSRisktype")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentBlank", "BackClick", async function BackClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "AccidentPageControl"));
    await $.wset([$t3], "ActivePageIndex", $.sub((await $.wv([$t3], "ActivePageIndex", C, false)), 1), C);
    if ($.truthy($.eq((await $.wv([$t3], "ActivePageIndex", C, false)), 0))) {
      await $.mset((await $.wv([$t3], "Back", C, false)), "Enabled", (await $.wv([$t3], "false", C, false)));
    }
    await $.mset((await $.wv([$t3], "Next", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentBlank", "NextClick", async function NextClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "AccidentPageControl")), "ActivePageIndex", $.add((await $.mv((await $.v(C, "AccidentPageControl")), "ActivePageIndex")), 1));
  if ($.truthy($.eq((await $.mv((await $.v(C, "AccidentPageControl")), "ActivePageIndex")), $.sub((await $.mv((await $.v(C, "AccidentPageControl")), "PageCount")), 1)))) {
    await $.mset((await $.v(C, "Next")), "Enabled", false);
  }
  await $.mset((await $.v(C, "Back")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentBlank", "AccidentPageControlChange", async function AccidentPageControlChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "AccidentPageControl"));
    if ($.truthy($.ne((await $.wv([$t4], "ActivePageIndex", C, false)), $.sub((await $.wv([$t4], "PageCount", C, false)), 1)))) {
      await $.mset((await $.wv([$t4], "Next", C, false)), "Enabled", (await $.wv([$t4], "true", C, false)));
    } else {
      await $.mset((await $.wv([$t4], "Next", C, false)), "Enabled", (await $.wv([$t4], "false", C, false)));
    }
    if ($.truthy($.ne((await $.wv([$t4], "ActivepageIndex", C, false)), 0))) {
      await $.mset((await $.wv([$t4], "Back", C, false)), "Enabled", (await $.wv([$t4], "true", C, false)));
    } else {
      await $.mset((await $.wv([$t4], "Back", C, false)), "Enabled", (await $.wv([$t4], "false", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentBlank", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrCancel")), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentBlank", "DBEdit3KeyPress", async function DBEdit3KeyPress(Self, p0, p1) {
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
  U.method("TPAccidentBlank", "SaveData", async function SaveData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = false;
  if ($.truthy($.eq((await $.mv((await $.v(C, "cbRisks")), "State")), (await $.v(C, "cbChecked"))))) {
    {
      const $t7 = (await $.v(C, "Risks"));
      await $.stmt($.wcall([$t7], "Insert", [], C));
      await $.mset((await $.wcall([$t7], "FieldByName", ["name"], C)), "asString", (await $.mv((await $.wv([$t7], "memRisk", C, false)), "Text")));
      await $.stmt($.wcall([$t7], "Post", [], C));
      await $.stmt($.wcall([$t7], "RefreshRecord", [], C));
    }
  }
  if ($.truthy($.in_((await $.mv((await $.v(C, "ODSPAccident")), "State")), [(await $.v(C, "dsInsert"))]))) {
    await $.mset((await $.v(C, "ODSPAccidentKLI_ID")), "Value", (await $.mv((await $.v(C, "InsLookupComboBox")), "KeyValue")));
    await $.stmt((await $.mcall((await $.v(C, "OPCommon")), "CallIntegerFunction", ["newinsurance", [3, (await $.mv((await $.v(C, "ODSPAccidentID")), "Value")), (await $.mv((await $.v(C, "edBeginDate")), "DateTime")), (await $.mv((await $.v(C, "edEndDate")), "DateTime")), (await $.mv((await $.v(C, "ODSPAccidentKLI_ID")), "Value"))]])));
  }
  if ($.truthy($.in_((await $.mv((await $.v(C, "ODSPAccident")), "State")), [(await $.v(C, "dsEdit"))]))) {
    await $.stmt((await $.mcall((await $.v(C, "OPCommon")), "CallBooleanFunction", ["setblankdata", [3, (await $.mv((await $.v(C, "ODSPAccidentID")), "Value")), (await $.mv((await $.v(C, "edBeginDate")), "DateTime")), (await $.mv((await $.v(C, "edEndDate")), "DateTime")), (await $.mv((await $.v(C, "ODSPAccidentKLI_ID")), "Value"))]])));
  }
  if ($.truthy($.in_((await $.mv((await $.v(C, "ODSPAccident")), "State")), [(await $.v(C, "dsInsert")), (await $.v(C, "dsEdit"))]))) {
    await $.mset((await $.mcall((await $.v(C, "ODSPAccident")), "FieldByName", ["NOT_COVEREDPERIOD"])), "AsDateTime", (await $.mv((await $.v(C, "DateTP1")), "DateTime")));
    await $.mset((await $.mcall((await $.v(C, "ODSPAccident")), "FieldByName", ["NOT_COVEREPERIOD1"])), "AsDateTime", (await $.mv((await $.v(C, "DateTP2")), "DateTime")));
    await $.mcall((await $.v(C, "ODSPAccident")), "Post", []);
    await $.mcall((await $.v(C, "ODSPAccident")), "RefreshRecord", []);
  }
  L0["result"] = true;
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPAccidentBlank", "CommitClick", async function CommitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "SaveData")))) {
    await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrOk")), 0])));
  }
  await $.mset((await $.v(C, "AccidentPageControl")), "ActivePageIndex", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentBlank", "LoadData", async function LoadData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t8 = (await $.v(C, "ODSPAccident"));
    await $.mset((await $.wv([$t8], "DateTP1", C, false)), "DateTime", (await $.mv((await $.wcall([$t8], "FieldByName", ["NOT_COVEREDPERIOD"], C)), "AsDateTime")));
    await $.mset((await $.wv([$t8], "DateTP2", C, false)), "DateTime", (await $.mv((await $.wcall([$t8], "FieldByName", ["NOT_COVEREPERIOD1"], C)), "AsDateTime")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPAccidentBlank", "btApplyClick", async function btApplyClick(Self, p0) {
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
  U.method("TPAccidentBlank", "ReportClick", async function ReportClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "idr": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["idr"] = (await $.mv((await $.v(C, "ODSPAccidentID")), "Value"));
  await $.mcall((await $.v(C, "ODSPAccidentR")), "CloseAll", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSPAccidentR")), "SetVariable", ["id", L0["idr"]])));
  await $.mcall((await $.v(C, "ODSPAccidentR")), "Open", []);
  try {
    {
      const $t9 = (await $.v(C, "AccidentExporter"));
      await $.wset([$t9], "FileName", $.add((await $.wcall([$t9], "ExtractFilePath", [(await $.mv((await $.wv([$t9], "Application", C, false)), "ExeName"))], C)), "\\GPAccidentAppl.doc"), C);
      await $.stmt((await $.wcall([$t9], "Open", [(await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.mcall((await $.wv([$t9], "Risks", C, false)), "Locate", ["id", (await $.mv((await $.wv([$t9], "ODSPAccidentRRiskid", C, false)), "Value")), []])));
      if ($.truthy($.ne((await $.mv((await $.wv([$t9], "ODSPAccidentRRiskid", C, false)), "Value")), 0))) {
        await $.stmt((await $.wcall([$t9], "SetBookmark", ["RISKS", (await $.mv((await $.wv([$t9], "RISKSNAME", C, false)), "Value")), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      }
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["Insured", (await $.mv((await $.wv([$t9], "ODSPAccidentRName", C, false)), "value")), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["Address", (await $.mv((await $.wv([$t9], "ODSPAccidentRAddress", C, false)), "value")), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["ITel", (await $.mv((await $.wv([$t9], "ODSPAccidentRPhone", C, false)), "value")), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["fax", (await $.mv((await $.wv([$t9], "ODSPAccidentRfax", C, false)), "value")), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["CPerson", (await $.mv((await $.wv([$t9], "ODSPAccidentRContact_person", C, false)), "value")), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["CPerson1", (await $.mv((await $.wv([$t9], "ODSPAccidentRContact_person", C, false)), "value")), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["Banking", (await $.mv((await $.wv([$t9], "ODSPAccidentRBanking_details", C, false)), "value")), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["Beneficiary", (await $.mv((await $.wv([$t9], "ODSBeneficiaryName", C, false)), "value")), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["BAddress", (await $.mv((await $.wv([$t9], "ODSBeneficiaryAddress", C, false)), "value")), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["BTel", (await $.mv((await $.wv([$t9], "ODSBeneficiaryPhone", C, false)), "value")), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["BBanking", (await $.mv((await $.wv([$t9], "ODSBeneficiaryBanking_Details", C, false)), "value")), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["Empnum", (await $.wcall([$t9], "FloatToStr", [(await $.mv((await $.wv([$t9], "ODSPAccidentRTotalemp_number", C, false)), "value"))], C)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["AOG", (await $.wcall([$t9], "FloatToStr", [(await $.mv((await $.wv([$t9], "ODSPAccidentRAOG", C, false)), "value"))], C)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["AOP", (await $.wcall([$t9], "FloatToStr", [(await $.mv((await $.wv([$t9], "ODSPAccidentRAOP", C, false)), "value"))], C)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["SMG", (await $.wcall([$t9], "FloatToStr", [(await $.mv((await $.wv([$t9], "ODSPAccidentRSMG", C, false)), "value"))], C)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["SMP", (await $.wcall([$t9], "FloatToStr", [(await $.mv((await $.wv([$t9], "ODSPAccidentRSMP", C, false)), "value"))], C)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["BCG", (await $.wcall([$t9], "FloatToStr", [(await $.mv((await $.wv([$t9], "ODSPAccidentRBCG", C, false)), "value"))], C)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["BCP", (await $.wcall([$t9], "FloatToStr", [(await $.mv((await $.wv([$t9], "ODSPAccidentRBCP", C, false)), "value"))], C)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      if ($.truthy($.not((await $.mv((await $.wv([$t9], "ODSPAccidentRDecired_amount", C, false)), "IsNull"))))) {
        await $.stmt((await $.wcall([$t9], "SetBookmark", ["ISMultiple", "Bəli", (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t9], "SetBookmark", ["ISMultiplesum", (await $.wcall([$t9], "FloatToStr", [(await $.mv((await $.wv([$t9], "ODSPAccidentRDecired_amount", C, false)), "value"))], C)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      } else {
        await $.stmt((await $.wcall([$t9], "SetBookmark", ["ISMultiple", "Xeyr", (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      }
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["EME", (await $.wcall([$t9], "FloatToStr", [(await $.mv((await $.wv([$t9], "ODSPAccidentREME", C, false)), "value"))], C)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["HC", (await $.wcall([$t9], "FloatToStr", [(await $.mv((await $.wv([$t9], "ODSPAccidentRHC", C, false)), "value"))], C)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["HS", (await $.wcall([$t9], "FloatToStr", [(await $.mv((await $.wv([$t9], "ODSPAccidentRHS", C, false)), "value"))], C)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["BRB", (await $.wcall([$t9], "FloatToStr", [(await $.mv((await $.wv([$t9], "ODSPAccidentRBRB", C, false)), "value"))], C)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["BURN", (await $.wcall([$t9], "FloatToStr", [(await $.mv((await $.wv([$t9], "ODSPAccidentRBURN", C, false)), "value"))], C)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["TTD", (await $.wcall([$t9], "FloatToStr", [(await $.mv((await $.wv([$t9], "ODSPAccidentRTTD", C, false)), "value"))], C)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["WEEKS", (await $.wcall([$t9], "FloatToStr", [(await $.mv((await $.wv([$t9], "ODSPAccidentMAXWEEKS", C, false)), "value"))], C)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["NOTCOVERED", $.add($.add((await $.mv((await $.wv([$t9], "ODSPAccidentRNOT_COVEREDPERIOD", C, false)), "value")), "  -  "), (await $.mv((await $.wv([$t9], "ODSPAccidentRNOT_COVEREPERIOD1", C, false)), "value"))), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      if ($.truthy((await $.or_(($.eq((await $.mv((await $.wv([$t9], "ODSPAccidentROUTSIDEOFAZE", C, false)), "Value")), "Xeyr")), async () => ($.eq((await $.mv((await $.wv([$t9], "ODSPAccidentROUTSIDEOFAZE", C, false)), "Value")), "Bəli")))))) {
        await $.stmt((await $.wcall([$t9], "SetBookmark", ["OUTOFAZE", (await $.mv((await $.wv([$t9], "ODSPAccidentROUTSIDEOFAZE", C, false)), "Value")), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      }
      if ($.truthy((await $.and_(($.ne((await $.mv((await $.wv([$t9], "ODSPAccidentROUTSIDEOFAZE", C, false)), "Value")), "Xeyr")), async () => ($.ne((await $.mv((await $.wv([$t9], "ODSPAccidentROUTSIDEOFAZE", C, false)), "Value")), "Bəli")))))) {
        await $.stmt((await $.wcall([$t9], "SetBookmark", ["OUTOFAZE1", (await $.mv((await $.wv([$t9], "ODSPAccidentROUTSIDEOFAZE", C, false)), "Value")), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
        await $.stmt((await $.wcall([$t9], "SetBookmark", ["OUTOFAZE", "Bəli", (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      }
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["RENEWAL", (await $.mv((await $.wv([$t9], "ODSPAccidentRRENEWAL", C, false)), "Value")), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetBookmark", ["TRAVELS", (await $.mv((await $.wv([$t9], "ODSPAccidentRTRAVELS", C, false)), "Value")), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "false", C, false)), (await $.wv([$t9], "False", C, false)), (await $.wv([$t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t9], "False", C, false))], C)));
    }
  } finally {
    await $.mcall((await $.v(C, "AccidentExporter")), "Show", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentBlank", "DBEdit4Change", async function DBEdit4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentBlank", "ODSPAccidentNewRecord", async function ODSPAccidentNewRecord(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.mcall(L0["dataset"], "FieldByName", ["ID"])), "AsInteger", (await $.mcall((await $.v(C, "PINS_Paccident")), "CallIntegerFunction", ["generateID", []])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TPAccidentBlank", "edBeginDateChange", async function edBeginDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "MonthPeriod", []));
  await $.mcall((await $.v(C, "ODSPAccident")), "Edit", []);
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentBlank", "SuggestClick", async function SuggestClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t10 = await $.iset((await $.mv(L0["p"], "Values")), ["MK_ID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSPAccidentId")), "value"))]))); if ($t10 !== undefined) { await $.mset(L0["p"], "Values", $t10); } }
  { const $t11 = await $.iset((await $.mv(L0["p"], "Values")), ["PAID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSPAccSuggestPAID")), "value"))]))); if ($t11 !== undefined) { await $.mset(L0["p"], "Values", $t11); } }
  { const $t12 = await $.iset((await $.mv(L0["p"], "Values")), ["KLI_ID"], (await $.call(C, "IntToStr", [(await $.mv((await $.v(C, "ODSCustomersID")), "Value"))]))); if ($t12 !== undefined) { await $.mset(L0["p"], "Values", $t12); } }
  await $.mcall((await $.v(C, "ODSPaccSuggest")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSPaccSuggest")), "SetVariable", ["paid", (await $.mv((await $.v(C, "ODSPAccidentId")), "value"))])));
  await $.mcall((await $.v(C, "ODSPaccSuggest")), "Open", []);
  if ($.truthy($.lt((await $.mv((await $.v(C, "ODSPAccSuggest")), "RecordCount")), 1))) {
    { const $t13 = await $.iset((await $.mv(L0["p"], "Values")), ["Mod"], "Insert"); if ($t13 !== undefined) { await $.mset(L0["p"], "Values", $t13); } }
  } else {
    { const $t14 = await $.iset((await $.mv(L0["p"], "Values")), ["Mod"], "Edit"); if ($t14 !== undefined) { await $.mset(L0["p"], "Values", $t14); } }
  }
  {
    const $t15 = (await $.v(C, "SuggestContainer"));
    await $.stmt((await $.wcall([$t15], "ShowModal", [(await $.wcall([$t15], "StringToGuid", ["{F64B6260-CAB7-4D0A-9149-CF1A4639CD5C}"], C)), (await $.wv([$t15], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["p"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPAccidentBlank", "MonthPeriod", async function MonthPeriod(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "MonthEdit")), "Text", $.add((await $.call(C, "IntToStr", [(await $.call(C, "trunc", [$.fdiv(($.sub((await $.mv((await $.v(C, "edEndDate")), "DateTime")), (await $.mv((await $.v(C, "edBeginDate")), "DateTime")))), 30)]))])), " ay"));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  return U;
}
