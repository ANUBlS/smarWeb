// Generated from FrmOneDayImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmOneDayImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Buttons", "Db", "CMExcelExport", "OracleData", "DBCtrls", "StdCtrls", "ExtCtrls", "ComCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "DBGridEh", "CommonDecls", "sbsystem", "sboApiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFrmOneDay", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "cbavalute": {"name": "CBaValute", "type": "TCheckBox"}, "lcbvalutes": {"name": "LCBValutes", "type": "TDBLookupComboBox"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "cbfilial": {"name": "CBFilial", "type": "TCheckBox"}, "lcbfilials": {"name": "LCBFilials", "type": "TDBLookupComboBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "cbpersons": {"name": "CBPersons", "type": "TCheckBox"}, "lcbpersons": {"name": "LCBPersons", "type": "TDBLookupComboBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "cbcategories": {"name": "CBCategories", "type": "TCheckBox"}, "lcbcategories": {"name": "LCBCategories", "type": "TDBLookupComboBox"}, "datsetvalute": {"name": "DatSetValute", "type": "TOracleDataSet"}, "datsetvalutevalute": {"name": "DatSetValuteVALUTE", "type": "TIntegerField"}, "datsetvalutevalu_name": {"name": "DatSetValuteVALU_NAME", "type": "Twidestringfield"}, "datsrcvalute": {"name": "DatSrcValute", "type": "TDataSource"}, "datsrcfilials": {"name": "DatSrcFilials", "type": "TDataSource"}, "datsetfilials": {"name": "DatSetFilials", "type": "TOracleDataSet"}, "eexport": {"name": "EExport", "type": "TCMExcelExport"}, "datsetpersons": {"name": "DatSetPersons", "type": "TOracleDataSet"}, "datsetpersonsid": {"name": "DatSetPersonsID", "type": "TFloatField"}, "datsetpersonsdescripion": {"name": "DatSetPersonsDESCRIPION", "type": "Twidestringfield"}, "datsrcpersons": {"name": "DatSrcPersons", "type": "TDataSource"}, "reserves": {"name": "Reserves", "type": "TOracleDataSet"}, "reservesid": {"name": "ReservesID", "type": "TFloatField"}, "reservespercent": {"name": "ReservesPERCENT", "type": "TFloatField"}, "reservesdescription": {"name": "ReservesDESCRIPTION", "type": "Twidestringfield"}, "reservesfulldesc": {"name": "ReservesFullDesc", "type": "Twidestringfield"}, "datasrcreserves": {"name": "DataSrcReserves", "type": "TDataSource"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset1numberofcredit": {"name": "OracleDataSet1NUMBEROFCREDIT", "type": "Twidestringfield"}, "oracledataset1principal": {"name": "OracleDataSet1PRINCIPAL", "type": "TFloatField"}, "oracledataset1interest": {"name": "OracleDataSet1INTEREST", "type": "TFloatField"}, "oracledataset1val_name": {"name": "OracleDataSet1VAL_NAME", "type": "Twidestringfield"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "oracledataset1paymentdate": {"name": "OracleDataSet1PAYMENTDATE", "type": "TDateTimeField"}, "oracledataset1name": {"name": "OracleDataSet1NAME", "type": "Twidestringfield"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "label2": {"name": "Label2", "type": "TLabel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset2id": {"name": "OracleDataSet2ID", "type": "TFloatField"}, "oracledataset2code": {"name": "OracleDataSet2CODE", "type": "TWideStringField"}, "oracledataset2name": {"name": "OracleDataSet2NAME", "type": "TWideStringField"}, "oracledataset2filialid": {"name": "OracleDataSet2FILIALID", "type": "TFloatField"}, "oracledataset1exname": {"name": "OracleDataSet1EXNAME", "type": "TWideStringField"}, "oracledataset1phonenumber": {"name": "OracleDataSet1PHONENUMBER", "type": "TWideStringField"}, "oracledataset1eo": {"name": "OracleDataSet1EO", "type": "TFloatField"}, "oracledataset1interestrest": {"name": "OracleDataSet1INTERESTREST", "type": "TFloatField"}, "oracledataset1penaltyrest": {"name": "OracleDataSet1PENALTYREST", "type": "TFloatField"}, "oracledataset1cem": {"name": "OracleDataSet1CEM", "type": "TFloatField"}, "oracledataset1odcem": {"name": "OracleDataSet1ODCEM", "type": "TFloatField"}, "oracledataset1proq": {"name": "OracleDataSet1PROQ", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("FrmOneDay", null, "TFrmOneDay");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "FrmOneDay")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmOneDay", "Panel1CanResize", async function Panel1CanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmOneDay", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DatSetValute")), "open", []);
  await $.mcall((await $.v(C, "DatSetFilials")), "Open", []);
  await $.mcall((await $.v(C, "DatSetPersons")), "open", []);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.v(C, "date")));
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.v(C, "date")));
  await $.mcall((await $.v(C, "Reserves")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmOneDay", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmOneDay", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DatSetValute")), "closeall", []);
  await $.mcall((await $.v(C, "DatSetFilials")), "closeall", []);
  await $.mcall((await $.v(C, "DatSetPersons")), "closeall", []);
  await $.mcall((await $.v(C, "Reserves")), "closeall", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmOneDay", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmOneDay", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmOneDay", "ReservesCalcFields", async function ReservesCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.v(C, "ReservesFullDesc")), "AsString", $.add($.add($.add((await $.mv((await $.v(C, "ReservesDESCRIPTION")), "AsString")), " - "), (await $.mv((await $.v(C, "ReservesPERCENT")), "AsString"))), " %"));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TFrmOneDay", "BuildFilterString", async function BuildFilterString(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["concatfilter"] = $.fn(async function ConcatFilter(p0, p1, p2, p3) {
  const L1 = {"s": $.asRef(p0), "prefix": $.copyArg(p1), "checked": $.copyArg(p2), "keyvalue": $.copyArg(p3), result: undefined, "temp": ''};
  await $.fixArgs(L1, ["prefix", "checked", "keyvalue"]);
  L1["csformat"] = "(%s=%s)";
  if ($.truthy(L1["checked"])) {
    L1["temp"] = (await $.call(C, "Format", [L1["csformat"], [L1["prefix"], L1["keyvalue"]]]));
    if ($.truthy($.eq((await L1["s"].get()), ""))) {
      await L1["s"].set(L1["temp"]);
    } else {
      await L1["s"].set($.add($.add((await L1["s"].get()), "and "), L1["temp"]));
    }
  }
  return L1.result;
});
  L0["result"] = "";
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t1) => { L0["result"] = $t1; }), "p.CURRENCY", (await $.mv((await $.v(C, "CBaValute")), "Checked")), (await $.mv((await $.v(C, "LCBValutes")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t2) => { L0["result"] = $t2; }), "p.BRANCHID", (await $.mv((await $.v(C, "CBFilial")), "Checked")), (await $.mv((await $.v(C, "LCBFilials")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t3) => { L0["result"] = $t3; }), "p.PERSONALTYPE", (await $.mv((await $.v(C, "CBPersons")), "Checked")), (await $.mv((await $.v(C, "LCBPersons")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t4) => { L0["result"] = $t4; }), "h.reserveid", (await $.mv((await $.v(C, "CBCategories")), "Checked")), (await $.mv((await $.v(C, "LCBCategories")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t5) => { L0["result"] = $t5; }), "p.expertid", (await $.mv((await $.v(C, "CheckBox1")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"))])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmOneDay", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "filterstr": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "OracleDataSet1")), "Active")))) {
    await $.mcall((await $.v(C, "OracleDataSet1")), "CloseAll", []);
  }
  if ($.truthy($.ne((await $.v(C, "BuildFilterString")), ""))) {
    L0["filterstr"] = $.add(" and ", (await $.v(C, "BuildFilterString")));
    { const $t6 = await $.iset((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), [9], L0["filterstr"]); if ($t6 !== undefined) { await $.mset((await $.v(C, "OracleDataSet1")), "SQL", $t6); } }
  } else {
    { const $t7 = await $.iset((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), [9], ""); if ($t7 !== undefined) { await $.mset((await $.v(C, "OracleDataSet1")), "SQL", $t7); } }
  }
  await $.stmt((await $.mcall((await $.v(C, "OracleDataSet1")), "SetVariable", ["dat", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))])));
  await $.stmt((await $.mcall((await $.v(C, "OracleDataSet1")), "SetVariable", ["dat1", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]))])));
  await $.mcall((await $.v(C, "OracleDataSet1")), "open", []);
  if ($.truthy($.eq((await $.mv((await $.v(C, "OracleDataSet1")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Heç bir ödeniş yoxdur "])));
    return L0.result;
  }
  {
    const $t8 = (await $.wobj(C, "EExport"));
    await $.stmt($.wcall([$t8], "Connect", [], C));
    await $.stmt((await $.wcall([$t8], "ExportDataset", [(await $.wv([$t8], "OracleDataSet1", C, false)), "CREDITSMGR", (await $.wv([$t8], "true", C, false)), (await $.wv([$t8], "false", C, false))], C)));
    await $.stmt($.wcall([$t8], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FrmOneDay", (await $.mcall((await $.v(C, "TFrmOneDay")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
