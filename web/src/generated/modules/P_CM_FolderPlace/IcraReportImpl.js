// Generated from IcraReportImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("IcraReportImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "Grids", "XDBGrids", "Buttons", "CMExcelExport", "FlReCalculationDataModuleImpl"]);
  const C = [U];
  U.defClass("TIcraReportFrm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}}, {});
  U.init(async () => {
    U.var_("IcraReportFrm", null, "TIcraReportFrm");
  });
  U.method("TIcraReportFrm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TIcraReportFrm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "ExcelExport"));
    await $.stmt($.wcall([$t1], "Connect", [], C));
    await $.stmt((await $.wcall([$t1], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t1], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "Odenishler", (await $.wv([$t1], "True", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
