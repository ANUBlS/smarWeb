// Generated from ControlFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ControlFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Buttons", "CMExcelExport", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "ComCtrls", "DBCtrls", "commondecls", "ControlDatModImpl", "sbsystem"]);
  const C = [U];
  U.defClass("TFormControl", "TForm", {"cmexcelexport": {"name": "CMExcelExport", "type": "TCMExcelExport"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "label5": {"name": "Label5", "type": "TLabel"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "bitbtn4": {"name": "BitBtn4", "type": "TBitBtn"}, "datetimepicker3": {"name": "DateTimePicker3", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "button1": {"name": "Button1", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("FormControl", null, "TFormControl");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "FormControl")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFormControl", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "bdat": 0, "edat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["bdat"] = (await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"));
  L0["edat"] = (await $.mv((await $.v(C, "DateTimePicker3")), "DateTime"));
  {
    const $t1 = (await $.wobj(C, "ControlDatMod"));
    const $t2 = (await $.wv([$t1], "OracleDataSet1", C, false));
    await $.wset([$t1, $t2], "Cursor", (await $.wv([$t1, $t2], "crSQLWait", C, false)), C);
    if ($.truthy((await $.wv([$t1, $t2], "Active", C, false)))) {
      await $.stmt($.wcall([$t1, $t2], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["bdat", (await $.wv([$t1, $t2], "Bdat", { get: async () => L0["bdat"], set: async (v) => { L0["bdat"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["edat", (await $.wv([$t1, $t2], "Edat", { get: async () => L0["edat"], set: async (v) => { L0["edat"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    if ($.truthy($.eq((await $.wv([$t1, $t2], "RecordCount", C, false)), 0))) {
      await $.stmt((await $.wcall([$t1, $t2], "ShowMessage", ["Hecbir ferq yoxdur !"], C)));
      return L0.result;
    }
    {
      const $t3 = (await $.wv([$t1, $t2], "CMExcelExport", C, false));
      await $.stmt($.wcall([$t1, $t2, $t3], "Connect", [], C));
      await $.stmt((await $.wcall([$t1, $t2, $t3], "ExportDataset", [(await $.wv([$t1, $t2, $t3], "OracleDataSet1", C, false)), "Nəticələr", (await $.wv([$t1, $t2, $t3], "true", C, false))], C)));
      await $.stmt($.wcall([$t1, $t2, $t3], "Disconnect", [], C));
    }
    await $.wset([$t1, $t2], "Cursor", (await $.wv([$t1, $t2], "crDefault", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormControl", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "ControlDatMod")), "OracleDataSet2")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "ControlDatMod")), "OracleDataSet2")), "open", []);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "ControlDatMod")), "OracleDataSet2")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Bu günə bütün faizlər hesablanıb !"])));
    return L0.result;
  }
  {
    const $t4 = (await $.wobj(C, "CMExcelExport"));
    await $.stmt($.wcall([$t4], "Connect", [], C));
    await $.stmt((await $.wcall([$t4], "ExportDataset", [(await $.mv((await $.wv([$t4], "ControlDatMod", C, false)), "OracleDataSet2")), "Nəticələr", (await $.wv([$t4], "true", C, false))], C)));
    await $.stmt($.wcall([$t4], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormControl", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFormControl", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CMExcelExport")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormControl", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormControl", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "branchid": 0, "contdate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["branchid"] = (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"));
  L0["contdate"] = (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"));
  {
    const $t5 = (await $.wobj(C, "ControlDatMod"));
    const $t6 = (await $.wv([$t5], "CM_CONTROL", C, false));
    const $t7 = (await $.wv([$t5, $t6], "ResultsDatSet", C, false));
    await $.mcall((await $.wv([$t5, $t6, $t7], "Session", C, false)), "Commit", []);
    await $.wset([$t5, $t6, $t7], "Cursor", (await $.wv([$t5, $t6, $t7], "crSQLWait", C, false)), C);
    if ($.truthy($.lt((await $.wv([$t5, $t6, $t7], "BranchID", { get: async () => L0["branchid"], set: async (v) => { L0["branchid"] = v; }, local: true }, false)), 0))) {
      await $.stmt((await $.wcall([$t5, $t6, $t7], "callprocedure", ["control_full", [(await $.wv([$t5, $t6, $t7], "BranchID", { get: async () => L0["branchid"], set: async (v) => { L0["branchid"] = v; }, local: true }, false)), (await $.wv([$t5, $t6, $t7], "ContDate", { get: async () => L0["contdate"], set: async (v) => { L0["contdate"] = v; }, local: true }, false))]], C)));
    } else {
      await $.stmt((await $.wcall([$t5, $t6, $t7], "callprocedure", ["control", [(await $.wv([$t5, $t6, $t7], "BranchID", { get: async () => L0["branchid"], set: async (v) => { L0["branchid"] = v; }, local: true }, false)), (await $.wv([$t5, $t6, $t7], "ContDate", { get: async () => L0["contdate"], set: async (v) => { L0["contdate"] = v; }, local: true }, false))]], C)));
    }
    if ($.truthy((await $.wv([$t5, $t6, $t7], "Active", C, false)))) {
      await $.stmt($.wcall([$t5, $t6, $t7], "CloseAll", [], C));
    }
    await $.stmt($.wcall([$t5, $t6, $t7], "Open", [], C));
    if ($.truthy($.eq((await $.mv((await $.wv([$t5, $t6, $t7], "ResultsDatSet", C, false)), "RecordCount")), 0))) {
      await $.stmt((await $.wcall([$t5, $t6, $t7], "ShowMessage", ["Heç bir məlumat tapılmadı "], C)));
      return L0.result;
    }
    {
      const $t8 = (await $.wv([$t5, $t6, $t7], "CMExcelExport", C, false));
      await $.stmt($.wcall([$t5, $t6, $t7, $t8], "Connect", [], C));
      await $.stmt((await $.wcall([$t5, $t6, $t7, $t8], "ExportDataset", [(await $.wv([$t5, $t6, $t7, $t8], "ResultsDatSet", C, false)), "Nəticələr", (await $.wv([$t5, $t6, $t7, $t8], "true", C, false))], C)));
    }
    await $.wset([$t5, $t6, $t7], "Cursor", (await $.wv([$t5, $t6, $t7], "crDefault", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormControl", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "DateTimePicker3")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.set(C, "ControlDatMod", (await $.mcall((await $.v(C, "TControlDatMod")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "ControlDatMod")), "Branchs")), "Open", []);
  await $.mset((await $.v(C, "DBLookupCombobox1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ControlDatMod")), "Branchs")), "FieldByname", ["ID"])), "asinteger")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormControl", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ControlDatMod")), "free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FormControl", (await $.mcall((await $.v(C, "TFormControl")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
