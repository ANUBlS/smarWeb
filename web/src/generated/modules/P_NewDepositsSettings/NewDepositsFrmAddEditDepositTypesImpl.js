// Generated from NewDepositsFrmAddEditDepositTypesImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsFrmAddEditDepositTypesImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBLookupEh", "Mask", "DBCtrlsEh", "ExtCtrls", "XFSCtrls", "DBGridEh", "NewDepositsFrmDepositTypesImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TNewDepositsFrmAddEditDepositTypes", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "checkbox2": {"name": "CheckBox2", "type": "TXFCheckBox"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "buttonok": {"name": "ButtonOk", "type": "TXFButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TXFButton"}, "grouptype": {"name": "GroupType", "type": "TXFCheckGroup"}, "dbedit": {"name": "DBEdit", "type": "TEdit"}, "checkbox1": {"name": "CheckBox1", "type": "TXFCheckBox"}, "a": {"name": "a", "type": "String"}, "b": {"name": "b", "type": "String"}, "c": {"name": "c", "type": "String"}, "d": {"name": "d", "type": "String"}, "db": {"name": "Db", "type": "String"}}, {});
  U.init(async () => {
    U.var_("NewDepositsFrmAddEditDepositTypes", null, "TNewDepositsFrmAddEditDepositTypes");
  });
  U.method("TNewDepositsFrmAddEditDepositTypes", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TNewDepositsFrmAddEditDepositTypes", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddEditDepositTypes", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsFrmAddEditDepositTypes", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ch": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "NewDepositsFrmDepositTypes")), "DepositTypes")), "Open", []);
  L0["ch"] = 0;
  if ($.truthy($.eq((await $.mv((await $.v(C, "NewDepositsFrmDepositTypes")), "FIns")), 0))) {
    await $.mset((await $.v(C, "DBEdit")), "Text", "");
    await $.mset((await $.v(C, "GroupType")), "Checked", 0);
  } else {
    {
      const $t1 = (await $.v(C, "NewDepositsFrmDepositTypes"));
      const $t2 = (await $.wv([$t1], "DepositTypes", C, false));
      await $.mset((await $.wv([$t1, $t2], "DBEdit", C, false)), "Text", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["type"], C)), "AsString")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddEditDepositTypes", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Db", (await $.mv((await $.v(C, "DBEdit")), "Text")));
  {
    const $t3 = (await $.v(C, "NewDepositsFrmDepositTypes"));
    if ($.truthy($.eq((await $.wv([$t3], "FIns", C, false)), 0))) {
      await $.wset([$t3], "Dtpid", (-(1)), C);
      await $.stmt((await $.mcall((await $.wv([$t3], "dm_stored_programs", C, false)), "CallProcedure", ["AddDepositTypes", [(await $.wv([$t3], "Dtpid", C, false)), (await $.wv([$t3], "Db", C, false))]])));
      await $.wset([$t3], "Dtpid", (await $.mcall((await $.wv([$t3], "dm_stored_programs", C, false)), "GetParameter", [0])), C);
    } else {
      await $.stmt((await $.mcall((await $.wv([$t3], "dm_stored_programs", C, false)), "CallProcedure", ["UpdDepositTypes", [(await $.wv([$t3], "Dtpid", C, false)), (await $.wv([$t3], "Db", C, false))]])));
    }
  }
  await $.set(C, "ModalResult", (await $.v(C, "MrOk")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddEditDepositTypes", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "NewDepositsFrmDepositTypes"));
    const $t5 = (await $.wv([$t4], "DepositTypes", C, false));
    await $.stmt($.wcall([$t4, $t5], "Cancel", [], C));
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
