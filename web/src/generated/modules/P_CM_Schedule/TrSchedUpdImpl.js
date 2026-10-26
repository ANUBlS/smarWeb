// Generated from TrSchedUpdImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TrSchedUpdImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "ComCtrls", "ImgList", "ToolWin", "CMCurrencyEdit", "CommonDecls", "TrancheScheduleDataModuleImpl"]);
  const C = [U];
  U.defClass("TfrmUpdTrSched", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "trchdate": {"name": "trchDate", "type": "TDateTimePicker"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "trchamount": {"name": "trchAmount", "type": "TCMCurrencyEdit"}}, {});
  U.init(async () => {
    U.var_("frmUpdTrSched", null, "TfrmUpdTrSched");
  });
  U.method("TfrmUpdTrSched", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "TrancheSheduleDataMod"));
    const $t2 = (await $.wv([$t1], "CM_SCHEDULE", C, false));
    await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["TrSchedule_Edit", [(await $.mv((await $.wv([$t1, $t2], "TrancheScheduleDataSetID", C, false)), "AsVariant")), (await $.mv((await $.wv([$t1, $t2], "trchDate", C, false)), "DateTime")), (await $.mv((await $.wv([$t1, $t2], "trchAmount", C, false)), "Value"))]], C)));
    await $.mcall((await $.wv([$t1, $t2], "Session", C, false)), "Commit", []);
    await $.mcall((await $.wv([$t1, $t2], "TrancheScheduleDataSet", C, false)), "Refresh", []);
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmUpdTrSched", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmUpdTrSched", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await L0["key"].set("\u0000");
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
