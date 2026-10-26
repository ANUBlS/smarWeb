// Generated from NewDepositsFrmWReportImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsFrmWReportImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "WordXP", "OleServer", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "Buttons", "ExtCtrls", "ImgList", "ActnList", "DBGridEh", "NewDepositsDMWReportImpl", "NewCommonDeclsImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TNewDepositsFrmWReport", "TForm", {"actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actinprint": {"name": "ActinPrint", "type": "TAction"}, "actnclose": {"name": "ActnClose", "type": "TAction"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "wordapplication": {"name": "WordApplication", "type": "TWordApplication"}, "worddocument": {"name": "WordDocument", "type": "TWordDocument"}, "templid": {"name": "TemplID", "type": "Integer"}}, {});
  U.init(async () => {
    U.var_("NewDepositsFrmWReport", null, "TNewDepositsFrmWReport");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "NewDepositsFrmWReport")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TNewDepositsFrmWReport", "ActinPrintExecute", async function ActinPrintExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "template": null, "templatebool": null, "ftemplatepath": null, "itemindex": null, "obookmarkcount": null, "what": null, "obookmarkname": null, "ibookmarkcount": 0, "tfieldname": '', "savechanges": null, "originalformat": null, "routedocument": null, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["filenotfound"] = "Fayl tapılmadı";
  {
    const $t1 = (await $.v(C, "NewDepositsDMWReport"));
    await $.mcall((await $.wv([$t1], "DMGroups", C, false)), "First", []);
    { const $t2 = $.sub((await $.mv((await $.wv([$t1], "DMGroups", C, false)), "RecordCount")), 1);
      await $.wset([$t1], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t3 = true;
      for (;;) {
        if (!$t3) { await $.wset([$t1], "i", $.succ((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t3 = false;
        if (!($.ord((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t2))) break;
        await $.mcall((await $.wv([$t1], "TemplatesDataSet", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t1], "TemplatesDataSet", C, false)), "SetVariable", ["id", (await $.mv((await $.mcall((await $.wv([$t1], "DMGroups", C, false)), "FieldByName", ["tempid"])), "AsInteger"))])));
        await $.mcall((await $.wv([$t1], "TemplatesDataSet", C, false)), "Open", []);
        await $.wset([$t1], "What", (await $.wcall([$t1], "OleVariant", [(await $.wv([$t1], "wdGoToBookmark", C, false))], C)), { get: async () => L0["what"], set: async (v) => { L0["what"] = v; }, local: true });
        await $.wset([$t1], "FTemplatePath", (await $.mv((await $.mcall((await $.wv([$t1], "TemplatesDataSet", C, false)), "FieldByName", ["Path"])), "AsString")), { get: async () => L0["ftemplatepath"], set: async (v) => { L0["ftemplatepath"] = v; }, local: true });
        await $.wset([$t1], "TemplID", (await $.mv((await $.mcall((await $.wv([$t1], "TemplatesDataSet", C, false)), "FieldByName", ["ID"])), "AsInteger")), C);
        await $.wset([$t1], "Template", (await $.wv([$t1], "EmptyParam", C, false)), { get: async () => L0["template"], set: async (v) => { L0["template"] = v; }, local: true });
        await $.wset([$t1], "TemplateBooL", (await $.wv([$t1], "False", C, false)), { get: async () => L0["templatebool"], set: async (v) => { L0["templatebool"] = v; }, local: true });
        await $.wset([$t1], "Itemindex", 1, { get: async () => L0["itemindex"], set: async (v) => { L0["itemindex"] = v; }, local: true });
        await $.mcall((await $.wv([$t1], "Wordapplication", C, false)), "Connect", []);
        await $.mset((await $.mv((await $.mv((await $.wv([$t1], "WordApplication", C, false)), "Documents")), "Application")), "Caption", (await $.mv((await $.wv([$t1], "DBLookupComboboxEh1", C, false)), "Text")));
        await $.mset((await $.mv((await $.wv([$t1], "WordApplication", C, false)), "Options")), "CheckSpellingAsYouType", (await $.wv([$t1], "False", C, false)));
        await $.mset((await $.mv((await $.wv([$t1], "WordApplication", C, false)), "Options")), "CheckGrammarAsYouType", (await $.wv([$t1], "False", C, false)));
        if ($.truthy((await $.wcall([$t1], "FileExists", [(await $.wv([$t1], "FTemplatePath", { get: async () => L0["ftemplatepath"], set: async (v) => { L0["ftemplatepath"] = v; }, local: true }, false))], C)))) {
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "WordApplication", C, false)), "Documents")), "Open", [(await $.wv([$t1], "FTemplatePath", { get: async () => L0["ftemplatepath"], set: async (v) => { L0["ftemplatepath"] = v; }, local: true }, false)), (await $.wv([$t1], "Template", { get: async () => L0["template"], set: async (v) => { L0["template"] = v; }, local: true }, false)), (await $.wv([$t1], "TemplateBooL", { get: async () => L0["templatebool"], set: async (v) => { L0["templatebool"] = v; }, local: true }, false)), (await $.wv([$t1], "Template", { get: async () => L0["template"], set: async (v) => { L0["template"] = v; }, local: true }, false)), (await $.wv([$t1], "Template", { get: async () => L0["template"], set: async (v) => { L0["template"] = v; }, local: true }, false)), (await $.wv([$t1], "Template", { get: async () => L0["template"], set: async (v) => { L0["template"] = v; }, local: true }, false)), (await $.wv([$t1], "Template", { get: async () => L0["template"], set: async (v) => { L0["template"] = v; }, local: true }, false)), (await $.wv([$t1], "Template", { get: async () => L0["template"], set: async (v) => { L0["template"] = v; }, local: true }, false)), (await $.wv([$t1], "Template", { get: async () => L0["template"], set: async (v) => { L0["template"] = v; }, local: true }, false)), (await $.wv([$t1], "Template", { get: async () => L0["template"], set: async (v) => { L0["template"] = v; }, local: true }, false)), (await $.wv([$t1], "Template", { get: async () => L0["template"], set: async (v) => { L0["template"] = v; }, local: true }, false)), (await $.wv([$t1], "Template", { get: async () => L0["template"], set: async (v) => { L0["template"] = v; }, local: true }, false)), (await $.wv([$t1], "Template", { get: async () => L0["template"], set: async (v) => { L0["template"] = v; }, local: true }, false)), (await $.wv([$t1], "Template", { get: async () => L0["template"], set: async (v) => { L0["template"] = v; }, local: true }, false)), (await $.wv([$t1], "Template", { get: async () => L0["template"], set: async (v) => { L0["template"] = v; }, local: true }, false))])));
        } else {
          await $.wset([$t1], "SaveChanges", (await $.wv([$t1], "WdDoNotSaveChanges", C, false)), { get: async () => L0["savechanges"], set: async (v) => { L0["savechanges"] = v; }, local: true });
          await $.wset([$t1], "OriginalFormat", (await $.wv([$t1], "UnAssigned", C, false)), { get: async () => L0["originalformat"], set: async (v) => { L0["originalformat"] = v; }, local: true });
          await $.wset([$t1], "RouteDocument", (await $.wv([$t1], "UnAssigned", C, false)), { get: async () => L0["routedocument"], set: async (v) => { L0["routedocument"] = v; }, local: true });
          await $.stmt((await $.mcall((await $.wv([$t1], "WordApplication", C, false)), "Quit", [(await $.wv([$t1], "SaveChanges", { get: async () => L0["savechanges"], set: async (v) => { L0["savechanges"] = v; }, local: true }, false)), (await $.wv([$t1], "OriginalFormat", { get: async () => L0["originalformat"], set: async (v) => { L0["originalformat"] = v; }, local: true }, false)), (await $.wv([$t1], "RouteDocument", { get: async () => L0["routedocument"], set: async (v) => { L0["routedocument"] = v; }, local: true }, false))])));
          await $.mcall((await $.wv([$t1], "WordApplication", C, false)), "Disconnect", []);
          await $.stmt((await $.wcall([$t1], "ShowMessage", [(await $.wv([$t1], "FilenotFound", { get: async () => L0["filenotfound"], set: async (v) => { L0["filenotfound"] = v; }, local: true }, false))], C)));
        }
        await $.stmt((await $.mcall((await $.wv([$t1], "WordDocument", C, false)), "ConnectTo", [(await $.mcall((await $.mv((await $.wv([$t1], "WordApplication", C, false)), "Documents")), "Item", [(await $.wv([$t1], "Itemindex", { get: async () => L0["itemindex"], set: async (v) => { L0["itemindex"] = v; }, local: true }, false))]))])));
        await $.mset((await $.mv((await $.mv((await $.wv([$t1], "WordDocument", C, false)), "Application")), "Get_ActiveWindow")), "Caption", (await $.mv((await $.wv([$t1], "NewDepositsFrmWReport", C, false)), "Caption")));
        try {
          {
            const $t5 = (await $.wv([$t1], "NewDepositsDMWReport", C, false));
            const $t6 = (await $.wv([$t1, $t5], "ReplaceDataSet", C, false));
            const $t7 = (await $.wv([$t1, $t5, $t6], "WordDocument", C, false));
            { const $t8 = (await $.mv((await $.wv([$t1, $t5, $t6, $t7], "Bookmarks", C, false)), "Count"));
              await $.wset([$t1, $t5, $t6, $t7], "IbookmarkCount", 1, { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true });
              let $t9 = true;
              for (;;) {
                if (!$t9) { await $.wset([$t1, $t5, $t6, $t7], "IbookmarkCount", $.succ((await $.wv([$t1, $t5, $t6, $t7], "IbookmarkCount", { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }, false)), 1), { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }); }
                $t9 = false;
                if (!($.ord((await $.wv([$t1, $t5, $t6, $t7], "IbookmarkCount", { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }, false))) <= $.ord($t8))) break;
                await $.wset([$t1, $t5, $t6, $t7], "OBookmarkCount", (await $.wv([$t1, $t5, $t6, $t7], "IbookmarkCount", { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }, false)), { get: async () => L0["obookmarkcount"], set: async (v) => { L0["obookmarkcount"] = v; }, local: true });
                await $.wset([$t1, $t5, $t6, $t7], "OBookMarkName", (await $.mv((await $.mcall((await $.wv([$t1, $t5, $t6, $t7], "Bookmarks", C, false)), "Item", [(await $.wv([$t1, $t5, $t6, $t7], "OBookmarkCount", { get: async () => L0["obookmarkcount"], set: async (v) => { L0["obookmarkcount"] = v; }, local: true }, false))])), "Get_Name")), { get: async () => L0["obookmarkname"], set: async (v) => { L0["obookmarkname"] = v; }, local: true });
                await $.stmt((await $.mcall((await $.mv((await $.wv([$t1, $t5, $t6, $t7], "WordApplication", C, false)), "Selection")), "GoTo_", [(await $.wv([$t1, $t5, $t6, $t7], "What", { get: async () => L0["what"], set: async (v) => { L0["what"] = v; }, local: true }, false)), (await $.wv([$t1, $t5, $t6, $t7], "EmptyParam", C, false)), (await $.wv([$t1, $t5, $t6, $t7], "EmptyParam", C, false)), (await $.wv([$t1, $t5, $t6, $t7], "oBookMarkName", { get: async () => L0["obookmarkname"], set: async (v) => { L0["obookmarkname"] = v; }, local: true }, false))])));
                await $.mcall((await $.wv([$t1, $t5, $t6, $t7], "ReplaceDataSet", C, false)), "Close", []);
                await $.stmt((await $.wcall([$t1, $t5, $t6, $t7], "SetVariable", ["tid", (await $.wv([$t1, $t5, $t6, $t7], "TemplID", C, false))], C)));
                await $.stmt((await $.wcall([$t1, $t5, $t6, $t7], "SetVariable", ["bname", (await $.wv([$t1, $t5, $t6, $t7], "oBookMarkName", { get: async () => L0["obookmarkname"], set: async (v) => { L0["obookmarkname"] = v; }, local: true }, false))], C)));
                await $.mcall((await $.wv([$t1, $t5, $t6, $t7], "ReplaceDataSet", C, false)), "Open", []);
                await $.wset([$t1, $t5, $t6, $t7], "tFieldName", (await $.mv((await $.wcall([$t1, $t5, $t6, $t7], "FIeldByName", ["FIELDNAME"], C)), "AsString")), { get: async () => L0["tfieldname"], set: async (v) => { L0["tfieldname"] = v; }, local: true });
                await $.stmt((await $.mcall((await $.mv((await $.wv([$t1, $t5, $t6, $t7], "WordApplication", C, false)), "Selection")), "InsertAfter", [(await $.mv((await $.mcall((await $.wv([$t1, $t5, $t6, $t7], "DepositInfoDataSet", C, false)), "FieldByName", [(await $.wv([$t1, $t5, $t6, $t7], "tFieldName", { get: async () => L0["tfieldname"], set: async (v) => { L0["tfieldname"] = v; }, local: true }, false))])), "AsString"))])));
                await $.tick();
              }
            }
          }
          await $.mset((await $.wv([$t1], "Wordapplication", C, false)), "Visible", (await $.wv([$t1], "True", C, false)));
          await $.mcall((await $.wv([$t1], "WordDocument", C, false)), "Disconnect", []);
          await $.mcall((await $.wv([$t1], "Wordapplication", C, false)), "Disconnect", []);
        } catch ($t4) {
          $.rethrowControl($t4);
          $.handled($t4);
          await $.wset([$t1], "SaveChanges", (await $.wv([$t1], "WdDoNotSaveChanges", C, false)), { get: async () => L0["savechanges"], set: async (v) => { L0["savechanges"] = v; }, local: true });
          await $.wset([$t1], "OriginalFormat", (await $.wv([$t1], "UnAssigned", C, false)), { get: async () => L0["originalformat"], set: async (v) => { L0["originalformat"] = v; }, local: true });
          await $.wset([$t1], "RouteDocument", (await $.wv([$t1], "UnAssigned", C, false)), { get: async () => L0["routedocument"], set: async (v) => { L0["routedocument"] = v; }, local: true });
          await $.stmt((await $.mcall((await $.wv([$t1], "WordApplication", C, false)), "Quit", [(await $.wv([$t1], "SaveChanges", { get: async () => L0["savechanges"], set: async (v) => { L0["savechanges"] = v; }, local: true }, false)), (await $.wv([$t1], "OriginalFormat", { get: async () => L0["originalformat"], set: async (v) => { L0["originalformat"] = v; }, local: true }, false)), (await $.wv([$t1], "RouteDocument", { get: async () => L0["routedocument"], set: async (v) => { L0["routedocument"] = v; }, local: true }, false))])));
          await $.mcall((await $.wv([$t1], "WordApplication", C, false)), "Disconnect", []);
          await $.stmt((await $.wcall([$t1], "ShowMessage", ["Bukmarklar daxil edilməyib "], C)));
        }
        await $.stmt($.wcall([$t1], "Next", [], C));
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmWReport", "ActnCloseExecute", async function ActnCloseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmWReport", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TNewDepositsFrmWReport", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "NewDepositsDMWReport", (await $.mcall((await $.v(C, "TNewDepositsDMWReport")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmWReport", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "NewDepositsDMWReport")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmWReport", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsFrmWReport", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.v(C, "NewDepositsDMWReport"));
    const $t11 = (await $.wv([$t10], "DepositInfoDataSet", C, false));
    await $.stmt($.wcall([$t10, $t11], "Close", [], C));
    await $.stmt((await $.wcall([$t10, $t11], "SetVariable", ["ContractID", (await $.wv([$t10, $t11], "Get_SelectedContID", C, false))], C)));
    await $.stmt($.wcall([$t10, $t11], "Open", [], C));
    await $.mcall((await $.wv([$t10, $t11], "DMGroups", C, false)), "Close", []);
    await $.mcall((await $.wv([$t10, $t11], "DMGroups", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "NewDepositsFrmWReport", (await $.mcall((await $.v(C, "TNewDepositsFrmWReport")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
