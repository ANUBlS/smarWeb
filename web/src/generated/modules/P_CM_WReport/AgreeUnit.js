// Generated from AgreeUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AgreeUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActnList", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "OleServer", "ImgList", "Buttons", "variants", "WordXP", "DBGridEh", "Shlobj", "CheckLst", "Evanescence", "AgreeDataModImplUnit", "CommonDecls", "CurrencyToHR_AzeriAbo_Impl"]);
  const C = [U];
  U.defClass("TAgreeForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actinprint": {"name": "ActinPrint", "type": "TAction"}, "actnclose": {"name": "ActnClose", "type": "TAction"}, "wordapplication": {"name": "WordApplication", "type": "TWordApplication"}, "worddocument": {"name": "WordDocument", "type": "TWordDocument"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "looktemlate": {"name": "LookTemlate", "type": "TEvanescence"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "templid": {"name": "TemplID", "type": "Integer"}}, {});
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
  U.method("TAgreeForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "OracleDataSet1")), "close", []);
  { const $t1 = await $.iset((await $.mv((await $.mv((await $.v(C, "AgreeDataModule")), "OracleDataSet1")), "SQL")), [3], $.add($.add("where id in(", (await $.mv((await $.mv((await $.v(C, "LookTemlate")), "GetCheckedKeyList")), "CommaText"))), ")")); if ($t1 !== undefined) { await $.mset((await $.mv((await $.v(C, "AgreeDataModule")), "OracleDataSet1")), "SQL", $t1); } }
  await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "OracleDataSet1")), "open", []);
  { const $t2 = (await $.mv((await $.mv((await $.v(C, "AgreeDataModule")), "OracleDataSet1")), "RecordCount"));
    L0["i"] = 1;
    let $t3 = true;
    for (;;) {
      if (!$t3) { L0["i"] = $.succ(L0["i"], 1); }
      $t3 = false;
      if (!($.ord(L0["i"]) <= $.ord($t2))) break;
      await $.stmt((await $.call(C, "Cap", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "OracleDataSet1")), "FieldByName", ["Path"])), "AsString")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "OracleDataSet1")), "FieldByName", ["name"])), "AsString")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "OracleDataSet1")), "FieldByName", ["id"])), "AsInteger"))])));
      await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "OracleDataSet1")), "next", []);
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAgreeForm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "LookTemlate")), "CheckAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAgreeForm", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "LookTemlate")), "unCheckAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAgreeForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "komfaiz": 0, "cerfaiz": 0, "faizd": 0, "girov": 0, "ammount": 0, "skomfaiz": '', "scerfaiz": '', "faizy": '', "girovv": '', "yazidat": '', "valname": '', "yaz": '', "dat": 0};
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
  L0["faizd"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "yazi")), "FieldByName", ["annualyinterestrate"])), "asfloat"));
  L0["komfaiz"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "yazi")), "FieldByName", ["annualbankrate"])), "asfloat"));
  L0["cerfaiz"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "yazi")), "FieldByName", ["annualypenaltyrate"])), "asfloat"));
  L0["valname"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "yazi")), "FieldByName", ["VALU_NAME"])), "asstring"));
  L0["yaz"] = (await $.call(C, "CurrencyToHR_Azeri", [L0["ammount"], 2, [0], ""]));
  L0["yazidat"] = (await $.call(C, "CurrencyToHR_Azeri", [L0["dat"], 0, [0], ""]));
  L0["girovv"] = (await $.call(C, "CurrencyToHR_Azeri", [L0["girov"], 0, [0], "Azərbaycan manatı"]));
  L0["faizy"] = (await $.call(C, "CurrencyToHR_Azeri", [L0["faizd"], 0, [0], ""]));
  L0["skomfaiz"] = (await $.call(C, "CurrencyToHR_Azeri", [L0["komfaiz"], 0, [0], ""]));
  L0["scerfaiz"] = (await $.call(C, "CurrencyToHR_Azeri", [L0["cerfaiz"], 0, [0], ""]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "CreditInfoDataSet")), "SetVariable", ["man", L0["yaz"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "CreditInfoDataSet")), "SetVariable", ["dat", L0["yazidat"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "CreditInfoDataSet")), "SetVariable", ["gir", L0["girovv"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "CreditInfoDataSet")), "SetVariable", ["fa", L0["faizy"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "CreditInfoDataSet")), "SetVariable", ["kfaiz", L0["skomfaiz"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "CreditInfoDataSet")), "SetVariable", ["cfaiz", L0["scerfaiz"]])));
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
  const L0 = {"sender": $.copyArg(p0), result: undefined, "template": null, "templatebool": null, "ftemplatepath": null, "itemindex": null, "obookmarkcount": null, "what": null, "obookmarkname": null, "ibookmarkcount": 0, "tfieldname": '', "savechanges": null, "originalformat": null, "routedocument": null, "v_pozt": 0, "v_filename": '', "v_paziton": '', "v_filepas": null};
  await $.fixArgs(L0, ["sender"]);
  L0["filenotfound"] = "Fayıl tapılmadı";
  L0["desktoppath"] = $.fn(async function DesktopPath() {
  const L1 = {result: '', "zpath": $.sarr()};
  await $.stmt((await $.call(C, "SHGetFolderPath", [0, (await $.v(C, "CSIDL_DESKTOP")), 0, (await $.v(C, "SHGFP_TYPE_CURRENT")), L1["zpath"]])));
  L1["result"] = (L1["zpath"]);
  return L1.result;
});
  L0["v_filename"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "AgreeDataModule")), "TemplatesDataSet")), "FieldByName", ["Path"])), "AsString"));
  L0["v_pozt"] = (await $.call(C, "lastdelimiter", ["\\", L0["v_filename"]]));
  L0["v_paziton"] = (await $.call(C, "Copy", [L0["v_filename"], $.add(L0["v_pozt"], 1), (await $.call(C, "Length", [L0["v_filename"]]))]));
  await $.stmt((await $.call(C, "DeleteFile", [$.add($.add(L0["desktoppath"], "\\"), L0["v_paziton"])])));
  await $.stmt((await $.call(C, "CopyFile", [(await $.call(C, "PChar", [L0["v_filename"]])), (await $.call(C, "PChar", [$.add($.add(L0["desktoppath"], "\\"), L0["v_paziton"])])), false])));
  L0["v_filepas"] = $.add($.add(L0["desktoppath"], "\\"), L0["v_paziton"]);
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
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "WordApplication")), "Documents")), "Open", [L0["v_filepas"], L0["template"], L0["templatebool"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"]])));
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
      const $t5 = (await $.v(C, "AgreeDataModule"));
      const $t6 = (await $.wv([$t5], "ReplaceDataSet", C, false));
      const $t7 = (await $.wv([$t5, $t6], "WordDocument", C, false));
      { const $t8 = (await $.mv((await $.wv([$t5, $t6, $t7], "Bookmarks", C, false)), "Count"));
        await $.wset([$t5, $t6, $t7], "IbookmarkCount", 1, { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true });
        let $t9 = true;
        for (;;) {
          if (!$t9) { await $.wset([$t5, $t6, $t7], "IbookmarkCount", $.succ((await $.wv([$t5, $t6, $t7], "IbookmarkCount", { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }, false)), 1), { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }); }
          $t9 = false;
          if (!($.ord((await $.wv([$t5, $t6, $t7], "IbookmarkCount", { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }, false))) <= $.ord($t8))) break;
          await $.wset([$t5, $t6, $t7], "OBookmarkCount", (await $.wv([$t5, $t6, $t7], "IbookmarkCount", { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }, false)), { get: async () => L0["obookmarkcount"], set: async (v) => { L0["obookmarkcount"] = v; }, local: true });
          await $.wset([$t5, $t6, $t7], "oBookMarkName", (await $.mv((await $.mcall((await $.wv([$t5, $t6, $t7], "Bookmarks", C, false)), "Item", [(await $.wv([$t5, $t6, $t7], "OBookmarkCount", { get: async () => L0["obookmarkcount"], set: async (v) => { L0["obookmarkcount"] = v; }, local: true }, false))])), "Get_Name")), { get: async () => L0["obookmarkname"], set: async (v) => { L0["obookmarkname"] = v; }, local: true });
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t5, $t6, $t7], "WordApplication", C, false)), "Selection")), "GoTo_", [(await $.wv([$t5, $t6, $t7], "What", { get: async () => L0["what"], set: async (v) => { L0["what"] = v; }, local: true }, false)), (await $.wv([$t5, $t6, $t7], "EmptyParam", C, false)), (await $.wv([$t5, $t6, $t7], "EmptyParam", C, false)), (await $.wv([$t5, $t6, $t7], "oBookMarkName", { get: async () => L0["obookmarkname"], set: async (v) => { L0["obookmarkname"] = v; }, local: true }, false))])));
          await $.mcall((await $.wv([$t5, $t6, $t7], "ReplaceDataSet", C, false)), "Close", []);
          await $.stmt((await $.wcall([$t5, $t6, $t7], "SetVariable", ["tid", (await $.wv([$t5, $t6, $t7], "TemplID", C, false))], C)));
          await $.stmt((await $.wcall([$t5, $t6, $t7], "SetVariable", ["bname", (await $.wv([$t5, $t6, $t7], "oBookMarkName", { get: async () => L0["obookmarkname"], set: async (v) => { L0["obookmarkname"] = v; }, local: true }, false))], C)));
          await $.mcall((await $.wv([$t5, $t6, $t7], "ReplaceDataSet", C, false)), "Open", []);
          await $.wset([$t5, $t6, $t7], "tFieldName", (await $.mv((await $.wcall([$t5, $t6, $t7], "FIeldByName", ["FIELDNAME"], C)), "AsString")), { get: async () => L0["tfieldname"], set: async (v) => { L0["tfieldname"] = v; }, local: true });
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t5, $t6, $t7], "WordApplication", C, false)), "Selection")), "InsertAfter", [(await $.mv((await $.mcall((await $.wv([$t5, $t6, $t7], "CreditInfoDataSet", C, false)), "FieldByName", [(await $.wv([$t5, $t6, $t7], "tFieldName", { get: async () => L0["tfieldname"], set: async (v) => { L0["tfieldname"] = v; }, local: true }, false))])), "AsString"))])));
          await $.tick();
        }
      }
    }
    await $.mcall((await $.v(C, "WordDocument")), "Disconnect", []);
    await $.mcall((await $.v(C, "Wordapplication")), "Disconnect", []);
  } catch ($t4) {
    $.rethrowControl($t4);
    $.handled($t4);
    L0["savechanges"] = (await $.v(C, "WdDoNotSaveChanges"));
    L0["originalformat"] = (await $.v(C, "UnAssigned"));
    L0["routedocument"] = (await $.v(C, "UnAssigned"));
    await $.stmt((await $.mcall((await $.v(C, "WordApplication")), "Quit", [L0["savechanges"], L0["originalformat"], L0["routedocument"]])));
    await $.mcall((await $.v(C, "WordApplication")), "Disconnect", []);
    await $.stmt((await $.call(C, "ShowMessage", [$.add(L0["obookmarkname"], " Bukmarkı daxil edilmeyib ")])));
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
  U.method("TAgreeForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "activ": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.v(C, "AgreeDataModule"));
    await $.mcall((await $.wv([$t10], "ods_portfolio", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t10], "ods_portfolio", C, false)), "SetVariable", ["v_id", (await $.wv([$t10], "Get_SelectedCrdID", C, false))])));
    await $.mcall((await $.wv([$t10], "ods_portfolio", C, false)), "Open", []);
    if ($.truthy($.ne((await $.mv((await $.wv([$t10], "ods_portfolioCREDITTYPE", C, false)), "AsInteger")), 48))) {
      if ($.truthy($.eq((await $.mv((await $.wv([$t10], "ods_portfolioACTIVITIES", C, false)), "AsInteger")), 62))) {
        await $.wset([$t10], "activ", 62, { get: async () => L0["activ"], set: async (v) => { L0["activ"] = v; }, local: true });
      } else {
        await $.wset([$t10], "activ", 1, { get: async () => L0["activ"], set: async (v) => { L0["activ"] = v; }, local: true });
      }
    } else {
      await $.wset([$t10], "activ", 2, { get: async () => L0["activ"], set: async (v) => { L0["activ"] = v; }, local: true });
    }
    await $.mcall((await $.wv([$t10], "TemplatesDataSet", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t10], "TemplatesDataSet", C, false)), "SetVariable", ["v_mehid", (await $.mv((await $.wv([$t10], "ods_portfolioCREDITTYPE", C, false)), "AsInteger"))])));
    await $.stmt((await $.mcall((await $.wv([$t10], "TemplatesDataSet", C, false)), "SetVariable", ["v_activ", (await $.wv([$t10], "activ", { get: async () => L0["activ"], set: async (v) => { L0["activ"] = v; }, local: true }, false))])));
    await $.mcall((await $.wv([$t10], "TemplatesDataSet", C, false)), "open", []);
  }
  { const $t11 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t12 = true;
    for (;;) {
      if (!$t12) { L0["i"] = $.succ(L0["i"], 1); }
      $t12 = false;
      if (!($.ord(L0["i"]) <= $.ord($t11))) break;
      if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 3112))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "CheckAll", []);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAgreeForm", "Cap", async function Cap(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"path": $.copyArg(p0), "name": $.copyArg(p1), "id": $.copyArg(p2), result: undefined, "template": null, "templatebool": null, "ftemplatepath": null, "itemindex": null, "obookmarkcount": null, "what": null, "obookmarkname": null, "ibookmarkcount": 0, "tfieldname": '', "savechanges": null, "originalformat": null, "routedocument": null, "v_pozt": 0, "v_filename": '', "v_paziton": '', "v_filepas": null};
  await $.fixArgs(L0, ["path", "name", "id"]);
  L0["filenotfound"] = "Fayıl tapılmadı";
  L0["desktoppath"] = $.fn(async function DesktopPath() {
  const L1 = {result: '', "zpath": $.sarr()};
  await $.stmt((await $.call(C, "SHGetFolderPath", [0, (await $.v(C, "CSIDL_DESKTOP")), 0, (await $.v(C, "SHGFP_TYPE_CURRENT")), L1["zpath"]])));
  L1["result"] = (L1["zpath"]);
  return L1.result;
});
  L0["v_filename"] = L0["path"];
  L0["v_pozt"] = (await $.call(C, "lastdelimiter", ["\\", L0["v_filename"]]));
  L0["v_paziton"] = (await $.call(C, "Copy", [L0["v_filename"], $.add(L0["v_pozt"], 1), (await $.call(C, "Length", [L0["v_filename"]]))]));
  await $.stmt((await $.call(C, "DeleteFile", [$.add($.add(L0["desktoppath"], "\\"), L0["v_paziton"])])));
  await $.stmt((await $.call(C, "CopyFile", [(await $.call(C, "PChar", [L0["v_filename"]])), (await $.call(C, "PChar", [$.add($.add(L0["desktoppath"], "\\"), L0["v_paziton"])])), false])));
  L0["v_filepas"] = $.add($.add(L0["desktoppath"], "\\"), L0["v_paziton"]);
  L0["what"] = (await $.call(C, "OleVariant", [(await $.v(C, "wdGoToBookmark"))]));
  L0["ftemplatepath"] = L0["v_filepas"];
  await $.set(C, "TemplID", L0["id"]);
  L0["template"] = (await $.v(C, "EmptyParam"));
  L0["templatebool"] = false;
  L0["itemindex"] = 1;
  await $.mcall((await $.v(C, "Wordapplication")), "Connect", []);
  await $.mset((await $.v(C, "Wordapplication")), "Visible", true);
  await $.mset((await $.mv((await $.mv((await $.v(C, "WordApplication")), "Documents")), "Application")), "Caption", L0["name"]);
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
      const $t14 = (await $.v(C, "AgreeDataModule"));
      const $t15 = (await $.wv([$t14], "ReplaceDataSet", C, false));
      const $t16 = (await $.wv([$t14, $t15], "WordDocument", C, false));
      { const $t17 = (await $.mv((await $.wv([$t14, $t15, $t16], "Bookmarks", C, false)), "Count"));
        await $.wset([$t14, $t15, $t16], "IbookmarkCount", 1, { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true });
        let $t18 = true;
        for (;;) {
          if (!$t18) { await $.wset([$t14, $t15, $t16], "IbookmarkCount", $.succ((await $.wv([$t14, $t15, $t16], "IbookmarkCount", { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }, false)), 1), { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }); }
          $t18 = false;
          if (!($.ord((await $.wv([$t14, $t15, $t16], "IbookmarkCount", { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }, false))) <= $.ord($t17))) break;
          await $.wset([$t14, $t15, $t16], "OBookmarkCount", (await $.wv([$t14, $t15, $t16], "IbookmarkCount", { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }, false)), { get: async () => L0["obookmarkcount"], set: async (v) => { L0["obookmarkcount"] = v; }, local: true });
          await $.wset([$t14, $t15, $t16], "oBookMarkName", (await $.mv((await $.mcall((await $.wv([$t14, $t15, $t16], "Bookmarks", C, false)), "Item", [(await $.wv([$t14, $t15, $t16], "OBookmarkCount", { get: async () => L0["obookmarkcount"], set: async (v) => { L0["obookmarkcount"] = v; }, local: true }, false))])), "Get_Name")), { get: async () => L0["obookmarkname"], set: async (v) => { L0["obookmarkname"] = v; }, local: true });
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t14, $t15, $t16], "WordApplication", C, false)), "Selection")), "GoTo_", [(await $.wv([$t14, $t15, $t16], "What", { get: async () => L0["what"], set: async (v) => { L0["what"] = v; }, local: true }, false)), (await $.wv([$t14, $t15, $t16], "EmptyParam", C, false)), (await $.wv([$t14, $t15, $t16], "EmptyParam", C, false)), (await $.wv([$t14, $t15, $t16], "oBookMarkName", { get: async () => L0["obookmarkname"], set: async (v) => { L0["obookmarkname"] = v; }, local: true }, false))])));
          await $.mcall((await $.wv([$t14, $t15, $t16], "ReplaceDataSet", C, false)), "Close", []);
          await $.stmt((await $.wcall([$t14, $t15, $t16], "SetVariable", ["tid", (await $.wv([$t14, $t15, $t16], "TemplID", C, false))], C)));
          await $.stmt((await $.wcall([$t14, $t15, $t16], "SetVariable", ["bname", (await $.wv([$t14, $t15, $t16], "oBookMarkName", { get: async () => L0["obookmarkname"], set: async (v) => { L0["obookmarkname"] = v; }, local: true }, false))], C)));
          await $.mcall((await $.wv([$t14, $t15, $t16], "ReplaceDataSet", C, false)), "Open", []);
          await $.wset([$t14, $t15, $t16], "tFieldName", (await $.mv((await $.wcall([$t14, $t15, $t16], "FIeldByName", ["FIELDNAME"], C)), "AsString")), { get: async () => L0["tfieldname"], set: async (v) => { L0["tfieldname"] = v; }, local: true });
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t14, $t15, $t16], "WordApplication", C, false)), "Selection")), "InsertAfter", [(await $.mv((await $.mcall((await $.wv([$t14, $t15, $t16], "CreditInfoDataSet", C, false)), "FieldByName", [(await $.wv([$t14, $t15, $t16], "tFieldName", { get: async () => L0["tfieldname"], set: async (v) => { L0["tfieldname"] = v; }, local: true }, false))])), "AsString"))])));
          await $.tick();
        }
      }
    }
    await $.mcall((await $.v(C, "WordDocument")), "Disconnect", []);
    await $.mcall((await $.v(C, "Wordapplication")), "Disconnect", []);
  } catch ($t13) {
    $.rethrowControl($t13);
    $.handled($t13);
    L0["savechanges"] = (await $.v(C, "WdDoNotSaveChanges"));
    L0["originalformat"] = (await $.v(C, "UnAssigned"));
    L0["routedocument"] = (await $.v(C, "UnAssigned"));
    await $.stmt((await $.mcall((await $.v(C, "WordApplication")), "Quit", [L0["savechanges"], L0["originalformat"], L0["routedocument"]])));
    await $.mcall((await $.v(C, "WordApplication")), "Disconnect", []);
    await $.stmt((await $.call(C, "ShowMessage", [$.add(L0["obookmarkname"], " Bukmarkı daxil edilmeyib ")])));
  }
  return L0.result;
}, {"params": ["Path", "name", "id"], "kind": "procedure", "ptypes": ["String", "String", "integer"]});
  return U;
}
