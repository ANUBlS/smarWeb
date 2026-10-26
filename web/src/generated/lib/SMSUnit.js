// Generated from SMSUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SMSUnit", ["Dialogs", "SysUtils"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("sms", async function sms(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"id": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["id"]);
  if ($.truthy($.gt(L0["id"], 1))) {
    await $.stmt((await $.call(C, "showmessage", ["samir"])));
  }
  return L0.result;
}, {"params": ["id"], "kind": "function", "ptypes": ["integer"]});
  return U;
}
