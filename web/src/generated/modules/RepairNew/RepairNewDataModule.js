// Generated from RepairNewDataModule.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("RepairNewDataModule", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "RepairNewEdit", "TypInfo", "Variants", "sboapiDataModuleImpl", "RepairNewImpl"]);
  const C = [U];
  U.defClass("TRapNewDataModule", "TDataModule", {"transactiondata": {"name": "TransactionData", "type": "TOracleDataSet"}, "transaction": {"name": "Transaction", "type": "TDataSource"}, "debetratedata": {"name": "DebetRateData", "type": "TOracleDataSet"}, "creditratedata": {"name": "CreditRateData", "type": "TOracleDataSet"}, "debetrate": {"name": "DebetRate", "type": "TDataSource"}, "creditrate": {"name": "CreditRate", "type": "TDataSource"}, "curdebetdata": {"name": "CurDebetData", "type": "TOracleDataSet"}, "curkreditdata": {"name": "CurKreditData", "type": "TOracleDataSet"}, "curdebet": {"name": "CurDebet", "type": "TDataSource"}, "curkredit": {"name": "CurKredit", "type": "TDataSource"}, "curdebetdatavalute": {"name": "CurDebetDataVALUTE", "type": "TIntegerField"}, "curkreditdatavalute": {"name": "CurKreditDataVALUTE", "type": "TIntegerField"}, "debetratedataid": {"name": "DebetRateDataID", "type": "TIntegerField"}, "debetratedatarate": {"name": "DebetRateDataRATE", "type": "TFloatField"}, "creditratedataid": {"name": "CreditRateDataID", "type": "TIntegerField"}, "creditratedatarate": {"name": "CreditRateDataRATE", "type": "TFloatField"}, "debetaccdata": {"name": "DebetAccData", "type": "TOracleDataSet"}, "creditaccdata": {"name": "CreditAccData", "type": "TOracleDataSet"}, "debetaccdataid": {"name": "DebetAccDataID", "type": "TFloatField"}, "debetaccdatakli_id": {"name": "DebetAccDataKLI_ID", "type": "TFloatField"}, "debetaccdataval_acc": {"name": "DebetAccDataVAL_ACC", "type": "TIntegerField"}, "debetaccdataopen_dat": {"name": "DebetAccDataOPEN_DAT", "type": "TDateTimeField"}, "debetaccdatabal_cn1": {"name": "DebetAccDataBAL_CN1", "type": "TFloatField"}, "debetaccdatabal_cn2": {"name": "DebetAccDataBAL_CN2", "type": "TFloatField"}, "debetaccdatabal_cn3": {"name": "DebetAccDataBAL_CN3", "type": "TFloatField"}, "debetaccdatabal_cn4": {"name": "DebetAccDataBAL_CN4", "type": "TFloatField"}, "creditaccdataid": {"name": "CreditAccDataID", "type": "TFloatField"}, "creditaccdatakli_id": {"name": "CreditAccDataKLI_ID", "type": "TFloatField"}, "creditaccdataval_acc": {"name": "CreditAccDataVAL_ACC", "type": "TIntegerField"}, "creditaccdataopen_dat": {"name": "CreditAccDataOPEN_DAT", "type": "TDateTimeField"}, "creditaccdatabal_cn1": {"name": "CreditAccDataBAL_CN1", "type": "TFloatField"}, "creditaccdatabal_cn2": {"name": "CreditAccDataBAL_CN2", "type": "TFloatField"}, "creditaccdatabal_cn3": {"name": "CreditAccDataBAL_CN3", "type": "TFloatField"}, "creditaccdatabal_cn4": {"name": "CreditAccDataBAL_CN4", "type": "TFloatField"}, "debetacc": {"name": "DebetAcc", "type": "TDataSource"}, "creditacc": {"name": "CreditAcc", "type": "TDataSource"}, "transactiondataid": {"name": "TransactionDataID", "type": "TFloatField"}, "transactiondataoperatorid": {"name": "TransactionDataOPERATORID", "type": "TFloatField"}, "transactiondatatransactiondate": {"name": "TransactionDataTRANSACTIONDATE", "type": "TDateTimeField"}, "transactiondatadebitid": {"name": "TransactionDataDEBITID", "type": "TFloatField"}, "transactiondatadebitcurrencyid": {"name": "TransactionDataDEBITCURRENCYID", "type": "TFloatField"}, "transactiondatacreditid": {"name": "TransactionDataCREDITID", "type": "TFloatField"}, "transactiondatacreditcurrencyid": {"name": "TransactionDataCREDITCURRENCYID", "type": "TIntegerField"}, "transactiondatadebitamount": {"name": "TransactionDataDEBITAMOUNT", "type": "TFloatField"}, "transactiondatacreditamount": {"name": "TransactionDataCREDITAMOUNT", "type": "TFloatField"}, "transactiondatalamount": {"name": "TransactionDataLAMOUNT", "type": "TFloatField"}, "transactiondatadebitrate": {"name": "TransactionDataDEBITRATE", "type": "TFloatField"}, "transactiondatacreditrate": {"name": "TransactionDataCREDITRATE", "type": "TFloatField"}, "transactiondatadebitbank": {"name": "TransactionDataDEBITBANK", "type": "TFloatField"}, "transactiondatacreditbank": {"name": "TransactionDataCREDITBANK", "type": "TFloatField"}, "transactiondatapackagenumber": {"name": "TransactionDataPACKAGENUMBER", "type": "TIntegerField"}, "transactiondatacyphercode": {"name": "TransactionDataCYPHERCODE", "type": "TIntegerField"}, "transactiondataoutbalancechar": {"name": "TransactionDataOUTBALANCECHAR", "type": "TIntegerField"}, "transactiondatafilialid": {"name": "TransactionDataFILIALID", "type": "TIntegerField"}, "transactiondatadebitbalance": {"name": "TransactionDataDEBITBALANCE", "type": "TFloatField"}, "trdescriptiondata": {"name": "TrDescriptionData", "type": "TOracleDataSet"}, "trdescriptiondataid": {"name": "TrDescriptionDataID", "type": "TFloatField"}, "outbalancechardata": {"name": "OutBalanceCharData", "type": "TOracleDataSet"}, "outbalancechar": {"name": "OutBalanceChar", "type": "TDataSource"}, "outbalancechardataid": {"name": "OutBalanceCharDataID", "type": "TFloatField"}, "outbalancechardatadifferent": {"name": "OutBalanceCharDataDIFFERENT", "type": "TFloatField"}, "inbalancechardata": {"name": "InBalanceCharData", "type": "TOracleDataSet"}, "inbalancechar": {"name": "InBalanceChar", "type": "TDataSource"}, "inbalancechardatamediocrity": {"name": "InBalanceCharDataMEDIOCRITY", "type": "TFloatField"}, "debetaccdataiscacheaccount": {"name": "DebetAccDataISCACHEACCOUNT", "type": "TFloatField"}, "creditaccdataiscacheaccount": {"name": "CreditAccDataISCACHEACCOUNT", "type": "TFloatField"}, "pccorrect": {"name": "pcCorrect", "type": "TOraclePackage"}, "usersdata": {"name": "UsersData", "type": "TOracleDataSet"}, "users": {"name": "Users", "type": "TDataSource"}, "usersdataid": {"name": "UsersDataID", "type": "TFloatField"}, "usersdatactime": {"name": "UsersDataCTIME", "type": "TDateTimeField"}, "valutes": {"name": "Valutes", "type": "TOracleQuery"}, "vidop": {"name": "VidOp", "type": "TOracleQuery"}, "filialdebetdata": {"name": "FilialDebetData", "type": "TOracleDataSet"}, "filialcreditdata": {"name": "FilialCreditData", "type": "TOracleDataSet"}, "filialdebet": {"name": "FilialDebet", "type": "TDataSource"}, "filialcredit": {"name": "FilialCredit", "type": "TDataSource"}, "filialdebetdataid": {"name": "FilialDebetDataID", "type": "TFloatField"}, "transactiondatadebfil": {"name": "TransactionDataDEBFIL", "type": "TIntegerField"}, "transactiondatacredfil": {"name": "TransactionDataCREDFIL", "type": "TIntegerField"}, "transactiondatadebitaccno": {"name": "TransactionDataDEBITACCNO", "type": "TWideStringField"}, "transactiondatacreditaccno": {"name": "TransactionDataCREDITACCNO", "type": "TWideStringField"}, "transactiondatadebitcurrencysname": {"name": "TransactionDataDEBITCURRENCYSNAME", "type": "TWideStringField"}, "transactiondatacreditcurrencysname": {"name": "TransactionDataCREDITCURRENCYSNAME", "type": "TWideStringField"}, "transactiondatainbalancechar": {"name": "TransactionDataINBALANCECHAR", "type": "TWideStringField"}, "transactiondataname": {"name": "TransactionDataNAME", "type": "TWideStringField"}, "debetratedataname": {"name": "DebetRateDataNAME", "type": "TWideStringField"}, "debetratedatadescription": {"name": "DebetRateDataDESCRIPTION", "type": "TWideStringField"}, "creditratedataname": {"name": "CreditRateDataNAME", "type": "TWideStringField"}, "creditratedatadescription": {"name": "CreditRateDataDESCRIPTION", "type": "TWideStringField"}, "curdebetdataval_name": {"name": "CurDebetDataVAL_NAME", "type": "TWideStringField"}, "curdebetdatavalu_name": {"name": "CurDebetDataVALU_NAME", "type": "TWideStringField"}, "curkreditdataval_name": {"name": "CurKreditDataVAL_NAME", "type": "TWideStringField"}, "curkreditdatavalu_name": {"name": "CurKreditDataVALU_NAME", "type": "TWideStringField"}, "debetaccdataacc_no": {"name": "DebetAccDataACC_NO", "type": "TWideStringField"}, "debetaccdataname": {"name": "DebetAccDataNAME", "type": "TWideStringField"}, "creditaccdataacc_no": {"name": "CreditAccDataACC_NO", "type": "TWideStringField"}, "creditaccdataname": {"name": "CreditAccDataNAME", "type": "TWideStringField"}, "trdescriptiondataname": {"name": "TrDescriptionDataNAME", "type": "TWideStringField"}, "outbalancechardatashortname": {"name": "OutBalanceCharDataSHORTNAME", "type": "TWideStringField"}, "outbalancechardatafullpath": {"name": "OutBalanceCharDataFULLPATH", "type": "TWideStringField"}, "outbalancechardataextra": {"name": "OutBalanceCharDataEXTRA", "type": "TWideStringField"}, "inbalancechardatasymbol": {"name": "InBalanceCharDataSYMBOL", "type": "TWideStringField"}, "inbalancechardataname": {"name": "InBalanceCharDataNAME", "type": "TWideStringField"}, "usersdataname": {"name": "UsersDataNAME", "type": "TWideStringField"}, "filialdebetdataname": {"name": "FilialDebetDataNAME", "type": "TWideStringField"}, "filialcreditdataname": {"name": "FilialCreditDataNAME", "type": "TWideStringField"}, "filialcreditdataid": {"name": "FilialCreditDataID", "type": "TFloatField"}, "transactiondataoperationcode": {"name": "TransactionDataOPERATIONCODE", "type": "TIntegerField"}, "transactiondataoperationtype": {"name": "TransactionDataOPERATIONTYPE", "type": "TFloatField"}, "reportdescsdata": {"name": "ReportDescsData", "type": "TDataSource"}, "reportdesc": {"name": "ReportDesc", "type": "TOracleDataSet"}, "transactiondatareportid": {"name": "TransactionDataREPORTID", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("RapNewDataModule", null, "TRapNewDataModule");
  });
  U.method("TRapNewDataModule", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "FullRefresh", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("DisableProperty", async function DisableProperty(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "propertyname": $.copyArg(p1), result: false, "propinfo": null};
  await $.fixArgs(L0, ["sender", "propertyname"]);
  L0["propinfo"] = (await $.call(C, "GetPropInfo", [(await $.mv(L0["sender"], "ClassInfo")), L0["propertyname"]]));
  if ($.truthy($.ne(L0["propinfo"], null))) {
    await $.stmt((await $.call(C, "SetPropValue", [L0["sender"], "Enabled", false])));
  }
  L0["result"] = $.ne(L0["propinfo"], null);
  return L0.result;
}, {"params": ["Sender", "Propertyname"], "kind": "function", "ptypes": ["TComponent", "String"]});
  U.func("CheckDates", async function CheckDates(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "RepairNewMain"))])))) {
    {
      const $t1 = (await $.v(C, "RepairNewMain"));
      if ($.truthy($.gt((await $.mv((await $.wv([$t1], "dtpOpDat", C, false)), "DateTime")), (await $.mv((await $.wv([$t1], "dtOpDatEnd", C, false)), "DateTime"))))) {
        await $.stmt((await $.wcall([$t1], "MessageDlg", ["Əməliyyat tarixini düzgün daxil edin", (await $.wv([$t1], "mtError", C, false)), [(await $.wv([$t1], "mbOk", C, false))], 0], C)));
        $.abort();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRapNewDataModule", "FullRefresh", async function FullRefresh(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  L0["disableallcontrols"] = $.fn(async function DisableAllControls() {
  const L1 = {result: undefined};
  L1["disablecontr"] = $.fn(async function DisableContr(p0) {
  const L2 = {"value": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L2, ["value"]);
  if ($.truthy((await $.call(C, "Assigned", [L2["value"]])))) {
    {
      const $t2 = L2["value"];
      { const $t3 = $.sub((await $.wv([$t2], "ComponentCount", C, false)), 1);
        await $.wset([$t2], "i", 0, { get: async () => L2["i"], set: async (v) => { L2["i"] = v; }, local: true });
        let $t4 = true;
        for (;;) {
          if (!$t4) { await $.wset([$t2], "i", $.succ((await $.wv([$t2], "i", { get: async () => L2["i"], set: async (v) => { L2["i"] = v; }, local: true }, false)), 1), { get: async () => L2["i"], set: async (v) => { L2["i"] = v; }, local: true }); }
          $t4 = false;
          if (!($.ord((await $.wv([$t2], "i", { get: async () => L2["i"], set: async (v) => { L2["i"] = v; }, local: true }, false))) <= $.ord($t3))) break;
          await $.stmt((await $.wcall([$t2], "DisableProperty", [(await $.idx((await $.wv([$t2], "Components", C, false)), [(await $.wv([$t2], "i", { get: async () => L2["i"], set: async (v) => { L2["i"] = v; }, local: true }, false))])), "Enabled"], C)));
          await $.tick();
        }
      }
    }
  }
  return L2.result;
});
  await $.stmt((await $.callv(L1["disablecontr"], [Self])));
  await $.stmt((await $.callv(L1["disablecontr"], [(await $.v(C, "RepairNewMain"))])));
  await $.stmt((await $.callv(L1["disablecontr"], [(await $.v(C, "RepairEdit"))])));
  return L1.result;
});
  L0["opendata"] = $.fn(async function OpenData(p0) {
  const L1 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["value"]);
  {
    const $t5 = L1["value"];
    if ($.truthy($.not(((await $.wv([$t5], "Active", C, false)))))) {
      await $.stmt($.wcall([$t5], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t5], "Refresh", [], C));
    }
  }
  return L1.result;
});
  try {
    await $.stmt($.call(C, "CheckDates", []));
    await $.stmt((await $.mcall((await $.v(C, "TransactionData")), "SetVariable", ["DAT", (await $.mv((await $.mv((await $.v(C, "RepairNewMain")), "dtpOpDat")), "DateTime"))])));
    await $.stmt((await $.mcall((await $.v(C, "TransactionData")), "SetVariable", ["DAT2", (await $.mv((await $.mv((await $.v(C, "RepairNewMain")), "dtOpDatEnd")), "DateTime"))])));
    {
      const $t7 = (await $.v(C, "CreditRateData"));
      await $.stmt((await $.wcall([$t7], "SetVariable", ["DAT", (await $.mv((await $.mv((await $.wv([$t7], "RepairNewMain", C, false)), "dtpOpDat")), "DateTime"))], C)));
      await $.stmt((await $.wcall([$t7], "OpenData", [(await $.wv([$t7], "CreditRateData", C, false))], { get: async () => L0["opendata"], set: async (v) => { L0["opendata"] = v; }, local: true })));
    }
    {
      const $t8 = (await $.v(C, "DebetRateData"));
      await $.stmt((await $.wcall([$t8], "SetVariable", ["DAT", (await $.mv((await $.mv((await $.wv([$t8], "RepairNewMain", C, false)), "dtpOpDat")), "DateTime"))], C)));
      await $.stmt((await $.wcall([$t8], "OpenData", [(await $.wv([$t8], "DebetRateData", C, false))], { get: async () => L0["opendata"], set: async (v) => { L0["opendata"] = v; }, local: true })));
    }
    await $.stmt((await $.callv(L0["opendata"], [(await $.v(C, "CurDebetData"))])));
    await $.stmt((await $.callv(L0["opendata"], [(await $.v(C, "CurKreditData"))])));
    await $.stmt((await $.callv(L0["opendata"], [(await $.v(C, "OutBalanceCharData"))])));
    await $.stmt((await $.callv(L0["opendata"], [(await $.v(C, "InBalanceCharData"))])));
    await $.stmt((await $.callv(L0["opendata"], [(await $.v(C, "ReportDesc"))])));
    if ($.truthy((await $.mv((await $.v(C, "UsersData")), "Active")))) {
      await $.stmt((await $.mcall((await $.v(C, "RepairNewMain")), "FilterShowAction", [(await $.v(C, "ftAll"))])));
      await $.mcall((await $.mv((await $.v(C, "RepairNewMain")), "Filter")), "Execute", []);
    }
  } catch ($t6) {
    $.rethrowControl($t6);
    if ($.excIs($t6, "EAbort")) {
      L0["e"] = $.exc($t6);
      await $.stmt($.call(C, "Beep", []));
    }
    else {
      await $.stmt($.callv(L0["disableallcontrols"], []));
      throw $t6;
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRapNewDataModule", "CurDebetDataAfterScroll", async function CurDebetDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "RepairEdit"))])))) {
    {
      const $t9 = (await $.v(C, "RepairEdit"));
      const $t10 = (await $.wv([$t9], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false));
      await $.stmt((await $.mcall((await $.wv([$t9, $t10], "DebetRateData", C, false)), "Locate", ["id", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["VALUTE"], C)), "AsInteger")), [(await $.wv([$t9, $t10], "loCaseInsensitive", C, false)), (await $.wv([$t9, $t10], "loPartialKey", C, false))]])));
      if ($.truthy($.ne((await $.mv((await $.wv([$t9, $t10], "dblcCurDebet", C, false)), "KeyValue")), (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["VALUTE"], C)), "AsInteger"))))) {
        await $.mset((await $.wv([$t9, $t10], "dblcCurDebet", C, false)), "KeyValue", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["VALUTE"], C)), "AsInteger")));
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TRapNewDataModule", "CurKreditDataAfterScroll", async function CurKreditDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "RepairEdit"))])))) {
    {
      const $t11 = (await $.v(C, "RepairEdit"));
      const $t12 = (await $.wv([$t11], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false));
      await $.stmt((await $.mcall((await $.wv([$t11, $t12], "CreditRateData", C, false)), "Locate", ["id", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["VALUTE"], C)), "AsInteger")), [(await $.wv([$t11, $t12], "loCaseInsensitive", C, false)), (await $.wv([$t11, $t12], "loPartialKey", C, false))]])));
      if ($.truthy($.ne((await $.mv((await $.wv([$t11, $t12], "dblcCurKredit", C, false)), "KeyValue")), (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["VALUTE"], C)), "AsInteger"))))) {
        await $.mset((await $.wv([$t11, $t12], "dblcCurKredit", C, false)), "KeyValue", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["VALUTE"], C)), "AsInteger")));
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TRapNewDataModule", "TransactionDataApplyRecord", async function TransactionDataApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "action"]);
  { const $t13 = L0["action"];
    if ($.eq($t13, "I")) {
      await L0["applied"].set(true);
    }
    else if ($.eq($t13, "U")) {
      await L0["applied"].set(true);
    }
    else if ($.eq($t13, "L") || $.eq($t13, "R") || $.eq($t13, "C")) {
      await L0["applied"].set(true);
    }
    else {
      await L0["applied"].set(false);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TRapNewDataModule", "DebetAccDataAfterScroll", async function DebetAccDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "RepairEdit"))])))) {
    {
      const $t14 = (await $.v(C, "RepairEdit"));
      const $t15 = (await $.wv([$t14], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false));
      if ($.truthy(((await $.mv((await $.wv([$t14, $t15], "edDebitAccNo", C, false)), "Focused"))))) {
        await $.stmt((await $.wcall([$t14, $t15], "RefreshAccounts", [(await $.wv([$t14, $t15], "aoDebet", C, false))], C)));
        await $.mset((await $.mcall((await $.wv([$t14, $t15], "TransactionData", C, false)), "FieldByName", ["DEBITID"])), "AsInteger", (await $.mv((await $.wcall([$t14, $t15], "FieldByName", [(await $.mv((await $.wv([$t14, $t15], "dlbcDebitAccNo", C, false)), "KeyField"))], C)), "AsInteger")));
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TRapNewDataModule", "CreditAccDataAfterScroll", async function CreditAccDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "RepairEdit"))])))) {
    {
      const $t16 = (await $.v(C, "RepairEdit"));
      const $t17 = (await $.wv([$t16], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false));
      if ($.truthy(((await $.mv((await $.wv([$t16, $t17], "edKreditAccNo", C, false)), "Focused"))))) {
        await $.stmt((await $.wcall([$t16, $t17], "RefreshAccounts", [(await $.wv([$t16, $t17], "aoCredit", C, false))], C)));
        await $.mset((await $.mcall((await $.wv([$t16, $t17], "TransactionData", C, false)), "FieldByName", ["CREDITID"])), "AsInteger", (await $.mv((await $.wcall([$t16, $t17], "FieldByName", [(await $.mv((await $.wv([$t16, $t17], "dlbcKreditAccNo", C, false)), "KeyField"))], C)), "AsInteger")));
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TRapNewDataModule", "InBalanceCharDataAfterScroll", async function InBalanceCharDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "RepairEdit"))])))) {
    {
      const $t18 = (await $.v(C, "RepairEdit"));
      const $t19 = (await $.wv([$t18], "Dataset", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false));
      if ($.truthy($.not(((await $.mv((await $.wv([$t18, $t19], "dlbcBalance", C, false)), "Focused")))))) {
        if ($.truthy($.ne((await $.mv((await $.wv([$t18, $t19], "dlbcBalance", C, false)), "Text")), (await $.mv((await $.wcall([$t18, $t19], "FieldByName", ["SYMBOL"], C)), "AsString"))))) {
          await $.mset((await $.wv([$t18, $t19], "dlbcBalance", C, false)), "KeyValue", (await $.mv((await $.wcall([$t18, $t19], "FieldByName", ["SYMBOL"], C)), "AsString")));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TRapNewDataModule", "CheckTransaction", async function CheckTransaction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["value"]);
  L0["erconvert"] = "Konvertasiyya təyinatı daxil olunmayıb. Redaktəni davam etməyə razısınızmı?\r\n'İmtina' düyməsini basandan sonra əmaliyyat günün sərədlərinə əlavə olunacaq. ";
  L0["erdebt"] = "Debet hesabının valyutası düzgün daxil edin ";
  L0["ercred"] = "Kredit hesabının valyutası düzgün daxil edin ";
  L0["erkassa"] = "Kassa simvolu düzgün daxil edin ";
  L0["erdescr"] = "Əmaliyyatın təyinnatı daxil edin ";
  L0["showerror"] = $.fn(async function ShowError(p0) {
  const L1 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["value"]);
  throw $.raise((await $.mcall((await $.v(C, "EHint")), "Create", [L1["value"]])));
  return L1.result;
});
  L0["result"] = false;
  {
    const $t20 = L0["value"];
    if ($.truthy($.ne((await $.wv([$t20], "DebitCurId", C, false)), (await $.mv((await $.mcall((await $.wv([$t20], "DebetAccData", C, false)), "FieldByName", ["VAL_ACC"])), "AsInteger"))))) {
      await $.stmt((await $.wcall([$t20], "ShowError", [(await $.wv([$t20], "erDebt", { get: async () => L0["erdebt"], set: async (v) => { L0["erdebt"] = v; }, local: true }, false))], { get: async () => L0["showerror"], set: async (v) => { L0["showerror"] = v; }, local: true })));
    }
    if ($.truthy($.ne((await $.wv([$t20], "CreditCurId", C, false)), (await $.mv((await $.mcall((await $.wv([$t20], "CreditAccData", C, false)), "FieldByName", ["VAL_ACC"])), "AsInteger"))))) {
      await $.stmt((await $.wcall([$t20], "ShowError", [(await $.wv([$t20], "erCred", { get: async () => L0["ercred"], set: async (v) => { L0["ercred"] = v; }, local: true }, false))], { get: async () => L0["showerror"], set: async (v) => { L0["showerror"] = v; }, local: true })));
    }
    if ($.truthy($.eq((await $.wv([$t20], "Name", C, false)), (await $.wv([$t20], "EmptyStr", C, false))))) {
      await $.stmt((await $.wcall([$t20], "ShowError", [(await $.wv([$t20], "erDescr", { get: async () => L0["erdescr"], set: async (v) => { L0["erdescr"] = v; }, local: true }, false))], { get: async () => L0["showerror"], set: async (v) => { L0["showerror"] = v; }, local: true })));
    }
    if ($.truthy((await $.and_($.not(((await $.mv((await $.wv([$t20], "RepairEdit", C, false)), "CheckInBalance")))), async () => ($.eq((await $.wv([$t20], "InBalanceChar", C, false)), (await $.wv([$t20], "null", C, false)))))))) {
      await $.stmt((await $.wcall([$t20], "ShowError", [(await $.wv([$t20], "erKassa", { get: async () => L0["erkassa"], set: async (v) => { L0["erkassa"] = v; }, local: true }, false))], { get: async () => L0["showerror"], set: async (v) => { L0["showerror"] = v; }, local: true })));
    }
    if ($.truthy($.not(((await $.and_((await $.and_((await $.and_(($.ne((await $.wv([$t20], "DebitCurId", C, false)), (await $.wv([$t20], "CreditCurId", C, false)))), async () => ($.not(($.in_((await $.mv((await $.mcall((await $.mv((await $.wv([$t20], "RapNewDataModule", C, false)), "DebetAccData")), "FieldByName", ["IsCacheAccount"])), "AsInteger")), [1, 2])))))), async () => ($.not(($.in_((await $.mv((await $.mcall((await $.mv((await $.wv([$t20], "RapNewDataModule", C, false)), "CreditAccData")), "FieldByName", ["IsCacheAccount"])), "AsInteger")), [1, 2])))))), async () => ($.eq((await $.wv([$t20], "OutBalanceChar", C, false)), 0)))))))) {
      await $.wset([$t20], "Result", (await $.wv([$t20], "True", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } else {
      if ($.truthy($.eq((await $.wcall([$t20], "MessageDlg", [(await $.wv([$t20], "erConvert", { get: async () => L0["erconvert"], set: async (v) => { L0["erconvert"] = v; }, local: true }, false)), (await $.wv([$t20], "mtConfirmation", C, false)), [(await $.wv([$t20], "mbYes", C, false)), (await $.wv([$t20], "mbCancel", C, false))], 0], C)), (await $.wv([$t20], "mrYes", C, false))))) {
        return L0.result;
      } else {
        await $.wset([$t20], "Result", (await $.wv([$t20], "True", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      }
    }
  }
  return L0.result;
}, {"params": ["Value"], "kind": "function", "ptypes": ["TTransaction"]});
  U.method("TRapNewDataModule", "SaveTransaction", async function SaveTransaction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: false, "tempact": 0};
  await $.fixArgs(L0, ["value"]);
  {
    const $t21 = L0["value"];
    { const $t22 = (await $.wv([$t21], "Action", C, false));
      if ($.eq($t22, (await $.wv([$t21], "acDelete", C, false)))) {
        await $.wset([$t21], "TempAct", 0, { get: async () => L0["tempact"], set: async (v) => { L0["tempact"] = v; }, local: true });
      }
      else if ($.eq($t22, (await $.wv([$t21], "acInsert", C, false)))) {
        await $.wset([$t21], "TempAct", 1, { get: async () => L0["tempact"], set: async (v) => { L0["tempact"] = v; }, local: true });
      }
      else if ($.eq($t22, (await $.wv([$t21], "acUpdate", C, false)))) {
        await $.wset([$t21], "TempAct", 2, { get: async () => L0["tempact"], set: async (v) => { L0["tempact"] = v; }, local: true });
      }
      else {
        await $.wset([$t21], "TempAct", (-(1)), { get: async () => L0["tempact"], set: async (v) => { L0["tempact"] = v; }, local: true });
      }
    }
    await $.wset([$t21], "Result", (await $.mcall((await $.wv([$t21], "pcCorrect", C, false)), "CallIntegerFunction", ["Main", ["Flag", (await $.wv([$t21], "TempAct", { get: async () => L0["tempact"], set: async (v) => { L0["tempact"] = v; }, local: true }, false)), "CorMode", (await $.wv([$t21], "Mode", C, false)), "TransactionID", (await $.wv([$t21], "ID", C, false)), "TransactionDate", (await $.wv([$t21], "Date", C, false)), "DebitID", (await $.wv([$t21], "DebitId", C, false)), "CreditID", (await $.wv([$t21], "CreditId", C, false)), "DebitAmount", (await $.wv([$t21], "DebitAmmount", C, false)), "CreditAmount", (await $.wv([$t21], "CreditAmmount", C, false)), "LAmount", (await $.wv([$t21], "LAmmount", C, false)), "DebitRate", (await $.wv([$t21], "DebitRate", C, false)), "CreditRate", (await $.wv([$t21], "CreditRate", C, false)), "TrName", (await $.wv([$t21], "Name", C, false)), "InBalanceChar", (await $.wv([$t21], "InBalanceChar", C, false)), "OutBalanceChar", (await $.wv([$t21], "OutBalanceChar", C, false)), "Reportid", (await $.wv([$t21], "Reportid", C, false))]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["Value"], "kind": "function", "ptypes": ["TTransaction"]});
  U.method("TRapNewDataModule", "UsersDataAfterOpen", async function UsersDataAfterOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "RepairNewMain"))])))) {
    try {
      {
        const $t24 = (await $.v(C, "RepairNewMain"));
        await $.mcall((await $.wv([$t24], "scUser", C, false)), "Refresh", []);
      }
    } catch ($t23) {
      $.rethrowControl($t23);
      $.handled($t23);
      await $.mcall(L0["dataset"], "Close", []);
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TRapNewDataModule", "ValutesThreadRecord", async function ValutesThreadRecord(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "RepairNewMain"))])))) {
    {
      const $t25 = (await $.v(C, "RepairNewMain"));
      const $t26 = (await $.wv([$t25], "clbValute", C, false));
      const $t27 = (await $.wv([$t25, $t26], "Items", C, false));
      await $.stmt((await $.wcall([$t25, $t26, $t27], "Add", [(await $.mcall((await $.wv([$t25, $t26, $t27], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Field", ["valu_name"]))], C)));
      { const $t28 = await $.iset((await $.wv([$t25, $t26, $t27], "Checked", C, false)), [$.sub((await $.wv([$t25, $t26, $t27], "Count", C, false)), 1)], (await $.wv([$t25, $t26, $t27], "True", C, false))); if ($t28 !== undefined) { await $.wset([$t25, $t26, $t27], "Checked", $t28, C); } }
      await $.stmt((await $.mcall((await $.wcall([$t25, $t26, $t27], "TStringList", [(await $.wcall([$t25, $t26, $t27], "Pointer", [(await $.mv((await $.wv([$t25, $t26, $t27], "clbValute", C, false)), "Tag"))], C))], C)), "Add", [(await $.mcall((await $.wv([$t25, $t26, $t27], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Field", ["valute"]))])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TOracleQuery"]});
  U.method("TRapNewDataModule", "VidOpThreadRecord", async function VidOpThreadRecord(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "RepairNewMain"))])))) {
    {
      const $t29 = (await $.v(C, "RepairNewMain"));
      const $t30 = (await $.wv([$t29], "clbOperation", C, false));
      const $t31 = (await $.wv([$t29, $t30], "Items", C, false));
      await $.stmt((await $.wcall([$t29, $t30, $t31], "Add", [(await $.mcall((await $.wv([$t29, $t30, $t31], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Field", ["name"]))], C)));
      { const $t32 = await $.iset((await $.wv([$t29, $t30, $t31], "Checked", C, false)), [$.sub((await $.wv([$t29, $t30, $t31], "Count", C, false)), 1)], (await $.wv([$t29, $t30, $t31], "True", C, false))); if ($t32 !== undefined) { await $.wset([$t29, $t30, $t31], "Checked", $t32, C); } }
      await $.stmt((await $.mcall((await $.wcall([$t29, $t30, $t31], "TStringList", [(await $.wcall([$t29, $t30, $t31], "Pointer", [(await $.mv((await $.wv([$t29, $t30, $t31], "clbOperation", C, false)), "Tag"))], C))], C)), "Add", [(await $.mcall((await $.wv([$t29, $t30, $t31], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Field", ["ID"]))])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TOracleQuery"]});
  U.method("TRapNewDataModule", "ValutesThreadFinished", async function ValutesThreadFinished(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "RepairNewMain"))])))) {
    {
      const $t33 = (await $.v(C, "RepairNewMain"));
      const $t34 = (await $.wv([$t33], "clbValute", C, false));
      const $t35 = (await $.wv([$t33, $t34], "Items", C, false));
      await $.stmt((await $.wcall([$t33, $t34, $t35], "Add", ["Multivalyuta"], C)));
      await $.stmt((await $.mcall((await $.wcall([$t33, $t34, $t35], "TStringList", [(await $.wcall([$t33, $t34, $t35], "Pointer", [(await $.mv((await $.wv([$t33, $t34, $t35], "clbValute", C, false)), "Tag"))], C))], C)), "Add", ["CreditCurrencyID"])));
      { const $t36 = await $.iset((await $.wv([$t33, $t34, $t35], "Checked", C, false)), [$.sub((await $.wv([$t33, $t34, $t35], "Count", C, false)), 1)], (await $.wv([$t33, $t34, $t35], "True", C, false))); if ($t36 !== undefined) { await $.wset([$t33, $t34, $t35], "Checked", $t36, C); } }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TOracleQuery"]});
  return U;
}
