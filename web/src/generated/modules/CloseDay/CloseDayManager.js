// Generated from CloseDayManager.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CloseDayManager", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "DB", "OracleData", "ImgList", "sboapiDataModuleImpl", "SBTranslateProc", "sbCloseDayFormImpl", "ControlManagerImpl"]);
  const C = [U];
  U.defClass("TFormCloseDay", "TForm", {"panelday": {"name": "PanelDay", "type": "TPanel"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "panelbday": {"name": "PanelBday", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "sb_closeday": {"name": "SB_CloseDay", "type": "TOracleDataSet"}, "imagelistday": {"name": "ImageListDay", "type": "TImageList"}, "queryarray": {"name": "QueryArray", "type": "TQueryArray"}, "imageleft": {"name": "ImageLeft", "type": "Integer"}, "controlbutton": {"name": "ControlButton", "type": "Boolean"}}, {});
  U.fieldInit("TFormCloseDay", "queryarray", () => []);
  U.init(async () => {
    U.var_("FormCloseDay", null, "TFormCloseDay");
  });
  U.method("TFormCloseDay", "CloseDay", async function CloseDay(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "img": null, "labelindex": 0, "pluginlabel": null, "plugincheckbox": null};
  await $.set(C, "ImageLeft", 0);
  {
    const $t1 = (await $.v(C, "SB_CloseDay"));
    await $.stmt($.wcall([$t1], "CloseAll", [], C));
    await $.stmt($.wcall([$t1], "Open", [], C));
    if ($.truthy($.eq((await $.wv([$t1], "RecordCount", C, false)), 0))) {
      throw $.raise((await $.mcall((await $.wv([$t1], "Exception", C, false)), "Create", ["No pending controls !"])));
    }
    if ($.truthy($.not((await $.wcall([$t1], "Assigned", [(await $.wv([$t1], "QueryArray", C, false))], C))))) {
      await $.stmt((await $.wcall([$t1], "SetLength", [$.ref(async () => (await $.wv([$t1], "QueryArray", C, false)), async ($t2) => { await $.wset([$t1], "QueryArray", $t2, C); }), (await $.wv([$t1], "RecordCount", C, false))], C)));
    }
    { const $t3 = (await $.wv([$t1], "RecordCount", C, false));
      await $.wset([$t1], "LabelIndex", 1, { get: async () => L0["labelindex"], set: async (v) => { L0["labelindex"] = v; }, local: true });
      let $t4 = true;
      for (;;) {
        if (!$t4) { await $.wset([$t1], "LabelIndex", $.succ((await $.wv([$t1], "LabelIndex", { get: async () => L0["labelindex"], set: async (v) => { L0["labelindex"] = v; }, local: true }, false)), 1), { get: async () => L0["labelindex"], set: async (v) => { L0["labelindex"] = v; }, local: true }); }
        $t4 = false;
        if (!($.ord((await $.wv([$t1], "LabelIndex", { get: async () => L0["labelindex"], set: async (v) => { L0["labelindex"] = v; }, local: true }, false))) <= $.ord($t3))) break;
        await $.mcall((await $.wv([$t1], "Application", C, false)), "ProcessMessages", []);
        await $.wset([$t1], "PluginCheckBox", (await $.mcall((await $.wv([$t1], "TCheckBox", C, false)), "Create", [(await $.wv([$t1], "ControlManagerForm", C, false))])), { get: async () => L0["plugincheckbox"], set: async (v) => { L0["plugincheckbox"] = v; }, local: true });
        await $.mset((await $.wv([$t1], "PluginCheckBox", { get: async () => L0["plugincheckbox"], set: async (v) => { L0["plugincheckbox"] = v; }, local: true }, false)), "Parent", (await $.wv([$t1], "ControlManagerForm", C, false)));
        await $.mset((await $.wv([$t1], "PluginCheckBox", { get: async () => L0["plugincheckbox"], set: async (v) => { L0["plugincheckbox"] = v; }, local: true }, false)), "Top", $.sub($.mul((await $.wv([$t1], "DefTop", C, false)), (await $.wv([$t1], "LabelIndex", { get: async () => L0["labelindex"], set: async (v) => { L0["labelindex"] = v; }, local: true }, false))), 2));
        await $.mset((await $.wv([$t1], "PluginCheckBox", { get: async () => L0["plugincheckbox"], set: async (v) => { L0["plugincheckbox"] = v; }, local: true }, false)), "Left", $.sub((await $.wv([$t1], "DefLeft", C, false)), 20));
        await $.mset((await $.wv([$t1], "PluginCheckBox", { get: async () => L0["plugincheckbox"], set: async (v) => { L0["plugincheckbox"] = v; }, local: true }, false)), "Tag", (await $.wv([$t1], "LabelIndex", { get: async () => L0["labelindex"], set: async (v) => { L0["labelindex"] = v; }, local: true }, false)));
        await $.mset((await $.wv([$t1], "PluginCheckBox", { get: async () => L0["plugincheckbox"], set: async (v) => { L0["plugincheckbox"] = v; }, local: true }, false)), "Width", 13);
        await $.mset((await $.wv([$t1], "PluginCheckBox", { get: async () => L0["plugincheckbox"], set: async (v) => { L0["plugincheckbox"] = v; }, local: true }, false)), "Checked", (await $.wv([$t1], "True", C, false)));
        await $.mset((await $.wv([$t1], "PluginCheckBox", { get: async () => L0["plugincheckbox"], set: async (v) => { L0["plugincheckbox"] = v; }, local: true }, false)), "Name", $.add("PluginCheckBox", (await $.wcall([$t1], "IntToStr", [(await $.mv((await $.wv([$t1], "PluginCheckBox", { get: async () => L0["plugincheckbox"], set: async (v) => { L0["plugincheckbox"] = v; }, local: true }, false)), "Tag"))], C))));
        await $.mset((await $.wv([$t1], "PanelBday", C, false)), "Top", $.add((await $.mv((await $.wv([$t1], "PluginCheckBox", { get: async () => L0["plugincheckbox"], set: async (v) => { L0["plugincheckbox"] = v; }, local: true }, false)), "Top")), 25));
        await $.mset((await $.wv([$t1], "PanelBday", C, false)), "Width", (await $.mv((await $.wv([$t1], "Panelday", C, false)), "Width")));
        await $.wset([$t1], "PluginLabel", (await $.mcall((await $.wv([$t1], "TLabel", C, false)), "Create", [(await $.wv([$t1], "ControlManagerForm", C, false))])), { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true });
        await $.mset((await $.wv([$t1], "PluginLabel", { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true }, false)), "Parent", (await $.wv([$t1], "ControlManagerForm", C, false)));
        await $.mset((await $.wv([$t1], "PluginLabel", { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true }, false)), "Top", $.mul((await $.wv([$t1], "DefTop", C, false)), (await $.wv([$t1], "LabelIndex", { get: async () => L0["labelindex"], set: async (v) => { L0["labelindex"] = v; }, local: true }, false))));
        await $.mset((await $.wv([$t1], "PluginLabel", { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true }, false)), "Left", (await $.wv([$t1], "DefLeft", C, false)));
        await $.mset((await $.wv([$t1], "PluginLabel", { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true }, false)), "Tag", (await $.wv([$t1], "LabelIndex", { get: async () => L0["labelindex"], set: async (v) => { L0["labelindex"] = v; }, local: true }, false)));
        await $.mset((await $.wv([$t1], "PluginLabel", { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true }, false)), "Name", $.add("PluginLabel", (await $.wcall([$t1], "IntToStr", [(await $.mv((await $.wv([$t1], "PluginLabel", { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true }, false)), "Tag"))], C))));
        await $.mset((await $.mv((await $.wv([$t1], "PluginLabel", { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true }, false)), "Font")), "Style", [(await $.wv([$t1], "fsUnderline", C, false))]);
        await $.mset((await $.wv([$t1], "PluginLabel", { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true }, false)), "Caption", $.add($.add((await $.wcall([$t1], "IntToStr", [(await $.mv((await $.wv([$t1], "PluginLabel", { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true }, false)), "Tag"))], C)), ". "), (await $.mv((await $.wcall([$t1], "FieldByName", ["Description"], C)), "AsString"))));
        if ($.truthy($.gt((await $.mv((await $.wv([$t1], "PluginLabel", { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true }, false)), "Width")), (await $.wv([$t1], "ImageLeft", C, false))))) {
          await $.wset([$t1], "ImageLeft", (await $.mv((await $.wv([$t1], "PluginLabel", { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true }, false)), "Width")), C);
        }
        await $.mset((await $.wv([$t1], "PluginLabel", { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true }, false)), "Hint", (await $.mv((await $.wcall([$t1], "FieldByName", ["Hint"], C)), "AsString")));
        { const $t5 = await $.iset((await $.wv([$t1], "QueryArray", C, false)), [$.sub((await $.wv([$t1], "LabelIndex", { get: async () => L0["labelindex"], set: async (v) => { L0["labelindex"] = v; }, local: true }, false)), 1)], (await $.mcall((await $.wv([$t1], "SB_CloseDay", C, false)), "Create", [(await $.wv([$t1], "ControlManagerForm", C, false))]))); if ($t5 !== undefined) { await $.wset([$t1], "QueryArray", $t5, C); } }
        await $.mset((await $.idx((await $.wv([$t1], "QueryArray", C, false)), [$.sub((await $.wv([$t1], "LabelIndex", { get: async () => L0["labelindex"], set: async (v) => { L0["labelindex"] = v; }, local: true }, false)), 1)])), "Session", (await $.mv((await $.wv([$t1], "SB_CloseDay", C, false)), "Session")));
        await $.mset((await $.mv((await $.idx((await $.wv([$t1], "QueryArray", C, false)), [$.sub((await $.wv([$t1], "LabelIndex", { get: async () => L0["labelindex"], set: async (v) => { L0["labelindex"] = v; }, local: true }, false)), 1)])), "SQL")), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["Query"], C)), "AsString")));
        await $.stmt($.wcall([$t1], "Next", [], C));
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormCloseDay", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "CloseDay", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
