// Generated from CCLoaderImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CCLoaderImpl", ["Windows", "Messages", "SysUtils", "Classes", "Dialogs", "DB", "Controls", "CCDataModuleImpl", "CommonDecls", "CCAccountImpl"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined, "creditid": 0, "i": 0, "closeaccb": false};
  await $.fixArgs(L0, ["s"]);
  L0["rsusersureclosecredit"] = "Seçilmiş müqavilə(lər) bağlanacaq ! Əminsinizmi?";
  L0["rsusersureclosecreditaccount"] = "Seçilmiş müqavilə(lər) üzrə hesablar bağlanacaq ! Əminsinizmi?";
  L0["closeaccb"] = false;
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["rsusersureclosecredit"], (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["rsusersureclosecreditaccount"], (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
      L0["closeaccb"] = true;
    }
    {
      const $t1 = (await $.wobj(C, "CommonDBGrid"));
      if ($.truthy($.gt((await $.mv((await $.wv([$t1], "SelectedRows", C, false)), "Count")), 0))) {
        { const $t2 = $.sub((await $.mv((await $.wv([$t1], "SelectedRows", C, false)), "Count")), 1);
          await $.wset([$t1], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t3 = true;
          for (;;) {
            if (!$t3) { await $.wset([$t1], "I", $.succ((await $.wv([$t1], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t3 = false;
            if (!($.ord((await $.wv([$t1], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t2))) break;
            await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "DataSource", C, false)), "DataSet")), "GotoBookmark", [(await $.wcall([$t1], "Pointer", [(await $.idx((await $.wv([$t1], "SelectedRows", C, false)), [(await $.wv([$t1], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))])));
            await $.wset([$t1], "CreditID", (await $.wv([$t1], "Get_SelectedCrdID", C, false)), { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true });
            await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "CCDataMod", C, false)), "CM_CREDIT")), "CallProcedure", ["Contract_Close", ["p_CreditID", (await $.wv([$t1], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))]])));
            if ($.truthy((await $.wv([$t1], "CloseAccB", { get: async () => L0["closeaccb"], set: async (v) => { L0["closeaccb"] = v; }, local: true }, false)))) {
              {
                const $t4 = (await $.mv((await $.wv([$t1], "CCDataMod", C, false)), "Accounts"));
                if ($.truthy((await $.wv([$t1, $t4], "Active", C, false)))) {
                  await $.stmt($.wcall([$t1, $t4], "CloseAll", [], C));
                }
                await $.stmt((await $.wcall([$t1, $t4], "SetVariable", ["CrdID", (await $.wv([$t1, $t4], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
                await $.stmt($.wcall([$t1, $t4], "Open", [], C));
              }
              {
                const $t5 = (await $.wv([$t1], "FormContractAccounts", C, false));
                await $.stmt($.wcall([$t1, $t5], "ShowModal", [], C));
              }
            }
            await $.tick();
          }
        }
      } else {
        await $.wset([$t1], "CreditID", (await $.wv([$t1], "Get_SelectedCrdID", C, false)), { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true });
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "CCDataMod", C, false)), "CM_CREDIT")), "CallProcedure", ["Contract_Close", ["p_CreditID", (await $.wv([$t1], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))]])));
        if ($.truthy((await $.wv([$t1], "CloseAccB", { get: async () => L0["closeaccb"], set: async (v) => { L0["closeaccb"] = v; }, local: true }, false)))) {
          {
            const $t6 = (await $.mv((await $.wv([$t1], "CCDataMod", C, false)), "Accounts"));
            if ($.truthy((await $.wv([$t1, $t6], "Active", C, false)))) {
              await $.stmt($.wcall([$t1, $t6], "CloseAll", [], C));
            }
            await $.stmt((await $.wcall([$t1, $t6], "SetVariable", ["CrdID", (await $.wv([$t1, $t6], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
            await $.stmt($.wcall([$t1, $t6], "Open", [], C));
          }
          {
            const $t7 = (await $.wv([$t1], "FormContractAccounts", C, false));
            await $.stmt($.wcall([$t1, $t7], "ShowModal", [], C));
          }
        }
      }
      await $.stmt((await $.wcall([$t1], "SafeRefresh", [(await $.wv([$t1], "True", C, false)), (await $.wv([$t1], "rmRefreshOnly", C, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "CCDataMod", (await $.mcall((await $.v(C, "TCCDataMod")), "Create", [(await $.v(C, "CommonApplication"))])));
  await $.set(C, "FormContractAccounts", (await $.mcall((await $.v(C, "TFormContractAccounts")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
