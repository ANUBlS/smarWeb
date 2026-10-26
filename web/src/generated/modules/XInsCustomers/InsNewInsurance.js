// Generated from InsNewInsurance.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InsNewInsurance", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "StdCtrls", "Buttons", "ComObj", "PlgModalContainer", "InsDataModule"]);
  const C = [U];
  U.defClass("TfmNewInsurance", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "btok": {"name": "btOk", "type": "TBitBtn"}, "btcancel": {"name": "btCancel", "type": "TBitBtn"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "pmccallnewblank": {"name": "pmcCallNewBlank", "type": "TPlgModalContainer"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}}, {});
  U.init(async () => {
    U.var_("fmNewInsurance", null, "TfmNewInsurance");
  });
  U.method("TfmNewInsurance", "CallChangeForm", async function CallChangeForm(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"params": $.copyArg(p0), result: 0, "callerguid": null};
  await $.fixArgs(L0, ["params"]);
  {
    const $t1 = (await $.mv((await $.v(C, "InsDataMod")), "ODSInsurances"));
    if ($.truthy($.eq((await $.mv((await $.wcall([$t1], "FieldByName", ["CHANGEGUID"], C)), "AsString")), ""))) {
      throw $.raise((await $.mcall((await $.wv([$t1], "TGuidError", C, false)), "Create", ["Guid is empty"])));
    }
    await $.wset([$t1], "CallerGuid", (await $.wcall([$t1], "StringToGuid", [(await $.mv((await $.wcall([$t1], "FieldByName", ["CHANGEGUID"], C)), "AsString"))], C)), { get: async () => L0["callerguid"], set: async (v) => { L0["callerguid"] = v; }, local: true });
    {
      const $t2 = (await $.wv([$t1], "pmcCallNewBlank", C, false));
      await $.wset([$t1, $t2], "Result", (await $.wcall([$t1, $t2], "ShowModal", [(await $.wv([$t1, $t2], "CallerGuid", { get: async () => L0["callerguid"], set: async (v) => { L0["callerguid"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false))], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    }
  }
  return L0.result;
}, {"params": ["Params"], "kind": "function", "ptypes": ["TStringList"]});
  U.method("TfmNewInsurance", "btOkClick", async function btOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "params": null};
  await $.fixArgs(L0, ["sender"]);
  L0["params"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  {
    const $t3 = (await $.mv((await $.v(C, "InsDataMod")), "ODSInsCustomers"));
    const $t4 = (await $.wv([$t3], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false));
    try {
      { const $t5 = await $.iset((await $.wv([$t3, $t4], "Values", C, false)), ["SID"], "-1"); if ($t5 !== undefined) { await $.wset([$t3, $t4], "Values", $t5, C); } }
      { const $t6 = await $.iset((await $.wv([$t3, $t4], "Values", C, false)), ["Mod"], "Insert"); if ($t6 !== undefined) { await $.wset([$t3, $t4], "Values", $t6, C); } }
      { const $t7 = await $.iset((await $.wv([$t3, $t4], "Values", C, false)), ["KLI_ID"], (await $.wcall([$t3, $t4], "FloatToStr", [(await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["ID"], C)), "asFloat"))], C))); if ($t7 !== undefined) { await $.wset([$t3, $t4], "Values", $t7, C); } }
      await $.wset([$t3, $t4], "ModalResult", (await $.wcall([$t3, $t4], "CallChangeForm", [(await $.wv([$t3, $t4], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false))], C)), C);
    } finally {
      await $.mcall((await $.wv([$t3, $t4], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false)), "Free", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmNewInsurance", "btCancelClick", async function btCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmNewInsurance", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.v(C, "InsDataMod"));
    await $.mset((await $.wv([$t8], "ODSInsurances", C, false)), "Filtered", (await $.mv((await $.wv([$t8], "CheckBox1", C, false)), "Checked")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
