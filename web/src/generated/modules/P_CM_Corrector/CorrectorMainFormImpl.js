// Generated from CorrectorMainFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CorrectorMainFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "Mask", "DBCtrlsEh", "Grids", "DBGrids", "DBGridEh", "ActnList", "DB", "oracle", "oracledata", "DBGridEhGrouping", "GridsEh", "CommonDecls", "CorrectorDataModule"]);
  const C = [U];
  U.defClass("TCorrectorMainForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "editnum": {"name": "Editnum", "type": "TEdit"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnok": {"name": "ActnOK", "type": "TAction"}, "actnnook": {"name": "ACTNnook", "type": "TAction"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "actnsearch": {"name": "ActnSearch", "type": "TAction"}}, {});
  U.init(async () => {
    U.var_("CorrectorMainForm", null, "TCorrectorMainForm");
  });
  U.method("TCorrectorMainForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCorrectorMainForm", "ShowCorrectForm", async function ShowCorrectForm(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.wobj(C, "CorrectorDataMod"));
    await $.stmt((await $.mcall((await $.wv([$t1], "CorrectData", C, false)), "SetVariable", ["OrderField", "num"])));
    await $.mcall((await $.wv([$t1], "CorrectData", C, false)), "Open", []);
  }
  await $.stmt($.call(C, "ShowModal", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCorrectorMainForm", "RefreshDS", async function RefreshDS(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "savepoint": null};
  {
    const $t2 = (await $.mv((await $.v(C, "CorrectorDataMod")), "CorrectData"));
    await $.wset([$t2], "SavePoint", (await $.wv([$t2], "GetBookmark", C, false)), { get: async () => L0["savepoint"], set: async (v) => { L0["savepoint"] = v; }, local: true });
    await $.stmt($.wcall([$t2], "Refresh", [], C));
    await $.stmt((await $.wcall([$t2], "GotoBookmark", [(await $.wv([$t2], "SavePoint", { get: async () => L0["savepoint"], set: async (v) => { L0["savepoint"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCorrectorMainForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TCorrectorMainForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CorrectorDataMod", (await $.mcall((await $.v(C, "TCorrectorDataMod")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCorrectorMainForm", "ActnOKUpdate", async function ActnOKUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.mv((await $.v(C, "CorrectorDataMod")), "CorrectData"));
    await $.mset((await $.wv([$t3], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Enabled", (await $.and_((await $.wv([$t3], "Active", C, false)), async () => (await $.wv([$t3], "UpdatesPending", C, false)))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCorrectorMainForm", "ActnOKExecute", async function ActnOKExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.mv((await $.mv((await $.v(C, "CorrectorDataMod")), "CorrectData")), "Session"));
    await $.stmt((await $.wcall([$t4], "ApplyUpdates", [[(await $.mv((await $.wv([$t4], "CorrectorDataMod", C, false)), "CorrectData"))], (await $.wv([$t4], "True", C, false))], C)));
  }
  await $.stmt($.call(C, "RefreshDS", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCorrectorMainForm", "ACTNnookExecute", async function ACTNnookExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.mv((await $.mv((await $.v(C, "CorrectorDataMod")), "CorrectData")), "Session"));
    await $.stmt((await $.wcall([$t5], "CancelUpdates", [[(await $.mv((await $.wv([$t5], "CorrectorDataMod", C, false)), "CorrectData"))]], C)));
  }
  await $.stmt($.call(C, "RefreshDS", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCorrectorMainForm", "EditnumberofcreditChange", async function EditnumberofcreditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.mv((await $.v(C, "CorrectorDataMod")), "CorrectData"));
    await $.stmt((await $.wcall([$t6], "Locate", ["NUM", (await $.mv(((await $.wv([$t6], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Text")), [(await $.wv([$t6], "loCaseInsensitive", C, false)), (await $.wv([$t6], "loPartialKey", C, false))]], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "CorrectorMainForm")), "ShowCorrectForm", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TCorrectorMainForm", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCorrectorMainForm", "ActnSearchExecute", async function ActnSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchrecord": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["searchfield"] = (await $.call(C, "Copy", [(await $.mv((L0["sender"]), "name")), 5, (await $.call(C, "length", [(await $.mv((L0["sender"]), "name"))]))]));
  L0["searchrecord"] = (await $.mv((L0["sender"]), "Text"));
  await $.stmt((await $.call(C, "FindNextRecord", [(await $.mv((await $.v(C, "CorrectorDataMod")), "CorrectData")), L0["searchfield"], L0["searchrecord"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCorrectorMainForm", "FindNextRecord", async function FindNextRecord(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "fieldname": $.copyArg(p1), "value": $.copyArg(p2), result: false, "searchoptions": null};
  await $.fixArgs(L0, ["dataset", "fieldname", "value"]);
  L0["rsrecordrecachedeof"] = "Axtarış cərgənin sonuna çatıb .";
  L0["rscontinuefromtop"] = "Əvvldən axtarmaqla davam etmək istəyirsiniz?";
  L0["rsrecordnotfound"] = "Yazı tapılmadı.";
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t7 = (L0["dataset"]);
    await $.wset([$t7], "Result", (await $.wcall([$t7], "SearchRecord", [(await $.wv([$t7], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false)), (await $.wv([$t7], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), $.add((await $.wv([$t7], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t7], "srFromCurrent", C, false)), (await $.wv([$t7], "srForward", C, false))])], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    if ($.truthy($.not((await $.wv([$t7], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))))) {
      if ($.truthy($.eq((await $.wcall([$t7], "MessageDlg", [$.add($.add((await $.wv([$t7], "rsRecordRecachedEOF", { get: async () => L0["rsrecordrecachedeof"], set: async (v) => { L0["rsrecordrecachedeof"] = v; }, local: true }, false)), "\n\r"), (await $.wv([$t7], "rsContinueFromTop", { get: async () => L0["rscontinuefromtop"], set: async (v) => { L0["rscontinuefromtop"] = v; }, local: true }, false))), (await $.wv([$t7], "mtInformation", C, false)), [(await $.wv([$t7], "mbNo", C, false)), (await $.wv([$t7], "mbYes", C, false))], 0], C)), (await $.wv([$t7], "mrYes", C, false))))) {
        await $.wset([$t7], "Result", (await $.wcall([$t7], "SearchRecord", [(await $.wv([$t7], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false)), (await $.wv([$t7], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), $.add((await $.wv([$t7], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t7], "srFromBeginning", C, false))])], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
        if ($.truthy($.not((await $.wv([$t7], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))))) {
          await $.stmt((await $.wcall([$t7], "MessageDlg", [(await $.wv([$t7], "rsRecordNotFound", { get: async () => L0["rsrecordnotfound"], set: async (v) => { L0["rsrecordnotfound"] = v; }, local: true }, false)), (await $.wv([$t7], "mtInformation", C, false)), [(await $.wv([$t7], "mbOk", C, false))], 0], C)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet", "FieldName", "Value"], "kind": "function", "ptypes": ["TDataSet", "String", "String"]});
  U.method("TCorrectorMainForm", "EditnumKeyPress", async function EditnumKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await L0["key"].get()), "\r")), async () => ($.ne((await $.mv((await $.v(C, "Editnum")), "Text")), "")))))) {
    await $.stmt((await $.call(C, "ActnSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCorrectorMainForm", "DBGridEh1TitleClick", async function DBGridEh1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "orderfield": ''};
  await $.fixArgs(L0, ["column"]);
  L0["orderfield"] = (await $.mv((await $.mv(L0["column"], "Field")), "FieldName"));
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
  try {
    {
      const $t8 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGridEh1")), "DataSource")), "DataSet"))]));
      if ($.truthy((await $.wv([$t8], "Active", C, false)))) {
        await $.stmt($.wcall([$t8], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t8], "SetVariable", ["OrderField", (await $.wv([$t8], "OrderField", { get: async () => L0["orderfield"], set: async (v) => { L0["orderfield"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t8], "Open", [], C));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumnEh"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "CorrectorMainForm", (await $.mcall((await $.v(C, "TCorrectorMainForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
