// Generated from TrafficsFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TrafficsFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "Grids", "DBGrids", "StdCtrls", "DBCtrls", "Mask", "Buttons", "ActnList", "Menus", "ImgList", "ExpertDataModule", "ExportFormUnit", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TTrafficsForm", "TForm", {"trafficsviewer": {"name": "TrafficsViewer", "type": "TDBGrid"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}}, {});
  U.init(async () => {
    U.var_("TrafficsForm", null, "TTrafficsForm");
  });
  U.method("TTrafficsForm", "MouseWheelHandler", async function MouseWheelHandler(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TTrafficsForm", "MouseWheelHandler", null, arguments);
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
  U.method("TTrafficsForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrafficsForm", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy(($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TTrafficsForm", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.idx((await $.mv((await $.v(C, "TrafficsViewer")), "Columns")), [0]));
    await $.wset([$t3], "Visible", (await $.mv((await $.wcall([$t3], "TCheckBox", [(await $.wv([$t3], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "Checked")), C);
    await $.wset([$t3], "Width", 40, C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrafficsForm", "CheckBox2Click", async function CheckBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.idx((await $.mv((await $.v(C, "TrafficsViewer")), "Columns")), [1]));
    await $.wset([$t4], "Visible", (await $.mv((await $.wcall([$t4], "TCheckBox", [(await $.wv([$t4], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "Checked")), C);
    await $.wset([$t4], "Width", 55, C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrafficsForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "TrafficsViewer")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.mcall((await $.v(C, "ExportForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
