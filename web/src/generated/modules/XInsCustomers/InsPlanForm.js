// Generated from InsPlanForm.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InsPlanForm", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "Buttons", "ExtCtrls", "Mask", "DBCtrls", "Oracle", "HintBox", "CurrencyEdit", "DB", "InsDataModule"]);
  const C = [U];
  U.defClass("TfmPlanForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("fmPlanForm", null, "TfmPlanForm");
  });
  U.method("TfmPlanForm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "InsDataMod"));
    const $t2 = (await $.wv([$t1], "ODSPayPlan", C, false));
    if ($.truthy($.in_((await $.wv([$t1, $t2], "state", C, false)), [(await $.wv([$t1, $t2], "dsInsert", C, false)), (await $.wv([$t1, $t2], "dsEdit", C, false))]))) {
      await $.mset((await $.mcall((await $.wv([$t1, $t2], "ODSPayPlan", C, false)), "FieldByName", ["INS_ID"])), "asFloat", (await $.mv((await $.wv([$t1, $t2], "ODSContractsID", C, false)), "Value")));
      await $.stmt($.wcall([$t1, $t2], "Post", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmPlanForm", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "InsDataMod"));
    const $t4 = (await $.wv([$t3], "ODSPayPlan", C, false));
    await $.stmt($.wcall([$t3, $t4], "cancel", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
