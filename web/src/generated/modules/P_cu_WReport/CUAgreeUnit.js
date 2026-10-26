// Generated from CUAgreeUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CUAgreeUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActnList", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "OleServer", "ImgList", "Buttons", "variants", "WordXP", "CUAgreeDataModImplUnit", "CUCommonDecls", "CUCurrencyToHR_AzeriAbo_Impl"]);
  const C = [U];
  U.defClass("TAgreeForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actinprint": {"name": "ActinPrint", "type": "TAction"}, "actnclose": {"name": "ActnClose", "type": "TAction"}, "wordapplication": {"name": "WordApplication", "type": "TWordApplication"}, "worddocument": {"name": "WordDocument", "type": "TWordDocument"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "templid": {"name": "TemplID", "type": "Integer"}}, {});
  U.init(async () => {
    U.var_("AgreeForm", null, "TAgreeForm");
  });
  U.method("TAgreeForm", "ActnCloseExecute", async function ActnCloseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAgreeForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "girov": 0, "ammount": 0, "girovv": '', "yazidat": '', "valname": '', "yaz": '', "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "AgreeDataModule", (await $.mcall((await $.v(C, "TAgreeDataModule")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "CreditInfoDataSet")), "SetVariable", ["crid", (await $.v(C, "Get_SelectedCrdID"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "BookmarksDataSet")), "SetVariable", ["templid", (await $.v(C, "TemplID"))])));
  await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "BookmarksDataSet")), "Open", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "yazi")), "SetVariable", ["id", (await $.v(C, "Get_SelectedCrdID"))])));
  await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "yazi")), "open", []);
  L0["ammount"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "yazi")), "FieldByName", ["CREDITLINEAMOUNT"])), "asfloat"));
  L0["dat"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "yazi")), "FieldByName", ["per"])), "asinteger"));
  L0["girov"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "yazi")), "FieldByName", ["pledgeprice"])), "asfloat"));
  L0["valname"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "yazi")), "FieldByName", ["VALU_NAME"])), "asstring"));
  L0["yaz"] = (await $.call(C, "CurrencyToHR_Azeri", [L0["ammount"], 0, [0], L0["valname"]]));
  L0["yazidat"] = (await $.call(C, "CurrencyToHR_Azeri", [L0["dat"], 0, [0], "ay"]));
  L0["girovv"] = (await $.call(C, "CurrencyToHR_Azeri", [L0["girov"], 0, [0], "man"]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "CreditInfoDataSet")), "SetVariable", ["man", L0["yaz"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "CreditInfoDataSet")), "SetVariable", ["dat", L0["yazidat"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "CreditInfoDataSet")), "SetVariable", ["gir", L0["girovv"]])));
  await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "CreditInfoDataSet")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAgreeForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "BookmarksDataSet")), "CloseAll", []);
  await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "CreditInfoDataSet")), "CloseAll", []);
  await $.mcall((await $.v(C, "AgreeDataModule")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAgreeForm", "ActinPrintExecute", async function ActinPrintExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "template": null, "templatebool": null, "ftemplatepath": null, "itemindex": null, "obookmarkcount": null, "what": null, "obookmarkname": null, "ibookmarkcount": 0, "tfieldname": '', "savechanges": null, "originalformat": null, "routedocument": null};
  await $.fixArgs(L0, ["sender"]);
  L0["filenotfound"] = "Fayl tapılmadı";
  L0["what"] = (await $.call(C, "OleVariant", [(await $.v(C, "wdGoToBookmark"))]));
  L0["ftemplatepath"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "TemplatesDataSet")), "FieldByName", ["Path"])), "AsString"));
  await $.set(C, "TemplID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "TemplatesDataSet")), "FieldByName", ["ID"])), "AsInteger")));
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
    await $.stmt((await $.call(C, "ShowMessage", [L0["filenotfound"]])));
  }
  await $.stmt((await $.mcall((await $.v(C, "WordDocument")), "ConnectTo", [(await $.mcall((await $.mv((await $.v(C, "WordApplication")), "Documents")), "Item", [L0["itemindex"]]))])));
  await $.mset((await $.mv((await $.mv((await $.v(C, "WordDocument")), "Application")), "Get_ActiveWindow")), "Caption", (await $.v(C, "Caption")));
  try {
    {
      const $t2 = (await $.v(C, "AgreeDataModule"));
      const $t3 = (await $.wv([$t2], "ReplaceDataSet", C, false));
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
          await $.mcall((await $.wv([$t2, $t3, $t4], "ReplaceDataSet", C, false)), "Close", []);
          await $.stmt((await $.wcall([$t2, $t3, $t4], "SetVariable", ["tid", (await $.wv([$t2, $t3, $t4], "TemplID", C, false))], C)));
          await $.stmt((await $.wcall([$t2, $t3, $t4], "SetVariable", ["bname", (await $.wv([$t2, $t3, $t4], "oBookMarkName", { get: async () => L0["obookmarkname"], set: async (v) => { L0["obookmarkname"] = v; }, local: true }, false))], C)));
          await $.mcall((await $.wv([$t2, $t3, $t4], "ReplaceDataSet", C, false)), "Open", []);
          await $.wset([$t2, $t3, $t4], "tFieldName", (await $.mv((await $.wcall([$t2, $t3, $t4], "FIeldByName", ["FIELDNAME"], C)), "AsString")), { get: async () => L0["tfieldname"], set: async (v) => { L0["tfieldname"] = v; }, local: true });
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t2, $t3, $t4], "WordApplication", C, false)), "Selection")), "InsertAfter", [(await $.mv((await $.mcall((await $.wv([$t2, $t3, $t4], "CreditInfoDataSet", C, false)), "FieldByName", [(await $.wv([$t2, $t3, $t4], "tFieldName", { get: async () => L0["tfieldname"], set: async (v) => { L0["tfieldname"] = v; }, local: true }, false))])), "AsString"))])));
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
  U.method("TAgreeForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TAgreeForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
