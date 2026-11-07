// Generated from Controlimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Controlimpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "Grids", "DBGridEh", "DBSumLst", "ToolWin", "ExtCtrls", "ImgList", "DB", "ActnList", "Oracle", "OracleData", "CMExcelExport", "Menus", "DBGridEhGrouping", "GridsEh", "Buttons", "FlReCalculationDataModuleImpl", "ReCalculationMainForm"]);
  const C = [U];
  U.defClass("TFrmControl", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "radiogroup1": {"name": "RadioGroup1", "type": "TRadioGroup"}}, {});
  U.init(async () => {
    U.var_("FrmControl", null, "TFrmControl");
  });
  U.method("TFrmControl", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "ExcelExport"));
    await $.stmt($.wcall([$t1], "Connect", [], C));
    await $.stmt((await $.wcall([$t1], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t1], "DBGridEh1", C, false)), "DataSource")), "DataSet")), "Interests", (await $.wv([$t1], "True", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmControl", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmControl", "SafelyRefresh", async function SafelyRefresh(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"safely": $.copyArg(p0), result: undefined, "saveplace": null};
  await $.fixArgs(L0, ["safely"]);
  {
    const $t2 = (await $.wobj(C, "DBGridEh1"));
    const $t3 = (await $.mv((await $.wv([$t2], "DataSource", C, false)), "DataSet"));
    await $.wset([$t2, $t3], "SavePlace", (await $.wv([$t2, $t3], "GetBookmark", C, false)), { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true });
    await $.stmt($.wcall([$t2, $t3], "Refresh", [], C));
    await $.mcall((await $.wv([$t2, $t3], "SelectedRows", C, false)), "Clear", []);
    if ($.truthy((await $.wv([$t2, $t3], "Safely", { get: async () => L0["safely"], set: async (v) => { L0["safely"] = v; }, local: true }, false)))) {
      await $.stmt((await $.wcall([$t2, $t3], "GotoBookmark", [(await $.wv([$t2, $t3], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Safely"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TFrmControl", "DBGridEh1DblClick", async function DBGridEh1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "IntCache")), "Locate", ["id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet3")), "FieldByName", ["creditid"])), "Value")), []])));
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmControl", "DBGridEh1TitleBtnClick", async function DBGridEh1TitleBtnClick(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acol": $.copyArg(p1), "column": $.copyArg(p2), result: undefined, "sortfield": ''};
  await $.fixArgs(L0, ["sender", "acol", "column"]);
  await $.staticConst(L0, "datacolindex", "controlimpl.tfrmcontrol.dbgrideh1titlebtnclick.datacolindex", async () => 0);
  if ($.truthy($.ne(L0["acol"], L0["datacolindex"]))) {
    L0["sortfield"] = (await $.mv(L0["column"], "FieldName"));
  } else {
    L0["sortfield"] = "TRPROCESSED";
  }
  if ($.truthy($.eq((await $.mv((await $.mv(L0["column"], "Title")), "SortMarker")), (await $.v(C, "smDownEh"))))) {
    L0["sortfield"] = $.add(L0["sortfield"], " DESC");
  }
  {
    const $t4 = L0["sender"];
    const $t5 = (await $.wcall([$t4], "TOracleDataSet", [(await $.mv((await $.wv([$t4], "DataSource", C, false)), "DataSet"))], C));
    await $.stmt($.wcall([$t4, $t5], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t4, $t5], "SetVariable", ["OrderField", (await $.wv([$t4, $t5], "SortField", { get: async () => L0["sortfield"], set: async (v) => { L0["sortfield"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t4, $t5], "SafelyRefresh", [(await $.wv([$t4, $t5], "True", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender", "ACol", "Column"], "kind": "procedure", "ptypes": ["TObject", "Integer", "TColumnEh"]});
  U.method("TFrmControl", "RadioGroup1Click", async function RadioGroup1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), 0))) {
    {
      const $t6 = (await $.wobj(C, "DBGridEh1"));
      const $t7 = (await $.mv((await $.wv([$t6], "DataSource", C, false)), "DataSet"));
      await $.wset([$t6, $t7], "Filtered", (await $.wv([$t6, $t7], "False", C, false)), C);
      await $.wset([$t6, $t7], "Filtered", (await $.wv([$t6, $t7], "True", C, false)), C);
      await $.mcall((await $.wv([$t6, $t7], "SelectedRows", C, false)), "Clear", []);
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), 1))) {
    {
      const $t8 = (await $.wobj(C, "DBGridEh1"));
      const $t9 = (await $.mv((await $.wv([$t8], "DataSource", C, false)), "DataSet"));
      await $.wset([$t8, $t9], "Filter", " status=2", C);
      await $.wset([$t8, $t9], "Filtered", (await $.wv([$t8, $t9], "False", C, false)), C);
      await $.wset([$t8, $t9], "Filtered", (await $.wv([$t8, $t9], "True", C, false)), C);
      await $.mcall((await $.wv([$t8, $t9], "SelectedRows", C, false)), "Clear", []);
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), 2))) {
    {
      const $t10 = (await $.wobj(C, "DBGridEh1"));
      const $t11 = (await $.mv((await $.wv([$t10], "DataSource", C, false)), "DataSet"));
      await $.wset([$t10, $t11], "Filter", " status=3", C);
      await $.wset([$t10, $t11], "Filtered", (await $.wv([$t10, $t11], "False", C, false)), C);
      await $.wset([$t10, $t11], "Filtered", (await $.wv([$t10, $t11], "True", C, false)), C);
      await $.mcall((await $.wv([$t10, $t11], "SelectedRows", C, false)), "Clear", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
