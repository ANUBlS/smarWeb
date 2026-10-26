// Generated from FrmSetingBudgetImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmSetingBudgetImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrlsEh", "ExtCtrls", "Grids", "DBGridEh", "DBCtrls", "DBGridEhGrouping", "GridsEh", "Dmbudgetimpl", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TBudgetSetingFr", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "button2": {"name": "Button2", "type": "TButton"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "dbdatetimeediteh2": {"name": "DBDateTimeEditEh2", "type": "TDBDateTimeEditEh"}, "label5": {"name": "Label5", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("BudgetSetingFr", null, "TBudgetSetingFr");
  });
  U.method("TBudgetSetingFr", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBudgetSetingFr", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ComboBox1")), "ItemIndex", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMBudget")), "AddArt")), "FieldByName", ["status"])), "asinteger")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBudgetSetingFr", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TBudgetSetingFr", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TBudgetSetingFr", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMBudget")), "ItmDataSet")), "refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DMBudget")), "ArtDataSet")), "refresh", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TBudgetSetingFr", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DMBudget"));
    await $.mcall((await $.wv([$t1], "ArtDatset", C, false)), "open", []);
    await $.mcall((await $.wv([$t1], "SYSDAT", C, false)), "open", []);
    await $.mset((await $.mcall((await $.wv([$t1], "ArtDatset", C, false)), "FieldbyName", ["begindat"])), "asDateTime", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DMBudget", C, false)), "SYSDAT")), "FieldbyName", ["begindat"])), "asDateTime")));
    await $.mset((await $.mcall((await $.wv([$t1], "ArtDatset", C, false)), "FieldbyName", ["enddat"])), "asDateTime", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DMBudget", C, false)), "SYSDAT")), "FieldbyName", ["enddat"])), "asDateTime")));
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
