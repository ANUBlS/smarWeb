// Generated from filialaccounts.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("filialaccounts", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "SearchEdit", "DBCtrls", "Grids", "DBGrids", "oracledata", "ExtCtrls", "NLSLocalizer", "Unit18", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFilial_Accounts", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "button1": {"name": "Button1", "type": "TButton"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "button2": {"name": "Button2", "type": "TButton"}, "searchedit1": {"name": "SearchEdit1", "type": "TSearchEdit"}, "searchedit4": {"name": "SearchEdit4", "type": "TSearchEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "searchedit2": {"name": "SearchEdit2", "type": "TSearchEdit"}, "searchedit5": {"name": "SearchEdit5", "type": "TSearchEdit"}, "searchedit3": {"name": "SearchEdit3", "type": "TSearchEdit"}, "label5": {"name": "Label5", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "label6": {"name": "Label6", "type": "TLabel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "searchedit6": {"name": "SearchEdit6", "type": "TSearchEdit"}, "label10": {"name": "Label10", "type": "TLabel"}, "searchedit7": {"name": "SearchEdit7", "type": "TSearchEdit"}, "label9": {"name": "Label9", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("Filial_Accounts", null, "TFilial_Accounts");
  });
  U.method("TFilial_Accounts", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["filialacount", [(await $.mv((await $.v(C, "DBLookupComboBox2")), "text")), (await $.mv((await $.v(C, "DBLookupComboBox1")), "text")), (await $.mv((await $.v(C, "SearchEdit1")), "text")), (await $.mv((await $.v(C, "SearchEdit2")), "text")), (await $.mv((await $.v(C, "SearchEdit3")), "text")), (await $.mv((await $.v(C, "SearchEdit4")), "text")), (await $.mv((await $.v(C, "SearchEdit5")), "text")), (await $.mv((await $.v(C, "edit1")), "text")), (await $.mv((await $.v(C, "SearchEdit6")), "text")), (await $.mv((await $.v(C, "SearchEdit7")), "text"))]])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "filialaccount")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "filialaccount")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFilial_Accounts", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş sətir silinsin?", (await $.v(C, "mtinformation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0])), (await $.v(C, "mryes"))))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "filialaccount")), "Delete", []);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "filialaccount")), "Session")), "commit", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "filialaccount")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "filialaccount")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFilial_Accounts", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
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
  U.method("TFilial_Accounts", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "filialaccount")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
