// Generated from ForumEditUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ForumEditUnit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "XDBGrids", "ExtCtrls", "XFSCtrls", "StdCtrls", "DBCtrls", "DB", "OracleData", "Oracle", "Mask", "GoAml_serviceImpl", "sboapiDataModuleImpl", "DatUnit"]);
  const C = [U];
  U.defClass("TFormEdit", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "ods_mmx_transmode": {"name": "ODS_MMX_TRANSMODE", "type": "TOracleDataSet"}, "ods_mmx_transmodeid": {"name": "ODS_MMX_TRANSMODEID", "type": "TIntegerField"}, "ods_mmx_transmodename": {"name": "ODS_MMX_TRANSMODENAME", "type": "TIntegerField"}, "ods_mmx_transmodedescription": {"name": "ODS_MMX_TRANSMODEDESCRIPTION", "type": "TWideStringField"}, "ods_mmx_reportcode": {"name": "Ods_mmx_reportcode", "type": "TOracleDataSet"}, "ods_mmx_reportcodeid": {"name": "Ods_mmx_reportcodeID", "type": "TIntegerField"}, "ods_mmx_reportcodename": {"name": "Ods_mmx_reportcodeNAME", "type": "TWideStringField"}, "ods_mmx_reportcodedescription": {"name": "Ods_mmx_reportcodeDESCRIPTION", "type": "TWideStringField"}, "dsrc_mmx_reportcode": {"name": "Dsrc_mmx_reportcode", "type": "TDataSource"}, "ds_mmx_transmode": {"name": "DS_MMX_TRANSMODE", "type": "TDataSource"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "dblc_mmx_reportcode": {"name": "DBLC_MMX_reportcode", "type": "TDBLookupComboBox"}, "editreportcode": {"name": "Editreportcode", "type": "TEdit"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "edittransmodecode": {"name": "EditTransModeCode", "type": "TEdit"}, "dblc_mmx_transmode": {"name": "DBLC_MMX_Transmode", "type": "TDBLookupComboBox"}, "ods_trinf": {"name": "ods_trinf", "type": "TOracleDataSet"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xflabletrid": {"name": "XFLableTRid", "type": "TXFLabel"}, "ods_trinftransid": {"name": "ods_trinfTRANSID", "type": "TFloatField"}, "ods_trinftransmode_code": {"name": "ods_trinfTRANSMODE_CODE", "type": "TIntegerField"}, "ods_trinfreport_code": {"name": "ods_trinfREPORT_CODE", "type": "TWideStringField"}, "op_mmxx": {"name": "OP_MMXX", "type": "TOraclePackage"}, "ods_monex": {"name": "ods_monex", "type": "TOracleDataSet"}, "dsrc_monex": {"name": "dsrc_monex", "type": "TDataSource"}, "ods_monexid": {"name": "ods_monexID", "type": "TFloatField"}, "ods_monexname": {"name": "ods_monexNAME", "type": "TWideStringField"}, "ods_monexlast_name": {"name": "ods_monexLAST_NAME", "type": "TWideStringField"}, "ods_trinfmonex_id": {"name": "ods_trinfMONEX_ID", "type": "TFloatField"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "editname": {"name": "Editname", "type": "TEdit"}, "editlastname": {"name": "Editlastname", "type": "TEdit"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xflabel6": {"name": "XFLabel6", "type": "TXFLabel"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "editdbtid": {"name": "Editdbtid", "type": "TEdit"}, "editcredid": {"name": "Editcredid", "type": "TEdit"}, "ods_trinfdcustid": {"name": "ods_trinfDCUSTID", "type": "TFloatField"}, "ods_trinfccustid": {"name": "ods_trinfCCUSTID", "type": "TFloatField"}, "dbeditdname": {"name": "DBEditdname", "type": "TDBEdit"}, "dbeditkname": {"name": "DBEditkname", "type": "TDBEdit"}, "ods_custdb": {"name": "ods_custdb", "type": "TOracleDataSet"}, "ods_custcr": {"name": "ods_custcr", "type": "TOracleDataSet"}, "ods_custdbid": {"name": "ods_custdbID", "type": "TIntegerField"}, "ods_custdbname": {"name": "ods_custdbNAME", "type": "TWideStringField"}, "ods_custcrid": {"name": "ods_custcrID", "type": "TIntegerField"}, "ods_custcrname": {"name": "ods_custcrNAME", "type": "TWideStringField"}, "dsrc_custdb": {"name": "dsrc_custdb", "type": "TDataSource"}, "dsrc_custcr": {"name": "dsrc_custcr", "type": "TDataSource"}, "monexname": {"name": "MonexName", "type": "TXFLabel"}, "odsmon": {"name": "odsmon", "type": "TOracleDataSet"}, "odsmonfull": {"name": "odsmonFULL", "type": "TWideStringField"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "ods_bankinfo": {"name": "ods_bankinfo", "type": "TOracleDataSet"}, "ods_bankinfoswift": {"name": "ods_bankinfoSWIFT", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("FormEdit", null, "TFormEdit");
    U.var_("mon_id", 0, "integer");
  });
  U.method("TFormEdit", "DBLC_MMX_reportcodeCloseUp", async function DBLC_MMX_reportcodeCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLC_MMX_reportcode")), "KeyVAlue")), (await $.v(C, "null"))))) {
    await $.mset((await $.v(C, "Editreportcode")), "Text", (await $.mv((await $.v(C, "DBLC_MMX_reportcode")), "KeyVAlue")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormEdit", "DBLC_MMX_TransmodeCloseUp", async function DBLC_MMX_TransmodeCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLC_MMX_Transmode")), "KeyVAlue")), (await $.v(C, "null"))))) {
    await $.mset((await $.v(C, "EditTransModeCode")), "Text", (await $.mv((await $.v(C, "DBLC_MMX_Transmode")), "KeyVAlue")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormEdit", "EditcredidKeyPress", async function EditcredidKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Editcredid")), "Text")), ""))) {
    await $.mcall((await $.v(C, "ods_custcr")), "Close", []);
    await $.stmt((await $.mcall((await $.v(C, "ods_custcr")), "SetVariable", ["v_custid", (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "Editcredid")), "Text"))]))])));
    await $.mcall((await $.v(C, "ods_custcr")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormEdit", "EditdbtidKeyPress", async function EditdbtidKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.call(C, "trim", [(await $.mv((await $.v(C, "Editdbtid")), "text"))])), ""))) {
    await $.mcall((await $.v(C, "ods_custdb")), "Close", []);
    await $.stmt((await $.mcall((await $.v(C, "ods_custdb")), "SetVariable", ["v_custid", (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "Editdbtid")), "Text"))]))])));
    await $.mcall((await $.v(C, "ods_custdb")), "Open", []);
    await $.mcall((await $.v(C, "ods_custcr")), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormEdit", "EditreportcodeKeyPress", async function EditreportcodeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLC_MMX_reportcode")), "KeyValue", (await $.mv((await $.v(C, "Editreportcode")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormEdit", "EditTransModeCodeKeyPress", async function EditTransModeCodeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditTransModeCode")), "Text"))])), ""))) {
      await $.mset((await $.v(C, "DBLC_MMX_Transmode")), "KeyValue", (await $.mv((await $.v(C, "EditTransModeCode")), "Text")));
    }
    await $.mcall((await $.v(C, "DBLC_MMX_Transmode")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormEdit", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Editname")), "Text", "");
  await $.mset((await $.v(C, "Editlastname")), "Text", "");
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormEdit", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ods_monex")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormEdit", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "mon_id": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ods_trinf")), "close", []);
  await $.stmt((await $.mcall((await $.v(C, "ods_trinf")), "SetVariable", ["v_trid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "GoAml_ServiceForm")), "DBGridTransactions1")), "DataSource")), "DataSet")), "FieldByName", ["transactionnumber"])), "AsString"))])));
  await $.mcall((await $.v(C, "ods_trinf")), "open", []);
  await $.mset((await $.v(C, "MonexName")), "Caption", "");
  L0["mon_id"] = (await $.mv((await $.mcall((await $.v(C, "ods_trinf")), "FieldByName", ["MONEX_ID"])), "AsInteger"));
  await $.mcall((await $.v(C, "odsmon")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "odsmon")), "SetVariable", ["v_id", L0["mon_id"]])));
  await $.mcall((await $.v(C, "odsmon")), "Open", []);
  await $.mset((await $.v(C, "MonexName")), "Caption", $.add("Monex müştərisi:  ", (await $.mv((await $.mcall((await $.v(C, "odsmon")), "FieldByName", ["full"])), "AsString"))));
  await $.mset((await $.v(C, "DBLC_MMX_Transmode")), "KeyValue", (await $.mv((await $.mcall((await $.v(C, "ods_trinf")), "FieldByName", ["TRANSMODE_CODE"])), "AsInteger")));
  await $.mset((await $.v(C, "EditTransModeCode")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_trinf")), "FieldByName", ["TRANSMODE_CODE"])), "AsString")));
  await $.mset((await $.v(C, "DBLC_MMX_reportcode")), "KeyValue", (await $.mv((await $.mcall((await $.v(C, "ods_trinf")), "FieldByName", ["report_code"])), "Asstring")));
  await $.mset((await $.v(C, "Editreportcode")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_trinf")), "FieldByName", ["report_code"])), "AsString")));
  await $.mset((await $.v(C, "XFLableTRid")), "Caption", (await $.mv((await $.mcall((await $.v(C, "ods_trinf")), "FieldByName", ["TRANSID"])), "AsString")));
  await $.mcall((await $.v(C, "ods_custdb")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ods_custdb")), "SetVariable", ["v_custid", (await $.mv((await $.mcall((await $.v(C, "ods_trinf")), "FieldByName", ["dcustid"])), "AsInteger"))])));
  await $.mcall((await $.v(C, "ods_custdb")), "Open", []);
  await $.mcall((await $.v(C, "ods_custcr")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ods_custcr")), "SetVariable", ["v_custid", (await $.mv((await $.mcall((await $.v(C, "ods_trinf")), "FieldByName", ["ccustid"])), "AsInteger"))])));
  await $.mcall((await $.v(C, "ods_custcr")), "Open", []);
  await $.mset((await $.v(C, "Editdbtid")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_trinf")), "FieldByName", ["dcustid"])), "AsString")));
  await $.mset((await $.v(C, "Editcredid")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_trinf")), "FieldByName", ["ccustid"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormEdit", "XDBGrid1CellClick", async function XDBGrid1CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  { const $t1 = (await $.mv((await $.mcall((await $.v(C, "ods_trinf")), "FieldByName", ["transmode_code"])), "AsInteger"));
    if ($.eq($t1, 1000)) {
      await $.set(C, "mon_id", (await $.mv((await $.mcall((await $.v(C, "ods_monex")), "FieldByName", ["id"])), "AsInteger")));
    }
    else if ($.eq($t1, 1001)) {
      await $.set(C, "mon_id", (await $.mv((await $.mcall((await $.v(C, "ods_monex")), "FieldByName", ["id"])), "AsInteger")));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.method("TFormEdit", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_report": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.call(C, "copy", [((await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MAIN201")), "FieldByName", ["debitbalance"])), "AsString"))), 1, 1])), "3")), async () => ($.eq((await $.call(C, "copy", [((await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MAIN201")), "FieldByName", ["creditbalance"])), "AsString"))), 1, 1])), "3")))))) {
    L0["v_report"] = (await $.mv((await $.v(C, "DBLC_MMX_reportcode")), "KeyValue"));
    if ($.truthy((await $.and_((await $.and_(($.eq((await $.mv((await $.v(C, "DBLC_MMX_Transmode")), "KeyValue")), "1002")), async () => ($.ne(L0["v_report"], "CTR")))), async () => ($.ne(L0["v_report"], "YOX")))))) {
      await $.stmt((await $.mcall((await $.v(C, "OP_MMXX")), "CallProcedure", ["add_transfers_trinfo", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MAIN201")), "FieldByName", ["TRANSACTIONNUMBER"])), "AsInteger")), L0["v_report"], (await $.mv((await $.v(C, "DBLC_MMX_Transmode")), "KeyValue")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MAIN201")), "FieldByName", ["DCUSTID"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MAIN201")), "FieldByName", ["KCUSTID"])), "AsInteger")), (-(1)), 2, (await $.mv((await $.v(C, "ods_bankinfoSWIFT")), "AsString")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MAIN201")), "FieldByName", ["craccname"])), "AsString")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MAIN201")), "FieldByName", ["creditaccno"])), "AsString")), (await $.v(C, "null")), (await $.v(C, "null")), (await $.v(C, "null")), (await $.v(C, "null")), (await $.v(C, "null")), (await $.v(C, "null")), (await $.v(C, "null")), (await $.v(C, "null")), (await $.v(C, "null"))]])));
    }
    if ($.truthy((await $.and_((await $.and_(($.eq((await $.mv((await $.v(C, "DBLC_MMX_Transmode")), "KeyValue")), "1003")), async () => ($.ne(L0["v_report"], "CTR")))), async () => ($.ne(L0["v_report"], "YOX")))))) {
      await $.stmt((await $.mcall((await $.v(C, "OP_MMXX")), "CallProcedure", ["add_transfers_trinfo", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MAIN201")), "FieldByName", ["TRANSACTIONNUMBER"])), "AsInteger")), L0["v_report"], (await $.mv((await $.v(C, "DBLC_MMX_Transmode")), "KeyValue")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MAIN201")), "FieldByName", ["DCUSTID"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MAIN201")), "FieldByName", ["KCUSTID"])), "AsInteger")), (-(1)), 1, (await $.mv((await $.v(C, "ods_bankinfoSWIFT")), "AsString")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MAIN201")), "FieldByName", ["dbaccname"])), "AsString")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MAIN201")), "FieldByName", ["debitaccno"])), "AsString")), (await $.v(C, "null")), (await $.v(C, "null")), (await $.v(C, "null")), (await $.v(C, "null")), (await $.v(C, "null")), (await $.v(C, "null")), (await $.v(C, "null")), (await $.v(C, "null")), (await $.v(C, "null"))]])));
    }
    await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "GoAml_ServiceForm")), "DBGridTransactions1")), "DataSource")), "DataSet")), "Refresh", []);
    await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "GoAml_ServiceForm")), "DBGrid2")), "DataSource")), "DataSet")), "Refresh", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_REP201")), "Locate", ["transmode_code", (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "EditTransModeCode")), "Text"))])), [(await $.v(C, "loCaseInsensitive"))]])));
  }
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "DBLC_MMX_Transmode")), "KeyValue")), "1002")), async () => ($.ne((await $.mv((await $.v(C, "DBLC_MMX_Transmode")), "KeyValue")), "1003")))))) {
    await $.stmt((await $.mcall((await $.v(C, "OP_MMXX")), "CallProcedure", ["update_mmxtransinfo", [(await $.mv((await $.mcall((await $.v(C, "ods_trinf")), "FieldByName", ["TRANSID"])), "AsInteger")), (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "EditTransModeCode")), "Text"))])), (await $.mv((await $.v(C, "Editreportcode")), "Text")), (await $.v(C, "mon_id")), (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "Editdbtid")), "text"))])), (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "Editcredid")), "Text"))]))]])));
    await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "GoAml_ServiceForm")), "DBGridTransactions1")), "DataSource")), "DataSet")), "Refresh", []);
    await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "GoAml_ServiceForm")), "DBGrid2")), "DataSource")), "DataSet")), "Refresh", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "Locate", ["transmode_code", (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "EditTransModeCode")), "Text"))])), [(await $.v(C, "loCaseInsensitive"))]])));
  }
  await $.mcall((await $.v(C, "FormEdit")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormEdit", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.mcall((await $.v(C, "ods_trinf")), "FieldByName", ["transmode_code"])), "AsInteger")), 1000)), async () => ($.eq((await $.mv((await $.mcall((await $.v(C, "ods_trinf")), "FieldByName", ["transmode_code"])), "AsInteger")), 1001)))))) {
    if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Editname")), "Text"))])), ""))) {
      await $.stmt((await $.call(C, "showmessage", ["Adı sahəsi boşdur"])));
      return L0.result;
    }
    if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Editlastname")), "Text"))])), ""))) {
      await $.stmt((await $.call(C, "showmessage", ["Soyadı sahəsi boşdur"])));
      return L0.result;
    }
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "PG_PCustService")), "CallProcedure", ["add_cust_monxs", [(await $.mv((await $.v(C, "Editname")), "Text")), (await $.mv((await $.v(C, "Editlastname")), "Text"))]])));
    await $.mcall((await $.v(C, "ods_monex")), "Refresh", []);
    await $.set(C, "mon_id", (await $.mv((await $.mcall((await $.v(C, "ods_monex")), "FieldByName", ["id"])), "AsInteger")));
    await $.mset((await $.v(C, "Editname")), "Text", "");
    await $.mset((await $.v(C, "Editlastname")), "Text", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
