// Generated from LogReportImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("LogReportImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "Buttons", "DBCtrls", "CMExcelExport", "admDataModule"]);
  const C = [U];
  U.defClass("TFrmLogReport", "TForm", {"bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "misexcelexport": {"name": "MisExcelExport", "type": "TCMExcelExport"}}, {});
  U.init(async () => {
    U.var_("FrmLogReport", null, "TFrmLogReport");
  });
  U.method("TFrmLogReport", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "brid": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1))))) {
    L0["brid"] = "/* */";
  } else {
    L0["brid"] = $.add("and creditid in(select id from cm_portfolio where BRANCHID=)", (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")));
  }
  {
    const $t1 = (await $.mv((await $.v(C, "admDM")), "OracleDataSet2"));
    if ($.truthy($.eq((await $.wv([$t1], "Active", C, false)), (await $.wv([$t1], "true", C, false))))) {
      await $.stmt($.wcall([$t1], "close", [], C));
    }
    { const $t2 = await $.iset((await $.wv([$t1], "sql", C, false)), [3], (await $.wv([$t1], "brid", { get: async () => L0["brid"], set: async (v) => { L0["brid"] = v; }, local: true }, false))); if ($t2 !== undefined) { await $.wset([$t1], "sql", $t2, C); } }
    await $.stmt((await $.wcall([$t1], "SetVariable", ["bdat", (await $.wcall([$t1], "integer", [(await $.wcall([$t1], "trunc", [(await $.mv((await $.wv([$t1], "DateTimePicker1", C, false)), "DateTime"))], C))], C))], C)));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["edat", (await $.wcall([$t1], "integer", [(await $.wcall([$t1], "trunc", [(await $.mv((await $.wv([$t1], "DateTimePicker2", C, false)), "DateTime"))], C))], C))], C)));
    await $.stmt($.wcall([$t1], "open", [], C));
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "admDM")), "OracleDataSet2")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Heç bir dəyşiklik yoxdur !"])));
    return L0.result;
  }
  {
    const $t3 = (await $.wobj(C, "MisExcelExport"));
    await $.stmt($.wcall([$t3], "Connect", [], C));
    await $.stmt((await $.wcall([$t3], "ExportDataset", [(await $.mv((await $.wv([$t3], "admDM", C, false)), "OracleDataSet2")), "Loqs", (await $.wv([$t3], "true", C, false)), (await $.wv([$t3], "true", C, false))], C)));
    await $.stmt($.wcall([$t3], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmLogReport", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmLogReport", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmLogReport", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "admDM", (await $.mcall((await $.v(C, "TadmDM")), "Create", [Self])));
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "admDM")), "sysdat")), "fieldbyname", ["TEK_DAT"])), "asdatetime")));
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "admDM")), "sysdat")), "fieldbyname", ["TEK_DAT"])), "asdatetime")));
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (-(1)));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
