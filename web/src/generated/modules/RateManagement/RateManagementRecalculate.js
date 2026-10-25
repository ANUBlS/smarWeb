// Generated from RateManagementRecalculate.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("RateManagementRecalculate", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "sboapiDataModuleImpl", "RateManagementFormImpl"]);
  const C = [U];
  U.defClass("TFmRecalculate", "TForm", {"pnmain": {"name": "pnMain", "type": "TPanel"}, "pnbottom": {"name": "pnBottom", "type": "TPanel"}, "btcose": {"name": "btCose", "type": "TButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "lboper1": {"name": "lbOper1", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "lboper2": {"name": "lbOper2", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "lboper3": {"name": "lbOper3", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "lboper4": {"name": "lbOper4", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "lboper5": {"name": "lbOper5", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "lboper6": {"name": "lbOper6", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "shape1": {"name": "Shape1", "type": "TShape"}, "stcommit": {"name": "stCommit", "type": "TStaticText"}, "stlazy": {"name": "stLazy", "type": "TStaticText"}, "stratedifferen": {"name": "stRateDifferen", "type": "TStaticText"}, "stratedifferenresult": {"name": "stRateDifferenResult", "type": "TStaticText"}, "stcommitresult": {"name": "stCommitResult", "type": "TStaticText"}, "stlazyresult": {"name": "stLazyResult", "type": "TStaticText"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "stlazycount": {"name": "stLazyCount", "type": "TStaticText"}, "stlazycountresult": {"name": "stLazyCountResult", "type": "TStaticText"}, "sthead": {"name": "stHead", "type": "TStaticText"}}, {});
  U.init(async () => {
    U.var_("FmRecalculate", null, "TFmRecalculate");
  });
  U.method("TFmRecalculate", "RatesRecalculation", async function RatesRecalculation(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "tim": 0, "ratedifcount": 0, "comcount": 0, "lazycount": 0, "counter": 0, "tmpcom": 0, "tmplazy": 0, "tmprate": 0, "lazytr": 0};
  L0["success"] = $.fn(async function Success(p0, p1, p2) {
  const L1 = {"opertime": $.copyArg(p0), "issucces": (p1 === undefined ? true : p1), "advancedstring": (p2 === undefined ? "" : p2), result: undefined, "temp": null, "image": null, "bit": null, "comp": null};
  await $.fixArgs(L1, ["opertime", "issucces", "advancedstring"]);
  L1["findlabel"] = $.fn(async function FindLabel(p0) {
  const L2 = {"tagvalue": $.copyArg(p0), result: null, "i": 0};
  await $.fixArgs(L2, ["tagvalue"]);
  { const $t1 = $.sub((await $.v(C, "ComponentCount")), 1);
    L2["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L2["i"] = $.succ(L2["i"], 1); }
      $t2 = false;
      if (!($.ord(L2["i"]) <= $.ord($t1))) break;
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L2["i"]])), "Tag")), L2["tagvalue"])), async () => ($.is_((await $.idx((await $.v(C, "Components")), [L2["i"]])), "TLabel")))))) {
        L2["result"] = (await $.call(C, "TLabel", [(await $.idx((await $.v(C, "Components")), [L2["i"]]))]));
        return L2.result;
      }
      await $.tick();
    }
  }
  L2["result"] = null;
  return L2.result;
});
  L1["bit"] = (await $.mv((await $.v(C, "TBitmap")), "Create"));
  L1["temp"] = (await $.mcall((await $.v(C, "TLabel")), "Create", [Self]));
  L1["image"] = (await $.mcall((await $.v(C, "TImage")), "Create", [Self]));
  L1["comp"] = (await $.callv(L1["findlabel"], [L0["counter"]]));
  if ($.truthy($.ne(L1["comp"], null))) {
    try {
      {
        const $t3 = L1["temp"];
        await $.wset([$t3], "Left", $.sub((await $.mv(Self, "Width")), 60), C);
        await $.wset([$t3], "Top", (await $.mv((await $.wv([$t3], "Comp", { get: async () => L1["comp"], set: async (v) => { L1["comp"] = v; }, local: true }, false)), "Top")), C);
        await $.wset([$t3], "Caption", (await $.wcall([$t3], "FormatDateTime", ["nn:ss", (await $.wv([$t3], "OperTime", { get: async () => L1["opertime"], set: async (v) => { L1["opertime"] = v; }, local: true }, false))], C)), C);
        await $.wset([$t3], "Parent", (await $.mv((await $.wv([$t3], "Comp", { get: async () => L1["comp"], set: async (v) => { L1["comp"] = v; }, local: true }, false)), "Parent")), C);
        if ($.truthy($.ne((await $.wv([$t3], "AdvancedString", { get: async () => L1["advancedstring"], set: async (v) => { L1["advancedstring"] = v; }, local: true }, false)), (await $.wv([$t3], "EmptyStr", C, false))))) {
          await $.wset([$t3], "Caption", $.add((await $.wv([$t3], "AdvancedString", { get: async () => L1["advancedstring"], set: async (v) => { L1["advancedstring"] = v; }, local: true }, false)), (await $.wv([$t3], "Caption", C, false))), C);
          await $.wset([$t3], "Left", $.sub((await $.wv([$t3], "Left", C, false)), (await $.mcall((await $.wv([$t3], "Canvas", C, false)), "TextWidth", [(await $.wv([$t3], "AdvancedString", { get: async () => L1["advancedstring"], set: async (v) => { L1["advancedstring"] = v; }, local: true }, false))]))), C);
        }
      }
      {
        const $t4 = L1["image"];
        await $.wset([$t4], "Left", $.sub((await $.mv(Self, "Width")), 30), C);
        await $.wset([$t4], "Top", $.sub((await $.mv((await $.wv([$t4], "Comp", { get: async () => L1["comp"], set: async (v) => { L1["comp"] = v; }, local: true }, false)), "Top")), 2), C);
        if ($.truthy((await $.wv([$t4], "IsSucces", { get: async () => L1["issucces"], set: async (v) => { L1["issucces"] = v; }, local: true }, false)))) {
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t4], "RatemangForm", C, false)), "ImageList1")), "GetBitmap", [1, (await $.wv([$t4], "Bit", { get: async () => L1["bit"], set: async (v) => { L1["bit"] = v; }, local: true }, false))])));
        } else {
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t4], "RatemangForm", C, false)), "ImageList1")), "GetBitmap", [2, (await $.wv([$t4], "Bit", { get: async () => L1["bit"], set: async (v) => { L1["bit"] = v; }, local: true }, false))])));
        }
        await $.wset([$t4], "Transparent", (await $.wv([$t4], "True", C, false)), C);
        await $.wset([$t4], "AutoSize", (await $.wv([$t4], "True", C, false)), C);
        await $.mset((await $.wv([$t4], "Picture", C, false)), "Bitmap", (await $.wv([$t4], "Bit", { get: async () => L1["bit"], set: async (v) => { L1["bit"] = v; }, local: true }, false)));
        await $.wset([$t4], "Parent", (await $.mv((await $.wv([$t4], "Comp", { get: async () => L1["comp"], set: async (v) => { L1["comp"] = v; }, local: true }, false)), "Parent")), C);
      }
    } finally {
      await $.mcall(L1["bit"], "Free", []);
    }
  }
  await $.mset((await $.mv(L1["comp"], "Font")), "Style", $.sub((await $.mv((await $.mv((L1["comp"]), "Font")), "Style")), [(await $.v(C, "fsUnderline"))]));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["counter"], async ($t5) => { L0["counter"] = $t5; })])));
  L1["comp"] = (await $.callv(L1["findlabel"], [L0["counter"]]));
  if ($.truthy($.ne(L1["comp"], null))) {
    await $.mset((await $.mv(L1["comp"], "Font")), "Style", $.add((await $.mv((await $.mv((L1["comp"]), "Font")), "Style")), [(await $.v(C, "fsUnderline"))]));
  }
  L0["tim"] = (await $.v(C, "Time"));
  L0["tmpcom"] = L0["comcount"];
  L0["tmplazy"] = L0["lazycount"];
  L0["tmprate"] = L0["ratedifcount"];
  await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
  return L1.result;
});
  {
    const $t6 = (await $.mv((await $.v(C, "RatemangForm")), "SBRateManagement"));
    try {
      try {
        await $.wset([$t6], "ComCount", 0, { get: async () => L0["comcount"], set: async (v) => { L0["comcount"] = v; }, local: true });
        await $.wset([$t6], "LazyCount", 0, { get: async () => L0["lazycount"], set: async (v) => { L0["lazycount"] = v; }, local: true });
        await $.wset([$t6], "RateDifCount", 0, { get: async () => L0["ratedifcount"], set: async (v) => { L0["ratedifcount"] = v; }, local: true });
        await $.mset((await $.wv([$t6], "Screen", C, false)), "Cursor", (await $.wv([$t6], "crSQLWait", C, false)));
        await $.mset((await $.wv([$t6], "btCose", C, false)), "Enabled", (await $.wv([$t6], "False", C, false)));
        await $.wset([$t6], "Counter", 101, { get: async () => L0["counter"], set: async (v) => { L0["counter"] = v; }, local: true });
        await $.wset([$t6], "Tim", (await $.wv([$t6], "Time", C, false)), { get: async () => L0["tim"], set: async (v) => { L0["tim"] = v; }, local: true });
        await $.stmt((await $.wcall([$t6], "CallProcedure", ["CheckAmmounts", []], C)));
        await $.stmt((await $.wcall([$t6], "Success", [$.sub((await $.wv([$t6], "Time", C, false)), (await $.wv([$t6], "Tim", { get: async () => L0["tim"], set: async (v) => { L0["tim"] = v; }, local: true }, false)))], { get: async () => L0["success"], set: async (v) => { L0["success"] = v; }, local: true })));
        await $.wset([$t6], "LazyTr", (await $.wcall([$t6], "CallIntegerFunction", ["AddLazyTransactions", []], C)), { get: async () => L0["lazytr"], set: async (v) => { L0["lazytr"] = v; }, local: true });
        await $.mset((await $.wv([$t6], "stLazyCount", C, false)), "Visible", (await $.wv([$t6], "True", C, false)));
        await $.mset((await $.wv([$t6], "stLazyCountResult", C, false)), "Caption", $.add((await $.wcall([$t6], "IntToStr", [(await $.wv([$t6], "LazyTr", { get: async () => L0["lazytr"], set: async (v) => { L0["lazytr"] = v; }, local: true }, false))], C)), " "));
        await $.stmt((await $.wcall([$t6], "Success", [$.sub((await $.wv([$t6], "Time", C, false)), (await $.wv([$t6], "Tim", { get: async () => L0["tim"], set: async (v) => { L0["tim"] = v; }, local: true }, false)))], { get: async () => L0["success"], set: async (v) => { L0["success"] = v; }, local: true })));
        await $.stmt((await $.wcall([$t6], "CallProcedure", ["ArchiveTransactions", []], C)));
        await $.stmt((await $.wcall([$t6], "CallProcedure", ["DeleteOldTransactions", []], C)));
        await $.stmt((await $.wcall([$t6], "Success", [$.sub((await $.wv([$t6], "Time", C, false)), (await $.wv([$t6], "Tim", { get: async () => L0["tim"], set: async (v) => { L0["tim"] = v; }, local: true }, false)))], { get: async () => L0["success"], set: async (v) => { L0["success"] = v; }, local: true })));
        await $.stmt((await $.wcall([$t6], "CallProcedure", ["commit_new_rates", []], C)));
        await $.stmt((await $.wcall([$t6], "Success", [$.sub((await $.wv([$t6], "Time", C, false)), (await $.wv([$t6], "Tim", { get: async () => L0["tim"], set: async (v) => { L0["tim"] = v; }, local: true }, false)))], { get: async () => L0["success"], set: async (v) => { L0["success"] = v; }, local: true })));
        await $.wset([$t6], "RateDifCount", (await $.wcall([$t6], "CallIntegerFunction", ["calc_rate_difference", []], C)), { get: async () => L0["ratedifcount"], set: async (v) => { L0["ratedifcount"] = v; }, local: true });
        await $.mset((await $.wv([$t6], "stRateDifferen", C, false)), "Visible", (await $.wv([$t6], "True", C, false)));
        await $.mset((await $.wv([$t6], "stRateDifferenResult", C, false)), "Caption", $.add((await $.wcall([$t6], "IntToStr", [(await $.wv([$t6], "RateDifCount", { get: async () => L0["ratedifcount"], set: async (v) => { L0["ratedifcount"] = v; }, local: true }, false))], C)), " "));
        await $.stmt((await $.wcall([$t6], "Success", [$.sub((await $.wv([$t6], "Time", C, false)), (await $.wv([$t6], "Tim", { get: async () => L0["tim"], set: async (v) => { L0["tim"] = v; }, local: true }, false)))], { get: async () => L0["success"], set: async (v) => { L0["success"] = v; }, local: true })));
        await $.stmt((await $.wcall([$t6], "CallProcedure", ["Recalculate", []], C)));
        await $.stmt((await $.wcall([$t6], "Success", [$.sub((await $.wv([$t6], "Time", C, false)), (await $.wv([$t6], "Tim", { get: async () => L0["tim"], set: async (v) => { L0["tim"] = v; }, local: true }, false)))], { get: async () => L0["success"], set: async (v) => { L0["success"] = v; }, local: true })));
        await $.stmt((await $.wcall([$t6], "CallBooleanFunction", ["AddArchiveTransactions", ["ProvTrCount", (await $.wv([$t6], "ComCount", { get: async () => L0["comcount"], set: async (v) => { L0["comcount"] = v; }, local: true }, false)), "LazyTrCount", (await $.wv([$t6], "lazyCount", { get: async () => L0["lazycount"], set: async (v) => { L0["lazycount"] = v; }, local: true }, false))]], C)));
        await $.stmt((await $.wcall([$t6], "Success", [$.sub((await $.wv([$t6], "Time", C, false)), (await $.wv([$t6], "Tim", { get: async () => L0["tim"], set: async (v) => { L0["tim"] = v; }, local: true }, false)))], { get: async () => L0["success"], set: async (v) => { L0["success"] = v; }, local: true })));
        await $.wset([$t6], "ComCount", (await $.wcall([$t6], "GetParameter", [0], C)), { get: async () => L0["comcount"], set: async (v) => { L0["comcount"] = v; }, local: true });
        await $.wset([$t6], "lazyCount", (await $.wcall([$t6], "GetParameter", [1], C)), { get: async () => L0["lazycount"], set: async (v) => { L0["lazycount"] = v; }, local: true });
        await $.mcall((await $.wv([$t6], "stHead", C, false)), "Show", []);
        await $.mcall((await $.wv([$t6], "stCommit", C, false)), "Show", []);
        await $.mset((await $.wv([$t6], "stCommitResult", C, false)), "Caption", $.add((await $.wcall([$t6], "IntToSTr", [(await $.wv([$t6], "ComCount", { get: async () => L0["comcount"], set: async (v) => { L0["comcount"] = v; }, local: true }, false))], C)), " "));
        await $.mcall((await $.wv([$t6], "stLazy", C, false)), "Show", []);
        await $.mset((await $.wv([$t6], "stLazyResult", C, false)), "Caption", $.add((await $.wcall([$t6], "IntToStr", [(await $.wv([$t6], "LazyCount", { get: async () => L0["lazycount"], set: async (v) => { L0["lazycount"] = v; }, local: true }, false))], C)), " "));
      } catch ($t7) {
        $.rethrowControl($t7);
        if ($.excIs($t7, "Exception")) {
          L0["e"] = $.exc($t7);
          await $.stmt((await $.wcall([$t6], "Success", [$.sub((await $.wv([$t6], "Time", C, false)), (await $.wv([$t6], "Tim", { get: async () => L0["tim"], set: async (v) => { L0["tim"] = v; }, local: true }, false))), (await $.wv([$t6], "False", C, false))], { get: async () => L0["success"], set: async (v) => { L0["success"] = v; }, local: true })));
          throw $t7;
        }
        else { throw $t7; }
      }
    } finally {
      await $.mset((await $.wv([$t6], "Screen", C, false)), "Cursor", (await $.wv([$t6], "crArrow", C, false)));
      await $.mset((await $.wv([$t6], "btCose", C, false)), "Enabled", (await $.wv([$t6], "True", C, false)));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFmRecalculate", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.mv((await $.v(C, "btCose")), "Enabled")))))) {
    await L0["action"].set((await $.v(C, "caNone")));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFmRecalculate", "btCoseClick", async function btCoseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "RateManagementFormImpl")), "RatemangForm")), "OracleDataSet3")), "RecordCount")), 0))) {
    await $.mset((await $.mv((await $.v(C, "RatemangForm")), "panel7")), "Visible", $.not((await $.mv((await $.mv((await $.v(C, "RatemangForm")), "panel7")), "Visible"))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFmRecalculate", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
  await $.stmt($.call(C, "RatesRecalculation", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
