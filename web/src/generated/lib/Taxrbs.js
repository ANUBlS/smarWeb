// Generated from Taxrbs.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Taxrbs", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "CMExcelExport", "ImgList", "ComCtrls", "Grids", "DBGrids", "StdCtrls", "FileCtrl", "ToolWin", "Buttons", "ExtCtrls", "Menus", "Unit18", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TRbsdoTax", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "refwithsel": {"name": "RefwithSel", "type": "TSpeedButton"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "isertbtn": {"name": "isertbtn", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "rbsdorich": {"name": "rbsdoRich", "type": "TRichEdit"}, "filelistrbsbox": {"name": "FileListrbsbox", "type": "TFileListBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "animate1": {"name": "Animate1", "type": "TAnimate"}, "richedit1": {"name": "RichEdit1", "type": "TRichEdit"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "selectall1": {"name": "selectall1", "type": "TMenuItem"}}, {});
  U.init(async () => {
    U.var_("RbsdoTax", null, "TRbsdoTax");
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
  U.method("TRbsdoTax", "DBGrid1DrawColumnCell", async function DBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
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
  U.method("TRbsdoTax", "DBGrid2DrawColumnCell", async function DBGrid2DrawColumnCell(Self, p0, p1, p2, p3, p4) {
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
  U.method("TRbsdoTax", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRbsdoTax", "isertbtnClick", async function isertbtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0, "rowcount": 0, "stmessage": '', "all": '', "names": '', "st": '', "f": null, "v_dir": '', "test": 0, "syssim": '', "rollup": '', "currency": '', "total_type": '', "total_amount": '', "isdebet": '', "report": '', "report_type": '', "funds": '', "funds_type": '', "report_code": '', "total_code": '', "funds_code": '', "proc_date": '', "report_date": '', "total_type2": '', "total_amount2": '', "isdebet2": '', "total_type3": '', "total_amount3": '', "isdebet3": '', "total_type4": '', "total_amount4": '', "isdebet4": '', "file_count": 0, "k": 0, "msgcount": 0, "selst": 0, "selstf": 0, "pst": '', "srchl": '', "trtype": '', "reqcat": '', "accamt": '', "totalamt": '', "totalfee": '', "totaltax": '', "totalsep": '', "trcnt": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Animate1")), "Visible", true);
  await $.mset((await $.v(C, "Animate1")), "Active", true);
  await $.stmt((await $.mcall((await $.v(C, "Animate1")), "Play", [0, 0, 1])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["delete_rbstaxfile", []])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "rbs_tax")), "Open", []);
  { const $t8 = $.sub((await $.mv((await $.mv((await $.v(C, "FileListrbsbox")), "Items")), "Count")), 1);
    L0["i"] = 0;
    let $t9 = true;
    for (;;) {
      if (!$t9) { L0["i"] = $.succ(L0["i"], 1); }
      $t9 = false;
      if (!($.ord(L0["i"]) <= $.ord($t8))) break;
      await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
      L0["msgcount"] = 0;
      if ($.truthy(($.ne((await $.call(C, "uppercase", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "FileListrbsbox")), "Items")), [L0["i"]])), 0, 5]))])), "RBSTR")))) {
        continue;
      }
      L0["file_count"] = $.add(L0["file_count"], 1);
      if ($.truthy($.eq((await $.call(C, "CheckFileExt", [$.add((await $.mv((await $.v(C, "FileListrbsbox")), "Directory")), (await $.idx((await $.mv((await $.v(C, "FileListrbsbox")), "items")), [L0["i"]])))])), false))) {
        continue;
      }
      await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t10) => { L0["f"] = $t10; }), $.add("C:\\AZCARD\\IN\\", (await $.idx((await $.mv((await $.v(C, "FileListrbsbox")), "Items")), [L0["i"]])))])));
      await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t11) => { L0["f"] = $t11; })])));
      L0["rowcount"] = 0;
      while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
        L0["rowcount"] = $.add(L0["rowcount"], 1);
        await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t12) => { L0["f"] = $t12; }), $.ref(async () => L0["stmessage"], async ($t13) => { L0["stmessage"] = $t13; })])));
        await $.tick();
      }
      L0["stmessage"] = "";
      await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t14) => { L0["f"] = $t14; })])));
      L0["k"] = 11;
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
          if ($.truthy(($.ne((await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 72, 18]))])), "")))) {
            if ($.truthy($.ne((await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 215, 3]))])), "---"))) {
              if ($.truthy($.ne((await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 5, 3]))])), "RBS"))) {
                if ($.truthy($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 6)])), 4, 5]))])), "Trans"))) {
                  L0["pst"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.sub(L0["j"], 3)])), 25, 50]))]));
                  L0["srchl"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.sub(L0["j"], 2)])), 25, 50]))]));
                  L0["trtype"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.sub(L0["j"], 1)])), 25, 50]))]));
                  L0["reqcat"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [L0["j"]])), 25, 50]))]));
                  L0["accamt"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 1)])), 25, 50]))]));
                  L0["totalamt"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 2)])), 25, 50]))]));
                  L0["totalfee"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 3)])), 25, 50]))]));
                  L0["totaltax"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 4)])), 25, 50]))]));
                  L0["totalsep"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 5)])), 25, 50]))]));
                  L0["trcnt"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 6)])), 25, 50]))]));
                }
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["rbsTAX_insert", [(await $.idx((await $.mv((await $.v(C, "FileListrbsbox")), "items")), [L0["i"]])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 4, 29]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 33, 22]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 52, 17]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 70, 4]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 75, 22]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 97, 4]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 101, 1]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 103, 17]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 121, 8]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 130, 25]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 155, 6]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 162, 9]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 172, 12]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 184, 25]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 209, 3]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 212, 16]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 229, 8]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 237, 19]))])), (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 252, 17]))])), L0["pst"], L0["srchl"], L0["trtype"], L0["reqcat"], L0["accamt"], L0["totalamt"], L0["totalfee"], L0["totaltax"], L0["totalsep"], L0["trcnt"]]])));
              }
            }
          }
          await $.tick();
        }
      }
      await $.mset((await $.v(C, "Animate1")), "active", false);
      await $.mset((await $.v(C, "Animate1")), "Visible", false);
      await $.mcall((await $.v(C, "Animate1")), "Stop", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["rbstaxarxiv", [(await $.idx((await $.mv((await $.v(C, "FileListrbsbox")), "Items")), [L0["i"]]))]])));
      await $.stmt((await $.call(C, "MessageDlg", ["All messages are sent in base!", (await $.v(C, "mtInformation")), [(await $.v(C, "mbOK"))], 0])));
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t19) => { L0["f"] = $t19; })])));
      await $.tick();
    }
  }
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "rbs_tax")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "rbs_tax")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRbsdoTax", "selectall1Click", async function selectall1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t20 = (await $.v(C, "dbgrid1"));
    const $t21 = (await $.wv([$t20], "SelectedRows", C, false));
    const $t22 = (await $.mv((await $.wv([$t20, $t21], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t20, $t21, $t22], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t20, $t21, $t22], "First", [], C));
      while ($.truthy($.not((await $.wv([$t20, $t21, $t22], "Eof", C, false))))) {
        await $.wset([$t20, $t21, $t22], "CurrentRowSelected", (await $.wv([$t20, $t21, $t22], "True", C, false)), C);
        await $.stmt($.wcall([$t20, $t21, $t22], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t20, $t21, $t22], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRbsdoTax", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "excel": null, "cell": 0, "row": 0, "l": 0, "m": 0, "i": 0, "j": 0, "ids": 0, "formats": '', "debet": '', "kredit": '', "summa": '', "destination": '', "vbic": '', "output": null, "filename": '', "swmessage": '', "dir": '', "edit_ref": '', "beginmessage": '', "endmesage": '', "valu": '', "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  if ($.truthy((await $.mv((await $.v(C, "DBGrid1")), "CanFocus")))) {
    await $.mcall((await $.v(C, "DBGrid1")), "SetFocus", []);
  }
  {
    const $t23 = (await $.v(C, "DBGrid1"));
    const $t24 = (await $.wv([$t23], "SelectedRows", C, false));
    const $t25 = (await $.mv((await $.wv([$t23, $t24], "DataSource", C, false)), "DataSet"));
    const $t26 = (await $.wv([$t23, $t24, $t25], "DataMod_CARDS", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t23, $t24, $t25, $t26], "Count", C, false)), 0))) {
        await $.wset([$t23, $t24, $t25, $t26], "CurrentRowSelected", (await $.wv([$t23, $t24, $t25, $t26], "True", C, false)), C);
      }
      { const $t27 = $.sub((await $.wv([$t23, $t24, $t25, $t26], "Count", C, false)), 1);
        await $.wset([$t23, $t24, $t25, $t26], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t28 = true;
        for (;;) {
          if (!$t28) { await $.wset([$t23, $t24, $t25, $t26], "Index", $.succ((await $.wv([$t23, $t24, $t25, $t26], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t28 = false;
          if (!($.ord((await $.wv([$t23, $t24, $t25, $t26], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t27))) break;
          await $.stmt((await $.wcall([$t23, $t24, $t25, $t26], "GotoBookmark", [(await $.wcall([$t23, $t24, $t25, $t26], "Pointer", [(await $.idx((await $.wv([$t23, $t24, $t25, $t26], "Items", C, false)), [(await $.wv([$t23, $t24, $t25, $t26], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t23, $t24, $t25, $t26], "TransactionID", (await $.mv((await $.wcall([$t23, $t24, $t25, $t26], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t23, $t24, $t25, $t26], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t29 = (await $.wcall([$t23, $t24, $t25, $t26], "MessageDlg", [(await $.wcall([$t23, $t24, $t25, $t26], "Format", ["Əmaliyyat təsdiq edilsin? №", [(await $.wv([$t23, $t24, $t25, $t26], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)), (await $.wv([$t23, $t24, $t25, $t26], "mtConfirmation", C, false)), [(await $.wv([$t23, $t24, $t25, $t26], "mbYes", C, false)), (await $.wv([$t23, $t24, $t25, $t26], "mbNo", C, false)), (await $.wv([$t23, $t24, $t25, $t26], "mbCancel", C, false)), (await $.wv([$t23, $t24, $t25, $t26], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t29, (await $.wv([$t23, $t24, $t25, $t26], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t29, (await $.wv([$t23, $t24, $t25, $t26], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t29, (await $.wv([$t23, $t24, $t25, $t26], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t23, $t24, $t25, $t26], "MessageDlg", [(await $.wcall([$t23, $t24, $t25, $t26], "Format", ["%d  sayda əməliyyat təsdiq edildi?", [$.sub((await $.wv([$t23, $t24, $t25, $t26], "Count", C, false)), (await $.wv([$t23, $t24, $t25, $t26], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t23, $t24, $t25, $t26], "mtConfirmation", C, false)), [(await $.wv([$t23, $t24, $t25, $t26], "mbYes", C, false)), (await $.wv([$t23, $t24, $t25, $t26], "mbCancel", C, false))], 0], C)), (await $.wv([$t23, $t24, $t25, $t26], "mrYes", C, false))))) {
                  await $.wset([$t23, $t24, $t25, $t26], "WaitNextConfirm", (await $.wv([$t23, $t24, $t25, $t26], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t23, $t24, $t25, $t26], "Application", C, false)), "ProcessMessages", []);
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t23, $t24, $t25, $t26], "DataMod_CARDS", C, false)), "mainpacket")), "CallProcedure", ["transaction_rbstax", [(await $.wv([$t23, $t24, $t25, $t26], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]])));
          await $.wset([$t23, $t24, $t25, $t26], "WillRefresh", (await $.wv([$t23, $t24, $t25, $t26], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.tick();
        }
      }
    } finally {
      if ($.truthy((await $.wv([$t23, $t24, $t25, $t26], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
        await $.mcall((await $.mv((await $.mv((await $.wv([$t23, $t24, $t25, $t26], "DBGrid1", C, false)), "DataSource")), "DataSet")), "close", []);
        await $.mcall((await $.mv((await $.mv((await $.wv([$t23, $t24, $t25, $t26], "DBGrid2", C, false)), "DataSource")), "DataSet")), "close", []);
        await $.mcall((await $.mv((await $.mv((await $.wv([$t23, $t24, $t25, $t26], "DBGrid1", C, false)), "DataSource")), "DataSet")), "open", []);
        await $.mcall((await $.mv((await $.mv((await $.wv([$t23, $t24, $t25, $t26], "DBGrid2", C, false)), "DataSource")), "DataSet")), "open", []);
        await $.stmt((await $.wcall([$t23, $t24, $t25, $t26], "ShowMessage", ["Əməliyyatlar günün sənədlərinə göndərildi!"], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRbsdoTax", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "f": null, "test": 0, "syssim": '', "stmessage": '', "rollup": '', "currency": '', "total_type": '', "total_amount": '', "isdebet": '', "report": '', "report_type": '', "funds": '', "funds_type": '', "report_code": '', "total_code": '', "funds_code": '', "proc_date": '', "report_date": '', "total_type2": '', "total_amount2": '', "isdebet2": '', "total_type3": '', "total_amount3": '', "isdebet3": '', "total_type4": '', "total_amount4": '', "isdebet4": '', "v_dir": '', "file_count": 0, "i": 0, "j": 0, "k": 0, "msgcount": 0, "rowcount": 0, "selst": 0, "selstf": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["v_dir"] = (await $.v(C, "GetCurrentDir"));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "rbs_tax")), "close", []);
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
  { const $t30 = $.sub((await $.mv((await $.mv((await $.v(C, "FileListrbsbox")), "Items")), "Count")), 1);
    L0["i"] = 0;
    let $t31 = true;
    for (;;) {
      if (!$t31) { L0["i"] = $.succ(L0["i"], 1); }
      $t31 = false;
      if (!($.ord(L0["i"]) <= $.ord($t30))) break;
      await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
      L0["msgcount"] = 0;
      if ($.truthy(($.ne((await $.call(C, "uppercase", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "FileListrbsbox")), "Items")), [L0["i"]])), 0, 5]))])), "RBSTR")))) {
        continue;
      }
      L0["file_count"] = $.add(L0["file_count"], 1);
      if ($.truthy($.eq((await $.call(C, "CheckFileExt", [$.add((await $.mv((await $.v(C, "FileListrbsbox")), "Directory")), (await $.idx((await $.mv((await $.v(C, "FileListrbsbox")), "items")), [L0["i"]])))])), false))) {
        continue;
      }
      await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t32) => { L0["f"] = $t32; }), $.add("C:\\AZCARD\\IN\\", (await $.idx((await $.mv((await $.v(C, "FileListrbsbox")), "Items")), [L0["i"]])))])));
      await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t33) => { L0["f"] = $t33; })])));
      L0["rowcount"] = 0;
      while ($.truthy($.not((await $.call(C, "eof", [L0["f"]]))))) {
        L0["rowcount"] = $.add(L0["rowcount"], 1);
        await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t34) => { L0["f"] = $t34; }), $.ref(async () => L0["stmessage"], async ($t35) => { L0["stmessage"] = $t35; })])));
        await $.tick();
      }
      L0["stmessage"] = "";
      await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t36) => { L0["f"] = $t36; })])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add($.add("FILE NAME            :< ", (await $.idx((await $.mv((await $.v(C, "FileListrbsbox")), "items")), [L0["i"]]))), " >   ")])));
      L0["k"] = 11;
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "RichEdit1")), "Lines")), "LoadFromFile", [(await $.idx((await $.mv((await $.v(C, "FileListrbsbox")), "items")), [L0["i"]]))])));
      { const $t37 = L0["rowcount"];
        L0["j"] = 1;
        let $t38 = true;
        for (;;) {
          if (!$t38) { L0["j"] = $.succ(L0["j"], 1); }
          $t38 = false;
          if (!($.ord(L0["j"]) <= $.ord($t37))) break;
          await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
          await $.stmt((await $.call(C, "Readln", [$.ref(async () => L0["f"], async ($t39) => { L0["f"] = $t39; }), $.ref(async () => L0["stmessage"], async ($t40) => { L0["stmessage"] = $t40; })])));
          if ($.truthy($.eq(L0["j"], 1))) {
            continue;
          }
          if ($.truthy(($.ne((await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 72, 18]))])), "")))) {
            if ($.truthy($.ne((await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 215, 3]))])), "---"))) {
              if ($.truthy($.ne((await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 5, 3]))])), "RBS"))) {
                if ($.truthy($.eq((await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 6)])), 4, 5]))])), "Trans"))) {
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Payment system          :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.sub(L0["j"], 3)])), 25, 50]))])))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Source channel          :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.sub(L0["j"], 2)])), 25, 50]))])))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Transaction type        :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.sub(L0["j"], 1)])), 25, 50]))])))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Request Category        :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [L0["j"]])), 25, 50]))])))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Account currency        :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 1)])), 25, 50]))])))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Total Amount            :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 2)])), 25, 50]))])))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("BTotal Fee              :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 3)])), 25, 50]))])))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Tax Fee                 :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 4)])), 25, 50]))])))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Sep. Fee                :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 5)])), 25, 50]))])))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Trans. count            :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["j"], 6)])), 25, 50]))])))])));
                }
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", ["         "])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("RbsNumber               :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 4, 29]))])))])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Account Ammount         :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 33, 22]))])))])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Fee Ammount             :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 52, 17]))])))])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("MCC codes               :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 70, 4]))])))])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Transaction Date        :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 121, 8]))])))])));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "rbsdoRich")), "Lines")), "Add", [$.add("Tax Fee                 :", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [$.add(L0["k"], L0["j"])])), 233, 19]))])))])));
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
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t41) => { L0["f"] = $t41; })])));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRbsdoTax", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "RbsTaxFile", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
