// Generated from CO_AccFlags.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CO_AccFlags", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CheckLst", "ExtCtrls", "CO_datamod_impl", "SBTranslateProc", "sboapiDataModuleImpl", "FormAcc_Unit"]);
  const C = [U];
  U.const("omInsert", 0);
  U.const("omEdit", 1);
  U.const("omDelete", 2);
  U.defClass("TAccFlags", "TForm", {"clbaccflags": {"name": "CLBAccFlags", "type": "TCheckListBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "buttonapply": {"name": "ButtonApply", "type": "TButton"}, "flagmap": {"name": "FlagMap", "type": "String"}}, {});
  U.init(async () => {
    U.const("cs_add_account", "add_account");
    U.const("cs_upd_account", "upd_account");
    U.const("cs_close_account", "close_account");
    U.const("cs_generateID", "GenerateID");
    U.const("cs_flagexsist", "FlagExsist");
    U.var_("AccFlags", null, "TAccFlags");
  });
  U.method("TAccFlags", "FlagExsist", async function FlagExsist(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"accid": $.copyArg(p0), "ch": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["accid", "ch"]);
  {
    const $t1 = (await $.mv((await $.v(C, "CO_DataMod")), "SBUTIL"));
    await $.wset([$t1], "Result", (await $.wcall([$t1], "CallBooleanFunction", [(await $.wv([$t1], "cs_flagexsist", C, false)), ["AccID", (await $.wv([$t1], "AccID", { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true }, false)), "FlagChar", (await $.wv([$t1], "Ch", { get: async () => L0["ch"], set: async (v) => { L0["ch"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["AccID", "Ch"], "kind": "function", "ptypes": ["Integer", "Char"]});
  U.method("TAccFlags", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "CO_DataMod"));
    await $.mcall((await $.wv([$t2], "AccFlags", C, false)), "Close", []);
    await $.mcall((await $.wv([$t2], "AccFlags", C, false)), "Open", []);
    await $.mcall((await $.wv([$t2], "AccFlags", C, false)), "First", []);
    await $.mcall((await $.wv([$t2], "AccFlags", C, false)), "Next", []);
    while ($.truthy($.not((await $.mv((await $.wv([$t2], "AccFlags", C, false)), "Eof"))))) {
      await $.wset([$t2], "Index", (await $.mcall((await $.mv((await $.wv([$t2], "CLBAccFlags", C, false)), "Items")), "Add", [(await $.mv((await $.mcall((await $.wv([$t2], "AccFlags", C, false)), "FieldByName", ["Name"])), "AsString"))])), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
      { const $t3 = await $.iset((await $.mv((await $.wv([$t2], "CLBAccFlags", C, false)), "Checked")), [(await $.wv([$t2], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))], (await $.wcall([$t2], "FlagExsist", [(await $.mv((await $.mcall((await $.wv([$t2], "FlagAccount", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.idx((await $.mv((await $.mcall((await $.wv([$t2], "AccFlags", C, false)), "FieldByName", ["Symbol"])), "AsString")), [1]))], C))); if ($t3 !== undefined) { await $.mset((await $.wv([$t2], "CLBAccFlags", C, false)), "Checked", $t3); } }
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
  await $.mset((await $.mv((await $.v(C, "FormAccount")), "DBText88")), "Caption", (await $.v(C, "FlagMap")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccFlags", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  return U;
}
