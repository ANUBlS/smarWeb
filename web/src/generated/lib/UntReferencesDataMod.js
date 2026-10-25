// Generated from UntReferencesDataMod.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntReferencesDataMod", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDataModReferences", "TDataModule", {"tvsubitems": {"name": "TVSubItems", "type": "TOracleDataSet"}, "balancelink": {"name": "BalanceLink", "type": "TOracleQuery"}, "datasrcacczones": {"name": "DataSrcAccZones", "type": "TDataSource"}, "acczones": {"name": "AccZones", "type": "TOracleDataSet"}, "datasrcacczoneinfo": {"name": "DataSrcAccZoneInfo", "type": "TDataSource"}, "acczoneinfo": {"name": "AccZoneInfo", "type": "TOracleDataSet"}, "referlink": {"name": "ReferLink", "type": "TOracleDataSet"}, "referpackage": {"name": "ReferPackage", "type": "TOraclePackage"}, "datasrccredittypes": {"name": "DataSrcCreditTypes", "type": "TDataSource"}, "credittypes": {"name": "CreditTypes", "type": "TOracleDataSet"}, "credittypesid": {"name": "CreditTypesID", "type": "TIntegerField"}, "credittypestype": {"name": "CreditTypesTYPE", "type": "Twidestringfield"}, "datasrcpledgetypes": {"name": "DataSrcPledgeTypes", "type": "TDataSource"}, "pledgetypes": {"name": "PledgeTypes", "type": "TOracleDataSet"}, "datasrccategories": {"name": "DataSrcCategories", "type": "TDataSource"}, "categories": {"name": "Categories", "type": "TOracleDataSet"}, "categoriesid": {"name": "CategoriesID", "type": "TFloatField"}, "categoriescategory": {"name": "CategoriesCATEGORY", "type": "Twidestringfield"}, "datasrcmovienames": {"name": "DataSrcMovieNames", "type": "TDataSource"}, "movienames": {"name": "MovieNames", "type": "TOracleDataSet"}, "datasrcsettings": {"name": "DataSrcSettings", "type": "TDataSource"}, "accountsettings": {"name": "AccountSettings", "type": "TOracleDataSet"}, "categoriesmaster": {"name": "CategoriesMaster", "type": "TOracleDataSet"}, "floatfield1": {"name": "FloatField1", "type": "TFloatField"}, "stringfield1": {"name": "StringField1", "type": "Twidestringfield"}, "datasrccategoriesmaster": {"name": "DataSrcCategoriesMaster", "type": "TDataSource"}, "accountlookup": {"name": "AccountLookup", "type": "TOracleDataSet"}, "accountsettingsid": {"name": "AccountSettingsID", "type": "TFloatField"}, "accountsettingsparentid": {"name": "AccountSettingsPARENTID", "type": "TFloatField"}, "accountsettingscurrencyid": {"name": "AccountSettingsCURRENCYID", "type": "TFloatField"}, "accountsettingsaccid": {"name": "AccountSettingsACCID", "type": "TFloatField"}, "accountsettingscurrencyname": {"name": "AccountSettingsCurrencyName", "type": "Twidestringfield"}, "accountsettingsaccno": {"name": "AccountSettingsAccNo", "type": "Twidestringfield"}, "accountsettingsaccname": {"name": "AccountSettingsAccName", "type": "Twidestringfield"}, "accountlookupid": {"name": "AccountLookupID", "type": "TFloatField"}, "accountlookupname": {"name": "AccountLookupNAME", "type": "Twidestringfield"}, "accountlookupacc_no": {"name": "AccountLookupACC_NO", "type": "Twidestringfield"}, "accountlookupval_acc": {"name": "AccountLookupVAL_ACC", "type": "TIntegerField"}, "accountlookupval_name": {"name": "AccountLookupVAL_NAME", "type": "Twidestringfield"}, "currencylookup": {"name": "CurrencyLookup", "type": "TOracleDataSet"}, "datasrcreliability": {"name": "DataSrcReliability", "type": "TDataSource"}, "reliability": {"name": "Reliability", "type": "TOracleDataSet"}, "tvsubitemsid": {"name": "TVSubItemsID", "type": "TFloatField"}, "tvsubitemsname": {"name": "TVSubItemsNAME", "type": "Twidestringfield"}, "tvsubitemslname": {"name": "TVSubItemsLNAME", "type": "Twidestringfield"}, "tvsubitemsparentid": {"name": "TVSubItemsPARENTID", "type": "TFloatField"}, "tvsubitemsvalue": {"name": "TVSubItemsVALUE", "type": "Twidestringfield"}, "tvsubitemssourcelist": {"name": "TVSubItemsSOURCELIST", "type": "Twidestringfield"}, "referlinkid": {"name": "ReferLinkID", "type": "TFloatField"}, "referlinkname": {"name": "ReferLinkNAME", "type": "Twidestringfield"}, "referlinklname": {"name": "ReferLinkLNAME", "type": "Twidestringfield"}, "referlinkparentid": {"name": "ReferLinkPARENTID", "type": "TFloatField"}, "referlinkvalue": {"name": "ReferLinkVALUE", "type": "Twidestringfield"}, "referlinksourcelist": {"name": "ReferLinkSOURCELIST", "type": "Twidestringfield"}, "reliabilityid": {"name": "ReliabilityID", "type": "TIntegerField"}, "reliabilityreliability": {"name": "ReliabilityRELIABILITY", "type": "Twidestringfield"}, "reliabilitypercent": {"name": "ReliabilityPERCENT", "type": "TIntegerField"}, "pledgetypesid": {"name": "PledgeTypesID", "type": "TFloatField"}, "pledgetypestype": {"name": "PledgeTypesTYPE", "type": "Twidestringfield"}, "movienamesid": {"name": "MovieNamesID", "type": "TIntegerField"}, "movienamestypeid": {"name": "MovieNamesTYPEID", "type": "TIntegerField"}, "movienamesname": {"name": "MovieNamesNAME", "type": "Twidestringfield"}, "movienamesdescription": {"name": "MovieNamesDESCRIPTION", "type": "Twidestringfield"}, "datasrcdeposittypes": {"name": "DataSrcDepositTypes", "type": "TDataSource"}, "deposittypes": {"name": "DepositTypes", "type": "TOracleDataSet"}, "credittypesadditionaltype": {"name": "CreditTypesADDITIONALTYPE", "type": "Twidestringfield"}, "deposittypesid": {"name": "DepositTypesID", "type": "TFloatField"}, "deposittypestype": {"name": "DepositTypesTYPE", "type": "Twidestringfield"}, "deposittypesadditionaltype": {"name": "DepositTypesADDITIONALTYPE", "type": "Twidestringfield"}, "deposittypeswithdrawtype": {"name": "DepositTypesWITHDRAWTYPE", "type": "Twidestringfield"}, "deposittypesdateinterval": {"name": "DepositTypesDATEINTERVAL", "type": "TIntegerField"}, "truecategories": {"name": "TrueCategories", "type": "TOracleDataSet"}, "datasrctruecategories": {"name": "DataSrcTrueCategories", "type": "TDataSource"}, "truecategoriescategoryid": {"name": "TrueCategoriesCATEGORYID", "type": "TFloatField"}, "truecategoriesname": {"name": "TrueCategoriesNAME", "type": "Twidestringfield"}, "truecategoriesdescription": {"name": "TrueCategoriesDESCRIPTION", "type": "Twidestringfield"}, "categoriestruecategory": {"name": "CategoriesTRUECATEGORY", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("DataModReferences", null, "TDataModReferences");
  });
  U.method("TDataModReferences", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Reliability")), "Open", []);
  await $.mcall((await $.v(C, "AccountLookup")), "Open", []);
  await $.mcall((await $.v(C, "AccZones")), "Open", []);
  await $.mcall((await $.v(C, "AccZoneInfo")), "Open", []);
  await $.mcall((await $.v(C, "ReferLink")), "Open", []);
  await $.mcall((await $.v(C, "CreditTypes")), "Open", []);
  await $.mcall((await $.v(C, "PledgeTypes")), "Open", []);
  await $.mcall((await $.v(C, "Categories")), "Open", []);
  await $.mcall((await $.v(C, "CategoriesMaster")), "Open", []);
  await $.mcall((await $.v(C, "MovieNames")), "Open", []);
  await $.mcall((await $.v(C, "AccountSettings")), "Open", []);
  await $.mcall((await $.v(C, "DepositTypes")), "Open", []);
  await $.mcall((await $.v(C, "TrueCategories")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDataModReferences", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Reliability")), "Close", []);
  await $.mcall((await $.v(C, "AccountLookup")), "Close", []);
  await $.mcall((await $.v(C, "AccZones")), "Close", []);
  await $.mcall((await $.v(C, "AccZoneInfo")), "Close", []);
  await $.mcall((await $.v(C, "ReferLink")), "Close", []);
  await $.mcall((await $.v(C, "CreditTypes")), "Close", []);
  await $.mcall((await $.v(C, "PledgeTypes")), "Close", []);
  await $.mcall((await $.v(C, "Categories")), "Close", []);
  await $.mcall((await $.v(C, "CategoriesMaster")), "Close", []);
  await $.mcall((await $.v(C, "MovieNames")), "Open", []);
  await $.mcall((await $.v(C, "AccountSettings")), "Close", []);
  await $.mcall((await $.v(C, "DepositTypes")), "Close", []);
  await $.mcall((await $.v(C, "TrueCategories")), "CloseAll", []);
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
