// Generated from UnitDfile.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitDfile", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "CMExcelExport", "Menus", "ImgList", "ComCtrls", "ToolWin", "Grids", "DBGrids", "StdCtrls", "FileCtrl", "Buttons", "ExtCtrls", "oracledata", "Unit18", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  $.defRecord("tclient", {"cardnumber": () => '', "rbsnumber": () => '', "terminal": () => '', "trantime": () => '', "trandate": () => '', "tranamount": () => 0, "acountamount": () => 0, "feeamount": () => 0, "trancurrency": () => '', "tranbalanssign": () => '', "acccurrency": () => '', "accbalanssign": () => '', "feecurrency": () => '', "feebalanssign": () => ''});
  U.defClass("TDfile", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "refwithsel": {"name": "RefwithSel", "type": "TSpeedButton"}, "redxxx": {"name": "REDXXX", "type": "TRichEdit"}, "filelistbox1": {"name": "FileListBox1", "type": "TFileListBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "animate1": {"name": "Animate1", "type": "TAnimate"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "isertbtn": {"name": "isertbtn", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "filelistboxsmsfiles": {"name": "FileListBoxSmsFiles", "type": "TFileListBox"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "selectall1": {"name": "selectall1", "type": "TMenuItem"}, "cmexcelexport2": {"name": "CMExcelExport2", "type": "TCMExcelExport"}, "filelistboxdxxx": {"name": "FileListBoxDxxx", "type": "TFileListBox"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}}, {});
  U.init(async () => {
    U.var_("Dfile", null, "TDfile");
  });
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
  U.method("TDfile", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ToolButton2")), "CLICK", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDfile", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0, "k": 0, "h": 0, "z": 0, "rowcount": 0, "selst": 0, "selstf": 0, "lengthofta": 0, "msgcount": 0, "all": '', "all1": '', "stmessage": '', "currency": '', "syssim": '', "fileext": '', "test": 0, "transummusd": 0, "amountsummusd": 0, "feeamounsummusd": 0, "transummazm": 0, "amountsummazm": 0, "feeamounsummazm": 0, "transummeur": 0, "amountsummeur": 0, "feeamounsummeur": 0, "client": $.sarr(), "go": false, "f": null, "curr": null, "v_dir": ''};
  await $.fixArgs(L0, ["sender"]);
  try {
    L0["v_dir"] = (await $.v(C, "GetCurrentDir"));
    await $.mcall((await $.mv((await $.v(C, "REDXXX")), "Lines")), "Clear", []);
    if ($.truthy($.not((await $.call(C, "DirectoryExists", ["C:\\AZCARD\\IN"]))))) {
      await $.stmt((await $.call(C, "MkDir", ["C:\\AZCARD\\IN"])));
    }
    await $.mset((await $.v(C, "FileListBox1")), "Directory", "C:\\AZCARD\\IN");
    await $.mcall((await $.v(C, "FileListBox1")), "Update", []);
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "FileListBox1")), "Items")), "Count")), 0))) {
      return L0.result;
    }
    await $.mset((await $.v(C, "FileListBox1")), "Mask", "*.*");
    await $.mcall((await $.v(C, "FileListBox1")), "Update", []);
    L0["test"] = $.fdiv(122, 10);
    if ($.truthy($.gt((await $.call(C, "pos", [".", (await $.call(C, "floattostr", [L0["test"]]))])), 0))) {
      L0["syssim"] = ".";
    } else {
      if ($.truthy($.gt((await $.call(C, "pos", [",", (await $.call(C, "floattostr", [L0["test"]]))])), 0))) {
        L0["syssim"] = ",";
      }
    }
    { const $t4 = $.sub((await $.mv((await $.mv((await $.v(C, "FileListBox1")), "items")), "Count")), 1);
      L0["i"] = 0;
      let $t5 = true;
      for (;;) {
        if (!$t5) { L0["i"] = $.succ(L0["i"], 1); }
        $t5 = false;
        if (!($.ord(L0["i"]) <= $.ord($t4))) break;
        await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
        L0["msgcount"] = 0;
        if ($.truthy(($.ne((await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "FileListBox1")), "items")), [L0["i"]])), 0, 5])), $.add("D", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["bankid"])), "asstring"))))))) {
          continue;
        }
        if ($.truthy($.eq((await $.call(C, "CheckFileExt", [$.add((await $.mv((await $.v(C, "FileListBox1")), "Directory")), (await $.idx((await $.mv((await $.v(C, "FileListBox1")), "items")), [L0["i"]])))])), false))) {
          continue;
        }
        await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t6) => { L0["f"] = $t6; }), $.add("C:\\AZCARD\\IN\\", (await $.idx((await $.mv((await $.v(C, "FileListBox1")), "Items")), [L0["i"]])))])));
        await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t7) => { L0["f"] = $t7; })])));
        L0["rowcount"] = 0;
        while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
          L0["rowcount"] = $.add(L0["rowcount"], 1);
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t8) => { L0["f"] = $t8; }), $.ref(async () => L0["stmessage"], async ($t9) => { L0["stmessage"] = $t9; })])));
          L0["msgcount"] = $.add(L0["msgcount"], 1);
          await $.tick();
        }
        L0["stmessage"] = "";
        await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t10) => { L0["f"] = $t10; })])));
        if ($.truthy($.eq((await $.mv((await $.v(C, "RefwithSel")), "Down")), false))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "REDXXX")), "Lines")), "Add", [$.add($.add($.add($.add("FILE NAME            :< ", (await $.idx((await $.mv((await $.v(C, "FileListBox1")), "items")), [L0["i"]]))), " >   "), "Message count: "), (await $.call(C, "inttostr", [$.sub(L0["msgcount"], 2)])))])));
          { const $t11 = $.sub(L0["rowcount"], 1);
            L0["j"] = 1;
            let $t12 = true;
            for (;;) {
              if (!$t12) { L0["j"] = $.succ(L0["j"], 1); }
              $t12 = false;
              if (!($.ord(L0["j"]) <= $.ord($t11))) break;
              await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
              await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t13) => { L0["f"] = $t13; }), $.ref(async () => L0["stmessage"], async ($t14) => { L0["stmessage"] = $t14; })])));
              if ($.truthy($.eq(L0["j"], 1))) {
                L0["currency"] = (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 54, 3]))]));
                continue;
              }
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "REDXXX")), "Lines")), "Add", [$.add("BANK NAME                                          ", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 115, 32]))])))])));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "REDXXX")), "Lines")), "Add", [$.add("LORO ACCOUNT                                       ", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 187, 32]))])))])));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "REDXXX")), "Lines")), "Add", [$.add("PAYMENT ORDER AMMOUNT                              ", (await $.call(C, "FLOATTOSTR", [$.fdiv((await $.call(C, "STRTOFLOAT", [(await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 267, 15]))]))])), 100)])))])));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "REDXXX")), "Lines")), "Add", [$.add("CURRENCY                                           ", L0["currency"])])));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "REDXXX")), "Lines")), "Add", [$.add("PAYMENT DIRECTION                                  ", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 282, 1]))])))])));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "REDXXX")), "Lines")), "Add", [$.add("SOURCE CONTRACT                                    ", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 500, 32]))])))])));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "REDXXX")), "Lines")), "Add", [$.add("TRANSACTION DATE                                   ", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 532, 8]))])))])));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "REDXXX")), "Lines")), "Add", [$.add("TRANSACTION TIME                                   ", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 540, 6]))])))])));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "REDXXX")), "Lines")), "Add", ["---------------------------------------------------------------------------------"])));
              await $.tick();
            }
          }
        } else {
          if ($.truthy((await $.mv((await $.v(C, "RefwithSel")), "Down")))) {
            await $.stmt((await $.mcall((await $.mv((await $.v(C, "REDXXX")), "Lines")), "Add", [$.add($.add("FILE NAME            :< ", (await $.idx((await $.mv((await $.v(C, "FileListBox1")), "items")), [L0["i"]]))), " >")])));
            { const $t15 = $.sub(L0["rowcount"], 1);
              L0["j"] = 1;
              let $t16 = true;
              for (;;) {
                if (!$t16) { L0["j"] = $.succ(L0["j"], 1); }
                $t16 = false;
                if (!($.ord(L0["j"]) <= $.ord($t15))) break;
                await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t17) => { L0["f"] = $t17; }), $.ref(async () => L0["stmessage"], async ($t18) => { L0["stmessage"] = $t18; })])));
                if ($.truthy($.eq(L0["j"], 1))) {
                  continue;
                }
                if ($.truthy($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 19, 3]))])), "BAL"))) {
                  continue;
                }
                await $.mset((await $.idx(L0["client"], [L0["j"]])), "cardnumber", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 71, 24]))])));
                await $.mset((await $.idx(L0["client"], [L0["j"]])), "RBSnumber", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 95, 32]))])));
                await $.mset((await $.idx(L0["client"], [L0["j"]])), "terminal", (await $.call(C, "floattostr", [(await $.call(C, "strtofloat", [(await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 221, 24]))]))]))])));
                await $.mset((await $.idx(L0["client"], [L0["j"]])), "Trandate", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 245, 8]))])));
                await $.mset((await $.idx(L0["client"], [L0["j"]])), "trantime", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 253, 6]))])));
                L0["all"] = "";
                L0["all"] = (await $.call(C, "FloatToStr", [$.fdiv((await $.call(C, "StrToFloat", [(await $.call(C, "copy", [L0["stmessage"], 269, 15]))])), 100)]));
                await $.mset((await $.idx(L0["client"], [L0["j"]])), "TranAmount", (await $.call(C, "StrToFloat", [L0["all"]])));
                L0["all"] = "";
                if ($.truthy($.eq((await $.call(C, "copy", [L0["stmessage"], 259, 1])), "C"))) {
                  L0["all"] = "   CREDIT";
                  await $.mset((await $.idx(L0["client"], [L0["j"]])), "TranAmount", $.mul((await $.mv((await $.idx(L0["client"], [L0["j"]])), "TranAmount")), ((-(1)))));
                } else {
                  if ($.truthy($.eq((await $.call(C, "copy", [L0["stmessage"], 259, 1])), "D"))) {
                    L0["all"] = "   DEBET ";
                  }
                }
                await $.mset((await $.idx(L0["client"], [L0["j"]])), "Tranbalanssign", L0["all"]);
                L0["all"] = "";
                if ($.truthy($.eq((await $.call(C, "copy", [L0["stmessage"], 260, 3])), "944"))) {
                  L0["currency"] = "AZN";
                } else {
                  if ($.truthy($.eq((await $.call(C, "copy", [L0["stmessage"], 260, 3])), "840"))) {
                    L0["currency"] = "USD";
                  } else {
                    if ($.truthy($.eq((await $.call(C, "copy", [L0["stmessage"], 260, 3])), "978"))) {
                      L0["currency"] = "EUR";
                    }
                  }
                }
                await $.mset((await $.idx(L0["client"], [L0["j"]])), "Trancurrency", L0["currency"]);
                L0["all"] = "";
                L0["all"] = (await $.call(C, "FloatToStr", [$.fdiv((await $.call(C, "StrToFloat", [(await $.call(C, "copy", [L0["stmessage"], 299, 15]))])), 100)]));
                await $.mset((await $.idx(L0["client"], [L0["j"]])), "AcountAmount", (await $.call(C, "StrToFloat", [L0["all"]])));
                L0["all"] = "";
                if ($.truthy($.eq((await $.call(C, "copy", [L0["stmessage"], 314, 1])), "C"))) {
                  L0["all"] = "   CREDIT";
                  await $.mset((await $.idx(L0["client"], [L0["j"]])), "AcountAmount", $.mul((await $.mv((await $.idx(L0["client"], [L0["j"]])), "AcountAmount")), ((-(1)))));
                } else {
                  if ($.truthy($.eq((await $.call(C, "copy", [L0["stmessage"], 314, 1])), "D"))) {
                    L0["all"] = "   DEBET ";
                  }
                }
                await $.mset((await $.idx(L0["client"], [L0["j"]])), "Accbalanssign", L0["all"]);
                L0["all"] = "";
                if ($.truthy($.eq((await $.call(C, "copy", [L0["stmessage"], 266, 3])), "944"))) {
                  L0["currency"] = "AZN";
                } else {
                  if ($.truthy($.eq((await $.call(C, "copy", [L0["stmessage"], 266, 3])), "840"))) {
                    L0["currency"] = "USD";
                  } else {
                    if ($.truthy($.eq((await $.call(C, "copy", [L0["stmessage"], 266, 3])), "978"))) {
                      L0["currency"] = "EUR";
                    }
                  }
                }
                await $.mset((await $.idx(L0["client"], [L0["j"]])), "Acccurrency", L0["currency"]);
                L0["all"] = "";
                await $.mset((await $.idx(L0["client"], [L0["j"]])), "feeamount", $.fdiv((await $.call(C, "StrToFloat", [(await $.call(C, "copy", [L0["stmessage"], 315, 15]))])), 100));
                if ($.truthy($.eq((await $.call(C, "copy", [L0["stmessage"], 314, 1])), "C"))) {
                  L0["all"] = "   CREDIT";
                  await $.mset((await $.idx(L0["client"], [L0["j"]])), "feeamount", $.mul((await $.mv((await $.idx(L0["client"], [L0["j"]])), "feeamount")), ((-(1)))));
                } else {
                  if ($.truthy($.eq((await $.call(C, "copy", [L0["stmessage"], 314, 1])), "D"))) {
                    L0["all"] = "   DEBET ";
                  }
                }
                await $.mset((await $.idx(L0["client"], [L0["j"]])), "Feebalanssign", L0["all"]);
                if ($.truthy($.eq((await $.call(C, "copy", [L0["stmessage"], 266, 3])), "944"))) {
                  L0["currency"] = "AZN";
                } else {
                  if ($.truthy($.eq((await $.call(C, "copy", [L0["stmessage"], 266, 3])), "840"))) {
                    L0["currency"] = "USD";
                  } else {
                    if ($.truthy($.eq((await $.call(C, "copy", [L0["stmessage"], 266, 3])), "978"))) {
                      L0["currency"] = "EUR";
                    }
                  }
                }
                await $.mset((await $.idx(L0["client"], [L0["j"]])), "Feecurrency", L0["currency"]);
                await $.tick();
              }
            }
            await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t19) => { L0["f"] = $t19; })])));
            { const $t20 = $.sub(L0["rowcount"], 1);
              L0["j"] = 2;
              let $t21 = true;
              for (;;) {
                if (!$t21) { L0["j"] = $.succ(L0["j"], 1); }
                $t21 = false;
                if (!($.ord(L0["j"]) <= $.ord($t20))) break;
                L0["transummusd"] = 0;
                L0["transummazm"] = 0;
                L0["transummeur"] = 0;
                L0["amountsummusd"] = 0;
                L0["amountsummazm"] = 0;
                L0["amountsummeur"] = 0;
                L0["feeamounsummusd"] = 0;
                L0["feeamounsummazm"] = 0;
                L0["feeamounsummeur"] = 0;
                L0["go"] = false;
                { const $t22 = $.sub(L0["j"], 1);
                  L0["z"] = 2;
                  let $t23 = true;
                  for (;;) {
                    if (!$t23) { L0["z"] = $.succ(L0["z"], 1); }
                    $t23 = false;
                    if (!($.ord(L0["z"]) <= $.ord($t22))) break;
                    if ($.truthy(($.eq((await $.mv((await $.idx(L0["client"], [L0["j"]])), "cardnumber")), (await $.mv((await $.idx(L0["client"], [L0["z"]])), "cardnumber")))))) {
                      L0["go"] = true;
                      break;
                    }
                    await $.tick();
                  }
                }
                if ($.truthy(L0["go"])) {
                  continue;
                }
                if ($.truthy($.eq((await $.mv((await $.idx(L0["client"], [L0["j"]])), "Trancurrency")), "USD"))) {
                  L0["transummusd"] = (await $.mv((await $.idx(L0["client"], [L0["j"]])), "TranAmount"));
                } else {
                  if ($.truthy($.eq((await $.mv((await $.idx(L0["client"], [L0["j"]])), "Trancurrency")), "AZN"))) {
                    L0["transummazm"] = (await $.mv((await $.idx(L0["client"], [L0["j"]])), "TranAmount"));
                  } else {
                    if ($.truthy($.eq((await $.mv((await $.idx(L0["client"], [L0["j"]])), "Trancurrency")), "EUR"))) {
                      L0["transummeur"] = (await $.mv((await $.idx(L0["client"], [L0["j"]])), "TranAmount"));
                    }
                  }
                }
                if ($.truthy($.eq((await $.mv((await $.idx(L0["client"], [L0["j"]])), "Acccurrency")), "USD"))) {
                  L0["amountsummusd"] = (await $.mv((await $.idx(L0["client"], [L0["j"]])), "AcountAmount"));
                } else {
                  if ($.truthy($.eq((await $.mv((await $.idx(L0["client"], [L0["j"]])), "Acccurrency")), "AZN"))) {
                    L0["amountsummazm"] = (await $.mv((await $.idx(L0["client"], [L0["j"]])), "AcountAmount"));
                  } else {
                    if ($.truthy($.eq((await $.mv((await $.idx(L0["client"], [L0["j"]])), "Acccurrency")), "EUR"))) {
                      L0["amountsummeur"] = (await $.mv((await $.idx(L0["client"], [L0["j"]])), "AcountAmount"));
                    }
                  }
                }
                if ($.truthy($.eq((await $.mv((await $.idx(L0["client"], [L0["j"]])), "Feecurrency")), "USD"))) {
                  L0["feeamounsummusd"] = (await $.mv((await $.idx(L0["client"], [L0["j"]])), "feeamount"));
                } else {
                  if ($.truthy($.eq((await $.mv((await $.idx(L0["client"], [L0["j"]])), "Feecurrency")), "AZN"))) {
                    L0["feeamounsummazm"] = (await $.mv((await $.idx(L0["client"], [L0["j"]])), "feeamount"));
                  } else {
                    if ($.truthy($.eq((await $.mv((await $.idx(L0["client"], [L0["j"]])), "Feecurrency")), "EUR"))) {
                      L0["feeamounsummeur"] = (await $.mv((await $.idx(L0["client"], [L0["j"]])), "feeamount"));
                    }
                  }
                }
                { const $t24 = $.sub(L0["rowcount"], 1);
                  L0["h"] = $.add(L0["j"], 1);
                  let $t25 = true;
                  for (;;) {
                    if (!$t25) { L0["h"] = $.succ(L0["h"], 1); }
                    $t25 = false;
                    if (!($.ord(L0["h"]) <= $.ord($t24))) break;
                    if ($.truthy($.eq((await $.mv((await $.idx(L0["client"], [L0["j"]])), "cardnumber")), (await $.mv((await $.idx(L0["client"], [L0["h"]])), "cardnumber"))))) {
                      if ($.truthy($.eq((await $.mv((await $.idx(L0["client"], [L0["h"]])), "Trancurrency")), "USD"))) {
                        L0["transummusd"] = $.add(L0["transummusd"], (await $.mv((await $.idx(L0["client"], [L0["h"]])), "TranAmount")));
                      } else {
                        if ($.truthy($.eq((await $.mv((await $.idx(L0["client"], [L0["h"]])), "Trancurrency")), "AZN"))) {
                          L0["transummazm"] = $.add(L0["transummazm"], (await $.mv((await $.idx(L0["client"], [L0["h"]])), "TranAmount")));
                        } else {
                          if ($.truthy($.eq((await $.mv((await $.idx(L0["client"], [L0["h"]])), "Trancurrency")), "EUR"))) {
                            L0["transummeur"] = $.add(L0["transummeur"], (await $.mv((await $.idx(L0["client"], [L0["h"]])), "TranAmount")));
                          }
                        }
                      }
                      if ($.truthy($.eq((await $.mv((await $.idx(L0["client"], [L0["h"]])), "Acccurrency")), "USD"))) {
                        L0["amountsummusd"] = $.add(L0["amountsummusd"], (await $.mv((await $.idx(L0["client"], [L0["h"]])), "AcountAmount")));
                      } else {
                        if ($.truthy($.eq((await $.mv((await $.idx(L0["client"], [L0["h"]])), "Acccurrency")), "AZN"))) {
                          L0["amountsummazm"] = $.add(L0["amountsummazm"], (await $.mv((await $.idx(L0["client"], [L0["h"]])), "AcountAmount")));
                        } else {
                          if ($.truthy($.eq((await $.mv((await $.idx(L0["client"], [L0["h"]])), "Acccurrency")), "EUR"))) {
                            L0["amountsummeur"] = $.add(L0["amountsummeur"], (await $.mv((await $.idx(L0["client"], [L0["h"]])), "AcountAmount")));
                          }
                        }
                      }
                      if ($.truthy($.eq((await $.mv((await $.idx(L0["client"], [L0["h"]])), "Feecurrency")), "USD"))) {
                        L0["feeamounsummusd"] = $.add(L0["feeamounsummusd"], (await $.mv((await $.idx(L0["client"], [L0["h"]])), "feeamount")));
                      } else {
                        if ($.truthy($.eq((await $.mv((await $.idx(L0["client"], [L0["h"]])), "Feecurrency")), "AZN"))) {
                          L0["feeamounsummazm"] = $.add(L0["feeamounsummazm"], (await $.mv((await $.idx(L0["client"], [L0["h"]])), "feeamount")));
                        } else {
                          if ($.truthy($.eq((await $.mv((await $.idx(L0["client"], [L0["h"]])), "Feecurrency")), "EUR"))) {
                            L0["feeamounsummeur"] = $.add(L0["feeamounsummeur"], (await $.mv((await $.idx(L0["client"], [L0["h"]])), "feeamount")));
                          }
                        }
                      }
                    }
                    await $.tick();
                  }
                }
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "REDXXX")), "Lines")), "Add", [$.add("CONTRACT NUMBER      :", (await $.mv((await $.idx(L0["client"], [L0["j"]])), "cardnumber")))])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "REDXXX")), "Lines")), "Add", [$.add("RBS NUMBER           :", (await $.mv((await $.idx(L0["client"], [L0["j"]])), "RBSnumber")))])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "REDXXX")), "Lines")), "Add", [$.add("TERMINAL             :", (await $.mv((await $.idx(L0["client"], [L0["j"]])), "terminal")))])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "REDXXX")), "Lines")), "Add", [$.add("TRANSACTION DATE     :", (await $.mv((await $.idx(L0["client"], [L0["j"]])), "trandate")))])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "REDXXX")), "Lines")), "Add", [$.add("TRANSACTION TIME     :", (await $.mv((await $.idx(L0["client"], [L0["j"]])), "trantime")))])));
                L0["all1"] = "";
                L0["all1"] = (await $.call(C, "FloatToStr", [(await $.call(C, "abs", [L0["transummusd"]]))]));
                if ($.truthy($.eq((await $.call(C, "pos", [L0["syssim"], L0["all1"]])), 0))) {
                  await $.stmt((await $.call(C, "Insert", [$.add(L0["syssim"], "00"), $.ref(async () => L0["all1"], async ($t26) => { L0["all1"] = $t26; }), $.add((await $.call(C, "length", [L0["all1"]])), 1)])));
                }
                { const $t27 = 14;
                  L0["k"] = (await $.call(C, "length", [L0["all1"]]));
                  let $t28 = true;
                  for (;;) {
                    if (!$t28) { L0["k"] = $.succ(L0["k"], 1); }
                    $t28 = false;
                    if (!($.ord(L0["k"]) <= $.ord($t27))) break;
                    L0["all1"] = $.add(L0["all1"], " ");
                    await $.tick();
                  }
                }
                if ($.truthy($.lt(L0["transummusd"], 0))) {
                  L0["all1"] = $.add(L0["all1"], "  CREDIT");
                } else {
                  L0["all1"] = $.add(L0["all1"], "  DEBIT ");
                }
                L0["all1"] = $.add($.add("[", L0["all1"]), " USD]");
                L0["all"] = "";
                L0["all"] = (await $.call(C, "FloatToStr", [(await $.call(C, "abs", [L0["transummazm"]]))]));
                if ($.truthy($.eq((await $.call(C, "pos", [L0["syssim"], L0["all"]])), 0))) {
                  await $.stmt((await $.call(C, "Insert", [$.add(L0["syssim"], "00"), $.ref(async () => L0["all"], async ($t29) => { L0["all"] = $t29; }), $.add((await $.call(C, "length", [L0["all"]])), 1)])));
                }
                { const $t30 = 14;
                  L0["k"] = (await $.call(C, "length", [L0["all"]]));
                  let $t31 = true;
                  for (;;) {
                    if (!$t31) { L0["k"] = $.succ(L0["k"], 1); }
                    $t31 = false;
                    if (!($.ord(L0["k"]) <= $.ord($t30))) break;
                    L0["all"] = $.add(L0["all"], " ");
                    await $.tick();
                  }
                }
                if ($.truthy($.lt(L0["transummazm"], 0))) {
                  L0["all"] = $.add(L0["all"], "  CREDIT");
                } else {
                  L0["all"] = $.add(L0["all"], "  DEBIT ");
                }
                L0["all"] = $.add($.add("[", L0["all"]), " AZN]");
                L0["all"] = "";
                L0["all"] = (await $.call(C, "FloatToStr", [(await $.call(C, "abs", [L0["transummeur"]]))]));
                if ($.truthy($.eq((await $.call(C, "pos", [L0["syssim"], L0["all"]])), 0))) {
                  await $.stmt((await $.call(C, "Insert", [$.add(L0["syssim"], "00"), $.ref(async () => L0["all"], async ($t32) => { L0["all"] = $t32; }), $.add((await $.call(C, "length", [L0["all"]])), 1)])));
                }
                { const $t33 = 14;
                  L0["k"] = (await $.call(C, "length", [L0["all"]]));
                  let $t34 = true;
                  for (;;) {
                    if (!$t34) { L0["k"] = $.succ(L0["k"], 1); }
                    $t34 = false;
                    if (!($.ord(L0["k"]) <= $.ord($t33))) break;
                    L0["all"] = $.add(L0["all"], " ");
                    await $.tick();
                  }
                }
                if ($.truthy($.lt(L0["transummeur"], 0))) {
                  L0["all"] = $.add(L0["all"], "  CREDIT");
                } else {
                  L0["all"] = $.add(L0["all"], "  DEBIT ");
                }
                L0["all"] = $.add($.add("[", L0["all"]), " EUR]");
                L0["all"] = $.add($.add(L0["all"], " + "), L0["all1"]);
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "REDXXX")), "Lines")), "Add", [$.add("TRANSACTION AMOUNT   :", L0["all"])])));
                L0["all"] = "";
                L0["all"] = (await $.call(C, "FloatToStr", [$.add($.add((await $.call(C, "abs", [L0["amountsummazm"]])), (await $.call(C, "abs", [L0["amountsummusd"]]))), (await $.call(C, "abs", [L0["amountsummeur"]])))]));
                if ($.truthy($.eq((await $.call(C, "pos", [L0["syssim"], L0["all"]])), 0))) {
                  await $.stmt((await $.call(C, "Insert", [$.add(L0["syssim"], "00"), $.ref(async () => L0["all"], async ($t35) => { L0["all"] = $t35; }), $.add((await $.call(C, "length", [L0["all"]])), 1)])));
                }
                { const $t36 = 14;
                  L0["k"] = (await $.call(C, "length", [L0["all"]]));
                  let $t37 = true;
                  for (;;) {
                    if (!$t37) { L0["k"] = $.succ(L0["k"], 1); }
                    $t37 = false;
                    if (!($.ord(L0["k"]) <= $.ord($t36))) break;
                    L0["all"] = $.add(L0["all"], " ");
                    await $.tick();
                  }
                }
                if ($.truthy($.lt(($.add($.add(L0["amountsummazm"], L0["amountsummusd"]), L0["amountsummeur"])), 0))) {
                  L0["all"] = $.add(L0["all"], "  CREDIT");
                } else {
                  L0["all"] = $.add(L0["all"], "  DEBIT ");
                }
                L0["all"] = $.add($.add($.add($.add("[", L0["all"]), " "), (await $.mv((await $.idx(L0["client"], [L0["j"]])), "Acccurrency"))), "]");
                L0["all"] = L0["all"];
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "REDXXX")), "Lines")), "Add", [$.add("ACCOUNT AMOUNT       :", L0["all"])])));
                L0["all"] = "";
                L0["all"] = (await $.call(C, "FloatToStr", [$.add($.add((await $.call(C, "abs", [L0["feeamounsummazm"]])), (await $.call(C, "abs", [L0["feeamounsummusd"]]))), (await $.call(C, "abs", [L0["feeamounsummazm"]])))]));
                if ($.truthy($.eq((await $.call(C, "pos", [L0["syssim"], L0["all"]])), 0))) {
                  await $.stmt((await $.call(C, "Insert", [$.add(L0["syssim"], "00"), $.ref(async () => L0["all"], async ($t38) => { L0["all"] = $t38; }), $.add((await $.call(C, "length", [L0["all"]])), 1)])));
                }
                { const $t39 = 14;
                  L0["k"] = (await $.call(C, "length", [L0["all"]]));
                  let $t40 = true;
                  for (;;) {
                    if (!$t40) { L0["k"] = $.succ(L0["k"], 1); }
                    $t40 = false;
                    if (!($.ord(L0["k"]) <= $.ord($t39))) break;
                    L0["all"] = $.add(L0["all"], " ");
                    await $.tick();
                  }
                }
                if ($.truthy($.lt(($.add($.add(L0["feeamounsummazm"], L0["feeamounsummusd"]), L0["feeamounsummeur"])), 0))) {
                  L0["all"] = $.add(L0["all"], "  CREDIT");
                } else {
                  L0["all"] = $.add(L0["all"], "  DEBIT ");
                }
                L0["all"] = $.add($.add($.add($.add("[", L0["all"]), " "), (await $.mv((await $.idx(L0["client"], [L0["j"]])), "Feecurrency"))), "]");
                L0["all"] = L0["all"];
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "REDXXX")), "Lines")), "Add", [$.add("FEE AMOUNT           :", L0["all"])])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "REDXXX")), "Lines")), "Add", ["-----------------------------------------------------------------------------------"])));
                await $.tick();
              }
            }
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "RefwithSel")), "Down")), false))) {
          await $.mset((await $.v(C, "REDXXX")), "SelStart", (await $.mcall((await $.v(C, "REDXXX")), "FindText", ["Message count:", L0["selst"], (await $.call(C, "LENGTH", [(await $.mv((await $.v(C, "REDXXX")), "Text"))])), [(await $.v(C, "stMatchCase"))]])));
          await $.mset((await $.v(C, "REDXXX")), "SelLength", 18);
          await $.mset((await $.mv((await $.v(C, "REDXXX")), "SelAttributes")), "Color", (await $.v(C, "clBlue")));
          await $.mset((await $.mv((await $.v(C, "REDXXX")), "SelAttributes")), "Style", []);
          L0["selst"] = $.add((await $.mcall((await $.v(C, "REDXXX")), "FindText", ["Message count:", L0["selst"], (await $.call(C, "LENGTH", [(await $.mv((await $.v(C, "REDXXX")), "Text"))])), [(await $.v(C, "stMatchCase"))]])), 1);
          await $.mset((await $.v(C, "REDXXX")), "SelLength", (-(1)));
        }
        await $.mset((await $.v(C, "REDXXX")), "SelStart", (await $.mcall((await $.v(C, "REDXXX")), "FindText", ["FILE NAME", L0["selstf"], (await $.call(C, "LENGTH", [(await $.mv((await $.v(C, "REDXXX")), "Text"))])), [(await $.v(C, "stMatchCase"))]])));
        await $.mset((await $.v(C, "REDXXX")), "SelLength", 38);
        await $.mset((await $.mv((await $.v(C, "REDXXX")), "SelAttributes")), "Color", (await $.v(C, "clred")));
        L0["selstf"] = $.add((await $.mcall((await $.v(C, "REDXXX")), "FindText", ["FILE NAME", L0["selstf"], (await $.call(C, "LENGTH", [(await $.mv((await $.v(C, "REDXXX")), "Text"))])), [(await $.v(C, "stMatchCase"))]])), 1);
        await $.mset((await $.v(C, "REDXXX")), "SelLength", (-(1)));
        await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t41) => { L0["f"] = $t41; })])));
        await $.tick();
      }
    }
    await $.mset((await $.v(C, "REDXXX")), "SelStart", 0);
  } finally {
  }
  await $.stmt((await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "REDXXX")), "Handle")), (await $.v(C, "EM_LINESCROLL")), 0, $.mul(((-(1))), ($.sub((await $.mv((await $.mv((await $.v(C, "REDXXX")), "Lines")), "Count")), 1)))])));
  await $.mset((await $.v(C, "FileListBox1")), "Directory", L0["v_dir"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDfile", "isertbtnClick", async function isertbtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0, "k": 0, "h": 0, "z": 0, "rowcount": 0, "selst": 0, "selstf": 0, "lengthofta": 0, "msgcount": 0, "all": '', "all1": '', "stmessage": '', "currency": '', "syssim": '', "fileext": '', "test": 0, "transummusd": 0, "amountsummusd": 0, "feeamounsummusd": 0, "transummazm": 0, "amountsummazm": 0, "feeamounsummazm": 0, "transummeur": 0, "amountsummeur": 0, "feeamounsummeur": 0, "client": $.sarr(), "go": false, "f": null, "curr": null, "v_dir": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["delete_dfiles", []])));
  L0["v_dir"] = (await $.v(C, "GetCurrentDir"));
  try {
    if ($.truthy($.not((await $.call(C, "DirectoryExists", ["C:\\AZCARD\\IN"]))))) {
      await $.stmt((await $.call(C, "MkDir", ["C:\\AZCARD\\IN"])));
    }
    await $.mset((await $.v(C, "FileListBox1")), "Directory", "C:\\AZCARD\\IN");
    await $.mcall((await $.v(C, "FileListBox1")), "Update", []);
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "FileListBox1")), "Items")), "Count")), 0))) {
      return L0.result;
    }
    await $.mset((await $.v(C, "FileListBox1")), "Mask", "*.*");
    await $.mcall((await $.v(C, "FileListBox1")), "Update", []);
    L0["test"] = $.fdiv(122, 10);
    if ($.truthy($.gt((await $.call(C, "pos", [".", (await $.call(C, "floattostr", [L0["test"]]))])), 0))) {
      L0["syssim"] = ".";
    } else {
      if ($.truthy($.gt((await $.call(C, "pos", [",", (await $.call(C, "floattostr", [L0["test"]]))])), 0))) {
        L0["syssim"] = ",";
      }
    }
    { const $t42 = $.sub((await $.mv((await $.mv((await $.v(C, "FileListBox1")), "items")), "Count")), 1);
      L0["i"] = 0;
      let $t43 = true;
      for (;;) {
        if (!$t43) { L0["i"] = $.succ(L0["i"], 1); }
        $t43 = false;
        if (!($.ord(L0["i"]) <= $.ord($t42))) break;
        await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
        L0["msgcount"] = 0;
        if ($.truthy(($.ne((await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "FileListBox1")), "items")), [L0["i"]])), 0, 5])), $.add("D", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["bankid"])), "asstring"))))))) {
          continue;
        }
        if ($.truthy($.eq((await $.call(C, "CheckFileExt", [$.add((await $.mv((await $.v(C, "FileListBox1")), "Directory")), (await $.idx((await $.mv((await $.v(C, "FileListBox1")), "items")), [L0["i"]])))])), false))) {
          continue;
        }
        await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t44) => { L0["f"] = $t44; }), $.add("C:\\AZCARD\\IN\\", (await $.idx((await $.mv((await $.v(C, "FileListBox1")), "Items")), [L0["i"]])))])));
        await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t45) => { L0["f"] = $t45; })])));
        L0["rowcount"] = 0;
        while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
          L0["rowcount"] = $.add(L0["rowcount"], 1);
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t46) => { L0["f"] = $t46; }), $.ref(async () => L0["stmessage"], async ($t47) => { L0["stmessage"] = $t47; })])));
          L0["msgcount"] = $.add(L0["msgcount"], 1);
          await $.tick();
        }
        L0["stmessage"] = "";
        await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t48) => { L0["f"] = $t48; })])));
        if ($.truthy($.eq((await $.mv((await $.v(C, "RefwithSel")), "Down")), false))) {
          { const $t49 = $.sub(L0["rowcount"], 1);
            L0["j"] = 1;
            let $t50 = true;
            for (;;) {
              if (!$t50) { L0["j"] = $.succ(L0["j"], 1); }
              $t50 = false;
              if (!($.ord(L0["j"]) <= $.ord($t49))) break;
              await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
              await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t51) => { L0["f"] = $t51; }), $.ref(async () => L0["stmessage"], async ($t52) => { L0["stmessage"] = $t52; })])));
              if ($.truthy($.eq(L0["j"], 1))) {
                L0["currency"] = (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 54, 3]))]));
                continue;
              }
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["insert_dfiles", [(await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 1, 2]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 3, 6]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 9, 10]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 19, 48]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 67, 48]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 115, 32]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 147, 16]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 163, 24]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 187, 32]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 219, 48]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 267, 15]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 282, 1]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 283, 5]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 288, 32]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 320, 32]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 352, 48]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 400, 100]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 500, 32]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 532, 8]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 540, 6]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 546, 12]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 558, 32]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 590, 32]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 622, 78]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 700, 1]))])), L0["currency"], (await $.idx((await $.mv((await $.v(C, "FileListBox1")), "items")), [L0["i"]])), 1]])));
              await $.tick();
            }
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "RefwithSel")), "Down")), false))) {
        }
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["darxiv", [(await $.idx((await $.mv((await $.v(C, "FileListBox1")), "Items")), [L0["i"]]))]])));
        await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t53) => { L0["f"] = $t53; })])));
        await $.tick();
      }
    }
  } finally {
  }
  await $.mset((await $.v(C, "FileListBox1")), "Directory", L0["v_dir"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Open", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDfile", "DBGrid1DrawColumnCell", async function DBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t54 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t54], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t55 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t54], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t55, 1)) {
          await $.wset([$t54], "ImageIndex", 25, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t55, 2)) {
          await $.wset([$t54], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t55, 3)) {
          await $.wset([$t54], "ImageIndex", 26, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t55, 4)) {
          await $.wset([$t54], "ImageIndex", 13, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t54], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 0)), async () => ($.ne((await $.wv([$t54], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t54], "ImageList1", C, false)), "Draw", [(await $.wv([$t54], "Canvas", C, false)), (await $.mv((await $.wv([$t54], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t54], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t54], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t54], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t54], "DefaultDrawColumnCell", [(await $.wv([$t54], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t54], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t54], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t54], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TDfile", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
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
    const $t56 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t56], "SortPosition", (await $.mcall((await $.wv([$t56], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t56], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t56], "Refresh", [], C));
    } finally {
      { const $t57 = await $.iset((await $.wv([$t56], "SQL", C, false)), [(await $.wv([$t56], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t56], "EmptyStr", C, false))); if ($t57 !== undefined) { await $.wset([$t56], "SQL", $t57, C); } }
      await $.mset((await $.wv([$t56], "Screen", C, false)), "Cursor", (await $.wv([$t56], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TDfile", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport2")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport2")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport2")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "Dfile")), "DFILES", true])));
  await $.mcall((await $.v(C, "CMExcelExport2")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDfile", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Əməliyyatlar təsdiq edilsin?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0])), (await $.v(C, "mryes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["transaction_d", []])));
  } else {
    return L0.result;
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Open", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDfile", "DBGrid2TitleClick", async function DBGrid2TitleClick(Self, p0) {
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
    const $t58 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t58], "SortPosition", (await $.mcall((await $.wv([$t58], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t58], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t58], "Refresh", [], C));
    } finally {
      { const $t59 = await $.iset((await $.wv([$t58], "SQL", C, false)), [(await $.wv([$t58], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t58], "EmptyStr", C, false))); if ($t59 !== undefined) { await $.wset([$t58], "SQL", $t59, C); } }
      await $.mset((await $.wv([$t58], "Screen", C, false)), "Cursor", (await $.wv([$t58], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TDfile", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDfile", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDfile", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDfile", "selectall1Click", async function selectall1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t60 = (await $.v(C, "dbgrid1"));
    const $t61 = (await $.wv([$t60], "SelectedRows", C, false));
    const $t62 = (await $.mv((await $.wv([$t60, $t61], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t60, $t61, $t62], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t60, $t61, $t62], "First", [], C));
      while ($.truthy($.not((await $.wv([$t60, $t61, $t62], "Eof", C, false))))) {
        await $.wset([$t60, $t61, $t62], "CurrentRowSelected", (await $.wv([$t60, $t61, $t62], "True", C, false)), C);
        await $.stmt($.wcall([$t60, $t61, $t62], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t60, $t61, $t62], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
