// Generated from UnitFormMain_delivery.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitFormMain_delivery", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Grids", "DBGrids", "DBCtrls", "ExtCtrls", "DB", "OracleData", "Unit_delivery", "CommonDecls"]);
  const C = [U];
  U.defClass("TFormMain_delivery", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "dbmemo1": {"name": "DBMemo1", "type": "TDBMemo"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset2rid": {"name": "OracleDataSet2RID", "type": "TFloatField"}, "oracledataset2id": {"name": "OracleDataSet2ID", "type": "TFloatField"}, "oracledataset2creditid": {"name": "OracleDataSet2CREDITID", "type": "TFloatField"}, "oracledataset2usname": {"name": "OracleDataSet2USNAME", "type": "TWideStringField"}, "oracledataset2dat": {"name": "OracleDataSet2DAT", "type": "TDateTimeField"}, "oracledataset2text": {"name": "OracleDataSet2TEXT", "type": "TWideStringField"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("FormMain_delivery", null, "TFormMain_delivery");
    U.var_("creditid", 0, "integer");
  });
  U.method("TFormMain_delivery", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "Form_delivery"))]))))) {
    await $.set(C, "Form_delivery", (await $.mcall((await $.v(C, "TForm_delivery")), "create", [Self])));
  }
  await $.mcall((await $.v(C, "Form_delivery")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormMain_delivery", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormMain_delivery", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "creditid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "CommonDBGrid")), "DataSource")), "DataSet")), "FieldByName", [(await $.v(C, "sID"))])), "AsInteger")));
  {
    const $t1 = (await $.wobj(C, "OracleDataSet2"));
    await $.stmt($.wcall([$t1], "close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["v_crid", (await $.wv([$t1], "creditid", C, false))], C)));
    await $.stmt($.wcall([$t1], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
