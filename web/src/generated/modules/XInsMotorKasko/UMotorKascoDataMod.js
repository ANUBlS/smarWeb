// Generated from UMotorKascoDataMod.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UMotorKascoDataMod", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDataModkasco", "TDataModule", {"odsinsmotorkasco": {"name": "ODSINSMotorKasco", "type": "TOracleDataSet"}, "dsmotorkasco": {"name": "DSMOTORKASCO", "type": "TDataSource"}, "odsinsmotorkascoid": {"name": "ODSINSMotorKascoID", "type": "TFloatField"}, "odsinsmotorkascokli_id": {"name": "ODSINSMotorKascoKLI_ID", "type": "TFloatField"}, "odsinsmotorkasconame": {"name": "ODSINSMotorKascoNAME", "type": "TStringField"}, "odsinsmotorkascosurname": {"name": "ODSINSMotorKascoSURNAME", "type": "TStringField"}, "odsinsmotorkascofathername": {"name": "ODSINSMotorKascoFATHERNAME", "type": "TStringField"}, "odsinsmotorkascohomephone": {"name": "ODSINSMotorKascoHOMEPHONE", "type": "TStringField"}, "odsinsmotorkascoworkphone": {"name": "ODSINSMotorKascoWORKPHONE", "type": "TStringField"}, "odsinsmotorkascomobilphone": {"name": "ODSINSMotorKascoMOBILPHONE", "type": "TStringField"}, "odsinsmotorkascoaddress": {"name": "ODSINSMotorKascoADDRESS", "type": "TStringField"}, "odsinsmotorkascoprofitname": {"name": "ODSINSMotorKascoPROFITNAME", "type": "TStringField"}, "odsinsmotorkascoprofitaddress": {"name": "ODSINSMotorKascoPROFITADDRESS", "type": "TStringField"}, "odsinsmotorkascoprofitphone": {"name": "ODSINSMotorKascoPROFITPHONE", "type": "TStringField"}, "odsinsmotorkascoinsuredtype": {"name": "ODSINSMotorKascoINSUREDTYPE", "type": "TStringField"}, "odsinsmotorkascoinsuredcolor": {"name": "ODSINSMotorKascoINSUREDCOLOR", "type": "TStringField"}, "odsinsmotorkascoinsuredoutputyear": {"name": "ODSINSMotorKascoINSUREDOUTPUTYEAR", "type": "TIntegerField"}, "odsinsmotorkascoinsuredmodel": {"name": "ODSINSMotorKascoINSUREDMODEL", "type": "TStringField"}, "odsinsmotorkascoinsuredstatenum": {"name": "ODSINSMotorKascoINSUREDSTATENUM", "type": "TStringField"}, "odsinsmotorkascounderframenum": {"name": "ODSINSMotorKascoUNDERFRAMENUM", "type": "TStringField"}, "odsinsmotorkascoinsuredbannum": {"name": "ODSINSMotorKascoINSUREDBANNUM", "type": "TStringField"}, "odsinsmotorkascoinsuredenginenum": {"name": "ODSINSMotorKascoINSUREDENGINENUM", "type": "TStringField"}, "odsinsmotorkascodriveaccesspiople1": {"name": "ODSINSMotorKascoDRIVEACCESSPIOPLE1", "type": "TStringField"}, "odsinsmotorkascodriveaccesspiople2": {"name": "ODSINSMotorKascoDRIVEACCESSPIOPLE2", "type": "TStringField"}, "odsinsmotorkascodriverbirthday1": {"name": "ODSINSMotorKascoDRIVERBIRTHDAY1", "type": "TDateTimeField"}, "odsinsmotorkascodriverbirthday2": {"name": "ODSINSMotorKascoDRIVERBIRTHDAY2", "type": "TDateTimeField"}, "odsinsmotorkascodriverexperience1": {"name": "ODSINSMotorKascoDRIVEREXPERIENCE1", "type": "TIntegerField"}, "odsinsmotorkascodriverexperience2": {"name": "ODSINSMotorKascoDRIVEREXPERIENCE2", "type": "TIntegerField"}, "odsinsmotorkascodriveintended": {"name": "ODSINSMotorKascoDRIVEINTENDED", "type": "TStringField"}, "odsinsmotorkascodrivecost": {"name": "ODSINSMotorKascoDRIVECOST", "type": "TFloatField"}, "odsinsmotorkascoinsuredsum": {"name": "ODSINSMotorKascoINSUREDSUM", "type": "TFloatField"}, "odsinsmotorkascobegindate": {"name": "ODSINSMotorKascoBEGINDATE", "type": "TDateTimeField"}, "odsinsmotorkascoenddate": {"name": "ODSINSMotorKascoENDDATE", "type": "TDateTimeField"}, "dscusts": {"name": "DSCusts", "type": "TDataSource"}, "odscusts": {"name": "ODSCusts", "type": "TOracleDataSet"}, "odscustsid": {"name": "ODSCustsID", "type": "TIntegerField"}, "odscustsname": {"name": "ODSCustsNAME", "type": "TStringField"}, "odsmksuggestion": {"name": "ODSMKSuggestion", "type": "TOracleDataSet"}, "dsmksuggestion": {"name": "DSMKSuggestion", "type": "TDataSource"}, "odsbankinfo": {"name": "ODSBankinfo", "type": "TOracleDataSet"}, "dsbankinfo": {"name": "DSBankinfo", "type": "TDataSource"}, "odsbankinfobank": {"name": "ODSBankinfoBANK", "type": "TStringField"}, "odsbankinfoaz_name": {"name": "ODSBankinfoAZ_NAME", "type": "TStringField"}, "odsbankinfoseher": {"name": "ODSBankinfoSEHER", "type": "TStringField"}, "odsbankinfoadress": {"name": "ODSBankinfoADRESS", "type": "TStringField"}, "odsbankinfotel": {"name": "ODSBankinfoTEL", "type": "TStringField"}, "odsbankinfofax": {"name": "ODSBankinfoFAX", "type": "TStringField"}, "odsbankinfoemail": {"name": "ODSBankinfoEMAIL", "type": "TStringField"}, "odscustsaddress": {"name": "ODSCustsADDRESS", "type": "TStringField"}, "odspolicy": {"name": "ODSPolicy", "type": "TOracleDataSet"}, "odspolicyid": {"name": "ODSPolicyID", "type": "TFloatField"}, "odspolicymks_id": {"name": "ODSPolicyMKS_ID", "type": "TFloatField"}, "odspolicyval_id": {"name": "ODSPolicyVAL_ID", "type": "TFloatField"}, "odspolicytheft": {"name": "ODSPolicyTHEFT", "type": "TFloatField"}, "odspolicyfire": {"name": "ODSPolicyFIRE", "type": "TFloatField"}, "odspolicyexplosion": {"name": "ODSPolicyEXPLOSION", "type": "TFloatField"}, "odspolicytrafficaccident": {"name": "ODSPolicyTRAFFICACCIDENT", "type": "TFloatField"}, "odspolicyimpactanyobject": {"name": "ODSPolicyIMPACTANYOBJECT", "type": "TFloatField"}, "odspolicynatcatastrophe": {"name": "ODSPolicyNATCATASTROPHE", "type": "TFloatField"}, "dspolicy": {"name": "DSPolicy", "type": "TDataSource"}, "odsavalute": {"name": "ODSAvalute", "type": "TOracleDataSet"}, "dsavalute": {"name": "DSAvalute", "type": "TDataSource"}, "odspolicypolicynum": {"name": "ODSPolicyPOLICYNUM", "type": "TStringField"}, "odsinsmotorkascoinsuredfranshiz": {"name": "ODSINSMotorKascoINSUREDFRANSHIZ", "type": "TFloatField"}, "odsmksuggestionid": {"name": "ODSMKSuggestionID", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("DataModkasco", null, "TDataModkasco");
  });
  U.method("TDataModkasco", "ODSINSMotorKascoBeforeDelete", async function ODSINSMotorKascoBeforeDelete(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Secilmish anket pozulacaq", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrCancel"))))) {
    $.abort();
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDataModkasco", "CheckFieldsForNull", async function CheckFieldsForNull(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: false, "i": 0};
  await $.fixArgs(L0, ["dataset"]);
  L0["result"] = false;
  {
    const $t1 = L0["dataset"];
    { const $t2 = $.sub((await $.wv([$t1], "FieldCount", C, false)), 1);
      await $.wset([$t1], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t3 = true;
      for (;;) {
        if (!$t3) { await $.wset([$t1], "i", $.succ((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t3 = false;
        if (!($.ord((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t2))) break;
        if ($.truthy((await $.mv((await $.idx((await $.wv([$t1], "Fields", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "IsNull")))) {
          await $.wset([$t1], "Result", (await $.wv([$t1], "true", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "function", "ptypes": ["TDataSet"]});
  U.method("TDataModkasco", "CheckFieldsForRequired", async function CheckFieldsForRequired(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: false, "i": 0};
  await $.fixArgs(L0, ["dataset"]);
  L0["result"] = true;
  {
    const $t4 = L0["dataset"];
    { const $t5 = $.sub((await $.wv([$t4], "FieldCount", C, false)), 1);
      await $.wset([$t4], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t6 = true;
      for (;;) {
        if (!$t6) { await $.wset([$t4], "i", $.succ((await $.wv([$t4], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t6 = false;
        if (!($.ord((await $.wv([$t4], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t5))) break;
        if ($.truthy((await $.and_(((await $.mv((await $.idx((await $.wv([$t4], "Fields", C, false)), [(await $.wv([$t4], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Required"))), async () => ((await $.mv((await $.idx((await $.wv([$t4], "Fields", C, false)), [(await $.wv([$t4], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "IsNull"))))))) {
          await $.wset([$t4], "Result", (await $.wv([$t4], "false", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "function", "ptypes": ["TDataSet"]});
  U.method("TDataModkasco", "ODSINSMotorKascoBeforePost", async function ODSINSMotorKascoBeforePost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDataModkasco", "RefreshAll", async function RefreshAll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "ODSINSMotorKasco")), "refresh", []);
  await $.mcall((await $.v(C, "ODSCusts")), "refresh", []);
  await $.mcall((await $.v(C, "ODSBankinfo")), "Refresh", []);
  await $.mcall((await $.v(C, "ODSAvalute")), "refresh", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TDataModkasco", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ODSAvalute")), "Open", []);
  await $.mcall((await $.v(C, "ODSBankinfo")), "Open", []);
  await $.mcall((await $.v(C, "ODSINSMotorKasco")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDataModkasco", "ODSINSMotorKascoAfterScroll", async function ODSINSMotorKascoAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t7 = (await $.v(C, "ODSCusts"));
    await $.stmt($.wcall([$t7], "Close", [], C));
    await $.stmt((await $.wcall([$t7], "SetVariable", ["KLI_ID", (await $.mv((await $.wv([$t7], "ODSINSMotorKascoKLI_ID", C, false)), "Value"))], C)));
    await $.stmt($.wcall([$t7], "Open", [], C));
  }
  {
    const $t8 = (await $.v(C, "ODSMKSuggestion"));
    await $.stmt($.wcall([$t8], "Close", [], C));
    await $.stmt((await $.wcall([$t8], "SetVariable", ["MK_ID", (await $.mv((await $.wv([$t8], "ODSINSMotorKascoID", C, false)), "Value"))], C)));
    await $.stmt($.wcall([$t8], "Open", [], C));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
