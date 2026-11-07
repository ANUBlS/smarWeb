// Generated from P_AccFlags.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("P_AccFlags", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CheckLst", "ExtCtrls", "P_Datamod_Unit", "sboapiDataModuleImpl", "SBTranslateProc", "P_CO_Account_Unit"]);
  const C = [U];
  U.defClass("TAccFlags", "TForm", {"clbaccflags": {"name": "CLBAccFlags", "type": "TCheckListBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "buttonapply": {"name": "ButtonApply", "type": "TButton"}}, {});
  U.init(async () => {
    U.const("cs_add_account", "add_account");
    U.const("cs_upd_account", "upd_account");
    U.const("cs_close_account", "close_account");
    U.const("cs_generateID", "GenerateID");
    U.const("cs_flagexsist", "FlagExsist");
    U.var_("AccFlags", null, "TAccFlags");
    U.var_("FlagMap", '', "String");
  });
  U.method("TAccFlags", "FlagExsist", async function FlagExsist(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"accid": $.copyArg(p0), "ch": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["accid", "ch"]);
  {
    const $t1 = (await $.mv((await $.v(C, "P_DataModule")), "SBUTIL"));
    await $.wset([$t1], "Result", (await $.wcall([$t1], "CallBooleanFunction", [(await $.wv([$t1], "cs_flagexsist", C, false)), ["AccID", (await $.wv([$t1], "AccID", { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true }, false)), "FlagChar", (await $.wv([$t1], "Ch", { get: async () => L0["ch"], set: async (v) => { L0["ch"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["AccID", "Ch"], "kind": "function", "ptypes": ["Integer", "Char"]});
  U.method("TAccFlags", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.wobj(C, "P_DataModule"));
    await $.mcall((await $.wv([$t2], "AccFlags", C, false)), "Close", []);
    await $.mcall((await $.wv([$t2], "AccFlags", C, false)), "Open", []);
    await $.mcall((await $.wv([$t2], "AccFlags", C, false)), "First", []);
    await $.mcall((await $.wv([$t2], "AccFlags", C, false)), "Next", []);
    while ($.truthy($.not((await $.mv((await $.wv([$t2], "AccFlags", C, false)), "Eof"))))) {
      await $.wset([$t2], "Index", (await $.mcall((await $.mv((await $.wv([$t2], "CLBAccFlags", C, false)), "Items")), "Add", [(await $.mv((await $.mcall((await $.wv([$t2], "AccFlags", C, false)), "FieldByName", ["Name"])), "AsString"))])), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
      { const $t3 = await $.iset((await $.mv((await $.wv([$t2], "CLBAccFlags", C, false)), "Checked")), [(await $.wv([$t2], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))], (await $.wcall([$t2], "FlagExsist", [(await $.mv((await $.mcall((await $.wv([$t2], "AccFlag", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.idx((await $.mv((await $.mcall((await $.wv([$t2], "AccFlags", C, false)), "FieldByName", ["Symbol"])), "AsString")), [1]))], C))); if ($t3 !== undefined) { await $.mset((await $.wv([$t2], "CLBAccFlags", C, false)), "Checked", $t3); } }
      await $.mcall((await $.wv([$t2], "AccFlags", C, false)), "Next", []);
      await $.tick();
    }
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccFlags", "ButtonApplyClick", async function ButtonApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0, "indexcount": 0, "symbol": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FlagMap", "");
  L0["indexcount"] = (await $.mv((await $.mv((await $.v(C, "CLBAccFlags")), "Items")), "Count"));
  { const $t4 = $.sub(L0["indexcount"], 1);
    L0["index"] = 0;
    let $t5 = true;
    for (;;) {
      if (!$t5) { L0["index"] = $.succ(L0["index"], 1); }
      $t5 = false;
      if (!($.ord(L0["index"]) <= $.ord($t4))) break;
      if ($.truthy((await $.idx((await $.mv((await $.v(C, "CLBAccFlags")), "Checked")), [L0["index"]])))) {
        L0["symbol"] = (await $.idx((await $.mv((await $.v(C, "CLBAccFlags")), "Items")), [L0["index"]]));
        await $.set(C, "FlagMap", $.add($.add((await $.v(C, "FlagMap")), ","), (await $.idx(L0["symbol"], [1]))));
      }
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "Delete", [$.ref(async () => (await $.v(C, "FlagMap")), async ($t6) => { await $.set(C, "FlagMap", $t6); }), 1, 1])));
  await $.mset((await $.mv((await $.v(C, "P_CO_Account_Form")), "DBText8")), "Caption", (await $.v(C, "FlagMap")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccFlags", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "AccFlags")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
