// Generated from RtDmImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("RtDmImpl", ["SysUtils", "Classes", "DB", "OracleData", "Oracle", "sboapiDataModuleImpl", "retelcommon", "MainFormIMPL"]);
  const C = [U];
  U.defClass("TRtDataModule", "TDataModule", {"personlink": {"name": "PersonLink", "type": "TOracleDataSet"}, "personlinkid": {"name": "PersonLinkID", "type": "TFloatField"}, "personlinkname": {"name": "PersonLinkNAME", "type": "TWideStringField"}, "personlinkpersonid": {"name": "PersonLinkPERSONID", "type": "TFloatField"}, "personlinkcurrency": {"name": "PersonLinkCURRENCY", "type": "TFloatField"}, "personlinkcreditlineamount": {"name": "PersonLinkCREDITLINEAMOUNT", "type": "TFloatField"}, "personlinkannualyinterestrate": {"name": "PersonLinkANNUALYINTERESTRATE", "type": "TFloatField"}, "personlinkannualyoverduerate": {"name": "PersonLinkANNUALYOVERDUERATE", "type": "TFloatField"}, "personlinkannualypenaltyrate": {"name": "PersonLinkANNUALYPENALTYRATE", "type": "TFloatField"}, "personlinkdateofconclusion": {"name": "PersonLinkDATEOFCONCLUSION", "type": "TDateTimeField"}, "personlinkduedatefirstcontract": {"name": "PersonLinkDUEDATEFIRSTCONTRACT", "type": "TDateTimeField"}, "personlinkduedatelastcontract": {"name": "PersonLinkDUEDATELASTCONTRACT", "type": "TDateTimeField"}, "personlinknumberofcredit": {"name": "PersonLinkNUMBEROFCREDIT", "type": "TWideStringField"}, "personlinkpurposeofcredit": {"name": "PersonLinkPURPOSEOFCREDIT", "type": "TWideStringField"}, "personlinkcustomertype": {"name": "PersonLinkCUSTOMERTYPE", "type": "TFloatField"}, "personlinkcredittype": {"name": "PersonLinkCREDITTYPE", "type": "TFloatField"}, "personlinkpersonaltype": {"name": "PersonLinkPERSONALTYPE", "type": "TFloatField"}, "personlinkautopayment": {"name": "PersonLinkAUTOPAYMENT", "type": "TFloatField"}, "personlinkautoexpire": {"name": "PersonLinkAUTOEXPIRE", "type": "TFloatField"}, "personlinkusrgroup": {"name": "PersonLinkUSRGROUP", "type": "TFloatField"}, "personlinkbranchid": {"name": "PersonLinkBRANCHID", "type": "TFloatField"}, "personlinkannualbankrate": {"name": "PersonLinkANNUALBANKRATE", "type": "TFloatField"}, "personlinknewfinanceamount": {"name": "PersonLinkNEWFINANCEAMOUNT", "type": "TFloatField"}, "personlinknumberofbankcredit": {"name": "PersonLinkNUMBEROFBANKCREDIT", "type": "TWideStringField"}, "personlinkintcalcmethod": {"name": "PersonLinkINTCALCMETHOD", "type": "TFloatField"}, "personlinkperiodid": {"name": "PersonLinkPERIODID", "type": "TFloatField"}, "personlinkactivities": {"name": "PersonLinkACTIVITIES", "type": "TFloatField"}, "personlinkcreditact": {"name": "PersonLinkCREDITACT", "type": "TFloatField"}, "personlinkactivities_type": {"name": "PersonLinkACTIVITIES_TYPE", "type": "TFloatField"}, "personlinkaim_id": {"name": "PersonLinkAIM_ID", "type": "TFloatField"}, "personlinkexpertid": {"name": "PersonLinkEXPERTID", "type": "TFloatField"}, "personlinkoldcustomertype": {"name": "PersonLinkOLDCUSTOMERTYPE", "type": "TFloatField"}, "personlinkpayintday": {"name": "PersonLinkPAYINTDAY", "type": "TFloatField"}, "personlinkpayperiod": {"name": "PersonLinkPAYPERIOD", "type": "TFloatField"}, "personlinkerizedat": {"name": "PersonLinkERIZEDAT", "type": "TDateTimeField"}, "personlinkinfo": {"name": "PersonLinkINFO", "type": "TWideStringField"}, "personlinkmehsulid": {"name": "PersonLinkMEHSULID", "type": "TFloatField"}, "personlinkpledgeid_p": {"name": "PersonLinkPLEDGEID_P", "type": "TFloatField"}, "personlinkreserveid": {"name": "PersonLinkRESERVEID", "type": "TFloatField"}, "personlinkduereserveid": {"name": "PersonLinkDUERESERVEID", "type": "TFloatField"}, "srcpersonlink": {"name": "SrcPersonLink", "type": "TDataSource"}, "datasrcbranches": {"name": "DataSrcBranches", "type": "TDataSource"}, "branches": {"name": "Branches", "type": "TOracleDataSet"}, "branchesid": {"name": "BranchesID", "type": "TFloatField"}, "branchesname": {"name": "BranchesNAME", "type": "TWideStringField"}, "currencysdata": {"name": "CurrencysData", "type": "TOracleDataSet"}, "currencysdatacurrid": {"name": "CurrencysDataCURRID", "type": "TIntegerField"}, "currencysdatacurrname": {"name": "CurrencysDataCURRNAME", "type": "TWideStringField"}, "currencysdataval_name": {"name": "CurrencysDataVAL_NAME", "type": "TWideStringField"}, "datasrccurrencys": {"name": "DataSrcCurrencys", "type": "TDataSource"}, "plddatasrc": {"name": "PldDataSrc", "type": "TDataSource"}, "pgretel": {"name": "PgRetel", "type": "TOraclePackage"}, "personlinkkod": {"name": "PersonLinkKOD", "type": "TWideStringField"}, "plddataset": {"name": "PldDataSet", "type": "TOracleDataSet"}, "comp": {"name": "comp", "type": "TOracleDataSet"}, "templatesdataset": {"name": "TemplatesDataSet", "type": "TOracleDataSet"}, "templatesdatasetid": {"name": "TemplatesDataSetID", "type": "TFloatField"}, "templatesdatasetpath": {"name": "TemplatesDataSetPATH", "type": "TWideStringField"}, "templatesdatasetname": {"name": "TemplatesDataSetNAME", "type": "TWideStringField"}, "templatesdatasrc": {"name": "TemplatesDataSrc", "type": "TDataSource"}, "creditinfodataset": {"name": "CreditInfoDataSet", "type": "TOracleDataSet"}, "creditinfodatasrc": {"name": "CreditInfoDataSrc", "type": "TDataSource"}, "bookmarksdataset": {"name": "BookmarksDataSet", "type": "TOracleDataSet"}, "bookmarksdatasrc": {"name": "BookmarksDataSrc", "type": "TDataSource"}, "fieldsdataset": {"name": "FieldsDataSet", "type": "TOracleDataSet"}, "fieldsdatasrc": {"name": "FieldsDataSrc", "type": "TDataSource"}, "replacedataset": {"name": "ReplaceDataSet", "type": "TOracleDataSet"}, "yazi": {"name": "yazi", "type": "TOracleDataSet"}, "fieldsdatasetid": {"name": "FieldsDataSetID", "type": "TFloatField"}, "fieldsdatasetfieldname": {"name": "FieldsDataSetFIELDNAME", "type": "TWideStringField"}, "fieldsdatasetdescription": {"name": "FieldsDataSetDESCRIPTION", "type": "TWideStringField"}, "percent": {"name": "Percent", "type": "TOracleDataSet"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset1end": {"name": "OracleDataSet1END", "type": "TDateTimeField"}, "cm_common": {"name": "CM_COMMON", "type": "TOraclePackage"}, "personlinkperiodcontracts": {"name": "PersonLinkPERIODCONTRACTS", "type": "TFloatField"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset2num": {"name": "OracleDataSet2NUM", "type": "TWideStringField"}, "personlinkautotrance": {"name": "PersonLinkAUTOTRANCE", "type": "TFloatField"}, "personlinkautocontractno": {"name": "PersonLinkAUTOCONTRACTNO", "type": "TFloatField"}, "bankinfo": {"name": "BankInfo", "type": "TOracleDataSet"}, "bankinfologo": {"name": "BankInfoLOGO", "type": "TBlobField"}, "bankinfobank": {"name": "BankInfoBANK", "type": "TWideStringField"}, "bankinfoaz_name": {"name": "BankInfoAZ_NAME", "type": "TWideStringField"}, "filialinfods": {"name": "FilialInfods", "type": "TDataSource"}, "filialinfo": {"name": "FilialInfo", "type": "TOracleDataSet"}, "filialinfoname": {"name": "FilialInfoNAME", "type": "TWideStringField"}, "filialinfoid": {"name": "FilialInfoID", "type": "TFloatField"}, "boorowerinfo": {"name": "BoorowerInfo", "type": "TOracleDataSet"}, "boorowerinfocustaccno": {"name": "BoorowerInfoCUSTACCNO", "type": "TWideStringField"}, "boorowerinfoloanaccno": {"name": "BoorowerInfoLOANACCNO", "type": "TWideStringField"}, "boorowerinfoname": {"name": "BoorowerInfoNAME", "type": "TWideStringField"}, "dsboorowerinfo": {"name": "DSBoorowerInfo", "type": "TDataSource"}, "creditinfo": {"name": "CreditInfo", "type": "TOracleDataSet"}, "floatfield1": {"name": "FloatField1", "type": "TFloatField"}, "floatfield2": {"name": "FloatField2", "type": "TFloatField"}, "floatfield3": {"name": "FloatField3", "type": "TFloatField"}, "floatfield4": {"name": "FloatField4", "type": "TFloatField"}, "datetimefield1": {"name": "DateTimeField1", "type": "TDateTimeField"}, "datetimefield2": {"name": "DateTimeField2", "type": "TDateTimeField"}, "floatfield5": {"name": "FloatField5", "type": "TFloatField"}, "creditinfoperiod": {"name": "CreditInfoPERIOD", "type": "TFloatField"}, "creditinforest": {"name": "CreditInfoREST", "type": "TFloatField"}, "creditinfobranchid": {"name": "CreditInfoBRANCHID", "type": "TFloatField"}, "creditinfoval_name": {"name": "CreditInfoVAL_NAME", "type": "TWideStringField"}, "datasrccreditinfo": {"name": "DataSrcCreditInfo", "type": "TDataSource"}, "scheduledata": {"name": "ScheduleData", "type": "TOracleDataSet"}, "scheduledataseqno": {"name": "ScheduleDataSeqNo", "type": "TIntegerField"}, "scheduledataid": {"name": "ScheduleDataID", "type": "TFloatField"}, "scheduledatacreditid": {"name": "ScheduleDataCREDITID", "type": "TFloatField"}, "scheduledatapaymentdate": {"name": "ScheduleDataPAYMENTDATE", "type": "TDateTimeField"}, "scheduledatarest": {"name": "ScheduleDataREST", "type": "TFloatField"}, "scheduledataprincipal": {"name": "ScheduleDataPRINCIPAL", "type": "TFloatField"}, "scheduledatainterest": {"name": "ScheduleDataINTEREST", "type": "TFloatField"}, "scheduledatatotalpay": {"name": "ScheduleDataTOTALPAY", "type": "TFloatField"}, "datasrcscheduledata": {"name": "DataSrcScheduleData", "type": "TDataSource"}, "headofficeid": {"name": "HeadOfficeID", "type": "TOracleDataSet"}, "headofficeidminid": {"name": "HeadOfficeIDMINID", "type": "TFloatField"}, "personlinkautoscedule": {"name": "PersonLinkAUTOSCEDULE", "type": "TFloatField"}, "personlinkanuitet": {"name": "PersonLinkANUITET", "type": "TFloatField"}, "personlinkguzesht": {"name": "PersonLinkGUZESHT", "type": "TFloatField"}, "personlinkperrate": {"name": "PersonLinkPERRATE", "type": "TFloatField"}, "perodcurr": {"name": "perodcurr", "type": "TOracleDataSet"}, "perodcurrid": {"name": "perodcurrID", "type": "TFloatField"}, "perodcurrmehsulid": {"name": "perodcurrMEHSULID", "type": "TFloatField"}, "perodcurrvalute": {"name": "perodcurrVALUTE", "type": "TFloatField"}, "perodcurrvalu_name": {"name": "perodcurrVALU_NAME", "type": "TWideStringField"}, "personlinkf1": {"name": "PersonLinkF1", "type": "TFloatField"}, "personlinkf2": {"name": "PersonLinkF2", "type": "TFloatField"}, "personlinkf3": {"name": "PersonLinkF3", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("RtDataModule", null, "TRtDataModule");
    U.var_("Result", 0, "Integer");
  });
  U.method("TRtDataModule", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Branches")), "Open", []);
  await $.mcall((await $.v(C, "CurrencysData")), "open", []);
  await $.mcall((await $.v(C, "PldDataSet")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRtDataModule", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "PersonLink")), "Close", []);
  await $.mcall((await $.v(C, "Branches")), "Close", []);
  await $.mcall((await $.v(C, "CurrencysData")), "Close", []);
  await $.mcall((await $.v(C, "PldDataSet")), "CloseAll", []);
  await $.mcall((await $.v(C, "TemplatesDataSet")), "CloseAll", []);
  await $.mcall((await $.v(C, "CreditInfoDataSet")), "CloseAll", []);
  await $.mcall((await $.v(C, "BookmarksDataSet")), "CloseAll", []);
  await $.mcall((await $.v(C, "FieldsDataSet")), "CloseAll", []);
  await $.mcall((await $.v(C, "ReplaceDataSet")), "CloseAll", []);
  await $.mcall((await $.v(C, "yazi")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRtDataModule", "PersonLinkApplyRecord", async function PersonLinkApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "action"]);
  L0["result"] = 0;
  if ($.truthy($.eq((await $.mv((await $.v(C, "SavedCredit")), "ins")), 1))) {
    { const $t1 = L0["action"];
      if ($.eq($t1, "I")) {
        L0["result"] = 0;
      }
      else if ($.eq($t1, "U")) {
        {
          const $t2 = (await $.v(C, "PgRetel"));
          const $t3 = (await $.wv([$t2], "SavedCredit", C, false));
          await $.wset([$t2, $t3], "Result", (await $.wcall([$t2, $t3], "CallIntegerFunction", ["cred_add", ["CreditID", (await $.mv((await $.mcall((await $.wv([$t2, $t3], "PersonLink", C, false)), "FieldByName", ["id"])), "AsInteger")), "boorowerid", (await $.wv([$t2, $t3], "boorowerid", C, false)), "Currency", (await $.wv([$t2, $t3], "Currency", C, false)), "CreditLineAmount", (await $.mv((await $.mv((await $.wv([$t2, $t3], "MainForm", C, false)), "DBEdit2")), "text")), "AnnualyInterestRate", (await $.wv([$t2, $t3], "AnnualyInterestRate", C, false)), "AnnualyOverdueRate", (await $.wv([$t2, $t3], "AnnualyOverdueRate", C, false)), "AnnualyPenaltyRate", (await $.wv([$t2, $t3], "AnnualyPenaltyRate", C, false)), "DateOfConclusion", (await $.wv([$t2, $t3], "DateOfConclusion", C, false)), "DueDateFirstContract", (await $.wv([$t2, $t3], "DueDateFirstContract", C, false)), "NumberOfCredit", (await $.wv([$t2, $t3], "NumberOfCredit", C, false)), "PurposeOfCredit", (await $.wv([$t2, $t3], "PurposeOfCredit", C, false)), "BranchID", (await $.wv([$t2, $t3], "BranchID", C, false)), "pldgid_t", (await $.wv([$t2, $t3], "pldgid_t", C, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
        }
        await L0["applied"].set(true);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TRtDataModule", "PersonLinkCalcFields", async function PersonLinkCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TRtDataModule", "ScheduleDataCalcFields", async function ScheduleDataCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t4 = L0["dataset"];
    await $.mset((await $.wcall([$t4], "FieldByName", ["TOTALPAY"], C)), "AsFloat", $.add((await $.mv((await $.wcall([$t4], "FieldByName", ["PRINCIPAL"], C)), "AsFloat")), (await $.mv((await $.wcall([$t4], "FieldByName", ["INTEREST"], C)), "AsFloat"))));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
