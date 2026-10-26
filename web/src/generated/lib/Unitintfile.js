// Generated from Unitintfile.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unitintfile", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ImgList", "ComCtrls", "Grids", "DBGrids", "StdCtrls", "FileCtrl", "ToolWin", "Buttons", "ExtCtrls", "oracledata", "CMExcelExport", "Menus", "Unit18", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("Tintfile", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "refwithsel": {"name": "RefwithSel", "type": "TSpeedButton"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "isertbtn": {"name": "isertbtn", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "refiles": {"name": "REFiles", "type": "TRichEdit"}, "filelistbox1": {"name": "FileListBox1", "type": "TFileListBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "animate1": {"name": "Animate1", "type": "TAnimate"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "filelistintretailfiles": {"name": "FileListIntRetailFiles", "type": "TFileListBox"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "selectall1": {"name": "selectall1", "type": "TMenuItem"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "label1": {"name": "Label1", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("intfile", null, "Tintfile");
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
  U.method("Tintfile", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "channel": '', "tr_type": '', "outwardstatus": '', "tr_currency": '', "acc_currency": '', "merchant": '', "cardnumber": '', "tr_date": '', "auth": '', "tr_amount": '', "acc_amount": '', "fee": '', "clear_amount": '', "terminal": '', "syssim": '', "stmessage": '', "test": 0, "i": 0, "msgcount": 0, "file_count": 0, "rowcount": 0, "selst": 0, "selstf": 0, "f": null, "v_dir": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["v_dir"] = (await $.v(C, "GetCurrentDir"));
  await $.mcall((await $.mv((await $.v(C, "REFiles")), "Lines")), "Clear", []);
  try {
    if ($.truthy($.not((await $.call(C, "DirectoryExists", ["C:\\AZCARD\\IN"]))))) {
      await $.stmt((await $.call(C, "MkDir", ["C:\\AZCARD\\IN"])));
    }
    await $.mset((await $.v(C, "FileListIntRetailFiles")), "Directory", "C:\\AZCARD\\IN");
    await $.mcall((await $.v(C, "FileListIntRetailFiles")), "Update", []);
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "FileListIntRetailFiles")), "Items")), "Count")), 0))) {
      return L0.result;
    }
    await $.mset((await $.v(C, "FileListIntRetailFiles")), "Mask", "*.*");
    await $.mcall((await $.v(C, "FileListIntRetailFiles")), "Update", []);
    L0["test"] = $.fdiv(122, 10);
    if ($.truthy($.gt((await $.call(C, "pos", [".", (await $.call(C, "FloatToStr", [L0["test"]]))])), 0))) {
      L0["syssim"] = ".";
    } else {
      if ($.truthy($.gt((await $.call(C, "pos", [",", (await $.call(C, "FloatToStr", [L0["test"]]))])), 0))) {
        L0["syssim"] = ",";
      }
    }
    L0["file_count"] = 0;
    { const $t4 = $.sub((await $.mv((await $.mv((await $.v(C, "FileListIntRetailFiles")), "Items")), "Count")), 1);
      L0["i"] = 0;
      let $t5 = true;
      for (;;) {
        if (!$t5) { L0["i"] = $.succ(L0["i"], 1); }
        $t5 = false;
        if (!($.ord(L0["i"]) <= $.ord($t4))) break;
        await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
        L0["msgcount"] = 0;
        if ($.truthy(($.ne((await $.call(C, "uppercase", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "FileListIntRetailFiles")), "Items")), [L0["i"]])), 0, 6]))])), "INT_I_")))) {
          continue;
        }
        L0["file_count"] = $.add(L0["file_count"], 1);
        if ($.truthy($.eq((await $.call(C, "CheckFileExt", [$.add((await $.mv((await $.v(C, "FileListIntRetailFiles")), "Directory")), (await $.idx((await $.mv((await $.v(C, "FileListIntRetailFiles")), "items")), [L0["i"]])))])), false))) {
          continue;
        }
        await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t6) => { L0["f"] = $t6; }), $.add("C:\\AZCARD\\IN\\", (await $.idx((await $.mv((await $.v(C, "FileListIntRetailFiles")), "Items")), [L0["i"]])))])));
        await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t7) => { L0["f"] = $t7; })])));
        L0["rowcount"] = 0;
        while ($.truthy($.not((await $.call(C, "Eof", [L0["f"]]))))) {
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t8) => { L0["f"] = $t8; }), $.ref(async () => L0["stmessage"], async ($t9) => { L0["stmessage"] = $t9; })])));
          L0["rowcount"] = $.add(L0["rowcount"], 1);
          if ($.truthy(((await $.and_((await $.and_(($.gt((await $.call(C, "Length", [(await $.call(C, "Trim", [L0["stmessage"]]))])), 100)), async () => ($.ne((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 3])), "---")))), async () => ($.ne((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 8])), "Merchant"))))))) {
            L0["msgcount"] = $.add(L0["msgcount"], 1);
          }
          await $.tick();
        }
        L0["stmessage"] = "";
        await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t10) => { L0["f"] = $t10; })])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "REFiles")), "Lines")), "Add", [$.add($.add($.add($.add("FILE NAME: < ", (await $.idx((await $.mv((await $.v(C, "FileListIntRetailFiles")), "Items")), [L0["i"]]))), " >    "), "Message count: "), (await $.call(C, "IntToStr", [L0["msgcount"]])))])));
        while ($.truthy($.not((await $.call(C, "Eof", [L0["f"]]))))) {
          await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t11) => { L0["f"] = $t11; }), $.ref(async () => L0["stmessage"], async ($t12) => { L0["stmessage"] = $t12; })])));
          if ($.truthy($.eq((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 7])), "Channel"))) {
            L0["channel"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 25, 15]))]));
            L0["tr_currency"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 63, 3]))]));
            await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t13) => { L0["f"] = $t13; }), $.ref(async () => L0["stmessage"], async ($t14) => { L0["stmessage"] = $t14; })])));
            L0["tr_type"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 25, 15]))]));
            L0["acc_currency"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 63, 3]))]));
            await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t15) => { L0["f"] = $t15; }), $.ref(async () => L0["stmessage"], async ($t16) => { L0["stmessage"] = $t16; })])));
            L0["outwardstatus"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 25, 15]))]));
          }
          if ($.truthy($.eq((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 8])), "Merchant"))) {
            await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t17) => { L0["f"] = $t17; }), $.ref(async () => L0["stmessage"], async ($t18) => { L0["stmessage"] = $t18; })])));
            await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t19) => { L0["f"] = $t19; }), $.ref(async () => L0["stmessage"], async ($t20) => { L0["stmessage"] = $t20; })])));
            while ($.truthy((await $.and_(($.ne((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 3])), "---")), async () => ($.ne((await $.call(C, "length", [(await $.call(C, "trim", [L0["stmessage"]]))])), 0)))))) {
              L0["merchant"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 23]))]));
              L0["cardnumber"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 24, 16]))]));
              L0["tr_date"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 41, 8]))]));
              L0["auth"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 50, 6]))]));
              L0["tr_amount"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 57, 14]))]));
              L0["acc_amount"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 71, 14]))]));
              L0["fee"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 85, 11]))]));
              L0["clear_amount"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 96, 14]))]));
              L0["terminal"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 116, 8]))]));
              {
                const $t21 = (await $.mv((await $.v(C, "REFiles")), "Lines"));
                await $.stmt((await $.wcall([$t21], "ADD", [$.add("CHANNEL               : ", (await $.wv([$t21], "channel", { get: async () => L0["channel"], set: async (v) => { L0["channel"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t21], "ADD", [$.add("TRANSACTION TYPE      : ", (await $.wv([$t21], "tr_type", { get: async () => L0["tr_type"], set: async (v) => { L0["tr_type"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t21], "ADD", [$.add("OUTWARDSTATUS         : ", (await $.wv([$t21], "outwardstatus", { get: async () => L0["outwardstatus"], set: async (v) => { L0["outwardstatus"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t21], "ADD", [$.add("TRANSACTION CURRENCY  : ", (await $.wv([$t21], "tr_currency", { get: async () => L0["tr_currency"], set: async (v) => { L0["tr_currency"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t21], "ADD", [$.add("ACCOUNT CURRENCY      : ", (await $.wv([$t21], "acc_currency", { get: async () => L0["acc_currency"], set: async (v) => { L0["acc_currency"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t21], "ADD", [$.add("MERCHANT              : ", (await $.wv([$t21], "merchant", { get: async () => L0["merchant"], set: async (v) => { L0["merchant"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t21], "ADD", [$.add("CARDNUMBER            : ", (await $.wv([$t21], "cardnumber", { get: async () => L0["cardnumber"], set: async (v) => { L0["cardnumber"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t21], "ADD", [$.add("TRANSACTION DATE      : ", (await $.wv([$t21], "tr_date", { get: async () => L0["tr_date"], set: async (v) => { L0["tr_date"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t21], "ADD", [$.add("TRANSACTION TYPE      : ", (await $.wv([$t21], "tr_type", { get: async () => L0["tr_type"], set: async (v) => { L0["tr_type"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t21], "ADD", [$.add("AUTH                  : ", (await $.wv([$t21], "auth", { get: async () => L0["auth"], set: async (v) => { L0["auth"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t21], "ADD", [$.add("TRANSACTION AMOUNT    : ", (await $.wv([$t21], "tr_amount", { get: async () => L0["tr_amount"], set: async (v) => { L0["tr_amount"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t21], "ADD", [$.add("ACCOUNT AMOUNT        : ", (await $.wv([$t21], "acc_amount", { get: async () => L0["acc_amount"], set: async (v) => { L0["acc_amount"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t21], "ADD", [$.add("FEE                   : ", (await $.wv([$t21], "fee", { get: async () => L0["fee"], set: async (v) => { L0["fee"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t21], "ADD", [$.add("CLEAR AMOUNT          : ", (await $.wv([$t21], "clear_amount", { get: async () => L0["clear_amount"], set: async (v) => { L0["clear_amount"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t21], "ADD", [$.add("TERMINAL              : ", (await $.wv([$t21], "terminal", { get: async () => L0["terminal"], set: async (v) => { L0["terminal"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t21], "ADD", ["----------------------------------------------------------------"], C)));
              }
              await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t22) => { L0["f"] = $t22; }), $.ref(async () => L0["stmessage"], async ($t23) => { L0["stmessage"] = $t23; })])));
              await $.tick();
            }
          }
          await $.tick();
        }
        await $.mset((await $.v(C, "REFiles")), "SelStart", (await $.mcall((await $.v(C, "REFiles")), "FindText", ["Message count:", L0["selst"], (await $.call(C, "LENGTH", [(await $.mv((await $.v(C, "REFiles")), "Text"))])), [(await $.v(C, "stMatchCase"))]])));
        await $.mset((await $.v(C, "REFiles")), "SelLength", 18);
        await $.mset((await $.mv((await $.v(C, "REFiles")), "SelAttributes")), "Color", (await $.v(C, "clBlue")));
        await $.mset((await $.mv((await $.v(C, "REFiles")), "SelAttributes")), "Style", []);
        L0["selst"] = $.add((await $.mcall((await $.v(C, "REFiles")), "FindText", ["Message count:", L0["selst"], (await $.call(C, "LENGTH", [(await $.mv((await $.v(C, "REFiles")), "Text"))])), [(await $.v(C, "stMatchCase"))]])), 1);
        await $.mset((await $.v(C, "REFiles")), "SelLength", (-(1)));
        await $.mset((await $.v(C, "REFiles")), "SelStart", (await $.mcall((await $.v(C, "REFiles")), "FindText", ["FILE NAME", L0["selstf"], (await $.call(C, "LENGTH", [(await $.mv((await $.v(C, "REFiles")), "Text"))])), [(await $.v(C, "stMatchCase"))]])));
        await $.mset((await $.v(C, "REFiles")), "SelLength", 35);
        await $.mset((await $.mv((await $.v(C, "REFiles")), "SelAttributes")), "Color", (await $.v(C, "clred")));
        L0["selstf"] = $.add((await $.mcall((await $.v(C, "REFiles")), "FindText", ["FILE NAME", L0["selstf"], (await $.call(C, "LENGTH", [(await $.mv((await $.v(C, "REFiles")), "Text"))])), [(await $.v(C, "stMatchCase"))]])), 1);
        await $.mset((await $.v(C, "REFiles")), "SelLength", (-(1)));
        await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t24) => { L0["f"] = $t24; })])));
        await $.tick();
      }
    }
    await $.mset((await $.v(C, "REFiles")), "SelStart", 0);
  } finally {
    await $.stmt((await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "REFiles")), "Handle")), (await $.v(C, "EM_LINESCROLL")), 0, $.mul(((-(1))), ($.sub((await $.mv((await $.mv((await $.v(C, "REFiles")), "Lines")), "Count")), 1)))])));
  }
  await $.mset((await $.v(C, "FileListIntRetailFiles")), "Directory", L0["v_dir"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tintfile", "isertbtnClick", async function isertbtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "channel": '', "tr_type": '', "outwardstatus": '', "tr_currency": '', "acc_currency": '', "merchant": '', "cardnumber": '', "tr_date": '', "auth": '', "terminal": '', "tempstr": '', "tr_amount": 0, "acc_amount": 0, "fee": 0, "clear_amount": 0, "i": 0, "lcount": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["empty_intretail", []])));
  await $.mcall((await $.v(C, "ToolButton2")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tintfile", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
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
    const $t25 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t25], "SortPosition", (await $.mcall((await $.wv([$t25], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t25], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t25], "Refresh", [], C));
    } finally {
      { const $t26 = await $.iset((await $.wv([$t25], "SQL", C, false)), [(await $.wv([$t25], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t25], "EmptyStr", C, false))); if ($t26 !== undefined) { await $.wset([$t25], "SQL", $t26, C); } }
      await $.mset((await $.wv([$t25], "Screen", C, false)), "Cursor", (await $.wv([$t25], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("Tintfile", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "intfiles")), "INTFILES", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tintfile", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "excel": null, "cell": 0, "row": 0, "l": 0, "m": 0, "i": 0, "j": 0, "ids": 0, "formats": '', "debet": '', "kredit": '', "summa": '', "destination": '', "vbic": '', "output": null, "filename": '', "swmessage": '', "dir": '', "edit_ref": '', "beginmessage": '', "endmesage": '', "valu": '', "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  if ($.truthy((await $.mv((await $.v(C, "DBGrid1")), "CanFocus")))) {
    await $.mcall((await $.v(C, "DBGrid1")), "SetFocus", []);
  }
  {
    const $t27 = (await $.v(C, "DBGrid1"));
    const $t28 = (await $.wv([$t27], "SelectedRows", C, false));
    const $t29 = (await $.mv((await $.wv([$t27, $t28], "DataSource", C, false)), "DataSet"));
    const $t30 = (await $.wv([$t27, $t28, $t29], "DataMod_CARDS", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t27, $t28, $t29, $t30], "Count", C, false)), 0))) {
        await $.wset([$t27, $t28, $t29, $t30], "CurrentRowSelected", (await $.wv([$t27, $t28, $t29, $t30], "True", C, false)), C);
      }
      { const $t31 = $.sub((await $.wv([$t27, $t28, $t29, $t30], "Count", C, false)), 1);
        await $.wset([$t27, $t28, $t29, $t30], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t32 = true;
        for (;;) {
          if (!$t32) { await $.wset([$t27, $t28, $t29, $t30], "Index", $.succ((await $.wv([$t27, $t28, $t29, $t30], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t32 = false;
          if (!($.ord((await $.wv([$t27, $t28, $t29, $t30], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t31))) break;
          await $.stmt((await $.wcall([$t27, $t28, $t29, $t30], "GotoBookmark", [(await $.wcall([$t27, $t28, $t29, $t30], "Pointer", [(await $.idx((await $.wv([$t27, $t28, $t29, $t30], "Items", C, false)), [(await $.wv([$t27, $t28, $t29, $t30], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t27, $t28, $t29, $t30], "TransactionID", (await $.mv((await $.wcall([$t27, $t28, $t29, $t30], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t27, $t28, $t29, $t30], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t33 = (await $.wcall([$t27, $t28, $t29, $t30], "MessageDlg", [(await $.wcall([$t27, $t28, $t29, $t30], "Format", ["əməliyyat təsdiq edilsin? №", [(await $.wv([$t27, $t28, $t29, $t30], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)), (await $.wv([$t27, $t28, $t29, $t30], "mtConfirmation", C, false)), [(await $.wv([$t27, $t28, $t29, $t30], "mbYes", C, false)), (await $.wv([$t27, $t28, $t29, $t30], "mbNo", C, false)), (await $.wv([$t27, $t28, $t29, $t30], "mbCancel", C, false)), (await $.wv([$t27, $t28, $t29, $t30], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t33, (await $.wv([$t27, $t28, $t29, $t30], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t33, (await $.wv([$t27, $t28, $t29, $t30], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t33, (await $.wv([$t27, $t28, $t29, $t30], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t27, $t28, $t29, $t30], "MessageDlg", [(await $.wcall([$t27, $t28, $t29, $t30], "Format", ["%d  sayda əməliyyat təsdiq edilsin?", [$.sub((await $.wv([$t27, $t28, $t29, $t30], "Count", C, false)), (await $.wv([$t27, $t28, $t29, $t30], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t27, $t28, $t29, $t30], "mtConfirmation", C, false)), [(await $.wv([$t27, $t28, $t29, $t30], "mbYes", C, false)), (await $.wv([$t27, $t28, $t29, $t30], "mbCancel", C, false))], 0], C)), (await $.wv([$t27, $t28, $t29, $t30], "mrYes", C, false))))) {
                  await $.wset([$t27, $t28, $t29, $t30], "WaitNextConfirm", (await $.wv([$t27, $t28, $t29, $t30], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t27, $t28, $t29, $t30], "Application", C, false)), "ProcessMessages", []);
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t27, $t28, $t29, $t30], "DataMod_CARDS", C, false)), "mainpacket")), "CallProcedure", ["transaction_int", [(await $.wv([$t27, $t28, $t29, $t30], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]])));
          await $.wset([$t27, $t28, $t29, $t30], "WillRefresh", (await $.wv([$t27, $t28, $t29, $t30], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.tick();
        }
      }
    } finally {
      if ($.truthy((await $.wv([$t27, $t28, $t29, $t30], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.mcall((await $.mv((await $.mv((await $.wv([$t27, $t28, $t29, $t30], "DBGrid1", C, false)), "DataSource")), "DataSet")), "Refresh", []);
        await $.mcall((await $.mv((await $.mv((await $.wv([$t27, $t28, $t29, $t30], "DBGrid2", C, false)), "DataSource")), "DataSet")), "Refresh", []);
        await $.stmt((await $.wcall([$t27, $t28, $t29, $t30], "ShowMessage", ["Əməliyyatlar günün sənədlərinə göndərildi!!"], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tintfile", "DBGrid1DrawColumnCell", async function DBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t34 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t34], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t35 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t34], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t35, 1)) {
          await $.wset([$t34], "ImageIndex", 25, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t35, 2)) {
          await $.wset([$t34], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t35, 3)) {
          await $.wset([$t34], "ImageIndex", 26, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t34], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t34], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t34], "ImageList1", C, false)), "Draw", [(await $.wv([$t34], "Canvas", C, false)), (await $.mv((await $.wv([$t34], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t34], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t34], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t34], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t34], "DefaultDrawColumnCell", [(await $.wv([$t34], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t34], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t34], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t34], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("Tintfile", "selectall1Click", async function selectall1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t36 = (await $.v(C, "dbgrid1"));
    const $t37 = (await $.wv([$t36], "SelectedRows", C, false));
    const $t38 = (await $.mv((await $.wv([$t36, $t37], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t36, $t37, $t38], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t36, $t37, $t38], "First", [], C));
      while ($.truthy($.not((await $.wv([$t36, $t37, $t38], "Eof", C, false))))) {
        await $.wset([$t36, $t37, $t38], "CurrentRowSelected", (await $.wv([$t36, $t37, $t38], "True", C, false)), C);
        await $.stmt($.wcall([$t36, $t37, $t38], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t36, $t37, $t38], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tintfile", "DBGrid2TitleClick", async function DBGrid2TitleClick(Self, p0) {
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
    const $t39 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t39], "SortPosition", (await $.mcall((await $.wv([$t39], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t39], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t39], "Refresh", [], C));
    } finally {
      { const $t40 = await $.iset((await $.wv([$t39], "SQL", C, false)), [(await $.wv([$t39], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t39], "EmptyStr", C, false))); if ($t40 !== undefined) { await $.wset([$t39], "SQL", $t40, C); } }
      await $.mset((await $.wv([$t39], "Screen", C, false)), "Cursor", (await $.wv([$t39], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("Tintfile", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tintfile", "FormPaint", async function FormPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tintfile", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "channel": '', "tr_type": '', "outwardstatus": '', "tr_currency": '', "acc_currency": '', "merchant": '', "cardnumber": '', "tr_date": '', "auth": '', "tr_amount": '', "acc_amount": '', "fee": '', "clear_amount": '', "terminal": '', "syssim": '', "stmessage": '', "test": 0, "i": 0, "msgcount": 0, "file_count": 0, "rowcount": 0, "selst": 0, "selstf": 0, "f": null, "v_dir": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["v_dir"] = (await $.v(C, "GetCurrentDir"));
  try {
    if ($.truthy($.not((await $.call(C, "DirectoryExists", ["C:\\AZCARD\\IN"]))))) {
      await $.stmt((await $.call(C, "MkDir", ["C:\\AZCARD\\IN"])));
    }
    await $.mset((await $.v(C, "FileListIntRetailFiles")), "Directory", "C:\\AZCARD\\IN");
    await $.mcall((await $.v(C, "FileListIntRetailFiles")), "Update", []);
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "FileListIntRetailFiles")), "Items")), "Count")), 0))) {
      return L0.result;
    }
    await $.mset((await $.v(C, "FileListIntRetailFiles")), "Mask", "*.*");
    await $.mcall((await $.v(C, "FileListIntRetailFiles")), "Update", []);
    L0["test"] = $.fdiv(122, 10);
    if ($.truthy($.gt((await $.call(C, "pos", [".", (await $.call(C, "FloatToStr", [L0["test"]]))])), 0))) {
      L0["syssim"] = ".";
    } else {
      if ($.truthy($.gt((await $.call(C, "pos", [",", (await $.call(C, "FloatToStr", [L0["test"]]))])), 0))) {
        L0["syssim"] = ",";
      }
    }
    L0["file_count"] = 0;
    { const $t41 = $.sub((await $.mv((await $.mv((await $.v(C, "FileListIntRetailFiles")), "Items")), "Count")), 1);
      L0["i"] = 0;
      let $t42 = true;
      for (;;) {
        if (!$t42) { L0["i"] = $.succ(L0["i"], 1); }
        $t42 = false;
        if (!($.ord(L0["i"]) <= $.ord($t41))) break;
        await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
        L0["msgcount"] = 0;
        if ($.truthy(($.ne((await $.call(C, "uppercase", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "FileListIntRetailFiles")), "Items")), [L0["i"]])), 0, 6]))])), "INT_I_")))) {
          continue;
        }
        L0["file_count"] = $.add(L0["file_count"], 1);
        if ($.truthy($.eq((await $.call(C, "CheckFileExt", [$.add((await $.mv((await $.v(C, "FileListIntRetailFiles")), "Directory")), (await $.idx((await $.mv((await $.v(C, "FileListIntRetailFiles")), "items")), [L0["i"]])))])), false))) {
          continue;
        }
        await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t43) => { L0["f"] = $t43; }), $.add("C:\\AZCARD\\IN\\", (await $.idx((await $.mv((await $.v(C, "FileListIntRetailFiles")), "Items")), [L0["i"]])))])));
        await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t44) => { L0["f"] = $t44; })])));
        L0["rowcount"] = 0;
        while ($.truthy($.not((await $.call(C, "Eof", [L0["f"]]))))) {
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t45) => { L0["f"] = $t45; }), $.ref(async () => L0["stmessage"], async ($t46) => { L0["stmessage"] = $t46; })])));
          L0["rowcount"] = $.add(L0["rowcount"], 1);
          if ($.truthy(((await $.and_((await $.and_(($.gt((await $.call(C, "Length", [(await $.call(C, "Trim", [L0["stmessage"]]))])), 100)), async () => ($.ne((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 3])), "---")))), async () => ($.ne((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 8])), "Merchant"))))))) {
            L0["msgcount"] = $.add(L0["msgcount"], 1);
          }
          await $.tick();
        }
        L0["stmessage"] = "";
        await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t47) => { L0["f"] = $t47; })])));
        while ($.truthy($.not((await $.call(C, "Eof", [L0["f"]]))))) {
          await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t48) => { L0["f"] = $t48; }), $.ref(async () => L0["stmessage"], async ($t49) => { L0["stmessage"] = $t49; })])));
          if ($.truthy($.eq((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 7])), "Channel"))) {
            L0["channel"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 25, 15]))]));
            L0["tr_currency"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 63, 3]))]));
            await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t50) => { L0["f"] = $t50; }), $.ref(async () => L0["stmessage"], async ($t51) => { L0["stmessage"] = $t51; })])));
            L0["tr_type"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 25, 15]))]));
            L0["acc_currency"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 63, 3]))]));
            await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t52) => { L0["f"] = $t52; }), $.ref(async () => L0["stmessage"], async ($t53) => { L0["stmessage"] = $t53; })])));
            L0["outwardstatus"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 25, 15]))]));
          }
          if ($.truthy($.eq((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 8])), "Merchant"))) {
            await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t54) => { L0["f"] = $t54; }), $.ref(async () => L0["stmessage"], async ($t55) => { L0["stmessage"] = $t55; })])));
            await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t56) => { L0["f"] = $t56; }), $.ref(async () => L0["stmessage"], async ($t57) => { L0["stmessage"] = $t57; })])));
            while ($.truthy((await $.and_(($.ne((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 3])), "---")), async () => ($.ne((await $.call(C, "length", [(await $.call(C, "trim", [L0["stmessage"]]))])), 0)))))) {
              L0["merchant"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 23]))]));
              L0["cardnumber"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 24, 16]))]));
              L0["tr_date"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 41, 8]))]));
              L0["auth"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 50, 6]))]));
              L0["tr_amount"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 57, 14]))]));
              L0["acc_amount"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 71, 14]))]));
              L0["fee"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 85, 11]))]));
              L0["clear_amount"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 96, 14]))]));
              L0["terminal"] = (await $.call(C, "trim", [(await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 116, 8]))]));
              {
                const $t58 = (await $.mv((await $.v(C, "REFiles")), "Lines"));
                await $.stmt((await $.mcall((await $.mv((await $.wv([$t58], "DataMod_CARDS", C, false)), "mainpacket")), "CallProcedure", ["Insert_IntRetail", [(await $.wv([$t58], "channel", { get: async () => L0["channel"], set: async (v) => { L0["channel"] = v; }, local: true }, false)), (await $.wv([$t58], "tr_type", { get: async () => L0["tr_type"], set: async (v) => { L0["tr_type"] = v; }, local: true }, false)), (await $.wv([$t58], "outwardstatus", { get: async () => L0["outwardstatus"], set: async (v) => { L0["outwardstatus"] = v; }, local: true }, false)), (await $.wv([$t58], "tr_currency", { get: async () => L0["tr_currency"], set: async (v) => { L0["tr_currency"] = v; }, local: true }, false)), (await $.wv([$t58], "acc_currency", { get: async () => L0["acc_currency"], set: async (v) => { L0["acc_currency"] = v; }, local: true }, false)), (await $.wv([$t58], "merchant", { get: async () => L0["merchant"], set: async (v) => { L0["merchant"] = v; }, local: true }, false)), (await $.wv([$t58], "cardnumber", { get: async () => L0["cardnumber"], set: async (v) => { L0["cardnumber"] = v; }, local: true }, false)), (await $.wv([$t58], "tr_date", { get: async () => L0["tr_date"], set: async (v) => { L0["tr_date"] = v; }, local: true }, false)), (await $.wv([$t58], "auth", { get: async () => L0["auth"], set: async (v) => { L0["auth"] = v; }, local: true }, false)), (await $.wv([$t58], "tr_amount", { get: async () => L0["tr_amount"], set: async (v) => { L0["tr_amount"] = v; }, local: true }, false)), (await $.wv([$t58], "acc_amount", { get: async () => L0["acc_amount"], set: async (v) => { L0["acc_amount"] = v; }, local: true }, false)), (await $.wv([$t58], "fee", { get: async () => L0["fee"], set: async (v) => { L0["fee"] = v; }, local: true }, false)), (await $.wv([$t58], "clear_amount", { get: async () => L0["clear_amount"], set: async (v) => { L0["clear_amount"] = v; }, local: true }, false)), (await $.wv([$t58], "terminal", { get: async () => L0["terminal"], set: async (v) => { L0["terminal"] = v; }, local: true }, false)), (await $.idx((await $.mv((await $.wv([$t58], "FileListIntRetailFiles", C, false)), "Items")), [(await $.wv([$t58], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))]])));
              }
              await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t59) => { L0["f"] = $t59; }), $.ref(async () => L0["stmessage"], async ($t60) => { L0["stmessage"] = $t60; })])));
              await $.tick();
            }
          }
          await $.tick();
        }
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["intarxiv", [(await $.idx((await $.mv((await $.v(C, "FileListBox1")), "Items")), [L0["i"]]))]])));
        await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t61) => { L0["f"] = $t61; })])));
        await $.tick();
      }
    }
  } finally {
  }
  await $.stmt((await $.call(C, "ShowMessage", ["All messages have sent into base"])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "intfiles")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "intfiles")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "intfile2")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "intfile2")), "open", []);
  await $.mset((await $.v(C, "FileListIntRetailFiles")), "Directory", L0["v_dir"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
