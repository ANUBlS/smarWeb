// Generated from Unit15.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit15", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Unitdatamod", "StdCtrls", "ComCtrls", "DBCtrls", "DBGridEh", "Mask", "DBCtrlsEh", "DBLookupEh", "SearchEdit"]);
  const C = [U];
  U.defClass("TFormat102", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "referens": {"name": "referens", "type": "TEdit"}, "mf23b": {"name": "mf23b", "type": "TEdit"}, "val": {"name": "val", "type": "TEdit"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "amount": {"name": "amount", "type": "TEdit"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "label19": {"name": "Label19", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "searchcombo": {"name": "searchcombo", "type": "TDBLookupComboboxEh"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "reciverbic": {"name": "reciverbic", "type": "TSearchEdit"}, "searchcombo2": {"name": "SearchCombo2", "type": "TComboBox"}, "searchedit2": {"name": "SearchEdit2", "type": "TSearchEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "memo2": {"name": "Memo2", "type": "TMemo"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "of70_richedit": {"name": "OF70_RichEdit", "type": "TRichEdit"}, "of72_richedit": {"name": "OF72_RichEdit", "type": "TRichEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "relatedrf": {"name": "relatedrf", "type": "TEdit"}, "label16": {"name": "Label16", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("Format102", null, "TFormat102");
  });
  U.method("TFormat102", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "k": 0, "ids": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["k"] = 0;
  L0["ids"] = 0;
  if ($.truthy($.eq((await $.mv((await $.v(C, "referens")), "text")), ""))) {
    await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "referans")), "Close", []);
    {
      const $t1 = (await $.mv((await $.v(C, "DataModbpl")), "referans"));
      await $.stmt((await $.wcall([$t1], "SetVariable", ["FORMATS", ""], C)));
      await $.stmt((await $.wcall([$t1], "SetVariable", ["CURRENSY", "10-"], C)));
    }
    await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "referans")), "Open", []);
    await $.mset((await $.v(C, "referens")), "text", (await $.mv((await $.mv((await $.v(C, "DataModbpl")), "referansrefe")), "asstring")));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "OF70_RichEdit")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Təyinat boş saxlamaq olmaz!!"])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "pack")), "CallProcedure", ["saving102", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime")), (await $.mv((await $.v(C, "referens")), "Text")), (await $.mv((await $.v(C, "searchcombo")), "Text")), (await $.mv((await $.v(C, "reciverbic")), "Text")), (await $.mv((await $.v(C, "SearchCombo2")), "Text")), (await $.mv((await $.v(C, "edit2")), "Text")), (await $.mv((await $.v(C, "edit3")), "Text")), (await $.mv((await $.v(C, "Edit4")), "Text")), (await $.mv((await $.v(C, "OF70_RichEdit")), "Text")), (await $.mv((await $.v(C, "OF72_RichEdit")), "Text")), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "amount")), "Text"))])), L0["k"], L0["ids"], (await $.mv((await $.v(C, "memo1")), "Text")), (await $.mv((await $.v(C, "memo2")), "Text")), (await $.mv((await $.v(C, "SearchCombo2")), "Text")), (await $.mv((await $.v(C, "reciverbic")), "Text")), (await $.idx((await $.mv((await $.v(C, "memo1")), "Lines")), [1])), (await $.idx((await $.mv((await $.v(C, "memo2")), "Lines")), [1])), (await $.mv((await $.v(C, "relatedrf")), "Text"))]])));
    await $.mset((await $.v(C, "searchcombo")), "Text", "");
    await $.mset((await $.v(C, "reciverbic")), "Text", "");
    await $.mset((await $.v(C, "memo1")), "Text", "");
    await $.mset((await $.v(C, "memo2")), "Text", "");
    await $.mset((await $.v(C, "amount")), "Text", "");
    await $.mset((await $.v(C, "edit6")), "Text", "");
    await $.mset((await $.v(C, "edit2")), "Text", "");
    await $.mset((await $.v(C, "edit3")), "Text", "");
    await $.mset((await $.v(C, "edit4")), "Text", "");
    await $.mset((await $.v(C, "SearchEdit2")), "Text", "");
    await $.mset((await $.v(C, "searchcombo2")), "Text", "");
    await $.mset((await $.v(C, "relatedrf")), "Text", "");
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormat102", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "k": 0, "ids": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "referens")), "text")), ""))) {
    await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "referans")), "Close", []);
    {
      const $t2 = (await $.mv((await $.v(C, "DataModbpl")), "referans"));
      await $.stmt((await $.wcall([$t2], "SetVariable", ["FORMATS", ""], C)));
      await $.stmt((await $.wcall([$t2], "SetVariable", ["CURRENSY", "10-"], C)));
    }
    await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "referans")), "Open", []);
    await $.mset((await $.v(C, "referens")), "text", (await $.mv((await $.mv((await $.v(C, "DataModbpl")), "referansrefe")), "asstring")));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "OF70_RichEdit")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Təyinat boş saxlamaq olmaz!!"])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "pack")), "CallProcedure", ["saving102", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime")), (await $.mv((await $.v(C, "referens")), "Text")), (await $.mv((await $.v(C, "searchcombo")), "Text")), (await $.mv((await $.v(C, "reciverbic")), "Text")), (await $.mv((await $.v(C, "SearchCombo2")), "Text")), (await $.mv((await $.v(C, "edit2")), "Text")), (await $.mv((await $.v(C, "edit3")), "Text")), (await $.mv((await $.v(C, "Edit4")), "Text")), (await $.mv((await $.v(C, "OF70_RichEdit")), "Text")), (await $.mv((await $.v(C, "OF72_RichEdit")), "Text")), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "amount")), "Text"))])), L0["k"], L0["ids"], (await $.mv((await $.v(C, "memo1")), "Text")), (await $.mv((await $.v(C, "memo2")), "Text")), (await $.mv((await $.v(C, "SearchCombo2")), "Text")), (await $.mv((await $.v(C, "reciverbic")), "Text")), (await $.idx((await $.mv((await $.v(C, "memo1")), "Lines")), [1])), (await $.idx((await $.mv((await $.v(C, "memo2")), "Lines")), [1])), (await $.mv((await $.v(C, "relatedrf")), "Text"))]])));
    await $.mset((await $.v(C, "searchcombo")), "Text", "");
    await $.mset((await $.v(C, "reciverbic")), "Text", "");
    await $.mset((await $.v(C, "memo1")), "Text", "");
    await $.mset((await $.v(C, "memo2")), "Text", "");
    await $.mset((await $.v(C, "amount")), "Text", "");
    await $.mset((await $.v(C, "edit6")), "Text", "");
    await $.mset((await $.v(C, "edit2")), "Text", "");
    await $.mset((await $.v(C, "edit3")), "Text", "");
    await $.mset((await $.v(C, "edit4")), "Text", "");
    await $.mset((await $.v(C, "SearchEdit2")), "Text", "");
    await $.mset((await $.v(C, "searchcombo2")), "Text", "");
    await $.mset((await $.v(C, "relatedrf")), "Text", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormat102", "Edit2Exit", async function Edit2Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    if ($.truthy($.ne((await $.call(C, "copy", [(await $.mv((await $.v(C, "edit2")), "Text")), 5, 4])), (await $.call(C, "copy", [(await $.mv((await $.v(C, "SearchEdit2")), "Text")), 0, 4]))))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Hesabla Swift kodu uyğun deyil!!!!"])));
    }
    if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "SBOP")), "CallIntegerFunction", ["check_IBAN_acc_num", [(await $.mv((await $.v(C, "Edit2")), "Text"))]])), 0))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Hesab ibana  uyğun deyil!!!!!!"])));
    }
    { const $t4 = await $.iset((await $.mv((await $.v(C, "Memo2")), "Lines")), [0], $.add("/", (await $.mv((await $.v(C, "edit2")), "Text")))); if ($t4 !== undefined) { await $.mset((await $.v(C, "Memo2")), "Lines", $t4); } }
  } catch ($t3) {
    $.rethrowControl($t3);
    if ($.excIs($t3, "Exception")) {
      L0["e"] = $.exc($t3);
      await $.stmt((await $.call(C, "ShowMessage", ["IBAN Hesabi yazilmayib"])));
    }
    else { throw $t3; }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormat102", "Edit3Exit", async function Edit3Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t5 = await $.iset((await $.mv((await $.v(C, "Memo2")), "Lines")), [1], (await $.mv((await $.v(C, "Edit3")), "Text"))); if ($t5 !== undefined) { await $.mset((await $.v(C, "Memo2")), "Lines", $t5); } }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormat102", "Edit4Exit", async function Edit4Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "edit4")), "text")), ""))) {
    if ($.truthy(($.ne((await $.call(C, "length", [(await $.mv((await $.v(C, "edit4")), "text"))])), 10)))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Vöen 10 simvoldan azdır"])));
    } else {
      { const $t6 = await $.iset((await $.mv((await $.v(C, "Memo2")), "Lines")), [2], $.add((await $.mv((await $.v(C, "Edit4")), "Text")), "/")); if ($t6 !== undefined) { await $.mset((await $.v(C, "Memo2")), "Lines", $t6); } }
    }
  } else {
    { const $t7 = await $.iset((await $.mv((await $.v(C, "Memo2")), "Lines")), [2], "/"); if ($t7 !== undefined) { await $.mset((await $.v(C, "Memo2")), "Lines", $t7); } }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormat102", "reciverbicKeyPress", async function reciverbicKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "reciverbic")), "DataSource", (await $.mv((await $.v(C, "DataModbpl")), "bankssource")));
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.mv((await $.v(C, "reciverbic")), "Text")), ""))) {
      await $.mset((await $.v(C, "SearchEdit2")), "DataSource", (await $.mv((await $.v(C, "DataModbpl")), "bankssource")));
      await $.mset((await $.v(C, "SearchCombo2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "banks")), "FieldByName", ["name"])), "AsString")));
      await $.mset((await $.v(C, "SearchEdit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "banks")), "FieldByName", ["swift"])), "AsString")));
    } else {
      await $.mset((await $.v(C, "SearchCombo2")), "Text", "");
    }
    { const $t8 = await $.iset((await $.mv((await $.v(C, "Memo2")), "Lines")), [3], $.add($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "banks")), "FieldByName", ["bankcode"])), "AsString")), "/"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "banks")), "FieldByName", ["inn"])), "AsString"))), "/"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "banks")), "FieldByName", ["swift"])), "AsString"))), "XXX")); if ($t8 !== undefined) { await $.mset((await $.v(C, "Memo2")), "Lines", $t8); } }
    { const $t9 = await $.iset((await $.mv((await $.v(C, "Memo2")), "Lines")), [4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "banks")), "FieldByName", ["krno"])), "AsString"))); if ($t9 !== undefined) { await $.mset((await $.v(C, "Memo2")), "Lines", $t9); } }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormat102", "SearchCombo2Exit", async function SearchCombo2Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t10 = await $.iset((await $.mv((await $.v(C, "Memo2")), "Lines")), [3], $.add($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "banks")), "FieldByName", ["bankcode"])), "AsString")), "/"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "banks")), "FieldByName", ["inn"])), "AsString"))), "/"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "banks")), "FieldByName", ["swift"])), "AsString"))), "XXX")); if ($t10 !== undefined) { await $.mset((await $.v(C, "Memo2")), "Lines", $t10); } }
  { const $t11 = await $.iset((await $.mv((await $.v(C, "Memo2")), "Lines")), [4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "banks")), "FieldByName", ["krno"])), "AsString"))); if ($t11 !== undefined) { await $.mset((await $.v(C, "Memo2")), "Lines", $t11); } }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormat102", "searchcomboExit", async function searchcomboExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "custname": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "account")), "Closeall", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "account")), "SetVariable", ["accno", (await $.mv((await $.v(C, "searchcombo")), "Text"))])));
  await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "account")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "gonderen")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "gonderen")), "SetVariable", ["fid", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "account")), "FieldByName", ["filial"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "gonderen")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "alanm")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "alanm")), "SetVariable", ["kid", (await $.mv((await $.v(C, "edit6")), "Text"))])));
  await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "alanm")), "Open", []);
  L0["custname"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "alanm")), "FieldByName", ["d"])), "AsString"));
  L0["custname"] = (await $.call(C, "Copy", [L0["custname"], 1, 35]));
  await $.mset((await $.v(C, "memo1")), "Text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("/", (await $.mv((await $.v(C, "searchcombo")), "Text"))), "\r\n"), L0["custname"]), "\r\n"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "alanm")), "FieldByName", ["inn"])), "AsString"))), "/"), "\r\n"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "gonderen")), "FieldByName", ["kod_b"])), "AsString"))), "/"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "gonderen")), "FieldByName", ["inn"])), "AsString"))), "/"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "gonderen")), "FieldByName", ["swift"])), "AsString"))), "XXX"), "\r\n"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "gonderen")), "FieldByName", ["krno"])), "AsString"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormat102", "SearchEdit2KeyPress", async function SearchEdit2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.mv((await $.v(C, "SearchEdit2")), "Text")), ""))) {
      await $.mset((await $.v(C, "reciverbic")), "DataSource", (await $.mv((await $.v(C, "DataModbpl")), "bankssource")));
      await $.mset((await $.v(C, "SearchCombo2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "banks")), "FieldByName", ["name"])), "AsString")));
      await $.mset((await $.v(C, "reciverbic")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "banks")), "FieldByName", ["bankcode"])), "AsString")));
    } else {
      await $.mset((await $.v(C, "SearchCombo2")), "Text", "");
    }
    { const $t12 = await $.iset((await $.mv((await $.v(C, "Memo2")), "Lines")), [3], $.add($.add($.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "banks")), "FieldByName", ["bankcode"])), "AsString")), "/"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "banks")), "FieldByName", ["inn"])), "AsString"))), "/"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "banks")), "FieldByName", ["swift"])), "AsString"))), "XXX")); if ($t12 !== undefined) { await $.mset((await $.v(C, "Memo2")), "Lines", $t12); } }
    { const $t13 = await $.iset((await $.mv((await $.v(C, "Memo2")), "Lines")), [4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "banks")), "FieldByName", ["krno"])), "AsString"))); if ($t13 !== undefined) { await $.mset((await $.v(C, "Memo2")), "Lines", $t13); } }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormat102", "Edit6KeyPress", async function Edit6KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b", "\r"]))))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "acount")), "CloseAll", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "acount")), "SetVariable", ["ids", (await $.mv((await $.v(C, "edit6")), "Text"))])));
    await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "acount")), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModbpl")), "acount")), "RecordCount")), 0))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Müştəri tapılmadı"])));
      await $.mcall((await $.v(C, "Edit6")), "Clear", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormat102", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t14 = (await $.mv((await $.mv((await $.v(C, "DataModbpl")), "banks")), "RecordCount"));
    L0["i"] = 1;
    let $t15 = true;
    for (;;) {
      if (!$t15) { L0["i"] = $.succ(L0["i"], 1); }
      $t15 = false;
      if (!($.ord(L0["i"]) <= $.ord($t14))) break;
      { const $t16 = await $.iset((await $.mv((await $.v(C, "SearchCombo2")), "Items")), [L0["i"]], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "banks")), "FieldByName", ["name"])), "AsString"))); if ($t16 !== undefined) { await $.mset((await $.v(C, "SearchCombo2")), "Items", $t16); } }
      await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "banks")), "Next", []);
      await $.tick();
    }
  }
  await $.mcall((await $.mv((await $.v(C, "DataModbpl")), "banks")), "First", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
