// Generated from poscomission.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("poscomission", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Grids", "DBGrids", "NLSLocalizer", "CMExcelExport", "oracledata", "Unit18", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TPOS_COMMISION", "TForm", {"edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "label7": {"name": "Label7", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("POS_COMMISION", null, "TPOS_COMMISION");
  });
  U.method("TPOS_COMMISION", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "POSCOMISSION")), "open", []);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş sətir silinsin?", (await $.v(C, "mtinformation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0])), (await $.v(C, "mryes"))))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "POSCOMISSION")), "Delete", []);
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "POSCOMISSION")), "Session")), "commit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPOS_COMMISION", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "POSCOMISSION")), "open", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "POSCOMISSION")), "Insert", []);
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "POSCOMISSION")), "FieldByName", ["POSID"])), "AsString", (await $.mv((await $.v(C, "Edit1")), "Text")));
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "POSCOMISSION")), "FieldByName", ["MINVALUE"])), "AsString", (await $.mv((await $.v(C, "Edit6")), "Text")));
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "POSCOMISSION")), "FieldByName", ["MAXVALUE"])), "AsString", (await $.mv((await $.v(C, "Edit3")), "Text")));
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "POSCOMISSION")), "FieldByName", ["DOMESTICPERCENT"])), "AsString", (await $.mv((await $.v(C, "Edit4")), "Text")));
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "POSCOMISSION")), "FieldByName", ["INTERPERCENT1"])), "AsString", (await $.mv((await $.v(C, "Edit5")), "Text")));
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "POSCOMISSION")), "FieldByName", ["INTERPERCENT2"])), "AsString", (await $.mv((await $.v(C, "Edit2")), "Text")));
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "POSCOMISSION")), "FieldByName", ["ONUSPERCENT"])), "AsString", (await $.mv((await $.v(C, "Edit7")), "Text")));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "POSCOMISSION")), "Post", []);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "POSCOMISSION")), "Session")), "Commit", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "POSCOMISSION")), "CLOSE", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "POSCOMISSION")), "OPEN", []);
  } catch ($t1) {
    $.rethrowControl($t1);
    $.handled($t1);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "POSCOMISSION")), "CLOSE", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "POSCOMISSION")), "OPEN", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPOS_COMMISION", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "POSCOMISSION")), "POS", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPOS_COMMISION", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": '', "sortposition": 0};
  await $.fixArgs(L0, ["column"]);
  L0["sortposition"] = 100;
  if ($.truthy((await $.or_(((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "IsEmpty"))), async () => ($.eq((await $.mv(L0["column"], "FieldName")), (await $.v(C, "EmptyStr")))))))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t2 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t2], "SortPosition", (await $.mcall((await $.wv([$t2], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t2], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t2], "Refresh", [], C));
    } finally {
      { const $t3 = await $.iset((await $.wv([$t2], "SQL", C, false)), [(await $.wv([$t2], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t2], "EmptyStr", C, false))); if ($t3 !== undefined) { await $.wset([$t2], "SQL", $t3, C); } }
      await $.mset((await $.wv([$t2], "Screen", C, false)), "Cursor", (await $.wv([$t2], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TPOS_COMMISION", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "POSCOMISSION")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
