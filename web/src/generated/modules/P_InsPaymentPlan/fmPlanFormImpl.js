// Generated from fmPlanFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("fmPlanFormImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ExtCtrls", "XFSCtrls", "Mask", "DBCtrls", "oracle", "db", "sboapiDataModuleimpl", "SBTranslateProc", "DMPaymentPlanImpl"]);
  const C = [U];
  U.defClass("TfmPlanForm", "TForm", {"xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("fmPlanForm", null, "TfmPlanForm");
  });
  U.method("TfmPlanForm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DMPaymentPlan"));
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
    const $t3 = (await $.v(C, "DMPaymentPlan"));
    const $t4 = (await $.wv([$t3], "ODSPayPlan", C, false));
    await $.stmt($.wcall([$t3, $t4], "cancel", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmPlanForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
