// Generated from DataModCableContr.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DataModCableContr", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapidatamoduleimpl", "CableContractsImpl"]);
  const C = [U];
  U.defClass("TDataModC", "TDataModule", {"odscontracts": {"name": "odsContracts", "type": "TOracleDataSet"}, "dscontracts": {"name": "dsContracts", "type": "TDataSource"}, "odsvalutes": {"name": "odsValutes", "type": "TOracleDataSet"}, "dsvalutes": {"name": "dsValutes", "type": "TDataSource"}, "odspacks": {"name": "odsPacks", "type": "TOracleDataSet"}, "dspacks": {"name": "dsPacks", "type": "TDataSource"}, "odsservices": {"name": "odsServices", "type": "TOracleDataSet"}, "dsservices": {"name": "dsServices", "type": "TDataSource"}, "odsaccs": {"name": "odsAccs", "type": "TOracleDataSet"}, "dsaccs": {"name": "dsAccs", "type": "TDataSource"}, "odsengineers": {"name": "odsEngineers", "type": "TOracleDataSet"}, "dsengineers": {"name": "dsEngineers", "type": "TDataSource"}, "cable": {"name": "CABLE", "type": "TOraclePackage"}, "odsabonents": {"name": "odsAbonents", "type": "TOracleDataSet"}, "dsabonents": {"name": "dsAbonents", "type": "TDataSource"}, "dsfabonents": {"name": "dsfAbonents", "type": "TDataSource"}, "dsfpacks": {"name": "dsfPacks", "type": "TDataSource"}, "dsfengineers": {"name": "dsfEngineers", "type": "TDataSource"}, "dsfaccs": {"name": "dsfAccs", "type": "TDataSource"}, "odscontractsid": {"name": "odsContractsID", "type": "TFloatField"}, "odscontractscontract_num": {"name": "odsContractsCONTRACT_NUM", "type": "TStringField"}, "odscontractscard_num": {"name": "odsContractsCARD_NUM", "type": "TStringField"}, "odscontractssign_date": {"name": "odsContractsSIGN_DATE", "type": "TDateTimeField"}, "odscontractsabn_id": {"name": "odsContractsABN_ID", "type": "TFloatField"}, "odscontractsinst_date": {"name": "odsContractsINST_DATE", "type": "TDateTimeField"}, "odscontractsinst_place": {"name": "odsContractsINST_PLACE", "type": "TFloatField"}, "odscontractsserie": {"name": "odsContractsSERIE", "type": "TStringField"}, "odscontractsworks_num": {"name": "odsContractsWORKS_NUM", "type": "TStringField"}, "odscontractsreceiver_num": {"name": "odsContractsRECEIVER_NUM", "type": "TFloatField"}, "odscontractscable_length": {"name": "odsContractsCABLE_LENGTH", "type": "TFloatField"}, "odscontractsamount": {"name": "odsContractsAMOUNT", "type": "TFloatField"}, "odscontractsamount_eqv": {"name": "odsContractsAMOUNT_EQV", "type": "TFloatField"}, "odscontractscurr_code": {"name": "odsContractsCURR_CODE", "type": "TFloatField"}, "odscontractsdiscount": {"name": "odsContractsDISCOUNT", "type": "TFloatField"}, "odscontractseng_id": {"name": "odsContractsENG_ID", "type": "TFloatField"}, "odscontractspack_num": {"name": "odsContractsPACK_NUM", "type": "TFloatField"}, "odscontractsacc_id": {"name": "odsContractsACC_ID", "type": "TFloatField"}, "odscontractsrest": {"name": "odsContractsREST", "type": "TFloatField"}, "odscontractsrest_eqv": {"name": "odsContractsREST_EQV", "type": "TFloatField"}, "odscontractsabonent": {"name": "odsContractsABONENT", "type": "TStringField"}, "odscontractsacc_no": {"name": "odsContractsACC_NO", "type": "TStringField"}, "odscontractspackagename": {"name": "odsContractsPACKAGENAME", "type": "TStringField"}, "odscontractsengineer": {"name": "odsContractsENGINEER", "type": "TStringField"}, "odscontractsval_name": {"name": "odsContractsVAL_NAME", "type": "TStringField"}, "odscontractsinstplc": {"name": "odsContractsINSTPLC", "type": "TStringField"}, "odscontractsrest_r": {"name": "odsContractsREST_R", "type": "TFloatField"}, "odscontractslastcalcdate": {"name": "odsContractsLASTCALCDATE", "type": "TDateTimeField"}, "odscontractscalcag": {"name": "odsContractsCALCAG", "type": "TFloatField"}, "odscontractscalcags": {"name": "odsContractsCALCAGS", "type": "TStringField"}, "odscontractsdiscount_desc": {"name": "odsContractsDISCOUNT_DESC", "type": "TStringField"}, "odscontractsusname": {"name": "odsContractsUSNAME", "type": "TStringField"}, "odscontractsupdusname": {"name": "odsContractsUPDUSNAME", "type": "TStringField"}, "odscontractsupddate": {"name": "odsContractsUPDDATE", "type": "TDateTimeField"}, "odscontractsexp_date": {"name": "odsContractsEXP_DATE", "type": "TDateTimeField"}, "odscontractsprice": {"name": "odsContractsPRICE", "type": "TFloatField"}, "odscontractslastmon": {"name": "odsContractsLASTMON", "type": "TDateTimeField"}, "ords_deletedconts": {"name": "OrDS_DeletedConts", "type": "TOracleDataSet"}, "ds_deletedconts": {"name": "DS_DeletedConts", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("DataModC", null, "TDataModC");
  });
  U.func("getlastdate", async function getlastdate(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"fromdate": $.copyArg(p0), "amount": $.copyArg(p1), "monprice": $.copyArg(p2), result: 0, "moncnt": 0, "restamt": 0, "lastmon": 0};
  await $.fixArgs(L0, ["fromdate", "amount", "monprice"]);
  try {
    L0["moncnt"] = (await $.call(C, "StrToInt", [(await $.call(C, "FloatToStr", [(await $.call(C, "Int", [$.fdiv(L0["amount"], L0["monprice"])]))]))]));
    L0["restamt"] = $.sub(L0["amount"], $.mul(L0["moncnt"], L0["monprice"]));
    L0["lastmon"] = (await $.call(C, "IncMonth", [L0["fromdate"], L0["moncnt"]]));
    L0["result"] = $.add($.add(L0["lastmon"], (await $.call(C, "Int", [$.fdiv(L0["restamt"], ($.fdiv(($.mul(L0["monprice"], 12)), 365)))]))), 1);
  } catch ($t1) {
    $.rethrowControl($t1);
    $.handled($t1);
    L0["result"] = (await $.call(C, "StrToDate", ["01.01.1970"]));
  }
  return L0.result;
}, {"params": ["fromdate", "amount", "monprice"], "kind": "function", "ptypes": ["TDateTime", "Double", "Double"]});
  U.method("TDataModC", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t2 = $.sub((await $.v(C, "componentcount")), 1);
    L0["i"] = 0;
    let $t3 = true;
    for (;;) {
      if (!$t3) { L0["i"] = $.succ(L0["i"], 1); }
      $t3 = false;
      if (!($.ord(L0["i"]) <= $.ord($t2))) break;
      if ($.truthy((await $.and_(($.is_((await $.idx((await $.v(C, "components")), [L0["i"]])), "toracledataset")), async () => ($.eq((await $.mv((await $.idx((await $.v(C, "components")), [L0["i"]])), "tag")), 1)))))) {
        await $.mcall((await $.idx((await $.v(C, "components")), [L0["i"]])), "open", []);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDataModC", "odsContractsCalcFields", async function odsContractsCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.le((await $.mv((await $.v(C, "odsContractsREST")), "Value")), 0))) {
    await $.mset((await $.v(C, "odsContractsLASTMON")), "AsVariant", (await $.v(C, "null")));
  } else {
    await $.mset((await $.v(C, "odsContractsLASTMON")), "Value", (await $.call(C, "getlastdate", [(await $.mv((await $.v(C, "odsContractsLASTCALCDATE")), "Value")), $.fdiv($.mul((await $.mv((await $.v(C, "odsContractsREST")), "Value")), ($.sub(100, (await $.mv((await $.v(C, "odsContractsDISCOUNT")), "Value"))))), 100), (await $.mv((await $.v(C, "odsContractsPRICE")), "Value"))])));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
