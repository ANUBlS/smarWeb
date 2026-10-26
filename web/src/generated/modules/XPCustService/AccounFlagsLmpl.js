// Generated from AccounFlagsLmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AccounFlagsLmpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CheckLst", "Buttons", "XFSCtrls", "ExtCtrls", "UnitDataModPCustService", "PCustServiceFormImpl1", "AccountPropertiesFLmpl", "AccountPropertiesLmpl", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFormAccounFlags", "TForm", {"clistboxaccflags": {"name": "CListBoxAccFlags", "type": "TCheckListBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "flagmap": {"name": "FlagMap", "type": "String"}}, {});
  U.init(async () => {
    U.const("cs_flagexsist", "FlagExsist");
    U.var_("FormAccounFlags", null, "TFormAccounFlags");
  });
  U.method("TFormAccounFlags", "FlagExsist", async function FlagExsist(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"accid": $.copyArg(p0), "ch": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["accid", "ch"]);
  {
    const $t1 = (await $.mv((await $.v(C, "DataModPCustService")), "SBUTIL"));
    await $.wset([$t1], "Result", (await $.wcall([$t1], "CallBooleanFunction", [(await $.wv([$t1], "cs_flagexsist", C, false)), ["AccID", (await $.wv([$t1], "AccID", { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true }, false)), "FlagChar", (await $.wv([$t1], "Ch", { get: async () => L0["ch"], set: async (v) => { L0["ch"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["AccID", "Ch"], "kind": "function", "ptypes": ["Integer", "Char"]});
  U.method("TFormAccounFlags", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "DataModPCustService"));
    await $.mcall((await $.wv([$t2], "AccFlags", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t2], "AccFlags", C, false)), "First", []);
    await $.mcall((await $.wv([$t2], "AccFlags", C, false)), "Next", []);
    while ($.truthy($.not((await $.mv((await $.wv([$t2], "AccFlags", C, false)), "Eof"))))) {
      await $.wset([$t2], "Index", (await $.mcall((await $.mv((await $.wv([$t2], "CListBoxAccFlags", C, false)), "Items")), "Add", [(await $.mv((await $.mcall((await $.wv([$t2], "AccFlags", C, false)), "FieldByName", ["Name"])), "AsString"))])), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
      await $.mcall((await $.wv([$t2], "AccFlags", C, false)), "Next", []);
      await $.stmt((await $.mcall((await $.wv([$t2], "SBTranslateProc", C, false)), "TranslateAllCompForms", [Self, (await $.mv((await $.wv([$t2], "sboapiDataModule", C, false)), "OrPack_SL"))])));
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
  U.method("TFormAccounFlags", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0, "indexcount": 0, "symbol": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FlagMap", "");
  L0["indexcount"] = (await $.mv((await $.mv((await $.v(C, "CListBoxAccFlags")), "Items")), "Count"));
  { const $t3 = $.sub(L0["indexcount"], 1);
    L0["index"] = 0;
    let $t4 = true;
    for (;;) {
      if (!$t4) { L0["index"] = $.succ(L0["index"], 1); }
      $t4 = false;
      if (!($.ord(L0["index"]) <= $.ord($t3))) break;
      if ($.truthy((await $.idx((await $.mv((await $.v(C, "CListBoxAccFlags")), "Checked")), [L0["index"]])))) {
        L0["symbol"] = (await $.idx((await $.mv((await $.v(C, "CListBoxAccFlags")), "Items")), [L0["index"]]));
        await $.set(C, "FlagMap", $.add($.add((await $.v(C, "FlagMap")), ","), (await $.idx(L0["symbol"], [1]))));
      }
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "Delete", [$.ref(async () => (await $.v(C, "FlagMap")), async ($t5) => { await $.set(C, "FlagMap", $t5); }), 1, 1])));
  await $.mset((await $.mv((await $.v(C, "AccountProperties")), "Label_Symbols")), "Caption", (await $.v(C, "FlagMap")));
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
