// Generated from EXCELNEWCARD.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("EXCELNEWCARD", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "ComCtrls", "ToolWin", "Menus", "OleServer", "ExcelXP", "CMExcelExport", "ImgList", "OracleData", "StdCtrls", "Variants", "Unit18", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TNEWCARDEX", "TForm", {"imagelist1": {"name": "ImageList1", "type": "TImageList"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "opendialogcards": {"name": "OpenDialogCards", "type": "TOpenDialog"}, "excelapplication1": {"name": "ExcelApplication1", "type": "TExcelApplication"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n11": {"name": "N11", "type": "TMenuItem"}, "n12": {"name": "N12", "type": "TMenuItem"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "excel1": {"name": "EXCEL1", "type": "TMenuItem"}, "popupmenu3": {"name": "PopupMenu3", "type": "TPopupMenu"}, "excel2": {"name": "EXCEL2", "type": "TMenuItem"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "isertbtn": {"name": "isertbtn", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}}, {});
  U.init(async () => {
    U.var_("NEWCARDEX", null, "TNEWCARDEX");
  });
  U.method("TNEWCARDEX", "isertbtnClick", async function isertbtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "cell": 0, "row": 0, "i": 0, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["c_info"] = "%d record is imported!";
  if ($.truthy($.gt((await $.mv((await $.v(C, "DateTimePicker1")), "DateTime")), (await $.v(C, "DATE"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["newdelet", []])));
    if ($.truthy((await $.mv((await $.v(C, "OpenDialogCards")), "Execute")))) {
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "YENICARD")), "Open", []);
      L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
      await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
      await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [(await $.mv((await $.v(C, "OpenDialogCards")), "FileName"))])));
      L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [1])), "Worksheets")), ["CARDS"]));
      L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "YENICARD")), "First", []);
      L0["j"] = 2;
      do {
        L0["cell"] = 2;
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "YENICARD")), "Insert", []);
        { const $t1 = $.sub((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "YENICARD")), "FieldCount")), 3);
          L0["i"] = 0;
          let $t2 = true;
          for (;;) {
            if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
            $t2 = false;
            if (!($.ord(L0["i"]) <= $.ord($t1))) break;
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "YENICARD")), "Fields")), [L0["i"]])), "AsString", (await $.call(C, "trim", [(await $.idx((await $.mv(L0["sheet"], "cells")), [L0["j"], L0["cell"]]))])));
            L0["cell"] = $.add(L0["cell"], 1);
            await $.tick();
          }
        }
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "YENICARD")), "Post", []);
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "YENICARD")), "Next", []);
        L0["j"] = $.add(L0["j"], 1);
        await $.tick();
      } while (!$.truthy($.eq((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [L0["j"], 2])), "Text")), "")));
      L0["v"] = (await $.v(C, "null"));
      await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
      await $.mcall((await $.v(C, "ExcelApplication1")), "Quit", []);
      await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
      await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
      await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "YENICARD")), "session")), "Commit", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["newupdate", []])));
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "YENICARD")), "Refresh", []);
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "YENICARD1")), "Refresh", []);
      await $.stmt((await $.call(C, "ShowMessage", [(await $.call(C, "Format", [L0["c_info"], [$.sub(L0["j"], 2)]]))])));
    }
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["updatedate", [(await $.mv((await $.v(C, "datetimepicker1")), "datetime"))]])));
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Tarixi düz seçin!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNEWCARDEX", "DBGrid1DrawColumnCell", async function DBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
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
  U.method("TNEWCARDEX", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
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
    const $t5 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet"))]));
    try {
      await $.wset([$t5], "SortPosition", (await $.mcall((await $.wv([$t5], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t5], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t5], "Refresh", [], C));
    } finally {
      { const $t6 = await $.iset((await $.wv([$t5], "SQL", C, false)), [(await $.wv([$t5], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t5], "EmptyStr", C, false))); if ($t6 !== undefined) { await $.wset([$t5], "SQL", $t6, C); } }
      await $.mset((await $.wv([$t5], "Screen", C, false)), "Cursor", (await $.wv([$t5], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TNEWCARDEX", "DBGrid2DrawColumnCell", async function DBGrid2DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t7 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t7], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t8 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t7], "DataSource", C, false)), "DataSet")), "FieldByName", ["STATUS"])), "AsInteger"));
        if ($.eq($t8, 1)) {
          await $.wset([$t7], "ImageIndex", 25, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t8, 2)) {
          await $.wset([$t7], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t8, 3)) {
          await $.wset([$t7], "ImageIndex", 26, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t8, 4)) {
          await $.wset([$t7], "ImageIndex", 13, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t7], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t7], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t7], "ImageList1", C, false)), "Draw", [(await $.wv([$t7], "Canvas", C, false)), (await $.mv((await $.wv([$t7], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t7], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t7], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t7], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t7], "DefaultDrawColumnCell", [(await $.wv([$t7], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t7], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t7], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t7], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TNEWCARDEX", "DBGrid2TitleClick", async function DBGrid2TitleClick(Self, p0) {
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
  U.method("TNEWCARDEX", "N11Click", async function N11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "YENICARD")), "YENICARD", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNEWCARDEX", "N12Click", async function N12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "CMExcelExport1")), "Connected"))))) {
    await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.mv((await $.v(C, "DataMod_CARDS")), "YENICARD1")), "YENICARD", true])));
  await $.mcall((await $.v(C, "CMExcelExport1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNEWCARDEX", "EXCEL1Click", async function EXCEL1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "N11")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNEWCARDEX", "EXCEL2Click", async function EXCEL2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "N12")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNEWCARDEX", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["newdelet", []])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "YENICARD")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "YENICARD1")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNEWCARDEX", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["newcommit", []])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "YENICARD")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "YENICARD1")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNEWCARDEX", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "YENICARD")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "YENICARD1")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNEWCARDEX", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNEWCARDEX", "N11DrawItem", async function N11DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t11 = L0["acanvas"];
    const $t12 = (await $.wv([$t11], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t13 = (await $.mv((await $.wv([$t11, $t12], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Font"));
      await $.wset([$t11, $t12, $t13], "Charset", (await $.wv([$t11, $t12, $t13], "DEFAULT_CHARSET", C, false)), C);
      await $.wset([$t11, $t12, $t13], "Name", "Azl Sans Serif", C);
      if ($.truthy((await $.wv([$t11, $t12, $t13], "Default", C, false)))) {
        await $.wset([$t11, $t12, $t13], "Style", [(await $.wv([$t11, $t12, $t13], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t11, $t12], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t11, $t12], "Pen", C, false)), "Color", (await $.wv([$t11, $t12], "clBlack", C, false)));
      await $.wset([$t11, $t12], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t11, $t12], "MoveTo", [(await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t11, $t12], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t11, $t12], "LineTo", [(await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t11, $t12], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t11, $t12], "inc", [$.ref(async () => (await $.wv([$t11, $t12], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t14) => { await $.wset([$t11, $t12], "LineBottom", $t14, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t11, $t12], "Pen", C, false)), "Color", (await $.wv([$t11, $t12], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t11, $t12], "MoveTo", [(await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t11, $t12], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t11, $t12], "LineTo", [(await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t11, $t12], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t11, $t12], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t11, $t12], "Brush", C, false)), "Color", (await $.wv([$t11, $t12], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t11, $t12], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t11, $t12], "Font", C, false)), "Color", (await $.wv([$t11, $t12], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t11, $t12], "Font", C, false)), "Color", (await $.wv([$t11, $t12], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t11, $t12], "Brush", C, false)), "Color", (await $.wv([$t11, $t12], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t11, $t12], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t11, $t12], "Font", C, false)), "Color", (await $.wv([$t11, $t12], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t11, $t12], "Font", C, false)), "Color", (await $.wv([$t11, $t12], "clGrayText", C, false)));
        }
      }
      await $.wset([$t11, $t12], "Bar", (await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t11, $t12], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t15) => { await $.mset((await $.wv([$t11, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t15); }), 22], C)));
      await $.stmt((await $.wcall([$t11, $t12], "FillRect", [(await $.wv([$t11, $t12], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t11, $t12], "TextOut", [$.add((await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t11, $t12], "Caption", C, false))], C)));
    }
    await $.wset([$t11, $t12], "SText", (await $.wcall([$t11, $t12], "ShortCutToText", [(await $.wv([$t11, $t12], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t11, $t12], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t11, $t12], "TextWidth", [(await $.wv([$t11, $t12], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 7), $.add((await $.mv((await $.wv([$t11, $t12], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t11, $t12], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t11, $t12], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t16 = (await $.wv([$t11, $t12], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t11, $t12, $t16], "Assigned", [(await $.wv([$t11, $t12, $t16], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t11, $t12, $t16], "Checked", C, false)))) {
            await $.mset((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t11, $t12, $t16], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t11, $t12, $t16], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t11, $t12, $t16], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t11, $t12, $t16], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t11, $t12, $t16], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t11, $t12, $t16], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t17) => { await $.mset((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t17); }), 2], C)));
            await $.stmt((await $.wcall([$t11, $t12, $t16], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t18) => { await $.mset((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t18); }), 2], C)));
            await $.stmt((await $.wcall([$t11, $t12, $t16], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t19) => { await $.mset((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t19); }), 2], C)));
            await $.stmt((await $.wcall([$t11, $t12, $t16], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t20) => { await $.mset((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t20); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t11, $t12, $t16], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t11, $t12, $t16], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t11, $t12, $t16], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t11, $t12, $t16], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t21) => { await $.mset((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t21); }), 1], C)));
            await $.stmt((await $.wcall([$t11, $t12, $t16], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t22) => { await $.mset((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t22); }), 1], C)));
            await $.stmt((await $.wcall([$t11, $t12, $t16], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t23) => { await $.mset((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t23); }), 1], C)));
            await $.stmt((await $.wcall([$t11, $t12, $t16], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t24) => { await $.mset((await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t24); }), 1], C)));
            if ($.truthy((await $.wv([$t11, $t12, $t16], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t11, $t12, $t16], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t11, $t12, $t16], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t11, $t12, $t16], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t11, $t12, $t16], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t11, $t12, $t16], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t11, $t12, $t16], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t11, $t12, $t16], "Images", C, false)), "Draw", [(await $.wv([$t11, $t12, $t16], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t11, $t12, $t16], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t11, $t12, $t16], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t11, $t12, $t16], "ImageIndex", C, false)), (await $.wv([$t11, $t12, $t16], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TNEWCARDEX", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.v(C, "DATE")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
