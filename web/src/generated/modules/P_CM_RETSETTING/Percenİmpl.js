// Generated from Percenİmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Percenİmpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "StdCtrls", "XDBGrids", "ExtCtrls", "DBCtrls", "XDBCtrls", "Dmretsetitnq"]);
  const C = [U];
  U.defClass("TFrmPercen", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xdbnavigator1": {"name": "XDBNavigator1", "type": "TXDBNavigator"}}, {});
  U.init(async () => {
    U.var_("FrmPercen", null, "TFrmPercen");
  });
  U.method("TFrmPercen", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmPercen", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "DmRt"));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPercen", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "VK_RETURN")), 13))) {
    await $.mcall((await $.v(C, "FrmPercen")), "close", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
