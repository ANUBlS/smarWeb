// Generated from ReturnTr.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ReturnTr", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "CustAnalysDataModuleImpl", "Menus"]);
  const C = [U];
  U.defClass("TFormReturns", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "mliyyatlvet1": {"name": "mliyyatlvet1", "type": "TMenuItem"}}, {});
  U.init(async () => {
    U.var_("FormReturns", null, "TFormReturns");
  });
  U.method("TFormReturns", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returntrans")), "Active", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormReturns", "mliyyatlvet1Click", async function mliyyatlvet1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "trid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "OraclePackage2")), "CallProcedure", ["transaction_delete", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["transid"])), "AsInteger"))]])));
  await $.stmt((await $.call(C, "ShowMessage", ["Əməliyyat ləğv edildi !!"])));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
