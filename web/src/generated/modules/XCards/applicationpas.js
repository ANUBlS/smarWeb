// Generated from applicationpas.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("applicationpas", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "Grids", "DBGrids", "ActnList", "FileCtrl", "oracledata", "ComCtrls", "ImgList", "CMExcelExport", "Menus", "Unit18", "SBTranslateProc", "sboapiDataModuleIMpl"]);
  const C = [U];
  U.defClass("TApplications", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "button4": {"name": "Button4", "type": "TButton"}, "button5": {"name": "Button5", "type": "TButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "simplefile": {"name": "simplefile", "type": "TAction"}, "filelistbox1": {"name": "FileListBox1", "type": "TFileListBox"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "selectall1": {"name": "selectall1", "type": "TMenuItem"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "menuitem1": {"name": "MenuItem1", "type": "TMenuItem"}, "button6": {"name": "Button6", "type": "TButton"}, "button7": {"name": "Button7", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("Applications", null, "TApplications");
  });
  U.func("sysday", async function sysday(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "t": 0};
  { const $t1 = (await $.call(C, "DayOfWeek", [(await $.v(C, "date"))]));
    if ($.eq($t1, 2) || $.eq($t1, 3) || $.eq($t1, 4) || $.eq($t1, 5)) {
      L0["result"] = (await $.call(C, "formatdatetime", ["YYYYMMDD", (await $.v(C, "date"))]));
    }
    else if ($.eq($t1, 6)) {
      L0["t"] = $.add((await $.v(C, "date")), 3);
      L0["result"] = (await $.call(C, "formatdatetime", ["YYYYMMDD", L0["t"]]));
    }
    else if ($.eq($t1, 7)) {
      L0["t"] = $.add((await $.v(C, "date")), 2);
      L0["result"] = (await $.call(C, "formatdatetime", ["YYYYMMDD", L0["t"]]));
    }
    else if ($.eq($t1, 1)) {
      L0["t"] = $.add((await $.v(C, "date")), 1);
      L0["result"] = (await $.call(C, "formatdatetime", ["YYYYMMDD", L0["t"]]));
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
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
  { const $t2 = (await $.call(C, "strtoint", [(await $.call(C, "FormatDateTime", ["mm", (await $.v(C, "date"))]))]));
    if ($.eq($t2, 1)) {
      L0["wday"] = (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))]));
    }
    else if ($.eq($t2, 2)) {
      L0["wday"] = $.add(L0["yan"], (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t2, 3)) {
      L0["wday"] = $.add($.add(L0["yan"], L0["feb"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t2, 4)) {
      L0["wday"] = $.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t2, 5)) {
      L0["wday"] = $.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t2, 6)) {
      L0["wday"] = $.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t2, 7)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t2, 8)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t2, 9)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t2, 10)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t2, 11)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"]), L0["okt"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t2, 12)) {
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
  { const $t3 = (await $.call(C, "length", [L0["wd"]]));
    if ($.eq($t3, 1)) {
      L0["wd"] = $.add("00", L0["wd"]);
    }
    else if ($.eq($t3, 2)) {
      L0["wd"] = $.add("0", L0["wd"]);
    }
  }
  L0.result = L0["wd"];
  return L0.result;
}, {"params": ["wday"], "kind": "function", "ptypes": ["integer"]});
  U.method("TApplications", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "urgent")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "urgent")), "SetVariable", ["dat1", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "urgent")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "simple")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "simple")), "SetVariable", ["dat1", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "simple")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TApplications", "simplefileExecute", async function simplefileExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "rowcount": 0, "nom": 0, "i": 0, "j": 0, "filename": '', "filename_": '', "fheader": '', "ffuter": '', "stmessage": '', "rownum": '', "paspst": '', "clientip": '', "all": '', "flname": '', "fbool": false, "f": null, "bankid": null};
  await $.fixArgs(L0, ["sender"]);
  { const $t4 = 999;
    L0["i"] = 1;
    let $t5 = true;
    for (;;) {
      if (!$t5) { L0["i"] = $.succ(L0["i"], 1); }
      $t5 = false;
      if (!($.ord(L0["i"]) <= $.ord($t4))) break;
      L0["all"] = "_";
      { const $t6 = 1;
        L0["j"] = (await $.call(C, "length", [(await $.call(C, "inttostr", [L0["i"]]))]));
        let $t7 = true;
        for (;;) {
          if (!$t7) { L0["j"] = $.succ(L0["j"], 1); }
          $t7 = false;
          if (!($.ord(L0["j"]) <= $.ord($t6))) break;
          L0["all"] = $.add(L0["all"], "0");
          await $.tick();
        }
      }
      L0["filename"] = $.add($.add($.add($.add($.add($.add("C:\\AZCARD\\OUT", "\\a"), "BOA"), L0["all"]), (await $.call(C, "inttostr", [L0["i"]]))), "."), (await $.call(C, "when2Str", [(await $.v(C, "whenday"))])));
      if ($.truthy($.not((await $.call(C, "DirectoryExists", [L0["filename"]]))))) {
        await $.stmt((await $.call(C, "MkDir", [L0["filename"]])));
        L0["fbool"] = true;
      }
      L0["filename_"] = $.add($.add($.add($.add($.add($.add(L0["filename"], "\\a"), "BOA"), L0["all"]), (await $.call(C, "inttostr", [L0["i"]]))), "."), (await $.call(C, "when2Str", [(await $.v(C, "whenday"))])));
      if ($.truthy(L0["fbool"])) {
        L0["nom"] = L0["i"];
        break;
      }
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t8) => { L0["f"] = $t8; }), L0["filename_"]])));
  await $.stmt((await $.call(C, "Rewrite", [$.ref(async () => L0["f"], async ($t9) => { L0["f"] = $t9; })])));
  L0["fheader"] = "";
  L0["all"] = (await $.call(C, "inttostr", [L0["nom"]]));
  { const $t10 = 1;
    L0["j"] = (await $.call(C, "length", [L0["all"]]));
    let $t11 = true;
    for (;;) {
      if (!$t11) { L0["j"] = $.succ(L0["j"], 1); }
      $t11 = false;
      if (!($.ord(L0["j"]) <= $.ord($t10))) break;
      L0["all"] = $.add("0", L0["all"]);
      await $.tick();
    }
  }
  L0["fheader"] = $.add($.add($.add($.add($.add($.add($.add($.add("FH000001APPLICAT  11 ", "BOA"), "  "), (await $.call(C, "FormatDateTime", ["yyyymmdd", (await $.v(C, "date"))]))), (await $.call(C, "FormatDateTime", ["hhmmss", (await $.v(C, "time"))]))), "00"), L0["all"]), "BOA"), "  CCDN");
  { const $t12 = 1398;
    L0["j"] = 1;
    let $t13 = true;
    for (;;) {
      if (!$t13) { L0["j"] = $.succ(L0["j"], 1); }
      $t13 = false;
      if (!($.ord(L0["j"]) <= $.ord($t12))) break;
      L0["fheader"] = $.add(L0["fheader"], " ");
      await $.tick();
    }
  }
  L0["fheader"] = $.add(L0["fheader"], "*");
  await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["fheader"]])));
  L0["stmessage"] = "";
  L0["rowcount"] = 0;
  await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t14) => { L0["f"] = $t14; })])));
  while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
    L0["rowcount"] = $.add(L0["rowcount"], 1);
    await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t15) => { L0["f"] = $t15; })])));
    await $.tick();
  }
  await $.stmt((await $.call(C, "Append", [$.ref(async () => L0["f"], async ($t16) => { L0["f"] = $t16; })])));
  L0["rownum"] = (await $.call(C, "IntToStr", [$.add(L0["rowcount"], 1)]));
  { const $t17 = 5;
    L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
    let $t18 = true;
    for (;;) {
      if (!$t18) { L0["j"] = $.succ(L0["j"], 1); }
      $t18 = false;
      if (!($.ord(L0["j"]) <= $.ord($t17))) break;
      L0["rownum"] = $.add("0", L0["rownum"]);
      await $.tick();
    }
  }
  L0["stmessage"] = $.add("RD", L0["rownum"]);
  L0["rownum"] = (await $.call(C, "IntToStr", [L0["rowcount"]]));
  { const $t19 = 9;
    L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
    let $t20 = true;
    for (;;) {
      if (!$t20) { L0["j"] = $.succ(L0["j"], 1); }
      $t20 = false;
      if (!($.ord(L0["j"]) <= $.ord($t19))) break;
      L0["rownum"] = $.add(L0["rownum"], " ");
      await $.tick();
    }
  }
  L0["stmessage"] = $.add($.add($.add($.add(L0["stmessage"], L0["rownum"]), "1103"), "                    "), (await $.call(C, "FormatDateTime", ["YYYYMMDD", (await $.v(C, "date"))])));
  L0["paspst"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI")), "fieldbyname", ["Passport"])), "AsString"));
  { const $t21 = 31;
    L0["j"] = (await $.call(C, "length", [L0["paspst"]]));
    let $t22 = true;
    for (;;) {
      if (!$t22) { L0["j"] = $.succ(L0["j"], 1); }
      $t22 = false;
      if (!($.ord(L0["j"]) <= $.ord($t21))) break;
      L0["paspst"] = $.add(L0["paspst"], " ");
      await $.tick();
    }
  }
  L0["stmessage"] = $.add(L0["stmessage"], L0["paspst"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI")), "FieldByName", ["resident"])), "AsString")), "RESIDENT"))) {
    L0["clientip"] = "PR";
  } else {
    L0["clientip"] = "PNR";
  }
  { const $t23 = 5;
    L0["j"] = (await $.call(C, "length", [L0["clientip"]]));
    let $t24 = true;
    for (;;) {
      if (!$t24) { L0["j"] = $.succ(L0["j"], 1); }
      $t24 = false;
      if (!($.ord(L0["j"]) <= $.ord($t23))) break;
      L0["clientip"] = $.add(L0["clientip"], " ");
      await $.tick();
    }
  }
  L0["stmessage"] = $.add(L0["stmessage"], L0["clientip"]);
  L0["flname"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI")), "fieldbyname", ["Fname"])), "AsString"));
  { const $t25 = 31;
    L0["j"] = (await $.call(C, "length", [L0["flname"]]));
    let $t26 = true;
    for (;;) {
      if (!$t26) { L0["j"] = $.succ(L0["j"], 1); }
      $t26 = false;
      if (!($.ord(L0["j"]) <= $.ord($t25))) break;
      L0["flname"] = $.add(L0["flname"], " ");
      await $.tick();
    }
  }
  L0["stmessage"] = $.add(L0["stmessage"], L0["flname"]);
  L0["flname"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI")), "fieldbyname", ["Lname"])), "AsString"));
  { const $t27 = 31;
    L0["j"] = (await $.call(C, "length", [L0["flname"]]));
    let $t28 = true;
    for (;;) {
      if (!$t28) { L0["j"] = $.succ(L0["j"], 1); }
      $t28 = false;
      if (!($.ord(L0["j"]) <= $.ord($t27))) break;
      L0["flname"] = $.add(L0["flname"], " ");
      await $.tick();
    }
  }
  L0["stmessage"] = $.add(L0["stmessage"], L0["flname"]);
  { const $t29 = 280;
    L0["j"] = 153;
    let $t30 = true;
    for (;;) {
      if (!$t30) { L0["j"] = $.succ(L0["j"], 1); }
      $t30 = false;
      if (!($.ord(L0["j"]) <= $.ord($t29))) break;
      L0["stmessage"] = $.add(L0["stmessage"], " ");
      await $.tick();
    }
  }
  L0["flname"] = $.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI")), "fieldbyname", ["Fname"])), "AsString")), " "), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI")), "fieldbyname", ["Lname"])), "AsString")));
  { const $t31 = 31;
    L0["j"] = (await $.call(C, "length", [L0["flname"]]));
    let $t32 = true;
    for (;;) {
      if (!$t32) { L0["j"] = $.succ(L0["j"], 1); }
      $t32 = false;
      if (!($.ord(L0["j"]) <= $.ord($t31))) break;
      L0["flname"] = $.add(L0["flname"], " ");
      await $.tick();
    }
  }
  L0["stmessage"] = $.add(L0["stmessage"], L0["flname"]);
  L0["all"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI")), "fieldbyname", ["security"])), "AsString"));
  { const $t33 = 19;
    L0["j"] = (await $.call(C, "length", [L0["all"]]));
    let $t34 = true;
    for (;;) {
      if (!$t34) { L0["j"] = $.succ(L0["j"], 1); }
      $t34 = false;
      if (!($.ord(L0["j"]) <= $.ord($t33))) break;
      L0["all"] = $.add(L0["all"], " ");
      await $.tick();
    }
  }
  L0["stmessage"] = $.add($.add(L0["stmessage"], L0["all"]), "       ");
  L0["all"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI")), "FieldByName", ["LANG_CODE"])), "AsString"));
  { const $t35 = 2;
    L0["j"] = (await $.call(C, "length", [L0["all"]]));
    let $t36 = true;
    for (;;) {
      if (!$t36) { L0["j"] = $.succ(L0["j"], 1); }
      $t36 = false;
      if (!($.ord(L0["j"]) <= $.ord($t35))) break;
      L0["all"] = $.add(L0["all"], " ");
      await $.tick();
    }
  }
  L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
  L0["all"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI")), "fieldbyname", ["reference"])), "AsString"));
  { const $t37 = 31;
    L0["j"] = (await $.call(C, "length", [L0["all"]]));
    let $t38 = true;
    for (;;) {
      if (!$t38) { L0["j"] = $.succ(L0["j"], 1); }
      $t38 = false;
      if (!($.ord(L0["j"]) <= $.ord($t37))) break;
      L0["all"] = $.add(L0["all"], " ");
      await $.tick();
    }
  }
  L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
  { const $t39 = 422;
    L0["j"] = 375;
    let $t40 = true;
    for (;;) {
      if (!$t40) { L0["j"] = $.succ(L0["j"], 1); }
      $t40 = false;
      if (!($.ord(L0["j"]) <= $.ord($t39))) break;
      L0["stmessage"] = $.add(L0["stmessage"], " ");
      await $.tick();
    }
  }
  L0["stmessage"] = $.add(L0["stmessage"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI")), "fieldbyname", ["country"])), "AsString")));
  L0["all"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI")), "fieldbyname", ["city"])), "AsString"));
  { const $t41 = 14;
    L0["j"] = (await $.call(C, "length", [L0["all"]]));
    let $t42 = true;
    for (;;) {
      if (!$t42) { L0["j"] = $.succ(L0["j"], 1); }
      $t42 = false;
      if (!($.ord(L0["j"]) <= $.ord($t41))) break;
      L0["all"] = $.add(L0["all"], " ");
      await $.tick();
    }
  }
  L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
  L0["all"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI")), "fieldbyname", ["workphone"])), "AsString"));
  { const $t43 = 9;
    L0["j"] = (await $.call(C, "length", [L0["all"]]));
    let $t44 = true;
    for (;;) {
      if (!$t44) { L0["j"] = $.succ(L0["j"], 1); }
      $t44 = false;
      if (!($.ord(L0["j"]) <= $.ord($t43))) break;
      L0["all"] = $.add(L0["all"], " ");
      await $.tick();
    }
  }
  L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
  L0["all"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI")), "fieldbyname", ["homephone"])), "AsString"));
  { const $t45 = 9;
    L0["j"] = (await $.call(C, "length", [L0["all"]]));
    let $t46 = true;
    for (;;) {
      if (!$t46) { L0["j"] = $.succ(L0["j"], 1); }
      $t46 = false;
      if (!($.ord(L0["j"]) <= $.ord($t45))) break;
      L0["all"] = $.add(L0["all"], " ");
      await $.tick();
    }
  }
  L0["stmessage"] = $.add($.add(L0["stmessage"], L0["all"]), "                ");
  L0["all"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI")), "fieldbyname", ["address"])), "AsString"));
  { const $t47 = 47;
    L0["j"] = (await $.call(C, "length", [L0["all"]]));
    let $t48 = true;
    for (;;) {
      if (!$t48) { L0["j"] = $.succ(L0["j"], 1); }
      $t48 = false;
      if (!($.ord(L0["j"]) <= $.ord($t47))) break;
      L0["all"] = $.add(L0["all"], " ");
      await $.tick();
    }
  }
  L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
  { const $t49 = 668;
    L0["j"] = 525;
    let $t50 = true;
    for (;;) {
      if (!$t50) { L0["j"] = $.succ(L0["j"], 1); }
      $t50 = false;
      if (!($.ord(L0["j"]) <= $.ord($t49))) break;
      L0["stmessage"] = $.add(L0["stmessage"], " ");
      await $.tick();
    }
  }
  L0["all"] = (await $.call(C, "FormatDateTime", ["YYYYMMDD", (await $.v(C, "date"))]));
  { const $t51 = 7;
    L0["j"] = (await $.call(C, "length", [L0["all"]]));
    let $t52 = true;
    for (;;) {
      if (!$t52) { L0["j"] = $.succ(L0["j"], 1); }
      $t52 = false;
      if (!($.ord(L0["j"]) <= $.ord($t51))) break;
      L0["all"] = $.add(L0["all"], " ");
      await $.tick();
    }
  }
  L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
  { const $t53 = 740;
    L0["j"] = 677;
    let $t54 = true;
    for (;;) {
      if (!$t54) { L0["j"] = $.succ(L0["j"], 1); }
      $t54 = false;
      if (!($.ord(L0["j"]) <= $.ord($t53))) break;
      L0["stmessage"] = $.add(L0["stmessage"], " ");
      await $.tick();
    }
  }
  await $.mset((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI1")), "Active", false);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI1")), "SQL")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI1")), "SQL")), "Add", [$.add($.add($.add($.add("Select * from CARD_CARDTYPE where (name ='", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI")), "fieldbyname", ["cardtype"])), "AsString"))), "')and(currency = '"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI")), "fieldbyname", ["currency"])), "AsString"))), "')")])));
  await $.mset((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI1")), "Active", true);
  L0["all"] = "";
  L0["all"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI1")), "fieldbyname", ["code"])), "AsString"));
  { const $t55 = 23;
    L0["j"] = (await $.call(C, "length", [L0["all"]]));
    let $t56 = true;
    for (;;) {
      if (!$t56) { L0["j"] = $.succ(L0["j"], 1); }
      $t56 = false;
      if (!($.ord(L0["j"]) <= $.ord($t55))) break;
      L0["all"] = $.add(L0["all"], " ");
      await $.tick();
    }
  }
  L0["stmessage"] = $.add($.add(L0["stmessage"], L0["all"]), "                        ");
  L0["all"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI")), "fieldbyname", ["rbsnumber"])), "AsString"));
  { const $t57 = 31;
    L0["j"] = (await $.call(C, "length", [L0["all"]]));
    let $t58 = true;
    for (;;) {
      if (!$t58) { L0["j"] = $.succ(L0["j"], 1); }
      $t58 = false;
      if (!($.ord(L0["j"]) <= $.ord($t57))) break;
      L0["all"] = $.add(L0["all"], " ");
      await $.tick();
    }
  }
  L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
  { const $t59 = 852;
    L0["j"] = 821;
    let $t60 = true;
    for (;;) {
      if (!$t60) { L0["j"] = $.succ(L0["j"], 1); }
      $t60 = false;
      if (!($.ord(L0["j"]) <= $.ord($t59))) break;
      L0["stmessage"] = $.add(L0["stmessage"], " ");
      await $.tick();
    }
  }
  L0["clientip"] = $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI1")), "fieldbyname", ["SCHEME"])), "AsString")), "  ");
  L0["stmessage"] = $.add(L0["stmessage"], L0["clientip"]);
  L0["stmessage"] = $.add(L0["stmessage"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI1")), "fieldbyname", ["service"])), "AsString")));
  if ($.truthy($.eq((await $.call(C, "Length", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI1")), "fieldbyname", ["service"])), "AsString"))])), 3))) {
    L0["stmessage"] = $.add($.add(L0["stmessage"], " "), "Y");
  }
  if ($.truthy($.eq((await $.call(C, "Length", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI1")), "fieldbyname", ["service"])), "AsString"))])), 4))) {
    L0["stmessage"] = $.add(L0["stmessage"], "Y");
  }
  L0["all"] = "";
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI")), "FieldByName", ["currency"])), "AsString")), "AZN"))) {
    L0["all"] = "944";
  } else {
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI")), "FieldByName", ["currency"])), "AsString")), "USD"))) {
      L0["all"] = "840";
    } else {
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI")), "FieldByName", ["currency"])), "AsString")), "EUR"))) {
        L0["all"] = "978";
      }
    }
  }
  L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
  L0["all"] = "";
  L0["all"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI")), "fieldbyname", ["credit_lim"])), "AsString"));
  { const $t61 = 12;
    L0["j"] = (await $.call(C, "length", [L0["all"]]));
    let $t62 = true;
    for (;;) {
      if (!$t62) { L0["j"] = $.succ(L0["j"], 1); }
      $t62 = false;
      if (!($.ord(L0["j"]) <= $.ord($t61))) break;
      L0["all"] = $.add("0", L0["all"]);
      await $.tick();
    }
  }
  L0["stmessage"] = $.add($.add($.add(L0["stmessage"], L0["all"]), "00"), "        C");
  L0["stmessage"] = $.add(L0["stmessage"], (await $.call(C, "FormatDateTime", ["YYMM", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI")), "fieldbyname", ["Expiry"])), "AsDateTime"))])));
  L0["all"] = "";
  L0["all"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI")), "fieldbyname", ["embossname"])), "AsString"));
  { const $t63 = 25;
    L0["j"] = (await $.call(C, "length", [L0["all"]]));
    let $t64 = true;
    for (;;) {
      if (!$t64) { L0["j"] = $.succ(L0["j"], 1); }
      $t64 = false;
      if (!($.ord(L0["j"]) <= $.ord($t63))) break;
      L0["all"] = $.add(L0["all"], " ");
      await $.tick();
    }
  }
  L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
  { const $t65 = 1456;
    L0["j"] = 923;
    let $t66 = true;
    for (;;) {
      if (!$t66) { L0["j"] = $.succ(L0["j"], 1); }
      $t66 = false;
      if (!($.ord(L0["j"]) <= $.ord($t65))) break;
      L0["stmessage"] = $.add(L0["stmessage"], " ");
      await $.tick();
    }
  }
  L0["stmessage"] = $.add(L0["stmessage"], "*");
  await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["stmessage"]])));
  L0["ffuter"] = "";
  L0["all"] = "";
  L0["rowcount"] = 0;
  await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t67) => { L0["f"] = $t67; })])));
  while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
    L0["rowcount"] = $.add(L0["rowcount"], 1);
    await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t68) => { L0["f"] = $t68; })])));
    await $.tick();
  }
  await $.stmt((await $.call(C, "Append", [$.ref(async () => L0["f"], async ($t69) => { L0["f"] = $t69; })])));
  L0["ffuter"] = "FT";
  L0["all"] = (await $.call(C, "inttostr", [$.add(L0["rowcount"], 1)]));
  { const $t70 = 5;
    L0["i"] = (await $.call(C, "length", [L0["all"]]));
    let $t71 = true;
    for (;;) {
      if (!$t71) { L0["i"] = $.succ(L0["i"], 1); }
      $t71 = false;
      if (!($.ord(L0["i"]) <= $.ord($t70))) break;
      L0["all"] = $.add("0", L0["all"]);
      await $.tick();
    }
  }
  L0["ffuter"] = $.add(L0["ffuter"], L0["all"]);
  L0["all"] = (await $.call(C, "inttostr", [$.sub(L0["rowcount"], 1)]));
  { const $t72 = 5;
    L0["i"] = (await $.call(C, "length", [L0["all"]]));
    let $t73 = true;
    for (;;) {
      if (!$t73) { L0["i"] = $.succ(L0["i"], 1); }
      $t73 = false;
      if (!($.ord(L0["i"]) <= $.ord($t72))) break;
      L0["all"] = $.add("0", L0["all"]);
      await $.tick();
    }
  }
  L0["ffuter"] = $.add(L0["ffuter"], L0["all"]);
  { const $t74 = 1437;
    L0["j"] = 1;
    let $t75 = true;
    for (;;) {
      if (!$t75) { L0["j"] = $.succ(L0["j"], 1); }
      $t75 = false;
      if (!($.ord(L0["j"]) <= $.ord($t74))) break;
      L0["ffuter"] = $.add(L0["ffuter"], " ");
      await $.tick();
    }
  }
  L0["ffuter"] = $.add(L0["ffuter"], "*");
  await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["ffuter"]])));
  await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t76) => { L0["f"] = $t76; })])));
  await $.stmt((await $.call(C, "ShowMessage", ["Fayl Yarandi"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("cr_file2", async function cr_file2(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"dset": $.copyArg(p0), "dbg": $.copyArg(p1), "urg": $.copyArg(p2), result: undefined, "f": null, "rowcount": 0, "nom": 0, "i": 0, "j": 0, "k": 0, "filename": '', "fheader": '', "ffuter": '', "stmessage": '', "rownum": '', "paspst": '', "clientip": '', "all": '', "flname": '', "f_bool": false, "v_cardnum": '', "p_fname": '', "p_lname": '', "p_embossname": '', "v_filialcode": '', "bankid": ''};
  await $.fixArgs(L0, ["dset", "dbg", "urg"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "open", []);
  L0["bankid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["BANKID"])), "AsString"));
  L0["k"] = 0;
  L0["f_bool"] = false;
  while ($.truthy(($.lt(L0["k"], (await $.mv((await $.mv(L0["dbg"], "SelectedRows")), "Count")))))) {
    await $.stmt((await $.mcall(L0["dset"], "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv(L0["dbg"], "SelectedRows")), "Items")), [L0["k"]]))]))])));
    L0["k"] = $.add(L0["k"], 1);
    if ($.truthy((await $.and_(($.in_((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["MessType"])), "AsInteger")), [5])), async () => ($.in_((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["status"])), "AsInteger")), [1, 3])))))) {
      L0["f_bool"] = true;
    }
    await $.tick();
  }
  if ($.truthy($.not(L0["f_bool"]))) {
    return L0.result;
  }
  L0["k"] = 0;
  if ($.truthy($.not((await $.call(C, "DirectoryExists", ["C:\\AZCARD\\OUT"]))))) {
    await $.stmt((await $.call(C, "MkDir", ["C:\\AZCARD\\OUT"])));
  }
  if ($.truthy($.not((await $.call(C, "DirectoryExists", [$.add("C:\\AZCARD\\OUT\\", (await $.call(C, "FormatDateTime", ["DDMMYY", (await $.v(C, "DATE"))])))]))))) {
    await $.stmt((await $.call(C, "MkDir", [$.add("C:\\AZCARD\\OUT\\", (await $.call(C, "FormatDateTime", ["DDMMYY", (await $.v(C, "DATE"))])))])));
  }
  await $.mset((await $.mv((await $.v(C, "Applications")), "FileListBox1")), "Directory", $.add("C:\\AZCARD\\OUT\\", (await $.call(C, "FormatDateTime", ["DDMMYY", (await $.v(C, "DATE"))]))));
  await $.mcall((await $.mv((await $.v(C, "Applications")), "FileListBox1")), "Update", []);
  L0["nom"] = 0;
  if ($.truthy($.eq(L0["urg"], 1))) {
    { const $t77 = 99;
      L0["i"] = 1;
      let $t78 = true;
      for (;;) {
        if (!$t78) { L0["i"] = $.succ(L0["i"], 1); }
        $t78 = false;
        if (!($.ord(L0["i"]) <= $.ord($t77))) break;
        L0["all"] = "";
        { const $t79 = 1;
          L0["j"] = (await $.call(C, "length", [(await $.call(C, "inttostr", [L0["i"]]))]));
          let $t80 = true;
          for (;;) {
            if (!$t80) { L0["j"] = $.succ(L0["j"], 1); }
            $t80 = false;
            if (!($.ord(L0["j"]) <= $.ord($t79))) break;
            L0["all"] = $.add("0", L0["all"]);
            await $.tick();
          }
        }
        L0["filename"] = $.add($.add($.add($.add($.add($.add($.add($.add("C:\\AZCARD\\OUT\\", (await $.call(C, "FormatDateTime", ["DDMMYY", (await $.v(C, "DATE"))]))), "\\a"), L0["bankid"]), "9"), L0["all"]), (await $.call(C, "inttostr", [L0["i"]]))), "."), (await $.call(C, "when2Str", [(await $.v(C, "whenday"))])));
        if ($.truthy($.not(((await $.call(C, "FileExists", [L0["filename"]])))))) {
          L0["nom"] = L0["i"];
          break;
        }
        await $.tick();
      }
    }
  } else {
    if ($.truthy($.ne(L0["urg"], 1))) {
      { const $t81 = 999;
        L0["i"] = 1;
        let $t82 = true;
        for (;;) {
          if (!$t82) { L0["i"] = $.succ(L0["i"], 1); }
          $t82 = false;
          if (!($.ord(L0["i"]) <= $.ord($t81))) break;
          L0["all"] = "";
          { const $t83 = 2;
            L0["j"] = (await $.call(C, "length", [(await $.call(C, "inttostr", [L0["i"]]))]));
            let $t84 = true;
            for (;;) {
              if (!$t84) { L0["j"] = $.succ(L0["j"], 1); }
              $t84 = false;
              if (!($.ord(L0["j"]) <= $.ord($t83))) break;
              L0["all"] = $.add("_", L0["all"]);
              await $.tick();
            }
          }
          if ($.truthy($.gt(L0["i"], 9))) {
            L0["filename"] = $.add($.add($.add($.add($.add($.add($.add("C:\\AZCARD\\OUT\\", (await $.call(C, "FormatDateTime", ["DDMMYY", (await $.v(C, "DATE"))]))), "\\a"), L0["bankid"]), L0["all"]), (await $.call(C, "inttostr", [L0["i"]]))), "."), (await $.call(C, "when2Str", [(await $.v(C, "whenday"))])));
          } else {
            L0["filename"] = $.add($.add($.add($.add($.add($.add($.add($.add("C:\\AZCARD\\OUT\\", (await $.call(C, "FormatDateTime", ["DDMMYY", (await $.v(C, "DATE"))]))), "\\a"), L0["bankid"]), "_"), "0"), (await $.call(C, "inttostr", [L0["i"]]))), "."), (await $.call(C, "when2Str", [(await $.v(C, "whenday"))])));
          }
          if ($.truthy($.not(((await $.call(C, "FileExists", [L0["filename"]])))))) {
            L0["nom"] = L0["i"];
            break;
          }
          await $.tick();
        }
      }
    }
  }
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t85) => { L0["f"] = $t85; }), L0["filename"]])));
  await $.stmt((await $.call(C, "Rewrite", [$.ref(async () => L0["f"], async ($t86) => { L0["f"] = $t86; })])));
  L0["fheader"] = "";
  L0["all"] = (await $.call(C, "inttostr", [L0["nom"]]));
  { const $t87 = 1;
    L0["j"] = (await $.call(C, "length", [L0["all"]]));
    let $t88 = true;
    for (;;) {
      if (!$t88) { L0["j"] = $.succ(L0["j"], 1); }
      $t88 = false;
      if (!($.ord(L0["j"]) <= $.ord($t87))) break;
      L0["all"] = $.add("0", L0["all"]);
      await $.tick();
    }
  }
  if ($.truthy($.eq(L0["urg"], 1))) {
    L0["fheader"] = $.add($.add($.add($.add($.add($.add($.add($.add("FH000001APPLICAT  11 ", L0["bankid"]), "  "), (await $.call(C, "FormatDateTime", ["yyyymmdd", (await $.v(C, "date"))]))), (await $.call(C, "FormatDateTime", ["hhmmss", (await $.v(C, "time"))]))), "09"), L0["all"]), L0["bankid"]), "  RCDN");
  } else {
    L0["fheader"] = $.add($.add($.add($.add($.add($.add($.add($.add("FH000001APPLICAT  11 ", L0["bankid"]), "  "), (await $.call(C, "FormatDateTime", ["yyyymmdd", (await $.v(C, "date"))]))), (await $.call(C, "FormatDateTime", ["hhmmss", (await $.v(C, "time"))]))), "00"), L0["all"]), L0["bankid"]), "  RCDN");
  }
  { const $t89 = 1396;
    L0["j"] = 1;
    let $t90 = true;
    for (;;) {
      if (!$t90) { L0["j"] = $.succ(L0["j"], 1); }
      $t90 = false;
      if (!($.ord(L0["j"]) <= $.ord($t89))) break;
      L0["fheader"] = $.add(L0["fheader"], " ");
      await $.tick();
    }
  }
  L0["fheader"] = $.add(L0["fheader"], "*");
  await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["fheader"]])));
  while ($.truthy(($.lt(L0["k"], (await $.mv((await $.mv(L0["dbg"], "SelectedRows")), "Count")))))) {
    await $.stmt((await $.mcall(L0["dset"], "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv(L0["dbg"], "SelectedRows")), "Items")), [L0["k"]]))]))])));
    L0["k"] = $.add(L0["k"], 1);
    if ($.truthy($.not(($.in_((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["MessType"])), "AsInteger")), [5]))))) {
      continue;
    }
    L0["stmessage"] = "";
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["messtype"])), "AsInteger")), 5)), async () => ($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["status"])), "AsInteger")), 1)))))) {
      L0["stmessage"] = "";
      L0["rowcount"] = 0;
      await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t91) => { L0["f"] = $t91; })])));
      while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
        L0["rowcount"] = $.add(L0["rowcount"], 1);
        await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t92) => { L0["f"] = $t92; })])));
        await $.tick();
      }
      await $.stmt((await $.call(C, "Append", [$.ref(async () => L0["f"], async ($t93) => { L0["f"] = $t93; })])));
      L0["rownum"] = (await $.call(C, "IntToStr", [$.add(L0["rowcount"], 1)]));
      { const $t94 = 5;
        L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
        let $t95 = true;
        for (;;) {
          if (!$t95) { L0["j"] = $.succ(L0["j"], 1); }
          $t95 = false;
          if (!($.ord(L0["j"]) <= $.ord($t94))) break;
          L0["rownum"] = $.add("0", L0["rownum"]);
          await $.tick();
        }
      }
      L0["stmessage"] = $.add("RD", L0["rownum"]);
      L0["rownum"] = (await $.call(C, "IntToStr", [L0["rowcount"]]));
      { const $t96 = 9;
        L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
        let $t97 = true;
        for (;;) {
          if (!$t97) { L0["j"] = $.succ(L0["j"], 1); }
          $t97 = false;
          if (!($.ord(L0["j"]) <= $.ord($t96))) break;
          L0["rownum"] = $.add(L0["rownum"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add($.add($.add($.add(L0["stmessage"], L0["rownum"]), "0300"), "                    "), (await $.call(C, "FormatDateTime", ["YYYYMMDD", (await $.v(C, "date"))])));
      { const $t98 = 788;
        L0["j"] = 51;
        let $t99 = true;
        for (;;) {
          if (!$t99) { L0["j"] = $.succ(L0["j"], 1); }
          $t99 = false;
          if (!($.ord(L0["j"]) <= $.ord($t98))) break;
          L0["stmessage"] = $.add(L0["stmessage"], " ");
          await $.tick();
        }
      }
      L0["all"] = "";
      L0["all"] = (await $.call(C, "copy", [(await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["rbsnumber"])), "AsString")), 1, (await $.call(C, "length", [(await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["rbsnumber"])), "AsString"))]))]));
      { const $t100 = 31;
        L0["j"] = (await $.call(C, "length", [L0["all"]]));
        let $t101 = true;
        for (;;) {
          if (!$t101) { L0["j"] = $.succ(L0["j"], 1); }
          $t101 = false;
          if (!($.ord(L0["j"]) <= $.ord($t100))) break;
          L0["all"] = $.add(L0["all"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
      { const $t102 = 865;
        L0["j"] = 821;
        let $t103 = true;
        for (;;) {
          if (!$t103) { L0["j"] = $.succ(L0["j"], 1); }
          $t103 = false;
          if (!($.ord(L0["j"]) <= $.ord($t102))) break;
          L0["stmessage"] = $.add(L0["stmessage"], " ");
          await $.tick();
        }
      }
      L0["all"] = "";
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "fcur")), "close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "FCUR")), "SetVariable", ["CUR", (await $.call(C, "copy", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["currency"])), "AsString")), 1, 3]))])));
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "FCUR")), "Open", []);
      L0["all"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "FCUR")), "Fieldbyname", ["INTID"])), "asstring"));
      L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
      L0["all"] = "";
      L0["all"] = $.add((await $.call(C, "floattostr", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["credit_lim"])), "Asfloat"))])), "00");
      { const $t104 = 14;
        L0["j"] = (await $.call(C, "length", [L0["all"]]));
        let $t105 = true;
        for (;;) {
          if (!$t105) { L0["j"] = $.succ(L0["j"], 1); }
          $t105 = false;
          if (!($.ord(L0["j"]) <= $.ord($t104))) break;
          L0["all"] = $.add("0", L0["all"]);
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
      { const $t106 = 1451;
        L0["j"] = 884;
        let $t107 = true;
        for (;;) {
          if (!$t107) { L0["j"] = $.succ(L0["j"], 1); }
          $t107 = false;
          if (!($.ord(L0["j"]) <= $.ord($t106))) break;
          L0["stmessage"] = $.add(L0["stmessage"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], "*");
      await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["stmessage"]])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["donecredit", [(await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["id"])), "AsInteger"))]])));
    }
    await $.tick();
  }
  L0["ffuter"] = "";
  L0["all"] = "";
  L0["rowcount"] = 0;
  await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t108) => { L0["f"] = $t108; })])));
  while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
    L0["rowcount"] = $.add(L0["rowcount"], 1);
    await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t109) => { L0["f"] = $t109; })])));
    await $.tick();
  }
  await $.stmt((await $.call(C, "Append", [$.ref(async () => L0["f"], async ($t110) => { L0["f"] = $t110; })])));
  L0["ffuter"] = "FT";
  L0["all"] = (await $.call(C, "inttostr", [$.add(L0["rowcount"], 1)]));
  { const $t111 = 5;
    L0["i"] = (await $.call(C, "length", [L0["all"]]));
    let $t112 = true;
    for (;;) {
      if (!$t112) { L0["i"] = $.succ(L0["i"], 1); }
      $t112 = false;
      if (!($.ord(L0["i"]) <= $.ord($t111))) break;
      L0["all"] = $.add("0", L0["all"]);
      await $.tick();
    }
  }
  L0["ffuter"] = $.add(L0["ffuter"], L0["all"]);
  L0["all"] = (await $.call(C, "inttostr", [$.sub(L0["rowcount"], 1)]));
  { const $t113 = 5;
    L0["i"] = (await $.call(C, "length", [L0["all"]]));
    let $t114 = true;
    for (;;) {
      if (!$t114) { L0["i"] = $.succ(L0["i"], 1); }
      $t114 = false;
      if (!($.ord(L0["i"]) <= $.ord($t113))) break;
      L0["all"] = $.add("0", L0["all"]);
      await $.tick();
    }
  }
  L0["ffuter"] = $.add(L0["ffuter"], L0["all"]);
  { const $t115 = 1437;
    L0["j"] = 1;
    let $t116 = true;
    for (;;) {
      if (!$t116) { L0["j"] = $.succ(L0["j"], 1); }
      $t116 = false;
      if (!($.ord(L0["j"]) <= $.ord($t115))) break;
      L0["ffuter"] = $.add(L0["ffuter"], " ");
      await $.tick();
    }
  }
  L0["ffuter"] = $.add(L0["ffuter"], "*");
  await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["ffuter"]])));
  await $.stmt((await $.call(C, "close", [L0["f"]])));
  return L0.result;
}, {"params": ["DSet", "DBG", "urg"], "kind": "procedure", "ptypes": ["TOracleDataSet", "TDBGrid", "integer"]});
  U.func("cr_file1", async function cr_file1(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"dset": $.copyArg(p0), "dbg": $.copyArg(p1), "urg": $.copyArg(p2), result: undefined, "f": null, "rowcount": 0, "nom": 0, "i": 0, "j": 0, "k": 0, "filename": '', "fheader": '', "ffuter": '', "stmessage": '', "rownum": '', "paspst": '', "clientip": '', "all": '', "flname": '', "f_bool": false, "v_cardnum": '', "p_fname": '', "p_lname": '', "p_embossname": '', "v_filialcode": '', "bankid": ''};
  await $.fixArgs(L0, ["dset", "dbg", "urg"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "open", []);
  L0["bankid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["BANKID"])), "AsString"));
  L0["k"] = 0;
  L0["f_bool"] = false;
  while ($.truthy(($.lt(L0["k"], (await $.mv((await $.mv(L0["dbg"], "SelectedRows")), "Count")))))) {
    await $.stmt((await $.mcall(L0["dset"], "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv(L0["dbg"], "SelectedRows")), "Items")), [L0["k"]]))]))])));
    L0["k"] = $.add(L0["k"], 1);
    if ($.truthy((await $.and_(($.in_((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["MessType"])), "AsInteger")), [1, 2, 3, 4, 6, 7, 11, 12, 13, 35])), async () => ($.in_((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["status"])), "AsInteger")), [1, 3])))))) {
      L0["f_bool"] = true;
    }
    await $.tick();
  }
  if ($.truthy($.not(L0["f_bool"]))) {
    return L0.result;
  }
  L0["k"] = 0;
  if ($.truthy($.not((await $.call(C, "DirectoryExists", ["C:\\AZCARD\\OUT"]))))) {
    await $.stmt((await $.call(C, "MkDir", ["C:\\AZCARD\\OUT"])));
  }
  if ($.truthy($.not((await $.call(C, "DirectoryExists", [$.add("C:\\AZCARD\\OUT\\", (await $.call(C, "FormatDateTime", ["DDMMYY", (await $.v(C, "DATE"))])))]))))) {
    await $.stmt((await $.call(C, "MkDir", [$.add("C:\\AZCARD\\OUT\\", (await $.call(C, "FormatDateTime", ["DDMMYY", (await $.v(C, "DATE"))])))])));
  }
  await $.mset((await $.mv((await $.v(C, "Applications")), "FileListBox1")), "Directory", $.add("C:\\AZCARD\\OUT\\", (await $.call(C, "FormatDateTime", ["DDMMYY", (await $.v(C, "DATE"))]))));
  await $.mcall((await $.mv((await $.v(C, "Applications")), "FileListBox1")), "Update", []);
  L0["nom"] = 0;
  if ($.truthy($.eq(L0["urg"], 1))) {
    { const $t117 = 99;
      L0["i"] = 1;
      let $t118 = true;
      for (;;) {
        if (!$t118) { L0["i"] = $.succ(L0["i"], 1); }
        $t118 = false;
        if (!($.ord(L0["i"]) <= $.ord($t117))) break;
        L0["all"] = "";
        { const $t119 = 1;
          L0["j"] = (await $.call(C, "length", [(await $.call(C, "inttostr", [L0["i"]]))]));
          let $t120 = true;
          for (;;) {
            if (!$t120) { L0["j"] = $.succ(L0["j"], 1); }
            $t120 = false;
            if (!($.ord(L0["j"]) <= $.ord($t119))) break;
            L0["all"] = $.add("0", L0["all"]);
            await $.tick();
          }
        }
        L0["filename"] = $.add($.add($.add($.add($.add($.add($.add($.add("C:\\AZCARD\\OUT\\", (await $.call(C, "FormatDateTime", ["DDMMYY", (await $.v(C, "DATE"))]))), "\\a"), L0["bankid"]), "9"), L0["all"]), (await $.call(C, "inttostr", [L0["i"]]))), "."), (await $.call(C, "when2Str", [(await $.v(C, "whenday"))])));
        if ($.truthy($.not(((await $.call(C, "FileExists", [L0["filename"]])))))) {
          L0["nom"] = L0["i"];
          break;
        }
        await $.tick();
      }
    }
  } else {
    if ($.truthy($.ne(L0["urg"], 1))) {
      { const $t121 = 999;
        L0["i"] = 1;
        let $t122 = true;
        for (;;) {
          if (!$t122) { L0["i"] = $.succ(L0["i"], 1); }
          $t122 = false;
          if (!($.ord(L0["i"]) <= $.ord($t121))) break;
          L0["all"] = "";
          { const $t123 = 2;
            L0["j"] = (await $.call(C, "length", [(await $.call(C, "inttostr", [L0["i"]]))]));
            let $t124 = true;
            for (;;) {
              if (!$t124) { L0["j"] = $.succ(L0["j"], 1); }
              $t124 = false;
              if (!($.ord(L0["j"]) <= $.ord($t123))) break;
              L0["all"] = $.add("_", L0["all"]);
              await $.tick();
            }
          }
          if ($.truthy($.gt(L0["i"], 9))) {
            L0["filename"] = $.add($.add($.add($.add($.add($.add($.add("C:\\AZCARD\\OUT\\", (await $.call(C, "FormatDateTime", ["DDMMYY", (await $.v(C, "DATE"))]))), "\\a"), L0["bankid"]), L0["all"]), (await $.call(C, "inttostr", [L0["i"]]))), "."), (await $.call(C, "when2Str", [(await $.v(C, "whenday"))])));
          } else {
            L0["filename"] = $.add($.add($.add($.add($.add($.add($.add($.add("C:\\AZCARD\\OUT\\", (await $.call(C, "FormatDateTime", ["DDMMYY", (await $.v(C, "DATE"))]))), "\\a"), L0["bankid"]), "_"), "0"), (await $.call(C, "inttostr", [L0["i"]]))), "."), (await $.call(C, "when2Str", [(await $.v(C, "whenday"))])));
          }
          if ($.truthy($.not(((await $.call(C, "FileExists", [L0["filename"]])))))) {
            L0["nom"] = L0["i"];
            break;
          }
          await $.tick();
        }
      }
    }
  }
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t125) => { L0["f"] = $t125; }), L0["filename"]])));
  await $.stmt((await $.call(C, "Rewrite", [$.ref(async () => L0["f"], async ($t126) => { L0["f"] = $t126; })])));
  L0["fheader"] = "";
  L0["all"] = (await $.call(C, "inttostr", [L0["nom"]]));
  { const $t127 = 1;
    L0["j"] = (await $.call(C, "length", [L0["all"]]));
    let $t128 = true;
    for (;;) {
      if (!$t128) { L0["j"] = $.succ(L0["j"], 1); }
      $t128 = false;
      if (!($.ord(L0["j"]) <= $.ord($t127))) break;
      L0["all"] = $.add("0", L0["all"]);
      await $.tick();
    }
  }
  if ($.truthy($.eq(L0["urg"], 1))) {
    L0["fheader"] = $.add($.add($.add($.add($.add($.add($.add($.add("FH000001APPLICAT  11 ", L0["bankid"]), "  "), (await $.call(C, "FormatDateTime", ["yyyymmdd", (await $.v(C, "date"))]))), (await $.call(C, "FormatDateTime", ["hhmmss", (await $.v(C, "time"))]))), "09"), L0["all"]), L0["bankid"]), "  CCDN");
  } else {
    L0["fheader"] = $.add($.add($.add($.add($.add($.add($.add($.add("FH000001APPLICAT  11 ", L0["bankid"]), "  "), (await $.call(C, "FormatDateTime", ["yyyymmdd", (await $.v(C, "date"))]))), (await $.call(C, "FormatDateTime", ["hhmmss", (await $.v(C, "time"))]))), "00"), L0["all"]), L0["bankid"]), "  CCDN");
  }
  { const $t129 = 1396;
    L0["j"] = 1;
    let $t130 = true;
    for (;;) {
      if (!$t130) { L0["j"] = $.succ(L0["j"], 1); }
      $t130 = false;
      if (!($.ord(L0["j"]) <= $.ord($t129))) break;
      L0["fheader"] = $.add(L0["fheader"], " ");
      await $.tick();
    }
  }
  L0["fheader"] = $.add(L0["fheader"], "*");
  await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["fheader"]])));
  while ($.truthy(($.lt(L0["k"], (await $.mv((await $.mv(L0["dbg"], "SelectedRows")), "Count")))))) {
    await $.stmt((await $.mcall(L0["dset"], "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv(L0["dbg"], "SelectedRows")), "Items")), [L0["k"]]))]))])));
    L0["k"] = $.add(L0["k"], 1);
    if ($.truthy($.not(($.in_((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["MessType"])), "AsInteger")), [1, 2, 3, 4, 6, 7, 11, 12, 13, 35]))))) {
      continue;
    }
    L0["stmessage"] = "";
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["messtype"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["status"])), "AsInteger")), 1)))))) {
      L0["stmessage"] = "";
      L0["rowcount"] = 0;
      await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t131) => { L0["f"] = $t131; })])));
      while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
        L0["rowcount"] = $.add(L0["rowcount"], 1);
        await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t132) => { L0["f"] = $t132; })])));
        await $.tick();
      }
      await $.stmt((await $.call(C, "Append", [$.ref(async () => L0["f"], async ($t133) => { L0["f"] = $t133; })])));
      L0["rownum"] = (await $.call(C, "IntToStr", [$.add(L0["rowcount"], 1)]));
      { const $t134 = 5;
        L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
        let $t135 = true;
        for (;;) {
          if (!$t135) { L0["j"] = $.succ(L0["j"], 1); }
          $t135 = false;
          if (!($.ord(L0["j"]) <= $.ord($t134))) break;
          L0["rownum"] = $.add("0", L0["rownum"]);
          await $.tick();
        }
      }
      L0["stmessage"] = $.add("RD", L0["rownum"]);
      L0["rownum"] = (await $.call(C, "IntToStr", [L0["rowcount"]]));
      { const $t136 = 9;
        L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
        let $t137 = true;
        for (;;) {
          if (!$t137) { L0["j"] = $.succ(L0["j"], 1); }
          $t137 = false;
          if (!($.ord(L0["j"]) <= $.ord($t136))) break;
          L0["rownum"] = $.add(L0["rownum"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add($.add($.add($.add(L0["stmessage"], L0["rownum"]), "1103"), "                    "), (await $.call(C, "FormatDateTime", ["YYYYMMDD", (await $.v(C, "date"))])));
      L0["paspst"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["Passport"])), "AsString"));
      { const $t138 = 31;
        L0["j"] = (await $.call(C, "length", [L0["paspst"]]));
        let $t139 = true;
        for (;;) {
          if (!$t139) { L0["j"] = $.succ(L0["j"], 1); }
          $t139 = false;
          if (!($.ord(L0["j"]) <= $.ord($t138))) break;
          L0["paspst"] = $.add(L0["paspst"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["paspst"]);
      if ($.truthy($.ne((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["resident"])), "AsString")), "NONRESIDENT"))) {
        L0["clientip"] = "PR";
      } else {
        L0["clientip"] = "PNR";
      }
      { const $t140 = 5;
        L0["j"] = (await $.call(C, "length", [L0["clientip"]]));
        let $t141 = true;
        for (;;) {
          if (!$t141) { L0["j"] = $.succ(L0["j"], 1); }
          $t141 = false;
          if (!($.ord(L0["j"]) <= $.ord($t140))) break;
          L0["clientip"] = $.add(L0["clientip"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["clientip"]);
      L0["flname"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["Fname"])), "AsString"));
      { const $t142 = 31;
        L0["j"] = (await $.call(C, "length", [L0["flname"]]));
        let $t143 = true;
        for (;;) {
          if (!$t143) { L0["j"] = $.succ(L0["j"], 1); }
          $t143 = false;
          if (!($.ord(L0["j"]) <= $.ord($t142))) break;
          L0["flname"] = $.add(L0["flname"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["flname"]);
      L0["flname"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["Lname"])), "AsString"));
      { const $t144 = 31;
        L0["j"] = (await $.call(C, "length", [L0["flname"]]));
        let $t145 = true;
        for (;;) {
          if (!$t145) { L0["j"] = $.succ(L0["j"], 1); }
          $t145 = false;
          if (!($.ord(L0["j"]) <= $.ord($t144))) break;
          L0["flname"] = $.add(L0["flname"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["flname"]);
      { const $t146 = 280;
        L0["j"] = 153;
        let $t147 = true;
        for (;;) {
          if (!$t147) { L0["j"] = $.succ(L0["j"], 1); }
          $t147 = false;
          if (!($.ord(L0["j"]) <= $.ord($t146))) break;
          L0["stmessage"] = $.add(L0["stmessage"], " ");
          await $.tick();
        }
      }
      L0["flname"] = $.add($.add((await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["Fname"])), "AsString")), " "), (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["Lname"])), "AsString")));
      { const $t148 = 31;
        L0["j"] = (await $.call(C, "length", [L0["flname"]]));
        let $t149 = true;
        for (;;) {
          if (!$t149) { L0["j"] = $.succ(L0["j"], 1); }
          $t149 = false;
          if (!($.ord(L0["j"]) <= $.ord($t148))) break;
          L0["flname"] = $.add(L0["flname"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["flname"]);
      L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["security"])), "AsString"));
      { const $t150 = 19;
        L0["j"] = (await $.call(C, "length", [L0["all"]]));
        let $t151 = true;
        for (;;) {
          if (!$t151) { L0["j"] = $.succ(L0["j"], 1); }
          $t151 = false;
          if (!($.ord(L0["j"]) <= $.ord($t150))) break;
          L0["all"] = $.add(L0["all"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add($.add(L0["stmessage"], L0["all"]), "       ");
      L0["all"] = (await $.mv((await $.mcall(L0["dset"], "FieldByName", ["LANG_CODE"])), "AsString"));
      { const $t152 = 2;
        L0["j"] = (await $.call(C, "length", [L0["all"]]));
        let $t153 = true;
        for (;;) {
          if (!$t153) { L0["j"] = $.succ(L0["j"], 1); }
          $t153 = false;
          if (!($.ord(L0["j"]) <= $.ord($t152))) break;
          L0["all"] = $.add(L0["all"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
      L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["reference"])), "AsString"));
      { const $t154 = 31;
        L0["j"] = (await $.call(C, "length", [L0["all"]]));
        let $t155 = true;
        for (;;) {
          if (!$t155) { L0["j"] = $.succ(L0["j"], 1); }
          $t155 = false;
          if (!($.ord(L0["j"]) <= $.ord($t154))) break;
          L0["all"] = $.add(L0["all"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
      { const $t156 = 422;
        L0["j"] = 375;
        let $t157 = true;
        for (;;) {
          if (!$t157) { L0["j"] = $.succ(L0["j"], 1); }
          $t157 = false;
          if (!($.ord(L0["j"]) <= $.ord($t156))) break;
          L0["stmessage"] = $.add(L0["stmessage"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["country"])), "AsString")));
      L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["city"])), "AsString"));
      { const $t158 = 14;
        L0["j"] = (await $.call(C, "length", [L0["all"]]));
        let $t159 = true;
        for (;;) {
          if (!$t159) { L0["j"] = $.succ(L0["j"], 1); }
          $t159 = false;
          if (!($.ord(L0["j"]) <= $.ord($t158))) break;
          L0["all"] = $.add(L0["all"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
      L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["workphone"])), "AsString"));
      { const $t160 = 9;
        L0["j"] = (await $.call(C, "length", [L0["all"]]));
        let $t161 = true;
        for (;;) {
          if (!$t161) { L0["j"] = $.succ(L0["j"], 1); }
          $t161 = false;
          if (!($.ord(L0["j"]) <= $.ord($t160))) break;
          L0["all"] = $.add(L0["all"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
      L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["homephone"])), "AsString"));
      { const $t162 = 9;
        L0["j"] = (await $.call(C, "length", [L0["all"]]));
        let $t163 = true;
        for (;;) {
          if (!$t163) { L0["j"] = $.succ(L0["j"], 1); }
          $t163 = false;
          if (!($.ord(L0["j"]) <= $.ord($t162))) break;
          L0["all"] = $.add(L0["all"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add($.add(L0["stmessage"], L0["all"]), "          ");
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cardbr")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cardbr")), "SetVariable", ["kl", (await $.mv((await $.mcall(L0["dset"], "FIELDBYNAME", ["FILIAL"])), "ASINTEGER"))])));
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cardbr")), "Open", []);
      L0["all"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cardbr")), "FieldByName", ["branch_code"])), "AsString"));
      { const $t164 = 6;
        L0["j"] = (await $.call(C, "length", [L0["all"]]));
        let $t165 = true;
        for (;;) {
          if (!$t165) { L0["j"] = $.succ(L0["j"], 1); }
          $t165 = false;
          if (!($.ord(L0["j"]) <= $.ord($t164))) break;
          L0["all"] = $.add(L0["all"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "fkod")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "fkod")), "SetVariable", ["KOD", (await $.mv((await $.mcall(L0["dset"], "FIELDBYNAME", ["FILIAL"])), "ASINTEGER"))])));
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "fkod")), "Open", []);
      L0["all"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "fkod")), "fieldbyname", ["kods"])), "Asstring"));
      { const $t166 = 5;
        L0["j"] = (await $.call(C, "length", [L0["all"]]));
        let $t167 = true;
        for (;;) {
          if (!$t167) { L0["j"] = $.succ(L0["j"], 1); }
          $t167 = false;
          if (!($.ord(L0["j"]) <= $.ord($t166))) break;
          L0["all"] = $.add(L0["all"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
      L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["address"])), "AsString"));
      { const $t168 = 47;
        L0["j"] = (await $.call(C, "length", [L0["all"]]));
        let $t169 = true;
        for (;;) {
          if (!$t169) { L0["j"] = $.succ(L0["j"], 1); }
          $t169 = false;
          if (!($.ord(L0["j"]) <= $.ord($t168))) break;
          L0["all"] = $.add(L0["all"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
      { const $t170 = 668;
        L0["j"] = 532;
        let $t171 = true;
        for (;;) {
          if (!$t171) { L0["j"] = $.succ(L0["j"], 1); }
          $t171 = false;
          if (!($.ord(L0["j"]) <= $.ord($t170))) break;
          L0["stmessage"] = $.add(L0["stmessage"], " ");
          await $.tick();
        }
      }
      L0["all"] = (await $.call(C, "FormatDateTime", ["YYYYMMDD", (await $.call(C, "StrToDate", [(await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["birthday"])), "AsString"))]))]));
      { const $t172 = 7;
        L0["j"] = (await $.call(C, "length", [L0["all"]]));
        let $t173 = true;
        for (;;) {
          if (!$t173) { L0["j"] = $.succ(L0["j"], 1); }
          $t173 = false;
          if (!($.ord(L0["j"]) <= $.ord($t172))) break;
          L0["all"] = $.add(L0["all"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
      { const $t174 = 740;
        L0["j"] = 677;
        let $t175 = true;
        for (;;) {
          if (!$t175) { L0["j"] = $.succ(L0["j"], 1); }
          $t175 = false;
          if (!($.ord(L0["j"]) <= $.ord($t174))) break;
          L0["stmessage"] = $.add(L0["stmessage"], " ");
          await $.tick();
        }
      }
      await $.mset((await $.mv((await $.v(C, "DataMod_CARDS")), "umumi1")), "Active", false);
      await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "umumi1")), "SQL")), "Clear", []);
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "umumi1")), "SQL")), "Add", [$.add($.add($.add($.add("Select * from card_cardtype where (NAME ='", (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["cardtype"])), "AsString"))), "')and(currency = '"), (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["currency"])), "AsString"))), "')")])));
      await $.mset((await $.mv((await $.v(C, "DataMod_CARDS")), "umumi1")), "Active", true);
      L0["all"] = "";
      L0["all"] = $.add(L0["bankid"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "umumi1")), "fieldbyname", ["code"])), "AsString")));
      { const $t176 = 23;
        L0["j"] = (await $.call(C, "length", [L0["all"]]));
        let $t177 = true;
        for (;;) {
          if (!$t177) { L0["j"] = $.succ(L0["j"], 1); }
          $t177 = false;
          if (!($.ord(L0["j"]) <= $.ord($t176))) break;
          L0["all"] = $.add(L0["all"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add($.add(L0["stmessage"], L0["all"]), "                        ");
      L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["rbsnumber"])), "AsString"));
      { const $t178 = 31;
        L0["j"] = (await $.call(C, "length", [L0["all"]]));
        let $t179 = true;
        for (;;) {
          if (!$t179) { L0["j"] = $.succ(L0["j"], 1); }
          $t179 = false;
          if (!($.ord(L0["j"]) <= $.ord($t178))) break;
          L0["all"] = $.add(L0["all"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
      { const $t180 = 852;
        L0["j"] = 821;
        let $t181 = true;
        for (;;) {
          if (!$t181) { L0["j"] = $.succ(L0["j"], 1); }
          $t181 = false;
          if (!($.ord(L0["j"]) <= $.ord($t180))) break;
          L0["stmessage"] = $.add(L0["stmessage"], " ");
          await $.tick();
        }
      }
      L0["clientip"] = $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "umumi1")), "fieldbyname", ["SCHEME"])), "AsString")), "  ");
      L0["stmessage"] = $.add(L0["stmessage"], L0["clientip"]);
      L0["stmessage"] = $.add($.add(L0["stmessage"], (await $.call(C, "copy", [L0["bankid"], 2, 2]))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "umumi1")), "fieldbyname", ["service"])), "AsString")));
      if ($.truthy($.eq((await $.call(C, "Length", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "umumi1")), "fieldbyname", ["service"])), "AsString"))])), 3))) {
        L0["stmessage"] = $.add($.add(L0["stmessage"], " "), "Y");
      }
      if ($.truthy($.eq((await $.call(C, "Length", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "umumi1")), "fieldbyname", ["service"])), "AsString"))])), 4))) {
        L0["stmessage"] = $.add(L0["stmessage"], "Y");
      }
      L0["all"] = "";
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "fcur")), "close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "FCUR")), "SetVariable", ["CUR", (await $.call(C, "copy", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["currency"])), "AsString")), 1, 3]))])));
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "FCUR")), "Open", []);
      L0["all"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "FCUR")), "Fieldbyname", ["INTID"])), "asstring"));
      L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
      L0["all"] = "";
      L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["credit_lim"])), "AsString"));
      { const $t182 = 12;
        L0["j"] = (await $.call(C, "length", [L0["all"]]));
        let $t183 = true;
        for (;;) {
          if (!$t183) { L0["j"] = $.succ(L0["j"], 1); }
          $t183 = false;
          if (!($.ord(L0["j"]) <= $.ord($t182))) break;
          L0["all"] = $.add("0", L0["all"]);
          await $.tick();
        }
      }
      L0["stmessage"] = $.add($.add($.add(L0["stmessage"], L0["all"]), "00"), "        C");
      L0["stmessage"] = $.add(L0["stmessage"], (await $.call(C, "FormatDateTime", ["YYMM", (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["Expiry"])), "AsDateTime"))])));
      L0["all"] = "";
      L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["embossname"])), "AsString"));
      { const $t184 = 25;
        L0["j"] = (await $.call(C, "length", [L0["all"]]));
        let $t185 = true;
        for (;;) {
          if (!$t185) { L0["j"] = $.succ(L0["j"], 1); }
          $t185 = false;
          if (!($.ord(L0["j"]) <= $.ord($t184))) break;
          L0["all"] = $.add(L0["all"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
      L0["all"] = "";
      L0["all"] = (await $.call(C, "copy", [(await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["company"])), "AsString")), 1, 22]));
      { const $t186 = 31;
        L0["j"] = (await $.call(C, "length", [L0["all"]]));
        let $t187 = true;
        for (;;) {
          if (!$t187) { L0["j"] = $.succ(L0["j"], 1); }
          $t187 = false;
          if (!($.ord(L0["j"]) <= $.ord($t186))) break;
          L0["all"] = $.add(L0["all"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], (await $.call(C, "UpperCase", [L0["all"]])));
      { const $t188 = 1451;
        L0["j"] = 955;
        let $t189 = true;
        for (;;) {
          if (!$t189) { L0["j"] = $.succ(L0["j"], 1); }
          $t189 = false;
          if (!($.ord(L0["j"]) <= $.ord($t188))) break;
          L0["stmessage"] = $.add(L0["stmessage"], " ");
          await $.tick();
        }
      }
      L0["stmessage"] = $.add(L0["stmessage"], "*");
      await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["stmessage"]])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["donenewcard", [(await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["id"])), "AsInteger")), (await $.call(C, "copy", [L0["filename"], $.sub((await $.call(C, "length", [L0["filename"]])), 11), 12]))]])));
    } else {
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["messtype"])), "AsInteger")), 2)), async () => ($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["status"])), "AsInteger")), 1)))))) {
        L0["stmessage"] = "";
        L0["rowcount"] = 0;
        await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t190) => { L0["f"] = $t190; })])));
        while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
          L0["rowcount"] = $.add(L0["rowcount"], 1);
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t191) => { L0["f"] = $t191; })])));
          await $.tick();
        }
        await $.stmt((await $.call(C, "Append", [$.ref(async () => L0["f"], async ($t192) => { L0["f"] = $t192; })])));
        L0["rownum"] = (await $.call(C, "IntToStr", [$.add(L0["rowcount"], 1)]));
        { const $t193 = 5;
          L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
          let $t194 = true;
          for (;;) {
            if (!$t194) { L0["j"] = $.succ(L0["j"], 1); }
            $t194 = false;
            if (!($.ord(L0["j"]) <= $.ord($t193))) break;
            L0["rownum"] = $.add("0", L0["rownum"]);
            await $.tick();
          }
        }
        L0["stmessage"] = $.add("RD", L0["rownum"]);
        L0["rownum"] = (await $.call(C, "IntToStr", [L0["rowcount"]]));
        { const $t195 = 9;
          L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
          let $t196 = true;
          for (;;) {
            if (!$t196) { L0["j"] = $.succ(L0["j"], 1); }
            $t196 = false;
            if (!($.ord(L0["j"]) <= $.ord($t195))) break;
            L0["rownum"] = $.add(L0["rownum"], " ");
            await $.tick();
          }
        }
        L0["stmessage"] = $.add($.add($.add($.add(L0["stmessage"], L0["rownum"]), "1203"), "                    "), (await $.call(C, "FormatDateTime", ["YYYYMMDD", (await $.v(C, "date"))])));
        L0["paspst"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["Passport"])), "AsString"));
        { const $t197 = 31;
          L0["j"] = (await $.call(C, "length", [L0["paspst"]]));
          let $t198 = true;
          for (;;) {
            if (!$t198) { L0["j"] = $.succ(L0["j"], 1); }
            $t198 = false;
            if (!($.ord(L0["j"]) <= $.ord($t197))) break;
            L0["paspst"] = $.add(L0["paspst"], " ");
            await $.tick();
          }
        }
        L0["stmessage"] = $.add(L0["stmessage"], L0["paspst"]);
        if ($.truthy($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["resident"])), "AsString")), "RESIDENT"))) {
          L0["clientip"] = "PR";
        } else {
          L0["clientip"] = "PNR";
        }
        { const $t199 = 5;
          L0["j"] = (await $.call(C, "length", [L0["clientip"]]));
          let $t200 = true;
          for (;;) {
            if (!$t200) { L0["j"] = $.succ(L0["j"], 1); }
            $t200 = false;
            if (!($.ord(L0["j"]) <= $.ord($t199))) break;
            L0["clientip"] = $.add(L0["clientip"], " ");
            await $.tick();
          }
        }
        L0["stmessage"] = $.add(L0["stmessage"], L0["clientip"]);
        L0["flname"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["Fname"])), "AsString"));
        { const $t201 = 31;
          L0["j"] = (await $.call(C, "length", [L0["flname"]]));
          let $t202 = true;
          for (;;) {
            if (!$t202) { L0["j"] = $.succ(L0["j"], 1); }
            $t202 = false;
            if (!($.ord(L0["j"]) <= $.ord($t201))) break;
            L0["flname"] = $.add(L0["flname"], " ");
            await $.tick();
          }
        }
        L0["stmessage"] = $.add(L0["stmessage"], L0["flname"]);
        L0["flname"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["Lname"])), "AsString"));
        { const $t203 = 31;
          L0["j"] = (await $.call(C, "length", [L0["flname"]]));
          let $t204 = true;
          for (;;) {
            if (!$t204) { L0["j"] = $.succ(L0["j"], 1); }
            $t204 = false;
            if (!($.ord(L0["j"]) <= $.ord($t203))) break;
            L0["flname"] = $.add(L0["flname"], " ");
            await $.tick();
          }
        }
        L0["stmessage"] = $.add(L0["stmessage"], L0["flname"]);
        { const $t205 = 280;
          L0["j"] = 153;
          let $t206 = true;
          for (;;) {
            if (!$t206) { L0["j"] = $.succ(L0["j"], 1); }
            $t206 = false;
            if (!($.ord(L0["j"]) <= $.ord($t205))) break;
            L0["stmessage"] = $.add(L0["stmessage"], " ");
            await $.tick();
          }
        }
        L0["flname"] = $.add($.add((await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["Fname"])), "AsString")), " "), (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["Lname"])), "AsString")));
        { const $t207 = 31;
          L0["j"] = (await $.call(C, "length", [L0["flname"]]));
          let $t208 = true;
          for (;;) {
            if (!$t208) { L0["j"] = $.succ(L0["j"], 1); }
            $t208 = false;
            if (!($.ord(L0["j"]) <= $.ord($t207))) break;
            L0["flname"] = $.add(L0["flname"], " ");
            await $.tick();
          }
        }
        L0["stmessage"] = $.add(L0["stmessage"], L0["flname"]);
        L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["security"])), "AsString"));
        { const $t209 = 19;
          L0["j"] = (await $.call(C, "length", [L0["all"]]));
          let $t210 = true;
          for (;;) {
            if (!$t210) { L0["j"] = $.succ(L0["j"], 1); }
            $t210 = false;
            if (!($.ord(L0["j"]) <= $.ord($t209))) break;
            L0["all"] = $.add(L0["all"], " ");
            await $.tick();
          }
        }
        L0["stmessage"] = $.add($.add(L0["stmessage"], L0["all"]), "       ");
        L0["all"] = (await $.mv((await $.mcall(L0["dset"], "FieldByName", ["LANG_CODE"])), "AsString"));
        { const $t211 = 2;
          L0["j"] = (await $.call(C, "length", [L0["all"]]));
          let $t212 = true;
          for (;;) {
            if (!$t212) { L0["j"] = $.succ(L0["j"], 1); }
            $t212 = false;
            if (!($.ord(L0["j"]) <= $.ord($t211))) break;
            L0["all"] = $.add(L0["all"], " ");
            await $.tick();
          }
        }
        L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
        L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["reference"])), "AsString"));
        { const $t213 = 31;
          L0["j"] = (await $.call(C, "length", [L0["all"]]));
          let $t214 = true;
          for (;;) {
            if (!$t214) { L0["j"] = $.succ(L0["j"], 1); }
            $t214 = false;
            if (!($.ord(L0["j"]) <= $.ord($t213))) break;
            L0["all"] = $.add(L0["all"], " ");
            await $.tick();
          }
        }
        L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
        { const $t215 = 422;
          L0["j"] = 375;
          let $t216 = true;
          for (;;) {
            if (!$t216) { L0["j"] = $.succ(L0["j"], 1); }
            $t216 = false;
            if (!($.ord(L0["j"]) <= $.ord($t215))) break;
            L0["stmessage"] = $.add(L0["stmessage"], " ");
            await $.tick();
          }
        }
        L0["stmessage"] = $.add(L0["stmessage"], (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["country"])), "AsString")));
        L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["city"])), "AsString"));
        { const $t217 = 14;
          L0["j"] = (await $.call(C, "length", [L0["all"]]));
          let $t218 = true;
          for (;;) {
            if (!$t218) { L0["j"] = $.succ(L0["j"], 1); }
            $t218 = false;
            if (!($.ord(L0["j"]) <= $.ord($t217))) break;
            L0["all"] = $.add(L0["all"], " ");
            await $.tick();
          }
        }
        L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
        L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["workphone"])), "AsString"));
        { const $t219 = 9;
          L0["j"] = (await $.call(C, "length", [L0["all"]]));
          let $t220 = true;
          for (;;) {
            if (!$t220) { L0["j"] = $.succ(L0["j"], 1); }
            $t220 = false;
            if (!($.ord(L0["j"]) <= $.ord($t219))) break;
            L0["all"] = $.add(L0["all"], " ");
            await $.tick();
          }
        }
        L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
        L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["homephone"])), "AsString"));
        { const $t221 = 9;
          L0["j"] = (await $.call(C, "length", [L0["all"]]));
          let $t222 = true;
          for (;;) {
            if (!$t222) { L0["j"] = $.succ(L0["j"], 1); }
            $t222 = false;
            if (!($.ord(L0["j"]) <= $.ord($t221))) break;
            L0["all"] = $.add(L0["all"], " ");
            await $.tick();
          }
        }
        L0["stmessage"] = $.add($.add(L0["stmessage"], L0["all"]), "          ");
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "fkod")), "Close", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "fkod")), "SetVariable", ["KOD", (await $.mv((await $.mcall(L0["dset"], "FIELDBYNAME", ["FILIAL"])), "ASINTEGER"))])));
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "fkod")), "Open", []);
        L0["all"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "fkod")), "fieldbyname", ["kods"])), "Asstring"));
        { const $t223 = 5;
          L0["j"] = (await $.call(C, "length", [L0["all"]]));
          let $t224 = true;
          for (;;) {
            if (!$t224) { L0["j"] = $.succ(L0["j"], 1); }
            $t224 = false;
            if (!($.ord(L0["j"]) <= $.ord($t223))) break;
            L0["all"] = $.add(L0["all"], " ");
            await $.tick();
          }
        }
        L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
        L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["address"])), "AsString"));
        { const $t225 = 47;
          L0["j"] = (await $.call(C, "length", [L0["all"]]));
          let $t226 = true;
          for (;;) {
            if (!$t226) { L0["j"] = $.succ(L0["j"], 1); }
            $t226 = false;
            if (!($.ord(L0["j"]) <= $.ord($t225))) break;
            L0["all"] = $.add(L0["all"], " ");
            await $.tick();
          }
        }
        L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
        { const $t227 = 668;
          L0["j"] = 525;
          let $t228 = true;
          for (;;) {
            if (!$t228) { L0["j"] = $.succ(L0["j"], 1); }
            $t228 = false;
            if (!($.ord(L0["j"]) <= $.ord($t227))) break;
            L0["stmessage"] = $.add(L0["stmessage"], " ");
            await $.tick();
          }
        }
        L0["all"] = (await $.call(C, "FormatDateTime", ["YYYYMMDD", (await $.call(C, "StrToDate", [(await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["birthday"])), "AsString"))]))]));
        { const $t229 = 7;
          L0["j"] = (await $.call(C, "length", [L0["all"]]));
          let $t230 = true;
          for (;;) {
            if (!$t230) { L0["j"] = $.succ(L0["j"], 1); }
            $t230 = false;
            if (!($.ord(L0["j"]) <= $.ord($t229))) break;
            L0["all"] = $.add(L0["all"], " ");
            await $.tick();
          }
        }
        L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
        { const $t231 = 740;
          L0["j"] = 677;
          let $t232 = true;
          for (;;) {
            if (!$t232) { L0["j"] = $.succ(L0["j"], 1); }
            $t232 = false;
            if (!($.ord(L0["j"]) <= $.ord($t231))) break;
            L0["stmessage"] = $.add(L0["stmessage"], " ");
            await $.tick();
          }
        }
        await $.mset((await $.mv((await $.v(C, "DataMod_CARDS")), "umumi1")), "Active", false);
        await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "umumi1")), "SQL")), "Clear", []);
        await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "umumi1")), "SQL")), "Add", [$.add($.add($.add($.add("Select * from card_cardtype where (name ='", (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["cardtype"])), "AsString"))), "')and(currency = '"), (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["currency"])), "AsString"))), "')")])));
        await $.mset((await $.mv((await $.v(C, "DataMod_CARDS")), "umumi1")), "Active", true);
        L0["all"] = "";
        L0["all"] = $.add(L0["bankid"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "umumi1")), "fieldbyname", ["code"])), "AsString")));
        { const $t233 = 23;
          L0["j"] = (await $.call(C, "length", [L0["all"]]));
          let $t234 = true;
          for (;;) {
            if (!$t234) { L0["j"] = $.succ(L0["j"], 1); }
            $t234 = false;
            if (!($.ord(L0["j"]) <= $.ord($t233))) break;
            L0["all"] = $.add(L0["all"], " ");
            await $.tick();
          }
        }
        L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
        { const $t235 = 820;
          L0["j"] = 765;
          let $t236 = true;
          for (;;) {
            if (!$t236) { L0["j"] = $.succ(L0["j"], 1); }
            $t236 = false;
            if (!($.ord(L0["j"]) <= $.ord($t235))) break;
            L0["stmessage"] = $.add(L0["stmessage"], " ");
            await $.tick();
          }
        }
        L0["all"] = "";
        L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["MAINCARD"])), "AsString"));
        { const $t237 = 31;
          L0["j"] = (await $.call(C, "length", [L0["all"]]));
          let $t238 = true;
          for (;;) {
            if (!$t238) { L0["j"] = $.succ(L0["j"], 1); }
            $t238 = false;
            if (!($.ord(L0["j"]) <= $.ord($t237))) break;
            L0["all"] = $.add(L0["all"], " ");
            await $.tick();
          }
        }
        L0["stmessage"] = $.add($.add(L0["stmessage"], L0["all"]), "      ");
        L0["stmessage"] = $.add($.add(L0["stmessage"], (await $.call(C, "copy", [L0["bankid"], 2, 2]))), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "umumi1")), "fieldbyname", ["service"])), "AsString")));
        if ($.truthy($.eq((await $.call(C, "Length", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "umumi1")), "fieldbyname", ["service"])), "AsString"))])), 3))) {
          L0["stmessage"] = $.add($.add(L0["stmessage"], " "), "N");
        }
        if ($.truthy($.eq((await $.call(C, "Length", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "umumi1")), "fieldbyname", ["service"])), "AsString"))])), 4))) {
          L0["stmessage"] = $.add(L0["stmessage"], "N");
        }
        L0["all"] = "";
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "fcur")), "close", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "FCUR")), "SetVariable", ["CUR", (await $.call(C, "copy", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["currency"])), "AsString")), 1, 3]))])));
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "FCUR")), "Open", []);
        L0["all"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "FCUR")), "Fieldbyname", ["INTID"])), "asstring"));
        L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
        { const $t239 = 891;
          L0["j"] = 869;
          let $t240 = true;
          for (;;) {
            if (!$t240) { L0["j"] = $.succ(L0["j"], 1); }
            $t240 = false;
            if (!($.ord(L0["j"]) <= $.ord($t239))) break;
            L0["stmessage"] = $.add(L0["stmessage"], " ");
            await $.tick();
          }
        }
        L0["stmessage"] = $.add(L0["stmessage"], "C");
        L0["all"] = (await $.call(C, "FormatDateTime", ["YYMM", (await $.call(C, "strtodate", [(await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["expiry"])), "AsString"))]))]));
        { const $t241 = 3;
          L0["j"] = (await $.call(C, "length", [L0["all"]]));
          let $t242 = true;
          for (;;) {
            if (!$t242) { L0["j"] = $.succ(L0["j"], 1); }
            $t242 = false;
            if (!($.ord(L0["j"]) <= $.ord($t241))) break;
            L0["all"] = $.add(L0["all"], " ");
            await $.tick();
          }
        }
        L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
        L0["all"] = "";
        L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["embossname"])), "AsString"));
        { const $t243 = 25;
          L0["j"] = (await $.call(C, "length", [L0["all"]]));
          let $t244 = true;
          for (;;) {
            if (!$t244) { L0["j"] = $.succ(L0["j"], 1); }
            $t244 = false;
            if (!($.ord(L0["j"]) <= $.ord($t243))) break;
            L0["all"] = $.add(L0["all"], " ");
            await $.tick();
          }
        }
        L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
        L0["all"] = "";
        L0["all"] = (await $.call(C, "copy", [(await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["company"])), "AsString")), 1, 22]));
        { const $t245 = 31;
          L0["j"] = (await $.call(C, "length", [L0["all"]]));
          let $t246 = true;
          for (;;) {
            if (!$t246) { L0["j"] = $.succ(L0["j"], 1); }
            $t246 = false;
            if (!($.ord(L0["j"]) <= $.ord($t245))) break;
            L0["all"] = $.add(L0["all"], " ");
            await $.tick();
          }
        }
        L0["stmessage"] = $.add(L0["stmessage"], (await $.call(C, "UpperCase", [L0["all"]])));
        { const $t247 = 1451;
          L0["j"] = 955;
          let $t248 = true;
          for (;;) {
            if (!$t248) { L0["j"] = $.succ(L0["j"], 1); }
            $t248 = false;
            if (!($.ord(L0["j"]) <= $.ord($t247))) break;
            L0["stmessage"] = $.add(L0["stmessage"], " ");
            await $.tick();
          }
        }
        L0["stmessage"] = $.add(L0["stmessage"], "*");
        await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["stmessage"]])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["donesupcard", [(await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["id"])), "AsInteger"))]])));
      } else {
        if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["messtype"])), "AsInteger")), 3)), async () => ($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["status"])), "AsInteger")), 1)))))) {
          L0["stmessage"] = "";
          L0["rowcount"] = 0;
          await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t249) => { L0["f"] = $t249; })])));
          while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
            L0["rowcount"] = $.add(L0["rowcount"], 1);
            await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t250) => { L0["f"] = $t250; })])));
            await $.tick();
          }
          await $.stmt((await $.call(C, "Append", [$.ref(async () => L0["f"], async ($t251) => { L0["f"] = $t251; })])));
          L0["rownum"] = (await $.call(C, "IntToStr", [$.add(L0["rowcount"], 1)]));
          { const $t252 = 5;
            L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
            let $t253 = true;
            for (;;) {
              if (!$t253) { L0["j"] = $.succ(L0["j"], 1); }
              $t253 = false;
              if (!($.ord(L0["j"]) <= $.ord($t252))) break;
              L0["rownum"] = $.add("0", L0["rownum"]);
              await $.tick();
            }
          }
          L0["stmessage"] = $.add("RD", L0["rownum"]);
          L0["rownum"] = (await $.call(C, "inttostr", [L0["rowcount"]]));
          { const $t254 = 9;
            L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
            let $t255 = true;
            for (;;) {
              if (!$t255) { L0["j"] = $.succ(L0["j"], 1); }
              $t255 = false;
              if (!($.ord(L0["j"]) <= $.ord($t254))) break;
              L0["rownum"] = $.add(L0["rownum"], " ");
              await $.tick();
            }
          }
          L0["stmessage"] = $.add($.add($.add($.add(L0["stmessage"], L0["rownum"]), (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["withp"])), "AsString"))), "                    "), (await $.call(C, "FormatDateTime", ["yyyymmdd", (await $.v(C, "date"))])));
          { const $t256 = 764;
            L0["j"] = 51;
            let $t257 = true;
            for (;;) {
              if (!$t257) { L0["j"] = $.succ(L0["j"], 1); }
              $t257 = false;
              if (!($.ord(L0["j"]) <= $.ord($t256))) break;
              L0["stmessage"] = $.add(L0["stmessage"], " ");
              await $.tick();
            }
          }
          L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["cardnumber"])), "AsString"));
          { const $t258 = 23;
            L0["j"] = (await $.call(C, "length", [L0["all"]]));
            let $t259 = true;
            for (;;) {
              if (!$t259) { L0["j"] = $.succ(L0["j"], 1); }
              $t259 = false;
              if (!($.ord(L0["j"]) <= $.ord($t258))) break;
              L0["all"] = $.add(L0["all"], " ");
              await $.tick();
            }
          }
          L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
          { const $t260 = 892;
            L0["j"] = 789;
            let $t261 = true;
            for (;;) {
              if (!$t261) { L0["j"] = $.succ(L0["j"], 1); }
              $t261 = false;
              if (!($.ord(L0["j"]) <= $.ord($t260))) break;
              L0["stmessage"] = $.add(L0["stmessage"], " ");
              await $.tick();
            }
          }
          L0["stmessage"] = $.add(L0["stmessage"], (await $.call(C, "FormatDateTime", ["yymm", (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["expiry"])), "AsDateTime"))])));
          { const $t262 = 1451;
            L0["j"] = 897;
            let $t263 = true;
            for (;;) {
              if (!$t263) { L0["j"] = $.succ(L0["j"], 1); }
              $t263 = false;
              if (!($.ord(L0["j"]) <= $.ord($t262))) break;
              L0["stmessage"] = $.add(L0["stmessage"], " ");
              await $.tick();
            }
          }
          L0["stmessage"] = $.add(L0["stmessage"], "*");
          await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["stmessage"]])));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["doneprolongation", [(await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["id"])), "AsInteger"))]])));
        } else {
          if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["messtype"])), "AsInteger")), 4)), async () => ($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["status"])), "AsInteger")), 1)))))) {
            L0["stmessage"] = "";
            L0["rowcount"] = 0;
            await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t264) => { L0["f"] = $t264; })])));
            while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
              L0["rowcount"] = $.add(L0["rowcount"], 1);
              await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t265) => { L0["f"] = $t265; })])));
              await $.tick();
            }
            await $.stmt((await $.call(C, "Append", [$.ref(async () => L0["f"], async ($t266) => { L0["f"] = $t266; })])));
            L0["rownum"] = (await $.call(C, "IntToStr", [$.add(L0["rowcount"], 1)]));
            { const $t267 = 5;
              L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
              let $t268 = true;
              for (;;) {
                if (!$t268) { L0["j"] = $.succ(L0["j"], 1); }
                $t268 = false;
                if (!($.ord(L0["j"]) <= $.ord($t267))) break;
                L0["rownum"] = $.add("0", L0["rownum"]);
                await $.tick();
              }
            }
            L0["stmessage"] = $.add("RD", L0["rownum"]);
            L0["rownum"] = (await $.call(C, "inttostr", [L0["rowcount"]]));
            { const $t269 = 9;
              L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
              let $t270 = true;
              for (;;) {
                if (!$t270) { L0["j"] = $.succ(L0["j"], 1); }
                $t270 = false;
                if (!($.ord(L0["j"]) <= $.ord($t269))) break;
                L0["rownum"] = $.add(L0["rownum"], " ");
                await $.tick();
              }
            }
            L0["stmessage"] = $.add($.add($.add($.add(L0["stmessage"], L0["rownum"]), (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["withp"])), "AsString"))), "                    "), (await $.call(C, "FormatDateTime", ["yyyymmdd", (await $.v(C, "date"))])));
            { const $t271 = 764;
              L0["j"] = 51;
              let $t272 = true;
              for (;;) {
                if (!$t272) { L0["j"] = $.succ(L0["j"], 1); }
                $t272 = false;
                if (!($.ord(L0["j"]) <= $.ord($t271))) break;
                L0["stmessage"] = $.add(L0["stmessage"], " ");
                await $.tick();
              }
            }
            L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["cardnumber"])), "AsString"));
            { const $t273 = 23;
              L0["j"] = (await $.call(C, "length", [L0["all"]]));
              let $t274 = true;
              for (;;) {
                if (!$t274) { L0["j"] = $.succ(L0["j"], 1); }
                $t274 = false;
                if (!($.ord(L0["j"]) <= $.ord($t273))) break;
                L0["all"] = $.add(L0["all"], " ");
                await $.tick();
              }
            }
            L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
            { const $t275 = 1451;
              L0["j"] = 789;
              let $t276 = true;
              for (;;) {
                if (!$t276) { L0["j"] = $.succ(L0["j"], 1); }
                $t276 = false;
                if (!($.ord(L0["j"]) <= $.ord($t275))) break;
                L0["stmessage"] = $.add(L0["stmessage"], " ");
                await $.tick();
              }
            }
            L0["stmessage"] = $.add(L0["stmessage"], "*");
            await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["stmessage"]])));
            await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["donereplace", [(await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["id"])), "AsInteger"))]])));
          } else {
            if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["messtype"])), "AsInteger")), 5)), async () => ($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["status"])), "AsInteger")), 1)))))) {
              L0["stmessage"] = "";
              L0["rowcount"] = 0;
              await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t277) => { L0["f"] = $t277; })])));
              while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
                L0["rowcount"] = $.add(L0["rowcount"], 1);
                await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t278) => { L0["f"] = $t278; })])));
                await $.tick();
              }
              await $.stmt((await $.call(C, "Append", [$.ref(async () => L0["f"], async ($t279) => { L0["f"] = $t279; })])));
              L0["rownum"] = (await $.call(C, "IntToStr", [$.add(L0["rowcount"], 1)]));
              { const $t280 = 5;
                L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
                let $t281 = true;
                for (;;) {
                  if (!$t281) { L0["j"] = $.succ(L0["j"], 1); }
                  $t281 = false;
                  if (!($.ord(L0["j"]) <= $.ord($t280))) break;
                  L0["rownum"] = $.add("0", L0["rownum"]);
                  await $.tick();
                }
              }
              L0["stmessage"] = $.add("RD", L0["rownum"]);
              L0["rownum"] = (await $.call(C, "IntToStr", [L0["rowcount"]]));
              { const $t282 = 9;
                L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
                let $t283 = true;
                for (;;) {
                  if (!$t283) { L0["j"] = $.succ(L0["j"], 1); }
                  $t283 = false;
                  if (!($.ord(L0["j"]) <= $.ord($t282))) break;
                  L0["rownum"] = $.add(L0["rownum"], " ");
                  await $.tick();
                }
              }
              L0["stmessage"] = $.add($.add($.add($.add(L0["stmessage"], L0["rownum"]), "0300"), "                    "), (await $.call(C, "FormatDateTime", ["YYYYMMDD", (await $.v(C, "date"))])));
              { const $t284 = 788;
                L0["j"] = 51;
                let $t285 = true;
                for (;;) {
                  if (!$t285) { L0["j"] = $.succ(L0["j"], 1); }
                  $t285 = false;
                  if (!($.ord(L0["j"]) <= $.ord($t284))) break;
                  L0["stmessage"] = $.add(L0["stmessage"], " ");
                  await $.tick();
                }
              }
              L0["all"] = "";
              L0["all"] = (await $.call(C, "copy", [(await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["rbsnumber"])), "AsString")), 1, (await $.call(C, "length", [(await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["rbsnumber"])), "AsString"))]))]));
              { const $t286 = 31;
                L0["j"] = (await $.call(C, "length", [L0["all"]]));
                let $t287 = true;
                for (;;) {
                  if (!$t287) { L0["j"] = $.succ(L0["j"], 1); }
                  $t287 = false;
                  if (!($.ord(L0["j"]) <= $.ord($t286))) break;
                  L0["all"] = $.add(L0["all"], " ");
                  await $.tick();
                }
              }
              L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
              { const $t288 = 865;
                L0["j"] = 821;
                let $t289 = true;
                for (;;) {
                  if (!$t289) { L0["j"] = $.succ(L0["j"], 1); }
                  $t289 = false;
                  if (!($.ord(L0["j"]) <= $.ord($t288))) break;
                  L0["stmessage"] = $.add(L0["stmessage"], " ");
                  await $.tick();
                }
              }
              L0["all"] = "";
              await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "fcur")), "close", []);
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "FCUR")), "SetVariable", ["CUR", (await $.call(C, "copy", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["currency"])), "AsString")), 1, 3]))])));
              await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "FCUR")), "Open", []);
              L0["all"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "FCUR")), "Fieldbyname", ["INTID"])), "asstring"));
              L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
              L0["all"] = "";
              L0["all"] = $.add((await $.call(C, "floattostr", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["credit_lim"])), "Asfloat"))])), "00");
              { const $t290 = 14;
                L0["j"] = (await $.call(C, "length", [L0["all"]]));
                let $t291 = true;
                for (;;) {
                  if (!$t291) { L0["j"] = $.succ(L0["j"], 1); }
                  $t291 = false;
                  if (!($.ord(L0["j"]) <= $.ord($t290))) break;
                  L0["all"] = $.add("0", L0["all"]);
                  await $.tick();
                }
              }
              L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
              { const $t292 = 1451;
                L0["j"] = 884;
                let $t293 = true;
                for (;;) {
                  if (!$t293) { L0["j"] = $.succ(L0["j"], 1); }
                  $t293 = false;
                  if (!($.ord(L0["j"]) <= $.ord($t292))) break;
                  L0["stmessage"] = $.add(L0["stmessage"], " ");
                  await $.tick();
                }
              }
              L0["stmessage"] = $.add(L0["stmessage"], "*");
              await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["stmessage"]])));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["donecredit", [(await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["id"])), "AsInteger"))]])));
            } else {
              if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["messtype"])), "AsInteger")), 12)), async () => ($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["status"])), "AsInteger")), 1)))))) {
                L0["stmessage"] = "";
                L0["rowcount"] = 0;
                await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t294) => { L0["f"] = $t294; })])));
                while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
                  L0["rowcount"] = $.add(L0["rowcount"], 1);
                  await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t295) => { L0["f"] = $t295; })])));
                  await $.tick();
                }
                await $.stmt((await $.call(C, "Append", [$.ref(async () => L0["f"], async ($t296) => { L0["f"] = $t296; })])));
                L0["rownum"] = (await $.call(C, "IntToStr", [$.add(L0["rowcount"], 1)]));
                { const $t297 = 5;
                  L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
                  let $t298 = true;
                  for (;;) {
                    if (!$t298) { L0["j"] = $.succ(L0["j"], 1); }
                    $t298 = false;
                    if (!($.ord(L0["j"]) <= $.ord($t297))) break;
                    L0["rownum"] = $.add("0", L0["rownum"]);
                    await $.tick();
                  }
                }
                L0["stmessage"] = $.add("RD", L0["rownum"]);
                L0["rownum"] = (await $.call(C, "inttostr", [L0["rowcount"]]));
                { const $t299 = 9;
                  L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
                  let $t300 = true;
                  for (;;) {
                    if (!$t300) { L0["j"] = $.succ(L0["j"], 1); }
                    $t300 = false;
                    if (!($.ord(L0["j"]) <= $.ord($t299))) break;
                    L0["rownum"] = $.add(L0["rownum"], " ");
                    await $.tick();
                  }
                }
                L0["stmessage"] = $.add(L0["stmessage"], L0["rownum"]);
                L0["stmessage"] = $.add($.add($.add(L0["stmessage"], "0400"), "                    "), (await $.call(C, "FormatDateTime", ["yyyymmdd", (await $.v(C, "date"))])));
                { const $t301 = 764;
                  L0["j"] = 51;
                  let $t302 = true;
                  for (;;) {
                    if (!$t302) { L0["j"] = $.succ(L0["j"], 1); }
                    $t302 = false;
                    if (!($.ord(L0["j"]) <= $.ord($t301))) break;
                    L0["stmessage"] = $.add(L0["stmessage"], " ");
                    await $.tick();
                  }
                }
                L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["cardnumber"])), "AsString"));
                { const $t303 = 23;
                  L0["j"] = (await $.call(C, "length", [L0["all"]]));
                  let $t304 = true;
                  for (;;) {
                    if (!$t304) { L0["j"] = $.succ(L0["j"], 1); }
                    $t304 = false;
                    if (!($.ord(L0["j"]) <= $.ord($t303))) break;
                    L0["all"] = $.add(L0["all"], " ");
                    await $.tick();
                  }
                }
                L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
                { const $t305 = 1451;
                  L0["j"] = 789;
                  let $t306 = true;
                  for (;;) {
                    if (!$t306) { L0["j"] = $.succ(L0["j"], 1); }
                    $t306 = false;
                    if (!($.ord(L0["j"]) <= $.ord($t305))) break;
                    L0["stmessage"] = $.add(L0["stmessage"], " ");
                    await $.tick();
                  }
                }
                L0["stmessage"] = $.add(L0["stmessage"], "*");
                await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["stmessage"]])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["doneattempsclear", [(await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["id"])), "AsInteger"))]])));
              } else {
                if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["messtype"])), "AsInteger")), 6)), async () => ($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["status"])), "AsInteger")), 1)))))) {
                  L0["stmessage"] = "";
                  L0["rowcount"] = 0;
                  await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t307) => { L0["f"] = $t307; })])));
                  while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
                    L0["rowcount"] = $.add(L0["rowcount"], 1);
                    await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t308) => { L0["f"] = $t308; })])));
                    await $.tick();
                  }
                  await $.stmt((await $.call(C, "Append", [$.ref(async () => L0["f"], async ($t309) => { L0["f"] = $t309; })])));
                  L0["rownum"] = (await $.call(C, "IntToStr", [$.add(L0["rowcount"], 1)]));
                  { const $t310 = 5;
                    L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
                    let $t311 = true;
                    for (;;) {
                      if (!$t311) { L0["j"] = $.succ(L0["j"], 1); }
                      $t311 = false;
                      if (!($.ord(L0["j"]) <= $.ord($t310))) break;
                      L0["rownum"] = $.add("0", L0["rownum"]);
                      await $.tick();
                    }
                  }
                  L0["stmessage"] = $.add("RD", L0["rownum"]);
                  L0["rownum"] = (await $.call(C, "IntToStr", [L0["rowcount"]]));
                  { const $t312 = 9;
                    L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
                    let $t313 = true;
                    for (;;) {
                      if (!$t313) { L0["j"] = $.succ(L0["j"], 1); }
                      $t313 = false;
                      if (!($.ord(L0["j"]) <= $.ord($t312))) break;
                      L0["rownum"] = $.add(L0["rownum"], " ");
                      await $.tick();
                    }
                  }
                  L0["stmessage"] = $.add($.add($.add($.add(L0["stmessage"], L0["rownum"]), "0300"), "                    "), (await $.call(C, "FormatDateTime", ["YYYYMMDD", (await $.v(C, "date"))])));
                  { const $t314 = 764;
                    L0["j"] = 51;
                    let $t315 = true;
                    for (;;) {
                      if (!$t315) { L0["j"] = $.succ(L0["j"], 1); }
                      $t315 = false;
                      if (!($.ord(L0["j"]) <= $.ord($t314))) break;
                      L0["stmessage"] = $.add(L0["stmessage"], " ");
                      await $.tick();
                    }
                  }
                  L0["all"] = "";
                  L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["cardnumber"])), "AsString"));
                  { const $t316 = 23;
                    L0["j"] = (await $.call(C, "length", [L0["all"]]));
                    let $t317 = true;
                    for (;;) {
                      if (!$t317) { L0["j"] = $.succ(L0["j"], 1); }
                      $t317 = false;
                      if (!($.ord(L0["j"]) <= $.ord($t316))) break;
                      L0["all"] = $.add(L0["all"], " ");
                      await $.tick();
                    }
                  }
                  L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
                  { const $t318 = 1058;
                    L0["j"] = 789;
                    let $t319 = true;
                    for (;;) {
                      if (!$t319) { L0["j"] = $.succ(L0["j"], 1); }
                      $t319 = false;
                      if (!($.ord(L0["j"]) <= $.ord($t318))) break;
                      L0["stmessage"] = $.add(L0["stmessage"], " ");
                      await $.tick();
                    }
                  }
                  L0["all"] = "";
                  if ($.truthy($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["cardstatus"])), "AsString")), "PickUp-04"))) {
                    L0["all"] = "04";
                  } else {
                    if ($.truthy($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["cardstatus"])), "AsString")), "PickUp L-41"))) {
                      L0["all"] = "41";
                    } else {
                      if ($.truthy($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["cardstatus"])), "AsString")), "PickUp S-43"))) {
                        L0["all"] = "43";
                      } else {
                        if ($.truthy($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["cardstatus"])), "AsString")), "CARD OK"))) {
                          L0["all"] = "00";
                        } else {
                          if ($.truthy($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["cardstatus"])), "AsString")), "Card Do Not Honor -05"))) {
                            L0["all"] = "05";
                          } else {
                            if ($.truthy($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["CardStatus"])), "AsString")), "Z-Decline-57"))) {
                              L0["all"] = "57";
                            }
                          }
                        }
                      }
                    }
                  }
                  L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
                  { const $t320 = 1451;
                    L0["j"] = 1061;
                    let $t321 = true;
                    for (;;) {
                      if (!$t321) { L0["j"] = $.succ(L0["j"], 1); }
                      $t321 = false;
                      if (!($.ord(L0["j"]) <= $.ord($t320))) break;
                      L0["stmessage"] = $.add(L0["stmessage"], " ");
                      await $.tick();
                    }
                  }
                  L0["stmessage"] = $.add(L0["stmessage"], "*");
                  await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["stmessage"]])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["donestatuschange", [(await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["id"])), "AsInteger"))]])));
                } else {
                  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["messtype"])), "AsInteger")), 11)), async () => ($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["status"])), "AsInteger")), 1)))))) {
                    L0["stmessage"] = "";
                    L0["rowcount"] = 0;
                    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t322) => { L0["f"] = $t322; })])));
                    while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
                      L0["rowcount"] = $.add(L0["rowcount"], 1);
                      await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t323) => { L0["f"] = $t323; })])));
                      await $.tick();
                    }
                    await $.stmt((await $.call(C, "Append", [$.ref(async () => L0["f"], async ($t324) => { L0["f"] = $t324; })])));
                    L0["rownum"] = (await $.call(C, "IntToStr", [$.add(L0["rowcount"], 1)]));
                    { const $t325 = 5;
                      L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
                      let $t326 = true;
                      for (;;) {
                        if (!$t326) { L0["j"] = $.succ(L0["j"], 1); }
                        $t326 = false;
                        if (!($.ord(L0["j"]) <= $.ord($t325))) break;
                        L0["rownum"] = $.add("0", L0["rownum"]);
                        await $.tick();
                      }
                    }
                    L0["stmessage"] = $.add("RD", L0["rownum"]);
                    L0["rownum"] = (await $.call(C, "IntToStr", [L0["rowcount"]]));
                    { const $t327 = 9;
                      L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
                      let $t328 = true;
                      for (;;) {
                        if (!$t328) { L0["j"] = $.succ(L0["j"], 1); }
                        $t328 = false;
                        if (!($.ord(L0["j"]) <= $.ord($t327))) break;
                        L0["rownum"] = $.add(L0["rownum"], " ");
                        await $.tick();
                      }
                    }
                    L0["stmessage"] = $.add($.add($.add($.add(L0["stmessage"], L0["rownum"]), "0300"), "                    "), (await $.call(C, "FormatDateTime", ["YYYYMMDD", (await $.v(C, "date"))])));
                    { const $t329 = 764;
                      L0["j"] = 51;
                      let $t330 = true;
                      for (;;) {
                        if (!$t330) { L0["j"] = $.succ(L0["j"], 1); }
                        $t330 = false;
                        if (!($.ord(L0["j"]) <= $.ord($t329))) break;
                        L0["stmessage"] = $.add(L0["stmessage"], " ");
                        await $.tick();
                      }
                    }
                    L0["all"] = "";
                    L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["cardnumber"])), "AsString"));
                    { const $t331 = 23;
                      L0["j"] = (await $.call(C, "length", [L0["all"]]));
                      let $t332 = true;
                      for (;;) {
                        if (!$t332) { L0["j"] = $.succ(L0["j"], 1); }
                        $t332 = false;
                        if (!($.ord(L0["j"]) <= $.ord($t331))) break;
                        L0["all"] = $.add(L0["all"], " ");
                        await $.tick();
                      }
                    }
                    L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
                    L0["all"] = "";
                    L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["rbsclose"])), "AsString"));
                    { const $t333 = 31;
                      L0["j"] = (await $.call(C, "length", [L0["all"]]));
                      let $t334 = true;
                      for (;;) {
                        if (!$t334) { L0["j"] = $.succ(L0["j"], 1); }
                        $t334 = false;
                        if (!($.ord(L0["j"]) <= $.ord($t333))) break;
                        L0["all"] = $.add(L0["all"], " ");
                        await $.tick();
                      }
                    }
                    L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
                    { const $t335 = 1451;
                      L0["j"] = 821;
                      let $t336 = true;
                      for (;;) {
                        if (!$t336) { L0["j"] = $.succ(L0["j"], 1); }
                        $t336 = false;
                        if (!($.ord(L0["j"]) <= $.ord($t335))) break;
                        L0["stmessage"] = $.add(L0["stmessage"], " ");
                        await $.tick();
                      }
                    }
                    L0["stmessage"] = $.add(L0["stmessage"], "*");
                    await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["stmessage"]])));
                    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["donerbsnumberchange", [(await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["id"])), "AsInteger"))]])));
                  } else {
                    if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["messtype"])), "AsInteger")), 7)), async () => ($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["status"])), "AsInteger")), 1)))))) {
                      L0["stmessage"] = "";
                      L0["rowcount"] = 0;
                      await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t337) => { L0["f"] = $t337; })])));
                      while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
                        L0["rowcount"] = $.add(L0["rowcount"], 1);
                        await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t338) => { L0["f"] = $t338; })])));
                        await $.tick();
                      }
                      await $.stmt((await $.call(C, "Append", [$.ref(async () => L0["f"], async ($t339) => { L0["f"] = $t339; })])));
                      L0["rownum"] = (await $.call(C, "IntToStr", [$.add(L0["rowcount"], 1)]));
                      { const $t340 = 5;
                        L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
                        let $t341 = true;
                        for (;;) {
                          if (!$t341) { L0["j"] = $.succ(L0["j"], 1); }
                          $t341 = false;
                          if (!($.ord(L0["j"]) <= $.ord($t340))) break;
                          L0["rownum"] = $.add("0", L0["rownum"]);
                          await $.tick();
                        }
                      }
                      L0["stmessage"] = $.add("RD", L0["rownum"]);
                      L0["rownum"] = (await $.call(C, "IntToStr", [L0["rowcount"]]));
                      { const $t342 = 9;
                        L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
                        let $t343 = true;
                        for (;;) {
                          if (!$t343) { L0["j"] = $.succ(L0["j"], 1); }
                          $t343 = false;
                          if (!($.ord(L0["j"]) <= $.ord($t342))) break;
                          L0["rownum"] = $.add(L0["rownum"], " ");
                          await $.tick();
                        }
                      }
                      L0["stmessage"] = $.add($.add($.add($.add(L0["stmessage"], L0["rownum"]), "0300"), "                    "), (await $.call(C, "FormatDateTime", ["yyyymmdd", (await $.v(C, "Date"))])));
                      { const $t344 = 764;
                        L0["j"] = 51;
                        let $t345 = true;
                        for (;;) {
                          if (!$t345) { L0["j"] = $.succ(L0["j"], 1); }
                          $t345 = false;
                          if (!($.ord(L0["j"]) <= $.ord($t344))) break;
                          L0["stmessage"] = $.add(L0["stmessage"], " ");
                          await $.tick();
                        }
                      }
                      L0["all"] = "";
                      L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["cardnumber"])), "AsString"));
                      { const $t346 = 23;
                        L0["j"] = (await $.call(C, "length", [L0["all"]]));
                        let $t347 = true;
                        for (;;) {
                          if (!$t347) { L0["j"] = $.succ(L0["j"], 1); }
                          $t347 = false;
                          if (!($.ord(L0["j"]) <= $.ord($t346))) break;
                          L0["all"] = $.add(L0["all"], " ");
                          await $.tick();
                        }
                      }
                      L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
                      L0["all"] = "";
                      L0["all"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["ACCOUNTCLOSECODE"])), "asstring"));
                      { const $t348 = 31;
                        L0["j"] = (await $.call(C, "length", [L0["all"]]));
                        let $t349 = true;
                        for (;;) {
                          if (!$t349) { L0["j"] = $.succ(L0["j"], 1); }
                          $t349 = false;
                          if (!($.ord(L0["j"]) <= $.ord($t348))) break;
                          L0["all"] = $.add(L0["all"], " ");
                          await $.tick();
                        }
                      }
                      L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
                      { const $t350 = 883;
                        L0["j"] = 821;
                        let $t351 = true;
                        for (;;) {
                          if (!$t351) { L0["j"] = $.succ(L0["j"], 1); }
                          $t351 = false;
                          if (!($.ord(L0["j"]) <= $.ord($t350))) break;
                          L0["stmessage"] = $.add(L0["stmessage"], " ");
                          await $.tick();
                        }
                      }
                      L0["stmessage"] = $.add(L0["stmessage"], (await $.v(C, "sysday")));
                      { const $t352 = 1058;
                        L0["j"] = 892;
                        let $t353 = true;
                        for (;;) {
                          if (!$t353) { L0["j"] = $.succ(L0["j"], 1); }
                          $t353 = false;
                          if (!($.ord(L0["j"]) <= $.ord($t352))) break;
                          L0["stmessage"] = $.add(L0["stmessage"], " ");
                          await $.tick();
                        }
                      }
                      L0["stmessage"] = $.add(L0["stmessage"], "14");
                      { const $t354 = 1451;
                        L0["j"] = 1061;
                        let $t355 = true;
                        for (;;) {
                          if (!$t355) { L0["j"] = $.succ(L0["j"], 1); }
                          $t355 = false;
                          if (!($.ord(L0["j"]) <= $.ord($t354))) break;
                          L0["stmessage"] = $.add(L0["stmessage"], " ");
                          await $.tick();
                        }
                      }
                      L0["stmessage"] = $.add(L0["stmessage"], "*");
                      await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["stmessage"]])));
                      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["contractclose", [(await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["id"])), "AsInteger"))]])));
                    } else {
                      if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["messtype"])), "AsInteger")), 13)), async () => ($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["status"])), "AsInteger")), 1)))))) {
                        L0["stmessage"] = "";
                        L0["rowcount"] = 0;
                        await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t356) => { L0["f"] = $t356; })])));
                        while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
                          L0["rowcount"] = $.add(L0["rowcount"], 1);
                          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t357) => { L0["f"] = $t357; })])));
                          await $.tick();
                        }
                        await $.stmt((await $.call(C, "Append", [$.ref(async () => L0["f"], async ($t358) => { L0["f"] = $t358; })])));
                        L0["rownum"] = (await $.call(C, "IntToStr", [$.add(L0["rowcount"], 1)]));
                        { const $t359 = 5;
                          L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
                          let $t360 = true;
                          for (;;) {
                            if (!$t360) { L0["j"] = $.succ(L0["j"], 1); }
                            $t360 = false;
                            if (!($.ord(L0["j"]) <= $.ord($t359))) break;
                            L0["rownum"] = $.add("0", L0["rownum"]);
                            await $.tick();
                          }
                        }
                        L0["stmessage"] = $.add("RD", L0["rownum"]);
                        L0["rownum"] = (await $.call(C, "inttostr", [L0["rowcount"]]));
                        { const $t361 = 9;
                          L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
                          let $t362 = true;
                          for (;;) {
                            if (!$t362) { L0["j"] = $.succ(L0["j"], 1); }
                            $t362 = false;
                            if (!($.ord(L0["j"]) <= $.ord($t361))) break;
                            L0["rownum"] = $.add(L0["rownum"], " ");
                            await $.tick();
                          }
                        }
                        L0["stmessage"] = $.add(L0["stmessage"], L0["rownum"]);
                        L0["stmessage"] = $.add($.add($.add(L0["stmessage"], "2000"), "                    "), (await $.call(C, "FormatDateTime", ["yyyymmdd", (await $.v(C, "date"))])));
                        L0["all"] = "";
                        L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["cardnumber"])), "AsString"));
                        { const $t363 = 31;
                          L0["j"] = (await $.call(C, "length", [L0["all"]]));
                          let $t364 = true;
                          for (;;) {
                            if (!$t364) { L0["j"] = $.succ(L0["j"], 1); }
                            $t364 = false;
                            if (!($.ord(L0["j"]) <= $.ord($t363))) break;
                            L0["all"] = $.add(L0["all"], " ");
                            await $.tick();
                          }
                        }
                        L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
                        { const $t365 = 312;
                          L0["j"] = 83;
                          let $t366 = true;
                          for (;;) {
                            if (!$t366) { L0["j"] = $.succ(L0["j"], 1); }
                            $t366 = false;
                            if (!($.ord(L0["j"]) <= $.ord($t365))) break;
                            L0["stmessage"] = $.add(L0["stmessage"], " ");
                            await $.tick();
                          }
                        }
                        L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["SECURITY"])), "AsString"));
                        { const $t367 = 19;
                          L0["j"] = (await $.call(C, "length", [L0["all"]]));
                          let $t368 = true;
                          for (;;) {
                            if (!$t368) { L0["j"] = $.succ(L0["j"], 1); }
                            $t368 = false;
                            if (!($.ord(L0["j"]) <= $.ord($t367))) break;
                            L0["all"] = $.add(L0["all"], " ");
                            await $.tick();
                          }
                        }
                        L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
                        { const $t369 = 1451;
                          L0["j"] = 333;
                          let $t370 = true;
                          for (;;) {
                            if (!$t370) { L0["j"] = $.succ(L0["j"], 1); }
                            $t370 = false;
                            if (!($.ord(L0["j"]) <= $.ord($t369))) break;
                            L0["stmessage"] = $.add(L0["stmessage"], " ");
                            await $.tick();
                          }
                        }
                        L0["stmessage"] = $.add(L0["stmessage"], "*");
                        await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["stmessage"]])));
                        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["DONESECURE", [(await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["id"])), "AsInteger"))]])));
                      } else {
                        if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["messtype"])), "AsInteger")), 35)), async () => ($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["status"])), "AsInteger")), 1)))))) {
                          L0["v_cardnum"] = (await $.mv((await $.mcall(L0["dset"], "FieldByName", ["cardnumber"])), "AsString"));
                          L0["p_fname"] = (await $.call(C, "trim", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["FNAME"])), "AsString"))]));
                          L0["p_lname"] = (await $.call(C, "trim", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["LNAME"])), "AsString"))]));
                          L0["p_embossname"] = (await $.call(C, "trim", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["EMBOSSNAME"])), "AsString"))]));
                          L0["stmessage"] = "";
                          L0["rowcount"] = 0;
                          await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t371) => { L0["f"] = $t371; })])));
                          while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
                            L0["rowcount"] = $.add(L0["rowcount"], 1);
                            await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t372) => { L0["f"] = $t372; })])));
                            await $.tick();
                          }
                          await $.stmt((await $.call(C, "Append", [$.ref(async () => L0["f"], async ($t373) => { L0["f"] = $t373; })])));
                          L0["rownum"] = (await $.call(C, "IntToStr", [$.add(L0["rowcount"], 1)]));
                          { const $t374 = 5;
                            L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
                            let $t375 = true;
                            for (;;) {
                              if (!$t375) { L0["j"] = $.succ(L0["j"], 1); }
                              $t375 = false;
                              if (!($.ord(L0["j"]) <= $.ord($t374))) break;
                              L0["rownum"] = $.add("0", L0["rownum"]);
                              await $.tick();
                            }
                          }
                          L0["stmessage"] = $.add("RD", L0["rownum"]);
                          L0["rownum"] = (await $.call(C, "IntToStr", [L0["rowcount"]]));
                          { const $t376 = 9;
                            L0["j"] = (await $.call(C, "length", [L0["rownum"]]));
                            let $t377 = true;
                            for (;;) {
                              if (!$t377) { L0["j"] = $.succ(L0["j"], 1); }
                              $t377 = false;
                              if (!($.ord(L0["j"]) <= $.ord($t376))) break;
                              L0["rownum"] = $.add(L0["rownum"], " ");
                              await $.tick();
                            }
                          }
                          L0["stmessage"] = $.add($.add($.add($.add(L0["stmessage"], L0["rownum"]), "2300"), "                    "), (await $.call(C, "FormatDateTime", ["yyyymmdd", (await $.v(C, "Date"))])));
                          L0["all"] = "";
                          L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["CARDNUMBER"])), "AsString"));
                          { const $t378 = 31;
                            L0["j"] = (await $.call(C, "length", [L0["all"]]));
                            let $t379 = true;
                            for (;;) {
                              if (!$t379) { L0["j"] = $.succ(L0["j"], 1); }
                              $t379 = false;
                              if (!($.ord(L0["j"]) <= $.ord($t378))) break;
                              L0["all"] = $.add(L0["all"], " ");
                              await $.tick();
                            }
                          }
                          L0["stmessage"] = $.add($.add(L0["stmessage"], L0["all"]), "      ");
                          L0["all"] = "";
                          L0["all"] = L0["p_fname"];
                          { const $t380 = 31;
                            L0["j"] = (await $.call(C, "length", [L0["all"]]));
                            let $t381 = true;
                            for (;;) {
                              if (!$t381) { L0["j"] = $.succ(L0["j"], 1); }
                              $t381 = false;
                              if (!($.ord(L0["j"]) <= $.ord($t380))) break;
                              L0["all"] = $.add(L0["all"], " ");
                              await $.tick();
                            }
                          }
                          L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
                          L0["all"] = "";
                          L0["all"] = L0["p_lname"];
                          { const $t382 = 31;
                            L0["j"] = (await $.call(C, "length", [L0["all"]]));
                            let $t383 = true;
                            for (;;) {
                              if (!$t383) { L0["j"] = $.succ(L0["j"], 1); }
                              $t383 = false;
                              if (!($.ord(L0["j"]) <= $.ord($t382))) break;
                              L0["all"] = $.add(L0["all"], " ");
                              await $.tick();
                            }
                          }
                          L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
                          { const $t384 = 280;
                            L0["j"] = 153;
                            let $t385 = true;
                            for (;;) {
                              if (!$t385) { L0["j"] = $.succ(L0["j"], 1); }
                              $t385 = false;
                              if (!($.ord(L0["j"]) <= $.ord($t384))) break;
                              L0["stmessage"] = $.add(L0["stmessage"], " ");
                              await $.tick();
                            }
                          }
                          L0["all"] = "";
                          L0["all"] = $.add($.add(L0["p_fname"], " "), L0["p_lname"]);
                          { const $t386 = 31;
                            L0["j"] = (await $.call(C, "length", [L0["all"]]));
                            let $t387 = true;
                            for (;;) {
                              if (!$t387) { L0["j"] = $.succ(L0["j"], 1); }
                              $t387 = false;
                              if (!($.ord(L0["j"]) <= $.ord($t386))) break;
                              L0["all"] = $.add(L0["all"], " ");
                              await $.tick();
                            }
                          }
                          L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
                          { const $t388 = 764;
                            L0["j"] = 313;
                            let $t389 = true;
                            for (;;) {
                              if (!$t389) { L0["j"] = $.succ(L0["j"], 1); }
                              $t389 = false;
                              if (!($.ord(L0["j"]) <= $.ord($t388))) break;
                              L0["stmessage"] = $.add(L0["stmessage"], " ");
                              await $.tick();
                            }
                          }
                          L0["all"] = "";
                          L0["all"] = (await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["cardnumber"])), "AsString"));
                          { const $t390 = 23;
                            L0["j"] = (await $.call(C, "length", [L0["all"]]));
                            let $t391 = true;
                            for (;;) {
                              if (!$t391) { L0["j"] = $.succ(L0["j"], 1); }
                              $t391 = false;
                              if (!($.ord(L0["j"]) <= $.ord($t390))) break;
                              L0["all"] = $.add(L0["all"], " ");
                              await $.tick();
                            }
                          }
                          L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
                          { const $t392 = 896;
                            L0["j"] = 789;
                            let $t393 = true;
                            for (;;) {
                              if (!$t393) { L0["j"] = $.succ(L0["j"], 1); }
                              $t393 = false;
                              if (!($.ord(L0["j"]) <= $.ord($t392))) break;
                              L0["stmessage"] = $.add(L0["stmessage"], " ");
                              await $.tick();
                            }
                          }
                          L0["all"] = "";
                          L0["all"] = L0["p_embossname"];
                          { const $t394 = 25;
                            L0["j"] = (await $.call(C, "length", [L0["all"]]));
                            let $t395 = true;
                            for (;;) {
                              if (!$t395) { L0["j"] = $.succ(L0["j"], 1); }
                              $t395 = false;
                              if (!($.ord(L0["j"]) <= $.ord($t394))) break;
                              L0["all"] = $.add(L0["all"], " ");
                              await $.tick();
                            }
                          }
                          L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
                          { const $t396 = 1251;
                            L0["j"] = 923;
                            let $t397 = true;
                            for (;;) {
                              if (!$t397) { L0["j"] = $.succ(L0["j"], 1); }
                              $t397 = false;
                              if (!($.ord(L0["j"]) <= $.ord($t396))) break;
                              L0["stmessage"] = $.add(L0["stmessage"], " ");
                              await $.tick();
                            }
                          }
                          L0["all"] = "";
                          L0["all"] = $.add($.add(L0["p_fname"], " "), L0["p_lname"]);
                          { const $t398 = 31;
                            L0["j"] = (await $.call(C, "length", [L0["all"]]));
                            let $t399 = true;
                            for (;;) {
                              if (!$t399) { L0["j"] = $.succ(L0["j"], 1); }
                              $t399 = false;
                              if (!($.ord(L0["j"]) <= $.ord($t398))) break;
                              L0["all"] = $.add(L0["all"], " ");
                              await $.tick();
                            }
                          }
                          L0["stmessage"] = $.add(L0["stmessage"], L0["all"]);
                          { const $t400 = 1451;
                            L0["j"] = 1284;
                            let $t401 = true;
                            for (;;) {
                              if (!$t401) { L0["j"] = $.succ(L0["j"], 1); }
                              $t401 = false;
                              if (!($.ord(L0["j"]) <= $.ord($t400))) break;
                              L0["stmessage"] = $.add(L0["stmessage"], " ");
                              await $.tick();
                            }
                          }
                          L0["stmessage"] = $.add(L0["stmessage"], "*");
                          await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["stmessage"]])));
                          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["cardnamechange", [(await $.mv((await $.mcall(L0["dset"], "fieldbyname", ["id"])), "AsInteger"))]])));
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    await $.tick();
  }
  L0["ffuter"] = "";
  L0["all"] = "";
  L0["rowcount"] = 0;
  await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t402) => { L0["f"] = $t402; })])));
  while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
    L0["rowcount"] = $.add(L0["rowcount"], 1);
    await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t403) => { L0["f"] = $t403; })])));
    await $.tick();
  }
  await $.stmt((await $.call(C, "Append", [$.ref(async () => L0["f"], async ($t404) => { L0["f"] = $t404; })])));
  L0["ffuter"] = "FT";
  L0["all"] = (await $.call(C, "inttostr", [$.add(L0["rowcount"], 1)]));
  { const $t405 = 5;
    L0["i"] = (await $.call(C, "length", [L0["all"]]));
    let $t406 = true;
    for (;;) {
      if (!$t406) { L0["i"] = $.succ(L0["i"], 1); }
      $t406 = false;
      if (!($.ord(L0["i"]) <= $.ord($t405))) break;
      L0["all"] = $.add("0", L0["all"]);
      await $.tick();
    }
  }
  L0["ffuter"] = $.add(L0["ffuter"], L0["all"]);
  L0["all"] = (await $.call(C, "inttostr", [$.sub(L0["rowcount"], 1)]));
  { const $t407 = 5;
    L0["i"] = (await $.call(C, "length", [L0["all"]]));
    let $t408 = true;
    for (;;) {
      if (!$t408) { L0["i"] = $.succ(L0["i"], 1); }
      $t408 = false;
      if (!($.ord(L0["i"]) <= $.ord($t407))) break;
      L0["all"] = $.add("0", L0["all"]);
      await $.tick();
    }
  }
  L0["ffuter"] = $.add(L0["ffuter"], L0["all"]);
  { const $t409 = 1437;
    L0["j"] = 1;
    let $t410 = true;
    for (;;) {
      if (!$t410) { L0["j"] = $.succ(L0["j"], 1); }
      $t410 = false;
      if (!($.ord(L0["j"]) <= $.ord($t409))) break;
      L0["ffuter"] = $.add(L0["ffuter"], " ");
      await $.tick();
    }
  }
  L0["ffuter"] = $.add(L0["ffuter"], "*");
  await $.stmt((await $.call(C, "Writeln", [L0["f"], L0["ffuter"]])));
  await $.stmt((await $.call(C, "close", [L0["f"]])));
  return L0.result;
}, {"params": ["DSet", "DBG", "urg"], "kind": "procedure", "ptypes": ["TOracleDataSet", "TDBGrid", "integer"]});
  U.method("TApplications", "Button5Click", async function Button5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["cardcreatefilenr"]])));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Fayl yaratmaq istəyirsiniz?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0])), (await $.v(C, "mryes"))))) {
    await $.stmt((await $.call(C, "cr_file2", [(await $.mv((await $.v(C, "DataMod_CARDS")), "simple")), (await $.v(C, "DBGrid2")), 0])));
    await $.stmt((await $.call(C, "cr_file1", [(await $.mv((await $.v(C, "DataMod_CARDS")), "simple")), (await $.v(C, "DBGrid2")), 0])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "simple")), "Refresh", []);
    await $.stmt((await $.call(C, "showmessage", ["Fayl yaradıldı!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TApplications", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["cardcreatefilenr"]])));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Fayl yaratmaq istəyirsiniz?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0])), (await $.v(C, "mryes"))))) {
    await $.stmt((await $.call(C, "cr_file2", [(await $.mv((await $.v(C, "DataMod_CARDS")), "urgent")), (await $.v(C, "DBGrid1")), 1])));
    await $.stmt((await $.call(C, "cr_file1", [(await $.mv((await $.v(C, "DataMod_CARDS")), "urgent")), (await $.v(C, "DBGrid1")), 1])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "urgent")), "Refresh", []);
    await $.stmt((await $.call(C, "showmessage", ["Fayl yaradıldı!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TApplications", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TApplications", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.v(C, "date")));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "urgent")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "urgent")), "SetVariable", ["dat1", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "simple")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "simple")), "SetVariable", ["dat1", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "urgent")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "simple")), "open", []);
  await $.mcall((await $.v(C, "Button6")), "Click", []);
  await $.mcall((await $.v(C, "Button7")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TApplications", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_excel1"]])));
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "urgent")), "Application", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TApplications", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_excel2"]])));
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "simple")), "Application", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TApplications", "DBGrid1DrawColumnCell", async function DBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t411 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t411], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t412 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t411], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t412, 1)) {
          await $.wset([$t411], "ImageIndex", 25, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t412, 2)) {
          await $.wset([$t411], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t412, 3)) {
          await $.wset([$t411], "ImageIndex", 26, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t412, 4)) {
          await $.wset([$t411], "ImageIndex", 13, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t411], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t411], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t411], "ImageList1", C, false)), "Draw", [(await $.wv([$t411], "Canvas", C, false)), (await $.mv((await $.wv([$t411], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t411], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t411], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t411], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t411], "DefaultDrawColumnCell", [(await $.wv([$t411], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t411], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t411], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t411], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TApplications", "DBGrid2DrawColumnCell", async function DBGrid2DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t413 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t413], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t414 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t413], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t414, 1)) {
          await $.wset([$t413], "ImageIndex", 25, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t414, 2)) {
          await $.wset([$t413], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t414, 3)) {
          await $.wset([$t413], "ImageIndex", 26, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t414, 4)) {
          await $.wset([$t413], "ImageIndex", 13, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t413], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t413], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t413], "ImageList1", C, false)), "Draw", [(await $.wv([$t413], "Canvas", C, false)), (await $.mv((await $.wv([$t413], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t413], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t413], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t413], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t413], "DefaultDrawColumnCell", [(await $.wv([$t413], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t413], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t413], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t413], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TApplications", "selectall1Click", async function selectall1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t415 = (await $.v(C, "dbgrid1"));
    const $t416 = (await $.wv([$t415], "SelectedRows", C, false));
    const $t417 = (await $.mv((await $.wv([$t415, $t416], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t415, $t416, $t417], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t415, $t416, $t417], "First", [], C));
      while ($.truthy($.not((await $.wv([$t415, $t416, $t417], "Eof", C, false))))) {
        await $.wset([$t415, $t416, $t417], "CurrentRowSelected", (await $.wv([$t415, $t416, $t417], "True", C, false)), C);
        await $.stmt($.wcall([$t415, $t416, $t417], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t415, $t416, $t417], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TApplications", "MenuItem1Click", async function MenuItem1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t418 = (await $.v(C, "dbgrid2"));
    const $t419 = (await $.wv([$t418], "SelectedRows", C, false));
    const $t420 = (await $.mv((await $.wv([$t418, $t419], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t418, $t419, $t420], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t418, $t419, $t420], "First", [], C));
      while ($.truthy($.not((await $.wv([$t418, $t419, $t420], "Eof", C, false))))) {
        await $.wset([$t418, $t419, $t420], "CurrentRowSelected", (await $.wv([$t418, $t419, $t420], "True", C, false)), C);
        await $.stmt($.wcall([$t418, $t419, $t420], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t418, $t419, $t420], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TApplications", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
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
    const $t421 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t421], "SortPosition", (await $.mcall((await $.wv([$t421], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t421], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t421], "Refresh", [], C));
    } finally {
      { const $t422 = await $.iset((await $.wv([$t421], "SQL", C, false)), [(await $.wv([$t421], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t421], "EmptyStr", C, false))); if ($t422 !== undefined) { await $.wset([$t421], "SQL", $t422, C); } }
      await $.mset((await $.wv([$t421], "Screen", C, false)), "Cursor", (await $.wv([$t421], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TApplications", "DBGrid2TitleClick", async function DBGrid2TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": '', "sortposition": 0};
  await $.fixArgs(L0, ["column"]);
  L0["sortposition"] = 100;
  if ($.truthy((await $.or_(((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "IsEmpty"))), async () => ($.eq((await $.mv(L0["column"], "FieldName")), (await $.v(C, "EmptyStr")))))))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t423 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t423], "SortPosition", (await $.mcall((await $.wv([$t423], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t423], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t423], "Refresh", [], C));
    } finally {
      { const $t424 = await $.iset((await $.wv([$t423], "SQL", C, false)), [(await $.wv([$t423], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t423], "EmptyStr", C, false))); if ($t424 !== undefined) { await $.wset([$t423], "SQL", $t424, C); } }
      await $.mset((await $.wv([$t423], "Screen", C, false)), "Cursor", (await $.wv([$t423], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TApplications", "Button6Click", async function Button6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "titlename": '', "sortposition": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["sortposition"] = 100;
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  L0["titlename"] = "STATUS";
  {
    const $t425 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t425], "SortPosition", (await $.mcall((await $.wv([$t425], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t425], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t425], "Refresh", [], C));
    } finally {
      { const $t426 = await $.iset((await $.wv([$t425], "SQL", C, false)), [(await $.wv([$t425], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t425], "EmptyStr", C, false))); if ($t426 !== undefined) { await $.wset([$t425], "SQL", $t426, C); } }
      await $.mset((await $.wv([$t425], "Screen", C, false)), "Cursor", (await $.wv([$t425], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TApplications", "Button7Click", async function Button7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "titlename": '', "sortposition": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["sortposition"] = 100;
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  L0["titlename"] = "STATUS";
  {
    const $t427 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t427], "SortPosition", (await $.mcall((await $.wv([$t427], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t427], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t427], "Refresh", [], C));
    } finally {
      { const $t428 = await $.iset((await $.wv([$t427], "SQL", C, false)), [(await $.wv([$t427], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t427], "EmptyStr", C, false))); if ($t428 !== undefined) { await $.wset([$t427], "SQL", $t428, C); } }
      await $.mset((await $.wv([$t427], "Screen", C, false)), "Cursor", (await $.wv([$t427], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
