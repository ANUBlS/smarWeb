// Generated from frmCustCatImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmCustCatImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "NLSLocalizer", "Db", "OracleData", "DBCtrls", "ExtCtrls", "Grids", "DBGridEh", "sboapiDataModuleImpl", "CommonDecls"]);
  const C = [U];
  U.defClass("TFrmCustcat", "TForm", {"dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "custcatdataset": {"name": "CustCatDataSet", "type": "TOracleDataSet"}, "datsrccuscat": {"name": "DatSrcCusCat", "type": "TDataSource"}, "custcatdatasetid": {"name": "CustCatDataSetID", "type": "TFloatField"}, "custcatdatasetname": {"name": "CustCatDataSetNAME", "type": "TWideStringField"}, "custcatdatasetkod": {"name": "CustCatDataSetKOD", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("FrmCustcat", null, "TFrmCustcat");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "FrmCustcat")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmCustcat", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmCustcat", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmCustcat", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CustCatDataSet")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCustcat", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CustCatDataSet")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FrmCustcat", (await $.mcall((await $.v(C, "TFrmCustcat")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
