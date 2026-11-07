// Generated from cFileListComboBox.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("cFileListComboBox", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls"]);
  const C = [U];
  U.defClass("TFileListComboBox", "TComboBox", {"fdirectory": {"name": "FDirectory", "type": "TFileName"}, "ffilter": {"name": "FFilter", "type": "String"}}, {"directory": {"name": "Directory", "read": "FDirectory", "write": "SetDirectory"}, "filter": {"name": "Filter", "read": "FFilter", "write": "SetFilter"}});
  U.init(async () => {
  });
  U.method("TFileListComboBox", "SetDirectory", async function SetDirectory(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FDirectory", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TFileName"]});
  U.method("TFileListComboBox", "SetFilter", async function SetFilter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FFilter", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFileListComboBox", "FillList", async function FillList(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "srch": null};
  await $.stmt($.call(C, "ClearList", []));
  await $.stmt((await $.call(C, "FindFirst", [$.add($.add((await $.v(C, "FDirectory")), "\\"), (await $.v(C, "FFilter"))), (await $.v(C, "faAnyFile")), $.ref(async () => L0["srch"], async ($t1) => { L0["srch"] = $t1; })])));
  do {
    await $.stmt((await $.mcall((await $.v(C, "Items")), "Add", [(await $.call(C, "UpperCase", [(await $.mv(L0["srch"], "Name"))]))])));
    await $.tick();
  } while (!$.truthy($.gt((await $.call(C, "FindNext", [$.ref(async () => L0["srch"], async ($t2) => { L0["srch"] = $t2; })])), 0)));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFileListComboBox", "ClearList", async function ClearList(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "Items")), "Clear", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFileListComboBox", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TFileListComboBox", "Create", null, arguments);
  await $.set(C, "FDirectory", "C:");
  await $.set(C, "FFilter", "*.*");
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.func("Register", async function Register(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "RegisterComponents", ["CreditsMgr", [(await $.v(C, "TFileListComboBox"))]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  return U;
}
