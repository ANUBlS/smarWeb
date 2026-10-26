// Generated from PrPayFrmImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PrPayFrmImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "DBGridEhGrouping", "GridsEh", "DBGridEh", "CMExcelExport", "PrCmDMImpl"]);
  const C = [U];
  U.defClass("TPrPayFrm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}}, {});
  U.init(async () => {
    U.var_("PrPayFrm", null, "TPrPayFrm");
  });
  U.method("TPrPayFrm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "bdat": 0, "edat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["bdat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]));
  L0["edat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]))]));
  {
    const $t1 = (await $.mv((await $.v(C, "PrCmDM")), "PaymentReport"));
    if ($.truthy((await $.wv([$t1], "Active", C, false)))) {
      await $.stmt($.wcall([$t1], "close", [], C));
    }
    await $.stmt((await $.wcall([$t1], "SetVariable", ["bdat", (await $.wv([$t1], "Bdat", { get: async () => L0["bdat"], set: async (v) => { L0["bdat"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["edat", (await $.wv([$t1], "Edat", { get: async () => L0["edat"], set: async (v) => { L0["edat"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrPayFrm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t2], "Connect", [], C));
    await $.stmt((await $.wcall([$t2], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t2], "DBGridEh1", C, false)), "DataSource")), "DataSet")), "Odenishler", (await $.wv([$t2], "True", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrPayFrm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", $.sub((await $.v(C, "now")), 30));
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.v(C, "now")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
