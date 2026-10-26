// Generated from UnitHesab.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitHesab", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DB", "OracleData", "StdCtrls", "Grids", "XDBGrids", "sboapiDataModuleImpl", "StatementFrmImpl"]);
  const C = [U];
  U.defClass("TFormAccount", "TForm", {"xdbgridaccounts": {"name": "XDBGridAccounts", "type": "TXDBGrid"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "editbalcn": {"name": "EditBalcn", "type": "TEdit"}, "editkli_id": {"name": "EditKli_id", "type": "TEdit"}, "ods_account": {"name": "ODS_Account", "type": "TOracleDataSet"}, "ds_account": {"name": "DS_Account", "type": "TDataSource"}, "balans": {"name": "Balans", "type": "TLabel"}, "label1": {"name": "Label1", "type": "TLabel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "button2": {"name": "Button2", "type": "TButton"}, "editacc_no": {"name": "EditACC_NO", "type": "TEdit"}, "ods_accountacc_no": {"name": "ODS_AccountACC_NO", "type": "TWideStringField"}, "ods_accountacc_no_search": {"name": "ODS_AccountACC_NO_SEARCH", "type": "TWideStringField"}, "ods_accountname": {"name": "ODS_AccountNAME", "type": "TWideStringField"}, "ods_accountbal_cn1": {"name": "ODS_AccountBAL_CN1", "type": "TFloatField"}, "ods_accountkli_id": {"name": "ODS_AccountKLI_ID", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("FormAccount", null, "TFormAccount");
  });
  U.method("TFormAccount", "ActionSpeedSearchExecute", async function ActionSpeedSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t1 = L0["sender"];
    await $.wset([$t1], "SearchField", (await $.wcall([$t1], "copy", [(await $.wv([$t1], "Name", C, false)), 5, (await $.wcall([$t1], "length", [(await $.wv([$t1], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t2 = (await $.wcall([$t1], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t1], "XDBGridAccounts", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t1, $t2], "SearchRecord", [(await $.wv([$t1, $t2], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "Text", C, false)), $.add((await $.wv([$t1, $t2], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "srFromCurrent", C, false)), (await $.wv([$t1, $t2], "srForward", C, false))])], C))))) {
        if ($.truthy($.not((await $.wcall([$t1, $t2], "SearchRecord", [(await $.wv([$t1, $t2], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "Text", C, false)), $.add((await $.wv([$t1, $t2], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "srFromBeginning", C, false))])], C))))) {
          await $.stmt((await $.wcall([$t1, $t2], "MessageDlg", ["Yazı tapılmayıb!", (await $.wv([$t1, $t2], "mtInformation", C, false)), [(await $.wv([$t1, $t2], "mbOK", C, false))], 0], C)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccount", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormAccount")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccount", "EditACC_NOKeyPress", async function EditACC_NOKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormAccount", "EditBalcnKeyPress", async function EditBalcnKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "a": '', "b": '', "s": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "EditBalcn")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "EditKli_id")), "Text")), "")))))) {
    L0["a"] = $.add("where bal_cn1=", (await $.mv((await $.v(C, "EditBalcn")), "Text")));
    L0["s"] = L0["a"];
  }
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "EditBalcn")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "EditKli_id")), "Text")), "")))))) {
    L0["a"] = $.add(" where bal_cn1= ", (await $.mv((await $.v(C, "EditBalcn")), "Text")));
    L0["b"] = $.add(" and kli_id = ", (await $.mv((await $.v(C, "EditKli_id")), "text")));
    L0["s"] = $.add(L0["a"], L0["b"]);
  }
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    if ($.truthy($.ne((await $.mv((await $.v(C, "EditBalcn")), "Text")), ""))) {
      {
        const $t3 = (await $.v(C, "ODS_Account"));
        await $.stmt($.wcall([$t3], "close", [], C));
        { const $t4 = await $.iset((await $.wv([$t3], "sql", C, false)), [7], ""); if ($t4 !== undefined) { await $.wset([$t3], "sql", $t4, C); } }
        { const $t5 = await $.iset((await $.wv([$t3], "sql", C, false)), [7], $.add((await $.idx((await $.wv([$t3], "sql", C, false)), [7])), (await $.wv([$t3], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)))); if ($t5 !== undefined) { await $.wset([$t3], "sql", $t5, C); } }
        await $.stmt($.wcall([$t3], "open", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormAccount", "EditKli_idKeyPress", async function EditKli_idKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "a": '', "b": '', "s": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "EditBalcn")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "EditKli_id")), "Text")), "")))))) {
    L0["a"] = $.add("where kli_id=", (await $.mv((await $.v(C, "EditKli_id")), "Text")));
    L0["s"] = L0["a"];
  }
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "EditBalcn")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "EditKli_id")), "Text")), "")))))) {
    L0["a"] = $.add(" where bal_cn1= ", (await $.mv((await $.v(C, "EditBalcn")), "Text")));
    L0["b"] = $.add(" and kli_id = ", (await $.mv((await $.v(C, "EditKli_id")), "text")));
    L0["s"] = $.add(L0["a"], L0["b"]);
  }
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    if ($.truthy($.ne((await $.mv((await $.v(C, "EditKli_id")), "Text")), ""))) {
      {
        const $t6 = (await $.v(C, "ODS_Account"));
        await $.stmt($.wcall([$t6], "close", [], C));
        { const $t7 = await $.iset((await $.wv([$t6], "sql", C, false)), [7], ""); if ($t7 !== undefined) { await $.wset([$t6], "sql", $t7, C); } }
        { const $t8 = await $.iset((await $.wv([$t6], "sql", C, false)), [7], $.add((await $.idx((await $.wv([$t6], "sql", C, false)), [7])), (await $.wv([$t6], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)))); if ($t8 !== undefined) { await $.wset([$t6], "sql", $t8, C); } }
        await $.stmt($.wcall([$t6], "open", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormAccount", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "EditBalcn")), "Clear", []);
  await $.mcall((await $.v(C, "EditKli_id")), "Clear", []);
  await $.mcall((await $.v(C, "EditACC_NO")), "Clear", []);
  await $.mcall((await $.v(C, "ODS_Account")), "Close", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormAccount", "XDBGridAccountsDblClick", async function XDBGridAccountsDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "StatementFrm")), "Edit_Acc_No")), "Text", $.add($.add((await $.mv((await $.mv((await $.v(C, "StatementFrm")), "Edit_Acc_No")), "Text")), ","), (await $.mv((await $.v(C, "ODS_AccountACC_NO_SEARCH")), "AsString"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
