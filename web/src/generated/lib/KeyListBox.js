// Generated from KeyListBox.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("KeyListBox", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CheckLst"]);
  const C = [U];
  U.defClass("TKeyListBox", "TCheckListBox", {"fkeys": {"name": "FKeys", "type": "TStringList"}}, {"keys": {"name": "Keys", "read": "FKeys", "write": "SetKeys"}});
  U.init(async () => {
  });
  U.method("TKeyListBox", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TKeyListBox", "Create", null, arguments);
  await $.set(C, "FKeys", (await $.mv((await $.v(C, "TStringList")), "Create")));
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TKeyListBox", "SetKeys", async function SetKeys(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.mcall((await $.v(C, "FKeys")), "Assign", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TStringList"]});
  U.method("TKeyListBox", "GetCheckedKeyList", async function GetCheckedKeyList(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null, "i": 0, "rez": null};
  L0["rez"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  { const $t1 = $.sub((await $.mv((await $.v(C, "FKeys")), "Count")), 1);
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      if ($.truthy((await $.idx((await $.v(C, "Checked")), [L0["i"]])))) {
        await $.stmt((await $.mcall(L0["rez"], "Add", [(await $.idx((await $.v(C, "FKeys")), [L0["i"]]))])));
      }
      await $.tick();
    }
  }
  L0["result"] = L0["rez"];
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("Register", async function Register(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "RegisterComponents", ["CreditsMgr", [(await $.v(C, "TKeyListBox"))]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  return U;
}
