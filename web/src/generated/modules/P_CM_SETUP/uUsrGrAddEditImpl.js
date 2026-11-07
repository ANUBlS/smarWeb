// Generated from uUsrGrAddEditImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("uUsrGrAddEditImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "Mask", "DBCtrlsEh", "DB", "Buttons", "DBGridEh", "DBLookupEh", "DBCtrls", "CommonDecls", "uUsrGrCatImpl", "uUsrGroupDMImpl"]);
  const C = [U];
  U.defClass("TUsrGrAddEditForm", "TForm", {"label1": {"name": "Label1", "type": "TLabel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "label2": {"name": "Label2", "type": "TLabel"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBEditEh"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbediteh3": {"name": "DBEditEh3", "type": "TDBEditEh"}}, {});
  U.init(async () => {
    U.var_("UsrGrAddEditForm", null, "TUsrGrAddEditForm");
  });
  U.method("TUsrGrAddEditForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TUsrGrAddEditForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TUsrGrAddEditForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "UsrGrDataMod"));
    const $t2 = (await $.wv([$t1], "UserGroupsDataSet", C, false));
    await $.stmt($.wcall([$t1, $t2], "Post", [], C));
    if ($.truthy($.eq((await $.wv([$t1, $t2], "edit_insert", C, false)), (await $.wv([$t1, $t2], "true", C, false))))) {
      await $.stmt($.wcall([$t1, $t2], "Refresh", [], C));
      await $.stmt($.wcall([$t1, $t2], "Last", [], C));
    }
    if ($.truthy($.eq((await $.wv([$t1, $t2], "edit_insert", C, false)), (await $.wv([$t1, $t2], "false", C, false))))) {
      await $.wset([$t1, $t2], "id", (await $.mv((await $.mv((await $.wv([$t1, $t2], "UsrGrDataMod", C, false)), "UserGroupsDataSetID")), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
      await $.stmt((await $.wcall([$t1, $t2], "Locate", ["ID", (await $.wv([$t1, $t2], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), []], C)));
    }
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TUsrGrAddEditForm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.wobj(C, "UsrGrDataMod"));
    const $t4 = (await $.wv([$t3], "UserGroupsDataSet", C, false));
    await $.stmt($.wcall([$t3, $t4], "Cancel", [], C));
    await $.stmt($.wcall([$t3, $t4], "Refresh", [], C));
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
