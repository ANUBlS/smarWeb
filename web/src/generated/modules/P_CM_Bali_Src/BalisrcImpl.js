// Generated from BaliSrcImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("BaliSrcImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "StdCtrls", "ExtCtrls", "Buttons", "Db", "OracleData", "sboapiDataModuleImpl", "CommonDecls", "sbsystem", "FrmBaliImpl"]);
  const C = [U];
  U.defClass("TBali", "TForm", {"panel2": {"name": "Panel2", "type": "TPanel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset1rownum": {"name": "OracleDataSet1ROWNUM", "type": "TFloatField"}, "oracledataset1numberofcredit": {"name": "OracleDataSet1NUMBEROFCREDIT", "type": "TWideStringField"}, "oracledataset1boorowerid": {"name": "OracleDataSet1BOOROWERID", "type": "TWideStringField"}, "oracledataset1name": {"name": "OracleDataSet1NAME", "type": "TWideStringField"}, "oracledataset1val_name": {"name": "OracleDataSet1VAL_NAME", "type": "TWideStringField"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset1creditlineamount": {"name": "OracleDataSet1CREDITLINEAMOUNT", "type": "TFloatField"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "oracledataset2rownum": {"name": "OracleDataSet2ROWNUM", "type": "TFloatField"}, "oracledataset2numberofcredit": {"name": "OracleDataSet2NUMBEROFCREDIT", "type": "TWideStringField"}, "oracledataset2val_name": {"name": "OracleDataSet2VAL_NAME", "type": "TWideStringField"}, "oracledataset2creditlineamount": {"name": "OracleDataSet2CREDITLINEAMOUNT", "type": "TFloatField"}, "oracledataset2dateofconclusion": {"name": "OracleDataSet2DATEOFCONCLUSION", "type": "TDateTimeField"}, "oracledataset2duedatefirstcontract": {"name": "OracleDataSet2DUEDATEFIRSTCONTRACT", "type": "TDateTimeField"}, "oracledataset2phonenumber": {"name": "OracleDataSet2PHONENUMBER", "type": "TWideStringField"}, "oracledataset2salary": {"name": "OracleDataSet2SALARY", "type": "TWideStringField"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset2id": {"name": "OracleDataSet2ID", "type": "TFloatField"}, "datasource3": {"name": "DataSource3", "type": "TDataSource"}, "oracledataset3": {"name": "OracleDataSet3", "type": "TOracleDataSet"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "oracledataset3rownum": {"name": "OracleDataSet3ROWNUM", "type": "TFloatField"}, "oracledataset3id": {"name": "OracleDataSet3ID", "type": "TFloatField"}, "oracledataset3boorowerid": {"name": "OracleDataSet3BOOROWERID", "type": "TWideStringField"}, "oracledataset3numberofcredit": {"name": "OracleDataSet3NUMBEROFCREDIT", "type": "TWideStringField"}, "oracledataset3name": {"name": "OracleDataSet3NAME", "type": "TWideStringField"}, "oracledataset3val_name": {"name": "OracleDataSet3VAL_NAME", "type": "TWideStringField"}, "oracledataset3guarantorsalary": {"name": "OracleDataSet3GUARANTORSALARY", "type": "TWideStringField"}, "oracledataset3guarantorname": {"name": "OracleDataSet3GUARANTORNAME", "type": "TWideStringField"}, "oracledataset3creditlineamount": {"name": "OracleDataSet3CREDITLINEAMOUNT", "type": "TFloatField"}, "oracledataset3dateofconclusion": {"name": "OracleDataSet3DATEOFCONCLUSION", "type": "TDateTimeField"}, "oracledataset3duedatefirstcontract": {"name": "OracleDataSet3DUEDATEFIRSTCONTRACT", "type": "TDateTimeField"}, "oracledataset3phonenumber": {"name": "OracleDataSet3PHONENUMBER", "type": "TWideStringField"}, "oracledataset3salary": {"name": "OracleDataSet3SALARY", "type": "TWideStringField"}, "oracledataset3zaminwork1": {"name": "OracleDataSet3ZAMINWORK1", "type": "TWideStringField"}, "oracledataset3pincode": {"name": "OracleDataSet3PINCODE", "type": "TWideStringField"}, "oracledataset3rest": {"name": "OracleDataSet3REST", "type": "TFloatField"}, "oracledataset3interestrest": {"name": "OracleDataSet3INTERESTREST", "type": "TFloatField"}, "oracledataset3zamintel1": {"name": "OracleDataSet3ZAMINTEL1", "type": "TWideStringField"}, "oracledataset3custname": {"name": "OracleDataSet3CUSTNAME", "type": "TWideStringField"}, "oracledataset1rest": {"name": "OracleDataSet1REST", "type": "TFloatField"}, "oracledataset1interestrest": {"name": "OracleDataSet1INTERESTREST", "type": "TFloatField"}, "oracledataset1exp": {"name": "OracleDataSet1EXP", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("Bali", null, "TBali");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "Bali")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TBali", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TBali", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TBali", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "cust": '', "all": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit1")), "text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Axtarılmalı olanı daxil edin !"])));
  }
  L0["cust"] = "";
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox1")), "ItemIndex")), 0))) {
    await $.mset((await $.v(C, "Edit2")), "Text", (await $.mv((await $.v(C, "Edit1")), "Text")));
    {
      const $t1 = (await $.wobj(C, "Edit2"));
      await $.wset([$t1], "Text", (await $.wcall([$t1], "StringReplace", [(await $.wv([$t1], "Text", C, false)), "i", "`", [(await $.wv([$t1], "rfReplaceAll", C, false))]], C)), C);
      await $.wset([$t1], "Text", (await $.wcall([$t1], "StringReplace", [(await $.wv([$t1], "Text", C, false)), "I", "`", [(await $.wv([$t1], "rfReplaceAll", C, false))]], C)), C);
      await $.wset([$t1], "Text", (await $.wcall([$t1], "StringReplace", [(await $.wv([$t1], "Text", C, false)), "İ", "`", [(await $.wv([$t1], "rfReplaceAll", C, false))]], C)), C);
      await $.wset([$t1], "Text", (await $.wcall([$t1], "StringReplace", [(await $.wv([$t1], "Text", C, false)), "I", "`", [(await $.wv([$t1], "rfReplaceAll", C, false))]], C)), C);
      await $.wset([$t1], "Text", (await $.wcall([$t1], "StringReplace", [(await $.wv([$t1], "Text", C, false)), "ı", "`", [(await $.wv([$t1], "rfReplaceAll", C, false))]], C)), C);
    }
    L0["cust"] = $.add($.add($.add($.add($.add($.add($.add("and lower( translate(b.name,", "'IiİiIı'"), ","), "'``````'"), ")) like "), "lower('%"), (await $.mv((await $.v(C, "Edit2")), "text"))), "%')");
    await $.mset((await $.v(C, "Edit2")), "text", L0["cust"]);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox1")), "ItemIndex")), 1))) {
    L0["cust"] = $.add($.add($.add(" and lower(b.boorowerid)=", "lower('"), (await $.mv((await $.v(C, "Edit1")), "text"))), "')");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox1")), "ItemIndex")), 2))) {
    L0["cust"] = $.add($.add($.add(" and lower(b.pincode)=", "lower('"), (await $.mv((await $.v(C, "Edit1")), "text"))), "')");
  }
  {
    const $t2 = (await $.wobj(C, "OracleDataSet1"));
    await $.stmt($.wcall([$t2], "closeall", [], C));
    { const $t3 = await $.iset((await $.wv([$t2], "sql", C, false)), [6], (await $.wv([$t2], "cust", { get: async () => L0["cust"], set: async (v) => { L0["cust"] = v; }, local: true }, false))); if ($t3 !== undefined) { await $.wset([$t2], "sql", $t3, C); } }
    await $.stmt($.wcall([$t2], "open", [], C));
  }
  await $.mcall((await $.v(C, "OracleDataSet2")), "open", []);
  {
    const $t4 = (await $.wobj(C, "OracleDataSet3"));
    await $.stmt($.wcall([$t4], "closeall", [], C));
    { const $t5 = await $.iset((await $.wv([$t4], "sql", C, false)), [2], (await $.wv([$t4], "cust", { get: async () => L0["cust"], set: async (v) => { L0["cust"] = v; }, local: true }, false))); if ($t5 !== undefined) { await $.wset([$t4], "sql", $t5, C); } }
    await $.stmt($.wcall([$t4], "open", [], C));
  }
  if ($.truthy($.gt((await $.mv((await $.v(C, "OracleDataSet1")), "RecordCount")), 0))) {
    await $.mset((await $.mv((await $.v(C, "FrmBali")), "GroupBox1")), "visible", true);
    await $.mset((await $.mv((await $.v(C, "FrmBali")), "GroupBox2")), "visible", true);
  }
  if ($.truthy($.eq($.add((await $.mv((await $.v(C, "OracleDataSet1")), "RecordCount")), (await $.mv((await $.v(C, "OracleDataSet3")), "RecordCount"))), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Bele bir müştəri vəya zamin yoxdur"])));
  } else {
    await $.mcall((await $.v(C, "FrmBali")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBali", "Edit2Exit", async function Edit2Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBali", "Edit1Exit", async function Edit1Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBali", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBali", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FrmBali", (await $.mcall((await $.v(C, "TFrmBali")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBali", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
  await $.mcall((await $.v(C, "OracleDataSet2")), "close", []);
  await $.mcall((await $.v(C, "OracleDataSet3")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBali", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "edit1")), "clear", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "Bali", (await $.mcall((await $.v(C, "TBali")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
