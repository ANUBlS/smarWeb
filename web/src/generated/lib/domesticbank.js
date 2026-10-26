// Generated from domesticbank.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("domesticbank", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "NLSLocalizer", "DBCtrls", "StdCtrls", "Grids", "DBGrids", "SearchEdit", "oracledata", "ExtCtrls", "Unit18", "setac", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("Tdomestic_bank", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "searchedit1": {"name": "SearchEdit1", "type": "TSearchEdit"}, "searchedit2": {"name": "SearchEdit2", "type": "TSearchEdit"}, "searchedit3": {"name": "SearchEdit3", "type": "TSearchEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}}, {});
  U.init(async () => {
    U.var_("domestic_bank", null, "Tdomestic_bank");
  });
  U.method("Tdomestic_bank", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Dəyişikliklər yadda saxlanılsın?", (await $.v(C, "mtinformation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0])), (await $.v(C, "mryes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["insert_domestic", [(await $.mv((await $.v(C, "edit1")), "text")), (await $.mv((await $.v(C, "edit2")), "text")), (await $.mv((await $.v(C, "DBLookupComboBox1")), "text")), (await $.mv((await $.v(C, "SearchEdit1")), "text")), (await $.mv((await $.v(C, "SearchEdit2")), "text")), (await $.mv((await $.v(C, "SearchEdit3")), "text"))]])));
  }
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "domestic")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "domestic")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tdomestic_bank", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş sətir silinsin?", (await $.v(C, "mtinformation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0])), (await $.v(C, "mryes"))))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "domestic")), "Delete", []);
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "domestic")), "Session")), "commit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tdomestic_bank", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
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
    const $t1 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t1], "SortPosition", (await $.mcall((await $.wv([$t1], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t1], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t1], "Refresh", [], C));
    } finally {
      { const $t2 = await $.iset((await $.wv([$t1], "SQL", C, false)), [(await $.wv([$t1], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t1], "EmptyStr", C, false))); if ($t2 !== undefined) { await $.wset([$t1], "SQL", $t2, C); } }
      await $.mset((await $.wv([$t1], "Screen", C, false)), "Cursor", (await $.wv([$t1], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("Tdomestic_bank", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "accountdomestic")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tdomestic_bank", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
