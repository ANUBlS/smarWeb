// Generated from Unit9Form_other.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit9Form_other", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DB", "OracleData", "StdCtrls", "XFSCtrls", "Grids", "XDBGrids", "ExtCtrls", "P_Datamod_Unit", "UnitFormcust_other_change", "phy_cust_Unit"]);
  const C = [U];
  U.defClass("TFormcust_other", "TForm", {"xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset2id": {"name": "OracleDataSet2ID", "type": "TFloatField"}, "oracledataset2custid": {"name": "OracleDataSet2CUSTID", "type": "TFloatField"}, "oracledataset2name": {"name": "OracleDataSet2NAME", "type": "TWideStringField"}, "oracledataset2description": {"name": "OracleDataSet2DESCRIPTION", "type": "TWideStringField"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}}, {});
  U.init(async () => {
    U.var_("Formcust_other", null, "TFormcust_other");
  });
  U.method("TFormcust_other", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Formcust_other_change", (await $.mcall((await $.v(C, "TFormcust_other_change")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormcust_other", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "c_custid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["c_custid"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "P_Customers_Form")), "DBGridCustomers")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "PG_PCustService")), "CallProcedure", ["cust_other_info_add", [L0["c_custid"]]])));
  await $.mcall((await $.v(C, "OracleDataSet2")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "OracleDataSet2")), "SetVariable", ["v_id", L0["c_custid"]])));
  await $.mcall((await $.v(C, "OracleDataSet2")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormcust_other", "XDBGrid1CellClick", async function XDBGrid1CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  {
    const $t1 = (await $.wobj(C, "Formcust_other_change"));
    const $t2 = (await $.wv([$t1], "OracleDataSet1", C, false));
    await $.stmt($.wcall([$t1, $t2], "close", [], C));
    await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t1, $t2], "open", [], C));
    if ($.truthy($.gt((await $.wv([$t1, $t2], "RecordCount", C, false)), 0))) {
      await $.mset((await $.idx((await $.mv((await $.wv([$t1, $t2], "XDBGrid1", C, false)), "Columns")), [2])), "ReadOnly", (await $.wv([$t1, $t2], "true", C, false)));
      await $.mcall((await $.wv([$t1, $t2], "Formcust_other_change", C, false)), "ShowModal", []);
      await $.mcall((await $.wv([$t1, $t2], "OracleDataSet2", C, false)), "Edit", []);
      if ($.truthy($.ne((await $.mv((await $.wv([$t1, $t2], "Formcust_other_change", C, false)), "v_name")), ""))) {
        await $.mset((await $.wv([$t1, $t2], "OracleDataSet2DESCRIPTION", C, false)), "asstring", (await $.mv((await $.wv([$t1, $t2], "Formcust_other_change", C, false)), "v_name")));
      }
      await $.mset((await $.wv([$t1, $t2], "Formcust_other_change", C, false)), "v_name", "");
    } else {
      await $.mset((await $.idx((await $.mv((await $.wv([$t1, $t2], "XDBGrid1", C, false)), "Columns")), [2])), "ReadOnly", (await $.wv([$t1, $t2], "false", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.method("TFormcust_other", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet2")), "Post", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
