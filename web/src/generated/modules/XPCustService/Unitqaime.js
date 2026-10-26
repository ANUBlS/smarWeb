// Generated from Unitqaime.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unitqaime", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DB", "OracleData", "Grids", "XDBGrids", "ExtCtrls", "StdCtrls", "ComCtrls", "UnitDataModPCustService", "UnitInvoceRep", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFormQaime", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "button1": {"name": "Button1", "type": "TButton"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset1bp_id": {"name": "OracleDataSet1BP_ID", "type": "TFloatField"}, "oracledataset1inv_num": {"name": "OracleDataSet1INV_NUM", "type": "TWideStringField"}, "oracledataset1inv_date": {"name": "OracleDataSet1INV_DATE", "type": "TDateTimeField"}, "oracledataset1trans_id": {"name": "OracleDataSet1TRANS_ID", "type": "TFloatField"}, "oracledataset1trans_date": {"name": "OracleDataSet1TRANS_DATE", "type": "TDateTimeField"}, "oracledataset1par1": {"name": "OracleDataSet1PAR1", "type": "TWideStringField"}, "oracledataset1par2": {"name": "OracleDataSet1PAR2", "type": "TWideStringField"}, "oracledataset1par3": {"name": "OracleDataSet1PAR3", "type": "TWideStringField"}, "oracledataset1par4": {"name": "OracleDataSet1PAR4", "type": "TWideStringField"}, "oracledataset1par5": {"name": "OracleDataSet1PAR5", "type": "TWideStringField"}, "oracledataset1par6": {"name": "OracleDataSet1PAR6", "type": "TWideStringField"}, "oracledataset1par7": {"name": "OracleDataSet1PAR7", "type": "TWideStringField"}, "oracledataset1par8": {"name": "OracleDataSet1PAR8", "type": "TWideStringField"}, "oracledataset1tarif": {"name": "OracleDataSet1TARIF", "type": "TWideStringField"}, "oracledataset1par11": {"name": "OracleDataSet1PAR11", "type": "TFloatField"}, "oracledataset1par12": {"name": "OracleDataSet1PAR12", "type": "TFloatField"}, "oracledataset1par13": {"name": "OracleDataSet1PAR13", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("FormQaime", null, "TFormQaime");
  });
  U.method("TFormQaime", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "QRptInvoceRep"));
    {
      const $t2 = (await $.wv([$t1], "ods_cap", C, false));
      await $.stmt($.wcall([$t1, $t2], "close", [], C));
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["v_trid", (await $.mv((await $.wv([$t1, $t2], "OracleDataSet1TRANS_ID", C, false)), "AsInteger"))], C)));
      await $.stmt($.wcall([$t1, $t2], "open", [], C));
    }
    await $.stmt($.wcall([$t1], "Preview", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormQaime", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "begin_dat": null, "end_dat": null};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "OracleDataSet1"));
    await $.stmt($.wcall([$t3], "close", [], C));
    { const $t4 = await $.iset((await $.wv([$t3], "sql", C, false)), [8], ""); if ($t4 !== undefined) { await $.wset([$t3], "sql", $t4, C); } }
    { const $t5 = await $.iset((await $.wv([$t3], "sql", C, false)), [8], $.add($.add($.add($.add($.add($.add($.add($.add((await $.idx((await $.wv([$t3], "sql", C, false)), [8])), " and   trunc(trans_date)  between "), "'"), (await $.wcall([$t3], "FormatDatetime", ["dd-mmm-yyyy", (await $.mv((await $.wv([$t3], "DateTimePicker1", C, false)), "DateTime"))], C))), "'"), " and "), "'"), (await $.wcall([$t3], "FormatDatetime", ["dd-mmm-yyyy", (await $.mv((await $.wv([$t3], "DateTimePicker2", C, false)), "DateTime"))], C))), "'")); if ($t5 !== undefined) { await $.wset([$t3], "sql", $t5, C); } }
    await $.stmt($.wcall([$t3], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormQaime", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "OracleDataSet1"));
    await $.stmt($.wcall([$t6], "close", [], C));
    { const $t7 = await $.iset((await $.wv([$t6], "SQL", C, false)), [8], ""); if ($t7 !== undefined) { await $.wset([$t6], "SQL", $t7, C); } }
    await $.stmt($.wcall([$t6], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormQaime", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t8 = await $.iset((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), [8], ""); if ($t8 !== undefined) { await $.mset((await $.v(C, "OracleDataSet1")), "SQL", $t8); } }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormQaime", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.v(C, "Date")));
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.v(C, "Date")));
  await $.set(C, "QRptInvoceRep", (await $.mcall((await $.v(C, "TQRptInvoceRep")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormQaime", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "oracledataset1")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "oracledataset1")), "SetVariable", [":kliid", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "AsInteger"))])));
  await $.mcall((await $.v(C, "oracledataset1")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
