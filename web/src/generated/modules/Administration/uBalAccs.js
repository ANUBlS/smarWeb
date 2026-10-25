// Generated from uBalAccs.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("uBalAccs", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CheckLst", "Evanescence", "Grids", "DBGrids", "DBCtrls", "AdministrationDataModule"]);
  const C = [U];
  U.defClass("TfrmBalAccs", "TForm", {"evanescence1": {"name": "Evanescence1", "type": "TEvanescence"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}}, {});
  U.init(async () => {
    U.var_("frmBalAccs", null, "TfrmBalAccs");
  });
  U.method("TfrmBalAccs", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.mv((await $.v(C, "Evanescence1")), "DataSource")), "DataSet"));
    const $t2 = (await $.wv([$t1], "Evanescence1", C, false));
    await $.stmt($.wcall([$t1, $t2], "Close", [], C));
    await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    await $.stmt($.wcall([$t1, $t2], "First", [], C));
    while ($.truthy(($.not((await $.wv([$t1, $t2], "Eof", C, false)))))) {
      { const $t3 = await $.iset((await $.wv([$t1, $t2], "Checked", C, false)), [$.sub((await $.wv([$t1, $t2], "RecNo", C, false)), 1)], $.ne((await $.mv((await $.idx((await $.wv([$t1, $t2], "fields", C, false)), [1])), "asinteger")), 0)); if ($t3 !== undefined) { await $.wset([$t1, $t2], "Checked", $t3, C); } }
      await $.stmt($.wcall([$t1, $t2], "Next", [], C));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBalAccs", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBalAccs", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "AdministrationData"));
    const $t5 = (await $.wv([$t4], "Evanescence1", C, false));
    await $.mset((await $.mv((await $.wv([$t4, $t5], "ODSQuery", C, false)), "SQL")), "text", $.add($.add($.add($.add("delete from sba_balance_acc where optype=", (await $.mv((await $.wv([$t4, $t5], "ODSOpTypesID", C, false)), "AsString"))), " and username='"), (await $.mv((await $.wv([$t4, $t5], "UsersDataname", C, false)), "asstring"))), "'"));
    await $.mcall((await $.wv([$t4, $t5], "ODSQuery", C, false)), "ExecSQL", []);
    { const $t6 = $.sub((await $.mv((await $.wv([$t4, $t5], "Items", C, false)), "Count")), 1);
      await $.wset([$t4, $t5], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t7 = true;
      for (;;) {
        if (!$t7) { await $.wset([$t4, $t5], "i", $.succ((await $.wv([$t4, $t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t7 = false;
        if (!($.ord((await $.wv([$t4, $t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t6))) break;
        if ($.truthy((await $.idx((await $.wv([$t4, $t5], "Checked", C, false)), [(await $.wv([$t4, $t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])))) {
          await $.mset((await $.mv((await $.wv([$t4, $t5], "odsquery", C, false)), "sql")), "text", $.add($.add($.add($.add($.add($.add("insert into sba_balance_acc values ('", (await $.mv((await $.wv([$t4, $t5], "usersdataname", C, false)), "asstring"))), "',"), (await $.idx((await $.wv([$t4, $t5], "items", C, false)), [(await $.wv([$t4, $t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), ","), (await $.mv((await $.wv([$t4, $t5], "ODSOpTypesID", C, false)), "AsString"))), ")"));
          await $.mcall((await $.wv([$t4, $t5], "ODSQuery", C, false)), "ExecSQL", []);
        }
        await $.tick();
      }
    }
    await $.mcall((await $.mv((await $.wv([$t4, $t5], "ODSQuery", C, false)), "session")), "commit", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBalAccs", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((L0["sender"]), "checked")))) {
    await $.mcall((await $.v(C, "Evanescence1")), "CheckAll", []);
  } else {
    await $.mcall((await $.v(C, "Evanescence1")), "UncheckAll", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmBalAccs", "DBLookupComboBox1Click", async function DBLookupComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["sqls"] = "select bal_cn bal_acc, nvl(bal_acc, 0) hav from (select bal_acc from sba_balance_acc where upper(username)=upper('%s') and optype=%d) s, bal_spr1 b where s.bal_acc(+)=b.bal_cn";
  {
    const $t8 = (await $.v(C, "AdministrationData"));
    const $t9 = (await $.wv([$t8], "ODSBalAcc", C, false));
    await $.mcall((await $.wv([$t8, $t9], "ODSBalAcc", C, false)), "Close", []);
    await $.mset((await $.wv([$t8, $t9], "sql", C, false)), "Text", (await $.wcall([$t8, $t9], "format", [(await $.wv([$t8, $t9], "sqls", { get: async () => L0["sqls"], set: async (v) => { L0["sqls"] = v; }, local: true }, false)), [(await $.mv((await $.wv([$t8, $t9], "usersdataname", C, false)), "asstring")), (await $.mv((await $.wv([$t8, $t9], "ODSOpTypesid", C, false)), "asinteger"))]], C)));
    await $.mcall((await $.wv([$t8, $t9], "ODSBalAcc", C, false)), "open", []);
  }
  {
    const $t10 = (await $.mv((await $.mv((await $.v(C, "Evanescence1")), "DataSource")), "DataSet"));
    const $t11 = (await $.wv([$t10], "Evanescence1", C, false));
    await $.stmt($.wcall([$t10, $t11], "Close", [], C));
    await $.stmt($.wcall([$t10, $t11], "Open", [], C));
    await $.stmt($.wcall([$t10, $t11], "First", [], C));
    while ($.truthy(($.not((await $.wv([$t10, $t11], "Eof", C, false)))))) {
      { const $t12 = await $.iset((await $.wv([$t10, $t11], "Checked", C, false)), [$.sub((await $.wv([$t10, $t11], "RecNo", C, false)), 1)], $.ne((await $.mv((await $.idx((await $.wv([$t10, $t11], "fields", C, false)), [1])), "asinteger")), 0)); if ($t12 !== undefined) { await $.wset([$t10, $t11], "Checked", $t12, C); } }
      await $.stmt($.wcall([$t10, $t11], "Next", [], C));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
