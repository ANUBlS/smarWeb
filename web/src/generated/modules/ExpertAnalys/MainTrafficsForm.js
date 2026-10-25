// Generated from MainTrafficsForm.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("MainTrafficsForm", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Grids", "DBGrids", "Mask", "DBCtrls", "ExpertDataModule", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TMainTraffics", "TForm", {"trafficsviewer": {"name": "TrafficsViewer", "type": "TDBGrid"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}}, {});
  U.init(async () => {
    U.var_("MainTraffics", null, "TMainTraffics");
  });
  U.method("TMainTraffics", "MouseWheelHandler", async function MouseWheelHandler(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TMainTraffics", "MouseWheelHandler", null, arguments);
  if ($.truthy((await $.mv((await $.v(C, "TrafficsViewer")), "Focused")))) {
    {
      const $t1 = (await $.call(C, "TCMMouseWheel", [(await L0["message"].get())]));
      const $t2 = (await $.mv((await $.mv((await $.wv([$t1], "TrafficsViewer", C, false)), "DataSource")), "DataSet"));
      if ($.truthy($.lt((await $.wv([$t1, $t2], "WheelDelta", C, false)), 0))) {
        await $.stmt($.wcall([$t1, $t2], "Next", [], C));
      } else {
        await $.stmt($.wcall([$t1, $t2], "Prior", [], C));
      }
    }
  }
  await $.mcall((await $.v(C, "TrafficsViewer")), "Repaint", []);
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TMainTraffics", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainTraffics", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy(($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  return U;
}
