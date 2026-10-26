// Generated from Sequence.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Sequence", ["SysUtils", "Classes"]);
  const C = [U];
  U.defClass("TSequence", "TComponent", {"fcurrentvalue": {"name": "FCurrentValue", "type": "Longword"}, "fmaxvalue": {"name": "FMaxValue", "type": "Longword"}, "fstartvalue": {"name": "FStartValue", "type": "Longword"}, "finclusive": {"name": "FInclusive", "type": "Boolean"}, "fstep": {"name": "FStep", "type": "Word"}, "ffirststep": {"name": "FFirstStep", "type": "Boolean"}}, {"maxvalue": {"name": "MaxValue", "read": "FMaxValue", "write": "FMaxValue"}, "startvalue": {"name": "StartValue", "read": "GetStartValue", "write": "SetStartValue"}, "step": {"name": "Step", "read": "FStep", "write": "FStep"}, "inclusive": {"name": "Inclusive", "read": "FInclusive", "write": "SetInclusive"}});
  U.init(async () => {
  });
  U.method("TSequence", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TSequence", "Create", [L0["aowner"]], arguments);
  await $.stmt($.call(C, "Reset", []));
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TSequence", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TSequence", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TSequence", "GetStartValue", async function GetStartValue(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "FStartValue"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSequence", "SetStartValue", async function SetStartValue(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy((await $.or_(($.eq((await $.v(C, "MaxValue")), 0)), async () => ($.le($.sub((await $.v(C, "FStartValue")), $.mul((await $.v(C, "Step")), (await $.call(C, "Byte", [(await $.v(C, "Inclusive"))])))), L0["value"])))))) {
    await $.set(C, "FStartValue", L0["value"]);
  }
  await $.set(C, "FCurrentValue", (await $.v(C, "FStartValue")));
  await $.set(C, "FFirstStep", (await $.and_((await $.v(C, "Inclusive")), async () => ($.eq((await $.v(C, "FCurrentValue")), (await $.v(C, "FStartValue")))))));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Longword"]});
  U.method("TSequence", "SetMaxValue", async function SetMaxValue(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy((await $.or_(($.eq(L0["value"], 0)), async () => ((await $.or_(($.le($.sub((await $.v(C, "FStartValue")), $.mul((await $.v(C, "Step")), (await $.call(C, "Byte", [(await $.v(C, "Inclusive"))])))), L0["value"])), async () => ($.le((await $.v(C, "FCurrentValue")), L0["value"]))))))))) {
    await $.set(C, "FMaxValue", L0["value"]);
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Longword"]});
  U.method("TSequence", "SetInclusive", async function SetInclusive(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FInclusive", L0["value"]);
  await $.set(C, "FFirstStep", (await $.v(C, "Inclusive")));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TSequence", "CurrentValue", async function CurrentValue(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "FCurrentValue"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSequence", "NextValue", async function NextValue(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0, "tempvalue": 0};
  L0["tempvalue"] = $.add((await $.v(C, "FCurrentValue")), $.mul((await $.v(C, "Step")), (await $.call(C, "Byte", [$.not((await $.v(C, "FFirstStep")))]))));
  if ($.truthy((await $.or_(($.eq((await $.v(C, "MaxValue")), 0)), async () => ($.le(L0["tempvalue"], (await $.v(C, "MaxValue")))))))) {
    await $.set(C, "FCurrentValue", L0["tempvalue"]);
    await $.set(C, "FFirstStep", false);
  }
  L0["result"] = (await $.v(C, "FCurrentValue"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSequence", "Reset", async function Reset(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "Inclusive", true);
  await $.set(C, "FFirstStep", true);
  await $.set(C, "Step", 1);
  await $.set(C, "MaxValue", 0);
  await $.set(C, "StartValue", 0);
  await $.set(C, "FCurrentValue", 0);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("Register", async function Register(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "RegisterComponents", ["CreditsMgr", [(await $.v(C, "TSequence"))]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  return U;
}
