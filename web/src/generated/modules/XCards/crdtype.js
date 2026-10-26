// Generated from crdtype.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("crdtype", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Grids", "DBGrids", "DBCtrls", "oracledata", "Unit18", "applicationpas", "balans", "balhs", "CARDS_TLB", "cfilepas", "comp", "creditinfopas", "customers", "dpforms", "MAINFORMImpl1", "newcard", "payment", "rezform", "setac", "U9", "SBTranslateProc", "sboapiDataModuleIMPL"]);
  const C = [U];
  U.defClass("TForm14", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "label6": {"name": "Label6", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("Form14", null, "TForm14");
  });
  U.method("TForm14", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "Edit1")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "Edit2")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "Edit5")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "Edit3")), "Text")), "")))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["new_carttype", [(await $.mv((await $.v(C, "edit1")), "text")), (await $.mv((await $.v(C, "edit2")), "text")), (await $.mv((await $.v(C, "DBLookupComboBox1")), "text")), (await $.mv((await $.v(C, "edit5")), "text")), (await $.mv((await $.v(C, "edit3")), "text")), (await $.mv((await $.v(C, "edit4")), "text"))]])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDTYPES")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDTYPES")), "Open", []);
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Xanalar tam doldurulmalıdır!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm14", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş sətir silinsin?", (await $.v(C, "mtinformation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0])), (await $.v(C, "mryes"))))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDTYPES")), "Delete", []);
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDTYPES")), "Session")), "commit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm14", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
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
  U.method("TForm14", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit1")), "Text", "");
  await $.mset((await $.v(C, "edit2")), "Text", "");
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", 0);
  await $.mset((await $.v(C, "Edit5")), "Text", "");
  await $.mset((await $.v(C, "Edit3")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm14", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
