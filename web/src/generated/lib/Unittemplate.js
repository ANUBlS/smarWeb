// Generated from Unittemplate.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unittemplate", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Unitdatamod", "Unitazips", "Unitazips2", "Grids", "DBGrids", "StdCtrls", "ExtCtrls", "Menus"]);
  const C = [U];
  U.defClass("Ttemplate", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "ablonusil1": {"name": "ablonusil1", "type": "TMenuItem"}}, {});
  U.init(async () => {
    U.var_("template", null, "Ttemplate");
    U.var_("codex", 0, "integer");
  });
  U.method("Ttemplate", "ablonusil1Click", async function ablonusil1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "pack")), "CallProcedure", ["Templ_del", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "dbgrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))]])));
  await $.stmt((await $.call(C, "ShowMessage", ["Seçilmiş Şablon silindi"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Ttemplate", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "templ")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Ttemplate", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "key": '', "valute": 0, "valu": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["key"] = (await $.call(C, "char", [13]));
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "templ")), "FieldByName", ["mt"])), "AsString")), "MT205"))) {
    await $.mset((await $.mv((await $.v(C, "azips")), "MT205")), "Checked", true);
    await $.mset((await $.mv((await $.v(C, "azips")), "reciverbic")), "DataSource", (await $.mv((await $.v(C, "DataModbpl")), "bankssource")));
    await $.mset((await $.mv((await $.v(C, "azips")), "SearchEdit2")), "DataSource", (await $.mv((await $.v(C, "DataModbpl")), "bankssource")));
    await $.mset((await $.mv((await $.v(C, "azips")), "memo4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "templ")), "FieldByName", ["bankname"])), "AsVariant")));
    await $.mset((await $.mv((await $.v(C, "azips")), "edit8")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "templ")), "FieldByName", ["AMOUNT"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "azips")), "reciverbic")), "Text", (await $.call(C, "copy", [(await $.idx((await $.mv((await $.mv((await $.v(C, "azips")), "Memo4")), "Lines")), [0])), 2, 8])));
    await $.mset((await $.mv((await $.v(C, "azips")), "SearchEdit2")), "Text", (await $.call(C, "copy", [(await $.idx((await $.mv((await $.mv((await $.v(C, "azips")), "Memo4")), "Lines")), [4])), 1, 8])));
    await $.mset((await $.mv((await $.v(C, "azips")), "SearchCombo2")), "Text", (await $.call(C, "copy", [(await $.idx((await $.mv((await $.mv((await $.v(C, "azips")), "Memo4")), "Lines")), [1])), 1, 35])));
    L0["valu"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "templ")), "FieldByName", ["valute"])), "AsVariant"));
    await $.mset((await $.mv((await $.v(C, "azips")), "ComboBox3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "templ")), "FieldByName", ["valute"])), "AsString")));
    if ($.truthy($.eq(L0["valu"], "AZN"))) {
      L0["valute"] = 0;
    }
    if ($.truthy($.eq(L0["valu"], "RUR"))) {
      L0["valute"] = 48;
    }
    if ($.truthy($.eq(L0["valu"], "USD"))) {
      L0["valute"] = 1;
    }
    if ($.truthy($.eq(L0["valu"], "EUR"))) {
      L0["valute"] = 45;
    }
    await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "Bank")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "Bank")), "SetVariable", ["val", L0["valute"]])));
    await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "Bank")), "open", []);
    await $.mset((await $.mv((await $.v(C, "azips")), "memo3")), "Text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("/", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "Bank")), "FieldByName", ["bankcode"])), "AsString"))), "\r\n"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "Bank")), "FieldByName", ["name"])), "AsString"))), "\r\n"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "Bank")), "FieldByName", ["krno"])), "AsString"))), "\r\n"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "Bank")), "FieldByName", ["inn"])), "AsString"))), "\r\n"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "Bank")), "FieldByName", ["swift"])), "AsString"))), "XXX"));
    await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton13")), "Visible", true);
    await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton12")), "Visible", true);
    await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton11")), "Visible", true);
    await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton10")), "Visible", true);
    await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton9")), "Visible", true);
    await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton8")), "Visible", true);
    await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton14")), "Visible", true);
    await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "SetVariable", ["vid", 0])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "SetVariable", ["valu", L0["valu"]])));
    await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "open", []);
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "RecordCount")), 0))) {
      await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton13")), "Visible", false);
    }
    await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton13")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "FieldByName", ["rbname"])), "AsString")));
    await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "SetVariable", ["vid", 1])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "SetVariable", ["valu", L0["valu"]])));
    await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "open", []);
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "RecordCount")), 0))) {
      await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton12")), "Visible", false);
    }
    await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton12")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "FieldByName", ["rbname"])), "AsString")));
    await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "SetVariable", ["vid", 2])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "SetVariable", ["valu", L0["valu"]])));
    await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "open", []);
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "RecordCount")), 0))) {
      await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton11")), "Visible", false);
    }
    await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton11")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "FieldByName", ["rbname"])), "AsString")));
    await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "SetVariable", ["vid", 3])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "SetVariable", ["valu", L0["valu"]])));
    await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "open", []);
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "RecordCount")), 0))) {
      await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton10")), "Visible", false);
    }
    await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton10")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "FieldByName", ["rbname"])), "AsString")));
    await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "SetVariable", ["vid", 5])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "SetVariable", ["valu", L0["valu"]])));
    await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "open", []);
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "RecordCount")), 0))) {
      await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton9")), "Visible", false);
    }
    await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton9")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "FieldByName", ["rbname"])), "AsString")));
    await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "SetVariable", ["vid", 6])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "SetVariable", ["valu", L0["valu"]])));
    await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "open", []);
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "RecordCount")), 0))) {
      await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton8")), "Visible", false);
    }
    await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton8")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "FieldByName", ["rbname"])), "AsString")));
    await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "SetVariable", ["vid", 7])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "SetVariable", ["valu", L0["valu"]])));
    await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "open", []);
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "RecordCount")), 0))) {
      await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton14")), "Visible", false);
    }
    await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton14")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "rbnames")), "FieldByName", ["rbname"])), "AsString")));
    if ($.truthy($.eq((await $.call(C, "copy", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "templ")), "FieldByName", ["teyinat2"])), "AsString")), 0, 5])), "/BNF/"))) {
      await $.mset((await $.mv((await $.v(C, "azips")), "OF72_RichEdit")), "Text", (await $.call(C, "copy", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "templ")), "FieldByName", ["teyinat2"])), "AsString")), 6, 1000])));
      await $.mset((await $.mv((await $.v(C, "azips")), "OF72_RichEdit")), "Text", (await $.call(C, "StringReplace", [(await $.mv((await $.mv((await $.v(C, "azips")), "OF72_RichEdit")), "text")), "//", "", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]])));
    } else {
      await $.set(C, "codex", (await $.call(C, "strtoint", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "templ")), "FieldByName", ["teyinat"])), "AsString"))])));
    }
    { const $t1 = (await $.call(C, "strtoint", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "templ")), "FieldByName", ["teyinat"])), "AsString"))]));
      if ($.eq($t1, 0)) {
        await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton13")), "Checked", true);
      }
      else if ($.eq($t1, 1)) {
        await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton12")), "Checked", true);
      }
      else if ($.eq($t1, 2)) {
        await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton11")), "Checked", true);
      }
      else if ($.eq($t1, 3)) {
        await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton10")), "Checked", true);
      }
      else if ($.eq($t1, 5)) {
        await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton9")), "Checked", true);
      }
      else if ($.eq($t1, 6)) {
        await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton8")), "Checked", true);
      }
      else if ($.eq($t1, 7)) {
        await $.mset((await $.mv((await $.v(C, "azips")), "RadioButton14")), "Checked", true);
      }
    }
    await $.stmt($.call(C, "close", []));
  } else {
    await $.mset((await $.mv((await $.v(C, "azips")), "MT103")), "Checked", true);
    await $.mcall((await $.mv((await $.v(C, "azips")), "SearchEdit2")), "Clear", []);
    await $.mcall((await $.mv((await $.v(C, "azips")), "reciverbic")), "Clear", []);
    { const $t2 = await $.iset((await $.mv((await $.mv((await $.v(C, "azips")), "Memo2")), "Lines")), [3], ""); if ($t2 !== undefined) { await $.mset((await $.mv((await $.v(C, "azips")), "Memo2")), "Lines", $t2); } }
    { const $t3 = await $.iset((await $.mv((await $.mv((await $.v(C, "azips")), "Memo2")), "Lines")), [4], ""); if ($t3 !== undefined) { await $.mset((await $.mv((await $.v(C, "azips")), "Memo2")), "Lines", $t3); } }
    await $.mset((await $.mv((await $.v(C, "azips")), "SearchCombo2")), "Text", "");
    await $.mset((await $.mv((await $.v(C, "azips")), "ComboBox3")), "Text", "");
    await $.mset((await $.mv((await $.v(C, "azips")), "ComboBox3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "templ")), "FieldByName", ["valute"])), "AsString")));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "azips")), "ComboBox3")), "OnChange", [(await $.mv((await $.v(C, "azips")), "ComboBox3"))])));
    await $.mset((await $.mv((await $.v(C, "azips")), "reciverbic")), "DataSource", (await $.mv((await $.v(C, "DataModbpl")), "bankssource")));
    await $.mset((await $.mv((await $.v(C, "azips")), "SearchEdit2")), "DataSource", (await $.mv((await $.v(C, "DataModbpl")), "bankssource")));
    await $.mset((await $.mv((await $.v(C, "azips")), "memo1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "templ")), "FieldByName", ["bankname"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "azips")), "memo2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "templ")), "FieldByName", ["ahesab"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "azips")), "amount")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "templ")), "FieldByName", ["AMOUNT"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "azips")), "edit2")), "Text", (await $.call(C, "copy", [(await $.idx((await $.mv((await $.mv((await $.v(C, "azips")), "Memo2")), "Lines")), [0])), 2, 30])));
    await $.mset((await $.mv((await $.v(C, "azips")), "edit3")), "Text", (await $.call(C, "copy", [(await $.idx((await $.mv((await $.mv((await $.v(C, "azips")), "Memo2")), "Lines")), [1])), 0, 35])));
    await $.mset((await $.mv((await $.v(C, "azips")), "edit4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "templ")), "FieldByName", ["avoen"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "azips")), "edit7")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "templ")), "FieldByName", ["ghesab"])), "AsString")));
    await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "account")), "Closeall", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "account")), "SetVariable", ["accno", (await $.mv((await $.mv((await $.v(C, "azips")), "edit7")), "Text"))])));
    await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "account")), "open", []);
    await $.mset((await $.mv((await $.v(C, "azips")), "edit6")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "account")), "FieldByName", ["KLi_id"])), "AsVariant")));
    await $.stmt((await $.mcall((await $.v(C, "azips")), "Edit6KeyPress", [(await $.mv((await $.v(C, "azips")), "edit6")), $.ref(async () => L0["key"], async ($t4) => { L0["key"] = $t4; })])));
    await $.mset((await $.mv((await $.v(C, "azips")), "SearchEdit1")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "templ")), "FieldByName", ["ghesab"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "azips")), "reciverbic")), "Text", (await $.call(C, "copy", [(await $.idx((await $.mv((await $.mv((await $.v(C, "azips")), "Memo2")), "Lines")), [3])), 0, 6])));
    await $.mset((await $.mv((await $.v(C, "azips")), "SearchEdit2")), "Text", (await $.call(C, "copy", [(await $.idx((await $.mv((await $.mv((await $.v(C, "azips")), "Memo2")), "Lines")), [3])), 19, 10])));
    await $.mset((await $.mv((await $.v(C, "azips")), "SearchCombo2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "templ")), "FieldByName", ["aadi"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "azips")), "OF70_RichEdit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "templ")), "FieldByName", ["teyinat"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "azips")), "OF72_RichEdit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "templ")), "FieldByName", ["teyinat2"])), "AsString")));
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Ttemplate", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
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
      const $t5 = (await $.mv((await $.v(C, "DataModbpl")), "templ"));
      await $.stmt($.wcall([$t5], "close", [], C));
      { const $t6 = await $.iset((await $.wv([$t5], "sql", C, false)), [6], $.add("order by ", (await $.wv([$t5], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))); if ($t6 !== undefined) { await $.wset([$t5], "sql", $t6, C); } }
      await $.stmt($.wcall([$t5], "open", [], C));
      await $.mset((await $.mv((await $.wv([$t5], "DBGrid1", C, false)), "DataSource")), "DataSet", (await $.mv((await $.wv([$t5], "DataModbpl", C, false)), "templ")));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("Ttemplate", "Edit1Change", async function Edit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.mv((await $.v(C, "DataModbpl")), "templ"));
    await $.wset([$t7], "Filter", $.add($.add($.add("mt = '", (await $.mv((await $.wv([$t7], "Edit1", C, false)), "Text"))), ("*")), "'"), C);
    await $.wset([$t7], "Filtered", (await $.wv([$t7], "true", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Ttemplate", "Edit2Change", async function Edit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.mv((await $.v(C, "DataModbpl")), "templ"));
    await $.wset([$t8], "Filter", $.add($.add($.add("tempname = '", (await $.mv((await $.wv([$t8], "Edit2", C, false)), "Text"))), ("*")), "'"), C);
    await $.wset([$t8], "Filtered", (await $.wv([$t8], "true", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Ttemplate", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBGrid1")), "DataSource", (await $.mv((await $.v(C, "DataModbpl")), "sourcetempl")));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Ttemplate", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
