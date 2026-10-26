// Generated from ArRestsHistoryImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ArRestsHistoryImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "Grids", "DBGridEh", "CMExcelExport", "DBGridEhGrouping", "GridsEh", "ArStatementDataModule"]);
  const C = [U];
  U.defClass("TRestForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "eexport": {"name": "EExport", "type": "TCMExcelExport"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}}, {});
  U.init(async () => {
    U.var_("RestForm", null, "TRestForm");
  });
  U.method("TRestForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TRestForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TRestForm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "EExport"));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.wv([$t1], "DBGridEh1", C, false)), "DataSource")), "DataSet")), "RecordCount")), 0))) {
      await $.stmt((await $.wcall([$t1], "ShowMessage", ["Heç bir məlumat yoxdur"], C)));
      return L0.result;
    }
    await $.mcall((await $.mv((await $.mv((await $.wv([$t1], "DBGridEh1", C, false)), "DataSource")), "DataSet")), "Last", []);
    await $.stmt($.wcall([$t1], "Connect", [], C));
    await $.stmt((await $.wcall([$t1], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t1], "DBGridEh1", C, false)), "DataSource")), "DataSet")), "qaliqlar", (await $.wv([$t1], "True", C, false))], C)));
    await $.stmt($.wcall([$t1], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
