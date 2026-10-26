// Generated from ReportImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ReportImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "CMExcelExport", "DMprop"]);
  const C = [U];
  U.defClass("TReportFrm", "TForm", {"radiogrpcont": {"name": "RadioGrpCont", "type": "TRadioGroup"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}}, {});
  U.init(async () => {
    U.var_("ReportFrm", null, "TReportFrm");
  });
  U.method("TReportFrm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "DMproperties")), "ReportDataSet"));
    if ($.truthy($.eq((await $.mv((await $.wv([$t1], "RadioGrpCont", C, false)), "ItemIndex")), 0))) {
      await $.stmt($.wcall([$t1], "Close", [], C));
      { const $t2 = await $.iset((await $.wv([$t1], "SQL", C, false)), [23], ""); if ($t2 !== undefined) { await $.wset([$t1], "SQL", $t2, C); } }
      { const $t3 = await $.iset((await $.wv([$t1], "SQL", C, false)), [23], " and a.status=0"); if ($t3 !== undefined) { await $.wset([$t1], "SQL", $t3, C); } }
      await $.stmt($.wcall([$t1], "Open", [], C));
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t1], "RadioGrpCont", C, false)), "ItemIndex")), 1))) {
      await $.stmt($.wcall([$t1], "Close", [], C));
      { const $t4 = await $.iset((await $.wv([$t1], "SQL", C, false)), [23], ""); if ($t4 !== undefined) { await $.wset([$t1], "SQL", $t4, C); } }
      { const $t5 = await $.iset((await $.wv([$t1], "SQL", C, false)), [23], " and a.status=1"); if ($t5 !== undefined) { await $.wset([$t1], "SQL", $t5, C); } }
      await $.stmt($.wcall([$t1], "Open", [], C));
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t1], "RadioGrpCont", C, false)), "ItemIndex")), 2))) {
      await $.stmt($.wcall([$t1], "Close", [], C));
      { const $t6 = await $.iset((await $.wv([$t1], "SQL", C, false)), [23], ""); if ($t6 !== undefined) { await $.wset([$t1], "SQL", $t6, C); } }
      await $.stmt($.wcall([$t1], "Open", [], C));
    }
  }
  {
    const $t7 = (await $.v(C, "ExcelExport"));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t7], "DMproperties", C, false)), "ReportDataSet")), "RecordCount")), 0))) {
      await $.stmt((await $.wcall([$t7], "ShowMessage", ["Heç bir məlumat tapılmadı "], C)));
      return L0.result;
    }
    await $.stmt($.wcall([$t7], "Connect", [], C));
    await $.stmt((await $.wcall([$t7], "ExportDataset", [(await $.mv((await $.wv([$t7], "DMproperties", C, false)), "ReportDataSet")), " əmlaklar barədə hesabat", (await $.wv([$t7], "True", C, false))], C)));
    await $.stmt($.wcall([$t7], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TReportFrm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TReportFrm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  return U;
}
