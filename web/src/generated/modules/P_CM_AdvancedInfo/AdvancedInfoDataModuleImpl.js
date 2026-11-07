// Generated from AdvancedInfoDataModuleImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AdvancedInfoDataModuleImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "CommonDecls", "CMOracleAPIDataModuleImpl"]);
  const C = [U];
  $.defRecord("tadvinfo", {"id": () => 0, "boorowerid": () => '', "name": () => '', "countrycode": () => '', "bankrupteystatus": () => '', "phonenumber": () => '', "address": () => '', "firstownerid": () => '', "firstownername": () => '', "secondownerid": () => '', "secondownername": () => '', "thirdownerid": () => '', "thirdownername": () => '', "pledgename": () => '', "holdername": () => '', "holderaddress": () => '', "anyinfotodisting": () => '', "registryno": () => '', "registryagency": () => '', "registrydate": () => 0, "pledgeinuse": () => 0, "pledgeinsurant": () => 0, "insuranceagency": () => '', "insuranceamount": () => 0, "insurancedate": () => 0});
  U.defClass("TAdvInfoDataModule", "TDataModule", {"addinfo": {"name": "AddInfo", "type": "TOracleDataSet"}, "datasrcaddinfo": {"name": "DataSrcAddInfo", "type": "TDataSource"}, "addinfoid": {"name": "AddInfoID", "type": "TFloatField"}, "addinfocurrency": {"name": "AddInfoCURRENCY", "type": "TFloatField"}, "addinfodescription": {"name": "AddInfoDESCRIPTION", "type": "TStringField"}, "addinfoboorowerid": {"name": "AddInfoBOOROWERID", "type": "TStringField"}, "addinfoname": {"name": "AddInfoNAME", "type": "TStringField"}, "addinfocountrycode": {"name": "AddInfoCOUNTRYCODE", "type": "TStringField"}, "addinfophonenumber": {"name": "AddInfoPHONENUMBER", "type": "TStringField"}, "addinfoaddress": {"name": "AddInfoADDRESS", "type": "TStringField"}, "addinfofirstownerid": {"name": "AddInfoFIRSTOWNERID", "type": "TStringField"}, "addinfofirstownername": {"name": "AddInfoFIRSTOWNERNAME", "type": "TStringField"}, "addinfosecondownerid": {"name": "AddInfoSECONDOWNERID", "type": "TStringField"}, "addinfosecondownername": {"name": "AddInfoSECONDOWNERNAME", "type": "TStringField"}, "addinfothirdownerid": {"name": "AddInfoTHIRDOWNERID", "type": "TStringField"}, "addinfothirdownername": {"name": "AddInfoTHIRDOWNERNAME", "type": "TStringField"}, "addinfopledgename": {"name": "AddInfoPLEDGENAME", "type": "TStringField"}, "addinfoholdername": {"name": "AddInfoHOLDERNAME", "type": "TStringField"}, "addinfoholderaddress": {"name": "AddInfoHOLDERADDRESS", "type": "TStringField"}, "addinfoanyinfotodisting": {"name": "AddInfoANYINFOTODISTING", "type": "TStringField"}, "addinforegistryno": {"name": "AddInfoREGISTRYNO", "type": "TStringField"}, "addinforegistryagency": {"name": "AddInfoREGISTRYAGENCY", "type": "TStringField"}, "addinforegistrydate": {"name": "AddInfoREGISTRYDATE", "type": "TDateTimeField"}, "addinfopledgeinuse": {"name": "AddInfoPLEDGEINUSE", "type": "TFloatField"}, "addinfopledgeinsurant": {"name": "AddInfoPLEDGEINSURANT", "type": "TFloatField"}, "addinfoinsuranceagency": {"name": "AddInfoINSURANCEAGENCY", "type": "TStringField"}, "addinfoinsuranceamount": {"name": "AddInfoINSURANCEAMOUNT", "type": "TFloatField"}, "addinfoinsurancedate": {"name": "AddInfoINSURANCEDATE", "type": "TDateTimeField"}, "addinfopledgeid": {"name": "AddInfoPLEDGEID", "type": "TFloatField"}, "addinfoval_name": {"name": "AddInfoVAL_NAME", "type": "TStringField"}, "countrys": {"name": "Countrys", "type": "TOracleDataSet"}, "datasrccontrys": {"name": "DataSrcContrys", "type": "TDataSource"}, "addinfopackage": {"name": "AddInfoPackage", "type": "TOraclePackage"}, "addinfobankrupteystatus": {"name": "AddInfoBANKRUPTEYSTATUS", "type": "TFloatField"}, "advinfo": {"name": "AdvInfo", "type": "TAdvInfo"}}, {});
  U.fieldInit("TAdvInfoDataModule", "advinfo", () => $.rec("tadvinfo"));
  U.init(async () => {
    U.var_("AdvInfoDataModule", null, "TAdvInfoDataModule");
  });
  U.method("TAdvInfoDataModule", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Countrys")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdvInfoDataModule", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Countrys")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdvInfoDataModule", "AddInfoApplyRecord", async function AddInfoApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "action"]);
  await L0["applied"].set(true);
  { const $t1 = L0["action"];
    if ($.eq($t1, "U")) {
      {
        const $t2 = (await $.wobj(C, "AddInfoPackage"));
        const $t3 = (await $.wv([$t2], "AdvInfo", C, false));
        await $.stmt((await $.wcall([$t2, $t3], "CallProcedure", ["ContractAddInfo_Edit", ["p_CreditID", (await $.wv([$t2, $t3], "ID", C, false)), "p_BOOROWERID", (await $.wv([$t2, $t3], "BOOROWERID", C, false)), "p_NAME", (await $.wv([$t2, $t3], "NAME", C, false)), "p_COUNTRYCODE", (await $.wv([$t2, $t3], "COUNTRYCODE", C, false)), "p_BANKRUPTEYSTATUS", (await $.wv([$t2, $t3], "BANKRUPTEYSTATUS", C, false)), "p_PHONENUMBER", (await $.wv([$t2, $t3], "PHONENUMBER", C, false)), "p_ADDRESS", (await $.wv([$t2, $t3], "ADDRESS", C, false)), "p_FIRSTOWNERID", (await $.wv([$t2, $t3], "FIRSTOWNERID", C, false)), "p_FIRSTOWNERNAME", (await $.wv([$t2, $t3], "FIRSTOWNERNAME", C, false)), "p_SECONDOWNERID", (await $.wv([$t2, $t3], "SECONDOWNERID", C, false)), "p_SECONDOWNERNAME", (await $.wv([$t2, $t3], "SECONDOWNERNAME", C, false)), "p_THIRDOWNERID", (await $.wv([$t2, $t3], "THIRDOWNERID", C, false)), "p_THIRDOWNERNAME", (await $.wv([$t2, $t3], "THIRDOWNERNAME", C, false)), "p_PLEDGENAME", (await $.wv([$t2, $t3], "PLEDGENAME", C, false)), "p_HOLDERNAME", (await $.wv([$t2, $t3], "HOLDERNAME", C, false)), "p_HOLDERADDRESS", (await $.wv([$t2, $t3], "HOLDERADDRESS", C, false)), "p_ANYINFOTODISTING", (await $.wv([$t2, $t3], "ANYINFOTODISTING", C, false)), "p_REGISTRYNO", (await $.wv([$t2, $t3], "REGISTRYNO", C, false)), "p_REGISTRYAGENCY", (await $.wv([$t2, $t3], "REGISTRYAGENCY", C, false)), "p_REGISTRYDATE", (await $.wv([$t2, $t3], "REGISTRYDATE", C, false)), "p_PLEDGEINUSE", (await $.wv([$t2, $t3], "PLEDGEINUSE", C, false)), "p_PLEDGEINSURANT", (await $.wv([$t2, $t3], "PLEDGEINSURANT", C, false)), "p_INSURANCEAGENCY", (await $.wv([$t2, $t3], "INSURANCEAGENCY", C, false)), "p_INSURANCEAMOUNT", (await $.wv([$t2, $t3], "INSURANCEAMOUNT", C, false)), "p_INSURANCEDATE", (await $.wv([$t2, $t3], "INSURANCEDATE", C, false))]], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  return U;
}
