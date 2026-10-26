// Generated from DmBlackImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DmBlackImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "ExcelXP", "OleServer", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDmBlack", "TDataModule", {"maindset": {"name": "MainDSet", "type": "TOracleDataSet"}, "maindsrc": {"name": "MainDSrc", "type": "TDataSource"}, "contry": {"name": "Contry", "type": "TOracleDataSet"}, "cities": {"name": "CITIES", "type": "TOracleDataSet"}, "contrysrc": {"name": "ContrySrc", "type": "TDataSource"}, "citiessrc": {"name": "CITIESSrc", "type": "TDataSource"}, "oraclepackage1": {"name": "OraclePackage1", "type": "TOraclePackage"}, "doctype": {"name": "Doctype", "type": "TOracleDataSet"}, "dtypedatasrc": {"name": "DtypeDataSrc", "type": "TDataSource"}, "sex": {"name": "Sex", "type": "TOracleDataSet"}, "sexsrc": {"name": "SexSrc", "type": "TDataSource"}, "sysdat": {"name": "Sysdat", "type": "TOracleDataSet"}, "sysdsrc": {"name": "SysDSrc", "type": "TDataSource"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1contid": {"name": "OracleDataSet1CONTID", "type": "TFloatField"}, "oracledataset1cntr_code": {"name": "OracleDataSet1CNTR_CODE", "type": "TIntegerField"}, "oracledataset1count_name": {"name": "OracleDataSet1count_name", "type": "TWideStringField"}, "excelworkbook1": {"name": "ExcelWorkbook1", "type": "TExcelWorkbook"}, "excelapplication1": {"name": "ExcelApplication1", "type": "TExcelApplication"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "oracledataset3": {"name": "OracleDataSet3", "type": "TOracleDataSet"}, "oraclepackage2": {"name": "OraclePackage2", "type": "TOraclePackage"}, "dsrc_blecxml": {"name": "dsrc_blecxml", "type": "TDataSource"}, "ods_blecxml": {"name": "ods_blecxml", "type": "TOracleDataSet"}, "dsrc__blecnamexml": {"name": "dsrc__blecnamexml", "type": "TDataSource"}, "ods_blecnamexml": {"name": "ods_blecnamexml", "type": "TOracleDataSet"}, "dsrc__blecpaspxml": {"name": "dsrc__blecpaspxml", "type": "TDataSource"}, "ods_blecpaspxml": {"name": "ods_blecpaspxml", "type": "TOracleDataSet"}, "ods_blecxmlid": {"name": "ods_blecxmlID", "type": "TFloatField"}, "ods_blecxmltype_cust": {"name": "ods_blecxmlTYPE_CUST", "type": "TFloatField"}, "ods_blecxmlversionnum": {"name": "ods_blecxmlVERSIONNUM", "type": "TFloatField"}, "ods_blecxmlfirst_name": {"name": "ods_blecxmlFIRST_NAME", "type": "TWideStringField"}, "ods_blecxmlsecond_name": {"name": "ods_blecxmlSECOND_NAME", "type": "TWideStringField"}, "ods_blecxmlthird_name": {"name": "ods_blecxmlTHIRD_NAME", "type": "TWideStringField"}, "ods_blecxmlfourth_name": {"name": "ods_blecxmlFOURTH_NAME", "type": "TWideStringField"}, "ods_blecxmlun_list_type": {"name": "ods_blecxmlUN_LIST_TYPE", "type": "TWideStringField"}, "ods_blecxmlreference_number": {"name": "ods_blecxmlREFERENCE_NUMBER", "type": "TWideStringField"}, "ods_blecxmllisted_on": {"name": "ods_blecxmlLISTED_ON", "type": "TWideStringField"}, "ods_blecxmlname_original_script": {"name": "ods_blecxmlNAME_ORIGINAL_SCRIPT", "type": "TWideStringField"}, "ods_blecxmlcomments1": {"name": "ods_blecxmlCOMMENTS1", "type": "TWideMemoField"}, "ods_blecxmlnationality_value": {"name": "ods_blecxmlNATIONALITY_VALUE", "type": "TWideStringField"}, "ods_blecxmltype_of_date": {"name": "ods_blecxmlTYPE_OF_DATE", "type": "TWideStringField"}, "ods_blecxmlyear": {"name": "ods_blecxmlYEAR", "type": "TWideStringField"}, "ods_blecxmlcountry": {"name": "ods_blecxmlCOUNTRY", "type": "TWideStringField"}, "ods_blecpaspxmldataid": {"name": "ods_blecpaspxmlDATAID", "type": "TFloatField"}, "ods_blecpaspxmlcity": {"name": "ods_blecpaspxmlCITY", "type": "TWideStringField"}, "ods_blecpaspxmlstate_province": {"name": "ods_blecpaspxmlSTATE_PROVINCE", "type": "TWideStringField"}, "ods_blecpaspxmlcountry": {"name": "ods_blecpaspxmlCOUNTRY", "type": "TWideStringField"}, "ods_blecxmldataid": {"name": "ods_blecxmlDATAID", "type": "TWideStringField"}, "ods_blecxmlxml_type": {"name": "ods_blecxmlXML_TYPE", "type": "TIntegerField"}, "ods_blecnamexmlid": {"name": "ods_blecnamexmlID", "type": "TFloatField"}, "ods_blecnamexmldataid": {"name": "ods_blecnamexmlDATAID", "type": "TWideStringField"}, "ods_blecnamexmlname": {"name": "ods_blecnamexmlNAME", "type": "TWideStringField"}, "ods_blecnamexmlname1": {"name": "ods_blecnamexmlNAME1", "type": "TWideStringField"}, "dsrc_search": {"name": "dsrc_search", "type": "TDataSource"}, "ods_search": {"name": "ods_search", "type": "TOracleDataSet"}, "ods_searchdataid": {"name": "ods_searchDATAID", "type": "TWideStringField"}, "ods_searchnam": {"name": "ods_searchNAM", "type": "TWideStringField"}, "ods_searchnam1": {"name": "ods_searchNAM1", "type": "TWideStringField"}, "ods_truncate": {"name": "ods_truncate", "type": "TOracleDataSet"}, "oracledataset2id": {"name": "OracleDataSet2ID", "type": "TFloatField"}, "oracledataset2name": {"name": "OracleDataSet2NAME", "type": "TWideStringField"}, "oracledataset2lastname": {"name": "OracleDataSet2LASTNAME", "type": "TWideStringField"}, "oracledataset2middlename": {"name": "OracleDataSet2MIDDLENAME", "type": "TWideStringField"}, "oracledataset2doc_type": {"name": "OracleDataSet2DOC_TYPE", "type": "TIntegerField"}, "oracledataset2doc_serie": {"name": "OracleDataSet2DOC_SERIE", "type": "TWideStringField"}, "oracledataset2doc_num": {"name": "OracleDataSet2DOC_NUM", "type": "TWideStringField"}, "oracledataset2citizenship": {"name": "OracleDataSet2CITIZENSHIP", "type": "TWideStringField"}, "oracledataset2adrs_state": {"name": "OracleDataSet2ADRS_STATE", "type": "TWideStringField"}, "oracledataset2adrs_city": {"name": "OracleDataSet2ADRS_CITY", "type": "TWideStringField"}, "oracledataset2address": {"name": "OracleDataSet2ADDRESS", "type": "TWideStringField"}, "oracledataset2doc_date": {"name": "OracleDataSet2DOC_DATE", "type": "TDateTimeField"}, "oracledataset2doc_organ": {"name": "OracleDataSet2DOC_ORGAN", "type": "TWideStringField"}, "oracledataset2gender": {"name": "OracleDataSet2GENDER", "type": "TIntegerField"}, "oracledataset2doc_pin": {"name": "OracleDataSet2DOC_PIN", "type": "TWideStringField"}, "oracledataset2seria": {"name": "OracleDataSet2SERIA", "type": "TWideStringField"}, "oracledataset2pasport": {"name": "OracleDataSet2PASPORT", "type": "TWideStringField"}, "oracledataset2birthdate": {"name": "OracleDataSet2BIRTHDATE", "type": "TDateTimeField"}, "oracledataset2black_type": {"name": "OracleDataSet2BLACK_TYPE", "type": "TFloatField"}, "maindsetid": {"name": "MainDSetID", "type": "TFloatField"}, "maindsetname": {"name": "MainDSetNAME", "type": "TWideStringField"}, "maindsetlastname": {"name": "MainDSetLASTNAME", "type": "TWideStringField"}, "maindsetmiddlename": {"name": "MainDSetMIDDLENAME", "type": "TWideStringField"}, "maindsetdoc_type": {"name": "MainDSetDOC_TYPE", "type": "TIntegerField"}, "maindsetdoc_serie": {"name": "MainDSetDOC_SERIE", "type": "TWideStringField"}, "maindsetdoc_num": {"name": "MainDSetDOC_NUM", "type": "TWideStringField"}, "maindsetcitizenship": {"name": "MainDSetCITIZENSHIP", "type": "TWideStringField"}, "maindsetadrs_state": {"name": "MainDSetADRS_STATE", "type": "TWideStringField"}, "maindsetadrs_city": {"name": "MainDSetADRS_CITY", "type": "TWideStringField"}, "maindsetaddress": {"name": "MainDSetADDRESS", "type": "TWideStringField"}, "maindsetdoc_date": {"name": "MainDSetDOC_DATE", "type": "TDateTimeField"}, "maindsetdoc_organ": {"name": "MainDSetDOC_ORGAN", "type": "TWideStringField"}, "maindsetgender": {"name": "MainDSetGENDER", "type": "TIntegerField"}, "maindsetdoc_pin": {"name": "MainDSetDOC_PIN", "type": "TWideStringField"}, "maindsetseria": {"name": "MainDSetSERIA", "type": "TWideStringField"}, "maindsetpasport": {"name": "MainDSetPASPORT", "type": "TWideStringField"}, "maindsetbirthdate": {"name": "MainDSetBIRTHDATE", "type": "TDateTimeField"}, "maindsetblack_type": {"name": "MainDSetBLACK_TYPE", "type": "TFloatField"}, "maindsetdoctip": {"name": "MainDSetDOCTIP", "type": "TWideStringField"}, "maindsetfullname": {"name": "MainDSetFULLNAME", "type": "TWideStringField"}, "sb_aca": {"name": "SB_ACA", "type": "TOraclePackage"}, "maindsetv_name": {"name": "MainDSetV_NAME", "type": "TWideStringField"}, "maindsetv_lastname": {"name": "MainDSetV_LASTNAME", "type": "TWideStringField"}, "maindsetv_middlename": {"name": "MainDSetV_MIDDLENAME", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("DmBlack", null, "TDmBlack");
    U.var_("x", 0, "integer");
  });
  U.method("TDmBlack", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "MainDSet")), "open", []);
  await $.mcall((await $.v(C, "Contry")), "open", []);
  await $.mcall((await $.v(C, "Doctype")), "Open", []);
  await $.mcall((await $.v(C, "sex")), "open", []);
  await $.mcall((await $.v(C, "Sysdat")), "open", []);
  await $.mcall((await $.v(C, "oracledataset1")), "open", []);
  await $.mcall((await $.v(C, "ods_blecxml")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDmBlack", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Contry")), "close", []);
  await $.mcall((await $.v(C, "CITIES")), "close", []);
  await $.mcall((await $.v(C, "MainDSet")), "close", []);
  await $.mcall((await $.v(C, "Doctype")), "close", []);
  await $.mcall((await $.v(C, "sex")), "close", []);
  await $.mcall((await $.v(C, "Sysdat")), "Close", []);
  await $.mcall((await $.v(C, "oracledataset1")), "Close", []);
  await $.mcall((await $.v(C, "ods_blecxml")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDmBlack", "ods_blecxmlAfterScroll", async function ods_blecxmlAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t1 = (await $.v(C, "ods_blecnamexml"));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["v_dataid", (await $.mv((await $.wv([$t1], "ods_blecxmlDATAID", C, false)), "AsVariant"))], C)));
    if ($.truthy($.not((await $.wv([$t1], "Active", C, false))))) {
      await $.stmt($.wcall([$t1], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t1], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
