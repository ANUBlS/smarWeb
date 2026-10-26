// Generated from Rbsdofiles.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Rbsdofiles", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ImgList", "ComCtrls", "Grids", "DBGrids", "OracleData", "StdCtrls", "FileCtrl", "ToolWin", "Buttons", "ExtCtrls", "SBTranslateProc", "sboapiDataModuleImpl", "CMExcelExport", "Unit18"]);
  const C = [U];
  U.defClass("Tdorbsfile", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "refwithsel": {"name": "RefwithSel", "type": "TSpeedButton"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "isertbtn": {"name": "isertbtn", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "rbsdorich": {"name": "rbsdoRich", "type": "TRichEdit"}, "filelistrbsbox": {"name": "FileListrbsbox", "type": "TFileListBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "animate1": {"name": "Animate1", "type": "TAnimate"}, "richedit1": {"name": "RichEdit1", "type": "TRichEdit"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}}, {});
  U.init(async () => {
    U.var_("dorbsfile", null, "Tdorbsfile");
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
  U.method("Tdorbsfile", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
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
  U.method("Tdorbsfile", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tdorbsfile", "isertbtnClick", async function isertbtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0, "rowcount": 0, "stmessage": '', "all": '', "names": '', "st": '', "f": null, "v_dir": '', "test": 0, "syssim": '', "rollup": '', "currency": '', "total_type": '', "total_amount": '', "isdebet": '', "report": '', "report_type": '', "funds": '', "funds_type": '', "report_code": '', "total_code": '', "funds_code": '', "proc_date": '', "report_date": '', "total_type2": '', "total_amount2": '', "isdebet2": '', "total_type3": '', "total_amount3": '', "isdebet3": '', "total_type4": '', "total_amount4": '', "isdebet4": '', "file_count": 0, "k": 0, "msgcount": 0, "selst": 0, "selstf": 0, "wrdcnt": 0, "m": 0, "pst": '', "trgcrt": '', "trtp": '', "trcur": '', "outst": '', "reqcat": '', "btamt": '', "btcnt": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Animate1")), "Visible", true);
  await $.mset((await $.v(C, "Animate1")), "Active", true);
  await $.stmt((await $.mcall((await $.v(C, "Animate1")), "Play", [0, 0, 1])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["delete_rbsdofile", []])));
  { const $t6 = $.sub((await $.mv((await $.mv((await $.v(C, "FileListrbsbox")), "Items")), "Count")), 1);
    L0["i"] = 0;
    let $t7 = true;
    for (;;) {
      if (!$t7) { L0["i"] = $.succ(L0["i"], 1); }
      $t7 = false;
      if (!($.ord(L0["i"]) <= $.ord($t6))) break;
      await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
      L0["msgcount"] = 0;
      if ($.truthy(($.ne((await $.call(C, "uppercase", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "FileListrbsbox")), "Items")), [L0["i"]])), 0, 5]))])), "RBSDO")))) {
        continue;
      }
      L0["file_count"] = $.add(L0["file_count"], 1);
      if ($.truthy($.eq((await $.call(C, "CheckFileExt", [$.add((await $.mv((await $.v(C, "FileListrbsbox")), "Directory")), (await $.idx((await $.mv((await $.v(C, "FileListrbsbox")), "items")), [L0["i"]])))])), false))) {
        continue;
      }
      await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t8) => { L0["f"] = $t8; }), $.add("C:\\AZCARD\\IN\\", (await $.idx((await $.mv((await $.v(C, "FileListrbsbox")), "Items")), [L0["i"]])))])));
      await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t9) => { L0["f"] = $t9; })])));
      L0["rowcount"] = 0;
      while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
        L0["rowcount"] = $.add(L0["rowcount"], 1);
        if ($.truthy($.gt((await $.call(C, "Pos", ["Pay System type", L0["stmessage"]])), 0))) {
          L0["wrdcnt"] = $.add(L0["wrdcnt"], 1);
        }
        await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t10) => { L0["f"] = $t10; }), $.ref(async () => L0["stmessage"], async ($t11) => { L0["stmessage"] = $t11; })])));
        await $.tick();
      }
      L0["stmessage"] = "";
      await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t12) => { L0["f"] = $t12; })])));
      L0["k"] = 11;
      L0["j"] = 0;
      { const $t13 = L0["rowcount"];
        L0["j"] = 1;
        let $t14 = true;
        for (;;) {
          if (!$t14) { L0["j"] = $.succ(L0["j"], 1); }
          $t14 = false;
          if (!($.ord(L0["j"]) <= $.ord($t13))) break;
          await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t15) => { L0["f"] = $t15; }), $.ref(async () => L0["stmessage"], async ($t16) => { L0["stmessage"] = $t16; })])));
          if ($.truthy($.eq(L0["j"], 1))) {
            continue;
          }
          if ($.truthy(($.ne((await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 72, 18]))])), "")))) {
            if ($.truthy($.ne((await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 215, 3]))])), "---"))) {
              if ($.truthy($.ne((await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 274, 3]))])), "Cou"))) {
                if ($.truthy($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 7)])), 4, 5]))])), "Batch"))) {
                  L0["pst"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [L0["j"]])), 25, 50]))]));
                  L0["trgcrt"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 1)])), 25, 50]))]));
                  L0["trtp"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 2)])), 25, 50]))]));
                  L0["trcur"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 3)])), 25, 50]))]));
                  L0["outst"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 4)])), 25, 50]))]));
                  L0["reqcat"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 5)])), 25, 50]))]));
                  L0["btamt"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 6)])), 25, 50]))]));
                  L0["btcnt"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 7)])), 25, 50]))]));
                }
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["rbsdofile_insert", [(await $.idx((await $.mv((await $.v(C, "FileListrbsbox")), "items")), [L0["i"]])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 30, 20]))])), "", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 50, 14]))])), (await $.call(C, "StrToFloat", [(await $.call(C, "StringReplace", [(await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 72, 18]))])), ",", "", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 65, 6]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 91, 31]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 3, 26]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 122, 4]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 127, 10]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 138, 8]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 146, 12]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 159, 6]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 166, 24]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 191, 23]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 215, 3]))])), (await $.call(C, "StrToFloat", [(await $.call(C, "StringReplace", [(await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 72, 18]))])), ",", "", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]))])), (await $.call(C, "StrToFloat", [(await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 239, 10]))]))])), (await $.call(C, "StrToFloat", [(await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 249, 7]))]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 256, 9]))])), "0", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 274, 100]))])), L0["pst"], L0["trgcrt"], L0["trtp"], L0["trcur"], L0["outst"], L0["reqcat"], L0["btamt"], L0["btcnt"]]])));
              }
            }
          }
          await $.tick();
        }
      }
      await $.mset((await $.v(C, "Animate1")), "active", false);
      await $.mset((await $.v(C, "Animate1")), "Visible", false);
      await $.mcall((await $.v(C, "Animate1")), "Stop", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["rbsdoarxiv", [(await $.idx((await $.mv((await $.v(C, "FileListrbsbox")), "Items")), [L0["i"]]))]])));
      await $.stmt((await $.call(C, "MessageDlg", ["All messages are sent in base!", (await $.v(C, "mtInformation")), [(await $.v(C, "mbOK"))], 0])));
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t17) => { L0["f"] = $t17; })])));
      await $.tick();
    }
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["rbsdopart", []])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "rbsdofile")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tdorbsfile", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "f": null, "test": 0, "syssim": '', "stmessage": '', "rollup": '', "currency": '', "total_type": '', "total_amount": '', "isdebet": '', "report": '', "report_type": '', "funds": '', "funds_type": '', "report_code": '', "total_code": '', "funds_code": '', "proc_date": '', "report_date": '', "total_type2": '', "total_amount2": '', "isdebet2": '', "total_type3": '', "total_amount3": '', "isdebet3": '', "total_type4": '', "total_amount4": '', "isdebet4": '', "v_dir": '', "file_count": 0, "i": 0, "j": 0, "k": 0, "m": 0, "msgcount": 0, "rowcount": 0, "selst": 0, "selstf": 0, "wrdcnt": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["v_dir"] = (await $.v(C, "GetCurrentDir"));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "rbsdofile")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Clear", []);
  if ($.truthy($.not((await $.call(C, "DirectoryExists", ["C:\\AZCARD\\IN"]))))) {
    await $.stmt((await $.call(C, "MkDir", ["C:\\AZCARD\\IN"])));
  }
  await $.mset((await $.v(C, "FileListrbsbox")), "Directory", "C:\\AZCARD\\IN");
  await $.mcall((await $.v(C, "FileListrbsbox")), "Update", []);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "FileListrbsbox")), "Items")), "Count")), 0))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "FileListrbsbox")), "Mask", "*.*");
  await $.mcall((await $.v(C, "FileListrbsbox")), "Update", []);
  L0["test"] = $.fdiv(122, 10);
  if ($.truthy($.gt((await $.call(C, "pos", [".", (await $.call(C, "floattostr", [L0["test"]]))])), 0))) {
    L0["syssim"] = ".";
  } else {
    if ($.truthy($.gt((await $.call(C, "pos", [",", (await $.call(C, "floattostr", [L0["test"]]))])), 0))) {
      L0["syssim"] = ",";
    }
  }
  { const $t18 = $.sub((await $.mv((await $.mv((await $.v(C, "FileListrbsbox")), "Items")), "Count")), 1);
    L0["i"] = 0;
    let $t19 = true;
    for (;;) {
      if (!$t19) { L0["i"] = $.succ(L0["i"], 1); }
      $t19 = false;
      if (!($.ord(L0["i"]) <= $.ord($t18))) break;
      await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
      L0["msgcount"] = 0;
      if ($.truthy(($.ne((await $.call(C, "uppercase", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "FileListrbsbox")), "Items")), [L0["i"]])), 0, 5]))])), "RBSDO")))) {
        continue;
      }
      L0["file_count"] = $.add(L0["file_count"], 1);
      if ($.truthy($.eq((await $.call(C, "CheckFileExt", [$.add((await $.mv((await $.v(C, "FileListrbsbox")), "Directory")), (await $.idx((await $.mv((await $.v(C, "FileListrbsbox")), "items")), [L0["i"]])))])), false))) {
        continue;
      }
      await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t20) => { L0["f"] = $t20; }), $.add("C:\\AZCARD\\IN\\", (await $.idx((await $.mv((await $.v(C, "FileListrbsbox")), "Items")), [L0["i"]])))])));
      await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t21) => { L0["f"] = $t21; })])));
      L0["rowcount"] = 0;
      L0["wrdcnt"] = 0;
      while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
        L0["rowcount"] = $.add(L0["rowcount"], 1);
        if ($.truthy($.gt((await $.call(C, "Pos", ["Pay System type", L0["stmessage"]])), 0))) {
          L0["wrdcnt"] = $.add(L0["wrdcnt"], 1);
        }
        await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t22) => { L0["f"] = $t22; }), $.ref(async () => L0["stmessage"], async ($t23) => { L0["stmessage"] = $t23; })])));
        await $.tick();
      }
      L0["stmessage"] = "";
      await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t24) => { L0["f"] = $t24; })])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add($.add($.add($.add("FILE NAME            :< ", (await $.idx((await $.mv((await $.v(C, "FileListrbsbox")), "items")), [L0["i"]]))), " >   "), "Message count: "), (await $.call(C, "inttostr", [$.sub(L0["rowcount"], 15)])))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "RichEdit1")), "Lines")), "LoadFromFile", [(await $.idx((await $.mv((await $.v(C, "FileListrbsbox")), "items")), [L0["i"]]))])));
      L0["k"] = 11;
      { const $t25 = L0["rowcount"];
        L0["j"] = 1;
        let $t26 = true;
        for (;;) {
          if (!$t26) { L0["j"] = $.succ(L0["j"], 1); }
          $t26 = false;
          if (!($.ord(L0["j"]) <= $.ord($t25))) break;
          await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t27) => { L0["f"] = $t27; }), $.ref(async () => L0["stmessage"], async ($t28) => { L0["stmessage"] = $t28; })])));
          if ($.truthy($.eq(L0["j"], 1))) {
            continue;
          }
          if ($.truthy(($.ne((await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 72, 18]))])), "")))) {
            if ($.truthy($.ne((await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 215, 3]))])), "---"))) {
              if ($.truthy($.ne((await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 274, 3]))])), "Cou"))) {
                if ($.truthy($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 7)])), 4, 5]))])), "Batch"))) {
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Pay System type         :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [L0["j"]])), 25, 50]))])))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Target contract         :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 1)])), 25, 50]))])))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Transaction type        :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 2)])), 25, 50]))])))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Transaction curr        :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 3)])), 25, 50]))])))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Outward status          :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 4)])), 25, 50]))])))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Request category        :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 5)])), 25, 50]))])))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Batch amount            :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 6)])), 25, 50]))])))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Batch count             :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 7)])), 25, 50]))])))])));
                }
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", ["         "])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Merchant name           :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 3, 26]))])))])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("CardNumber              :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 30, 20]))])))])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Transactine Date/Time   :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 50, 14]))])))])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Trans condition         :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 166, 24]))])))])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("A-Code                  :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 65, 6]))])))])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add($.add($.add("Transaction amount      :", (await $.call(C, "StringReplace", [(await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 72, 18]))])), ",", "", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]))), " "), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 215, 3]))])))])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add($.add($.add("Transaction Fee         :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 239, 10]))]))), " "), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 215, 3]))])))])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("AC FEE                  :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 249, 7]))])))])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Due date                :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 256, 9]))])))])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Country                 :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 274, 100]))])))])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", ["---------------------------------------------------------------------------------"])));
              }
            }
          }
          await $.tick();
        }
      }
      await $.mset((await $.v(C, "rbsdoRich")), "SelStart", (await $.mcall((await $.v(C, "rbsdoRich")), "FindText", ["FILE NAME", L0["selstf"], (await $.call(C, "LENGTH", [(await $.mv((await $.v(C, "rbsdoRich")), "Text"))])), [(await $.v(C, "stMatchCase"))]])));
      await $.mset((await $.v(C, "rbsdoRich")), "SelLength", 38);
      await $.mset((await $.mv((await $.v(C, "rbsdoRich")), "SelAttributes")), "Color", (await $.v(C, "clred")));
      L0["selstf"] = $.add((await $.mcall((await $.v(C, "rbsdoRich")), "FindText", ["FILE NAME", L0["selstf"], (await $.call(C, "LENGTH", [(await $.mv((await $.v(C, "rbsdoRich")), "Text"))])), [(await $.v(C, "stMatchCase"))]])), 1);
      await $.mset((await $.v(C, "rbsdoRich")), "SelLength", (-(1)));
      await $.mset((await $.v(C, "rbsdoRich")), "SelStart", (await $.mcall((await $.v(C, "rbsdoRich")), "FindText", ["Message count:", L0["selst"], (await $.call(C, "LENGTH", [(await $.mv((await $.v(C, "rbsdoRich")), "Text"))])), [(await $.v(C, "stMatchCase"))]])));
      await $.mset((await $.v(C, "rbsdoRich")), "SelLength", 18);
      await $.mset((await $.mv((await $.v(C, "rbsdoRich")), "SelAttributes")), "Color", (await $.v(C, "clBlue")));
      await $.mset((await $.mv((await $.v(C, "rbsdoRich")), "SelAttributes")), "Style", []);
      L0["selst"] = $.add((await $.mcall((await $.v(C, "rbsdoRich")), "FindText", ["Message count:", L0["selst"], (await $.call(C, "LENGTH", [(await $.mv((await $.v(C, "rbsdoRich")), "Text"))])), [(await $.v(C, "stMatchCase"))]])), 1);
      await $.mset((await $.v(C, "rbsdoRich")), "SelLength", (-(1)));
      await $.mset((await $.v(C, "rbsdoRich")), "SelStart", 0);
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t29) => { L0["f"] = $t29; })])));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tdorbsfile", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "RbsDoFile", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
