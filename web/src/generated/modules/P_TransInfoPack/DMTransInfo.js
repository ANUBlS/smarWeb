// Generated from DMTransInfo.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DMTransInfo", ["SysUtils", "Classes", "DB", "OracleData", "sboapiDataModuleImpl", "Oracle", "TransInfoImpl"]);
  const C = [U];
  U.defClass("TDM", "TDataModule", {"ods_mmx_account_status": {"name": "ODS_mmx_account_status", "type": "TOracleDataSet"}, "ods_mmx_account_type": {"name": "ODS_mmx_account_type", "type": "TOracleDataSet"}, "ods_mmx_communication_type": {"name": "ODS_mmx_communication_type", "type": "TOracleDataSet"}, "ods_mmx_account_statusid": {"name": "ODS_mmx_account_statusID", "type": "TFloatField"}, "ods_mmx_account_statussymbol": {"name": "ODS_mmx_account_statusSYMBOL", "type": "TWideStringField"}, "ods_mmx_account_statusdescription": {"name": "ODS_mmx_account_statusDESCRIPTION", "type": "TWideStringField"}, "ods_mmx_contact_type": {"name": "ODS_mmx_contact_type", "type": "TOracleDataSet"}, "ods_mmx_fromfunds": {"name": "ODS_mmx_fromfunds", "type": "TOracleDataSet"}, "ods_mmx_reportcode": {"name": "ODS_mmx_reportcode", "type": "TOracleDataSet"}, "ods_mmx_transaction_item_type": {"name": "ODS_mmx_transaction_item_type", "type": "TOracleDataSet"}, "ods_mmx_transmode": {"name": "ODS_mmx_transmode", "type": "TOracleDataSet"}, "ods_mmx_account_typeid": {"name": "ODS_mmx_account_typeID", "type": "TFloatField"}, "ods_mmx_account_typesymbol": {"name": "ODS_mmx_account_typeSYMBOL", "type": "TWideStringField"}, "ods_mmx_account_typedescription": {"name": "ODS_mmx_account_typeDESCRIPTION", "type": "TWideStringField"}, "ods_mmx_communication_typeid": {"name": "ODS_mmx_communication_typeID", "type": "TIntegerField"}, "ods_mmx_communication_typesymbol": {"name": "ODS_mmx_communication_typeSYMBOL", "type": "TWideStringField"}, "ods_mmx_communication_typedescription": {"name": "ODS_mmx_communication_typeDESCRIPTION", "type": "TWideStringField"}, "ods_mmx_contact_typeid": {"name": "ODS_mmx_contact_typeID", "type": "TIntegerField"}, "ods_mmx_contact_typesymbol": {"name": "ODS_mmx_contact_typeSYMBOL", "type": "TWideStringField"}, "ods_mmx_contact_typedescription": {"name": "ODS_mmx_contact_typeDESCRIPTION", "type": "TWideStringField"}, "ods_mmx_fromfundsid": {"name": "ODS_mmx_fromfundsID", "type": "TIntegerField"}, "ods_mmx_fromfundssymbol": {"name": "ODS_mmx_fromfundsSYMBOL", "type": "TWideStringField"}, "ods_mmx_fromfundsdescription": {"name": "ODS_mmx_fromfundsDESCRIPTION", "type": "TWideStringField"}, "ods_mmx_reportcodeid": {"name": "ODS_mmx_reportcodeID", "type": "TIntegerField"}, "ods_mmx_reportcodename": {"name": "ODS_mmx_reportcodeNAME", "type": "TWideStringField"}, "ods_mmx_reportcodedescription": {"name": "ODS_mmx_reportcodeDESCRIPTION", "type": "TWideStringField"}, "ods_mmx_transaction_item_typeid": {"name": "ODS_mmx_transaction_item_typeID", "type": "TFloatField"}, "ods_mmx_transaction_item_typesymbol": {"name": "ODS_mmx_transaction_item_typeSYMBOL", "type": "TWideStringField"}, "ods_mmx_transaction_item_typedescription": {"name": "ODS_mmx_transaction_item_typeDESCRIPTION", "type": "TWideStringField"}, "ods_mmx_transmodeid": {"name": "ODS_mmx_transmodeID", "type": "TIntegerField"}, "ods_mmx_transmodename": {"name": "ODS_mmx_transmodeNAME", "type": "TIntegerField"}, "ods_mmx_transmodedescription": {"name": "ODS_mmx_transmodeDESCRIPTION", "type": "TWideStringField"}, "ds_mmx_account_status": {"name": "DS_mmx_account_status", "type": "TDataSource"}, "ds_mmx_account_type": {"name": "DS_mmx_account_type", "type": "TDataSource"}, "ds_mmx_communication_type": {"name": "DS_mmx_communication_type", "type": "TDataSource"}, "ds_mmx_transaction_item_type": {"name": "DS_mmx_transaction_item_type", "type": "TDataSource"}, "ds_mmx_reportcode": {"name": "DS_mmx_reportcode", "type": "TDataSource"}, "ds_mmx_transmode": {"name": "DS_mmx_transmode", "type": "TDataSource"}, "ds_mmx_contact_type": {"name": "DS_mmx_contact_type", "type": "TDataSource"}, "ds_mmx_fromfunds": {"name": "DS_mmx_fromfunds", "type": "TDataSource"}, "ods_mmx_trans_item_status": {"name": "ODS_MMX_TRANS_ITEM_STATUS", "type": "TOracleDataSet"}, "ds_mmx_trans_item_status": {"name": "DS_MMX_TRANS_ITEM_STATUS", "type": "TDataSource"}, "ods_mmx_trans_item_statusid": {"name": "ODS_MMX_TRANS_ITEM_STATUSID", "type": "TFloatField"}, "ods_mmx_trans_item_statussymbol": {"name": "ODS_MMX_TRANS_ITEM_STATUSSYMBOL", "type": "TWideStringField"}, "ods_mmx_trans_item_statusdescription": {"name": "ODS_MMX_TRANS_ITEM_STATUSDESCRIPTION", "type": "TWideStringField"}, "ods_countries": {"name": "ODS_Countries", "type": "TOracleDataSet"}, "ods_cityes": {"name": "ODS_Cityes", "type": "TOracleDataSet"}, "ds_countries": {"name": "DS_Countries", "type": "TDataSource"}, "ds_cityes": {"name": "DS_Cityes", "type": "TDataSource"}, "ods_cityesid": {"name": "ODS_CityesID", "type": "TFloatField"}, "ods_cityescountry_id": {"name": "ODS_CityesCOUNTRY_ID", "type": "TFloatField"}, "ods_cityescity_name": {"name": "ODS_CityesCITY_NAME", "type": "TWideStringField"}, "ods_countriesid": {"name": "ODS_CountriesID", "type": "TFloatField"}, "ods_countriescntr_name": {"name": "ODS_CountriesCNTR_NAME", "type": "TWideStringField"}, "ods_countriessymb": {"name": "ODS_CountriesSYMB", "type": "TWideStringField"}, "mmx": {"name": "MMX", "type": "TOraclePackage"}, "ods_mmx_tofunds": {"name": "ODS_mmx_tofunds", "type": "TOracleDataSet"}, "ds_mmx_tofunds": {"name": "DS_mmx_tofunds", "type": "TDataSource"}, "ods_mmx_tofundsid": {"name": "ODS_mmx_tofundsID", "type": "TIntegerField"}, "ods_mmx_tofundssymbol": {"name": "ODS_mmx_tofundsSYMBOL", "type": "TWideStringField"}, "ods_mmx_tofundsdescription": {"name": "ODS_mmx_tofundsDESCRIPTION", "type": "TWideStringField"}, "ods_transinfo": {"name": "ODS_TransInfo", "type": "TOracleDataSet"}, "ods_transinfoid": {"name": "ODS_TransInfoID", "type": "TFloatField"}, "ods_transinforeport_code": {"name": "ODS_TransInfoREPORT_CODE", "type": "TWideStringField"}, "ods_transinforeason": {"name": "ODS_TransInfoREASON", "type": "TWideStringField"}, "ods_transinfotransmode_code": {"name": "ODS_TransInfoTRANSMODE_CODE", "type": "TIntegerField"}, "ods_transinfotransmode_comment": {"name": "ODS_TransInfoTRANSMODE_COMMENT", "type": "TWideStringField"}, "ods_transinfofrom_funds_code": {"name": "ODS_TransInfoFROM_FUNDS_CODE", "type": "TWideStringField"}, "ods_transinfofrom_funds_comment": {"name": "ODS_TransInfoFROM_FUNDS_COMMENT", "type": "TWideStringField"}, "ods_transinfotransid": {"name": "ODS_TransInfoTRANSID", "type": "TFloatField"}, "ods_transinfoitem_type": {"name": "ODS_TransInfoITEM_TYPE", "type": "TWideStringField"}, "ods_transinfoitem_make": {"name": "ODS_TransInfoITEM_MAKE", "type": "TWideStringField"}, "ods_transinfodescription": {"name": "ODS_TransInfoDESCRIPTION", "type": "TWideStringField"}, "ods_transinfopreviously_registered_to": {"name": "ODS_TransInfoPREVIOUSLY_REGISTERED_TO", "type": "TWideStringField"}, "ods_transinfopresently_registered_to": {"name": "ODS_TransInfoPRESENTLY_REGISTERED_TO", "type": "TWideStringField"}, "ods_transinfoestimated_value": {"name": "ODS_TransInfoESTIMATED_VALUE", "type": "TFloatField"}, "ods_transinfostatus_code": {"name": "ODS_TransInfoSTATUS_CODE", "type": "TWideStringField"}, "ods_transinfostatus_comments": {"name": "ODS_TransInfoSTATUS_COMMENTS", "type": "TWideStringField"}, "ods_transinfodisposed_value": {"name": "ODS_TransInfoDISPOSED_VALUE", "type": "TFloatField"}, "ods_transinfoitem_size": {"name": "ODS_TransInfoITEM_SIZE", "type": "TFloatField"}, "ods_transinfoitem_size_uom": {"name": "ODS_TransInfoITEM_SIZE_UOM", "type": "TWideStringField"}, "ods_transinfoitem_registration_date": {"name": "ODS_TransInfoITEM_REGISTRATION_DATE", "type": "TDateTimeField"}, "ods_transinfoitem_registration_number": {"name": "ODS_TransInfoITEM_REGISTRATION_NUMBER", "type": "TWideStringField"}, "ods_transinfoitem_identification_number": {"name": "ODS_TransInfoITEM_IDENTIFICATION_NUMBER", "type": "TWideStringField"}, "ods_transinfoitem_comments": {"name": "ODS_TransInfoITEM_COMMENTS", "type": "TWideStringField"}, "ods_transinfocontact_type": {"name": "ODS_TransInfoCONTACT_TYPE", "type": "TWideStringField"}, "ods_transinfoitemcountry": {"name": "ODS_TransInfoITEMCOUNTRY", "type": "TWideStringField"}, "ods_transinfoitemcity": {"name": "ODS_TransInfoITEMCITY", "type": "TWideStringField"}, "ods_transinfoitemstate": {"name": "ODS_TransInfoITEMSTATE", "type": "TWideStringField"}, "ods_transinfoitemadress": {"name": "ODS_TransInfoITEMADRESS", "type": "TWideStringField"}, "ods_transinfoitemzip": {"name": "ODS_TransInfoITEMZIP", "type": "TWideStringField"}, "ods_transinfosubmission_code": {"name": "ODS_TransInfoSUBMISSION_CODE", "type": "TWideStringField"}, "ods_transinfoentity_reference": {"name": "ODS_TransInfoENTITY_REFERENCE", "type": "TWideStringField"}, "ods_transinfofiu_ref_number": {"name": "ODS_TransInfoFIU_REF_NUMBER", "type": "TWideStringField"}, "ods_transinfoto_funds_code": {"name": "ODS_TransInfoTO_FUNDS_CODE", "type": "TWideStringField"}, "ods_transinfoto_funds_comment": {"name": "ODS_TransInfoTO_FUNDS_COMMENT", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("DM", null, "TDM");
  });
  U.method("TDM", "ODS_CountriesAfterScroll", async function ODS_CountriesAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall((await $.v(C, "ODS_Cityes")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ODS_Cityes")), "SetVariable", ["COUNTRY_ID", (await $.mv((await $.v(C, "ODS_CountriesID")), "AsInteger"))])));
  await $.mcall((await $.v(C, "ODS_Cityes")), "Open", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDM", "ODS_mmx_fromfundsAfterScroll", async function ODS_mmx_fromfundsAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "ODS_mmx_fromfunds")), "Fieldbyname", ["SYMBOL"])), "AsString")), "O"))) {
    await $.mset((await $.mv((await $.v(C, "TransInfo")), "Memo_fromfundsComment")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "TransInfo")), "Label41")), "Visible", true);
  } else {
    await $.mset((await $.mv((await $.v(C, "TransInfo")), "Memo_fromfundsComment")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "TransInfo")), "Label41")), "Visible", false);
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDM", "ODS_mmx_reportcodeAfterScroll", async function ODS_mmx_reportcodeAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.mv((await $.v(C, "TransInfo")), "Label39")), "Visible", ($.eq((await $.mv((await $.v(C, "ODS_mmx_reportcodeNAME")), "Text")), "STR")));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDM", "ODS_mmx_tofundsAfterScroll", async function ODS_mmx_tofundsAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "ODS_mmx_tofunds")), "Fieldbyname", ["SYMBOL"])), "AsString")), "O"))) {
    await $.mset((await $.mv((await $.v(C, "TransInfo")), "Memo_tofundsComment")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "TransInfo")), "Label42")), "Visible", true);
  } else {
    await $.mset((await $.mv((await $.v(C, "TransInfo")), "Memo_tofundsComment")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "TransInfo")), "Label42")), "Visible", false);
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TDM", "ODS_mmx_transmodeAfterScroll", async function ODS_mmx_transmodeAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "ODS_mmx_transmode")), "Fieldbyname", ["name"])), "AsInteger")), 9999))) {
    await $.mset((await $.mv((await $.v(C, "TransInfo")), "Memo_transmode_comment")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "TransInfo")), "Label40")), "Visible", true);
  } else {
    await $.mset((await $.mv((await $.v(C, "TransInfo")), "Memo_transmode_comment")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "TransInfo")), "Label40")), "Visible", false);
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
