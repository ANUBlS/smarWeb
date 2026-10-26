// Generated from Unit2.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit2", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "comobj", "ldialogs", "ZamirImpl1", "unit1"]);
  const C = [U];
  U.defClass("TFconfirm", "TForm", {"image1": {"name": "Image1", "type": "TImage"}, "btnyes": {"name": "btnyes", "type": "TButton"}, "btnno": {"name": "btnNo", "type": "TButton"}, "lblinfo": {"name": "lblinfo", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("Fconfirm", null, "TFconfirm");
  });
  U.method("TFconfirm", "btnyesClick", async function btnyesClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "SDHesabat"));
    { const $t2 = (await $.wv([$t1], "confirm", C, false));
      if ($.eq($t2, 1)) {
        await $.mcall((await $.wv([$t1], "Application", C, false)), "ProcessMessages", []);
        try {
          {
            const $t4 = (await $.wv([$t1], "oradatcell", C, false));
            await $.stmt($.wcall([$t1, $t4], "Close", [], C));
            await $.mcall((await $.wv([$t1, $t4], "Sql", C, false)), "Clear", []);
            await $.mset((await $.wv([$t1, $t4], "Sql", C, false)), "Text", $.add("Select s.rowid,s.* from operation_balances s where BookId=", (await $.mv((await $.mcall((await $.wv([$t1, $t4], "oradatbook", C, false)), "fieldbyname", ["schema"])), "AsString"))));
            await $.stmt($.wcall([$t1, $t4], "Open", [], C));
            await $.stmt($.wcall([$t1, $t4], "First", [], C));
            while ($.truthy($.gt((await $.wv([$t1, $t4], "recordcount", C, false)), 0))) {
              await $.stmt($.wcall([$t1, $t4], "Delete", [], C));
              await $.tick();
            }
            await $.stmt($.wcall([$t1, $t4], "Next", [], C));
          }
        } catch ($t3) {
          $.rethrowControl($t3);
          $.handled($t3);
          await $.stmt((await $.wcall([$t1], "showmessage", ["error: 602"], C)));
        }
        try {
          {
            const $t6 = (await $.wv([$t1], "oradatSheet", C, false));
            await $.stmt($.wcall([$t1, $t6], "Close", [], C));
            await $.mcall((await $.wv([$t1, $t6], "Sql", C, false)), "Clear", []);
            await $.mset((await $.wv([$t1, $t6], "Sql", C, false)), "Text", $.add("Select s.rowid,s.* from operations s where BookId=", (await $.mv((await $.mcall((await $.wv([$t1, $t6], "oradatbook", C, false)), "fieldbyname", ["schema"])), "AsString"))));
            await $.stmt($.wcall([$t1, $t6], "Open", [], C));
            await $.stmt($.wcall([$t1, $t6], "First", [], C));
            while ($.truthy($.gt((await $.wv([$t1, $t6], "recordcount", C, false)), 0))) {
              await $.stmt($.wcall([$t1, $t6], "Delete", [], C));
              await $.tick();
            }
            await $.stmt($.wcall([$t1, $t6], "Next", [], C));
          }
        } catch ($t5) {
          $.rethrowControl($t5);
          $.handled($t5);
          await $.stmt((await $.wcall([$t1], "showmessage", ["error: 620"], C)));
        }
        await $.mcall((await $.wv([$t1], "oradatbook", C, false)), "Delete", []);
        await $.stmt((await $.mcall((await $.wv([$t1], "dbgrid1", C, false)), "OnCellClick", [(await $.idx((await $.mv((await $.wv([$t1], "dbgrid1", C, false)), "columns")), [1]))])));
      }
      else if ($.eq($t2, 2)) {
        try {
          await $.mcall((await $.wv([$t1], "oradatcell", C, false)), "Delete", []);
        } catch ($t7) {
          $.rethrowControl($t7);
          $.handled($t7);
          return L0.result;
        }
      }
    }
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
