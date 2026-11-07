// Generated from InfoOutIntImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InfoOutIntImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "CMOracleAPIDataModuleImpl"]);
  const C = [U];
  U.defClass("TInfOutIntDatMod", "TDataModule", {"intplaceoutbdatset": {"name": "IntPlaceOutBDatSet", "type": "TOracleDataSet"}, "intplaceoutbdatsrc": {"name": "IntPlaceOutBDatSrc", "type": "TDataSource"}, "cm_return_int_ob": {"name": "CM_RETURN_INT_OB", "type": "TOraclePackage"}, "intplaceoutbdatsetcreditid": {"name": "IntPlaceOutBDatSetCREDITID", "type": "TFloatField"}, "intplaceoutbdatsethdate": {"name": "IntPlaceOutBDatSetHDATE", "type": "TDateTimeField"}, "intplaceoutbdatsetstopcalcdate": {"name": "IntPlaceOutBDatSetSTOPCALCDATE", "type": "TDateTimeField"}, "intplaceoutbdatsetrest": {"name": "IntPlaceOutBDatSetREST", "type": "TFloatField"}, "intplaceoutbdatsetinterestrest": {"name": "IntPlaceOutBDatSetINTERESTREST", "type": "TFloatField"}, "intplaceoutbdatsetduerest": {"name": "IntPlaceOutBDatSetDUEREST", "type": "TFloatField"}, "intplaceoutbdatsetdueinterestrest": {"name": "IntPlaceOutBDatSetDUEINTERESTREST", "type": "TFloatField"}, "intplaceoutbdatsetname": {"name": "IntPlaceOutBDatSetNAME", "type": "TStringField"}, "intplaceoutbdatsetsumrest": {"name": "IntPlaceOutBDatSetSUMREST", "type": "TFloatField"}, "intplaceoutbdatsetnum": {"name": "IntPlaceOutBDatSetNUM", "type": "TStringField"}, "out_paymentsds": {"name": "out_paymentsds", "type": "TDataSource"}, "out_payments": {"name": "out_payments", "type": "TOracleDataSet"}, "out_paymentsid": {"name": "out_paymentsID", "type": "TFloatField"}, "out_paymentscreditid": {"name": "out_paymentsCREDITID", "type": "TFloatField"}, "out_paymentstrdate": {"name": "out_paymentsTRDATE", "type": "TDateTimeField"}, "out_paymentstramount": {"name": "out_paymentsTRAMOUNT", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("InfOutIntDatMod", null, "TInfOutIntDatMod");
  });
  return U;
}
