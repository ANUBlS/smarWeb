// Generated from UnitDxxx.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitDxxx", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "ToolWin", "Grids", "DBGrids", "StdCtrls", "FileCtrl", "Buttons", "ExtCtrls", "CMExcelExport", "ImgList", "OracleData", "Menus", "Unit18", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDxxx", "TForm", {"imagelist1": {"name": "ImageList1", "type": "TImageList"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "refwithsel": {"name": "RefwithSel", "type": "TSpeedButton"}, "redxxx": {"name": "REDXXX", "type": "TRichEdit"}, "filelistbox1": {"name": "FileListBox1", "type": "TFileListBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "animate1": {"name": "Animate1", "type": "TAnimate"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "isertbtn": {"name": "isertbtn", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "filelistboxsmsfiles": {"name": "FileListBoxSmsFiles", "type": "TFileListBox"}, "filelistboxdxxx": {"name": "FileListBoxDxxx", "type": "TFileListBox"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "cmexcelexport2": {"name": "CMExcelExport2", "type": "TCMExcelExport"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "selectall1": {"name": "selectall1", "type": "TMenuItem"}}, {});
  U.init(async () => {
    U.var_("Dxxx", null, "TDxxx");
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
  U.method("TDxxx", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ToolButton2")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDxxx", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "k": 0, "rowcount": 0, "msgcount": 0, "d_file_count": 0, "selst": 0, "selstf": 0, "y": 0, "syssim": '', "stmessage": '', "test": 0, "institution": '', "currency": '', "merchant": '', "terminal": '', "trandate": '', "amount": '', "fee": '', "tr_type": '', "types": '', "bank_kode": '', "mercname": '', "autcode": '', "f": null, "v_dir": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["v_dir"] = (await $.v(C, "GetCurrentDir"));
  try {
    L0["y"] = 0;
    L0["k"] = 0;
    await $.mset((await $.v(C, "ToolBar1")), "Enabled", false);
    await $.mcall((await $.mv((await $.v(C, "REDXXX")), "Lines")), "Clear", []);
    L0["d_file_count"] = 0;
    if ($.truthy($.not((await $.call(C, "DirectoryExists", ["C:\\AZCARD\\IN"]))))) {
      await $.stmt((await $.call(C, "showmessage", ["Not found: 'C:\\AZCARD\\IN'"])));
      return L0.result;
    }
    await $.mset((await $.v(C, "FileListBoxDxxx")), "Directory", "C:\\AZCARD\\IN");
    await $.mcall((await $.v(C, "FileListBoxDxxx")), "Update", []);
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "FileListBoxDxxx")), "Items")), "Count")), 0))) {
      return L0.result;
    }
    await $.mset((await $.v(C, "FileListBoxDxxx")), "Mask", "*.*");
    await $.mcall((await $.v(C, "FileListBoxDxxx")), "Update", []);
    L0["test"] = $.fdiv(122, 10);
    if ($.truthy($.gt((await $.call(C, "pos", [".", (await $.call(C, "FloatToStr", [L0["test"]]))])), 0))) {
      L0["syssim"] = ".";
    } else {
      if ($.truthy($.gt((await $.call(C, "pos", [",", (await $.call(C, "FloatToStr", [L0["test"]]))])), 0))) {
        L0["syssim"] = ",";
      }
    }
    { const $t4 = $.sub((await $.mv((await $.mv((await $.v(C, "FileListBoxDxxx")), "Items")), "Count")), 1);
      L0["i"] = 0;
      let $t5 = true;
      for (;;) {
        if (!$t5) { L0["i"] = $.succ(L0["i"], 1); }
        $t5 = false;
        if (!($.ord(L0["i"]) <= $.ord($t4))) break;
        await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
        L0["msgcount"] = 0;
        if ($.truthy(($.ne((await $.call(C, "UPPERCASE", [((await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "FileListBoxDxxx")), "Items")), [L0["i"]])), 0, 8])))])), ((await $.call(C, "UPPERCASE", [($.add($.add("D", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "FieldByName", ["bankname"])), "asstring"))), "_XXX"))]))))))) {
          continue;
        }
        L0["d_file_count"] = $.add(L0["d_file_count"], 1);
        if ($.truthy($.eq((await $.call(C, "CheckFileExt", [$.add((await $.mv((await $.v(C, "FileListBoxDxxx")), "Directory")), (await $.idx((await $.mv((await $.v(C, "FileListBoxDxxx")), "items")), [L0["i"]])))])), false))) {
          continue;
        }
        await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t6) => { L0["f"] = $t6; }), $.add("C:\\AZCARD\\IN\\", (await $.idx((await $.mv((await $.v(C, "FileListBoxDxxx")), "Items")), [L0["i"]])))])));
        await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t7) => { L0["f"] = $t7; })])));
        L0["k"] = $.add(L0["k"], 1);
        L0["rowcount"] = 0;
        while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t8) => { L0["f"] = $t8; }), $.ref(async () => L0["stmessage"], async ($t9) => { L0["stmessage"] = $t9; })])));
          L0["rowcount"] = $.add(L0["rowcount"], 1);
          if ($.truthy(($.eq(((await $.call(C, "Copy", [(await $.call(C, "Trim", [L0["stmessage"]])), 1, 21]))), "Financial institution")))) {
            L0["msgcount"] = $.add(L0["msgcount"], 1);
          }
          await $.tick();
        }
        L0["stmessage"] = "";
        await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t10) => { L0["f"] = $t10; })])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "REDxxx")), "Lines")), "Add", [$.add($.add("FILE NAME            :< ", (await $.idx((await $.mv((await $.v(C, "FileListBoxDxxx")), "items")), [L0["i"]]))), " >   ")])));
        while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
          await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t11) => { L0["f"] = $t11; }), $.ref(async () => L0["stmessage"], async ($t12) => { L0["stmessage"] = $t12; })])));
          if ($.truthy($.eq(((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 15]))), "*** Issuing ***"))) {
            L0["y"] = 1;
          }
          if ($.truthy($.eq(L0["y"], 0))) {
            L0["types"] = "Acquiring";
          }
          if ($.truthy($.eq(L0["y"], 1))) {
            L0["types"] = "Issuing";
          }
          if ($.truthy(($.eq(((await $.call(C, "Copy", [(await $.call(C, "Trim", [L0["stmessage"]])), 1, 21]))), "Financial institution")))) {
            L0["institution"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 25, 20]))]));
            L0["bank_kode"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 55, 6]))]));
            await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t13) => { L0["f"] = $t13; }), $.ref(async () => L0["stmessage"], async ($t14) => { L0["stmessage"] = $t14; })])));
            L0["currency"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 26, 5]))]));
            if ($.truthy($.eq(L0["currency"], "AZN"))) {
              L0["currency"] = "944";
            } else {
              if ($.truthy($.eq(L0["currency"], "USD"))) {
                L0["currency"] = "840";
              } else {
                if ($.truthy($.eq(L0["currency"], "EUR"))) {
                  L0["currency"] = "978";
                }
              }
            }
            await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t15) => { L0["f"] = $t15; }), $.ref(async () => L0["stmessage"], async ($t16) => { L0["stmessage"] = $t16; })])));
            await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t17) => { L0["f"] = $t17; }), $.ref(async () => L0["stmessage"], async ($t18) => { L0["stmessage"] = $t18; })])));
            if ($.truthy((await $.or_(($.eq(((await $.call(C, "Copy", [(await $.call(C, "Trim", [L0["stmessage"]])), 1, 13]))), "Merchant Name")), async () => ($.eq(((await $.call(C, "Copy", [(await $.call(C, "Trim", [L0["stmessage"]])), 1, 10]))), "RBS Number")))))) {
              await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t19) => { L0["f"] = $t19; }), $.ref(async () => L0["stmessage"], async ($t20) => { L0["stmessage"] = $t20; })])));
              await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t21) => { L0["f"] = $t21; }), $.ref(async () => L0["stmessage"], async ($t22) => { L0["stmessage"] = $t22; })])));
              while ($.truthy($.not(($.eq((await $.call(C, "Trim", [(await $.call(C, "copy", [L0["stmessage"], 44, 5]))])), "Total"))))) {
                if ($.truthy($.not(($.eq(((await $.call(C, "length", [(await $.call(C, "Trim", [L0["stmessage"]]))]))), 0))))) {
                  L0["trandate"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 102, 8]))]));
                  L0["merchant"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 27]))]));
                  L0["terminal"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 28, 22]))]));
                  L0["mercname"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 50, 23]))]));
                  L0["amount"] = (await $.call(C, "Trim", [((await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 73, 14])))]));
                  L0["fee"] = (await $.call(C, "Trim", [((await $.call(C, "copy", [(await $.call(C, "Trim", [L0["stmessage"]])), 87, 14])))]));
                  L0["autcode"] = (await $.call(C, "Trim", [((await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 111, 6])))]));
                  L0["tr_type"] = (await $.call(C, "Trim", [((await $.call(C, "copy", [(await $.call(C, "Trim", [L0["stmessage"]])), 118, 20])))]));
                  {
                    const $t23 = (await $.mv((await $.v(C, "REDXXX")), "Lines"));
                    await $.stmt((await $.wcall([$t23], "Add", [$.add("INSTITUTION          :", (await $.wv([$t23], "Institution", { get: async () => L0["institution"], set: async (v) => { L0["institution"] = v; }, local: true }, false)))], C)));
                    await $.stmt((await $.wcall([$t23], "Add", [$.add("INSTITUTION Code     :", (await $.wv([$t23], "Bank_kode", { get: async () => L0["bank_kode"], set: async (v) => { L0["bank_kode"] = v; }, local: true }, false)))], C)));
                    await $.stmt((await $.wcall([$t23], "Add", [$.add("CURRENCY             :", (await $.wv([$t23], "Currency", { get: async () => L0["currency"], set: async (v) => { L0["currency"] = v; }, local: true }, false)))], C)));
                    await $.stmt((await $.wcall([$t23], "Add", [$.add("DATE                 :", (await $.wv([$t23], "TranDate", { get: async () => L0["trandate"], set: async (v) => { L0["trandate"] = v; }, local: true }, false)))], C)));
                    await $.stmt((await $.wcall([$t23], "Add", [$.add("MERCHANT             :", (await $.wv([$t23], "Merchant", { get: async () => L0["merchant"], set: async (v) => { L0["merchant"] = v; }, local: true }, false)))], C)));
                    await $.stmt((await $.wcall([$t23], "Add", [$.add("AMOUNT               :", (await $.wv([$t23], "Amount", { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true }, false)))], C)));
                    await $.stmt((await $.wcall([$t23], "Add", [$.add("FEE                  :", (await $.wv([$t23], "Fee", { get: async () => L0["fee"], set: async (v) => { L0["fee"] = v; }, local: true }, false)))], C)));
                    await $.stmt((await $.wcall([$t23], "Add", [$.add("TERMINAL             :", (await $.wv([$t23], "Terminal", { get: async () => L0["terminal"], set: async (v) => { L0["terminal"] = v; }, local: true }, false)))], C)));
                    await $.stmt((await $.wcall([$t23], "Add", [$.add("TR_TYPE              :", (await $.wv([$t23], "Tr_type", { get: async () => L0["tr_type"], set: async (v) => { L0["tr_type"] = v; }, local: true }, false)))], C)));
                    await $.stmt((await $.wcall([$t23], "Add", [$.add("AUTH_CODE            :", (await $.wv([$t23], "autcode", { get: async () => L0["autcode"], set: async (v) => { L0["autcode"] = v; }, local: true }, false)))], C)));
                    await $.stmt((await $.wcall([$t23], "Add", [$.add("MERCH_NAME           :", (await $.wv([$t23], "mercname", { get: async () => L0["mercname"], set: async (v) => { L0["mercname"] = v; }, local: true }, false)))], C)));
                    await $.stmt((await $.wcall([$t23], "Add", [$.add("TYPE                 :", (await $.wv([$t23], "types", { get: async () => L0["types"], set: async (v) => { L0["types"] = v; }, local: true }, false)))], C)));
                    await $.stmt((await $.wcall([$t23], "Add", ["-------------------------------------------------------------------------------"], C)));
                  }
                  await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t24) => { L0["f"] = $t24; }), $.ref(async () => L0["stmessage"], async ($t25) => { L0["stmessage"] = $t25; })])));
                } else {
                  await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t26) => { L0["f"] = $t26; }), $.ref(async () => L0["stmessage"], async ($t27) => { L0["stmessage"] = $t27; })])));
                }
                await $.tick();
              }
            }
          }
          await $.tick();
        }
        await $.mset((await $.v(C, "REDxxx")), "SelStart", (await $.mcall((await $.v(C, "REDxxx")), "FindText", ["Message count:", L0["selst"], (await $.call(C, "LENGTH", [(await $.mv((await $.v(C, "REDxxx")), "Text"))])), [(await $.v(C, "stMatchCase"))]])));
        await $.mset((await $.v(C, "REDxxx")), "SelLength", 18);
        await $.mset((await $.mv((await $.v(C, "REDxxx")), "SelAttributes")), "Color", (await $.v(C, "clBlue")));
        await $.mset((await $.mv((await $.v(C, "REDxxx")), "SelAttributes")), "Style", []);
        L0["selst"] = $.add((await $.mcall((await $.v(C, "REDxxx")), "FindText", ["Message count:", L0["selst"], (await $.call(C, "LENGTH", [(await $.mv((await $.v(C, "REDxxx")), "Text"))])), [(await $.v(C, "stMatchCase"))]])), 1);
        await $.mset((await $.v(C, "REDxxx")), "SelLength", (-(1)));
        await $.mset((await $.v(C, "REDxxx")), "SelStart", (await $.mcall((await $.v(C, "REDxxx")), "FindText", ["FILE NAME", L0["selstf"], (await $.call(C, "LENGTH", [(await $.mv((await $.v(C, "REDxxx")), "Text"))])), [(await $.v(C, "stMatchCase"))]])));
        await $.mset((await $.v(C, "REDxxx")), "SelLength", 35);
        await $.mset((await $.mv((await $.v(C, "REDxxx")), "SelAttributes")), "Color", (await $.v(C, "clred")));
        L0["selstf"] = $.add((await $.mcall((await $.v(C, "REDxxx")), "FindText", ["FILE NAME", L0["selstf"], (await $.call(C, "LENGTH", [(await $.mv((await $.v(C, "REDxxx")), "Text"))])), [(await $.v(C, "stMatchCase"))]])), 1);
        await $.mset((await $.v(C, "REDxxx")), "SelLength", (-(1)));
        await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t28) => { L0["f"] = $t28; })])));
        await $.tick();
      }
    }
  } finally {
    if ($.truthy($.eq(L0["k"], 0))) {
      await $.stmt((await $.call(C, "showmessage", ["There is not file (D_XXX) in the directory 'C:\\AZCARD\\IN'"])));
    }
    await $.mset((await $.v(C, "ToolBar1")), "Enabled", true);
    await $.stmt((await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "REDXXX")), "Handle")), (await $.v(C, "EM_LINESCROLL")), 0, $.mul(((-(1))), ($.sub((await $.mv((await $.mv((await $.v(C, "REDXXX")), "Lines")), "Count")), 1)))])));
    await $.mset((await $.v(C, "FileListBoxDxxx")), "Directory", L0["v_dir"]);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDxxx", "isertbtnClick", async function isertbtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "k": 0, "rowcount": 0, "msgcount": 0, "d_file_count": 0, "selst": 0, "selstf": 0, "y": 0, "syssim": '', "stmessage": '', "test": 0, "institution": '', "currency": '', "merchant": '', "terminal": '', "trandate": '', "amount": '', "fee": '', "tr_type": '', "types": '', "bank_kode": '', "mercname": '', "autcode": '', "f": null, "v_dir": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["v_dir"] = (await $.v(C, "GetCurrentDir"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["delete_dxxx", []])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "dxxx")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "dxxx")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "dxxx2")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "dxxx2")), "open", []);
  try {
    L0["y"] = 0;
    L0["k"] = 0;
    await $.mset((await $.v(C, "ToolBar1")), "Enabled", false);
    L0["d_file_count"] = 0;
    if ($.truthy($.not((await $.call(C, "DirectoryExists", ["C:\\AZCARD\\IN"]))))) {
      await $.stmt((await $.call(C, "showmessage", ["Not found: 'C:\\AZCARD\\IN'"])));
      return L0.result;
    }
    await $.mset((await $.v(C, "FileListBoxDxxx")), "Directory", "C:\\AZCARD\\IN");
    await $.mcall((await $.v(C, "FileListBoxDxxx")), "Update", []);
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "FileListBoxDxxx")), "Items")), "Count")), 0))) {
      return L0.result;
    }
    await $.mset((await $.v(C, "FileListBoxDxxx")), "Mask", "*.*");
    await $.mcall((await $.v(C, "FileListBoxDxxx")), "Update", []);
    L0["test"] = $.fdiv(122, 10);
    if ($.truthy($.gt((await $.call(C, "pos", [".", (await $.call(C, "FloatToStr", [L0["test"]]))])), 0))) {
      L0["syssim"] = ".";
    } else {
      if ($.truthy($.gt((await $.call(C, "pos", [",", (await $.call(C, "FloatToStr", [L0["test"]]))])), 0))) {
        L0["syssim"] = ",";
      }
    }
    { const $t29 = $.sub((await $.mv((await $.mv((await $.v(C, "FileListBoxDxxx")), "Items")), "Count")), 1);
      L0["i"] = 0;
      let $t30 = true;
      for (;;) {
        if (!$t30) { L0["i"] = $.succ(L0["i"], 1); }
        $t30 = false;
        if (!($.ord(L0["i"]) <= $.ord($t29))) break;
        await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
        if ($.truthy(($.ne((await $.call(C, "uppercase", [((await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "FileListBoxDxxx")), "Items")), [L0["i"]])), 0, 8])))])), ((await $.call(C, "uppercase", [($.add($.add("D", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "FieldByName", ["bankname"])), "asstring"))), "_XXX"))]))))))) {
          continue;
        }
        L0["d_file_count"] = $.add(L0["d_file_count"], 1);
        if ($.truthy($.eq((await $.call(C, "CheckFileExt", [$.add((await $.mv((await $.v(C, "FileListBoxDxxx")), "Directory")), (await $.idx((await $.mv((await $.v(C, "FileListBoxDxxx")), "items")), [L0["i"]])))])), false))) {
          continue;
        }
        await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t31) => { L0["f"] = $t31; }), $.add("C:\\AZCARD\\IN\\", (await $.idx((await $.mv((await $.v(C, "FileListBoxDxxx")), "Items")), [L0["i"]])))])));
        await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t32) => { L0["f"] = $t32; })])));
        L0["k"] = $.add(L0["k"], 1);
        L0["rowcount"] = 0;
        L0["stmessage"] = "";
        await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t33) => { L0["f"] = $t33; })])));
        while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
          await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t34) => { L0["f"] = $t34; }), $.ref(async () => L0["stmessage"], async ($t35) => { L0["stmessage"] = $t35; })])));
          if ($.truthy($.eq(((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 15]))), "*** Issuing ***"))) {
            L0["y"] = 1;
          }
          if ($.truthy($.eq(L0["y"], 0))) {
            L0["types"] = "Acquiring";
          }
          if ($.truthy($.eq(L0["y"], 1))) {
            L0["types"] = "Issuing";
          }
          if ($.truthy(($.eq(((await $.call(C, "Copy", [(await $.call(C, "Trim", [L0["stmessage"]])), 1, 21]))), "Financial institution")))) {
            L0["institution"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 25, 29]))]));
            L0["bank_kode"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 55, 6]))]));
            await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t36) => { L0["f"] = $t36; }), $.ref(async () => L0["stmessage"], async ($t37) => { L0["stmessage"] = $t37; })])));
            L0["currency"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 26, 5]))]));
            if ($.truthy($.eq(L0["currency"], "AZN"))) {
              L0["currency"] = "944";
            } else {
              if ($.truthy($.eq(L0["currency"], "USD"))) {
                L0["currency"] = "840";
              } else {
                if ($.truthy($.eq(L0["currency"], "EUR"))) {
                  L0["currency"] = "978";
                }
              }
            }
            await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t38) => { L0["f"] = $t38; }), $.ref(async () => L0["stmessage"], async ($t39) => { L0["stmessage"] = $t39; })])));
            await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t40) => { L0["f"] = $t40; }), $.ref(async () => L0["stmessage"], async ($t41) => { L0["stmessage"] = $t41; })])));
            if ($.truthy((await $.or_(($.eq(((await $.call(C, "Copy", [(await $.call(C, "Trim", [L0["stmessage"]])), 1, 13]))), "Merchant Name")), async () => ($.eq(((await $.call(C, "Copy", [(await $.call(C, "Trim", [L0["stmessage"]])), 1, 10]))), "RBS Number")))))) {
              await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t42) => { L0["f"] = $t42; }), $.ref(async () => L0["stmessage"], async ($t43) => { L0["stmessage"] = $t43; })])));
              await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t44) => { L0["f"] = $t44; }), $.ref(async () => L0["stmessage"], async ($t45) => { L0["stmessage"] = $t45; })])));
              while ($.truthy($.not(($.eq((await $.call(C, "Trim", [(await $.call(C, "copy", [L0["stmessage"], 44, 5]))])), "Total"))))) {
                if ($.truthy($.not(($.eq(((await $.call(C, "length", [(await $.call(C, "Trim", [L0["stmessage"]]))]))), 0))))) {
                  L0["trandate"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 102, 8]))]));
                  L0["merchant"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 27]))]));
                  L0["terminal"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 28, 22]))]));
                  L0["mercname"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 50, 23]))]));
                  L0["amount"] = (await $.call(C, "Trim", [((await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 73, 14])))]));
                  L0["fee"] = (await $.call(C, "Trim", [((await $.call(C, "copy", [(await $.call(C, "Trim", [L0["stmessage"]])), 87, 14])))]));
                  L0["autcode"] = (await $.call(C, "Trim", [((await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 111, 6])))]));
                  L0["tr_type"] = (await $.call(C, "Trim", [((await $.call(C, "copy", [(await $.call(C, "Trim", [L0["stmessage"]])), 118, 20])))]));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["Insert_dxxx", [L0["institution"], L0["currency"], L0["trandate"], L0["merchant"], L0["amount"], L0["fee"], L0["terminal"], L0["types"], L0["tr_type"], (await $.idx((await $.mv((await $.v(C, "FileListBoxDxxx")), "items")), [L0["i"]])), L0["bank_kode"], L0["mercname"], L0["autcode"]]])));
                  await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t46) => { L0["f"] = $t46; }), $.ref(async () => L0["stmessage"], async ($t47) => { L0["stmessage"] = $t47; })])));
                } else {
                  await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t48) => { L0["f"] = $t48; }), $.ref(async () => L0["stmessage"], async ($t49) => { L0["stmessage"] = $t49; })])));
                }
                await $.tick();
              }
            }
          }
          await $.tick();
        }
        await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t50) => { L0["f"] = $t50; })])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["dxxarxiv", [(await $.idx((await $.mv((await $.v(C, "FileListBoxDxxx")), "Items")), [L0["i"]]))]])));
        await $.tick();
      }
    }
  } finally {
    if ($.truthy($.eq(L0["k"], 0))) {
      await $.stmt((await $.call(C, "showmessage", ["There is not file (D_XXX) in the directory 'C:\\AZCARD\\IN'"])));
    }
    await $.mset((await $.v(C, "ToolBar1")), "Enabled", true);
  }
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "dxxx")), "Refresh", []);
  await $.stmt((await $.call(C, "ShowMessage", ["All records send to base!"])));
  await $.mset((await $.v(C, "FileListBoxDxxx")), "Directory", L0["v_dir"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDxxx", "DBGrid1DrawColumnCell", async function DBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t51 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t51], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t52 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t51], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t52, 1)) {
          await $.wset([$t51], "ImageIndex", 25, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t52, 2)) {
          await $.wset([$t51], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t52, 3)) {
          await $.wset([$t51], "ImageIndex", 26, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t52, 4)) {
          await $.wset([$t51], "ImageIndex", 13, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t51], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t51], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t51], "ImageList1", C, false)), "Draw", [(await $.wv([$t51], "Canvas", C, false)), (await $.mv((await $.wv([$t51], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t51], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t51], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t51], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t51], "DefaultDrawColumnCell", [(await $.wv([$t51], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t51], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t51], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t51], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TDxxx", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "dxxx")), "DXXXFILES", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDxxx", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
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
    const $t53 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t53], "SortPosition", (await $.mcall((await $.wv([$t53], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t53], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t53], "Refresh", [], C));
    } finally {
      { const $t54 = await $.iset((await $.wv([$t53], "SQL", C, false)), [(await $.wv([$t53], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t53], "EmptyStr", C, false))); if ($t54 !== undefined) { await $.wset([$t53], "SQL", $t54, C); } }
      await $.mset((await $.wv([$t53], "Screen", C, false)), "Cursor", (await $.wv([$t53], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TDxxx", "DBGrid2TitleClick", async function DBGrid2TitleClick(Self, p0) {
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
    const $t55 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t55], "SortPosition", (await $.mcall((await $.wv([$t55], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t55], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t55], "Refresh", [], C));
    } finally {
      { const $t56 = await $.iset((await $.wv([$t55], "SQL", C, false)), [(await $.wv([$t55], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t55], "EmptyStr", C, false))); if ($t56 !== undefined) { await $.wset([$t55], "SQL", $t56, C); } }
      await $.mset((await $.wv([$t55], "Screen", C, false)), "Cursor", (await $.wv([$t55], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TDxxx", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "excel": null, "cell": 0, "row": 0, "l": 0, "m": 0, "i": 0, "j": 0, "ids": 0, "formats": '', "debet": '', "kredit": '', "summa": '', "destination": '', "vbic": '', "output": null, "filename": '', "swmessage": '', "dir": '', "edit_ref": '', "beginmessage": '', "endmesage": '', "valu": '', "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  if ($.truthy((await $.mv((await $.v(C, "DBGrid1")), "CanFocus")))) {
    await $.mcall((await $.v(C, "DBGrid1")), "SetFocus", []);
  }
  {
    const $t57 = (await $.v(C, "DBGrid1"));
    const $t58 = (await $.wv([$t57], "SelectedRows", C, false));
    const $t59 = (await $.mv((await $.wv([$t57, $t58], "DataSource", C, false)), "DataSet"));
    const $t60 = (await $.wv([$t57, $t58, $t59], "DataMod_CARDS", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t57, $t58, $t59, $t60], "Count", C, false)), 0))) {
        await $.wset([$t57, $t58, $t59, $t60], "CurrentRowSelected", (await $.wv([$t57, $t58, $t59, $t60], "True", C, false)), C);
      }
      { const $t61 = $.sub((await $.wv([$t57, $t58, $t59, $t60], "Count", C, false)), 1);
        await $.wset([$t57, $t58, $t59, $t60], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t62 = true;
        for (;;) {
          if (!$t62) { await $.wset([$t57, $t58, $t59, $t60], "Index", $.succ((await $.wv([$t57, $t58, $t59, $t60], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t62 = false;
          if (!($.ord((await $.wv([$t57, $t58, $t59, $t60], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t61))) break;
          await $.stmt((await $.wcall([$t57, $t58, $t59, $t60], "GotoBookmark", [(await $.wcall([$t57, $t58, $t59, $t60], "Pointer", [(await $.idx((await $.wv([$t57, $t58, $t59, $t60], "Items", C, false)), [(await $.wv([$t57, $t58, $t59, $t60], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t57, $t58, $t59, $t60], "TransactionID", (await $.mv((await $.wcall([$t57, $t58, $t59, $t60], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t57, $t58, $t59, $t60], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t63 = (await $.wcall([$t57, $t58, $t59, $t60], "MessageDlg", [(await $.wcall([$t57, $t58, $t59, $t60], "Format", ["əməliyyat təsdiq edilsin? №", [(await $.wv([$t57, $t58, $t59, $t60], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)), (await $.wv([$t57, $t58, $t59, $t60], "mtConfirmation", C, false)), [(await $.wv([$t57, $t58, $t59, $t60], "mbYes", C, false)), (await $.wv([$t57, $t58, $t59, $t60], "mbNo", C, false)), (await $.wv([$t57, $t58, $t59, $t60], "mbCancel", C, false)), (await $.wv([$t57, $t58, $t59, $t60], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t63, (await $.wv([$t57, $t58, $t59, $t60], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t63, (await $.wv([$t57, $t58, $t59, $t60], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t63, (await $.wv([$t57, $t58, $t59, $t60], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t57, $t58, $t59, $t60], "MessageDlg", [(await $.wcall([$t57, $t58, $t59, $t60], "Format", ["%d  sayda əməliyyat təsdiq edlisin?", [$.sub((await $.wv([$t57, $t58, $t59, $t60], "Count", C, false)), (await $.wv([$t57, $t58, $t59, $t60], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t57, $t58, $t59, $t60], "mtConfirmation", C, false)), [(await $.wv([$t57, $t58, $t59, $t60], "mbYes", C, false)), (await $.wv([$t57, $t58, $t59, $t60], "mbCancel", C, false))], 0], C)), (await $.wv([$t57, $t58, $t59, $t60], "mrYes", C, false))))) {
                  await $.wset([$t57, $t58, $t59, $t60], "WaitNextConfirm", (await $.wv([$t57, $t58, $t59, $t60], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t57, $t58, $t59, $t60], "Application", C, false)), "ProcessMessages", []);
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t57, $t58, $t59, $t60], "DataMod_CARDS", C, false)), "mainpacket")), "CallProcedure", ["transaction_dxxx", [(await $.wv([$t57, $t58, $t59, $t60], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]])));
          await $.wset([$t57, $t58, $t59, $t60], "WillRefresh", (await $.wv([$t57, $t58, $t59, $t60], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.tick();
        }
      }
    } finally {
      if ($.truthy((await $.wv([$t57, $t58, $t59, $t60], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.mcall((await $.mv((await $.mv((await $.wv([$t57, $t58, $t59, $t60], "DBGrid1", C, false)), "DataSource")), "DataSet")), "Refresh", []);
        await $.mcall((await $.mv((await $.mv((await $.wv([$t57, $t58, $t59, $t60], "DBGrid2", C, false)), "DataSource")), "DataSet")), "Refresh", []);
        await $.stmt((await $.wcall([$t57, $t58, $t59, $t60], "ShowMessage", ["Əməliyyat günün sənədlərinə göndərildi!"], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDxxx", "selectall1Click", async function selectall1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t64 = (await $.v(C, "dbgrid1"));
    const $t65 = (await $.wv([$t64], "SelectedRows", C, false));
    const $t66 = (await $.mv((await $.wv([$t64, $t65], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t64, $t65, $t66], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t64, $t65, $t66], "First", [], C));
      while ($.truthy($.not((await $.wv([$t64, $t65, $t66], "Eof", C, false))))) {
        await $.wset([$t64, $t65, $t66], "CurrentRowSelected", (await $.wv([$t64, $t65, $t66], "True", C, false)), C);
        await $.stmt($.wcall([$t64, $t65, $t66], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t64, $t65, $t66], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDxxx", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDxxx", "FormPaint", async function FormPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
