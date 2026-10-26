// Generated from UnitChoice.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitChoice", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "Buttons", "CMExcelExport", "UnitData", "MainResourceImpl", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormChoice", "TForm", {"datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "tax": {"name": "Tax", "type": "TRadioButton"}, "finance": {"name": "Finance", "type": "TRadioButton"}, "ok1": {"name": "ok1", "type": "TBitBtn"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("FormChoice", null, "TFormChoice");
    U.var_("a", 0, "TDatetime");
    U.var_("b", 0, "TDatetime");
  });
  U.method("TFormChoice", "ok1Click", async function ok1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": 0, "b": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["a"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]));
  L0["b"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]))]));
  if ($.truthy((await $.mv((await $.v(C, "tax")), "Checked")))) {
    {
      const $t1 = (await $.mv((await $.v(C, "DataModWares")), "OracleDataSet2"));
      await $.stmt($.wcall([$t1], "close", [], C));
      await $.stmt((await $.wcall([$t1], "SetVariable", ["BDATE", (await $.wv([$t1], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t1], "SetVariable", ["EDATE", (await $.wv([$t1], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1], "open", [], C));
    }
    {
      const $t2 = (await $.v(C, "CMExcelExport1"));
      await $.stmt($.wcall([$t2], "Connect", [], C));
      await $.stmt((await $.wcall([$t2], "ExportDataset", [(await $.mv((await $.wv([$t2], "DataModWares", C, false)), "OracleDataSet2")), "Maliyye", (await $.wv([$t2], "True", C, false))], C)));
      await $.stmt($.wcall([$t2], "Disconnect", [], C));
    }
  } else {
    if ($.truthy((await $.mv((await $.v(C, "Finance")), "Checked")))) {
      {
        const $t3 = (await $.mv((await $.v(C, "DataModWares")), "OracleDataSet3"));
        await $.stmt($.wcall([$t3], "close", [], C));
        await $.stmt((await $.wcall([$t3], "SetVariable", ["BDATE", (await $.wv([$t3], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))], C)));
        await $.stmt((await $.wcall([$t3], "SetVariable", ["EDATE", (await $.wv([$t3], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false))], C)));
        await $.stmt($.wcall([$t3], "open", [], C));
      }
      {
        const $t4 = (await $.v(C, "CMExcelExport1"));
        await $.stmt($.wcall([$t4], "Connect", [], C));
        await $.stmt((await $.wcall([$t4], "ExportDataset", [(await $.mv((await $.wv([$t4], "DataModWares", C, false)), "OracleDataSet3")), "Vergi", (await $.wv([$t4], "True", C, false))], C)));
        await $.stmt($.wcall([$t4], "Disconnect", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormChoice", "DateTimePicker2Change", async function DateTimePicker2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker1")), "MaxDate", (await $.mv((await $.v(C, "DateTimePicker2")), "Date")));
  await $.mset((await $.v(C, "DateTimePicker2")), "MinDate", (await $.mv((await $.v(C, "DateTimePicker1")), "Date")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormChoice", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.mv((await $.v(C, "DataModWares")), "SysdatSet"));
    await $.stmt($.wcall([$t5], "open", [], C));
    await $.mset((await $.wv([$t5], "DateTimePicker1", C, false)), "DateTime", (await $.mv((await $.wcall([$t5], "fieldbyname", ["tek_dat"], C)), "asdatetime")));
    await $.mset((await $.wv([$t5], "DateTimePicker2", C, false)), "DateTime", (await $.mv((await $.wcall([$t5], "fieldbyname", ["tek_dat"], C)), "asdatetime")));
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormChoice", "DateTimePicker1Change", async function DateTimePicker1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker1")), "MaxDate", (await $.mv((await $.v(C, "DateTimePicker2")), "Date")));
  await $.mset((await $.v(C, "DateTimePicker2")), "MinDate", (await $.mv((await $.v(C, "DateTimePicker1")), "Date")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormChoice", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
