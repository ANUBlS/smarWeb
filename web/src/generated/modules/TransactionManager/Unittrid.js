// Generated from Unittrid.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unittrid", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "TransactionPropertiesImpl", "TransactionDataModuleUnit"]);
  const C = [U];
  U.defClass("TFormtrid", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "edit_name": {"name": "edit_name", "type": "TEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "edit_acc": {"name": "edit_acc", "type": "TEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "edit_swft": {"name": "edit_swft", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("Formtrid", null, "TFormtrid");
    U.var_("in_out", 0, "integer");
  });
  U.method("TFormtrid", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "OP_MMX")), "CallProcedure", ["up_mmx_transfers", [(await $.mv((await $.mv((await $.v(C, "TransactionDataModule")), "TransactionsID")), "AsInteger")), (await $.v(C, "in_out")), (await $.mv((await $.v(C, "edit_acc")), "Text")), (await $.mv((await $.v(C, "edit_name")), "Text")), (await $.mv((await $.v(C, "edit_swft")), "Text"))]])));
  await $.mcall((await $.v(C, "Formtrid")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormtrid", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "edit_acc")), "Clear", []);
  await $.mcall((await $.v(C, "edit_name")), "Clear", []);
  await $.mcall((await $.v(C, "edit_swft")), "Clear", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormtrid", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "TransactionEditForm")), "DBLC_MMX_Transmode")), "KeyValue")), "1002"))) {
    await $.set(C, "in_out", 2);
    await $.mset((await $.v(C, "Formtrid")), "Caption", "Alan tərəf");
  } else {
    await $.set(C, "in_out", 1);
    await $.mset((await $.v(C, "Formtrid")), "Caption", "Göndərən tərəf");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
