// Generated from crConclusionMainUnitImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("crConclusionMainUnitImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "ComCtrls", "StdCtrls", "DBCtrls", "DB", "Mask", "CMDBSearchEdit", "Buttons", "ImgList", "ActnList", "crConclusionCommonDecls", "DBCtrlsEh", "DBLookupEh", "Grids", "DBGrids", "HintBox", "OracleData", "variants", "Oracle", "DBGridEh", "sboapiDataModuleImpl", "crCommonDecls", "sbsystem", "crCreateCMAccountsImpl", "crLoanBalAccsUnit", "crDataModuleConclusion", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TConclusionForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "btnsave": {"name": "btnSave", "type": "TButton"}, "btncancel": {"name": "btnCancel", "type": "TButton"}, "btnclose": {"name": "btnClose", "type": "TButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "savechanges": {"name": "SaveChanges", "type": "TAction"}, "dismischanges": {"name": "DismisChanges", "type": "TAction"}, "closeform": {"name": "CloseForm", "type": "TAction"}, "lblavtacc": {"name": "LblAvtAcc", "type": "TLabel"}, "refreshlistlbl": {"name": "RefreshListLbl", "type": "TLabel"}, "lblavtsearch": {"name": "LblAvtSearch", "type": "TLabel"}, "hbconclusion": {"name": "HBConclusion", "type": "THintBox"}, "oraclequery1": {"name": "OracleQuery1", "type": "TOracleQuery"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "pagecontrolmain": {"name": "PageControlMain", "type": "TPageControl"}, "tbcust": {"name": "tbCust", "type": "TTabSheet"}, "panel23": {"name": "Panel23", "type": "TPanel"}, "label39": {"name": "Label39", "type": "TLabel"}, "label40": {"name": "Label40", "type": "TLabel"}, "label41": {"name": "Label41", "type": "TLabel"}, "label42": {"name": "Label42", "type": "TLabel"}, "custidedit": {"name": "CustIDEdit", "type": "TDBEdit"}, "dblookupcomboboxeh19": {"name": "DBLookupComboboxEh19", "type": "TDBLookupComboboxEh"}, "panel62": {"name": "Panel62", "type": "TPanel"}, "label135": {"name": "Label135", "type": "TLabel"}, "label136": {"name": "Label136", "type": "TLabel"}, "label144": {"name": "Label144", "type": "TLabel"}, "label148": {"name": "Label148", "type": "TLabel"}, "dblookupcomboboxeh30": {"name": "DBLookupComboboxEh30", "type": "TDBLookupComboboxEh"}, "cmsearchedit14": {"name": "CMSearchEdit14", "type": "TCMSearchEdit"}, "panel63": {"name": "Panel63", "type": "TPanel"}, "label137": {"name": "Label137", "type": "TLabel"}, "label138": {"name": "Label138", "type": "TLabel"}, "label158": {"name": "Label158", "type": "TLabel"}, "label159": {"name": "Label159", "type": "TLabel"}, "dblookupcomboboxeh29": {"name": "DBLookupComboboxEh29", "type": "TDBLookupComboboxEh"}, "cmsearchedit16": {"name": "CMSearchEdit16", "type": "TCMSearchEdit"}, "panel64": {"name": "Panel64", "type": "TPanel"}, "label139": {"name": "Label139", "type": "TLabel"}, "label140": {"name": "Label140", "type": "TLabel"}, "label143": {"name": "Label143", "type": "TLabel"}, "label147": {"name": "Label147", "type": "TLabel"}, "dblookupcomboboxeh28": {"name": "DBLookupComboboxEh28", "type": "TDBLookupComboboxEh"}, "cmsearchedit13": {"name": "CMSearchEdit13", "type": "TCMSearchEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "panel65": {"name": "Panel65", "type": "TPanel"}, "label141": {"name": "Label141", "type": "TLabel"}, "label142": {"name": "Label142", "type": "TLabel"}, "label145": {"name": "Label145", "type": "TLabel"}, "label149": {"name": "Label149", "type": "TLabel"}, "dblookupcomboboxeh31": {"name": "DBLookupComboboxEh31", "type": "TDBLookupComboboxEh"}, "cmsearchedit15": {"name": "CMSearchEdit15", "type": "TCMSearchEdit"}, "panel51": {"name": "Panel51", "type": "TPanel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label64": {"name": "Label64", "type": "TLabel"}, "label91": {"name": "Label91", "type": "TLabel"}, "label153": {"name": "Label153", "type": "TLabel"}, "dblookupcomboboxeh33": {"name": "DBLookupComboboxEh33", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh34": {"name": "DBLookupComboboxEh34", "type": "TDBLookupComboboxEh"}, "panel36": {"name": "Panel36", "type": "TPanel"}, "label79": {"name": "Label79", "type": "TLabel"}, "label80": {"name": "Label80", "type": "TLabel"}, "dbnumberediteh6": {"name": "DBNumberEditEh6", "type": "TDBNumberEditEh"}, "panel37": {"name": "Panel37", "type": "TPanel"}, "label81": {"name": "Label81", "type": "TLabel"}, "label82": {"name": "Label82", "type": "TLabel"}, "dbnumberediteh7": {"name": "DBNumberEditEh7", "type": "TDBNumberEditEh"}, "panel39": {"name": "Panel39", "type": "TPanel"}, "label85": {"name": "Label85", "type": "TLabel"}, "dbnumberediteh9": {"name": "DBNumberEditEh9", "type": "TDBNumberEditEh"}, "panel38": {"name": "Panel38", "type": "TPanel"}, "label83": {"name": "Label83", "type": "TLabel"}, "dbnumberediteh8": {"name": "DBNumberEditEh8", "type": "TDBNumberEditEh"}, "panel56": {"name": "Panel56", "type": "TPanel"}, "label160": {"name": "Label160", "type": "TLabel"}, "dblookupcomboboxeh35": {"name": "DBLookupComboboxEh35", "type": "TDBLookupComboboxEh"}, "tbcredit": {"name": "tbCredit", "type": "TTabSheet"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "branchcbeh": {"name": "BranchCBEh", "type": "TDBLookupComboboxEh"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbdatetimeediteh2": {"name": "DBDateTimeEditEh2", "type": "TDBDateTimeEditEh"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "panel43": {"name": "Panel43", "type": "TPanel"}, "label98": {"name": "Label98", "type": "TLabel"}, "label99": {"name": "Label99", "type": "TLabel"}, "editperiodcredit": {"name": "EditPeriodCredit", "type": "TDBEditEh"}, "panel20": {"name": "Panel20", "type": "TPanel"}, "panel66": {"name": "Panel66", "type": "TPanel"}, "label150": {"name": "Label150", "type": "TLabel"}, "label151": {"name": "Label151", "type": "TLabel"}, "dblookupcomboboxeh32": {"name": "DBLookupComboboxEh32", "type": "TDBLookupComboboxEh"}, "panel52": {"name": "Panel52", "type": "TPanel"}, "label48": {"name": "Label48", "type": "TLabel"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "panel53": {"name": "Panel53", "type": "TPanel"}, "label100": {"name": "Label100", "type": "TLabel"}, "dbediteh5": {"name": "DBEditEh5", "type": "TDBEditEh"}, "panel55": {"name": "Panel55", "type": "TPanel"}, "label101": {"name": "Label101", "type": "TLabel"}, "dbnumberediteh11": {"name": "DBNumberEditEh11", "type": "TDBNumberEditEh"}, "panel72": {"name": "Panel72", "type": "TPanel"}, "label162": {"name": "Label162", "type": "TLabel"}, "dblookupcomboboxeh37": {"name": "DBLookupComboboxEh37", "type": "TDBLookupComboboxEh"}, "panel74": {"name": "Panel74", "type": "TPanel"}, "label164": {"name": "Label164", "type": "TLabel"}, "dblookupcomboboxeh36": {"name": "DBLookupComboboxEh36", "type": "TDBLookupComboboxEh"}, "groupbox15": {"name": "GroupBox15", "type": "TGroupBox"}, "dbedit15": {"name": "DBEdit15", "type": "TDBEdit"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "label30": {"name": "Label30", "type": "TLabel"}, "label32": {"name": "Label32", "type": "TLabel"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "groupbox14": {"name": "GroupBox14", "type": "TGroupBox"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "dbedit30": {"name": "DBEdit30", "type": "TDBLookupComboboxEh"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "label102": {"name": "Label102", "type": "TLabel"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "dbnumberediteh1": {"name": "DBNumberEditEh1", "type": "TDBNumberEditEh"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "label20": {"name": "Label20", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "dbnumberediteh2": {"name": "DBNumberEditEh2", "type": "TDBNumberEditEh"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "label22": {"name": "Label22", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "dbnumberediteh4": {"name": "DBNumberEditEh4", "type": "TDBNumberEditEh"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "label26": {"name": "Label26", "type": "TLabel"}, "label27": {"name": "Label27", "type": "TLabel"}, "dbnumberediteh3": {"name": "DBNumberEditEh3", "type": "TDBNumberEditEh"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label31": {"name": "Label31", "type": "TLabel"}, "dblookupcomboboxeh8": {"name": "DBLookupComboboxEh8", "type": "TDBLookupComboboxEh"}, "panel21": {"name": "Panel21", "type": "TPanel"}, "label33": {"name": "Label33", "type": "TLabel"}, "label84": {"name": "Label84", "type": "TLabel"}, "dblookupcomboboxeh9": {"name": "DBLookupComboboxEh9", "type": "TDBLookupComboboxEh"}, "panel32": {"name": "Panel32", "type": "TPanel"}, "label71": {"name": "Label71", "type": "TLabel"}, "label86": {"name": "Label86", "type": "TLabel"}, "dblookupcomboboxeh10": {"name": "DBLookupComboboxEh10", "type": "TDBLookupComboboxEh"}, "panel33": {"name": "Panel33", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label35": {"name": "Label35", "type": "TLabel"}, "dblookupcomboboxeh13": {"name": "DBLookupComboboxEh13", "type": "TDBLookupComboboxEh"}, "panel44": {"name": "Panel44", "type": "TPanel"}, "label56": {"name": "Label56", "type": "TLabel"}, "label60": {"name": "Label60", "type": "TLabel"}, "dblookupcomboboxeh25": {"name": "DBLookupComboboxEh25", "type": "TDBLookupComboboxEh"}, "groupbox16": {"name": "GroupBox16", "type": "TGroupBox"}, "dbedit14": {"name": "DBEdit14", "type": "TDBEdit"}, "groupbox17": {"name": "GroupBox17", "type": "TGroupBox"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "tbcreditaccounts": {"name": "tbCreditAccounts", "type": "TTabSheet"}, "panel22": {"name": "Panel22", "type": "TPanel"}, "label34": {"name": "Label34", "type": "TLabel"}, "label37": {"name": "Label37", "type": "TLabel"}, "label38": {"name": "Label38", "type": "TLabel"}, "dblookupcomboboxeh6": {"name": "DBLookupComboboxEh6", "type": "TDBLookupComboboxEh"}, "cmsearcheditloacaccs": {"name": "CMSearchEditLoacAccs", "type": "TCMSearchEdit"}, "panel24": {"name": "Panel24", "type": "TPanel"}, "label43": {"name": "Label43", "type": "TLabel"}, "label45": {"name": "Label45", "type": "TLabel"}, "label46": {"name": "Label46", "type": "TLabel"}, "cmsearchedit1": {"name": "CMSearchEdit1", "type": "TCMSearchEdit"}, "dblookupcomboboxeh11": {"name": "DBLookupComboboxEh11", "type": "TDBLookupComboboxEh"}, "panel25": {"name": "Panel25", "type": "TPanel"}, "label47": {"name": "Label47", "type": "TLabel"}, "label49": {"name": "Label49", "type": "TLabel"}, "label50": {"name": "Label50", "type": "TLabel"}, "cmsearchedit3": {"name": "CMSearchEdit3", "type": "TCMSearchEdit"}, "dblookupcomboboxeh12": {"name": "DBLookupComboboxEh12", "type": "TDBLookupComboboxEh"}, "panel26": {"name": "Panel26", "type": "TPanel"}, "label51": {"name": "Label51", "type": "TLabel"}, "label53": {"name": "Label53", "type": "TLabel"}, "label54": {"name": "Label54", "type": "TLabel"}, "cmsearcheditpercent": {"name": "CMSearchEditPercent", "type": "TCMSearchEdit"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "panel27": {"name": "Panel27", "type": "TPanel"}, "label55": {"name": "Label55", "type": "TLabel"}, "label57": {"name": "Label57", "type": "TLabel"}, "label58": {"name": "Label58", "type": "TLabel"}, "cmsearchedit5": {"name": "CMSearchEdit5", "type": "TCMSearchEdit"}, "dblookupcomboboxeh14": {"name": "DBLookupComboboxEh14", "type": "TDBLookupComboboxEh"}, "panel28": {"name": "Panel28", "type": "TPanel"}, "label59": {"name": "Label59", "type": "TLabel"}, "label61": {"name": "Label61", "type": "TLabel"}, "label62": {"name": "Label62", "type": "TLabel"}, "cmsearchedit6": {"name": "CMSearchEdit6", "type": "TCMSearchEdit"}, "dblookupcomboboxeh15": {"name": "DBLookupComboboxEh15", "type": "TDBLookupComboboxEh"}, "panel29": {"name": "Panel29", "type": "TPanel"}, "label63": {"name": "Label63", "type": "TLabel"}, "label65": {"name": "Label65", "type": "TLabel"}, "label66": {"name": "Label66", "type": "TLabel"}, "cmsearchedit7": {"name": "CMSearchEdit7", "type": "TCMSearchEdit"}, "dblookupcomboboxeh16": {"name": "DBLookupComboboxEh16", "type": "TDBLookupComboboxEh"}, "panel30": {"name": "Panel30", "type": "TPanel"}, "label44": {"name": "Label44", "type": "TLabel"}, "label68": {"name": "Label68", "type": "TLabel"}, "label69": {"name": "Label69", "type": "TLabel"}, "cmsearchedit8": {"name": "CMSearchEdit8", "type": "TCMSearchEdit"}, "dblookupcomboboxeh17": {"name": "DBLookupComboboxEh17", "type": "TDBLookupComboboxEh"}, "panel31": {"name": "Panel31", "type": "TPanel"}, "label70": {"name": "Label70", "type": "TLabel"}, "label72": {"name": "Label72", "type": "TLabel"}, "label73": {"name": "Label73", "type": "TLabel"}, "cmsearchedit9": {"name": "CMSearchEdit9", "type": "TCMSearchEdit"}, "dblookupcomboboxeh18": {"name": "DBLookupComboboxEh18", "type": "TDBLookupComboboxEh"}, "panel34": {"name": "Panel34", "type": "TPanel"}, "label67": {"name": "Label67", "type": "TLabel"}, "label74": {"name": "Label74", "type": "TLabel"}, "label75": {"name": "Label75", "type": "TLabel"}, "cmsearchedit2": {"name": "CMSearchEdit2", "type": "TCMSearchEdit"}, "dblookupcomboboxeh20": {"name": "DBLookupComboboxEh20", "type": "TDBLookupComboboxEh"}, "panel40": {"name": "Panel40", "type": "TPanel"}, "label87": {"name": "Label87", "type": "TLabel"}, "label88": {"name": "Label88", "type": "TLabel"}, "label89": {"name": "Label89", "type": "TLabel"}, "cmsearchedit10": {"name": "CMSearchEdit10", "type": "TCMSearchEdit"}, "dblookupcomboboxeh22": {"name": "DBLookupComboboxEh22", "type": "TDBLookupComboboxEh"}, "panel35": {"name": "Panel35", "type": "TPanel"}, "label76": {"name": "Label76", "type": "TLabel"}, "label77": {"name": "Label77", "type": "TLabel"}, "label78": {"name": "Label78", "type": "TLabel"}, "cmsearchedit4": {"name": "CMSearchEdit4", "type": "TCMSearchEdit"}, "dblookupcomboboxeh21": {"name": "DBLookupComboboxEh21", "type": "TDBLookupComboboxEh"}, "panel41": {"name": "Panel41", "type": "TPanel"}, "label90": {"name": "Label90", "type": "TLabel"}, "label92": {"name": "Label92", "type": "TLabel"}, "label93": {"name": "Label93", "type": "TLabel"}, "cmsearchedit11": {"name": "CMSearchEdit11", "type": "TCMSearchEdit"}, "dblookupcomboboxeh23": {"name": "DBLookupComboboxEh23", "type": "TDBLookupComboboxEh"}, "panel42": {"name": "Panel42", "type": "TPanel"}, "label94": {"name": "Label94", "type": "TLabel"}, "label96": {"name": "Label96", "type": "TLabel"}, "label97": {"name": "Label97", "type": "TLabel"}, "cmsearchedit12": {"name": "CMSearchEdit12", "type": "TCMSearchEdit"}, "dblookupcomboboxeh24": {"name": "DBLookupComboboxEh24", "type": "TDBLookupComboboxEh"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel67": {"name": "Panel67", "type": "TPanel"}, "label154": {"name": "Label154", "type": "TLabel"}, "label157": {"name": "Label157", "type": "TLabel"}, "cbpledgsorts": {"name": "CBPledgsorts", "type": "TDBLookupComboboxEh"}, "panel70": {"name": "Panel70", "type": "TPanel"}, "label103": {"name": "Label103", "type": "TLabel"}, "dbediteh11": {"name": "DBEditEh11", "type": "TDBEditEh"}, "panel73": {"name": "Panel73", "type": "TPanel"}, "inuse_rg": {"name": "InUse_rg", "type": "TRadioGroup"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "dbediteh12": {"name": "DBEditEh12", "type": "TDBEditEh"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "dbdatetimeediteh3": {"name": "DBDateTimeEditEh3", "type": "TDBDateTimeEditEh"}, "panel76": {"name": "Panel76", "type": "TPanel"}, "label171": {"name": "Label171", "type": "TLabel"}, "dbediteh20": {"name": "DBEditEh20", "type": "TDBEditEh"}, "panel68": {"name": "Panel68", "type": "TPanel"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "label24": {"name": "Label24", "type": "TLabel"}, "label25": {"name": "Label25", "type": "TLabel"}, "dblookupcomboboxeh7": {"name": "DBLookupComboboxEh7", "type": "TDBLookupComboboxEh"}, "panel71": {"name": "Panel71", "type": "TPanel"}, "label155": {"name": "Label155", "type": "TLabel"}, "dbediteh8": {"name": "DBEditEh8", "type": "TDBEditEh"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "label28": {"name": "Label28", "type": "TLabel"}, "label29": {"name": "Label29", "type": "TLabel"}, "dbnumberediteh5": {"name": "DBNumberEditEh5", "type": "TDBNumberEditEh"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "dbediteh9": {"name": "DBEditEh9", "type": "TDBEditEh"}, "panel75": {"name": "Panel75", "type": "TPanel"}, "label170": {"name": "Label170", "type": "TLabel"}, "dbediteh19": {"name": "DBEditEh19", "type": "TDBEditEh"}, "panel54": {"name": "Panel54", "type": "TPanel"}, "label115": {"name": "Label115", "type": "TLabel"}, "dbediteh10": {"name": "DBEditEh10", "type": "TDBEditEh"}, "panel69": {"name": "Panel69", "type": "TPanel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label156": {"name": "Label156", "type": "TLabel"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "panel57": {"name": "Panel57", "type": "TPanel"}, "label116": {"name": "Label116", "type": "TLabel"}, "label117": {"name": "Label117", "type": "TLabel"}, "label152": {"name": "Label152", "type": "TLabel"}, "dbedit13": {"name": "DBEdit13", "type": "TDBEdit"}, "dbdatetimeediteh4": {"name": "DBDateTimeEditEh4", "type": "TDBDateTimeEditEh"}, "dbedit32": {"name": "DBEdit32", "type": "TDBEdit"}, "panel58": {"name": "Panel58", "type": "TPanel"}, "label118": {"name": "Label118", "type": "TLabel"}, "dblookupcomboboxeh26": {"name": "DBLookupComboboxEh26", "type": "TDBLookupComboboxEh"}, "groupbox12": {"name": "GroupBox12", "type": "TGroupBox"}, "label163": {"name": "Label163", "type": "TLabel"}, "label165": {"name": "Label165", "type": "TLabel"}, "label166": {"name": "Label166", "type": "TLabel"}, "label167": {"name": "Label167", "type": "TLabel"}, "label168": {"name": "Label168", "type": "TLabel"}, "label169": {"name": "Label169", "type": "TLabel"}, "dbediteh13": {"name": "DBEditEh13", "type": "TDBEditEh"}, "groupbox13": {"name": "GroupBox13", "type": "TGroupBox"}, "dbediteh14": {"name": "DBEditEh14", "type": "TDBEditEh"}, "dbediteh15": {"name": "DBEditEh15", "type": "TDBEditEh"}, "dbediteh17": {"name": "DBEditEh17", "type": "TDBEditEh"}, "dbediteh18": {"name": "DBEditEh18", "type": "TDBEditEh"}, "dbdatetimeediteh7": {"name": "DBDateTimeEditEh7", "type": "TDBDateTimeEditEh"}, "tbadvancedinf": {"name": "tbAdvancedInf", "type": "TTabSheet"}, "panel45": {"name": "Panel45", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel46": {"name": "Panel46", "type": "TPanel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dbediteh3": {"name": "DBEditEh3", "type": "TDBEditEh"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "dblookupcomboboxeh27": {"name": "DBLookupComboboxEh27", "type": "TDBLookupComboboxEh"}, "dbediteh7": {"name": "DBEditEh7", "type": "TDBEditEh"}, "bancruptey_rg": {"name": "Bancruptey_rg", "type": "TRadioGroup"}, "panel47": {"name": "Panel47", "type": "TPanel"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "dbediteh4": {"name": "DBEditEh4", "type": "TDBEditEh"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "dbediteh6": {"name": "DBEditEh6", "type": "TDBEditEh"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBEditEh"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel48": {"name": "Panel48", "type": "TPanel"}, "label106": {"name": "Label106", "type": "TLabel"}, "label107": {"name": "Label107", "type": "TLabel"}, "label108": {"name": "Label108", "type": "TLabel"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "panel49": {"name": "Panel49", "type": "TPanel"}, "label109": {"name": "Label109", "type": "TLabel"}, "label110": {"name": "Label110", "type": "TLabel"}, "label111": {"name": "Label111", "type": "TLabel"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "panel50": {"name": "Panel50", "type": "TPanel"}, "label112": {"name": "Label112", "type": "TLabel"}, "label113": {"name": "Label113", "type": "TLabel"}, "label114": {"name": "Label114", "type": "TLabel"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "pagecontrolgoorantee": {"name": "PageControlGoorantee", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "panel59": {"name": "Panel59", "type": "TPanel"}, "label104": {"name": "Label104", "type": "TLabel"}, "label119": {"name": "Label119", "type": "TLabel"}, "label124": {"name": "Label124", "type": "TLabel"}, "label105": {"name": "Label105", "type": "TLabel"}, "label129": {"name": "Label129", "type": "TLabel"}, "label130": {"name": "Label130", "type": "TLabel"}, "label131": {"name": "Label131", "type": "TLabel"}, "label172": {"name": "Label172", "type": "TLabel"}, "label173": {"name": "Label173", "type": "TLabel"}, "label174": {"name": "Label174", "type": "TLabel"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "dbedit16": {"name": "DBEdit16", "type": "TDBEdit"}, "dbedit17": {"name": "DBEdit17", "type": "TDBEdit"}, "dbedit23": {"name": "DBEdit23", "type": "TDBEdit"}, "dbedit24": {"name": "DBEdit24", "type": "TDBEdit"}, "dbedit25": {"name": "DBEdit25", "type": "TDBEdit"}, "dbediteh21": {"name": "DBEditEh21", "type": "TDBEditEh"}, "dbdatetimeediteh5": {"name": "DBDateTimeEditEh5", "type": "TDBDateTimeEditEh"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "panel61": {"name": "Panel61", "type": "TPanel"}, "label122": {"name": "Label122", "type": "TLabel"}, "label123": {"name": "Label123", "type": "TLabel"}, "label126": {"name": "Label126", "type": "TLabel"}, "label128": {"name": "Label128", "type": "TLabel"}, "label132": {"name": "Label132", "type": "TLabel"}, "label133": {"name": "Label133", "type": "TLabel"}, "label134": {"name": "Label134", "type": "TLabel"}, "label175": {"name": "Label175", "type": "TLabel"}, "label176": {"name": "Label176", "type": "TLabel"}, "label177": {"name": "Label177", "type": "TLabel"}, "dbedit26": {"name": "DBEdit26", "type": "TDBEdit"}, "dbedit27": {"name": "DBEdit27", "type": "TDBEdit"}, "dbedit28": {"name": "DBEdit28", "type": "TDBEdit"}, "dbedit18": {"name": "DBEdit18", "type": "TDBEdit"}, "dbedit19": {"name": "DBEdit19", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbediteh22": {"name": "DBEditEh22", "type": "TDBEditEh"}, "dbdatetimeediteh6": {"name": "DBDateTimeEditEh6", "type": "TDBDateTimeEditEh"}, "dbedit12": {"name": "DBEdit12", "type": "TDBEdit"}, "panel60": {"name": "Panel60", "type": "TPanel"}, "label120": {"name": "Label120", "type": "TLabel"}, "label121": {"name": "Label121", "type": "TLabel"}, "label125": {"name": "Label125", "type": "TLabel"}, "label127": {"name": "Label127", "type": "TLabel"}, "dbedit20": {"name": "DBEdit20", "type": "TDBEdit"}, "dbedit21": {"name": "DBEdit21", "type": "TDBEdit"}, "dbedit22": {"name": "DBEdit22", "type": "TDBEdit"}, "panel77": {"name": "Panel77", "type": "TPanel"}, "label36": {"name": "Label36", "type": "TLabel"}, "label52": {"name": "Label52", "type": "TLabel"}, "dbnumberediteh10": {"name": "DBNumberEditEh10", "type": "TDBNumberEditEh"}, "panel78": {"name": "Panel78", "type": "TPanel"}, "label181": {"name": "Label181", "type": "TLabel"}, "label182": {"name": "Label182", "type": "TLabel"}, "label183": {"name": "Label183", "type": "TLabel"}, "label95": {"name": "Label95", "type": "TLabel"}, "cmsearchedit17": {"name": "CMSearchEdit17", "type": "TCMSearchEdit"}, "penaccno": {"name": "Penaccno", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh38": {"name": "DBLookupComboboxEh38", "type": "TDBLookupComboboxEh"}, "ednewname": {"name": "edNewName", "type": "TEdit"}, "finsertcredit": {"name": "FInsertCredit", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("ConclusionForm", null, "TConclusionForm");
    U.var_("Processed", false, "Boolean");
    U.var_("p_id", 0, "integer");
  });
  U.method("TConclusionForm", "CheckFields", async function CheckFields(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  L0["rs_checkfields"] = "\"%s\" - sahəsi boşdur!";
  L0["showmsg"] = $.fn(async function ShowMsg(p0) {
  const L1 = {"message": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["message"]);
  await $.stmt((await $.mcall((await $.v(C, "HBConclusion")), "ShowMessage", [L1["message"]])));
  $.abort();
  return L1.result;
});
  L0["checkfieldbyname"] = $.fn(async function CheckFieldByName(p0) {
  const L1 = {"fieldname": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["fieldname"]);
  if ($.truthy((await $.mv(L1["fieldname"], "IsNull")))) {
    await $.stmt((await $.callv(L0["showmsg"], [(await $.call(C, "Format", [L0["rs_checkfields"], [(await $.mv(L1["fieldname"], "DisplayName"))]]))])));
  }
  return L1.result;
});
  L0["checkfieldbynames"] = $.fn(async function CheckFieldByNames() {
  const L1 = {result: undefined};
  {
    const $t1 = (await $.v(C, "crDataModuleConcl"));
    const $t2 = (await $.wv([$t1], "CreditProps", C, false));
    if ($.truthy($.eq((await $.mv((await $.wv([$t1, $t2], "DBLookupComboboxEh29", C, false)), "text")), ""))) {
      await $.stmt((await $.mcall((await $.wv([$t1, $t2], "HBConclusion", C, false)), "ShowMessage", ["Borcalanın tipi (Mülkiyyət növü) sahəsi boşdur !"])));
      $.abort();
    }
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsCREDITACT", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsACTIVITIES", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsCUSTOMERTYPE", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsNUMBEROFCREDIT", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsCURRENCY", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsPERSONALTYPE", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsCREDITTYPE", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    if ($.truthy($.eq((await $.mv((await $.wv([$t1, $t2], "DBLookupComboboxEh32", C, false)), "text")), ""))) {
      await $.stmt((await $.mcall((await $.wv([$t1, $t2], "HBConclusion", C, false)), "ShowMessage", ["Zəmanətin verilmə  məqsədi sahəsi boşdur !"])));
      $.abort();
    }
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsCREDITLINEAMOUNT", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsANNUALYINTERESTRATE", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsANNUALYOVERDUERATE", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsANNUALYPENALTYRATE", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsRESERVEID", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsAUTOPAYMENT", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsAUTOEXPIRE", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsPENACCID", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsOUTGUARANTEEACCID", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsPLEDGEID_P", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsPLEDGEID", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsPLEDGENAME", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsPLEDGEPRICE", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsPLEDGSORTS", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
  }
  return L1.result;
});
  await $.stmt($.callv(L0["checkfieldbynames"], []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TConclusionForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TConclusionForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "crDataModuleConcl", (await $.mcall((await $.v(C, "TcrDataModuleConcl")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  await $.set(C, "Processed", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "edNewNameClick", async function edNewNameClick(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined, "procname": '', "i": 0};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.and_(($.ne((await $.call(C, "Trim", [(await $.mv((L0["sender"]), "Text"))])), "")), async () => ($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN")))))))) {
    L0["procname"] = "AddComp";
    L0["procname"] = $.add($.add($.add($.add($.add(" insert into cr_guarantyorgname (name) values ", "("), "'"), (await $.mv((L0["sender"]), "Text"))), "'"), ")");
    await $.mset((await $.mv((await $.v(C, "OracleQuery1")), "sql")), "text", L0["procname"]);
    await $.mcall((await $.v(C, "OracleQuery1")), "Execute", []);
    await $.mset((await $.mv((await $.v(C, "OracleQuery1")), "sql")), "text", "commit");
    await $.mcall((await $.v(C, "OracleQuery1")), "Execute", []);
    await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "GUR_name")), "Refresh", []);
    await $.mcall((await $.v(C, "OracleDataSet1")), "open", []);
    await $.mset((await $.v(C, "DBEdit30")), "KeyValue", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "fieldbyname", ["id"])), "asinteger")));
    await $.mset(L0["sender"], "Visible", false);
    { const $t3 = $.sub((await $.v(C, "ComponentCount")), 1);
      L0["i"] = 0;
      let $t4 = true;
      for (;;) {
        if (!$t4) { L0["i"] = $.succ(L0["i"], 1); }
        $t4 = false;
        if (!($.ord(L0["i"]) <= $.ord($t3))) break;
        if ($.truthy($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TSpeedButton"))) {
          await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Enabled", true);
        }
        await $.tick();
      }
    }
  }
  if ($.truthy(($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN")))))) {
    await $.mset(L0["sender"], "Visible", false);
    { const $t5 = $.sub((await $.v(C, "ComponentCount")), 1);
      L0["i"] = 0;
      let $t6 = true;
      for (;;) {
        if (!$t6) { L0["i"] = $.succ(L0["i"], 1); }
        $t6 = false;
        if (!($.ord(L0["i"]) <= $.ord($t5))) break;
        if ($.truthy($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TSpeedButton"))) {
          await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Enabled", true);
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TConclusionForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PageControlMain")), "ActivePageIndex", 0);
  await $.mset((await $.v(C, "PageControlGoorantee")), "ActivePageIndex", 0);
  await $.mcall((await $.v(C, "CustIDEdit")), "SetFocus", []);
  await $.mset((await $.v(C, "crDataModuleConcl")), "FInsertCredit", (await $.v(C, "FInsertCredit")));
  await $.set(C, "Processed", false);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "edNewName"))]))))) {
    await $.set(C, "edNewName", (await $.mcall((await $.v(C, "TEdit")), "Create", [Self])));
  }
  {
    const $t7 = (await $.v(C, "edNewName"));
    await $.wset([$t7], "Parent", (await $.wv([$t7], "GroupBox14", C, false)), C);
    await $.wset([$t7], "OnKeyDown", (await $.wv([$t7], "edNewNameClick", C, true)), C);
    await $.wset([$t7], "Visible", (await $.wv([$t7], "False", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "New", async function New(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["snewcontract"] = "Yeni müqavilənin əlavə olunması.";
  await $.set(C, "FInsertCredit", true);
  await $.mset((await $.v(C, "CloseForm")), "Enabled", true);
  await $.stmt($.call(C, "DoInsert", []));
  await $.set(C, "Caption", L0["snewcontract"]);
  L0["result"] = (await $.v(C, "ShowModal"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConclusionForm", "Edit", async function Edit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0, "p_id": 0, "fcreditid": 0, "fcreditno": ''};
  L0["seditcontract"] = "%s № li müqavilənin redaktə olunması.";
  L0["fcreditid"] = (await $.v(C, "Get_SelectedCrdID"));
  L0["fcreditno"] = (await $.v(C, "Get_SelectedCrdNo"));
  await $.mset((await $.v(C, "CloseForm")), "Enabled", false);
  await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "EstateTypeData")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "EstateTypeData")), "open", []);
  await $.stmt((await $.call(C, "DoEdit", [L0["fcreditid"]])));
  await $.set(C, "FInsertCredit", false);
  await $.set(C, "Caption", (await $.call(C, "Format", [L0["seditcontract"], [L0["fcreditno"]]])));
  L0["result"] = (await $.v(C, "ShowModal"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TConclusionForm", "look", async function look(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0, "fcreditid": 0, "fcreditno": ''};
  L0["seditcontract"] = "%s № li müqaviləyə baxmaq.";
  L0["fcreditid"] = (await $.v(C, "Get_SelectedCrdID"));
  L0["fcreditno"] = (await $.v(C, "Get_SelectedCrdNo"));
  await $.mset((await $.v(C, "CloseForm")), "Enabled", false);
  await $.stmt((await $.call(C, "DoEdit", [L0["fcreditid"]])));
  await $.set(C, "FInsertCredit", false);
  await $.set(C, "Caption", (await $.call(C, "Format", [L0["seditcontract"], [L0["fcreditno"]]])));
  await $.mset((await $.v(C, "btnSave")), "enabled", false);
  L0["result"] = (await $.v(C, "ShowModal"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("SaveCredit", async function SaveCredit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t8 = (await $.mv((await $.v(C, "crDataModuleConcl")), "CreditProps"));
    const $t9 = (await $.wv([$t8], "SavedCredit", C, false));
    await $.wset([$t8, $t9], "Currency", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["Currency"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "BoorowerID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["BoorowerID"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "PINCODE", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["PINCODE"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "CreditLineAmount", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["CreditLineAmount"], C)), "AsFloat")), C);
    await $.wset([$t8, $t9], "AnnualyInterestRate", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["AnnualyInterestRate"], C)), "AsFloat")), C);
    await $.wset([$t8, $t9], "AnnualyOverdueRate", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["AnnualyOverdueRate"], C)), "AsFloat")), C);
    await $.wset([$t8, $t9], "AnnualyPenaltyRate", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["AnnualyPenaltyRate"], C)), "AsFloat")), C);
    await $.wset([$t8, $t9], "AnnualBankRate", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["AnnualBankRate"], C)), "AsFloat")), C);
    await $.wset([$t8, $t9], "DateOfConclusion", (await $.wcall([$t8, $t9], "Int", [(await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["DateOfConclusion"], C)), "AsDateTime"))], C)), C);
    await $.wset([$t8, $t9], "DueDateFirstContract", (await $.wcall([$t8, $t9], "Int", [(await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["DueDateFirstContract"], C)), "AsDateTime"))], C)), C);
    await $.wset([$t8, $t9], "NumberOfCredit", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["NumberOfCredit"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "PurposeOfCredit", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["PurposeOfCredit"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "CustomerType", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["CustomerType"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "CreditType", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["CreditType"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "PersonalType", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["PersonalType"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "AutoPayment", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["AutoPayment"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "AutoExpire", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["AutoExpire"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "UsrGroup", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["UsrGroup"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "BranchID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["BranchID"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "BoorowerAccID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["BoorowerAccID"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "LoanAccID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["LoanAccID"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "DueLoanAccID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["DueLoanAccID"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "InterestAccID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["InterestAccID"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "DueInterestAccID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["DueInterestAccID"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "PrimaryReserveAccID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["PrimaryReserveAccID"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "SecondaryReserveAccID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["SecondaryReserveAccID"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "OutCollateralAccID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["OutCollateralAccID"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "OutGuaranteeAccID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["OutGuaranteeAccID"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "OutInterestAccID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["OutInterestAccID"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "CrdlineOblAccID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["CrdlineOblAccID"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "OUTLoanAccID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["OUTLoanAccID"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "primarypurreserveaccid", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["primarypurreserveaccid"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "secondarypurreserveaccid", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["secondarypurreserveaccid"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "ReserveID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["ReserveID"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "DueReserveID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["DueReserveID"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "PledgePrice", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["PledgePrice"], C)), "AsFloat")), C);
    await $.wset([$t8, $t9], "PledgePriceTorpaq", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["PledgePriceTorpaq"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "PledgePriceEv", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["PledgePriceEv"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "PledgeID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["PledgeID"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "PledgePriceEvKv", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["PledgePriceEvKv"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "PledgePriceTorpaqHa", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["PledgePriceTorpaqHa"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "newfinanceamount", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["newfinanceamount"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "numberofBankCredit", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["numberofBankCredit"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "intcalcmethod", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["intcalcmethod"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "pledgsorts", (await $.mv((await $.wcall([$t8, $t9], "FieldByname", ["pledgsorts"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "BOORID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["BOORID"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "NAME", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["NAME"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "COUNTRYCODE", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["COUNTRYCODE"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "BANKRUPTEYSTATUS", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["BANKRUPTEYSTATUS"], C)), "Asinteger")), C);
    await $.wset([$t8, $t9], "PHONENUMBER", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["PHONENUMBER"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "ADDRESS", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["ADDRESS"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "FIRSTOWNERID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["FIRSTOWNERID"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "FIRSTOWNERNAME", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["FIRSTOWNERNAME"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "SECONDOWNERID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["SECONDOWNERID"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "SECONDOWNERNAME", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["SECONDOWNERNAME"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "THIRDOWNERID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["THIRDOWNERID"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "THIRDOWNERNAME", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["THIRDOWNERNAME"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "PLEDGENAME", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["PLEDGENAME"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "HOLDERNAME", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["HOLDERNAME"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "HOLDERADDRESS", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["HOLDERADDRESS"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "ANYINFOTODISTING", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["ANYINFOTODISTING"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "REGISTRYNO", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["REGISTRYNO"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "REGISTRYAGENCY", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["REGISTRYAGENCY"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "REGISTRYDATE", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["REGISTRYDATE"], C)), "AsDateTime")), C);
    await $.wset([$t8, $t9], "PLEDGEINUSE", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["PLEDGEINUSE"], C)), "AsFloat")), C);
    await $.wset([$t8, $t9], "PLEDGEINSURANT", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["PLEDGEINSURANT"], C)), "AsFloat")), C);
    await $.wset([$t8, $t9], "INSURANCEAGENCY", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["INSURANCEAGENCY"], C)), "AsInteger")), C);
    await $.wset([$t8, $t9], "INSURANCEAMOUNT", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["INSURANCEAMOUNT"], C)), "AsFloat")), C);
    await $.wset([$t8, $t9], "INSURANCEDATE", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["INSURANCEDATE"], C)), "AsDateTime")), C);
    await $.wset([$t8, $t9], "salary", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["salary"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "guarantorname", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["guarantorname"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "guarantorid", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["guarantorid"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "guarantorsalary", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["guarantorsalary"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "guarantorname2", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["guarantorname2"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "guarantorid2", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["guarantorid2"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "guarantorsalary2", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["guarantorsalary2"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "guarantorname3", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["guarantorname3"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "guarantorid3", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["guarantorid3"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "guarantorsalary3", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["guarantorsalary3"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "zaminwork1", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["zaminwork1"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "zaminadres1", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["zaminadres1"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "zamintel1", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["zamintel1"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "zaminwork2", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["zaminwork2"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "zaminadres2", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["zaminadres2"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "zamintel2", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["zamintel2"], C)), "AsString")), C);
    await $.wset([$t8, $t9], "activities", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["activities"], C)), "Asinteger")), C);
    await $.wset([$t8, $t9], "CREDITACT", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["CREDITACT"], C)), "Asinteger")), C);
    await $.wset([$t8, $t9], "aim_id", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["aim_id"], C)), "Asinteger")), C);
    await $.wset([$t8, $t9], "INSURANCERIGHT", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["INSURANCERIGHT"], C)), "AsFloat")), C);
    await $.wset([$t8, $t9], "PLEDGEID_P", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["PLEDGEID_P"], C)), "Asinteger")), C);
    await $.wset([$t8, $t9], "EXPERTID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["EXPERTID"], C)), "Asinteger")), C);
    await $.wset([$t8, $t9], "activities_type", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["activities_type"], C)), "Asinteger")), C);
    await $.wset([$t8, $t9], "payperiod", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["payperiod"], C)), "Asinteger")), C);
    await $.wset([$t8, $t9], "payintday", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["payintday"], C)), "Asinteger")), C);
    await $.wset([$t8, $t9], "gqname", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["gqname"], C)), "asstring")), C);
    await $.wset([$t8, $t9], "gqpaspnum", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["gqpaspnum"], C)), "asstring")), C);
    await $.wset([$t8, $t9], "gqpaspyer", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["gqpaspyer"], C)), "asstring")), C);
    await $.wset([$t8, $t9], "gqpaspdate", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["gqpaspdate"], C)), "AsDateTime")), C);
    await $.wset([$t8, $t9], "gqadress", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["gqadress"], C)), "asstring")), C);
    await $.wset([$t8, $t9], "reyster", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["reyster"], C)), "asstring")), C);
    await $.wset([$t8, $t9], "seryamh", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["seryamh"], C)), "asstring")), C);
    await $.wset([$t8, $t9], "gqtel", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["gqtel"], C)), "asstring")), C);
    await $.wset([$t8, $t9], "zmpaspyer1", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["zmpaspyer1"], C)), "asstring")), C);
    await $.wset([$t8, $t9], "zmpaspdat1", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["zmpaspdat1"], C)), "AsDateTime")), C);
    await $.wset([$t8, $t9], "zmtelmob1", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["zmtelmob1"], C)), "asstring")), C);
    await $.wset([$t8, $t9], "zmpaspyer2", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["zmpaspyer2"], C)), "asstring")), C);
    await $.wset([$t8, $t9], "zmpaspdat2", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["zmpaspdat2"], C)), "AsDateTime")), C);
    await $.wset([$t8, $t9], "zmtelmob2", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["zmtelmob2"], C)), "asstring")), C);
    await $.wset([$t8, $t9], "GUR_ID", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["GUR_ID"], C)), "asinteger")), C);
    await $.wset([$t8, $t9], "GURINFO", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["GURINFO"], C)), "asstring")), C);
    await $.wset([$t8, $t9], "GURLETTER", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["GURLETTER"], C)), "asstring")), C);
    await $.wset([$t8, $t9], "penaccid", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["PENACCID"], C)), "asinteger")), C);
    await $.wset([$t8, $t9], "komision", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["KOMISION"], C)), "AsFloat")), C);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TConclusionForm", "SaveState", async function SaveState(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"save": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["save"]);
  {
    const $t10 = (await $.mv((await $.v(C, "crDataModuleConcl")), "CreditProps"));
    if ($.truthy((await $.wv([$t10], "Save", { get: async () => L0["save"], set: async (v) => { L0["save"] = v; }, local: true }, false)))) {
      await $.stmt($.wcall([$t10], "Post", [], C));
    } else {
      await $.stmt($.wcall([$t10], "Cancel", [], C));
    }
    if ($.truthy((await $.wv([$t10], "FInsertCredit", C, false)))) {
      if ($.truthy((await $.wv([$t10], "Save", { get: async () => L0["save"], set: async (v) => { L0["save"] = v; }, local: true }, false)))) {
        await $.stmt($.wcall([$t10], "doInsert", [], C));
      } else {
        await $.stmt($.wcall([$t10], "Cancel", [], C));
      }
      await $.mset((await $.wv([$t10], "PageControlMain", C, false)), "ActivePageIndex", 0);
      await $.mcall((await $.wv([$t10], "CustIDEdit", C, false)), "SetFocus", []);
    } else {
      await $.mcall(Self, "Close", []);
    }
  }
  return L0.result;
}, {"params": ["Save"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TConclusionForm", "SaveChangesExecute", async function SaveChangesExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "CheckFields", []));
  await $.stmt($.call(C, "SaveCredit", []));
  await $.stmt((await $.call(C, "SaveState", [true])));
  await $.set(C, "Processed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "SaveChangesUpdate", async function SaveChangesUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Enabled", (await $.mv((await $.mv((await $.v(C, "crDataModuleConcl")), "CreditProps")), "Modified")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "DismisChangesExecute", async function DismisChangesExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "SaveState", [false])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "CloseFormExecute", async function CloseFormExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "FormCloseQuery", async function FormCloseQuery(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "canclose": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["canclose"].set((await $.or_(($.not((await $.mv((await $.mv((await $.v(C, "crDataModuleConcl")), "CreditProps")), "Modified")))), async () => ($.eq((await $.call(C, "MessageDlg", [$.add($.add("Dəyşikliklər qeyd olunmayacaq !", "\r"), "Əminsiniz?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes")))))));
  return L0.result;
}, {"params": ["Sender", "CanClose"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TConclusionForm", "BranchCBEhKeyPress", async function BranchCBEhKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t11 = L0["sender"];
        { const $t12 = (await $.wv([$t11], "Tag", C, false));
          if ($.eq($t12, 1)) {
            await $.stmt((await $.wcall([$t11], "SelectNext", [(await $.wv([$t11], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t11], "True", C, false)), (await $.wv([$t11], "True", C, false))], C)));
          }
          else if ($.eq($t12, 2)) {
            {
              const $t13 = (await $.wv([$t11], "PageControlMain", C, false));
              if ($.truthy($.eq((await $.wv([$t11, $t13], "ActivePageIndex", C, false)), 0))) {
                await $.wset([$t11, $t13], "ActivePageIndex", 1, C);
                await $.mcall((await $.wv([$t11, $t13], "CustIDEdit", C, false)), "SetFocus", []);
              }
            }
          }
          else if ($.eq($t12, 3)) {
            {
              const $t14 = (await $.wv([$t11], "PageControlMain", C, false));
              if ($.truthy($.eq((await $.wv([$t11, $t14], "ActivePageIndex", C, false)), 1))) {
                await $.wset([$t11, $t14], "ActivePageIndex", 2, C);
                await $.mcall((await $.wv([$t11, $t14], "CMSearchEditLoacAccs", C, false)), "SetFocus", []);
              }
            }
          }
          else if ($.eq($t12, 4)) {
            await $.mcall((await $.wv([$t11], "DBEditEh8", C, false)), "setFocus", []);
          }
          else if ($.eq($t12, 5)) {
            {
              const $t15 = (await $.wv([$t11], "PageControlGoorantee", C, false));
              if ($.truthy($.eq((await $.wv([$t11, $t15], "ActivePageIndex", C, false)), 0))) {
                await $.wset([$t11, $t15], "ActivePageIndex", 1, C);
                await $.mcall((await $.wv([$t11, $t15], "DBEdit13", C, false)), "SetFocus", []);
              }
            }
          }
          else if ($.eq($t12, 6)) {
            {
              const $t16 = (await $.wv([$t11], "PageControlGoorantee", C, false));
              if ($.truthy($.eq((await $.wv([$t11, $t16], "ActivePageIndex", C, false)), 1))) {
                await $.wset([$t11, $t16], "ActivePageIndex", 2, C);
                await $.mcall((await $.wv([$t11, $t16], "DBEdit2", C, false)), "SetFocus", []);
              }
            }
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"p": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["p"]);
  L0["seditcontract"] = "Edit";
  L0["sinsertcontract"] = "Insert";
  L0["slookcontract"] = "look";
  if ($.truthy($.eq(L0["p"], L0["sinsertcontract"]))) {
    await $.mcall((await $.v(C, "ConclusionForm")), "New", []);
  } else {
    if ($.truthy($.eq(L0["p"], L0["seditcontract"]))) {
      await $.mcall((await $.v(C, "ConclusionForm")), "Edit", []);
    }
  }
  if ($.truthy($.eq(L0["p"], L0["slookcontract"]))) {
    await $.mcall((await $.v(C, "ConclusionForm")), "look", []);
  }
  return L0.result;
}, {"params": ["P"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TConclusionForm", "CMSearchEditLoacAccsExit", async function CMSearchEditLoacAccsExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = L0["sender"];
    await $.wset([$t17], "Color", (await $.wv([$t17], "ColorSave", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "DBLookupComboboxEh19KeyValueChanged", async function DBLookupComboboxEh19KeyValueChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t18 = (L0["sender"]);
    if ($.truthy((await $.mv((await $.mv((await $.wv([$t18], "DataSource", C, false)), "DataSet")), "Active")))) {
      await $.stmt($.wcall([$t18], "UpdateData", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "DoInsert", async function DoInsert(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t19 = (await $.mv((await $.v(C, "crDataModuleConcl")), "CreditProps"));
    if ($.truthy((await $.wv([$t19], "Active", C, false)))) {
      await $.stmt($.wcall([$t19], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t19], "SetVariable", ["CREDITID", 0], C)));
    await $.stmt($.wcall([$t19], "Open", [], C));
    await $.stmt($.wcall([$t19], "Insert", [], C));
    await $.mset((await $.wcall([$t19], "FieldByName", ["BRANCHID"], C)), "AsInteger", (await $.wv([$t19], "Get_BranchID", C, false)));
    await $.mset((await $.wcall([$t19], "FieldByName", ["DATEOFCONCLUSION"], C)), "AsDateTime", (await $.wv([$t19], "Get_CurrentDate", C, false)));
    await $.mset((await $.wcall([$t19], "FieldByName", ["DUEDATEFIRSTCONTRACT"], C)), "AsDateTime", (await $.wv([$t19], "Get_CurrentDate", C, false)));
    await $.mset((await $.wcall([$t19], "FieldByName", ["CURRENCY"], C)), "AsInteger", 0);
    await $.mset((await $.wcall([$t19], "FieldByName", ["COUNTRYCODE"], C)), "AsString", "AZE");
    await $.mset((await $.wcall([$t19], "FieldByName", ["PLEDGEPRICEEVKV"], C)), "AsFloat", 0);
    await $.mset((await $.wcall([$t19], "FieldByName", ["PLEDGEPRICETORPAQHA"], C)), "AsFloat", 0);
    await $.mset((await $.wv([$t19], "CBPledgsorts", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t19], "crDataModuleConcl", C, false)), "pledgsorts")), "FieldByName", ["ID"])), "AsInteger")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TConclusionForm", "DoEdit", async function DoEdit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"fcreditid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["fcreditid"]);
  L0["locateaccounts"] = $.fn(async function LocateAccounts(p0) {
  const L1 = {"lookupcontrol": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["lookupcontrol"]);
  {
    const $t20 = L1["lookupcontrol"];
    if ($.truthy((await $.and_(($.not((await $.wcall([$t20], "VarIsNull", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t20], "DataSource", C, false)), "DataSet")), "FieldByName", [(await $.wv([$t20], "DataField", C, false))])), "AsVariant"))], C)))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t20], "DataSource", C, false)), "DataSet")), "FieldByName", [(await $.wv([$t20], "DataField", C, false))])), "AsInteger")), 0)))))) {
      await $.wset([$t20], "KeyValue", (await $.wv([$t20], "Null", C, false)), C);
      await $.wset([$t20], "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t20], "ListSource", C, false)), "DataSet")), "FieldByName", [(await $.wv([$t20], "KeyField", C, false))])), "AsInteger")), C);
    }
  }
  await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "loc")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "loc")), "SetVariable", ["CREDITID", L0["fcreditid"]])));
  await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "loc")), "open", []);
  await $.mset((await $.v(C, "DBLookupComboboxEh11")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "loc")), "FieldByName", ["booroweraccid"])), "asinteger")));
  await $.mset((await $.v(C, "DBLookupComboboxEh24")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "loc")), "FieldByName", ["PRIMARYRESERVEACCID"])), "asinteger")));
  await $.mset((await $.v(C, "DBLookupComboboxEh1")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "loc")), "FieldByName", ["INTERESTACCID"])), "asinteger")));
  await $.mset((await $.v(C, "Penaccno")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "loc")), "FieldByName", ["penaccid"])), "asinteger")));
  await $.mset((await $.v(C, "DBLookupComboboxEh18")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "loc")), "FieldByName", ["OUTGUARANTEEACCID"])), "asinteger")));
  return L1.result;
});
  {
    const $t21 = (await $.mv((await $.v(C, "crDataModuleConcl")), "CreditProps"));
    if ($.truthy((await $.wv([$t21], "Active", C, false)))) {
      await $.stmt($.wcall([$t21], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t21], "SetVariable", ["CREDITID", (await $.wv([$t21], "FCreditID", { get: async () => L0["fcreditid"], set: async (v) => { L0["fcreditid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t21], "Open", [], C));
    await $.mset((await $.wv([$t21], "Bancruptey_rg", C, false)), "ItemIndex", (await $.mv((await $.wcall([$t21], "FieldByName", ["BANKRUPTEYSTATUS"], C)), "Asinteger")));
    await $.mset((await $.wv([$t21], "InUse_rg", C, false)), "ItemIndex", (await $.mv((await $.wcall([$t21], "FieldByName", ["PLEDGEINUSE"], C)), "AsInteger")));
    await $.stmt($.wcall([$t21], "Edit", [], C));
    await $.stmt((await $.wcall([$t21], "LocateAccounts", [(await $.wv([$t21], "DBLookupComboboxEh11", C, false))], { get: async () => L0["locateaccounts"], set: async (v) => { L0["locateaccounts"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t21], "LocateAccounts", [(await $.wv([$t21], "DBLookupComboboxEh14", C, false))], { get: async () => L0["locateaccounts"], set: async (v) => { L0["locateaccounts"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t21], "LocateAccounts", [(await $.wv([$t21], "DBLookupComboboxEh16", C, false))], { get: async () => L0["locateaccounts"], set: async (v) => { L0["locateaccounts"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t21], "LocateAccounts", [(await $.wv([$t21], "DBLookupComboboxEh25", C, false))], { get: async () => L0["locateaccounts"], set: async (v) => { L0["locateaccounts"] = v; }, local: true })));
  }
  return L0.result;
}, {"params": ["FCreditID"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TConclusionForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
  await $.mcall((await $.v(C, "crDataModuleConcl")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TConclusionForm", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F5"))))) {
    await $.stmt((await $.mcall((await $.v(C, "RefreshListLbl")), "OnClick", [null])));
  }
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F3"))))) {
    await $.stmt((await $.mcall((await $.v(C, "LblAvtAcc")), "OnClick", [null])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TConclusionForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "Processed")))) {
    if ($.truthy((await $.v(C, "FInsertCredit")))) {
      await $.stmt((await $.call(C, "SafeRefresh", [true, (await $.v(C, "rmGoBookmarkAfterRefresh"))])));
    } else {
      await $.stmt((await $.call(C, "SafeRefresh", [true, (await $.v(C, "rmLocateAfterRefresh"))])));
    }
  }
  await $.mset((await $.v(C, "btnSave")), "enabled", true);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "crDataModuleConcl")), "creditcatData")), "active")), true))) {
    await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "creditcatData")), "closeall", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "crDataModuleConcl")), "DataSetActivities")), "active")), true))) {
    await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "DataSetActivities")), "close", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "crDataModuleConcl")), "ClientCategories")), "active")), true))) {
    await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "ClientCategories")), "close", []);
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TConclusionForm", "RefreshListLblClick", async function RefreshListLblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["spostbeforerefresh"] = "Əvvəlcə cari krediti ya qəbul və yaxud imtina edin !";
  {
    const $t22 = (await $.v(C, "crDataModuleConcl"));
    await $.mcall((await $.wv([$t22], "Customer", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "EstateTypeData", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "Reserves", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "DueReserves", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "PersonTypes", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "AutoPayment", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "AutoExpire", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "CalcIntMethod", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "DueLoanAccs", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "CustAccs", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "PReserveAccs", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "SReserveAccs", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "PercentAccounts", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "CrdLineoblAccs", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "Interests", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "DueInterests", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "Countrys", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "BalcnLoan", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "OUTObligationAccs", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "OUTCollatralAccs", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "OUTInterestAccs", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "OutLoanAccs", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "SexDataSet", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "custe", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "PrinadDataSet", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "CMSearchEditLoacAccsKeyUp", async function CMSearchEditLoacAccsKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined, "custid": 0};
  await $.fixArgs(L0, ["sender", "shift"]);
  L0["custid"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboboxEh6")), "ListSource")), "DataSet")), "FieldByName", ["CustID"])), "AsInteger"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "CMSearchEditLoacAccs")), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh11")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "DBLookupComboboxEh12")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "DBLookupComboboxEh14")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "DBLookupComboboxEh15")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "DBLookupComboboxEh16")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "DBLookupComboboxEh17")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "DBLookupComboboxEh18")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "DBLookupComboboxEh21")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "DBLookupComboboxEh20")), "KeyValue", (await $.v(C, "null")));
  } else {
    await $.mset((await $.v(C, "DBLookupComboboxEh19")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboboxEh6")), "ListSource")), "DataSet")), "FieldByName", ["CustID"])), "AsInteger")));
    if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F2"))))) {
      {
        const $t23 = (await $.v(C, "crDataModuleConcl"));
        await $.mset((await $.wv([$t23], "DBLookupComboboxEh11", C, false)), "KeyValue", (await $.mcall((await $.wv([$t23], "CR_COMMON", C, false)), "CallIntegerFunction", ["Get_AccID", [(await $.wv([$t23], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), (await $.mcall((await $.wv([$t23], "cr_decls", C, false)), "GetIntegerVariable", ["AcgCust"]))]])));
        await $.mset((await $.wv([$t23], "DBLookupComboboxEh12", C, false)), "KeyValue", (await $.mcall((await $.wv([$t23], "CR_COMMON", C, false)), "CallIntegerFunction", ["Get_AccID", [(await $.wv([$t23], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), (await $.mcall((await $.wv([$t23], "CR_decls", C, false)), "GetIntegerVariable", ["Acgres"]))]])));
        await $.mset((await $.wv([$t23], "DBLookupComboboxEh1", C, false)), "KeyValue", (await $.mcall((await $.wv([$t23], "CR_COMMON", C, false)), "CallIntegerFunction", ["Get_AccID", [(await $.wv([$t23], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), (await $.mcall((await $.wv([$t23], "cr_decls", C, false)), "GetIntegerVariable", ["AcgInt"]))]])));
        await $.mset((await $.wv([$t23], "DBLookupComboboxEh14", C, false)), "KeyValue", (await $.mcall((await $.wv([$t23], "CR_COMMON", C, false)), "CallIntegerFunction", ["Get_AccID", [(await $.wv([$t23], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), (await $.mcall((await $.wv([$t23], "cr_decls", C, false)), "GetIntegerVariable", ["AcgDueLoan"]))]])));
        await $.mset((await $.wv([$t23], "DBLookupComboboxEh15", C, false)), "KeyValue", (await $.mcall((await $.wv([$t23], "CR_COMMON", C, false)), "CallIntegerFunction", ["Get_AccID", [(await $.wv([$t23], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), (await $.mcall((await $.wv([$t23], "cr_decls", C, false)), "GetIntegerVariable", ["AcgDueRes"]))]])));
        await $.mset((await $.wv([$t23], "DBLookupComboboxEh16", C, false)), "KeyValue", (await $.mcall((await $.wv([$t23], "CR_COMMON", C, false)), "CallIntegerFunction", ["Get_AccID", [(await $.wv([$t23], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), (await $.mcall((await $.wv([$t23], "cr_decls", C, false)), "GetIntegerVariable", ["AcgDueInt"]))]])));
        await $.mset((await $.wv([$t23], "DBLookupComboboxEh17", C, false)), "KeyValue", (await $.mcall((await $.wv([$t23], "CR_COMMON", C, false)), "CallIntegerFunction", ["Get_AccID", [(await $.wv([$t23], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), (await $.mcall((await $.wv([$t23], "cr_decls", C, false)), "GetIntegerVariable", ["AcgPlg"])), 1]])));
        await $.mset((await $.wv([$t23], "DBLookupComboboxEh18", C, false)), "KeyValue", (await $.mcall((await $.wv([$t23], "CR_COMMON", C, false)), "CallIntegerFunction", ["Get_AccID", [(await $.wv([$t23], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), (await $.mcall((await $.wv([$t23], "cr_decls", C, false)), "GetIntegerVariable", ["AcgObl"])), 1]])));
        await $.mset((await $.wv([$t23], "DBLookupComboboxEh21", C, false)), "KeyValue", (await $.mcall((await $.wv([$t23], "CR_COMMON", C, false)), "CallIntegerFunction", ["Get_AccID", [(await $.wv([$t23], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), (await $.mcall((await $.wv([$t23], "cr_decls", C, false)), "GetIntegerVariable", ["AcgOutInt"])), 1]])));
        await $.mset((await $.wv([$t23], "DBLookupComboboxEh20", C, false)), "KeyValue", (await $.mcall((await $.wv([$t23], "CR_COMMON", C, false)), "CallIntegerFunction", ["Get_AccID", [(await $.wv([$t23], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), (await $.mcall((await $.wv([$t23], "cr_decls", C, false)), "GetIntegerVariable", ["AcgCrdLine"]))]])));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TConclusionForm", "LblAvtAccClick", async function LblAvtAccClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormLoanBalance")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "CMSearchEdit2KeyPress", async function CMSearchEdit2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t24 = L0["sender"];
        { const $t25 = (await $.wv([$t24], "Tag", C, false));
          if ($.eq($t25, 1)) {
            await $.stmt((await $.wcall([$t24], "SelectNext", [(await $.wv([$t24], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t24], "True", C, false)), (await $.wv([$t24], "True", C, false))], C)));
          }
          else if ($.eq($t25, 2)) {
            {
              const $t26 = (await $.wv([$t24], "PageControlMain", C, false));
              if ($.truthy($.eq((await $.wv([$t24, $t26], "ActivePageIndex", C, false)), 0))) {
                await $.wset([$t24, $t26], "ActivePageIndex", 1, C);
              }
            }
          }
          else if ($.eq($t25, 3)) {
            {
              const $t27 = (await $.wv([$t24], "PageControlMain", C, false));
              if ($.truthy($.eq((await $.wv([$t24, $t27], "ActivePageIndex", C, false)), 1))) {
                await $.wset([$t24, $t27], "ActivePageIndex", 2, C);
              }
            }
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TConclusionForm", "Bancruptey_rgClick", async function Bancruptey_rgClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t28 = (await $.mv((await $.v(C, "crDataModuleConcl")), "CreditProps"));
    await $.mset((await $.wcall([$t28], "FieldByName", ["BANKRUPTEYSTATUS"], C)), "AsInteger", (await $.mv((await $.wv([$t28], "Bancruptey_rg", C, false)), "ItemIndex")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "InUse_rgClick", async function InUse_rgClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t29 = (await $.mv((await $.v(C, "crDataModuleConcl")), "CreditProps"));
    await $.mset((await $.wcall([$t29], "FieldByName", ["PLEDGEINUSE"], C)), "AsInteger", (await $.mv((await $.wv([$t29], "InUse_rg", C, false)), "ItemIndex")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "DBLookupComboboxEh2Change", async function DBLookupComboboxEh2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t30 = (await $.mv((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "ListSource")), "DataSet"));
    if ($.truthy((await $.mcall((await $.mv((await $.wv([$t30], "crDataModuleConcl", C, false)), "IUPackage")), "CallBooleanFunction", ["checkPerson", ["P_ID", (await $.mv((await $.wcall([$t30], "FieldByName", ["ID"], C)), "AsInteger"))]])))) {
      await $.mset((await $.wv([$t30], "DBEditEh7", C, false)), "Enabled", (await $.wv([$t30], "false", C, false)));
    } else {
      await $.mset((await $.wv([$t30], "DBEditEh7", C, false)), "Enabled", (await $.wv([$t30], "true", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "DBEditEh7KeyPress", async function DBEditEh7KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("A","Z"), ...$.range("a","z"), ...$.range("0","9"), "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TConclusionForm", "DBEditEh3KeyPress", async function DBEditEh3KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("A","Z"), ...$.range("a","z"), ...$.range("0","9"), "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TConclusionForm", "DBLookupComboboxEh31KeyValueChanged", async function DBLookupComboboxEh31KeyValueChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t31 = (L0["sender"]);
    if ($.truthy((await $.mv((await $.mv((await $.wv([$t31], "DataSource", C, false)), "DataSet")), "Active")))) {
      await $.stmt($.wcall([$t31], "UpdateData", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "DBLookupComboboxEh38Change", async function DBLookupComboboxEh38Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "penset")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "penset")), "SetVariable", ["val_acc", (await $.mv((await $.v(C, "DBLookupComboboxEh38")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "penset")), "open", []);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "crDataModuleConcl")), "Interests")), "Active")))) {
    await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "Interests")), "close", []);
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "Interests")), "SetVariable", ["val_acc", (await $.mv((await $.v(C, "DBLookupComboboxEh38")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "Interests")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "DBLookupComboboxEh30KeyValueChanged", async function DBLookupComboboxEh30KeyValueChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t32 = (L0["sender"]);
    if ($.truthy((await $.mv((await $.mv((await $.wv([$t32], "DataSource", C, false)), "DataSet")), "Active")))) {
      await $.stmt($.wcall([$t32], "UpdateData", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "DBLookupComboboxEh28KeyValueChanged", async function DBLookupComboboxEh28KeyValueChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t33 = (L0["sender"]);
    if ($.truthy((await $.mv((await $.mv((await $.wv([$t33], "DataSource", C, false)), "DataSet")), "Active")))) {
      await $.stmt($.wcall([$t33], "UpdateData", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "DBLookupComboboxEh31Change", async function DBLookupComboboxEh31Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["id"] = (await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "cr_common")), "CallIntegerFunction", ["Get_meqsed", [(await $.mv((await $.v(C, "DBLookupComboboxEh31")), "text"))]]));
  if ($.truthy($.ne(L0["id"], 0))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh32")), "KeyValue", L0["id"]);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "DBLookupComboboxEh28Change", async function DBLookupComboboxEh28Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "DataSetActivities")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "DataSetActivities")), "SetVariable", ["act_id", (await $.mv((await $.v(C, "DBLookupComboboxEh28")), "keyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "DataSetActivities")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "DBLookupComboboxEh30Change", async function DBLookupComboboxEh30Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "ClientCategories")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "ClientCategories")), "SetVariable", ["act_id", (await $.mv((await $.v(C, "DBLookupComboboxEh30")), "keyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "ClientCategories")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "DBEdit29Exit", async function DBEdit29Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t34 = L0["sender"];
    await $.wset([$t34], "Color", (await $.wv([$t34], "ColorSave", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "DBEditEh7KeyDown", async function DBEditEh7KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  await $.stmt((await $.call(C, "LoadKeyboardLayoutA", ["00000409", (await $.v(C, "KLF_ACTIVATE"))])));
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TConclusionForm", "DBEditEh7Change", async function DBEditEh7Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadKeyboardLayoutA", ["00000409", (await $.v(C, "KLF_ACTIVATE"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "DBEditEh3KeyDown", async function DBEditEh3KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  await $.stmt((await $.call(C, "LoadKeyboardLayoutA", ["00000409", (await $.v(C, "KLF_ACTIVATE"))])));
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TConclusionForm", "DBLookupComboboxEh3Change", async function DBLookupComboboxEh3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh3")), "keyvalue")), 1))) {
    await $.mset((await $.v(C, "DBEditEh8")), "text", "Yox");
    await $.mset((await $.v(C, "DBNumberEditEh5")), "text", "0");
    await $.mset((await $.v(C, "DBEditEh9")), "text", "Yox");
    await $.mset((await $.v(C, "DBEditEh10")), "text", "Yox");
    await $.mset((await $.v(C, "DBEditEh11")), "text", "Yox");
    await $.mset((await $.v(C, "DBNumberEditEh6")), "text", "0");
    await $.mset((await $.v(C, "DBNumberEditEh7")), "text", "0");
    if ($.truthy($.ne((await $.mv((await $.v(C, "CBPledgsorts")), "KeyValue")), (await $.v(C, "null"))))) {
      await $.mset((await $.v(C, "CBPledgsorts")), "KeyValue", 1);
    }
    await $.mset((await $.v(C, "DBLookupComboboxEh7")), "KeyValue", 1);
    await $.mset((await $.v(C, "InUse_rg")), "ItemIndex", (-(1)));
    if ($.truthy($.ne((await $.mv((await $.v(C, "DBNumberEditEh9")), "text")), ""))) {
      await $.mset((await $.v(C, "DBNumberEditEh9")), "text", "0");
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "DBNumberEditEh8")), "text")), ""))) {
      await $.mset((await $.v(C, "DBNumberEditEh8")), "text", "0");
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "DBEditEh12")), "text")), ""))) {
      await $.mset((await $.v(C, "DBEditEh12")), "text", "");
    }
    await $.mset((await $.v(C, "panel7")), "enabled", false);
    await $.mset((await $.v(C, "panel68")), "enabled", false);
    await $.mset((await $.v(C, "panel54")), "enabled", false);
  } else {
    await $.mset((await $.v(C, "panel7")), "enabled", true);
    await $.mset((await $.v(C, "panel68")), "enabled", true);
    await $.mset((await $.v(C, "panel54")), "enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "TabSheet2Enter", async function TabSheet2Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t35 = (await $.v(C, "crDataModuleConcl"));
    if ($.truthy($.eq((await $.mv((await $.wv([$t35], "PldDataSet", C, false)), "active")), (await $.wv([$t35], "false", C, false))))) {
      await $.mcall((await $.wv([$t35], "PldDataSet", C, false)), "open", []);
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t35], "pledgsorts", C, false)), "active")), (await $.wv([$t35], "false", C, false))))) {
      await $.mcall((await $.wv([$t35], "pledgsorts", C, false)), "Open", []);
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t35], "Pledges", C, false)), "active")), (await $.wv([$t35], "false", C, false))))) {
      await $.mcall((await $.wv([$t35], "Pledges", C, false)), "Open", []);
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t35], "InsSorts", C, false)), "active")), (await $.wv([$t35], "false", C, false))))) {
      await $.mcall((await $.wv([$t35], "InsSorts", C, false)), "open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "tbCreditEnter", async function tbCreditEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t36 = (await $.v(C, "crDataModuleConcl"));
    if ($.truthy($.eq((await $.mv((await $.wv([$t36], "Branches", C, false)), "active")), (await $.wv([$t36], "false", C, false))))) {
      await $.mcall((await $.wv([$t36], "Branches", C, false)), "Open", []);
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t36], "CreditTypes", C, false)), "active")), (await $.wv([$t36], "false", C, false))))) {
      await $.mcall((await $.wv([$t36], "CreditTypes", C, false)), "Open", []);
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t36], "UsrGroups", C, false)), "active")), (await $.wv([$t36], "false", C, false))))) {
      await $.mcall((await $.wv([$t36], "UsrGroups", C, false)), "Open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "DBLookupComboboxEh30Click", async function DBLookupComboboxEh30Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "DBLookupComboboxEh29Change", async function DBLookupComboboxEh29Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh29")), "text")), ""))) {
    await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "creditcatData")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "creditcatData")), "SetVariable", ["vid_sob", (await $.mv((await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "EstateTypeData")), "fieldbyname", ["id"])), "asinteger"))])));
    await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "creditcatData")), "open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "DBLookupComboboxEh19Change", async function DBLookupComboboxEh19Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "CustAccs")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "CustAccs")), "SetVariable", ["KLI_ID", (await $.mv((await $.v(C, "DBLookupComboboxEh19")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "CustAccs")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "Interests")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "Interests")), "SetVariable", ["KLI_ID", (await $.mv((await $.v(C, "DBLookupComboboxEh19")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "Interests")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "OUTObligationAccs")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "OUTObligationAccs")), "SetVariable", ["KLI_ID", (await $.mv((await $.v(C, "DBLookupComboboxEh19")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "OUTObligationAccs")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "PReserveAccs")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "PReserveAccs")), "SetVariable", ["KLI_ID", (await $.mv((await $.v(C, "DBLookupComboboxEh19")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "PReserveAccs")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "DBLookupComboboxEh4Change", async function DBLookupComboboxEh4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": 0};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "DBNumberEditEh3Change", async function DBNumberEditEh3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBNumberEditEh3")), "Text")), ""))) {
    L0["a"] = $.fdiv(($.mul((await $.mv((await $.mv((await $.v(C, "crDataModuleConcl")), "CreditPropsCREDITLINEAMOUNT")), "AsFloat")), (await $.mv((await $.v(C, "DBNumberEditEh3")), "Value")))), 100);
  } else {
    L0["a"] = 0;
  }
  await $.mset((await $.mv((await $.v(C, "crDataModuleConcl")), "CreditPropsKOMISION")), "AsFloat", L0["a"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TConclusionForm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "datasetname": '', "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t37 = (await $.v(C, "edNewName"));
    await $.wset([$t37], "Text", "", C);
    await $.wset([$t37], "width", 261, C);
    await $.wset([$t37], "Left", 4, C);
    await $.wset([$t37], "top", 19, C);
    await $.wset([$t37], "Visible", (await $.wv([$t37], "True", C, false)), C);
  }
  { const $t38 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t39 = true;
    for (;;) {
      if (!$t39) { L0["i"] = $.succ(L0["i"], 1); }
      $t39 = false;
      if (!($.ord(L0["i"]) <= $.ord($t38))) break;
      if ($.truthy($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TSpeedButton"))) {
        await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Enabled", false);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "ConclusionForm", (await $.mcall((await $.v(C, "TConclusionForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
