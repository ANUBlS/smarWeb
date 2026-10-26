// Generated from Unitexcel.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unitexcel", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "StdCtrls", "Grids", "DBGrids", "U9", "Unit18", "Unitsalary", "EXCELNEWCARD", "PROLONGATIONUNIT", "accountcloseunit", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TEXCELform", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "button1": {"name": "Button1", "type": "TButton"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("EXCELform", null, "TEXCELform");
  });
  U.method("TEXCELform", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Button1")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEXCELform", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "excels")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEXCELform", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["Id"])), "AsInteger")), 1))) {
    await $.set(C, "Salary", (await $.mcall((await $.v(C, "TSalary")), "create", [Self])));
    await $.mcall((await $.v(C, "Salary")), "showmodal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["Id"])), "AsInteger")), 2))) {
    await $.mcall((await $.v(C, "newcardex")), "showmodal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["Id"])), "AsInteger")), 3))) {
    await $.mcall((await $.v(C, "Prolongationxls")), "showmodal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["Id"])), "AsInteger")), 4))) {
    await $.set(C, "accountclose", (await $.mcall((await $.v(C, "taccountclose")), "create", [Self])));
    await $.mcall((await $.v(C, "accountclose")), "showmodal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEXCELform", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "newcardex", (await $.mcall((await $.v(C, "Tnewcardex")), "create", [Self])));
  await $.set(C, "Prolongationxls", (await $.mcall((await $.v(C, "TProlongationxls")), "create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
