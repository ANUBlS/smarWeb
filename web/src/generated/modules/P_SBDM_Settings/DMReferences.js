// Generated from DMReferences.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DMReferences", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDataModReferences", "TDataModule", {"tvsubitems": {"name": "TVSubItems", "type": "TOracleDataSet"}, "referlink": {"name": "ReferLink", "type": "TOracleDataSet"}, "tvsubitemsid": {"name": "TVSubItemsID", "type": "TFloatField"}, "tvsubitemsname": {"name": "TVSubItemsNAME", "type": "TStringField"}, "tvsubitemslname": {"name": "TVSubItemsLNAME", "type": "Twidestringfield"}, "tvsubitemsparentid": {"name": "TVSubItemsPARENTID", "type": "TFloatField"}, "tvsubitemsvalue": {"name": "TVSubItemsVALUE", "type": "Twidestringfield"}, "tvsubitemssourcelist": {"name": "TVSubItemsSOURCELIST", "type": "Twidestringfield"}, "referlinkid": {"name": "ReferLinkID", "type": "TFloatField"}, "referlinkname": {"name": "ReferLinkNAME", "type": "TStringField"}, "referlinklname": {"name": "ReferLinkLNAME", "type": "Twidestringfield"}, "referlinkparentid": {"name": "ReferLinkPARENTID", "type": "TFloatField"}, "referlinkvalue": {"name": "ReferLinkVALUE", "type": "Twidestringfield"}, "referlinksourcelist": {"name": "ReferLinkSOURCELIST", "type": "Twidestringfield"}, "referpackage": {"name": "ReferPackage", "type": "TOraclePackage"}}, {});
  U.init(async () => {
    U.var_("DataModReferences", null, "TDataModReferences");
  });
  U.method("TDataModReferences", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ReferLink")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDataModReferences", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ReferLink")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDataModReferences", "CategoriesAfterPost", async function CategoriesAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall(L0["dataset"], "Refresh", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDataModReferences", "AccountSettingsAfterPost", async function AccountSettingsAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall(L0["dataset"], "Refresh", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDataModReferences", "DepositTypesAfterPost", async function DepositTypesAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall(L0["dataset"], "Refresh", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
