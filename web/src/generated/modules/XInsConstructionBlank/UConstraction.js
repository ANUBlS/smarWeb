// Generated from UConstraction.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UConstraction", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "PConstractiondpr_TLB", "StdVcl", "ComCtrls", "StdCtrls", "DBCtrls", "Mask", "SBPlgAx50_TLB", "Buttons", "ExtCtrls", "Db", "OracleData", "Oracle", "PlgModalContainer", "INSWordExporter", "ComObj", "ComServ", "sboapiDataModuleImpl", "URiskTypes"]);
  const C = [U];
  $.defRecord("tconstructioninfo", {"id": () => 0, "kli_id": () => 0, "req_period": () => '', "profitname": () => '', "profitaddress": () => '', "profit_phone": () => '', "profit_bankingdetails": () => '', "fulldescription": () => '', "locationobj": () => '', "yearsinbusiness": () => '', "contactperson": () => '', "contactperson_tel": () => '', "buildingusage": () => '', "floorsnum": () => 0, "wallsm": () => '', "ceilingsm": () => '', "roofm": () => '', "area": () => 0, "applicantspace": () => 0, "earthquakedetails": () => '', "flamable": () => '', "surroindingdetails": () => '', "situeted": () => '', "guard": () => '', "alarm": () => '', "locks": () => '', "securitylocks": () => '', "bars": () => '', "other": () => '', "settings": () => '', "repair": () => '', "heated": () => '', "annual": () => 0, "wages": () => 0, "rent": () => 0, "employes": () => 0, "losshistory": () => '', "renewal": () => '', "thirdparty": () => '', "otherinf": () => '', "indeminity": () => '', "valuetype": () => '', "buildings": () => 0, "engineer": () => 0, "exdeco": () => 0, "indeco": () => 0, "firesys": () => 0});
  U.defClass("TConstraction", "TActiveForm", {"constructionpagecontrol": {"name": "ConstructionPageControl", "type": "TPageControl"}, "section1": {"name": "SECTION1", "type": "TTabSheet"}, "datailsgroupbox": {"name": "DatailsGroupBox", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "fuldescrip": {"name": "FulDescrip", "type": "TDBEdit"}, "location": {"name": "Location", "type": "TDBEdit"}, "yearsinbus": {"name": "YearsInBus", "type": "TDBEdit"}, "section23": {"name": "SECTION23", "type": "TTabSheet"}, "securitygroupbox": {"name": "SecurityGroupBox", "type": "TGroupBox"}, "label25": {"name": "Label25", "type": "TLabel"}, "label26": {"name": "Label26", "type": "TLabel"}, "label27": {"name": "Label27", "type": "TLabel"}, "label28": {"name": "Label28", "type": "TLabel"}, "label29": {"name": "Label29", "type": "TLabel"}, "label30": {"name": "Label30", "type": "TLabel"}, "label31": {"name": "Label31", "type": "TLabel"}, "label32": {"name": "Label32", "type": "TLabel"}, "label34": {"name": "Label34", "type": "TLabel"}, "label35": {"name": "Label35", "type": "TLabel"}, "label36": {"name": "Label36", "type": "TLabel"}, "label37": {"name": "Label37", "type": "TLabel"}, "label38": {"name": "Label38", "type": "TLabel"}, "especify": {"name": "ESpecify", "type": "TDBEdit"}, "eheat": {"name": "EHeat", "type": "TDBEdit"}, "dbcombobox2": {"name": "DBComboBox2", "type": "TDBComboBox"}, "dbcombobox3": {"name": "DBComboBox3", "type": "TDBComboBox"}, "dbcombobox4": {"name": "DBComboBox4", "type": "TDBComboBox"}, "dbcombobox6": {"name": "DBComboBox6", "type": "TDBComboBox"}, "dbcombobox7": {"name": "DBComboBox7", "type": "TDBComboBox"}, "dbcombobox8": {"name": "DBComboBox8", "type": "TDBComboBox"}, "dbcombobox9": {"name": "DBComboBox9", "type": "TDBComboBox"}, "dbmemo1": {"name": "DBMemo1", "type": "TDBMemo"}, "section4": {"name": "SECTION4", "type": "TTabSheet"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label11": {"name": "Label11", "type": "TLabel"}, "label64": {"name": "Label64", "type": "TLabel"}, "label65": {"name": "Label65", "type": "TLabel"}, "label66": {"name": "Label66", "type": "TLabel"}, "label67": {"name": "Label67", "type": "TLabel"}, "label68": {"name": "Label68", "type": "TLabel"}, "label69": {"name": "Label69", "type": "TLabel"}, "label70": {"name": "Label70", "type": "TLabel"}, "label71": {"name": "Label71", "type": "TLabel"}, "label72": {"name": "Label72", "type": "TLabel"}, "label73": {"name": "Label73", "type": "TLabel"}, "label74": {"name": "Label74", "type": "TLabel"}, "label75": {"name": "Label75", "type": "TLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "section5": {"name": "SECTION5", "type": "TTabSheet"}, "covergroupbox": {"name": "CoverGroupBox", "type": "TGroupBox"}, "lossofprofitgroupbox": {"name": "LossOfProfitGroupBox", "type": "TGroupBox"}, "label49": {"name": "Label49", "type": "TLabel"}, "label50": {"name": "Label50", "type": "TLabel"}, "label51": {"name": "Label51", "type": "TLabel"}, "label52": {"name": "Label52", "type": "TLabel"}, "label53": {"name": "Label53", "type": "TLabel"}, "label54": {"name": "Label54", "type": "TLabel"}, "label55": {"name": "Label55", "type": "TLabel"}, "label56": {"name": "Label56", "type": "TLabel"}, "label57": {"name": "Label57", "type": "TLabel"}, "erent": {"name": "ERent", "type": "TDBEdit"}, "eannual": {"name": "EAnnual", "type": "TDBEdit"}, "ewages": {"name": "EWages", "type": "TDBEdit"}, "eemploy": {"name": "EEmploy", "type": "TDBEdit"}, "eindeminity": {"name": "EIndeminity", "type": "TDBEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label20": {"name": "Label20", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "label22": {"name": "Label22", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "label24": {"name": "Label24", "type": "TLabel"}, "label39": {"name": "Label39", "type": "TLabel"}, "label40": {"name": "Label40", "type": "TLabel"}, "dbedit17": {"name": "DBEdit17", "type": "TDBEdit"}, "dbedit18": {"name": "DBEdit18", "type": "TDBEdit"}, "dbedit19": {"name": "DBEdit19", "type": "TDBEdit"}, "dbedit20": {"name": "DBEdit20", "type": "TDBEdit"}, "dbedit21": {"name": "DBEdit21", "type": "TDBEdit"}, "constyeardatetimepicker": {"name": "ConstYearDateTimePicker", "type": "TDateTimePicker"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label12": {"name": "Label12", "type": "TLabel"}, "dbcombobox1": {"name": "DBComboBox1", "type": "TDBComboBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "back": {"name": "Back", "type": "TBitBtn"}, "next": {"name": "Next", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "commit": {"name": "Commit", "type": "TBitBtn"}, "report": {"name": "Report", "type": "TBitBtn"}, "suggest": {"name": "Suggest", "type": "TBitBtn"}, "inslookupcombobox": {"name": "InsLookupComboBox", "type": "TDBLookupComboBox"}, "constructiondata": {"name": "ConstructionData", "type": "TDataSource"}, "customersdata": {"name": "CustomersData", "type": "TDataSource"}, "risktypedata": {"name": "RiskTypeData", "type": "TDataSource"}, "label17": {"name": "Label17", "type": "TLabel"}, "dblookupcomboboxrisk": {"name": "DBLookupComboBoxRisk", "type": "TDBLookupComboBox"}, "btrisksadd": {"name": "btRisksAdd", "type": "TBitBtn"}, "memrisk": {"name": "memRisk", "type": "TMemo"}, "cbrisks": {"name": "cbRisks", "type": "TCheckBox"}, "odsrisktype": {"name": "ODSRiskType", "type": "TOracleDataSet"}, "odsrisktypeid": {"name": "ODSRiskTypeID", "type": "TFloatField"}, "odsrisktypename": {"name": "ODSRiskTypeNAME", "type": "TStringField"}, "risks": {"name": "Risks", "type": "TOracleDataSet"}, "risksid": {"name": "RisksID", "type": "TFloatField"}, "risksname": {"name": "RisksNAME", "type": "TStringField"}, "risksdata": {"name": "RisksData", "type": "TDataSource"}, "pins_construction": {"name": "PINS_CONSTRUCTION", "type": "TOraclePackage"}, "odsconstruction": {"name": "ODSConstruction", "type": "TOracleDataSet"}, "odscustomers": {"name": "ODSCustomers", "type": "TOracleDataSet"}, "dbcombobox5": {"name": "DBComboBox5", "type": "TDBComboBox"}, "odsconstructionid": {"name": "ODSConstructionID", "type": "TFloatField"}, "odsconstructionkli_id": {"name": "ODSConstructionKLI_ID", "type": "TFloatField"}, "odsconstructionfulldescription": {"name": "ODSConstructionFULLDESCRIPTION", "type": "TStringField"}, "odsconstructionlocationobj": {"name": "ODSConstructionLOCATIONOBJ", "type": "TStringField"}, "odsconstructionyearsinbusiness": {"name": "ODSConstructionYEARSINBUSINESS", "type": "TStringField"}, "odsconstructionbuildingusage": {"name": "ODSConstructionBUILDINGUSAGE", "type": "TStringField"}, "odsconstructionconstyear": {"name": "ODSConstructionCONSTYEAR", "type": "TDateTimeField"}, "odsconstructionfloorsnum": {"name": "ODSConstructionFLOORSNUM", "type": "TIntegerField"}, "odsconstructionwallsm": {"name": "ODSConstructionWALLSM", "type": "TStringField"}, "odsconstructionceilingsm": {"name": "ODSConstructionCEILINGSM", "type": "TStringField"}, "odsconstructionroofm": {"name": "ODSConstructionROOFM", "type": "TStringField"}, "odsconstructionarea": {"name": "ODSConstructionAREA", "type": "TFloatField"}, "odsconstructionapplicantspace": {"name": "ODSConstructionAPPLICANTSPACE", "type": "TFloatField"}, "odsconstructionearthquakedetails": {"name": "ODSConstructionEARTHQUAKEDETAILS", "type": "TStringField"}, "odsconstructionflamable": {"name": "ODSConstructionFLAMABLE", "type": "TStringField"}, "odsconstructionsurroindingdetails": {"name": "ODSConstructionSURROINDINGDETAILS", "type": "TStringField"}, "odsconstructionsitueted": {"name": "ODSConstructionSITUETED", "type": "TStringField"}, "odsconstructionguard": {"name": "ODSConstructionGUARD", "type": "TStringField"}, "odsconstructionalarm": {"name": "ODSConstructionALARM", "type": "TStringField"}, "odsconstructionlocks": {"name": "ODSConstructionLOCKS", "type": "TStringField"}, "odsconstructionsecuritylocks": {"name": "ODSConstructionSECURITYLOCKS", "type": "TStringField"}, "odsconstructionbars": {"name": "ODSConstructionBARS", "type": "TStringField"}, "odsconstructionother": {"name": "ODSConstructionOTHER", "type": "TStringField"}, "odsconstructionsettings": {"name": "ODSConstructionSETTINGS", "type": "TStringField"}, "odsconstructionrepair": {"name": "ODSConstructionREPAIR", "type": "TStringField"}, "odsconstructionheated": {"name": "ODSConstructionHEATED", "type": "TStringField"}, "odsconstructionriskid": {"name": "ODSConstructionRISKID", "type": "TFloatField"}, "odsconstructionannual": {"name": "ODSConstructionANNUAL", "type": "TFloatField"}, "odsconstructionwages": {"name": "ODSConstructionWAGES", "type": "TFloatField"}, "odsconstructionrent": {"name": "ODSConstructionRENT", "type": "TFloatField"}, "odsconstructionemployes": {"name": "ODSConstructionEMPLOYES", "type": "TFloatField"}, "odsconstructionexpirity": {"name": "ODSConstructionEXPIRITY", "type": "TDateTimeField"}, "odsconstructionlosshistory": {"name": "ODSConstructionLOSSHISTORY", "type": "TStringField"}, "odsconstructionrenewal": {"name": "ODSConstructionRENEWAL", "type": "TStringField"}, "odsconstructionthirdparty": {"name": "ODSConstructionTHIRDPARTY", "type": "TStringField"}, "odsconstructionotherinf": {"name": "ODSConstructionOTHERINF", "type": "TStringField"}, "odsconstructionindeminity": {"name": "ODSConstructionINDEMINITY", "type": "TStringField"}, "odsconstructionvaluetype": {"name": "ODSConstructionVALUETYPE", "type": "TStringField"}, "odsconstructionbuildings": {"name": "ODSConstructionBUILDINGS", "type": "TFloatField"}, "odsconstructionengineer": {"name": "ODSConstructionENGINEER", "type": "TFloatField"}, "odsconstructionexdeco": {"name": "ODSConstructionEXDECO", "type": "TFloatField"}, "odsconstructionindeco": {"name": "ODSConstructionINDECO", "type": "TFloatField"}, "odsconstructionfiresys": {"name": "ODSConstructionFIRESYS", "type": "TFloatField"}, "odsconstructiontypeid": {"name": "ODSConstructionTYPEID", "type": "TIntegerField"}, "plgsuggest": {"name": "PlgSuggest", "type": "TPlgModalContainer"}, "odsconstructionr": {"name": "ODSConstructionR", "type": "TOracleDataSet"}, "pins_fullmotor": {"name": "PINS_FULLMOTOR", "type": "TOraclePackage"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "odsconstructionrname": {"name": "ODSConstructionRNAME", "type": "TStringField"}, "odsconstructionraddress": {"name": "ODSConstructionRADDRESS", "type": "TStringField"}, "odsconstructionrphone": {"name": "ODSConstructionRPHONE", "type": "TStringField"}, "odsconstructionrfax": {"name": "ODSConstructionRFAX", "type": "TStringField"}, "odsconstructionrid": {"name": "ODSConstructionRID", "type": "TFloatField"}, "odsconstructionrkli_id": {"name": "ODSConstructionRKLI_ID", "type": "TFloatField"}, "odsconstructionrfulldescription": {"name": "ODSConstructionRFULLDESCRIPTION", "type": "TStringField"}, "odsconstructionrlocationobj": {"name": "ODSConstructionRLOCATIONOBJ", "type": "TStringField"}, "odsconstructionryearsinbusiness": {"name": "ODSConstructionRYEARSINBUSINESS", "type": "TStringField"}, "odsconstructionrbuildingusage": {"name": "ODSConstructionRBUILDINGUSAGE", "type": "TStringField"}, "odsconstructionrconstyear": {"name": "ODSConstructionRCONSTYEAR", "type": "TDateTimeField"}, "odsconstructionrfloorsnum": {"name": "ODSConstructionRFLOORSNUM", "type": "TIntegerField"}, "odsconstructionrwallsm": {"name": "ODSConstructionRWALLSM", "type": "TStringField"}, "odsconstructionrceilingsm": {"name": "ODSConstructionRCEILINGSM", "type": "TStringField"}, "odsconstructionrroofm": {"name": "ODSConstructionRROOFM", "type": "TStringField"}, "odsconstructionrarea": {"name": "ODSConstructionRAREA", "type": "TFloatField"}, "odsconstructionrapplicantspace": {"name": "ODSConstructionRAPPLICANTSPACE", "type": "TFloatField"}, "odsconstructionrearthquakedetails": {"name": "ODSConstructionREARTHQUAKEDETAILS", "type": "TStringField"}, "odsconstructionrflamable": {"name": "ODSConstructionRFLAMABLE", "type": "TStringField"}, "odsconstructionrsurroindingdetails": {"name": "ODSConstructionRSURROINDINGDETAILS", "type": "TStringField"}, "odsconstructionrsitueted": {"name": "ODSConstructionRSITUETED", "type": "TStringField"}, "odsconstructionrguard": {"name": "ODSConstructionRGUARD", "type": "TStringField"}, "odsconstructionralarm": {"name": "ODSConstructionRALARM", "type": "TStringField"}, "odsconstructionrlocks": {"name": "ODSConstructionRLOCKS", "type": "TStringField"}, "odsconstructionrsecuritylocks": {"name": "ODSConstructionRSECURITYLOCKS", "type": "TStringField"}, "odsconstructionrbars": {"name": "ODSConstructionRBARS", "type": "TStringField"}, "odsconstructionrother": {"name": "ODSConstructionROTHER", "type": "TStringField"}, "odsconstructionrsettings": {"name": "ODSConstructionRSETTINGS", "type": "TStringField"}, "odsconstructionrrepair": {"name": "ODSConstructionRREPAIR", "type": "TStringField"}, "odsconstructionrheated": {"name": "ODSConstructionRHEATED", "type": "TStringField"}, "odsconstructionrriskid": {"name": "ODSConstructionRRISKID", "type": "TFloatField"}, "odsconstructionrannual": {"name": "ODSConstructionRANNUAL", "type": "TFloatField"}, "odsconstructionrwages": {"name": "ODSConstructionRWAGES", "type": "TFloatField"}, "odsconstructionrrent": {"name": "ODSConstructionRRENT", "type": "TFloatField"}, "odsconstructionremployes": {"name": "ODSConstructionREMPLOYES", "type": "TFloatField"}, "odsconstructionrexpirity": {"name": "ODSConstructionREXPIRITY", "type": "TDateTimeField"}, "odsconstructionrlosshistory": {"name": "ODSConstructionRLOSSHISTORY", "type": "TStringField"}, "odsconstructionrrenewal": {"name": "ODSConstructionRRENEWAL", "type": "TStringField"}, "odsconstructionrthirdparty": {"name": "ODSConstructionRTHIRDPARTY", "type": "TStringField"}, "odsconstructionrotherinf": {"name": "ODSConstructionROTHERINF", "type": "TStringField"}, "odsconstructionrindeminity": {"name": "ODSConstructionRINDEMINITY", "type": "TStringField"}, "odsconstructionrvaluetype": {"name": "ODSConstructionRVALUETYPE", "type": "TStringField"}, "odsconstructionrbuildings": {"name": "ODSConstructionRBUILDINGS", "type": "TFloatField"}, "odsconstructionrengineer": {"name": "ODSConstructionRENGINEER", "type": "TFloatField"}, "odsconstructionrexdeco": {"name": "ODSConstructionREXDECO", "type": "TFloatField"}, "odsconstructionrindeco": {"name": "ODSConstructionRINDECO", "type": "TFloatField"}, "odsconstructionrfiresys": {"name": "ODSConstructionRFIRESYS", "type": "TFloatField"}, "odsconstructionrtypeid": {"name": "ODSConstructionRTYPEID", "type": "TIntegerField"}, "constructionexporter": {"name": "ConstructionExporter", "type": "TINSWordExporter"}, "btapply": {"name": "btApply", "type": "TBitBtn"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "beneficiarysource": {"name": "BeneficiarySource", "type": "TDataSource"}, "odsbeneficiary": {"name": "ODSBeneficiary", "type": "TOracleDataSet"}, "odsconstructionprofitid": {"name": "ODSConstructionPROFITID", "type": "TFloatField"}, "odsconstructionrprofitid": {"name": "ODSConstructionRPROFITID", "type": "TFloatField"}, "label6": {"name": "Label6", "type": "TLabel"}, "expiritydatetimepicker": {"name": "ExpirityDateTimePicker", "type": "TDateTimePicker"}, "label14": {"name": "Label14", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "label15": {"name": "Label15", "type": "TLabel"}, "dbedit12": {"name": "DBEdit12", "type": "TDBEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbcombobox12": {"name": "DBComboBox12", "type": "TDBComboBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbcombobox13": {"name": "DBComboBox13", "type": "TDBComboBox"}, "odsbeneficiaryid": {"name": "ODSBeneficiaryID", "type": "TFloatField"}, "odsbeneficiaryname": {"name": "ODSBeneficiaryNAME", "type": "TStringField"}, "odsbeneficiaryaddress": {"name": "ODSBeneficiaryADDRESS", "type": "TStringField"}, "odsbeneficiaryphone": {"name": "ODSBeneficiaryPHONE", "type": "TStringField"}, "odsbeneficiarybanking_details": {"name": "ODSBeneficiaryBANKING_DETAILS", "type": "TStringField"}, "label16": {"name": "Label16", "type": "TLabel"}, "edbegindate": {"name": "edBeginDate", "type": "TDateTimePicker"}, "lbbegindate": {"name": "lbBeginDate", "type": "TLabel"}, "edenddate": {"name": "edEndDate", "type": "TDateTimePicker"}, "lbenddate": {"name": "lbEndDate", "type": "TLabel"}, "opcommon": {"name": "OPCOMMON", "type": "TOraclePackage"}, "odscontracts": {"name": "ODSContracts", "type": "TOracleDataSet"}, "odscontractsid": {"name": "ODSContractsID", "type": "TFloatField"}, "odscontractstype_id": {"name": "ODSContractsTYPE_ID", "type": "TFloatField"}, "odscontractsblank_id": {"name": "ODSContractsBLANK_ID", "type": "TFloatField"}, "odscontractssugg_id": {"name": "ODSContractsSUGG_ID", "type": "TFloatField"}, "odscontractspolicy_id": {"name": "ODSContractsPOLICY_ID", "type": "TFloatField"}, "odscontractsins_date": {"name": "ODSContractsINS_DATE", "type": "TDateTimeField"}, "odscontractsbegin_date": {"name": "ODSContractsBEGIN_DATE", "type": "TDateTimeField"}, "odscontractsend_date": {"name": "ODSContractsEND_DATE", "type": "TDateTimeField"}, "odscontractsvalute_id": {"name": "ODSContractsVALUTE_ID", "type": "TFloatField"}, "odscontractsammount": {"name": "ODSContractsAMMOUNT", "type": "TFloatField"}, "odscontractsclose_prefix": {"name": "ODSContractsCLOSE_PREFIX", "type": "TIntegerField"}, "odscontractskli_id": {"name": "ODSContractsKLI_ID", "type": "TFloatField"}, "odscontractsloanacc_id": {"name": "ODSContractsLOANACC_ID", "type": "TFloatField"}, "odscontractscurracc_id": {"name": "ODSContractsCURRACC_ID", "type": "TFloatField"}, "odscontractspolicy_num": {"name": "ODSContractsPOLICY_NUM", "type": "TStringField"}, "dscontracts": {"name": "DSContracts", "type": "TDataSource"}, "odscustomersid": {"name": "ODSCustomersID", "type": "TIntegerField"}, "odscustomersname": {"name": "ODSCustomersNAME", "type": "TStringField"}, "odscustomersaddress": {"name": "ODSCustomersADDRESS", "type": "TStringField"}, "odscustomersmobilephone": {"name": "ODSCustomersMOBILEPHONE", "type": "TStringField"}, "odscustomersfax": {"name": "ODSCustomersFAX", "type": "TStringField"}, "odscustomerscontactperson": {"name": "ODSCustomersCONTACTPERSON", "type": "TStringField"}, "odscustomerscontactpersonphone": {"name": "ODSCustomersCONTACTPERSONPHONE", "type": "TStringField"}, "monthedit": {"name": "MonthEdit", "type": "TEdit"}, "shape1": {"name": "Shape1", "type": "TShape"}, "id": {"name": "id", "type": "Integer"}, "fparams": {"name": "FParams", "type": "TStrings"}, "fownerhandle": {"name": "FOwnerHandle", "type": "Integer"}, "fevents": {"name": "FEvents", "type": "IConstractionEvents"}, "resultid": {"name": "resultID", "type": "integer"}, "resultb": {"name": "resultB", "type": "boolean"}}, {"params": {"name": "Params", "read": "Get_Params", "write": "Set_Params"}});
  U.init(async () => {
    U.const("WM_ModalResult", $.add((await $.v(C, "WM_USER")), 139));
    U.var_("Constraction", null, "TConstraction");
  });
  U.method("TConstraction", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TConstraction", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TConstraction", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TConstraction", "Initialize", null, arguments);
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
  U.method("TConstraction", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TConstraction", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstraction", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstraction", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstraction", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstraction", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstraction", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstraction", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TConstraction", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstraction", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstraction", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstraction", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TConstraction", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TConstraction", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TConstraction", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TConstraction", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstraction", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstraction", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstraction", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TConstraction", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TConstraction", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstraction", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TConstraction", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TConstraction", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstraction", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TConstraction", "Get_Owner", async function Get_Owner(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "Set_Owner", async function Set_Owner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["val"]);
  if ($.truthy($.gt(L0["val"], 0))) {
    await $.set(C, "FOwnerHandle", L0["val"]);
  }
  return L0.result;
}, {"params": ["val"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TConstraction", "Get_Params", async function Get_Params(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["name"]);
  L0["result"] = (await $.idx((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]]));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TConstraction", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  { const $t1 = await $.iset((await $.mv((await $.v(C, "FParams")), "Values")), [L0["name"]], L0["value"]); if ($t1 !== undefined) { await $.mset((await $.v(C, "FParams")), "Values", $t1); } }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TConstraction", "InstanceInitialize", async function InstanceInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "Cleanup", async function Cleanup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "UIObjectActivate", async function UIObjectActivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  if ($.truthy($.eq((await $.call(C, "Get_Params", ["Mod"])), "Insert"))) {
    await $.mcall((await $.v(C, "ODSConstruction")), "Open", []);
    await $.mcall((await $.v(C, "ODSConstruction")), "Insert", []);
    await $.mset((await $.v(C, "edBeginDate")), "DateTime", (await $.v(C, "Now")));
    await $.mset((await $.v(C, "edEndDate")), "DateTime", (await $.v(C, "Now")));
    await $.mset((await $.v(C, "InsLookupComboBox")), "KeyValue", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["KLI_ID"]))])));
    await $.stmt($.call(C, "MonthPeriod", []));
  }
  if ($.truthy($.eq((await $.call(C, "Get_Params", ["Mod"])), "Edit"))) {
    await $.mset((await $.v(C, "Suggest")), "Enabled", true);
    await $.mset((await $.v(C, "Report")), "Enabled", true);
    await $.mcall((await $.v(C, "ODSConstruction")), "CloseAll", []);
    await $.set(C, "id", (await $.call(C, "StrToInt", [(await $.call(C, "Get_Params", ["ID"]))])));
    await $.stmt((await $.mcall((await $.v(C, "ODSConstruction")), "SetVariable", ["ID", (await $.v(C, "id"))])));
    await $.mcall((await $.v(C, "ODSConstruction")), "Open", []);
    await $.mcall((await $.v(C, "ODSContracts")), "Close", []);
    await $.stmt((await $.mcall((await $.v(C, "ODSContracts")), "SetVariable", ["blankid", (await $.mv((await $.v(C, "ODSConstructionID")), "value"))])));
    await $.mcall((await $.v(C, "ODSContracts")), "Open", []);
    await $.mset((await $.v(C, "edBeginDate")), "DateTime", (await $.mv((await $.v(C, "ODSContractsbegin_date")), "AsDateTime")));
    await $.mset((await $.v(C, "edEndDate")), "DateTime", (await $.mv((await $.v(C, "ODSContractsEnd_date")), "AsDateTime")));
    await $.stmt($.call(C, "LoadData", []));
    await $.stmt($.call(C, "MonthPeriod", []));
    await $.mcall((await $.v(C, "ODSConstruction")), "Edit", []);
  }
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "QueryDeactivate", async function QueryDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "UIObjectDeactivate", async function UIObjectDeactivate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "S_OK"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "Get_Height", async function Get_Height(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Height"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "Get_Width", async function Get_Width(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "Width"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Constraction", Self);
  await $.set(C, "FParams", (await $.mv((await $.v(C, "TStringList")), "Create")));
  await $.mset((await $.v(C, "Back")), "Enabled", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstraction", "BackClick", async function BackClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "ConstructionPageControl"));
    await $.wset([$t2], "ActivePageIndex", $.sub((await $.wv([$t2], "ActivePageIndex", C, false)), 1), C);
    if ($.truthy($.eq((await $.wv([$t2], "ActivePageIndex", C, false)), 0))) {
      await $.mset((await $.wv([$t2], "Back", C, false)), "Enabled", (await $.wv([$t2], "false", C, false)));
    }
    await $.mset((await $.wv([$t2], "Next", C, false)), "Enabled", (await $.wv([$t2], "true", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstraction", "NextClick", async function NextClick(Self, p0) {
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
  U.method("TConstraction", "ConstructionPageControlChange", async function ConstructionPageControlChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "ConstructionPageControl"));
    if ($.truthy($.ne((await $.wv([$t3], "ActivePageIndex", C, false)), $.sub((await $.wv([$t3], "PageCount", C, false)), 1)))) {
      await $.mset((await $.wv([$t3], "Next", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
    } else {
      await $.mset((await $.wv([$t3], "Next", C, false)), "Enabled", (await $.wv([$t3], "false", C, false)));
    }
    if ($.truthy($.ne((await $.wv([$t3], "ActivepageIndex", C, false)), 0))) {
      await $.mset((await $.wv([$t3], "Back", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
    } else {
      await $.mset((await $.wv([$t3], "Back", C, false)), "Enabled", (await $.wv([$t3], "false", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstraction", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrCancel")), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstraction", "InsLookupComboBoxKeyPress", async function InsLookupComboBoxKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.call(C, "HiWord", [(await $.call(C, "GetKeyState", [(await $.v(C, "VK_Shift"))]))])), 0))) {
      {
        const $t4 = L0["sender"];
        await $.stmt((await $.wcall([$t4], "SelectNext", [(await $.wv([$t4], "ActiveControl", C, false)), (await $.wv([$t4], "False", C, false)), (await $.wv([$t4], "True", C, false))], C)));
      }
    } else {
      {
        const $t5 = L0["sender"];
        await $.stmt((await $.wcall([$t5], "SelectNext", [(await $.wv([$t5], "ActiveControl", C, false)), (await $.wv([$t5], "True", C, false)), (await $.wv([$t5], "True", C, false))], C)));
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TConstraction", "btRisksAddClick", async function btRisksAddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ODSRisktype")), "Open", []);
  {
    const $t6 = (await $.mcall((await $.v(C, "TfmRiskTypes")), "Create", [Self]));
    await $.stmt($.wcall([$t6], "ShowModal", [], C));
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "memRisk")), "Text")), ""))) {
    await $.mset((await $.v(C, "cbRisks")), "State", (await $.v(C, "cbChecked")));
  }
  await $.mcall((await $.v(C, "ODSRisktype")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstraction", "SaveData", async function SaveData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false, "nid": 0};
  L0["result"] = false;
  if ($.truthy($.in_((await $.mv((await $.v(C, "ODSConstruction")), "State")), [(await $.v(C, "dsInsert"))]))) {
    await $.mset((await $.v(C, "ODSConstructionKli_ID")), "Value", (await $.mv((await $.v(C, "InsLookupComboBox")), "KeyValue")));
    await $.stmt((await $.mcall((await $.v(C, "OPCommon")), "CallIntegerFunction", ["newinsurance", [10, (await $.mv((await $.v(C, "ODSConstructionID")), "Value")), (await $.mv((await $.v(C, "edBeginDate")), "DateTime")), (await $.mv((await $.v(C, "edEndDate")), "DateTime")), (await $.mv((await $.v(C, "ODSConstructionKLI_ID")), "Value"))]])));
  }
  if ($.truthy($.in_((await $.mv((await $.v(C, "ODSConstruction")), "State")), [(await $.v(C, "dsEdit"))]))) {
    await $.stmt((await $.mcall((await $.v(C, "OPCommon")), "CallBooleanFunction", ["setblankdata", [10, (await $.mv((await $.v(C, "ODSConstructionID")), "Value")), (await $.mv((await $.v(C, "edBeginDate")), "DateTime")), (await $.mv((await $.v(C, "edEndDate")), "DateTime")), (await $.mv((await $.v(C, "ODSConstructionKLI_ID")), "Value"))]])));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "cbRisks")), "State")), (await $.v(C, "cbChecked"))))) {
    {
      const $t7 = (await $.v(C, "Risks"));
      await $.stmt($.wcall([$t7], "Insert", [], C));
      await $.mset((await $.wcall([$t7], "FieldByName", ["name"], C)), "asString", (await $.mv((await $.wv([$t7], "memRisk", C, false)), "Text")));
      await $.stmt($.wcall([$t7], "Post", [], C));
      await $.stmt($.wcall([$t7], "RefreshRecord", [], C));
    }
  }
  {
    const $t8 = (await $.v(C, "ODSConstruction"));
    await $.mset((await $.wcall([$t8], "FieldByName", ["riskid"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t8], "Risks", C, false)), "FieldByName", ["id"])), "AsInteger")));
    await $.mset((await $.wcall([$t8], "FieldByName", ["ConstYear"], C)), "AsDateTime", (await $.mv((await $.wv([$t8], "ConstYearDateTimePicker", C, false)), "Date")));
    await $.mset((await $.wcall([$t8], "FieldByName", ["Expirity"], C)), "AsDateTime", (await $.mv((await $.wv([$t8], "ExpirityDateTimePicker", C, false)), "Date")));
  }
  {
    const $t9 = (await $.v(C, "ODSConstruction"));
    if ($.truthy($.in_((await $.wv([$t9], "State", C, false)), [(await $.wv([$t9], "dsInsert", C, false)), (await $.wv([$t9], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t9], "Post", [], C));
      await $.wset([$t9], "nid", (await $.mv((await $.wv([$t9], "ODSConstructionID", C, false)), "Value")), { get: async () => L0["nid"], set: async (v) => { L0["nid"] = v; }, local: true });
      await $.stmt($.wcall([$t9], "Close", [], C));
      await $.stmt((await $.wcall([$t9], "Setvariable", ["id", (await $.wv([$t9], "nid", { get: async () => L0["nid"], set: async (v) => { L0["nid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t9], "Open", [], C));
    }
  }
  L0["result"] = true;
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConstraction", "LoadData", async function LoadData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t10 = (await $.v(C, "ODSConstruction"));
    await $.mset((await $.wv([$t10], "ConstYearDateTimePicker", C, false)), "Date", (await $.mv((await $.wcall([$t10], "FieldByName", ["ConstYear"], C)), "AsDateTime")));
    await $.mset((await $.wv([$t10], "ExpirityDateTimePicker", C, false)), "Date", (await $.mv((await $.wcall([$t10], "FieldByName", ["Expirity"], C)), "AsDateTime")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TConstraction", "CommitClick", async function CommitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "SaveData", [])))) {
    await $.stmt((await $.call(C, "PostMessage", [(await $.v(C, "FOwnerHandle")), (await $.v(C, "WM_ModalResult")), (await $.v(C, "mrOk")), 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstraction", "ODSConstructionNewRecord", async function ODSConstructionNewRecord(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.mcall(L0["dataset"], "FieldByName", ["ID"])), "AsInteger", (await $.mcall((await $.v(C, "PINS_CONSTRUCTION")), "CallIntegerFunction", ["generateID", []])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TConstraction", "SuggestClick", async function SuggestClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t11 = await $.iset((await $.mv(L0["p"], "Values")), ["ID"], (await $.call(C, "FloatToStr", [(await $.mv((await $.v(C, "ODSConstructionID")), "Value"))]))); if ($t11 !== undefined) { await $.mset(L0["p"], "Values", $t11); } }
  {
    const $t12 = (await $.v(C, "plgSuggest"));
    await $.stmt((await $.wcall([$t12], "ShowModal", [(await $.wcall([$t12], "StringToGuid", ["{0D0BAE0E-C323-439C-AAD6-EBBB63D04E9C}"], C)), (await $.wv([$t12], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
  }
  await $.mcall(L0["p"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstraction", "ReportClick", async function ReportClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "idr": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["idr"] = (await $.mv((await $.v(C, "ODSConstructionID")), "value"));
  await $.mcall((await $.v(C, "ODSConstructionR")), "CloseAll", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSConstructionR")), "SetVariable", ["ID", L0["idr"]])));
  await $.mcall((await $.v(C, "ODSConstructionR")), "Open", []);
  await $.mcall((await $.v(C, "ODSContracts")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSContracts")), "SetVariable", ["blankid", L0["idr"]])));
  await $.mcall((await $.v(C, "ODSContracts")), "Open", []);
  try {
    {
      const $t13 = (await $.v(C, "ConstructionExporter"));
      await $.wset([$t13], "FileName", $.add((await $.wcall([$t13], "ExtractFilePath", [(await $.mv((await $.wv([$t13], "Application", C, false)), "ExeName"))], C)), "\\ConstructionAppl.doc"), C);
      await $.stmt((await $.wcall([$t13], "Open", [(await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Insured", (await $.mv((await $.wv([$t13], "ODSConstructionRName", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["AInsured", (await $.mv((await $.wv([$t13], "ODSConstructionRAddress", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["TInsured", (await $.mv((await $.wv([$t13], "ODSConstructionRPhone", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["FInsured", (await $.mv((await $.wv([$t13], "ODSConstructionRFax", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["RPeriod", $.add($.add((await $.wcall([$t13], "DateToStr", [(await $.mv((await $.wv([$t13], "ODSContractsBegin_Date", C, false)), "value"))], C)), " - "), (await $.wcall([$t13], "DateToStr", [(await $.mv((await $.wv([$t13], "ODSContractsEnd_Date", C, false)), "value"))], C))), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Beneficiary", (await $.mv((await $.wv([$t13], "ODSBeneficiaryName", C, false)), "value")), (await $.wv([$t13], "True", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["BAddress", (await $.mv((await $.wv([$t13], "ODSBeneficiaryAddress", C, false)), "value")), (await $.wv([$t13], "True", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["BTel", (await $.mv((await $.wv([$t13], "ODSBeneficiaryPhone", C, false)), "value")), (await $.wv([$t13], "True", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["BBank", (await $.mv((await $.wv([$t13], "ODSBeneficiaryBanking_details", C, false)), "value")), (await $.wv([$t13], "True", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 10, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["FullDesc", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONFullDescription", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Location", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONLocationObj", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Yearsinb", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONYEARSINBUSINESS", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["CPerson", (await $.mv((await $.wv([$t13], "ODSCustomersContactPerson", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["TCPerson", (await $.mv((await $.wv([$t13], "ODSCustomersContactPersonPhone", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["BUsage", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONBuildingusage", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["YearConst", (await $.wcall([$t13], "DateToStr", [(await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONconstyear", C, false)), "value"))], C)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["FloorsNum", (await $.wcall([$t13], "IntToStr", [(await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONFloorsNum", C, false)), "value"))], C)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["WallsM", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONWallsM", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["CeilingsM", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONCeilingsM", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["RoofM", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONRoofM", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Area", (await $.wcall([$t13], "FloatToStr", [(await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONArea", C, false)), "value"))], C)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["AppArea", (await $.wcall([$t13], "FloatToStr", [(await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONApplicantSpace", C, false)), "value"))], C)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Earthquake", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONEARTHQUAKEDETAILS", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Flamable", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONFlamable", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Surroinding", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONSURROINDINGDETAILS", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Situeted", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONSitueted", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Issecure", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONGuard", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Alarm", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONAlarm", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Locks", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONLocks", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["SLocks", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONSecurityLocks", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Bars", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONBars", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Other", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONOther", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Settings", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONSettings", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Repair", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONRepair", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["RepairDetail", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONRepair", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Heated", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONHeated", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["ValueType", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONValueType", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Buildings", (await $.wcall([$t13], "floatToStr", [(await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONBuildings", C, false)), "value"))], C)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Engineering", (await $.wcall([$t13], "floatToStr", [(await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONEngineer", C, false)), "value"))], C)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Exdeco", (await $.wcall([$t13], "floatToStr", [(await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONExDeco", C, false)), "value"))], C)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Indeco", (await $.wcall([$t13], "floatToStr", [(await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONIndeco", C, false)), "value"))], C)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Firesys", (await $.wcall([$t13], "floatToStr", [(await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONFiresys", C, false)), "value"))], C)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Annual", (await $.wcall([$t13], "floatToStr", [(await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONAnnual", C, false)), "value"))], C)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Wages", (await $.wcall([$t13], "floatToStr", [(await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONWages", C, false)), "value"))], C)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Rent", (await $.wcall([$t13], "floatToStr", [(await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONRent", C, false)), "value"))], C)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Employes", (await $.wcall([$t13], "floatToStr", [(await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONEmployes", C, false)), "value"))], C)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Indeminity", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONIndeminity", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Expirity", (await $.wcall([$t13], "DateToStr", [(await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONExpirity", C, false)), "value"))], C)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["LHistory", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONLossHistory", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["OtherInf", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONRenewal", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["Thirdp", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONThirdParty", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t13], "SetBookmark", ["OtherInform", (await $.mv((await $.wv([$t13], "ODSCONSTRUCTIONOtherInf", C, false)), "value")), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "false", C, false)), (await $.wv([$t13], "False", C, false)), (await $.wv([$t13], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t13], "False", C, false))], C)));
    }
  } finally {
    await $.mcall((await $.v(C, "ConstructionExporter")), "Show", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstraction", "btApplyClick", async function btApplyClick(Self, p0) {
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
  U.method("TConstraction", "PeriodOinsChange", async function PeriodOinsChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstraction", "edBeginDateChange", async function edBeginDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "MonthPeriod", []));
  await $.mcall((await $.v(C, "ODSConstruction")), "Edit", []);
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConstraction", "MonthPeriod", async function MonthPeriod(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "MonthEdit")), "Text", $.add((await $.call(C, "IntToStr", [(await $.call(C, "trunc", [$.fdiv(($.sub((await $.mv((await $.v(C, "edEndDate")), "DateTime")), (await $.mv((await $.v(C, "edBeginDate")), "DateTime")))), 30)]))])), " ay"));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  return U;
}
