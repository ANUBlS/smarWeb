// Generated from frmWReportImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmWReportImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActnList", "ImgList", "OleServer", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "Buttons", "ExtCtrls", "WordXP", "variants", "DMWReportImpl", "CommonDeclsImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TfrmWReport", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "wordapplication": {"name": "WordApplication", "type": "TWordApplication"}, "worddocument": {"name": "WordDocument", "type": "TWordDocument"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actinprint": {"name": "ActinPrint", "type": "TAction"}, "actnclose": {"name": "ActnClose", "type": "TAction"}, "templid": {"name": "TemplID", "type": "Integer"}}, {});
  U.init(async () => {
    U.var_("frmWReport", null, "TfrmWReport");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  {
    const $t1 = (await $.mcall((await $.v(C, "TfrmWReport")), "Create", [(await $.v(C, "CommonApplication"))]));
    try {
      await $.stmt($.wcall([$t1], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t1], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmWReport", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmWReport", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmWReport", "ActinPrintExecute", async function ActinPrintExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "template": null, "templatebool": null, "ftemplatepath": null, "itemindex": null, "obookmarkcount": null, "what": null, "obookmarkname": null, "ibookmarkcount": 0, "tfieldname": '', "savechanges": null, "originalformat": null, "routedocument": null};
  await $.fixArgs(L0, ["sender"]);
  L0["filenotfound"] = "Fayl tapılmadı";
  L0["what"] = (await $.call(C, "OleVariant", [(await $.v(C, "wdGoToBookmark"))]));
  L0["ftemplatepath"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMWReport")), "TemplatesDataSet")), "FieldByName", ["Path"])), "AsString"));
  await $.set(C, "TemplID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMWReport")), "TemplatesDataSet")), "FieldByName", ["ID"])), "AsInteger")));
  L0["template"] = (await $.v(C, "EmptyParam"));
  L0["templatebool"] = false;
  L0["itemindex"] = 1;
  await $.mcall((await $.v(C, "Wordapplication")), "Connect", []);
  await $.mset((await $.mv((await $.mv((await $.v(C, "WordApplication")), "Documents")), "Application")), "Caption", (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")));
  await $.mset((await $.mv((await $.v(C, "WordApplication")), "Options")), "CheckSpellingAsYouType", false);
  await $.mset((await $.mv((await $.v(C, "WordApplication")), "Options")), "CheckGrammarAsYouType", false);
  if ($.truthy((await $.call(C, "FileExists", [L0["ftemplatepath"]])))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "WordApplication")), "Documents")), "Open", [L0["ftemplatepath"], L0["template"], L0["templatebool"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"]])));
  } else {
    L0["savechanges"] = (await $.v(C, "WdDoNotSaveChanges"));
    L0["originalformat"] = (await $.v(C, "UnAssigned"));
    L0["routedocument"] = (await $.v(C, "UnAssigned"));
    await $.stmt((await $.mcall((await $.v(C, "WordApplication")), "Quit", [L0["savechanges"], L0["originalformat"], L0["routedocument"]])));
    await $.mcall((await $.v(C, "WordApplication")), "Disconnect", []);
    await $.stmt((await $.call(C, "ShowMessage", [L0["filenotfound"]])));
  }
  await $.stmt((await $.mcall((await $.v(C, "WordDocument")), "ConnectTo", [(await $.mcall((await $.mv((await $.v(C, "WordApplication")), "Documents")), "Item", [L0["itemindex"]]))])));
  await $.mset((await $.mv((await $.mv((await $.v(C, "WordDocument")), "Application")), "Get_ActiveWindow")), "Caption", (await $.mv((await $.v(C, "frmWReport")), "Caption")));
  try {
    {
      const $t3 = (await $.v(C, "DMWReport"));
      const $t4 = (await $.wv([$t3], "ReplaceDataSet", C, false));
      const $t5 = (await $.wv([$t3, $t4], "WordDocument", C, false));
      { const $t6 = (await $.mv((await $.wv([$t3, $t4, $t5], "Bookmarks", C, false)), "Count"));
        await $.wset([$t3, $t4, $t5], "IbookmarkCount", 1, { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true });
        let $t7 = true;
        for (;;) {
          if (!$t7) { await $.wset([$t3, $t4, $t5], "IbookmarkCount", $.succ((await $.wv([$t3, $t4, $t5], "IbookmarkCount", { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }, false)), 1), { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }); }
          $t7 = false;
          if (!($.ord((await $.wv([$t3, $t4, $t5], "IbookmarkCount", { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }, false))) <= $.ord($t6))) break;
          await $.wset([$t3, $t4, $t5], "OBookmarkCount", (await $.wv([$t3, $t4, $t5], "IbookmarkCount", { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }, false)), { get: async () => L0["obookmarkcount"], set: async (v) => { L0["obookmarkcount"] = v; }, local: true });
          await $.wset([$t3, $t4, $t5], "oBookMarkName", (await $.mv((await $.mcall((await $.wv([$t3, $t4, $t5], "Bookmarks", C, false)), "Item", [(await $.wv([$t3, $t4, $t5], "OBookmarkCount", { get: async () => L0["obookmarkcount"], set: async (v) => { L0["obookmarkcount"] = v; }, local: true }, false))])), "Get_Name")), { get: async () => L0["obookmarkname"], set: async (v) => { L0["obookmarkname"] = v; }, local: true });
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t3, $t4, $t5], "WordApplication", C, false)), "Selection")), "GoTo_", [(await $.wv([$t3, $t4, $t5], "What", { get: async () => L0["what"], set: async (v) => { L0["what"] = v; }, local: true }, false)), (await $.wv([$t3, $t4, $t5], "EmptyParam", C, false)), (await $.wv([$t3, $t4, $t5], "EmptyParam", C, false)), (await $.wv([$t3, $t4, $t5], "oBookMarkName", { get: async () => L0["obookmarkname"], set: async (v) => { L0["obookmarkname"] = v; }, local: true }, false))])));
          await $.mcall((await $.wv([$t3, $t4, $t5], "ReplaceDataSet", C, false)), "Close", []);
          await $.stmt((await $.wcall([$t3, $t4, $t5], "SetVariable", ["tid", (await $.wv([$t3, $t4, $t5], "TemplID", C, false))], C)));
          await $.stmt((await $.wcall([$t3, $t4, $t5], "SetVariable", ["bname", (await $.wv([$t3, $t4, $t5], "oBookMarkName", { get: async () => L0["obookmarkname"], set: async (v) => { L0["obookmarkname"] = v; }, local: true }, false))], C)));
          await $.mcall((await $.wv([$t3, $t4, $t5], "ReplaceDataSet", C, false)), "Open", []);
          await $.wset([$t3, $t4, $t5], "tFieldName", (await $.mv((await $.wcall([$t3, $t4, $t5], "FIeldByName", ["FIELDNAME"], C)), "AsString")), { get: async () => L0["tfieldname"], set: async (v) => { L0["tfieldname"] = v; }, local: true });
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t3, $t4, $t5], "WordApplication", C, false)), "Selection")), "InsertAfter", [(await $.mv((await $.mcall((await $.wv([$t3, $t4, $t5], "DepositInfoDataSet", C, false)), "FieldByName", [(await $.wv([$t3, $t4, $t5], "tFieldName", { get: async () => L0["tfieldname"], set: async (v) => { L0["tfieldname"] = v; }, local: true }, false))])), "AsString"))])));
          await $.tick();
        }
      }
    }
    await $.mset((await $.v(C, "Wordapplication")), "Visible", true);
    await $.mcall((await $.v(C, "WordDocument")), "Disconnect", []);
    await $.mcall((await $.v(C, "Wordapplication")), "Disconnect", []);
  } catch ($t2) {
    $.rethrowControl($t2);
    $.handled($t2);
    L0["savechanges"] = (await $.v(C, "WdDoNotSaveChanges"));
    L0["originalformat"] = (await $.v(C, "UnAssigned"));
    L0["routedocument"] = (await $.v(C, "UnAssigned"));
    await $.stmt((await $.mcall((await $.v(C, "WordApplication")), "Quit", [L0["savechanges"], L0["originalformat"], L0["routedocument"]])));
    await $.mcall((await $.v(C, "WordApplication")), "Disconnect", []);
    await $.stmt((await $.call(C, "ShowMessage", ["Bukmarklar daxil edilmeyib "])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmWReport", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.v(C, "DMWReport"));
    const $t9 = (await $.wv([$t8], "DepositInfoDataSet", C, false));
    await $.stmt($.wcall([$t8, $t9], "CloseAll", [], C));
    await $.stmt((await $.wcall([$t8, $t9], "SetVariable", ["ContractID", (await $.wv([$t8, $t9], "Get_SelectedContID", C, false))], C)));
    await $.stmt($.wcall([$t8, $t9], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmWReport", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DMWReport", (await $.mcall((await $.v(C, "TDMWReport")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmWReport", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DMWReport")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmWReport", "ActnCloseExecute", async function ActnCloseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmWReport", (await $.mcall((await $.v(C, "TfrmWReport")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
