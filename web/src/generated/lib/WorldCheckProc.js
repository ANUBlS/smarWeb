// Generated from WorldCheckProc.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("WorldCheckProc", ["Oracle", "OracleData", "SboapiDataModuleImpl", "Forms", "Dialogs", "SysUtils"]);
  const C = [U];
  U.init(async () => {
    U.var_("OQuery", null, "TOracleQuery");
    U.var_("ODataSet", null, "TOracleDataSet");
    U.var_("ODSCliName", null, "TOracleDataSet");
    U.var_("ODSQuery", null, "TOracleQuery");
  });
  U.func("CheckName", async function CheckName(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"pname": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["pname"]);
  if ($.truthy($.eq(L0["pname"], ""))) {
    return L0.result;
  }
  {
    const $t1 = (await $.wobj(C, "ODataSet"));
    await $.wset([$t1], "ODataSet", (await $.mcall((await $.wv([$t1], "TOracleDataSet", C, false)), "Create", [null])), C);
    await $.wset([$t1], "Session", (await $.mv((await $.wv([$t1], "sboapiDataModule", C, false)), "SBSession")), C);
    await $.wset([$t1], "QueryAllRecords", (await $.wv([$t1], "false", C, false)), C);
    await $.wset([$t1], "ReadBuffer", 1, C);
    await $.mset((await $.wv([$t1], "SQL", C, false)), "Text", "select alias from world_chek where ");
    await $.mset((await $.wv([$t1], "SQL", C, false)), "Text", $.add($.add($.add((await $.mv((await $.wv([$t1], "SQL", C, false)), "Text")), "lower(replace(alias, ' ','')) like '%"), (await $.wcall([$t1], "LowerCase", [(await $.wv([$t1], "PName", { get: async () => L0["pname"], set: async (v) => { L0["pname"] = v; }, local: true }, false))], C))), "%'"));
    await $.stmt($.wcall([$t1], "Open", [], C));
    await $.wset([$t1], "Result", 0, { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    if ($.truthy($.not((await $.mv((await $.wv([$t1], "ODataSet", C, false)), "IsEmpty"))))) {
      {
        const $t2 = (await $.wv([$t1], "ODSQuery", C, false));
        await $.wset([$t1, $t2], "ODSQuery", (await $.mcall((await $.wv([$t1, $t2], "TOracleQuery", C, false)), "Create", [null])), C);
        await $.wset([$t1, $t2], "Session", (await $.mv((await $.wv([$t1, $t2], "sboapiDataModule", C, false)), "SBSession")), C);
        await $.mset((await $.wv([$t1, $t2], "SQL", C, false)), "Text", $.add($.add("insert into worldcheck_trans (name) values ('", (await $.wv([$t1, $t2], "PName", { get: async () => L0["pname"], set: async (v) => { L0["pname"] = v; }, local: true }, false))), "')"));
        await $.stmt($.wcall([$t1, $t2], "Execute", [], C));
        await $.mset((await $.wv([$t1, $t2], "SQL", C, false)), "Text", "commit");
        await $.stmt($.wcall([$t1, $t2], "Execute", [], C));
        await $.wset([$t1, $t2], "Result", 1, { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      }
    }
  }
  return L0.result;
}, {"params": ["PName"], "kind": "function", "ptypes": ["String"]});
  U.func("WorldCheck", async function WorldCheck(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"name1": $.copyArg(p0), "name2": $.copyArg(p1), "acc1": $.copyArg(p2), "acc2": $.copyArg(p3), "pkey": $.copyArg(p4), result: 0, "pname": '', "namefl": '', "namelf": '', "res": 0};
  await $.fixArgs(L0, ["name1", "name2", "acc1", "acc2", "pkey"]);
  L0["res"] = 0;
  if ($.truthy($.ne((await $.call(C, "Trim", [L0["name1"]])), ""))) {
    L0["pname"] = (await $.call(C, "StringReplace", [L0["name1"], " ", "", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]));
    L0["res"] = (await $.call(C, "CheckName", [L0["pname"]]));
  }
  if ($.truthy($.gt(L0["res"], 0))) {
    L0["result"] = 1;
    return L0.result;
  }
  if ($.truthy($.ne((await $.call(C, "Trim", [L0["name2"]])), ""))) {
    L0["pname"] = (await $.call(C, "StringReplace", [L0["name2"], " ", "", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]));
    L0["res"] = $.add(L0["res"], (await $.call(C, "CheckName", [L0["pname"]])));
  }
  if ($.truthy($.gt(L0["res"], 0))) {
    L0["result"] = 1;
    return L0.result;
  }
  if ($.truthy($.gt(L0["acc1"], 0))) {
    {
      const $t3 = (await $.wobj(C, "ODSCliName"));
      await $.wset([$t3], "ODSCliName", (await $.mcall((await $.wv([$t3], "TOracleDataSet", C, false)), "Create", [null])), C);
      await $.wset([$t3], "Session", (await $.mv((await $.wv([$t3], "sboapiDataModule", C, false)), "SBSession")), C);
      await $.wset([$t3], "QueryAllRecords", (await $.wv([$t3], "false", C, false)), C);
      await $.wset([$t3], "ReadBuffer", 1, C);
      await $.mset((await $.wv([$t3], "SQL", C, false)), "Text", $.add($.add("select idcust ID, Name||LastName Name from custinfo where idcust = (select kli_id from account where id = ", (await $.wcall([$t3], "IntToStr", [(await $.wv([$t3], "Acc1", { get: async () => L0["acc1"], set: async (v) => { L0["acc1"] = v; }, local: true }, false))], C))), ")"));
      await $.stmt($.wcall([$t3], "Open", [], C));
      await $.wset([$t3], "PName", (await $.wcall([$t3], "StringReplace", [(await $.mv((await $.mcall((await $.wv([$t3], "ODSCliName", C, false)), "FieldByName", ["Name"])), "AsString")), " ", "", [(await $.wv([$t3], "rfReplaceAll", C, false)), (await $.wv([$t3], "rfIgnoreCase", C, false))]], C)), { get: async () => L0["pname"], set: async (v) => { L0["pname"] = v; }, local: true });
      await $.wset([$t3], "Res", $.add((await $.wv([$t3], "Res", { get: async () => L0["res"], set: async (v) => { L0["res"] = v; }, local: true }, false)), (await $.wcall([$t3], "CheckName", [(await $.wv([$t3], "PName", { get: async () => L0["pname"], set: async (v) => { L0["pname"] = v; }, local: true }, false))], C))), { get: async () => L0["res"], set: async (v) => { L0["res"] = v; }, local: true });
    }
  }
  if ($.truthy($.gt(L0["res"], 0))) {
    L0["result"] = 1;
    return L0.result;
  }
  if ($.truthy($.gt(L0["acc2"], 0))) {
    {
      const $t4 = (await $.wobj(C, "ODSCliName"));
      await $.wset([$t4], "ODSCliName", (await $.mcall((await $.wv([$t4], "TOracleDataSet", C, false)), "Create", [null])), C);
      await $.wset([$t4], "Session", (await $.mv((await $.wv([$t4], "sboapiDataModule", C, false)), "SBSession")), C);
      await $.wset([$t4], "QueryAllRecords", (await $.wv([$t4], "false", C, false)), C);
      await $.wset([$t4], "ReadBuffer", 1, C);
      await $.mset((await $.wv([$t4], "SQL", C, false)), "Text", $.add($.add("select idcust ID, Name||LastName Name from custinfo where idcust = (select kli_id from account where id = ", (await $.wcall([$t4], "IntToStr", [(await $.wv([$t4], "Acc2", { get: async () => L0["acc2"], set: async (v) => { L0["acc2"] = v; }, local: true }, false))], C))), ")"));
      await $.stmt($.wcall([$t4], "Open", [], C));
      await $.wset([$t4], "PName", (await $.wcall([$t4], "StringReplace", [(await $.mv((await $.mcall((await $.wv([$t4], "ODSCliName", C, false)), "FieldByName", ["Name"])), "AsString")), " ", "", [(await $.wv([$t4], "rfReplaceAll", C, false)), (await $.wv([$t4], "rfIgnoreCase", C, false))]], C)), { get: async () => L0["pname"], set: async (v) => { L0["pname"] = v; }, local: true });
      await $.wset([$t4], "Res", $.add((await $.wv([$t4], "Res", { get: async () => L0["res"], set: async (v) => { L0["res"] = v; }, local: true }, false)), (await $.wcall([$t4], "CheckName", [(await $.wv([$t4], "PName", { get: async () => L0["pname"], set: async (v) => { L0["pname"] = v; }, local: true }, false))], C))), { get: async () => L0["res"], set: async (v) => { L0["res"] = v; }, local: true });
    }
  }
  if ($.truthy($.gt(L0["res"], 0))) {
    L0["result"] = 1;
  } else {
    L0["result"] = 0;
  }
  return L0.result;
}, {"params": ["Name1", "Name2", "Acc1", "Acc2", "PKey"], "kind": "function", "ptypes": ["String", "String", "integer", "integer", "String"]});
  U.func("WorldCheckCommit", async function WorldCheckCommit(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"transid": $.copyArg(p0), "name1": $.copyArg(p1), "name2": $.copyArg(p2), "acc1": $.copyArg(p3), "acc2": $.copyArg(p4), "pkey": $.copyArg(p5), result: 0, "pname": '', "namefl": '', "namelf": '', "res": 0};
  await $.fixArgs(L0, ["transid", "name1", "name2", "acc1", "acc2", "pkey"]);
  L0["res"] = 0;
  if ($.truthy($.ne((await $.call(C, "Trim", [L0["name1"]])), ""))) {
    L0["pname"] = (await $.call(C, "StringReplace", [L0["name1"], " ", "", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]));
    L0["res"] = (await $.call(C, "CheckName", [L0["pname"]]));
  }
  if ($.truthy($.ne((await $.call(C, "Trim", [L0["name2"]])), ""))) {
    L0["pname"] = (await $.call(C, "StringReplace", [L0["name2"], " ", "", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]));
    L0["res"] = $.add(L0["res"], (await $.call(C, "CheckName", [L0["pname"]])));
  }
  if ($.truthy($.gt(L0["acc1"], 0))) {
    {
      const $t5 = (await $.wobj(C, "ODSCliName"));
      await $.wset([$t5], "ODSCliName", (await $.mcall((await $.wv([$t5], "TOracleDataSet", C, false)), "Create", [null])), C);
      await $.wset([$t5], "Session", (await $.mv((await $.wv([$t5], "sboapiDataModule", C, false)), "SBSession")), C);
      await $.mset((await $.wv([$t5], "SQL", C, false)), "Text", $.add($.add("select id, Name from customers where id = (select kli_id from account where id = ", (await $.wcall([$t5], "IntToStr", [(await $.wv([$t5], "Acc1", { get: async () => L0["acc1"], set: async (v) => { L0["acc1"] = v; }, local: true }, false))], C))), ")"));
      await $.stmt($.wcall([$t5], "Open", [], C));
      await $.wset([$t5], "PName", (await $.wcall([$t5], "StringReplace", [(await $.mv((await $.mcall((await $.wv([$t5], "ODSCliName", C, false)), "FieldByName", ["Name"])), "AsString")), " ", "", [(await $.wv([$t5], "rfReplaceAll", C, false)), (await $.wv([$t5], "rfIgnoreCase", C, false))]], C)), { get: async () => L0["pname"], set: async (v) => { L0["pname"] = v; }, local: true });
      await $.wset([$t5], "Res", $.add((await $.wv([$t5], "Res", { get: async () => L0["res"], set: async (v) => { L0["res"] = v; }, local: true }, false)), (await $.wcall([$t5], "CheckName", [(await $.wv([$t5], "PName", { get: async () => L0["pname"], set: async (v) => { L0["pname"] = v; }, local: true }, false))], C))), { get: async () => L0["res"], set: async (v) => { L0["res"] = v; }, local: true });
    }
  }
  if ($.truthy($.gt(L0["acc2"], 0))) {
    {
      const $t6 = (await $.wobj(C, "ODSCliName"));
      await $.wset([$t6], "ODSCliName", (await $.mcall((await $.wv([$t6], "TOracleDataSet", C, false)), "Create", [null])), C);
      await $.wset([$t6], "Session", (await $.mv((await $.wv([$t6], "sboapiDataModule", C, false)), "SBSession")), C);
      await $.mset((await $.wv([$t6], "SQL", C, false)), "Text", $.add($.add("select id, Name from customers where id = (select kli_id from account where id = ", (await $.wcall([$t6], "IntToStr", [(await $.wv([$t6], "Acc2", { get: async () => L0["acc2"], set: async (v) => { L0["acc2"] = v; }, local: true }, false))], C))), ")"));
      await $.stmt($.wcall([$t6], "Open", [], C));
      await $.wset([$t6], "PName", (await $.wcall([$t6], "StringReplace", [(await $.mv((await $.mcall((await $.wv([$t6], "ODSCliName", C, false)), "FieldByName", ["Name"])), "AsString")), " ", "", [(await $.wv([$t6], "rfReplaceAll", C, false)), (await $.wv([$t6], "rfIgnoreCase", C, false))]], C)), { get: async () => L0["pname"], set: async (v) => { L0["pname"] = v; }, local: true });
      await $.wset([$t6], "Res", $.add((await $.wv([$t6], "Res", { get: async () => L0["res"], set: async (v) => { L0["res"] = v; }, local: true }, false)), (await $.wcall([$t6], "CheckName", [(await $.wv([$t6], "PName", { get: async () => L0["pname"], set: async (v) => { L0["pname"] = v; }, local: true }, false))], C))), { get: async () => L0["res"], set: async (v) => { L0["res"] = v; }, local: true });
    }
  }
  if ($.truthy($.gt(L0["res"], 0))) {
    L0["result"] = 1;
  } else {
    L0["result"] = 0;
  }
  return L0.result;
}, {"params": ["TransID", "Name1", "Name2", "Acc1", "Acc2", "PKey"], "kind": "function", "ptypes": ["integer", "String", "String", "integer", "integer", "String"]});
  return U;
}
