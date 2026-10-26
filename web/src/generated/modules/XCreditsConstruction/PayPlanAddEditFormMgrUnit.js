// Generated from PayPlanAddEditFormMgrUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PayPlanAddEditFormMgrUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBCtrlsEh", "Mask", "PaymentPlaneMgrUnit"]);
  const C = [U];
  U.defClass("TPayPlanAddEditForm", "TForm", {"statictext1": {"name": "StaticText1", "type": "TStaticText"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("PayPlanAddEditForm", null, "TPayPlanAddEditForm");
  });
  U.method("TPayPlanAddEditForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "PaymentPlaneForm")), "PlanInfo"));
    await $.stmt($.wcall([$t1], "post", [], C));
    await $.stmt($.wcall([$t1], "RefResh", [], C));
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
