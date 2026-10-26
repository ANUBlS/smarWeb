// Generated from Transctionslist.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Transctionslist", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "BalanceAnalys_TLB", "StdVcl", "ExtCtrls", "ComCtrls", "Buttons", "Grids", "DBGrids", "StdCtrls", "CheckLst", "DBCtrls", "Menus", "ActnList", "ImgList", "ExcelExporter", "Db", "OracleData", "Mask", "DataModuleBalance"]);
  const C = [U];
  U.defClass("TTransactionLists", "TForm", {"gridtransactions": {"name": "gridtransactions", "type": "TDBGrid"}, "excelexporter": {"name": "ExcelExporter", "type": "TExcelExporter"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "excelexport1": {"name": "ExcelExport1", "type": "TMenuItem"}}, {});
  U.init(async () => {
    U.var_("TransactionLists", null, "TTransactionLists");
  });
  U.method("TTransactionLists", "ExcelExport1Click", async function ExcelExport1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fafterscroll": null};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "ExcelExporter"));
    await $.wset([$t1], "ExportSource", (await $.mv((await $.wv([$t1], "gridtransactions", C, false)), "DataSource")), C);
    await $.wset([$t1], "FAfterScroll", (await $.mv((await $.mv((await $.wv([$t1], "ExportSource", C, false)), "DataSet")), "AfterScroll")), { get: async () => L0["fafterscroll"], set: async (v) => { L0["fafterscroll"] = v; }, local: true });
    await $.mset((await $.mv((await $.wv([$t1], "ExportSource", C, false)), "DataSet")), "AfterScroll", null);
    await $.mcall((await $.mv((await $.wv([$t1], "ExportSource", C, false)), "DataSet")), "Last", []);
    try {
      await $.stmt($.wcall([$t1], "Report", [], C));
    } finally {
      await $.mset((await $.mv((await $.wv([$t1], "ExportSource", C, false)), "DataSet")), "AfterScroll", (await $.wv([$t1], "FAfterScroll", { get: async () => L0["fafterscroll"], set: async (v) => { L0["fafterscroll"] = v; }, local: true }, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
