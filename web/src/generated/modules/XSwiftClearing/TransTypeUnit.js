// Generated from TransTypeUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TransTypeUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "StdCtrls", "Buttons", "ComCtrls", "ImgList", "Payment_Det"]);
  const C = [U];
  U.defClass("TTransCodeForm", "TForm", {"but_ok": {"name": "But_Ok", "type": "TBitBtn"}, "but_cancel": {"name": "But_cancel", "type": "TBitBtn"}, "treeview1": {"name": "TreeView1", "type": "TTreeView"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "typecode": {"name": "typecode", "type": "Integer"}, "typetext": {"name": "typetext", "type": "String"}}, {});
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
    await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Edit_TransCode")), "Text", (await $.v(C, "typetext")));
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
  return U;
}
