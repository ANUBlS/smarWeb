// Generated from frmReportTypeImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmReportTypeImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "Buttons", "CMExcelExport", "ReportImpl", "ScheduleMainFormImpl", "ScheduleDataModuleImpl", "CommonDecls"]);
  const C = [U];
  U.defClass("TfrmReportType", "TForm", {"rgreport": {"name": "RGReport", "type": "TRadioGroup"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}}, {});
  U.init(async () => {
    U.var_("frmReportType", null, "TfrmReportType");
  });
  U.method("TfrmReportType", "CalcFullIntpayment", async function CalcFullIntpayment(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = 0;
  {
    const $t1 = (await $.v(C, "ScheduleDataModule"));
    const $t2 = (await $.wv([$t1], "ScheduleData", C, false));
    await $.stmt($.wcall([$t1, $t2], "First", [], C));
    while ($.truthy($.not((await $.wv([$t1, $t2], "EOF", C, false))))) {
      await $.wset([$t1, $t2], "result", $.add((await $.wv([$t1, $t2], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["INTEREST"], C)), "AsFloat"))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      await $.stmt($.wcall([$t1, $t2], "Next", [], C));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmReportType", "exportreport", async function exportreport(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "factint": 0, "s": ''};
  {
    const $t3 = (await $.v(C, "ScheduleDataModule"));
    const $t4 = (await $.wv([$t3], "CreditInfo", C, false));
    await $.wset([$t3, $t4], "factint", $.mul(($.fdiv((await $.wv([$t3, $t4], "CalcFullIntpayment", C, false)), (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["CREDITLINEAMOUNT"], C)), "AsFloat")))), 100), { get: async () => L0["factint"], set: async (v) => { L0["factint"] = v; }, local: true });
    await $.wset([$t3, $t4], "s", (await $.wcall([$t3, $t4], "FloatToStr", [(await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["ANNUALYINTERESTRATE1"], C)), "AsFloat"))], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
  }
  {
    const $t5 = (await $.v(C, "ReportForm"));
    await $.mset((await $.wv([$t5], "ANNUALYINTERESTRATE", C, false)), "Caption", $.add((await $.wv([$t5], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), "%"));
    await $.mset((await $.wv([$t5], "FullIntPayment", C, false)), "Caption", (await $.wcall([$t5], "FloatToStr", [(await $.wv([$t5], "CalcFullIntpayment", C, false))], C)));
    await $.wset([$t5], "s", (await $.wcall([$t5], "Floattostr", [(await $.wv([$t5], "factint", { get: async () => L0["factint"], set: async (v) => { L0["factint"] = v; }, local: true }, false))], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
    await $.mcall((await $.wv([$t5], "QrpfrmRep", C, false)), "Preview", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmReportType", "exportexel", async function exportexel(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t6 = (await $.v(C, "ScheduleDataModule"));
    const $t7 = (await $.wv([$t6], "ExportData", C, false));
    if ($.truthy((await $.wv([$t6, $t7], "Active", C, false)))) {
      await $.stmt($.wcall([$t6, $t7], "close", [], C));
    }
    await $.stmt((await $.wcall([$t6, $t7], "setvariable", ["Creditid", (await $.wv([$t6, $t7], "Get_SelectedCrdID", C, false))], C)));
    await $.stmt($.wcall([$t6, $t7], "open", [], C));
    {
      const $t8 = (await $.wv([$t6, $t7], "ExcelExport", C, false));
      await $.stmt($.wcall([$t6, $t7, $t8], "connect", [], C));
      await $.stmt((await $.wcall([$t6, $t7, $t8], "ExportDataset", [(await $.wv([$t6, $t7, $t8], "ExportData", C, false)), "Ödəmə planı", (await $.wv([$t6, $t7, $t8], "true", C, false)), (await $.wv([$t6, $t7, $t8], "false", C, false))], C)));
      await $.stmt($.wcall([$t6, $t7, $t8], "Disconnect", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmReportType", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmReportType", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmReportType", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmReportType", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.v(C, "RGReport"));
    { const $t10 = (await $.wv([$t9], "ItemIndex", C, false));
      if ($.eq($t10, 0)) {
        await $.stmt($.wcall([$t9], "exportreport", [], C));
      }
      else if ($.eq($t10, 1)) {
        await $.stmt($.wcall([$t9], "exportexel", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
