// Generated from NewCommonDeclsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewCommonDeclsImpl", ["SysUtils", "Classes", "Controls", "DBGridEh", "Forms", "Messages", "DB", "Windows", "NewTemporaryTransactionsFormImpl", "XDBGrids"]);
  const C = [U];
  U.const("rmLocateAfterRefresh", 0);
  U.const("rmGoBookmarkAfterRefresh", 1);
  U.const("rmMoveRecNoAfterRefresh", 2);
  U.const("rmRefreshOnly", 3);
  U.defClass("ENoDepositSelected", "Exception", {}, {});
  U.init(async () => {
    U.var_("CommonApplication", null, "TApplication");
    U.var_("CommonScreen", null, "TScreen");
    U.var_("CommonGrid", null, "TXDBGrid");
    U.var_("Get_BankDate", 0, "TDateTime");
    U.var_("Get_FilialID", 0, "Integer");
    U.var_("ApplicationPath", '', "String");
  });
  U.func("LoadPlugin", async function LoadPlugin(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"pluginname": $.copyArg(p0), "pluginparam": $.copyArg(p1), result: undefined, "pluginhandle": 0, "exportproc": null};
  await $.fixArgs(L0, ["pluginname", "pluginparam"]);
  L0["pluginhandle"] = (await $.call(C, "LoadPackage", [$.add((await $.v(C, "ApplicationPath")), L0["pluginname"])]));
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    L0["exportproc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], "exportproc"]));
    await $.stmt((await $.callv(L0["exportproc"], [L0["pluginparam"]])));
  }
  return L0.result;
}, {"params": ["PluginName", "PluginParam"], "kind": "procedure", "ptypes": ["String", "String"]});
  U.func("UnLoadPlugin", async function UnLoadPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"pluginhandle": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["pluginhandle"]);
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    await $.stmt((await $.call(C, "UnloadPackage", [L0["pluginhandle"]])));
  }
  return L0.result;
}, {"params": ["PluginHandle"], "kind": "procedure", "ptypes": ["THandle"]});
  U.func("Get_SelectedContID", async function Get_SelectedContID(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "CommonGrid")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "IsNull")))) {
    throw $.raise((await $.mcall((await $.v(C, "ENoDepositSelected")), "Create", ["Heç bir Depozit seçilməyib!"])));
  }
  L0["result"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "CommonGrid")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("RefreshWithSavely", async function RefreshWithSavely(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"savetype": $.copyArg(p0), "refreshmode": (p1 === undefined ? (await $.v(C, "rmMoveRecNoAfterRefresh")) : p1), result: undefined, "savepoint": null, "saveid": 0, "saverecno": 0};
  await $.fixArgs(L0, ["savetype", "refreshmode"]);
  {
    const $t1 = (await $.mv((await $.mv((await $.v(C, "CommonGrid")), "DataSource")), "DataSet"));
    { const $t2 = (await $.wv([$t1], "RefreshMode", { get: async () => L0["refreshmode"], set: async (v) => { L0["refreshmode"] = v; }, local: true }, false));
      if ($.eq($t2, (await $.wv([$t1], "rmLocateAfterRefresh", C, false)))) {
        await $.wset([$t1], "SaveID", (await $.wv([$t1], "Get_SelectedContID", C, false)), { get: async () => L0["saveid"], set: async (v) => { L0["saveid"] = v; }, local: true });
        await $.stmt($.wcall([$t1], "Refresh", [], C));
        await $.stmt((await $.wcall([$t1], "Locate", ["ID", (await $.wv([$t1], "SaveID", { get: async () => L0["saveid"], set: async (v) => { L0["saveid"] = v; }, local: true }, false)), []], C)));
      }
      else if ($.eq($t2, (await $.wv([$t1], "rmGoBookmarkAfterRefresh", C, false)))) {
        await $.wset([$t1], "SavePoint", (await $.wv([$t1], "GetBookmark", C, false)), { get: async () => L0["savepoint"], set: async (v) => { L0["savepoint"] = v; }, local: true });
        await $.stmt($.wcall([$t1], "Refresh", [], C));
        if ($.truthy((await $.wcall([$t1], "BookmarkValid", [(await $.wv([$t1], "SavePoint", { get: async () => L0["savepoint"], set: async (v) => { L0["savepoint"] = v; }, local: true }, false))], C)))) {
          await $.stmt((await $.wcall([$t1], "GotoBookmark", [(await $.wv([$t1], "SavePoint", { get: async () => L0["savepoint"], set: async (v) => { L0["savepoint"] = v; }, local: true }, false))], C)));
        }
      }
      else if ($.eq($t2, (await $.wv([$t1], "rmMoveRecNoAfterRefresh", C, false)))) {
        await $.wset([$t1], "SaveRecNo", (await $.wv([$t1], "RecNo", C, false)), { get: async () => L0["saverecno"], set: async (v) => { L0["saverecno"] = v; }, local: true });
        await $.stmt($.wcall([$t1], "Refresh", [], C));
        if ($.truthy($.gt((await $.wv([$t1], "SaveRecNo", { get: async () => L0["saverecno"], set: async (v) => { L0["saverecno"] = v; }, local: true }, false)), (await $.wv([$t1], "RecordCount", C, false))))) {
          await $.wset([$t1], "SaveRecNo", (await $.wv([$t1], "RecordCount", C, false)), { get: async () => L0["saverecno"], set: async (v) => { L0["saverecno"] = v; }, local: true });
        }
        await $.wset([$t1], "RecNo", (await $.wv([$t1], "SaveRecNo", { get: async () => L0["saverecno"], set: async (v) => { L0["saverecno"] = v; }, local: true }, false)), C);
      }
      else if ($.eq($t2, (await $.wv([$t1], "rmRefreshOnly", C, false)))) {
        await $.stmt($.wcall([$t1], "Refresh", [], C));
      }
    }
  }
  if ($.truthy(L0["savetype"])) {
    {
      const $t3 = (await $.v(C, "CommonGrid"));
      await $.mcall((await $.wv([$t3], "SelectedRows", C, false)), "Clear", []);
    }
  }
  return L0.result;
}, {"params": ["SaveType", "RefreshMode"], "kind": "procedure", "ptypes": ["Boolean", "TRefreshMode"]});
  U.func("Get_SelectedContNo", async function Get_SelectedContNo(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "CommonGrid")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "IsNull")))) {
    throw $.raise((await $.mcall((await $.v(C, "ENoDepositSelected")), "Create", ["Heç bir Depozit seçilməyib!"])));
  }
  L0["result"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "CommonGrid")), "DataSource")), "DataSet")), "FieldByName", ["Contractno"])), "AsString"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("TrDelayed_Show", async function TrDelayed_Show(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), "scaption": (p1 === undefined ? "" : p1), result: false};
  await $.fixArgs(L0, ["aowner", "scaption"]);
  {
    const $t4 = (await $.mcall((await $.v(C, "TNewTransactionsViewForm")), "Create", [L0["aowner"]]));
    try {
      if ($.truthy($.ne((await $.wv([$t4], "SCaption", { get: async () => L0["scaption"], set: async (v) => { L0["scaption"] = v; }, local: true }, false)), ""))) {
        await $.wset([$t4], "Caption", (await $.wv([$t4], "SCaption", { get: async () => L0["scaption"], set: async (v) => { L0["scaption"] = v; }, local: true }, false)), C);
      }
      await $.wset([$t4], "Result", $.eq((await $.wv([$t4], "ShowModal", C, false)), (await $.wv([$t4], "mrOk", C, false))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      await $.stmt($.wcall([$t4], "Update", [], C));
    } finally {
      await $.stmt($.wcall([$t4], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["AOwner", "SCaption"], "kind": "function", "ptypes": ["TComponent", "String"]});
  return U;
}
