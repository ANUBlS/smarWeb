// Generated from UnitRvisa.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitRvisa", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "ToolWin", "ImgList", "Grids", "DBGrids", "StdCtrls", "FileCtrl", "CMExcelExport", "OracleData", "U9", "applicationpas", "atmendpos", "balans", "balhs", "banksettings", "CARDS_TLB", "cfilepas", "comp", "crdtype", "creditinfopas", "customers", "datclose", "domesticbank", "dpforms", "filialaccounts", "MAINFORMImpl1", "newcard", "payment", "poscomission", "rezform", "setac", "sms", "Unit155", "Unit18", "UnitDxxx", "Unitintfile", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("Trvisa", "TForm", {"refiles": {"name": "REFiles", "type": "TRichEdit"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "isertbtn": {"name": "isertbtn", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "filelistrvisafiles": {"name": "FileListRvisaFiles", "type": "TFileListBox"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}}, {});
  U.init(async () => {
    U.var_("rvisa", null, "Trvisa");
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
  U.method("Trvisa", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "f": null, "test": 0, "syssim": '', "stmessage": '', "rollup": '', "currency": '', "total_type": '', "total_amount": '', "isdebet": '', "report": '', "report_type": '', "funds": '', "funds_type": '', "report_code": '', "total_code": '', "funds_code": '', "proc_date": '', "report_date": '', "total_type2": '', "total_amount2": '', "isdebet2": '', "total_type3": '', "total_amount3": '', "isdebet3": '', "total_type4": '', "total_amount4": '', "isdebet4": '', "file_count": 0, "i": 0, "msgcount": 0, "rowcount": 0, "selst": 0, "selstf": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "REFiles")), "Lines")), "Clear", []);
  if ($.truthy($.not((await $.call(C, "DirectoryExists", ["C:\\AZCARD\\IN"]))))) {
    await $.stmt((await $.call(C, "MkDir", ["C:\\AZCARD\\IN"])));
  }
  await $.mset((await $.v(C, "FileListRVisaFiles")), "Directory", "C:\\AZCARD\\IN");
  await $.mcall((await $.v(C, "FileListRVisaFiles")), "Update", []);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "FileListRVisaFiles")), "Items")), "Count")), 0))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "FileListRVisaFiles")), "Mask", "*.*");
  await $.mcall((await $.v(C, "FileListRVisaFiles")), "Update", []);
  L0["test"] = $.fdiv(122, 10);
  if ($.truthy($.gt((await $.call(C, "pos", [".", (await $.call(C, "FloatToStr", [L0["test"]]))])), 0))) {
    L0["syssim"] = ".";
  } else {
    if ($.truthy($.gt((await $.call(C, "pos", [",", (await $.call(C, "FloatToStr", [L0["test"]]))])), 0))) {
      L0["syssim"] = ",";
    }
  }
  L0["file_count"] = 0;
  { const $t4 = $.sub((await $.mv((await $.mv((await $.v(C, "FileListRVisaFiles")), "Items")), "Count")), 1);
    L0["i"] = 0;
    let $t5 = true;
    for (;;) {
      if (!$t5) { L0["i"] = $.succ(L0["i"], 1); }
      $t5 = false;
      if (!($.ord(L0["i"]) <= $.ord($t4))) break;
      await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
      L0["msgcount"] = 0;
      if ($.truthy(($.ne((await $.call(C, "uppercase", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "FileListRVisaFiles")), "Items")), [L0["i"]])), 0, 5]))])), "RVISA")))) {
        continue;
      }
      L0["file_count"] = $.add(L0["file_count"], 1);
      if ($.truthy($.eq((await $.call(C, "CheckFileExt", [$.add((await $.mv((await $.v(C, "FileListRVisaFiles")), "Directory")), (await $.idx((await $.mv((await $.v(C, "FileListRVisaFiles")), "items")), [L0["i"]])))])), false))) {
        continue;
      }
      await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t6) => { L0["f"] = $t6; }), $.add("C:\\AZCARD\\IN\\", (await $.idx((await $.mv((await $.v(C, "FileListRVisaFiles")), "Items")), [L0["i"]])))])));
      L0["stmessage"] = "";
      await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t7) => { L0["f"] = $t7; })])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "REFiles")), "Lines")), "Add", [$.add($.add("FILE NAME: < ", (await $.idx((await $.mv((await $.v(C, "FileListRVisaFiles")), "Items")), [L0["i"]]))), " >    ")])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "REFiles")), "Lines")), "Add", ["                                                  "])));
      while ($.truthy($.not((await $.call(C, "Eof", [L0["f"]]))))) {
        await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
        await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t8) => { L0["f"] = $t8; }), $.ref(async () => L0["stmessage"], async ($t9) => { L0["stmessage"] = $t9; })])));
        if ($.truthy($.eq((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 63, 23])), "INTERCHANGE VALUE REPORT"))) {
          break;
        }
        if ($.truthy($.eq((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 14])), "REPORTING FOR:"))) {
          L0["report"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 32, 15]))]));
          L0["report_code"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 21, 10]))]));
          L0["report_date"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 124, 7]))]));
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t10) => { L0["f"] = $t10; }), $.ref(async () => L0["stmessage"], async ($t11) => { L0["stmessage"] = $t11; })])));
          if ($.truthy($.eq((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 10])), "ROLLUP TO:"))) {
            L0["rollup"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 32, 15]))]));
            L0["total_code"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 21, 10]))]));
            L0["proc_date"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 124, 7]))]));
          }
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t12) => { L0["f"] = $t12; }), $.ref(async () => L0["stmessage"], async ($t13) => { L0["stmessage"] = $t13; })])));
          if ($.truthy($.eq((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 18])), "FUNDS XFER ENTITY:"))) {
            L0["funds"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 32, 15]))]));
            L0["funds_code"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 21, 10]))]));
          }
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t14) => { L0["f"] = $t14; }), $.ref(async () => L0["stmessage"], async ($t15) => { L0["stmessage"] = $t15; })])));
          while ($.truthy($.ne((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 7])), "*** END"))) {
            await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t16) => { L0["f"] = $t16; }), $.ref(async () => L0["stmessage"], async ($t17) => { L0["stmessage"] = $t17; })])));
            if ($.truthy($.eq((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 31])), "*** NO DATA FOR THIS REPORT ***"))) {
              break;
            }
            if ($.truthy($.eq((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 20])), "SETTLEMENT CURRENCY:"))) {
              L0["currency"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 23, 3]))]));
            }
            if ($.truthy($.eq((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 23])), "TOTAL INTERCHANGE VALUE"))) {
              L0["total_type"] = "TOTAL INTERCHANGE VALUE";
              L0["total_amount"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 106, 20]))]));
              L0["isdebet"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 126, 2]))]));
            }
            if ($.truthy($.eq((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 24])), "TOTAL REIMBURSEMENT FEES"))) {
              L0["total_type2"] = "TOTAL REIMBURSEMENT FEES";
              L0["total_amount2"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 106, 20]))]));
              L0["isdebet2"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 126, 2]))]));
            }
            if ($.truthy($.eq((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 18])), "TOTAL VISA CHARGES"))) {
              L0["total_type3"] = "TOTAL VISA CHARGES";
              L0["total_amount3"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 106, 20]))]));
              L0["isdebet3"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 126, 2]))]));
            }
            if ($.truthy($.eq((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 21])), "NET SETTLEMENT AMOUNT"))) {
              L0["total_type4"] = "NET SETTLEMENT AMOUNT";
              L0["total_amount4"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 106, 20]))]));
              L0["isdebet4"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 126, 2]))]));
              {
                const $t18 = (await $.mv((await $.v(C, "REFiles")), "Lines"));
                await $.stmt((await $.wcall([$t18], "ADD", [$.add("REPORTING FOR:       : ", (await $.wv([$t18], "report", { get: async () => L0["report"], set: async (v) => { L0["report"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t18], "ADD", [$.add("REPORTING CODE:      : ", (await $.wv([$t18], "report_code", { get: async () => L0["report_code"], set: async (v) => { L0["report_code"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t18], "ADD", [$.add("REPORTING DATE:      : ", (await $.wv([$t18], "report_date", { get: async () => L0["report_date"], set: async (v) => { L0["report_date"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t18], "ADD", [$.add("ROLLUP TO            : ", (await $.wv([$t18], "ROLLUP", { get: async () => L0["rollup"], set: async (v) => { L0["rollup"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t18], "ADD", [$.add("ROLLUP TO CODE       : ", (await $.wv([$t18], "total_code", { get: async () => L0["total_code"], set: async (v) => { L0["total_code"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t18], "ADD", [$.add("PROC DATE            : ", (await $.wv([$t18], "proc_date", { get: async () => L0["proc_date"], set: async (v) => { L0["proc_date"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t18], "ADD", [$.add("FUNDS XFER ENTITY:   : ", (await $.wv([$t18], "funds", { get: async () => L0["funds"], set: async (v) => { L0["funds"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t18], "ADD", [$.add("FUND XFER CODE:      : ", (await $.wv([$t18], "funds_code", { get: async () => L0["funds_code"], set: async (v) => { L0["funds_code"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t18], "ADD", [$.add("SETTLEMENT CURRENCY  : ", (await $.wv([$t18], "CURRENCY", { get: async () => L0["currency"], set: async (v) => { L0["currency"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t18], "ADD", [$.add("TOTAL TYPE           : ", (await $.wv([$t18], "TOTAL_TYPE", { get: async () => L0["total_type"], set: async (v) => { L0["total_type"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t18], "ADD", [$.add("TOTAL AMOUNT         : ", (await $.wv([$t18], "TOTAL_AMOUNT", { get: async () => L0["total_amount"], set: async (v) => { L0["total_amount"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t18], "ADD", [$.add("ISDEBET              : ", (await $.wv([$t18], "ISDEBET", { get: async () => L0["isdebet"], set: async (v) => { L0["isdebet"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t18], "ADD", [$.add("TOTAL TYPE           : ", (await $.wv([$t18], "TOTAL_TYPE2", { get: async () => L0["total_type2"], set: async (v) => { L0["total_type2"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t18], "ADD", [$.add("TOTAL AMOUNT         : ", (await $.wv([$t18], "TOTAL_AMOUNT2", { get: async () => L0["total_amount2"], set: async (v) => { L0["total_amount2"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t18], "ADD", [$.add("ISDEBET              : ", (await $.wv([$t18], "ISDEBET2", { get: async () => L0["isdebet2"], set: async (v) => { L0["isdebet2"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t18], "ADD", [$.add("TOTAL TYPE           : ", (await $.wv([$t18], "TOTAL_TYPE3", { get: async () => L0["total_type3"], set: async (v) => { L0["total_type3"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t18], "ADD", [$.add("TOTAL AMOUNT         : ", (await $.wv([$t18], "TOTAL_AMOUNT3", { get: async () => L0["total_amount3"], set: async (v) => { L0["total_amount3"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t18], "ADD", [$.add("ISDEBET              : ", (await $.wv([$t18], "ISDEBET3", { get: async () => L0["isdebet3"], set: async (v) => { L0["isdebet3"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t18], "ADD", [$.add("TOTAL TYPE           : ", (await $.wv([$t18], "TOTAL_TYPE4", { get: async () => L0["total_type4"], set: async (v) => { L0["total_type4"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t18], "ADD", [$.add("TOTAL AMOUNT         : ", (await $.wv([$t18], "TOTAL_AMOUNT4", { get: async () => L0["total_amount4"], set: async (v) => { L0["total_amount4"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t18], "ADD", [$.add("ISDEBET              : ", (await $.wv([$t18], "ISDEBET4", { get: async () => L0["isdebet4"], set: async (v) => { L0["isdebet4"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t18], "ADD", ["*************************************************"], C)));
              }
            }
            await $.tick();
          }
        }
        await $.tick();
      }
      await $.mset((await $.v(C, "REFiles")), "SelStart", (await $.mcall((await $.v(C, "REFiles")), "FindText", ["Message count:", L0["selst"], (await $.call(C, "LENGTH", [(await $.mv((await $.v(C, "REFiles")), "Text"))])), [(await $.v(C, "stMatchCase"))]])));
      await $.mset((await $.v(C, "REFiles")), "SelLength", 18);
      await $.mset((await $.mv((await $.v(C, "REFiles")), "SelAttributes")), "Style", []);
      L0["selst"] = $.add((await $.mcall((await $.v(C, "REFiles")), "FindText", ["Message count:", L0["selst"], (await $.call(C, "LENGTH", [(await $.mv((await $.v(C, "REFiles")), "Text"))])), [(await $.v(C, "stMatchCase"))]])), 1);
      await $.mset((await $.v(C, "REFiles")), "SelLength", (-(1)));
      await $.mset((await $.v(C, "REFiles")), "SelStart", (await $.mcall((await $.v(C, "REFiles")), "FindText", ["FILE NAME", L0["selstf"], (await $.call(C, "LENGTH", [(await $.mv((await $.v(C, "REFiles")), "Text"))])), [(await $.v(C, "stMatchCase"))]])));
      await $.mset((await $.v(C, "REFiles")), "SelLength", 33);
      await $.mset((await $.mv((await $.v(C, "REFiles")), "SelAttributes")), "Color", (await $.v(C, "clred")));
      L0["selstf"] = $.add((await $.mcall((await $.v(C, "REFiles")), "FindText", ["FILE NAME", L0["selstf"], (await $.call(C, "LENGTH", [(await $.mv((await $.v(C, "REFiles")), "Text"))])), [(await $.v(C, "stMatchCase"))]])), 1);
      await $.mset((await $.v(C, "REFiles")), "SelLength", (-(1)));
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t19) => { L0["f"] = $t19; })])));
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "REFiles")), "SelStart", 0);
  await $.stmt((await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "REFiles")), "Handle")), (await $.v(C, "EM_LINESCROLL")), 0, $.mul(((-(1))), ($.sub((await $.mv((await $.mv((await $.v(C, "REFiles")), "Lines")), "Count")), 1)))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Trvisa", "isertbtnClick", async function isertbtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "f": null, "test": 0, "syssim": '', "stmessage": '', "rollup": '', "currency": '', "total_type": '', "total_amount": '', "isdebet": '', "report": '', "report_type": '', "funds": '', "funds_type": '', "report_code": '', "total_code": '', "funds_code": '', "proc_date": '', "report_date": '', "total_type2": '', "total_amount2": '', "isdebet2": '', "total_type3": '', "total_amount3": '', "isdebet3": '', "total_type4": '', "total_amount4": '', "isdebet4": '', "file_count": 0, "i": 0, "msgcount": 0, "rowcount": 0, "selst": 0, "selstf": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["rvisa_delete", []])));
  if ($.truthy($.not((await $.call(C, "DirectoryExists", ["C:\\AZCARD\\IN"]))))) {
    await $.stmt((await $.call(C, "MkDir", ["C:\\AZCARD\\IN"])));
  }
  await $.mset((await $.v(C, "FileListRVisaFiles")), "Directory", "C:\\AZCARD\\IN");
  await $.mcall((await $.v(C, "FileListRVisaFiles")), "Update", []);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "FileListRVisaFiles")), "Items")), "Count")), 0))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "FileListRVisaFiles")), "Mask", "*.*");
  await $.mcall((await $.v(C, "FileListRVisaFiles")), "Update", []);
  L0["test"] = $.fdiv(122, 10);
  if ($.truthy($.gt((await $.call(C, "pos", [".", (await $.call(C, "FloatToStr", [L0["test"]]))])), 0))) {
    L0["syssim"] = ".";
  } else {
    if ($.truthy($.gt((await $.call(C, "pos", [",", (await $.call(C, "FloatToStr", [L0["test"]]))])), 0))) {
      L0["syssim"] = ",";
    }
  }
  L0["file_count"] = 0;
  { const $t20 = $.sub((await $.mv((await $.mv((await $.v(C, "FileListRVisaFiles")), "Items")), "Count")), 1);
    L0["i"] = 0;
    let $t21 = true;
    for (;;) {
      if (!$t21) { L0["i"] = $.succ(L0["i"], 1); }
      $t21 = false;
      if (!($.ord(L0["i"]) <= $.ord($t20))) break;
      await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
      L0["msgcount"] = 0;
      if ($.truthy(($.ne((await $.call(C, "uppercase", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "FileListRVisaFiles")), "Items")), [L0["i"]])), 0, 5]))])), "RVISA")))) {
        continue;
      }
      L0["file_count"] = $.add(L0["file_count"], 1);
      if ($.truthy($.eq((await $.call(C, "CheckFileExt", [$.add((await $.mv((await $.v(C, "FileListRVisaFiles")), "Directory")), (await $.idx((await $.mv((await $.v(C, "FileListRVisaFiles")), "items")), [L0["i"]])))])), false))) {
        continue;
      }
      await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t22) => { L0["f"] = $t22; }), $.add("C:\\AZCARD\\IN\\", (await $.idx((await $.mv((await $.v(C, "FileListRVisaFiles")), "Items")), [L0["i"]])))])));
      L0["stmessage"] = "";
      await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t23) => { L0["f"] = $t23; })])));
      while ($.truthy($.not((await $.call(C, "Eof", [L0["f"]]))))) {
        await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
        await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t24) => { L0["f"] = $t24; }), $.ref(async () => L0["stmessage"], async ($t25) => { L0["stmessage"] = $t25; })])));
        if ($.truthy($.eq((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 63, 23])), "INTERCHANGE VALUE REPORT"))) {
          break;
        }
        if ($.truthy($.eq((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 14])), "REPORTING FOR:"))) {
          L0["report"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 32, 15]))]));
          L0["report_code"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 21, 10]))]));
          L0["report_date"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 124, 7]))]));
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t26) => { L0["f"] = $t26; }), $.ref(async () => L0["stmessage"], async ($t27) => { L0["stmessage"] = $t27; })])));
          if ($.truthy($.eq((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 10])), "ROLLUP TO:"))) {
            L0["rollup"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 32, 15]))]));
            L0["total_code"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 21, 10]))]));
            L0["proc_date"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 124, 7]))]));
          }
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t28) => { L0["f"] = $t28; }), $.ref(async () => L0["stmessage"], async ($t29) => { L0["stmessage"] = $t29; })])));
          if ($.truthy($.eq((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 18])), "FUNDS XFER ENTITY:"))) {
            L0["funds"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 32, 15]))]));
            L0["funds_code"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 21, 10]))]));
          }
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t30) => { L0["f"] = $t30; }), $.ref(async () => L0["stmessage"], async ($t31) => { L0["stmessage"] = $t31; })])));
          while ($.truthy($.ne((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 7])), "*** END"))) {
            await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t32) => { L0["f"] = $t32; }), $.ref(async () => L0["stmessage"], async ($t33) => { L0["stmessage"] = $t33; })])));
            if ($.truthy($.eq((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 31])), "*** NO DATA FOR THIS REPORT ***"))) {
              break;
            }
            if ($.truthy($.eq((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 20])), "SETTLEMENT CURRENCY:"))) {
              L0["currency"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 23, 3]))]));
            }
            if ($.truthy($.eq((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 23])), "TOTAL INTERCHANGE VALUE"))) {
              L0["total_type"] = "TOTAL INTERCHANGE VALUE";
              L0["total_amount"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 106, 20]))]));
              L0["isdebet"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 126, 2]))]));
            }
            if ($.truthy($.eq((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 24])), "TOTAL REIMBURSEMENT FEES"))) {
              L0["total_type2"] = "TOTAL REIMBURSEMENT FEES";
              L0["total_amount2"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 106, 20]))]));
              L0["isdebet2"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 126, 2]))]));
            }
            if ($.truthy($.eq((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 18])), "TOTAL VISA CHARGES"))) {
              L0["total_type3"] = "TOTAL VISA CHARGES";
              L0["total_amount3"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 106, 20]))]));
              L0["isdebet3"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 126, 2]))]));
            }
            if ($.truthy($.eq((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 21])), "NET SETTLEMENT AMOUNT"))) {
              L0["total_type4"] = "NET SETTLEMENT AMOUNT";
              L0["total_amount4"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 106, 20]))]));
              L0["isdebet4"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 126, 2]))]));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["insert_rvisa", [L0["report"], L0["report_code"], L0["report_date"], L0["rollup"], L0["total_code"], L0["proc_date"], L0["funds"], L0["funds_code"], L0["currency"], L0["total_amount"], L0["isdebet"], L0["total_amount2"], L0["isdebet2"], L0["total_amount3"], L0["isdebet3"], L0["total_amount4"], L0["isdebet4"], (await $.idx((await $.mv((await $.v(C, "FileListRVisaFiles")), "Items")), [L0["i"]]))]])));
            }
            await $.tick();
          }
        }
        await $.tick();
      }
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t34) => { L0["f"] = $t34; })])));
      await $.tick();
    }
  }
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "rvisa")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "rvisa")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Trvisa", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "rvisa")), "RVISA", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Trvisa", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
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
    const $t35 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t35], "SortPosition", (await $.mcall((await $.wv([$t35], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t35], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t35], "Refresh", [], C));
    } finally {
      { const $t36 = await $.iset((await $.wv([$t35], "SQL", C, false)), [(await $.wv([$t35], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t35], "EmptyStr", C, false))); if ($t36 !== undefined) { await $.wset([$t35], "SQL", $t36, C); } }
      await $.mset((await $.wv([$t35], "Screen", C, false)), "Cursor", (await $.wv([$t35], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("Trvisa", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Trvisa", "FormPaint", async function FormPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["rvisa_delete", []])));
  await $.mcall((await $.v(C, "REFiles")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "rvisa")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "rvisa")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
