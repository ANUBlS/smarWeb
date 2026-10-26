// Generated from FrmEditBudgetimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmEditBudgetimpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Buttons", "StdCtrls", "Grids", "DBGridEh", "Mask", "DBCtrlsEh", "NLSLocalizer", "ExtCtrls", "DBCtrls", "DBGridEhGrouping", "GridsEh", "Dmbudgetimpl", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFrmeditBudget", "TForm", {"button2": {"name": "Button2", "type": "TButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "combobox": {"name": "combobox", "type": "TComboBox"}, "editname": {"name": "EditName", "type": "TDBEditEh"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}}, {});
  U.init(async () => {
    U.var_("FrmeditBudget", null, "TFrmeditBudget");
  });
  U.method("TFrmeditBudget", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "combobox")), "itemindex", 0);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmeditBudget", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DMBudget"));
    { const $t2 = (await $.mv((await $.wv([$t1], "combobox", C, false)), "ItemIndex"));
      if ($.eq($t2, 0)) {
        await $.wset([$t1], "status", 0, C);
      }
      else if ($.eq($t2, 1)) {
        await $.wset([$t1], "status", 1, C);
      }
    }
    await $.mcall((await $.wv([$t1], "AddArt", C, false)), "post", []);
    await $.mcall((await $.wv([$t1], "ArticlesDST", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t1], "AddArt", C, false)), "RefreshRecord", []);
    await $.mcall((await $.wv([$t1], "AddArt", C, false)), "edit", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmeditBudget", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmeditBudget", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "combobox")), "ItemIndex", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMBudget")), "AddArt")), "FieldByName", ["status"])), "asinteger")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
