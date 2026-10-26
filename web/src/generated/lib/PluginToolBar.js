// Generated from PluginToolBar.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PluginToolBar", ["Windows", "SysUtils", "Classes", "Controls", "Graphics", "Menus", "IniFiles", "ImgList", "PluginIni", "PluginDecls", "ComCtrls", "Sequence", "Dialogs"]);
  const C = [U];
  U.defClass("TPluginToolBar", "TToolBar", {"fmenuini": {"name": "FMenuIni", "type": "TMenuIni"}, "plugins": {"name": "Plugins", "type": "TList"}, "fimagelist": {"name": "FImageList", "type": "TImageList"}, "sequence": {"name": "Sequence", "type": "TSequence"}, "factive": {"name": "FActive", "type": "Boolean"}, "fbeforeloadplugin": {"name": "FBeforeLoadPlugin", "type": "TPluginBeforeLoadEvent"}, "fpluginscnt": {"name": "FPluginsCnt", "type": "Integer"}}, {"beforeloadplugin": {"name": "BeforeLoadPlugin", "read": "FBeforeLoadPlugin", "write": "FBeforeLoadPlugin"}, "menuini": {"name": "MenuIni", "read": "GetMenuIni", "write": "SetMenuIni"}, "active": {"name": "Active", "read": "GetActive", "write": "SetActive"}});
  U.init(async () => {
    U.const("rsUnassigned", "Təyin olunmayıb");
  });
  U.method("TPluginToolBar", "Notification", async function Notification(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"acomponent": $.copyArg(p0), "operation": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["acomponent", "operation"]);
  await $.inherited(Self, "TPluginToolBar", "Notification", [L0["acomponent"], L0["operation"]], arguments);
  if ($.truthy($.eq(L0["operation"], (await $.v(C, "opRemove"))))) {
    if ($.truthy(($.eq(L0["acomponent"], (await $.v(C, "MenuIni")))))) {
      await $.set(C, "MenuIni", null);
    }
  }
  return L0.result;
}, {"params": ["AComponent", "Operation"], "kind": "procedure", "ptypes": ["TComponent", "TOperation"]});
  U.method("TPluginToolBar", "SetMenuIni", async function SetMenuIni(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FMenuIni", L0["value"]);
  if ($.truthy((await $.and_(($.ne((await $.v(C, "FMenuIni")), null)), async () => ($.eq($.mul([(await $.v(C, "csLoading"))], (await $.v(C, "ComponentState"))), [])))))) {
    await $.stmt((await $.mcall((await $.v(C, "FMenuIni")), "FreeNotification", [Self])));
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TMenuIni"]});
  U.method("TPluginToolBar", "GetMenuIni", async function GetMenuIni(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "FMenuIni"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPluginToolBar", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TPluginToolBar", "Create", [L0["aowner"]], arguments);
  await $.set(C, "Plugins", (await $.mv((await $.v(C, "TList")), "Create")));
  await $.set(C, "FPluginsCnt", 0);
  if ($.truthy((await $.and_(($.eq((await $.v(C, "Images")), null)), async () => ($.eq($.mul([(await $.v(C, "csDesigning"))], (await $.v(C, "ComponentState"))), [])))))) {
    await $.set(C, "FImageList", (await $.mcall((await $.v(C, "TImageList")), "Create", [null])));
    await $.set(C, "Images", (await $.v(C, "FImageList")));
  }
  await $.set(C, "Sequence", (await $.mcall((await $.v(C, "TSequence")), "Create", [Self])));
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TPluginToolBar", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "Plugins")), "Free", []);
  await $.mcall((await $.v(C, "Sequence")), "Free", []);
  await $.inherited(Self, "TPluginToolBar", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TPluginToolBar", "StreamToString", async function StreamToString(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"stream": $.copyArg(p0), result: '', "index": 0, "ch": 0, "count": 0};
  await $.fixArgs(L0, ["stream"]);
  L0["result"] = "";
  await $.stmt((await $.mcall(L0["stream"], "Seek", [0, (await $.v(C, "soFromBeginning"))])));
  L0["count"] = (await $.mv(L0["stream"], "Size"));
  { const $t1 = $.sub(L0["count"], 1);
    L0["index"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["index"] = $.succ(L0["index"], 1); }
      $t2 = false;
      if (!($.ord(L0["index"]) <= $.ord($t1))) break;
      await $.stmt((await $.mcall(L0["stream"], "Read", [$.ref(async () => L0["ch"], async ($t3) => { L0["ch"] = $t3; }), 1])));
      L0["result"] = $.add($.add(L0["result"], (await $.call(C, "IntToStr", [L0["ch"]]))), " ");
      await $.tick();
    }
  }
  await $.stmt((await $.mcall((await $.v(C, "System")), "Delete", [$.ref(async () => L0["result"], async ($t4) => { L0["result"] = $t4; }), (await $.call(C, "Length", [L0["result"]])), 1])));
  return L0.result;
}, {"params": ["Stream"], "kind": "function", "ptypes": ["TMemoryStream"]});
  U.method("TPluginToolBar", "SavePluginIcon", async function SavePluginIcon(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"btn": $.copyArg(p0), "icon": $.copyArg(p1), result: undefined, "stream": null, "section": '', "ident": '', "iconstr": ''};
  await $.fixArgs(L0, ["btn", "icon"]);
  L0["stream"] = (await $.mv((await $.v(C, "TMemoryStream")), "Create"));
  {
    const $t5 = L0["icon"];
    try {
      await $.stmt((await $.mcall((await $.wv([$t5], "Icon", { get: async () => L0["icon"], set: async (v) => { L0["icon"] = v; }, local: true }, false)), "SaveToStream", [(await $.wv([$t5], "Stream", { get: async () => L0["stream"], set: async (v) => { L0["stream"] = v; }, local: true }, false))])));
      await $.wset([$t5], "Section", (await $.wcall([$t5], "Format", ["ToolBar\\ToolButton%d", [$.sub((await $.wv([$t5], "FPluginsCnt", C, false)), (await $.mv((await $.wv([$t5], "Btn", { get: async () => L0["btn"], set: async (v) => { L0["btn"] = v; }, local: true }, false)), "Tag")))]], C)), { get: async () => L0["section"], set: async (v) => { L0["section"] = v; }, local: true });
      await $.wset([$t5], "Ident", (await $.wv([$t5], "CMenuIcon", C, false)), { get: async () => L0["ident"], set: async (v) => { L0["ident"] = v; }, local: true });
      await $.wset([$t5], "IconStr", (await $.wcall([$t5], "StreamToString", [(await $.wv([$t5], "Stream", { get: async () => L0["stream"], set: async (v) => { L0["stream"] = v; }, local: true }, false))], C)), { get: async () => L0["iconstr"], set: async (v) => { L0["iconstr"] = v; }, local: true });
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t5], "MenuIni", C, false)), "Location")), "WriteString", [(await $.wv([$t5], "Section", { get: async () => L0["section"], set: async (v) => { L0["section"] = v; }, local: true }, false)), (await $.wv([$t5], "Ident", { get: async () => L0["ident"], set: async (v) => { L0["ident"] = v; }, local: true }, false)), (await $.wv([$t5], "IconStr", { get: async () => L0["iconstr"], set: async (v) => { L0["iconstr"] = v; }, local: true }, false))])));
    } finally {
      await $.mcall((await $.wv([$t5], "Stream", { get: async () => L0["stream"], set: async (v) => { L0["stream"] = v; }, local: true }, false)), "Free", []);
    }
  }
  return L0.result;
}, {"params": ["Btn", "Icon"], "kind": "procedure", "ptypes": ["TToolButton", "TIcon"]});
  U.method("TPluginToolBar", "StringToStream", async function StringToStream(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"wstr": $.asRef(p0), "stream": $.copyArg(p1), result: undefined, "p": 0, "ch": ''};
  await $.fixArgs(L0, ["stream"]);
  while ($.truthy($.ne((await L0["wstr"].get()), ""))) {
    L0["p"] = (await $.call(C, "Pos", [" ", (await L0["wstr"].get())]));
    if ($.truthy($.eq(L0["p"], 0))) {
      L0["p"] = $.add((await $.call(C, "Length", [(await L0["wstr"].get())])), 1);
    }
    L0["ch"] = (await $.call(C, "Chr", [(await $.call(C, "StrToInt", [(await $.call(C, "Copy", [(await L0["wstr"].get()), 1, $.sub(L0["p"], 1)]))]))]));
    await $.stmt((await $.mcall((await $.v(C, "System")), "Delete", [$.ref(async () => (await L0["wstr"].get()), async ($t6) => { await L0["wstr"].set($t6); }), 1, L0["p"]])));
    await $.stmt((await $.mcall(L0["stream"], "Write", [L0["ch"], 1])));
    await $.tick();
  }
  return L0.result;
}, {"params": ["WStr", "Stream"], "kind": "procedure", "ptypes": ["String", "TMemoryStream"]});
  U.method("TPluginToolBar", "UnLoadPlugins", async function UnLoadPlugins(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  await $.set(C, "FPluginsCnt", 0);
  await $.mcall((await $.v(C, "Plugins")), "Free", []);
  { const $t7 = $.sub((await $.v(C, "ButtonCount")), 1);
    L0["i"] = 0;
    let $t8 = true;
    for (;;) {
      if (!$t8) { L0["i"] = $.succ(L0["i"], 1); }
      $t8 = false;
      if (!($.ord(L0["i"]) <= $.ord($t7))) break;
      await $.mcall((await $.idx((await $.v(C, "Buttons")), [L0["i"]])), "Free", []);
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPluginToolBar", "LoadPlugins", async function LoadPlugins(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "s": null, "i": 0, "plugincaption": '', "pluginname": '', "pluginparam": '', "p": null};
  L0["s"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  try {
    {
      const $t9 = (await $.v(C, "MenuIni"));
      const $t10 = (await $.wv([$t9], "Location", C, false));
      await $.stmt((await $.wcall([$t9, $t10], "ReadSections", [(await $.wv([$t9, $t10], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C)));
      await $.wset([$t9, $t10], "FPluginsCnt", $.sub((await $.mv((await $.wv([$t9, $t10], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), "Count")), 1), C);
      { const $t11 = 0;
        await $.wset([$t9, $t10], "I", $.sub((await $.mv((await $.wv([$t9, $t10], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), "Count")), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t12 = true;
        for (;;) {
          if (!$t12) { await $.wset([$t9, $t10], "I", $.succ((await $.wv([$t9, $t10], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), -1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t12 = false;
          if (!($.ord((await $.wv([$t9, $t10], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) >= $.ord($t11))) break;
          await $.wset([$t9, $t10], "PluginCaption", (await $.wcall([$t9, $t10], "ReadString", [(await $.idx((await $.wv([$t9, $t10], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), [(await $.wv([$t9, $t10], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), (await $.wv([$t9, $t10], "CCaption", C, false)), (await $.wv([$t9, $t10], "rsUnassigned", C, false))], C)), { get: async () => L0["plugincaption"], set: async (v) => { L0["plugincaption"] = v; }, local: true });
          await $.wset([$t9, $t10], "PluginName", (await $.wcall([$t9, $t10], "ReadString", [(await $.idx((await $.wv([$t9, $t10], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), [(await $.wv([$t9, $t10], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), (await $.wv([$t9, $t10], "CPlugin", C, false)), ""], C)), { get: async () => L0["pluginname"], set: async (v) => { L0["pluginname"] = v; }, local: true });
          await $.wset([$t9, $t10], "PluginParam", (await $.wcall([$t9, $t10], "ReadString", [(await $.idx((await $.wv([$t9, $t10], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), [(await $.wv([$t9, $t10], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), (await $.wv([$t9, $t10], "CPluginParam", C, false)), ""], C)), { get: async () => L0["pluginparam"], set: async (v) => { L0["pluginparam"] = v; }, local: true });
          {
            const $t13 = (await $.mcall((await $.wv([$t9, $t10], "TToolButton", C, false)), "Create", [Self]));
            await $.wset([$t9, $t10, $t13], "Parent", Self, C);
            await $.wset([$t9, $t10, $t13], "Tag", $.sub($.sub((await $.mv((await $.wv([$t9, $t10, $t13], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), "Count")), 1), (await $.wv([$t9, $t10, $t13], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))), C);
            if ($.truthy($.ne((await $.wv([$t9, $t10, $t13], "PluginCaption", { get: async () => L0["plugincaption"], set: async (v) => { L0["plugincaption"] = v; }, local: true }, false)), "|"))) {
              await $.wset([$t9, $t10, $t13], "Style", (await $.wv([$t9, $t10, $t13], "tbsButton", C, false)), C);
              await $.wset([$t9, $t10, $t13], "Width", 23, C);
              await $.wset([$t9, $t10, $t13], "Caption", (await $.wv([$t9, $t10, $t13], "PluginCaption", { get: async () => L0["plugincaption"], set: async (v) => { L0["plugincaption"] = v; }, local: true }, false)), C);
              await $.wset([$t9, $t10, $t13], "Hint", (await $.wv([$t9, $t10, $t13], "PluginCaption", { get: async () => L0["plugincaption"], set: async (v) => { L0["plugincaption"] = v; }, local: true }, false)), C);
            } else {
              await $.wset([$t9, $t10, $t13], "Style", (await $.wv([$t9, $t10, $t13], "tbsSeparator", C, false)), C);
              await $.wset([$t9, $t10, $t13], "Width", 8, C);
            }
            await $.wset([$t9, $t10, $t13], "OnClick", (await $.wv([$t9, $t10, $t13], "OnToolButtonClick", C, true)), C);
            await $.wset([$t9, $t10, $t13], "ImageIndex", (await $.wcall([$t9, $t10, $t13], "LoadInactivePluginIcon", [(await $.wcall([$t9, $t10, $t13], "ReadString", [(await $.idx((await $.wv([$t9, $t10, $t13], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), [(await $.wv([$t9, $t10, $t13], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), (await $.wv([$t9, $t10, $t13], "CMenuIcon", C, false)), ""], C))], C)), C);
          }
          await $.stmt((await $.wcall([$t9, $t10], "New", [(await $.wv([$t9, $t10], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))], C)));
          {
            const $t14 = (await $.wv([$t9, $t10], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false));
            await $.wset([$t9, $t10, $t14], "Module", (await $.wv([$t9, $t10, $t14], "PluginName", { get: async () => L0["pluginname"], set: async (v) => { L0["pluginname"] = v; }, local: true }, false)), C);
            await $.wset([$t9, $t10, $t14], "Param", (await $.wv([$t9, $t10, $t14], "PluginParam", { get: async () => L0["pluginparam"], set: async (v) => { L0["pluginparam"] = v; }, local: true }, false)), C);
            await $.wset([$t9, $t10, $t14], "ModuleHandle", 0, C);
            await $.stmt((await $.mcall((await $.wv([$t9, $t10, $t14], "Plugins", C, false)), "Add", [(await $.wv([$t9, $t10, $t14], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))])));
          }
          await $.tick();
        }
      }
    }
  } finally {
    await $.mcall(L0["s"], "Free", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPluginToolBar", "LoadInactivePluginIcon", async function LoadInactivePluginIcon(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"iconstr": $.copyArg(p0), result: 0, "stream": null, "icon": null};
  await $.fixArgs(L0, ["iconstr"]);
  L0["result"] = (-(1));
  if ($.truthy($.ne(L0["iconstr"], ""))) {
    L0["stream"] = (await $.mv((await $.v(C, "TMemoryStream")), "Create"));
    L0["icon"] = (await $.mv((await $.v(C, "TIcon")), "Create"));
    try {
      await $.stmt((await $.call(C, "StringToStream", [$.ref(async () => L0["iconstr"], async ($t15) => { L0["iconstr"] = $t15; }), L0["stream"]])));
      await $.stmt((await $.mcall(L0["stream"], "Seek", [0, (await $.v(C, "soFromBeginning"))])));
      await $.stmt((await $.mcall(L0["icon"], "LoadFromStream", [L0["stream"]])));
      if ($.truthy($.not((await $.mv(L0["icon"], "Empty"))))) {
        L0["result"] = (await $.mcall((await $.v(C, "Images")), "AddIcon", [L0["icon"]]));
      } else {
        L0["result"] = (-(1));
      }
    } finally {
      await $.mcall(L0["stream"], "Free", []);
      await $.mcall(L0["icon"], "Free", []);
    }
  }
  return L0.result;
}, {"params": ["IconStr"], "kind": "function", "ptypes": ["String"]});
  U.method("TPluginToolBar", "SetActive", async function SetActive(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy($.ne(L0["value"], (await $.v(C, "FActive"))))) {
    if ($.truthy($.eq($.mul([(await $.v(C, "csDesigning"))], (await $.v(C, "ComponentState"))), []))) {
      if ($.truthy(L0["value"])) {
        await $.stmt($.call(C, "LoadPlugins", []));
      } else {
        await $.stmt($.call(C, "UnLoadPlugins", []));
      }
    }
  }
  await $.set(C, "FActive", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TPluginToolBar", "GetActive", async function GetActive(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "FActive"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPluginToolBar", "OnToolButtonClick", async function OnToolButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "initproc": null, "finfunc": null, "icongetfunc": null, "ptrplugin": null, "pluginready": false, "strparam": '', "strplugin": '', "pluginhandle": null, "canfinalizeplugin": false, "index": 0, "icon": null, "processloadplugin": false};
  await $.fixArgs(L0, ["sender"]);
  L0["processloadplugin"] = true;
  L0["index"] = (await $.mv((L0["sender"]), "Tag"));
  L0["ptrplugin"] = (await $.idx((await $.v(C, "Plugins")), [L0["index"]]));
  {
    const $t16 = L0["ptrplugin"];
    await $.wset([$t16], "StrPlugin", (await $.wv([$t16], "Module", C, false)), { get: async () => L0["strplugin"], set: async (v) => { L0["strplugin"] = v; }, local: true });
    await $.wset([$t16], "StrParam", (await $.wv([$t16], "Param", C, false)), { get: async () => L0["strparam"], set: async (v) => { L0["strparam"] = v; }, local: true });
    await $.wset([$t16], "PluginHandle", (await $.wv([$t16], "ModuleHandle", C, false)), { get: async () => L0["pluginhandle"], set: async (v) => { L0["pluginhandle"] = v; }, local: true });
    await $.wset([$t16], "PluginReady", (await $.and_(($.eq((await $.wv([$t16], "PluginHandle", { get: async () => L0["pluginhandle"], set: async (v) => { L0["pluginhandle"] = v; }, local: true }, false)), 0)), async () => ($.ne((await $.wv([$t16], "Module", C, false)), "")))), { get: async () => L0["pluginready"], set: async (v) => { L0["pluginready"] = v; }, local: true });
  }
  if ($.truthy(L0["pluginready"])) {
    L0["processloadplugin"] = true;
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "BeforeLoadPlugin"))])))) {
      await $.stmt((await $.call(C, "BeforeLoadPlugin", [Self, L0["strplugin"], L0["strparam"], L0["processloadplugin"]])));
    }
    if ($.truthy($.not(L0["processloadplugin"]))) {
      return L0.result;
    }
    L0["pluginhandle"] = (await $.call(C, "LoadPackage", [L0["strplugin"]]));
    await $.mset(L0["ptrplugin"], "ModuleHandle", L0["pluginhandle"]);
    if ($.truthy($.ne(L0["pluginhandle"], 0))) {
      L0["icongetfunc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], (await $.v(C, "CPluginIconGetFuncName"))]));
      if ($.truthy($.ne(L0["icongetfunc"], null))) {
        L0["icon"] = (await $.mv((await $.v(C, "TIcon")), "Create"));
        try {
          await $.stmt((await $.callv(L0["icongetfunc"], [L0["strparam"], L0["icon"]])));
          if ($.truthy($.not((await $.mv(L0["icon"], "Empty"))))) {
            try {
              await $.mset(L0["sender"], "ImageIndex", (await $.mcall((await $.v(C, "Images")), "AddIcon", [L0["icon"]])));
              await $.stmt((await $.call(C, "SavePluginIcon", [(L0["sender"]), L0["icon"]])));
            } catch ($t17) {
              $.rethrowControl($t17);
              $.handled($t17);
            }
          }
        } finally {
          await $.mcall(L0["icon"], "Free", []);
        }
      }
    }
  }
  if ($.truthy($.ne(L0["pluginhandle"], 0))) {
    L0["initproc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], (await $.v(C, "cPluginInitProcName"))]));
    if ($.truthy($.ne(L0["initproc"], null))) {
      await $.stmt((await $.callv(L0["initproc"], [L0["strparam"]])));
    }
    L0["finfunc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], (await $.v(C, "cPluginFinalizeFuncName"))]));
    L0["canfinalizeplugin"] = ($.ne(L0["finfunc"], null));
    if ($.truthy((await $.and_(L0["canfinalizeplugin"], async () => L0["finfunc"])))) {
      await $.stmt((await $.call(C, "UnloadPackage", [L0["pluginhandle"]])));
      await $.mset(L0["ptrplugin"], "ModuleHandle", 0);
    }
  }
  { const $t18 = await $.iset((await $.v(C, "Plugins")), [L0["index"]], L0["ptrplugin"]); if ($t18 !== undefined) { await $.set(C, "Plugins", $t18); } }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("Register", async function Register(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "RegisterComponents", ["CreditsMgr", [(await $.v(C, "TPluginToolBar"))]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  return U;
}
