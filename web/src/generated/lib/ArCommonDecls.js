// Generated from ArCommonDecls.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ArCommonDecls", ["SysUtils", "Classes", "Controls", "DBGrids", "Forms", "Messages", "DBGridEh", "DB", "OracleData", "ArLogOutputImpl", "ArTemporaryTransactionsViewFormImpl"]);
  const C = [U];
  U.const("rmLocateAfterRefresh", 0);
  U.const("rmGoBookmarkAfterRefresh", 1);
  U.const("rmMoveRecNoAfterRefresh", 2);
  U.const("rmRefreshOnly", 3);
  U.defClass("ENoCreditSelected", "Exception", {}, {});
  U.init(async () => {
    U.const("WM_SHOWDOCKPANEL", $.add((await $.v(C, "WM_USER")), 1));
    U.const("sID", "ID");
    U.const("sNO", "NumberOfCredit");
    U.var_("CommonDBGrid", null, "TDBGridEh");
    U.var_("CommonApplication", null, "TApplication");
    U.var_("CommonScreen", null, "TScreen");
  });
  U.func("LogWarning", async function LogWarning(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"outputmsg": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["outputmsg"]);
  await $.stmt((await $.mcall((await $.v(C, "frmLogOutput")), "LogWarning", [L0["outputmsg"]])));
  return L0.result;
}, {"params": ["OutputMsg"], "kind": "procedure", "ptypes": ["String"]});
  U.func("LogError", async function LogError(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"outputmsg": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["outputmsg"]);
  await $.stmt((await $.mcall((await $.v(C, "frmLogOutput")), "LogError", [L0["outputmsg"]])));
  return L0.result;
}, {"params": ["OutputMsg"], "kind": "procedure", "ptypes": ["String"]});
  U.func("LogInformation", async function LogInformation(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"outputmsg": $.copyArg(p0), "makevisible": (p1 === undefined ? false : p1), result: undefined};
  await $.fixArgs(L0, ["outputmsg", "makevisible"]);
  await $.stmt((await $.mcall((await $.v(C, "frmLogOutput")), "LogInformation", [L0["outputmsg"], L0["makevisible"]])));
  return L0.result;
}, {"params": ["OutputMsg", "MakeVisible"], "kind": "procedure", "ptypes": ["String", "Boolean"]});
  U.func("Get_SelectedCrdID", async function Get_SelectedCrdID(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "CommonDBGrid")), "DataSource")), "DataSet")), "FieldByName", [(await $.v(C, "sID"))])), "IsNull")))) {
    throw $.raise((await $.mcall((await $.v(C, "ENoCreditSelected")), "Create", ["Heç bir kredit seçilməyib !"])));
  }
  L0["result"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "CommonDBGrid")), "DataSource")), "DataSet")), "FieldByName", [(await $.v(C, "sID"))])), "AsInteger"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("Get_SelectedCrdNo", async function Get_SelectedCrdNo(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "CommonDBGrid")), "DataSource")), "DataSet")), "FieldByName", [(await $.v(C, "sID"))])), "IsNull")))) {
    throw $.raise((await $.mcall((await $.v(C, "ENoCreditSelected")), "Create", ["Heç bir kredit seçilməyib!"])));
  }
  L0["result"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "CommonDBGrid")), "DataSource")), "DataSet")), "FieldByName", [(await $.v(C, "sNO"))])), "AsString"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("TrDelayed_Show", async function TrDelayed_Show(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), "scaption": (p1 === undefined ? "" : p1), result: false};
  await $.fixArgs(L0, ["aowner", "scaption"]);
  {
    const $t1 = (await $.mcall((await $.v(C, "TTrViewForm")), "Create", [L0["aowner"]]));
    try {
      if ($.truthy($.ne((await $.wv([$t1], "SCaption", { get: async () => L0["scaption"], set: async (v) => { L0["scaption"] = v; }, local: true }, false)), ""))) {
        await $.wset([$t1], "Caption", (await $.wv([$t1], "SCaption", { get: async () => L0["scaption"], set: async (v) => { L0["scaption"] = v; }, local: true }, false)), C);
      }
      await $.wset([$t1], "Result", $.eq((await $.wv([$t1], "ShowModal", C, false)), (await $.wv([$t1], "mrOk", C, false))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      await $.stmt($.wcall([$t1], "Update", [], C));
    } finally {
      await $.stmt($.wcall([$t1], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["AOwner", "SCaption"], "kind": "function", "ptypes": ["TComponent", "String"]});
  U.func("SafeRefresh", async function SafeRefresh(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"clearselectedrows": $.copyArg(p0), "refreshmode": (p1 === undefined ? (await $.v(C, "rmMoveRecNoAfterRefresh")) : p1), result: undefined, "savepoint": null, "saveid": 0, "saverecno": 0};
  await $.fixArgs(L0, ["clearselectedrows", "refreshmode"]);
  {
    const $t2 = (await $.mv((await $.mv((await $.v(C, "CommonDBGrid")), "DataSource")), "DataSet"));
    { const $t3 = (await $.wv([$t2], "RefreshMode", { get: async () => L0["refreshmode"], set: async (v) => { L0["refreshmode"] = v; }, local: true }, false));
      if ($.eq($t3, (await $.wv([$t2], "rmLocateAfterRefresh", C, false)))) {
        await $.wset([$t2], "SaveID", (await $.wv([$t2], "Get_SelectedCrdID", C, false)), { get: async () => L0["saveid"], set: async (v) => { L0["saveid"] = v; }, local: true });
        await $.stmt($.wcall([$t2], "Refresh", [], C));
        await $.stmt((await $.wcall([$t2], "Locate", [(await $.wv([$t2], "sID", C, false)), (await $.wv([$t2], "SaveID", { get: async () => L0["saveid"], set: async (v) => { L0["saveid"] = v; }, local: true }, false)), []], C)));
      }
      else if ($.eq($t3, (await $.wv([$t2], "rmGoBookmarkAfterRefresh", C, false)))) {
        await $.wset([$t2], "SavePoint", (await $.wv([$t2], "GetBookmark", C, false)), { get: async () => L0["savepoint"], set: async (v) => { L0["savepoint"] = v; }, local: true });
        await $.stmt($.wcall([$t2], "Refresh", [], C));
        if ($.truthy((await $.wcall([$t2], "BookmarkValid", [(await $.wv([$t2], "SavePoint", { get: async () => L0["savepoint"], set: async (v) => { L0["savepoint"] = v; }, local: true }, false))], C)))) {
          await $.stmt((await $.wcall([$t2], "GotoBookmark", [(await $.wv([$t2], "SavePoint", { get: async () => L0["savepoint"], set: async (v) => { L0["savepoint"] = v; }, local: true }, false))], C)));
        }
      }
      else if ($.eq($t3, (await $.wv([$t2], "rmMoveRecNoAfterRefresh", C, false)))) {
        await $.wset([$t2], "SaveRecNo", (await $.wv([$t2], "RecNo", C, false)), { get: async () => L0["saverecno"], set: async (v) => { L0["saverecno"] = v; }, local: true });
        await $.stmt($.wcall([$t2], "Refresh", [], C));
        if ($.truthy($.gt((await $.wv([$t2], "SaveRecNo", { get: async () => L0["saverecno"], set: async (v) => { L0["saverecno"] = v; }, local: true }, false)), (await $.wv([$t2], "RecordCount", C, false))))) {
          await $.wset([$t2], "SaveRecNo", (await $.wv([$t2], "RecordCount", C, false)), { get: async () => L0["saverecno"], set: async (v) => { L0["saverecno"] = v; }, local: true });
        }
        await $.wset([$t2], "RecNo", (await $.wv([$t2], "SaveRecNo", { get: async () => L0["saverecno"], set: async (v) => { L0["saverecno"] = v; }, local: true }, false)), C);
      }
      else if ($.eq($t3, (await $.wv([$t2], "rmRefreshOnly", C, false)))) {
        await $.stmt($.wcall([$t2], "Refresh", [], C));
      }
    }
  }
  if ($.truthy(L0["clearselectedrows"])) {
    {
      const $t4 = (await $.v(C, "CommonDBGrid"));
      await $.mcall((await $.wv([$t4], "SelectedRows", C, false)), "Clear", []);
    }
  }
  return L0.result;
}, {"params": ["ClearSelectedRows", "RefreshMode"], "kind": "procedure", "ptypes": ["Boolean", "TRefreshMode"]});
  return U;
}
