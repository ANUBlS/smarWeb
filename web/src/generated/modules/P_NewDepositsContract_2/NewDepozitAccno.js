// Generated from NewDepozitAccno.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepozitAccno", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "HintBox", "StdCtrls", "Buttons", "ExtCtrls", "XFSCtrls", "Grids", "XDBGrids", "sboapiDataModuleImpl", "NewDepositsContractImpl", "NewFormDepositContractImpl", "NewContractCommonDecls"]);
  const C = [U];
  U.defClass("TFormDepositAccount", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "xdbgrid_account": {"name": "XDBGrid_account", "type": "TXDBGrid"}}, {});
  U.init(async () => {
    U.var_("FormDepositAccount", null, "TFormDepositAccount");
  });
  U.method("TFormDepositAccount", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "NewFormDepositContract")), "Close", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormDepositAccount", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormDepositAccount", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "NewDataModDepositsContract"));
    await $.mcall((await $.wv([$t1], "ODSAccno", C, false)), "Close", []);
    await $.mcall((await $.wv([$t1], "ODSAccno", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormDepositAccount", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  await $.mcall((await $.v(C, "FormDepositAccount")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormDepositAccount", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "r": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "FormShow", [L0["sender"]])));
  {
    const $t2 = (await $.v(C, "NewDataModDepositsContract"));
    const $t3 = (await $.wv([$t2], "ODSAccno", C, false));
    await $.stmt($.wcall([$t2, $t3], "First", [], C));
    { const $t4 = $.sub((await $.wv([$t2, $t3], "RecordCount", C, false)), 1);
      await $.wset([$t2, $t3], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t5 = true;
      for (;;) {
        if (!$t5) { await $.wset([$t2, $t3], "I", $.succ((await $.wv([$t2, $t3], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t5 = false;
        if (!($.ord((await $.wv([$t2, $t3], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t4))) break;
        {
          const $t6 = (await $.wv([$t2, $t3], "NewFormDepositContract", C, false));
          await $.wset([$t2, $t3, $t6], "R", (await $.mcall((await $.wv([$t2, $t3, $t6], "dm_contract", C, false)), "CallIntegerFunction", ["getaddaccount", ["p_id", (await $.wv([$t2, $t3, $t6], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), "v_contractid", (await $.mv((await $.wv([$t2, $t3, $t6], "SaveDeposit", C, false)), "contractid")), "v_customerid", (await $.mv((await $.wv([$t2, $t3, $t6], "ODSAccnoCUSTOMERID", C, false)), "asinteger")), "v_accno", (await $.mv((await $.wv([$t2, $t3, $t6], "ODSAccnoACCNO", C, false)), "AsString")), "v_val_id", (await $.mv((await $.wv([$t2, $t3, $t6], "ODSAccnoVAL_ID", C, false)), "AsInteger")), "v_nameaccno", (await $.mv((await $.wv([$t2, $t3, $t6], "ODSAccnoNAMEACCNO", C, false)), "AsString")), "v_opendat", (await $.mv((await $.wv([$t2, $t3, $t6], "ODSAccnoOPENDAT", C, false)), "AsDateTime")), "v_old_balcn", (await $.mv((await $.wv([$t2, $t3, $t6], "ODSAccnoOLD_BALCN", C, false)), "AsInteger")), "v_new_balcn", (await $.mv((await $.wv([$t2, $t3, $t6], "ODSAccnoNEW_BALCN", C, false)), "AsInteger")), "v_filial", (await $.mv((await $.wv([$t2, $t3, $t6], "ODSAccnoFILIAL", C, false)), "AsInteger")), "v_fieldname", (await $.mv((await $.wv([$t2, $t3, $t6], "ODSAccnoDEPOSITFIELDACCNO", C, false)), "AsString"))]])), { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true });
        }
        await $.stmt($.wcall([$t2, $t3], "Next", [], C));
        await $.tick();
      }
    }
    await $.stmt((await $.mcall((await $.wv([$t2, $t3], "NewFormDepositContract", C, false)), "SaveState", [(await $.wv([$t2, $t3], "True", C, false))])));
    await $.mset((await $.wv([$t2, $t3], "NewFormDepositContract", C, false)), "FCommited", (await $.wv([$t2, $t3], "True", C, false)));
    await $.mcall((await $.wv([$t2, $t3], "FormDepositAccount", C, false)), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
