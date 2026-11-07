// Generated from CMNOTESUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CMNOTESUnit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "Grids", "XDBGrids", "DB", "OracleData", "Oracle", "sboapiDataModuleImpl", "CommonDecls"]);
  const C = [U];
  U.defClass("TFormNotes", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oraclepackage1": {"name": "OraclePackage1", "type": "TOraclePackage"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1creditid": {"name": "OracleDataSet1CREDITID", "type": "TFloatField"}, "oracledataset1par1": {"name": "OracleDataSet1PAR1", "type": "TWideStringField"}, "oracledataset1par2": {"name": "OracleDataSet1PAR2", "type": "TWideStringField"}, "oracledataset1par3": {"name": "OracleDataSet1PAR3", "type": "TWideStringField"}, "oracledataset1par4": {"name": "OracleDataSet1PAR4", "type": "TWideStringField"}, "oracledataset1par5": {"name": "OracleDataSet1PAR5", "type": "TWideStringField"}, "oracledataset1par6": {"name": "OracleDataSet1PAR6", "type": "TWideStringField"}, "oracledataset1par7": {"name": "OracleDataSet1PAR7", "type": "TWideStringField"}, "button3": {"name": "Button3", "type": "TButton"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "label7": {"name": "Label7", "type": "TLabel"}, "oracledataset1par8": {"name": "OracleDataSet1PAR8", "type": "TWideStringField"}, "label8": {"name": "Label8", "type": "TLabel"}, "edit4": {"name": "Edit4", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("FormNotes", null, "TFormNotes");
    U.var_("creditid", 0, "integer");
    U.var_("edt", 0, "integer");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "FormNotes")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFormNotes", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "edt")), 0))) {
    await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Addcm_notes", ["v_creditid", (await $.v(C, "creditid")), "v_par1", (await $.mv((await $.v(C, "edit1")), "Text")), "v_par2", (await $.mv((await $.v(C, "edit2")), "Text")), "v_par3", (await $.mv((await $.v(C, "edit3")), "Text")), "v_par4", (await $.mv((await $.v(C, "edit4")), "Text")), "v_par5", (await $.mv((await $.v(C, "edit5")), "Text")), "v_par6", (await $.mv((await $.v(C, "edit6")), "Text")), "v_par7", (await $.mv((await $.v(C, "edit7")), "Text")), "v_par8", (await $.mv((await $.v(C, "memo1")), "Text"))]])));
  }
  if ($.truthy($.eq((await $.v(C, "edt")), 1))) {
    await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["UPDcm_notes", ["v_id", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["id"])), "AsVariant")), "v_par1", (await $.mv((await $.v(C, "edit1")), "Text")), "v_par2", (await $.mv((await $.v(C, "edit2")), "Text")), "v_par3", (await $.mv((await $.v(C, "edit3")), "Text")), "v_par4", (await $.mv((await $.v(C, "edit4")), "Text")), "v_par5", (await $.mv((await $.v(C, "edit5")), "Text")), "v_par6", (await $.mv((await $.v(C, "edit6")), "Text")), "v_par7", (await $.mv((await $.v(C, "edit7")), "Text")), "v_par8", (await $.mv((await $.v(C, "memo1")), "Text"))]])));
  }
  await $.mcall((await $.v(C, "edit1")), "Clear", []);
  await $.mcall((await $.v(C, "edit2")), "Clear", []);
  await $.mcall((await $.v(C, "edit3")), "Clear", []);
  await $.mcall((await $.v(C, "edit4")), "Clear", []);
  await $.mcall((await $.v(C, "edit5")), "Clear", []);
  await $.mcall((await $.v(C, "edit6")), "Clear", []);
  await $.mcall((await $.v(C, "edit7")), "Clear", []);
  await $.mcall((await $.v(C, "memo1")), "Clear", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormNotes", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormNotes")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormNotes", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş sətir  silinsin ?", (await $.v(C, "mtCOnfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["delete_notes", ["v_id", (await $.mv((await $.v(C, "OracleDataSet1ID")), "AsInteger"))]])));
  }
  await $.mcall((await $.v(C, "edit1")), "Clear", []);
  await $.mcall((await $.v(C, "edit2")), "Clear", []);
  await $.mcall((await $.v(C, "edit3")), "Clear", []);
  await $.mcall((await $.v(C, "edit4")), "Clear", []);
  await $.mcall((await $.v(C, "edit5")), "Clear", []);
  await $.mcall((await $.v(C, "edit6")), "Clear", []);
  await $.mcall((await $.v(C, "edit7")), "Clear", []);
  await $.mcall((await $.v(C, "memo1")), "Clear", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormNotes", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "edit1")), "Clear", []);
  await $.mcall((await $.v(C, "edit2")), "Clear", []);
  await $.mcall((await $.v(C, "edit3")), "Clear", []);
  await $.mcall((await $.v(C, "edit4")), "Clear", []);
  await $.mcall((await $.v(C, "edit5")), "Clear", []);
  await $.mcall((await $.v(C, "edit6")), "Clear", []);
  await $.mcall((await $.v(C, "edit7")), "Clear", []);
  await $.mcall((await $.v(C, "memo1")), "Clear", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormNotes", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "creditid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "CommonDBGrid")), "DataSource")), "DataSet")), "FieldByName", [(await $.v(C, "sID"))])), "AsInteger")));
  {
    const $t1 = (await $.wobj(C, "OracleDataSet1"));
    await $.stmt($.wcall([$t1], "close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["v_id", (await $.wv([$t1], "creditid", C, false))], C)));
    await $.stmt($.wcall([$t1], "open", [], C));
    await $.wset([$t1], "edt", 0, C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormNotes", "XDBGrid1CellDblClick", async function XDBGrid1CellDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mset((await $.v(C, "edit1")), "Text", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["par1"])), "AsString")));
  await $.mset((await $.v(C, "edit2")), "Text", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["par2"])), "AsString")));
  await $.mset((await $.v(C, "edit3")), "Text", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["par3"])), "AsString")));
  await $.mset((await $.v(C, "edit4")), "Text", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["par4"])), "AsString")));
  await $.mset((await $.v(C, "edit5")), "Text", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["par5"])), "AsString")));
  await $.mset((await $.v(C, "edit6")), "Text", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["par6"])), "AsString")));
  await $.mset((await $.v(C, "edit7")), "Text", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["par7"])), "AsString")));
  await $.mset((await $.v(C, "memo1")), "Text", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["par8"])), "AsString")));
  await $.set(C, "edt", 1);
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FormNotes", (await $.mcall((await $.v(C, "TFormNotes")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}
