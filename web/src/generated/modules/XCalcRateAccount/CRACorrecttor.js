// Generated from CRACorrecttor.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CRACorrecttor", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGridEh", "StdCtrls", "DB", "oracle", "oracledata", "ActnList", "DBGridEhGrouping", "GridsEh", "CRADatModImpl", "sbtranslateproc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TFormCorrection", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "editcontractno": {"name": "EditContractno", "type": "TEdit"}, "button2": {"name": "Button2", "type": "TButton"}, "button1": {"name": "Button1", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "actionlist": {"name": "ActionList", "type": "TActionList"}, "actionsearch": {"name": "ActionSearch", "type": "TAction"}}, {});
  U.init(async () => {
    U.var_("FormCorrection", null, "TFormCorrection");
  });
  U.method("TFormCorrection", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormCorrection", "RefreshDS", async function RefreshDS(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "savepoint": null};
  {
    const $t1 = (await $.mv((await $.v(C, "CRADatMod")), "Corrector"));
    await $.wset([$t1], "SavePoint", (await $.wv([$t1], "GetBookmark", C, false)), { get: async () => L0["savepoint"], set: async (v) => { L0["savepoint"] = v; }, local: true });
    await $.stmt($.wcall([$t1], "Refresh", [], C));
    await $.stmt((await $.wcall([$t1], "GotoBookmark", [(await $.wv([$t1], "SavePoint", { get: async () => L0["savepoint"], set: async (v) => { L0["savepoint"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormCorrection", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFormCorrection", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCorrection", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "CRADatMod"));
    await $.mcall((await $.wv([$t2], "Corrector", C, false)), "Open", []);
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCorrection", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "CRADatMod"));
    await $.mcall((await $.wv([$t3], "Corrector", C, false)), "CloseAll", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCorrection", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.mv((await $.mv((await $.v(C, "CRADatMod")), "Corrector")), "Session"));
    await $.stmt((await $.wcall([$t4], "ApplyUpdates", [[(await $.mv((await $.wv([$t4], "CRADatMod", C, false)), "Corrector"))], (await $.wv([$t4], "True", C, false))], C)));
  }
  await $.stmt($.call(C, "RefreshDS", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCorrection", "FindNextRecord", async function FindNextRecord(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "fieldname": $.copyArg(p1), "value": $.copyArg(p2), result: false, "searchoptions": null};
  await $.fixArgs(L0, ["dataset", "fieldname", "value"]);
  L0["rsrecordrecachedeof"] = "Axtarış cərgənin sonuna çatıb .";
  L0["rscontinuefromtop"] = "Əvvəldən axtarmaqla davam etmək istəyirsiniz?";
  L0["rsrecordnotfound"] = "Yazı tapılmadı.";
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t5 = (L0["dataset"]);
    await $.wset([$t5], "Result", (await $.wcall([$t5], "SearchRecord", [(await $.wv([$t5], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false)), (await $.wv([$t5], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), $.add((await $.wv([$t5], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t5], "srFromCurrent", C, false)), (await $.wv([$t5], "srForward", C, false))])], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    if ($.truthy($.not((await $.wv([$t5], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))))) {
      if ($.truthy($.eq((await $.wcall([$t5], "MessageDlg", [$.add($.add((await $.wv([$t5], "rsRecordRecachedEOF", { get: async () => L0["rsrecordrecachedeof"], set: async (v) => { L0["rsrecordrecachedeof"] = v; }, local: true }, false)), "\n\r"), (await $.wv([$t5], "rsContinueFromTop", { get: async () => L0["rscontinuefromtop"], set: async (v) => { L0["rscontinuefromtop"] = v; }, local: true }, false))), (await $.wv([$t5], "mtInformation", C, false)), [(await $.wv([$t5], "mbNo", C, false)), (await $.wv([$t5], "mbYes", C, false))], 0], C)), (await $.wv([$t5], "mrYes", C, false))))) {
        await $.wset([$t5], "Result", (await $.wcall([$t5], "SearchRecord", [(await $.wv([$t5], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false)), (await $.wv([$t5], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), $.add((await $.wv([$t5], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t5], "srFromBeginning", C, false))])], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
        if ($.truthy($.not((await $.wv([$t5], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))))) {
          await $.stmt((await $.wcall([$t5], "MessageDlg", [(await $.wv([$t5], "rsRecordNotFound", { get: async () => L0["rsrecordnotfound"], set: async (v) => { L0["rsrecordnotfound"] = v; }, local: true }, false)), (await $.wv([$t5], "mtInformation", C, false)), [(await $.wv([$t5], "mbOk", C, false))], 0], C)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet", "FieldName", "Value"], "kind": "function", "ptypes": ["TDataSet", "String", "String"]});
  U.method("TFormCorrection", "ActionSearchExecute", async function ActionSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchrecord": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["searchfield"] = (await $.call(C, "Copy", [(await $.mv((L0["sender"]), "name")), 5, (await $.call(C, "length", [(await $.mv((L0["sender"]), "name"))]))]));
  L0["searchrecord"] = (await $.mv((L0["sender"]), "Text"));
  await $.stmt((await $.call(C, "FindNextRecord", [(await $.mv((await $.v(C, "CRADatMod")), "Corrector")), L0["searchfield"], L0["searchrecord"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCorrection", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.mv((await $.mv((await $.v(C, "CRADatMod")), "Corrector")), "Session"));
    await $.stmt((await $.wcall([$t6], "CancelUpdates", [[(await $.mv((await $.wv([$t6], "CRADatMod", C, false)), "Corrector"))]], C)));
  }
  await $.stmt($.call(C, "RefreshDS", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCorrection", "EditContractnoKeyPress", async function EditContractnoKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await L0["key"].get()), "\r")), async () => ($.ne((await $.mv((await $.v(C, "EditContractno")), "Text")), "")))))) {
    await $.stmt((await $.call(C, "ActionSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
