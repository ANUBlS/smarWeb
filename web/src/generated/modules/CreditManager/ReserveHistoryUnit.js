// Generated from ReserveHistoryUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ReserveHistoryUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "ExcelExporter", "Oracle", "OracleData", "UntDataModule", "StoredProgramsUnit"]);
  const C = [U];
  U.defClass("TFrmHistory", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "btnexport": {"name": "BtnExport", "type": "TButton"}, "dtptargetdate": {"name": "DTPTargetDate", "type": "TDateTimePicker"}, "historyexporter": {"name": "HistoryExporter", "type": "TExcelExporter"}}, {});
  U.init(async () => {
    U.var_("FrmHistory", null, "TFrmHistory");
  });
  U.method("TFrmHistory", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmHistory", "BtnExportClick", async function BtnExportClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
  try {
    {
      const $t1 = (await $.v(C, "HistoryExporter"));
      const $t2 = (await $.wcall([$t1], "TOracleDataSet", [(await $.mv((await $.wv([$t1], "ExportSource", C, false)), "DataSet"))], C));
      if ($.truthy((await $.wv([$t1, $t2], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t2], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["HDate", (await $.wcall([$t1, $t2], "Integer", [(await $.wcall([$t1, $t2], "Trunc", [(await $.mv((await $.wv([$t1, $t2], "DTPTargetDate", C, false)), "DateTime"))], C))], C))], C)));
      await $.stmt($.wcall([$t1, $t2], "Open", [], C));
      await $.stmt($.wcall([$t1, $t2], "Report", [], C));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmHistory", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTPTargetDate")), "DateTime", (await $.v(C, "GetBankDate")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
