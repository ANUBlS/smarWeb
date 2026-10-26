// Generated from payment.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("payment", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "ExtCtrls", "Grids", "DBGrids", "Menus", "CMExcelExport", "oRACLEdATA", "DBCtrls", "lDialogs", "filectrl", "balans", "CARDS_TLB", "customers", "MAINFORMImpl1", "Unit18", "applicationpas", "atmendpos", "balhs", "banksettings", "cfilepas", "comp", "crdtype", "creditinfopas", "datclose", "dilingUnit", "domesticbank", "dpforms", "filialaccounts", "klirinqUnit", "newcard", "poscomission", "rezform", "setac", "sms", "U9", "Unit155", "UnitDxxx", "Unitintfile", "UnitRvisa", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TPayments", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "button4": {"name": "Button4", "type": "TButton"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "selectall1": {"name": "selectall1", "type": "TMenuItem"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "filelistbox1": {"name": "FileListBox1", "type": "TFileListBox"}, "button5": {"name": "Button5", "type": "TButton"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "button6": {"name": "Button6", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("Payments", null, "TPayments");
  });
  U.method("TPayments", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tarix": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "tarix")), "fieldbyname", ["TEK_DAT"])), "asdatetime")));
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.v(C, "DateTimePicker2")), "DateTime")));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayments", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tarix": 0, "vidop": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Card_vidop")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "payment")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "payment")), "SetVariable", ["dat1", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "payment")), "SetVariable", ["dat2", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]))]))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "payment")), "SetVariable", ["vids", (await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "Card_vidopVIDOP")), "AsVariant"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "payment")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayments", "Edit1Exit", async function Edit1Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayments", "selectall1Click", async function selectall1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "dbgrid1"));
    const $t2 = (await $.wv([$t1], "SelectedRows", C, false));
    const $t3 = (await $.mv((await $.wv([$t1, $t2], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t1, $t2, $t3], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t1, $t2, $t3], "First", [], C));
      while ($.truthy($.not((await $.wv([$t1, $t2, $t3], "Eof", C, false))))) {
        await $.wset([$t1, $t2, $t3], "CurrentRowSelected", (await $.wv([$t1, $t2, $t3], "True", C, false)), C);
        await $.stmt($.wcall([$t1, $t2, $t3], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t1, $t2, $t3], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayments", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "selectall1")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayments", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "payment")), "payment", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayments", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
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
    const $t4 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t4], "SortPosition", (await $.mcall((await $.wv([$t4], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t4], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t4], "Refresh", [], C));
    } finally {
      { const $t5 = await $.iset((await $.wv([$t4], "SQL", C, false)), [(await $.wv([$t4], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t4], "EmptyStr", C, false))); if ($t5 !== undefined) { await $.wset([$t4], "SQL", $t5, C); } }
      await $.mset((await $.wv([$t4], "Screen", C, false)), "Cursor", (await $.wv([$t4], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TPayments", "Edit1Change", async function Edit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.mv((await $.v(C, "DataMod_CARDS")), "payment"));
    await $.wset([$t6], "Filter", $.add($.add($.add("iD = '", (await $.mv((await $.wv([$t6], "Edit1", C, false)), "Text"))), ("*")), "'"), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayments", "Edit2Change", async function Edit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.mv((await $.v(C, "DataMod_CARDS")), "payment"));
    await $.wset([$t7], "Filter", $.add($.add($.add("CARDNUMBER = '", (await $.mv((await $.wv([$t7], "Edit2", C, false)), "Text"))), ("*")), "'"), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayments", "Edit3Change", async function Edit3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.mv((await $.v(C, "DataMod_CARDS")), "payment"));
    await $.wset([$t8], "Filter", $.add($.add($.add("RBSNUMBER_1 = '", (await $.mv((await $.wv([$t8], "Edit3", C, false)), "Text"))), ("*")), "'"), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayments", "DBLookupComboBox1Enter", async function DBLookupComboBox1Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.mv((await $.v(C, "DataMod_CARDS")), "payment"));
    await $.wset([$t9], "Filter", $.add($.add($.add("FILIAL = '", (await $.mv((await $.wv([$t9], "DBLookupComboBox1", C, false)), "Text"))), ("*")), "'"), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayments", "DBLookupComboBox2Enter", async function DBLookupComboBox2Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.mv((await $.v(C, "DataMod_CARDS")), "payment"));
    await $.wset([$t10], "Filter", $.add($.add($.add("CURRENCY = '", (await $.mv((await $.wv([$t10], "DBLookupComboBox2", C, false)), "Text"))), ("*")), "'"), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayments", "DBLookupComboBox2Click", async function DBLookupComboBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.mv((await $.v(C, "DataMod_CARDS")), "payment"));
    await $.wset([$t11], "Filter", $.add($.add($.add("CURRENCY = '", (await $.mv((await $.wv([$t11], "DBLookupComboBox2", C, false)), "Text"))), ("*")), "'"), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayments", "DBLookupComboBox1Click", async function DBLookupComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (await $.mv((await $.v(C, "DataMod_CARDS")), "payment"));
    await $.wset([$t12], "Filter", $.add($.add($.add("FILIAL = '", (await $.mv((await $.wv([$t12], "DBLookupComboBox1", C, false)), "Text"))), ("*")), "'"), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("whenday", async function whenday(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0, "wday": 0, "feb": 0};
  L0["yan"] = 31;
  L0["mar"] = 31;
  L0["apr"] = 30;
  L0["may"] = 31;
  L0["jun"] = 30;
  L0["jul"] = 31;
  L0["avg"] = 31;
  L0["seb"] = 30;
  L0["okt"] = 31;
  L0["nov"] = 30;
  L0["dec"] = 31;
  L0["wday"] = 0;
  if ($.truthy((await $.call(C, "IsLeapYear", [(await $.call(C, "strtoint", [(await $.call(C, "FormatDateTime", ["yyyy", (await $.v(C, "date"))]))]))])))) {
    L0["feb"] = 29;
  } else {
    L0["feb"] = 28;
  }
  { const $t13 = (await $.call(C, "strtoint", [(await $.call(C, "FormatDateTime", ["mm", (await $.v(C, "date"))]))]));
    if ($.eq($t13, 1)) {
      L0["wday"] = (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))]));
    }
    else if ($.eq($t13, 2)) {
      L0["wday"] = $.add(L0["yan"], (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t13, 3)) {
      L0["wday"] = $.add($.add(L0["yan"], L0["feb"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t13, 4)) {
      L0["wday"] = $.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t13, 5)) {
      L0["wday"] = $.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t13, 6)) {
      L0["wday"] = $.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t13, 7)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t13, 8)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t13, 9)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t13, 10)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t13, 11)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"]), L0["okt"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t13, 12)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"]), L0["okt"]), L0["nov"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
  }
  L0["result"] = L0["wday"];
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("when2Str", async function when2Str(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"wday": $.copyArg(p0), result: '', "wd": ''};
  await $.fixArgs(L0, ["wday"]);
  L0["wd"] = (await $.call(C, "InttoStr", [L0["wday"]]));
  { const $t14 = (await $.call(C, "length", [L0["wd"]]));
    if ($.eq($t14, 1)) {
      L0["wd"] = $.add("00", L0["wd"]);
    }
    else if ($.eq($t14, 2)) {
      L0["wd"] = $.add("0", L0["wd"]);
    }
  }
  L0.result = L0["wd"];
  return L0.result;
}, {"params": ["wday"], "kind": "function", "ptypes": ["integer"]});
  U.method("TPayments", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Button5")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayments", "Button5Click", async function Button5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "f": null, "sumofbalance": 0, "sumofbalancerd": 0, "bhcount": 0, "rdcount": 0, "rowcount": 0, "nom": 0, "i": 0, "j": 0, "filename": '', "fheader": '', "stmessage": '', "rownum": '', "all": '', "tempstr": '', "tempcur": '', "tempdir": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "payment")), "RecordCount")), 0))) {
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "SelectedRows")), "Count")), 0))) {
    return L0.result;
  }
  if ($.truthy($.not((await $.call(C, "DirectoryExists", [$.add("C:\\AZCARD\\OUT\\", (await $.call(C, "FormatDateTime", ["DDMMYY", (await $.v(C, "DATE"))])))]))))) {
    await $.stmt((await $.call(C, "MkDir", [$.add("C:\\AZCARD\\OUT\\", (await $.call(C, "FormatDateTime", ["DDMMYY", (await $.v(C, "DATE"))])))])));
  }
  await $.mset((await $.v(C, "FileListBox1")), "Directory", $.add("C:\\AZCARD\\OUT\\", (await $.call(C, "FormatDateTime", ["DDMMYY", (await $.v(C, "DATE"))]))));
  await $.mcall((await $.v(C, "FileListBox1")), "Update", []);
  L0["nom"] = 0;
  { const $t15 = 999;
    L0["i"] = 1;
    let $t16 = true;
    for (;;) {
      if (!$t16) { L0["i"] = $.succ(L0["i"], 1); }
      $t16 = false;
      if (!($.ord(L0["i"]) <= $.ord($t15))) break;
      L0["all"] = "";
      { const $t17 = 2;
        L0["j"] = (await $.call(C, "Length", [(await $.call(C, "IntToStr", [L0["i"]]))]));
        let $t18 = true;
        for (;;) {
          if (!$t18) { L0["j"] = $.succ(L0["j"], 1); }
          $t18 = false;
          if (!($.ord(L0["j"]) <= $.ord($t17))) break;
          L0["all"] = $.add("_", L0["all"]);
          await $.tick();
        }
      }
      L0["filename"] = $.add($.add($.add($.add($.add($.add($.add("C:\\AZCARD\\OUT\\", (await $.call(C, "FormatDateTime", ["DDMMYY", (await $.v(C, "DATE"))]))), "\\P"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["bankid"])), "asstring"))), L0["all"]), (await $.call(C, "IntToStr", [L0["i"]]))), "."), (await $.call(C, "when2Str", [(await $.v(C, "WhenDay"))])));
      if ($.truthy($.not(((await $.call(C, "FileExists", [L0["filename"]])))))) {
        L0["nom"] = L0["i"];
        break;
      }
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t19) => { L0["f"] = $t19; }), L0["filename"]])));
  await $.stmt((await $.call(C, "Rewrite", [$.ref(async () => L0["f"], async ($t20) => { L0["f"] = $t20; })])));
  L0["fheader"] = "";
  L0["all"] = (await $.call(C, "IntToStr", [L0["nom"]]));
  { const $t21 = 1;
    L0["j"] = (await $.call(C, "length", [L0["all"]]));
    let $t22 = true;
    for (;;) {
      if (!$t22) { L0["j"] = $.succ(L0["j"], 1); }
      $t22 = false;
      if (!($.ord(L0["j"]) <= $.ord($t21))) break;
      L0["all"] = $.add("0", L0["all"]);
      await $.tick();
    }
  }
  L0["fheader"] = $.add($.add($.add($.add($.add($.add($.add($.add("FH000001PAYMENT   12 ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["bankid"])), "asstring"))), "  "), (await $.call(C, "FormatDateTime", ["yyyymmdd", (await $.v(C, "date"))]))), (await $.call(C, "FormatDateTime", ["hhmmss", (await $.v(C, "time"))]))), "00"), L0["all"]), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["bankid"])), "asstring"))), "  RRNBD N");
  { const $t23 = 203;
    L0["j"] = 59;
    let $t24 = true;
    for (;;) {
      if (!$t24) { L0["j"] = $.succ(L0["j"], 1); }
      $t24 = false;
      if (!($.ord(L0["j"]) <= $.ord($t23))) break;
      L0["fheader"] = $.add(L0["fheader"], " ");
      await $.tick();
    }
  }
  L0["fheader"] = $.add(L0["fheader"], "*");
  await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["fheader"]])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "payment")), "First", []);
  L0["sumofbalance"] = 0;
  L0["bhcount"] = 0;
  L0["i"] = 0;
  while ($.truthy(($.lt(L0["i"], (await $.mv((await $.mv((await $.v(C, "DBGrid1")), "SelectedRows")), "Count")))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "SelectedRows")), "Items")), [L0["i"]]))]))])));
    L0["stmessage"] = "";
    L0["rowcount"] = 0;
    L0["bhcount"] = $.add(L0["bhcount"], 1);
    L0["rdcount"] = 0;
    L0["sumofbalancerd"] = 0;
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t25) => { L0["f"] = $t25; })])));
    while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
      L0["rowcount"] = $.add(L0["rowcount"], 1);
      await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t26) => { L0["f"] = $t26; })])));
      await $.tick();
    }
    await $.stmt((await $.call(C, "Append", [$.ref(async () => L0["f"], async ($t27) => { L0["f"] = $t27; })])));
    L0["rownum"] = (await $.call(C, "IntToStr", [$.add(L0["rowcount"], 1)]));
    { const $t28 = 5;
      L0["j"] = (await $.call(C, "Length", [L0["rownum"]]));
      let $t29 = true;
      for (;;) {
        if (!$t29) { L0["j"] = $.succ(L0["j"], 1); }
        $t29 = false;
        if (!($.ord(L0["j"]) <= $.ord($t28))) break;
        L0["rownum"] = $.add("0", L0["rownum"]);
        await $.tick();
      }
    }
    L0["rdcount"] = 0;
    L0["tempcur"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "FieldByName", ["Currency"])), "AsString"));
    L0["tempdir"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "FieldByName", ["TIP"])), "AsString"));
    L0["stmessage"] = $.add("BH", L0["rownum"]);
    L0["rownum"] = (await $.call(C, "IntToStr", [L0["bhcount"]]));
    { const $t30 = 5;
      L0["j"] = (await $.call(C, "Length", [L0["rownum"]]));
      let $t31 = true;
      for (;;) {
        if (!$t31) { L0["j"] = $.succ(L0["j"], 1); }
        $t31 = false;
        if (!($.ord(L0["j"]) <= $.ord($t30))) break;
        L0["rownum"] = $.add("0", L0["rownum"]);
        await $.tick();
      }
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "FieldByName", ["TIP"])), "AsString")), "D"))) {
      L0["tempstr"] = "PAYFACC";
    } else {
      L0["tempstr"] = "PAYACC";
    }
    { const $t32 = 11;
      L0["j"] = (await $.call(C, "Length", [L0["tempstr"]]));
      let $t33 = true;
      for (;;) {
        if (!$t33) { L0["j"] = $.succ(L0["j"], 1); }
        $t33 = false;
        if (!($.ord(L0["j"]) <= $.ord($t32))) break;
        L0["tempstr"] = $.add(L0["tempstr"], " ");
        await $.tick();
      }
    }
    L0["stmessage"] = $.add($.add($.add($.add(L0["stmessage"], L0["rownum"]), "    "), L0["tempstr"]), " ");
    L0["stmessage"] = $.add(L0["stmessage"], "    ");
    L0["stmessage"] = $.add(L0["stmessage"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "FieldByName", ["TIP"])), "AsString")));
    L0["stmessage"] = $.add(L0["stmessage"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "FieldByName", ["Currency"])), "AsString")));
    { const $t34 = 204;
      L0["j"] = 41;
      let $t35 = true;
      for (;;) {
        if (!$t35) { L0["j"] = $.succ(L0["j"], 1); }
        $t35 = false;
        if (!($.ord(L0["j"]) <= $.ord($t34))) break;
        L0["stmessage"] = $.add(L0["stmessage"], " ");
        await $.tick();
      }
    }
    L0["stmessage"] = $.add(L0["stmessage"], "*");
    if ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "Eof"))))) {
      await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["stmessage"]])));
    }
    L0["tempcur"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "FieldByName", ["Currency"])), "AsString"));
    L0["tempdir"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "FieldByName", ["TIP"])), "AsString"));
    while ($.truthy(((await $.and_((await $.and_(($.lt(L0["i"], (await $.mv((await $.mv((await $.v(C, "DBGrid1")), "SelectedRows")), "Count")))), async () => ($.eq(L0["tempcur"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "FieldByName", ["Currency"])), "AsString")))))), async () => ($.eq(L0["tempdir"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "FieldByName", ["TIP"])), "AsString"))))))))) {
      L0["rowcount"] = $.add(L0["rowcount"], 1);
      L0["rdcount"] = $.add(L0["rdcount"], 1);
      L0["rownum"] = (await $.call(C, "IntToStr", [$.add(L0["rowcount"], 1)]));
      { const $t36 = 5;
        L0["j"] = (await $.call(C, "Length", [L0["rownum"]]));
        let $t37 = true;
        for (;;) {
          if (!$t37) { L0["j"] = $.succ(L0["j"], 1); }
          $t37 = false;
          if (!($.ord(L0["j"]) <= $.ord($t36))) break;
          L0["rownum"] = $.add("0", L0["rownum"]);
          await $.tick();
        }
      }
      L0["stmessage"] = $.add("RD", L0["rownum"]);
      L0["rownum"] = (await $.call(C, "IntToStr", [L0["rdcount"]]));
      { const $t38 = 5;
        L0["j"] = (await $.call(C, "Length", [L0["rownum"]]));
        let $t39 = true;
        for (;;) {
          if (!$t39) { L0["j"] = $.succ(L0["j"], 1); }
          $t39 = false;
          if (!($.ord(L0["j"]) <= $.ord($t38))) break;
          L0["rownum"] = $.add("0", L0["rownum"]);
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["rownum"]);
      L0["rownum"] = (await $.call(C, "FloatToStr", [$.mul(((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "FieldByName", ["Ammount"])), "AsFloat"))), 100)]));
      L0["sumofbalancerd"] = $.add(L0["sumofbalancerd"], (await $.call(C, "StrToFloat", [L0["rownum"]])));
      { const $t40 = 14;
        L0["j"] = (await $.call(C, "Length", [L0["rownum"]]));
        let $t41 = true;
        for (;;) {
          if (!$t41) { L0["j"] = $.succ(L0["j"], 1); }
          $t41 = false;
          if (!($.ord(L0["j"]) <= $.ord($t40))) break;
          L0["rownum"] = $.add("0", L0["rownum"]);
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["rownum"]);
      L0["rownum"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "FieldByName", ["multiacc"])), "AsString"));
      { const $t42 = 31;
        L0["j"] = (await $.call(C, "Length", [L0["rownum"]]));
        let $t43 = true;
        for (;;) {
          if (!$t43) { L0["j"] = $.succ(L0["j"], 1); }
          $t43 = false;
          if (!($.ord(L0["j"]) <= $.ord($t42))) break;
          L0["rownum"] = $.add(L0["rownum"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["rownum"]);
      { const $t44 = 203;
        L0["j"] = 62;
        let $t45 = true;
        for (;;) {
          if (!$t45) { L0["j"] = $.succ(L0["j"], 1); }
          $t45 = false;
          if (!($.ord(L0["j"]) <= $.ord($t44))) break;
          L0["stmessage"] = $.add(L0["stmessage"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], "*");
      await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["stmessage"]])));
      {
        const $t46 = (await $.mv((await $.v(C, "DataMod_CARDS")), "payment"));
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t46], "DataMod_CARDS", C, false)), "mainpacket")), "CallProcedure", ["delete_payment", []])));
        await $.mcall((await $.mv((await $.wv([$t46], "DataMod_CARDS", C, false)), "payment")), "Open", []);
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t46], "DataMod_CARDS", C, false)), "mainpacket")), "CallProcedure", ["insert_payment", [(await $.mv((await $.wcall([$t46], "FieldbyName", ["id"], C)), "asinteger")), (await $.mv((await $.wcall([$t46], "FieldbyName", ["CARDNUMBER"], C)), "AsString")), (await $.mv((await $.wcall([$t46], "FieldbyName", ["RBSNUMBER_1"], C)), "AsString")), (await $.mv((await $.wcall([$t46], "FieldbyName", ["ACCID"], C)), "AsiNTEGER")), (await $.mv((await $.wcall([$t46], "FieldbyName", ["CURRENCY"], C)), "AsString")), (await $.mv((await $.wcall([$t46], "FieldbyName", ["AMMOUNT"], C)), "AsiNTEGER")), (await $.mv((await $.wcall([$t46], "FieldbyName", ["LAMMOUNT"], C)), "AsiNTEGER")), (await $.mv((await $.wcall([$t46], "FieldbyName", ["NAME"], C)), "AsString")), (await $.mv((await $.wcall([$t46], "FieldbyName", ["TIP"], C)), "AsString")), (await $.mv((await $.wcall([$t46], "FieldbyName", ["DAT"], C)), "AsDATETIME")), (await $.mv((await $.wcall([$t46], "FieldbyName", ["OPID"], C)), "AsString")), (await $.mv((await $.wcall([$t46], "FieldbyName", ["COMMITEDOPID"], C)), "AsString")), (await $.mv((await $.wcall([$t46], "FieldbyName", ["FILIAL"], C)), "AsString")), (await $.mv((await $.wcall([$t46], "FieldbyName", ["TIM"], C)), "ASDATETIME"))]])));
      }
      L0["i"] = $.add(L0["i"], 1);
      if ($.truthy($.lt(L0["i"], (await $.mv((await $.mv((await $.v(C, "DBGrid1")), "SelectedRows")), "Count"))))) {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "SelectedRows")), "Items")), [L0["i"]]))]))])));
      }
      await $.tick();
    }
    L0["rowcount"] = $.add(L0["rowcount"], 1);
    L0["rownum"] = (await $.call(C, "IntToStr", [$.add(L0["rowcount"], 1)]));
    { const $t47 = 5;
      L0["j"] = (await $.call(C, "Length", [L0["rownum"]]));
      let $t48 = true;
      for (;;) {
        if (!$t48) { L0["j"] = $.succ(L0["j"], 1); }
        $t48 = false;
        if (!($.ord(L0["j"]) <= $.ord($t47))) break;
        L0["rownum"] = $.add("0", L0["rownum"]);
        await $.tick();
      }
    }
    L0["stmessage"] = $.add("BT", L0["rownum"]);
    L0["rownum"] = (await $.call(C, "IntToStr", [L0["rdcount"]]));
    { const $t49 = 5;
      L0["j"] = (await $.call(C, "Length", [L0["rownum"]]));
      let $t50 = true;
      for (;;) {
        if (!$t50) { L0["j"] = $.succ(L0["j"], 1); }
        $t50 = false;
        if (!($.ord(L0["j"]) <= $.ord($t49))) break;
        L0["rownum"] = $.add("0", L0["rownum"]);
        await $.tick();
      }
    }
    L0["stmessage"] = $.add(L0["stmessage"], L0["rownum"]);
    L0["rownum"] = (await $.call(C, "FloatToStr", [L0["sumofbalancerd"]]));
    { const $t51 = 17;
      L0["j"] = (await $.call(C, "Length", [L0["rownum"]]));
      let $t52 = true;
      for (;;) {
        if (!$t52) { L0["j"] = $.succ(L0["j"], 1); }
        $t52 = false;
        if (!($.ord(L0["j"]) <= $.ord($t51))) break;
        L0["rownum"] = $.add("0", L0["rownum"]);
        await $.tick();
      }
    }
    L0["stmessage"] = $.add(L0["stmessage"], L0["rownum"]);
    { const $t53 = 203;
      L0["j"] = 33;
      let $t54 = true;
      for (;;) {
        if (!$t54) { L0["j"] = $.succ(L0["j"], 1); }
        $t54 = false;
        if (!($.ord(L0["j"]) <= $.ord($t53))) break;
        L0["stmessage"] = $.add(L0["stmessage"], " ");
        await $.tick();
      }
    }
    L0["stmessage"] = $.add(L0["stmessage"], "*");
    await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["stmessage"]])));
    L0["sumofbalance"] = $.add(L0["sumofbalance"], L0["sumofbalancerd"]);
    await $.tick();
  }
  L0["rowcount"] = $.add(L0["rowcount"], 1);
  L0["rownum"] = (await $.call(C, "IntToStr", [$.add(L0["rowcount"], 1)]));
  { const $t55 = 5;
    L0["j"] = (await $.call(C, "Length", [L0["rownum"]]));
    let $t56 = true;
    for (;;) {
      if (!$t56) { L0["j"] = $.succ(L0["j"], 1); }
      $t56 = false;
      if (!($.ord(L0["j"]) <= $.ord($t55))) break;
      L0["rownum"] = $.add("0", L0["rownum"]);
      await $.tick();
    }
  }
  L0["stmessage"] = $.add("FT", L0["rownum"]);
  L0["rownum"] = (await $.call(C, "IntToStr", [L0["bhcount"]]));
  { const $t57 = 5;
    L0["j"] = (await $.call(C, "Length", [L0["rownum"]]));
    let $t58 = true;
    for (;;) {
      if (!$t58) { L0["j"] = $.succ(L0["j"], 1); }
      $t58 = false;
      if (!($.ord(L0["j"]) <= $.ord($t57))) break;
      L0["rownum"] = $.add("0", L0["rownum"]);
      await $.tick();
    }
  }
  L0["stmessage"] = $.add(L0["stmessage"], L0["rownum"]);
  L0["rownum"] = (await $.call(C, "FloatToStr", [L0["sumofbalance"]]));
  { const $t59 = 17;
    L0["j"] = (await $.call(C, "Length", [L0["rownum"]]));
    let $t60 = true;
    for (;;) {
      if (!$t60) { L0["j"] = $.succ(L0["j"], 1); }
      $t60 = false;
      if (!($.ord(L0["j"]) <= $.ord($t59))) break;
      L0["rownum"] = $.add("0", L0["rownum"]);
      await $.tick();
    }
  }
  L0["stmessage"] = $.add(L0["stmessage"], L0["rownum"]);
  { const $t61 = 203;
    L0["j"] = 33;
    let $t62 = true;
    for (;;) {
      if (!$t62) { L0["j"] = $.succ(L0["j"], 1); }
      $t62 = false;
      if (!($.ord(L0["j"]) <= $.ord($t61))) break;
      L0["stmessage"] = $.add(L0["stmessage"], " ");
      await $.tick();
    }
  }
  L0["stmessage"] = $.add(L0["stmessage"], "*");
  await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["stmessage"]])));
  await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t63) => { L0["f"] = $t63; })])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "payment")), "Refresh", []);
  await $.stmt((await $.call(C, "ShowMessage", ["PAYMENT FILE CREATED"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayments", "Button6Click", async function Button6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "f": null, "sumofbalance": 0, "sumofbalancerd": 0, "bhcount": 0, "rdcount": 0, "rowcount": 0, "nom": 0, "i": 0, "j": 0, "filename": '', "fheader": '', "stmessage": '', "rownum": '', "all": '', "tempstr": '', "tempcur": '', "tempdir": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "payment")), "RecordCount")), 0))) {
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "SelectedRows")), "Count")), 0))) {
    return L0.result;
  }
  if ($.truthy($.not((await $.call(C, "DirectoryExists", [$.add("C:\\AZCARD\\OUT\\", (await $.call(C, "FormatDateTime", ["DDMMYY", (await $.v(C, "DATE"))])))]))))) {
    await $.stmt((await $.call(C, "MkDir", [$.add("C:\\AZCARD\\OUT\\", (await $.call(C, "FormatDateTime", ["DDMMYY", (await $.v(C, "DATE"))])))])));
  }
  await $.mset((await $.v(C, "FileListBox1")), "Directory", $.add("C:\\AZCARD\\OUT\\", (await $.call(C, "FormatDateTime", ["DDMMYY", (await $.v(C, "DATE"))]))));
  await $.mcall((await $.v(C, "FileListBox1")), "Update", []);
  L0["nom"] = 0;
  { const $t64 = 999;
    L0["i"] = 1;
    let $t65 = true;
    for (;;) {
      if (!$t65) { L0["i"] = $.succ(L0["i"], 1); }
      $t65 = false;
      if (!($.ord(L0["i"]) <= $.ord($t64))) break;
      L0["all"] = "";
      { const $t66 = 2;
        L0["j"] = (await $.call(C, "Length", [(await $.call(C, "IntToStr", [L0["i"]]))]));
        let $t67 = true;
        for (;;) {
          if (!$t67) { L0["j"] = $.succ(L0["j"], 1); }
          $t67 = false;
          if (!($.ord(L0["j"]) <= $.ord($t66))) break;
          L0["all"] = $.add("_", L0["all"]);
          await $.tick();
        }
      }
      L0["filename"] = $.add($.add($.add($.add($.add($.add($.add("C:\\AZCARD\\OUT\\", (await $.call(C, "FormatDateTime", ["DDMMYY", (await $.v(C, "DATE"))]))), "\\P"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["bankid"])), "asstring"))), L0["all"]), (await $.call(C, "IntToStr", [L0["i"]]))), "."), (await $.call(C, "when2Str", [(await $.v(C, "WhenDay"))])));
      if ($.truthy($.not(((await $.call(C, "FileExists", [L0["filename"]])))))) {
        L0["nom"] = L0["i"];
        break;
      }
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t68) => { L0["f"] = $t68; }), L0["filename"]])));
  await $.stmt((await $.call(C, "Rewrite", [$.ref(async () => L0["f"], async ($t69) => { L0["f"] = $t69; })])));
  L0["fheader"] = "";
  L0["all"] = (await $.call(C, "IntToStr", [L0["nom"]]));
  { const $t70 = 1;
    L0["j"] = (await $.call(C, "length", [L0["all"]]));
    let $t71 = true;
    for (;;) {
      if (!$t71) { L0["j"] = $.succ(L0["j"], 1); }
      $t71 = false;
      if (!($.ord(L0["j"]) <= $.ord($t70))) break;
      L0["all"] = $.add("0", L0["all"]);
      await $.tick();
    }
  }
  L0["fheader"] = $.add($.add($.add($.add($.add($.add($.add($.add("FH000001PAYMENT   12 ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["bankid"])), "asstring"))), "  "), (await $.call(C, "FormatDateTime", ["yyyymmdd", (await $.v(C, "date"))]))), (await $.call(C, "FormatDateTime", ["hhmmss", (await $.v(C, "time"))]))), "00"), L0["all"]), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["bankid"])), "asstring"))), "  RRNBD N");
  { const $t72 = 203;
    L0["j"] = 59;
    let $t73 = true;
    for (;;) {
      if (!$t73) { L0["j"] = $.succ(L0["j"], 1); }
      $t73 = false;
      if (!($.ord(L0["j"]) <= $.ord($t72))) break;
      L0["fheader"] = $.add(L0["fheader"], " ");
      await $.tick();
    }
  }
  L0["fheader"] = $.add(L0["fheader"], "*");
  await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["fheader"]])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "payment")), "First", []);
  L0["sumofbalance"] = 0;
  L0["bhcount"] = 0;
  L0["i"] = 0;
  while ($.truthy(($.lt(L0["i"], (await $.mv((await $.mv((await $.v(C, "DBGrid1")), "SelectedRows")), "Count")))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "SelectedRows")), "Items")), [L0["i"]]))]))])));
    L0["stmessage"] = "";
    L0["rowcount"] = 0;
    L0["bhcount"] = $.add(L0["bhcount"], 1);
    L0["rdcount"] = 0;
    L0["sumofbalancerd"] = 0;
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t74) => { L0["f"] = $t74; })])));
    while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
      L0["rowcount"] = $.add(L0["rowcount"], 1);
      await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t75) => { L0["f"] = $t75; })])));
      await $.tick();
    }
    await $.stmt((await $.call(C, "Append", [$.ref(async () => L0["f"], async ($t76) => { L0["f"] = $t76; })])));
    L0["rownum"] = (await $.call(C, "IntToStr", [$.add(L0["rowcount"], 1)]));
    { const $t77 = 5;
      L0["j"] = (await $.call(C, "Length", [L0["rownum"]]));
      let $t78 = true;
      for (;;) {
        if (!$t78) { L0["j"] = $.succ(L0["j"], 1); }
        $t78 = false;
        if (!($.ord(L0["j"]) <= $.ord($t77))) break;
        L0["rownum"] = $.add("0", L0["rownum"]);
        await $.tick();
      }
    }
    L0["rdcount"] = 0;
    L0["tempcur"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "FieldByName", ["Currency"])), "AsString"));
    L0["tempdir"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "FieldByName", ["TIP"])), "AsString"));
    L0["stmessage"] = $.add("BH", L0["rownum"]);
    L0["rownum"] = (await $.call(C, "IntToStr", [L0["bhcount"]]));
    { const $t79 = 5;
      L0["j"] = (await $.call(C, "Length", [L0["rownum"]]));
      let $t80 = true;
      for (;;) {
        if (!$t80) { L0["j"] = $.succ(L0["j"], 1); }
        $t80 = false;
        if (!($.ord(L0["j"]) <= $.ord($t79))) break;
        L0["rownum"] = $.add("0", L0["rownum"]);
        await $.tick();
      }
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "FieldByName", ["TIP"])), "AsString")), "D"))) {
      L0["tempstr"] = "PAYFACC";
    } else {
      L0["tempstr"] = "PAYACC";
    }
    { const $t81 = 11;
      L0["j"] = (await $.call(C, "Length", [L0["tempstr"]]));
      let $t82 = true;
      for (;;) {
        if (!$t82) { L0["j"] = $.succ(L0["j"], 1); }
        $t82 = false;
        if (!($.ord(L0["j"]) <= $.ord($t81))) break;
        L0["tempstr"] = $.add(L0["tempstr"], " ");
        await $.tick();
      }
    }
    L0["stmessage"] = $.add($.add($.add($.add(L0["stmessage"], L0["rownum"]), "    "), L0["tempstr"]), " ");
    L0["stmessage"] = $.add(L0["stmessage"], "    ");
    L0["stmessage"] = $.add(L0["stmessage"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "FieldByName", ["TIP"])), "AsString")));
    L0["stmessage"] = $.add(L0["stmessage"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "FieldByName", ["Currency"])), "AsString")));
    { const $t83 = 204;
      L0["j"] = 41;
      let $t84 = true;
      for (;;) {
        if (!$t84) { L0["j"] = $.succ(L0["j"], 1); }
        $t84 = false;
        if (!($.ord(L0["j"]) <= $.ord($t83))) break;
        L0["stmessage"] = $.add(L0["stmessage"], " ");
        await $.tick();
      }
    }
    L0["stmessage"] = $.add(L0["stmessage"], "*");
    if ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "Eof"))))) {
      await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["stmessage"]])));
    }
    L0["tempcur"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "FieldByName", ["Currency"])), "AsString"));
    L0["tempdir"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "FieldByName", ["TIP"])), "AsString"));
    while ($.truthy(((await $.and_((await $.and_(($.lt(L0["i"], (await $.mv((await $.mv((await $.v(C, "DBGrid1")), "SelectedRows")), "Count")))), async () => ($.eq(L0["tempcur"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "FieldByName", ["Currency"])), "AsString")))))), async () => ($.eq(L0["tempdir"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "FieldByName", ["TIP"])), "AsString"))))))))) {
      L0["rowcount"] = $.add(L0["rowcount"], 1);
      L0["rdcount"] = $.add(L0["rdcount"], 1);
      L0["rownum"] = (await $.call(C, "IntToStr", [$.add(L0["rowcount"], 1)]));
      { const $t85 = 5;
        L0["j"] = (await $.call(C, "Length", [L0["rownum"]]));
        let $t86 = true;
        for (;;) {
          if (!$t86) { L0["j"] = $.succ(L0["j"], 1); }
          $t86 = false;
          if (!($.ord(L0["j"]) <= $.ord($t85))) break;
          L0["rownum"] = $.add("0", L0["rownum"]);
          await $.tick();
        }
      }
      L0["stmessage"] = $.add("RD", L0["rownum"]);
      L0["rownum"] = (await $.call(C, "IntToStr", [L0["rdcount"]]));
      { const $t87 = 5;
        L0["j"] = (await $.call(C, "Length", [L0["rownum"]]));
        let $t88 = true;
        for (;;) {
          if (!$t88) { L0["j"] = $.succ(L0["j"], 1); }
          $t88 = false;
          if (!($.ord(L0["j"]) <= $.ord($t87))) break;
          L0["rownum"] = $.add("0", L0["rownum"]);
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["rownum"]);
      L0["rownum"] = (await $.call(C, "FloatToStr", [$.mul(((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "FieldByName", ["Ammount"])), "AsFloat"))), 100)]));
      L0["sumofbalancerd"] = $.add(L0["sumofbalancerd"], (await $.call(C, "StrToFloat", [L0["rownum"]])));
      { const $t89 = 14;
        L0["j"] = (await $.call(C, "Length", [L0["rownum"]]));
        let $t90 = true;
        for (;;) {
          if (!$t90) { L0["j"] = $.succ(L0["j"], 1); }
          $t90 = false;
          if (!($.ord(L0["j"]) <= $.ord($t89))) break;
          L0["rownum"] = $.add("0", L0["rownum"]);
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["rownum"]);
      L0["rownum"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "FieldByName", ["multiacc"])), "AsString"));
      { const $t91 = 31;
        L0["j"] = (await $.call(C, "Length", [L0["rownum"]]));
        let $t92 = true;
        for (;;) {
          if (!$t92) { L0["j"] = $.succ(L0["j"], 1); }
          $t92 = false;
          if (!($.ord(L0["j"]) <= $.ord($t91))) break;
          L0["rownum"] = $.add(L0["rownum"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["rownum"]);
      { const $t93 = 203;
        L0["j"] = 62;
        let $t94 = true;
        for (;;) {
          if (!$t94) { L0["j"] = $.succ(L0["j"], 1); }
          $t94 = false;
          if (!($.ord(L0["j"]) <= $.ord($t93))) break;
          L0["stmessage"] = $.add(L0["stmessage"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], "*");
      await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["stmessage"]])));
      {
        const $t95 = (await $.mv((await $.v(C, "DataMod_CARDS")), "payment"));
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t95], "DataMod_CARDS", C, false)), "mainpacket")), "CallProcedure", ["delete_payment", []])));
        await $.mcall((await $.mv((await $.wv([$t95], "DataMod_CARDS", C, false)), "payment")), "Open", []);
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t95], "DataMod_CARDS", C, false)), "mainpacket")), "CallProcedure", ["insert_payment", [(await $.mv((await $.wcall([$t95], "FieldbyName", ["id"], C)), "asinteger")), (await $.mv((await $.wcall([$t95], "FieldbyName", ["CARDNUMBER"], C)), "AsString")), (await $.mv((await $.wcall([$t95], "FieldbyName", ["RBSNUMBER_1"], C)), "AsString")), (await $.mv((await $.wcall([$t95], "FieldbyName", ["ACCID"], C)), "AsiNTEGER")), (await $.mv((await $.wcall([$t95], "FieldbyName", ["CURRENCY"], C)), "AsString")), (await $.mv((await $.wcall([$t95], "FieldbyName", ["AMMOUNT"], C)), "AsiNTEGER")), (await $.mv((await $.wcall([$t95], "FieldbyName", ["LAMMOUNT"], C)), "AsiNTEGER")), (await $.mv((await $.wcall([$t95], "FieldbyName", ["NAME"], C)), "AsString")), (await $.mv((await $.wcall([$t95], "FieldbyName", ["TIP"], C)), "AsString")), (await $.mv((await $.wcall([$t95], "FieldbyName", ["DAT"], C)), "AsDATETIME")), (await $.mv((await $.wcall([$t95], "FieldbyName", ["OPID"], C)), "AsString")), (await $.mv((await $.wcall([$t95], "FieldbyName", ["COMMITEDOPID"], C)), "AsString")), (await $.mv((await $.wcall([$t95], "FieldbyName", ["FILIAL"], C)), "AsString")), (await $.mv((await $.wcall([$t95], "FieldbyName", ["TIM"], C)), "ASDATETIME"))]])));
      }
      L0["i"] = $.add(L0["i"], 1);
      if ($.truthy($.lt(L0["i"], (await $.mv((await $.mv((await $.v(C, "DBGrid1")), "SelectedRows")), "Count"))))) {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Payment")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "SelectedRows")), "Items")), [L0["i"]]))]))])));
      }
      await $.tick();
    }
    L0["rowcount"] = $.add(L0["rowcount"], 1);
    L0["rownum"] = (await $.call(C, "IntToStr", [$.add(L0["rowcount"], 1)]));
    { const $t96 = 5;
      L0["j"] = (await $.call(C, "Length", [L0["rownum"]]));
      let $t97 = true;
      for (;;) {
        if (!$t97) { L0["j"] = $.succ(L0["j"], 1); }
        $t97 = false;
        if (!($.ord(L0["j"]) <= $.ord($t96))) break;
        L0["rownum"] = $.add("0", L0["rownum"]);
        await $.tick();
      }
    }
    L0["stmessage"] = $.add("BT", L0["rownum"]);
    L0["rownum"] = (await $.call(C, "IntToStr", [L0["rdcount"]]));
    { const $t98 = 5;
      L0["j"] = (await $.call(C, "Length", [L0["rownum"]]));
      let $t99 = true;
      for (;;) {
        if (!$t99) { L0["j"] = $.succ(L0["j"], 1); }
        $t99 = false;
        if (!($.ord(L0["j"]) <= $.ord($t98))) break;
        L0["rownum"] = $.add("0", L0["rownum"]);
        await $.tick();
      }
    }
    L0["stmessage"] = $.add(L0["stmessage"], L0["rownum"]);
    L0["rownum"] = (await $.call(C, "FloatToStr", [L0["sumofbalancerd"]]));
    { const $t100 = 17;
      L0["j"] = (await $.call(C, "Length", [L0["rownum"]]));
      let $t101 = true;
      for (;;) {
        if (!$t101) { L0["j"] = $.succ(L0["j"], 1); }
        $t101 = false;
        if (!($.ord(L0["j"]) <= $.ord($t100))) break;
        L0["rownum"] = $.add("0", L0["rownum"]);
        await $.tick();
      }
    }
    L0["stmessage"] = $.add(L0["stmessage"], L0["rownum"]);
    { const $t102 = 203;
      L0["j"] = 33;
      let $t103 = true;
      for (;;) {
        if (!$t103) { L0["j"] = $.succ(L0["j"], 1); }
        $t103 = false;
        if (!($.ord(L0["j"]) <= $.ord($t102))) break;
        L0["stmessage"] = $.add(L0["stmessage"], " ");
        await $.tick();
      }
    }
    L0["stmessage"] = $.add(L0["stmessage"], "*");
    await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["stmessage"]])));
    L0["sumofbalance"] = $.add(L0["sumofbalance"], L0["sumofbalancerd"]);
    await $.tick();
  }
  L0["rowcount"] = $.add(L0["rowcount"], 1);
  L0["rownum"] = (await $.call(C, "IntToStr", [$.add(L0["rowcount"], 1)]));
  { const $t104 = 5;
    L0["j"] = (await $.call(C, "Length", [L0["rownum"]]));
    let $t105 = true;
    for (;;) {
      if (!$t105) { L0["j"] = $.succ(L0["j"], 1); }
      $t105 = false;
      if (!($.ord(L0["j"]) <= $.ord($t104))) break;
      L0["rownum"] = $.add("0", L0["rownum"]);
      await $.tick();
    }
  }
  L0["stmessage"] = $.add("FT", L0["rownum"]);
  L0["rownum"] = (await $.call(C, "IntToStr", [L0["bhcount"]]));
  { const $t106 = 5;
    L0["j"] = (await $.call(C, "Length", [L0["rownum"]]));
    let $t107 = true;
    for (;;) {
      if (!$t107) { L0["j"] = $.succ(L0["j"], 1); }
      $t107 = false;
      if (!($.ord(L0["j"]) <= $.ord($t106))) break;
      L0["rownum"] = $.add("0", L0["rownum"]);
      await $.tick();
    }
  }
  L0["stmessage"] = $.add(L0["stmessage"], L0["rownum"]);
  L0["rownum"] = (await $.call(C, "FloatToStr", [L0["sumofbalance"]]));
  { const $t108 = 17;
    L0["j"] = (await $.call(C, "Length", [L0["rownum"]]));
    let $t109 = true;
    for (;;) {
      if (!$t109) { L0["j"] = $.succ(L0["j"], 1); }
      $t109 = false;
      if (!($.ord(L0["j"]) <= $.ord($t108))) break;
      L0["rownum"] = $.add("0", L0["rownum"]);
      await $.tick();
    }
  }
  L0["stmessage"] = $.add(L0["stmessage"], L0["rownum"]);
  { const $t110 = 203;
    L0["j"] = 33;
    let $t111 = true;
    for (;;) {
      if (!$t111) { L0["j"] = $.succ(L0["j"], 1); }
      $t111 = false;
      if (!($.ord(L0["j"]) <= $.ord($t110))) break;
      L0["stmessage"] = $.add(L0["stmessage"], " ");
      await $.tick();
    }
  }
  L0["stmessage"] = $.add(L0["stmessage"], "*");
  await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["stmessage"]])));
  await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t112) => { L0["f"] = $t112; })])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "payment")), "Refresh", []);
  await $.stmt((await $.call(C, "ShowMessage", ["PAYMENT FILE CREATED"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayments", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
    await $.mset((await $.v(C, "Edit1")), "Enabled", true);
    await $.mset((await $.v(C, "Edit2")), "Enabled", true);
    await $.mset((await $.v(C, "Edit3")), "Enabled", true);
    await $.mset((await $.v(C, "DBLookupComboBox1")), "Enabled", true);
    await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", 0);
    await $.mset((await $.v(C, "DBLookupComboBox2")), "Enabled", true);
    await $.mset((await $.v(C, "DBLookupComboBox2")), "KeyValue", 0);
    {
      const $t113 = (await $.mv((await $.v(C, "DataMod_CARDS")), "payment"));
      await $.wset([$t113], "Filter", $.add($.add($.add("FILIAL = '", (await $.mv((await $.wv([$t113], "DBLookupComboBox1", C, false)), "Text"))), ("*")), "'"), C);
    }
  } else {
    await $.mset((await $.v(C, "Edit1")), "Enabled", false);
    await $.mset((await $.v(C, "Edit2")), "Enabled", false);
    await $.mset((await $.v(C, "Edit3")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupComboBox1")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", 0);
    await $.mset((await $.v(C, "DBLookupComboBox2")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupComboBox2")), "Keyvalue", 0);
    {
      const $t114 = (await $.mv((await $.v(C, "DataMod_CARDS")), "payment"));
      await $.wset([$t114], "Filter", $.add($.add($.add("FILIAL = '", (await $.mv((await $.wv([$t114], "DBLookupComboBox1", C, false)), "Text"))), ("*")), "'"), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
