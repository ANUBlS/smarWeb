// Generated from frmAddEditDepositTypesImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmAddEditDepositTypesImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBLookupEh", "Mask", "DBCtrlsEh", "frmDepositTypesImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TfrmAddEditDepositTypes", "TForm", {"buttonok": {"name": "ButtonOk", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}}, {});
  U.init(async () => {
    U.var_("frmAddEditDepositTypes", null, "TfrmAddEditDepositTypes");
  });
  U.method("TfrmAddEditDepositTypes", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmAddEditDepositTypes", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddEditDepositTypes", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmAddEditDepositTypes", "ButtonOkClick", async function ButtonOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "frmDepositTypes"));
    await $.wset([$t1], "FAdditionalType", (await $.mv((await $.mcall((await $.wv([$t1], "AddTypesForColl", C, false)), "FieldByName", ["addtypename"])), "AsString")), C);
    await $.wset([$t1], "FWithdrawtype", (await $.mv((await $.mcall((await $.wv([$t1], "AddTypesForWith", C, false)), "FieldByName", ["withdrtype"])), "AsString")), C);
    await $.mcall((await $.wv([$t1], "DepositTypes", C, false)), "Post", []);
  }
  await $.set(C, "ModalResult", (await $.v(C, "MrOk")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddEditDepositTypes", "ButtonCancelClick", async function ButtonCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "frmDepositTypes"));
    const $t3 = (await $.wv([$t2], "DepositTypes", C, false));
    await $.stmt($.wcall([$t2, $t3], "Cancel", [], C));
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
