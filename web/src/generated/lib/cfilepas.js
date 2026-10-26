// Generated from cfilepas.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("cfilepas", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "ToolWin", "ExtCtrls", "ImgList", "StdCtrls", "FileCtrl", "Buttons", "Grids", "DBGrids", "CMExcelExport", "OracleData", "Menus", "Unit18", "balans", "CARDS_TLB", "customers", "MAINFORMImpl1", "newcard", "payment", "SBTranslateProc", "sboapiDataModuleImpl", "cfile_addi"]);
  const C = [U];
  $.defRecord("tclient", {"cardnumber": () => '', "rbsnumber": () => '', "terminal": () => '', "trantime": () => '', "trandate": () => '', "tranamount": () => 0, "acountamount": () => 0, "feeamount": () => 0, "trancurrency": () => '', "tranbalanssign": () => '', "acccurrency": () => '', "accbalanssign": () => '', "feecurrency": () => '', "feebalanssign": () => ''});
  U.defClass("Tcfile", "TForm", {"imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "isertbtn": {"name": "isertbtn", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "ctinboxrich": {"name": "CTInboxRich", "type": "TRichEdit"}, "filelistbox1": {"name": "FileListBox1", "type": "TFileListBox"}, "refwithsel": {"name": "RefwithSel", "type": "TSpeedButton"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "animate1": {"name": "Animate1", "type": "TAnimate"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "selectall1": {"name": "selectall1", "type": "TMenuItem"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}}, {});
  U.init(async () => {
    U.var_("cfile", null, "Tcfile");
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
  U.func("DirectoryExists", async function DirectoryExists(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), result: false, "code": 0};
  await $.fixArgs(L0, ["name"]);
  L0["code"] = (await $.call(C, "GetFileAttributes", [(await $.call(C, "PChar", [L0["name"]]))]));
  L0["result"] = (await $.and_(($.ne(L0["code"], (-(1)))), async () => ($.ne((await $.and_((await $.v(C, "FILE_ATTRIBUTE_DIRECTORY")), async () => L0["code"])), 0))));
  return L0.result;
}, {"params": ["Name"], "kind": "function", "ptypes": ["String"]});
  U.method("Tcfile", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0, "k": 0, "h": 0, "z": 0, "rowcount": 0, "selst": 0, "selstf": 0, "lengthofta": 0, "msgcount": 0, "all": '', "all1": '', "stmessage": '', "currency": '', "syssim": '', "fileext": '', "test": 0, "transummusd": 0, "amountsummusd": 0, "feeamounsummusd": 0, "transummazm": 0, "amountsummazm": 0, "feeamounsummazm": 0, "transummeur": 0, "amountsummeur": 0, "feeamounsummeur": 0, "client": $.sarr(), "go": false, "f": null, "v_dir": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["v_dir"] = (await $.v(C, "GetCurrentDir"));
  try {
    await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Clear", []);
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
        if ($.truthy((await $.and_(($.ne((await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "FileListBox1")), "items")), [L0["i"]])), 0, 1])), "C")), async () => (($.ne((await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "FileListBox1")), "items")), [L0["i"]])), 0, 1])), "c"))))))) {
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
          if ($.truthy($.ne((await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 19, 3]))])), "BAL"))) {
            L0["msgcount"] = $.add(L0["msgcount"], 1);
          }
          await $.tick();
        }
        L0["stmessage"] = "";
        await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t10) => { L0["f"] = $t10; })])));
        if ($.truthy($.eq((await $.mv((await $.v(C, "RefwithSel")), "Down")), false))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", [$.add($.add($.add($.add("FILE NAME            :< ", (await $.idx((await $.mv((await $.v(C, "FileListBox1")), "items")), [L0["i"]]))), " >   "), "Message count: "), (await $.call(C, "inttostr", [$.sub(L0["msgcount"], 2)])))])));
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
                continue;
              }
              if ($.truthy($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 19, 3]))])), "BAL"))) {
                continue;
              }
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", [$.add("CONTRACT NUMBER      :", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 71, 24]))])))])));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", [$.add("RBS NUMBER           :", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 95, 32]))])))])));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", [$.add("TRANSACTION DETAILS  :", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 374, 30]))])))])));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", [$.add("TERMINAL             :", (await $.call(C, "copy", [L0["stmessage"], 221, 24])))])));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", [$.add("TRANSACTION DATE     :", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 245, 8]))])))])));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", [$.add("TRANSACTION TIME     :", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 253, 6]))])))])));
              L0["all"] = "";
              L0["all"] = (await $.call(C, "FloatToStr", [(await $.call(C, "StrToFloat", [(await $.call(C, "copy", [L0["stmessage"], 269, 15]))]))]));
              await $.stmt((await $.call(C, "Insert", [L0["syssim"], $.ref(async () => L0["all"], async ($t15) => { L0["all"] = $t15; }), $.sub((await $.call(C, "length", [L0["all"]])), 1)])));
              { const $t16 = 14;
                L0["k"] = (await $.call(C, "length", [L0["all"]]));
                let $t17 = true;
                for (;;) {
                  if (!$t17) { L0["k"] = $.succ(L0["k"], 1); }
                  $t17 = false;
                  if (!($.ord(L0["k"]) <= $.ord($t16))) break;
                  L0["all"] = $.add(L0["all"], " ");
                  await $.tick();
                }
              }
              if ($.truthy($.eq((await $.call(C, "copy", [L0["stmessage"], 259, 1])), "C"))) {
                L0["all"] = $.add(L0["all"], "   CREDIT");
              } else {
                if ($.truthy($.eq((await $.call(C, "copy", [L0["stmessage"], 259, 1])), "D"))) {
                  L0["all"] = $.add(L0["all"], "   DEBET ");
                } else {
                  if ($.truthy($.eq((await $.call(C, "copy", [L0["stmessage"], 259, 1])), " "))) {
                    L0["all"] = $.add(L0["all"], "         ");
                  }
                }
              }
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
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", [$.add($.add($.add("TRANSACTION AMOUNT   :", L0["all"]), " "), L0["currency"])])));
              L0["all"] = "";
              L0["all"] = (await $.call(C, "FloatToStr", [(await $.call(C, "StrToFloat", [(await $.call(C, "copy", [L0["stmessage"], 299, 15]))]))]));
              await $.stmt((await $.call(C, "Insert", [L0["syssim"], $.ref(async () => L0["all"], async ($t18) => { L0["all"] = $t18; }), $.sub((await $.call(C, "length", [L0["all"]])), 1)])));
              { const $t19 = 14;
                L0["k"] = (await $.call(C, "length", [L0["all"]]));
                let $t20 = true;
                for (;;) {
                  if (!$t20) { L0["k"] = $.succ(L0["k"], 1); }
                  $t20 = false;
                  if (!($.ord(L0["k"]) <= $.ord($t19))) break;
                  L0["all"] = $.add(L0["all"], " ");
                  await $.tick();
                }
              }
              if ($.truthy($.eq((await $.call(C, "copy", [L0["stmessage"], 314, 1])), "C"))) {
                L0["all"] = $.add(L0["all"], "   CREDIT");
              } else {
                if ($.truthy($.eq((await $.call(C, "copy", [L0["stmessage"], 314, 1])), "D"))) {
                  L0["all"] = $.add(L0["all"], "   DEBET ");
                } else {
                  if ($.truthy($.eq((await $.call(C, "copy", [L0["stmessage"], 314, 1])), " "))) {
                    L0["all"] = $.add(L0["all"], "         ");
                  }
                }
              }
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
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", [$.add($.add($.add("ACCOUNT AMOUNT       :", L0["all"]), " "), L0["currency"])])));
              L0["all"] = "";
              L0["all"] = (await $.call(C, "FloatToStr", [$.fdiv((await $.call(C, "StrToFloat", [(await $.call(C, "copy", [L0["stmessage"], 315, 15]))])), 100)]));
              if ($.truthy($.eq((await $.call(C, "pos", [L0["syssim"], L0["all"]])), 0))) {
                await $.stmt((await $.call(C, "Insert", [$.add(L0["syssim"], "00"), $.ref(async () => L0["all"], async ($t21) => { L0["all"] = $t21; }), $.add((await $.call(C, "length", [L0["all"]])), 1)])));
              }
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
              { const $t22 = 23;
                L0["k"] = (await $.call(C, "length", [L0["all"]]));
                let $t23 = true;
                for (;;) {
                  if (!$t23) { L0["k"] = $.succ(L0["k"], 1); }
                  $t23 = false;
                  if (!($.ord(L0["k"]) <= $.ord($t22))) break;
                  L0["all"] = $.add(L0["all"], " ");
                  await $.tick();
                }
              }
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", [$.add($.add($.add("FEE AMOUNT           :", L0["all"]), " "), L0["currency"])])));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", ["---------------------------------------------------------------------------------"])));
              await $.tick();
            }
          }
        } else {
          if ($.truthy((await $.mv((await $.v(C, "RefwithSel")), "Down")))) {
            await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", [$.add($.add("FILE NAME            :< ", (await $.idx((await $.mv((await $.v(C, "FileListBox1")), "items")), [L0["i"]]))), " >")])));
            { const $t24 = $.sub(L0["rowcount"], 1);
              L0["j"] = 1;
              let $t25 = true;
              for (;;) {
                if (!$t25) { L0["j"] = $.succ(L0["j"], 1); }
                $t25 = false;
                if (!($.ord(L0["j"]) <= $.ord($t24))) break;
                await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t26) => { L0["f"] = $t26; }), $.ref(async () => L0["stmessage"], async ($t27) => { L0["stmessage"] = $t27; })])));
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
            await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t28) => { L0["f"] = $t28; })])));
            { const $t29 = $.sub(L0["rowcount"], 1);
              L0["j"] = 2;
              let $t30 = true;
              for (;;) {
                if (!$t30) { L0["j"] = $.succ(L0["j"], 1); }
                $t30 = false;
                if (!($.ord(L0["j"]) <= $.ord($t29))) break;
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
                { const $t31 = $.sub(L0["j"], 1);
                  L0["z"] = 2;
                  let $t32 = true;
                  for (;;) {
                    if (!$t32) { L0["z"] = $.succ(L0["z"], 1); }
                    $t32 = false;
                    if (!($.ord(L0["z"]) <= $.ord($t31))) break;
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
                { const $t33 = $.sub(L0["rowcount"], 1);
                  L0["h"] = $.add(L0["j"], 1);
                  let $t34 = true;
                  for (;;) {
                    if (!$t34) { L0["h"] = $.succ(L0["h"], 1); }
                    $t34 = false;
                    if (!($.ord(L0["h"]) <= $.ord($t33))) break;
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
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", [$.add("CONTRACT NUMBER      :", (await $.mv((await $.idx(L0["client"], [L0["j"]])), "cardnumber")))])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", [$.add("RBS NUMBER           :", (await $.mv((await $.idx(L0["client"], [L0["j"]])), "RBSnumber")))])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", [$.add("TERMINAL             :", (await $.mv((await $.idx(L0["client"], [L0["j"]])), "terminal")))])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", [$.add("TRANSACTION DATE     :", (await $.mv((await $.idx(L0["client"], [L0["j"]])), "trandate")))])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", [$.add("TRANSACTION TIME     :", (await $.mv((await $.idx(L0["client"], [L0["j"]])), "trantime")))])));
                L0["all1"] = "";
                L0["all1"] = (await $.call(C, "FloatToStr", [(await $.call(C, "abs", [L0["transummusd"]]))]));
                if ($.truthy($.eq((await $.call(C, "pos", [L0["syssim"], L0["all1"]])), 0))) {
                  await $.stmt((await $.call(C, "Insert", [$.add(L0["syssim"], "00"), $.ref(async () => L0["all1"], async ($t35) => { L0["all1"] = $t35; }), $.add((await $.call(C, "length", [L0["all1"]])), 1)])));
                }
                { const $t36 = 14;
                  L0["k"] = (await $.call(C, "length", [L0["all1"]]));
                  let $t37 = true;
                  for (;;) {
                    if (!$t37) { L0["k"] = $.succ(L0["k"], 1); }
                    $t37 = false;
                    if (!($.ord(L0["k"]) <= $.ord($t36))) break;
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
                if ($.truthy($.lt(L0["transummazm"], 0))) {
                  L0["all"] = $.add(L0["all"], "  CREDIT");
                } else {
                  L0["all"] = $.add(L0["all"], "  DEBIT ");
                }
                L0["all"] = $.add($.add("[", L0["all"]), " AZN]");
                L0["all"] = "";
                L0["all"] = (await $.call(C, "FloatToStr", [(await $.call(C, "abs", [L0["transummeur"]]))]));
                if ($.truthy($.eq((await $.call(C, "pos", [L0["syssim"], L0["all"]])), 0))) {
                  await $.stmt((await $.call(C, "Insert", [$.add(L0["syssim"], "00"), $.ref(async () => L0["all"], async ($t41) => { L0["all"] = $t41; }), $.add((await $.call(C, "length", [L0["all"]])), 1)])));
                }
                { const $t42 = 14;
                  L0["k"] = (await $.call(C, "length", [L0["all"]]));
                  let $t43 = true;
                  for (;;) {
                    if (!$t43) { L0["k"] = $.succ(L0["k"], 1); }
                    $t43 = false;
                    if (!($.ord(L0["k"]) <= $.ord($t42))) break;
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
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", [$.add("TRANSACTION AMOUNT   :", L0["all"])])));
                L0["all"] = "";
                L0["all"] = (await $.call(C, "FloatToStr", [$.add($.add((await $.call(C, "abs", [L0["amountsummazm"]])), (await $.call(C, "abs", [L0["amountsummusd"]]))), (await $.call(C, "abs", [L0["amountsummeur"]])))]));
                if ($.truthy($.eq((await $.call(C, "pos", [L0["syssim"], L0["all"]])), 0))) {
                  await $.stmt((await $.call(C, "Insert", [$.add(L0["syssim"], "00"), $.ref(async () => L0["all"], async ($t44) => { L0["all"] = $t44; }), $.add((await $.call(C, "length", [L0["all"]])), 1)])));
                }
                { const $t45 = 14;
                  L0["k"] = (await $.call(C, "length", [L0["all"]]));
                  let $t46 = true;
                  for (;;) {
                    if (!$t46) { L0["k"] = $.succ(L0["k"], 1); }
                    $t46 = false;
                    if (!($.ord(L0["k"]) <= $.ord($t45))) break;
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
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", [$.add("ACCOUNT AMOUNT       :", L0["all"])])));
                L0["all"] = "";
                L0["all"] = (await $.call(C, "FloatToStr", [$.add($.add((await $.call(C, "abs", [L0["feeamounsummazm"]])), (await $.call(C, "abs", [L0["feeamounsummusd"]]))), (await $.call(C, "abs", [L0["feeamounsummazm"]])))]));
                if ($.truthy($.eq((await $.call(C, "pos", [L0["syssim"], L0["all"]])), 0))) {
                  await $.stmt((await $.call(C, "Insert", [$.add(L0["syssim"], "00"), $.ref(async () => L0["all"], async ($t47) => { L0["all"] = $t47; }), $.add((await $.call(C, "length", [L0["all"]])), 1)])));
                }
                { const $t48 = 14;
                  L0["k"] = (await $.call(C, "length", [L0["all"]]));
                  let $t49 = true;
                  for (;;) {
                    if (!$t49) { L0["k"] = $.succ(L0["k"], 1); }
                    $t49 = false;
                    if (!($.ord(L0["k"]) <= $.ord($t48))) break;
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
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", [$.add("FEE AMOUNT           :", L0["all"])])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", ["-----------------------------------------------------------------------------------"])));
                await $.tick();
              }
            }
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "RefwithSel")), "Down")), false))) {
          await $.mset((await $.v(C, "CTInboxRich")), "SelStart", (await $.mcall((await $.v(C, "CTInboxRich")), "FindText", ["Message count:", L0["selst"], (await $.call(C, "LENGTH", [(await $.mv((await $.v(C, "CTInboxRich")), "Text"))])), [(await $.v(C, "stMatchCase"))]])));
          await $.mset((await $.v(C, "CTInboxRich")), "SelLength", 18);
          await $.mset((await $.mv((await $.v(C, "CTInboxRich")), "SelAttributes")), "Color", (await $.v(C, "clBlue")));
          await $.mset((await $.mv((await $.v(C, "CTInboxRich")), "SelAttributes")), "Style", []);
          L0["selst"] = $.add((await $.mcall((await $.v(C, "CTInboxRich")), "FindText", ["Message count:", L0["selst"], (await $.call(C, "LENGTH", [(await $.mv((await $.v(C, "CTInboxRich")), "Text"))])), [(await $.v(C, "stMatchCase"))]])), 1);
          await $.mset((await $.v(C, "CTInboxRich")), "SelLength", (-(1)));
        }
        await $.mset((await $.v(C, "CTInboxRich")), "SelStart", (await $.mcall((await $.v(C, "CTInboxRich")), "FindText", ["FILE NAME", L0["selstf"], (await $.call(C, "LENGTH", [(await $.mv((await $.v(C, "CTInboxRich")), "Text"))])), [(await $.v(C, "stMatchCase"))]])));
        await $.mset((await $.v(C, "CTInboxRich")), "SelLength", 38);
        await $.mset((await $.mv((await $.v(C, "CTInboxRich")), "SelAttributes")), "Color", (await $.v(C, "clred")));
        L0["selstf"] = $.add((await $.mcall((await $.v(C, "CTInboxRich")), "FindText", ["FILE NAME", L0["selstf"], (await $.call(C, "LENGTH", [(await $.mv((await $.v(C, "CTInboxRich")), "Text"))])), [(await $.v(C, "stMatchCase"))]])), 1);
        await $.mset((await $.v(C, "CTInboxRich")), "SelLength", (-(1)));
        await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t50) => { L0["f"] = $t50; })])));
        await $.tick();
      }
    }
    await $.mset((await $.v(C, "CTInboxRich")), "SelStart", 0);
  } finally {
  }
  await $.stmt((await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "CTInboxRich")), "Handle")), (await $.v(C, "EM_LINESCROLL")), 0, $.mul(((-(1))), ($.sub((await $.mv((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Count")), 1)))])));
  await $.mset((await $.v(C, "FileListBox1")), "Directory", L0["v_dir"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcfile", "isertbtnClick", async function isertbtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0, "rowcount": 0, "stmessage": '', "all": '', "names": '', "f": null, "v_dir": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["delete_trancaction_c", []])));
  L0["v_dir"] = (await $.v(C, "GetCurrentDir"));
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
  await $.mset((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "Active", false);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "SQL")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "SQL")), "Add", ["select card_messages_c.rowid,card_messages_c.* from card_messages_c"])));
  await $.mset((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "Active", true);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Count")), 0))) {
    return L0.result;
  }
  { const $t51 = $.sub((await $.mv((await $.mv((await $.v(C, "FileListBox1")), "items")), "Count")), 1);
    L0["i"] = 0;
    let $t52 = true;
    for (;;) {
      if (!$t52) { L0["i"] = $.succ(L0["i"], 1); }
      $t52 = false;
      if (!($.ord(L0["i"]) <= $.ord($t51))) break;
      await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
      if ($.truthy((await $.and_(($.ne((await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "FileListBox1")), "items")), [L0["i"]])), 0, 1])), "C")), async () => (($.ne((await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "FileListBox1")), "items")), [L0["i"]])), 0, 1])), "c"))))))) {
        continue;
      }
      await $.mset((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI1")), "Active", false);
      await $.mcall((await $.mv((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI1")), "SQL")), "Clear", []);
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI1")), "SQL")), "Add", [$.add($.add("select * from card_messages_c where file_name = '", (await $.idx((await $.mv((await $.v(C, "FileListBox1")), "items")), [L0["i"]]))), "'")])));
      await $.mset((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI1")), "Active", true);
      if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI1")), "RecordCount")), 0))) {
        { const $t53 = (await $.call(C, "MessageDlg", [$.add($.add("The file \"", (await $.idx((await $.mv((await $.v(C, "FileListBox1")), "items")), [L0["i"]]))), "\" already exits, do you want replace it!? "), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0]));
          if ($.eq($t53, (await $.v(C, "mryes")))) {
            await $.mset((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI1")), "Active", false);
            await $.mcall((await $.mv((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI1")), "SQL")), "Clear", []);
            await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI1")), "SQL")), "Add", [$.add($.add("delete from card_messages_c where file_name = '", (await $.idx((await $.mv((await $.v(C, "FileListBox1")), "items")), [L0["i"]]))), "'")])));
            await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI1")), "ExecSQL", []);
          }
          else if ($.eq($t53, (await $.v(C, "mrno")))) {
            continue;
          }
        }
      }
      await $.mset((await $.v(C, "Animate1")), "Visible", true);
      await $.mset((await $.v(C, "Animate1")), "Active", true);
      await $.stmt((await $.mcall((await $.v(C, "Animate1")), "Play", [0, 0, 1])));
      await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t54) => { L0["f"] = $t54; }), $.add("C:\\AZCARD\\IN\\", (await $.idx((await $.mv((await $.v(C, "FileListBox1")), "Items")), [L0["i"]])))])));
      await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t55) => { L0["f"] = $t55; })])));
      L0["rowcount"] = 0;
      while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
        L0["rowcount"] = $.add(L0["rowcount"], 1);
        await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t56) => { L0["f"] = $t56; })])));
        await $.tick();
      }
      L0["stmessage"] = "";
      await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t57) => { L0["f"] = $t57; })])));
      { const $t58 = $.sub(L0["rowcount"], 1);
        L0["j"] = 1;
        let $t59 = true;
        for (;;) {
          if (!$t59) { L0["j"] = $.succ(L0["j"], 1); }
          $t59 = false;
          if (!($.ord(L0["j"]) <= $.ord($t58))) break;
          await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t60) => { L0["f"] = $t60; }), $.ref(async () => L0["stmessage"], async ($t61) => { L0["stmessage"] = $t61; })])));
          if ($.truthy($.eq(L0["j"], 1))) {
            continue;
          }
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 19, 3]))])), "BAL"))) {
            continue;
          }
          await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "Append", []);
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["File_name"])), "AsString", (await $.idx((await $.mv((await $.v(C, "FileListBox1")), "Items")), [L0["i"]])));
          L0["names"] = (await $.idx((await $.mv((await $.v(C, "FileListBox1")), "Items")), [L0["i"]]));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["cardNumber"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 71, 24]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["rbsNumber"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 95, 32]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["send"])), "AsInteger", 0);
          L0["all"] = "";
          L0["all"] = (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 245, 8]))]));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["tranDate"])), "AsDateTime", (await $.call(C, "EncodeDate", [(await $.call(C, "strtoint", [(await $.call(C, "copy", [L0["all"], 0, 4]))])), (await $.call(C, "strtoint", [(await $.call(C, "copy", [L0["all"], 5, 2]))])), (await $.call(C, "strtoint", [(await $.call(C, "copy", [L0["all"], 7, 2]))]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["tranTime"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 253, 6]))])));
          L0["all"] = "";
          L0["all"] = (await $.call(C, "FloatToStr", [(await $.call(C, "StrToFloat", [(await $.call(C, "copy", [L0["stmessage"], 269, 15]))]))]));
          await $.stmt((await $.call(C, "Insert", [(await $.v(C, "DecimalSeparator")), $.ref(async () => L0["all"], async ($t62) => { L0["all"] = $t62; }), $.sub((await $.call(C, "length", [L0["all"]])), 1)])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["tranAmount"])), "AsFloat", (await $.call(C, "StrToFloat", [L0["all"]])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["currency"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 260, 3]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["balan_sign"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 259, 1]))])));
          L0["all"] = "";
          L0["all"] = (await $.call(C, "FloatToStr", [$.fdiv((await $.call(C, "StrToFloat", [(await $.call(C, "copy", [L0["stmessage"], 315, 15]))])), 100)]));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["feeAmount"])), "AsFloat", (await $.call(C, "strtofloat", [L0["all"]])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["fee_cur"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 266, 3]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["tran_num"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 9, 10]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["reg_num"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 19, 30]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["tran_type"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 49, 8]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["contract_t"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 67, 4]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["org_num"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 127, 24]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["cont_en12"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 161, 4]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["cont_en13"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 165, 24]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["org_con"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 221, 24]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["tran_dir"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 259, 1]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["tran_cur"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 260, 3]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["sett_cur"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 263, 3]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["acc_cur"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 266, 3]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["sett_am"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 284, 15]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["acc_amount"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 299, 15]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["fee_dir"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 314, 1]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["acc_type"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 330, 3]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["expry_date"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 336, 4]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["merch_id"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 340, 15]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["trancoutry"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 355, 3]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["tran_city"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 358, 16]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["tran_detal"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 374, 30]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["value_date"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 404, 8]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["sett_date"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 443, 8]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["merch_code"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 451, 4]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["rec_cur"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 479, 3]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["rec_amount"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 482, 15]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["ROWNUMS"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 3, 6]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["RESERVED1"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 57, 10]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["RESERVED2"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 151, 10]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["RESERVED3"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 189, 32]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["RESERVED4"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 333, 3]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["REGISTR_NUMBER"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 412, 10]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["AVTORIZASION_NUMBER"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 422, 6]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["AVTORIZASION_AMOUNT"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 428, 15]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["CONTRA_ENTRY"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 455, 1]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["REFERENCE_NUMBER"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 456, 23]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["ISUED_REFERENCE_NUMBER"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 497, 10]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["RETRIVAL_REFERENC_NUMBER"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 507, 12]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["TRANSACTION_CONDITION"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 519, 4]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["CUSTOM_FEE_DIRECTION"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 523, 1]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["CUSTOM_FEE_AMOUNT"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 524, 15]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["GLDATE"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 539, 8]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["DEVICE_FINANCIAL_NUMBER"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 547, 10]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["RSERVED_5_1"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 557, 1]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["RSERVED_5_2"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 558, 18]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["RSERVED_5_3"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 576, 68]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["RSERVED_5_3"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 644, 4]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "UMUMI")), "FieldByName", ["STATUS"])), "AsInteger", 1);
          await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "Post", []);
          await $.tick();
        }
      }
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["carxiv", [(await $.idx((await $.mv((await $.v(C, "FileListBox1")), "Items")), [L0["i"]]))]])));
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t63) => { L0["f"] = $t63; })])));
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "Animate1")), "active", false);
  await $.mset((await $.v(C, "Animate1")), "Visible", false);
  await $.mcall((await $.v(C, "Animate1")), "Stop", []);
  await $.stmt((await $.call(C, "MessageDlg", ["All messages are sent in base!", (await $.v(C, "mtInformation")), [(await $.v(C, "mbOK"))], 0])));
  await $.mset((await $.v(C, "FileListBox1")), "Directory", L0["v_dir"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "messages")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "messages")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "messages2")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "messages2")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcfile", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "excel": null, "cell": 0, "row": 0, "l": 0, "m": 0, "i": 0, "j": 0, "ids": 0, "formats": '', "debet": '', "kredit": '', "summa": '', "destination": '', "vbic": '', "output": null, "filename": '', "swmessage": '', "dir": '', "edit_ref": '', "beginmessage": '', "endmesage": '', "valu": '', "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  if ($.truthy((await $.mv((await $.v(C, "DBGrid1")), "CanFocus")))) {
    await $.mcall((await $.v(C, "DBGrid1")), "SetFocus", []);
  }
  {
    const $t64 = (await $.v(C, "DBGrid1"));
    const $t65 = (await $.wv([$t64], "SelectedRows", C, false));
    const $t66 = (await $.mv((await $.wv([$t64, $t65], "DataSource", C, false)), "DataSet"));
    const $t67 = (await $.wv([$t64, $t65, $t66], "DataMod_CARDS", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t64, $t65, $t66, $t67], "Count", C, false)), 0))) {
        await $.wset([$t64, $t65, $t66, $t67], "CurrentRowSelected", (await $.wv([$t64, $t65, $t66, $t67], "True", C, false)), C);
      }
      { const $t68 = $.sub((await $.wv([$t64, $t65, $t66, $t67], "Count", C, false)), 1);
        await $.wset([$t64, $t65, $t66, $t67], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t69 = true;
        for (;;) {
          if (!$t69) { await $.wset([$t64, $t65, $t66, $t67], "Index", $.succ((await $.wv([$t64, $t65, $t66, $t67], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t69 = false;
          if (!($.ord((await $.wv([$t64, $t65, $t66, $t67], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t68))) break;
          await $.stmt((await $.wcall([$t64, $t65, $t66, $t67], "GotoBookmark", [(await $.wcall([$t64, $t65, $t66, $t67], "Pointer", [(await $.idx((await $.wv([$t64, $t65, $t66, $t67], "Items", C, false)), [(await $.wv([$t64, $t65, $t66, $t67], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t64, $t65, $t66, $t67], "TransactionID", (await $.mv((await $.wcall([$t64, $t65, $t66, $t67], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t64, $t65, $t66, $t67], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t70 = (await $.wcall([$t64, $t65, $t66, $t67], "MessageDlg", [(await $.wcall([$t64, $t65, $t66, $t67], "Format", ["Əmaliyyat təsdiq edilsin? №", [(await $.wv([$t64, $t65, $t66, $t67], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)), (await $.wv([$t64, $t65, $t66, $t67], "mtConfirmation", C, false)), [(await $.wv([$t64, $t65, $t66, $t67], "mbYes", C, false)), (await $.wv([$t64, $t65, $t66, $t67], "mbNo", C, false)), (await $.wv([$t64, $t65, $t66, $t67], "mbCancel", C, false)), (await $.wv([$t64, $t65, $t66, $t67], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t70, (await $.wv([$t64, $t65, $t66, $t67], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t70, (await $.wv([$t64, $t65, $t66, $t67], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t70, (await $.wv([$t64, $t65, $t66, $t67], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t64, $t65, $t66, $t67], "MessageDlg", [(await $.wcall([$t64, $t65, $t66, $t67], "Format", ["%d  sayda əməliyyat təsdiq edildi?", [$.sub((await $.wv([$t64, $t65, $t66, $t67], "Count", C, false)), (await $.wv([$t64, $t65, $t66, $t67], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t64, $t65, $t66, $t67], "mtConfirmation", C, false)), [(await $.wv([$t64, $t65, $t66, $t67], "mbYes", C, false)), (await $.wv([$t64, $t65, $t66, $t67], "mbCancel", C, false))], 0], C)), (await $.wv([$t64, $t65, $t66, $t67], "mrYes", C, false))))) {
                  await $.wset([$t64, $t65, $t66, $t67], "WaitNextConfirm", (await $.wv([$t64, $t65, $t66, $t67], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t64, $t65, $t66, $t67], "Application", C, false)), "ProcessMessages", []);
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t64, $t65, $t66, $t67], "DataMod_CARDS", C, false)), "mainpacket")), "CallProcedure", ["transaction_c", [(await $.wv([$t64, $t65, $t66, $t67], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]])));
          await $.wset([$t64, $t65, $t66, $t67], "WillRefresh", (await $.wv([$t64, $t65, $t66, $t67], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.tick();
        }
      }
    } finally {
      if ($.truthy((await $.wv([$t64, $t65, $t66, $t67], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.mcall((await $.mv((await $.mv((await $.wv([$t64, $t65, $t66, $t67], "DBGrid1", C, false)), "DataSource")), "DataSet")), "Refresh", []);
        await $.mcall((await $.mv((await $.mv((await $.wv([$t64, $t65, $t66, $t67], "DBGrid2", C, false)), "DataSource")), "DataSet")), "Refresh", []);
        await $.stmt((await $.wcall([$t64, $t65, $t66, $t67], "ShowMessage", ["Əməliyyatlar günün sənədlərinə göndərildi!"], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcfile", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Additional_cfile", (await $.mcall((await $.v(C, "TAdditional_cfile")), "Create", [Self])));
  await $.mcall((await $.v(C, "Additional_cfile")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcfile", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "messages")), "CFILES", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcfile", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
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
    const $t71 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t71], "SortPosition", (await $.mcall((await $.wv([$t71], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t71], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t71], "Refresh", [], C));
    } finally {
      { const $t72 = await $.iset((await $.wv([$t71], "SQL", C, false)), [(await $.wv([$t71], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t71], "EmptyStr", C, false))); if ($t72 !== undefined) { await $.wset([$t71], "SQL", $t72, C); } }
      await $.mset((await $.wv([$t71], "Screen", C, false)), "Cursor", (await $.wv([$t71], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("Tcfile", "DBGrid2TitleClick", async function DBGrid2TitleClick(Self, p0) {
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
    const $t73 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t73], "SortPosition", (await $.mcall((await $.wv([$t73], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t73], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t73], "Refresh", [], C));
    } finally {
      { const $t74 = await $.iset((await $.wv([$t73], "SQL", C, false)), [(await $.wv([$t73], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t73], "EmptyStr", C, false))); if ($t74 !== undefined) { await $.wset([$t73], "SQL", $t74, C); } }
      await $.mset((await $.wv([$t73], "Screen", C, false)), "Cursor", (await $.wv([$t73], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("Tcfile", "DBGrid1DrawColumnCell", async function DBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t75 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t75], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t76 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t75], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t76, 1)) {
          await $.wset([$t75], "ImageIndex", 25, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t76, 2)) {
          await $.wset([$t75], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t76, 3)) {
          await $.wset([$t75], "ImageIndex", 26, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t76, 4)) {
          await $.wset([$t75], "ImageIndex", 13, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t75], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t75], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t75], "ImageList1", C, false)), "Draw", [(await $.wv([$t75], "Canvas", C, false)), (await $.mv((await $.wv([$t75], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t75], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t75], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t75], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t75], "DefaultDrawColumnCell", [(await $.wv([$t75], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t75], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t75], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t75], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("Tcfile", "selectall1Click", async function selectall1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t77 = (await $.v(C, "dbgrid1"));
    const $t78 = (await $.wv([$t77], "SelectedRows", C, false));
    const $t79 = (await $.mv((await $.wv([$t77, $t78], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t77, $t78, $t79], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t77, $t78, $t79], "First", [], C));
      while ($.truthy($.not((await $.wv([$t77, $t78, $t79], "Eof", C, false))))) {
        await $.wset([$t77, $t78, $t79], "CurrentRowSelected", (await $.wv([$t77, $t78, $t79], "True", C, false)), C);
        await $.stmt($.wcall([$t77, $t78, $t79], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t77, $t78, $t79], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcfile", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tcfile", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
