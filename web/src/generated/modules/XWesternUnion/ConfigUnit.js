// Generated from ConfigUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ConfigUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ExtCtrls", "DBViewComboBox", "Db", "OracleData", "SearchEdit", "Grids", "DBGrids", "DBCtrls", "DataModuleUnit"]);
  const C = [U];
  U.defClass("TFormConfig", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "ds_accountprincipial": {"name": "DS_AccountPrincipial", "type": "TDataSource"}, "ds_accountrevenue": {"name": "DS_AccountRevenue", "type": "TDataSource"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "accountrevenue": {"name": "AccountRevenue", "type": "TOracleDataSet"}, "accountprincipial": {"name": "AccountPrincipial", "type": "TOracleDataSet"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "principial": {"name": "Principial", "type": "TSearchEdit"}, "dbviewcombobox1": {"name": "DBViewComboBox1", "type": "TDBViewComboBox"}, "p_combodc": {"name": "P_ComboDC", "type": "TComboBox"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "revenue": {"name": "Revenue", "type": "TSearchEdit"}, "dbviewcombobox3": {"name": "DBViewComboBox3", "type": "TDBViewComboBox"}, "r_combodc": {"name": "R_ComboDC", "type": "TComboBox"}, "r_combobranch": {"name": "R_ComboBranch", "type": "TDBViewComboBox"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "p_combobranch": {"name": "P_ComboBranch", "type": "TDBViewComboBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}}, {});
  U.init(async () => {
    U.var_("FormConfig", null, "TFormConfig");
  });
  U.method("TFormConfig", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormConfig", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_((await $.or_(($.eq((await $.mv((await $.v(C, "P_ComboDC")), "ItemIndex")), (-(1)))), async () => ($.eq((await $.mv((await $.v(C, "DBViewComboBox1")), "ItemIndex")), (-(1)))))), async () => ($.eq((await $.mv((await $.v(C, "Principial")), "Text")), "")))))) {
    return L0.result;
  }
  {
    const $t1 = (await $.v(C, "DataModWU"));
    await $.stmt((await $.mcall((await $.wv([$t1], "TempPack", C, false)), "CallProcedure", ["wu_accounts_add", [(await $.mv((await $.mcall((await $.wv([$t1], "DataAccount", C, false)), "FieldByName", ["id"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t1], "DataValute", C, false)), "FieldByName", ["Valute"])), "AsInteger")), (await $.wcall([$t1], "Copy", [(await $.idx((await $.mv((await $.wv([$t1], "P_ComboDC", C, false)), "Items")), [(await $.mv((await $.wv([$t1], "P_ComboDC", C, false)), "ItemIndex"))])), 0, 1], C)), 0, (await $.mv((await $.mcall((await $.wv([$t1], "DataBranch", C, false)), "FieldByName", ["branchID"])), "AsInteger"))]])));
  }
  await $.mcall((await $.v(C, "Principial")), "Clear", []);
  await $.mcall((await $.v(C, "Revenue")), "Clear", []);
  await $.mset((await $.v(C, "P_ComboDC")), "ItemIndex", 0);
  await $.mset((await $.v(C, "R_ComboDC")), "ItemIndex", 0);
  await $.mset((await $.v(C, "P_ComboBranch")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "R_ComboBranch")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "DBViewComboBox1")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "DBViewComboBox3")), "ItemIndex", (-(1)));
  await $.mcall((await $.v(C, "AccountPrincipial")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormConfig", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_((await $.or_(($.eq((await $.mv((await $.v(C, "R_ComboDC")), "ItemIndex")), (-(1)))), async () => ($.eq((await $.mv((await $.v(C, "DBViewComboBox3")), "ItemIndex")), (-(1)))))), async () => ($.eq((await $.mv((await $.v(C, "Revenue")), "Text")), "")))))) {
    return L0.result;
  }
  {
    const $t2 = (await $.v(C, "DataModWU"));
    await $.stmt((await $.mcall((await $.wv([$t2], "TempPack", C, false)), "CallProcedure", ["wu_accounts_add", [(await $.mv((await $.mcall((await $.wv([$t2], "DataAccount", C, false)), "FieldByName", ["id"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t2], "DataValute", C, false)), "FieldByName", ["Valute"])), "AsInteger")), (await $.wcall([$t2], "Copy", [(await $.idx((await $.mv((await $.wv([$t2], "R_ComboDC", C, false)), "Items")), [(await $.mv((await $.wv([$t2], "R_ComboDC", C, false)), "ItemIndex"))])), 0, 1], C)), 1, (await $.mv((await $.mcall((await $.wv([$t2], "DataBranch", C, false)), "FieldByName", ["BRANCHID"])), "AsInteger"))]])));
  }
  await $.mcall((await $.v(C, "Revenue")), "Clear", []);
  await $.mset((await $.v(C, "P_ComboDC")), "ItemIndex", 0);
  await $.mset((await $.v(C, "R_ComboDC")), "ItemIndex", 0);
  await $.mset((await $.v(C, "P_ComboBranch")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "R_ComboBranch")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "DBViewComboBox1")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "DBViewComboBox3")), "ItemIndex", (-(1)));
  await $.mcall((await $.v(C, "AccountRevenue")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormConfig", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "DataModWU"));
    await $.stmt((await $.mcall((await $.wv([$t3], "TempPack", C, false)), "CallProcedure", ["PrincipialTrans", [(await $.wcall([$t3], "Ord", [(await $.mv((await $.wcall([$t3], "TCheckBox", [(await $.wv([$t3], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "Checked"))], C))]])));
    await $.mcall((await $.wv([$t3], "DataConfig", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
