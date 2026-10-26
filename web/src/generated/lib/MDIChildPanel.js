// Generated from MDIChildPanel.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("MDIChildPanel", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "Buttons"]);
  const C = [U];
  U.defClass("TMDIChildPanel", "TPanel", {"sbclose": {"name": "sbClose", "type": "TSpeedButton"}, "fbuttoncloseclick": {"name": "FButtonCloseClick", "type": "TNotifyEvent"}, "ownerhandle": {"name": "OwnerHandle", "type": "THandle"}, "pclient": {"name": "pClient", "type": "TPanel"}, "pheader": {"name": "pHeader", "type": "TPanel"}}, {"onclose": {"name": "OnClose", "read": "FButtonCloseClick", "write": "FButtonCloseClick"}});
  U.init(async () => {
    U.const("WM_MDIPClose", $.add((await $.v(C, "WM_USER")), 138));
  });
  U.func("Register", async function Register(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "RegisterComponents", ["Smart", [(await $.v(C, "TMDIChildPanel"))]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TMDIChildPanel", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TMDIChildPanel", "Create", [L0["aowner"]], arguments);
  await $.set(C, "OwnerHandle", (await $.mv(((await $.v(C, "owner"))), "Handle")));
  await $.mset(Self, "BevelInner", (await $.v(C, "bvNone")));
  await $.mset(Self, "BevelOuter", (await $.v(C, "bvRaised")));
  await $.mset(Self, "Width", 310);
  await $.mset(Self, "Height", 280);
  await $.set(C, "pHeader", (await $.mcall((await $.v(C, "TPanel")), "Create", [Self])));
  {
    const $t1 = (await $.v(C, "pHeader"));
    await $.wset([$t1], "Parent", Self, C);
    await $.wset([$t1], "Color", (await $.wv([$t1], "clNavy", C, false)), C);
    await $.wset([$t1], "Align", (await $.wv([$t1], "alTop", C, false)), C);
    await $.wset([$t1], "Height", 16, C);
  }
  await $.set(C, "pClient", (await $.mcall((await $.v(C, "TPanel")), "Create", [Self])));
  {
    const $t2 = (await $.v(C, "pClient"));
    await $.wset([$t2], "Parent", Self, C);
    await $.wset([$t2], "Align", (await $.wv([$t2], "alClient", C, false)), C);
    await $.wset([$t2], "Caption", "You will see", C);
    await $.wset([$t2], "BevelInner", (await $.wv([$t2], "bvNone", C, false)), C);
    await $.wset([$t2], "BevelOuter", (await $.wv([$t2], "bvNone", C, false)), C);
  }
  await $.set(C, "sbClose", (await $.mcall((await $.v(C, "TSpeedButton")), "Create", [Self])));
  {
    const $t3 = (await $.v(C, "sbClose"));
    await $.wset([$t3], "Parent", (await $.wv([$t3], "pHeader", C, false)), C);
    await $.wset([$t3], "Caption", "X", C);
    await $.mset((await $.wv([$t3], "Font", C, false)), "Name", "Tahoma");
    await $.mset((await $.wv([$t3], "Font", C, false)), "Style", [(await $.wv([$t3], "fsBold", C, false))]);
    await $.wset([$t3], "Height", 14, C);
    await $.wset([$t3], "Width", 16, C);
    await $.wset([$t3], "Top", $.add((await $.mv(Self, "Top")), 2), C);
    await $.wset([$t3], "Left", $.add((await $.mv(Self, "Left")), 168), C);
    await $.wset([$t3], "Anchors", [(await $.wv([$t3], "akTop", C, false)), (await $.wv([$t3], "akRight", C, false))], C);
    await $.wset([$t3], "Layout", (await $.wv([$t3], "blGlyphBottom", C, false)), C);
    await $.wset([$t3], "OnClick", (await $.wv([$t3], "ButtonCloseClick", C, true)), C);
  }
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TMDIChildPanel", "ButtonCloseClick", async function ButtonCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "FButtonCloseClick"))])))) {
    await $.stmt((await $.call(C, "FButtonCloseClick", [Self])));
    await $.stmt((await $.call(C, "SendMessage", [(await $.v(C, "OwnerHandle")), (await $.v(C, "WM_MDIPClose")), (await $.mv(Self, "tag")), 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMDIChildPanel", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "sbClose")), "Free", []);
  await $.mcall((await $.v(C, "pHeader")), "Free", []);
  await $.mcall((await $.v(C, "pClient")), "Free", []);
  await $.inherited(Self, "TMDIChildPanel", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  return U;
}
