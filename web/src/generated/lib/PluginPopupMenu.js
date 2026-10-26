// Generated from PluginPopupMenu.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PluginPopupMenu", ["Windows", "SysUtils", "Classes", "Controls", "Graphics", "Menus", "IniFiles", "Sequence", "ImgList", "PluginIni", "PluginDecls"]);
  const C = [U];
  U.defClass("TPluginPopupMenuItem", "TMenuItem", {"fabsoluteindex": {"name": "FAbsoluteIndex", "type": "Word"}}, {"absoluteindex": {"name": "AbsoluteIndex", "read": "FAbsoluteIndex", "write": "FAbsoluteIndex"}});
  U.defClass("TPluginPopupMenu", "TPopupMenu", {"fmenuini": {"name": "FMenuIni", "type": "TMenuIni"}, "fsequence": {"name": "FSequence", "type": "TSequence"}, "fimagelist": {"name": "FImageList", "type": "TImageList"}, "factive": {"name": "FActive", "type": "Boolean"}, "fplugindir": {"name": "FPluginDir", "type": "String"}, "ffont": {"name": "FFont", "type": "TFont"}, "fbeforeloadplugin": {"name": "FBeforeLoadPlugin", "type": "TPluginBeforeLoadEvent"}, "plugins": {"name": "Plugins", "type": "TList"}}, {"sequence": {"name": "Sequence", "read": "FSequence", "write": "FSequence"}, "menuini": {"name": "MenuIni", "read": "FMenuIni", "write": "SetMenuIni"}, "active": {"name": "Active", "read": "GetActive", "write": "SetActive"}, "font": {"name": "Font", "read": "FFont", "write": "SetFont"}, "plugindir": {"name": "PluginDir", "read": "FPluginDir", "write": "FPluginDir"}, "beforeloadplugin": {"name": "BeforeLoadPlugin", "read": "FBeforeLoadPlugin", "write": "FBeforeLoadPlugin"}});
  U.init(async () => {
    U.const("rsUnassigned", "Təyin olunmayıb");
  });
  U.method("TPluginPopupMenuItem", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TPluginPopupMenuItem", "Create", null, arguments);
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TPluginPopupMenuItem", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TPluginPopupMenuItem", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TPluginPopupMenuItem", "Click", async function Click(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TPluginPopupMenuItem", "Click", null, arguments);
  if ($.truthy($.eq($.mul([(await $.v(C, "csDesigning"))], (await $.v(C, "ComponentState"))), []))) {
    await $.stmt((await $.mcall((await $.call(C, "TPluginPopupMenu", [(await $.v(C, "GetParentMenu"))])), "PluginMenuItemClick", [Self])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPluginPopupMenuItem", "AdvancedDrawItem", async function AdvancedDrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"acanvas": $.copyArg(p0), "arect": $.copyArg(p1), "state": $.copyArg(p2), "toplevel": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["acanvas", "arect", "state", "toplevel"]);
  await $.mset((await $.mv(L0["acanvas"], "Font")), "Name", (await $.mv((await $.mv((await $.call(C, "TPluginPopupMenu", [(await $.v(C, "GetParentMenu"))])), "Font")), "Name")));
  await $.inherited(Self, "TPluginPopupMenuItem", "AdvancedDrawItem", null, arguments);
  return L0.result;
}, {"params": ["ACanvas", "ARect", "State", "TopLevel"], "kind": "procedure", "ptypes": ["TCanvas", "TRect", "TOwnerDrawState", "Boolean"]});
  U.method("TPluginPopupMenu", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TPluginPopupMenu", "Create", [L0["aowner"]], arguments);
  await $.set(C, "Plugins", (await $.mv((await $.v(C, "TList")), "Create")));
  await $.set(C, "FFont", (await $.mv((await $.v(C, "TFont")), "Create")));
  if ($.truthy((await $.and_(($.eq((await $.v(C, "Images")), null)), async () => ($.eq($.mul([(await $.v(C, "csDesigning"))], (await $.v(C, "ComponentState"))), [])))))) {
    await $.set(C, "FImageList", (await $.mcall((await $.v(C, "TImageList")), "Create", [null])));
    await $.set(C, "Images", (await $.v(C, "FImageList")));
  }
  await $.set(C, "Sequence", (await $.mcall((await $.v(C, "TSequence")), "Create", [Self])));
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TPluginPopupMenu", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "CloseActivePlugins", []));
  await $.mcall((await $.v(C, "Plugins")), "Free", []);
  await $.mcall((await $.v(C, "Sequence")), "Free", []);
  await $.inherited(Self, "TPluginPopupMenu", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TPluginPopupMenu", "Notification", async function Notification(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"acomponent": $.copyArg(p0), "operation": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["acomponent", "operation"]);
  await $.inherited(Self, "TPluginPopupMenu", "Notification", [L0["acomponent"], L0["operation"]], arguments);
  if ($.truthy($.eq(L0["operation"], (await $.v(C, "opRemove"))))) {
    if ($.truthy(($.eq(L0["acomponent"], (await $.v(C, "MenuIni")))))) {
      await $.set(C, "MenuIni", null);
    }
  }
  return L0.result;
}, {"params": ["AComponent", "Operation"], "kind": "procedure", "ptypes": ["TComponent", "TOperation"]});
  U.method("TPluginPopupMenu", "SetMenuIni", async function SetMenuIni(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FMenuIni", L0["value"]);
  if ($.truthy((await $.and_(($.ne((await $.v(C, "FMenuIni")), null)), async () => ($.eq($.mul([(await $.v(C, "csLoading"))], (await $.v(C, "ComponentState"))), [])))))) {
    await $.stmt((await $.mcall((await $.v(C, "FMenuIni")), "FreeNotification", [Self])));
  }
  if ($.truthy((await $.and_((await $.call(C, "Assigned", [(await $.v(C, "FMenuIni"))])), async () => (await $.mv((await $.v(C, "FMenuIni")), "Active")))))) {
    await $.stmt((await $.call(C, "SetActive", [(await $.v(C, "FActive"))])));
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TMenuIni"]});
  U.method("TPluginPopupMenu", "SetActive", async function SetActive(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FActive", L0["value"]);
  if ($.truthy($.not(($.in_((await $.v(C, "csDesigning")), (await $.v(C, "ComponentState"))))))) {
    if ($.truthy((await $.and_((await $.and_((await $.v(C, "FActive")), async () => (await $.call(C, "Assigned", [(await $.v(C, "MenuIni"))])))), async () => (await $.mv((await $.v(C, "MenuIni")), "Active")))))) {
      await $.stmt((await $.call(C, "LoadPlugins", [null])));
    } else {
      await $.stmt($.call(C, "FreePlugins", []));
    }
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TPluginPopupMenu", "GetActive", async function GetActive(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "FActive"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPluginPopupMenu", "SetFont", async function SetFont(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.mcall((await $.v(C, "FFont")), "Assign", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TFont"]});
  U.method("TPluginPopupMenu", "BuildMenuItemName", async function BuildMenuItemName(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"menu": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["menu"]);
  L0["result"] = "";
  if ($.truthy($.ne(L0["menu"], null))) {
    while ($.truthy(($.ne((await $.mv(L0["menu"], "Parent")), null)))) {
      L0["result"] = (await $.call(C, "Format", ["MenuItem%d\\%s", [(await $.mv(L0["menu"], "MenuIndex")), L0["result"]]]));
      L0["menu"] = (await $.mv(L0["menu"], "Parent"));
      await $.tick();
    }
  }
  L0["result"] = (await $.call(C, "Format", ["%s\\MenuItems\\%s", [(await $.mv((await $.v(C, "MenuIni")), "IniSection")), L0["result"]]]));
  await $.stmt((await $.mcall((await $.v(C, "System")), "Delete", [$.ref(async () => L0["result"], async ($t1) => { L0["result"] = $t1; }), (await $.call(C, "Length", [L0["result"]])), 1])));
  return L0.result;
}, {"params": ["Menu"], "kind": "function", "ptypes": ["TMenuItem"]});
  U.method("TPluginPopupMenu", "CreatePlugin", async function CreatePlugin(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"pluginmenu": $.copyArg(p0), "acaption": $.copyArg(p1), "ashorcut": $.copyArg(p2), "modulename": $.copyArg(p3), "aparam": $.copyArg(p4), "aiconstr": $.copyArg(p5), result: undefined, "plugin": null};
  await $.fixArgs(L0, ["pluginmenu", "acaption", "ashorcut", "modulename", "aparam", "aiconstr"]);
  L0["getplugindir"] = $.fn(async function GetPluginDir() {
  const L1 = {result: ''};
  L1["result"] = (await $.v(C, "PluginDir"));
  if ($.truthy($.ne(L1["result"], ""))) {
    L1["result"] = $.add(L1["result"], "\\");
  }
  return L1.result;
});
  {
    const $t2 = L0["pluginmenu"];
    await $.wset([$t2], "AbsoluteIndex", (await $.mv((await $.wv([$t2], "Sequence", C, false)), "NextValue")), C);
    await $.wset([$t2], "Caption", (await $.wv([$t2], "ACaption", { get: async () => L0["acaption"], set: async (v) => { L0["acaption"] = v; }, local: true }, false)), C);
    await $.wset([$t2], "ShortCut", (await $.wcall([$t2], "TextToShortCut", [(await $.wv([$t2], "AShorCut", { get: async () => L0["ashorcut"], set: async (v) => { L0["ashorcut"] = v; }, local: true }, false))], C)), C);
    await $.wset([$t2], "ImageIndex", (await $.wcall([$t2], "LoadInactivePluginIcon", [(await $.wv([$t2], "PluginMenu", { get: async () => L0["pluginmenu"], set: async (v) => { L0["pluginmenu"] = v; }, local: true }, false)), (await $.wv([$t2], "AIconStr", { get: async () => L0["aiconstr"], set: async (v) => { L0["aiconstr"] = v; }, local: true }, false))], C)), C);
  }
  await $.stmt((await $.call(C, "New", [L0["plugin"]])));
  {
    const $t3 = L0["plugin"];
    await $.wset([$t3], "Module", $.add((await $.wv([$t3], "GetPluginDir", { get: async () => L0["getplugindir"], set: async (v) => { L0["getplugindir"] = v; }, local: true }, false)), (await $.wv([$t3], "ModuleName", { get: async () => L0["modulename"], set: async (v) => { L0["modulename"] = v; }, local: true }, false))), C);
    await $.wset([$t3], "Param", (await $.wv([$t3], "AParam", { get: async () => L0["aparam"], set: async (v) => { L0["aparam"] = v; }, local: true }, false)), C);
    await $.wset([$t3], "ModuleHandle", 0, C);
    await $.stmt((await $.mcall((await $.wv([$t3], "Plugins", C, false)), "Add", [(await $.wv([$t3], "Plugin", { get: async () => L0["plugin"], set: async (v) => { L0["plugin"] = v; }, local: true }, false))])));
  }
  return L0.result;
}, {"params": ["PluginMenu", "ACaption", "AShorCut", "ModuleName", "AParam", "AIconStr"], "kind": "procedure", "ptypes": ["TPluginPopupMenuItem", "String", "String", "String", "String", "String"]});
  U.method("TPluginPopupMenu", "LoadPlugins", async function LoadPlugins(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"menuitem": $.copyArg(p0), result: undefined, "index": 0, "currentsection": '', "newsection": '', "newitem": null};
  await $.fixArgs(L0, ["menuitem"]);
  L0["currentsection"] = (await $.call(C, "BuildMenuItemName", [L0["menuitem"]]));
  {
    const $t4 = (await $.mv((await $.v(C, "MenuIni")), "Location"));
    { const $t5 = $.sub((await $.mcall((await $.mv((await $.wv([$t4], "MenuIni", C, false)), "Location")), "ReadInteger", [(await $.wv([$t4], "CurrentSection", { get: async () => L0["currentsection"], set: async (v) => { L0["currentsection"] = v; }, local: true }, false)), (await $.wv([$t4], "cCount", C, false)), 0])), 1);
      await $.wset([$t4], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
      let $t6 = true;
      for (;;) {
        if (!$t6) { await $.wset([$t4], "Index", $.succ((await $.wv([$t4], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
        $t6 = false;
        if (!($.ord((await $.wv([$t4], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t5))) break;
        await $.wset([$t4], "NewSection", (await $.wcall([$t4], "Format", ["%s\\MenuItem%d", [(await $.wv([$t4], "CurrentSection", { get: async () => L0["currentsection"], set: async (v) => { L0["currentsection"] = v; }, local: true }, false)), (await $.wv([$t4], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]], C)), { get: async () => L0["newsection"], set: async (v) => { L0["newsection"] = v; }, local: true });
        await $.wset([$t4], "NewItem", (await $.mcall((await $.wv([$t4], "TPluginPopupMenuItem", C, false)), "Create", [(await $.wv([$t4], "MenuItem", { get: async () => L0["menuitem"], set: async (v) => { L0["menuitem"] = v; }, local: true }, false))])), { get: async () => L0["newitem"], set: async (v) => { L0["newitem"] = v; }, local: true });
        await $.stmt((await $.wcall([$t4], "CreatePlugin", [(await $.wv([$t4], "NewItem", { get: async () => L0["newitem"], set: async (v) => { L0["newitem"] = v; }, local: true }, false)), (await $.wcall([$t4], "ReadString", [(await $.wv([$t4], "NewSection", { get: async () => L0["newsection"], set: async (v) => { L0["newsection"] = v; }, local: true }, false)), (await $.wv([$t4], "cCaption", C, false)), (await $.wv([$t4], "rsUnassigned", C, false))], C)), (await $.wcall([$t4], "ReadString", [(await $.wv([$t4], "NewSection", { get: async () => L0["newsection"], set: async (v) => { L0["newsection"] = v; }, local: true }, false)), (await $.wv([$t4], "cShortCut", C, false)), ""], C)), (await $.wcall([$t4], "ReadString", [(await $.wv([$t4], "NewSection", { get: async () => L0["newsection"], set: async (v) => { L0["newsection"] = v; }, local: true }, false)), (await $.wv([$t4], "cPlugin", C, false)), ""], C)), (await $.wcall([$t4], "ReadString", [(await $.wv([$t4], "NewSection", { get: async () => L0["newsection"], set: async (v) => { L0["newsection"] = v; }, local: true }, false)), (await $.wv([$t4], "cPluginParam", C, false)), ""], C)), (await $.wcall([$t4], "ReadString", [(await $.wv([$t4], "NewSection", { get: async () => L0["newsection"], set: async (v) => { L0["newsection"] = v; }, local: true }, false)), (await $.wv([$t4], "cMenuIcon", C, false)), ""], C))], C)));
        if ($.truthy($.eq((await $.wv([$t4], "MenuItem", { get: async () => L0["menuitem"], set: async (v) => { L0["menuitem"] = v; }, local: true }, false)), null))) {
          await $.stmt((await $.mcall((await $.wv([$t4], "Items", C, false)), "Add", [(await $.wv([$t4], "NewItem", { get: async () => L0["newitem"], set: async (v) => { L0["newitem"] = v; }, local: true }, false))])));
        } else {
          await $.stmt((await $.mcall((await $.wv([$t4], "MenuItem", { get: async () => L0["menuitem"], set: async (v) => { L0["menuitem"] = v; }, local: true }, false)), "Add", [(await $.wv([$t4], "NewItem", { get: async () => L0["newitem"], set: async (v) => { L0["newitem"] = v; }, local: true }, false))])));
        }
        await $.stmt((await $.wcall([$t4], "LoadPlugins", [(await $.wv([$t4], "NewItem", { get: async () => L0["newitem"], set: async (v) => { L0["newitem"] = v; }, local: true }, false))], C)));
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["MenuItem"], "kind": "procedure", "ptypes": ["TPluginPopupMenuItem"]});
  U.method("TPluginPopupMenu", "FreePlugins", async function FreePlugins(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "CloseActivePlugins", []));
  await $.mcall((await $.v(C, "Items")), "Clear", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPluginPopupMenu", "StreamToString", async function StreamToString(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"stream": $.copyArg(p0), result: '', "index": 0, "ch": 0, "count": 0};
  await $.fixArgs(L0, ["stream"]);
  L0["result"] = "";
  await $.stmt((await $.mcall(L0["stream"], "Seek", [0, (await $.v(C, "soFromBeginning"))])));
  L0["count"] = (await $.mv(L0["stream"], "Size"));
  { const $t7 = $.sub(L0["count"], 1);
    L0["index"] = 0;
    let $t8 = true;
    for (;;) {
      if (!$t8) { L0["index"] = $.succ(L0["index"], 1); }
      $t8 = false;
      if (!($.ord(L0["index"]) <= $.ord($t7))) break;
      await $.stmt((await $.mcall(L0["stream"], "Read", [$.ref(async () => L0["ch"], async ($t9) => { L0["ch"] = $t9; }), 1])));
      L0["result"] = $.add($.add(L0["result"], (await $.call(C, "IntToStr", [L0["ch"]]))), " ");
      await $.tick();
    }
  }
  await $.stmt((await $.mcall((await $.v(C, "System")), "Delete", [$.ref(async () => L0["result"], async ($t10) => { L0["result"] = $t10; }), (await $.call(C, "Length", [L0["result"]])), 1])));
  return L0.result;
}, {"params": ["Stream"], "kind": "function", "ptypes": ["TMemoryStream"]});
  U.method("TPluginPopupMenu", "StringToStream", async function StringToStream(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"wstr": $.asRef(p0), "stream": $.copyArg(p1), result: undefined, "p": 0, "ch": ''};
  await $.fixArgs(L0, ["stream"]);
  while ($.truthy($.ne((await L0["wstr"].get()), ""))) {
    L0["p"] = (await $.call(C, "Pos", [" ", (await L0["wstr"].get())]));
    if ($.truthy($.eq(L0["p"], 0))) {
      L0["p"] = $.add((await $.call(C, "Length", [(await L0["wstr"].get())])), 1);
    }
    L0["ch"] = (await $.call(C, "Chr", [(await $.call(C, "StrToInt", [(await $.call(C, "Copy", [(await L0["wstr"].get()), 1, $.sub(L0["p"], 1)]))]))]));
    await $.stmt((await $.mcall((await $.v(C, "System")), "Delete", [$.ref(async () => (await L0["wstr"].get()), async ($t11) => { await L0["wstr"].set($t11); }), 1, L0["p"]])));
    await $.stmt((await $.mcall(L0["stream"], "Write", [L0["ch"], 1])));
    await $.tick();
  }
  return L0.result;
}, {"params": ["WStr", "Stream"], "kind": "procedure", "ptypes": ["String", "TMemoryStream"]});
  U.method("TPluginPopupMenu", "SavePluginIcon", async function SavePluginIcon(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"menuitem": $.copyArg(p0), "icon": $.copyArg(p1), result: undefined, "stream": null, "section": '', "ident": '', "iconstr": ''};
  await $.fixArgs(L0, ["menuitem", "icon"]);
  L0["stream"] = (await $.mv((await $.v(C, "TMemoryStream")), "Create"));
  {
    const $t12 = L0["icon"];
    try {
      await $.stmt((await $.mcall((await $.wv([$t12], "Icon", { get: async () => L0["icon"], set: async (v) => { L0["icon"] = v; }, local: true }, false)), "SaveToStream", [(await $.wv([$t12], "Stream", { get: async () => L0["stream"], set: async (v) => { L0["stream"] = v; }, local: true }, false))])));
      await $.wset([$t12], "Section", (await $.wcall([$t12], "BuildMenuItemName", [(await $.wv([$t12], "MenuItem", { get: async () => L0["menuitem"], set: async (v) => { L0["menuitem"] = v; }, local: true }, false))], C)), { get: async () => L0["section"], set: async (v) => { L0["section"] = v; }, local: true });
      await $.wset([$t12], "Ident", (await $.wv([$t12], "CMenuIcon", C, false)), { get: async () => L0["ident"], set: async (v) => { L0["ident"] = v; }, local: true });
      await $.wset([$t12], "IconStr", (await $.wcall([$t12], "StreamToString", [(await $.wv([$t12], "Stream", { get: async () => L0["stream"], set: async (v) => { L0["stream"] = v; }, local: true }, false))], C)), { get: async () => L0["iconstr"], set: async (v) => { L0["iconstr"] = v; }, local: true });
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t12], "MenuIni", C, false)), "Location")), "WriteString", [(await $.wv([$t12], "Section", { get: async () => L0["section"], set: async (v) => { L0["section"] = v; }, local: true }, false)), (await $.wv([$t12], "Ident", { get: async () => L0["ident"], set: async (v) => { L0["ident"] = v; }, local: true }, false)), (await $.wv([$t12], "IconStr", { get: async () => L0["iconstr"], set: async (v) => { L0["iconstr"] = v; }, local: true }, false))])));
    } finally {
      await $.mcall((await $.wv([$t12], "Stream", { get: async () => L0["stream"], set: async (v) => { L0["stream"] = v; }, local: true }, false)), "Free", []);
    }
  }
  return L0.result;
}, {"params": ["MenuItem", "Icon"], "kind": "procedure", "ptypes": ["TPluginPopupMenuItem", "TIcon"]});
  U.method("TPluginPopupMenu", "LoadInactivePluginIcon", async function LoadInactivePluginIcon(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"menuitem": $.copyArg(p0), "iconstr": $.copyArg(p1), result: 0, "stream": null, "icon": null};
  await $.fixArgs(L0, ["menuitem", "iconstr"]);
  L0["result"] = (-(1));
  if ($.truthy($.ne(L0["iconstr"], ""))) {
    L0["stream"] = (await $.mv((await $.v(C, "TMemoryStream")), "Create"));
    L0["icon"] = (await $.mv((await $.v(C, "TIcon")), "Create"));
    try {
      await $.stmt((await $.call(C, "StringToStream", [$.ref(async () => L0["iconstr"], async ($t13) => { L0["iconstr"] = $t13; }), L0["stream"]])));
      await $.stmt((await $.mcall(L0["stream"], "Seek", [0, (await $.v(C, "soFromBeginning"))])));
      await $.stmt((await $.mcall(L0["icon"], "LoadFromStream", [L0["stream"]])));
      L0["result"] = (await $.mcall((await $.v(C, "Images")), "AddIcon", [L0["icon"]]));
    } finally {
      await $.mcall(L0["stream"], "Free", []);
      await $.mcall(L0["icon"], "Free", []);
    }
  }
  return L0.result;
}, {"params": ["MenuItem", "IconStr"], "kind": "function", "ptypes": ["TPluginPopupMenuItem", "String"]});
  U.method("TPluginPopupMenu", "PluginMenuItemClick", async function PluginMenuItemClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"menuitem": $.copyArg(p0), result: undefined, "initproc": null, "finfunc": null, "icongetfunc": null, "checkedfunc": null, "ptrplugin": null, "pluginready": false, "strparam": '', "strplugin": '', "pluginhandle": null, "canfinalizeplugin": false, "index": 0, "icon": null, "processloadplugin": false};
  await $.fixArgs(L0, ["menuitem"]);
  L0["index"] = (await $.mv(L0["menuitem"], "AbsoluteIndex"));
  L0["ptrplugin"] = (await $.idx((await $.v(C, "Plugins")), [L0["index"]]));
  {
    const $t14 = L0["ptrplugin"];
    await $.wset([$t14], "StrPlugin", (await $.wv([$t14], "Module", C, false)), { get: async () => L0["strplugin"], set: async (v) => { L0["strplugin"] = v; }, local: true });
    await $.wset([$t14], "StrParam", (await $.wv([$t14], "Param", C, false)), { get: async () => L0["strparam"], set: async (v) => { L0["strparam"] = v; }, local: true });
    await $.wset([$t14], "PluginHandle", (await $.wv([$t14], "ModuleHandle", C, false)), { get: async () => L0["pluginhandle"], set: async (v) => { L0["pluginhandle"] = v; }, local: true });
    await $.wset([$t14], "PluginReady", (await $.and_(($.eq((await $.wv([$t14], "PluginHandle", { get: async () => L0["pluginhandle"], set: async (v) => { L0["pluginhandle"] = v; }, local: true }, false)), 0)), async () => ($.ne((await $.wv([$t14], "Module", C, false)), "")))), { get: async () => L0["pluginready"], set: async (v) => { L0["pluginready"] = v; }, local: true });
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
              await $.mset(L0["menuitem"], "ImageIndex", (await $.mcall((await $.v(C, "Images")), "AddIcon", [L0["icon"]])));
              await $.stmt((await $.call(C, "SavePluginIcon", [L0["menuitem"], L0["icon"]])));
            } catch ($t15) {
              $.rethrowControl($t15);
              $.handled($t15);
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
    L0["checkedfunc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], (await $.v(C, "CPluginMenuItemCheckedFunc"))]));
    await $.mset(L0["menuitem"], "Checked", (await $.and_(($.ne(L0["checkedfunc"], null)), async () => L0["checkedfunc"])));
    L0["finfunc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], (await $.v(C, "cPluginFinalizeFuncName"))]));
    L0["canfinalizeplugin"] = ($.ne(L0["finfunc"], null));
    if ($.truthy((await $.and_(L0["canfinalizeplugin"], async () => L0["finfunc"])))) {
      await $.stmt((await $.call(C, "UnloadPackage", [L0["pluginhandle"]])));
      await $.mset(L0["ptrplugin"], "ModuleHandle", 0);
    }
  }
  { const $t16 = await $.iset((await $.v(C, "Plugins")), [L0["index"]], L0["ptrplugin"]); if ($t16 !== undefined) { await $.set(C, "Plugins", $t16); } }
  return L0.result;
}, {"params": ["MenuItem"], "kind": "procedure", "ptypes": ["TPluginPopupMenuItem"]});
  U.method("TPluginPopupMenu", "CloseActivePlugins", async function CloseActivePlugins(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "ptrplugin": null, "index": 0};
  { const $t17 = $.sub((await $.mv((await $.v(C, "Plugins")), "Count")), 1);
    L0["index"] = 0;
    let $t18 = true;
    for (;;) {
      if (!$t18) { L0["index"] = $.succ(L0["index"], 1); }
      $t18 = false;
      if (!($.ord(L0["index"]) <= $.ord($t17))) break;
      L0["ptrplugin"] = (await $.idx((await $.mv((await $.v(C, "Plugins")), "Items")), [L0["index"]]));
      {
        const $t19 = L0["ptrplugin"];
        if ($.truthy($.ne((await $.wv([$t19], "ModuleHandle", C, false)), 0))) {
          await $.stmt((await $.wcall([$t19], "UnloadPackage", [(await $.wv([$t19], "ModuleHandle", C, false))], C)));
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("Register", async function Register(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "RegisterComponents", ["CreditsMgr", [(await $.v(C, "TPluginPopupMenu"))]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  return U;
}
