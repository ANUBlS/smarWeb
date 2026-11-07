// Generated from dmRepPlan_RestImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("dmRepPlan_RestImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "SboApiDataModuleImpl"]);
  const C = [U];
  U.defClass("TdmRepPlan_Rest", "TDataModule", {"odfvalute": {"name": "ODFValute", "type": "TOracleDataSet"}, "valute": {"name": "Valute", "type": "TDataSource"}, "odfreserves": {"name": "ODFReserves", "type": "TOracleDataSet"}, "reserves": {"name": "Reserves", "type": "TDataSource"}, "odfpersons": {"name": "ODFPersons", "type": "TOracleDataSet"}, "persons": {"name": "Persons", "type": "TDataSource"}, "odfpledges": {"name": "ODFPledges", "type": "TOracleDataSet"}, "pledges": {"name": "Pledges", "type": "TDataSource"}, "odfcategories": {"name": "ODFCategories", "type": "TOracleDataSet"}, "categories": {"name": "Categories", "type": "TDataSource"}, "odfbranch": {"name": "ODFBranch", "type": "TOracleDataSet"}, "branch": {"name": "Branch", "type": "TDataSource"}, "duereserve": {"name": "DueReserve", "type": "TDataSource"}, "odfcustomers": {"name": "ODFCustomers", "type": "TOracleDataSet"}, "customers": {"name": "Customers", "type": "TDataSource"}, "odfcrdtypes": {"name": "ODFCrdTypes", "type": "TOracleDataSet"}, "crdtype": {"name": "CrdType", "type": "TDataSource"}, "odfusers": {"name": "ODFUsers", "type": "TOracleDataSet"}, "users": {"name": "Users", "type": "TDataSource"}, "odfusrgroup": {"name": "ODFUsrGroup", "type": "TOracleDataSet"}, "usrgroup": {"name": "UsrGroup", "type": "TDataSource"}, "r": {"name": "R", "type": "TOracleDataSet"}, "rnumberofcredit": {"name": "RNUMBEROFCREDIT", "type": "TWideStringField"}, "rrest": {"name": "RREST", "type": "TFloatField"}, "rinterestrest": {"name": "RINTERESTREST", "type": "TFloatField"}, "rannutyamt": {"name": "RANNUTYAMT", "type": "TFloatField"}, "rplanrest": {"name": "RPLANREST", "type": "TFloatField"}, "rlastdat": {"name": "RLASTDAT", "type": "TDateTimeField"}, "rdifrest": {"name": "RDIFREST", "type": "TFloatField"}, "rdescription": {"name": "RDESCRIPTION", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("dmRepPlan_Rest", null, "TdmRepPlan_Rest");
  });
  U.method("TdmRepPlan_Rest", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ODFValute")), "open", []);
  await $.mcall((await $.v(C, "ODFReserves")), "open", []);
  await $.mcall((await $.v(C, "ODFPersons")), "open", []);
  await $.mcall((await $.v(C, "ODFPledges")), "open", []);
  await $.mcall((await $.v(C, "ODFBranch")), "open", []);
  await $.mcall((await $.v(C, "ODFCategories")), "open", []);
  await $.mcall((await $.v(C, "ODFCustomers")), "open", []);
  await $.mcall((await $.v(C, "ODFUsrGroup")), "open", []);
  await $.mcall((await $.v(C, "ODFUsers")), "open", []);
  await $.mcall((await $.v(C, "ODFCrdTypes")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TdmRepPlan_Rest", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ODFValute")), "closeall", []);
  await $.mcall((await $.v(C, "ODFReserves")), "closeall", []);
  await $.mcall((await $.v(C, "ODFPersons")), "closeall", []);
  await $.mcall((await $.v(C, "ODFPledges")), "closeall", []);
  await $.mcall((await $.v(C, "ODFBranch")), "closeall", []);
  await $.mcall((await $.v(C, "ODFCategories")), "closeall", []);
  await $.mcall((await $.v(C, "ODFCustomers")), "closeall", []);
  await $.mcall((await $.v(C, "ODFUsrGroup")), "closeall", []);
  await $.mcall((await $.v(C, "ODFUsers")), "closeall", []);
  await $.mcall((await $.v(C, "ODFCrdTypes")), "closeall", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
