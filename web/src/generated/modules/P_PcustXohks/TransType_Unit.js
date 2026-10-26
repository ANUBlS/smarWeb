// Generated from TransType_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TransType_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "StdCtrls", "Buttons", "ComCtrls", "ImgList", "XohksPayment_Det"]);
  const C = [U];
  U.defClass("TTransCodeForm", "TForm", {"but_ok": {"name": "But_Ok", "type": "TBitBtn"}, "but_cancel": {"name": "But_cancel", "type": "TBitBtn"}, "treeview1": {"name": "TreeView1", "type": "TTreeView"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "btnok": {"name": "BtnOK", "type": "TButton"}, "btncancel": {"name": "BtnCancel", "type": "TButton"}, "typecode": {"name": "typecode", "type": "Integer"}, "typetext": {"name": "typetext", "type": "String"}}, {});
  U.init(async () => {
    U.var_("TransCodeForm", null, "TTransCodeForm");
  });
  U.method("TTransCodeForm", "But_cancelClick", async function But_cancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransCodeForm", "But_OkClick", async function But_OkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.v(C, "typecode")), 2)))) {
    await $.mset((await $.mv((await $.v(C, "FormPayment_Det")), "Edit_TransCode")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mv((await $.v(C, "TreeView1")), "Selected")), "StateIndex"))])));
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransCodeForm", "TreeView1Changing", async function TreeView1Changing(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "node": $.copyArg(p1), "allowchange": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "node"]);
  await $.set(C, "typecode", (await $.mv(L0["node"], "ImageIndex")));
  await $.set(C, "typetext", (await $.mv(L0["node"], "Text")));
  return L0.result;
}, {"params": ["Sender", "Node", "AllowChange"], "kind": "procedure", "ptypes": ["TObject", "TTreeNode", "Boolean"]});
  U.method("TTransCodeForm", "FormKeyUp", async function FormKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "Vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TTransCodeForm", "TreeView1DblClick", async function TreeView1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "But_Ok")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
