// Generated from WReportImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("WReportImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "WordXP", "ActnList", "ImgList", "OleServer", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "Buttons", "DatModConstructionImpl"]);
  const C = [U];
  U.defClass("TWReport", "TForm", {"dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "worddocument": {"name": "WordDocument", "type": "TWordDocument"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actinprint": {"name": "ActinPrint", "type": "TAction"}, "actnclose": {"name": "ActnClose", "type": "TAction"}, "wordapplication": {"name": "WordApplication", "type": "TWordApplication"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "action1": {"name": "Action1", "type": "TAction"}, "templid": {"name": "TemplID", "type": "Integer"}}, {});
  U.init(async () => {
    U.var_("WReport", null, "TWReport");
  });
  U.method("TWReport", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "template": null, "templatebool": null, "ftemplatepath": null, "itemindex": null, "obookmarkcount": null, "what": null, "obookmarkname": null, "ibookmarkcount": 0, "tfieldname": '', "savechanges": null, "originalformat": null, "routedocument": null};
  await $.fixArgs(L0, ["sender"]);
  L0["what"] = (await $.call(C, "OleVariant", [(await $.v(C, "wdGoToBookmark"))]));
  L0["ftemplatepath"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Templates")), "FieldByName", ["Path"])), "AsString"));
  await $.set(C, "TemplID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Templates")), "FieldByName", ["ID"])), "AsInteger")));
  L0["template"] = (await $.v(C, "EmptyParam"));
  L0["templatebool"] = false;
  L0["itemindex"] = 1;
  await $.mcall((await $.v(C, "Wordapplication")), "Connect", []);
  await $.mset((await $.v(C, "Wordapplication")), "Visible", true);
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
    await $.stmt((await $.call(C, "ShowMessage", ["FilenotFound"])));
  }
  await $.stmt((await $.mcall((await $.v(C, "WordDocument")), "ConnectTo", [(await $.mcall((await $.mv((await $.v(C, "WordApplication")), "Documents")), "Item", [L0["itemindex"]]))])));
  try {
    {
      const $t2 = (await $.v(C, "DatModConstruction"));
      const $t3 = (await $.wv([$t2], "ReplaceCustDataSet", C, false));
      const $t4 = (await $.wv([$t2, $t3], "WordDocument", C, false));
      { const $t5 = (await $.mv((await $.wv([$t2, $t3, $t4], "Bookmarks", C, false)), "Count"));
        await $.wset([$t2, $t3, $t4], "IbookmarkCount", 1, { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true });
        let $t6 = true;
        for (;;) {
          if (!$t6) { await $.wset([$t2, $t3, $t4], "IbookmarkCount", $.succ((await $.wv([$t2, $t3, $t4], "IbookmarkCount", { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }, false)), 1), { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }); }
          $t6 = false;
          if (!($.ord((await $.wv([$t2, $t3, $t4], "IbookmarkCount", { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }, false))) <= $.ord($t5))) break;
          await $.wset([$t2, $t3, $t4], "OBookmarkCount", (await $.wv([$t2, $t3, $t4], "IbookmarkCount", { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }, false)), { get: async () => L0["obookmarkcount"], set: async (v) => { L0["obookmarkcount"] = v; }, local: true });
          await $.wset([$t2, $t3, $t4], "oBookMarkName", (await $.mv((await $.mcall((await $.wv([$t2, $t3, $t4], "Bookmarks", C, false)), "Item", [(await $.wv([$t2, $t3, $t4], "OBookmarkCount", { get: async () => L0["obookmarkcount"], set: async (v) => { L0["obookmarkcount"] = v; }, local: true }, false))])), "Get_Name")), { get: async () => L0["obookmarkname"], set: async (v) => { L0["obookmarkname"] = v; }, local: true });
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t2, $t3, $t4], "WordApplication", C, false)), "Selection")), "GoTo_", [(await $.wv([$t2, $t3, $t4], "What", { get: async () => L0["what"], set: async (v) => { L0["what"] = v; }, local: true }, false)), (await $.wv([$t2, $t3, $t4], "EmptyParam", C, false)), (await $.wv([$t2, $t3, $t4], "EmptyParam", C, false)), (await $.wv([$t2, $t3, $t4], "oBookMarkName", { get: async () => L0["obookmarkname"], set: async (v) => { L0["obookmarkname"] = v; }, local: true }, false))])));
          await $.mcall((await $.wv([$t2, $t3, $t4], "ReplaceCustDataSet", C, false)), "Close", []);
          await $.stmt((await $.wcall([$t2, $t3, $t4], "SetVariable", ["tid", (await $.wv([$t2, $t3, $t4], "TemplID", C, false))], C)));
          await $.stmt((await $.wcall([$t2, $t3, $t4], "SetVariable", ["bname", (await $.wv([$t2, $t3, $t4], "oBookMarkName", { get: async () => L0["obookmarkname"], set: async (v) => { L0["obookmarkname"] = v; }, local: true }, false))], C)));
          await $.mcall((await $.wv([$t2, $t3, $t4], "ReplaceCustDataSet", C, false)), "Open", []);
          await $.wset([$t2, $t3, $t4], "tFieldName", (await $.mv((await $.wcall([$t2, $t3, $t4], "FIeldByName", ["FIELDNAME"], C)), "AsString")), { get: async () => L0["tfieldname"], set: async (v) => { L0["tfieldname"] = v; }, local: true });
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t2, $t3, $t4], "WordApplication", C, false)), "Selection")), "InsertAfter", [(await $.mv((await $.mcall((await $.wv([$t2, $t3, $t4], "cc_bookmarkDataSet", C, false)), "FieldByName", [(await $.wv([$t2, $t3, $t4], "tFieldName", { get: async () => L0["tfieldname"], set: async (v) => { L0["tfieldname"] = v; }, local: true }, false))])), "AsString"))])));
          await $.tick();
        }
      }
    }
    await $.mcall((await $.v(C, "WordDocument")), "Disconnect", []);
    await $.mcall((await $.v(C, "Wordapplication")), "Disconnect", []);
  } catch ($t1) {
    $.rethrowControl($t1);
    $.handled($t1);
    L0["savechanges"] = (await $.v(C, "WdDoNotSaveChanges"));
    L0["originalformat"] = (await $.v(C, "UnAssigned"));
    L0["routedocument"] = (await $.v(C, "UnAssigned"));
    await $.stmt((await $.mcall((await $.v(C, "WordApplication")), "Quit", [L0["savechanges"], L0["originalformat"], L0["routedocument"]])));
    await $.mcall((await $.v(C, "WordApplication")), "Disconnect", []);
    await $.stmt((await $.call(C, "ShowMessage", ["Bukmarklar daxil edilmeyib "])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TWReport", "SpeedButton4Click", async function SpeedButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
