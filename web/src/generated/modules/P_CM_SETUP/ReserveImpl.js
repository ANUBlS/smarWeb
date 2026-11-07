// Generated from ReserveImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ReserveImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DB", "OracleData", "Grids", "DBGrids", "StdCtrls", "ExtCtrls", "sboapiDataModuleImpl", "AddReserveImpl"]);
  const C = [U];
  U.defClass("TFrmReserve", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}}, {});
  U.init(async () => {
    U.var_("FrmReserve", null, "TFrmReserve");
    U.var_("id", 0, "integer");
  });
  U.method("TFrmReserve", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "id", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["id"])), "asinteger")));
  await $.mcall((await $.v(C, "AddReserve")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmReserve", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sql": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.call(C, "MessageDlg", ["Silinməsinə əminsinizmi?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  await $.mcall((await $.v(C, "OracleDataSet2")), "Close", []);
  L0["sql"] = $.add("delete cm_reserve_turan_filial where id=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "AddReserve")), "OracleDataSet4")), "FieldByName", ["id"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "OracleDataSet2")), "SQL")), "Text", L0["sql"]);
  await $.mcall((await $.v(C, "OracleDataSet2")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "OracleDataSet2")), "Session")), "Commit", []);
  await $.mcall((await $.mv((await $.v(C, "AddReserve")), "OracleDataSet4")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmReserve", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmReserve", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmReserve", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "AddReserve", (await $.mcall((await $.v(C, "TAddReserve")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
