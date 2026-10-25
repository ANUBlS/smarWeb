// Generated from AccStatesImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AccStatesImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "ComCtrls", "Grids", "DBGrids", "Db", "OracleData", "ExcelExporter", "sboapiDataModuleImpl", "AccountDataModuleImpl"]);
  const C = [U];
  U.defClass("TAccStatesForm", "TForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "closebutton": {"name": "CloseButton", "type": "TButton"}, "accamountsheet": {"name": "AccAmountSheet", "type": "TTabSheet"}, "accturnoversheet": {"name": "AccTurnoverSheet", "type": "TTabSheet"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "accstatedata": {"name": "AccStateData", "type": "TOracleDataSet"}, "accstate": {"name": "AccState", "type": "TDataSource"}, "accstatedataaccid": {"name": "AccStateDataACCID", "type": "TFloatField"}, "accstatedataamount": {"name": "AccStateDataAMOUNT", "type": "TFloatField"}, "accstatedatalamount": {"name": "AccStateDataLAMOUNT", "type": "TFloatField"}, "accstatedatadebitturnover": {"name": "AccStateDataDEBITTURNOVER", "type": "TFloatField"}, "accstatedatadebitlturnover": {"name": "AccStateDataDEBITLTURNOVER", "type": "TFloatField"}, "accstatedatacreditturnover": {"name": "AccStateDataCREDITTURNOVER", "type": "TFloatField"}, "accstatedatacreditlturnover": {"name": "AccStateDataCREDITLTURNOVER", "type": "TFloatField"}, "accstatedataarchivedate": {"name": "AccStateDataARCHIVEDATE", "type": "TDateTimeField"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "accstateexporter": {"name": "AccStateExporter", "type": "TExcelExporter"}}, {});
  U.init(async () => {
    U.var_("AccStatesForm", null, "TAccStatesForm");
  });
  U.method("TAccStatesForm", "CloseButtonClick", async function CloseButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccStatesForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccStatesForm", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F3"))))) {
    {
      const $t1 = (await $.v(C, "AccStateExporter"));
      if ($.truthy((await $.and_((await $.mv((await $.mv((await $.wv([$t1], "ExportSource", C, false)), "DataSet")), "Active")), async () => ($.gt((await $.mv((await $.mv((await $.wv([$t1], "ExportSource", C, false)), "DataSet")), "RecordCount")), 0)))))) {
        await $.stmt($.wcall([$t1], "Report", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  return U;
}
