// Generated from addimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("addimpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CMCurrencyEdit", "Mask", "DBCtrls", "Buttons", "ExtCtrls", "Oracle", "Db", "OracleData", "CommonDecls", "sboapiDataModuleImpl", "mainImpl"]);
  const C = [U];
  U.defClass("TAddForm", "TForm", {"panel2": {"name": "Panel2", "type": "TPanel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "cmcurrencyedit1": {"name": "CMCurrencyEdit1", "type": "TCMCurrencyEdit"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "checkbox3": {"name": "CheckBox3", "type": "TCheckBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "interestsaccounts": {"name": "InterestsAccounts", "type": "TOracleDataSet"}, "interestsaccountsid": {"name": "InterestsAccountsID", "type": "TFloatField"}, "interestsaccountsacc_no": {"name": "InterestsAccountsACC_NO", "type": "TWideStringField"}, "intaccdatsrc": {"name": "IntAccDatSrc", "type": "TDataSource"}, "custintaccounts": {"name": "CustIntAccounts", "type": "TOracleDataSet"}, "custdintaccdatsrc": {"name": "CustDIntAccDatSrc", "type": "TDataSource"}, "custdintaccounts": {"name": "CustDIntAccounts", "type": "TOracleDataSet"}, "custintaccdatsrc": {"name": "CustIntAccDatSrc", "type": "TDataSource"}, "outinterestsaccounts": {"name": "OutInterestsAccounts", "type": "TOracleDataSet"}, "outinterestsaccountsid": {"name": "OutInterestsAccountsID", "type": "TFloatField"}, "outinterestsaccountsacc_no": {"name": "OutInterestsAccountsACC_NO", "type": "TWideStringField"}, "outinterestsdatsrc": {"name": "OutInterestsDatSrc", "type": "TDataSource"}, "outintincomedatsrc": {"name": "OutIntIncomeDatSrc", "type": "TDataSource"}, "oraclepackage1": {"name": "OraclePackage1", "type": "TOraclePackage"}, "interestinfo": {"name": "InterestInfo", "type": "TOracleDataSet"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "outintincomeaccounts": {"name": "OutIntIncomeAccounts", "type": "TOracleDataSet"}}, {});
  U.init(async () => {
    U.var_("AddForm", null, "TAddForm");
  });
  U.method("TAddForm", "CheckBox3Click", async function CheckBox3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox3")), "Checked")))) {
    await $.mset((await $.v(C, "SpeedButton1")), "Enabled", false);
  } else {
    await $.mset((await $.v(C, "SpeedButton1")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAddForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "committr": false, "e": 0, "m": 0, "b": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rstransactionswillprocessed"] = "Faizlərin B.K-da otuzdurmaq ...";
  L0["m"] = 0;
  L0["b"] = 0;
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
    L0["m"] = 1;
  } else {
    L0["m"] = 0;
  }
  if ($.truthy((await $.mv((await $.v(C, "CheckBox2")), "Checked")))) {
    L0["b"] = 1;
  } else {
    L0["b"] = 0;
  }
  if ($.truthy($.eq((await $.v(C, "dd")), 1))) {
    await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AdditionTrance", ["p_ID", (await $.v(C, "Get_SelectedCrdID")), "p_ammount", (await $.mv((await $.v(C, "CMCurrencyEdit1")), "value")), "p_debidid", (await $.mv((await $.mcall((await $.v(C, "CustIntAccounts")), "fieldbyname", ["id"])), "asinteger")), "p_creditid", (await $.mv((await $.mcall((await $.v(C, "InterestsAccounts")), "fieldbyname", ["id"])), "asinteger")), "p_status", 0, "p_modl", L0["m"], "p_balans", L0["b"], "p_text", (await $.mv((await $.v(C, "Memo1")), "Text"))]])));
  }
  try {
    L0["committr"] = (await $.call(C, "TrDelayed_Show", [Self, L0["rstransactionswillprocessed"]]));
    await $.stmt($.call(C, "Update", []));
    await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["CommitTr", ["DefCommit", L0["committr"]]])));
  } catch ($t1) {
    $.rethrowControl($t1);
    $.handled($t1);
    await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["CommitTr", ["DefCommit", false]])));
    throw $t1;
  }
  await $.mcall((await $.mv((await $.v(C, "Mainforum")), "OracleDataSet1")), "refresh", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAddForm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "committr": false, "e": 0, "m": 0, "b": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rstransactionswillprocessed"] = "Faiz  ...";
  L0["m"] = 0;
  L0["b"] = 0;
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
    L0["m"] = 1;
  } else {
    L0["m"] = 0;
  }
  if ($.truthy((await $.mv((await $.v(C, "CheckBox2")), "Checked")))) {
    L0["b"] = 1;
  } else {
    L0["b"] = 0;
  }
  if ($.truthy((await $.mv((await $.v(C, "CheckBox3")), "Checked")))) {
    L0["e"] = 1;
  } else {
    L0["e"] = 0;
  }
  if ($.truthy($.eq((await $.v(C, "dd")), 1))) {
    await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AdditionTrance", ["p_ID", (await $.v(C, "Get_SelectedCrdID")), "p_ammount", (await $.mv((await $.v(C, "CMCurrencyEdit1")), "value")), "p_debidid", (await $.mv((await $.mcall((await $.v(C, "CustIntAccounts")), "fieldbyname", ["id"])), "asinteger")), "p_creditid", (await $.mv((await $.mcall((await $.v(C, "InterestsAccounts")), "fieldbyname", ["id"])), "asinteger")), "p_status", 1, "p_modl", L0["m"], "p_balans", L0["b"], "p_text", (await $.mv((await $.v(C, "Memo1")), "Text"))]])));
  }
  try {
    L0["committr"] = (await $.call(C, "TrDelayed_Show", [Self, L0["rstransactionswillprocessed"]]));
    await $.stmt($.call(C, "Update", []));
    await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["CommitTr", ["DefCommit", L0["committr"]]])));
  } catch ($t2) {
    $.rethrowControl($t2);
    $.handled($t2);
    await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["CommitTr", ["DefCommit", false]])));
    throw $t2;
  }
  await $.mcall((await $.mv((await $.v(C, "Mainforum")), "OracleDataSet1")), "Refresh", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAddForm", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
