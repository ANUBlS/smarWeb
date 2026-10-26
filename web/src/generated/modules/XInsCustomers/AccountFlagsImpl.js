// Generated from AccountFlagsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AccountFlagsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CheckLst", "InsDataModule", "InsCustomersFormImpl"]);
  const C = [U];
  U.defClass("TFormAccFlags", "TForm", {"clbaccflags": {"name": "CLBAccFlags", "type": "TCheckListBox"}, "buttonapply": {"name": "ButtonApply", "type": "TButton"}, "flagmap": {"name": "FlagMap", "type": "String"}}, {});
  U.init(async () => {
    U.var_("FormAccFlags", null, "TFormAccFlags");
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
  U.method("TFormAccFlags", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "InsDataMod"));
    await $.mcall((await $.wv([$t1], "AccFlags", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t1], "AccFlags", C, false)), "First", []);
    await $.mcall((await $.wv([$t1], "AccFlags", C, false)), "Next", []);
    while ($.truthy($.not((await $.mv((await $.wv([$t1], "AccFlags", C, false)), "Eof"))))) {
      await $.wset([$t1], "Index", (await $.mcall((await $.mv((await $.wv([$t1], "CLBAccFlags", C, false)), "Items")), "Add", [(await $.mv((await $.mcall((await $.wv([$t1], "AccFlags", C, false)), "FieldByName", ["Name"])), "AsString"))])), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
      if ($.truthy($.eq((await $.mv((await $.wv([$t1], "InsCustomersForm", C, false)), "OperationMode")), (await $.wv([$t1], "omEdit", C, false))))) {
        { const $t2 = await $.iset((await $.mv((await $.wv([$t1], "CLBAccFlags", C, false)), "Checked")), [(await $.wv([$t1], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))], (await $.wcall([$t1], "FlagExsist", [(await $.mv((await $.mcall((await $.wv([$t1], "ODSAccount", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.idx((await $.mv((await $.mcall((await $.wv([$t1], "AccFlags", C, false)), "FieldByName", ["Symbol"])), "AsString")), [1]))], C))); if ($t2 !== undefined) { await $.mset((await $.wv([$t1], "CLBAccFlags", C, false)), "Checked", $t2); } }
      }
      await $.mcall((await $.wv([$t1], "AccFlags", C, false)), "Next", []);
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
  { const $t3 = $.sub(L0["indexcount"], 1);
    L0["index"] = 0;
    let $t4 = true;
    for (;;) {
      if (!$t4) { L0["index"] = $.succ(L0["index"], 1); }
      $t4 = false;
      if (!($.ord(L0["index"]) <= $.ord($t3))) break;
      if ($.truthy((await $.idx((await $.mv((await $.v(C, "CLBAccFlags")), "Checked")), [L0["index"]])))) {
        L0["symbol"] = (await $.idx((await $.mv((await $.v(C, "CLBAccFlags")), "Items")), [L0["index"]]));
        await $.set(C, "FlagMap", $.add($.add((await $.v(C, "FlagMap")), ","), (await $.idx(L0["symbol"], [1]))));
      }
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "Delete", [$.ref(async () => (await $.v(C, "FlagMap")), async ($t5) => { await $.set(C, "FlagMap", $t5); }), 1, 1])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
