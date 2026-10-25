// Generated from StoredProgramsUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("StoredProgramsUnit", ["DataModuleStoredPrograms", "DB"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("ContractTypeByName", async function ContractTypeByName(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"contractname": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["contractname"]);
  {
    const $t1 = (await $.mv((await $.v(C, "DataModuleRefer")), "ReferPackage"));
    await $.wset([$t1], "Result", (await $.wcall([$t1], "CallIntegerFunction", ["GetTypeIDFromName", [(await $.wv([$t1], "ContractName", { get: async () => L0["contractname"], set: async (v) => { L0["contractname"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["ContractName"], "kind": "function", "ptypes": ["String"]});
  U.func("CloseDeposit", async function CloseDeposit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"contractid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["contractid"]);
  {
    const $t2 = (await $.mv((await $.v(C, "DataModuleRefer")), "ReferPackage"));
    await $.stmt((await $.wcall([$t2], "CallProcedure", ["CloseDeposit", [(await $.wv([$t2], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["ContractID"], "kind": "procedure", "ptypes": ["LongInt"]});
  U.func("CloseContract", async function CloseContract(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"contractid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["contractid"]);
  {
    const $t3 = (await $.mv((await $.v(C, "DataModuleRefer")), "ReferPackage"));
    await $.stmt((await $.wcall([$t3], "CallProcedure", ["CloseContract", [(await $.wv([$t3], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["ContractID"], "kind": "procedure", "ptypes": ["LongInt"]});
  U.func("IsCalculationEnabled", async function IsCalculationEnabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"contractid": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["contractid"]);
  {
    const $t4 = (await $.mv((await $.v(C, "DataModuleRefer")), "ReferPackage"));
    await $.wset([$t4], "Result", (await $.wcall([$t4], "CallBooleanFunction", ["IsCalculationEnabled", [(await $.wv([$t4], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["ContractID"], "kind": "function", "ptypes": ["LongInt"]});
  U.func("SetCalculationEnabled", async function SetCalculationEnabled(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"contractid": $.copyArg(p0), "enable": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["contractid", "enable"]);
  {
    const $t5 = (await $.mv((await $.v(C, "DataModuleRefer")), "ReferPackage"));
    if ($.truthy((await $.wv([$t5], "Enable", { get: async () => L0["enable"], set: async (v) => { L0["enable"] = v; }, local: true }, false)))) {
      await $.stmt((await $.wcall([$t5], "CallProcedure", ["EnableCalculation", [(await $.wv([$t5], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))]], C)));
    } else {
      await $.stmt((await $.wcall([$t5], "CallProcedure", ["DisableCalculation", [(await $.wv([$t5], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))]], C)));
    }
  }
  return L0.result;
}, {"params": ["ContractID", "Enable"], "kind": "procedure", "ptypes": ["LongInt", "Boolean"]});
  U.func("GetBankDate", async function GetBankDate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  {
    const $t6 = (await $.mv((await $.v(C, "DataModuleRefer")), "ReferPackage"));
    await $.wset([$t6], "Result", (await $.wcall([$t6], "CallDateFunction", ["GetBankDate", []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("SBCMGetOption", async function SBCMGetOption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"optionname": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["optionname"]);
  {
    const $t7 = (await $.mv((await $.v(C, "DataModuleRefer")), "ReferPackage"));
    await $.wset([$t7], "Result", (await $.wcall([$t7], "CallStringFunction", ["GetReference", [(await $.wv([$t7], "OptionName", { get: async () => L0["optionname"], set: async (v) => { L0["optionname"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["OptionName"], "kind": "function", "ptypes": ["String"]});
  U.func("GetAdditionalDepositType", async function GetAdditionalDepositType(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"contractid": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["contractid"]);
  {
    const $t8 = (await $.mv((await $.v(C, "DataModuleRefer")), "ReferPackage"));
    await $.wset([$t8], "Result", (await $.wcall([$t8], "CallStringFunction", ["GetAdditionalDepositType", [(await $.wv([$t8], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["ContractID"], "kind": "function", "ptypes": ["LongInt"]});
  return U;
}
