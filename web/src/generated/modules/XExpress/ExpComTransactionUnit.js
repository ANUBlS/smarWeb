// Generated from ExpComTransactionUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ExpComTransactionUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "ExtCtrls", "ComCtrls", "DBCtrls", "StdCtrls", "Db", "ExpDataModuleUnit"]);
  const C = [U];
  U.defClass("TExpComTransactionForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}}, {});
  U.init(async () => {
    U.var_("ExpComTransactionForm", null, "TExpComTransactionForm");
  });
  U.method("TExpComTransactionForm", "DBNavigator1Click", async function DBNavigator1Click(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "button"]);
  if ($.truthy($.eq(L0["button"], (await $.v(C, "nbpost"))))) {
    await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpComissionDataSet")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender", "Button"], "kind": "procedure", "ptypes": ["TObject", "TNavigateBtn"]});
  U.method("TExpComTransactionForm", "DBGrid2KeyPress", async function DBGrid2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "ExpDataModule"));
    const $t2 = (await $.wv([$t1], "ExpComissionDataSet", C, false));
    if ($.truthy($.in_((await $.wv([$t1, $t2], "UpdateStatus", C, false)), [(await $.wv([$t1, $t2], "usInserted", C, false)), (await $.wv([$t1, $t2], "usModified", C, false))]))) {
      if ($.truthy($.eq((await $.mv((await $.wv([$t1, $t2], "DBGrid2", C, false)), "SelectedIndex")), 1))) {
        if ($.truthy($.gt((await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["amount"], C)), "AsFloat")), 0))) {
          await $.mset((await $.wcall([$t1, $t2], "FieldByName", ["percent"], C)), "AsFloat", 0);
        }
      } else {
        if ($.truthy($.eq((await $.mv((await $.wv([$t1, $t2], "DBGrid2", C, false)), "SelectedIndex")), 2))) {
          await $.mset((await $.wcall([$t1, $t2], "FieldByName", ["amount"], C)), "AsFloat", 0);
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
