// Generated from PanelSpeed.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PanelSpeed", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "Buttons"]);
  const C = [U];
  U.defClass("TPanelSpeed", "TPanel", {"button": {"name": "Button", "type": "TSpeedButton"}, "fcaption": {"name": "FCaption", "type": "String"}, "fglyph": {"name": "FGlyph", "type": "TBitmap"}, "pluginguid": {"name": "PluginGuid", "type": "TGuid"}}, {"caption": {"name": "Caption", "read": "FCaption", "write": "SetCaption"}, "glyph": {"name": "Glyph", "read": "GetGlyph", "write": "SetGlyph"}});
  U.init(async () => {
  });
  U.func("Register", async function Register(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "RegisterComponents", ["Smart", [(await $.v(C, "TPanelSpeed"))]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPanelSpeed", "GetGlyph", async function GetGlyph(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "FGlyph"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPanelSpeed", "SetGlyph", async function SetGlyph(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.mset((await $.v(C, "Button")), "Glyph", L0["value"]);
  await $.set(C, "FGlyph", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TBitmap"]});
  U.method("TPanelSpeed", "SetCaption", async function SetCaption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy($.eq((await $.v(C, "FCaption")), L0["value"]))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Button")), "Caption", L0["value"]);
  await $.mset((await $.v(C, "Button")), "Margin", 3);
  return L0.result;
}, {"params": ["value"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TPanelSpeed", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TPanelSpeed", "Create", [L0["aowner"]], arguments);
  await $.mset(Self, "BevelInner", (await $.v(C, "bvRaised")));
  await $.mset(Self, "BevelOuter", (await $.v(C, "bvLowered")));
  await $.mset(Self, "Width", 81);
  await $.mset(Self, "Height", 25);
  await $.set(C, "Button", (await $.mcall((await $.v(C, "TSpeedButton")), "Create", [Self])));
  await $.mset((await $.v(C, "Button")), "Parent", Self);
  await $.mset((await $.v(C, "Button")), "OnClick", (await $.ref_(C, "ButtonClick")));
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TPanelSpeed", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TPanelSpeed", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TPanelSpeed", "ButtonClick", async function ButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "OnClick"))])))) {
    await $.stmt((await $.call(C, "OnClick", [Self])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPanelSpeed", "Resize", async function Resize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "Button")), "Height", $.sub((await $.mv(Self, "Height")), 2));
  await $.mset((await $.v(C, "Button")), "Width", $.sub((await $.mv(Self, "Width")), 2));
  await $.mset((await $.v(C, "Button")), "Flat", true);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  return U;
}
