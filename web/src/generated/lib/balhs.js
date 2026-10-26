// Generated from balhs.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("balhs", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBCtrls", "StdCtrls", "Grids", "DBGrids", "NLSLocalizer", "SearchEdit", "ExtCtrls", "Unit18", "setac", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TForm11", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TSearchEdit"}, "searchedit1": {"name": "SearchEdit1", "type": "TSearchEdit"}}, {});
  U.init(async () => {
    U.var_("Form11", null, "TForm11");
  });
  U.method("TForm11", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "balanslar")), "Insert", []);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "balanslar")), "FieldByName", ["balans"])), "AsString", (await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")));
  if ($.truthy($.ne((await $.mv((await $.v(C, "SearchEdit1")), "Text")), ""))) {
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "balanslar")), "FieldByName", ["hes"])), "AsInteger", (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "SearchEdit1")), "text"))])));
  }
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "balanslar")), "Post", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "balanslar")), "Session")), "Commit", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "balanslar")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm11", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş sətir silinsin?", (await $.v(C, "mtinformation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0])), (await $.v(C, "mryes"))))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "balanslar")), "Delete", []);
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "balanslar")), "Session")), "commit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm11", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLookupComboBox1")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm11", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
