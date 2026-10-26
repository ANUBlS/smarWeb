// Generated from FrmItemaddImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmItemaddImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "Dmbudgetimpl"]);
  const C = [U];
  U.defClass("TFrmItemadd", "TForm", {"label1": {"name": "Label1", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "ok": {"name": "Ok", "type": "TButton"}, "cancel": {"name": "Cancel", "type": "TButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbmemo1": {"name": "DBMemo1", "type": "TDBMemo"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbmemo2": {"name": "DBMemo2", "type": "TDBMemo"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dbmemo3": {"name": "DBMemo3", "type": "TDBMemo"}}, {});
  U.init(async () => {
    U.var_("FrmItemadd", null, "TFrmItemadd");
  });
  U.method("TFrmItemadd", "CancelClick", async function CancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmItemadd", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmItemadd", "OkClick", async function OkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMBudget")), "AddItems")), "Post", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
