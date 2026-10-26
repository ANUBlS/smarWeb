// Generated from AgreeDataModImplUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AgreeDataModImplUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "sboapiDataModuleImpl", "CommonDataModuleImpl", "commondecls"]);
  const C = [U];
  U.defClass("TAgreeDataModule", "TDataModule", {"templatesdataset": {"name": "TemplatesDataSet", "type": "TOracleDataSet"}, "templatesdatasrc": {"name": "TemplatesDataSrc", "type": "TDataSource"}, "creditinfodataset": {"name": "CreditInfoDataSet", "type": "TOracleDataSet"}, "creditinfodatasrc": {"name": "CreditInfoDataSrc", "type": "TDataSource"}, "bookmarksdataset": {"name": "BookmarksDataSet", "type": "TOracleDataSet"}, "bookmarksdatasrc": {"name": "BookmarksDataSrc", "type": "TDataSource"}, "fieldsdataset": {"name": "FieldsDataSet", "type": "TOracleDataSet"}, "fieldsdatasrc": {"name": "FieldsDataSrc", "type": "TDataSource"}, "replacedataset": {"name": "ReplaceDataSet", "type": "TOracleDataSet"}, "yazi": {"name": "yazi", "type": "TOracleDataSet"}, "templatesdatasetid": {"name": "TemplatesDataSetID", "type": "TFloatField"}, "templatesdatasetpath": {"name": "TemplatesDataSetPATH", "type": "TWideStringField"}, "templatesdatasetname": {"name": "TemplatesDataSetNAME", "type": "TWideStringField"}, "fieldsdatasetid": {"name": "FieldsDataSetID", "type": "TFloatField"}, "fieldsdatasetfieldname": {"name": "FieldsDataSetFIELDNAME", "type": "TWideStringField"}, "fieldsdatasetdescription": {"name": "FieldsDataSetDESCRIPTION", "type": "TWideStringField"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "floatfield1": {"name": "FloatField1", "type": "TFloatField"}, "widestringfield1": {"name": "WideStringField1", "type": "TWideStringField"}, "widestringfield2": {"name": "WideStringField2", "type": "TWideStringField"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "floatfield2": {"name": "FloatField2", "type": "TFloatField"}, "widestringfield3": {"name": "WideStringField3", "type": "TWideStringField"}, "widestringfield4": {"name": "WideStringField4", "type": "TWideStringField"}, "ods_portfolio": {"name": "ods_portfolio", "type": "TOracleDataSet"}, "ods_portfoliocredittype": {"name": "ods_portfolioCREDITTYPE", "type": "TFloatField"}, "ods_portfolioactivities": {"name": "ods_portfolioACTIVITIES", "type": "TFloatField"}, "ods_portfoliomehsulid": {"name": "ods_portfolioMEHSULID", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("AgreeDataModule", null, "TAgreeDataModule");
  });
  U.method("TAgreeDataModule", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t1 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 1))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAgreeDataModule", "CreditInfoDataSetCalcFields", async function CreditInfoDataSetCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
