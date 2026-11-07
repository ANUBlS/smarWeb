// Generated from admGroupAddImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("admGroupAddImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "Buttons", "ActnList", "admDataModule", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TfrmGroupAdd", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "edgroupname": {"name": "edGroupName", "type": "TEdit"}, "cbgrouptype": {"name": "cbGroupType", "type": "TDBLookupComboboxEh"}, "eddescription": {"name": "edDescription", "type": "TEdit"}, "btnaddgroup": {"name": "btnAddGroup", "type": "TSpeedButton"}, "btnclose": {"name": "btnClose", "type": "TSpeedButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "actsgroupadd": {"name": "actsGroupAdd", "type": "TActionList"}, "actaddgroup": {"name": "actAddGroup", "type": "TAction"}}, {});
  U.init(async () => {
    U.var_("frmGroupAdd", null, "TfrmGroupAdd");
  });
  U.method("TfrmGroupAdd", "edGroupNameKeyPress", async function edGroupNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmGroupAdd", "actAddGroupExecute", async function actAddGroupExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "admDM"));
    const $t2 = (await $.wv([$t1], "CM_ADMIN", C, false));
    await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["grmaddgroup", [(await $.mv((await $.wv([$t1, $t2], "edGroupName", C, false)), "Text")), (await $.mv((await $.wv([$t1, $t2], "GroupTypeDataSetID", C, false)), "AsInteger")), (await $.mv((await $.wv([$t1, $t2], "edDescription", C, false)), "Text"))]], C)));
    await $.stmt((await $.wcall([$t1, $t2], "RefreshDataSet", [(await $.wv([$t1, $t2], "GroupsDataSet", C, false))], C)));
    await $.stmt((await $.wcall([$t1, $t2], "RefreshDataSet", [(await $.wv([$t1, $t2], "GroupTypeDataSet", C, false))], C)));
    await $.mset((await $.wv([$t1, $t2], "edGroupName", C, false)), "Text", "");
    await $.mset((await $.wv([$t1, $t2], "edDescription", C, false)), "Text", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmGroupAdd", "edGroupNameChange", async function edGroupNameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.wobj(C, "admDM"));
    await $.mset((await $.wv([$t3], "actAddGroup", C, false)), "Enabled", (await $.and_(($.ne((await $.mv((await $.wv([$t3], "edGroupName", C, false)), "Text")), "")), async () => ($.ge((await $.mv((await $.wv([$t3], "GroupTypeDataSetID", C, false)), "AsInteger")), 0)))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmGroupAdd", "btnCloseClick", async function btnCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmGroupAdd", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmGroupAdd", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt((await $.call(C, "btnCloseClick", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TfrmGroupAdd", "edGroupNameKeyUp", async function edGroupNameKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TfrmGroupAdd", "cbGroupTypeKeyUp", async function cbGroupTypeKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  await $.stmt((await $.call(C, "ShowMessage", [(await $.call(C, "IntToStr", [(await L0["key"].get())]))])));
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TfrmGroupAdd", "edDescriptionKeyUp", async function edDescriptionKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.and_(($.eq((await L0["key"].get()), (await $.v(C, "VK_RETURN")))), async () => ((await $.mv((await $.v(C, "actAddGroup")), "Enabled"))))))) {
    await $.stmt((await $.call(C, "actAddGroupExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TfrmGroupAdd", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "SelectNext", [(await $.v(C, "ActiveControl")), true, true])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
