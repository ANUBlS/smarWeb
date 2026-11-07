// Generated from MainUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("MainUnit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBGridEhGrouping", "GridsEh", "DBGridEh", "StdCtrls", "ExtCtrls", "DB", "OracleData", "Grids", "DBGrids", "DBCtrls", "sboapiDataModuleImpl", "CommonDecls", "AddUnit", "UnitFormMain_delivery"]);
  const C = [U];
  U.defClass("TMainForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1creditid": {"name": "OracleDataSet1CREDITID", "type": "TFloatField"}, "oracledataset1usname": {"name": "OracleDataSet1USNAME", "type": "TWideStringField"}, "oracledataset1dat": {"name": "OracleDataSet1DAT", "type": "TDateTimeField"}, "dbmemo1": {"name": "DBMemo1", "type": "TDBMemo"}, "oracledataset1rid": {"name": "OracleDataSet1RID", "type": "TFloatField"}, "oracledataset1text": {"name": "OracleDataSet1TEXT", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("MainForm", null, "TMainForm");
    U.var_("creditid", 0, "integer");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  if ($.truthy($.eq(L0["s"], "MainForm"))) {
    await $.mcall((await $.v(C, "MainForm")), "ShowModal", []);
  } else {
    if ($.truthy($.eq(L0["s"], "FormMain_delivery"))) {
      await $.mcall((await $.v(C, "FormMain_delivery")), "ShowModal", []);
    }
  }
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TMainForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "Form4"))]))))) {
    await $.set(C, "Form4", (await $.mcall((await $.v(C, "TForm4")), "create", [Self])));
  }
  await $.mcall((await $.v(C, "Form4")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormMain_delivery", (await $.mcall((await $.v(C, "TFormMain_delivery")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "creditid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "CommonDBGrid")), "DataSource")), "DataSet")), "FieldByName", [(await $.v(C, "sID"))])), "AsInteger")));
  {
    const $t1 = (await $.wobj(C, "OracleDataSet1"));
    await $.stmt($.wcall([$t1], "close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["v_crid", (await $.wv([$t1], "creditid", C, false))], C)));
    await $.stmt($.wcall([$t1], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "MainForm", (await $.mcall((await $.v(C, "TMainForm")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}
