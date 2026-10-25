// Generated from UntPercents.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntPercents", ["Windows", "Menus", "StdCtrls", "ComCtrls", "Controls", "Buttons", "Classes", "Forms", "SysUtils", "UntContractConclusion", "StoredProgramsUnit"]);
  const C = [U];
  U.defClass("TFrmPercents", "TForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "btnclose": {"name": "BtnClose", "type": "TButton"}, "percentslist": {"name": "PercentsList", "type": "TListBox"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "floatablepercentsedit": {"name": "FloatablePercentsEdit", "type": "TEdit"}, "dtpcurrentdate": {"name": "DTPCurrentDate", "type": "TDateTimePicker"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "sbnew": {"name": "SBNew", "type": "TSpeedButton"}, "popupmenu": {"name": "PopupMenu", "type": "TPopupMenu"}, "midelete": {"name": "miDelete", "type": "TMenuItem"}, "miclear": {"name": "miClear", "type": "TMenuItem"}, "minone": {"name": "miNone", "type": "TMenuItem"}, "fparentbuttontag": {"name": "FParentButtonTag", "type": "Integer"}}, {});
  U.init(async () => {
    U.var_("FrmPercents", null, "TFrmPercents");
  });
  U.func("GetMode", async function GetMode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy($.eq(L0["value"], 0))) {
    L0["result"] = (await $.v(C, "pmNormal"));
  } else {
    L0["result"] = (await $.v(C, "pmOverdue"));
  }
  return L0.result;
}, {"params": ["Value"], "kind": "function", "ptypes": ["Integer"]});
  U.method("TFrmPercents", "SBNewClick", async function SBNewClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "mode": null};
  await $.fixArgs(L0, ["sender"]);
  try {
    L0["mode"] = (await $.call(C, "GetMode", [(await $.v(C, "FParentButtonTag"))]));
    {
      const $t2 = (await $.v(C, "FrmContract"));
      const $t3 = (await $.mv((await $.wv([$t2], "PercentsList", C, false)), "Items"));
      await $.stmt((await $.wcall([$t2, $t3], "Push", [$.ref(async () => (await $.wv([$t2, $t3], "FloatablePercent", C, false)), async ($t4) => { await $.wset([$t2, $t3], "FloatablePercent", $t4, C); }), (await $.wcall([$t2, $t3], "StrToFloat", [(await $.mv((await $.wv([$t2, $t3], "FloatablePercentsEdit", C, false)), "Text"))], C)), (await $.wv([$t2, $t3], "Mode", { get: async () => L0["mode"], set: async (v) => { L0["mode"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t2, $t3], "Push", [$.ref(async () => (await $.wv([$t2, $t3], "FloatableDate", C, false)), async ($t5) => { await $.wset([$t2, $t3], "FloatableDate", $t5, C); }), (await $.wcall([$t2, $t3], "Trunc", [(await $.mv((await $.wv([$t2, $t3], "DTPCurrentDate", C, false)), "DateTime"))], C)), (await $.wv([$t2, $t3], "Mode", { get: async () => L0["mode"], set: async (v) => { L0["mode"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t2, $t3], "Add", [$.add($.add((await $.wcall([$t2, $t3], "FormatDateTime", ["dd-mm-yyyy", (await $.mv((await $.wv([$t2, $t3], "DTPCurrentDate", C, false)), "DateTime"))], C)), (await $.wcall([$t2, $t3], "Format", ["  : %s ", [(await $.mv((await $.wv([$t2, $t3], "FloatablePercentsEdit", C, false)), "Text"))]], C))), "%-lə")], C)));
    }
  } catch ($t1) {
    $.rethrowControl($t1);
    $.handled($t1);
    await $.stmt($.call(C, "Beep", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPercents", "PercentsListContextPopup", async function PercentsListContextPopup(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "mousepos": $.copyArg(p1), "handled": $.asRef(p2), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender", "mousepos"]);
  L0["index"] = (await $.mcall((await $.v(C, "PercentsList")), "ItemAtPos", [L0["mousepos"], true]));
  if ($.truthy($.ne(L0["index"], (-(1))))) {
    await $.mset((await $.v(C, "PercentsList")), "ItemIndex", L0["index"]);
  } else {
    await L0["handled"].set(true);
  }
  return L0.result;
}, {"params": ["Sender", "MousePos", "Handled"], "kind": "procedure", "ptypes": ["TObject", "TPoint", "Boolean"]});
  U.method("TFrmPercents", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "mode": null, "idx": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTPCurrentDate")), "DateTime", (await $.v(C, "GetBankDate")));
  L0["mode"] = (await $.call(C, "GetMode", [(await $.v(C, "FParentButtonTag"))]));
  {
    const $t6 = (await $.v(C, "FrmContract"));
    const $t7 = (await $.mv((await $.wv([$t6], "PercentsList", C, false)), "Items"));
    await $.stmt($.wcall([$t6, $t7], "Clear", [], C));
    await $.mset((await $.wv([$t6, $t7], "FloatablePercentsEdit", C, false)), "Text", "0.00");
    { const $t8 = (await $.wcall([$t6, $t7], "High", [(await $.idx((await $.wv([$t6, $t7], "FloatableDate", C, false)), [(await $.wv([$t6, $t7], "Mode", { get: async () => L0["mode"], set: async (v) => { L0["mode"] = v; }, local: true }, false))]))], C));
      await $.wset([$t6, $t7], "Idx", 0, { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true });
      let $t9 = true;
      for (;;) {
        if (!$t9) { await $.wset([$t6, $t7], "Idx", $.succ((await $.wv([$t6, $t7], "Idx", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), 1), { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }); }
        $t9 = false;
        if (!($.ord((await $.wv([$t6, $t7], "Idx", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false))) <= $.ord($t8))) break;
        await $.stmt((await $.wcall([$t6, $t7], "Add", [$.add($.add((await $.wcall([$t6, $t7], "FormatDateTime", ["dd-mm-yyyy", (await $.idx((await $.idx((await $.wv([$t6, $t7], "FloatableDate", C, false)), [(await $.wv([$t6, $t7], "Mode", { get: async () => L0["mode"], set: async (v) => { L0["mode"] = v; }, local: true }, false))])), [(await $.wv([$t6, $t7], "Idx", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false))]))], C)), (await $.wcall([$t6, $t7], "Format", ["  : %s ", [(await $.wcall([$t6, $t7], "FloatToStr", [(await $.idx((await $.idx((await $.wv([$t6, $t7], "FloatablePercent", C, false)), [(await $.wv([$t6, $t7], "Mode", { get: async () => L0["mode"], set: async (v) => { L0["mode"] = v; }, local: true }, false))])), [(await $.wv([$t6, $t7], "Idx", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false))]))], C))]], C))), "%-lə")], C)));
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPercents", "miDeleteClick", async function miDeleteClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "mode": null};
  await $.fixArgs(L0, ["sender"]);
  L0["mode"] = (await $.call(C, "GetMode", [(await $.v(C, "FParentButtonTag"))]));
  {
    const $t10 = (await $.v(C, "FrmContract"));
    const $t11 = (await $.wv([$t10], "PercentsList", C, false));
    await $.stmt((await $.wcall([$t10, $t11], "Pop", [$.ref(async () => (await $.wv([$t10, $t11], "FloatableDate", C, false)), async ($t12) => { await $.wset([$t10, $t11], "FloatableDate", $t12, C); }), (await $.wv([$t10, $t11], "ItemIndex", C, false)), (await $.wv([$t10, $t11], "Mode", { get: async () => L0["mode"], set: async (v) => { L0["mode"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t10, $t11], "Pop", [$.ref(async () => (await $.wv([$t10, $t11], "FloatablePercent", C, false)), async ($t13) => { await $.wset([$t10, $t11], "FloatablePercent", $t13, C); }), (await $.wv([$t10, $t11], "ItemIndex", C, false)), (await $.wv([$t10, $t11], "Mode", { get: async () => L0["mode"], set: async (v) => { L0["mode"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.mcall((await $.wv([$t10, $t11], "Items", C, false)), "Delete", [$.ref(async () => (await $.wv([$t10, $t11], "ItemIndex", C, false)), async ($t14) => { await $.wset([$t10, $t11], "ItemIndex", $t14, C); })])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPercents", "miClearClick", async function miClearClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "mode": null};
  await $.fixArgs(L0, ["sender"]);
  L0["mode"] = (await $.call(C, "GetMode", [(await $.v(C, "FParentButtonTag"))]));
  {
    const $t15 = (await $.v(C, "FrmContract"));
    const $t16 = (await $.wv([$t15], "PercentsList", C, false));
    await $.stmt((await $.wcall([$t15, $t16], "SetLength", [$.ref(async () => (await $.idx((await $.wv([$t15, $t16], "FloatableDate", C, false)), [(await $.wv([$t15, $t16], "Mode", { get: async () => L0["mode"], set: async (v) => { L0["mode"] = v; }, local: true }, false))])), async ($t17) => { { const $t18 = await $.iset((await $.wv([$t15, $t16], "FloatableDate", C, false)), [(await $.wv([$t15, $t16], "Mode", { get: async () => L0["mode"], set: async (v) => { L0["mode"] = v; }, local: true }, false))], $t17); if ($t18 !== undefined) { await $.wset([$t15, $t16], "FloatableDate", $t18, C); } } }), 0], C)));
    await $.stmt((await $.wcall([$t15, $t16], "SetLength", [$.ref(async () => (await $.idx((await $.wv([$t15, $t16], "FloatablePercent", C, false)), [(await $.wv([$t15, $t16], "Mode", { get: async () => L0["mode"], set: async (v) => { L0["mode"] = v; }, local: true }, false))])), async ($t19) => { { const $t20 = await $.iset((await $.wv([$t15, $t16], "FloatablePercent", C, false)), [(await $.wv([$t15, $t16], "Mode", { get: async () => L0["mode"], set: async (v) => { L0["mode"] = v; }, local: true }, false))], $t19); if ($t20 !== undefined) { await $.wset([$t15, $t16], "FloatablePercent", $t20, C); } } }), 0], C)));
    await $.mcall((await $.wv([$t15, $t16], "Items", C, false)), "Clear", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPercents", "FloatablePercentsEditKeyPress", async function FloatablePercentsEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b", (await $.call(C, "Chr", [(await $.v(C, "VK_DELETE"))])), "."]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
