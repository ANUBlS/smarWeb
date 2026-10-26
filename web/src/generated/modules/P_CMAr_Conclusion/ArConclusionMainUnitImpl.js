// Generated from ArConclusionMainUnitImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ArConclusionMainUnitImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "NLSLocalizer", "ExtCtrls", "ComCtrls", "StdCtrls", "DBCtrls", "DB", "variants", "Mask", "CMDBSearchEdit", "Buttons", "ImgList", "ActnList", "ArConclusionCommonDecls", "DBCtrlsEh", "DBLookupEh", "Grids", "DBGrids", "CMHintBox", "CheckLst", "Evanescence", "DBGridEh", "DataModuleArConclusion", "ArCommonDecls", "sbsystem", "CreateCMArAccountsImpl", "ArLoanBalAccsUnit", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TArConclusionForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "pagecontrolmain": {"name": "PageControlMain", "type": "TPageControl"}, "tbcredit": {"name": "tbCredit", "type": "TTabSheet"}, "tbcreditaccounts": {"name": "tbCreditAccounts", "type": "TTabSheet"}, "btnsave": {"name": "btnSave", "type": "TButton"}, "btncancel": {"name": "btnCancel", "type": "TButton"}, "btnclose": {"name": "btnClose", "type": "TButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "savechanges": {"name": "SaveChanges", "type": "TAction"}, "dismischanges": {"name": "DismisChanges", "type": "TAction"}, "closeform": {"name": "CloseForm", "type": "TAction"}, "lblavtacc": {"name": "LblAvtAcc", "type": "TLabel"}, "panel22": {"name": "Panel22", "type": "TPanel"}, "label34": {"name": "Label34", "type": "TLabel"}, "label36": {"name": "Label36", "type": "TLabel"}, "label37": {"name": "Label37", "type": "TLabel"}, "label38": {"name": "Label38", "type": "TLabel"}, "loanaccs": {"name": "LoanAccs", "type": "TDBLookupComboboxEh"}, "panel24": {"name": "Panel24", "type": "TPanel"}, "label43": {"name": "Label43", "type": "TLabel"}, "label45": {"name": "Label45", "type": "TLabel"}, "label46": {"name": "Label46", "type": "TLabel"}, "panel25": {"name": "Panel25", "type": "TPanel"}, "label47": {"name": "Label47", "type": "TLabel"}, "label49": {"name": "Label49", "type": "TLabel"}, "label50": {"name": "Label50", "type": "TLabel"}, "cmsearchedit3": {"name": "CMSearchEdit3", "type": "TCMSearchEdit"}, "purreserveaccno": {"name": "PurReserveAccno", "type": "TDBLookupComboboxEh"}, "panel26": {"name": "Panel26", "type": "TPanel"}, "label51": {"name": "Label51", "type": "TLabel"}, "label52": {"name": "Label52", "type": "TLabel"}, "label53": {"name": "Label53", "type": "TLabel"}, "label54": {"name": "Label54", "type": "TLabel"}, "panel27": {"name": "Panel27", "type": "TPanel"}, "label55": {"name": "Label55", "type": "TLabel"}, "label57": {"name": "Label57", "type": "TLabel"}, "label58": {"name": "Label58", "type": "TLabel"}, "cmsearchedit5": {"name": "CMSearchEdit5", "type": "TCMSearchEdit"}, "dueloanaccno": {"name": "DueLoanAccno", "type": "TDBLookupComboboxEh"}, "panel28": {"name": "Panel28", "type": "TPanel"}, "label59": {"name": "Label59", "type": "TLabel"}, "label61": {"name": "Label61", "type": "TLabel"}, "label62": {"name": "Label62", "type": "TLabel"}, "cmsearchedit6": {"name": "CMSearchEdit6", "type": "TCMSearchEdit"}, "dblookupcomboboxeh15": {"name": "DBLookupComboboxEh15", "type": "TDBLookupComboboxEh"}, "panel29": {"name": "Panel29", "type": "TPanel"}, "label63": {"name": "Label63", "type": "TLabel"}, "label65": {"name": "Label65", "type": "TLabel"}, "label66": {"name": "Label66", "type": "TLabel"}, "cmsearchedit7": {"name": "CMSearchEdit7", "type": "TCMSearchEdit"}, "dueintaccno": {"name": "DueIntAccno", "type": "TDBLookupComboboxEh"}, "panel31": {"name": "Panel31", "type": "TPanel"}, "label70": {"name": "Label70", "type": "TLabel"}, "label72": {"name": "Label72", "type": "TLabel"}, "label73": {"name": "Label73", "type": "TLabel"}, "cmsearchedit9": {"name": "CMSearchEdit9", "type": "TCMSearchEdit"}, "dblookupcomboboxeh18": {"name": "DBLookupComboboxEh18", "type": "TDBLookupComboboxEh"}, "cmsearcheditpercent": {"name": "CMSearchEditPercent", "type": "TCMSearchEdit"}, "intaccno": {"name": "IntAccno", "type": "TDBLookupComboboxEh"}, "cmsearchedit1": {"name": "CMSearchEdit1", "type": "TCMSearchEdit"}, "custaccno": {"name": "CustAccno", "type": "TDBLookupComboboxEh"}, "refreshlistlbl": {"name": "RefreshListLbl", "type": "TLabel"}, "cmsearcheditloacaccs": {"name": "CMSearchEditLoacAccs", "type": "TCMSearchEdit"}, "panel34": {"name": "Panel34", "type": "TPanel"}, "label67": {"name": "Label67", "type": "TLabel"}, "label74": {"name": "Label74", "type": "TLabel"}, "label75": {"name": "Label75", "type": "TLabel"}, "cmsearchedit2": {"name": "CMSearchEdit2", "type": "TCMSearchEdit"}, "crdlineoblaccno": {"name": "CrdlineoblAccno", "type": "TDBLookupComboboxEh"}, "lblavtsearch": {"name": "LblAvtSearch", "type": "TLabel"}, "panel40": {"name": "Panel40", "type": "TPanel"}, "label87": {"name": "Label87", "type": "TLabel"}, "label88": {"name": "Label88", "type": "TLabel"}, "label89": {"name": "Label89", "type": "TLabel"}, "cmsearchedit10": {"name": "CMSearchEdit10", "type": "TCMSearchEdit"}, "dblookupcomboboxeh22": {"name": "DBLookupComboboxEh22", "type": "TDBLookupComboboxEh"}, "panel35": {"name": "Panel35", "type": "TPanel"}, "label76": {"name": "Label76", "type": "TLabel"}, "label77": {"name": "Label77", "type": "TLabel"}, "label78": {"name": "Label78", "type": "TLabel"}, "cmsearchedit4": {"name": "CMSearchEdit4", "type": "TCMSearchEdit"}, "dblookupcomboboxeh21": {"name": "DBLookupComboboxEh21", "type": "TDBLookupComboboxEh"}, "panel41": {"name": "Panel41", "type": "TPanel"}, "label90": {"name": "Label90", "type": "TLabel"}, "label92": {"name": "Label92", "type": "TLabel"}, "label93": {"name": "Label93", "type": "TLabel"}, "cmsearchedit11": {"name": "CMSearchEdit11", "type": "TCMSearchEdit"}, "dblookupcomboboxeh23": {"name": "DBLookupComboboxEh23", "type": "TDBLookupComboboxEh"}, "panel42": {"name": "Panel42", "type": "TPanel"}, "label94": {"name": "Label94", "type": "TLabel"}, "label95": {"name": "Label95", "type": "TLabel"}, "label96": {"name": "Label96", "type": "TLabel"}, "label97": {"name": "Label97", "type": "TLabel"}, "cmsearchedit12": {"name": "CMSearchEdit12", "type": "TCMSearchEdit"}, "reserveaccno": {"name": "ReserveAccno", "type": "TDBLookupComboboxEh"}, "hbconclusion": {"name": "HBConclusion", "type": "TCMHintBox"}, "tbadvancedinf": {"name": "tbAdvancedInf", "type": "TTabSheet"}, "panel45": {"name": "Panel45", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel46": {"name": "Panel46", "type": "TPanel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dbediteh3": {"name": "DBEditEh3", "type": "TDBEditEh"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "dblookupcomboboxeh27": {"name": "DBLookupComboboxEh27", "type": "TDBLookupComboboxEh"}, "bancruptey_rg": {"name": "Bancruptey_rg", "type": "TRadioGroup"}, "panel47": {"name": "Panel47", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel48": {"name": "Panel48", "type": "TPanel"}, "label106": {"name": "Label106", "type": "TLabel"}, "label107": {"name": "Label107", "type": "TLabel"}, "label108": {"name": "Label108", "type": "TLabel"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "panel49": {"name": "Panel49", "type": "TPanel"}, "label109": {"name": "Label109", "type": "TLabel"}, "label110": {"name": "Label110", "type": "TLabel"}, "label111": {"name": "Label111", "type": "TLabel"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "panel50": {"name": "Panel50", "type": "TPanel"}, "label112": {"name": "Label112", "type": "TLabel"}, "label113": {"name": "Label113", "type": "TLabel"}, "label114": {"name": "Label114", "type": "TLabel"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "dbediteh6": {"name": "DBEditEh6", "type": "TDBEditEh"}, "dbediteh4": {"name": "DBEditEh4", "type": "TDBEditEh"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBEditEh"}, "dbediteh7": {"name": "DBEditEh7", "type": "TDBEditEh"}, "tbcust": {"name": "tbCust", "type": "TTabSheet"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "branchcbeh": {"name": "BranchCBEh", "type": "TDBLookupComboboxEh"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbdatetimeediteh2": {"name": "DBDateTimeEditEh2", "type": "TDBDateTimeEditEh"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "panel43": {"name": "Panel43", "type": "TPanel"}, "label98": {"name": "Label98", "type": "TLabel"}, "label99": {"name": "Label99", "type": "TLabel"}, "editperiodcredit": {"name": "EditPeriodCredit", "type": "TDBEditEh"}, "panel23": {"name": "Panel23", "type": "TPanel"}, "label39": {"name": "Label39", "type": "TLabel"}, "label40": {"name": "Label40", "type": "TLabel"}, "label41": {"name": "Label41", "type": "TLabel"}, "label42": {"name": "Label42", "type": "TLabel"}, "custidedit": {"name": "CustIDEdit", "type": "TDBEdit"}, "dblookupcomboboxeh19": {"name": "DBLookupComboboxEh19", "type": "TDBLookupComboboxEh"}, "panel62": {"name": "Panel62", "type": "TPanel"}, "label135": {"name": "Label135", "type": "TLabel"}, "label136": {"name": "Label136", "type": "TLabel"}, "dblookupcomboboxeh30": {"name": "DBLookupComboboxEh30", "type": "TDBLookupComboboxEh"}, "panel63": {"name": "Panel63", "type": "TPanel"}, "label137": {"name": "Label137", "type": "TLabel"}, "label138": {"name": "Label138", "type": "TLabel"}, "dblookupcomboboxeh29": {"name": "DBLookupComboboxEh29", "type": "TDBLookupComboboxEh"}, "panel64": {"name": "Panel64", "type": "TPanel"}, "label139": {"name": "Label139", "type": "TLabel"}, "label140": {"name": "Label140", "type": "TLabel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "panel65": {"name": "Panel65", "type": "TPanel"}, "label141": {"name": "Label141", "type": "TLabel"}, "label142": {"name": "Label142", "type": "TLabel"}, "dblookupcomboboxeh31": {"name": "DBLookupComboboxEh31", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh28": {"name": "DBLookupComboboxEh28", "type": "TDBLookupComboboxEh"}, "label143": {"name": "Label143", "type": "TLabel"}, "label144": {"name": "Label144", "type": "TLabel"}, "label145": {"name": "Label145", "type": "TLabel"}, "label147": {"name": "Label147", "type": "TLabel"}, "label148": {"name": "Label148", "type": "TLabel"}, "label149": {"name": "Label149", "type": "TLabel"}, "cmsearchedit13": {"name": "CMSearchEdit13", "type": "TCMSearchEdit"}, "cmsearchedit14": {"name": "CMSearchEdit14", "type": "TCMSearchEdit"}, "cmsearchedit15": {"name": "CMSearchEdit15", "type": "TCMSearchEdit"}, "panel51": {"name": "Panel51", "type": "TPanel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label64": {"name": "Label64", "type": "TLabel"}, "dblookupcomboboxeh33": {"name": "DBLookupComboboxEh33", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh34": {"name": "DBLookupComboboxEh34", "type": "TDBLookupComboboxEh"}, "label91": {"name": "Label91", "type": "TLabel"}, "label153": {"name": "Label153", "type": "TLabel"}, "label158": {"name": "Label158", "type": "TLabel"}, "cmsearchedit16": {"name": "CMSearchEdit16", "type": "TCMSearchEdit"}, "label159": {"name": "Label159", "type": "TLabel"}, "bitpost": {"name": "Bitpost", "type": "TBitBtn"}, "bitcancel": {"name": "BitCancel", "type": "TBitBtn"}, "label179": {"name": "Label179", "type": "TLabel"}, "label180": {"name": "Label180", "type": "TLabel"}, "panel78": {"name": "Panel78", "type": "TPanel"}, "label181": {"name": "Label181", "type": "TLabel"}, "label182": {"name": "Label182", "type": "TLabel"}, "label183": {"name": "Label183", "type": "TLabel"}, "cmsearchedit17": {"name": "CMSearchEdit17", "type": "TCMSearchEdit"}, "dblookupcomboboxeh39": {"name": "DBLookupComboboxEh39", "type": "TDBLookupComboboxEh"}, "panel79": {"name": "Panel79", "type": "TPanel"}, "label184": {"name": "Label184", "type": "TLabel"}, "label185": {"name": "Label185", "type": "TLabel"}, "label186": {"name": "Label186", "type": "TLabel"}, "cmsearchedit18": {"name": "CMSearchEdit18", "type": "TCMSearchEdit"}, "dblookupcomboboxeh40": {"name": "DBLookupComboboxEh40", "type": "TDBLookupComboboxEh"}, "panel30": {"name": "Panel30", "type": "TPanel"}, "label44": {"name": "Label44", "type": "TLabel"}, "label68": {"name": "Label68", "type": "TLabel"}, "label69": {"name": "Label69", "type": "TLabel"}, "cmsearchedit8": {"name": "CMSearchEdit8", "type": "TCMSearchEdit"}, "dblookupcomboboxeh17": {"name": "DBLookupComboboxEh17", "type": "TDBLookupComboboxEh"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "label161": {"name": "Label161", "type": "TLabel"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "dbnumberediteh1": {"name": "DBNumberEditEh1", "type": "TDBNumberEditEh"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "label20": {"name": "Label20", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "dbnumberediteh2": {"name": "DBNumberEditEh2", "type": "TDBNumberEditEh"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "label22": {"name": "Label22", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "dbnumberediteh4": {"name": "DBNumberEditEh4", "type": "TDBNumberEditEh"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "label26": {"name": "Label26", "type": "TLabel"}, "label27": {"name": "Label27", "type": "TLabel"}, "dbnumberediteh3": {"name": "DBNumberEditEh3", "type": "TDBNumberEditEh"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label31": {"name": "Label31", "type": "TLabel"}, "dblookupcomboboxeh8": {"name": "DBLookupComboboxEh8", "type": "TDBLookupComboboxEh"}, "panel21": {"name": "Panel21", "type": "TPanel"}, "label33": {"name": "Label33", "type": "TLabel"}, "label84": {"name": "Label84", "type": "TLabel"}, "dblookupcomboboxeh9": {"name": "DBLookupComboboxEh9", "type": "TDBLookupComboboxEh"}, "panel32": {"name": "Panel32", "type": "TPanel"}, "label71": {"name": "Label71", "type": "TLabel"}, "label86": {"name": "Label86", "type": "TLabel"}, "dblookupcomboboxeh10": {"name": "DBLookupComboboxEh10", "type": "TDBLookupComboboxEh"}, "panel33": {"name": "Panel33", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label35": {"name": "Label35", "type": "TLabel"}, "dblookupcomboboxeh13": {"name": "DBLookupComboboxEh13", "type": "TDBLookupComboboxEh"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "panel44": {"name": "Panel44", "type": "TPanel"}, "label56": {"name": "Label56", "type": "TLabel"}, "label60": {"name": "Label60", "type": "TLabel"}, "dblookupcomboboxeh25": {"name": "DBLookupComboboxEh25", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh7": {"name": "DBLookupComboboxEh7", "type": "TDBLookupComboboxEh"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "label30": {"name": "Label30", "type": "TLabel"}, "label32": {"name": "Label32", "type": "TLabel"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "panel66": {"name": "Panel66", "type": "TPanel"}, "label150": {"name": "Label150", "type": "TLabel"}, "label151": {"name": "Label151", "type": "TLabel"}, "dblookupcomboboxeh32": {"name": "DBLookupComboboxEh32", "type": "TDBLookupComboboxEh"}, "panel56": {"name": "Panel56", "type": "TPanel"}, "label160": {"name": "Label160", "type": "TLabel"}, "dblookupcomboboxeh35": {"name": "DBLookupComboboxEh35", "type": "TDBLookupComboboxEh"}, "panel77": {"name": "Panel77", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "label24": {"name": "Label24", "type": "TLabel"}, "dblookupcomboboxeh26": {"name": "DBLookupComboboxEh26", "type": "TDBLookupComboboxEh"}, "panel72": {"name": "Panel72", "type": "TPanel"}, "label162": {"name": "Label162", "type": "TLabel"}, "dblookupcomboboxeh37": {"name": "DBLookupComboboxEh37", "type": "TDBLookupComboboxEh"}, "panel74": {"name": "Panel74", "type": "TPanel"}, "label164": {"name": "Label164", "type": "TLabel"}, "dblookupcomboboxeh36": {"name": "DBLookupComboboxEh36", "type": "TDBLookupComboboxEh"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "label28": {"name": "Label28", "type": "TLabel"}, "label29": {"name": "Label29", "type": "TLabel"}, "dbnumberediteh11": {"name": "DBNumberEditEh11", "type": "TDBNumberEditEh"}, "panel69": {"name": "Panel69", "type": "TPanel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label156": {"name": "Label156", "type": "TLabel"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "finsertcredit": {"name": "FInsertCredit", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("ArConclusionForm", null, "TArConclusionForm");
    U.var_("a", 0, "integer");
    U.var_("Processed", false, "Boolean");
    U.var_("p_id", 0, "integer");
  });
  U.method("TArConclusionForm", "CheckFields", async function CheckFields(Self) {
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
    const $t1 = (await $.v(C, "ArDataModuleConcl"));
    const $t2 = (await $.wv([$t1], "CreditProps", C, false));
    if ($.truthy($.eq((await $.mv((await $.wv([$t1, $t2], "DBLookupComboboxEh29", C, false)), "text")), ""))) {
      await $.stmt((await $.mcall((await $.wv([$t1, $t2], "HBConclusion", C, false)), "ShowMessage", ["Borc alanın tipi (Mülkiyyət növü) sahəsi boşdur !"])));
      $.abort();
    }
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsCREDITACT", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsACTIVITIES", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsCUSTOMERTYPE", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsBRANCHID", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsCURRENCY", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsPERSONALTYPE", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsCREDITTYPE", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsUSRGROUP", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    if ($.truthy($.eq((await $.mv((await $.wv([$t1, $t2], "DBLookupComboboxEh32", C, false)), "text")), ""))) {
      await $.stmt((await $.mcall((await $.wv([$t1, $t2], "HBConclusion", C, false)), "ShowMessage", ["Kreditin verilmə məqsədi sahəsi boşdur !"])));
      $.abort();
    }
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsCREDITLINEAMOUNT", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsANNUALYINTERESTRATE", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsANNUALYOVERDUERATE", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsANNUALYPENALTYRATE", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsRESERVEID", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsAUTOPAYMENT", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsAUTOEXPIRE", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsINTCALCMETHOD", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsBOOROWERID", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsLOANACCID", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsINTERESTACCID", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsPLEDGEID_P", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    if ($.truthy($.not((await $.mcall((await $.mv((await $.wv([$t1, $t2], "ArDataModuleConcl", C, false)), "IUPackage")), "CallBooleanFunction", ["checkPerson", ["P_ID", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["PERSONALTYPE"], C)), "AsInteger"))]]))))) {
      await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsPINCODE", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
      if ($.truthy($.ne((await $.wcall([$t1, $t2], "length", [(await $.mv((await $.wv([$t1, $t2], "CreditPropsPINCODE", C, false)), "AsString"))], C)), 7))) {
        await $.stmt((await $.mcall((await $.wv([$t1, $t2], "HBConclusion", C, false)), "ShowMessage", ["PinKod ən azı 7 sinvol olmalıdır!"])));
        $.abort();
      }
    }
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsBOORID", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsADDRESS", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t1, $t2], "CheckFieldByName", [(await $.wv([$t1, $t2], "CreditPropsSALARY", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
  }
  return L1.result;
});
  await $.stmt($.callv(L0["checkfieldbynames"], []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TArConclusionForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TArConclusionForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ArDataModuleConcl", (await $.mcall((await $.v(C, "TArDataModuleConcl")), "Create", [Self])));
  await $.set(C, "FormLoanBalance", (await $.mcall((await $.v(C, "TFormLoanBalance")), "create", [Self])));
  await $.set(C, "FormCreateCMAccounts", (await $.mcall((await $.v(C, "TFormCreateCMAccounts")), "Create", [Self])));
  await $.set(C, "Processed", false);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PageControlMain")), "ActivePageIndex", 0);
  await $.mcall((await $.v(C, "CustIDEdit")), "SetFocus", []);
  await $.mset((await $.v(C, "ArDataModuleConcl")), "FInsertCredit", (await $.v(C, "FInsertCredit")));
  await $.set(C, "Processed", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "New", async function New(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["snewcontract"] = "Yeni müqavilənin əlavaə olunması.";
  await $.set(C, "a", 2);
  await $.set(C, "FInsertCredit", true);
  await $.mset((await $.v(C, "CloseForm")), "Enabled", true);
  await $.stmt($.call(C, "DoInsert", []));
  await $.set(C, "Caption", L0["snewcontract"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "btnSave")), "visible")), false))) {
    await $.mset((await $.v(C, "btnSave")), "visible", true);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "btnCancel")), "visible")), false))) {
    await $.mset((await $.v(C, "btnCancel")), "visible", true);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "btnClose")), "visible")), false))) {
    await $.mset((await $.v(C, "btnClose")), "visible", true);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "BitCancel")), "visible")), true))) {
    await $.mset((await $.v(C, "BitCancel")), "visible", false);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Bitpost")), "visible")), true))) {
    await $.mset((await $.v(C, "Bitpost")), "visible", false);
  }
  L0["result"] = (await $.v(C, "ShowModal"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TArConclusionForm", "Edit", async function Edit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0, "stat": 0, "count": 0, "p_id": 0, "fcreditid": 0, "fcreditno": ''};
  L0["seditcontract"] = "%s № li müqavilənin redaktə olunması.";
  await $.set(C, "a", 2);
  L0["count"] = (await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "adm")), "CallIntegerFunction", ["getadmaddition", ["POST"]]));
  L0["stat"] = (await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "IUPackage")), "CallIntegerFunction", ["get_status", ["p_id", (await $.v(C, "Get_SelectedCrdID"))]]));
  if ($.truthy($.eq(L0["stat"], 1))) {
    if ($.truthy($.eq(L0["count"], 0))) {
      await $.stmt((await $.call(C, "showmessage", [$.add($.add("Sizin dəyişmək hüququnuz yoxdur!", "\r"), "Əlavə məlumat üçün sistem administratoruna müracət edin.")])));
      return L0.result;
    }
  }
  L0["fcreditid"] = (await $.v(C, "Get_SelectedCrdID"));
  L0["fcreditno"] = (await $.v(C, "Get_SelectedCrdNo"));
  await $.mset((await $.v(C, "CloseForm")), "Enabled", false);
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "EstateTypeData")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "EstateTypeData")), "open", []);
  await $.stmt((await $.call(C, "DoEdit", [L0["fcreditid"]])));
  await $.set(C, "FInsertCredit", false);
  await $.set(C, "Caption", (await $.call(C, "Format", [L0["seditcontract"], [L0["fcreditno"]]])));
  if ($.truthy($.eq((await $.mv((await $.v(C, "btnSave")), "visible")), false))) {
    await $.mset((await $.v(C, "btnSave")), "visible", true);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "btnCancel")), "visible")), false))) {
    await $.mset((await $.v(C, "btnCancel")), "visible", true);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "btnClose")), "visible")), false))) {
    await $.mset((await $.v(C, "btnClose")), "visible", true);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "BitCancel")), "visible")), true))) {
    await $.mset((await $.v(C, "BitCancel")), "visible", false);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Bitpost")), "visible")), true))) {
    await $.mset((await $.v(C, "Bitpost")), "visible", false);
  }
  L0["result"] = (await $.v(C, "ShowModal"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TArConclusionForm", "post", async function post(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0, "stat": 0, "fcreditid": 0, "fcreditno": ''};
  L0["seditcontract"] = "%s № li müqavilənin inkar edilməsi.";
  await $.set(C, "a", 1);
  L0["stat"] = (await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "IUPackage")), "CallIntegerFunction", ["get_status", ["p_id", (await $.v(C, "Get_SelectedCrdID"))]]));
  L0["fcreditid"] = (await $.v(C, "Get_SelectedCrdID"));
  L0["fcreditno"] = (await $.v(C, "Get_SelectedCrdNo"));
  await $.mset((await $.v(C, "CloseForm")), "Enabled", false);
  await $.stmt((await $.call(C, "DoEdit", [L0["fcreditid"]])));
  await $.set(C, "FInsertCredit", false);
  await $.set(C, "Caption", (await $.call(C, "Format", [L0["seditcontract"], [L0["fcreditno"]]])));
  if ($.truthy($.eq((await $.mv((await $.v(C, "BitCancel")), "visible")), false))) {
    await $.mset((await $.v(C, "BitCancel")), "visible", true);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Bitpost")), "visible")), false))) {
    await $.mset((await $.v(C, "Bitpost")), "visible", true);
  }
  await $.mset((await $.v(C, "btnSave")), "visible", false);
  await $.mset((await $.v(C, "btnCancel")), "visible", false);
  await $.mset((await $.v(C, "btnClose")), "visible", false);
  L0["result"] = (await $.v(C, "ShowModal"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TArConclusionForm", "look", async function look(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0, "fcreditid": 0, "fcreditno": ''};
  L0["seditcontract"] = "%s № li müqaviləyə baxmaq.";
  await $.set(C, "a", 1);
  L0["fcreditid"] = (await $.v(C, "Get_SelectedCrdID"));
  L0["fcreditno"] = (await $.v(C, "Get_SelectedCrdNo"));
  await $.mset((await $.v(C, "CloseForm")), "Enabled", false);
  await $.stmt((await $.call(C, "DoEdit", [L0["fcreditid"]])));
  await $.set(C, "FInsertCredit", false);
  await $.set(C, "Caption", (await $.call(C, "Format", [L0["seditcontract"], [L0["fcreditno"]]])));
  if ($.truthy($.eq((await $.mv((await $.v(C, "btnSave")), "visible")), false))) {
    await $.mset((await $.v(C, "btnSave")), "visible", true);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "btnCancel")), "visible")), false))) {
    await $.mset((await $.v(C, "btnCancel")), "visible", true);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "btnClose")), "visible")), false))) {
    await $.mset((await $.v(C, "btnClose")), "visible", true);
  }
  await $.mset((await $.v(C, "btnSave")), "enabled", false);
  if ($.truthy($.eq((await $.mv((await $.v(C, "BitCancel")), "visible")), true))) {
    await $.mset((await $.v(C, "BitCancel")), "visible", false);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Bitpost")), "visible")), true))) {
    await $.mset((await $.v(C, "Bitpost")), "visible", false);
  }
  L0["result"] = (await $.v(C, "ShowModal"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("SaveCredit", async function SaveCredit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t3 = (await $.mv((await $.v(C, "ArDataModuleConcl")), "CreditProps"));
    const $t4 = (await $.wv([$t3], "SavedCredit", C, false));
    await $.wset([$t3, $t4], "Currency", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["Currency"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "BoorowerID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["BoorowerID"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "PINCODE", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["PINCODE"], C)), "AsString")), C);
    await $.wset([$t3, $t4], "CreditLineAmount", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["CreditLineAmount"], C)), "AsFloat")), C);
    await $.wset([$t3, $t4], "AnnualyInterestRate", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["AnnualyInterestRate"], C)), "AsFloat")), C);
    await $.wset([$t3, $t4], "AnnualyOverdueRate", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["AnnualyOverdueRate"], C)), "AsFloat")), C);
    await $.wset([$t3, $t4], "AnnualyPenaltyRate", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["AnnualyPenaltyRate"], C)), "AsFloat")), C);
    await $.wset([$t3, $t4], "AnnualBankRate", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["AnnualBankRate"], C)), "AsFloat")), C);
    await $.wset([$t3, $t4], "DateOfConclusion", (await $.wcall([$t3, $t4], "Int", [(await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["DateOfConclusion"], C)), "AsDateTime"))], C)), C);
    await $.wset([$t3, $t4], "DueDateFirstContract", (await $.wcall([$t3, $t4], "Int", [(await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["DueDateFirstContract"], C)), "AsDateTime"))], C)), C);
    await $.wset([$t3, $t4], "NumberOfCredit", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["NumberOfCredit"], C)), "AsString")), C);
    await $.wset([$t3, $t4], "PurposeOfCredit", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["PurposeOfCredit"], C)), "AsString")), C);
    await $.wset([$t3, $t4], "CustomerType", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["CustomerType"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "CreditType", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["CreditType"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "PersonalType", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["PersonalType"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "AutoPayment", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["AutoPayment"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "AutoExpire", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["AutoExpire"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "UsrGroup", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["UsrGroup"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "BranchID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["BranchID"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "BoorowerAccID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["BoorowerAccID"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "LoanAccID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["LoanAccID"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "DueLoanAccID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["DueLoanAccID"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "InterestAccID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["InterestAccID"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "DueInterestAccID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["DueInterestAccID"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "PrimaryReserveAccID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["PrimaryReserveAccID"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "SecondaryReserveAccID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["SecondaryReserveAccID"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "OutCollateralAccID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["OutCollateralAccID"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "OutGuaranteeAccID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["OutGuaranteeAccID"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "OutInterestAccID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["OutInterestAccID"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "CrdlineOblAccID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["CrdlineOblAccID"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "OUTLoanAccID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["OUTLoanAccID"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "primarypurreserveaccid", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["primarypurreserveaccid"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "secondarypurreserveaccid", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["secondarypurreserveaccid"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "ReserveID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["ReserveID"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "DueReserveID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["DueReserveID"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "newfinanceamount", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["newfinanceamount"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "numberofBankCredit", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["numberofBankCredit"], C)), "AsString")), C);
    await $.wset([$t3, $t4], "intcalcmethod", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["intcalcmethod"], C)), "AsInteger")), C);
    await $.wset([$t3, $t4], "BOORID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["BOORID"], C)), "AsString")), C);
    await $.wset([$t3, $t4], "NAME", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["NAME"], C)), "AsString")), C);
    await $.wset([$t3, $t4], "COUNTRYCODE", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["COUNTRYCODE"], C)), "AsString")), C);
    await $.wset([$t3, $t4], "BANKRUPTEYSTATUS", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["BANKRUPTEYSTATUS"], C)), "Asinteger")), C);
    await $.wset([$t3, $t4], "PHONENUMBER", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["PHONENUMBER"], C)), "AsString")), C);
    await $.wset([$t3, $t4], "ADDRESS", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["ADDRESS"], C)), "AsString")), C);
    await $.wset([$t3, $t4], "FIRSTOWNERID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["FIRSTOWNERID"], C)), "AsString")), C);
    await $.wset([$t3, $t4], "FIRSTOWNERNAME", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["FIRSTOWNERNAME"], C)), "AsString")), C);
    await $.wset([$t3, $t4], "SECONDOWNERID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["SECONDOWNERID"], C)), "AsString")), C);
    await $.wset([$t3, $t4], "SECONDOWNERNAME", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["SECONDOWNERNAME"], C)), "AsString")), C);
    await $.wset([$t3, $t4], "THIRDOWNERID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["THIRDOWNERID"], C)), "AsString")), C);
    await $.wset([$t3, $t4], "THIRDOWNERNAME", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["THIRDOWNERNAME"], C)), "AsString")), C);
    await $.wset([$t3, $t4], "salary", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["salary"], C)), "AsString")), C);
    await $.wset([$t3, $t4], "guarantorname", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["guarantorname"], C)), "AsString")), C);
    await $.wset([$t3, $t4], "guarantorid", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["guarantorid"], C)), "AsString")), C);
    await $.wset([$t3, $t4], "guarantorsalary", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["guarantorsalary"], C)), "AsString")), C);
    await $.wset([$t3, $t4], "guarantorname2", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["guarantorname2"], C)), "AsString")), C);
    await $.wset([$t3, $t4], "guarantorid2", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["guarantorid2"], C)), "AsString")), C);
    await $.wset([$t3, $t4], "guarantorsalary2", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["guarantorsalary2"], C)), "AsString")), C);
    await $.wset([$t3, $t4], "guarantorname3", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["guarantorname3"], C)), "AsString")), C);
    await $.wset([$t3, $t4], "guarantorid3", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["guarantorid3"], C)), "AsString")), C);
    await $.wset([$t3, $t4], "guarantorsalary3", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["guarantorsalary3"], C)), "AsString")), C);
    await $.wset([$t3, $t4], "activities", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["activities"], C)), "Asinteger")), C);
    await $.wset([$t3, $t4], "CREDITACT", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["CREDITACT"], C)), "Asinteger")), C);
    await $.wset([$t3, $t4], "aim_id", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["aim_id"], C)), "Asinteger")), C);
    await $.wset([$t3, $t4], "PLEDGEID_P", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["PLEDGEID_P"], C)), "Asinteger")), C);
    await $.wset([$t3, $t4], "EXPERTID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["EXPERTID"], C)), "Asinteger")), C);
    await $.wset([$t3, $t4], "activities_type", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["activities_type"], C)), "Asinteger")), C);
    await $.wset([$t3, $t4], "payperiod", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["payperiod"], C)), "Asinteger")), C);
    await $.wset([$t3, $t4], "payintday", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["payintday"], C)), "Asinteger")), C);
    await $.wset([$t3, $t4], "MEHSULID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["MEHSULID"], C)), "asinteger")), C);
    await $.wset([$t3, $t4], "iprimaryreserveaccid", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["iprimaryreserveaccid"], C)), "asinteger")), C);
    await $.wset([$t3, $t4], "isecondaryreserveaccid", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["isecondaryreserveaccid"], C)), "asinteger")), C);
    await $.wset([$t3, $t4], "PERIODCONTRACTS", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["PERIODCONTRACTS"], C)), "asinteger")), C);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TArConclusionForm", "SaveState", async function SaveState(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"save": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["save"]);
  {
    const $t5 = (await $.mv((await $.v(C, "ArDataModuleConcl")), "CreditProps"));
    if ($.truthy((await $.wv([$t5], "Save", { get: async () => L0["save"], set: async (v) => { L0["save"] = v; }, local: true }, false)))) {
      await $.stmt($.wcall([$t5], "Post", [], C));
    } else {
      await $.stmt($.wcall([$t5], "Cancel", [], C));
    }
    if ($.truthy((await $.wv([$t5], "FInsertCredit", C, false)))) {
      if ($.truthy((await $.wv([$t5], "Save", { get: async () => L0["save"], set: async (v) => { L0["save"] = v; }, local: true }, false)))) {
        await $.stmt($.wcall([$t5], "doInsert", [], C));
      } else {
        await $.stmt($.wcall([$t5], "Cancel", [], C));
      }
      await $.mset((await $.wv([$t5], "PageControlMain", C, false)), "ActivePageIndex", 0);
      await $.mcall((await $.wv([$t5], "CustIDEdit", C, false)), "SetFocus", []);
    } else {
      await $.mcall(Self, "Close", []);
    }
  }
  return L0.result;
}, {"params": ["Save"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TArConclusionForm", "SaveChangesExecute", async function SaveChangesExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "CheckFields", []));
  await $.stmt($.call(C, "SaveCredit", []));
  await $.stmt((await $.call(C, "SaveState", [true])));
  await $.set(C, "Processed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "SaveChangesUpdate", async function SaveChangesUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Enabled", (await $.mv((await $.mv((await $.v(C, "ArDataModuleConcl")), "CreditProps")), "Modified")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "DismisChangesExecute", async function DismisChangesExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "SaveState", [false])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "CloseFormExecute", async function CloseFormExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "FormCloseQuery", async function FormCloseQuery(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "canclose": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "a")), 2))) {
    await L0["canclose"].set((await $.or_(($.not((await $.mv((await $.mv((await $.v(C, "ArDataModuleConcl")), "CreditProps")), "Modified")))), async () => ($.eq((await $.call(C, "MessageDlg", [$.add($.add("Dəyşikliklər qeyd olunmayacaq !", "\r"), "Əminsiniz?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes")))))));
  }
  return L0.result;
}, {"params": ["Sender", "CanClose"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TArConclusionForm", "BranchCBEhKeyPress", async function BranchCBEhKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t6 = L0["sender"];
        { const $t7 = (await $.wv([$t6], "Tag", C, false));
          if ($.eq($t7, 1)) {
            await $.stmt((await $.wcall([$t6], "SelectNext", [(await $.wv([$t6], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t6], "True", C, false)), (await $.wv([$t6], "True", C, false))], C)));
          }
          else if ($.eq($t7, 2)) {
            {
              const $t8 = (await $.wv([$t6], "PageControlMain", C, false));
              if ($.truthy($.eq((await $.wv([$t6, $t8], "ActivePageIndex", C, false)), 0))) {
                await $.wset([$t6, $t8], "ActivePageIndex", 1, C);
                await $.mcall((await $.wv([$t6, $t8], "CustIDEdit", C, false)), "SetFocus", []);
              }
            }
          }
          else if ($.eq($t7, 3)) {
            {
              const $t9 = (await $.wv([$t6], "PageControlMain", C, false));
              if ($.truthy($.eq((await $.wv([$t6, $t9], "ActivePageIndex", C, false)), 1))) {
                await $.wset([$t6, $t9], "ActivePageIndex", 2, C);
                await $.mcall((await $.wv([$t6, $t9], "CMSearchEditLoacAccs", C, false)), "SetFocus", []);
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
  L0["spostcontract"] = "post";
  if ($.truthy($.eq(L0["p"], L0["sinsertcontract"]))) {
    await $.mcall((await $.v(C, "ArConclusionForm")), "New", []);
  } else {
    if ($.truthy($.eq(L0["p"], L0["seditcontract"]))) {
      await $.mcall((await $.v(C, "ArConclusionForm")), "Edit", []);
    }
  }
  if ($.truthy($.eq(L0["p"], L0["slookcontract"]))) {
    await $.mcall((await $.v(C, "ArConclusionForm")), "look", []);
  }
  if ($.truthy($.eq(L0["p"], L0["spostcontract"]))) {
    await $.mcall((await $.v(C, "ArConclusionForm")), "post", []);
  }
  return L0.result;
}, {"params": ["P"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TArConclusionForm", "CMSearchEditLoacAccsExit", async function CMSearchEditLoacAccsExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = L0["sender"];
    await $.wset([$t10], "Color", (await $.wv([$t10], "ColorSave", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "DBLookupComboboxEh19KeyValueChanged", async function DBLookupComboboxEh19KeyValueChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (L0["sender"]);
    if ($.truthy((await $.mv((await $.mv((await $.wv([$t11], "DataSource", C, false)), "DataSet")), "Active")))) {
      await $.stmt($.wcall([$t11], "UpdateData", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "DoInsert", async function DoInsert(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "dy": 0, "dm": 0, "dd": 0};
  {
    const $t12 = (await $.mv((await $.v(C, "ArDataModuleConcl")), "CreditProps"));
    if ($.truthy((await $.wv([$t12], "Active", C, false)))) {
      await $.stmt($.wcall([$t12], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t12], "SetVariable", ["CREDITID", 0], C)));
    await $.stmt($.wcall([$t12], "Open", [], C));
    await $.stmt($.wcall([$t12], "Insert", [], C));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t12], "ArDataModuleConcl", C, false)), "Branches")), "Active")), (await $.wv([$t12], "false", C, false))))) {
      await $.mcall((await $.mv((await $.wv([$t12], "ArDataModuleConcl", C, false)), "Branches")), "open", []);
    }
    if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t12], "ArDataModuleConcl", C, false)), "Branches")), "RecordCount")), 1))) {
      await $.mset((await $.wcall([$t12], "FieldByName", ["BRANCHID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.wv([$t12], "ArDataModuleConcl", C, false)), "Branches")), "FieldByName", ["id"])), "AsInteger")));
    } else {
      await $.mset((await $.wcall([$t12], "FieldByName", ["BRANCHID"], C)), "AsInteger", (await $.wv([$t12], "Get_BranchID", C, false)));
    }
    await $.mset((await $.wcall([$t12], "FieldByName", ["DATEOFCONCLUSION"], C)), "AsDateTime", (await $.wv([$t12], "Get_CurrentDate", C, false)));
    await $.mset((await $.wcall([$t12], "FieldByName", ["DUEDATEFIRSTCONTRACT"], C)), "AsDateTime", (await $.wv([$t12], "Get_CurrentDate", C, false)));
    await $.mset((await $.wcall([$t12], "FieldByName", ["CURRENCY"], C)), "AsInteger", 0);
    await $.mset((await $.wcall([$t12], "FieldByName", ["COUNTRYCODE"], C)), "AsString", "AZE");
    await $.stmt((await $.wcall([$t12], "DecodeDate", [(await $.mv((await $.wcall([$t12], "FieldByName", ["DATEOFCONCLUSION"], C)), "AsDateTime")), $.ref(async () => (await $.wv([$t12], "dY", { get: async () => L0["dy"], set: async (v) => { L0["dy"] = v; }, local: true }, false)), async ($t13) => { await $.wset([$t12], "dY", $t13, { get: async () => L0["dy"], set: async (v) => { L0["dy"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t12], "dM", { get: async () => L0["dm"], set: async (v) => { L0["dm"] = v; }, local: true }, false)), async ($t14) => { await $.wset([$t12], "dM", $t14, { get: async () => L0["dm"], set: async (v) => { L0["dm"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t12], "dD", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false)), async ($t15) => { await $.wset([$t12], "dD", $t15, { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }); })], C)));
    await $.mset((await $.wcall([$t12], "FieldByName", ["PAYINTDAY"], C)), "asinteger", (await $.wv([$t12], "dD", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TArConclusionForm", "DoEdit", async function DoEdit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"fcreditid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["fcreditid"]);
  L0["locateaccounts"] = $.fn(async function LocateAccounts(p0) {
  const L1 = {"lookupcontrol": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["lookupcontrol"]);
  {
    const $t16 = L1["lookupcontrol"];
    if ($.truthy((await $.and_(($.not((await $.wcall([$t16], "VarIsNull", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t16], "DataSource", C, false)), "DataSet")), "FieldByName", [(await $.wv([$t16], "DataField", C, false))])), "AsVariant"))], C)))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t16], "DataSource", C, false)), "DataSet")), "FieldByName", [(await $.wv([$t16], "DataField", C, false))])), "AsInteger")), 0)))))) {
      await $.wset([$t16], "KeyValue", (await $.wv([$t16], "Null", C, false)), C);
      await $.wset([$t16], "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t16], "ListSource", C, false)), "DataSet")), "FieldByName", [(await $.wv([$t16], "KeyField", C, false))])), "AsInteger")), C);
    }
  }
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "loc")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "loc")), "SetVariable", ["CREDITID", L0["fcreditid"]])));
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "loc")), "open", []);
  await $.mset((await $.v(C, "CustAccno")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "loc")), "FieldByName", ["booroweraccid"])), "asinteger")));
  await $.mset((await $.v(C, "LoanAccs")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "loc")), "FieldByName", ["loanaccid"])), "asinteger")));
  await $.mset((await $.v(C, "ReserveAccno")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "loc")), "FieldByName", ["PRIMARYRESERVEACCID"])), "asinteger")));
  await $.mset((await $.v(C, "PurReserveAccno")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "loc")), "FieldByName", ["PRIMARYPURRESERVEACCID"])), "asinteger")));
  await $.mset((await $.v(C, "IntAccno")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "loc")), "FieldByName", ["INTERESTACCID"])), "asinteger")));
  await $.mset((await $.v(C, "DBLookupComboboxEh18")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "loc")), "FieldByName", ["OUTGUARANTEEACCID"])), "asinteger")));
  await $.mset((await $.v(C, "DueLoanAccno")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "loc")), "FieldByName", ["DUELOANACCID"])), "asinteger")));
  await $.mset((await $.v(C, "DueIntAccno")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "loc")), "FieldByName", ["DUEINTERESTACCID"])), "asinteger")));
  await $.mset((await $.v(C, "DBLookupComboboxEh21")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "loc")), "FieldByName", ["OUTINTERESTACCID"])), "asinteger")));
  await $.mset((await $.v(C, "DBLookupComboboxEh15")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "loc")), "FieldByName", ["SECONDARYRESERVEACCID"])), "asinteger")));
  return L1.result;
});
  {
    const $t17 = (await $.mv((await $.v(C, "ArDataModuleConcl")), "CreditProps"));
    if ($.truthy((await $.wv([$t17], "Active", C, false)))) {
      await $.stmt($.wcall([$t17], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t17], "SetVariable", ["CREDITID", (await $.wv([$t17], "FCreditID", { get: async () => L0["fcreditid"], set: async (v) => { L0["fcreditid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t17], "Open", [], C));
    await $.mset((await $.wv([$t17], "Bancruptey_rg", C, false)), "ItemIndex", (await $.mv((await $.wcall([$t17], "FieldByName", ["BANKRUPTEYSTATUS"], C)), "Asinteger")));
    await $.stmt($.wcall([$t17], "Edit", [], C));
    await $.stmt((await $.wcall([$t17], "LocateAccounts", [(await $.wv([$t17], "LoanAccs", C, false))], { get: async () => L0["locateaccounts"], set: async (v) => { L0["locateaccounts"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t17], "LocateAccounts", [(await $.wv([$t17], "CustAccno", C, false))], { get: async () => L0["locateaccounts"], set: async (v) => { L0["locateaccounts"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t17], "LocateAccounts", [(await $.wv([$t17], "ReserveAccno", C, false))], { get: async () => L0["locateaccounts"], set: async (v) => { L0["locateaccounts"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t17], "LocateAccounts", [(await $.wv([$t17], "PurReserveAccno", C, false))], { get: async () => L0["locateaccounts"], set: async (v) => { L0["locateaccounts"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t17], "LocateAccounts", [(await $.wv([$t17], "IntAccno", C, false))], { get: async () => L0["locateaccounts"], set: async (v) => { L0["locateaccounts"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t17], "LocateAccounts", [(await $.wv([$t17], "DueLoanAccno", C, false))], { get: async () => L0["locateaccounts"], set: async (v) => { L0["locateaccounts"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t17], "LocateAccounts", [(await $.wv([$t17], "DueIntAccno", C, false))], { get: async () => L0["locateaccounts"], set: async (v) => { L0["locateaccounts"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t17], "LocateAccounts", [(await $.wv([$t17], "DBLookupComboboxEh25", C, false))], { get: async () => L0["locateaccounts"], set: async (v) => { L0["locateaccounts"] = v; }, local: true })));
  }
  return L0.result;
}, {"params": ["FCreditID"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TArConclusionForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ArDataModuleConcl")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TArConclusionForm", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
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
  U.method("TArConclusionForm", "FormClose", async function FormClose(Self, p0, p1) {
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
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "ArDataModuleConcl")), "creditcatData")), "active")), true))) {
    await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "creditcatData")), "closeall", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "ArDataModuleConcl")), "DataSetActivities")), "active")), true))) {
    await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "DataSetActivities")), "close", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "ArDataModuleConcl")), "ClientCategories")), "active")), true))) {
    await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "ClientCategories")), "close", []);
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TArConclusionForm", "RefreshListLblClick", async function RefreshListLblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["spostbeforerefresh"] = "Əvvəlcə cari krediti ya qəbul və yaxud imtina edin !";
  {
    const $t18 = (await $.v(C, "ArDataModuleConcl"));
    await $.mcall((await $.wv([$t18], "Customer", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t18], "EstateTypeData", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t18], "Reserves", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t18], "DueReserves", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t18], "PersonTypes", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t18], "AutoPayment", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t18], "AutoExpire", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t18], "CalcIntMethod", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t18], "LoanAccs", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t18], "DueLoanAccs", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t18], "CustAccs", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t18], "PReserveAccs", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t18], "SReserveAccs", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t18], "PercentAccounts", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t18], "CrdLineoblAccs", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t18], "Interests", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t18], "DueInterests", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t18], "Countrys", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t18], "BalcnLoan", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t18], "OUTObligationAccs", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t18], "OUTInterestAccs", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t18], "OutLoanAccs", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t18], "SexDataSet", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t18], "custe", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t18], "PrinadDataSet", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "CMSearchEditLoacAccsKeyUp", async function CMSearchEditLoacAccsKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined, "custid": 0};
  await $.fixArgs(L0, ["sender", "shift"]);
  L0["custid"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "LoanAccs")), "ListSource")), "DataSet")), "FieldByName", ["CustID"])), "AsInteger"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "CMSearchEditLoacAccs")), "Text")), ""))) {
    await $.mset((await $.v(C, "CustAccno")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "PurReserveAccno")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "IntAccno")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "DueLoanAccno")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "DBLookupComboboxEh15")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "DueIntAccno")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "DBLookupComboboxEh17")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "DBLookupComboboxEh18")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "DBLookupComboboxEh21")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "CrdlineoblAccno")), "KeyValue", (await $.v(C, "null")));
  } else {
    await $.mset((await $.v(C, "DBLookupComboboxEh19")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "LoanAccs")), "ListSource")), "DataSet")), "FieldByName", ["CustID"])), "AsInteger")));
    if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F2"))))) {
      {
        const $t19 = (await $.v(C, "ArDataModuleConcl"));
        await $.mset((await $.wv([$t19], "CustAccno", C, false)), "KeyValue", (await $.mcall((await $.wv([$t19], "CM_COMMON", C, false)), "CallIntegerFunction", ["Get_AccID", [(await $.wv([$t19], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), (await $.mcall((await $.wv([$t19], "cm_decls", C, false)), "GetIntegerVariable", ["AcgCust"]))]])));
        await $.mset((await $.wv([$t19], "PurReserveAccno", C, false)), "KeyValue", (await $.mcall((await $.wv([$t19], "CM_COMMON", C, false)), "CallIntegerFunction", ["Get_AccID", [(await $.wv([$t19], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), (await $.mcall((await $.wv([$t19], "cm_decls", C, false)), "GetIntegerVariable", ["Acgres"]))]])));
        await $.mset((await $.wv([$t19], "IntAccno", C, false)), "KeyValue", (await $.mcall((await $.wv([$t19], "CM_COMMON", C, false)), "CallIntegerFunction", ["Get_AccID", [(await $.wv([$t19], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), (await $.mcall((await $.wv([$t19], "cm_decls", C, false)), "GetIntegerVariable", ["AcgInt"]))]])));
        await $.mset((await $.wv([$t19], "DueLoanAccno", C, false)), "KeyValue", (await $.mcall((await $.wv([$t19], "CM_COMMON", C, false)), "CallIntegerFunction", ["Get_AccID", [(await $.wv([$t19], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), (await $.mcall((await $.wv([$t19], "cm_decls", C, false)), "GetIntegerVariable", ["AcgDueLoan"]))]])));
        await $.mset((await $.wv([$t19], "DBLookupComboboxEh15", C, false)), "KeyValue", (await $.mcall((await $.wv([$t19], "CM_COMMON", C, false)), "CallIntegerFunction", ["Get_AccID", [(await $.wv([$t19], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), (await $.mcall((await $.wv([$t19], "cm_decls", C, false)), "GetIntegerVariable", ["AcgDueRes"]))]])));
        await $.mset((await $.wv([$t19], "DueIntAccno", C, false)), "KeyValue", (await $.mcall((await $.wv([$t19], "CM_COMMON", C, false)), "CallIntegerFunction", ["Get_AccID", [(await $.wv([$t19], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), (await $.mcall((await $.wv([$t19], "cm_decls", C, false)), "GetIntegerVariable", ["AcgDueInt"]))]])));
        await $.mset((await $.wv([$t19], "DBLookupComboboxEh17", C, false)), "KeyValue", (await $.mcall((await $.wv([$t19], "CM_COMMON", C, false)), "CallIntegerFunction", ["Get_AccID", [(await $.wv([$t19], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), (await $.mcall((await $.wv([$t19], "cm_decls", C, false)), "GetIntegerVariable", ["AcgPlg"])), 1]])));
        await $.mset((await $.wv([$t19], "DBLookupComboboxEh18", C, false)), "KeyValue", (await $.mcall((await $.wv([$t19], "CM_COMMON", C, false)), "CallIntegerFunction", ["Get_AccID", [(await $.wv([$t19], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), (await $.mcall((await $.wv([$t19], "cm_decls", C, false)), "GetIntegerVariable", ["AcgObl"])), 1]])));
        await $.mset((await $.wv([$t19], "DBLookupComboboxEh21", C, false)), "KeyValue", (await $.mcall((await $.wv([$t19], "CM_COMMON", C, false)), "CallIntegerFunction", ["Get_AccID", [(await $.wv([$t19], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), (await $.mcall((await $.wv([$t19], "cm_decls", C, false)), "GetIntegerVariable", ["AcgOutInt"])), 1]])));
        await $.mset((await $.wv([$t19], "CrdlineoblAccno", C, false)), "KeyValue", (await $.mcall((await $.wv([$t19], "CM_COMMON", C, false)), "CallIntegerFunction", ["Get_AccID", [(await $.wv([$t19], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), (await $.mcall((await $.wv([$t19], "cm_decls", C, false)), "GetIntegerVariable", ["AcgCrdLine"]))]])));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TArConclusionForm", "LblAvtAccClick", async function LblAvtAccClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh26")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Kredit məhsulunu seçin !"])));
  } else {
    await $.mcall((await $.v(C, "FormLoanBalance")), "showmodal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "CMSearchEdit2KeyPress", async function CMSearchEdit2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t20 = L0["sender"];
        { const $t21 = (await $.wv([$t20], "Tag", C, false));
          if ($.eq($t21, 1)) {
            await $.stmt((await $.wcall([$t20], "SelectNext", [(await $.wv([$t20], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t20], "True", C, false)), (await $.wv([$t20], "True", C, false))], C)));
          }
          else if ($.eq($t21, 2)) {
            {
              const $t22 = (await $.wv([$t20], "PageControlMain", C, false));
              if ($.truthy($.eq((await $.wv([$t20, $t22], "ActivePageIndex", C, false)), 0))) {
                await $.wset([$t20, $t22], "ActivePageIndex", 1, C);
              }
            }
          }
          else if ($.eq($t21, 3)) {
            {
              const $t23 = (await $.wv([$t20], "PageControlMain", C, false));
              if ($.truthy($.eq((await $.wv([$t20, $t23], "ActivePageIndex", C, false)), 1))) {
                await $.wset([$t20, $t23], "ActivePageIndex", 2, C);
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
  U.method("TArConclusionForm", "Bancruptey_rgClick", async function Bancruptey_rgClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t24 = (await $.mv((await $.v(C, "ArDataModuleConcl")), "CreditProps"));
    await $.mset((await $.wcall([$t24], "FieldByName", ["BANKRUPTEYSTATUS"], C)), "AsInteger", (await $.mv((await $.wv([$t24], "Bancruptey_rg", C, false)), "ItemIndex")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "DBLookupComboboxEh2Change", async function DBLookupComboboxEh2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t25 = (await $.mv((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "ListSource")), "DataSet"));
    if ($.truthy((await $.mcall((await $.mv((await $.wv([$t25], "ArDataModuleConcl", C, false)), "IUPackage")), "CallBooleanFunction", ["checkPerson", ["P_ID", (await $.mv((await $.wcall([$t25], "FieldByName", ["ID"], C)), "AsInteger"))]])))) {
      await $.mset((await $.wv([$t25], "DBEditEh7", C, false)), "Enabled", (await $.wv([$t25], "false", C, false)));
    } else {
      await $.mset((await $.wv([$t25], "DBEditEh7", C, false)), "Enabled", (await $.wv([$t25], "true", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "DBEditEh7KeyPress", async function DBEditEh7KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("A","Z"), ...$.range("a","z"), ...$.range("0","9"), "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TArConclusionForm", "DBEditEh3KeyPress", async function DBEditEh3KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("A","Z"), ...$.range("a","z"), ...$.range("0","9"), "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TArConclusionForm", "DBLookupComboboxEh31KeyValueChanged", async function DBLookupComboboxEh31KeyValueChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t26 = (L0["sender"]);
    if ($.truthy((await $.mv((await $.mv((await $.wv([$t26], "DataSource", C, false)), "DataSet")), "Active")))) {
      await $.stmt($.wcall([$t26], "UpdateData", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "DBLookupComboboxEh30KeyValueChanged", async function DBLookupComboboxEh30KeyValueChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t27 = (L0["sender"]);
    if ($.truthy((await $.mv((await $.mv((await $.wv([$t27], "DataSource", C, false)), "DataSet")), "Active")))) {
      await $.stmt($.wcall([$t27], "UpdateData", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "DBLookupComboboxEh28KeyValueChanged", async function DBLookupComboboxEh28KeyValueChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t28 = (L0["sender"]);
    if ($.truthy((await $.mv((await $.mv((await $.wv([$t28], "DataSource", C, false)), "DataSet")), "Active")))) {
      await $.stmt($.wcall([$t28], "UpdateData", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "DBLookupComboboxEh31Change", async function DBLookupComboboxEh31Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["id"] = (await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "cm_common")), "CallIntegerFunction", ["Get_meqsed", [(await $.mv((await $.v(C, "DBLookupComboboxEh31")), "text"))]]));
  if ($.truthy($.ne(L0["id"], 0))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh32")), "KeyValue", L0["id"]);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "DBLookupComboboxEh28Change", async function DBLookupComboboxEh28Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "DataSetActivities")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "DataSetActivities")), "SetVariable", ["act_id", (await $.mv((await $.v(C, "DBLookupComboboxEh28")), "keyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "DataSetActivities")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "DBLookupComboboxEh30Change", async function DBLookupComboboxEh30Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "ClientCategories")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "ClientCategories")), "SetVariable", ["act_id", (await $.mv((await $.v(C, "DBLookupComboboxEh30")), "keyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "ClientCategories")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "DBDateTimeEditEh2Change", async function DBDateTimeEditEh2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "DBEdit29Exit", async function DBEdit29Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t29 = L0["sender"];
    await $.wset([$t29], "Color", (await $.wv([$t29], "ColorSave", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "DBEditEh7KeyDown", async function DBEditEh7KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  await $.stmt((await $.call(C, "LoadKeyboardLayoutA", ["00000409", (await $.v(C, "KLF_ACTIVATE"))])));
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TArConclusionForm", "DBEditEh7Change", async function DBEditEh7Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadKeyboardLayoutA", ["00000409", (await $.v(C, "KLF_ACTIVATE"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "DBEditEh3KeyDown", async function DBEditEh3KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  await $.stmt((await $.call(C, "LoadKeyboardLayoutA", ["00000409", (await $.v(C, "KLF_ACTIVATE"))])));
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TArConclusionForm", "TabSheet2Enter", async function TabSheet2Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "tbCreditEnter", async function tbCreditEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t30 = (await $.v(C, "ArDataModuleConcl"));
    if ($.truthy($.eq((await $.mv((await $.wv([$t30], "Branches", C, false)), "active")), (await $.wv([$t30], "false", C, false))))) {
      await $.mcall((await $.wv([$t30], "Branches", C, false)), "Open", []);
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t30], "CreditTypes", C, false)), "active")), (await $.wv([$t30], "false", C, false))))) {
      await $.mcall((await $.wv([$t30], "CreditTypes", C, false)), "Open", []);
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t30], "UsrGroups", C, false)), "active")), (await $.wv([$t30], "false", C, false))))) {
      await $.mcall((await $.wv([$t30], "UsrGroups", C, false)), "Open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "DBLookupComboboxEh30Click", async function DBLookupComboboxEh30Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "DBLookupComboboxEh29Change", async function DBLookupComboboxEh29Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh29")), "text")), ""))) {
    await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "creditcatData")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "creditcatData")), "SetVariable", ["vid_sob", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "EstateTypeData")), "fieldbyname", ["id"])), "asinteger"))])));
    await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "creditcatData")), "open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "DBLookupComboboxEh19Change", async function DBLookupComboboxEh19Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "FInsertCredit")), true))) {
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "ArDataModuleConcl")), "CreditProps")), "Active")), true))) {
      await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "PrinadDataSet")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "PrinadDataSet")), "SetVariable", ["custid", (await $.mv((await $.v(C, "DBLookupComboboxEh19")), "KeyValue"))])));
      await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "PrinadDataSet")), "open", []);
      await $.mset((await $.v(C, "DBEditEh7")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "PrinadDataSet")), "FieldByName", ["passpin"])), "asstring")));
      await $.mset((await $.v(C, "DBEditEh3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "PrinadDataSet")), "FieldByName", ["pasnum"])), "asstring")));
      await $.mset((await $.v(C, "DBEditEh6")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "PrinadDataSet")), "FieldByName", ["address"])), "asstring")));
      await $.mset((await $.v(C, "DBEditEh4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "PrinadDataSet")), "FieldByName", ["tels"])), "asstring")));
    }
  }
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "LoanAccs")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "LoanAccs")), "SetVariable", ["KLI_ID", (await $.mv((await $.v(C, "DBLookupComboboxEh19")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "LoanAccs")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "OUTInterestAccs")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "OUTInterestAccs")), "SetVariable", ["KLI_ID", (await $.mv((await $.v(C, "DBLookupComboboxEh19")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "OUTInterestAccs")), "open", []);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh19")), "Text")), ""))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh19")), "KeyValue")), 541))) {
      await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "CustAccs")), "close", []);
      { const $t31 = await $.iset((await $.mv((await $.mv((await $.v(C, "ArDataModuleConcl")), "CustAccs")), "SQL")), [14], $.add($.add("and ac.kli_id in (", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "DBLookupComboboxEh19")), "KeyValue"))]))), ",502)")); if ($t31 !== undefined) { await $.mset((await $.mv((await $.v(C, "ArDataModuleConcl")), "CustAccs")), "SQL", $t31); } }
      await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "CustAccs")), "open", []);
    } else {
      await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "CustAccs")), "close", []);
      { const $t32 = await $.iset((await $.mv((await $.mv((await $.v(C, "ArDataModuleConcl")), "CustAccs")), "SQL")), [14], $.add(" and ac.kli_id=", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "DBLookupComboboxEh19")), "KeyValue"))])))); if ($t32 !== undefined) { await $.mset((await $.mv((await $.v(C, "ArDataModuleConcl")), "CustAccs")), "SQL", $t32); } }
      await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "CustAccs")), "open", []);
    }
  }
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "Interests")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "Interests")), "SetVariable", ["KLI_ID", (await $.mv((await $.v(C, "DBLookupComboboxEh19")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "Interests")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "DueLoanAccs")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "DueLoanAccs")), "SetVariable", ["KLI_ID", (await $.mv((await $.v(C, "DBLookupComboboxEh19")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "DueLoanAccs")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "PReserveAccs")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "PReserveAccs")), "SetVariable", ["KLI_ID", (await $.mv((await $.v(C, "DBLookupComboboxEh19")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "PReserveAccs")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "SReserveAccs")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "SReserveAccs")), "SetVariable", ["KLI_ID", (await $.mv((await $.v(C, "DBLookupComboboxEh19")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "SReserveAccs")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "DBLookupComboboxEh4Change", async function DBLookupComboboxEh4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh4")), "text")), ""))) {
    L0["a"] = 100;
  } else {
    L0["a"] = (await $.mv((await $.v(C, "DBLookupComboboxEh4")), "keyvalue"));
  }
  if ($.truthy($.in_(L0["a"], [6, 8, 9]))) {
    await $.mset((await $.v(C, "Panel77")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "Panel77")), "Visible", false);
    await $.mset((await $.v(C, "DBLookupComboboxEh37")), "keyvalue", (-(1)));
    await $.mset((await $.v(C, "DBLookupComboboxEh36")), "keyvalue", (-(1)));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh4")), "keyvalue")), 9))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh36")), "keyvalue", 20);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "DBLookupComboboxEh7Change", async function DBLookupComboboxEh7Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "LoanAccs")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "LoanAccs")), "SetVariable", ["val_acc", (await $.mv((await $.v(C, "DBLookupComboboxEh7")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "LoanAccs")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "CustAccs")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "CustAccs")), "SetVariable", ["val_acc", (await $.mv((await $.v(C, "DBLookupComboboxEh7")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "CustAccs")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "Interests")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "Interests")), "SetVariable", ["val_acc", (await $.mv((await $.v(C, "DBLookupComboboxEh7")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "Interests")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "BitpostClick", async function BitpostClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "count": 0, "status": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["status"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "CreditProps")), "fieldbyname", ["status"])), "asinteger"));
  if ($.truthy($.eq(L0["status"], 3))) {
    L0["count"] = (await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "adm")), "CallIntegerFunction", ["getadmaddition", ["INK"]]));
    if ($.truthy($.eq(L0["count"], 0))) {
      await $.stmt((await $.call(C, "showmessage", [$.add($.add("Sizin inkar olunmuş müqaviləni təstiq etmek hüququnuz yoxdur!", "\r"), "Əlavə məlumat üçün sistem administratoruna müracət edin.")])));
      return L0.result;
    }
  }
  if ($.truthy($.eq(L0["status"], 2))) {
    L0["count"] = (await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "adm")), "CallIntegerFunction", ["getadmaddition", ["PLANPOST"]]));
    if ($.truthy($.eq(L0["count"], 0))) {
      await $.stmt((await $.call(C, "showmessage", [$.add($.add("Sizin planlaşdırılmş  müqaviləni təstiq etmek hüququnuz yoxdur!", "\r"), "Əlavə məlumat üçün sistem administratoruna müracət edin.")])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [$.add($.add($.add((await $.v(C, "Get_SelectedCrdNo")), " № li kredit təsdiq olunacaq  !"), "\r"), "Əminsiniz?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "IUPackage")), "CallProcedure", ["get_post", ["p_id", (await $.v(C, "Get_SelectedCrdID")), "p_status", 1]])));
    await $.stmt((await $.call(C, "SafeRefresh", [true, (await $.v(C, "rmLocateAfterRefresh"))])));
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "BitCancelClick", async function BitCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "count": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["count"] = (await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "adm")), "CallIntegerFunction", ["getadmaddition", ["TES"]]));
  if ($.truthy($.eq(L0["count"], 0))) {
    await $.stmt((await $.call(C, "showmessage", [$.add($.add("Sizin dəyişmək hüququnuz yoxdur!", "\r"), "Əlavə məlumat üçün sistem administratoruna müracət edin.")])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [$.add($.add($.add((await $.v(C, "Get_SelectedCrdNo")), " № li kredit inkar olunacaq !"), "\r"), "Əminsiniz?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "IUPackage")), "CallProcedure", ["get_post", ["p_id", (await $.v(C, "Get_SelectedCrdID")), "p_status", 3]])));
    await $.stmt((await $.call(C, "SafeRefresh", [true, (await $.v(C, "rmLocateAfterRefresh"))])));
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArConclusionForm", "EditPeriodCreditChange", async function EditPeriodCreditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditPeriodCredit")), "Text")), ""))) {
    await $.set(C, "a", 0);
  } else {
    await $.set(C, "a", (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "EditPeriodCredit")), "Text"))])));
  }
  await $.mset((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "CreditProps")), "FieldByName", ["DUEDATEFIRSTCONTRACT"])), "AsDateTime", (await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "cm_common")), "CallDateFunction", ["Endcontractdate", [(await $.v(C, "a")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArDataModuleConcl")), "CreditProps")), "FieldByname", ["DATEOFCONCLUSION"])), "AsDateTime"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "ArConclusionForm", (await $.mcall((await $.v(C, "TArConclusionForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
