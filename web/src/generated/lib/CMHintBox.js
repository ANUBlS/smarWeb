// Generated from CMHintBox.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CMHintBox", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls"]);
  const C = [U];
  U.const("hsAlert", 0);
  U.const("hsWarning", 1);
  U.const("hsError", 2);
  U.const("hsInformation", 3);
  U.const("hsSuccess", 4);
  U.const("hsNone", 5);
  U.const("hsCustom", 6);
  U.defClass("TCMHintBox", "TPanel", {"fhintlabel": {"name": "FHintLabel", "type": "TLabel"}, "fhintimage": {"name": "FHintImage", "type": "TImage"}, "fshape": {"name": "FShape", "type": "TShape"}, "ffont": {"name": "FFont", "type": "TFont"}, "fhintstyle": {"name": "FHintStyle", "type": "THintStyle"}, "ftimeout": {"name": "FTimeout", "type": "Integer"}, "fhidetimer": {"name": "FHideTimer", "type": "TTimer"}, "fbeeponmessage": {"name": "FBeepOnMessage", "type": "Boolean"}, "faftershow": {"name": "FAfterShow", "type": "TNotifyEvent"}, "fafterhide": {"name": "FAfterHide", "type": "TNotifyEvent"}, "fcontrol": {"name": "FControl", "type": "TWinControl"}}, {"hintlabel": {"name": "HintLabel", "read": "FHintLabel"}, "hintimage": {"name": "HintImage", "read": "FHintImage"}, "font": {"name": "Font", "read": "FFont", "write": "FFont"}, "brush": {"name": "Brush"}, "hintstyle": {"name": "HintStyle", "read": "FHintStyle", "write": "SetHintStyle"}, "timeout": {"name": "Timeout", "read": "FTimeout", "write": "SetTimeout"}, "beeponmessage": {"name": "BeepOnMessage", "read": "FBeepOnMessage", "write": "FBeepOnMessage"}, "aftershow": {"name": "AfterShow", "read": "FAfterShow", "write": "FAfterShow"}, "afterhide": {"name": "AfterHide", "read": "FAfterHide", "write": "FAfterHide"}, "control": {"name": "Control", "read": "FControl", "write": "FControl"}});
  U.init(async () => {
    U.const("DefaultHintStyle", (await $.v(C, "hsCustom")));
    U.const("HintStyleBitmaps", ["HINTSTYLE_ALERT", "HINTSTYLE_WARNING", "HINTSTYLE_ERROR", "HINTSTYLE_INFORMATION", "HINTSTYLE_SUCCESS", "", ""]);
    U.const("DefaultTimeout", 4000);
  });
  U.method("TCMHintBox", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TCMHintBox", "Create", null, arguments);
  await $.set(C, "Width", 150);
  await $.set(C, "Height", 18);
  await $.mset((await $.v(C, "Brush")), "Color", 14745340);
  await $.set(C, "BevelOuter", (await $.v(C, "bvNone")));
  await $.set(C, "AutoSize", true);
  await $.set(C, "FShape", (await $.mcall((await $.v(C, "TShape")), "Create", [Self])));
  {
    const $t1 = (await $.v(C, "FShape"));
    await $.wset([$t1], "Parent", Self, C);
    await $.wset([$t1], "Align", (await $.wv([$t1], "alClient", C, false)), C);
    await $.stmt((await $.mcall((await $.wv([$t1], "Brush", C, false)), "Assign", [(await $.mv(Self, "Brush"))])));
  }
  await $.set(C, "FHintImage", (await $.mcall((await $.v(C, "TImage")), "Create", [Self])));
  {
    const $t2 = (await $.v(C, "FHintImage"));
    await $.wset([$t2], "Parent", Self, C);
    await $.wset([$t2], "Left", 1, C);
    await $.wset([$t2], "Top", 1, C);
    await $.wset([$t2], "Width", 16, C);
    await $.wset([$t2], "Height", 16, C);
    await $.wset([$t2], "Transparent", (await $.wv([$t2], "True", C, false)), C);
  }
  await $.set(C, "FHintLabel", (await $.mcall((await $.v(C, "TLabel")), "Create", [Self])));
  {
    const $t3 = (await $.v(C, "FHintLabel"));
    await $.wset([$t3], "Parent", Self, C);
    await $.wset([$t3], "Left", $.add((await $.mv((await $.wv([$t3], "FHintImage", C, false)), "Width")), 1), C);
    await $.wset([$t3], "Top", 1, C);
    await $.wset([$t3], "Transparent", (await $.wv([$t3], "True", C, false)), C);
    await $.wset([$t3], "AutoSize", (await $.wv([$t3], "True", C, false)), C);
  }
  await $.set(C, "FHideTimer", (await $.mcall((await $.v(C, "TTimer")), "Create", [Self])));
  {
    const $t4 = (await $.v(C, "FHideTimer"));
    await $.wset([$t4], "OnTimer", (await $.wv([$t4], "OnHideTimer", C, true)), C);
  }
  await $.set(C, "HintStyle", (await $.v(C, "DefaultHintStyle")));
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TCMHintBox", "SetName", async function SetName(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.inherited(Self, "TCMHintBox", "SetName", null, arguments);
  await $.mset((await $.v(C, "FHintLabel")), "Caption", (await $.v(C, "Name")));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TComponentName"]});
  U.method("TCMHintBox", "SetHintStyle", async function SetHintStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined, "handle": 0};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FHintStyle", L0["value"]);
  if ($.truthy($.in_((await $.v(C, "HintStyle")), [(await $.v(C, "hsNone")), (await $.v(C, "hsCustom"))]))) {
    {
      const $t5 = (await $.mv((await $.mv((await $.v(C, "FHintImage")), "Picture")), "Bitmap"));
    }
  } else {
    L0["handle"] = (await $.call(C, "LoadBitmap", [(await $.v(C, "hInstance")), (await $.idx((await $.v(C, "HintStyleBitmaps")), [(await $.v(C, "HintStyle"))]))]));
    if ($.truthy($.eq(L0["handle"], 0))) {
      await $.stmt($.call(C, "RaiseLastWin32Error", []));
    }
    await $.mset((await $.mv((await $.mv((await $.v(C, "FHintImage")), "Picture")), "Bitmap")), "Handle", L0["handle"]);
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["THintStyle"]});
  U.method("TCMHintBox", "SetTimeout", async function SetTimeout(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy($.eq(L0["value"], 0))) {
    L0["value"] = (await $.v(C, "DefaultTimeout"));
  }
  await $.set(C, "FTimeout", L0["value"]);
  {
    const $t6 = (await $.v(C, "FHideTimer"));
    if ($.truthy($.ne((await $.wv([$t6], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), (-(1))))) {
      await $.wset([$t6], "Interval", (await $.wv([$t6], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), C);
      await $.wset([$t6], "Enabled", (await $.wv([$t6], "True", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCMHintBox", "OnHideTimer", async function OnHideTimer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = L0["sender"];
    await $.wset([$t7], "Enabled", (await $.wv([$t7], "False", C, false)), C);
  }
  await $.stmt($.call(C, "Hide", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCMHintBox", "ShowMessage", async function ShowMessage(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.copyArg(p0), "atimeout": (p1 === undefined ? 0 : p1), result: undefined};
  await $.fixArgs(L0, ["message", "atimeout"]);
  await $.mset((await $.v(C, "FHintLabel")), "Caption", L0["message"]);
  await $.set(C, "AutoSize", false);
  await $.set(C, "AutoSize", true);
  await $.stmt($.call(C, "Realign", []));
  if ($.truthy((await $.v(C, "FBeepOnMessage")))) {
    await $.stmt($.call(C, "Beep", []));
  }
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "Control"))])))) {
    await $.mcall((await $.v(C, "Control")), "SetFocus", []);
  }
  await $.stmt($.call(C, "Show", []));
  await $.set(C, "Timeout", L0["atimeout"]);
  return L0.result;
}, {"params": ["Message", "ATimeout"], "kind": "procedure", "ptypes": ["String", "Integer"]});
  U.method("TCMHintBox", "VisibleChanging", async function VisibleChanging(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  L0["calleventhandler"] = $.fn(async function CallEventHandler(p0) {
  const L1 = {"handler": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["handler"]);
  if ($.truthy((await $.call(C, "Assigned", [L1["handler"]])))) {
    await $.stmt((await $.callv(L1["handler"], [Self])));
  }
  return L1.result;
});
  if ($.truthy((await $.v(C, "Visible")))) {
    await $.stmt((await $.callv(L0["calleventhandler"], [(await $.v(C, "AfterHide"))])));
  } else {
    await $.stmt((await $.callv(L0["calleventhandler"], [(await $.v(C, "AfterShow"))])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("Register", async function Register(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "RegisterComponents", ["CreditsMgr", [(await $.v(C, "TCMHintBox"))]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  return U;
}
