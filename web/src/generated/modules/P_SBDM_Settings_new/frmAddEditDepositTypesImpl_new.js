// Generated from frmAddEditDepositTypesImpl_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmAddEditDepositTypesImpl_new", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBLookupEh", "Mask", "DBCtrlsEh", "ExtCtrls", "XFSCtrls", "frmDepositTypesImpl_new", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TfrmAddEditDepositTypes_new", "TForm", {"buttonok": {"name": "ButtonOk", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "label1": {"name": "Label1", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}}, {});
  U.init(async () => {
    U.var_("frmAddEditDepositTypes_new", null, "TfrmAddEditDepositTypes_new");
  });
  U.method("TfrmAddEditDepositTypes_new", "ButtonCancelClick", async function ButtonCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "frmDepositTypes_new"));
    const $t2 = (await $.wv([$t1], "DepositTypes", C, false));
    await $.stmt($.wcall([$t1, $t2], "Cancel", [], C));
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddEditDepositTypes_new", "ButtonOkClick", async function ButtonOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "cari_meblege_bax": 0, "hesab_faiz_evvelceden_vermek": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox2")), "Checked")), true))) {
    L0["cari_meblege_bax"] = 1;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox2")), "Checked")), false))) {
    L0["cari_meblege_bax"] = 0;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox1")), "Checked")), true))) {
    L0["hesab_faiz_evvelceden_vermek"] = 1;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox1")), "Checked")), false))) {
    L0["hesab_faiz_evvelceden_vermek"] = 0;
  }
  {
    const $t3 = (await $.v(C, "frmDepositTypes_new"));
    await $.wset([$t3], "FAdditionalType", (await $.mv((await $.mcall((await $.wv([$t3], "AddTypesForColl", C, false)), "FieldByName", ["addtypename"])), "AsString")), C);
    await $.wset([$t3], "FWithdrawtype", (await $.mv((await $.mcall((await $.wv([$t3], "AddTypesForWith", C, false)), "FieldByName", ["withdrtype"])), "AsString")), C);
    await $.mset((await $.mcall((await $.wv([$t3], "DepositTypes", C, false)), "FieldByName", ["PERCENT_RULE"])), "AsInteger", (await $.wv([$t3], "hesab_faiz_evvelceden_vermek", { get: async () => L0["hesab_faiz_evvelceden_vermek"], set: async (v) => { L0["hesab_faiz_evvelceden_vermek"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t3], "DepositTypes", C, false)), "FieldByName", ["AMOUNT_RULE"])), "AsInteger", (await $.wv([$t3], "cari_meblege_bax", { get: async () => L0["cari_meblege_bax"], set: async (v) => { L0["cari_meblege_bax"] = v; }, local: true }, false)));
    await $.mcall((await $.wv([$t3], "DepositTypes", C, false)), "Post", []);
  }
  await $.set(C, "ModalResult", (await $.v(C, "MrOk")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddEditDepositTypes_new", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmAddEditDepositTypes_new", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddEditDepositTypes_new", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
