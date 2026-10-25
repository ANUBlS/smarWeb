// Generated from AccountFlagsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AccountFlagsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CheckLst", "ExtCtrls", "AccountDataModuleImpl", "AccountImpl"]);
  const C = [U];
  U.defClass("TFormAccFlags", "TForm", {"clbaccflags": {"name": "CLBAccFlags", "type": "TCheckListBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "buttonapply": {"name": "ButtonApply", "type": "TButton"}, "flagmap": {"name": "FlagMap", "type": "String"}}, {});
  U.init(async () => {
    U.var_("FormAccFlags", null, "TFormAccFlags");
    U.var_("a", null, "mas");
  });
  U.method("TFormAccFlags", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormAccFlags", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t1 = $.sub((await $.mv((await $.mv((await $.v(C, "CLBAccFlags")), "Items")), "Count")), 1);
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      if ($.truthy((await $.idx((await $.mv((await $.v(C, "CLBAccFlags")), "Checked")), [L0["i"]])))) {
        { const $t3 = await $.iset((await $.v(C, "a")), [L0["i"]], L0["i"]); if ($t3 !== undefined) { await $.set(C, "a", $t3); } }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccFlags", "CLBAccFlagsClick", async function CLBAccFlagsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccFlags", "CLBAccFlagsClickCheck", async function CLBAccFlagsClickCheck(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "f": false};
  await $.fixArgs(L0, ["sender"]);
  L0["f"] = (await $.mcall((await $.mv((await $.v(C, "AccDataModule")), "SB_ACA11")), "CallBooleanFunction", ["checkadvancedobjectaccess", ["ACC_SMVOL"]]));
  if ($.truthy($.not(L0["f"]))) {
    { const $t4 = 99;
      L0["i"] = 0;
      let $t5 = true;
      for (;;) {
        if (!$t5) { L0["i"] = $.succ(L0["i"], 1); }
        $t5 = false;
        if (!($.ord(L0["i"]) <= $.ord($t4))) break;
        if ($.truthy($.eq((await $.mv((await $.v(C, "CLBAccFlags")), "ItemIndex")), (await $.idx((await $.v(C, "a")), [L0["i"]]))))) {
          { const $t6 = await $.iset((await $.mv((await $.v(C, "CLBAccFlags")), "Checked")), [(await $.idx((await $.v(C, "a")), [L0["i"]]))], true); if ($t6 !== undefined) { await $.mset((await $.v(C, "CLBAccFlags")), "Checked", $t6); } }
          await $.stmt((await $.call(C, "showmessage", ["Sizin secilmisi goturme huququnuz yoxdur  !"])));
          return L0.result;
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccFlags", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "AccDataModule"));
    await $.mcall((await $.wv([$t7], "AccFlags", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t7], "AccFlags", C, false)), "First", []);
    while ($.truthy($.not((await $.mv((await $.wv([$t7], "AccFlags", C, false)), "Eof"))))) {
      await $.wset([$t7], "Index", (await $.mcall((await $.mv((await $.wv([$t7], "CLBAccFlags", C, false)), "Items")), "Add", [(await $.mv((await $.mcall((await $.wv([$t7], "AccFlags", C, false)), "FieldByName", ["Name"])), "AsString"))])), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
      if ($.truthy($.eq((await $.mv((await $.wv([$t7], "AccountForm", C, false)), "OperationMode")), (await $.wv([$t7], "omEdit", C, false))))) {
        { const $t8 = await $.iset((await $.mv((await $.wv([$t7], "CLBAccFlags", C, false)), "Checked")), [(await $.wv([$t7], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))], (await $.wcall([$t7], "FlagExsist", [(await $.mv((await $.mcall((await $.wv([$t7], "Account", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.idx((await $.mv((await $.mcall((await $.wv([$t7], "AccFlags", C, false)), "FieldByName", ["Symbol"])), "AsString")), [1]))], C))); if ($t8 !== undefined) { await $.mset((await $.wv([$t7], "CLBAccFlags", C, false)), "Checked", $t8); } }
      }
      await $.mcall((await $.wv([$t7], "AccFlags", C, false)), "Next", []);
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccFlags", "ButtonApplyClick", async function ButtonApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0, "indexcount": 0, "symbol": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FlagMap", "");
  L0["indexcount"] = (await $.mv((await $.mv((await $.v(C, "CLBAccFlags")), "Items")), "Count"));
  { const $t9 = $.sub(L0["indexcount"], 1);
    L0["index"] = 0;
    let $t10 = true;
    for (;;) {
      if (!$t10) { L0["index"] = $.succ(L0["index"], 1); }
      $t10 = false;
      if (!($.ord(L0["index"]) <= $.ord($t9))) break;
      if ($.truthy((await $.idx((await $.mv((await $.v(C, "CLBAccFlags")), "Checked")), [L0["index"]])))) {
        L0["symbol"] = (await $.idx((await $.mv((await $.v(C, "CLBAccFlags")), "Items")), [L0["index"]]));
        await $.set(C, "FlagMap", $.add($.add((await $.v(C, "FlagMap")), ","), (await $.idx(L0["symbol"], [1]))));
      }
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "Delete", [$.ref(async () => (await $.v(C, "FlagMap")), async ($t11) => { await $.set(C, "FlagMap", $t11); }), 1, 1])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
