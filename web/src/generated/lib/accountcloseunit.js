// Generated from accountcloseunit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("accountcloseunit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "ComCtrls", "ToolWin", "Menus", "CMExcelExport", "ImgList", "OleServer", "ExcelXP", "Variants", "Unit18", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("Taccountclose", "TForm", {"opendialogcards": {"name": "OpenDialogCards", "type": "TOpenDialog"}, "excelapplication1": {"name": "ExcelApplication1", "type": "TExcelApplication"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n11": {"name": "N11", "type": "TMenuItem"}, "n12": {"name": "N12", "type": "TMenuItem"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "excel1": {"name": "EXCEL1", "type": "TMenuItem"}, "popupmenu3": {"name": "PopupMenu3", "type": "TPopupMenu"}, "excel2": {"name": "EXCEL2", "type": "TMenuItem"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "isertbtn": {"name": "isertbtn", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "selectall1": {"name": "SELECTALL1", "type": "TMenuItem"}}, {});
  U.init(async () => {
    U.var_("accountclose", null, "Taccountclose");
  });
  U.method("Taccountclose", "isertbtnClick", async function isertbtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "cell": 0, "row": 0, "i": 0, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["c_info"] = "%d record is imported!";
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["accdelete", []])));
  if ($.truthy((await $.mv((await $.v(C, "OpenDialogCards")), "Execute")))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "acclose")), "Open", []);
    L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
    await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
    await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [(await $.mv((await $.v(C, "OpenDialogCards")), "FileName"))])));
    L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [1])), "Worksheets")), ["CARDS"]));
    L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "acclose")), "First", []);
    L0["j"] = 2;
    do {
      L0["cell"] = 1;
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "acclose")), "Insert", []);
      { const $t1 = $.sub((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "acclose")), "FieldCount")), 3);
        L0["i"] = 0;
        let $t2 = true;
        for (;;) {
          if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
          $t2 = false;
          if (!($.ord(L0["i"]) <= $.ord($t1))) break;
          await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
          await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "acclose")), "Fields")), [L0["i"]])), "AsString", (await $.call(C, "trim", [(await $.idx((await $.mv(L0["sheet"], "cells")), [L0["j"], L0["cell"]]))])));
          L0["cell"] = $.add(L0["cell"], 1);
          await $.tick();
        }
      }
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "acclose")), "Post", []);
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "acclose")), "Next", []);
      L0["j"] = $.add(L0["j"], 1);
      await $.tick();
    } while (!$.truthy((await $.and_(($.eq((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [L0["j"], 1])), "Text")), "")), async () => ($.eq((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [L0["j"], 2])), "Text")), ""))))));
    L0["v"] = (await $.v(C, "null"));
    await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
    await $.mcall((await $.v(C, "ExcelApplication1")), "Quit", []);
    await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
    await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "acclose")), "session")), "Commit", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["accupdate", []])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "acclose")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "acclose2")), "Refresh", []);
    await $.stmt((await $.call(C, "ShowMessage", [(await $.call(C, "Format", [L0["c_info"], [$.sub(L0["j"], 2)]]))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Taccountclose", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["acccommit", []])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "acclose")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "acclose2")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Taccountclose", "N11Click", async function N11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "acclose")), "CARDS", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Taccountclose", "N12Click", async function N12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "acclose2")), "CARDS", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Taccountclose", "EXCEL1Click", async function EXCEL1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "N11")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Taccountclose", "EXCEL2Click", async function EXCEL2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "N12")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Taccountclose", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Taccountclose", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["accdelet", []])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "acclose")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "acclose2")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Taccountclose", "DBGrid1DrawColumnCell", async function DBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t3 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t3], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t4 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t4, 1)) {
          await $.wset([$t3], "ImageIndex", 25, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t4, 2)) {
          await $.wset([$t3], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t4, 3)) {
          await $.wset([$t3], "ImageIndex", 26, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t4, 4)) {
          await $.wset([$t3], "ImageIndex", 13, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t3], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t3], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t3], "ImageList1", C, false)), "Draw", [(await $.wv([$t3], "Canvas", C, false)), (await $.mv((await $.wv([$t3], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t3], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t3], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t3], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t3], "DefaultDrawColumnCell", [(await $.wv([$t3], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t3], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t3], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t3], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("Taccountclose", "DBGrid2DrawColumnCell", async function DBGrid2DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t5 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t5], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t6 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t5], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t6, 1)) {
          await $.wset([$t5], "ImageIndex", 25, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t6, 2)) {
          await $.wset([$t5], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t6, 3)) {
          await $.wset([$t5], "ImageIndex", 26, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t6, 4)) {
          await $.wset([$t5], "ImageIndex", 13, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t5], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t5], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t5], "ImageList1", C, false)), "Draw", [(await $.wv([$t5], "Canvas", C, false)), (await $.mv((await $.wv([$t5], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t5], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t5], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t5], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t5], "DefaultDrawColumnCell", [(await $.wv([$t5], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t5], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t5], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t5], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("Taccountclose", "SELECTALL1Click", async function SELECTALL1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "dbgrid1"));
    const $t8 = (await $.wv([$t7], "SelectedRows", C, false));
    const $t9 = (await $.mv((await $.wv([$t7, $t8], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t7, $t8, $t9], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t7, $t8, $t9], "First", [], C));
      while ($.truthy($.not((await $.wv([$t7, $t8, $t9], "Eof", C, false))))) {
        await $.wset([$t7, $t8, $t9], "CurrentRowSelected", (await $.wv([$t7, $t8, $t9], "True", C, false)), C);
        await $.stmt($.wcall([$t7, $t8, $t9], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t7, $t8, $t9], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
