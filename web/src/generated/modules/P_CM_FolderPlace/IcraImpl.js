// Generated from IcraImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("IcraImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "ComCtrls", "StdCtrls", "Grids", "XDBGrids", "CMExcelExport", "FlReCalculationDataModuleImpl", "IcraReportImpl", "ReCalculationMainForm"]);
  const C = [U];
  U.defClass("TIcraFrm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "button1": {"name": "Button1", "type": "TButton"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "button2": {"name": "Button2", "type": "TButton"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}}, {});
  U.init(async () => {
    U.var_("IcraFrm", null, "TIcraFrm");
  });
  U.method("TIcraFrm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "PRDataModule"));
    const $t2 = (await $.wv([$t1], "CalculatorPackage", C, false));
    await $.mcall((await $.mv((await $.wv([$t1, $t2], "OracleDataSet12", C, false)), "Session")), "Commit", []);
    await $.mcall((await $.mv((await $.wv([$t1, $t2], "OracleDataSet15", C, false)), "Session")), "Commit", []);
    if ($.truthy($.eq((await $.wv([$t1, $t2], "reptype", C, false)), 0))) {
      await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["rep_pksh", ["p_bdat", (await $.mv((await $.wv([$t1, $t2], "DateTimePicker1", C, false)), "DateTime")), "p_edat", (await $.mv((await $.wv([$t1, $t2], "DateTimePicker2", C, false)), "DateTime"))]], C)));
    }
    if ($.truthy($.eq((await $.wv([$t1, $t2], "reptype", C, false)), 1))) {
      await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["rep_pksh_afto", ["p_bdat", (await $.mv((await $.wv([$t1, $t2], "DateTimePicker1", C, false)), "DateTime")), "p_edat", (await $.mv((await $.wv([$t1, $t2], "DateTimePicker2", C, false)), "DateTime"))]], C)));
    }
    if ($.truthy($.eq((await $.wv([$t1, $t2], "reptype", C, false)), 2))) {
      await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["rep_icra", ["p_bdat", (await $.mv((await $.wv([$t1, $t2], "DateTimePicker1", C, false)), "DateTime")), "p_edat", (await $.mv((await $.wv([$t1, $t2], "DateTimePicker2", C, false)), "DateTime"))]], C)));
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t1, $t2], "OracleDataSet12", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t1, $t2], "OracleDataSet12", C, false)), "Open", []);
    } else {
      await $.mcall((await $.wv([$t1, $t2], "OracleDataSet12", C, false)), "Refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TIcraFrm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.wobj(C, "ExcelExport"));
    await $.stmt($.wcall([$t3], "Connect", [], C));
    await $.stmt((await $.wcall([$t3], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t3], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "Interests", (await $.wv([$t3], "True", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TIcraFrm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.v(C, "now")));
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.v(C, "now")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TIcraFrm", "XDBGrid1DblClick", async function XDBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet12")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Öncə hesablama verin !"])));
    return L0.result;
  }
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "IcraReportFrm"))]))))) {
    await $.set(C, "IcraReportFrm", (await $.mcall((await $.v(C, "TIcraReportFrm")), "Create", [Self])));
  }
  if ($.truthy($.eq((await $.v(C, "reptype")), 2))) {
    {
      const $t4 = (await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet15"));
      await $.mset((await $.mv((await $.wv([$t4], "IcraReportFrm", C, false)), "XDBGrid1")), "DataSource", (await $.mv((await $.wv([$t4], "PRDataModule", C, false)), "DataSource15")));
      if ($.truthy((await $.wv([$t4], "active", C, false)))) {
        await $.stmt($.wcall([$t4], "close", [], C));
      }
      await $.stmt((await $.wcall([$t4], "SetVariable", ["bdat", (await $.wcall([$t4], "integer", [(await $.wcall([$t4], "trunc", [(await $.mv((await $.wv([$t4], "DateTimePicker1", C, false)), "DateTime"))], C))], C))], C)));
      await $.stmt((await $.wcall([$t4], "SetVariable", ["edat", (await $.wcall([$t4], "integer", [(await $.wcall([$t4], "trunc", [(await $.mv((await $.wv([$t4], "DateTimePicker2", C, false)), "DateTime"))], C))], C))], C)));
      await $.stmt((await $.wcall([$t4], "SetVariable", ["usid", (await $.mv((await $.mcall((await $.mv((await $.wv([$t4], "PRDataModule", C, false)), "OracleDataSet12")), "FieldByName", ["usid"])), "AsInteger"))], C)));
      await $.stmt($.wcall([$t4], "open", [], C));
      if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t4], "PRDataModule", C, false)), "OracleDataSet15")), "RecordCount")), 0))) {
        await $.stmt((await $.wcall([$t4], "ShowMessage", ["Ödəniş yoxdur !"], C)));
        return L0.result;
      }
    }
  }
  if ($.truthy($.eq((await $.v(C, "reptype")), 1))) {
    {
      const $t5 = (await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet16"));
      await $.mset((await $.mv((await $.wv([$t5], "IcraReportFrm", C, false)), "XDBGrid1")), "DataSource", (await $.mv((await $.wv([$t5], "PRDataModule", C, false)), "DataSource16")));
      if ($.truthy((await $.wv([$t5], "active", C, false)))) {
        await $.stmt($.wcall([$t5], "close", [], C));
      }
      await $.stmt((await $.wcall([$t5], "SetVariable", ["bdat", (await $.wcall([$t5], "integer", [(await $.wcall([$t5], "trunc", [(await $.mv((await $.wv([$t5], "DateTimePicker1", C, false)), "DateTime"))], C))], C))], C)));
      await $.stmt((await $.wcall([$t5], "SetVariable", ["edat", (await $.wcall([$t5], "integer", [(await $.wcall([$t5], "trunc", [(await $.mv((await $.wv([$t5], "DateTimePicker2", C, false)), "DateTime"))], C))], C))], C)));
      await $.stmt((await $.wcall([$t5], "SetVariable", ["usid", (await $.mv((await $.mcall((await $.mv((await $.wv([$t5], "PRDataModule", C, false)), "OracleDataSet12")), "FieldByName", ["usid"])), "AsInteger"))], C)));
      await $.stmt($.wcall([$t5], "open", [], C));
      if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t5], "PRDataModule", C, false)), "OracleDataSet16")), "RecordCount")), 0))) {
        await $.stmt((await $.wcall([$t5], "ShowMessage", ["Ödəniş yoxdur !"], C)));
        return L0.result;
      }
    }
  }
  if ($.truthy($.eq((await $.v(C, "reptype")), 0))) {
    {
      const $t6 = (await $.mv((await $.v(C, "PRDataModule")), "OracleDataSet16"));
      await $.mset((await $.mv((await $.wv([$t6], "IcraReportFrm", C, false)), "XDBGrid1")), "DataSource", (await $.mv((await $.wv([$t6], "PRDataModule", C, false)), "DataSource16")));
      if ($.truthy((await $.wv([$t6], "active", C, false)))) {
        await $.stmt($.wcall([$t6], "close", [], C));
      }
      await $.stmt((await $.wcall([$t6], "SetVariable", ["bdat", (await $.wcall([$t6], "integer", [(await $.wcall([$t6], "trunc", [(await $.mv((await $.wv([$t6], "DateTimePicker1", C, false)), "DateTime"))], C))], C))], C)));
      await $.stmt((await $.wcall([$t6], "SetVariable", ["edat", (await $.wcall([$t6], "integer", [(await $.wcall([$t6], "trunc", [(await $.mv((await $.wv([$t6], "DateTimePicker2", C, false)), "DateTime"))], C))], C))], C)));
      await $.stmt((await $.wcall([$t6], "SetVariable", ["usid", (await $.mv((await $.mcall((await $.mv((await $.wv([$t6], "PRDataModule", C, false)), "OracleDataSet12")), "FieldByName", ["usid"])), "AsInteger"))], C)));
      await $.stmt($.wcall([$t6], "open", [], C));
      if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t6], "PRDataModule", C, false)), "OracleDataSet16")), "RecordCount")), 0))) {
        await $.stmt((await $.wcall([$t6], "ShowMessage", ["Ödəniş yoxdur !"], C)));
        return L0.result;
      }
    }
  }
  await $.mcall((await $.v(C, "IcraReportFrm")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
