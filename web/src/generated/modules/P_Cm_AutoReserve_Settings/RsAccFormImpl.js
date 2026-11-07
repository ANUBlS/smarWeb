// Generated from RsAccFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("RsAccFormImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBGridEhGrouping", "DB", "OracleData", "StdCtrls", "GridsEh", "DBGridEh", "Grids", "DBGrids"]);
  const C = [U];
  U.defClass("TRsAccForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "button1": {"name": "Button1", "type": "TButton"}, "datasource3": {"name": "DataSource3", "type": "TDataSource"}, "oracledataset3": {"name": "OracleDataSet3", "type": "TOracleDataSet"}, "oracledataset3id": {"name": "OracleDataSet3ID", "type": "TFloatField"}, "oracledataset3reserveid": {"name": "OracleDataSet3RESERVEID", "type": "TFloatField"}, "oracledataset3reservename": {"name": "OracleDataSet3RESERVENAME", "type": "TWideStringField"}, "oracledataset3fil_id": {"name": "OracleDataSet3FIL_ID", "type": "TFloatField"}, "oracledataset3rest_accid": {"name": "OracleDataSet3REST_ACCID", "type": "TFloatField"}, "oracledataset3interest_accid": {"name": "OracleDataSet3INTEREST_ACCID", "type": "TFloatField"}, "oracledataset3esashes": {"name": "OracleDataSet3esashes", "type": "TWideStringField"}, "oracledataset3faishes": {"name": "OracleDataSet3faishes", "type": "TWideStringField"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "datasrcpreserveaccs": {"name": "DataSrcPReserveAccs", "type": "TDataSource"}, "preserveaccs": {"name": "PReserveAccs", "type": "TOracleDataSet"}, "preserveaccsid": {"name": "PReserveAccsID", "type": "TFloatField"}, "preserveaccscustid": {"name": "PReserveAccsCUSTID", "type": "TFloatField"}, "preserveaccsaccno": {"name": "PReserveAccsACCNO", "type": "TWideStringField"}, "preserveaccsclientname": {"name": "PReserveAccsCLIENTNAME", "type": "TWideStringField"}, "preserveaccsval_acc": {"name": "PReserveAccsVAL_ACC", "type": "TIntegerField"}}, {});
  U.init(async () => {
    U.var_("RsAccForm", null, "TRsAccForm");
  });
  U.method("TRsAccForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRsAccForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet2")), "Open", []);
  await $.mcall((await $.v(C, "OracleDataSet3")), "Open", []);
  await $.mcall((await $.v(C, "PReserveAccs")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
