// Generated from card_Exchange_file.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("card_Exchange_file", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Menus", "CMExcelExport", "ImgList", "ComCtrls", "Grids", "DBGrids", "StdCtrls", "FileCtrl", "ToolWin", "Buttons", "ExtCtrls", "SBTranslateProc", "sboapiDataModuleImpl", "Unit18"]);
  const C = [U];
  U.defClass("Texchange_files", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "refwithsel": {"name": "RefwithSel", "type": "TSpeedButton"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "isertbtn": {"name": "isertbtn", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "ctinboxrich": {"name": "CTInboxRich", "type": "TRichEdit"}, "filelistbox1": {"name": "FileListBox1", "type": "TFileListBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "animate1": {"name": "Animate1", "type": "TAnimate"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "selectall1": {"name": "selectall1", "type": "TMenuItem"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}}, {});
  U.init(async () => {
    U.var_("exchange_files", null, "Texchange_files");
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
  U.method("Texchange_files", "DBGrid1DrawColumnCell", async function DBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t4 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t4], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t5 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t4], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t5, 0)) {
          await $.wset([$t4], "ImageIndex", 25, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t5, 1)) {
          await $.wset([$t4], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t5, 2)) {
          await $.wset([$t4], "ImageIndex", 26, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t5, 4)) {
          await $.wset([$t4], "ImageIndex", 13, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t4], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t4], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t4], "ImageList1", C, false)), "Draw", [(await $.wv([$t4], "Canvas", C, false)), (await $.mv((await $.wv([$t4], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t4], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t4], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t4], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t4], "DefaultDrawColumnCell", [(await $.wv([$t4], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t4], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t4], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t4], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("Texchange_files", "DBGrid2DrawColumnCell", async function DBGrid2DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t6 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t6], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t7 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t6], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t7, 0)) {
          await $.wset([$t6], "ImageIndex", 25, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t7, 1)) {
          await $.wset([$t6], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t7, 2)) {
          await $.wset([$t6], "ImageIndex", 26, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t7, 4)) {
          await $.wset([$t6], "ImageIndex", 13, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t6], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t6], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t6], "ImageList1", C, false)), "Draw", [(await $.wv([$t6], "Canvas", C, false)), (await $.mv((await $.wv([$t6], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t6], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t6], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t6], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t6], "DefaultDrawColumnCell", [(await $.wv([$t6], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t6], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t6], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t6], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("Texchange_files", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Texchange_files", "isertbtnClick", async function isertbtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0, "rowcount": 0, "stmessage": '', "all": '', "names": '', "f": null, "v_dir": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["delete_exchangefile", []])));
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
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "SQL")), "Add", ["select card_exchange_FILES.rowid,card_exchange_FILES.* from card_exchange_FILES"])));
  await $.mset((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "Active", true);
  { const $t8 = $.sub((await $.mv((await $.mv((await $.v(C, "FileListBox1")), "items")), "Count")), 1);
    L0["i"] = 0;
    let $t9 = true;
    for (;;) {
      if (!$t9) { L0["i"] = $.succ(L0["i"], 1); }
      $t9 = false;
      if (!($.ord(L0["i"]) <= $.ord($t8))) break;
      await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
      if ($.truthy((await $.and_(($.ne((await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "FileListBox1")), "items")), [L0["i"]])), 0, 1])), "E")), async () => (($.ne((await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "FileListBox1")), "items")), [L0["i"]])), 0, 1])), "e"))))))) {
        continue;
      }
      await $.mset((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI1")), "Active", false);
      await $.mcall((await $.mv((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI1")), "SQL")), "Clear", []);
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI1")), "SQL")), "Add", [$.add($.add("select * from card_exchange_FILES where filename = '", (await $.idx((await $.mv((await $.v(C, "FileListBox1")), "items")), [L0["i"]]))), "'")])));
      await $.mset((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI1")), "Active", true);
      if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI1")), "RecordCount")), 0))) {
        { const $t10 = (await $.call(C, "MessageDlg", [$.add($.add("The file \"", (await $.idx((await $.mv((await $.v(C, "FileListBox1")), "items")), [L0["i"]]))), "\" already exits, do you want replace it!? "), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0]));
          if ($.eq($t10, (await $.v(C, "mryes")))) {
            await $.mset((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI1")), "Active", false);
            await $.mcall((await $.mv((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI1")), "SQL")), "Clear", []);
            await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI1")), "SQL")), "Add", [$.add($.add("delete from card_exchange_FILES where file_name = '", (await $.idx((await $.mv((await $.v(C, "FileListBox1")), "items")), [L0["i"]]))), "'")])));
            await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI1")), "ExecSQL", []);
          }
          else if ($.eq($t10, (await $.v(C, "mrno")))) {
            continue;
          }
        }
      }
      await $.mset((await $.v(C, "Animate1")), "Visible", true);
      await $.mset((await $.v(C, "Animate1")), "Active", true);
      await $.stmt((await $.mcall((await $.v(C, "Animate1")), "Play", [0, 0, 1])));
      await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t11) => { L0["f"] = $t11; }), $.add("C:\\AZCARD\\IN\\", (await $.idx((await $.mv((await $.v(C, "FileListBox1")), "Items")), [L0["i"]])))])));
      await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t12) => { L0["f"] = $t12; })])));
      L0["rowcount"] = 0;
      while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
        L0["rowcount"] = $.add(L0["rowcount"], 1);
        await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t13) => { L0["f"] = $t13; })])));
        await $.tick();
      }
      L0["stmessage"] = "";
      await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t14) => { L0["f"] = $t14; })])));
      { const $t15 = L0["rowcount"];
        L0["j"] = 1;
        let $t16 = true;
        for (;;) {
          if (!$t16) { L0["j"] = $.succ(L0["j"], 1); }
          $t16 = false;
          if (!($.ord(L0["j"]) <= $.ord($t15))) break;
          await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t17) => { L0["f"] = $t17; }), $.ref(async () => L0["stmessage"], async ($t18) => { L0["stmessage"] = $t18; })])));
          if ($.truthy($.eq(L0["j"], 1))) {
            continue;
          }
          await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "Append", []);
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["Filename"])), "AsString", (await $.idx((await $.mv((await $.v(C, "FileListBox1")), "Items")), [L0["i"]])));
          L0["names"] = (await $.idx((await $.mv((await $.v(C, "FileListBox1")), "Items")), [L0["i"]]));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["CONTRACT_NUMBER"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 0, 20]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["DEVICE_NO"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 22, 10]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["DEVICE_NAME"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 33, 32]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["TRANS_DATE"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 65, 17]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["TRANS_AMNT"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 83, 14]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["TRANS_CURR"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 96, 4]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["RATE"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 101, 5]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["RECVD_AMNT"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 105, 21]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["RECVD_CURR"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 126, 4]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["ROUND_AMNT"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 130, 14]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["round_CURR"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 143, 4]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["rrn"])), "AsString", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 147, 14]))])));
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["status"])), "AsString", "0");
          await $.mset((await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "FieldByName", ["dat"])), "AsDateTime", (await $.v(C, "now")));
          await $.mcall((await $.mv((await $.v(C, "Datamod_cards")), "UMUMI")), "Post", []);
          await $.tick();
        }
      }
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["exchangearxiv", [(await $.idx((await $.mv((await $.v(C, "FileListBox1")), "Items")), [L0["i"]]))]])));
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t19) => { L0["f"] = $t19; })])));
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "Animate1")), "active", false);
  await $.mset((await $.v(C, "Animate1")), "Visible", false);
  await $.mcall((await $.v(C, "Animate1")), "Stop", []);
  await $.stmt((await $.call(C, "MessageDlg", ["All messages are sent in base!", (await $.v(C, "mtInformation")), [(await $.v(C, "mbOK"))], 0])));
  await $.mset((await $.v(C, "FileListBox1")), "Directory", L0["v_dir"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "atm_exchange")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "atm_exchange")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "atm_exchange2")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "atm_exchange2")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Texchange_files", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "excel": null, "cell": 0, "row": 0, "l": 0, "m": 0, "i": 0, "j": 0, "ids": 0, "formats": '', "debet": '', "kredit": '', "summa": '', "destination": '', "vbic": '', "output": null, "filename": '', "swmessage": '', "dir": '', "edit_ref": '', "beginmessage": '', "endmesage": '', "valu": '', "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  if ($.truthy((await $.mv((await $.v(C, "DBGrid1")), "CanFocus")))) {
    await $.mcall((await $.v(C, "DBGrid1")), "SetFocus", []);
  }
  {
    const $t20 = (await $.v(C, "DBGrid1"));
    const $t21 = (await $.wv([$t20], "SelectedRows", C, false));
    const $t22 = (await $.mv((await $.wv([$t20, $t21], "DataSource", C, false)), "DataSet"));
    const $t23 = (await $.wv([$t20, $t21, $t22], "DataMod_CARDS", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t20, $t21, $t22, $t23], "Count", C, false)), 0))) {
        await $.wset([$t20, $t21, $t22, $t23], "CurrentRowSelected", (await $.wv([$t20, $t21, $t22, $t23], "True", C, false)), C);
      }
      { const $t24 = $.sub((await $.wv([$t20, $t21, $t22, $t23], "Count", C, false)), 1);
        await $.wset([$t20, $t21, $t22, $t23], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t25 = true;
        for (;;) {
          if (!$t25) { await $.wset([$t20, $t21, $t22, $t23], "Index", $.succ((await $.wv([$t20, $t21, $t22, $t23], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t25 = false;
          if (!($.ord((await $.wv([$t20, $t21, $t22, $t23], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t24))) break;
          await $.stmt((await $.wcall([$t20, $t21, $t22, $t23], "GotoBookmark", [(await $.wcall([$t20, $t21, $t22, $t23], "Pointer", [(await $.idx((await $.wv([$t20, $t21, $t22, $t23], "Items", C, false)), [(await $.wv([$t20, $t21, $t22, $t23], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t20, $t21, $t22, $t23], "TransactionID", (await $.mv((await $.wcall([$t20, $t21, $t22, $t23], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t20, $t21, $t22, $t23], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t26 = (await $.wcall([$t20, $t21, $t22, $t23], "MessageDlg", [(await $.wcall([$t20, $t21, $t22, $t23], "Format", ["Əmaliyyat təsdiq edilsin? №", [(await $.wv([$t20, $t21, $t22, $t23], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)), (await $.wv([$t20, $t21, $t22, $t23], "mtConfirmation", C, false)), [(await $.wv([$t20, $t21, $t22, $t23], "mbYes", C, false)), (await $.wv([$t20, $t21, $t22, $t23], "mbNo", C, false)), (await $.wv([$t20, $t21, $t22, $t23], "mbCancel", C, false)), (await $.wv([$t20, $t21, $t22, $t23], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t26, (await $.wv([$t20, $t21, $t22, $t23], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t26, (await $.wv([$t20, $t21, $t22, $t23], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t26, (await $.wv([$t20, $t21, $t22, $t23], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t20, $t21, $t22, $t23], "MessageDlg", [(await $.wcall([$t20, $t21, $t22, $t23], "Format", ["%d  sayda əməliyyat təsdiq edildi?", [$.sub((await $.wv([$t20, $t21, $t22, $t23], "Count", C, false)), (await $.wv([$t20, $t21, $t22, $t23], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t20, $t21, $t22, $t23], "mtConfirmation", C, false)), [(await $.wv([$t20, $t21, $t22, $t23], "mbYes", C, false)), (await $.wv([$t20, $t21, $t22, $t23], "mbCancel", C, false))], 0], C)), (await $.wv([$t20, $t21, $t22, $t23], "mrYes", C, false))))) {
                  await $.wset([$t20, $t21, $t22, $t23], "WaitNextConfirm", (await $.wv([$t20, $t21, $t22, $t23], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t20, $t21, $t22, $t23], "Application", C, false)), "ProcessMessages", []);
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t20, $t21, $t22, $t23], "DataMod_CARDS", C, false)), "mainpacket")), "CallProcedure", ["transaction_exchange", [(await $.wv([$t20, $t21, $t22, $t23], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]])));
          await $.wset([$t20, $t21, $t22, $t23], "WillRefresh", (await $.wv([$t20, $t21, $t22, $t23], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.tick();
        }
      }
    } finally {
      if ($.truthy((await $.wv([$t20, $t21, $t22, $t23], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.mcall((await $.mv((await $.mv((await $.wv([$t20, $t21, $t22, $t23], "DBGrid1", C, false)), "DataSource")), "DataSet")), "Refresh", []);
        await $.mcall((await $.mv((await $.mv((await $.wv([$t20, $t21, $t22, $t23], "DBGrid2", C, false)), "DataSource")), "DataSet")), "Refresh", []);
        await $.stmt((await $.wcall([$t20, $t21, $t22, $t23], "ShowMessage", ["Əməliyyatlar günün sənədlərinə göndərildi!"], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Texchange_files", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0, "k": 0, "h": 0, "z": 0, "rowcount": 0, "selst": 0, "selstf": 0, "lengthofta": 0, "msgcount": 0, "all": '', "all1": '', "stmessage": '', "currency": '', "syssim": '', "fileext": '', "test": 0, "transummusd": 0, "amountsummusd": 0, "feeamounsummusd": 0, "transummazm": 0, "amountsummazm": 0, "feeamounsummazm": 0, "transummeur": 0, "amountsummeur": 0, "feeamounsummeur": 0, "go": false, "f": null, "v_dir": ''};
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
    { const $t27 = $.sub((await $.mv((await $.mv((await $.v(C, "FileListBox1")), "items")), "Count")), 1);
      L0["i"] = 0;
      let $t28 = true;
      for (;;) {
        if (!$t28) { L0["i"] = $.succ(L0["i"], 1); }
        $t28 = false;
        if (!($.ord(L0["i"]) <= $.ord($t27))) break;
        await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
        L0["msgcount"] = 0;
        if ($.truthy((await $.and_(($.ne((await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "FileListBox1")), "items")), [L0["i"]])), 0, 1])), "e")), async () => (($.ne((await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "FileListBox1")), "items")), [L0["i"]])), 0, 1])), "E"))))))) {
          continue;
        }
        await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t29) => { L0["f"] = $t29; }), $.add("C:\\AZCARD\\IN\\", (await $.idx((await $.mv((await $.v(C, "FileListBox1")), "Items")), [L0["i"]])))])));
        await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t30) => { L0["f"] = $t30; })])));
        L0["rowcount"] = 0;
        while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
          L0["rowcount"] = $.add(L0["rowcount"], 1);
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t31) => { L0["f"] = $t31; }), $.ref(async () => L0["stmessage"], async ($t32) => { L0["stmessage"] = $t32; })])));
          await $.tick();
        }
        L0["stmessage"] = "";
        await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t33) => { L0["f"] = $t33; })])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", [$.add($.add($.add($.add("FILE NAME                  :< ", (await $.idx((await $.mv((await $.v(C, "FileListBox1")), "items")), [L0["i"]]))), " >   "), "Message count: "), (await $.call(C, "inttostr", [L0["rowcount"]])))])));
        { const $t34 = L0["rowcount"];
          L0["j"] = 1;
          let $t35 = true;
          for (;;) {
            if (!$t35) { L0["j"] = $.succ(L0["j"], 1); }
            $t35 = false;
            if (!($.ord(L0["j"]) <= $.ord($t34))) break;
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t36) => { L0["f"] = $t36; }), $.ref(async () => L0["stmessage"], async ($t37) => { L0["stmessage"] = $t37; })])));
            if ($.truthy($.eq((await $.mv((await $.v(C, "RefwithSel")), "Down")), false))) {
              if ($.truthy($.eq(L0["j"], 1))) {
                continue;
              }
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", [$.add("CONTRACT NUMBER          :", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 0, 21]))])))])));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", [$.add("DEVICE N                 :", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 22, 11]))])))])));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", [$.add("DEVICE NAME              :", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 33, 33]))])))])));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", [$.add("TRANSACTION DATETIME     :", (await $.call(C, "trim", [(await $.call(C, "copy", [L0["stmessage"], 66, 17]))])))])));
              L0["all"] = "";
              await $.stmt((await $.call(C, "Insert", [L0["syssim"], $.ref(async () => L0["all"], async ($t38) => { L0["all"] = $t38; }), $.sub((await $.call(C, "length", [L0["all"]])), 1)])));
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
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "CTInboxRich")), "Lines")), "Add", ["---------------------------------------------------------------------------------"])));
            }
            await $.tick();
          }
        }
        await $.tick();
      }
    }
  } finally {
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Texchange_files", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "atm_exchange")), "ExchangeFiles", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
