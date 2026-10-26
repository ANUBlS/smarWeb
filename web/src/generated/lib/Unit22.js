// Generated from Unit22.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit22", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "StdCtrls", "ExtCtrls", "DB", "UnitData", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TForm2", "TForm", {"dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "button2": {"name": "Button2", "type": "TButton"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "button1": {"name": "Button1", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "button4": {"name": "Button4", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("Form2", null, "TForm2");
  });
  U.method("TForm2", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "vv": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.in_((await $.mv((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet9")), "State")), [(await $.v(C, "dsEdit")), (await $.v(C, "dsinsert"))]))) {
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet9")), "post", []);
  } else {
    L0["vv"] = (await $.mv((await $.v(C, "Edit1")), "text"));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SalaryPackage")), "CallProcedure", ["WA_INS", [L0["vv"]]])));
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet9")), "Refresh", []);
    await $.mset((await $.v(C, "Edit1")), "text", "");
  }
  await $.stmt((await $.call(C, "ShowMessage", ["İstifadəçi daxil edildi"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm2", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "vv": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.in_((await $.mv((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet10")), "State")), [(await $.v(C, "dsEdit")), (await $.v(C, "dsinsert"))]))) {
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet10")), "post", []);
  } else {
    L0["vv"] = (await $.mv((await $.v(C, "Edit2")), "text"));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SalaryPackage")), "CallProcedure", ["WA_INS1", [L0["vv"]]])));
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet10")), "Refresh", []);
    await $.mset((await $.v(C, "Edit2")), "text", "");
  }
  await $.stmt((await $.call(C, "ShowMessage", ["Şöbə daxil edildi"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm2", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["v_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet9")), "fieldbyname", ["id"])), "asinteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SalaryPackage")), "CallProcedure", ["WA_DEL", [L0["v_id"]]])));
  await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet9")), "Refresh", []);
  await $.stmt((await $.call(C, "ShowMessage", ["Silindi"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm2", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_id1": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["v_id1"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet10")), "fieldbyname", ["id"])), "asinteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SalaryPackage")), "CallProcedure", ["WA_DEL1", [L0["v_id1"]]])));
  await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OracleDataSet10")), "Refresh", []);
  await $.stmt((await $.call(C, "ShowMessage", ["Silindi"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm2", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
