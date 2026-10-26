// Generated from Unit4.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit4", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBViewComboBox", "StdCtrls", "SearchCombo", "Mask", "DBCtrls", "SearchEdit", "Unit2", "SWIFT_MAINImpl1", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TIN_edit", "TForm", {"in_id": {"name": "IN_ID", "type": "TDBEdit"}, "in_referans": {"name": "IN_REFERANS", "type": "TDBEdit"}, "in_valu": {"name": "IN_VALU", "type": "TDBEdit"}, "in_valuta": {"name": "IN_VALUTA", "type": "TDBEdit"}, "in_bic": {"name": "IN_BIC", "type": "TDBEdit"}, "in_mt": {"name": "IN_MT", "type": "TDBEdit"}, "in_ok": {"name": "IN_OK", "type": "TButton"}, "in_cansel": {"name": "IN_CANSEL", "type": "TButton"}, "acas": {"name": "acas", "type": "TSearchEdit"}, "acc_n": {"name": "acc_n", "type": "TDBEdit"}}, {});
  U.init(async () => {
    U.var_("IN_edit", null, "TIN_edit");
  });
  U.method("TIN_edit", "IN_ACOUNTClick", async function IN_ACOUNTClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TIN_edit", "IN_OKClick", async function IN_OKClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "acc_n")), "Text", (await $.mv((await $.v(C, "acas")), "Text")));
  {
    const $t1 = (await $.mv((await $.v(C, "swdatamodule")), "sw_in"));
    await $.mcall((await $.mv((await $.wv([$t1], "swdatamodule", C, false)), "sw_in")), "Edit", []);
    await $.mset((await $.mcall((await $.mv((await $.wv([$t1], "swdatamodule", C, false)), "sw_in")), "fieldbyname", ["acount"])), "asstring", (await $.mv((await $.wv([$t1], "acas", C, false)), "Text")));
    await $.mset((await $.mcall((await $.mv((await $.wv([$t1], "swdatamodule", C, false)), "sw_in")), "fieldbyname", ["status"])), "asinteger", 2);
    await $.stmt($.wcall([$t1], "post", [], C));
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in_insert")), "CallProcedure", ["check_account", [(await $.mv((await $.v(C, "in_id")), "text")), (await $.mv((await $.v(C, "acas")), "text"))]])));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TIN_edit", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  await $.mset((await $.v(C, "acas")), "Text", (await $.mv((await $.v(C, "acc_n")), "Text")));
  await $.mset((await $.v(C, "acc_n")), "Visible", false);
  await $.mset((await $.v(C, "acas")), "Visible", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TIN_edit", "IN_CANSELClick", async function IN_CANSELClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
