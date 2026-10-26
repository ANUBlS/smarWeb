// Generated from MAINFORMImpl1.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("MAINFORMImpl1", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "CARDS_TLB", "StdVcl", "ComCtrls", "DBCtrls", "ExtCtrls", "Tabs", "StdCtrls", "Mask", "FieldSearchEdit", "Buttons", "FileCtrl", "Grids", "DBGrids", "CMExcelExport", "ExcelXp", "OleServer", "ActnList", "ImgList", "Menus", "ToolWin", "jpeg", "PluginToolBar", "onlinec", "card_ufx", "ComObj", "ComServ", "Unit18", "Unit7", "balans", "customers", "payment", "newcard", "cfilepas", "applicationpas", "creditinfopas", "rezform", "Unit9", "U9", "setac", "balhs", "comp", "crdtype", "banksettings", "filialaccounts", "datclose", "domesticbank", "atmendpos", "poscomission", "sms", "Unitintfile", "UnitDxxx", "UnitRvisa", "Unit155", "dilingUnit", "klirinqUnit", "UnitDfile", "Unitclient2", "Unitexcel", "Unitsalary", "cardnumbersource", "unitverification", "accountcloseunit", "sboapiDataModuleImpl", "SBTranslateProc", "limittur", "PostCommisionOnusImpl", "card_Exchange_file", "Rbsdofiles", "Taxrbs"]);
  const C = [U];
  $.defRecord("tclient", {"cardnumber": () => '', "rbsnumber": () => '', "terminal": () => '', "trantime": () => '', "trandate": () => '', "tranamount": () => 0, "acountamount": () => 0, "feeamount": () => 0, "trancurrency": () => '', "tranbalanssign": () => '', "acccurrency": () => '', "accbalanssign": () => '', "feecurrency": () => '', "feebalanssign": () => ''});
  U.defClass("TMAINFORM", "TActiveForm", {"popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n11": {"name": "N11", "type": "TMenuItem"}, "n21": {"name": "N21", "type": "TMenuItem"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "n1": {"name": "N1", "type": "TMenuItem"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "menuitem1": {"name": "MenuItem1", "type": "TMenuItem"}, "menuitem2": {"name": "MenuItem2", "type": "TMenuItem"}, "menuitem3": {"name": "MenuItem3", "type": "TMenuItem"}, "intreatil1": {"name": "IntReatil1", "type": "TMenuItem"}, "popupmenu3": {"name": "PopupMenu3", "type": "TPopupMenu"}, "menuitem4": {"name": "MenuItem4", "type": "TMenuItem"}, "menuitem5": {"name": "MenuItem5", "type": "TMenuItem"}, "menuitem6": {"name": "MenuItem6", "type": "TMenuItem"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "isertbtn": {"name": "isertbtn", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "rvisa1": {"name": "RVisa1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "n9": {"name": "N9", "type": "TMenuItem"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "image1": {"name": "Image1", "type": "TImage"}, "n10": {"name": "N10", "type": "TMenuItem"}, "dilling1": {"name": "Dilling1", "type": "TMenuItem"}, "kliring1": {"name": "Kliring1", "type": "TMenuItem"}, "dfile1": {"name": "DFile1", "type": "TMenuItem"}, "n12": {"name": "N12", "type": "TMenuItem"}, "cardnumberchange1": {"name": "cARDNUMBERCHANGE1", "type": "TMenuItem"}, "n13": {"name": "N13", "type": "TMenuItem"}, "n14": {"name": "N14", "type": "TMenuItem"}, "limitlr1": {"name": "Limitlr1", "type": "TMenuItem"}, "postcommisiononus1": {"name": "PostCommisiononus1", "type": "TMenuItem"}, "onlinecards1": {"name": "OnlineCards1", "type": "TMenuItem"}, "x1": {"name": "X1", "type": "TMenuItem"}, "k1": {"name": "K1", "type": "TMenuItem"}, "e1": {"name": "E1", "type": "TMenuItem"}, "r1": {"name": "R1", "type": "TMenuItem"}, "t1": {"name": "T1", "type": "TMenuItem"}, "fevents": {"name": "FEvents", "type": "IMAINFORMEvents"}}, {});
  U.init(async () => {
  });
  U.func("LoadPlugin", async function LoadPlugin(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"pluginname": $.copyArg(p0), "pluginparam": $.copyArg(p1), result: undefined, "pluginhandle": 0, "exportproc": null};
  await $.fixArgs(L0, ["pluginname", "pluginparam"]);
  L0["pluginhandle"] = (await $.call(C, "LoadPackage", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), L0["pluginname"])]));
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    L0["exportproc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], "InitPlugin"]));
    await $.stmt((await $.callv(L0["exportproc"], [L0["pluginparam"]])));
  }
  return L0.result;
}, {"params": ["PluginName", "PluginParam"], "kind": "procedure", "ptypes": ["String", "String"]});
  U.func("NewCardCreateList", async function NewCardCreateList(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("CheckFileExt", async function CheckFileExt(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"fname": $.copyArg(p0), result: false, "i": 0, "checkfileextlen": 0, "fileext": ''};
  await $.fixArgs(L0, ["fname"]);
  L0["checkfileextlen"] = 0;
  L0["fileext"] = "";
  L0["fileext"] = (await $.call(C, "trim", [(await $.call(C, "ExtractFileExt", [L0["fname"]]))]));
  { const $t1 = (await $.call(C, "length", [L0["fileext"]]));
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      if ($.truthy($.in_((await $.idx(L0["fileext"], [L0["i"]])), [...$.range("0","9"), "."]))) {
        await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["checkfileextlen"], async ($t3) => { L0["checkfileextlen"] = $t3; })])));
      }
      await $.tick();
    }
  }
  if ($.truthy($.ne(L0["checkfileextlen"], (await $.call(C, "length", [L0["fileext"]]))))) {
    L0["result"] = false;
  } else {
    L0["result"] = true;
  }
  return L0.result;
}, {"params": ["fname"], "kind": "function", "ptypes": ["String"]});
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
  L0["result"] = $.add($.add(L0["result"], "."), L0["modpart"]);
  return L0.result;
}, {"params": ["acc"], "kind": "function", "ptypes": ["real"]});
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
  { const $t4 = (await $.call(C, "strtoint", [(await $.call(C, "FormatDateTime", ["mm", (await $.v(C, "date"))]))]));
    if ($.eq($t4, 1)) {
      L0["wday"] = (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))]));
    }
    else if ($.eq($t4, 2)) {
      L0["wday"] = $.add(L0["yan"], (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t4, 3)) {
      L0["wday"] = $.add($.add(L0["yan"], L0["feb"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t4, 4)) {
      L0["wday"] = $.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t4, 5)) {
      L0["wday"] = $.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t4, 6)) {
      L0["wday"] = $.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t4, 7)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t4, 8)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t4, 9)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t4, 10)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t4, 11)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"]), L0["okt"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", (await $.v(C, "date"))]))])));
    }
    else if ($.eq($t4, 12)) {
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
  { const $t5 = (await $.call(C, "length", [L0["wd"]]));
    if ($.eq($t5, 1)) {
      L0["wd"] = $.add("00", L0["wd"]);
    }
    else if ($.eq($t5, 2)) {
      L0["wd"] = $.add("0", L0["wd"]);
    }
  }
  L0.result = L0["wd"];
  return L0.result;
}, {"params": ["wday"], "kind": "function", "ptypes": ["integer"]});
  U.func("whichdate", async function whichdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"wnday": $.copyArg(p0), result: '', "feb": 0};
  await $.fixArgs(L0, ["wnday"]);
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
  if ($.truthy((await $.call(C, "IsLeapYear", [(await $.call(C, "strtoint", [(await $.call(C, "FormatDateTime", ["yyyy", (await $.v(C, "date"))]))]))])))) {
    L0["feb"] = 29;
  } else {
    L0["feb"] = 28;
  }
  if ($.truthy((await $.and_(($.ge(L0["wnday"], 1)), async () => ($.le(L0["wnday"], L0["yan"])))))) {
    L0["result"] = $.add($.add((await $.call(C, "inttostr", [L0["wnday"]])), ".01."), (await $.call(C, "FormatDateTime", ["YYYY", (await $.v(C, "date"))])));
  } else {
    if ($.truthy((await $.and_(($.gt(L0["wnday"], L0["yan"])), async () => ($.le(L0["wnday"], $.add(L0["yan"], L0["feb"]))))))) {
      L0["result"] = ($.add($.add((await $.call(C, "inttostr", [$.sub(L0["wnday"], L0["yan"])])), ".02."), (await $.call(C, "FormatDateTime", ["YYYY", (await $.v(C, "date"))]))));
    } else {
      if ($.truthy((await $.and_(($.gt(L0["wnday"], $.add(L0["yan"], L0["feb"]))), async () => ($.le(L0["wnday"], $.add($.add(L0["yan"], L0["feb"]), L0["mar"]))))))) {
        L0["result"] = ($.add($.add((await $.call(C, "inttostr", [$.sub(L0["wnday"], ($.add(L0["yan"], L0["feb"])))])), ".03."), (await $.call(C, "FormatDateTime", ["YYYY", (await $.v(C, "date"))]))));
      } else {
        if ($.truthy((await $.and_(($.gt(L0["wnday"], $.add($.add(L0["yan"], L0["feb"]), L0["mar"]))), async () => ($.le(L0["wnday"], $.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]))))))) {
          L0["result"] = ($.add($.add((await $.call(C, "inttostr", [$.sub(L0["wnday"], ($.add($.add(L0["yan"], L0["feb"]), L0["mar"])))])), ".04."), (await $.call(C, "FormatDateTime", ["YYYY", (await $.v(C, "date"))]))));
        } else {
          if ($.truthy((await $.and_(($.gt(L0["wnday"], $.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]))), async () => ($.le(L0["wnday"], $.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]))))))) {
            L0["result"] = ($.add($.add((await $.call(C, "inttostr", [$.sub(L0["wnday"], ($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"])))])), ".05."), (await $.call(C, "FormatDateTime", ["YYYY", (await $.v(C, "date"))]))));
          } else {
            if ($.truthy((await $.and_(($.gt(L0["wnday"], $.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]))), async () => ($.le(L0["wnday"], $.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]))))))) {
              L0["result"] = ($.add($.add((await $.call(C, "inttostr", [$.sub(L0["wnday"], ($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"])))])), ".06."), (await $.call(C, "FormatDateTime", ["YYYY", (await $.v(C, "date"))]))));
            } else {
              if ($.truthy((await $.and_(($.gt(L0["wnday"], $.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]))), async () => ($.le(L0["wnday"], $.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]))))))) {
                L0["result"] = ($.add($.add((await $.call(C, "inttostr", [$.sub(L0["wnday"], ($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"])))])), ".07."), (await $.call(C, "FormatDateTime", ["YYYY", (await $.v(C, "date"))]))));
              } else {
                if ($.truthy((await $.and_(($.gt(L0["wnday"], $.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]))), async () => ($.le(L0["wnday"], $.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]))))))) {
                  L0["result"] = ($.add($.add((await $.call(C, "inttostr", [$.sub(L0["wnday"], ($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"])))])), ".08."), (await $.call(C, "FormatDateTime", ["YYYY", (await $.v(C, "date"))]))));
                } else {
                  if ($.truthy((await $.and_(($.gt(L0["wnday"], $.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]))), async () => ($.le(L0["wnday"], $.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"]))))))) {
                    L0["result"] = ($.add($.add((await $.call(C, "inttostr", [$.sub(L0["wnday"], ($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"])))])), ".09."), (await $.call(C, "FormatDateTime", ["YYYY", (await $.v(C, "date"))]))));
                  } else {
                    if ($.truthy((await $.and_(($.gt(L0["wnday"], $.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"]))), async () => ($.le(L0["wnday"], $.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"]), L0["okt"]))))))) {
                      L0["result"] = ($.add($.add((await $.call(C, "inttostr", [$.sub(L0["wnday"], ($.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"])))])), ".10."), (await $.call(C, "FormatDateTime", ["YYYY", (await $.v(C, "date"))]))));
                    } else {
                      if ($.truthy((await $.and_(($.gt(L0["wnday"], $.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"]), L0["okt"]))), async () => ($.le(L0["wnday"], $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"]), L0["okt"]), L0["nov"]))))))) {
                        L0["result"] = ($.add($.add((await $.call(C, "inttostr", [$.sub(L0["wnday"], ($.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"]), L0["okt"])))])), ".11."), (await $.call(C, "FormatDateTime", ["YYYY", (await $.v(C, "date"))]))));
                      } else {
                        if ($.truthy((await $.and_(($.gt(L0["wnday"], $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"]), L0["okt"]), L0["nov"]))), async () => ($.le(L0["wnday"], $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"]), L0["okt"]), L0["nov"]), L0["dec"]))))))) {
                          L0["result"] = ($.add($.add((await $.call(C, "inttostr", [$.sub(L0["wnday"], ($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"]), L0["okt"]), L0["nov"])))])), ".12."), (await $.call(C, "FormatDateTime", ["YYYY", (await $.v(C, "date"))]))));
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
  }
  return L0.result;
}, {"params": ["wnday"], "kind": "function", "ptypes": ["integer"]});
  U.func("sysday", async function sysday(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "t": 0};
  { const $t6 = (await $.call(C, "DayOfWeek", [(await $.v(C, "date"))]));
    if ($.eq($t6, 2) || $.eq($t6, 3) || $.eq($t6, 4) || $.eq($t6, 5)) {
      L0["result"] = (await $.call(C, "formatdatetime", ["YYYYMMDD", (await $.v(C, "date"))]));
    }
    else if ($.eq($t6, 6)) {
      L0["t"] = $.add((await $.v(C, "date")), 3);
      L0["result"] = (await $.call(C, "formatdatetime", ["YYYYMMDD", L0["t"]]));
    }
    else if ($.eq($t6, 7)) {
      L0["t"] = $.add((await $.v(C, "date")), 2);
      L0["result"] = (await $.call(C, "formatdatetime", ["YYYYMMDD", L0["t"]]));
    }
    else if ($.eq($t6, 1)) {
      L0["t"] = $.add((await $.v(C, "date")), 1);
      L0["result"] = (await $.call(C, "formatdatetime", ["YYYYMMDD", L0["t"]]));
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("otherdate", async function otherdate(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"otherd": $.copyArg(p0), "tip": $.copyArg(p1), result: '', "str": ''};
  await $.fixArgs(L0, ["otherd", "tip"]);
  if ($.truthy(L0["tip"])) {
    { const $t7 = (await $.call(C, "strtoint", [(await $.call(C, "formatdatetime", ["mm", (await $.v(C, "date"))]))]));
      if ($.eq($t7, 1)) {
        L0["str"] = "JAN";
      }
      else if ($.eq($t7, 2)) {
        L0["str"] = "FEB";
      }
      else if ($.eq($t7, 3)) {
        L0["str"] = "MAR";
      }
      else if ($.eq($t7, 4)) {
        L0["str"] = "APR";
      }
      else if ($.eq($t7, 5)) {
        L0["str"] = "MAY";
      }
      else if ($.eq($t7, 6)) {
        L0["str"] = "JUN";
      }
      else if ($.eq($t7, 7)) {
        L0["str"] = "JLY";
      }
      else if ($.eq($t7, 8)) {
        L0["str"] = "AUG";
      }
      else if ($.eq($t7, 9)) {
        L0["str"] = "SEP";
      }
      else if ($.eq($t7, 10)) {
        L0["str"] = "OCT";
      }
      else if ($.eq($t7, 11)) {
        L0["str"] = "NOV";
      }
      else if ($.eq($t7, 12)) {
        L0["str"] = "DEC";
      }
    }
    L0["result"] = $.add($.add((await $.call(C, "FormatDateTime", ["dd ", L0["otherd"]])), L0["str"]), (await $.call(C, "FormatDateTime", [" yy", L0["otherd"]])));
  } else {
    L0["result"] = $.add($.add($.add($.add((await $.call(C, "FormatDateTime", ["dd", L0["otherd"]])), "/"), (await $.call(C, "FormatDateTime", ["mm", L0["otherd"]]))), "/"), (await $.call(C, "FormatDateTime", ["yy", L0["otherd"]])));
  }
  return L0.result;
}, {"params": ["otherd", "tip"], "kind": "function", "ptypes": ["tdate", "boolean"]});
  U.func("MonthIntNum", async function MonthIntNum(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"monthstr": $.copyArg(p0), result: 0, "intnum": 0};
  await $.fixArgs(L0, ["monthstr"]);
  if ($.truthy($.eq(L0["monthstr"], "JAN"))) {
    L0["intnum"] = 1;
  }
  if ($.truthy($.eq(L0["monthstr"], "FEB"))) {
    L0["intnum"] = 2;
  }
  if ($.truthy($.eq(L0["monthstr"], "MAR"))) {
    L0["intnum"] = 3;
  }
  if ($.truthy($.eq(L0["monthstr"], "APR"))) {
    L0["intnum"] = 4;
  }
  if ($.truthy($.eq(L0["monthstr"], "MAY"))) {
    L0["intnum"] = 5;
  }
  if ($.truthy($.eq(L0["monthstr"], "JUN"))) {
    L0["intnum"] = 6;
  }
  if ($.truthy($.eq(L0["monthstr"], "JUL"))) {
    L0["intnum"] = 7;
  }
  if ($.truthy($.eq(L0["monthstr"], "AUG"))) {
    L0["intnum"] = 8;
  }
  if ($.truthy($.eq(L0["monthstr"], "SEP"))) {
    L0["intnum"] = 9;
  }
  if ($.truthy($.eq(L0["monthstr"], "OCT"))) {
    L0["intnum"] = 10;
  }
  if ($.truthy($.eq(L0["monthstr"], "NOV"))) {
    L0["intnum"] = 11;
  }
  if ($.truthy($.eq(L0["monthstr"], "DEC"))) {
    L0["intnum"] = 12;
  }
  L0["result"] = L0["intnum"];
  return L0.result;
}, {"params": ["MonthStr"], "kind": "function", "ptypes": ["String"]});
  U.method("TMAINFORM", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TMAINFORM", "E1Click", async function E1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "exchange_files", (await $.mcall((await $.v(C, "Texchange_files")), "Create", [Self])));
  await $.mcall((await $.v(C, "exchange_files")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TMAINFORM", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TMAINFORM", "Initialize", null, arguments);
  await $.set(C, "OnActivate", (await $.ref_(C, "ActivateEvent")));
  await $.set(C, "OnClick", (await $.ref_(C, "ClickEvent")));
  await $.set(C, "OnCreate", (await $.ref_(C, "CreateEvent")));
  await $.set(C, "OnDblClick", (await $.ref_(C, "DblClickEvent")));
  await $.set(C, "OnDeactivate", (await $.ref_(C, "DeactivateEvent")));
  await $.set(C, "OnDestroy", (await $.ref_(C, "DestroyEvent")));
  await $.set(C, "OnKeyPress", (await $.ref_(C, "KeyPressEvent")));
  await $.set(C, "OnPaint", (await $.ref_(C, "PaintEvent")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TMAINFORM", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMAINFORM", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMAINFORM", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMAINFORM", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMAINFORM", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMAINFORM", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMAINFORM", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMAINFORM", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMAINFORM", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMAINFORM", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMAINFORM", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMAINFORM", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMAINFORM", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMAINFORM", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMAINFORM", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMAINFORM", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMAINFORM", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMAINFORM", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMAINFORM", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TMAINFORM", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "K1Click", async function K1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "UFXFORm", (await $.mcall((await $.v(C, "TUFXFORm")), "create", [Self])));
  await $.mcall((await $.v(C, "UFXFORm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "tempkey": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["tempkey"] = (await $.call(C, "Smallint", [(await L0["key"].get())]));
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.stmt((await $.mcall((await $.v(C, "FEvents")), "OnKeyPress", [L0["tempkey"]])));
  }
  await L0["key"].set((await $.call(C, "Char", [L0["tempkey"]])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TMAINFORM", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMAINFORM", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMAINFORM", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TMAINFORM", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TMAINFORM", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TMAINFORM", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TMAINFORM", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMAINFORM", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMAINFORM", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMAINFORM", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TMAINFORM", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TMAINFORM", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMAINFORM", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TMAINFORM", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TMAINFORM", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMAINFORM", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TMAINFORM", "T1Click", async function T1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "rbsdotax", (await $.mcall((await $.v(C, "Trbsdotax")), "Create", [Self])));
  await $.mcall((await $.v(C, "rbsdotax")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "MainMenuMouseMove", async function MainMenuMouseMove(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "shift": $.copyArg(p1), "x": $.copyArg(p2), "y": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "shift", "x", "y"]);
  return L0.result;
}, {"params": ["Sender", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TShiftState", "Integer", "Integer"]});
  U.method("TMAINFORM", "ActiveFormActivate", async function ActiveFormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "ActiveFormKeyUp", async function ActiveFormKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_f3"))))) {
    await $.set(C, "FormSearch", (await $.mcall((await $.v(C, "TFormSearch")), "Create", [Self])));
    await $.mcall((await $.v(C, "FormSearch")), "Showmodal", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TMAINFORM", "CTButtonRefreshClick", async function CTButtonRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0, "k": 0, "h": 0, "z": 0, "rowcount": 0, "selst": 0, "selstf": 0, "lengthofta": 0, "msgcount": 0, "all": '', "all1": '', "stmessage": '', "currency": '', "syssim": '', "fileext": '', "test": 0, "transummusd": 0, "amountsummusd": 0, "feeamounsummusd": 0, "transummazm": 0, "amountsummazm": 0, "feeamounsummazm": 0, "client": $.sarr(), "go": false, "f": null};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "NewCardClick", async function NewCardClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "OnlineCards1Click", async function OnlineCards1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "online", (await $.mcall((await $.v(C, "Tonline")), "create", [Self])));
  await $.mcall((await $.v(C, "online")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "N21Click", async function N21Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_balans"]])));
  await $.set(C, "Balance", (await $.mcall((await $.v(C, "TBalance")), "Create", [Self])));
  await $.mcall((await $.v(C, "Balance")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "N11Click", async function N11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_clients"]])));
  await $.set(C, "clients", (await $.mcall((await $.v(C, "Tclients")), "create", [Self])));
  await $.mcall((await $.v(C, "clients")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "N1Click", async function N1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_payment"]])));
  await $.set(C, "Payments", (await $.mcall((await $.v(C, "TPayments")), "create", [Self])));
  await $.mcall((await $.v(C, "Payments")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "line": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataMod_CARDS", (await $.mcall((await $.v(C, "TDataMod_CARDS")), "create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "MenuItem1Click", async function MenuItem1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_cfile"]])));
  await $.set(C, "cfile", (await $.mcall((await $.v(C, "Tcfile")), "Create", [Self])));
  await $.mcall((await $.v(C, "cfile")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "N9Click", async function N9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_application"]])));
  await $.set(C, "Applications", (await $.mcall((await $.v(C, "TApplications")), "Create", [Self])));
  await $.mcall((await $.v(C, "Applications")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_hesabat"]])));
  await $.set(C, "hesabatlar", (await $.mcall((await $.v(C, "thesabatlar")), "create", [Self])));
  await $.mcall((await $.v(C, "hesabatlar")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "N10Click", async function N10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_newcard"]])));
  await $.set(C, "form9", (await $.mcall((await $.v(C, "tform9")), "create", [Self])));
  await $.mcall((await $.v(C, "form9")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_setting"]])));
  await $.set(C, "form10", (await $.mcall((await $.v(C, "tform10")), "create", [Self])));
  await $.mcall((await $.v(C, "Form10")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "MenuItem3Click", async function MenuItem3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_smsfiles"]])));
  await $.set(C, "smsfile", (await $.mcall((await $.v(C, "Tsmsfile")), "Create", [Self])));
  await $.mcall((await $.v(C, "smsfile")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "IntReatil1Click", async function IntReatil1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_intretail"]])));
  await $.set(C, "intfile", (await $.mcall((await $.v(C, "Tintfile")), "create", [Self])));
  await $.mcall((await $.v(C, "intfile")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "MenuItem2Click", async function MenuItem2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_dxxxfile"]])));
  await $.set(C, "Dxxx", (await $.mcall((await $.v(C, "TDxxx")), "Create", [Self])));
  await $.mcall((await $.v(C, "dxxx")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "R1Click", async function R1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "dorbsfile", (await $.mcall((await $.v(C, "Tdorbsfile")), "Create", [Self])));
  await $.mcall((await $.v(C, "dorbsfile")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "RVisa1Click", async function RVisa1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_rvisa"]])));
  await $.set(C, "rvisa", (await $.mcall((await $.v(C, "Trvisa")), "create", [Self])));
  await $.mcall((await $.v(C, "rvisa")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "DFile1Click", async function DFile1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_dfile"]])));
  await $.set(C, "dfile", (await $.mcall((await $.v(C, "Tdfile")), "create", [Self])));
  await $.mcall((await $.v(C, "Dfile")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "Dilling1Click", async function Dilling1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_dilinq"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "Kliring1Click", async function Kliring1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_klirinq"]])));
  await $.set(C, "Klirinq_form", (await $.mcall((await $.v(C, "TKlirinq_form")), "create", [Self])));
  await $.mcall((await $.v(C, "Klirinq_form")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "Limitlr1Click", async function Limitlr1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "lim", (await $.mcall((await $.v(C, "Tlim")), "Create", [Self])));
  await $.mcall((await $.v(C, "lim")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "test1Click", async function test1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "clients2")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "N12DrawItem", async function N12DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t8 = L0["acanvas"];
    const $t9 = (await $.wv([$t8], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t10 = (await $.mv((await $.wv([$t8, $t9], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Font"));
      await $.wset([$t8, $t9, $t10], "Charset", (await $.wv([$t8, $t9, $t10], "DEFAULT_CHARSET", C, false)), C);
      await $.wset([$t8, $t9, $t10], "Name", "Azl Sans Serif", C);
      if ($.truthy((await $.wv([$t8, $t9, $t10], "Default", C, false)))) {
        await $.wset([$t8, $t9, $t10], "Style", [(await $.wv([$t8, $t9, $t10], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t8, $t9], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t8, $t9], "Pen", C, false)), "Color", (await $.wv([$t8, $t9], "clBlack", C, false)));
      await $.wset([$t8, $t9], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t8, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t8, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t8, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t8, $t9], "MoveTo", [(await $.mv((await $.wv([$t8, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t8, $t9], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t8, $t9], "LineTo", [(await $.mv((await $.wv([$t8, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t8, $t9], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t8, $t9], "inc", [$.ref(async () => (await $.wv([$t8, $t9], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t11) => { await $.wset([$t8, $t9], "LineBottom", $t11, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t8, $t9], "Pen", C, false)), "Color", (await $.wv([$t8, $t9], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t8, $t9], "MoveTo", [(await $.mv((await $.wv([$t8, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t8, $t9], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t8, $t9], "LineTo", [(await $.mv((await $.wv([$t8, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t8, $t9], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t8, $t9], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t8, $t9], "Brush", C, false)), "Color", (await $.wv([$t8, $t9], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t8, $t9], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t8, $t9], "Font", C, false)), "Color", (await $.wv([$t8, $t9], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t8, $t9], "Font", C, false)), "Color", (await $.wv([$t8, $t9], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t8, $t9], "Brush", C, false)), "Color", (await $.wv([$t8, $t9], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t8, $t9], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t8, $t9], "Font", C, false)), "Color", (await $.wv([$t8, $t9], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t8, $t9], "Font", C, false)), "Color", (await $.wv([$t8, $t9], "clGrayText", C, false)));
        }
      }
      await $.wset([$t8, $t9], "Bar", (await $.wv([$t8, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t8, $t9], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t8, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t12) => { await $.mset((await $.wv([$t8, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t12); }), 22], C)));
      await $.stmt((await $.wcall([$t8, $t9], "FillRect", [(await $.wv([$t8, $t9], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t8, $t9], "TextOut", [$.add((await $.mv((await $.wv([$t8, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t8, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t8, $t9], "Caption", C, false))], C)));
    }
    await $.wset([$t8, $t9], "SText", (await $.wcall([$t8, $t9], "ShortCutToText", [(await $.wv([$t8, $t9], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t8, $t9], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t8, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t8, $t9], "TextWidth", [(await $.wv([$t8, $t9], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 7), $.add((await $.mv((await $.wv([$t8, $t9], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t8, $t9], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t8, $t9], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t13 = (await $.wv([$t8, $t9], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t8, $t9, $t13], "Assigned", [(await $.wv([$t8, $t9, $t13], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t8, $t9, $t13], "Checked", C, false)))) {
            await $.mset((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t8, $t9, $t13], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t8, $t9, $t13], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t8, $t9, $t13], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t8, $t9, $t13], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t8, $t9, $t13], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t8, $t9, $t13], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t14) => { await $.mset((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t14); }), 2], C)));
            await $.stmt((await $.wcall([$t8, $t9, $t13], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t15) => { await $.mset((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t15); }), 2], C)));
            await $.stmt((await $.wcall([$t8, $t9, $t13], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t16) => { await $.mset((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t16); }), 2], C)));
            await $.stmt((await $.wcall([$t8, $t9, $t13], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t17) => { await $.mset((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t17); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t8, $t9, $t13], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t8, $t9, $t13], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t8, $t9, $t13], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t8, $t9, $t13], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t18) => { await $.mset((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t18); }), 1], C)));
            await $.stmt((await $.wcall([$t8, $t9, $t13], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t19) => { await $.mset((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t19); }), 1], C)));
            await $.stmt((await $.wcall([$t8, $t9, $t13], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t20) => { await $.mset((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t20); }), 1], C)));
            await $.stmt((await $.wcall([$t8, $t9, $t13], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t21) => { await $.mset((await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t21); }), 1], C)));
            if ($.truthy((await $.wv([$t8, $t9, $t13], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t8, $t9, $t13], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t8, $t9, $t13], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t8, $t9, $t13], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t8, $t9, $t13], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t8, $t9, $t13], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t8, $t9, $t13], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t8, $t9, $t13], "Images", C, false)), "Draw", [(await $.wv([$t8, $t9, $t13], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t8, $t9, $t13], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t8, $t9, $t13], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t8, $t9, $t13], "ImageIndex", C, false)), (await $.wv([$t8, $t9, $t13], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TMAINFORM", "N12Click", async function N12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_excelfile"]])));
  await $.set(C, "excelform", (await $.mcall((await $.v(C, "tExcelform")), "create", [Self])));
  await $.mcall((await $.v(C, "EXCELform")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "cARDNUMBERCHANGE1Click", async function cARDNUMBERCHANGE1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_cardnumber"]])));
  await $.set(C, "cardnumber", (await $.mcall((await $.v(C, "tcardnumber")), "create", [Self])));
  await $.mcall((await $.v(C, "cardnumber")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "PopupMenu1Popup", async function PopupMenu1Popup(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "refresh", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["dord"])), "asinteger")), 1))) {
    await $.mset((await $.v(C, "N13")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "N13")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "PostCommisiononus1Click", async function PostCommisiononus1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_cfile"]])));
  await $.set(C, "PostCommisionOnus", (await $.mcall((await $.v(C, "TPostCommisionOnus")), "Create", [Self])));
  await $.mcall((await $.v(C, "PostCommisionOnus")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "N13Click", async function N13Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["VERIF"]])));
  await $.set(C, "verification", (await $.mcall((await $.v(C, "tverification")), "create", [Self])));
  await $.mcall((await $.v(C, "verification")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMAINFORM", "N14Click", async function N14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["FileReport.bpl", "REZ"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
