// Generated from UnitReportCode.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitReportCode", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBCtrls", "ExtCtrls", "DB", "OracleData", "UnitGoaml", "TransactionDataModuleUnit", "TransactionPropertiesImpl"]);
  const C = [U];
  U.defClass("TFormReportCode", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "əməliyyatın_növü": {"name": "Əməliyyatın_növü", "type": "TPanel"}, "label9": {"name": "Label9", "type": "TLabel"}, "dblc_mmx_transmode": {"name": "DBLC_MMX_Transmode", "type": "TDBLookupComboBox"}, "edittransmodecode": {"name": "EditTransModeCode", "type": "TEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label14": {"name": "Label14", "type": "TLabel"}, "dblc_mmx_reportcode": {"name": "DBLC_MMX_reportcode", "type": "TDBLookupComboBox"}, "editreportcode": {"name": "Editreportcode", "type": "TEdit"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TIntegerField"}, "oracledataset1name": {"name": "OracleDataSet1NAME", "type": "TIntegerField"}, "oracledataset1description": {"name": "OracleDataSet1DESCRIPTION", "type": "TWideStringField"}, "oracledataset2id": {"name": "OracleDataSet2ID", "type": "TIntegerField"}, "oracledataset2name": {"name": "OracleDataSet2NAME", "type": "TWideStringField"}, "oracledataset2description": {"name": "OracleDataSet2DESCRIPTION", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("FormReportCode", null, "TFormReportCode");
  });
  U.method("TFormReportCode", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "TransactionDataModule"));
    await $.stmt((await $.mcall((await $.wv([$t1], "OP_MMX", C, false)), "CallProcedure", ["up_mmx_transinfo", [(await $.mv((await $.mv((await $.wv([$t1], "FormGo", C, false)), "OracleDataSet1ID")), "AsInteger")), (await $.mv((await $.wv([$t1], "DBLC_MMX_reportcode", C, false)), "KeyValue")), (await $.mv((await $.wv([$t1], "DBLC_MMX_Transmode", C, false)), "Keyvalue"))]])));
  }
  await $.mcall((await $.mv((await $.v(C, "FormGo")), "OracleDataSet1")), "Refresh", []);
  await $.mcall((await $.v(C, "FormReportCode")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormReportCode", "DBLC_MMX_reportcodeCloseUp", async function DBLC_MMX_reportcodeCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLC_MMX_reportcode")), "KeyVAlue")), (await $.v(C, "null"))))) {
    await $.mset((await $.v(C, "Editreportcode")), "Text", (await $.mv((await $.v(C, "DBLC_MMX_reportcode")), "KeyVAlue")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormReportCode", "DBLC_MMX_TransmodeCloseUp", async function DBLC_MMX_TransmodeCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLC_MMX_Transmode")), "KeyVAlue")), (await $.v(C, "null"))))) {
    await $.mset((await $.v(C, "EditTransModeCode")), "Text", (await $.mv((await $.v(C, "DBLC_MMX_Transmode")), "KeyVAlue")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormReportCode", "EditreportcodeExit", async function EditreportcodeExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Editreportcode")), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLC_MMX_reportcode")), "KeyValue", (await $.mv((await $.v(C, "Editreportcode")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormReportCode", "EditreportcodeKeyPress", async function EditreportcodeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLC_MMX_reportcode")), "KeyValue", (await $.mv((await $.v(C, "Editreportcode")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormReportCode", "EditTransModeCodeKeyPress", async function EditTransModeCodeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditTransModeCode")), "Text"))])), ""))) {
      await $.mset((await $.v(C, "DBLC_MMX_Transmode")), "KeyValue", (await $.mv((await $.v(C, "EditTransModeCode")), "Text")));
    }
    await $.mcall((await $.v(C, "DBLC_MMX_Transmode")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormReportCode", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLC_MMX_Transmode")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "FormGo")), "OracleDataSet1")), "fieldByName", ["TRANSMODE_CODE"])), "AsInteger")));
  await $.mset((await $.v(C, "EditTransModeCode")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "FormGo")), "OracleDataSet1")), "fieldByName", ["TRANSMODE_CODE"])), "AsString")));
  await $.mset((await $.v(C, "DBLC_MMX_reportcode")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "FormGo")), "OracleDataSet1")), "FieldByName", ["report_code"])), "Asstring")));
  await $.mset((await $.v(C, "Editreportcode")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "FormGo")), "OracleDataSet1")), "FieldByName", ["report_code"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
