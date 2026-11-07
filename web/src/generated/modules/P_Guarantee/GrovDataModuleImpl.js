// Generated from GrovDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("GrovDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Oracle", "Db", "OracleData", "CMOracleAPIDataModuleImpl"]);
  const C = [U];
  U.defClass("TGrovDataMod", "TDataModule", {"girovdatasrc": {"name": "GirovDataSrc", "type": "TDataSource"}, "girovdataset": {"name": "GirovDataSet", "type": "TOracleDataSet"}, "propdataset": {"name": "PropDataSet", "type": "TOracleDataSet"}, "propsourc": {"name": "PropSourc", "type": "TDataSource"}, "sbgirovset": {"name": "SbGirovSet", "type": "TOracleDataSet"}, "sbgirovsetid": {"name": "SbGirovSetID", "type": "TFloatField"}, "sbgirovsetcreditid": {"name": "SbGirovSetCREDITID", "type": "TFloatField"}, "sbgirovsetnumberofgur": {"name": "SbGirovSetNUMBEROFGUR", "type": "TStringField"}, "sbgirovsetpledgeid": {"name": "SbGirovSetPLEDGEID", "type": "TFloatField"}, "sbgirovsetpledgename": {"name": "SbGirovSetPLEDGENAME", "type": "TStringField"}, "sbgirovsetholdername": {"name": "SbGirovSetHOLDERNAME", "type": "TStringField"}, "sbgirovsetholderaddress": {"name": "SbGirovSetHOLDERADDRESS", "type": "TStringField"}, "sbgirovsetanyinfotodisting": {"name": "SbGirovSetANYINFOTODISTING", "type": "TStringField"}, "sbgirovsetregistryno": {"name": "SbGirovSetREGISTRYNO", "type": "TStringField"}, "sbgirovsetregistryagency": {"name": "SbGirovSetREGISTRYAGENCY", "type": "TStringField"}, "sbgirovsetregistrydate": {"name": "SbGirovSetREGISTRYDATE", "type": "TDateTimeField"}, "sbgirovsetpledgeinuse": {"name": "SbGirovSetPLEDGEINUSE", "type": "TFloatField"}, "sbgirovsetpledgeinsurant": {"name": "SbGirovSetPLEDGEINSURANT", "type": "TFloatField"}, "sbgirovsetinsuranceagency": {"name": "SbGirovSetINSURANCEAGENCY", "type": "TFloatField"}, "sbgirovsetinsuranceamount": {"name": "SbGirovSetINSURANCEAMOUNT", "type": "TFloatField"}, "sbgirovsetinsurancedate": {"name": "SbGirovSetINSURANCEDATE", "type": "TDateTimeField"}, "sbgirovsetpledgepricetorpaqha": {"name": "SbGirovSetPLEDGEPRICETORPAQHA", "type": "TFloatField"}, "sbgirovsetpledgepriceevkv": {"name": "SbGirovSetPLEDGEPRICEEVKV", "type": "TFloatField"}, "sbgirovsetgqname": {"name": "SbGirovSetGQNAME", "type": "TStringField"}, "sbgirovsetgqpaspnum": {"name": "SbGirovSetGQPASPNUM", "type": "TStringField"}, "sbgirovsetgqpaspyer": {"name": "SbGirovSetGQPASPYER", "type": "TStringField"}, "sbgirovsetgqpaspdate": {"name": "SbGirovSetGQPASPDATE", "type": "TDateTimeField"}, "sbgirovsetgqcity": {"name": "SbGirovSetGQCITY", "type": "TFloatField"}, "sbgirovsetgqvillage": {"name": "SbGirovSetGQVILLAGE", "type": "TFloatField"}, "sbgirovsetgqadres": {"name": "SbGirovSetGQADRES", "type": "TStringField"}, "sbgirovsetgqtelmob": {"name": "SbGirovSetGQTELMOB", "type": "TStringField"}, "sbgirovsetgqtelhome": {"name": "SbGirovSetGQTELHOME", "type": "TStringField"}, "sbgirovsetgqtelwork": {"name": "SbGirovSetGQTELWORK", "type": "TStringField"}, "sbgirovsettesviri": {"name": "SbGirovSetTESVIRI", "type": "TStringField"}, "sbgirovsetreyster": {"name": "SbGirovSetREYSTER", "type": "TStringField"}, "sbgirovsetseryamh": {"name": "SbGirovSetSERYAMH", "type": "TStringField"}, "sbgirovsetpledgeprice": {"name": "SbGirovSetPLEDGEPRICE", "type": "TFloatField"}, "sbgirovsetpledgsorts": {"name": "SbGirovSetPLEDGSORTS", "type": "TFloatField"}, "sbgirovsetcompany": {"name": "SbGirovSetCOMPANY", "type": "TFloatField"}, "sbgirovsetcompanydat": {"name": "SbGirovSetCOMPANYDAT", "type": "TDateTimeField"}, "sbgirovsetcompanyexpert": {"name": "SbGirovSetCOMPANYEXPERT", "type": "TStringField"}, "sbgirovsetbrance": {"name": "SbGirovSetBRANCE", "type": "TFloatField"}, "sbgirovsetdat": {"name": "SbGirovSetDAT", "type": "TDateTimeField"}, "sbgirovsrc": {"name": "SBGirovSrc", "type": "TDataSource"}, "crackage": {"name": "CRackage", "type": "TOraclePackage"}, "teminatdataset": {"name": "TeminatDataSet", "type": "TOracleDataSet"}, "teminatsourc": {"name": "TeminatSourc", "type": "TDataSource"}, "gpledges": {"name": "GPledges", "type": "TOracleDataSet"}, "datasrcgpledges": {"name": "DataSrcGPledges", "type": "TDataSource"}, "sbgirovsetinsuranceright": {"name": "SbGirovSetINSURANCERIGHT", "type": "TFloatField"}, "prosorts": {"name": "proSorts", "type": "TOracleDataSet"}, "prosortsid": {"name": "proSortsID", "type": "TIntegerField"}, "prosortsname": {"name": "proSortsNAME", "type": "TStringField"}, "prosortsdatsrc": {"name": "ProSortsDatSrc", "type": "TDataSource"}, "filialsrc": {"name": "FilialSrc", "type": "TDataSource"}, "filialset": {"name": "FilialSet", "type": "TOracleDataSet"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1name": {"name": "OracleDataSet1NAME", "type": "TStringField"}}, {});
  U.init(async () => {
    U.var_("GrovDataMod", null, "TGrovDataMod");
  });
  U.method("TGrovDataMod", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "GirovDataSet")), "open", []);
  await $.mcall((await $.v(C, "PropDataSet")), "open", []);
  await $.mcall((await $.v(C, "SbGirovSet")), "open", []);
  await $.mcall((await $.v(C, "GPledges")), "Open", []);
  await $.mcall((await $.v(C, "proSorts")), "open", []);
  await $.mcall((await $.v(C, "FilialSet")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGrovDataMod", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "GirovDataSet")), "closeall", []);
  await $.mcall((await $.v(C, "PropDataSet")), "closeall", []);
  await $.mcall((await $.v(C, "SbGirovSet")), "closeall", []);
  await $.mcall((await $.v(C, "GPledges")), "closeall", []);
  await $.mcall((await $.v(C, "proSorts")), "closeall", []);
  await $.mcall((await $.v(C, "FilialSet")), "closeall", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "closeall", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
