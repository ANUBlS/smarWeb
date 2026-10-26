// Generated from CommonDeclsImpl_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CommonDeclsImpl_new", ["SysUtils", "Classes", "Controls", "DBGridEh", "Forms", "Messages", "DB", "Windows", "TemporaryTransactionsFormImpl_new", "XDBGrids"]);
  const C = [U];
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
  U.func("RefreshWithSavely", async function RefreshWithSavely(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"savetype": $.copyArg(p0), result: undefined, "saveid": 0};
  await $.fixArgs(L0, ["savetype"]);
  await $.mcall((await $.mv((await $.v(C, "CommonGrid")), "SelectedRows")), "Clear", []);
  {
    const $t1 = (await $.v(C, "CommonGrid"));
    const $t2 = (await $.wv([$t1], "DataSource", C, false));
    const $t3 = (await $.wv([$t1, $t2], "DataSet", C, false));
    await $.wset([$t1, $t2, $t3], "SaveID", (await $.wv([$t1, $t2, $t3], "Get_SelectedContID", C, false)), { get: async () => L0["saveid"], set: async (v) => { L0["saveid"] = v; }, local: true });
    await $.stmt($.wcall([$t1, $t2, $t3], "Refresh", [], C));
    await $.stmt((await $.wcall([$t1, $t2, $t3], "Locate", ["ID", (await $.wv([$t1, $t2, $t3], "SaveID", { get: async () => L0["saveid"], set: async (v) => { L0["saveid"] = v; }, local: true }, false)), []], C)));
  }
  return L0.result;
}, {"params": ["SaveType"], "kind": "procedure", "ptypes": ["Boolean"]});
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
    const $t4 = (await $.mcall((await $.v(C, "TTransactionsViewForm_new")), "Create", [L0["aowner"]]));
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
