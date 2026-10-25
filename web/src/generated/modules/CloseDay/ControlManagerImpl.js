// Generated from ControlManagerImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ControlManagerImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Db", "OracleData", "ExtCtrls", "Oracle", "ImgList", "Grids", "DBGrids", "sboapiDataModuleImpl", "SBTranslateProc", "sbCloseDayFormImpl"]);
  const C = [U];
  U.defClass("TControlManagerForm", "TForm", {"controldata": {"name": "ControlData", "type": "TOracleDataSet"}, "panelcheck": {"name": "PanelCheck", "type": "TPanel"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "panelbuttons": {"name": "PanelButtons", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "queryarray": {"name": "QueryArray", "type": "TQueryArray"}, "imageleft": {"name": "ImageLeft", "type": "Integer"}, "controlbutton": {"name": "ControlButton", "type": "Boolean"}}, {});
  U.init(async () => {
    U.const("DefLeft", 30);
    U.const("DefTop", 35);
    U.var_("ControlManagerForm", null, "TControlManagerForm");
  });
  U.method("TControlManagerForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Control", []));
  await $.set(C, "ControlButton", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TControlManagerForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  await $.set(C, "ControlButton", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TControlManagerForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t1 = (await $.call(C, "High", [(await $.v(C, "QueryArray"))]));
    L0["index"] = (await $.call(C, "Low", [(await $.v(C, "QueryArray"))]));
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["index"] = $.succ(L0["index"], 1); }
      $t2 = false;
      if (!($.ord(L0["index"]) <= $.ord($t1))) break;
      await $.mcall((await $.idx((await $.v(C, "QueryArray")), [L0["index"]])), "Free", []);
      await $.tick();
    }
  }
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "QueryArray"))])))) {
    await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "QueryArray")), async ($t3) => { await $.set(C, "QueryArray", $t3); }), 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TControlManagerForm", "Click_", async function Click_(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.call(C, "TCheckBox", [L0["sender"]]));
    await $.stmt((await $.wcall([$t4], "ShowMessage", [(await $.mv((await $.mv((await $.idx((await $.wv([$t4], "QueryArray", C, false)), [$.sub((await $.wv([$t4], "Tag", C, false)), 1)])), "SQL")), "Text"))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TControlManagerForm", "LoadPlugin", async function LoadPlugin(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "img": null, "labelindex": 0, "pluginlabel": null, "plugincheckbox": null};
  await $.set(C, "ImageLeft", 0);
  {
    const $t5 = (await $.v(C, "ControlData"));
    await $.stmt($.wcall([$t5], "CloseAll", [], C));
    await $.stmt($.wcall([$t5], "Open", [], C));
    if ($.truthy($.eq((await $.wv([$t5], "RecordCount", C, false)), 0))) {
      throw $.raise((await $.mcall((await $.wv([$t5], "Exception", C, false)), "Create", ["No pending controls !"])));
    }
    if ($.truthy($.not((await $.wcall([$t5], "Assigned", [(await $.wv([$t5], "QueryArray", C, false))], C))))) {
      await $.stmt((await $.wcall([$t5], "SetLength", [$.ref(async () => (await $.wv([$t5], "QueryArray", C, false)), async ($t6) => { await $.wset([$t5], "QueryArray", $t6, C); }), (await $.wv([$t5], "RecordCount", C, false))], C)));
    }
    { const $t7 = (await $.wv([$t5], "RecordCount", C, false));
      await $.wset([$t5], "LabelIndex", 1, { get: async () => L0["labelindex"], set: async (v) => { L0["labelindex"] = v; }, local: true });
      let $t8 = true;
      for (;;) {
        if (!$t8) { await $.wset([$t5], "LabelIndex", $.succ((await $.wv([$t5], "LabelIndex", { get: async () => L0["labelindex"], set: async (v) => { L0["labelindex"] = v; }, local: true }, false)), 1), { get: async () => L0["labelindex"], set: async (v) => { L0["labelindex"] = v; }, local: true }); }
        $t8 = false;
        if (!($.ord((await $.wv([$t5], "LabelIndex", { get: async () => L0["labelindex"], set: async (v) => { L0["labelindex"] = v; }, local: true }, false))) <= $.ord($t7))) break;
        await $.mcall((await $.wv([$t5], "Application", C, false)), "ProcessMessages", []);
        await $.wset([$t5], "PluginCheckBox", (await $.mcall((await $.wv([$t5], "TCheckBox", C, false)), "Create", [(await $.wv([$t5], "ControlManagerForm", C, false))])), { get: async () => L0["plugincheckbox"], set: async (v) => { L0["plugincheckbox"] = v; }, local: true });
        await $.mset((await $.wv([$t5], "PluginCheckBox", { get: async () => L0["plugincheckbox"], set: async (v) => { L0["plugincheckbox"] = v; }, local: true }, false)), "Parent", (await $.wv([$t5], "ControlManagerForm", C, false)));
        await $.mset((await $.wv([$t5], "PluginCheckBox", { get: async () => L0["plugincheckbox"], set: async (v) => { L0["plugincheckbox"] = v; }, local: true }, false)), "Top", $.sub($.mul((await $.wv([$t5], "DefTop", C, false)), (await $.wv([$t5], "LabelIndex", { get: async () => L0["labelindex"], set: async (v) => { L0["labelindex"] = v; }, local: true }, false))), 2));
        await $.mset((await $.wv([$t5], "PluginCheckBox", { get: async () => L0["plugincheckbox"], set: async (v) => { L0["plugincheckbox"] = v; }, local: true }, false)), "Left", $.sub((await $.wv([$t5], "DefLeft", C, false)), 20));
        await $.mset((await $.wv([$t5], "PluginCheckBox", { get: async () => L0["plugincheckbox"], set: async (v) => { L0["plugincheckbox"] = v; }, local: true }, false)), "Tag", (await $.wv([$t5], "LabelIndex", { get: async () => L0["labelindex"], set: async (v) => { L0["labelindex"] = v; }, local: true }, false)));
        await $.mset((await $.wv([$t5], "PluginCheckBox", { get: async () => L0["plugincheckbox"], set: async (v) => { L0["plugincheckbox"] = v; }, local: true }, false)), "Width", 13);
        await $.mset((await $.wv([$t5], "PluginCheckBox", { get: async () => L0["plugincheckbox"], set: async (v) => { L0["plugincheckbox"] = v; }, local: true }, false)), "Checked", (await $.wv([$t5], "True", C, false)));
        await $.mset((await $.wv([$t5], "PluginCheckBox", { get: async () => L0["plugincheckbox"], set: async (v) => { L0["plugincheckbox"] = v; }, local: true }, false)), "Name", $.add("PluginCheckBox", (await $.wcall([$t5], "IntToStr", [(await $.mv((await $.wv([$t5], "PluginCheckBox", { get: async () => L0["plugincheckbox"], set: async (v) => { L0["plugincheckbox"] = v; }, local: true }, false)), "Tag"))], C))));
        await $.mset((await $.wv([$t5], "PanelButtons", C, false)), "Top", $.add((await $.mv((await $.wv([$t5], "PluginCheckBox", { get: async () => L0["plugincheckbox"], set: async (v) => { L0["plugincheckbox"] = v; }, local: true }, false)), "Top")), 25));
        await $.mset((await $.wv([$t5], "PanelButtons", C, false)), "Width", (await $.mv((await $.wv([$t5], "PanelCheck", C, false)), "Width")));
        await $.wset([$t5], "PluginLabel", (await $.mcall((await $.wv([$t5], "TLabel", C, false)), "Create", [(await $.wv([$t5], "ControlManagerForm", C, false))])), { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true });
        await $.mset((await $.wv([$t5], "PluginLabel", { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true }, false)), "Parent", (await $.wv([$t5], "ControlManagerForm", C, false)));
        await $.mset((await $.wv([$t5], "PluginLabel", { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true }, false)), "Top", $.mul((await $.wv([$t5], "DefTop", C, false)), (await $.wv([$t5], "LabelIndex", { get: async () => L0["labelindex"], set: async (v) => { L0["labelindex"] = v; }, local: true }, false))));
        await $.mset((await $.wv([$t5], "PluginLabel", { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true }, false)), "Left", (await $.wv([$t5], "DefLeft", C, false)));
        await $.mset((await $.wv([$t5], "PluginLabel", { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true }, false)), "Tag", (await $.wv([$t5], "LabelIndex", { get: async () => L0["labelindex"], set: async (v) => { L0["labelindex"] = v; }, local: true }, false)));
        await $.mset((await $.wv([$t5], "PluginLabel", { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true }, false)), "Name", $.add("PluginLabel", (await $.wcall([$t5], "IntToStr", [(await $.mv((await $.wv([$t5], "PluginLabel", { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true }, false)), "Tag"))], C))));
        await $.mset((await $.mv((await $.wv([$t5], "PluginLabel", { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true }, false)), "Font")), "Style", [(await $.wv([$t5], "fsUnderline", C, false))]);
        await $.mset((await $.wv([$t5], "PluginLabel", { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true }, false)), "Caption", $.add($.add((await $.wcall([$t5], "IntToStr", [(await $.mv((await $.wv([$t5], "PluginLabel", { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true }, false)), "Tag"))], C)), ". "), (await $.mv((await $.wcall([$t5], "FieldByName", ["Description"], C)), "AsString"))));
        if ($.truthy($.gt((await $.mv((await $.wv([$t5], "PluginLabel", { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true }, false)), "Width")), (await $.wv([$t5], "ImageLeft", C, false))))) {
          await $.wset([$t5], "ImageLeft", (await $.mv((await $.wv([$t5], "PluginLabel", { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true }, false)), "Width")), C);
        }
        await $.mset((await $.wv([$t5], "PluginLabel", { get: async () => L0["pluginlabel"], set: async (v) => { L0["pluginlabel"] = v; }, local: true }, false)), "Hint", (await $.mv((await $.wcall([$t5], "FieldByName", ["Hint"], C)), "AsString")));
        { const $t9 = await $.iset((await $.wv([$t5], "QueryArray", C, false)), [$.sub((await $.wv([$t5], "LabelIndex", { get: async () => L0["labelindex"], set: async (v) => { L0["labelindex"] = v; }, local: true }, false)), 1)], (await $.mcall((await $.wv([$t5], "TOracleDataSet", C, false)), "Create", [(await $.wv([$t5], "ControlManagerForm", C, false))]))); if ($t9 !== undefined) { await $.wset([$t5], "QueryArray", $t9, C); } }
        await $.mset((await $.idx((await $.wv([$t5], "QueryArray", C, false)), [$.sub((await $.wv([$t5], "LabelIndex", { get: async () => L0["labelindex"], set: async (v) => { L0["labelindex"] = v; }, local: true }, false)), 1)])), "Session", (await $.mv((await $.wv([$t5], "ControlData", C, false)), "Session")));
        await $.mset((await $.mv((await $.idx((await $.wv([$t5], "QueryArray", C, false)), [$.sub((await $.wv([$t5], "LabelIndex", { get: async () => L0["labelindex"], set: async (v) => { L0["labelindex"] = v; }, local: true }, false)), 1)])), "SQL")), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["Query"], C)), "AsString")));
        await $.stmt($.wcall([$t5], "Next", [], C));
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TControlManagerForm", "Control", async function Control(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "img": null, "index": 0, "queryindex": 0};
  await $.stmt($.call(C, "DestroyImages", []));
  { const $t10 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["index"] = 0;
    let $t11 = true;
    for (;;) {
      if (!$t11) { L0["index"] = $.succ(L0["index"], 1); }
      $t11 = false;
      if (!($.ord(L0["index"]) <= $.ord($t10))) break;
      if ($.truthy((await $.and_(($.is_((await $.idx((await $.v(C, "Components")), [L0["index"]])), "TCheckBox")), async () => ($.ne((await $.mv((await $.idx((await $.v(C, "Components")), [L0["index"]])), "Tag")), (-(1)))))))) {
        if ($.truthy((await $.mv(((await $.idx((await $.v(C, "Components")), [L0["index"]]))), "Checked")))) {
          await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
          await $.mcall((await $.idx((await $.v(C, "QueryArray")), [$.sub((await $.mv(((await $.idx((await $.v(C, "Components")), [L0["index"]]))), "Tag")), 1)])), "CloseAll", []);
          await $.mcall((await $.idx((await $.v(C, "QueryArray")), [$.sub((await $.mv(((await $.idx((await $.v(C, "Components")), [L0["index"]]))), "Tag")), 1)])), "Open", []);
          L0["img"] = (await $.mcall((await $.v(C, "TImage")), "Create", [(await $.v(C, "ControlManagerForm"))]));
          await $.mset(L0["img"], "Parent", (await $.v(C, "ControlManagerForm")));
          await $.mset(L0["img"], "AutoSize", true);
          await $.mset(L0["img"], "Top", $.mul((await $.v(C, "DefTop")), (await $.mv(((await $.idx((await $.v(C, "Components")), [L0["index"]]))), "Tag"))));
          await $.mset(L0["img"], "Left", $.add((await $.v(C, "ImageLeft")), 50));
          await $.mset(L0["img"], "Name", $.add("Image", (await $.call(C, "IntToStr", [(await $.mv(((await $.idx((await $.v(C, "Components")), [L0["index"]]))), "Tag"))]))));
          await $.mset((await $.v(C, "PanelButtons")), "Width", (await $.mv((await $.v(C, "PanelCheck")), "Width")));
          await $.stmt((await $.mcall((await $.v(C, "ImageList")), "GetIcon", [(await $.call(C, "Odd_", [(await $.mv((await $.idx((await $.v(C, "QueryArray")), [$.sub((await $.mv(((await $.idx((await $.v(C, "Components")), [L0["index"]]))), "Tag")), 1)])), "RecordCount"))])), (await $.mv((await $.mv(L0["img"], "Picture")), "Icon"))])));
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TControlManagerForm", "DestroyImages", async function DestroyImages(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "index": 0};
  { const $t12 = 0;
    L0["index"] = $.sub((await $.v(C, "ComponentCount")), 1);
    let $t13 = true;
    for (;;) {
      if (!$t13) { L0["index"] = $.succ(L0["index"], -1); }
      $t13 = false;
      if (!($.ord(L0["index"]) >= $.ord($t12))) break;
      if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["index"]])), "TImage")))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["index"]])), "Free", []);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TControlManagerForm", "DestroyControls", async function DestroyControls(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "index": 0};
  { const $t14 = 0;
    L0["index"] = $.sub((await $.v(C, "ComponentCount")), 1);
    let $t15 = true;
    for (;;) {
      if (!$t15) { L0["index"] = $.succ(L0["index"], -1); }
      $t15 = false;
      if (!($.ord(L0["index"]) >= $.ord($t14))) break;
      if ($.truthy((await $.and_(((await $.or_(($.is_((await $.idx((await $.v(C, "Components")), [L0["index"]])), "TLabel")), async () => ($.is_((await $.idx((await $.v(C, "Components")), [L0["index"]])), "TCheckBox"))))), async () => ($.ne((await $.mv((await $.idx((await $.v(C, "Components")), [L0["index"]])), "Tag")), (-(1)))))))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["index"]])), "Free", []);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TControlManagerForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "LoadPlugin", []));
  await $.set(C, "ControlButton", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TControlManagerForm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "DestroyControls", []));
  await $.stmt($.call(C, "DestroyImages", []));
  await $.stmt($.call(C, "LoadPlugin", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TControlManagerForm", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ischecked": false, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["ischecked"] = (await $.mv((await $.call(C, "TCheckBox", [L0["sender"]])), "Checked"));
  { const $t16 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["index"] = 0;
    let $t17 = true;
    for (;;) {
      if (!$t17) { L0["index"] = $.succ(L0["index"], 1); }
      $t17 = false;
      if (!($.ord(L0["index"]) <= $.ord($t16))) break;
      if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["index"]])), "TCheckBox")))) {
        await $.mset((await $.idx((await $.v(C, "Components")), [L0["index"]])), "Checked", L0["ischecked"]);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TControlManagerForm", "Odd_", async function Odd_(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy($.eq(L0["value"], 0))) {
    L0["result"] = L0["value"];
  } else {
    L0["result"] = 1;
  }
  return L0.result;
}, {"params": ["Value"], "kind": "function", "ptypes": ["Longint"]});
  U.method("TControlManagerForm", "FormResize", async function FormResize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
