// Generated from UnitMXX.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitMXX", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "DBCtrls", "ExtCtrls", "DB", "OracleData", "DatUnit", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFormMMX", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "dblc_mmx_transmode": {"name": "DBLC_MMX_Transmode", "type": "TDBLookupComboBox"}, "dblc_mmx_reportcode": {"name": "DBLC_MMX_reportcode", "type": "TDBLookupComboBox"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "edittransmodecode": {"name": "EditTransModeCode", "type": "TEdit"}, "editreportcode": {"name": "Editreportcode", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "ods_mmx": {"name": "ods_mmx", "type": "TOracleDataSet"}, "ods_mmxreport_code": {"name": "ods_mmxREPORT_CODE", "type": "TWideStringField"}, "ods_mmxtransmode_code": {"name": "ods_mmxTRANSMODE_CODE", "type": "TIntegerField"}, "ods_mmxtransid": {"name": "ods_mmxTRANSID", "type": "TFloatField"}, "ods_mmxdcustid": {"name": "ods_mmxDCUSTID", "type": "TFloatField"}, "ods_mmxccustid": {"name": "ods_mmxCCUSTID", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("FormMMX", null, "TFormMMX");
    U.var_("trid", 0, "integer");
  });
  U.method("TFormMMX", "DBLC_MMX_reportcodeCloseUp", async function DBLC_MMX_reportcodeCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLC_MMX_reportcode")), "KeyVAlue")), (await $.v(C, "null"))))) {
    await $.mset((await $.v(C, "Editreportcode")), "Text", (await $.mv((await $.v(C, "DBLC_MMX_reportcode")), "KeyVAlue")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormMMX", "DBLC_MMX_TransmodeCloseUp", async function DBLC_MMX_TransmodeCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLC_MMX_Transmode")), "KeyVAlue")), (await $.v(C, "null"))))) {
    await $.mset((await $.v(C, "EditTransModeCode")), "Text", (await $.mv((await $.v(C, "DBLC_MMX_Transmode")), "KeyVAlue")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormMMX", "EditreportcodeExit", async function EditreportcodeExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLC_MMX_reportcode")), "KeyValue", (await $.mv((await $.v(C, "Editreportcode")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormMMX", "EditreportcodeKeyPress", async function EditreportcodeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLC_MMX_reportcode")), "KeyValue", (await $.mv((await $.v(C, "Editreportcode")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormMMX", "EditTransModeCodeEnter", async function EditTransModeCodeEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLC_MMX_Transmode")), "KeyValue", (await $.mv((await $.v(C, "EditTransModeCode")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormMMX", "EditTransModeCodeKeyPress", async function EditTransModeCodeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLC_MMX_Transmode")), "KeyValue", (await $.mv((await $.v(C, "EditTransModeCode")), "Text")));
    await $.mcall((await $.v(C, "DBLC_MMX_Transmode")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormMMX", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DM_goAml"));
    await $.mcall((await $.wv([$t1], "ODS_MMX_TRANSMODE", C, false)), "open", []);
    await $.mcall((await $.wv([$t1], "Ods_mmx_reportcode", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormMMX", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "trid", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ods_subtransID")), "AsInteger")));
  await $.mset((await $.v(C, "edit3")), "Text", (await $.call(C, "inttostr", [(await $.v(C, "trid"))])));
  await $.mcall((await $.v(C, "ods_mmx")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ods_mmx")), "SetVariable", ["v_trid", (await $.v(C, "trid"))])));
  await $.mcall((await $.v(C, "ods_mmx")), "Open", []);
  await $.mset((await $.v(C, "DBLC_MMX_Transmode")), "KeyValue", (await $.mv((await $.mcall((await $.v(C, "ods_mmx")), "FieldByName", ["TRANSMODE_CODE"])), "AsInteger")));
  await $.mset((await $.v(C, "EditTransModeCode")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_mmx")), "FieldByName", ["TRANSMODE_CODE"])), "AsString")));
  await $.mset((await $.v(C, "DBLC_MMX_reportcode")), "KeyValue", (await $.mv((await $.mcall((await $.v(C, "ods_mmx")), "FieldByName", ["report_code"])), "Asstring")));
  await $.mset((await $.v(C, "Editreportcode")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_mmx")), "FieldByName", ["report_code"])), "AsString")));
  await $.mset((await $.v(C, "edit1")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_mmx")), "FieldByName", ["dcustid"])), "AsString")));
  await $.mset((await $.v(C, "edit2")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_mmx")), "FieldByName", ["ccustid"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormMMX", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OP_MMX")), "CallProcedure", ["up_mmx_transinfo", [(await $.v(C, "trid")), (await $.mv((await $.v(C, "DBLC_MMX_reportcode")), "KeyValue")), (await $.mv((await $.v(C, "DBLC_MMX_Transmode")), "Keyvalue")), (await $.mv((await $.v(C, "Edit1")), "Text")), (await $.mv((await $.v(C, "Edit2")), "Text"))]])));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ods_subtrans")), "Refresh", []);
  await $.mcall((await $.v(C, "edit1")), "Clear", []);
  await $.mcall((await $.v(C, "edit2")), "Clear", []);
  await $.mcall((await $.v(C, "edit3")), "Clear", []);
  await $.mcall((await $.v(C, "EditTransModeCode")), "Clear", []);
  await $.mcall((await $.v(C, "Editreportcode")), "Clear", []);
  await $.mset((await $.v(C, "DBLC_MMX_Transmode")), "KeyValue", "");
  await $.mset((await $.v(C, "DBLC_MMX_reportcode")), "KeyValue", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormMMX", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormMMX")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
