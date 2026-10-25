// Generated from UntTariffScale.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntTariffScale", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "ExtCtrls", "Grids", "DBGrids", "DBCtrls", "Db", "DataModuleImpl", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormReferences", "TForm", {"statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "gridgroups": {"name": "GridGroups", "type": "TDBGrid"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "gridtariffs": {"name": "GridTariffs", "type": "TDBGrid"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "dbnavigator2": {"name": "DBNavigator2", "type": "TDBNavigator"}, "splitter1": {"name": "Splitter1", "type": "TSplitter"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "editid": {"name": "EditID", "type": "TEdit"}, "editname": {"name": "EditName", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("FormReferences", null, "TFormReferences");
  });
  U.method("TFormReferences", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormReferences", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy(($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormReferences", "EditIDKeyPress", async function EditIDKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormReferences", "EditIDChange", async function EditIDChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fname": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["fname"] = (await $.call(C, "copy", [(await $.mv((L0["sender"]), "Name")), 5, (await $.call(C, "Length", [(await $.mv((L0["sender"]), "Name"))]))]));
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridGroups")), "DataSource")), "DataSet")), "Locate", [L0["fname"], (await $.mv((L0["sender"]), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormReferences", "EditIDExit", async function EditIDExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = L0["sender"];
    await $.wset([$t1], "Text", "", C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
