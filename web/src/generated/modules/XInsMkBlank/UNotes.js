// Generated from UNotes.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UNotes", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBCtrls", "Buttons", "ExtCtrls", "DB", "UMKDataMod"]);
  const C = [U];
  U.defClass("TfrmNotes", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "btok": {"name": "btOk", "type": "TBitBtn"}, "dbmemo1": {"name": "DBMemo1", "type": "TDBMemo"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("frmNotes", null, "TfrmNotes");
  });
  U.method("TfrmNotes", "btOkClick", async function btOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "InsMKDataMod"));
    const $t2 = (await $.wv([$t1], "ODSMotorkasko", C, false));
    if ($.truthy($.in_((await $.wv([$t1, $t2], "State", C, false)), [(await $.wv([$t1, $t2], "dsEdit", C, false)), (await $.wv([$t1, $t2], "dsInsert", C, false))]))) {
      await $.stmt($.wcall([$t1, $t2], "Post", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
