// Generated from ResSettingImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ResSettingImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ExtCtrls", "ToolWin", "ActnMan", "ActnCtrls", "DBCtrls", "XDBCtrls", "Grids", "XDBGrids", "XFSCtrls", "DB", "OracleData", "sboapiDataModuleImpl", "CommonDecls", "TesFrmImpl", "RsAccFormImpl"]);
  const C = [U];
  U.defClass("TFrmResSetting", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}, "xdbgrid3": {"name": "XDBGrid3", "type": "TXDBGrid"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1name": {"name": "OracleDataSet1NAME", "type": "TWideStringField"}, "oracledataset3": {"name": "OracleDataSet3", "type": "TOracleDataSet"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "oracledataset4": {"name": "OracleDataSet4", "type": "TOracleDataSet"}, "datasource3": {"name": "DataSource3", "type": "TDataSource"}, "oracledataset4id": {"name": "OracleDataSet4ID", "type": "TFloatField"}, "oracledataset4tes_id": {"name": "OracleDataSet4TES_ID", "type": "TFloatField"}, "oracledataset4kef_id": {"name": "OracleDataSet4KEF_ID", "type": "TFloatField"}, "oracledataset4percent": {"name": "OracleDataSet4PERCENT", "type": "TFloatField"}, "oracledataset4tesname": {"name": "OracleDataSet4TESNAME", "type": "TWideStringField"}, "oracledataset4bdueday": {"name": "OracleDataSet4BDUEDAY", "type": "TFloatField"}, "oracledataset4edueday": {"name": "OracleDataSet4EDUEDAY", "type": "TFloatField"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "autopayment": {"name": "AutoPayment", "type": "TOracleDataSet"}, "datasrcautores": {"name": "DataSrcAutoRes", "type": "TDataSource"}, "oracledataset1reserveoperation": {"name": "OracleDataSet1RESERVEOPERATION", "type": "TFloatField"}, "oracledataset1autoreserve": {"name": "OracleDataSet1AUTORESERVE", "type": "TFloatField"}, "datasource": {"name": "DataSource", "type": "TDataSource"}, "oracledataset1autore": {"name": "OracleDataSet1autore", "type": "TWideStringField"}, "oracledataset5": {"name": "OracleDataSet5", "type": "TOracleDataSet"}, "oracledataset1operation": {"name": "OracleDataSet1operation", "type": "TWideStringField"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "xdbgrid4": {"name": "XDBGrid4", "type": "TXDBGrid"}, "oracledataset6": {"name": "OracleDataSet6", "type": "TOracleDataSet"}, "datasource4": {"name": "DataSource4", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("FrmResSetting", null, "TFrmResSetting");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "FrmResSetting")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmResSetting", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "AddTesFrm", (await $.mcall((await $.v(C, "TAddTesFrm")), "Create", [Self])));
  await $.set(C, "RsAccForm", (await $.mcall((await $.v(C, "TRsAccForm")), "Create", [Self])));
  await $.mcall((await $.v(C, "AutoPayment")), "Open", []);
  await $.mcall((await $.v(C, "OracleDataSet2")), "Open", []);
  await $.mcall((await $.v(C, "OracleDataSet3")), "Open", []);
  await $.mcall((await $.v(C, "OracleDataSet4")), "Open", []);
  await $.mcall((await $.v(C, "OracleDataSet6")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmResSetting", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet2")), "close", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
  await $.mcall((await $.v(C, "OracleDataSet3")), "close", []);
  await $.mcall((await $.v(C, "OracleDataSet4")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmResSetting", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmResSetting", "OracleDataSet1AfterPost", async function OracleDataSet1AfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TFrmResSetting", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Insert", []);
  await $.mcall((await $.v(C, "AddTesFrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmResSetting", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["id"] = (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["id"])), "AsInteger"));
  await $.mcall((await $.v(C, "OracleDataSet1")), "edit", []);
  await $.mcall((await $.v(C, "AddTesFrm")), "ShowModal", []);
  await $.stmt((await $.mcall((await $.v(C, "OracleDataSet1")), "Locate", ["id", L0["id"], []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmResSetting", "XDBGrid1DblClick", async function XDBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "edit", []);
  await $.mcall((await $.v(C, "AddTesFrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmResSetting", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmResSetting", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "RsAccForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FrmResSetting", (await $.mcall((await $.v(C, "TFrmResSetting")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
