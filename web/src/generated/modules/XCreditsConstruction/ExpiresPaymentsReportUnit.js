// Generated from ExpiresPaymentsReportUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ExpiresPaymentsReportUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "Buttons", "ExtCtrls", "Db", "OracleData", "Grids", "DBGrids", "CMExcelExport", "ActnList", "oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TExpiresPaymentsForm", "TForm", {"credits": {"name": "Credits", "type": "TOracleDataSet"}, "creditsdatsrc": {"name": "CreditsDatSrc", "type": "TDataSource"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "dtpd": {"name": "DTPD", "type": "TDateTimePicker"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "commongrid": {"name": "CommonGrid", "type": "TDBGrid"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "editcontractno": {"name": "EditContractno", "type": "TEdit"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnok": {"name": "ActnOK", "type": "TAction"}, "actnnook": {"name": "ACTNnook", "type": "TAction"}, "actnsearch": {"name": "ActnSearch", "type": "TAction"}, "creditsid": {"name": "CreditsID", "type": "TFloatField"}, "creditscontractno": {"name": "CreditsCONTRACTNO", "type": "TWideStringField"}, "creditscustname": {"name": "CreditsCUSTNAME", "type": "TWideStringField"}, "creditsaccno": {"name": "CreditsACCNO", "type": "TWideStringField"}, "creditsopendate": {"name": "CreditsOPENDATE", "type": "TDateTimeField"}, "creditsclosedate": {"name": "CreditsCLOSEDATE", "type": "TDateTimeField"}, "creditsgecmeb": {"name": "CreditsGECMEB", "type": "TFloatField"}, "creditsgecgun": {"name": "CreditsGECGUN", "type": "TFloatField"}, "creditsbld_name": {"name": "CreditsBLD_NAME", "type": "TWideStringField"}, "creditscontamount": {"name": "CreditsCONTAMOUNT", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("ExpiresPaymentsForm", null, "TExpiresPaymentsForm");
  });
  U.method("TExpiresPaymentsForm", "FindNextRecord", async function FindNextRecord(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "fieldname": $.copyArg(p1), "value": $.copyArg(p2), result: false, "searchoptions": null};
  await $.fixArgs(L0, ["dataset", "fieldname", "value"]);
  L0["rsrecordrecachedeof"] = "Axtarış cərgənin sonuna çatıb.";
  L0["rscontinuefromtop"] = "Əvvəldən axtarmaqla davam etmək istəyirsiniz?";
  L0["rsrecordnotfound"] = "Yazı tapılmadı.";
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t1 = (L0["dataset"]);
    await $.wset([$t1], "Result", (await $.wcall([$t1], "SearchRecord", [(await $.wv([$t1], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false)), (await $.wv([$t1], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), $.add((await $.wv([$t1], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1], "srFromCurrent", C, false)), (await $.wv([$t1], "srForward", C, false))])], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    if ($.truthy($.not((await $.wv([$t1], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))))) {
      if ($.truthy($.eq((await $.wcall([$t1], "MessageDlg", [$.add($.add((await $.wv([$t1], "rsRecordRecachedEOF", { get: async () => L0["rsrecordrecachedeof"], set: async (v) => { L0["rsrecordrecachedeof"] = v; }, local: true }, false)), "\n\r"), (await $.wv([$t1], "rsContinueFromTop", { get: async () => L0["rscontinuefromtop"], set: async (v) => { L0["rscontinuefromtop"] = v; }, local: true }, false))), (await $.wv([$t1], "mtInformation", C, false)), [(await $.wv([$t1], "mbNo", C, false)), (await $.wv([$t1], "mbYes", C, false))], 0], C)), (await $.wv([$t1], "mrYes", C, false))))) {
        await $.wset([$t1], "Result", (await $.wcall([$t1], "SearchRecord", [(await $.wv([$t1], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false)), (await $.wv([$t1], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), $.add((await $.wv([$t1], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1], "srFromBeginning", C, false))])], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
        if ($.truthy($.not((await $.wv([$t1], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))))) {
          await $.stmt((await $.wcall([$t1], "MessageDlg", [(await $.wv([$t1], "rsRecordNotFound", { get: async () => L0["rsrecordnotfound"], set: async (v) => { L0["rsrecordnotfound"] = v; }, local: true }, false)), (await $.wv([$t1], "mtInformation", C, false)), [(await $.wv([$t1], "mbOk", C, false))], 0], C)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet", "FieldName", "Value"], "kind": "function", "ptypes": ["TDataSet", "String", "String"]});
  U.method("TExpiresPaymentsForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sysdat": 0};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpiresPaymentsForm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sysdat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["sysdat"] = (await $.call(C, "Integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTPD")), "Date"))]))]));
  {
    const $t2 = (await $.v(C, "Credits"));
    if ($.truthy((await $.wv([$t2], "Active", C, false)))) {
      await $.stmt($.wcall([$t2], "Close", [], C));
    }
    await $.stmt($.wcall([$t2], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpiresPaymentsForm", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t3], "Connect", [], C));
    await $.stmt((await $.wcall([$t3], "ExportDataset", [(await $.wv([$t3], "Credits", C, false)), "Ödənişlər", (await $.wv([$t3], "true", C, false))], C)));
    await $.stmt($.wcall([$t3], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpiresPaymentsForm", "EditContractnoKeyPress", async function EditContractnoKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await L0["key"].get()), "\r")), async () => ($.ne((await $.mv((await $.v(C, "EditContractno")), "Text")), "")))))) {
    await $.stmt((await $.call(C, "ActnSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TExpiresPaymentsForm", "ActnSearchExecute", async function ActnSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchrecord": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["searchfield"] = (await $.call(C, "Copy", [(await $.mv((L0["sender"]), "name")), 5, (await $.call(C, "length", [(await $.mv((L0["sender"]), "name"))]))]));
  L0["searchrecord"] = (await $.mv((L0["sender"]), "Text"));
  await $.stmt((await $.call(C, "FindNextRecord", [(await $.v(C, "Credits")), L0["searchfield"], L0["searchrecord"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
