// Generated from UnitStateDataModule.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitStateDataModule", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "sboapiDataModuleImpl", "sbcmMainDataModule"]);
  const C = [U];
  U.defClass("TTrafficDataModule", "TDataModule", {"datasrctranches": {"name": "DataSrcTranches", "type": "TDataSource"}, "tranchesdata": {"name": "TranchesData", "type": "TOracleDataSet"}, "datasrcprolongations": {"name": "DataSrcProlongations", "type": "TDataSource"}, "prolongationsdata": {"name": "ProlongationsData", "type": "TOracleDataSet"}, "datasrcpayments": {"name": "DataSrcPayments", "type": "TDataSource"}, "tranchesdataid": {"name": "TranchesDataID", "type": "TFloatField"}, "tranchesdataid2": {"name": "TranchesDataID2", "type": "TFloatField"}, "tranchesdatahdate": {"name": "TranchesDataHDATE", "type": "TDateTimeField"}, "tranchesdatatotal": {"name": "TranchesDataTOTAL", "type": "TFloatField"}, "paymentsdataid": {"name": "PaymentsDataID", "type": "TFloatField"}, "paymentsdataid2": {"name": "PaymentsDataID2", "type": "TFloatField"}, "paymentsdatahdate": {"name": "PaymentsDataHDATE", "type": "TDateTimeField"}, "paymentsdatafacticaldebt": {"name": "PaymentsDataFACTICALDEBT", "type": "TFloatField"}, "paymentsdatainterestdebt": {"name": "PaymentsDataINTERESTDEBT", "type": "TFloatField"}, "paymentsdataoverduedebt": {"name": "PaymentsDataOVERDUEDEBT", "type": "TFloatField"}, "paymentsdataoverdueinterestdebt": {"name": "PaymentsDataOVERDUEINTERESTDEBT", "type": "TFloatField"}, "prolongationsdataid": {"name": "ProlongationsDataID", "type": "TFloatField"}, "prolongationsdataid2": {"name": "ProlongationsDataID2", "type": "TFloatField"}, "prolongationsdatahdate": {"name": "ProlongationsDataHDATE", "type": "TDateTimeField"}, "prolongationsdataolddate": {"name": "ProlongationsDataOLDDATE", "type": "TDateTimeField"}, "prolongationsdatanewdate": {"name": "ProlongationsDataNEWDATE", "type": "TDateTimeField"}, "tranchesdatareserve": {"name": "TranchesDataRESERVE", "type": "TFloatField"}, "paymentorderdata": {"name": "PaymentOrderData", "type": "TOracleDataSet"}, "rates": {"name": "Rates", "type": "TOracleDataSet"}, "paymentsdata": {"name": "PaymentsData", "type": "TOracleDataSet"}, "aboutbank": {"name": "AboutBank", "type": "TOracleDataSet"}, "paymentorderdatacontractid": {"name": "PaymentOrderDataCONTRACTID", "type": "TFloatField"}, "paymentorderdatacontractno": {"name": "PaymentOrderDataCONTRACTNO", "type": "TStringField"}, "paymentorderdataopendate": {"name": "PaymentOrderDataOPENDATE", "type": "TDateTimeField"}, "paymentorderdatacontractaccno": {"name": "PaymentOrderDataCONTRACTACCNO", "type": "TStringField"}, "paymentorderdataclientaccno": {"name": "PaymentOrderDataCLIENTACCNO", "type": "TStringField"}, "paymentorderdatainterestaccno": {"name": "PaymentOrderDataINTERESTACCNO", "type": "TStringField"}, "paymentorderdataoverdueaccno": {"name": "PaymentOrderDataOVERDUEACCNO", "type": "TStringField"}, "paymentorderdataoverdueinterestaccno": {"name": "PaymentOrderDataOVERDUEINTERESTACCNO", "type": "TStringField"}, "paymentorderdatacontractaccname": {"name": "PaymentOrderDataCONTRACTACCNAME", "type": "TStringField"}, "paymentorderdatacontractcurrency": {"name": "PaymentOrderDataCONTRACTCURRENCY", "type": "TStringField"}, "paymentorderdataclientcurrency": {"name": "PaymentOrderDataCLIENTCURRENCY", "type": "TStringField"}, "paymentorderdatainterestcurrency": {"name": "PaymentOrderDataINTERESTCURRENCY", "type": "TStringField"}, "paymentorderdataoverduecurrency": {"name": "PaymentOrderDataOVERDUECURRENCY", "type": "TStringField"}, "paymentorderdataoverdueinterestcurrency": {"name": "PaymentOrderDataOVERDUEINTERESTCURRENCY", "type": "TStringField"}, "paymentorderdatacustomercurrncyid": {"name": "PaymentOrderDataCUSTOMERCURRNCYID", "type": "TFloatField"}, "paymentorderdatacontractcurrencyid": {"name": "PaymentOrderDataCONTRACTCURRENCYID", "type": "TFloatField"}, "ratesrate": {"name": "RatesRATE", "type": "TFloatField"}, "paymentorderdatafacticaldebtinnational": {"name": "PaymentOrderDataFacticalDebtInNational", "type": "TFloatField"}, "paymentorderdatainterestdebtinnational": {"name": "PaymentOrderDataInterestDebtInNational", "type": "TFloatField"}, "paymentorderdataoverduedebtinnational": {"name": "PaymentOrderDataOverdueDebtInNational", "type": "TFloatField"}, "paymentorderdataoverdueinterestdebtinnational": {"name": "PaymentOrderDataOverdueInterestDebtInNational", "type": "TFloatField"}, "customerdata": {"name": "CustomerData", "type": "TOracleDataSet"}, "paymentorderdatacontractaccid": {"name": "PaymentOrderDataCONTRACTACCID", "type": "TFloatField"}, "customerdataname": {"name": "CustomerDataNAME", "type": "TStringField"}, "customerdataid": {"name": "CustomerDataID", "type": "TIntegerField"}}, {});
  U.init(async () => {
    U.var_("TrafficDataModule", null, "TTrafficDataModule");
  });
  U.method("TTrafficDataModule", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "AboutBank")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrafficDataModule", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "AboutBank")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrafficDataModule", "PaymentOrderDataCalcFields", async function PaymentOrderDataCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "hdate": 0, "debtcurrency": 0, "creditcurrency": 0};
  await $.fixArgs(L0, ["dataset"]);
  L0["restinnational"] = $.fn(async function RestInNational(p0, p1, p2, p3) {
  const L1 = {"hdate": $.copyArg(p0), "debtcurrency": $.copyArg(p1), "creditcurrency": $.copyArg(p2), "rest": $.copyArg(p3), result: 0, "currentrate": 0};
  await $.fixArgs(L1, ["hdate", "debtcurrency", "creditcurrency", "rest"]);
  L1["result"] = L1["rest"];
  if ($.truthy($.ne(L1["debtcurrency"], L1["creditcurrency"]))) {
    if ($.truthy($.lt(L1["debtcurrency"], L1["creditcurrency"]))) {
      {
        const $t1 = (await $.v(C, "Rates"));
        await $.stmt((await $.wcall([$t1], "SetVariable", ["Dat", (await $.wv([$t1], "HDate", { get: async () => L1["hdate"], set: async (v) => { L1["hdate"] = v; }, local: true }, false))], C)));
        await $.stmt((await $.wcall([$t1], "SetVariable", ["CurrencyID", (await $.wv([$t1], "CreditCurrency", { get: async () => L1["creditcurrency"], set: async (v) => { L1["creditcurrency"] = v; }, local: true }, false))], C)));
        await $.stmt($.wcall([$t1], "Open", [], C));
        await $.wset([$t1], "CurrentRate", (await $.mv((await $.wcall([$t1], "FieldByName", ["Rate"], C)), "AsFloat")), { get: async () => L1["currentrate"], set: async (v) => { L1["currentrate"] = v; }, local: true });
        await $.stmt($.wcall([$t1], "CloseAll", [], C));
      }
      L1["result"] = $.mul(L1["rest"], L1["currentrate"]);
    }
  }
  return L1.result;
});
  {
    const $t2 = L0["dataset"];
    await $.wset([$t2], "HDate", (await $.wcall([$t2], "Integer", [(await $.wcall([$t2], "Trunc", [(await $.mv((await $.mcall((await $.wv([$t2], "PaymentsData", C, false)), "FieldByName", ["HDate"])), "AsDateTime"))], C))], C)), { get: async () => L0["hdate"], set: async (v) => { L0["hdate"] = v; }, local: true });
    await $.wset([$t2], "DebtCurrency", (await $.mv((await $.wcall([$t2], "FieldByName", ["CUSTOMERCURRNCYID"], C)), "AsInteger")), { get: async () => L0["debtcurrency"], set: async (v) => { L0["debtcurrency"] = v; }, local: true });
    await $.wset([$t2], "CreditCurrency", (await $.mv((await $.wcall([$t2], "FieldByName", ["ContractCurrencyID"], C)), "AsInteger")), { get: async () => L0["creditcurrency"], set: async (v) => { L0["creditcurrency"] = v; }, local: true });
    await $.mset((await $.wcall([$t2], "FieldByName", ["FacticalDebtInNational"], C)), "AsFloat", (await $.wcall([$t2], "RestInNational", [(await $.wv([$t2], "HDate", { get: async () => L0["hdate"], set: async (v) => { L0["hdate"] = v; }, local: true }, false)), (await $.wv([$t2], "DebtCurrency", { get: async () => L0["debtcurrency"], set: async (v) => { L0["debtcurrency"] = v; }, local: true }, false)), (await $.wv([$t2], "CreditCurrency", { get: async () => L0["creditcurrency"], set: async (v) => { L0["creditcurrency"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t2], "PaymentsData", C, false)), "FieldByName", ["FacticalDebt"])), "AsFloat"))], { get: async () => L0["restinnational"], set: async (v) => { L0["restinnational"] = v; }, local: true })));
    await $.mset((await $.wcall([$t2], "FieldByName", ["InterestDebtInNational"], C)), "AsFloat", (await $.wcall([$t2], "RestInNational", [(await $.wv([$t2], "HDate", { get: async () => L0["hdate"], set: async (v) => { L0["hdate"] = v; }, local: true }, false)), (await $.wv([$t2], "DebtCurrency", { get: async () => L0["debtcurrency"], set: async (v) => { L0["debtcurrency"] = v; }, local: true }, false)), (await $.wv([$t2], "CreditCurrency", { get: async () => L0["creditcurrency"], set: async (v) => { L0["creditcurrency"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t2], "PaymentsData", C, false)), "FieldByName", ["InterestDebt"])), "AsFloat"))], { get: async () => L0["restinnational"], set: async (v) => { L0["restinnational"] = v; }, local: true })));
    await $.mset((await $.wcall([$t2], "FieldByName", ["OverdueDebtInNational"], C)), "AsFloat", (await $.wcall([$t2], "RestInNational", [(await $.wv([$t2], "HDate", { get: async () => L0["hdate"], set: async (v) => { L0["hdate"] = v; }, local: true }, false)), (await $.wv([$t2], "DebtCurrency", { get: async () => L0["debtcurrency"], set: async (v) => { L0["debtcurrency"] = v; }, local: true }, false)), (await $.wv([$t2], "CreditCurrency", { get: async () => L0["creditcurrency"], set: async (v) => { L0["creditcurrency"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t2], "PaymentsData", C, false)), "FieldByName", ["OverdueDebt"])), "AsFloat"))], { get: async () => L0["restinnational"], set: async (v) => { L0["restinnational"] = v; }, local: true })));
    await $.mset((await $.wcall([$t2], "FieldByName", ["OverdueInterestDebtInNational"], C)), "AsFloat", (await $.wcall([$t2], "RestInNational", [(await $.wv([$t2], "HDate", { get: async () => L0["hdate"], set: async (v) => { L0["hdate"] = v; }, local: true }, false)), (await $.wv([$t2], "DebtCurrency", { get: async () => L0["debtcurrency"], set: async (v) => { L0["debtcurrency"] = v; }, local: true }, false)), (await $.wv([$t2], "CreditCurrency", { get: async () => L0["creditcurrency"], set: async (v) => { L0["creditcurrency"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t2], "PaymentsData", C, false)), "FieldByName", ["OverdueInterestDebt"])), "AsFloat"))], { get: async () => L0["restinnational"], set: async (v) => { L0["restinnational"] = v; }, local: true })));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
