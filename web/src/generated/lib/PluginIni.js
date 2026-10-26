// Generated from PluginIni.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PluginIni", ["Windows", "SysUtils", "Classes", "IniFiles"]);
  const C = [U];
  U.defClass("TMenuIni", "TComponent", {"finilocation": {"name": "FIniLocation", "type": "String"}, "finisection": {"name": "FIniSection", "type": "String"}, "factive": {"name": "FActive", "type": "Boolean"}, "location": {"name": "Location", "type": "TIniFile"}}, {"inilocation": {"name": "IniLocation", "read": "FIniLocation", "write": "FIniLocation"}, "inisection": {"name": "IniSection", "read": "FIniSection", "write": "FIniSection"}, "active": {"name": "Active", "read": "GetActive", "write": "SetActive"}});
  U.init(async () => {
  });
  U.method("TMenuIni", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TMenuIni", "Create", [L0["aowner"]], arguments);
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TMenuIni", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TMenuIni", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TMenuIni", "GetActive", async function GetActive(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "FActive"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMenuIni", "SetActive", async function SetActive(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy(($.eq($.mul([(await $.v(C, "csDesigning"))], (await $.v(C, "ComponentState"))), [])))) {
    if ($.truthy($.ne(L0["value"], (await $.v(C, "FActive"))))) {
      if ($.truthy(L0["value"])) {
        await $.set(C, "Location", (await $.mcall((await $.v(C, "TIniFile")), "Create", [(await $.v(C, "IniLocation"))])));
      } else {
        await $.mcall((await $.v(C, "Location")), "Free", []);
      }
    }
  }
  await $.set(C, "FActive", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TMenuIni", "Open", async function Open(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "Active", true);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TMenuIni", "Close", async function Close(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "Active", false);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("Register", async function Register(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "RegisterComponents", ["CreditsMgr", [(await $.v(C, "TMenuIni"))]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  return U;
}
