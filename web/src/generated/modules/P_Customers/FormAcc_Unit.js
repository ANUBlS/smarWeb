// Generated from FormAcc_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FormAcc_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "NLSLocalizer", "StdCtrls", "Mask", "DBCtrls", "ComCtrls", "Db", "OracleData", "SearchEdit", "sboapiDataModuleImpl", "CO_datamod_impl"]);
  const C = [U];
  U.defClass("TFormAccount", "TForm", {"accountgb": {"name": "AccountGB", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "dblookupcurr": {"name": "DBLookupCurr", "type": "TDBLookupComboBox"}, "dblookupbalance1": {"name": "DBLookupBalance1", "type": "TDBLookupComboBox"}, "dblookupcust": {"name": "DBLookupCust", "type": "TDBLookupComboBox"}, "dtpopendate": {"name": "DTPOpenDate", "type": "TDateTimePicker"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "symboledit": {"name": "SymbolEdit", "type": "TEdit"}, "limitedit": {"name": "LimitEdit", "type": "TEdit"}, "twedit": {"name": "Twedit", "type": "TEdit"}, "dbeditaccno": {"name": "DBEditAccNo", "type": "TEdit"}, "dbeditaccname": {"name": "DBEditAccName", "type": "TEdit"}, "buttoncommit": {"name": "ButtonCommit", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "daystartstategb": {"name": "DayStartStateGB", "type": "TGroupBox"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbedit6": {"name": "dbedit6", "type": "TEdit"}, "dbedit7": {"name": "dbedit7", "type": "TEdit"}, "accid": {"name": "accid", "type": "TEdit"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "currency": {"name": "Currency", "type": "TOracleDataSet"}, "currencydata": {"name": "CurrencyData", "type": "TDataSource"}, "balacc": {"name": "BalAcc", "type": "TOracleDataSet"}, "balaccbal_cn": {"name": "BalAccBAL_CN", "type": "TStringField"}, "balaccbalname": {"name": "BalAccBALNAME", "type": "TStringField"}, "balaccdata": {"name": "BalAccData", "type": "TDataSource"}, "customers": {"name": "Customers", "type": "TOracleDataSet"}, "customersdata": {"name": "CustomersData", "type": "TDataSource"}, "branchesdata": {"name": "BranchesData", "type": "TDataSource"}, "branches": {"name": "Branches", "type": "TOracleDataSet"}, "branchesid": {"name": "BranchesID", "type": "TFloatField"}, "branchesname": {"name": "BranchesNAME", "type": "TStringField"}, "val_code": {"name": "val_code", "type": "TSearchEdit"}, "bal_cn": {"name": "bal_cn", "type": "TSearchEdit"}, "editcust": {"name": "EditCust", "type": "TSearchEdit"}, "branchedit": {"name": "Branchedit", "type": "TSearchEdit"}, "customersid": {"name": "CustomersID", "type": "TFloatField"}, "customersbyr_name": {"name": "CustomersBYR_NAME", "type": "TStringField"}, "customerspassport": {"name": "CustomersPASSPORT", "type": "TStringField"}, "customersbirthdate": {"name": "CustomersBIRTHDATE", "type": "TDateTimeField"}, "customersbirthplace": {"name": "CustomersBIRTHPLACE", "type": "TStringField"}, "customersfam_status": {"name": "CustomersFAM_STATUS", "type": "TIntegerField"}, "customersadress": {"name": "CustomersADRESS", "type": "TStringField"}, "customersphone": {"name": "CustomersPHONE", "type": "TStringField"}, "customersemail": {"name": "CustomersEMAIL", "type": "TStringField"}, "customersopendate": {"name": "CustomersOPENDATE", "type": "TDateTimeField"}, "customerssex": {"name": "CustomersSEX", "type": "TIntegerField"}, "customersuserid": {"name": "CustomersUSERID", "type": "TIntegerField"}, "customerspassp_number": {"name": "CustomersPASSP_NUMBER", "type": "TIntegerField"}, "customersadrs_state": {"name": "CustomersADRS_STATE", "type": "TStringField"}, "customersadrs_city": {"name": "CustomersADRS_CITY", "type": "TStringField"}, "customersbirth_state": {"name": "CustomersBIRTH_STATE", "type": "TStringField"}, "customersphone_mob": {"name": "CustomersPHONE_MOB", "type": "TStringField"}, "customersp_id": {"name": "CustomersP_ID", "type": "TFloatField"}, "currencyvalute": {"name": "CurrencyVALUTE", "type": "TFloatField"}, "currencyvalu_name": {"name": "CurrencyVALU_NAME", "type": "TStringField"}}, {});
  U.init(async () => {
    U.var_("FormAccount", null, "TFormAccount");
  });
  U.method("TFormAccount", "DBLookupCurrClick", async function DBLookupCurrClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccount", "DBLookupCustClick", async function DBLookupCustClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t1], "Close", [], C));
    await $.mcall((await $.wv([$t1], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t1], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from customers_physical c where byr_name = ", "'"), (await $.mv((await $.wv([$t1], "dbedit3", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t1], "Open", [], C));
    await $.mset((await $.wv([$t1], "EditCust", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["id"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccount", "DBLookupComboBox4Click", async function DBLookupComboBox4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.mv((await $.v(C, "CO_DataMod")), "Avalute"));
    await $.stmt($.wcall([$t2], "Close", [], C));
    await $.mcall((await $.wv([$t2], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t2], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from filial c where name = ", "'"), (await $.mv((await $.wv([$t2], "dbedit5", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t2], "Open", [], C));
    await $.mset((await $.wv([$t2], "Branchedit", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["id"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccount", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "dbedit1")), "Text", "");
  await $.mset((await $.v(C, "dbedit2")), "Text", "");
  await $.mset((await $.v(C, "dbedit3")), "Text", "");
  await $.mset((await $.v(C, "dbedit5")), "Text", "");
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "Open", []);
  await $.mset((await $.v(C, "accid")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "fieldbyname", ["id"])), "asstring")));
  await $.mset((await $.v(C, "DTPOpenDate")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Sysdat")), "Fieldbyname", ["tek_dat"])), "asdatetime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccount", "ButtonCommitClick", async function ButtonCommitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ddate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["ddate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPOpenDate")), "DateTime"))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Physical_Customer")), "CallIntegerFunction", ["open_Account", [(await $.mv((await $.v(C, "DBEditAccNo")), "text")), (await $.mv((await $.v(C, "val_code")), "text")), (await $.mv((await $.v(C, "bal_cn")), "text")), (await $.mv((await $.v(C, "Editcust")), "text")), L0["ddate"], 0, 0, (await $.mv((await $.v(C, "Branchedit")), "text")), 0, (await $.mv((await $.v(C, "DBEditAccName")), "text"))]])));
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccount", "val_codeChange", async function val_codeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mcall((await $.v(C, "Currency")), "fieldbyname", ["valute"])), "asstring", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.call(C, "TSearchEdit", [L0["sender"]])), "datasource")), "dataset")), "fieldbyname", ["valute"])), "asstring")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccount", "DBEdit1Change", async function DBEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.mv((await $.v(C, "CO_Datamod")), "avalute"));
    await $.stmt($.wcall([$t3], "Close", [], C));
    await $.mcall((await $.wv([$t3], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t3], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute c where valu_name= ", "'"), (await $.mv((await $.wv([$t3], "Dbedit1", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t3], "Open", [], C));
    await $.mset((await $.wv([$t3], "val_code", C, false)), "Text", (await $.mv((await $.wcall([$t3], "FieldByName", ["valute"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccount", "bal_cnChange", async function bal_cnChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mcall((await $.v(C, "BalAcc")), "fieldbyname", ["bal_cn"])), "asstring", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.call(C, "TSearchEdit", [L0["sender"]])), "datasource")), "dataset")), "fieldbyname", ["bal_cn"])), "asstring")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccount", "DBLookupBalance1Click", async function DBLookupBalance1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.mv((await $.v(C, "CO_DataMod")), "Avalute"));
    await $.stmt($.wcall([$t4], "Close", [], C));
    await $.mcall((await $.wv([$t4], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t4], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from bal_spr1 c where balname = ", "'"), (await $.mv((await $.wv([$t4], "dbedit2", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t4], "Open", [], C));
    await $.mset((await $.wv([$t4], "bal_cn", C, false)), "Text", (await $.mv((await $.wcall([$t4], "FieldByName", ["bal_cn"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccount", "EditCustChange", async function EditCustChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "physical_customers")), "fieldbyname", ["id"])), "asstring", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.call(C, "TSearchEdit", [L0["sender"]])), "datasource")), "dataset")), "fieldbyname", ["id"])), "asstring")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccount", "BrancheditChange", async function BrancheditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mcall((await $.v(C, "Branches")), "fieldbyname", ["id"])), "asstring", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.call(C, "TSearchEdit", [L0["sender"]])), "datasource")), "dataset")), "fieldbyname", ["id"])), "asstring")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccount", "ButtonCancelClick", async function ButtonCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
