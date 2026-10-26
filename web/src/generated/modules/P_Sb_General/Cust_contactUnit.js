// Generated from Cust_contactUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Cust_contactUnit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "XDBGrids", "StdCtrls", "Buttons", "XFSCtrls", "ExtCtrls", "DB", "OracleData", "DBCtrls", "sboapiDataModuleImpl", "OpenAccountImpl"]);
  const C = [U];
  U.defClass("TCust_contact", "TForm", {"xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "ad": {"name": "Ad", "type": "TXFLabel"}, "telfon": {"name": "Telfon", "type": "TXFLabel"}, "ьnvan": {"name": "Ьnvan", "type": "TXFLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "oracledataset3": {"name": "OracleDataSet3", "type": "TOracleDataSet"}, "oracledataset4": {"name": "OracleDataSet4", "type": "TOracleDataSet"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1cust_id": {"name": "OracleDataSet1CUST_ID", "type": "TFloatField"}, "oracledataset1relative_fullname": {"name": "OracleDataSet1RELATIVE_FULLNAME", "type": "TWideStringField"}, "oracledataset1relative_degree": {"name": "OracleDataSet1RELATIVE_DEGREE", "type": "TWideStringField"}, "oracledataset1relative_work": {"name": "OracleDataSet1RELATIVE_WORK", "type": "TWideStringField"}, "oracledataset1relative_task": {"name": "OracleDataSet1RELATIVE_TASK", "type": "TWideStringField"}, "oracledataset1relative_salary": {"name": "OracleDataSet1RELATIVE_SALARY", "type": "TFloatField"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}}, {});
  U.init(async () => {
    U.var_("Cust_contact", null, "TCust_contact");
  });
  U.method("TCust_contact", "Edit5KeyPress", async function Edit5KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.lt((await $.call(C, "upcase", [(await L0["key"].get())])), "0")), async () => ($.gt((await $.call(C, "Upcase", [(await L0["key"].get())])), "9")))))) {
    if ($.truthy(($.ne((await $.call(C, "ord", [(await L0["key"].get())])), 8)))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCust_contact", "XDBGrid1DblClick", async function XDBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit1")), "Text", (await $.mv((await $.v(C, "OracleDataSet1RELATIVE_WORK")), "AsString")));
  await $.mset((await $.v(C, "edit2")), "Text", (await $.mv((await $.v(C, "OracleDataSet1RELATIVE_FULLNAME")), "AsString")));
  await $.mset((await $.v(C, "edit4")), "Text", (await $.mv((await $.v(C, "OracleDataSet1RELATIVE_DEGREE")), "AsString")));
  await $.mset((await $.v(C, "edit3")), "Text", (await $.mv((await $.v(C, "OracleDataSet1RELATIVE_TASK")), "AsString")));
  await $.mset((await $.v(C, "edit3")), "Text", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "OracleDataSet1RELATIVE_SALARY")), "AsInteger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCust_contact", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_((await $.and_(($.eq((await $.mv((await $.v(C, "edit1")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "edit2")), "Text")), "")))), async () => ($.eq((await $.mv((await $.v(C, "edit3")), "Text")), "")))))) {
    await $.stmt((await $.call(C, "showmessage", ["     Hecbir sahe doldurulmayib      !"])));
    return L0.result;
  }
  {
    const $t1 = (await $.v(C, "OracleDataSet2"));
    await $.stmt($.wcall([$t1], "close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["v_custid", (await $.wv([$t1], "cust_relatives", C, false))], C)));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["v_RELATIVE_FULLNAME", (await $.mv((await $.wv([$t1], "edit2", C, false)), "Text"))], C)));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["v_RELATIVE_WORK", (await $.mv((await $.wv([$t1], "edit1", C, false)), "Text"))], C)));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["v_RELATIVE_DEGREE", (await $.mv((await $.wv([$t1], "edit4", C, false)), "Text"))], C)));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["v_RELATIVE_TASK", (await $.mv((await $.wv([$t1], "edit3", C, false)), "Text"))], C)));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["v_RELATIVE_SALARY", (await $.mv((await $.wv([$t1], "edit5", C, false)), "Text"))], C)));
    await $.stmt($.wcall([$t1], "open", [], C));
  }
  await $.mcall((await $.mv((await $.v(C, "OracleDataSet2")), "Session")), "Commit", []);
  await $.mcall((await $.mv((await $.v(C, "Cust_contact")), "oracledataset1")), "Refresh", []);
  await $.mcall((await $.v(C, "edit1")), "Clear", []);
  await $.mcall((await $.v(C, "edit2")), "Clear", []);
  await $.mcall((await $.v(C, "edit3")), "Clear", []);
  await $.mcall((await $.v(C, "edit4")), "Clear", []);
  await $.mcall((await $.v(C, "edit5")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCust_contact", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "OracleDataSet3"));
    await $.stmt($.wcall([$t2], "close", [], C));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["v_custid", (await $.wv([$t2], "cust_relatives", C, false))], C)));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["v_RELATIVE_FULLNAME", (await $.mv((await $.wv([$t2], "edit2", C, false)), "Text"))], C)));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["v_RELATIVE_WORK", (await $.mv((await $.wv([$t2], "edit1", C, false)), "Text"))], C)));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["v_RELATIVE_DEGREE", (await $.mv((await $.wv([$t2], "edit4", C, false)), "Text"))], C)));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["v_RELATIVE_TASK", (await $.mv((await $.wv([$t2], "edit3", C, false)), "Text"))], C)));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["v_RELATIVE_SALARY", (await $.mv((await $.wv([$t2], "edit5", C, false)), "Text"))], C)));
    await $.stmt($.wcall([$t2], "open", [], C));
  }
  await $.mcall((await $.mv((await $.v(C, "OracleDataSet3")), "Session")), "Commit", []);
  {
    const $t3 = (await $.v(C, "oracledataset1"));
    await $.stmt($.wcall([$t3], "close", [], C));
    await $.stmt((await $.wcall([$t3], "SetVariable", ["v_custid", (await $.wv([$t3], "cust_relatives", C, false))], C)));
    await $.stmt($.wcall([$t3], "open", [], C));
  }
  await $.mcall((await $.v(C, "edit1")), "Clear", []);
  await $.mcall((await $.v(C, "edit2")), "Clear", []);
  await $.mcall((await $.v(C, "edit3")), "Clear", []);
  await $.mcall((await $.v(C, "edit4")), "Clear", []);
  await $.mcall((await $.v(C, "edit5")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCust_contact", "XFButton3Click", async function XFButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "OracleDataSet4"));
    await $.stmt($.wcall([$t4], "close", [], C));
    await $.stmt((await $.wcall([$t4], "SetVariable", ["v_id", (await $.mv((await $.wv([$t4], "OracleDataSet1id", C, false)), "asinteger"))], C)));
    await $.stmt($.wcall([$t4], "open", [], C));
  }
  await $.mcall((await $.mv((await $.v(C, "OracleDataSet4")), "Session")), "Commit", []);
  await $.mcall((await $.v(C, "oracledataset1")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
