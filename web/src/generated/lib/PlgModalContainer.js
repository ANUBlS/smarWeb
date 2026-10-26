// Generated from PlgModalContainer.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PlgModalContainer", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "UPlgContainer"]);
  const C = [U];
  U.defClass("TPlgModalContainer", "TComponent", {"fmcontainer": {"name": "fmContainer", "type": "TfmContainer"}}, {});
  U.init(async () => {
  });
  U.func("Register", async function Register(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "RegisterComponents", ["Smart", [(await $.v(C, "TPlgModalContainer"))]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPlgModalContainer", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"owner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["owner"]);
  await $.inherited(Self, "TPlgModalContainer", "Create", [L0["owner"]], arguments);
  return L0.result;
}, {"params": ["Owner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TPlgModalContainer", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TPlgModalContainer", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TPlgModalContainer", "ShowModal", async function ShowModal(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"objguid": $.copyArg(p0), "params": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["objguid", "params"]);
  L0["result"] = (await $.v(C, "mrNone"));
  await $.set(C, "fmContainer", (await $.mcall((await $.v(C, "TfmContainer")), "Create", [Self])));
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fmContainer"))])))) {
    await $.stmt((await $.mcall((await $.v(C, "fmContainer")), "OpenObj", [L0["objguid"], L0["params"]])));
    L0["result"] = (await $.mv((await $.v(C, "fmContainer")), "ShowModal"));
  }
  return L0.result;
}, {"params": ["ObjGuid", "Params"], "kind": "function", "ptypes": ["TGUID", "TStringList"]});
  return U;
}
