// Generated from CC_Datamodule.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CC_Datamodule", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Oracle", "Db", "OracleData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TCC_DataMod", "TDataModule", {"cc_op": {"name": "CC_OP", "type": "TOraclePackage"}, "cc_company": {"name": "CC_Company", "type": "TOracleDataSet"}, "cc_com_data": {"name": "CC_Com_Data", "type": "TDataSource"}, "cc_build_data": {"name": "CC_build_Data", "type": "TDataSource"}, "cc_flat": {"name": "CC_Flat", "type": "TOracleDataSet"}, "cc_flat_data": {"name": "CC_Flat_Data", "type": "TDataSource"}, "cc_buyer_flat": {"name": "CC_Buyer_Flat", "type": "TOracleDataSet"}, "cc_buyer_flatdata": {"name": "CC_Buyer_FlatData", "type": "TDataSource"}, "cc_companyid": {"name": "CC_CompanyID", "type": "TIntegerField"}, "cc_building": {"name": "CC_building", "type": "TOracleDataSet"}, "cc_buildingid": {"name": "CC_buildingID", "type": "TFloatField"}, "cc_buildingcomp_id": {"name": "CC_buildingCOMP_ID", "type": "TFloatField"}, "cc_buildingfloors": {"name": "CC_buildingFLOORS", "type": "TFloatField"}, "cc_buildingentrances": {"name": "CC_buildingENTRANCES", "type": "TFloatField"}, "cc_buildingflats": {"name": "CC_buildingFLATS", "type": "TFloatField"}, "cc_buyer_flatid": {"name": "CC_Buyer_FlatID", "type": "TFloatField"}, "cc_buyer_flatbld_id": {"name": "CC_Buyer_FlatBLD_ID", "type": "TFloatField"}, "cc_buyer_flatffloor": {"name": "CC_Buyer_FlatFFLOOR", "type": "TFloatField"}, "cc_buyer_flatrooms": {"name": "CC_Buyer_FlatROOMS", "type": "TFloatField"}, "cc_buyer_flatarea": {"name": "CC_Buyer_FlatAREA", "type": "TFloatField"}, "cc_buyer_flatprice1": {"name": "CC_Buyer_FlatPRICE1", "type": "TFloatField"}, "cc_buyer_flatpricegen": {"name": "CC_Buyer_FlatPRICEGEN", "type": "TFloatField"}, "cc_buyer_flatbuyer": {"name": "CC_Buyer_FlatBUYER", "type": "TFloatField"}, "cc_buyer_flatuserid": {"name": "CC_Buyer_FlatUSERID", "type": "TFloatField"}, "cc_flatid": {"name": "CC_FlatID", "type": "TFloatField"}, "cc_flatbld_id": {"name": "CC_FlatBLD_ID", "type": "TFloatField"}, "cc_flatffloor": {"name": "CC_FlatFFLOOR", "type": "TFloatField"}, "cc_flatrooms": {"name": "CC_FlatROOMS", "type": "TFloatField"}, "cc_flatarea": {"name": "CC_FlatAREA", "type": "TFloatField"}, "cc_flatprice1": {"name": "CC_FlatPRICE1", "type": "TFloatField"}, "cc_flatpricegen": {"name": "CC_FlatPRICEGEN", "type": "TFloatField"}, "cc_flatbuyer": {"name": "CC_FlatBUYER", "type": "TFloatField"}, "cc_flatuserid": {"name": "CC_FlatUSERID", "type": "TFloatField"}, "cc_flataccid": {"name": "CC_FlatACCID", "type": "TFloatField"}, "cc_companycomp_name": {"name": "CC_CompanyCOMP_NAME", "type": "TWideStringField"}, "cc_flatflatnumber": {"name": "CC_FlatFLATNUMBER", "type": "TWideStringField"}, "cc_flatentrance": {"name": "CC_FlatENTRANCE", "type": "TWideStringField"}, "cc_flatcode": {"name": "CC_FlatCODE", "type": "TWideStringField"}, "cc_buildingbld_name": {"name": "CC_buildingBLD_NAME", "type": "TWideStringField"}, "cc_buildingaddress": {"name": "CC_buildingADDRESS", "type": "TWideStringField"}, "cc_buyer_flatcode": {"name": "CC_Buyer_FlatCODE", "type": "TWideStringField"}, "cc_buyer_flatflatnumber": {"name": "CC_Buyer_FlatFLATNUMBER", "type": "TWideStringField"}, "cc_buyer_flatentrance": {"name": "CC_Buyer_FlatENTRANCE", "type": "TWideStringField"}, "cc_buyer_flatbuyer_status": {"name": "CC_Buyer_FlatBUYER_STATUS", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("CC_DataMod", null, "TCC_DataMod");
  });
  U.method("TCC_DataMod", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CC_building")), "Open", []);
  await $.mcall((await $.v(C, "CC_Buyer_Flat")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
