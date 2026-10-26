// Generated from RepairNewDataModule.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("RepairNewDataModule", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Oracle", "Db", "RepairNewEdit", "OracleData", "TypInfo", "Variants", "sboapiDataModuleImpl", "Out_RepairImpl1"]);
  const C = [U];
  U.defClass("TRepDataModule", "TDataModule", {"transactiondata": {"name": "TransactionData", "type": "TOracleDataSet"}, "transaction": {"name": "Transaction", "type": "TDataSource"}, "debetratedata": {"name": "DebetRateData", "type": "TOracleDataSet"}, "creditratedata": {"name": "CreditRateData", "type": "TOracleDataSet"}, "debetrate": {"name": "DebetRate", "type": "TDataSource"}, "creditrate": {"name": "CreditRate", "type": "TDataSource"}, "curdebetdata": {"name": "CurDebetData", "type": "TOracleDataSet"}, "curkreditdata": {"name": "CurKreditData", "type": "TOracleDataSet"}, "curdebet": {"name": "CurDebet", "type": "TDataSource"}, "curkredit": {"name": "CurKredit", "type": "TDataSource"}, "debetaccdata": {"name": "DebetAccData", "type": "TOracleDataSet"}, "creditaccdata": {"name": "CreditAccData", "type": "TOracleDataSet"}, "debetacc": {"name": "DebetAcc", "type": "TDataSource"}, "creditacc": {"name": "CreditAcc", "type": "TDataSource"}, "trdescriptiondata": {"name": "TrDescriptionData", "type": "TOracleDataSet"}, "outbalancechardata": {"name": "OutBalanceCharData", "type": "TOracleDataSet"}, "outbalancechar": {"name": "OutBalanceChar", "type": "TDataSource"}, "inbalancechardata": {"name": "InBalanceCharData", "type": "TOracleDataSet"}, "inbalancechar": {"name": "InBalanceChar", "type": "TDataSource"}, "pccorrect": {"name": "pcCorrect", "type": "TOraclePackage"}, "usersdata": {"name": "UsersData", "type": "TOracleDataSet"}, "users": {"name": "Users", "type": "TDataSource"}, "valutes": {"name": "Valutes", "type": "TOracleQuery"}, "vidop": {"name": "VidOp", "type": "TOracleQuery"}, "filialdebetdata": {"name": "FilialDebetData", "type": "TOracleDataSet"}, "filialcreditdata": {"name": "FilialCreditData", "type": "TOracleDataSet"}, "filialdebet": {"name": "FilialDebet", "type": "TDataSource"}, "filialcredit": {"name": "FilialCredit", "type": "TDataSource"}, "transactiondataid": {"name": "TransactionDataID", "type": "TFloatField"}, "transactiondataoperatorid": {"name": "TransactionDataOPERATORID", "type": "TFloatField"}, "transactiondatatransactiondate": {"name": "TransactionDataTRANSACTIONDATE", "type": "TDateTimeField"}, "transactiondatadebitid": {"name": "TransactionDataDEBITID", "type": "TFloatField"}, "transactiondatadebitaccno": {"name": "TransactionDataDEBITACCNO", "type": "TWideStringField"}, "transactiondatadebfil": {"name": "TransactionDataDEBFIL", "type": "TIntegerField"}, "transactiondatadebitcurrencyid": {"name": "TransactionDataDEBITCURRENCYID", "type": "TFloatField"}, "transactiondatadebitcurrencysname": {"name": "TransactionDataDEBITCURRENCYSNAME", "type": "TWideStringField"}, "transactiondatacreditid": {"name": "TransactionDataCREDITID", "type": "TFloatField"}, "transactiondatacreditaccno": {"name": "TransactionDataCREDITACCNO", "type": "TWideStringField"}, "transactiondatacredfil": {"name": "TransactionDataCREDFIL", "type": "TIntegerField"}, "transactiondatacreditcurrencyid": {"name": "TransactionDataCREDITCURRENCYID", "type": "TIntegerField"}, "transactiondatacreditcurrencysname": {"name": "TransactionDataCREDITCURRENCYSNAME", "type": "TWideStringField"}, "transactiondatadebitamount": {"name": "TransactionDataDEBITAMOUNT", "type": "TFloatField"}, "transactiondatacreditamount": {"name": "TransactionDataCREDITAMOUNT", "type": "TFloatField"}, "transactiondatalamount": {"name": "TransactionDataLAMOUNT", "type": "TFloatField"}, "transactiondatadebitrate": {"name": "TransactionDataDEBITRATE", "type": "TFloatField"}, "transactiondatacreditrate": {"name": "TransactionDataCREDITRATE", "type": "TFloatField"}, "transactiondatadebitbank": {"name": "TransactionDataDEBITBANK", "type": "TFloatField"}, "transactiondatacreditbank": {"name": "TransactionDataCREDITBANK", "type": "TFloatField"}, "transactiondatapackagenumber": {"name": "TransactionDataPACKAGENUMBER", "type": "TIntegerField"}, "transactiondatacyphercode": {"name": "TransactionDataCYPHERCODE", "type": "TIntegerField"}, "transactiondataoperationcode": {"name": "TransactionDataOPERATIONCODE", "type": "TIntegerField"}, "transactiondatainbalancechar": {"name": "TransactionDataINBALANCECHAR", "type": "TIntegerField"}, "transactiondataoutbalancechar": {"name": "TransactionDataOUTBALANCECHAR", "type": "TIntegerField"}, "transactiondatafilialid": {"name": "TransactionDataFILIALID", "type": "TIntegerField"}, "transactiondatadebitbalance": {"name": "TransactionDataDEBITBALANCE", "type": "TFloatField"}, "transactiondataname": {"name": "TransactionDataNAME", "type": "TWideStringField"}, "transactiondataoperationtype": {"name": "TransactionDataOPERATIONTYPE", "type": "TIntegerField"}, "debetratedataid": {"name": "DebetRateDataID", "type": "TIntegerField"}, "debetratedataname": {"name": "DebetRateDataNAME", "type": "TWideStringField"}, "debetratedatadescription": {"name": "DebetRateDataDESCRIPTION", "type": "TWideStringField"}, "debetratedatarate": {"name": "DebetRateDataRATE", "type": "TFloatField"}, "creditratedataid": {"name": "CreditRateDataID", "type": "TIntegerField"}, "creditratedataname": {"name": "CreditRateDataNAME", "type": "TWideStringField"}, "creditratedatadescription": {"name": "CreditRateDataDESCRIPTION", "type": "TWideStringField"}, "creditratedatarate": {"name": "CreditRateDataRATE", "type": "TFloatField"}, "curdebetdatavalute": {"name": "CurDebetDataVALUTE", "type": "TIntegerField"}, "curdebetdataval_name": {"name": "CurDebetDataVAL_NAME", "type": "TWideStringField"}, "curdebetdatavalu_name": {"name": "CurDebetDataVALU_NAME", "type": "TWideStringField"}, "curkreditdatavalute": {"name": "CurKreditDataVALUTE", "type": "TIntegerField"}, "curkreditdataval_name": {"name": "CurKreditDataVAL_NAME", "type": "TWideStringField"}, "curkreditdatavalu_name": {"name": "CurKreditDataVALU_NAME", "type": "TWideStringField"}, "debetaccdataid": {"name": "DebetAccDataID", "type": "TFloatField"}, "debetaccdatakli_id": {"name": "DebetAccDataKLI_ID", "type": "TFloatField"}, "debetaccdataacc_no": {"name": "DebetAccDataACC_NO", "type": "TWideStringField"}, "debetaccdataval_acc": {"name": "DebetAccDataVAL_ACC", "type": "TIntegerField"}, "debetaccdataname": {"name": "DebetAccDataNAME", "type": "TWideStringField"}, "debetaccdataopen_dat": {"name": "DebetAccDataOPEN_DAT", "type": "TDateTimeField"}, "debetaccdatabal_cn1": {"name": "DebetAccDataBAL_CN1", "type": "TFloatField"}, "debetaccdatabal_cn2": {"name": "DebetAccDataBAL_CN2", "type": "TFloatField"}, "debetaccdatabal_cn3": {"name": "DebetAccDataBAL_CN3", "type": "TFloatField"}, "debetaccdatabal_cn4": {"name": "DebetAccDataBAL_CN4", "type": "TFloatField"}, "debetaccdataiscacheaccount": {"name": "DebetAccDataISCACHEACCOUNT", "type": "TFloatField"}, "creditaccdataid": {"name": "CreditAccDataID", "type": "TFloatField"}, "creditaccdatakli_id": {"name": "CreditAccDataKLI_ID", "type": "TFloatField"}, "creditaccdataacc_no": {"name": "CreditAccDataACC_NO", "type": "TWideStringField"}, "creditaccdataval_acc": {"name": "CreditAccDataVAL_ACC", "type": "TIntegerField"}, "creditaccdataname": {"name": "CreditAccDataNAME", "type": "TWideStringField"}, "creditaccdataopen_dat": {"name": "CreditAccDataOPEN_DAT", "type": "TDateTimeField"}, "creditaccdatabal_cn1": {"name": "CreditAccDataBAL_CN1", "type": "TFloatField"}, "creditaccdatabal_cn2": {"name": "CreditAccDataBAL_CN2", "type": "TFloatField"}, "creditaccdatabal_cn3": {"name": "CreditAccDataBAL_CN3", "type": "TFloatField"}, "creditaccdatabal_cn4": {"name": "CreditAccDataBAL_CN4", "type": "TFloatField"}, "creditaccdataiscacheaccount": {"name": "CreditAccDataISCACHEACCOUNT", "type": "TFloatField"}, "trdescriptiondataid": {"name": "TrDescriptionDataID", "type": "TFloatField"}, "trdescriptiondataname": {"name": "TrDescriptionDataNAME", "type": "TWideStringField"}, "outbalancechardataid": {"name": "OutBalanceCharDataID", "type": "TFloatField"}, "outbalancechardatashortname": {"name": "OutBalanceCharDataSHORTNAME", "type": "TWideStringField"}, "outbalancechardatafullpath": {"name": "OutBalanceCharDataFULLPATH", "type": "TWideStringField"}, "outbalancechardataextra": {"name": "OutBalanceCharDataEXTRA", "type": "TWideStringField"}, "outbalancechardatadifferent": {"name": "OutBalanceCharDataDIFFERENT", "type": "TFloatField"}, "inbalancechardatasymbol": {"name": "InBalanceCharDataSYMBOL", "type": "TWideStringField"}, "inbalancechardataname": {"name": "InBalanceCharDataNAME", "type": "TWideStringField"}, "inbalancechardatamediocrity": {"name": "InBalanceCharDataMEDIOCRITY", "type": "TFloatField"}, "usersdataid": {"name": "UsersDataID", "type": "TFloatField"}, "usersdataname": {"name": "UsersDataNAME", "type": "TWideStringField"}, "usersdatactime": {"name": "UsersDataCTIME", "type": "TDateTimeField"}, "filialdebetdataid": {"name": "FilialDebetDataID", "type": "TFloatField"}, "filialdebetdataname": {"name": "FilialDebetDataNAME", "type": "TWideStringField"}, "filialdebetdatakod_filial": {"name": "FilialDebetDataKOD_FILIAL", "type": "TWideStringField"}, "filialcreditdataid": {"name": "FilialCreditDataID", "type": "TFloatField"}, "filialcreditdataname": {"name": "FilialCreditDataNAME", "type": "TWideStringField"}, "filialcreditdatakod_filial": {"name": "FilialCreditDataKOD_FILIAL", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("RepDataModule", null, "TRepDataModule");
  });
  U.method("TRepDataModule", "TransactionDataApplyRecord", async function TransactionDataApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "action"]);
  { const $t1 = L0["action"];
    if ($.eq($t1, "I")) {
      await L0["applied"].set(true);
    }
    else if ($.eq($t1, "U")) {
      await L0["applied"].set(true);
    }
    else if ($.eq($t1, "L") || $.eq($t1, "R") || $.eq($t1, "C")) {
      await L0["applied"].set(true);
    }
    else {
      await L0["applied"].set(false);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TRepDataModule", "CurDebetDataAfterScroll", async function CurDebetDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "OutRepairEdit"))])))) {
    {
      const $t2 = (await $.v(C, "OutRepairEdit"));
      const $t3 = (await $.wv([$t2], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false));
      await $.stmt((await $.mcall((await $.wv([$t2, $t3], "DebetRateData", C, false)), "Locate", ["id", (await $.mv((await $.mcall((await $.wv([$t2, $t3], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false)), "FieldByName", ["VALUTE"])), "AsInteger")), [(await $.wv([$t2, $t3], "loCaseInsensitive", C, false)), (await $.wv([$t2, $t3], "loPartialKey", C, false))]])));
      if ($.truthy($.ne((await $.mv((await $.wv([$t2, $t3], "dblcCurDebet", C, false)), "KeyValue")), (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["VALUTE"], C)), "AsInteger"))))) {
        await $.mset((await $.wv([$t2, $t3], "dblcCurDebet", C, false)), "KeyValue", (await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["VALUTE"], C)), "AsInteger")));
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TRepDataModule", "CurKreditDataAfterScroll", async function CurKreditDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "OutRepairEdit"))])))) {
    {
      const $t4 = (await $.v(C, "OutRepairEdit"));
      const $t5 = (await $.wv([$t4], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false));
      await $.stmt((await $.mcall((await $.wv([$t4, $t5], "CreditRateData", C, false)), "Locate", ["id", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["VALUTE"], C)), "AsInteger")), [(await $.wv([$t4, $t5], "loCaseInsensitive", C, false)), (await $.wv([$t4, $t5], "loPartialKey", C, false))]])));
      if ($.truthy($.ne((await $.mv((await $.wv([$t4, $t5], "dblcCurKredit", C, false)), "KeyValue")), (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["VALUTE"], C)), "AsInteger"))))) {
        await $.mset((await $.wv([$t4, $t5], "dblcCurKredit", C, false)), "KeyValue", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["VALUTE"], C)), "AsInteger")));
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TRepDataModule", "CheckTransaction", async function CheckTransaction(Self, p0) {
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
    const $t6 = L0["value"];
    if ($.truthy($.ne((await $.wv([$t6], "DebitCurId", C, false)), (await $.mv((await $.mcall((await $.wv([$t6], "DebetAccData", C, false)), "FieldByName", ["VAL_ACC"])), "AsInteger"))))) {
      await $.stmt((await $.wcall([$t6], "ShowError", [(await $.wv([$t6], "erDebt", { get: async () => L0["erdebt"], set: async (v) => { L0["erdebt"] = v; }, local: true }, false))], { get: async () => L0["showerror"], set: async (v) => { L0["showerror"] = v; }, local: true })));
    }
    if ($.truthy($.ne((await $.wv([$t6], "CreditCurId", C, false)), (await $.mv((await $.mcall((await $.wv([$t6], "CreditAccData", C, false)), "FieldByName", ["VAL_ACC"])), "AsInteger"))))) {
      await $.stmt((await $.wcall([$t6], "ShowError", [(await $.wv([$t6], "erCred", { get: async () => L0["ercred"], set: async (v) => { L0["ercred"] = v; }, local: true }, false))], { get: async () => L0["showerror"], set: async (v) => { L0["showerror"] = v; }, local: true })));
    }
    if ($.truthy($.eq((await $.wv([$t6], "Name", C, false)), (await $.wv([$t6], "EmptyStr", C, false))))) {
      await $.stmt((await $.wcall([$t6], "ShowError", [(await $.wv([$t6], "erDescr", { get: async () => L0["erdescr"], set: async (v) => { L0["erdescr"] = v; }, local: true }, false))], { get: async () => L0["showerror"], set: async (v) => { L0["showerror"] = v; }, local: true })));
    }
    if ($.truthy((await $.and_($.not(((await $.mv((await $.wv([$t6], "OutRepairEdit", C, false)), "CheckInBalance")))), async () => ($.eq((await $.wv([$t6], "InBalanceChar", C, false)), (await $.wv([$t6], "null", C, false)))))))) {
      await $.stmt((await $.wcall([$t6], "ShowError", [(await $.wv([$t6], "erKassa", { get: async () => L0["erkassa"], set: async (v) => { L0["erkassa"] = v; }, local: true }, false))], { get: async () => L0["showerror"], set: async (v) => { L0["showerror"] = v; }, local: true })));
    }
    if ($.truthy($.not(((await $.and_((await $.and_((await $.and_(($.ne((await $.wv([$t6], "DebitCurId", C, false)), (await $.wv([$t6], "CreditCurId", C, false)))), async () => ($.not(($.in_((await $.mv((await $.mcall((await $.mv((await $.wv([$t6], "RepDataModule", C, false)), "DebetAccData")), "FieldByName", ["IsCacheAccount"])), "AsInteger")), [1, 2])))))), async () => ($.not(($.in_((await $.mv((await $.mcall((await $.mv((await $.wv([$t6], "RepDataModule", C, false)), "CreditAccData")), "FieldByName", ["IsCacheAccount"])), "AsInteger")), [1, 2])))))), async () => ($.eq((await $.wv([$t6], "OutBalanceChar", C, false)), 0)))))))) {
      await $.wset([$t6], "Result", (await $.wv([$t6], "True", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } else {
      if ($.truthy($.eq((await $.wcall([$t6], "MessageDlg", [(await $.wv([$t6], "erConvert", { get: async () => L0["erconvert"], set: async (v) => { L0["erconvert"] = v; }, local: true }, false)), (await $.wv([$t6], "mtConfirmation", C, false)), [(await $.wv([$t6], "mbYes", C, false)), (await $.wv([$t6], "mbCancel", C, false))], 0], C)), (await $.wv([$t6], "mrYes", C, false))))) {
        return L0.result;
      } else {
        await $.wset([$t6], "Result", (await $.wv([$t6], "True", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      }
    }
  }
  return L0.result;
}, {"params": ["Value"], "kind": "function", "ptypes": ["TTransaction"]});
  U.method("TRepDataModule", "DebetAccDataAfterScroll", async function DebetAccDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "OutRepairEdit"))])))) {
    {
      const $t7 = (await $.v(C, "OutRepairEdit"));
      const $t8 = (await $.wv([$t7], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false));
      if ($.truthy(((await $.mv((await $.wv([$t7, $t8], "edDebitAccNo", C, false)), "Focused"))))) {
        await $.stmt((await $.wcall([$t7, $t8], "RefreshAccounts", [(await $.wv([$t7, $t8], "aoDebet", C, false))], C)));
        await $.mset((await $.mcall((await $.wv([$t7, $t8], "TransactionData", C, false)), "FieldByName", ["DEBITID"])), "AsInteger", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", [(await $.mv((await $.wv([$t7, $t8], "dlbcDebitAccNo", C, false)), "KeyField"))], C)), "AsInteger")));
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
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
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "Out_RepairFrm"))])))) {
    {
      const $t9 = (await $.v(C, "Out_RepairFrm"));
      if ($.truthy($.gt((await $.mv((await $.wv([$t9], "dtpOpDat", C, false)), "DateTime")), (await $.mv((await $.wv([$t9], "dtOpDatEnd", C, false)), "DateTime"))))) {
        await $.stmt((await $.wcall([$t9], "MessageDlg", ["Əməliyyat tarixini düzgün daxil edin", (await $.wv([$t9], "mtError", C, false)), [(await $.wv([$t9], "mbOk", C, false))], 0], C)));
        $.abort();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRepDataModule", "CreditAccDataAfterScroll", async function CreditAccDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "OutRepairEdit"))])))) {
    {
      const $t10 = (await $.v(C, "OutRepairEdit"));
      const $t11 = (await $.wv([$t10], "DataSet", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false));
      if ($.truthy(((await $.mv((await $.wv([$t10, $t11], "edKreditAccNo", C, false)), "Focused"))))) {
        await $.stmt((await $.wcall([$t10, $t11], "RefreshAccounts", [(await $.wv([$t10, $t11], "aoCredit", C, false))], C)));
        await $.mset((await $.mcall((await $.wv([$t10, $t11], "TransactionData", C, false)), "FieldByName", ["CREDITID"])), "AsInteger", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", [(await $.mv((await $.wv([$t10, $t11], "dlbcKreditAccNo", C, false)), "KeyField"))], C)), "AsInteger")));
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TRepDataModule", "SaveTransaction", async function SaveTransaction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: false, "tempact": 0};
  await $.fixArgs(L0, ["value"]);
  {
    const $t12 = L0["value"];
    { const $t13 = (await $.wv([$t12], "Action", C, false));
      if ($.eq($t13, (await $.wv([$t12], "acDelete", C, false)))) {
        await $.wset([$t12], "TempAct", 0, { get: async () => L0["tempact"], set: async (v) => { L0["tempact"] = v; }, local: true });
      }
      else if ($.eq($t13, (await $.wv([$t12], "acInsert", C, false)))) {
        await $.wset([$t12], "TempAct", 1, { get: async () => L0["tempact"], set: async (v) => { L0["tempact"] = v; }, local: true });
      }
      else if ($.eq($t13, (await $.wv([$t12], "acUpdate", C, false)))) {
        await $.wset([$t12], "TempAct", 2, { get: async () => L0["tempact"], set: async (v) => { L0["tempact"] = v; }, local: true });
      }
      else {
        await $.wset([$t12], "TempAct", (-(1)), { get: async () => L0["tempact"], set: async (v) => { L0["tempact"] = v; }, local: true });
      }
    }
    await $.wset([$t12], "Result", (await $.mcall((await $.wv([$t12], "pcCorrect", C, false)), "CallIntegerFunction", ["Main", ["Flag", (await $.wv([$t12], "TempAct", { get: async () => L0["tempact"], set: async (v) => { L0["tempact"] = v; }, local: true }, false)), "CorMode", (await $.wv([$t12], "Mode", C, false)), "TransactionID", (await $.wv([$t12], "ID", C, false)), "TransactionDate", (await $.wv([$t12], "Date", C, false)), "DebitID", (await $.wv([$t12], "DebitId", C, false)), "CreditID", (await $.wv([$t12], "CreditId", C, false)), "DebitAmount", (await $.wv([$t12], "DebitAmmount", C, false)), "CreditAmount", (await $.wv([$t12], "CreditAmmount", C, false)), "LAmount", (await $.wv([$t12], "LAmmount", C, false)), "DebitRate", (await $.wv([$t12], "DebitRate", C, false)), "CreditRate", (await $.wv([$t12], "CreditRate", C, false)), "TrName", (await $.wv([$t12], "Name", C, false)), "InBalanceChar", (await $.wv([$t12], "InBalanceChar", C, false)), "OutBalanceChar", (await $.wv([$t12], "OutBalanceChar", C, false))]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["Value"], "kind": "function", "ptypes": ["TTransaction"]});
  U.method("TRepDataModule", "UsersDataAfterOpen", async function UsersDataAfterOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "Out_RepairFrm"))])))) {
    try {
      {
        const $t15 = (await $.v(C, "Out_RepairFrm"));
        await $.mcall((await $.wv([$t15], "scUser", C, false)), "Refresh", []);
      }
    } catch ($t14) {
      $.rethrowControl($t14);
      $.handled($t14);
      await $.mcall(L0["dataset"], "Close", []);
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TRepDataModule", "FullRefresh", async function FullRefresh(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  L0["disableallcontrols"] = $.fn(async function DisableAllControls() {
  const L1 = {result: undefined};
  L1["disablecontr"] = $.fn(async function DisableContr(p0) {
  const L2 = {"value": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L2, ["value"]);
  if ($.truthy((await $.call(C, "Assigned", [L2["value"]])))) {
    {
      const $t16 = L2["value"];
      { const $t17 = $.sub((await $.wv([$t16], "ComponentCount", C, false)), 1);
        await $.wset([$t16], "i", 0, { get: async () => L2["i"], set: async (v) => { L2["i"] = v; }, local: true });
        let $t18 = true;
        for (;;) {
          if (!$t18) { await $.wset([$t16], "i", $.succ((await $.wv([$t16], "i", { get: async () => L2["i"], set: async (v) => { L2["i"] = v; }, local: true }, false)), 1), { get: async () => L2["i"], set: async (v) => { L2["i"] = v; }, local: true }); }
          $t18 = false;
          if (!($.ord((await $.wv([$t16], "i", { get: async () => L2["i"], set: async (v) => { L2["i"] = v; }, local: true }, false))) <= $.ord($t17))) break;
          await $.stmt((await $.wcall([$t16], "DisableProperty", [(await $.idx((await $.wv([$t16], "Components", C, false)), [(await $.wv([$t16], "i", { get: async () => L2["i"], set: async (v) => { L2["i"] = v; }, local: true }, false))])), "Enabled"], C)));
          await $.tick();
        }
      }
    }
  }
  return L2.result;
});
  await $.stmt((await $.callv(L1["disablecontr"], [Self])));
  await $.stmt((await $.callv(L1["disablecontr"], [(await $.v(C, "Out_RepairFrm"))])));
  await $.stmt((await $.callv(L1["disablecontr"], [(await $.v(C, "OutRepairEdit"))])));
  return L1.result;
});
  L0["opendata"] = $.fn(async function OpenData(p0) {
  const L1 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["value"]);
  {
    const $t19 = L1["value"];
    if ($.truthy($.not(((await $.wv([$t19], "Active", C, false)))))) {
      await $.stmt($.wcall([$t19], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t19], "Refresh", [], C));
    }
  }
  return L1.result;
});
  try {
    await $.stmt($.call(C, "CheckDates", []));
    await $.stmt((await $.mcall((await $.v(C, "TransactionData")), "SetVariable", ["DAT", (await $.mv((await $.mv((await $.v(C, "Out_RepairFrm")), "dtpOpDat")), "DateTime"))])));
    await $.stmt((await $.mcall((await $.v(C, "TransactionData")), "SetVariable", ["DAT2", (await $.mv((await $.mv((await $.v(C, "Out_RepairFrm")), "dtOpDatEnd")), "DateTime"))])));
    await $.mcall((await $.v(C, "TransactionData")), "Open", []);
    {
      const $t21 = (await $.v(C, "CreditRateData"));
      await $.stmt((await $.wcall([$t21], "SetVariable", ["DAT", (await $.mv((await $.mv((await $.wv([$t21], "Out_RepairFrm", C, false)), "dtpOpDat")), "DateTime"))], C)));
      await $.stmt((await $.wcall([$t21], "OpenData", [(await $.wv([$t21], "CreditRateData", C, false))], { get: async () => L0["opendata"], set: async (v) => { L0["opendata"] = v; }, local: true })));
    }
    {
      const $t22 = (await $.v(C, "DebetRateData"));
      await $.stmt((await $.wcall([$t22], "SetVariable", ["DAT", (await $.mv((await $.mv((await $.wv([$t22], "Out_RepairFrm", C, false)), "dtpOpDat")), "DateTime"))], C)));
      await $.stmt((await $.wcall([$t22], "OpenData", [(await $.wv([$t22], "DebetRateData", C, false))], { get: async () => L0["opendata"], set: async (v) => { L0["opendata"] = v; }, local: true })));
    }
    await $.stmt((await $.callv(L0["opendata"], [(await $.v(C, "CurDebetData"))])));
    await $.stmt((await $.callv(L0["opendata"], [(await $.v(C, "CurKreditData"))])));
    await $.stmt((await $.callv(L0["opendata"], [(await $.v(C, "DebetAccData"))])));
    await $.stmt((await $.callv(L0["opendata"], [(await $.v(C, "CreditAccData"))])));
    await $.stmt((await $.callv(L0["opendata"], [(await $.v(C, "OutBalanceCharData"))])));
    await $.stmt((await $.callv(L0["opendata"], [(await $.v(C, "InBalanceCharData"))])));
    if ($.truthy((await $.mv((await $.v(C, "UsersData")), "Active")))) {
      await $.stmt((await $.mcall((await $.v(C, "Out_RepairFrm")), "FilterShowAction", [(await $.v(C, "ftAll"))])));
      await $.mcall((await $.mv((await $.v(C, "Out_RepairFrm")), "Filter")), "Execute", []);
    }
  } catch ($t20) {
    $.rethrowControl($t20);
    if ($.excIs($t20, "EAbort")) {
      L0["e"] = $.exc($t20);
      await $.stmt($.call(C, "Beep", []));
    }
    else {
      await $.stmt($.callv(L0["disableallcontrols"], []));
      throw $t20;
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRepDataModule", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "FullRefresh", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepDataModule", "ValutesThreadFinished", async function ValutesThreadFinished(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "Out_RepairFrm"))])))) {
    {
      const $t23 = (await $.v(C, "Out_RepairFrm"));
      const $t24 = (await $.wv([$t23], "clbValute", C, false));
      const $t25 = (await $.wv([$t23, $t24], "Items", C, false));
      await $.stmt((await $.wcall([$t23, $t24, $t25], "Add", ["Yox"], C)));
      await $.stmt((await $.mcall((await $.wcall([$t23, $t24, $t25], "TStringList", [(await $.wcall([$t23, $t24, $t25], "Pointer", [(await $.mv((await $.wv([$t23, $t24, $t25], "clbValute", C, false)), "Tag"))], C))], C)), "Add", ["CreditCurrencyID"])));
      { const $t26 = await $.iset((await $.wv([$t23, $t24, $t25], "Checked", C, false)), [$.sub((await $.wv([$t23, $t24, $t25], "Count", C, false)), 1)], (await $.wv([$t23, $t24, $t25], "True", C, false))); if ($t26 !== undefined) { await $.wset([$t23, $t24, $t25], "Checked", $t26, C); } }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TOracleQuery"]});
  U.method("TRepDataModule", "ValutesThreadRecord", async function ValutesThreadRecord(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "Out_RepairFrm"))])))) {
    {
      const $t27 = (await $.v(C, "Out_RepairFrm"));
      const $t28 = (await $.wv([$t27], "clbValute", C, false));
      const $t29 = (await $.wv([$t27, $t28], "Items", C, false));
      await $.stmt((await $.wcall([$t27, $t28, $t29], "Add", [(await $.mcall((await $.wv([$t27, $t28, $t29], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Field", ["valu_name"]))], C)));
      { const $t30 = await $.iset((await $.wv([$t27, $t28, $t29], "Checked", C, false)), [$.sub((await $.wv([$t27, $t28, $t29], "Count", C, false)), 1)], (await $.wv([$t27, $t28, $t29], "True", C, false))); if ($t30 !== undefined) { await $.wset([$t27, $t28, $t29], "Checked", $t30, C); } }
      await $.stmt((await $.mcall((await $.wcall([$t27, $t28, $t29], "TStringList", [(await $.wcall([$t27, $t28, $t29], "Pointer", [(await $.mv((await $.wv([$t27, $t28, $t29], "clbValute", C, false)), "Tag"))], C))], C)), "Add", [(await $.mcall((await $.wv([$t27, $t28, $t29], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Field", ["valute"]))])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TOracleQuery"]});
  U.method("TRepDataModule", "VidOpThreadFinished", async function VidOpThreadFinished(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "Out_RepairFrm"))])))) {
    {
      const $t31 = (await $.v(C, "Out_RepairFrm"));
      const $t32 = (await $.wv([$t31], "clbValute", C, false));
      const $t33 = (await $.wv([$t31, $t32], "Items", C, false));
      await $.stmt((await $.wcall([$t31, $t32, $t33], "Add", ["Yox"], C)));
      await $.stmt((await $.mcall((await $.wcall([$t31, $t32, $t33], "TStringList", [(await $.wcall([$t31, $t32, $t33], "Pointer", [(await $.mv((await $.wv([$t31, $t32, $t33], "clbOperation", C, false)), "Tag"))], C))], C)), "Add", ["OperationType"])));
      { const $t34 = await $.iset((await $.wv([$t31, $t32, $t33], "Checked", C, false)), [$.sub((await $.wv([$t31, $t32, $t33], "Count", C, false)), 1)], (await $.wv([$t31, $t32, $t33], "True", C, false))); if ($t34 !== undefined) { await $.wset([$t31, $t32, $t33], "Checked", $t34, C); } }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TOracleQuery"]});
  U.method("TRepDataModule", "VidOpThreadRecord", async function VidOpThreadRecord(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "Out_RepairFrm"))])))) {
    {
      const $t35 = (await $.v(C, "Out_RepairFrm"));
      const $t36 = (await $.wv([$t35], "clbOperation", C, false));
      const $t37 = (await $.wv([$t35, $t36], "Items", C, false));
      await $.stmt((await $.wcall([$t35, $t36, $t37], "Add", [(await $.mcall((await $.wv([$t35, $t36, $t37], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Field", ["name"]))], C)));
      { const $t38 = await $.iset((await $.wv([$t35, $t36, $t37], "Checked", C, false)), [$.sub((await $.wv([$t35, $t36, $t37], "Count", C, false)), 1)], (await $.wv([$t35, $t36, $t37], "True", C, false))); if ($t38 !== undefined) { await $.wset([$t35, $t36, $t37], "Checked", $t38, C); } }
      await $.stmt((await $.mcall((await $.wcall([$t35, $t36, $t37], "TStringList", [(await $.wcall([$t35, $t36, $t37], "Pointer", [(await $.mv((await $.wv([$t35, $t36, $t37], "clbOperation", C, false)), "Tag"))], C))], C)), "Add", [(await $.mcall((await $.wv([$t35, $t36, $t37], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Field", ["ID"]))])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TOracleQuery"]});
  U.method("TRepDataModule", "InBalanceCharDataAfterScroll", async function InBalanceCharDataAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "OutRepairEdit"))])))) {
    {
      const $t39 = (await $.v(C, "OutRepairEdit"));
      const $t40 = (await $.wv([$t39], "Dataset", { get: async () => L0["dataset"], set: async (v) => { L0["dataset"] = v; }, local: true }, false));
      if ($.truthy($.not(((await $.mv((await $.wv([$t39, $t40], "dlbcBalance", C, false)), "Focused")))))) {
        if ($.truthy($.ne((await $.mv((await $.wv([$t39, $t40], "dlbcBalance", C, false)), "KeyValue")), (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["SYMBOL"], C)), "AsInteger"))))) {
          await $.mset((await $.wv([$t39, $t40], "dlbcBalance", C, false)), "KeyValue", (await $.mv((await $.wcall([$t39, $t40], "FieldByName", ["SYMBOL"], C)), "AsInteger")));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
