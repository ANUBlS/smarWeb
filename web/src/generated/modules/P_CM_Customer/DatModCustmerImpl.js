// Generated from DatModCustmerImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DatModCustmerImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "CMOracleApiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDatModCustmer", "TDataModule", {"relationdata": {"name": "RelationData", "type": "TOracleDataSet"}, "relationdataid": {"name": "RelationDataID", "type": "TFloatField"}, "relationdataname": {"name": "RelationDataNAME", "type": "TStringField"}, "relation": {"name": "Relation", "type": "TDataSource"}, "clientgroupdata": {"name": "ClientGroupData", "type": "TOracleDataSet"}, "clientgroupdataid": {"name": "ClientGroupDataID", "type": "TFloatField"}, "clientgroupdataname": {"name": "ClientGroupDataNAME", "type": "TStringField"}, "clientgroup": {"name": "ClientGroup", "type": "TDataSource"}, "estatetypedata": {"name": "EstateTypeData", "type": "TOracleDataSet"}, "estatetypedataid": {"name": "EstateTypeDataID", "type": "TFloatField"}, "estatetypedataname": {"name": "EstateTypeDataNAME", "type": "TStringField"}, "estatetype": {"name": "EstateType", "type": "TDataSource"}, "organizationtypedata": {"name": "OrganizationTypeData", "type": "TOracleDataSet"}, "organizationtypedataid": {"name": "OrganizationTypeDataID", "type": "TFloatField"}, "organizationtypedataname": {"name": "OrganizationTypeDataNAME", "type": "TStringField"}, "organizationtype": {"name": "OrganizationType", "type": "TDataSource"}, "actionareadata": {"name": "ActionAreaData", "type": "TOracleDataSet"}, "actionareadataid": {"name": "ActionAreaDataID", "type": "TFloatField"}, "actionareadataname": {"name": "ActionAreaDataNAME", "type": "TStringField"}, "actionarea": {"name": "ActionArea", "type": "TDataSource"}, "branchdata": {"name": "BranchData", "type": "TOracleDataSet"}, "branchdataid": {"name": "BranchDataID", "type": "TFloatField"}, "branchdataname": {"name": "BranchDataNAME", "type": "TStringField"}, "branch": {"name": "Branch", "type": "TDataSource"}, "taxareadata": {"name": "TaxAreaData", "type": "TOracleDataSet"}, "taxareadataid": {"name": "TaxAreaDataID", "type": "TFloatField"}, "taxareadataname": {"name": "TaxAreaDataNAME", "type": "TStringField"}, "taxarea": {"name": "TaxArea", "type": "TDataSource"}, "filialsdata": {"name": "FilialsData", "type": "TOracleDataSet"}, "filials": {"name": "Filials", "type": "TDataSource"}, "customers": {"name": "Customers", "type": "TDataSource"}, "activecustomerlist": {"name": "ActiveCustomerList", "type": "TOracleDataSet"}, "activecustomerlistid": {"name": "ActiveCustomerListID", "type": "TIntegerField"}, "activecustomerlistop_id": {"name": "ActiveCustomerListOP_ID", "type": "TFloatField"}, "activecustomerlistopen_dat": {"name": "ActiveCustomerListOPEN_DAT", "type": "TDateTimeField"}, "activecustomerlistclose_dat": {"name": "ActiveCustomerListCLOSE_DAT", "type": "TDateTimeField"}, "activecustomerlistnerezident": {"name": "ActiveCustomerListNEREZIDENT", "type": "TFloatField"}, "activecustomerlistprinad_kod": {"name": "ActiveCustomerListPRINAD_KOD", "type": "TFloatField"}, "activecustomerlistname": {"name": "ActiveCustomerListNAME", "type": "TStringField"}, "activecustomerlistshort_name": {"name": "ActiveCustomerListSHORT_NAME", "type": "TStringField"}, "activecustomerlistgroup_klie": {"name": "ActiveCustomerListGROUP_KLIE", "type": "TFloatField"}, "activecustomerlistvid_sob": {"name": "ActiveCustomerListVID_SOB", "type": "TFloatField"}, "activecustomerlistorg_sob": {"name": "ActiveCustomerListORG_SOB", "type": "TFloatField"}, "activecustomerlistsfera_dey": {"name": "ActiveCustomerListSFERA_DEY", "type": "TFloatField"}, "activecustomerlistotrasl": {"name": "ActiveCustomerListOTRASL", "type": "TFloatField"}, "activecustomerlistnalog_kod": {"name": "ActiveCustomerListNALOG_KOD", "type": "TFloatField"}, "activecustomerlistkod_okpro": {"name": "ActiveCustomerListKOD_OKPRO", "type": "TFloatField"}, "activecustomerlistdat_nal": {"name": "ActiveCustomerListDAT_NAL", "type": "TDateTimeField"}, "activecustomerlistdat_ustav": {"name": "ActiveCustomerListDAT_USTAV", "type": "TDateTimeField"}, "activecustomerlistbik": {"name": "ActiveCustomerListBIK", "type": "TFloatField"}, "activecustomerlistrealinn": {"name": "ActiveCustomerListRealINN", "type": "TStringField"}, "activecustomerlistotv_lico": {"name": "ActiveCustomerListOTV_LICO", "type": "TStringField"}, "activecustomerlistotv_passport": {"name": "ActiveCustomerListOTV_PASSPORT", "type": "TStringField"}, "activecustomerlistotv_issued": {"name": "ActiveCustomerListOTV_ISSUED", "type": "TStringField"}, "activecustomerlistotv_isdate": {"name": "ActiveCustomerListOTV_ISDATE", "type": "TDateTimeField"}, "activecustomerlistinn": {"name": "ActiveCustomerListINN", "type": "TStringField"}, "cm_credit": {"name": "cm_credit", "type": "TOraclePackage"}}, {});
  U.init(async () => {
    U.var_("DatModCustmer", null, "TDatModCustmer");
  });
  U.method("TDatModCustmer", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "RelationData")), "Open", []);
  await $.mcall((await $.v(C, "ClientGroupData")), "Open", []);
  await $.mcall((await $.v(C, "EstateTypeData")), "Open", []);
  await $.mcall((await $.v(C, "OrganizationTypeData")), "Open", []);
  await $.mcall((await $.v(C, "ActionAreaData")), "Open", []);
  await $.mcall((await $.v(C, "BranchData")), "Open", []);
  await $.mcall((await $.v(C, "TaxAreaData")), "Open", []);
  await $.mcall((await $.v(C, "FilialsData")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDatModCustmer", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "RelationData")), "CloseAll", []);
  await $.mcall((await $.v(C, "ClientGroupData")), "CloseAll", []);
  await $.mcall((await $.v(C, "EstateTypeData")), "CloseAll", []);
  await $.mcall((await $.v(C, "OrganizationTypeData")), "CloseAll", []);
  await $.mcall((await $.v(C, "ActionAreaData")), "CloseAll", []);
  await $.mcall((await $.v(C, "BranchData")), "CloseAll", []);
  await $.mcall((await $.v(C, "TaxAreaData")), "CloseAll", []);
  await $.mcall((await $.v(C, "FilialsData")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
