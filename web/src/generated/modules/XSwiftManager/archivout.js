// Generated from archivout.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("archivout", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ImgList", "StdCtrls", "SearchEdit", "Grids", "DBGrids", "ORACLEDATA", "ComCtrls", "Menus", "ExtCtrls", "DBCtrls", "cap", "Unit2", "qrp1", "qrp5", "SBTranslateproc", "sboapidatamoduleimpl"]);
  const C = [U];
  U.defClass("Tarchive_out", "TForm", {"label4": {"name": "Label4", "type": "TLabel"}, "gridin": {"name": "Gridin", "type": "TDBGrid"}, "button2": {"name": "Button2", "type": "TButton"}, "button1": {"name": "Button1", "type": "TButton"}, "searchedit1": {"name": "SearchEdit1", "type": "TSearchEdit"}, "searchedit2": {"name": "SearchEdit2", "type": "TSearchEdit"}, "searchedit3": {"name": "SearchEdit3", "type": "TSearchEdit"}, "searchedit4": {"name": "SearchEdit4", "type": "TSearchEdit"}, "swimagelist2": {"name": "swImageList2", "type": "TImageList"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "searchedit5": {"name": "SearchEdit5", "type": "TSearchEdit"}, "label6": {"name": "Label6", "type": "TLabel"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "hesabat1": {"name": "Hesabat1", "type": "TMenuItem"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}}, {});
  U.init(async () => {
    U.const("Notcreate", 1);
    U.const("Created", 2);
    U.const("Commited", 5);
    U.const("Problemed", 8);
    U.const("Problemed2", 7);
    U.const("new", 10);
    U.const("edits", 11);
    U.var_("archive_out", null, "Tarchive_out");
    U.var_("SearchOptions", null, "TSearchRecordOptions");
    U.var_("SearchField", '', "String");
  });
  U.method("Tarchive_out", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat11": 0, "dat22": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.v(C, "date")));
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.v(C, "date")));
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboBox1")), "ListSource")), "DataSet")), "FieldByName", [(await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyField"))])), "Value")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarchive_out", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarchive_out", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat11": 0, "dat22": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "out_archive")), "close", []);
  L0["dat11"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "datetime"))]))]));
  L0["dat22"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "datetime"))]))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "out_archive")), "SetVariable", ["dat1", L0["dat11"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "out_archive")), "SetVariable", ["dat2", L0["dat22"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "out_archive")), "SetVariable", ["title", "id"])));
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")), "Butun operatorlar"))) {
    { const $t1 = await $.iset((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "out_archive")), "SQL")), [5], " and fcreate_opid=:oper"); if ($t1 !== undefined) { await $.mset((await $.mv((await $.v(C, "SWDataModule")), "out_archive")), "SQL", $t1); } }
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "out_archive")), "DeclareVariable", ["oper", 3])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "out_archive")), "SetVariable", ["oper", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Operators")), "FieldByName", ["id"])), "AsInteger"))])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "out_archive")), "DeclareVariable", ["oper", 3])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "out_archive")), "DeleteVariable", ["oper"])));
    { const $t2 = await $.iset((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "out_archive")), "SQL")), [5], ""); if ($t2 !== undefined) { await $.mset((await $.mv((await $.v(C, "SWDataModule")), "out_archive")), "SQL", $t2); } }
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "swdatamodule")), "userfil")), "FieldByName", ["filialid"])), "AsInteger")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "out_archive")), "Close", []);
    { const $t3 = await $.iset((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "out_archive")), "SQL")), [10], "and branch  = (SELECT filialid FROM sba_objinf WHERE obj = (SELECT USER FROM DUAL))"); if ($t3 !== undefined) { await $.mset((await $.mv((await $.v(C, "SWDataModule")), "out_archive")), "SQL", $t3); } }
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "out_archive")), "open", []);
  }
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "out_archive")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Operators")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarchive_out", "ComboBox1Change", async function ComboBox1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "out_archive")), "close", []);
  if ($.truthy($.eq((await $.mv((await $.v(C, "combobox1")), "ItemIndex")), 0))) {
    { const $t4 = await $.iset((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "out_archive")), "sql")), [6], $.add("and messagetype<>", "' '")); if ($t4 !== undefined) { await $.mset((await $.mv((await $.v(C, "SWDataModule")), "out_archive")), "sql", $t4); } }
  } else {
    { const $t5 = await $.iset((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "out_archive")), "sql")), [6], $.add($.add($.add("and messagetype=", "'"), (await $.mv((await $.v(C, "combobox1")), "Text"))), "'")); if ($t5 !== undefined) { await $.mset((await $.mv((await $.v(C, "SWDataModule")), "out_archive")), "sql", $t5); } }
  }
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "out_archive")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarchive_out", "GridinDrawColumnCell", async function GridinDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t6 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t6], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t7 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t6], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t7, (await $.wv([$t6], "notcreate", C, false)))) {
          await $.wset([$t6], "ImageIndex", 25, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t7, (await $.wv([$t6], "created", C, false)))) {
          await $.wset([$t6], "ImageIndex", 4, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t7, (await $.wv([$t6], "commited", C, false)))) {
          await $.wset([$t6], "ImageIndex", 5, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t7, 7)) {
          await $.wset([$t6], "ImageIndex", 16, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t7, 20)) {
          await $.wset([$t6], "ImageIndex", 10, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t7, 15)) {
          await $.wset([$t6], "ImageIndex", 7, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t7, 10)) {
          await $.wset([$t6], "ImageIndex", 44, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t7, 8)) {
          await $.wset([$t6], "ImageIndex", 16, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t6], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t6], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t6], "swImageList2", C, false)), "Draw", [(await $.wv([$t6], "Canvas", C, false)), (await $.mv((await $.wv([$t6], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t6], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t6], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t6], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t6], "DefaultDrawColumnCell", [(await $.wv([$t6], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t6], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t6], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t6], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("Tarchive_out", "GridinTitleClick", async function GridinTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": '', "sortposition": 0};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy((await $.mv((await $.mv(L0["column"], "Field")), "Calculated")))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  try {
    {
      const $t8 = (await $.mv((await $.v(C, "SWDataModule")), "out_archive"));
      await $.stmt((await $.wcall([$t8], "SetVariable", ["Title", (await $.wv([$t8], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t8], "Refresh", [], C));
      await $.stmt($.wcall([$t8], "open", [], C));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("Tarchive_out", "SearchEdit1Change", async function SearchEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarchive_out", "SearchEdit1KeyPress", async function SearchEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.set(C, "SearchOptions", [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))]);
    {
      const $t9 = L0["sender"];
      await $.wset([$t9], "SearchField", "ID", C);
      {
        const $t10 = (await $.wcall([$t9], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t9], "Gridin", C, false)), "DataSource")), "DataSet"))], C));
        if ($.truthy($.not((await $.wcall([$t9, $t10], "SearchRecord", [(await $.wv([$t9, $t10], "SearchField", C, false)), (await $.wv([$t9, $t10], "Text", C, false)), $.add((await $.wv([$t9, $t10], "SearchOptions", C, false)), [(await $.wv([$t9, $t10], "srFromCurrent", C, false)), (await $.wv([$t9, $t10], "srForward", C, false))])], C))))) {
          if ($.truthy($.eq((await $.wcall([$t9, $t10], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t9, $t10], "mtInformation", C, false)), [(await $.wv([$t9, $t10], "mbNo", C, false)), (await $.wv([$t9, $t10], "mbYes", C, false))], 0], C)), (await $.wv([$t9, $t10], "mrYes", C, false))))) {
            if ($.truthy($.not((await $.wcall([$t9, $t10], "SearchRecord", [(await $.wv([$t9, $t10], "SearchField", C, false)), (await $.wv([$t9, $t10], "Text", C, false)), $.add((await $.wv([$t9, $t10], "SearchOptions", C, false)), [(await $.wv([$t9, $t10], "srFromBeginning", C, false))])], C))))) {
              await $.stmt((await $.wcall([$t9, $t10], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t9, $t10], "mtInformation", C, false)), [(await $.wv([$t9, $t10], "mbOK", C, false))], 0], C)));
            }
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tarchive_out", "SearchEdit2Change", async function SearchEdit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarchive_out", "SearchEdit2KeyPress", async function SearchEdit2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.set(C, "SearchOptions", [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))]);
    {
      const $t11 = L0["sender"];
      await $.wset([$t11], "SearchField", "mf20_reference", C);
      {
        const $t12 = (await $.wcall([$t11], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t11], "Gridin", C, false)), "DataSource")), "DataSet"))], C));
        if ($.truthy($.not((await $.wcall([$t11, $t12], "SearchRecord", [(await $.wv([$t11, $t12], "SearchField", C, false)), (await $.wv([$t11, $t12], "Text", C, false)), $.add((await $.wv([$t11, $t12], "SearchOptions", C, false)), [(await $.wv([$t11, $t12], "srFromCurrent", C, false)), (await $.wv([$t11, $t12], "srForward", C, false))])], C))))) {
          if ($.truthy($.eq((await $.wcall([$t11, $t12], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t11, $t12], "mtInformation", C, false)), [(await $.wv([$t11, $t12], "mbNo", C, false)), (await $.wv([$t11, $t12], "mbYes", C, false))], 0], C)), (await $.wv([$t11, $t12], "mrYes", C, false))))) {
            if ($.truthy($.not((await $.wcall([$t11, $t12], "SearchRecord", [(await $.wv([$t11, $t12], "SearchField", C, false)), (await $.wv([$t11, $t12], "Text", C, false)), $.add((await $.wv([$t11, $t12], "SearchOptions", C, false)), [(await $.wv([$t11, $t12], "srFromBeginning", C, false))])], C))))) {
              await $.stmt((await $.wcall([$t11, $t12], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t11, $t12], "mtInformation", C, false)), [(await $.wv([$t11, $t12], "mbOK", C, false))], 0], C)));
            }
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tarchive_out", "SearchEdit3Change", async function SearchEdit3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarchive_out", "SearchEdit3KeyPress", async function SearchEdit3KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.set(C, "SearchOptions", [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))]);
    {
      const $t13 = L0["sender"];
      await $.wset([$t13], "SearchField", "mf50_account", C);
      {
        const $t14 = (await $.wcall([$t13], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t13], "Gridin", C, false)), "DataSource")), "DataSet"))], C));
        if ($.truthy($.not((await $.wcall([$t13, $t14], "SearchRecord", [(await $.wv([$t13, $t14], "SearchField", C, false)), (await $.wv([$t13, $t14], "Text", C, false)), $.add((await $.wv([$t13, $t14], "SearchOptions", C, false)), [(await $.wv([$t13, $t14], "srFromCurrent", C, false)), (await $.wv([$t13, $t14], "srForward", C, false))])], C))))) {
          if ($.truthy($.eq((await $.wcall([$t13, $t14], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t13, $t14], "mtInformation", C, false)), [(await $.wv([$t13, $t14], "mbNo", C, false)), (await $.wv([$t13, $t14], "mbYes", C, false))], 0], C)), (await $.wv([$t13, $t14], "mrYes", C, false))))) {
            if ($.truthy($.not((await $.wcall([$t13, $t14], "SearchRecord", [(await $.wv([$t13, $t14], "SearchField", C, false)), (await $.wv([$t13, $t14], "Text", C, false)), $.add((await $.wv([$t13, $t14], "SearchOptions", C, false)), [(await $.wv([$t13, $t14], "srFromBeginning", C, false))])], C))))) {
              await $.stmt((await $.wcall([$t13, $t14], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t13, $t14], "mtInformation", C, false)), [(await $.wv([$t13, $t14], "mbOK", C, false))], 0], C)));
            }
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tarchive_out", "SearchEdit4Change", async function SearchEdit4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarchive_out", "SearchEdit4KeyPress", async function SearchEdit4KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.set(C, "SearchOptions", [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))]);
    {
      const $t15 = L0["sender"];
      await $.wset([$t15], "SearchField", "mf32a_amount", C);
      {
        const $t16 = (await $.wcall([$t15], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t15], "Gridin", C, false)), "DataSource")), "DataSet"))], C));
        if ($.truthy($.not((await $.wcall([$t15, $t16], "SearchRecord", [(await $.wv([$t15, $t16], "SearchField", C, false)), (await $.wv([$t15, $t16], "Text", C, false)), $.add((await $.wv([$t15, $t16], "SearchOptions", C, false)), [(await $.wv([$t15, $t16], "srFromCurrent", C, false)), (await $.wv([$t15, $t16], "srForward", C, false))])], C))))) {
          if ($.truthy($.eq((await $.wcall([$t15, $t16], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t15, $t16], "mtInformation", C, false)), [(await $.wv([$t15, $t16], "mbNo", C, false)), (await $.wv([$t15, $t16], "mbYes", C, false))], 0], C)), (await $.wv([$t15, $t16], "mrYes", C, false))))) {
            if ($.truthy($.not((await $.wcall([$t15, $t16], "SearchRecord", [(await $.wv([$t15, $t16], "SearchField", C, false)), (await $.wv([$t15, $t16], "Text", C, false)), $.add((await $.wv([$t15, $t16], "SearchOptions", C, false)), [(await $.wv([$t15, $t16], "srFromBeginning", C, false))])], C))))) {
              await $.stmt((await $.wcall([$t15, $t16], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t15, $t16], "mtInformation", C, false)), [(await $.wv([$t15, $t16], "mbOK", C, false))], 0], C)));
            }
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tarchive_out", "SearchEdit5Change", async function SearchEdit5Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tarchive_out", "SearchEdit5KeyPress", async function SearchEdit5KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.set(C, "SearchOptions", [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))]);
    {
      const $t17 = L0["sender"];
      await $.wset([$t17], "SearchField", "receiverbic", C);
      {
        const $t18 = (await $.wcall([$t17], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t17], "Gridin", C, false)), "DataSource")), "DataSet"))], C));
        if ($.truthy($.not((await $.wcall([$t17, $t18], "SearchRecord", [(await $.wv([$t17, $t18], "SearchField", C, false)), (await $.wv([$t17, $t18], "Text", C, false)), $.add((await $.wv([$t17, $t18], "SearchOptions", C, false)), [(await $.wv([$t17, $t18], "srFromCurrent", C, false)), (await $.wv([$t17, $t18], "srForward", C, false))])], C))))) {
          if ($.truthy($.eq((await $.wcall([$t17, $t18], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t17, $t18], "mtInformation", C, false)), [(await $.wv([$t17, $t18], "mbNo", C, false)), (await $.wv([$t17, $t18], "mbYes", C, false))], 0], C)), (await $.wv([$t17, $t18], "mrYes", C, false))))) {
            if ($.truthy($.not((await $.wcall([$t17, $t18], "SearchRecord", [(await $.wv([$t17, $t18], "SearchField", C, false)), (await $.wv([$t17, $t18], "Text", C, false)), $.add((await $.wv([$t17, $t18], "SearchOptions", C, false)), [(await $.wv([$t17, $t18], "srFromBeginning", C, false))])], C))))) {
              await $.stmt((await $.wcall([$t17, $t18], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t17, $t18], "mtInformation", C, false)), [(await $.wv([$t17, $t18], "mbOK", C, false))], 0], C)));
            }
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tarchive_out", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "b": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["hesabat"])), "asstring")), ""))) {
    L0["b"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["hesabat"])), "asstring"));
  } else {
    L0["b"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["MF20_REFERENCE"])), "asstring")), "\r"), "\r"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["M23B"])), "asstring"))), " "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["mf23b"])), "asstring"))), "\r"), "\r"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["M32A"])), "asstring"))), " "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["MF32A_DATE"])), "asstring"))), " "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["MF32A_CURR"])), "asstring"))), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["MF32A_AMOUNT"])), "asstring"))), "\r"), "\r"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["M50"])), "asstring"))), " "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["MF50_ACCOUNT"])), "asstring"))), "\r"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["MF50_NAME$ADRESS"])), "asstring"))), "\r"), "\r"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["M59"])), "asstring"))), " "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["MF59_ACCOUNT"])), "asstring"))), "\r"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["MF59_NAME$ADRESS"])), "asstring"))), "\r"), "\r"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["M70"])), "asstring"))), " "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["MF70"])), "asstring"))), "\r"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["M72"])), "asstring"))), " "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["MF72"])), "asstring")));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["messagetype"])), "asstring")), "MT103"))) {
      L0["b"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["MF20"])), "asstring")), " "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["MF20_REFERENCE"])), "asstring"))), "\r"), "\r"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["M23B"])), "asstring"))), " "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["mf23b"])), "asstring"))), "\r"), "\r"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["M32A"])), "asstring"))), " "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["MF32A_DATE"])), "asstring"))), " "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["MF32A_CURR"])), "asstring"))), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["MF32A_AMOUNT"])), "asstring"))), "\r"), "\r"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["M50"])), "asstring"))), " "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["MF50_NAME$ADRESS"])), "asstring"))), "\r"), "\r"), "\r"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["M70"])), "asstring"))), " "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["MF70"])), "asstring"))), "\r"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["M72"])), "asstring"))), " "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["MF72"])), "asstring")));
    } else {
      L0["b"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["MF20"])), "asstring")), " "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["MF20_REFERENCE"])), "asstring"))), "\r"), "\r"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["M21"])), "asstring"))), " "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["mf21"])), "asstring"))), "\r"), "\r"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["M32A"])), "asstring"))), " "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["MF32A_DATE"])), "asstring"))), " "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["MF32A_CURR"])), "asstring"))), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["MF32A_AMOUNT"])), "asstring"))), "\r"), "\r"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["M52"])), "asstring"))), " "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["MF52_NAME$ADRESS"])), "asstring"))), "\r"), "\r"), "\r"), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["M72"])), "asstring"))), " "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "gridin")), "DataSource")), "DataSet")), "fieldbyname", ["MF72"])), "asstring")));
    }
  }
  await $.set(C, "printform", (await $.mcall((await $.v(C, "Tprintform")), "create", [Self])));
  await $.mset((await $.mv((await $.v(C, "printform")), "prt")), "Text", L0["b"]);
  await $.mcall((await $.v(C, "printform")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
