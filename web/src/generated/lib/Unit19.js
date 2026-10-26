// Generated from Unit19.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit19", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "OracleData", "Forms", "Dialogs", "StdCtrls", "Grids", "DBGrids", "ComCtrls", "ImgList", "SearchEdit", "qrp1", "ExtCtrls", "DBCtrls", "Unit2", "cap", "SWIFT_MAINImpl1", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("Tinarchiv", "TForm", {"datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "gridin": {"name": "Gridin", "type": "TDBGrid"}, "button2": {"name": "Button2", "type": "TButton"}, "button1": {"name": "Button1", "type": "TButton"}, "swimagelist2": {"name": "swImageList2", "type": "TImageList"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "label4": {"name": "Label4", "type": "TLabel"}, "searchedit1": {"name": "SearchEdit1", "type": "TSearchEdit"}, "searchedit2": {"name": "SearchEdit2", "type": "TSearchEdit"}, "searchedit3": {"name": "SearchEdit3", "type": "TSearchEdit"}, "searchedit4": {"name": "SearchEdit4", "type": "TSearchEdit"}, "searchedit5": {"name": "SearchEdit5", "type": "TSearchEdit"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}}, {});
  U.init(async () => {
    U.const("Notcreate", 1);
    U.const("Created", 2);
    U.const("Commited", 5);
    U.const("Problemed", 8);
    U.const("Problemed2", 7);
    U.const("new", 10);
    U.const("edits", 11);
    U.var_("inarchiv", null, "Tinarchiv");
    U.var_("SearchOptions", null, "TSearchRecordOptions");
    U.var_("SearchField", '', "String");
  });
  U.method("Tinarchiv", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat11": 0, "dat22": 0, "fil": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "close", []);
  L0["dat11"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "datetime"))]))]));
  L0["dat22"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "datetime"))]))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "SetVariable", ["dat1", L0["dat11"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "SetVariable", ["dat2", L0["dat22"]])));
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "swdatamodule")), "userfil")), "FieldByName", ["filialid"])), "AsInteger")), 0))) {
    { const $t1 = await $.iset((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "SQL")), [10], "and branch  = (SELECT filialid FROM sba_objinf WHERE obj = (SELECT USER FROM DUAL))"); if ($t1 !== undefined) { await $.mset((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "SQL", $t1); } }
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "open", []);
  } else {
    L0["fil"] = (await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallIntegerFunction", ["checkadvancedobjectaccess_func", ["SW_IN_FIL"]]));
    if ($.truthy($.eq(L0["fil"], 1))) {
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "open", []);
    } else {
      { const $t2 = await $.iset((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "SQL")), [10], "and branch  = (SELECT filialid FROM sba_objinf WHERE obj = (SELECT USER FROM DUAL))"); if ($t2 !== undefined) { await $.mset((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "SQL", $t2); } }
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tinarchiv", "ComboBox1Change", async function ComboBox1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat11": 0, "dat22": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "close", []);
  if ($.truthy($.eq((await $.mv((await $.v(C, "combobox1")), "ItemIndex")), 0))) {
    { const $t3 = await $.iset((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "sql")), [6], $.add("and mt<>", "' '")); if ($t3 !== undefined) { await $.mset((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "sql", $t3); } }
  } else {
    { const $t4 = await $.iset((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "sql")), [6], $.add($.add($.add("and mt=", "'"), (await $.mv((await $.v(C, "combobox1")), "Text"))), "'")); if ($t4 !== undefined) { await $.mset((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "sql", $t4); } }
  }
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tinarchiv", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat11": 0, "dat22": 0, "fil": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.v(C, "date")));
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.v(C, "date")));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "close", []);
  L0["dat11"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "datetime"))]))]));
  L0["dat22"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "datetime"))]))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "SetVariable", ["dat1", L0["dat11"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "SetVariable", ["dat2", L0["dat22"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "SetVariable", ["title", "id"])));
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "swdatamodule")), "userfil")), "FieldByName", ["filialid"])), "AsInteger")), 0))) {
    { const $t5 = await $.iset((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "SQL")), [10], "and branch  = (SELECT filialid FROM sba_objinf WHERE obj = (SELECT USER FROM DUAL))"); if ($t5 !== undefined) { await $.mset((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "SQL", $t5); } }
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "open", []);
  } else {
    L0["fil"] = (await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "SB_ACA")), "CallIntegerFunction", ["checkadvancedobjectaccess_func", ["SW_IN_FIL"]]));
    if ($.truthy($.eq(L0["fil"], 1))) {
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "open", []);
    } else {
      { const $t6 = await $.iset((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "SQL")), [10], "and branch  = (SELECT filialid FROM sba_objinf WHERE obj = (SELECT USER FROM DUAL))"); if ($t6 !== undefined) { await $.mset((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "SQL", $t6); } }
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN")), "open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tinarchiv", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tinarchiv", "GridinDrawColumnCell", async function GridinDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t7 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t7], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t8 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t7], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t8, (await $.wv([$t7], "notcreate", C, false)))) {
          await $.wset([$t7], "ImageIndex", 10, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t8, (await $.wv([$t7], "created", C, false)))) {
          await $.wset([$t7], "ImageIndex", 4, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t8, (await $.wv([$t7], "commited", C, false)))) {
          await $.wset([$t7], "ImageIndex", 5, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t8, (await $.wv([$t7], "Problemed", C, false)))) {
          await $.wset([$t7], "ImageIndex", 16, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t8, 11)) {
          await $.wset([$t7], "ImageIndex", 42, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t8, 12)) {
          await $.wset([$t7], "ImageIndex", 43, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t8, 10)) {
          await $.wset([$t7], "ImageIndex", 44, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t7], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t7], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t7], "swImageList2", C, false)), "Draw", [(await $.wv([$t7], "Canvas", C, false)), (await $.mv((await $.wv([$t7], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t7], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t7], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t7], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t7], "DefaultDrawColumnCell", [(await $.wv([$t7], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t7], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t7], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t7], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("Tinarchiv", "GridinTitleClick", async function GridinTitleClick(Self, p0) {
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
      const $t9 = (await $.mv((await $.v(C, "SWDataModule")), "ARXIVIN"));
      await $.stmt((await $.wcall([$t9], "SetVariable", ["Title", (await $.wv([$t9], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t9], "Refresh", [], C));
      await $.stmt($.wcall([$t9], "open", [], C));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("Tinarchiv", "SearchEdit1Change", async function SearchEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tinarchiv", "SearchEdit1KeyPress", async function SearchEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.set(C, "SearchOptions", [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))]);
    {
      const $t10 = L0["sender"];
      await $.wset([$t10], "SearchField", "ID", C);
      {
        const $t11 = (await $.wcall([$t10], "TOracleDataSet", [(await $.mv((await $.wv([$t10], "SWDataModule", C, false)), "ARXIVIN"))], C));
        if ($.truthy($.not((await $.wcall([$t10, $t11], "SearchRecord", [(await $.wv([$t10, $t11], "SearchField", C, false)), (await $.wv([$t10, $t11], "Text", C, false)), $.add((await $.wv([$t10, $t11], "SearchOptions", C, false)), [(await $.wv([$t10, $t11], "srFromCurrent", C, false)), (await $.wv([$t10, $t11], "srForward", C, false))])], C))))) {
          if ($.truthy($.eq((await $.wcall([$t10, $t11], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t10, $t11], "mtInformation", C, false)), [(await $.wv([$t10, $t11], "mbNo", C, false)), (await $.wv([$t10, $t11], "mbYes", C, false))], 0], C)), (await $.wv([$t10, $t11], "mrYes", C, false))))) {
            if ($.truthy($.not((await $.wcall([$t10, $t11], "SearchRecord", [(await $.wv([$t10, $t11], "SearchField", C, false)), (await $.wv([$t10, $t11], "Text", C, false)), $.add((await $.wv([$t10, $t11], "SearchOptions", C, false)), [(await $.wv([$t10, $t11], "srFromBeginning", C, false))])], C))))) {
              await $.stmt((await $.wcall([$t10, $t11], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t10, $t11], "mtInformation", C, false)), [(await $.wv([$t10, $t11], "mbOK", C, false))], 0], C)));
            }
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tinarchiv", "SearchEdit2Change", async function SearchEdit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tinarchiv", "SearchEdit2KeyPress", async function SearchEdit2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.set(C, "SearchOptions", [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))]);
    {
      const $t12 = L0["sender"];
      await $.wset([$t12], "SearchField", "referance", C);
      {
        const $t13 = (await $.wcall([$t12], "TOracleDataSet", [(await $.mv((await $.wv([$t12], "SWDataModule", C, false)), "ARXIVIN"))], C));
        if ($.truthy($.not((await $.wcall([$t12, $t13], "SearchRecord", [(await $.wv([$t12, $t13], "SearchField", C, false)), (await $.wv([$t12, $t13], "Text", C, false)), $.add((await $.wv([$t12, $t13], "SearchOptions", C, false)), [(await $.wv([$t12, $t13], "srFromCurrent", C, false)), (await $.wv([$t12, $t13], "srForward", C, false))])], C))))) {
          if ($.truthy($.eq((await $.wcall([$t12, $t13], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t12, $t13], "mtInformation", C, false)), [(await $.wv([$t12, $t13], "mbNo", C, false)), (await $.wv([$t12, $t13], "mbYes", C, false))], 0], C)), (await $.wv([$t12, $t13], "mrYes", C, false))))) {
            if ($.truthy($.not((await $.wcall([$t12, $t13], "SearchRecord", [(await $.wv([$t12, $t13], "SearchField", C, false)), (await $.wv([$t12, $t13], "Text", C, false)), $.add((await $.wv([$t12, $t13], "SearchOptions", C, false)), [(await $.wv([$t12, $t13], "srFromBeginning", C, false))])], C))))) {
              await $.stmt((await $.wcall([$t12, $t13], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t12, $t13], "mtInformation", C, false)), [(await $.wv([$t12, $t13], "mbOK", C, false))], 0], C)));
            }
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tinarchiv", "SearchEdit3Change", async function SearchEdit3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tinarchiv", "SearchEdit3KeyPress", async function SearchEdit3KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.set(C, "SearchOptions", [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))]);
    {
      const $t14 = L0["sender"];
      await $.wset([$t14], "SearchField", "acount", C);
      {
        const $t15 = (await $.wcall([$t14], "TOracleDataSet", [(await $.mv((await $.wv([$t14], "SWDataModule", C, false)), "ARXIVIN"))], C));
        if ($.truthy($.not((await $.wcall([$t14, $t15], "SearchRecord", [(await $.wv([$t14, $t15], "SearchField", C, false)), (await $.wv([$t14, $t15], "Text", C, false)), $.add((await $.wv([$t14, $t15], "SearchOptions", C, false)), [(await $.wv([$t14, $t15], "srFromCurrent", C, false)), (await $.wv([$t14, $t15], "srForward", C, false))])], C))))) {
          if ($.truthy($.eq((await $.wcall([$t14, $t15], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t14, $t15], "mtInformation", C, false)), [(await $.wv([$t14, $t15], "mbNo", C, false)), (await $.wv([$t14, $t15], "mbYes", C, false))], 0], C)), (await $.wv([$t14, $t15], "mrYes", C, false))))) {
            if ($.truthy($.not((await $.wcall([$t14, $t15], "SearchRecord", [(await $.wv([$t14, $t15], "SearchField", C, false)), (await $.wv([$t14, $t15], "Text", C, false)), $.add((await $.wv([$t14, $t15], "SearchOptions", C, false)), [(await $.wv([$t14, $t15], "srFromBeginning", C, false))])], C))))) {
              await $.stmt((await $.wcall([$t14, $t15], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t14, $t15], "mtInformation", C, false)), [(await $.wv([$t14, $t15], "mbOK", C, false))], 0], C)));
            }
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tinarchiv", "SearchEdit4Change", async function SearchEdit4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tinarchiv", "SearchEdit4KeyPress", async function SearchEdit4KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.set(C, "SearchOptions", [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))]);
    {
      const $t16 = L0["sender"];
      await $.wset([$t16], "SearchField", "valu", C);
      {
        const $t17 = (await $.wcall([$t16], "TOracleDataSet", [(await $.mv((await $.wv([$t16], "SWDataModule", C, false)), "ARXIVIN"))], C));
        if ($.truthy($.not((await $.wcall([$t16, $t17], "SearchRecord", [(await $.wv([$t16, $t17], "SearchField", C, false)), (await $.wv([$t16, $t17], "Text", C, false)), $.add((await $.wv([$t16, $t17], "SearchOptions", C, false)), [(await $.wv([$t16, $t17], "srFromCurrent", C, false)), (await $.wv([$t16, $t17], "srForward", C, false))])], C))))) {
          if ($.truthy($.eq((await $.wcall([$t16, $t17], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t16, $t17], "mtInformation", C, false)), [(await $.wv([$t16, $t17], "mbNo", C, false)), (await $.wv([$t16, $t17], "mbYes", C, false))], 0], C)), (await $.wv([$t16, $t17], "mrYes", C, false))))) {
            if ($.truthy($.not((await $.wcall([$t16, $t17], "SearchRecord", [(await $.wv([$t16, $t17], "SearchField", C, false)), (await $.wv([$t16, $t17], "Text", C, false)), $.add((await $.wv([$t16, $t17], "SearchOptions", C, false)), [(await $.wv([$t16, $t17], "srFromBeginning", C, false))])], C))))) {
              await $.stmt((await $.wcall([$t16, $t17], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t16, $t17], "mtInformation", C, false)), [(await $.wv([$t16, $t17], "mbOK", C, false))], 0], C)));
            }
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tinarchiv", "SearchEdit5Change", async function SearchEdit5Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tinarchiv", "SearchEdit5KeyPress", async function SearchEdit5KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.set(C, "SearchOptions", [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))]);
    {
      const $t18 = L0["sender"];
      await $.wset([$t18], "SearchField", "BIC", C);
      {
        const $t19 = (await $.wcall([$t18], "TOracleDataSet", [(await $.mv((await $.wv([$t18], "SWDataModule", C, false)), "ARXIVIN"))], C));
        if ($.truthy($.not((await $.wcall([$t18, $t19], "SearchRecord", [(await $.wv([$t18, $t19], "SearchField", C, false)), (await $.wv([$t18, $t19], "Text", C, false)), $.add((await $.wv([$t18, $t19], "SearchOptions", C, false)), [(await $.wv([$t18, $t19], "srFromCurrent", C, false)), (await $.wv([$t18, $t19], "srForward", C, false))])], C))))) {
          if ($.truthy($.eq((await $.wcall([$t18, $t19], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t18, $t19], "mtInformation", C, false)), [(await $.wv([$t18, $t19], "mbNo", C, false)), (await $.wv([$t18, $t19], "mbYes", C, false))], 0], C)), (await $.wv([$t18, $t19], "mrYes", C, false))))) {
            if ($.truthy($.not((await $.wcall([$t18, $t19], "SearchRecord", [(await $.wv([$t18, $t19], "SearchField", C, false)), (await $.wv([$t18, $t19], "Text", C, false)), $.add((await $.wv([$t18, $t19], "SearchOptions", C, false)), [(await $.wv([$t18, $t19], "srFromBeginning", C, false))])], C))))) {
              await $.stmt((await $.wcall([$t18, $t19], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t18, $t19], "mtInformation", C, false)), [(await $.wv([$t18, $t19], "mbOK", C, false))], 0], C)));
            }
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tinarchiv", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "a", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "fieldbyname", ["all_text2"])), "asstring")));
  await $.set(C, "printform", (await $.mcall((await $.v(C, "Tprintform")), "create", [Self])));
  await $.mset((await $.mv((await $.v(C, "printform")), "prt")), "Text", (await $.v(C, "a")));
  await $.mcall((await $.v(C, "printform")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
