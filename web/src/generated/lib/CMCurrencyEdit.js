// Generated from CMCurrencyEdit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CMCurrencyEdit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls"]);
  const C = [U];
  U.defClass("TCMCurrencyEdit", "TEdit", {"fvalue": {"name": "FValue", "type": "Currency"}, "fprivatechanging": {"name": "FPrivateChanging", "type": "Boolean"}}, {"value": {"name": "Value", "read": "FValue", "write": "SetValue"}});
  U.init(async () => {
  });
  U.method("TCMCurrencyEdit", "DoEnter", async function DoEnter(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "SetText", [(await $.v(C, "GetCurrencyUnFormated"))])));
  await $.stmt($.call(C, "SelectAll", []));
  await $.inherited(Self, "TCMCurrencyEdit", "DoEnter", null, arguments);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCMCurrencyEdit", "DoExit", async function DoExit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "SetText", [(await $.v(C, "GetCurrencyFormated"))])));
  await $.inherited(Self, "TCMCurrencyEdit", "DoExit", null, arguments);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCMCurrencyEdit", "SetValue", async function SetValue(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"avalue": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["avalue"]);
  if ($.truthy($.ne(L0["avalue"], (await $.v(C, "FValue"))))) {
    await $.set(C, "FValue", L0["avalue"]);
    if ($.truthy((await $.v(C, "Focused")))) {
      await $.stmt((await $.call(C, "SetText", [(await $.v(C, "GetCurrencyUnFormated"))])));
    } else {
      await $.stmt((await $.call(C, "SetText", [(await $.v(C, "GetCurrencyFormated"))])));
    }
  }
  return L0.result;
}, {"params": ["AValue"], "kind": "procedure", "ptypes": ["Currency"]});
  U.method("TCMCurrencyEdit", "GetCurrencyFormated", async function GetCurrencyFormated(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "CurrToStrF", [(await $.v(C, "Value")), (await $.v(C, "ffCurrency")), (await $.v(C, "CurrencyDecimals"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCMCurrencyEdit", "GetCurrencyUnFormated", async function GetCurrencyUnFormated(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "CurrToStrF", [(await $.v(C, "Value")), (await $.v(C, "ffGeneral")), (await $.v(C, "CurrencyDecimals"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCMCurrencyEdit", "Change", async function Change(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.not((await $.v(C, "FPrivateChanging"))))) {
    if ($.truthy($.ne((await $.v(C, "Text")), ""))) {
      try {
        await $.set(C, "FValue", (await $.call(C, "StrToCurr", [(await $.v(C, "Text"))])));
        await $.inherited(Self, "TCMCurrencyEdit", "Change", null, arguments);
      } catch ($t1) {
        $.rethrowControl($t1);
        $.handled($t1);
        await $.set(C, "FValue", (-(1)));
        throw $t1;
      }
    } else {
      await $.set(C, "FValue", 0);
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCMCurrencyEdit", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TCMCurrencyEdit", "Create", null, arguments);
  await $.set(C, "Text", "0");
  await $.set(C, "FPrivateChanging", false);
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TCMCurrencyEdit", "SetText", async function SetText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"newtext": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["newtext"]);
  await $.set(C, "FPrivateChanging", true);
  try {
    await $.set(C, "Text", L0["newtext"]);
  } finally {
    await $.set(C, "FPrivateChanging", false);
  }
  return L0.result;
}, {"params": ["NewText"], "kind": "procedure", "ptypes": ["String"]});
  U.func("Register", async function Register(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "RegisterComponents", ["CreditsMgr", [(await $.v(C, "TCMCurrencyEdit"))]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  return U;
}
