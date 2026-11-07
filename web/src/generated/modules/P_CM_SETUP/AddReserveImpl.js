// Generated from AddReserveImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AddReserveImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBCtrls", "DB", "OracleData", "DBGridEh", "Mask", "DBCtrlsEh", "DBLookupEh", "sboapiDataModuleImpl", "ReserveImpl"]);
  const C = [U];
  U.defClass("TAddReserve", "TForm", {"button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset3": {"name": "OracleDataSet3", "type": "TOracleDataSet"}, "oracledataset4": {"name": "OracleDataSet4", "type": "TOracleDataSet"}, "datasource3": {"name": "DataSource3", "type": "TDataSource"}, "oracledataset4tesid": {"name": "OracleDataSet4TESID", "type": "TFloatField"}, "oracledataset4fil": {"name": "OracleDataSet4FIL", "type": "TWideStringField"}, "oracledataset4hes": {"name": "OracleDataSet4HES", "type": "TWideStringField"}, "oracledataset4id": {"name": "OracleDataSet4ID", "type": "TFloatField"}, "loanaccs": {"name": "LoanAccs", "type": "TDBLookupComboboxEh"}, "label3": {"name": "Label3", "type": "TLabel"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "datasrcieaccountlist": {"name": "DataSrcIEAccountList", "type": "TDataSource"}, "ieaccountlist": {"name": "IEAccountList", "type": "TOracleDataSet"}, "ieaccountlistid": {"name": "IEAccountListID", "type": "TFloatField"}, "ieaccountlistacc_no": {"name": "IEAccountListACC_NO", "type": "TWideStringField"}, "ieaccountlistval_acc": {"name": "IEAccountListVAL_ACC", "type": "TIntegerField"}, "ieaccountlistname": {"name": "IEAccountListNAME", "type": "TWideStringField"}, "oracledataset4xerhes": {"name": "OracleDataSet4XERHES", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("AddReserve", null, "TAddReserve");
  });
  U.method("TAddReserve", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sql": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Filial daxil etməmisiz!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "LoanAccs")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Hesabı daxil etməmisiz!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Xerc Hesabı daxil etməmisiz!"])));
    return L0.result;
  }
  L0["sql"] = $.add($.add($.add($.add($.add($.add($.add($.add("insert into cm_reserve_turan_filial(tesid, fil_id, int_res_accid,fxercacc_id)values( ", (await $.call(C, "inttostr", [(await $.v(C, "id"))]))), " , "), (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"))]))), " , "), (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "LoanAccs")), "KeyValue"))]))), ","), (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue"))]))), ")");
  await $.mcall((await $.v(C, "OracleDataSet3")), "close", []);
  await $.mset((await $.mv((await $.v(C, "OracleDataSet3")), "SQL")), "Text", L0["sql"]);
  await $.mcall((await $.v(C, "OracleDataSet3")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "OracleDataSet3")), "Session")), "Commit", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAddReserve", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAddReserve", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TAddReserve", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "LoanAccs")), "KeyValue", (-(1)));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
