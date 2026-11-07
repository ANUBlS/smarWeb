// Generated from BPDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("BPDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl", "CommonDecls"]);
  const C = [U];
  U.defClass("TBPDataModule", "TDataModule", {"creditinfo": {"name": "CreditInfo", "type": "TOracleDataSet"}, "dscreditinfo": {"name": "DSCreditInfo", "type": "TDataSource"}, "bpdata": {"name": "BPData", "type": "TOracleDataSet"}, "dsbpdata": {"name": "DSBPData", "type": "TDataSource"}, "bppurposes": {"name": "BPPurposes", "type": "TOracleDataSet"}, "dsbppurposes": {"name": "DSBPPurposes", "type": "TDataSource"}, "bptypes": {"name": "BPTypes", "type": "TOracleDataSet"}, "dsbptypes": {"name": "DSBPTypes", "type": "TDataSource"}, "bpdatacreditid": {"name": "BPDataCREDITID", "type": "TFloatField"}, "bpdataprojectcost": {"name": "BPDataPROJECTCOST", "type": "TFloatField"}, "bpdatagivencredit": {"name": "BPDataGIVENCREDIT", "type": "TFloatField"}, "bpdataconcessionperiod": {"name": "BPDataCONCESSIONPERIOD", "type": "TFloatField"}, "bpdatapurpose": {"name": "BPDataPURPOSE", "type": "TFloatField"}, "bpdatatype": {"name": "BPDataTYPE", "type": "TFloatField"}, "bpdatauntmeansofproduction": {"name": "BPDataUNTMEANSOFPRODUCTION", "type": "TWideStringField"}, "bpdatanumberofproduction": {"name": "BPDataNUMBEROFPRODUCTION", "type": "TFloatField"}, "bpdatauntproduction": {"name": "BPDataUNTPRODUCTION", "type": "TWideStringField"}, "bpdataproduction": {"name": "BPDataPRODUCTION", "type": "TFloatField"}, "bpdataproductivity": {"name": "BPDataPRODUCTIVITY", "type": "TFloatField"}, "bpdataproductioncost": {"name": "BPDataPRODUCTIONCOST", "type": "TFloatField"}, "bpdatasumprofit": {"name": "BPDataSUMPROFIT", "type": "TFloatField"}, "bpdataboughtmaterial": {"name": "BPDataBOUGHTMATERIAL", "type": "TFloatField"}, "bpdataoperationexpense": {"name": "BPDataOPERATIONEXPENSE", "type": "TFloatField"}, "bpdatataxexpense": {"name": "BPDataTAXEXPENSE", "type": "TFloatField"}, "bpdataotherexpence": {"name": "BPDataOTHEREXPENCE", "type": "TFloatField"}, "bpdatasumexpense": {"name": "BPDataSUMEXPENSE", "type": "TFloatField"}, "cm_credit": {"name": "CM_CREDIT", "type": "TOraclePackage"}, "districtsdataset": {"name": "DistrictsDataSet", "type": "TOracleDataSet"}, "villagesdataset": {"name": "VillagesDataSet", "type": "TOracleDataSet"}, "aktargetsdataset": {"name": "AKTargetsDataSet", "type": "TOracleDataSet"}, "akpurposesdataset": {"name": "AKPurposesDataSet", "type": "TOracleDataSet"}, "districtsdatasrc": {"name": "DistrictsDataSrc", "type": "TDataSource"}, "villagesdatasrc": {"name": "VillagesDataSrc", "type": "TDataSource"}, "aktargetsdatasrc": {"name": "AKTargetsDataSrc", "type": "TDataSource"}, "akpurposesdatasrc": {"name": "AKPurposesDataSrc", "type": "TDataSource"}, "cm_akf": {"name": "CM_AKF", "type": "TOraclePackage"}, "bpdatavillageid": {"name": "BPDataVILLAGEID", "type": "TFloatField"}, "bpdataakpurpose": {"name": "BPDataAKPURPOSE", "type": "TFloatField"}, "portinf": {"name": "PortInf", "type": "TOracleDataSet"}, "portinfsrc": {"name": "PortInfSrc", "type": "TDataSource"}, "portinfcreditid": {"name": "PortInfCREDITID", "type": "TFloatField"}, "portinfcreditlineamount": {"name": "PortInfCREDITLINEAMOUNT", "type": "TFloatField"}, "portinfprojectid": {"name": "PortInfPROJECTID", "type": "TFloatField"}, "portinfproject": {"name": "PortInfPROJECT", "type": "TWideStringField"}, "portinfdistrict": {"name": "PortInfDISTRICT", "type": "TWideStringField"}, "portinfvillage": {"name": "PortInfVILLAGE", "type": "TWideStringField"}, "bpsources": {"name": "BPSources", "type": "TOracleDataSet"}, "dsbpsources": {"name": "DSBPSources", "type": "TDataSource"}, "bpdatasource": {"name": "BPDataSOURCE", "type": "TFloatField"}, "portinfnumberofcredit": {"name": "PortInfNUMBEROFCREDIT", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("BPDataModule", null, "TBPDataModule");
  });
  U.method("TBPDataModule", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BPPurposes")), "Open", []);
  await $.mcall((await $.v(C, "BPSources")), "Open", []);
  await $.mcall((await $.v(C, "BPTypes")), "Open", []);
  { const $t1 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 21))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
      }
      await $.tick();
    }
  }
  { const $t3 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t4 = true;
    for (;;) {
      if (!$t4) { L0["i"] = $.succ(L0["i"], 1); }
      $t4 = false;
      if (!($.ord(L0["i"]) <= $.ord($t3))) break;
      if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 20))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBPDataModule", "BPDataApplyRecord", async function BPDataApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "p_creditid": 0, "p_projectcost": 0, "p_givencredit": 0, "p_concessionperiod": 0, "p_purpose": 0, "p_source": '', "p_type": 0, "p_untmeansofproduction": '', "p_numberofproduction": 0, "p_untproduction": '', "p_production": 0, "p_productivity": 0, "p_productioncost": 0, "p_sumprofit": 0, "p_boughtmaterial": 0, "p_operationexpense": 0, "p_taxexpense": 0, "p_otherexpence": 0, "p_sumexpense": 0, "p_villageid": 0, "p_akpurpose": 0, "result": 0};
  await $.fixArgs(L0, ["sender", "action"]);
  {
    const $t5 = L0["sender"];
    await $.wset([$t5], "p_CreditID", (await $.mv((await $.wcall([$t5], "FieldByName", ["CreditID"], C)), "AsInteger")), { get: async () => L0["p_creditid"], set: async (v) => { L0["p_creditid"] = v; }, local: true });
    await $.wset([$t5], "p_projectcost", (await $.mv((await $.wcall([$t5], "FieldByName", ["projectcost"], C)), "AsFloat")), { get: async () => L0["p_projectcost"], set: async (v) => { L0["p_projectcost"] = v; }, local: true });
    await $.wset([$t5], "p_givencredit", (await $.mv((await $.wcall([$t5], "FieldByName", ["givencredit"], C)), "AsFloat")), { get: async () => L0["p_givencredit"], set: async (v) => { L0["p_givencredit"] = v; }, local: true });
    await $.wset([$t5], "p_concessionperiod", (await $.mv((await $.wcall([$t5], "FieldByName", ["concessionperiod"], C)), "AsInteger")), { get: async () => L0["p_concessionperiod"], set: async (v) => { L0["p_concessionperiod"] = v; }, local: true });
    await $.wset([$t5], "p_purpose", (await $.mv((await $.wcall([$t5], "FieldByName", ["purpose"], C)), "AsInteger")), { get: async () => L0["p_purpose"], set: async (v) => { L0["p_purpose"] = v; }, local: true });
    await $.wset([$t5], "p_source", (await $.mv((await $.wcall([$t5], "FieldByName", ["Source"], C)), "AsString")), { get: async () => L0["p_source"], set: async (v) => { L0["p_source"] = v; }, local: true });
    await $.wset([$t5], "p_type", (await $.mv((await $.wcall([$t5], "FieldByName", ["Type"], C)), "AsInteger")), { get: async () => L0["p_type"], set: async (v) => { L0["p_type"] = v; }, local: true });
    await $.wset([$t5], "p_untmeansofproduction", (await $.mv((await $.wcall([$t5], "FieldByName", ["untmeansofproduction"], C)), "AsString")), { get: async () => L0["p_untmeansofproduction"], set: async (v) => { L0["p_untmeansofproduction"] = v; }, local: true });
    await $.wset([$t5], "p_numberofproduction", (await $.mv((await $.wcall([$t5], "FieldByName", ["numberofproduction"], C)), "AsInteger")), { get: async () => L0["p_numberofproduction"], set: async (v) => { L0["p_numberofproduction"] = v; }, local: true });
    await $.wset([$t5], "p_untproduction", (await $.mv((await $.wcall([$t5], "FieldByName", ["untproduction"], C)), "AsString")), { get: async () => L0["p_untproduction"], set: async (v) => { L0["p_untproduction"] = v; }, local: true });
    await $.wset([$t5], "p_production", (await $.mv((await $.wcall([$t5], "FieldByName", ["production"], C)), "AsInteger")), { get: async () => L0["p_production"], set: async (v) => { L0["p_production"] = v; }, local: true });
    await $.wset([$t5], "p_productivity", (await $.mv((await $.wcall([$t5], "FieldByName", ["productivity"], C)), "AsInteger")), { get: async () => L0["p_productivity"], set: async (v) => { L0["p_productivity"] = v; }, local: true });
    await $.wset([$t5], "p_productioncost", (await $.mv((await $.wcall([$t5], "FieldByName", ["productioncost"], C)), "AsFloat")), { get: async () => L0["p_productioncost"], set: async (v) => { L0["p_productioncost"] = v; }, local: true });
    await $.wset([$t5], "p_sumprofit", (await $.mv((await $.wcall([$t5], "FieldByName", ["sumprofit"], C)), "AsFloat")), { get: async () => L0["p_sumprofit"], set: async (v) => { L0["p_sumprofit"] = v; }, local: true });
    await $.wset([$t5], "p_boughtmaterial", (await $.mv((await $.wcall([$t5], "FieldByName", ["boughtmaterial"], C)), "AsFloat")), { get: async () => L0["p_boughtmaterial"], set: async (v) => { L0["p_boughtmaterial"] = v; }, local: true });
    await $.wset([$t5], "p_operationexpense", (await $.mv((await $.wcall([$t5], "FieldByName", ["operationexpense"], C)), "AsFloat")), { get: async () => L0["p_operationexpense"], set: async (v) => { L0["p_operationexpense"] = v; }, local: true });
    await $.wset([$t5], "p_taxexpense", (await $.mv((await $.wcall([$t5], "FieldByName", ["taxexpense"], C)), "AsFloat")), { get: async () => L0["p_taxexpense"], set: async (v) => { L0["p_taxexpense"] = v; }, local: true });
    await $.wset([$t5], "p_otherexpence", (await $.mv((await $.wcall([$t5], "FieldByName", ["otherexpence"], C)), "AsFloat")), { get: async () => L0["p_otherexpence"], set: async (v) => { L0["p_otherexpence"] = v; }, local: true });
    await $.wset([$t5], "p_sumexpense", (await $.mv((await $.wcall([$t5], "FieldByName", ["sumexpense"], C)), "AsFloat")), { get: async () => L0["p_sumexpense"], set: async (v) => { L0["p_sumexpense"] = v; }, local: true });
    await $.wset([$t5], "p_villageid", (await $.mv((await $.wcall([$t5], "FieldByName", ["villageid"], C)), "AsInteger")), { get: async () => L0["p_villageid"], set: async (v) => { L0["p_villageid"] = v; }, local: true });
    await $.wset([$t5], "p_akpurpose", (await $.mv((await $.wcall([$t5], "FieldByName", ["akpurpose"], C)), "AsInteger")), { get: async () => L0["p_akpurpose"], set: async (v) => { L0["p_akpurpose"] = v; }, local: true });
  }
  { const $t6 = L0["action"];
    if ($.eq($t6, "I") || $.eq($t6, "U")) {
      L0["result"] = (await $.mcall((await $.v(C, "CM_AKF")), "CallIntegerFunction", ["BusinessPlan_AK_AddEdit", [L0["p_creditid"], L0["p_projectcost"], L0["p_givencredit"], L0["p_concessionperiod"], L0["p_purpose"], L0["p_source"], L0["p_type"], L0["p_untmeansofproduction"], L0["p_numberofproduction"], L0["p_untproduction"], L0["p_production"], L0["p_productivity"], L0["p_productioncost"], L0["p_sumprofit"], L0["p_boughtmaterial"], L0["p_operationexpense"], L0["p_taxexpense"], L0["p_otherexpence"], L0["p_sumexpense"], L0["p_villageid"], L0["p_akpurpose"]]]));
      await L0["applied"].set(true);
    }
    else {
      await L0["applied"].set(false);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  return U;
}
