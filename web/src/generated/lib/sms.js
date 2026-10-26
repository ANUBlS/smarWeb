// Generated from sms.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("sms", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "ToolWin", "ImgList", "Grids", "DBGrids", "StdCtrls", "FileCtrl", "Buttons", "ExtCtrls", "CMExcelExport", "OracleData", "LDialogs", "Menus", "Unit18", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("Tsmsfile", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "refwithsel": {"name": "RefwithSel", "type": "TSpeedButton"}, "refiles": {"name": "REFiles", "type": "TRichEdit"}, "filelistbox1": {"name": "FileListBox1", "type": "TFileListBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "animate1": {"name": "Animate1", "type": "TAnimate"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "isertbtn": {"name": "isertbtn", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "filelistboxsmsfiles": {"name": "FileListBoxSmsFiles", "type": "TFileListBox"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "selectall1": {"name": "selectall1", "type": "TMenuItem"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}}, {});
  U.init(async () => {
    U.var_("smsfile", null, "Tsmsfile");
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
  U.method("Tsmsfile", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "rowcount": 0, "msgcount": 0, "sms_file_count": 0, "selst": 0, "selstf": 0, "syssim": '', "stmessage": '', "test": 0, "terminalname": '', "cardnumber": '', "terminal": '', "auth_code": '', "amount_tr": '', "trandate": '', "currency": '', "post_date": '', "amountsett": '', "f": null, "v_dir": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["v_dir"] = (await $.v(C, "GetCurrentDir"));
  try {
    await $.mcall((await $.mv((await $.v(C, "REFiles")), "Lines")), "Clear", []);
    L0["sms_file_count"] = 0;
    if ($.truthy($.not((await $.call(C, "DirectoryExists", ["C:\\AZCARD\\IN"]))))) {
      await $.stmt((await $.call(C, "MkDir", ["C:\\AZCARD\\IN"])));
    }
    await $.mset((await $.v(C, "FileListBoxSmsFiles")), "Directory", "C:\\AZCARD\\IN");
    await $.mcall((await $.v(C, "FileListBoxSmsFiles")), "Update", []);
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "FileListBoxSmsFiles")), "Items")), "Count")), 0))) {
      return L0.result;
    }
    await $.mset((await $.v(C, "FileListBoxSmsFiles")), "Mask", "*.*");
    await $.mcall((await $.v(C, "FileListBoxSmsFiles")), "Update", []);
    L0["test"] = $.fdiv(122, 10);
    if ($.truthy($.gt((await $.call(C, "pos", [".", (await $.call(C, "FloatToStr", [L0["test"]]))])), 0))) {
      L0["syssim"] = ".";
    } else {
      if ($.truthy($.gt((await $.call(C, "pos", [",", (await $.call(C, "FloatToStr", [L0["test"]]))])), 0))) {
        L0["syssim"] = ",";
      }
    }
    { const $t4 = $.sub((await $.mv((await $.mv((await $.v(C, "FileListBoxSmsFiles")), "Items")), "Count")), 1);
      L0["i"] = 0;
      let $t5 = true;
      for (;;) {
        if (!$t5) { L0["i"] = $.succ(L0["i"], 1); }
        $t5 = false;
        if (!($.ord(L0["i"]) <= $.ord($t4))) break;
        await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
        L0["msgcount"] = 0;
        if ($.truthy((await $.and_(($.ne((await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "FileListBoxSmsFiles")), "Items")), [L0["i"]])), 0, 3])), "SMS")), async () => (($.ne((await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "FileListBoxSmsFiles")), "items")), [L0["i"]])), 0, 3])), "SMS"))))))) {
          continue;
        }
        L0["sms_file_count"] = $.add(L0["sms_file_count"], 1);
        if ($.truthy($.eq((await $.call(C, "CheckFileExt", [$.add((await $.mv((await $.v(C, "FileListBoxSmsFiles")), "Directory")), (await $.idx((await $.mv((await $.v(C, "FileListBoxSmsFiles")), "items")), [L0["i"]])))])), false))) {
          continue;
        }
        await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t6) => { L0["f"] = $t6; }), $.add("C:\\AZCARD\\IN\\", (await $.idx((await $.mv((await $.v(C, "FileListBoxSmsFiles")), "Items")), [L0["i"]])))])));
        await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t7) => { L0["f"] = $t7; })])));
        L0["rowcount"] = 0;
        while ($.truthy($.not((await $.call(C, "Eof", [L0["f"]]))))) {
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t8) => { L0["f"] = $t8; }), $.ref(async () => L0["stmessage"], async ($t9) => { L0["stmessage"] = $t9; })])));
          L0["rowcount"] = $.add(L0["rowcount"], 1);
          if ($.truthy(((await $.and_((await $.and_(($.gt((await $.call(C, "Length", [(await $.call(C, "Trim", [L0["stmessage"]]))])), 100)), async () => ($.ne((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 3])), "---")))), async () => ($.ne((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 8])), "Terminal"))))))) {
            L0["msgcount"] = $.add(L0["msgcount"], 1);
          }
          await $.tick();
        }
        L0["stmessage"] = "";
        await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t10) => { L0["f"] = $t10; })])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "REFiles")), "Lines")), "Add", [$.add($.add($.add($.add("FILE NAME            :< ", (await $.idx((await $.mv((await $.v(C, "FileListBoxSmsFiles")), "Items")), [L0["i"]]))), " >   "), "Message count: "), (await $.call(C, "IntToStr", [L0["msgcount"]])))])));
        while ($.truthy($.not((await $.call(C, "Eof", [L0["f"]]))))) {
          await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t11) => { L0["f"] = $t11; }), $.ref(async () => L0["stmessage"], async ($t12) => { L0["stmessage"] = $t12; })])));
          if ($.truthy(((await $.and_((await $.and_(($.gt((await $.call(C, "Length", [(await $.call(C, "Trim", [L0["stmessage"]]))])), 100)), async () => ($.ne((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 3])), "---")))), async () => ($.ne((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 8])), "Terminal"))))))) {
            L0["terminalname"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 24]))]));
            L0["cardnumber"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 25, 18]))]));
            L0["terminal"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 47, 8]))]));
            L0["auth_code"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 57, 6]))]));
            L0["amount_tr"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 63, 15]))]));
            L0["trandate"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 78, 10]))]));
            L0["currency"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 91, 3]))]));
            L0["post_date"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 96, 9]))]));
            L0["amountsett"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 105, 15]))]));
            if ($.truthy($.ne(L0["post_date"], ""))) {
              {
                const $t13 = (await $.mv((await $.v(C, "REFiles")), "Lines"));
                await $.stmt((await $.wcall([$t13], "Add", [$.add("TERMINAL NAME        :", (await $.wv([$t13], "TerminalName", { get: async () => L0["terminalname"], set: async (v) => { L0["terminalname"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t13], "Add", [$.add("CARD NUMBER          :", (await $.wv([$t13], "CardNumber", { get: async () => L0["cardnumber"], set: async (v) => { L0["cardnumber"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t13], "Add", [$.add("TERMINAL             :", (await $.wv([$t13], "Terminal", { get: async () => L0["terminal"], set: async (v) => { L0["terminal"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t13], "Add", [$.add("AUTH CODE            :", (await $.wv([$t13], "Auth_Code", { get: async () => L0["auth_code"], set: async (v) => { L0["auth_code"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t13], "Add", [$.add("AMOUNT TRANSACTION   :", (await $.wv([$t13], "Amount_TR", { get: async () => L0["amount_tr"], set: async (v) => { L0["amount_tr"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t13], "Add", [$.add("DATE TRANSACTION     :", (await $.wv([$t13], "TranDate", { get: async () => L0["trandate"], set: async (v) => { L0["trandate"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t13], "Add", [$.add("CURRENCY             :", (await $.wv([$t13], "Currency", { get: async () => L0["currency"], set: async (v) => { L0["currency"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t13], "Add", [$.add("DATE POST            :", (await $.wv([$t13], "Post_Date", { get: async () => L0["post_date"], set: async (v) => { L0["post_date"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t13], "Add", [$.add("AMOUNT SETTLEMENT    :", (await $.wv([$t13], "AmountSett", { get: async () => L0["amountsett"], set: async (v) => { L0["amountsett"] = v; }, local: true }, false)))], C)));
                await $.stmt((await $.wcall([$t13], "Add", ["-------------------------------------------------------------------------------"], C)));
              }
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
        await $.mset((await $.v(C, "REFiles")), "SelLength", 38);
        await $.mset((await $.mv((await $.v(C, "REFiles")), "SelAttributes")), "Color", (await $.v(C, "clred")));
        L0["selstf"] = $.add((await $.mcall((await $.v(C, "REFiles")), "FindText", ["FILE NAME", L0["selstf"], (await $.call(C, "LENGTH", [(await $.mv((await $.v(C, "REFiles")), "Text"))])), [(await $.v(C, "stMatchCase"))]])), 1);
        await $.mset((await $.v(C, "REFiles")), "SelLength", (-(1)));
        await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t14) => { L0["f"] = $t14; })])));
        await $.tick();
      }
    }
    await $.mset((await $.v(C, "REFiles")), "SelStart", 0);
  } finally {
    await $.stmt((await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "REFiles")), "Handle")), (await $.v(C, "EM_LINESCROLL")), 0, $.mul(((-(1))), ($.sub((await $.mv((await $.mv((await $.v(C, "REFiles")), "Lines")), "Count")), 1)))])));
  }
  await $.mset((await $.v(C, "FileListBoxSmsFiles")), "Directory", L0["v_dir"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
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
  U.method("Tsmsfile", "isertbtnClick", async function isertbtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "linescount": 0, "tempint": 0, "terminalname": '', "cardnumber": '', "terminal": '', "auth_code": '', "currency": '', "tempstr": '', "trandate": 0, "post_date": 0, "amount_tr": 0, "amountsett": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["empty_sms_messages", []])));
  await $.mcall((await $.v(C, "ToolButton2")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsmsfile", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "smsfiles")), "SMSFILES", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsmsfile", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
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
    const $t15 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t15], "SortPosition", (await $.mcall((await $.wv([$t15], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t15], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t15], "Refresh", [], C));
    } finally {
      { const $t16 = await $.iset((await $.wv([$t15], "SQL", C, false)), [(await $.wv([$t15], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t15], "EmptyStr", C, false))); if ($t16 !== undefined) { await $.wset([$t15], "SQL", $t16, C); } }
      await $.mset((await $.wv([$t15], "Screen", C, false)), "Cursor", (await $.wv([$t15], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("Tsmsfile", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "excel": null, "cell": 0, "row": 0, "l": 0, "m": 0, "i": 0, "j": 0, "ids": 0, "formats": '', "debet": '', "kredit": '', "summa": '', "destination": '', "vbic": '', "output": null, "filename": '', "swmessage": '', "dir": '', "edit_ref": '', "beginmessage": '', "endmesage": '', "valu": '', "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  if ($.truthy((await $.mv((await $.v(C, "DBGrid1")), "CanFocus")))) {
    await $.mcall((await $.v(C, "DBGrid1")), "SetFocus", []);
  }
  {
    const $t17 = (await $.v(C, "DBGrid1"));
    const $t18 = (await $.wv([$t17], "SelectedRows", C, false));
    const $t19 = (await $.mv((await $.wv([$t17, $t18], "DataSource", C, false)), "DataSet"));
    const $t20 = (await $.wv([$t17, $t18, $t19], "DataMod_CARDS", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t17, $t18, $t19, $t20], "Count", C, false)), 0))) {
        await $.wset([$t17, $t18, $t19, $t20], "CurrentRowSelected", (await $.wv([$t17, $t18, $t19, $t20], "True", C, false)), C);
      }
      { const $t21 = $.sub((await $.wv([$t17, $t18, $t19, $t20], "Count", C, false)), 1);
        await $.wset([$t17, $t18, $t19, $t20], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t22 = true;
        for (;;) {
          if (!$t22) { await $.wset([$t17, $t18, $t19, $t20], "Index", $.succ((await $.wv([$t17, $t18, $t19, $t20], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t22 = false;
          if (!($.ord((await $.wv([$t17, $t18, $t19, $t20], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t21))) break;
          await $.stmt((await $.wcall([$t17, $t18, $t19, $t20], "GotoBookmark", [(await $.wcall([$t17, $t18, $t19, $t20], "Pointer", [(await $.idx((await $.wv([$t17, $t18, $t19, $t20], "Items", C, false)), [(await $.wv([$t17, $t18, $t19, $t20], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t17, $t18, $t19, $t20], "TransactionID", (await $.mv((await $.wcall([$t17, $t18, $t19, $t20], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t17, $t18, $t19, $t20], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t23 = (await $.wcall([$t17, $t18, $t19, $t20], "MessageDlg", [(await $.wcall([$t17, $t18, $t19, $t20], "Format", ["əməliyyat təsdiq edilsin? №", [(await $.wv([$t17, $t18, $t19, $t20], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)), (await $.wv([$t17, $t18, $t19, $t20], "mtConfirmation", C, false)), [(await $.wv([$t17, $t18, $t19, $t20], "mbYes", C, false)), (await $.wv([$t17, $t18, $t19, $t20], "mbNo", C, false)), (await $.wv([$t17, $t18, $t19, $t20], "mbCancel", C, false)), (await $.wv([$t17, $t18, $t19, $t20], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t23, (await $.wv([$t17, $t18, $t19, $t20], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t23, (await $.wv([$t17, $t18, $t19, $t20], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t23, (await $.wv([$t17, $t18, $t19, $t20], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t17, $t18, $t19, $t20], "MessageDlg", [(await $.wcall([$t17, $t18, $t19, $t20], "Format", ["%d  sayda əməliyyat təsdiq edilsin?", [$.sub((await $.wv([$t17, $t18, $t19, $t20], "Count", C, false)), (await $.wv([$t17, $t18, $t19, $t20], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t17, $t18, $t19, $t20], "mtConfirmation", C, false)), [(await $.wv([$t17, $t18, $t19, $t20], "mbYes", C, false)), (await $.wv([$t17, $t18, $t19, $t20], "mbCancel", C, false))], 0], C)), (await $.wv([$t17, $t18, $t19, $t20], "mrYes", C, false))))) {
                  await $.wset([$t17, $t18, $t19, $t20], "WaitNextConfirm", (await $.wv([$t17, $t18, $t19, $t20], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t17, $t18, $t19, $t20], "Application", C, false)), "ProcessMessages", []);
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t17, $t18, $t19, $t20], "DataMod_CARDS", C, false)), "mainpacket")), "CallProcedure", ["transaction_sms", [(await $.wv([$t17, $t18, $t19, $t20], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]])));
          await $.mcall((await $.mv((await $.wv([$t17, $t18, $t19, $t20], "DataMod_CARDS", C, false)), "smsfiles2")), "Close", []);
          await $.mcall((await $.mv((await $.wv([$t17, $t18, $t19, $t20], "DataMod_CARDS", C, false)), "smsfiles2")), "Open", []);
          await $.wset([$t17, $t18, $t19, $t20], "WillRefresh", (await $.wv([$t17, $t18, $t19, $t20], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.tick();
        }
      }
    } finally {
      if ($.truthy((await $.wv([$t17, $t18, $t19, $t20], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.mcall((await $.mv((await $.mv((await $.wv([$t17, $t18, $t19, $t20], "DBGrid1", C, false)), "DataSource")), "DataSet")), "Refresh", []);
        await $.stmt((await $.wcall([$t17, $t18, $t19, $t20], "ShowMessage", ["Əməliyyatlar günün sənədlərinə göndərildi!"], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsmsfile", "DBGrid1DrawColumnCell", async function DBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t24 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t24], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t25 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t24], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t25, 1)) {
          await $.wset([$t24], "ImageIndex", 25, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t25, 2)) {
          await $.wset([$t24], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t25, 3)) {
          await $.wset([$t24], "ImageIndex", 26, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t24], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t24], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t24], "ImageList1", C, false)), "Draw", [(await $.wv([$t24], "Canvas", C, false)), (await $.mv((await $.wv([$t24], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t24], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t24], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t24], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t24], "DefaultDrawColumnCell", [(await $.wv([$t24], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t24], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t24], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t24], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("Tsmsfile", "selectall1Click", async function selectall1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t26 = (await $.v(C, "dbgrid1"));
    const $t27 = (await $.wv([$t26], "SelectedRows", C, false));
    const $t28 = (await $.mv((await $.wv([$t26, $t27], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t26, $t27, $t28], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t26, $t27, $t28], "First", [], C));
      while ($.truthy($.not((await $.wv([$t26, $t27, $t28], "Eof", C, false))))) {
        await $.wset([$t26, $t27, $t28], "CurrentRowSelected", (await $.wv([$t26, $t27, $t28], "True", C, false)), C);
        await $.stmt($.wcall([$t26, $t27, $t28], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t26, $t27, $t28], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsmsfile", "DBGrid3TitleClick", async function DBGrid3TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": '', "sortposition": 0};
  await $.fixArgs(L0, ["column"]);
  L0["sortposition"] = 100;
  if ($.truthy((await $.or_(((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGrid3")), "DataSource")), "DataSet")), "IsEmpty"))), async () => ($.eq((await $.mv(L0["column"], "FieldName")), (await $.v(C, "EmptyStr")))))))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t29 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid3")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t29], "SortPosition", (await $.mcall((await $.wv([$t29], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t29], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t29], "Refresh", [], C));
    } finally {
      { const $t30 = await $.iset((await $.wv([$t29], "SQL", C, false)), [(await $.wv([$t29], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t29], "EmptyStr", C, false))); if ($t30 !== undefined) { await $.wset([$t29], "SQL", $t30, C); } }
      await $.mset((await $.wv([$t29], "Screen", C, false)), "Cursor", (await $.wv([$t29], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("Tsmsfile", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsmsfile", "FormPaint", async function FormPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tsmsfile", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "rowcount": 0, "msgcount": 0, "sms_file_count": 0, "selst": 0, "selstf": 0, "syssim": '', "stmessage": '', "test": 0, "terminalname": '', "cardnumber": '', "terminal": '', "auth_code": '', "amount_tr": '', "trandate": '', "currency": '', "post_date": '', "amountsett": '', "f": null, "v_dir": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["empty_sms_messages", []])));
  L0["v_dir"] = (await $.v(C, "GetCurrentDir"));
  try {
    L0["sms_file_count"] = 0;
    if ($.truthy($.not((await $.call(C, "DirectoryExists", ["C:\\AZCARD\\IN"]))))) {
      await $.stmt((await $.call(C, "MkDir", ["C:\\AZCARD\\IN"])));
    }
    await $.mset((await $.v(C, "FileListBoxSmsFiles")), "Directory", "C:\\AZCARD\\IN");
    await $.mcall((await $.v(C, "FileListBoxSmsFiles")), "Update", []);
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "FileListBoxSmsFiles")), "Items")), "Count")), 0))) {
      return L0.result;
    }
    await $.mset((await $.v(C, "FileListBoxSmsFiles")), "Mask", "*.*");
    await $.mcall((await $.v(C, "FileListBoxSmsFiles")), "Update", []);
    L0["test"] = $.fdiv(122, 10);
    if ($.truthy($.gt((await $.call(C, "pos", [".", (await $.call(C, "FloatToStr", [L0["test"]]))])), 0))) {
      L0["syssim"] = ".";
    } else {
      if ($.truthy($.gt((await $.call(C, "pos", [",", (await $.call(C, "FloatToStr", [L0["test"]]))])), 0))) {
        L0["syssim"] = ",";
      }
    }
    { const $t31 = $.sub((await $.mv((await $.mv((await $.v(C, "FileListBoxSmsFiles")), "Items")), "Count")), 1);
      L0["i"] = 0;
      let $t32 = true;
      for (;;) {
        if (!$t32) { L0["i"] = $.succ(L0["i"], 1); }
        $t32 = false;
        if (!($.ord(L0["i"]) <= $.ord($t31))) break;
        await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
        L0["msgcount"] = 0;
        if ($.truthy((await $.and_(($.ne((await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "FileListBoxSmsFiles")), "Items")), [L0["i"]])), 0, 3])), "SMS")), async () => (($.ne((await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "FileListBoxSmsFiles")), "items")), [L0["i"]])), 0, 3])), "SMS"))))))) {
          continue;
        }
        L0["sms_file_count"] = $.add(L0["sms_file_count"], 1);
        if ($.truthy($.eq((await $.call(C, "CheckFileExt", [$.add((await $.mv((await $.v(C, "FileListBoxSmsFiles")), "Directory")), (await $.idx((await $.mv((await $.v(C, "FileListBoxSmsFiles")), "items")), [L0["i"]])))])), false))) {
          continue;
        }
        await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t33) => { L0["f"] = $t33; }), $.add("C:\\AZCARD\\IN\\", (await $.idx((await $.mv((await $.v(C, "FileListBoxSmsFiles")), "Items")), [L0["i"]])))])));
        await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t34) => { L0["f"] = $t34; })])));
        L0["rowcount"] = 0;
        while ($.truthy($.not((await $.call(C, "Eof", [L0["f"]]))))) {
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t35) => { L0["f"] = $t35; }), $.ref(async () => L0["stmessage"], async ($t36) => { L0["stmessage"] = $t36; })])));
          L0["rowcount"] = $.add(L0["rowcount"], 1);
          if ($.truthy(((await $.and_((await $.and_(($.gt((await $.call(C, "Length", [(await $.call(C, "Trim", [L0["stmessage"]]))])), 100)), async () => ($.ne((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 3])), "---")))), async () => ($.ne((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 8])), "Terminal"))))))) {
            L0["msgcount"] = $.add(L0["msgcount"], 1);
          }
          await $.tick();
        }
        L0["stmessage"] = "";
        await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t37) => { L0["f"] = $t37; })])));
        while ($.truthy($.not((await $.call(C, "Eof", [L0["f"]]))))) {
          await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t38) => { L0["f"] = $t38; }), $.ref(async () => L0["stmessage"], async ($t39) => { L0["stmessage"] = $t39; })])));
          if ($.truthy(((await $.and_((await $.and_(($.gt((await $.call(C, "Length", [(await $.call(C, "Trim", [L0["stmessage"]]))])), 100)), async () => ($.ne((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 3])), "---")))), async () => ($.ne((await $.call(C, "Copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 8])), "Terminal"))))))) {
            L0["terminalname"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 1, 24]))]));
            L0["cardnumber"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 25, 18]))]));
            L0["terminal"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 47, 8]))]));
            L0["auth_code"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 57, 6]))]));
            L0["amount_tr"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 63, 15]))]));
            L0["trandate"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 78, 10]))]));
            L0["currency"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 91, 3]))]));
            L0["post_date"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 96, 9]))]));
            L0["amountsett"] = (await $.call(C, "Trim", [(await $.call(C, "copy", [(await $.call(C, "trim", [L0["stmessage"]])), 105, 15]))]));
            if ($.truthy($.ne(L0["post_date"], ""))) {
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["Insert_SMS_Messages", [L0["terminalname"], L0["cardnumber"], L0["terminal"], L0["auth_code"], L0["amount_tr"], L0["trandate"], L0["currency"], L0["post_date"], L0["amountsett"], (await $.idx((await $.mv((await $.v(C, "FileListBoxSmsFiles")), "Items")), [L0["i"]]))]])));
            }
          }
          await $.tick();
        }
        await $.tick();
      }
    }
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["smsarxiv", [(await $.idx((await $.mv((await $.v(C, "FileListBox1")), "Items")), [L0["i"]]))]])));
    await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t40) => { L0["f"] = $t40; })])));
  } finally {
  }
  await $.mset((await $.v(C, "FileListBoxSmsFiles")), "Directory", L0["v_dir"]);
  await $.stmt((await $.call(C, "ShowMessage", ["All messages have sent into base"])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "smsfiles")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "smsfiles")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "smsfiles2")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "smsfiles2")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
