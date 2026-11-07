// Generated from CredArchDatModUnitImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CredArchDatModUnitImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "CMOracleApiDataModuleImpl", "CommonDecls"]);
  const C = [U];
  U.defClass("TCredArchDatMod", "TDataModule", {"datsetcreditarchview": {"name": "DatSetCreditArchView", "type": "TOracleDataSet"}, "datsrccredarch": {"name": "DatSrcCredArch", "type": "TDataSource"}, "datsetcreditarchviewnumberofcredit": {"name": "DatSetCreditArchViewNUMBEROFCREDIT", "type": "TStringField"}, "datsetcreditarchviewcreditlineamount": {"name": "DatSetCreditArchViewCREDITLINEAMOUNT", "type": "TFloatField"}, "datsetcreditarchviewannualyinterestrate": {"name": "DatSetCreditArchViewANNUALYINTERESTRATE", "type": "TFloatField"}, "datsetcreditarchviewannualyoverduerate": {"name": "DatSetCreditArchViewANNUALYOVERDUERATE", "type": "TFloatField"}, "datsetcreditarchviewannualypenaltyrate": {"name": "DatSetCreditArchViewANNUALYPENALTYRATE", "type": "TFloatField"}, "datsetcreditarchviewdateofconclusion": {"name": "DatSetCreditArchViewDATEOFCONCLUSION", "type": "TDateTimeField"}, "datsetcreditarchviewduedatefirstcontract": {"name": "DatSetCreditArchViewDUEDATEFIRSTCONTRACT", "type": "TDateTimeField"}, "datsetcreditarchviewpurposeofcredit": {"name": "DatSetCreditArchViewPURPOSEOFCREDIT", "type": "TStringField"}, "datsetcreditarchviewcustname": {"name": "DatSetCreditArchViewCUSTNAME", "type": "TStringField"}, "datsetcreditarchviewcatdescription": {"name": "DatSetCreditArchViewCATDESCRIPTION", "type": "TStringField"}, "datsetcreditarchviewperdescripion": {"name": "DatSetCreditArchViewPERDESCRIPION", "type": "TStringField"}, "datsetcreditarchviewcrdtypedescription": {"name": "DatSetCreditArchViewCRDTYPEDESCRIPTION", "type": "TStringField"}, "datsetcreditarchviewusrgrdescription": {"name": "DatSetCreditArchViewUSRGRDESCRIPTION", "type": "TStringField"}, "datsetcreditarchviewfilname": {"name": "DatSetCreditArchViewFILNAME", "type": "TStringField"}, "datsetcreditarchviewloanaccno": {"name": "DatSetCreditArchViewLOANACCNO", "type": "TStringField"}, "datsetcreditarchviewinterestaccno": {"name": "DatSetCreditArchViewINTERESTACCNO", "type": "TStringField"}, "datsetcreditarchviewdueloanaccno": {"name": "DatSetCreditArchViewDUELOANACCNO", "type": "TStringField"}, "datsetcreditarchviewdueinterestaccno": {"name": "DatSetCreditArchViewDUEINTERESTACCNO", "type": "TStringField"}, "datsetcreditarchviewhdate": {"name": "DatSetCreditArchViewHDATE", "type": "TDateTimeField"}, "datsetcreditarchviewval_name": {"name": "DatSetCreditArchViewVAL_NAME", "type": "TStringField"}, "datsetcreditarchviewdefcalcint": {"name": "DatSetCreditArchViewDEFCALCINT", "type": "TFloatField"}, "datsetcreditarchviewop_id": {"name": "DatSetCreditArchViewOP_ID", "type": "TStringField"}, "datsetcreditarchviewcalcmethod": {"name": "DatSetCreditArchViewCALCMETHOD", "type": "TStringField"}}, {});
  U.init(async () => {
    U.var_("CredArchDatMod", null, "TCredArchDatMod");
  });
  U.method("TCredArchDatMod", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DatSetCreditArchView")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
