// Generated from Unit_Form_columun.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit_Form_columun", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CheckLst", "ExtCtrls", "Oracle", "OracleNavigator", "DB", "Grids", "XDBGrids", "OracleData", "SboapiDataModuleImpl", "Full_ImportForm"]);
  const C = [U];
  U.defClass("TForm_column", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "oraclepackage1": {"name": "OraclePackage1", "type": "TOraclePackage"}, "checklistbox": {"name": "CheckListBox", "type": "TCheckListBox"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "memo1": {"name": "Memo1", "type": "TMemo"}}, {});
  U.init(async () => {
    U.var_("Form_column", null, "TForm_column");
  });
  U.method("TForm_column", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Memo1")), "Clear", []);
  await $.set(C, "NumberOfCheckedItems", 0);
  { const $t1 = $.sub((await $.mv((await $.v(C, "CheckListBox")), "Count")), 1);
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      if ($.truthy((await $.idx((await $.mv((await $.v(C, "CheckListBox")), "Checked")), [L0["i"]])))) {
        await $.set(C, "NumberOfCheckedItems", $.add((await $.v(C, "NumberOfCheckedItems")), 1));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo1")), "Lines")), "Add", [(await $.call(C, "inttostr", [$.add(L0["i"], 1)]))])));
      }
      await $.tick();
    }
  }
  await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["get_create_table", [(await $.v(C, "NumberOfCheckedItems"))]])));
  await $.mset((await $.v(C, "OracleDataSet1")), "Active", true);
  await $.mcall((await $.mv((await $.v(C, "Form_column")), "OracleDataSet1")), "Refresh", []);
  await $.mcall((await $.v(C, "Form_column")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_column", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "CheckListBox"));
    if ($.truthy((await $.idx((await $.wv([$t3], "Checked", C, false)), [(await $.wv([$t3], "ItemIndex", C, false))])))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t3], "Memo1", C, false)), "Lines")), "Add", [(await $.idx((await $.wv([$t3], "Items", C, false)), [(await $.wv([$t3], "ItemIndex", C, false))]))])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
