// Generated from FlatSpeed.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FlatSpeed", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "Buttons", "PanelSpeed"]);
  const C = [U];
  U.defClass("TFlatSpeed", "TPanel", {"fbuttoncount": {"name": "FButtonCount", "type": "Integer"}, "ptop": {"name": "pTop", "type": "Integer"}, "ptag": {"name": "pTag", "type": "Integer"}, "fbuttonsonclick": {"name": "FButtonsOnClick", "type": "TNotifyEvent"}, "buts": {"name": "buts", "type": "array"}}, {"buttoncount": {"name": "ButtonCount", "read": "FButtonCount", "write": "SetButtonCount"}, "onbuttonsclick": {"name": "OnButtonsClick", "read": "FButtonsOnClick", "write": "FButtonsOnClick"}});
  U.fieldInit("TFlatSpeed", "buts", () => []);
  U.init(async () => {
  });
  U.func("Register", async function Register(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "RegisterComponents", ["Smart", [(await $.v(C, "TFlatSpeed"))]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFlatSpeed", "getIdByTag", async function getIdByTag(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"vtag": $.copyArg(p0), result: 0, "i": 0};
  await $.fixArgs(L0, ["vtag"]);
  L0["result"] = (-(1));
  { const $t1 = $.sub((await $.call(C, "Length", [(await $.v(C, "Buts"))])), 1);
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Buts")), [L0["i"]])), "Tag")), L0["vtag"]))) {
        L0["result"] = L0["i"];
        return L0.result;
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["vTag"], "kind": "function", "ptypes": ["Integer"]});
  U.method("TFlatSpeed", "DoResize", async function DoResize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "pleft": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["pheight"] = 20;
  L0["pleft"] = 2;
  { const $t3 = $.sub((await $.mv((L0["sender"]), "ControlCount")), 1);
    L0["i"] = 0;
    let $t4 = true;
    for (;;) {
      if (!$t4) { L0["i"] = $.succ(L0["i"], 1); }
      $t4 = false;
      if (!($.ord(L0["i"]) <= $.ord($t3))) break;
      if ($.truthy($.is_((await $.idx((await $.mv((L0["sender"]), "Controls")), [L0["i"]])), "?"))) {
        {
          const $t5 = ((await $.idx((await $.mv((L0["sender"]), "Controls")), [L0["i"]])));
          await $.wset([$t5], "Width", $.sub((await $.mv(((await $.wv([$t5], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Width")), 4), C);
          await $.wset([$t5], "Height", $.add((await $.wv([$t5], "pHeight", { get: async () => L0["pheight"], set: async (v) => { L0["pheight"] = v; }, local: true }, false)), 2), C);
          await $.wset([$t5], "Left", (await $.wv([$t5], "PLeft", { get: async () => L0["pleft"], set: async (v) => { L0["pleft"] = v; }, local: true }, false)), C);
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFlatSpeed", "Resize", async function Resize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "DoResize", [Self])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFlatSpeed", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TFlatSpeed", "Create", [L0["aowner"]], arguments);
  await $.set(C, "pTop", 2);
  await $.set(C, "pTag", 30);
  await $.stmt($.call(C, "InitializePanel", []));
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TFlatSpeed", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "buts", null);
  await $.inherited(Self, "TFlatSpeed", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TFlatSpeed", "InitializePanel", async function InitializePanel(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset(Self, "BevelInner", (await $.v(C, "bvRaised")));
  await $.mset(Self, "BevelOuter", (await $.v(C, "bvLowered")));
  await $.mset(Self, "BorderStyle", (await $.v(C, "bsNone")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFlatSpeed", "SetButtonCount", async function SetButtonCount(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy($.le(L0["value"], (await $.v(C, "FButtonCount"))))) {
    return L0.result;
  }
  { const $t6 = $.sub(L0["value"], (await $.v(C, "FButtonCount")));
    L0["i"] = 1;
    let $t7 = true;
    for (;;) {
      if (!$t7) { L0["i"] = $.succ(L0["i"], 1); }
      $t7 = false;
      if (!($.ord(L0["i"]) <= $.ord($t6))) break;
      await $.stmt((await $.call(C, "AddButton", [$.add("But", (await $.call(C, "IntToStr", [L0["i"]]))), null, (await $.v(C, "IUnknown"))])));
      await $.tick();
    }
  }
  await $.set(C, "FButtonCount", L0["value"]);
  return L0.result;
}, {"params": ["value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TFlatSpeed", "AddButton", async function AddButton(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"capt": $.copyArg(p0), "image": $.copyArg(p1), "guid": $.copyArg(p2), result: 0, "idx": 0};
  await $.fixArgs(L0, ["capt", "image", "guid"]);
  L0["idx"] = $.add((await $.call(C, "Length", [(await $.v(C, "buts"))])), 1);
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "buts")), async ($t8) => { await $.set(C, "buts", $t8); }), L0["idx"]])));
  { const $t9 = await $.iset((await $.v(C, "buts")), [$.sub(L0["idx"], 1)], (await $.mcall((await $.v(C, "TPanelSpeed")), "Create", [Self]))); if ($t9 !== undefined) { await $.set(C, "buts", $t9); } }
  await $.mset((await $.idx((await $.v(C, "buts")), [$.sub(L0["idx"], 1)])), "parent", Self);
  await $.mset((await $.idx((await $.v(C, "buts")), [$.sub(L0["idx"], 1)])), "OnClick", (await $.ref_(C, "ButtonClick")));
  await $.mset((await $.idx((await $.v(C, "buts")), [$.sub(L0["idx"], 1)])), "PluginGuid", L0["guid"]);
  await $.mset((await $.idx((await $.v(C, "buts")), [$.sub(L0["idx"], 1)])), "Caption", L0["capt"]);
  if ($.truthy((await $.call(C, "Assigned", [L0["image"]])))) {
    await $.mset((await $.idx((await $.v(C, "buts")), [$.sub(L0["idx"], 1)])), "Glyph", L0["image"]);
  }
  await $.mset((await $.idx((await $.v(C, "buts")), [$.sub(L0["idx"], 1)])), "Top", (await $.v(C, "pTop")));
  await $.mset((await $.idx((await $.v(C, "buts")), [$.sub(L0["idx"], 1)])), "Tag", (await $.v(C, "pTag")));
  L0["result"] = (await $.v(C, "pTag"));
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "pTag")), async ($t10) => { await $.set(C, "pTag", $t10); })])));
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "pTop")), async ($t11) => { await $.set(C, "pTop", $t11); }), 20])));
  await $.stmt((await $.call(C, "DoResize", [Self])));
  return L0.result;
}, {"params": ["Capt", "Image", "Guid"], "kind": "function", "ptypes": ["String", "TBitmap", "TGuid"]});
  U.method("TFlatSpeed", "ButtonClick", async function ButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "FButtonsOnClick"))])))) {
    await $.mset(Self, "tag", (await $.mv((L0["sender"]), "tag")));
    await $.stmt((await $.call(C, "FButtonsOnClick", [Self])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
