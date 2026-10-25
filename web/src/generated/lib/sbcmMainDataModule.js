// Generated from sbcmMainDataModule.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("sbcmMainDataModule", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TMainDataModule", "TDataModule", {"datasrccontracts": {"name": "DataSrcContracts", "type": "TDataSource"}, "contracts": {"name": "Contracts", "type": "TOracleDataSet"}, "datasrcinterests": {"name": "DataSrcInterests", "type": "TDataSource"}, "interests": {"name": "Interests", "type": "TOracleDataSet"}, "datasrcoverdueinterests": {"name": "DataSrcOverdueInterests", "type": "TDataSource"}, "overdueinterests": {"name": "OverdueInterests", "type": "TOracleDataSet"}, "datasrccategories": {"name": "DataSrcCategories", "type": "TDataSource"}, "categories": {"name": "Categories", "type": "TOracleDataSet"}, "datasrcreliability": {"name": "DataSrcReliability", "type": "TDataSource"}, "reliability": {"name": "Reliability", "type": "TOracleDataSet"}, "datasrcpledgetypes": {"name": "DataSrcPledgetypes", "type": "TDataSource"}, "pledges": {"name": "Pledges", "type": "TOracleDataSet"}, "reliabilityid": {"name": "ReliabilityID", "type": "TIntegerField"}, "reliabilityreliability": {"name": "ReliabilityRELIABILITY", "type": "TStringField"}, "reliabilitypercent": {"name": "ReliabilityPERCENT", "type": "TIntegerField"}, "datasrccontracttype": {"name": "DataSrcContractType", "type": "TDataSource"}, "contracttype": {"name": "ContractType", "type": "TOracleDataSet"}, "contractsid": {"name": "ContractsID", "type": "TFloatField"}, "contractscontractno": {"name": "ContractsCONTRACTNO", "type": "TStringField"}, "contractsopendate": {"name": "ContractsOPENDATE", "type": "TDateTimeField"}, "contractsclosedate": {"name": "ContractsCLOSEDATE", "type": "TDateTimeField"}, "contractsamount": {"name": "ContractsAMOUNT", "type": "TFloatField"}, "contractscontracttype": {"name": "ContractsCONTRACTTYPE", "type": "TIntegerField"}, "contractspledgetype": {"name": "ContractsPLEDGETYPE", "type": "TFloatField"}, "contractsreliabilityid": {"name": "ContractsRELIABILITYID", "type": "TIntegerField"}, "contractsclienttype": {"name": "ContractsCLIENTTYPE", "type": "TFloatField"}, "contractscontractaccid": {"name": "ContractsCONTRACTACCID", "type": "TFloatField"}, "contractsclientaccid": {"name": "ContractsCLIENTACCID", "type": "TFloatField"}, "contractsreserveaccid": {"name": "ContractsRESERVEACCID", "type": "TFloatField"}, "contractsinterestaccid": {"name": "ContractsINTERESTACCID", "type": "TFloatField"}, "contractsoverdueaccid": {"name": "ContractsOVERDUEACCID", "type": "TFloatField"}, "contractsoverdueinterestaccid": {"name": "ContractsOVERDUEINTERESTACCID", "type": "TFloatField"}, "contractsfacticaldebt": {"name": "ContractsFACTICALDEBT", "type": "TFloatField"}, "contractsfacticalinterestdebt": {"name": "ContractsFACTICALINTERESTDEBT", "type": "TFloatField"}, "contractsoverduedebt": {"name": "ContractsOVERDUEDEBT", "type": "TFloatField"}, "contractsoverdueinterestdebt": {"name": "ContractsOVERDUEINTERESTDEBT", "type": "TFloatField"}, "contractsstopcalculationdate": {"name": "ContractsSTOPCALCULATIONDATE", "type": "TDateTimeField"}, "contractscalculationenabled": {"name": "ContractsCALCULATIONENABLED", "type": "TFloatField"}, "contractsreguiredamountdec": {"name": "ContractsREGUIREDAMOUNTDEC", "type": "TFloatField"}, "contractsreguiredpercentdec": {"name": "ContractsREGUIREDPERCENTDEC", "type": "TFloatField"}, "contractslastprocessdate": {"name": "ContractsLASTPROCESSDATE", "type": "TDateTimeField"}, "contractscontractaccno": {"name": "ContractsCONTRACTACCNO", "type": "TStringField"}, "contractscontractaccname": {"name": "ContractsCONTRACTACCNAME", "type": "TStringField"}, "contractscontractcurrencyid": {"name": "ContractsCONTRACTCURRENCYID", "type": "TFloatField"}, "contractsresiduaryamount": {"name": "ContractsRESIDUARYAMOUNT", "type": "TFloatField"}, "contractsstatus": {"name": "ContractsSTATUS", "type": "TFloatField"}, "contractspledgeprice": {"name": "ContractsPLEDGEPRICE", "type": "TFloatField"}, "contractsmonthday": {"name": "ContractsMONTHDAY", "type": "TStringField"}, "interestsid": {"name": "InterestsID", "type": "TFloatField"}, "interestshdate": {"name": "InterestsHDATE", "type": "TDateTimeField"}, "interestsinterest": {"name": "InterestsINTEREST", "type": "TFloatField"}, "overdueinterestsid": {"name": "OverdueInterestsID", "type": "TFloatField"}, "overdueinterestshdate": {"name": "OverdueInterestsHDATE", "type": "TDateTimeField"}, "overdueinterestsoverdueinterest": {"name": "OverdueInterestsOVERDUEINTEREST", "type": "TFloatField"}, "overduereliability": {"name": "OverdueReliability", "type": "TOracleDataSet"}, "integerfield1": {"name": "IntegerField1", "type": "TIntegerField"}, "stringfield1": {"name": "StringField1", "type": "TStringField"}, "integerfield2": {"name": "IntegerField2", "type": "TIntegerField"}, "contractsoverduereliabilityid": {"name": "ContractsOVERDUERELIABILITYID", "type": "TFloatField"}, "contractsoverduereserveaccid": {"name": "ContractsOVERDUERESERVEACCID", "type": "TFloatField"}, "contractscontractcurrency": {"name": "ContractsCONTRACTCURRENCY", "type": "TStringField"}, "contractsinterestaccno": {"name": "ContractsINTERESTACCNO", "type": "TStringField"}, "contractsinterestbalance": {"name": "ContractsINTERESTBALANCE", "type": "TFloatField"}, "contractsclientbalance": {"name": "ContractsCLIENTBALANCE", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("MainDataModule", null, "TMainDataModule");
  });
  U.method("TMainDataModule", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "Contracts")), "SetVariable", ["OrderKind", "ID"])));
  await $.mcall((await $.v(C, "Contracts")), "Open", []);
  await $.mcall((await $.v(C, "Interests")), "Open", []);
  await $.mcall((await $.v(C, "OverdueInterests")), "Open", []);
  await $.mcall((await $.v(C, "Reliability")), "Open", []);
  await $.mcall((await $.v(C, "Categories")), "Open", []);
  await $.mcall((await $.v(C, "Pledges")), "Open", []);
  await $.mcall((await $.v(C, "ContractType")), "Open", []);
  await $.mcall((await $.v(C, "OverdueReliability")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainDataModule", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Contracts")), "CloseAll", []);
  await $.mcall((await $.v(C, "Interests")), "CloseAll", []);
  await $.mcall((await $.v(C, "OverdueInterests")), "CloseAll", []);
  await $.mcall((await $.v(C, "Reliability")), "CloseAll", []);
  await $.mcall((await $.v(C, "Categories")), "CloseAll", []);
  await $.mcall((await $.v(C, "Pledges")), "CloseAll", []);
  await $.mcall((await $.v(C, "ContractType")), "CloseAll", []);
  await $.mcall((await $.v(C, "OverdueReliability")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
