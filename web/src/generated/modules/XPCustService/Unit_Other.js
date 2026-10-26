// Generated from Unit_Other.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit_Other", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DB", "OracleData", "Grids", "XDBGrids", "ExtCtrls", "XFSCtrls", "StdCtrls", "DBGridEhGrouping", "GridsEh", "DBGridEh", "HintBox", "sboapiDataModuleImpl", "UnitDataModPCustService", "UnitForm_other_change"]);
  const C = [U];
  U.defClass("TForm_other", "TForm", {"xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "oracledataset2id": {"name": "OracleDataSet2ID", "type": "TFloatField"}, "oracledataset2custid": {"name": "OracleDataSet2CUSTID", "type": "TFloatField"}, "oracledataset2name": {"name": "OracleDataSet2NAME", "type": "TWideStringField"}, "oracledataset2description": {"name": "OracleDataSet2DESCRIPTION", "type": "TWideStringField"}, "memo1": {"name": "Memo1", "type": "TMemo"}}, {});
  U.init(async () => {
    U.var_("Form_other", null, "TForm_other");
  });
  U.method("TForm_other", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Form_other_change", (await $.mcall((await $.v(C, "TForm_other_change")), "create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_other", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "c_custid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["c_custid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "AsInteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallProcedure", ["cust_other_info_add", [L0["c_custid"]]])));
  await $.mcall((await $.v(C, "OracleDataSet2")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "OracleDataSet2")), "SetVariable", ["v_id", L0["c_custid"]])));
  await $.mcall((await $.v(C, "OracleDataSet2")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_other", "InsertLineBreaksEveryN", async function InsertLineBreaksEveryN(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"text": $.copyArg(p0), "n": $.copyArg(p1), result: '', "i": 0};
  await $.fixArgs(L0, ["text", "n"]);
  L0["result"] = L0["text"];
  L0["i"] = L0["n"];
  while ($.truthy($.lt(L0["i"], (await $.call(C, "Length", [L0["result"]]))))) {
    await $.stmt((await $.call(C, "Insert", ["\r\n", $.ref(async () => L0["result"], async ($t1) => { L0["result"] = $t1; }), $.add(L0["i"], 1)])));
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["i"], async ($t2) => { L0["i"] = $t2; }), $.add(L0["n"], 2)])));
    await $.tick();
  }
  return L0.result;
}, {"params": ["Text", "N"], "kind": "function", "ptypes": ["String", "Integer"]});
  U.method("TForm_other", "XDBGrid1CellClick", async function XDBGrid1CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "originaltext": '', "formattedtext": ''};
  await $.fixArgs(L0, ["column"]);
  L0["originaltext"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["name"])), "AsString"));
  L0["formattedtext"] = (await $.call(C, "InsertLineBreaksEveryN", [L0["originaltext"], 160]));
  await $.mset((await $.v(C, "Memo1")), "Text", L0["formattedtext"]);
  {
    const $t3 = (await $.v(C, "Form_other_change"));
    const $t4 = (await $.wv([$t3], "OracleDataSet1", C, false));
    await $.stmt($.wcall([$t3, $t4], "close", [], C));
    await $.stmt((await $.wcall([$t3, $t4], "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t3, $t4], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t3, $t4], "open", [], C));
    if ($.truthy($.gt((await $.wv([$t3, $t4], "RecordCount", C, false)), 0))) {
      await $.mset((await $.idx((await $.mv((await $.wv([$t3, $t4], "XDBGrid1", C, false)), "Columns")), [2])), "ReadOnly", (await $.wv([$t3, $t4], "true", C, false)));
      await $.mcall((await $.wv([$t3, $t4], "Form_other_change", C, false)), "ShowModal", []);
      await $.mcall((await $.wv([$t3, $t4], "OracleDataSet2", C, false)), "Edit", []);
      if ($.truthy($.ne((await $.mv((await $.wv([$t3, $t4], "Form_other_change", C, false)), "v_name")), ""))) {
        await $.mset((await $.wv([$t3, $t4], "OracleDataSet2DESCRIPTION", C, false)), "asstring", (await $.mv((await $.wv([$t3, $t4], "Form_other_change", C, false)), "v_name")));
      }
      await $.mset((await $.wv([$t3, $t4], "Form_other_change", C, false)), "v_name", "");
    } else {
      await $.mset((await $.idx((await $.mv((await $.wv([$t3, $t4], "XDBGrid1", C, false)), "Columns")), [2])), "ReadOnly", (await $.wv([$t3, $t4], "false", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.method("TForm_other", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet2")), "Post", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
