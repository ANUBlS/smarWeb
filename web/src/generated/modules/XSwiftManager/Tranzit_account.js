// Generated from Tranzit_account.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Tranzit_account", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Unit2", "Grids", "DBGrids", "StdCtrls", "ExtCtrls"]);
  const C = [U];
  U.defClass("TTranzit_Acc", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("Tranzit_Acc", null, "TTranzit_Acc");
  });
  U.method("TTranzit_Acc", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "value1": '', "value2": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "InputQuery", ["Tranzit Hesablar", "Əsas hesab", $.ref(async () => L0["value1"], async ($t1) => { L0["value1"] = $t1; })])));
  await $.stmt((await $.call(C, "InputQuery", ["Tranzit Hesablar", "Tranzit hesab", $.ref(async () => L0["value2"], async ($t2) => { L0["value2"] = $t2; })])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in_insert")), "CallProcedure", ["sw_tranzit_insert", [L0["value1"], L0["value2"]]])));
  await $.stmt((await $.call(C, "ShowMessage", ["Tranzit hesab əlavə olundu"])));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Tranzit")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTranzit_Acc", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Tranzit hesabi siyahıdan silim?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Tranzit")), "Delete", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTranzit_Acc", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTranzit_Acc", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Tranzit")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
