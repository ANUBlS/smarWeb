// Generated from Unit_delivery.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit_delivery", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "Oracle", "MainUnit", "UnitFormMain_delivery"]);
  const C = [U];
  U.defClass("TForm_delivery", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "radiogroup1": {"name": "RadioGroup1", "type": "TRadioGroup"}, "oraclepackage": {"name": "OraclePackage", "type": "TOraclePackage"}, "v_status": {"name": "v_status", "type": "integer"}}, {});
  U.init(async () => {
    U.var_("Form_delivery", null, "TForm_delivery");
  });
  U.method("TForm_delivery", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "OraclePackage")), "CallProcedure", ["Addcm_notes_report", ["v_creditid", (await $.v(C, "creditid")), "v_par1", (await $.mv((await $.v(C, "memo1")), "Text")), "v_status", (await $.v(C, "v_status"))]])));
  await $.mcall((await $.mv((await $.v(C, "FormMain_delivery")), "OracleDataSet2")), "refresh", []);
  await $.mcall((await $.v(C, "memo1")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_delivery", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "RadioGroup1")), "ItemIndex", 2);
  await $.set(C, "v_status", 3);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_delivery", "RadioGroup1Click", async function RadioGroup1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), 0))) {
    await $.mset((await $.v(C, "Memo1")), "Text", "Düz çatdırılma");
    await $.set(C, "v_status", 1);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), 1))) {
    await $.mset((await $.v(C, "Memo1")), "Text", "Səhv çatdırılma");
    await $.set(C, "v_status", 2);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), 2))) {
    await $.mset((await $.v(C, "Memo1")), "Text", "");
    await $.set(C, "v_status", 3);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
