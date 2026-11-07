// Generated from ReCalculationMainForm.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ReCalculationMainForm", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "Grids", "DBGridEh", "DBSumLst", "ToolWin", "ExtCtrls", "ImgList", "DB", "ActnList", "Oracle", "OracleData", "CMExcelExport", "Menus", "DBGridEhGrouping", "GridsEh", "DBCtrls", "Buttons", "CommonDecls", "ProgressFormImpl", "FlReCalculationDataModuleImpl", "sbSystem", "FlFilterDataModuleImpl", "FilterUnitImpl", "newProgressimpl", "SendImpl", "FrmReciverImpl", "Controlimpl", "InfoImpl", "MehtemeImpl", "SettingFrmImpl", "IcraImpl"]);
  const C = [U];
  U.defClass("ESearchError", "Exception", {}, {});
  U.defClass("TPRMainForm", "TForm", {"calcgrid": {"name": "CalcGrid", "type": "TDBGridEh"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actncalculate": {"name": "ActnCalculate", "type": "TAction"}, "actnacceptcalc": {"name": "ActnAcceptCalc", "type": "TAction"}, "actnrejectcalc": {"name": "ActnRejectCalc", "type": "TAction"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "actnrefresh": {"name": "ActnRefresh", "type": "TAction"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "actnexport": {"name": "ActnExport", "type": "TAction"}, "editnumberofcredit": {"name": "EditNumberOfCredit", "type": "TEdit"}, "editname": {"name": "EditNAME", "type": "TEdit"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "actnfilter": {"name": "ActnFilter", "type": "TAction"}, "actncalcallintrest": {"name": "ActnCalcAllintrest", "type": "TAction"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "dbmemo1": {"name": "DBMemo1", "type": "TDBMemo"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "stop1": {"name": "Stop1", "type": "TMenuItem"}, "stop2": {"name": "Stop2", "type": "TMenuItem"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "crabsi1": {"name": "crabsi1", "type": "TMenuItem"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "pk1": {"name": "PK1", "type": "TMenuItem"}, "cra1": {"name": "cra1", "type": "TMenuItem"}, "sazlama1": {"name": "sazlama1", "type": "TMenuItem"}, "pkafto1": {"name": "PKAfto1", "type": "TMenuItem"}, "popupmenu3": {"name": "PopupMenu3", "type": "TPopupMenu"}, "exceleatyeni1": {"name": "Exceleatyeni1", "type": "TMenuItem"}, "exceleatkhn1": {"name": "ExceleatKhn1", "type": "TMenuItem"}}, {});
  U.init(async () => {
    U.const("LoadingFailed", true);
    U.const("DataColIndex", 0);
    U.var_("PRMainForm", null, "TPRMainForm");
    U.var_("reptype", 0, "integer");
    U.var_("mehid", 0, "integer");
    U.var_("QCrdID", 0, "integer");
  });
  U.method("TPRMainForm", "PK1Click", async function PK1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "IcraFrm"))]))))) {
    await $.set(C, "IcraFrm", (await $.mcall((await $.v(C, "TIcraFrm")), "Create", [Self])));
  }
  await $.set(C, "reptype", 0);
  await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "IcraFrm")), "XDBGrid1")), "Columns")), [2])), "Visible", false);
  await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "IcraFrm")), "XDBGrid1")), "Columns")), [3])), "Title")), "Caption", "Ə.B Yığım");
  await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "IcraFrm")), "XDBGrid1")), "Columns")), [4])), "Title")), "Caption", "Ə.B Bonus");
  await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "IcraFrm")), "XDBGrid1")), "Columns")), [5])), "Visible", true);
  await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "IcraFrm")), "XDBGrid1")), "Columns")), [6])), "Visible", true);
  await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "IcraFrm")), "XDBGrid1")), "Columns")), [7])), "Visible", true);
  await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "IcraFrm")), "XDBGrid1")), "Columns")), [5])), "Title")), "Caption", "F.B Yığım");
  await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "IcraFrm")), "XDBGrid1")), "Columns")), [6])), "Title")), "Caption", "F.B Bonus");
  await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "IcraFrm")), "XDBGrid1")), "Columns")), [7])), "Title")), "Caption", "Cəmi Bonus");
  await $.mset((await $.v(C, "IcraFrm")), "Width", 666);
  await $.mcall((await $.v(C, "IcraFrm")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "PKAfto1Click", async function PKAfto1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "IcraFrm"))]))))) {
    await $.set(C, "IcraFrm", (await $.mcall((await $.v(C, "TIcraFrm")), "Create", [Self])));
  }
  await $.set(C, "reptype", 1);
  await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "IcraFrm")), "XDBGrid1")), "Columns")), [2])), "Visible", true);
  await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "IcraFrm")), "XDBGrid1")), "Columns")), [3])), "Title")), "Caption", "Yığım");
  await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "IcraFrm")), "XDBGrid1")), "Columns")), [4])), "Title")), "Caption", "Bonus");
  await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "IcraFrm")), "XDBGrid1")), "Columns")), [5])), "Visible", false);
  await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "IcraFrm")), "XDBGrid1")), "Columns")), [6])), "Visible", false);
  await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "IcraFrm")), "XDBGrid1")), "Columns")), [7])), "Visible", false);
  await $.mset((await $.v(C, "IcraFrm")), "Width", 450);
  await $.mcall((await $.v(C, "IcraFrm")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "PrepareProgress", async function PrepareProgress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"progcnt": $.copyArg(p0), "opdesc": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["progcnt", "opdesc"]);
  {
    const $t1 = (await $.wobj(C, "NewProgressForm"));
    const $t2 = (await $.wv([$t1], "ProgressShower", C, false));
    await $.wset([$t1, $t2], "Position", 0, C);
    await $.wset([$t1, $t2], "Max", (await $.wv([$t1, $t2], "ProgCnt", { get: async () => L0["progcnt"], set: async (v) => { L0["progcnt"] = v; }, local: true }, false)), C);
    await $.wset([$t1, $t2], "Step", 1, C);
    await $.wset([$t1, $t2], "Caption", (await $.wv([$t1, $t2], "opDesc", { get: async () => L0["opdesc"], set: async (v) => { L0["opdesc"] = v; }, local: true }, false)), C);
  }
  await $.mcall((await $.v(C, "NewProgressForm")), "Show", []);
  return L0.result;
}, {"params": ["ProgCnt", "opDesc"], "kind": "procedure", "ptypes": ["Integer", "String"]});
  U.method("TPRMainForm", "ExceleatKhn1Click", async function ExceleatKhn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "PRDataModule")), "IntCache_ex")), "Active")))) {
    await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "IntCache_ex")), "Close", []);
  }
  await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "IntCache_ex")), "open", []);
  {
    const $t3 = (await $.wobj(C, "ExcelExport"));
    await $.stmt($.wcall([$t3], "Connect", [], C));
    await $.stmt((await $.wcall([$t3], "ExportDataset", [(await $.mv((await $.wv([$t3], "PRDataModule", C, false)), "IntCache_ex")), "Dosyeler", (await $.wv([$t3], "True", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "Exceleatyeni1Click", async function Exceleatyeni1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "PRDataModule")), "IntCache")), "Active")))) {
    await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "IntCache")), "Close", []);
  }
  await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "IntCache")), "open", []);
  {
    const $t4 = (await $.wobj(C, "ExcelExport"));
    await $.stmt($.wcall([$t4], "Connect", [], C));
    await $.stmt((await $.wcall([$t4], "ExportDataset", [(await $.mv((await $.wv([$t4], "PRDataModule", C, false)), "IntCache")), "Dosyeler", (await $.wv([$t4], "True", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "ExcuseMeUser", async function ExcuseMeUser(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"question": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["question"]);
  L0["result"] = $.eq((await $.call(C, "MessageDlg", [L0["question"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes")));
  return L0.result;
}, {"params": ["Question"], "kind": "function", "ptypes": ["String"]});
  U.method("TPRMainForm", "SafelyRefresh", async function SafelyRefresh(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"safely": $.copyArg(p0), result: undefined, "saveplace": null};
  await $.fixArgs(L0, ["safely"]);
  {
    const $t5 = (await $.wobj(C, "CalcGrid"));
    const $t6 = (await $.mv((await $.wv([$t5], "DataSource", C, false)), "DataSet"));
    await $.wset([$t5, $t6], "SavePlace", (await $.wv([$t5, $t6], "GetBookmark", C, false)), { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true });
    await $.stmt($.wcall([$t5, $t6], "Refresh", [], C));
    await $.mcall((await $.wv([$t5, $t6], "SelectedRows", C, false)), "Clear", []);
    if ($.truthy((await $.wv([$t5, $t6], "Safely", { get: async () => L0["safely"], set: async (v) => { L0["safely"] = v; }, local: true }, false)))) {
      await $.stmt((await $.wcall([$t5, $t6], "GotoBookmark", [(await $.wv([$t5, $t6], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Safely"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TPRMainForm", "sazlama1Click", async function sazlama1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "count": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["count"] = (await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "adm")), "CallIntegerFunction", ["getadmaddition", ["BONS"]]));
  if ($.truthy($.eq(L0["count"], 0))) {
    await $.stmt((await $.call(C, "showmessage", [$.add($.add("Sizin hüququnuz yoxdur!", "\r"), "Əlavə məlumat üçün sistem administratoruna müracət edin.")])));
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet6")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet7")), "Open", []);
  await $.mcall((await $.v(C, "SettingFrm")), "Showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "ShowInterestCalculator", async function ShowInterestCalculator(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  L0["rsloadingfailed"] = "Yükləmə vaxtı səhv baş vermişdir.......";
  await $.stmt($.call(C, "ShowModal", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "PRMainForm")), "ShowInterestCalculator", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TPRMainForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "PRDataModule")), "Free", []);
  await $.mcall((await $.v(C, "ProgressForm")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "CalcGridDblClick", async function CalcGridDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet4")), "insert", []);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet4")), "FieldByName", ["creditid"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "IntCache")), "FieldByName", ["id"])), "AsInteger")));
  await $.mcall((await $.v(C, "FrmInfo")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "CalcGridDrawColumnCell", async function CalcGridDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  {
    const $t7 = L0["sender"];
    if ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t7], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      await $.wset([$t7], "ImageIndex", (await $.mv((await $.mcall((await $.mv((await $.wv([$t7], "DataSource", C, false)), "DataSet")), "FieldByName", ["TrProcessed"])), "AsInteger")), { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
      if ($.truthy(($.eq((await $.wv([$t7], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t7], "DataColIndex", C, false)))))) {
        await $.stmt((await $.mcall((await $.wv([$t7], "ImageList1", C, false)), "Draw", [(await $.wv([$t7], "Canvas", C, false)), (await $.mv((await $.wv([$t7], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t7], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t7], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t7], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t7], "DefaultDrawColumnCell", [(await $.wv([$t7], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t7], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t7], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t7], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumnEh", "TGridDrawState"]});
  U.method("TPRMainForm", "CalcGridMouseUp", async function CalcGridMouseUp(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "IntCache")), "FieldByName", ["stop"])), "AsString")), ""))) {
    await $.mset((await $.v(C, "Stop1")), "Visible", true);
    await $.mset((await $.v(C, "Stop2")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Stop1")), "Visible", false);
    await $.mset((await $.v(C, "Stop2")), "Visible", true);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "IntCache")), "FieldByName", ["TrProcessed"])), "asinteger")), 4))) {
    await $.mset((await $.v(C, "crabsi1")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "crabsi1")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TPRMainForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "PRDataModule", (await $.mcall((await $.v(C, "TPRDataModule")), "Create", [Self])));
  await $.set(C, "FilterDataModule", (await $.mcall((await $.v(C, "TFilterDataModule")), "Create", [Self])));
  await $.set(C, "FilterMainForm", (await $.mcall((await $.v(C, "TFilterMainForm")), "Create", [Self])));
  await $.set(C, "FrmSend", (await $.mcall((await $.v(C, "TFrmSend")), "Create", [Self])));
  await $.set(C, "FrmReciver", (await $.mcall((await $.v(C, "TFrmReciver")), "Create", [Self])));
  await $.set(C, "FrmControl", (await $.mcall((await $.v(C, "TFrmControl")), "Create", [Self])));
  await $.set(C, "FrmInfo", (await $.mcall((await $.v(C, "TFrmInfo")), "Create", [Self])));
  await $.set(C, "MhFrm", (await $.mcall((await $.v(C, "TMhFrm")), "Create", [Self])));
  await $.mset((await $.v(C, "FilterMainForm")), "FFilterGrid", (await $.v(C, "CalcGrid")));
  await $.set(C, "SettingFrm", (await $.mcall((await $.v(C, "TSettingFrm")), "Create", [Self])));
  await $.set(C, "LoadingFailed", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "ActnAcceptCalcExecute", async function ActnAcceptCalcExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet2")), "Active")))) {
    await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet2")), "close", []);
  }
  await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet2")), "open", []);
  await $.mcall((await $.v(C, "FrmReciver")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "CalcGridColumnMoved", async function CalcGridColumnMoved(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "fromindex": $.copyArg(p1), "toindex": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "fromindex", "toindex"]);
  L0["findspecialrowindex"] = $.fn(async function FindSpecialRowIndex() {
  const L1 = {result: 0};
  L1["result"] = 0;
  {
    const $t8 = L0["sender"];
    while ($.truthy((await $.and_(($.lt((await $.wv([$t8], "Result", { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t8], "Columns", C, false)), "Count")))), async () => ($.ne((await $.mv((await $.idx((await $.wv([$t8], "Columns", C, false)), [(await $.wv([$t8], "Result", { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true }, false))])), "Tag")), 1)))))) {
      await $.stmt((await $.wcall([$t8], "Inc", [$.ref(async () => (await $.wv([$t8], "Result", { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true }, false)), async ($t9) => { await $.wset([$t8], "Result", $t9, { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true }); })], C)));
      await $.tick();
    }
  }
  return L1.result;
});
  await $.set(C, "DataColIndex", (await $.callv(L0["findspecialrowindex"], [])));
  return L0.result;
}, {"params": ["Sender", "FromIndex", "ToIndex"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer"]});
  U.method("TPRMainForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TPRMainForm", "ActnRefreshExecute", async function ActnRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "SafelyRefresh", [true])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "ActnAcceptCalcUpdate", async function ActnAcceptCalcUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "ActnRejectCalcUpdate", async function ActnRejectCalcUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.wobj(C, "ExcelExport"));
    await $.stmt($.wcall([$t10], "Connect", [], C));
    await $.stmt((await $.wcall([$t10], "ExportDataset", [(await $.mv((await $.wv([$t10], "PRDataModule", C, false)), "OracleDataSet4")), (await $.mv((await $.mv((await $.wv([$t10], "PRDataModule", C, false)), "IntCacheNAME")), "AsString")), (await $.wv([$t10], "True", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "CalcGridTitleBtnClick", async function CalcGridTitleBtnClick(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acol": $.copyArg(p1), "column": $.copyArg(p2), result: undefined, "sortfield": ''};
  await $.fixArgs(L0, ["sender", "acol", "column"]);
  if ($.truthy($.ne(L0["acol"], (await $.v(C, "DataColIndex"))))) {
    L0["sortfield"] = (await $.mv(L0["column"], "FieldName"));
  } else {
    L0["sortfield"] = "TRPROCESSED";
  }
  if ($.truthy($.eq((await $.mv((await $.mv(L0["column"], "Title")), "SortMarker")), (await $.v(C, "smDownEh"))))) {
    L0["sortfield"] = $.add(L0["sortfield"], " DESC");
  }
  {
    const $t11 = L0["sender"];
    const $t12 = (await $.wcall([$t11], "TOracleDataSet", [(await $.mv((await $.wv([$t11], "DataSource", C, false)), "DataSet"))], C));
    await $.stmt($.wcall([$t11, $t12], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t11, $t12], "SetVariable", ["OrderField", (await $.wv([$t11, $t12], "SortField", { get: async () => L0["sortfield"], set: async (v) => { L0["sortfield"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t11, $t12], "SafelyRefresh", [(await $.wv([$t11, $t12], "True", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender", "ACol", "Column"], "kind": "procedure", "ptypes": ["TObject", "Integer", "TColumnEh"]});
  U.method("TPRMainForm", "cra1Click", async function cra1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "IcraFrm"))]))))) {
    await $.set(C, "IcraFrm", (await $.mcall((await $.v(C, "TIcraFrm")), "Create", [Self])));
  }
  await $.set(C, "reptype", 2);
  await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "IcraFrm")), "XDBGrid1")), "Columns")), [2])), "Visible", true);
  await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "IcraFrm")), "XDBGrid1")), "Columns")), [3])), "Title")), "Caption", "Yığım");
  await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "IcraFrm")), "XDBGrid1")), "Columns")), [4])), "Title")), "Caption", "Bonus");
  await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "IcraFrm")), "XDBGrid1")), "Columns")), [5])), "Visible", false);
  await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "IcraFrm")), "XDBGrid1")), "Columns")), [6])), "Visible", false);
  await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "IcraFrm")), "XDBGrid1")), "Columns")), [7])), "Visible", false);
  await $.mset((await $.v(C, "IcraFrm")), "Width", 450);
  await $.mcall((await $.v(C, "IcraFrm")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "crabsi1Click", async function crabsi1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "count": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["count"] = (await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "adm")), "CallIntegerFunction", ["getadmaddition", ["MEH"]]));
  if ($.truthy($.eq(L0["count"], 0))) {
    await $.stmt((await $.call(C, "showmessage", [$.add($.add("Sizin hüququnuz yoxdur!", "\r"), "Əlavə məlumat üçün sistem administratoruna müracət edin.")])));
    return L0.result;
  }
  await $.set(C, "mehid", 0);
  await $.set(C, "QCrdID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "IntCache")), "FieldByName", ["id"])), "AsInteger")));
  {
    const $t13 = (await $.wobj(C, "DBGridEh1"));
    const $t14 = (await $.mv((await $.wv([$t13], "DataSource", C, false)), "DataSet"));
    await $.mset((await $.mv((await $.wv([$t13, $t14], "MhFrm", C, false)), "DBLookupComboboxEh4")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t13, $t14], "PRDataModule", C, false)), "IntCache")), "FieldByName", ["mehid"])), "AsInteger")));
    await $.mcall((await $.wv([$t13, $t14], "MhFrm", C, false)), "showmodal", []);
    if ($.truthy($.eq((await $.wv([$t13, $t14], "mehid", C, false)), 0))) {
      await $.stmt((await $.wcall([$t13, $t14], "ShowMessage", ["Məhkəməni seçməmisiz!"], C)));
      return L0.result;
    }
  }
  {
    const $t15 = (await $.mv((await $.v(C, "PRDataModule")), "OracleQuery1"));
    await $.mset((await $.wv([$t15], "sql", C, false)), "Text", $.add($.add($.add("update cm_folderplace set mehid=", (await $.wcall([$t15], "inttostr", [(await $.wv([$t15], "mehid", C, false))], C))), " where creditid="), (await $.mv((await $.mcall((await $.mv((await $.wv([$t15], "PRDataModule", C, false)), "IntCache")), "FieldByName", ["ID"])), "asstring"))));
    await $.stmt($.wcall([$t15], "Execute", [], C));
    await $.mcall((await $.wv([$t15], "Session", C, false)), "Commit", []);
    await $.stmt((await $.wcall([$t15], "SafelyRefresh", [(await $.wv([$t15], "True", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "FindNextRecord", async function FindNextRecord(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "fieldname": $.copyArg(p1), "value": $.copyArg(p2), result: false, "searchoptions": null};
  await $.fixArgs(L0, ["dataset", "fieldname", "value"]);
  L0["rsrecordrecachedeof"] = "Axtarış cərgənin sonuna çatıb .";
  L0["rscontinuefromtop"] = "Əvvəldən axtarmaqla davam etmək istəyirsiniz?";
  L0["rsrecordnotfound"] = "Yazı tapılmadı.";
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t16 = (L0["dataset"]);
    await $.wset([$t16], "Result", (await $.wcall([$t16], "SearchRecord", [(await $.wv([$t16], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false)), (await $.wv([$t16], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), $.add((await $.wv([$t16], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t16], "srFromCurrent", C, false)), (await $.wv([$t16], "srForward", C, false))])], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    if ($.truthy($.not((await $.wv([$t16], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))))) {
      if ($.truthy($.eq((await $.wcall([$t16], "MessageDlg", [$.add($.add((await $.wv([$t16], "rsRecordRecachedEOF", { get: async () => L0["rsrecordrecachedeof"], set: async (v) => { L0["rsrecordrecachedeof"] = v; }, local: true }, false)), "\n\r"), (await $.wv([$t16], "rsContinueFromTop", { get: async () => L0["rscontinuefromtop"], set: async (v) => { L0["rscontinuefromtop"] = v; }, local: true }, false))), (await $.wv([$t16], "mtInformation", C, false)), [(await $.wv([$t16], "mbNo", C, false)), (await $.wv([$t16], "mbYes", C, false))], 0], C)), (await $.wv([$t16], "mrYes", C, false))))) {
        await $.wset([$t16], "Result", (await $.wcall([$t16], "SearchRecord", [(await $.wv([$t16], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false)), (await $.wv([$t16], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), $.add((await $.wv([$t16], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t16], "srFromBeginning", C, false))])], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
        if ($.truthy($.not((await $.wv([$t16], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))))) {
          await $.stmt((await $.wcall([$t16], "MessageDlg", [(await $.wv([$t16], "rsRecordNotFound", { get: async () => L0["rsrecordnotfound"], set: async (v) => { L0["rsrecordnotfound"] = v; }, local: true }, false)), (await $.wv([$t16], "mtInformation", C, false)), [(await $.wv([$t16], "mbOk", C, false))], 0], C)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet", "FieldName", "Value"], "kind": "function", "ptypes": ["TDataSet", "String", "String"]});
  U.method("TPRMainForm", "EditNumberOfCreditKeyPress", async function EditNumberOfCreditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "fieldtosearch": '', "searchvalue": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["rsnothingtosearch"] = "Axtarılmalı olanı daxil edin";
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.mcall((await $.mv((await $.v(C, "CalcGrid")), "SelectedRows")), "Clear", []);
    L0["fieldtosearch"] = (await $.call(C, "Copy", [(await $.mv((L0["sender"]), "Name")), 5, (await $.call(C, "Length", [(await $.mv((L0["sender"]), "Name"))]))]));
    L0["searchvalue"] = (await $.mv((L0["sender"]), "Text"));
    if ($.truthy($.eq(L0["searchvalue"], ""))) {
      throw $.raise((await $.mcall((await $.v(C, "ESearchError")), "Create", [L0["rsnothingtosearch"]])));
    }
    await $.stmt((await $.call(C, "FindNextRecord", [(await $.mv((await $.mv((await $.v(C, "CalcGrid")), "DataSource")), "DataSet")), L0["fieldtosearch"], L0["searchvalue"]])));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPRMainForm", "EditNumberOfCreditExit", async function EditNumberOfCreditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "ActnFilterExecute", async function ActnFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FilterMainForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "ActnFilterUpdate", async function ActnFilterUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "LoadPayment", async function LoadPayment(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"crdid": $.copyArg(p0), result: undefined, "applicationdir": '', "pluginhandle": 0, "exportpayment": null};
  await $.fixArgs(L0, ["crdid"]);
  L0["applicationdir"] = (await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "CommonApplication")), "ExeName"))]));
  L0["pluginhandle"] = (await $.call(C, "LoadPackage", [$.add(L0["applicationdir"], "cm_payment.bpl")]));
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    L0["exportpayment"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], "ExportPayment"]));
    await $.stmt((await $.callv(L0["exportpayment"], [L0["crdid"]])));
  }
  return L0.result;
}, {"params": ["CrdID"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TPRMainForm", "LoadGirov", async function LoadGirov(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"crdid": $.copyArg(p0), result: undefined, "applicationdir": '', "pluginhandle": 0, "exportgirov": null};
  await $.fixArgs(L0, ["crdid"]);
  L0["applicationdir"] = (await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "CommonApplication")), "ExeName"))]));
  L0["pluginhandle"] = (await $.call(C, "LoadPackage", [$.add(L0["applicationdir"], "CM_Guarantee.bpl")]));
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    L0["exportgirov"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], ""]));
    await $.stmt((await $.callv(L0["exportgirov"], [L0["crdid"]])));
  }
  return L0.result;
}, {"params": ["CrdID"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TPRMainForm", "ToolButton14Click", async function ToolButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "creditid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (await $.mv((await $.v(C, "PRDataModule")), "IntCache"));
    await $.wset([$t17], "creditid", (await $.mv((await $.wcall([$t17], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true });
  }
  await $.stmt((await $.call(C, "LoadPayment", [L0["creditid"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "ToolButton15Click", async function ToolButton15Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "creditid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t18 = (await $.mv((await $.v(C, "PRDataModule")), "IntCache"));
    await $.wset([$t18], "creditid", (await $.mv((await $.wcall([$t18], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true });
  }
  await $.stmt((await $.call(C, "LoadGirov", [L0["creditid"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FrmSend")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet3")), "Active")))) {
    await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet3")), "close", []);
  }
  await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet3")), "open", []);
  await $.mcall((await $.v(C, "FrmControl")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "Stop1Click", async function Stop1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "count": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["count"] = (await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "adm")), "CallIntegerFunction", ["getadmaddition", ["STOP"]]));
  if ($.truthy($.eq(L0["count"], 0))) {
    await $.stmt((await $.call(C, "showmessage", [$.add($.add("Sizin hüququnuz yoxdur!", "\r"), "Əlavə məlumat üçün sistem administratoruna müracət edin.")])));
    return L0.result;
  }
  {
    const $t19 = (await $.mv((await $.v(C, "PRDataModule")), "OracleQuery1"));
    await $.mset((await $.wv([$t19], "sql", C, false)), "Text", $.add($.add($.add("update cm_portfolio set stop='", "*'"), " where id="), (await $.mv((await $.mcall((await $.mv((await $.wv([$t19], "PRDataModule", C, false)), "IntCache")), "FieldByName", ["ID"])), "asstring"))));
    await $.stmt($.wcall([$t19], "Execute", [], C));
    await $.mcall((await $.wv([$t19], "Session", C, false)), "Commit", []);
    await $.stmt((await $.wcall([$t19], "SafelyRefresh", [(await $.wv([$t19], "True", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPRMainForm", "Stop2Click", async function Stop2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "count": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["count"] = (await $.mcall((await $.mv((await $.v(C, "PRDataModule")), "adm")), "CallIntegerFunction", ["getadmaddition", ["STOP"]]));
  if ($.truthy($.eq(L0["count"], 0))) {
    await $.stmt((await $.call(C, "showmessage", [$.add($.add("Sizin hüququnuz yoxdur!", "\r"), "Əlavə məlumat üçün sistem administratoruna müracət edin.")])));
    return L0.result;
  }
  {
    const $t20 = (await $.mv((await $.v(C, "PRDataModule")), "OracleQuery1"));
    await $.mset((await $.wv([$t20], "sql", C, false)), "Text", $.add("update cm_portfolio set stop=null where id=", (await $.mv((await $.mcall((await $.mv((await $.wv([$t20], "PRDataModule", C, false)), "IntCache")), "FieldByName", ["ID"])), "asstring"))));
    await $.stmt($.wcall([$t20], "Execute", [], C));
    await $.mcall((await $.wv([$t20], "Session", C, false)), "Commit", []);
    await $.stmt((await $.wcall([$t20], "SafelyRefresh", [(await $.wv([$t20], "True", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "PRMainForm", (await $.mcall((await $.v(C, "TPRMainForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
