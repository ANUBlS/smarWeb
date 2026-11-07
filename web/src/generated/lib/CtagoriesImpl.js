// Generated from CtagoriesImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CtagoriesImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Buttons", "DBCtrls", "Db", "OracleData", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "Oracle", "CMOracleAPIDataModuleImpl", "UnitProgress"]);
  const C = [U];
  U.defClass("TFrmCatagories", "TForm", {"datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "oraclepackage1": {"name": "OraclePackage1", "type": "TOraclePackage"}, "label1": {"name": "Label1", "type": "TLabel"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1description": {"name": "OracleDataSet1DESCRIPTION", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("FrmCatagories", null, "TFrmCatagories");
  });
  U.method("TFrmCatagories", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCatagories", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCatagories", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "catid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["catid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "FormProgress")), "OracleDataSet3")), "fieldbyname", ["id"])), "asinteger"));
  await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["pn3_catADD", [L0["catid"], (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "asinteger")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "ListSource")), "DataSet")), "fieldbyname", ["DESCRIPTION"])), "asstring"))]])));
  await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", (await $.v(C, "null")));
  await $.mcall((await $.v(C, "OracleDataSet1")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCatagories", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "FormProgress")), "OracleDataSet3")), "refresh", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCatagories", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.mcall((await $.v(C, "FrmCatagories")), "close", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmCatagories", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  return U;
}
