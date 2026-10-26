// Generated from CourtInfo.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CourtInfo", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "DBCtrls", "UnitDataModuleCourt"]);
  const C = [U];
  U.defClass("TFormCourtInfo", "TForm", {"dbmemo1": {"name": "DBMemo1", "type": "TDBMemo"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("FormCourtInfo", null, "TFormCourtInfo");
  });
  U.method("TFormCourtInfo", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBMemo1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Məlumat sahəsi boşdur!"])));
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSInfo")), "post", []);
  await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSInfo")), "refresh", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCourtInfo", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
