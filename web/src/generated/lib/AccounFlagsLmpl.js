// Generated from AccounFlagsLmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AccounFlagsLmpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CheckLst", "Buttons", "XFSCtrls", "ExtCtrls", "OpenAccountImpl", "SBTranslateProc", "sboapiDataModuleImpl", "OpenAccdataImpl", "Account_edit_Unit"]);
  const C = [U];
  U.defClass("TFormAccounFlags", "TForm", {"clistboxaccflags": {"name": "CListBoxAccFlags", "type": "TCheckListBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "flagmap": {"name": "FlagMap", "type": "String"}}, {});
  U.init(async () => {
    U.const("cs_flagexsist", "FlagExsist");
    U.var_("a1", $.sarr(), "mas");
    U.var_("FormAccounFlags", null, "TFormAccounFlags");
  });
  U.method("TFormAccounFlags", "FlagExsist", async function FlagExsist(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"accid": $.copyArg(p0), "ch": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["accid", "ch"]);
  {
    const $t1 = (await $.mv((await $.v(C, "DataAcc")), "SBUTIL"));
    await $.wset([$t1], "Result", (await $.wcall([$t1], "CallBooleanFunction", [(await $.wv([$t1], "cs_flagexsist", C, false)), ["AccID", (await $.wv([$t1], "AccID", { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true }, false)), "FlagChar", (await $.wv([$t1], "Ch", { get: async () => L0["ch"], set: async (v) => { L0["ch"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["AccID", "Ch"], "kind": "function", "ptypes": ["Integer", "Char"]});
  U.method("TFormAccounFlags", "CListBoxAccFlagsClickCheck", async function CListBoxAccFlagsClickCheck(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "f": false};
  await $.fixArgs(L0, ["sender"]);
  L0["f"] = (await $.mcall((await $.mv((await $.v(C, "DataAcc")), "SB_ACA")), "CallBooleanFunction", ["checkadvancedobjectaccess", ["ACC_SMVOL"]]));
  if ($.truthy($.not(L0["f"]))) {
    { const $t2 = 99;
      L0["i"] = 0;
      let $t3 = true;
      for (;;) {
        if (!$t3) { L0["i"] = $.succ(L0["i"], 1); }
        $t3 = false;
        if (!($.ord(L0["i"]) <= $.ord($t2))) break;
        if ($.truthy($.eq((await $.mv((await $.v(C, "CListBoxAccFlags")), "ItemIndex")), (await $.idx((await $.v(C, "a1")), [L0["i"]]))))) {
          { const $t4 = await $.iset((await $.mv((await $.v(C, "CListBoxAccFlags")), "Checked")), [(await $.idx((await $.v(C, "a1")), [L0["i"]]))], true); if ($t4 !== undefined) { await $.mset((await $.v(C, "CListBoxAccFlags")), "Checked", $t4); } }
          await $.stmt((await $.call(C, "showmessage", ["Sizin secilmisi goturme huququnuz yoxdur  !"])));
          return L0.result;
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccounFlags", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "DataAcc"));
    await $.mcall((await $.wv([$t5], "AccFlags", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t5], "AccFlags", C, false)), "First", []);
    while ($.truthy($.not((await $.mv((await $.wv([$t5], "AccFlags", C, false)), "Eof"))))) {
      await $.wset([$t5], "Index", (await $.mcall((await $.mv((await $.wv([$t5], "CListBoxAccFlags", C, false)), "Items")), "Add", [(await $.mv((await $.mcall((await $.wv([$t5], "AccFlags", C, false)), "FieldByName", ["Name"])), "AsString"))])), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
      if ($.truthy($.eq((await $.wv([$t5], "ominsert_edit", C, false)), (await $.wv([$t5], "false", C, false))))) {
        { const $t6 = await $.iset((await $.mv((await $.wv([$t5], "CListBoxAccFlags", C, false)), "Checked")), [(await $.wv([$t5], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))], (await $.wcall([$t5], "FlagExsist", [(await $.wcall([$t5], "strtoint", [(await $.wv([$t5], "accont_id", C, false))], C)), (await $.idx((await $.mv((await $.mcall((await $.wv([$t5], "AccFlags", C, false)), "FieldByName", ["Symbol"])), "AsString")), [1]))], C))); if ($t6 !== undefined) { await $.mset((await $.wv([$t5], "CListBoxAccFlags", C, false)), "Checked", $t6); } }
      }
      await $.mcall((await $.wv([$t5], "AccFlags", C, false)), "Next", []);
      await $.stmt((await $.mcall((await $.wv([$t5], "SBTranslateProc", C, false)), "TranslateAllCompForms", [Self, (await $.mv((await $.wv([$t5], "sboapiDataModule", C, false)), "OrPack_SL"))])));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccounFlags", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 27))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormAccounFlags", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t7 = $.sub((await $.mv((await $.mv((await $.v(C, "CListBoxAccFlags")), "Items")), "Count")), 1);
    L0["i"] = 0;
    let $t8 = true;
    for (;;) {
      if (!$t8) { L0["i"] = $.succ(L0["i"], 1); }
      $t8 = false;
      if (!($.ord(L0["i"]) <= $.ord($t7))) break;
      if ($.truthy((await $.idx((await $.mv((await $.v(C, "CListBoxAccFlags")), "Checked")), [L0["i"]])))) {
        { const $t9 = await $.iset((await $.v(C, "a1")), [L0["i"]], L0["i"]); if ($t9 !== undefined) { await $.set(C, "a1", $t9); } }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccounFlags", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0, "indexcount": 0, "symbol": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FlagMap", "");
  L0["indexcount"] = (await $.mv((await $.mv((await $.v(C, "CListBoxAccFlags")), "Items")), "Count"));
  { const $t10 = $.sub(L0["indexcount"], 1);
    L0["index"] = 0;
    let $t11 = true;
    for (;;) {
      if (!$t11) { L0["index"] = $.succ(L0["index"], 1); }
      $t11 = false;
      if (!($.ord(L0["index"]) <= $.ord($t10))) break;
      if ($.truthy((await $.idx((await $.mv((await $.v(C, "CListBoxAccFlags")), "Checked")), [L0["index"]])))) {
        L0["symbol"] = (await $.idx((await $.mv((await $.v(C, "CListBoxAccFlags")), "Items")), [L0["index"]]));
        await $.set(C, "FlagMap", $.add($.add((await $.v(C, "FlagMap")), ","), (await $.idx(L0["symbol"], [1]))));
      }
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "Delete", [$.ref(async () => (await $.v(C, "FlagMap")), async ($t12) => { await $.set(C, "FlagMap", $t12); }), 1, 1])));
  if ($.truthy($.eq((await $.v(C, "accont_id")), ""))) {
    await $.mset((await $.mv((await $.v(C, "OpenAccount")), "Label_Symbols")), "Caption", (await $.v(C, "FlagMap")));
  } else {
    await $.mset((await $.mv((await $.v(C, "Account_edit")), "Label_Symbols")), "Caption", (await $.v(C, "FlagMap")));
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
