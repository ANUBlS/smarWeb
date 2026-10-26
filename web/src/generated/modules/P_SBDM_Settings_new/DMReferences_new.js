// Generated from DMReferences_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DMReferences_new", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDataModReferences_new", "TDataModule", {"tvsubitems": {"name": "TVSubItems", "type": "TOracleDataSet"}, "tvsubitemsid": {"name": "TVSubItemsID", "type": "TFloatField"}, "tvsubitemsname": {"name": "TVSubItemsNAME", "type": "TStringField"}, "tvsubitemslname": {"name": "TVSubItemsLNAME", "type": "TStringField"}, "tvsubitemsparentid": {"name": "TVSubItemsPARENTID", "type": "TFloatField"}, "tvsubitemsvalue": {"name": "TVSubItemsVALUE", "type": "TStringField"}, "tvsubitemssourcelist": {"name": "TVSubItemsSOURCELIST", "type": "TStringField"}, "referlink": {"name": "ReferLink", "type": "TOracleDataSet"}, "referlinkid": {"name": "ReferLinkID", "type": "TFloatField"}, "referlinkname": {"name": "ReferLinkNAME", "type": "TStringField"}, "referlinklname": {"name": "ReferLinkLNAME", "type": "TStringField"}, "referlinkparentid": {"name": "ReferLinkPARENTID", "type": "TFloatField"}, "referlinkvalue": {"name": "ReferLinkVALUE", "type": "TStringField"}, "referlinksourcelist": {"name": "ReferLinkSOURCELIST", "type": "TStringField"}, "referpackage": {"name": "ReferPackage", "type": "TOraclePackage"}}, {});
  U.init(async () => {
    U.var_("DataModReferences_new", null, "TDataModReferences_new");
  });
  U.method("TDataModReferences_new", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ReferLink")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDataModReferences_new", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ReferLink")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDataModReferences_new", "CategoriesAfterPost", async function CategoriesAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall(L0["dataset"], "Refresh", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDataModReferences_new", "AccountSettingsAfterPost", async function AccountSettingsAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall(L0["dataset"], "Refresh", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDataModReferences_new", "DepositTypesAfterPost", async function DepositTypesAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall(L0["dataset"], "Refresh", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
