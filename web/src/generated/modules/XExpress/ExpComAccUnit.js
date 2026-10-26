// Generated from ExpComAccUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ExpComAccUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "StdCtrls", "DBViewComboBox", "SearchEdit", "Grids", "DBGrids", "Buttons", "ExtCtrls", "DB", "OracleData", "ExpDataModuleUnit"]);
  const C = [U];
  U.defClass("TExpComAccForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbviewcombobox1": {"name": "DBViewComboBox1", "type": "TDBViewComboBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbviewcombobox2": {"name": "DBViewComboBox2", "type": "TDBViewComboBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "searchedit1": {"name": "SearchEdit1", "type": "TSearchEdit"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "label4": {"name": "Label4", "type": "TLabel"}, "searchedit2": {"name": "SearchEdit2", "type": "TSearchEdit"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "label5": {"name": "Label5", "type": "TLabel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "expchequeaccdataset": {"name": "ExpChequeAccDataSet", "type": "TOracleDataSet"}, "expchequeaccdatasource": {"name": "ExpChequeAccDataSource", "type": "TDataSource"}, "valyutadataset": {"name": "ValyutaDataSet", "type": "TOracleDataSet"}, "valyutadatasource": {"name": "ValyutaDataSource", "type": "TDataSource"}, "filialdataset": {"name": "FilialDataSet", "type": "TOracleDataSet"}, "filialdatasource": {"name": "FilialDataSource", "type": "TDataSource"}, "accountdataset": {"name": "AccountDataSet", "type": "TOracleDataSet"}, "accountdatasource": {"name": "AccountDataSource", "type": "TDataSource"}, "expcomissionaccdataset": {"name": "ExpComissionAccDataSet", "type": "TOracleDataSet"}, "expcomissionaccdatasource": {"name": "ExpComissionAccDataSource", "type": "TDataSource"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}}, {});
  U.init(async () => {
    U.var_("ExpComAccForm", null, "TExpComAccForm");
  });
  U.method("TExpComAccForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "SearchEdit1")), "Text")), ""))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "Repair")), "CallProcedure", ["Exp_chequeaccount_add", [(await $.mv((await $.mcall((await $.v(C, "ValyutaDataSet")), "fieldbyname", ["VALUTE"])), "asinteger")), (await $.mv((await $.mcall((await $.v(C, "AccountDataSet")), "fieldbyname", ["id"])), "asinteger")), (await $.mv((await $.mcall((await $.v(C, "FilialDataSet")), "fieldbyname", ["id"])), "asinteger"))]])));
  await $.mcall((await $.v(C, "SearchEdit1")), "clear", []);
  await $.mcall((await $.v(C, "ExpChequeAccDataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpComAccForm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "SearchEdit2")), "Text")), ""))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "Repair")), "CallProcedure", ["Exp_comissionaccount_add", [(await $.mv((await $.mcall((await $.v(C, "ValyutaDataSet")), "fieldbyname", ["VALUTE"])), "asinteger")), (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "fieldbyname", ["id"])), "asinteger")), (await $.mv((await $.mcall((await $.v(C, "FilialDataSet")), "fieldbyname", ["id"])), "asinteger"))]])));
  await $.mcall((await $.v(C, "SearchEdit2")), "clear", []);
  await $.mcall((await $.v(C, "ExpComissionAccDataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpComAccForm", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t1 = (await $.call(C, "MessageDlg", ["Əməliyyatın silinməsinə əminsinizmi?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0]));
    if ($.eq($t1, (await $.v(C, "mryes")))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "Repair")), "CallProcedure", ["Exp_chequeaccount_del", [(await $.mv((await $.mcall((await $.v(C, "ExpChequeAccDataSet")), "FieldByName", ["id"])), "AsInteger"))]])));
      await $.mcall((await $.v(C, "ExpChequeAccDataSet")), "Refresh", []);
    }
    else if ($.eq($t1, (await $.v(C, "mrno")))) {
      return L0.result;
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpComAccForm", "DBGrid2DblClick", async function DBGrid2DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t2 = (await $.call(C, "MessageDlg", ["Əməliyyatın silinməsinə əminsinizmi?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0]));
    if ($.eq($t2, (await $.v(C, "mryes")))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "Repair")), "CallProcedure", ["Exp_comissionaccount_Del", [(await $.mv((await $.mcall((await $.v(C, "ExpComissionAccDataSet")), "FieldByName", ["id"])), "AsInteger"))]])));
      await $.mcall((await $.v(C, "ExpComissionAccDataSet")), "Refresh", []);
    }
    else if ($.eq($t2, (await $.v(C, "mrno")))) {
      return L0.result;
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpComAccForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ExpChequeAccDataSet")), "Close", []);
  await $.mcall((await $.v(C, "ExpComissionAccDataSet")), "Close", []);
  await $.mcall((await $.v(C, "FilialDataSet")), "Close", []);
  await $.mcall((await $.v(C, "ValyutaDataSet")), "Close", []);
  await $.mcall((await $.v(C, "AccountDataSet")), "Close", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Close", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TExpComAccForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.mv((await $.v(C, "ExpChequeAccDataSet")), "Active")))))) {
    await $.mcall((await $.v(C, "ExpChequeAccDataSet")), "Open", []);
  }
  if ($.truthy($.not(((await $.mv((await $.v(C, "ExpComissionAccDataSet")), "Active")))))) {
    await $.mcall((await $.v(C, "ExpComissionAccDataSet")), "Open", []);
  }
  if ($.truthy($.not(((await $.mv((await $.v(C, "FilialDataSet")), "Active")))))) {
    await $.mcall((await $.v(C, "FilialDataSet")), "Open", []);
  }
  if ($.truthy($.not(((await $.mv((await $.v(C, "ValyutaDataSet")), "Active")))))) {
    await $.mcall((await $.v(C, "ValyutaDataSet")), "Open", []);
  }
  if ($.truthy($.not(((await $.mv((await $.v(C, "AccountDataSet")), "Active")))))) {
    await $.mcall((await $.v(C, "AccountDataSet")), "Open", []);
  }
  if ($.truthy($.not(((await $.mv((await $.v(C, "OracleDataSet1")), "Active")))))) {
    await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
  }
  await $.mcall((await $.v(C, "SearchEdit1")), "Clear", []);
  await $.mcall((await $.v(C, "SearchEdit2")), "Clear", []);
  await $.mset((await $.v(C, "DBViewComboBox1")), "ItemIndex", 0);
  await $.mset((await $.v(C, "DBViewComboBox2")), "ItemIndex", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
