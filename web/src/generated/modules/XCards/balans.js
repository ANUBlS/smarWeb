// Generated from balans.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("balans", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "ToolWin", "ExtCtrls", "ImgList", "Grids", "DBGrids", "StdCtrls", "oracledata", "FileCtrl", "CMExcelExport", "Unit18", "payment", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TBalance", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "button4": {"name": "Button4", "type": "TButton"}, "button5": {"name": "Button5", "type": "TButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "filelistbox1": {"name": "FileListBox1", "type": "TFileListBox"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "animate1": {"name": "Animate1", "type": "TAnimate"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "memo1": {"name": "Memo1", "type": "TMemo"}}, {});
  U.init(async () => {
    U.var_("Balance", null, "TBalance");
  });
  U.method("TBalance", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
    await $.mset((await $.v(C, "edit1")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "edit1")), "Enabled", false);
  }
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.v(C, "date")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalance", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalance", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
    await $.mset((await $.v(C, "edit1")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "edit1")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalance", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["cardbalansopen"]])));
  await $.mset((await $.v(C, "Animate1")), "Visible", true);
  await $.mset((await $.v(C, "Animate1")), "Active", true);
  await $.stmt((await $.mcall((await $.v(C, "Animate1")), "Play", [0, 0, 1])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "balans")), "Open", []);
  await $.mset((await $.v(C, "Animate1")), "active", false);
  await $.mset((await $.v(C, "Animate1")), "Visible", false);
  await $.mcall((await $.v(C, "Animate1")), "Stop", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("when2Str", async function when2Str(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"wday": $.copyArg(p0), result: '', "wd": ''};
  await $.fixArgs(L0, ["wday"]);
  L0["wd"] = (await $.call(C, "InttoStr", [L0["wday"]]));
  { const $t1 = (await $.call(C, "length", [L0["wd"]]));
    if ($.eq($t1, 1)) {
      L0["wd"] = $.add("00", L0["wd"]);
    }
    else if ($.eq($t1, 2)) {
      L0["wd"] = $.add("0", L0["wd"]);
    }
  }
  L0.result = L0["wd"];
  return L0.result;
}, {"params": ["wday"], "kind": "function", "ptypes": ["integer"]});
  U.func("whenday2", async function whenday2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dat": $.copyArg(p0), result: 0, "wday": 0, "feb": 0};
  await $.fixArgs(L0, ["dat"]);
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
  if ($.truthy((await $.call(C, "IsLeapYear", [(await $.call(C, "strtoint", [(await $.call(C, "FormatDateTime", ["yyyy", L0["dat"]]))]))])))) {
    L0["feb"] = 29;
  } else {
    L0["feb"] = 28;
  }
  { const $t2 = (await $.call(C, "strtoint", [(await $.call(C, "FormatDateTime", ["mm", L0["dat"]]))]));
    if ($.eq($t2, 1)) {
      L0["wday"] = (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", L0["dat"]]))]));
    }
    else if ($.eq($t2, 2)) {
      L0["wday"] = $.add(L0["yan"], (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", L0["dat"]]))])));
    }
    else if ($.eq($t2, 3)) {
      L0["wday"] = $.add($.add(L0["yan"], L0["feb"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", L0["dat"]]))])));
    }
    else if ($.eq($t2, 4)) {
      L0["wday"] = $.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", L0["dat"]]))])));
    }
    else if ($.eq($t2, 5)) {
      L0["wday"] = $.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", L0["dat"]]))])));
    }
    else if ($.eq($t2, 6)) {
      L0["wday"] = $.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", L0["dat"]]))])));
    }
    else if ($.eq($t2, 7)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", L0["dat"]]))])));
    }
    else if ($.eq($t2, 8)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", L0["dat"]]))])));
    }
    else if ($.eq($t2, 9)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", L0["dat"]]))])));
    }
    else if ($.eq($t2, 10)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", L0["dat"]]))])));
    }
    else if ($.eq($t2, 11)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"]), L0["okt"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", L0["dat"]]))])));
    }
    else if ($.eq($t2, 12)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"]), L0["okt"]), L0["nov"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", L0["dat"]]))])));
    }
  }
  L0["result"] = L0["wday"];
  return L0.result;
}, {"params": ["dat"], "kind": "function", "ptypes": ["tdatetime"]});
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
  { const $t3 = (await $.call(C, "strtoint", [(await $.call(C, "FormatDateTime", ["mm", (await $.v(C, "date"))]))]));
    if ($.eq($t3, 1)) {
      L0["wday"] = (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))]));
    }
    else if ($.eq($t3, 2)) {
      L0["wday"] = $.add(L0["yan"], (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t3, 3)) {
      L0["wday"] = $.add($.add(L0["yan"], L0["feb"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t3, 4)) {
      L0["wday"] = $.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t3, 5)) {
      L0["wday"] = $.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t3, 6)) {
      L0["wday"] = $.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t3, 7)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t3, 8)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t3, 9)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t3, 10)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t3, 11)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"]), L0["okt"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t3, 12)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"]), L0["okt"]), L0["nov"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
  }
  L0["result"] = L0["wday"];
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("ViewBalanceSign", async function ViewBalanceSign(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"balance": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["balance"]);
  if ($.truthy($.eq(L0["balance"], 0))) {
    L0["result"] = "N";
  }
  if ($.truthy($.gt(L0["balance"], 0))) {
    L0["result"] = "C";
  }
  if ($.truthy($.lt(L0["balance"], 0))) {
    L0["result"] = "D";
  }
  return L0.result;
}, {"params": ["Balance"], "kind": "function", "ptypes": ["real"]});
  U.func("insertzero", async function insertzero(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"acc": $.copyArg(p0), result: '', "modpart": '', "s": '', "dempos": 0};
  await $.fixArgs(L0, ["acc"]);
  L0["result"] = "";
  L0["result"] = (await $.call(C, "inttostr", [(await $.call(C, "trunc", [L0["acc"]]))]));
  L0["s"] = (await $.call(C, "FloatToStr", [L0["acc"]]));
  L0["dempos"] = (await $.call(C, "pos", [(await $.v(C, "DecimalSeparator")), L0["s"]]));
  if ($.truthy($.eq(L0["dempos"], 0))) {
    L0["modpart"] = "00";
  } else {
    if ($.truthy($.eq((await $.call(C, "length", [(await $.call(C, "copy", [L0["s"], $.add(L0["dempos"], 1), $.sub((await $.call(C, "length", [L0["s"]])), L0["dempos"])]))])), 1))) {
      L0["modpart"] = $.add((await $.call(C, "copy", [L0["s"], $.add(L0["dempos"], 1), $.sub((await $.call(C, "length", [L0["s"]])), L0["dempos"])])), "0");
    } else {
      if ($.truthy($.eq((await $.call(C, "length", [(await $.call(C, "copy", [L0["s"], $.add(L0["dempos"], 1), $.sub((await $.call(C, "length", [L0["s"]])), L0["dempos"])]))])), 2))) {
        L0["modpart"] = (await $.call(C, "copy", [L0["s"], $.add(L0["dempos"], 1), $.sub((await $.call(C, "length", [L0["s"]])), L0["dempos"])]));
      }
    }
  }
  L0["result"] = $.add(L0["result"], L0["modpart"]);
  return L0.result;
}, {"params": ["acc"], "kind": "function", "ptypes": ["real"]});
  U.func("DirectoryExists", async function DirectoryExists(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: false, "code": 0};
  await $.fixArgs(L0, ["name"]);
  L0["code"] = (await $.call(C, "GetFileAttributes", [(await $.call(C, "PChar", [L0["name"]]))]));
  L0["result"] = (await $.and_(($.ne(L0["code"], (-(1)))), async () => ($.ne((await $.and_((await $.v(C, "FILE_ATTRIBUTE_DIRECTORY")), async () => L0["code"])), 0))));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["String"]});
  U.method("TBalance", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "f": null, "num": 0, "j": 0, "i": 0, "rowcount": 0, "stmessage": '', "tempstr": '', "filename": '', "fileheader": '', "filefooter": '', "rownum": '', "v_dir": '', "balancesum": 0, "ods": null};
  await $.fixArgs(L0, ["sender"]);
  L0["v_dir"] = (await $.v(C, "GetCurrentDir"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["cardbalanscreatefile"]])));
  L0["ods"] = (await $.mv((await $.v(C, "DataMod_CARDS")), "balans"));
  await $.mcall(L0["ods"], "Close", []);
  await $.mcall(L0["ods"], "Open", []);
  if ($.truthy($.eq((await $.mv(L0["ods"], "RecordCount")), 0))) {
    return L0.result;
  }
  if ($.truthy($.not((await $.call(C, "DirectoryExists", [$.add("C:\\AZCARD\\OUT\\", (await $.call(C, "FormatDateTime", ["DDMMYY", (await $.mv((await $.v(C, "datetimepicker1")), "datetime"))])))]))))) {
    await $.stmt((await $.call(C, "MkDir", [$.add("C:\\AZCARD\\OUT\\", (await $.call(C, "FormatDateTime", ["DDMMYY", (await $.mv((await $.v(C, "datetimepicker1")), "datetime"))])))])));
  }
  await $.mset((await $.v(C, "FileListBox1")), "Directory", $.add("C:\\AZCARD\\OUT\\", (await $.call(C, "FormatDateTime", ["DDMMYY", (await $.mv((await $.v(C, "datetimepicker1")), "datetime"))]))));
  await $.mcall((await $.v(C, "FileListBox1")), "Update", []);
  L0["num"] = 0;
  { const $t4 = 999;
    L0["i"] = 1;
    let $t5 = true;
    for (;;) {
      if (!$t5) { L0["i"] = $.succ(L0["i"], 1); }
      $t5 = false;
      if (!($.ord(L0["i"]) <= $.ord($t4))) break;
      L0["tempstr"] = "";
      { const $t6 = 2;
        L0["j"] = (await $.call(C, "Length", [(await $.call(C, "IntToStr", [L0["i"]]))]));
        let $t7 = true;
        for (;;) {
          if (!$t7) { L0["j"] = $.succ(L0["j"], 1); }
          $t7 = false;
          if (!($.ord(L0["j"]) <= $.ord($t6))) break;
          L0["tempstr"] = $.add("_", L0["tempstr"]);
          await $.tick();
        }
      }
      L0["filename"] = $.add($.add($.add($.add($.add($.add($.add("C:\\AZCARD\\OUT\\", (await $.call(C, "FormatDateTime", ["DDMMYY", (await $.mv((await $.v(C, "datetimepicker1")), "datetime"))]))), "\\b"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["bankid"])), "asstring"))), L0["tempstr"]), (await $.call(C, "IntToStr", [L0["i"]]))), "."), (await $.call(C, "when2Str", [(await $.call(C, "whenday2", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))])));
      if ($.truthy($.not(((await $.call(C, "FileExists", [L0["filename"]])))))) {
        L0["num"] = L0["i"];
        break;
      }
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t8) => { L0["f"] = $t8; }), L0["filename"]])));
  await $.stmt((await $.call(C, "Rewrite", [$.ref(async () => L0["f"], async ($t9) => { L0["f"] = $t9; })])));
  L0["fileheader"] = "";
  L0["tempstr"] = (await $.call(C, "IntToStr", [L0["num"]]));
  { const $t10 = 1;
    L0["j"] = (await $.call(C, "Length", [L0["tempstr"]]));
    let $t11 = true;
    for (;;) {
      if (!$t11) { L0["j"] = $.succ(L0["j"], 1); }
      $t11 = false;
      if (!($.ord(L0["j"]) <= $.ord($t10))) break;
      L0["tempstr"] = $.add("0", L0["tempstr"]);
      await $.tick();
    }
  }
  L0["fileheader"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("FH000001BALANCE   20 ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["bankid"])), "asstring"))), "  "), (await $.call(C, "FormatDateTime", ["yyyymmdd", (await $.mv((await $.v(C, "datetimepicker1")), "datetime"))]))), (await $.call(C, "FormatDateTime", ["hhmmss", (await $.v(C, "time"))]))), "00"), L0["tempstr"]), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["bankid"])), "asstring"))), "  BA"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["bankid"])), "asstring"))), "          "), (await $.call(C, "FormatDateTime", ["yyyymmdd", (await $.mv((await $.v(C, "datetimepicker1")), "datetime"))]))), "FRND");
  { const $t12 = 169;
    L0["j"] = 80;
    let $t13 = true;
    for (;;) {
      if (!$t13) { L0["j"] = $.succ(L0["j"], 1); }
      $t13 = false;
      if (!($.ord(L0["j"]) <= $.ord($t12))) break;
      L0["fileheader"] = $.add(L0["fileheader"], " ");
      await $.tick();
    }
  }
  L0["fileheader"] = $.add(L0["fileheader"], "*");
  await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["fileheader"]])));
  L0["balancesum"] = 0;
  { const $t14 = $.sub((await $.mv(L0["ods"], "RecordCount")), 1);
    L0["i"] = 0;
    let $t15 = true;
    for (;;) {
      if (!$t15) { L0["i"] = $.succ(L0["i"], 1); }
      $t15 = false;
      if (!($.ord(L0["i"]) <= $.ord($t14))) break;
      L0["stmessage"] = "";
      L0["rowcount"] = 0;
      await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t16) => { L0["f"] = $t16; })])));
      while ($.truthy($.not((await $.call(C, "Eof", [L0["f"]]))))) {
        L0["rowcount"] = $.add(L0["rowcount"], 1);
        await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t17) => { L0["f"] = $t17; })])));
        await $.tick();
      }
      await $.stmt((await $.call(C, "Append", [$.ref(async () => L0["f"], async ($t18) => { L0["f"] = $t18; })])));
      L0["rownum"] = (await $.call(C, "IntToStr", [$.add(L0["rowcount"], 1)]));
      { const $t19 = 5;
        L0["j"] = (await $.call(C, "Length", [L0["rownum"]]));
        let $t20 = true;
        for (;;) {
          if (!$t20) { L0["j"] = $.succ(L0["j"], 1); }
          $t20 = false;
          if (!($.ord(L0["j"]) <= $.ord($t19))) break;
          L0["rownum"] = $.add("0", L0["rownum"]);
          await $.tick();
        }
      }
      L0["stmessage"] = $.add("RD", L0["rownum"]);
      L0["tempstr"] = (await $.call(C, "copy", [(await $.mv((await $.mcall(L0["ods"], "FieldByName", ["multi_acc"])), "AsString")), 1, (await $.call(C, "Length", [(await $.mv((await $.mcall(L0["ods"], "FieldByName", ["multi_acc"])), "AsString"))]))]));
      { const $t21 = 31;
        L0["j"] = (await $.call(C, "Length", [L0["tempstr"]]));
        let $t22 = true;
        for (;;) {
          if (!$t22) { L0["j"] = $.succ(L0["j"], 1); }
          $t22 = false;
          if (!($.ord(L0["j"]) <= $.ord($t21))) break;
          L0["tempstr"] = $.add(L0["tempstr"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["tempstr"]);
      { const $t23 = 100;
        L0["j"] = 41;
        let $t24 = true;
        for (;;) {
          if (!$t24) { L0["j"] = $.succ(L0["j"], 1); }
          $t24 = false;
          if (!($.ord(L0["j"]) <= $.ord($t23))) break;
          L0["stmessage"] = $.add(L0["stmessage"], " ");
          await $.tick();
        }
      }
      L0["tempstr"] = "";
      if ($.truthy($.eq((await $.mv((await $.mcall(L0["ods"], "FieldByName", ["Currency"])), "AsString")), "AZN"))) {
        L0["tempstr"] = "944";
      } else {
        if ($.truthy($.eq((await $.mv((await $.mcall(L0["ods"], "FieldByName", ["Currency"])), "AsString")), "EUR"))) {
          L0["tempstr"] = "978";
        } else {
          if ($.truthy($.eq((await $.mv((await $.mcall(L0["ods"], "FieldByName", ["Currency"])), "AsString")), "USD"))) {
            L0["tempstr"] = "840";
          }
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["tempstr"]);
      L0["tempstr"] = (await $.mv((await $.mcall(L0["ods"], "FieldByName", ["Ostat"])), "AsString"));
      L0["tempstr"] = (await $.call(C, "StringReplace", [L0["tempstr"], ".", "", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]));
      L0["tempstr"] = (await $.call(C, "StringReplace", [L0["tempstr"], "-", "", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]));
      { const $t25 = 14;
        L0["j"] = (await $.call(C, "length", [L0["tempstr"]]));
        let $t26 = true;
        for (;;) {
          if (!$t26) { L0["j"] = $.succ(L0["j"], 1); }
          $t26 = false;
          if (!($.ord(L0["j"]) <= $.ord($t25))) break;
          L0["tempstr"] = $.add("0", L0["tempstr"]);
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["tempstr"]);
      if ($.truthy($.eq((await $.call(C, "ViewBalanceSign", [(await $.mv((await $.mcall(L0["ods"], "FieldByName", ["Ostat"])), "AsFloat"))])), "C"))) {
        L0["tempstr"] = "C  ";
      } else {
        if ($.truthy($.eq((await $.call(C, "ViewBalanceSign", [(await $.mv((await $.mcall(L0["ods"], "FieldByName", ["Ostat"])), "AsFloat"))])), "D"))) {
          L0["tempstr"] = "D  ";
        } else {
          if ($.truthy($.eq((await $.call(C, "ViewBalanceSign", [(await $.mv((await $.mcall(L0["ods"], "FieldByName", ["Ostat"])), "AsFloat"))])), "N"))) {
            L0["tempstr"] = "   ";
          }
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["tempstr"]);
      { const $t27 = 169;
        L0["j"] = 122;
        let $t28 = true;
        for (;;) {
          if (!$t28) { L0["j"] = $.succ(L0["j"], 1); }
          $t28 = false;
          if (!($.ord(L0["j"]) <= $.ord($t27))) break;
          L0["stmessage"] = $.add(L0["stmessage"], "0");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], "*");
      await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["stmessage"]])));
      L0["balancesum"] = $.add(L0["balancesum"], (await $.call(C, "StrToFloat", [(await $.call(C, "InsertZero", [(await $.call(C, "abs", [(await $.mv((await $.mcall(L0["ods"], "FieldByName", ["Ostat"])), "AsFloat"))]))]))])));
      await $.mcall(L0["ods"], "Next", []);
      await $.tick();
    }
  }
  L0["filefooter"] = "";
  L0["tempstr"] = "";
  L0["rowcount"] = 0;
  await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t29) => { L0["f"] = $t29; })])));
  while ($.truthy($.not((await $.call(C, "Eof", [L0["f"]]))))) {
    L0["rowcount"] = $.add(L0["rowcount"], 1);
    await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t30) => { L0["f"] = $t30; })])));
    await $.tick();
  }
  await $.stmt((await $.call(C, "Append", [$.ref(async () => L0["f"], async ($t31) => { L0["f"] = $t31; })])));
  L0["filefooter"] = "FT";
  L0["tempstr"] = (await $.call(C, "IntToStr", [$.add(L0["rowcount"], 1)]));
  { const $t32 = 5;
    L0["i"] = (await $.call(C, "Length", [L0["tempstr"]]));
    let $t33 = true;
    for (;;) {
      if (!$t33) { L0["i"] = $.succ(L0["i"], 1); }
      $t33 = false;
      if (!($.ord(L0["i"]) <= $.ord($t32))) break;
      L0["tempstr"] = $.add("0", L0["tempstr"]);
      await $.tick();
    }
  }
  L0["filefooter"] = $.add(L0["filefooter"], L0["tempstr"]);
  L0["tempstr"] = (await $.call(C, "IntToStr", [$.sub(L0["rowcount"], 1)]));
  { const $t34 = 5;
    L0["i"] = (await $.call(C, "Length", [L0["tempstr"]]));
    let $t35 = true;
    for (;;) {
      if (!$t35) { L0["i"] = $.succ(L0["i"], 1); }
      $t35 = false;
      if (!($.ord(L0["i"]) <= $.ord($t34))) break;
      L0["tempstr"] = $.add("0", L0["tempstr"]);
      await $.tick();
    }
  }
  L0["filefooter"] = $.add(L0["filefooter"], L0["tempstr"]);
  L0["tempstr"] = "";
  L0["tempstr"] = (await $.call(C, "FloatToStr", [$.fdiv(L0["balancesum"], 100)]));
  { const $t36 = 17;
    L0["j"] = (await $.call(C, "Length", [L0["tempstr"]]));
    let $t37 = true;
    for (;;) {
      if (!$t37) { L0["j"] = $.succ(L0["j"], 1); }
      $t37 = false;
      if (!($.ord(L0["j"]) <= $.ord($t36))) break;
      L0["tempstr"] = $.add("0", L0["tempstr"]);
      await $.tick();
    }
  }
  L0["filefooter"] = $.add(L0["filefooter"], L0["tempstr"]);
  { const $t38 = 169;
    L0["j"] = 33;
    let $t39 = true;
    for (;;) {
      if (!$t39) { L0["j"] = $.succ(L0["j"], 1); }
      $t39 = false;
      if (!($.ord(L0["j"]) <= $.ord($t38))) break;
      L0["filefooter"] = $.add(L0["filefooter"], " ");
      await $.tick();
    }
  }
  L0["filefooter"] = $.add(L0["filefooter"], "*");
  await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["filefooter"]])));
  await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t40) => { L0["f"] = $t40; })])));
  await $.stmt((await $.call(C, "ShowMessage", ["BALANCE FILE CREATED"])));
  await $.mset((await $.v(C, "FileListBox1")), "Directory", L0["v_dir"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalance", "Button5Click", async function Button5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["cardbalansclose"]])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "balans")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalance", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["cardbalansexcel"]])));
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "balans")), "payment", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalance", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
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
    const $t41 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t41], "SortPosition", (await $.mcall((await $.wv([$t41], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t41], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t41], "Refresh", [], C));
    } finally {
      { const $t42 = await $.iset((await $.wv([$t41], "SQL", C, false)), [(await $.wv([$t41], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t41], "EmptyStr", C, false))); if ($t42 !== undefined) { await $.wset([$t41], "SQL", $t42, C); } }
      await $.mset((await $.wv([$t41], "Screen", C, false)), "Cursor", (await $.wv([$t41], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  return U;
}
