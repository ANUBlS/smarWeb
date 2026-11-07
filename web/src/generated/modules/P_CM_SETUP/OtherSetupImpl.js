// Generated from OtherSetupImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("OtherSetupImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "NLSLocalizer", "Db", "OracleData", "StdCtrls", "Grids", "DBGridEh", "ExtCtrls", "DBCtrls", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TfrmOtherSetup", "TForm", {"statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "countries": {"name": "Countries", "type": "TOracleDataSet"}, "countriescode": {"name": "CountriesCODE", "type": "TStringField"}, "countriesname": {"name": "CountriesNAME", "type": "TStringField"}, "insagency": {"name": "insagency", "type": "TOracleDataSet"}, "countriesds": {"name": "Countriesds", "type": "TDataSource"}, "insagencyds": {"name": "insagencyds", "type": "TDataSource"}, "insagencyid": {"name": "insagencyID", "type": "TIntegerField"}, "insagencyname": {"name": "insagencyNAME", "type": "TStringField"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "dbnavigator2": {"name": "DBNavigator2", "type": "TDBNavigator"}}, {});
  U.init(async () => {
    U.var_("frmOtherSetup", null, "TfrmOtherSetup");
  });
  U.method("TfrmOtherSetup", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmOtherSetup", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Countries")), "Open", []);
  await $.mcall((await $.v(C, "insagency")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmOtherSetup", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Countries")), "CloseAll", []);
  await $.mcall((await $.v(C, "insagency")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
