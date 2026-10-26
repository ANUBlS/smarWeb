// Generated from Unitsalary.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unitsalary", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "ComCtrls", "ToolWin", "ImgList", "CMExcelExport", "Menus", "OleServer", "ExcelXP", "oracledata", "Variants", "Unit18", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TSalary", "TForm", {"popupmenu3": {"name": "PopupMenu3", "type": "TPopupMenu"}, "excel2": {"name": "EXCEL2", "type": "TMenuItem"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "excel1": {"name": "EXCEL1", "type": "TMenuItem"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n11": {"name": "N11", "type": "TMenuItem"}, "n12": {"name": "N12", "type": "TMenuItem"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "isertbtn": {"name": "isertbtn", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "opendialogcards": {"name": "OpenDialogCards", "type": "TOpenDialog"}, "excelapplication1": {"name": "ExcelApplication1", "type": "TExcelApplication"}}, {});
  U.init(async () => {
    U.var_("Salary", null, "TSalary");
  });
  U.method("TSalary", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "salarybase")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "salarybase2")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSalary", "isertbtnClick", async function isertbtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "cell": 0, "row": 0, "i": 0, "j": 0, "t": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["c_info"] = "%d record is imported!";
  if ($.truthy((await $.mv((await $.v(C, "OpenDialogCards")), "Execute")))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "salarybase")), "Open", []);
    L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
    await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
    await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [(await $.mv((await $.v(C, "OpenDialogCards")), "FileName"))])));
    L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [1])), "Worksheets")), ["CARDS"]));
    L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "salarybase")), "First", []);
    L0["j"] = 10;
    do {
      L0["cell"] = 2;
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "salarybase")), "Insert", []);
      { const $t1 = $.sub((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "salarybase")), "FieldCount")), 4);
        L0["i"] = 0;
        let $t2 = true;
        for (;;) {
          if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
          $t2 = false;
          if (!($.ord(L0["i"]) <= $.ord($t1))) break;
          await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
          await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "salarybase")), "Fields")), [L0["i"]])), "AsString", (await $.idx((await $.mv(L0["sheet"], "cells")), [L0["j"], L0["cell"]])));
          L0["cell"] = $.add(L0["cell"], 1);
          await $.tick();
        }
      }
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "salarybase")), "Post", []);
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "salarybase")), "Next", []);
      L0["j"] = $.add(L0["j"], 1);
      await $.tick();
    } while (!$.truthy($.eq((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [L0["j"], 2])), "Text")), "")));
    L0["t"] = (await $.idx((await $.mv(L0["sheet"], "cells")), [6, 3]));
    L0["v"] = (await $.v(C, "null"));
    await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
    await $.mcall((await $.v(C, "ExcelApplication1")), "Quit", []);
    await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
    await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "salarybase")), "session")), "Commit", []);
    await $.stmt((await $.call(C, "ShowMessage", [(await $.call(C, "Format", [L0["c_info"], [$.sub(L0["j"], 10)]]))])));
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["saltr", [L0["t"]]])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "salarybase")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "salarybase2")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSalary", "DBGrid1DrawColumnCell", async function DBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
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
  U.method("TSalary", "DBGrid2DrawColumnCell", async function DBGrid2DrawColumnCell(Self, p0, p1, p2, p3, p4) {
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
  U.method("TSalary", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
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
    const $t7 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t7], "SortPosition", (await $.mcall((await $.wv([$t7], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t7], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t7], "Refresh", [], C));
    } finally {
      { const $t8 = await $.iset((await $.wv([$t7], "SQL", C, false)), [(await $.wv([$t7], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t7], "EmptyStr", C, false))); if ($t8 !== undefined) { await $.wset([$t7], "SQL", $t8, C); } }
      await $.mset((await $.wv([$t7], "Screen", C, false)), "Cursor", (await $.wv([$t7], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TSalary", "DBGrid2TitleClick", async function DBGrid2TitleClick(Self, p0) {
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
    const $t9 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t9], "SortPosition", (await $.mcall((await $.wv([$t9], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t9], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t9], "Refresh", [], C));
    } finally {
      { const $t10 = await $.iset((await $.wv([$t9], "SQL", C, false)), [(await $.wv([$t9], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t9], "EmptyStr", C, false))); if ($t10 !== undefined) { await $.wset([$t9], "SQL", $t10, C); } }
      await $.mset((await $.wv([$t9], "Screen", C, false)), "Cursor", (await $.wv([$t9], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TSalary", "N11Click", async function N11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "salarybase")), "salary", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSalary", "N12Click", async function N12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "salarybase2")), "salary", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSalary", "EXCEL1Click", async function EXCEL1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "N11")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSalary", "EXCEL2Click", async function EXCEL2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "N12")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSalary", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["delete_salary", []])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "salarybase")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "salarybase2")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSalary", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["delete_salary", []])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "salarybase")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "salarybase2")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TSalary", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSalary", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["əməliyyatları təsdiq etmək istəyirsinizmi?", (await $.v(C, "mtinformation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0])), (await $.v(C, "mryes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["transaction_salary", []])));
  }
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "salarybase")), "refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "salarybase2")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
