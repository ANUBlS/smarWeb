// Generated from InsAccSettings.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InsAccSettings", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBCtrls", "StdCtrls", "Buttons", "ComCtrls", "ExtCtrls", "Mask", "SearchCombo", "DB", "InsDataModule"]);
  const C = [U];
  U.defClass("TfmAccSettings", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "label1": {"name": "Label1", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "searchcombo1": {"name": "SearchCombo1", "type": "TSearchCombo"}, "searchcombo2": {"name": "SearchCombo2", "type": "TSearchCombo"}}, {});
  U.init(async () => {
    U.var_("fmAccSettings", null, "TfmAccSettings");
    U.var_("currSt", 0, "Integer");
  });
  U.method("TfmAccSettings", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "InsDataMod"));
    const $t2 = (await $.wv([$t1], "ODSContracts", C, false));
    if ($.truthy($.in_((await $.wv([$t1, $t2], "State", C, false)), [(await $.wv([$t1, $t2], "dsInsert", C, false)), (await $.wv([$t1, $t2], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t1, $t2], "Post", [], C));
    }
  }
  {
    const $t3 = (await $.v(C, "InsDataMod"));
    const $t4 = (await $.wv([$t3], "OPCOMMON", C, false));
    await $.stmt((await $.wcall([$t3, $t4], "CallProcedure", ["addcontractacc", [(await $.mv((await $.wv([$t3, $t4], "ODSContractsid", C, false)), "value")), (await $.mv((await $.wv([$t3, $t4], "ODSContractsLOANACC_ID", C, false)), "Value")), (await $.mv((await $.wv([$t3, $t4], "ODSContractsCURRACC_ID", C, false)), "Value"))]], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmAccSettings", "Panel1DblClick", async function Panel1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmAccSettings", "SearchCombo1Click", async function SearchCombo1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "InsDataMod"));
    const $t6 = (await $.wv([$t5], "ODSCurrAccList", C, false));
    await $.stmt((await $.wcall([$t5, $t6], "Locate", ["acc_no", (await $.mv((await $.wv([$t5, $t6], "SearchCombo1", C, false)), "Text")), [(await $.wv([$t5, $t6], "loPartialKey", C, false))]], C)));
    await $.mset((await $.wv([$t5, $t6], "ODSContractsCURRACC_ID", C, false)), "Value", (await $.mv((await $.wcall([$t5, $t6], "FieldbyName", ["ID"], C)), "value")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmAccSettings", "SearchCombo1KeyPress", async function SearchCombo1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "found": false, "i": 0, "selst": 0, "tmpstr": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.in_((await L0["key"].get()), [...$.range("a","z")]))) {
    await $.stmt((await $.call(C, "Dec", [$.ref(async () => (await L0["key"].get()), async ($t7) => { await L0["key"].set($t7); }), 32])));
  }
  {
    const $t8 = (L0["sender"]);
    await $.wset([$t8], "SelSt", (await $.wv([$t8], "SelStart", C, false)), { get: async () => L0["selst"], set: async (v) => { L0["selst"] = v; }, local: true });
    if ($.truthy((await $.and_(($.eq((await $.wv([$t8], "Key", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true }, false)), (await $.wcall([$t8], "Chr", [(await $.wv([$t8], "vk_Back", C, false))], C)))), async () => ($.ne((await $.wv([$t8], "SelLength", C, false)), 0)))))) {
      await $.wset([$t8], "TmpStr", $.add((await $.wcall([$t8], "Copy", [(await $.wv([$t8], "Text", C, false)), 1, (await $.wv([$t8], "SelStart", C, false))], C)), (await $.wcall([$t8], "Copy", [(await $.wv([$t8], "Text", C, false)), $.add($.add((await $.wv([$t8], "SelLength", C, false)), (await $.wv([$t8], "SelStart", C, false))), 1), 255], C))), { get: async () => L0["tmpstr"], set: async (v) => { L0["tmpstr"] = v; }, local: true });
    } else {
      if ($.truthy($.eq((await $.wv([$t8], "Key", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true }, false)), (await $.wcall([$t8], "Chr", [(await $.wv([$t8], "vk_Back", C, false))], C))))) {
        await $.wset([$t8], "TmpStr", $.add((await $.wcall([$t8], "Copy", [(await $.wv([$t8], "Text", C, false)), 1, $.sub((await $.wv([$t8], "SelStart", C, false)), 1)], C)), (await $.wcall([$t8], "Copy", [(await $.wv([$t8], "Text", C, false)), $.add((await $.wv([$t8], "SelStart", C, false)), 1), 255], C))), { get: async () => L0["tmpstr"], set: async (v) => { L0["tmpstr"] = v; }, local: true });
      } else {
        await $.wset([$t8], "TmpStr", $.add($.add((await $.wcall([$t8], "Copy", [(await $.wv([$t8], "Text", C, false)), 1, (await $.wv([$t8], "SelStart", C, false))], C)), (await $.wv([$t8], "Key", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true }, false))), (await $.wcall([$t8], "Copy", [(await $.wv([$t8], "Text", C, false)), $.add($.add((await $.wv([$t8], "SelLength", C, false)), (await $.wv([$t8], "SelStart", C, false))), 1), 255], C))), { get: async () => L0["tmpstr"], set: async (v) => { L0["tmpstr"] = v; }, local: true });
      }
    }
    if ($.truthy($.eq((await $.wv([$t8], "TmpStr", { get: async () => L0["tmpstr"], set: async (v) => { L0["tmpstr"] = v; }, local: true }, false)), ""))) {
      return L0.result;
    }
    if ($.truthy((await $.and_(($.eq((await $.wv([$t8], "Key", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true }, false)), (await $.wcall([$t8], "Chr", [(await $.wv([$t8], "vk_Back", C, false))], C)))), async () => ($.gt((await $.wv([$t8], "SelSt", { get: async () => L0["selst"], set: async (v) => { L0["selst"] = v; }, local: true }, false)), 0)))))) {
      await $.stmt((await $.wcall([$t8], "Dec", [$.ref(async () => (await $.wv([$t8], "SelSt", { get: async () => L0["selst"], set: async (v) => { L0["selst"] = v; }, local: true }, false)), async ($t9) => { await $.wset([$t8], "SelSt", $t9, { get: async () => L0["selst"], set: async (v) => { L0["selst"] = v; }, local: true }); })], C)));
    } else {
      if ($.truthy($.ne((await $.wv([$t8], "Key", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true }, false)), (await $.wcall([$t8], "Chr", [(await $.wv([$t8], "vk_Back", C, false))], C))))) {
        await $.stmt((await $.wcall([$t8], "Inc", [$.ref(async () => (await $.wv([$t8], "SelSt", { get: async () => L0["selst"], set: async (v) => { L0["selst"] = v; }, local: true }, false)), async ($t10) => { await $.wset([$t8], "SelSt", $t10, { get: async () => L0["selst"], set: async (v) => { L0["selst"] = v; }, local: true }); })], C)));
      }
    }
    await $.wset([$t8], "Key", "\u0000", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true });
    if ($.truthy($.eq((await $.wv([$t8], "SelSt", { get: async () => L0["selst"], set: async (v) => { L0["selst"] = v; }, local: true }, false)), 0))) {
      await $.wset([$t8], "Text", "", C);
      return L0.result;
    }
    await $.wset([$t8], "Found", (await $.wv([$t8], "False", C, false)), { get: async () => L0["found"], set: async (v) => { L0["found"] = v; }, local: true });
    { const $t11 = (await $.mv((await $.wv([$t8], "Items", C, false)), "Count"));
      await $.wset([$t8], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t12 = true;
      for (;;) {
        if (!$t12) { await $.wset([$t8], "i", $.succ((await $.wv([$t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t12 = false;
        if (!($.ord((await $.wv([$t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t11))) break;
        if ($.truthy($.eq((await $.wcall([$t8], "Copy", [(await $.idx((await $.wv([$t8], "Items", C, false)), [$.sub((await $.wv([$t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)])), 1, (await $.wcall([$t8], "Length", [(await $.wv([$t8], "TmpStr", { get: async () => L0["tmpstr"], set: async (v) => { L0["tmpstr"] = v; }, local: true }, false))], C))], C)), (await $.wv([$t8], "TmpStr", { get: async () => L0["tmpstr"], set: async (v) => { L0["tmpstr"] = v; }, local: true }, false))))) {
          await $.wset([$t8], "Text", (await $.idx((await $.wv([$t8], "Items", C, false)), [$.sub((await $.wv([$t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)])), C);
          await $.wset([$t8], "ItemIndex", $.sub((await $.wv([$t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), C);
          await $.wset([$t8], "Found", (await $.wv([$t8], "True", C, false)), { get: async () => L0["found"], set: async (v) => { L0["found"] = v; }, local: true });
          break;
        }
        await $.tick();
      }
    }
    if ($.truthy((await $.wv([$t8], "Found", { get: async () => L0["found"], set: async (v) => { L0["found"] = v; }, local: true }, false)))) {
      await $.wset([$t8], "SelStart", (await $.wv([$t8], "SelSt", { get: async () => L0["selst"], set: async (v) => { L0["selst"] = v; }, local: true }, false)), C);
      await $.wset([$t8], "SelLength", $.sub((await $.wcall([$t8], "Length", [(await $.wv([$t8], "Text", C, false))], C)), (await $.wv([$t8], "SelSt", { get: async () => L0["selst"], set: async (v) => { L0["selst"] = v; }, local: true }, false))), C);
      if ($.truthy((await $.mv((await $.wv([$t8], "SearchCombo1", C, false)), "Focused")))) {
        await $.stmt((await $.wcall([$t8], "SearchCombo1Click", [(await $.wv([$t8], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
      } else {
        await $.stmt((await $.wcall([$t8], "SearchCombo2Click", [(await $.wv([$t8], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
      }
    } else {
      await $.stmt($.wcall([$t8], "Beep", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfmAccSettings", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.v(C, "InsDataMod"));
    const $t14 = (await $.wv([$t13], "ODSCurrAccList", C, false));
    await $.stmt((await $.wcall([$t13, $t14], "Locate", ["ID", (await $.mv((await $.wv([$t13, $t14], "ODSContractsCURRACC_ID", C, false)), "Value")), []], C)));
    await $.mset((await $.wv([$t13, $t14], "SearchCombo1", C, false)), "Text", (await $.mv((await $.wcall([$t13, $t14], "FieldbyName", ["ACC_NO"], C)), "asString")));
  }
  {
    const $t15 = (await $.v(C, "InsDataMod"));
    const $t16 = (await $.wv([$t15], "ODSLoanAccLists", C, false));
    await $.stmt((await $.wcall([$t15, $t16], "Locate", ["ID", (await $.mv((await $.wv([$t15, $t16], "ODSContractsLOANACC_ID", C, false)), "Value")), []], C)));
    await $.mset((await $.wv([$t15, $t16], "SearchCombo2", C, false)), "Text", (await $.mv((await $.wcall([$t15, $t16], "FieldbyName", ["ACC_NO"], C)), "asString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmAccSettings", "SearchCombo2Click", async function SearchCombo2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (await $.v(C, "InsDataMod"));
    const $t18 = (await $.wv([$t17], "ODSLoanAccLists", C, false));
    await $.stmt((await $.wcall([$t17, $t18], "Locate", ["acc_no", (await $.mv((await $.wv([$t17, $t18], "SearchCombo2", C, false)), "Text")), [(await $.wv([$t17, $t18], "loPartialKey", C, false))]], C)));
    await $.mset((await $.wv([$t17, $t18], "ODSContractsLOANACC_ID", C, false)), "Value", (await $.mv((await $.wcall([$t17, $t18], "FieldbyName", ["ID"], C)), "value")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmAccSettings", "DBLookupComboBox1Click", async function DBLookupComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "FormShow", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmAccSettings", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.v(C, "InsDataMod"));
    const $t20 = (await $.wv([$t19], "ODSContracts", C, false));
    if ($.truthy($.in_((await $.wv([$t19, $t20], "State", C, false)), [(await $.wv([$t19, $t20], "dsInsert", C, false)), (await $.wv([$t19, $t20], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t19, $t20], "Cancel", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
