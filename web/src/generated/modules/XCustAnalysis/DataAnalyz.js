// Generated from DataAnalyz.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DataAnalyz", ["SysUtils", "Classes", "DB", "OracleData", "sboapiDataModuleImpl", "CustAnalyzUnit"]);
  const C = [U];
  U.defClass("TDataModCustAnalyz", "TDataModule", {"ods_cust": {"name": "Ods_cust", "type": "TOracleDataSet"}, "ods_custinfo": {"name": "Ods_Custinfo", "type": "TOracleDataSet"}, "ods_zamin": {"name": "Ods_zamin", "type": "TOracleDataSet"}, "ods_girov": {"name": "Ods_girov", "type": "TOracleDataSet"}, "ods_sedule": {"name": "Ods_sedule", "type": "TOracleDataSet"}, "dsrc_cust": {"name": "Dsrc_cust", "type": "TDataSource"}, "dsrc_portfol": {"name": "Dsrc_portfol", "type": "TDataSource"}, "dsrc_custinfo": {"name": "Dsrc_custinfo", "type": "TDataSource"}, "dsrc_zamin": {"name": "Dsrc_zamin", "type": "TDataSource"}, "dsrc_girov": {"name": "Dsrc_girov", "type": "TDataSource"}, "dsrc_sedule": {"name": "dsrc_sedule", "type": "TDataSource"}, "ods_custid": {"name": "Ods_custID", "type": "TIntegerField"}, "ods_custtam_adi": {"name": "Ods_custTAM_ADI", "type": "TWideStringField"}, "ods_custsoyadi": {"name": "Ods_custSOYADI", "type": "TWideStringField"}, "ods_custadi": {"name": "Ods_custADI", "type": "TWideStringField"}, "ods_custata_adi": {"name": "Ods_custATA_ADI", "type": "TWideStringField"}, "ods_custmusteri_tipi": {"name": "Ods_custMUSTERI_TIPI", "type": "TFloatField"}, "ods_portfol": {"name": "Ods_portfol", "type": "TOracleDataSet"}, "ods_portfolid": {"name": "Ods_portfolID", "type": "TFloatField"}, "ods_portfoldateofconclusion": {"name": "Ods_portfolDATEOFCONCLUSION", "type": "TDateTimeField"}, "ods_portfolnumberofcredit": {"name": "Ods_portfolNUMBEROFCREDIT", "type": "TWideStringField"}, "ods_portfolduedatefirstcontract": {"name": "Ods_portfolDUEDATEFIRSTCONTRACT", "type": "TDateTimeField"}, "ods_portfolinitialamount": {"name": "Ods_portfolINITIALAMOUNT", "type": "TFloatField"}, "ods_portfolannualyinterestrate": {"name": "Ods_portfolANNUALYINTERESTRATE", "type": "TFloatField"}, "ods_portfolperiodcontracts": {"name": "Ods_portfolPERIODCONTRACTS", "type": "TFloatField"}, "ods_portfolmutexsis": {"name": "Ods_portfolMUTEXSIS", "type": "TWideStringField"}, "ods_portfolmaliye": {"name": "Ods_portfolMALIYE", "type": "TWideStringField"}, "ods_portfolverilme_meqsed": {"name": "Ods_portfolVERILME_MEQSED", "type": "TWideStringField"}, "ods_portfolrest": {"name": "Ods_portfolREST", "type": "TFloatField"}, "ods_portfolinterestrest": {"name": "Ods_portfolINTERESTREST", "type": "TFloatField"}, "ods_portfolduerest": {"name": "Ods_portfolDUEREST", "type": "TFloatField"}, "ods_portfoldueinterestrest": {"name": "Ods_portfolDUEINTERESTREST", "type": "TFloatField"}, "ods_portfolpayedamt": {"name": "Ods_portfolPAYEDAMT", "type": "TFloatField"}, "ods_portfolpayedintamt": {"name": "Ods_portfolPAYEDINTAMT", "type": "TFloatField"}, "ods_portfolpayeddueamt": {"name": "Ods_portfolPAYEDDUEAMT", "type": "TFloatField"}, "ods_portfolpayeddueintamt": {"name": "Ods_portfolPAYEDDUEINTAMT", "type": "TFloatField"}, "ods_portfolpayedpenaltyamt": {"name": "Ods_portfolPAYEDPENALTYAMT", "type": "TFloatField"}, "ods_portfolprincipal": {"name": "Ods_portfolPRINCIPAL", "type": "TFloatField"}, "ods_portfolinterest": {"name": "Ods_portfolINTEREST", "type": "TFloatField"}, "ods_portfolayod_cem": {"name": "Ods_portfolAYOD_CEM", "type": "TFloatField"}, "ods_sedulepaymentdate": {"name": "Ods_sedulePAYMENTDATE", "type": "TDateTimeField"}, "ods_seduleprincipal": {"name": "Ods_sedulePRINCIPAL", "type": "TFloatField"}, "ods_seduleinterest": {"name": "Ods_seduleINTEREST", "type": "TFloatField"}, "ods_sedulerest": {"name": "Ods_seduleREST", "type": "TFloatField"}, "ods_payments": {"name": "Ods_payments", "type": "TOracleDataSet"}, "dsrc_payments": {"name": "Dsrc_payments", "type": "TDataSource"}, "ods_seduletotalpay": {"name": "Ods_seduleTOTALPAY", "type": "TFloatField"}, "ods_seduleno": {"name": "Ods_seduleNO", "type": "TFloatField"}, "ods_paymentspaydate": {"name": "Ods_paymentsPAYDATE", "type": "TDateTimeField"}, "ods_paymentspayedamt": {"name": "Ods_paymentsPAYEDAMT", "type": "TFloatField"}, "ods_paymentspayedintamt": {"name": "Ods_paymentsPAYEDINTAMT", "type": "TFloatField"}, "ods_paymentspayeddueamt": {"name": "Ods_paymentsPAYEDDUEAMT", "type": "TFloatField"}, "ods_paymentspayeddueintamt": {"name": "Ods_paymentsPAYEDDUEINTAMT", "type": "TFloatField"}, "ods_paymentspayedpenaltyamt": {"name": "Ods_paymentsPAYEDPENALTYAMT", "type": "TFloatField"}, "ods_paymentsbkammount": {"name": "Ods_paymentsBKAMMOUNT", "type": "TFloatField"}, "ods_paymentsirest": {"name": "Ods_paymentsIREST", "type": "TFloatField"}, "ods_paymentsiintrest": {"name": "Ods_paymentsIINTREST", "type": "TFloatField"}, "ods_portfolgec_gun": {"name": "Ods_portfolGEC_GUN", "type": "TFloatField"}, "ods_zaminguarantorname": {"name": "Ods_zaminGUARANTORNAME", "type": "TWideStringField"}, "ods_zaminzaminadres1": {"name": "Ods_zaminZAMINADRES1", "type": "TWideStringField"}, "ods_zaminzmpaspyer1": {"name": "Ods_zaminZMPASPYER1", "type": "TWideStringField"}, "ods_zamincardid": {"name": "Ods_zaminCARDID", "type": "TFloatField"}, "ods_zaminpincode": {"name": "Ods_zaminPINCODE", "type": "TWideStringField"}, "ods_zaminguarantorid": {"name": "Ods_zaminGUARANTORID", "type": "TWideStringField"}, "ods_portfolpenaltyrest": {"name": "Ods_portfolPENALTYREST", "type": "TFloatField"}, "ods_portfolclosedate": {"name": "Ods_portfolCLOSEDATE", "type": "TDateTimeField"}, "ods_portfolstopcalcdate": {"name": "Ods_portfolSTOPCALCDATE", "type": "TDateTimeField"}, "p_inn_pincode": {"name": "p_inn_pincode", "type": "String"}, "pv_inn_pincode": {"name": "pv_inn_pincode", "type": "String"}}, {});
  U.init(async () => {
    U.var_("DataModCustAnalyz", null, "TDataModCustAnalyz");
  });
  U.method("TDataModCustAnalyz", "Ods_custAfterScroll", async function Ods_custAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t1 = (await $.v(C, "DataModCustAnalyz"));
    await $.mcall((await $.wv([$t1], "Ods_portfol", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t1], "Ods_portfol", C, false)), "SetVariable", ["v_boorowerid", (await $.mv((await $.wv([$t1], "Ods_custID", C, false)), "AsInteger"))])));
    await $.mcall((await $.wv([$t1], "Ods_portfol", C, false)), "open", []);
    await $.mcall((await $.wv([$t1], "Ods_portfol", C, false)), "First", []);
  }
  {
    const $t2 = (await $.v(C, "DataModCustAnalyz"));
    await $.mcall((await $.wv([$t2], "Ods_Custinfo", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t2], "Ods_Custinfo", C, false)), "SetVariable", ["v_id", (await $.mv((await $.wv([$t2], "Ods_custID", C, false)), "AsInteger"))])));
    await $.mcall((await $.wv([$t2], "Ods_Custinfo", C, false)), "open", []);
    { const $t3 = (await $.mv((await $.wv([$t2], "Ods_custMUSTERI_TIPI", C, false)), "AsInteger"));
      if ($.eq($t3, 0)) {
        await $.wset([$t2], "p_inn_pincode", "VOEN:", C);
        await $.wset([$t2], "pv_inn_pincode", (await $.mv((await $.mcall((await $.wv([$t2], "Ods_Custinfo", C, false)), "FieldByName", ["inn"])), "AsString")), C);
      }
      else if ($.eq($t3, 1) || $.eq($t3, 2) || $.eq($t3, 3) || $.eq($t3, 4)) {
        await $.wset([$t2], "p_inn_pincode", "PİN Kod:", C);
        await $.wset([$t2], "pv_inn_pincode", (await $.mv((await $.mcall((await $.wv([$t2], "Ods_Custinfo", C, false)), "FieldByName", ["passpin"])), "AsString")), C);
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDataModCustAnalyz", "Ods_portfolAfterScroll", async function Ods_portfolAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t4 = (await $.v(C, "DataModCustAnalyz"));
    await $.mcall((await $.wv([$t4], "Ods_zamin", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t4], "Ods_zamin", C, false)), "SetVariable", ["v_creditid", (await $.mv((await $.wv([$t4], "Ods_portfolid", C, false)), "AsInteger"))])));
    await $.mcall((await $.wv([$t4], "Ods_zamin", C, false)), "open", []);
  }
  {
    const $t5 = (await $.v(C, "DataModCustAnalyz"));
    await $.mcall((await $.wv([$t5], "Ods_girov", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t5], "Ods_girov", C, false)), "SetVariable", ["v_creditid", (await $.mv((await $.wv([$t5], "Ods_portfolid", C, false)), "AsInteger"))])));
    await $.mcall((await $.wv([$t5], "Ods_girov", C, false)), "open", []);
  }
  {
    const $t6 = (await $.v(C, "DataModCustAnalyz"));
    await $.mcall((await $.wv([$t6], "Ods_sedule", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t6], "Ods_sedule", C, false)), "SetVariable", ["v_creditid", (await $.mv((await $.wv([$t6], "Ods_portfolid", C, false)), "AsInteger"))])));
    await $.mcall((await $.wv([$t6], "Ods_sedule", C, false)), "open", []);
  }
  {
    const $t7 = (await $.v(C, "DataModCustAnalyz"));
    await $.mcall((await $.wv([$t7], "Ods_payments", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t7], "Ods_payments", C, false)), "SetVariable", ["v_creditid", (await $.mv((await $.wv([$t7], "Ods_portfolid", C, false)), "AsInteger"))])));
    await $.mcall((await $.wv([$t7], "Ods_payments", C, false)), "open", []);
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
