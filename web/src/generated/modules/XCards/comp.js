// Generated from comp.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("comp", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBCtrls", "StdCtrls", "Grids", "DBGrids", "Unit18", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TForm13", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "edit1": {"name": "Edit1", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("Form13", null, "TForm13");
  });
  U.method("TForm13", "Edit1KeyPress", async function Edit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["key"].set((await $.call(C, "UpCase", [(await L0["key"].get())])));
  if ($.truthy($.gt((await $.call(C, "ORD", [(await L0["key"].get())])), 126))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), 63))) {
    await L0["key"].set("\u0000");
  }
  await $.stmt((await $.call(C, "ActivateKeyboardLayout", [(await $.call(C, "LoadKeyboardLayout", ["00000409", 0])), 0])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TForm13", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "COMPANY")), "Insert", []);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "COMPANY")), "FieldByName", ["COMPANY_NAME"])), "AsString", (await $.mv((await $.v(C, "Edit1")), "Text")));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "COMPANY")), "Post", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "COMPANY")), "Session")), "Commit", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "COMPANY")), "CLOSE", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "COMPANY")), "OPEN", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm13", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş sətir silinsin?", (await $.v(C, "mtinformation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0])), (await $.v(C, "mryes"))))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "COMPANY")), "Delete", []);
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "COMPANY")), "Session")), "commit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm13", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit1")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm13", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
